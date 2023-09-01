import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: createTheme(),
        //dark: createTheme({ palette: {mode: "dark"}}),
      },
      defaultTheme: "light",
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
