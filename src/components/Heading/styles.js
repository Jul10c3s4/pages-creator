import { styled, css } from 'styled-components';

const TitleSize = {
  small: (theme) => css`
  font-size: ${theme.fonts.sizes.medium};
  `,
  medium: (theme) => css`
  font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme) => css`
  font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme) => css`
  font-size: ${theme.fonts.sizes.xhuge};
  ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
@media ${theme.media.lteMedium} {
  font-size: ${theme.fonts.sizes.xlarge};
  }`;

const upper = (uppercase) => css`
text-transform: ${uppercase ? 'uppercase' : 'none'};
`;
export const Title = styled.h1`
  ${({ theme, colordark = false, size, uppercase = false }) => css`
  color: ${colordark ? theme.colors.light : theme.colors.primaryColor};
  ${TitleSize[size](theme)}
  ${upper(uppercase)}
  `}
`;
