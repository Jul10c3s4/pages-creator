import { ThemeProvider } from 'styled-components';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import { Heading } from './index';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    const { debug } = renderTheme(<Heading as='h3'>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('Should render with white color in the title', () => {
    const { debug } = renderTheme(<Heading colordark={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });
    expect(heading).toHaveStyle({
      color: theme.colors.light,
    });
  });

  it('Should render with correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size='small'>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size='medium'>texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size='big'>texto</Heading>
      </ThemeProvider>,
    );

    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size='huge'>texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'texto' })).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  /*it('Should render correct font-size when using mobile', () => {
    const { rerender } = renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    //usar o toHaveStyleRule para simular eventos de hoove, mediaquery e etc.
    expect(heading).toHaveStyleRule('font-size', theme.fonts.sizes.xlarge, {
      media: theme.media.lteMedium,
    });
  });*/

  it('Should render with uppercase letters', () => {
    renderTheme(<Heading uppercase={true}>texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should render correct heading element', () => {
    const { rerender } = renderTheme(<Heading as='h1'>texto</Heading>);

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h1');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as='h2'>texto</Heading>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h2');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as='h3'>texto</Heading>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h3');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as='h4'>texto</Heading>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h4');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as='h5'>texto</Heading>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h5');

    rerender(
      <ThemeProvider theme={theme}>
        <Heading as='h6'>texto</Heading>
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', { name: 'texto' }).tagName.toLowerCase(),
    ).toBe('h6');
  });
});
