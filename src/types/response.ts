// GLOBAL
export type APIResponse<T> = {
  data: T;
};

// PLAYER RESPONSES
type PlayerPartial = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type PlayerResponse = {
  player: PlayerPartial;
};

export type PlayerBestFriendsResponse = {
  player: {
    bestFriends: {
      player: PlayerPartial;
      gameCount: number;
    }[];
  };
};

export type PlayerGamesResponse = {
  player: {
    games: {
      games: GameResponsePartial[];
      count: number;
    };
  };
};

export type FilteredPlayersResponse = {
  filteredPlayers: {
    players: PlayerPartial[];
    count: number;
  };
};

// UNIT RESPONSES

export type UnitAbilityPartial = {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  iconPath: string;
  aoe: number | null;
  bounces: number | null;
  cooldown: number | null;
  damage: number | null;
  duration: number | null;
};

export type UnitResponsePartial = {
  id: string;
  name: string;
  legion: string;
  description: string;
  tooltip: string;
  iconPath: string;
  armorType: string;
  attackType: string;
  attackSpeed: number;
  range: number;
  attackMode: string;
  moveSpeed: number;
  moveSpeedDescription: string;
  moveType: string;
  upgradesTo: string[];
  goldCost: number | null;
  mythiumCost: number | null;
  totalValue: number;
  dps: number;
  hp: number;
  abilities: UnitAbilityPartial[];
  mana: number;
  income: number | null;
  bounty: number | null;
};

export type UnitResponse = {
  unit: UnitResponsePartial;
};

export type FilteredUnitsResponse = {
  filteredUnits: {
    units: UnitResponsePartial[]
  }
}

// GAME RESPONSES

export type GameResponsePartial = {
  id: string,
  gameElo: number,
  playerCount: number,
  humanCount: number,
  leftKingPercentHP: number[],
  rightKingPercentHP: number[],
  ts: string,
  endingWave: number,
  gameLength: number,
  version: string,
  queueType: string
};

export type GameDetailPartial = {
  legion: string,
  workers: number,
  income: number,
  value: number,
  isCross: boolean,
  gameResult: string,
  overallElo: number,
  playerProfile: PlayerPartial,
  position: number,
  unitsPerWave: string[][],
  leaksPerWave: string[][],
  mercsReceivedPerWave: string[][],
  mercsSentPerWave: string[][],
  workersPerWave: number[],
  netWorthPerWave: number[],
  leakValue: number,
  leakCaughtValue: number,
  partyMemberIds: string[],
  mvpScore: number,
  incomePerWave: number[],
  legionSpell: string
}

export type GameDetailResponse = {
  game: {
    gameDetails: GameDetailPartial[] 
  }
}