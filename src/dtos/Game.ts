import { PlayersEndpoint } from '../endpoints/players';
import { PlayerDTO } from './Player';

export class GameDTO {
  constructor(
    private _endpoint: PlayersEndpoint,
    public gameData: {
      id: string;
      endingWave: number;
      ts: Date;
    }
  ) {}
}
