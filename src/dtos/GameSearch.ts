import { GameDTO } from './Game';

export class GameSearchDTO {
  constructor(private gameSearchData: { games: GameDTO[]; count: number }) {}

  /**
   * The games that match the filter (including limit / offset)
   */
  public get games() {
    return this.gameSearchData.games;
  }

  /**
   * Total amount of games that matches the filter (excluding limit / offset)
   */
  public get totalGames() {
    return this.gameSearchData.count;
  }
}
