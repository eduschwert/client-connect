import { FieldError } from 'react-hook-form';
import styled, { css } from 'styled-components';

export interface iStyledInputProps {
  error?: FieldError;
}

export const StyledInput = styled.input<iStyledInputProps>`
  border: 0.2rem solid var(--color-grey-8);
  ${({ error }) => {
    if (error) {
      return css`
        border: 0.2rem solid var(--color-negative);
      `;
    }
  }}
`;
