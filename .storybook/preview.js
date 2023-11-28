import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from '../src/styles/global-styles';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    //em backgrounds é possível definir opções de alteração de background
    backgrounds:{
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.light,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        },
        {
          name: 'red',
          value: theme.colors.secondaryBg,
        },
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
export default preview;
