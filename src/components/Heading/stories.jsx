import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

//configurações da heading para quando inicializar o storybook
export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texo está claro',
  colordark: true,
};
