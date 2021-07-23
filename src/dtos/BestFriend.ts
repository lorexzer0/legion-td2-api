import { PlayerDTO } from './Player';

export class BestFriendDTO {
  constructor(
    public player: PlayerDTO,
    public gameCount: number,
  ) {}
}
