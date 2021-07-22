import { PlayersEndpoint } from '../endpoints/players';
import { PlayerDTO } from './Player';

export class BestFriendDTO {
  constructor(
    private _endpoint: PlayersEndpoint,
    public player: PlayerDTO,
    public gameCount: number,
  ) {}
}
