// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

const Box = () => {
  return (
    <div
      style={{ width: "200px", height: "100px", border: "1px solid blue" }}
    ></div>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: () => (
    <Stack>
      <Box />
      <Box />
      <Box />
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack type="vertical">
      <Box />
      <Box />
      <Box />
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack type="horizontal">
      <Box />
      <Box />
      <Box />
    </Stack>
  ),
};
