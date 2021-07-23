import { LegionTD2Api } from '..';
import { PlayerDTO } from './Player';

export class FilteredPlayersDTO {
  constructor(public players: PlayerDTO[], public totalPlayers: number) {}
}
