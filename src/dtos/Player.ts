export class PlayerDTO {
  constructor(public id: string, public name: string, public avatarUrl: string) {}

  // public async getGames(limit: number = 5): Promise<GameDTO[]> {
  //   return await this._api.player.getGames(this.id, limit)
  // }

  // public async getBestFriends(limit: number = 5): Promise<BestFriendDTO[]> {
  //   return await this._api.player.getBestFriends(this.id, limit);
  // }
}
