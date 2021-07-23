import { GameDetailPartial } from '../types/response';

export class GameDetailDTO {
  constructor(
    private gameDetailData: GameDetailPartial
  ) {}

  public get id() {
    return this.gameDetailData.legion
  }
  
  public get workers() {
    return this.gameDetailData.workers
  }
  
  public get income() {
    return this.gameDetailData.income
  }
  
  public get value() {
    return this.gameDetailData.value
  }
  
  public get isCross() {
    return this.gameDetailData.isCross
  }
  
  public get gameResult() {
    return this.gameDetailData.gameResult
  }
  
  public get overallElo() {
    return this.gameDetailData.overallElo
  }
  
  public get position() {
    return this.gameDetailData.position
  }
  
  public get unitsPerWave() {
    return this.gameDetailData.unitsPerWave
  }
  
  public get leaksPerWave() {
    return this.gameDetailData.leaksPerWave
  }
  
  public get mercsReceivedPerWave() {
    return this.gameDetailData.mercsReceivedPerWave
  }
  
  public get mercsSentPerWave() {
    return this.gameDetailData.mercsSentPerWave
  }
  
  public get workersPerWave() {
    return this.gameDetailData.workersPerWave
  }
  
  public get netWorthPerWave() {
    return this.gameDetailData.netWorthPerWave
  }
  
  public get leakValue() {
    return this.gameDetailData.leakValue
  }
  
  public get leakCaughtValue() {
    return this.gameDetailData.leakCaughtValue
  }
  
  public get partyMemberIds() {
    return this.gameDetailData.partyMemberIds
  }
  
  public get mvpScore() {
    return this.gameDetailData.mvpScore
  }
  
  public get incomePerWave() {
    return this.gameDetailData.incomePerWave
  }
  
  public get legionSpell() {
    return this.gameDetailData.legionSpell
  }
}
