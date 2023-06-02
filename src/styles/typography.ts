import styled, { css } from 'styled-components';

import { BaseText } from './components/BaseText';
import { BaseTitle } from './components/BaseTitle';

interface iStyledTextProps {
  textAlign?: string;
  fontWeight: '400' | '600' | '700';
  fontSize: 'one' | 'two' | 'three' | 'four';
  color:
    | 'var(--color-primary-1)'
    | 'var(--color-primary-2)'
    | 'var(--color-gray-100)'
    | 'var(--color-gray-200)'
    | 'var(--color-gray-300)'
    | 'var(--color-gray-400)';
}

export const StyledTitle = styled(BaseTitle)<iStyledTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ color }) => color};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'one':
        return css`
          font-size: 2.8rem;
          @media (max-width: 800px) {
            font-size: 2rem;
          }
          @media (max-width: 400px) {
            font-size: 1.6rem;
          }
        `;
      case 'two':
        return css`
          font-size: 2.5rem;
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
          @media (max-width: 400px) {
            font-size: 1.4rem;
          }
        `;
      case 'three':
        return css`
          font-size: 1.8rem;
          @media (max-width: 800px) {
            font-size: 1.5rem;
          }
          @media (max-width: 400px) {
            font-size: 1.25rem;
          }
        `;
      case 'four':
        return css`
          font-size: 1.25rem;
          @media (max-width: 800px) {
            font-size: 1rem;
          }
        `;
    }
  }}
`;

export const StyledText = styled(BaseText)<iStyledTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ color }) => color};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'one':
        return css`
          font-size: 1.6rem;
          @media (max-width: 800px) {
            font-size: 1.4rem;
          }
          @media (max-width: 400px) {
            font-size: 1.2rem;
          }
        `;
      case 'two':
        return css`
          font-size: 1.4rem;
          @media (max-width: 800px) {
            font-size: 1.2rem;
          }
          @media (max-width: 400px) {
            font-size: 1rem;
          }
        `;
      case 'three':
        return css`
          font-size: 1.2rem;
          @media (max-width: 800px) {
            font-size: 1rem;
          }
          @media (max-width: 400px) {
            font-size: 0.8rem;
          }
        `;
      case 'four':
        return css`
          font-size: 1rem;
          @media (max-width: 800px) {
            font-size: 0.8rem;
          }
        `;
    }
  }}
`;
