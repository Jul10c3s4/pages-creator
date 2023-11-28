import styled, { css } from 'styled-components';

export const div = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};

  `}
`;
