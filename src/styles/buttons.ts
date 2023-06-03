import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface iStyledButtonProps {
  buttonSize: 'default' | 'small';
  buttonStyle: 'primary' | 'grey';
}

export const buttonCSS = css<iStyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  border-radius: var(--radius-1);

  transition: 200ms ease-in-out;

  font-size: 1.6rem;
  font-weight: 500;

  padding: 0 2rem;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case 'default':
        return css`
          height: 3.8rem;
        `;
      case 'small':
        return css`
          height: 2.2rem;
        `;
      default:
    }
  }}

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case 'primary':
        return css`
          background: var(--color-brand-1);
          border: 0.2rem solid var(--color-brand-1);

          color: var(--color-grey-9);

          &:hover {
            background: var(--color-brand-2);
            border: 0.2rem solid var(--color-brand-2);
          }
        `;
      case 'grey':
        return css`
          background: var(--color-grey-8);
          border: 0.2rem solid var(--color-grey-8);

          color: var(--color-grey-1);

          &:hover {
            background: var(--color-grey-6);
            border: 0.2rem solid var(--color-grey-6);
          }
        `;
      default:
    }
  }}
`;

export const StyledButton = styled.button<iStyledButtonProps>`
  ${buttonCSS}
`;

export const StyledLinkButton = styled(Link)<iStyledButtonProps>`
  ${buttonCSS}
`;
