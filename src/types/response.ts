// GLOBAL
export type APIResponse<T> = {
  data: T;
};

// PLAYER RESPONSES
type PlayerResponsePartial = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type PlayerResponse = {
  player: PlayerResponsePartial;
};

export type PlayerBestFriendsResponse = {
  player: {
    bestFriends: {
      player: PlayerResponsePartial;
      gameCount: number;
    }[];
  };
};

type PlayerGamesResponsePartial = {
  id: string;
  endingWave: number;
  ts: Date;
};

export type PlayerGamesResponse = {
  player: {
    games: {
      games: PlayerGamesResponsePartial[];
      count: number;
    };
  };
};
