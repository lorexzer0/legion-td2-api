import { RequestInitiator } from '../requestInitiator';
import * as gql from 'gql-query-builder';
import { PlayerDTO } from '../dtos/Player';
import {
  APIResponse,
  FilteredPlayersResponse,
  PlayerBestFriendsResponse,
  PlayerGamesResponse,
  PlayerResponse,
} from '../types/response';
import { BestFriendDTO } from '../dtos/BestFriend';
import { GameDTO } from '../dtos/Game';
import { FilteredPlayersDTO } from '../dtos/FilteredPlayers';

export class PlayersEndpoint extends RequestInitiator {
  public async search(limit: number = 10, offset: number = 0, orderby?: "name" | "id" | "avatarUrl", direction?: "ASC" | "DESC" ) {
    const query = gql.query({
      variables: {
        limit,
        offset,
        orderby,
        direction: {
          value: direction,
          type: "SortDirection",
          required: false
        }
      },
      operation: 'filteredPlayers',
      fields: [
        {
          players: ['id','name','avatarUrl']
        },
        'count'
      ]
    })

    const response = (await this._query<APIResponse<FilteredPlayersResponse>>(query)).data.filteredPlayers;
    
    const players: PlayerDTO[] = response.players.map((player => {
      return new PlayerDTO(player.id, player.name, player.avatarUrl)
    }));

    return new FilteredPlayersDTO(
      players,
      response.count,
    );
  }

  public async getByName(name: string): Promise<PlayerDTO> {
    const query = gql.query({
      variables: {
        name,
      },
      operation: 'player',
      fields: ['id', 'name', 'avatarUrl'],
    });

    const response = (await this._query<APIResponse<PlayerResponse>>(query)).data.player;
    return new PlayerDTO(response.id, response.name, response.avatarUrl);
  }

  public async getById(id: string): Promise<PlayerDTO> {
    const query = gql.query({
      variables: {
        id: {
          value: id,
          required: true,
          type: 'ID',
        },
      },
      operation: 'player',
      fields: ['id', 'name', 'avatarUrl'],
    });

    const response = (await this._query<APIResponse<PlayerResponse>>(query)).data.player;
    return new PlayerDTO(response.id, response.name, response.avatarUrl);
  }

  public async getBestFriends(id: string, limit: number = 5): Promise<BestFriendDTO[]> {
    const query = gql.query({
      operation: 'player',
      variables: {
        id: {
          value: id,
          required: true,
          type: 'ID',
        },
        limit
      },
      fields: [
        {
          bestFriends: [
            {
              player: ['id', 'name', 'avatarUrl'],
            },
            'gameCount',
          ],
        },
      ],
    });

    const response = (await this._query<APIResponse<PlayerBestFriendsResponse>>(query)).data.player
      .bestFriends;

    return response.map((bf) => {
      return new BestFriendDTO(
        new PlayerDTO(bf.player.id, bf.player.name, bf.player.avatarUrl),
        bf.gameCount,
      );
    });
  }

  public async getGames(id: string, limit: number = 5): Promise<GameDTO[]> {
    const query = gql.query({
      operation: 'player',
      variables: {
        id: {
          value: id,
          required: true,
          type: 'ID',
        },
      },
      fields: [
        {
          operation: "games",
          variables: {
            limit: {
              value: limit
            }
          },
          fields: [
            {
              games: [
                "id",
                "gameElo",
                "playerCount",
                "humanCount",
                "leftKingPercentHP",
                "rightKingPercentHP",
                "ts",
                "endingWave",
                "gameLength",
                "version",
                "queueType"
              ],
            },
            'count',
          ],
        },
      ],
    });

    const response = (await this._query<APIResponse<PlayerGamesResponse>>(query)).data.player.games;

    return response.games.map((game) => {
      return new GameDTO(
        game
      );
    });
  }
}

// THIS GETS THE 'BEST FRIENDS' FOR A PLAYER, SO IT BELONGS IN THE BESTFRIENDS ENDPOINT

// const query = gql.query({
//   operation: 'bestFriends',
//   variables: {
//     id: {
//       value: id,
//       required: true,
//       type: 'ID',
//     },
//     limit
//   },
//   fields: [
//     {
//       player: ['id', 'name', 'avatarUrl']
//     },
//     'gameCount',
//   ],
// });
