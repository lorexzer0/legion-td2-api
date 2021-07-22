import { PlayersEndpoint } from '../endpoints/players';
import { BestFriendDTO } from './BestFriend';
import { GameDTO } from './Game';

export class PlayerDTO {
  constructor(
    private _endpoint: PlayersEndpoint,
    public id: string,
    public name: string,
    public avatarUrl: string,
  ) {}

  public async getGames(limit: number = 5): Promise<GameDTO[]> {
    return this._endpoint.getGames(this.id, limit)
  }

  public async getBestFriends(limit: number = 5): Promise<BestFriendDTO[]> {
    return this._endpoint.getBestFriends(this.id, limit);
  }
}
