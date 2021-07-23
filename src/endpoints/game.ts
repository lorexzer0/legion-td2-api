import { RequestInitiator } from '../requestInitiator';
import * as gql from 'gql-query-builder';
import { APIResponse, GameDetailResponse, GameSearchResponse } from '../types/response';
import { GameDTO } from '../dtos/Game';
import { GameDetailDTO } from '../dtos/GameDetail';
import { GameSearchDTO } from '../dtos/GameSearch';

const gameFields: (string | { [key: string]: string[] })[] = [
  'id',
  'gameElo',
  'playerCount',
  'humanCount',
  'leftKingPercentHP',
  'rightKingPercentHP',
  'ts',
  'endingWave',
  'gameLength',
  'version',
  'queueType',
];

const gameDetailFields: (string | { [key: string]: string[] })[] = [
  'legion',
  'workers',
  'income',
  'value',
  'isCross',
  'gameResult',
  'overallElo',
  {
    playerProfile: ['id', 'name', 'avatarUrl'],
  },
  'position',
  'unitsPerWave',
  'leaksPerWave',
  'mercsReceivedPerWave',
  'mercsSentPerWave',
  'workersPerWave',
  'netWorthPerWave',
  'leakValue',
  'leakCaughtValue',
  'partyMemberIds',
  'mvpScore',
  'incomePerWave',
  'legionSpell',
];

export class GamesEndpoint extends RequestInitiator {
  public async search(
    ts: string,
    limit: number = 10,
    includeGameDetails: boolean = false,
    offset: number = 0,
    queuetype?: 'normal' | 'classic',
    orderby?: string,
    direction?: 'ASC' | 'DESC',
  ): Promise<GameSearchDTO> {
    const query = gql.query({
      variables: {
        ts,
        limit,
        includeGameDetails,
        offset,
        orderby,
        direction: {
          value: direction,
          type: 'SortDirection',
        },
        queuetype: {
          value: queuetype,
          type: 'QueueType',
        },
      },
      operation: 'games',
      fields: [
        {
          games: gameFields,
        },
        'count',
      ],
    });

    const response = (await this._query<APIResponse<GameSearchResponse>>(query)).data.games;

    const games: GameDTO[] = response.games.map((game) => {
      return new GameDTO(game);
    });

    return new GameSearchDTO({
      games,
      count: response.count,
    });
  }

  public async getDetails(id: string): Promise<GameDetailDTO[]> {
    const query = gql.query({
      variables: {
        gameid: {
          value: id,
          type: 'ID',
        },
      },
      operation: 'game',
      fields: [
        {
          gameDetails: gameDetailFields,
        },
      ],
    });

    const response = (await this._query<APIResponse<GameDetailResponse>>(query)).data.game;

    return response.gameDetails.map((gameDetail) => {
      return new GameDetailDTO(gameDetail);
    });
  }
}
