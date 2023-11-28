import { Dummy } from '.';
export default {
  title: 'Dummy',
  component: Dummy,
  args: {
    children: 'Dummy',
  },
};
export const Template = (args) => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
