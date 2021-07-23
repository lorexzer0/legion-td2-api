import axios, { AxiosInstance } from 'axios';
import { GamesEndpoint } from './endpoints/game';
import { PlayersEndpoint } from './endpoints/player';
import { UnitsEndpoint } from './endpoints/unit';
import { LegionTD2ApiConfig } from './types/global';

export class LegionTD2Api {
  protected instance: AxiosInstance;
  protected config: Map<string, string> = new Map<string, string>([['apiKey', '']]);
  protected static: Map<string, string> = new Map<string, string>([['apiUrl', 'https://api.legiontd2.com']]);

  // Endpoints
  public player: PlayersEndpoint;
  public unit: UnitsEndpoint;
  public game: GamesEndpoint;

  constructor(config: LegionTD2ApiConfig) {
    this.config = new Map(
      Object.keys(config).map((key) => [key, (config as { [key: string]: string })[key]]),
    );
    this.instance = axios.create({
      timeout: 30000,
      baseURL: this.static.get('apiUrl'),
    });

    this.player = new PlayersEndpoint(this.instance, this.config);
    this.unit = new UnitsEndpoint(this.instance, this.config);
    this.game = new GamesEndpoint(this.instance, this.config);
  }
}
