import styled, { css } from 'styled-components';

import { BaseText } from './components/BaseText';
import { BaseTitle } from './components/BaseTitle';

interface iStyledTextProps {
  textAlign?: string;
  fontSize: 'one' | 'two' | 'three' | 'four';
  fontWeight: '400' | '500' | '600' | '700';
  color: string;
}

export const StyledTitle = styled(BaseTitle)<iStyledTextProps>`
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ color }) => color};

  ${({ fontSize }) => {
    switch (fontSize) {
      case 'one':
        return css`
          font-size: 2.4rem;
          @media (max-width: 800px) {
            font-size: 1.8rem;
          }
        `;
      case 'two':
        return css`
          font-size: 1.8rem;
          @media (max-width: 800px) {
            font-size: 1.4rem;
          }
        `;
      case 'three':
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
        `;
      case 'two':
        return css`
          font-size: 1.4rem;
          @media (max-width: 800px) {
            font-size: 1.2rem;
          }
        `;
      case 'three':
        return css`
          font-size: 1.2rem;
          @media (max-width: 800px) {
            font-size: 1rem;
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
