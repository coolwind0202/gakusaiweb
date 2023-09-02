type RecentSearchQueryEntity = {
  id: string;
  word: string;
  icon?: string;
  badges: RecentSearchQueryBadgeEntity[];
  time: Date;
};

type RecentSearchQueryBadgeEntity = {
  id: string;
  badge: {
    id: string;
    name: string;
    image: string;
  };
};

export type { RecentSearchQueryEntity };
