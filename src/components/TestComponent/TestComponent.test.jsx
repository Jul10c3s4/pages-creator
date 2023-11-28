import { TestComponent } from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<TestComponent />', () => {
  it('Should render somethig', () => {
    renderTheme(<TestComponent>Children</TestComponent>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
