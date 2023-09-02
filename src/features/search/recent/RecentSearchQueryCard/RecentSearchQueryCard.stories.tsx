import type { Meta, StoryObj } from "@storybook/react";
import { RecentSearchQueryCard } from ".";

const meta: Meta<typeof RecentSearchQueryCard> = {
  component: RecentSearchQueryCard,
};
export default meta;

export const Default: StoryObj<typeof RecentSearchQueryCard> = {
  args: {
    entity: {
      id: "1",
      time: new Date(),
      word: "検索ワード",
      badges: [],
    },
  },
};
