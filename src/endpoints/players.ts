import { RequestInitiator } from '../requestInitiator';
import * as gql from 'gql-query-builder';
import { PlayerDTO } from '../dtos/Player';
import {
  APIResponse,
  PlayerBestFriendsResponse,
  PlayerGamesResponse,
  PlayerResponse,
} from '../types/response';
import { BestFriendDTO } from '../dtos/BestFriend';
import { GameDTO } from '../dtos/Game';

export class PlayersEndpoint extends RequestInitiator {
  public async getByName(name: string): Promise<PlayerDTO> {
    const query = gql.query({
      variables: {
        name,
      },
      operation: 'player',
      fields: ['id', 'name', 'avatarUrl'],
    });

    const response = (await this._query<APIResponse<PlayerResponse>>(query)).data.player;
    return new PlayerDTO(this, response.id, response.name, response.avatarUrl);
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
    return new PlayerDTO(this, response.id, response.name, response.avatarUrl);
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
        this,
        new PlayerDTO(this, bf.player.id, bf.player.name, bf.player.avatarUrl),
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
              games: ['id', 'ts', 'endingWave'],
            },
            'count',
          ],
        },
      ],
    });

    const response = (await this._query<APIResponse<PlayerGamesResponse>>(query)).data.player.games;

    return response.games.map((game) => {
      return new GameDTO(
        this,
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
