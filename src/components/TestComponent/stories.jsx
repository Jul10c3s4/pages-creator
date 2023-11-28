import { TestComponent } from '.';
export default {
  title: 'TestComponent',
  component: TestComponent,
  args: {
    children: 'TestComponent',
  },
};
export const Template = (args) => {
  return (
    <div>
      <TestComponent {...args} />
    </div>
  );
};
