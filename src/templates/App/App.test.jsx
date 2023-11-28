import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './App';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Home />', () => {
  it('should render home', () => {
    renderTheme(<Home />);
    /*const headingContainer = screen.getByRole('heading', {
      name: 'Olá',
    }).parentElement;*/

    //o teste abaixo é usado para testar regras específicas de css
    /* expect(headingContainer).toHaveStyle({
      background: theme.colors.mainBg,
    });*/

    //usado para gerar um arquivo com os elementos html
    //expect(headingContainer).toMatchSnapshot();

    //expect(headingContainer).toHaveStyleRule('background', 'red');
  });
});
