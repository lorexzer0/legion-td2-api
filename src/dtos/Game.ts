import { LegionTD2Api } from '..';
import { GamesEndpoint } from '../endpoints/game';
import { PlayersEndpoint } from '../endpoints/player';
import { RequestInitiator } from '../requestInitiator';
import { GameResponsePartial } from '../types/response';
import { GameDetailDTO } from './GameDetail';
import { PlayerDTO } from './Player';

export class GameDTO {
  constructor(
    private gameData: GameResponsePartial
  ) {}

  // public async getDetails(): Promise<GameDetailDTO[]> {
  //   return await this._api.game.getDetails(this.id);
  // }

  // WAVE OF GETTERS OH GOD (if i set them dynamically i lose intellisense)
  public get id() {
    return this.gameData.id
  }
  
  public get gameElo() {
    return this.gameData.gameElo
  }
  
  public get playerCount() {
    return this.gameData.playerCount
  }
  
  public get humanCount() {
    return this.gameData.humanCount
  }
  
  public get leftKingPercentHP() {
    return this.gameData.leftKingPercentHP
  }
  
  public get rightKingPercentHP() {
    return this.gameData.rightKingPercentHP
  }
  
  public get ts() {
    return this.gameData.ts
  }
  
  public get endingWave() {
    return this.gameData.endingWave
  }
  
  public get gameLength() {
    return this.gameData.gameLength
  }
  
  public get version() {
    return this.gameData.version
  }
  
  public get queueType() {
    return this.gameData.queueType
  }
}
