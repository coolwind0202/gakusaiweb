import type { Meta, StoryObj } from "@storybook/react";
import { IconBriefCard } from ".";

const meta: Meta<typeof IconBriefCard> = {
  component: IconBriefCard,
};
export default meta;

export const Default: StoryObj<typeof IconBriefCard> = {
  args: {
    badges: [
      {
        id: "0",
        image: "",
      },
      {
        id: "1",
        image: "",
      },
      {
        id: "2",
        image: "",
      },
    ],
    id: "1",
    icon: "",
    time: new Date(),
    title: "店舗名",
  },
};
