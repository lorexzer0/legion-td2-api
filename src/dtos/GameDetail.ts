import { GameDetailPartial } from '../types/response';
import { PlayerDTO } from './Player';

export class GameDetailDTO {
  constructor(private gameDetailData: GameDetailPartial) {}

  /**
   * Legion that the player played the game with
   */
  public get legion() {
    return this.gameDetailData.legion;
  }

  /**
   * Number of workers controlled by the player at the end of the game
   */
  public get workers() {
    return this.gameDetailData.workers;
  }

  /**
   * Income amount at the end of the game
   */
  public get income() {
    return this.gameDetailData.income;
  }

  /**
   * Total value at the end of the game
   */
  public get value() {
    return this.gameDetailData.value;
  }

  /**
   * Shows whether the player played cross or not
   */
  public get isCross() {
    return this.gameDetailData.isCross;
  }

  /**
   * Result of the Game for this player (won/lost)
   */
  public get gameResult() {
    return this.gameDetailData.gameResult;
  }

  /**
   * ELO Amount after the game is finished
   */
  public get overallElo() {
    return this.gameDetailData.overallElo;
  }

  /**
   * Player object => Converted to PlayerDTO
   * @type {PlayerDTO}
   */
  public get playerProfile(): PlayerDTO {
    const playerData = this.gameDetailData.playerProfile;
    return new PlayerDTO(playerData.id, playerData.name, playerData.avatarUrl);
  }

  /**
   * Position of the player (1 = red etc)
   */
  public get position() {
    return this.gameDetailData.position;
  }

  /**
   * Array of strings that hold what units were built during the waves
   */
  public get unitsPerWave() {
    return this.gameDetailData.unitsPerWave;
  }

  /**
   * Array of integers that holds how many units were leaked during the waves
   */
  public get leaksPerWave() {
    return this.gameDetailData.leaksPerWave;
  }

  /**
   * Array of strings that hold what units were received during the waves
   */
  public get mercsReceivedPerWave() {
    return this.gameDetailData.mercsReceivedPerWave;
  }

  /**
   * Array of strings that hold what units were build during the waves
   */
  public get mercsSentPerWave() {
    return this.gameDetailData.mercsSentPerWave;
  }

  /**
   * Array of integers that hold how many workers the player had during the waves
   */
  public get workersPerWave() {
    return this.gameDetailData.workersPerWave;
  }

  /**
   * Array of integers that hold the net worth of the player had during the waves
   */
  public get netWorthPerWave() {
    return this.gameDetailData.netWorthPerWave;
  }

  /**
   * Represents the total value of leaks the player had
   */
  public get leakValue() {
    return this.gameDetailData.leakValue;
  }

  /**
   * Represents the total value of leaks the player caught
   */
  public get leakCaughtValue() {
    return this.gameDetailData.leakCaughtValue;
  }

  /**
   * A list of the master player account IDs of all partymembers of this player (null if solo)
   */
  public get partyMemberIds() {
    return this.gameDetailData.partyMemberIds;
  }

  /**
   * MVP score of the player
   */
  public get mvpScore() {
    return this.gameDetailData.mvpScore;
  }

  /**
   * Array of integers that hold how much income the player had during the waves
   */
  public get incomePerWave() {
    return this.gameDetailData.incomePerWave;
  }

  /**
   * Represents the legionspell the player chose
   */
  public get legionSpell() {
    return this.gameDetailData.legionSpell;
  }
}
