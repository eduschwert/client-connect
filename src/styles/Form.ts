import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

interface iStyledFormProp {
  error?: FieldError;
}

export const StyledForm = styled.form<iStyledFormProp>`
  width: 100%;
  max-width: 36.4rem;
  padding: 1.4rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  align-items: center;

  @media (min-width: 728px) {
    width: 80%;
    gap: 2.8rem;
    padding: 3rem 1.8rem;
  }

  fieldset {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--color-grey-1);
  }

  input {
    transition: 200ms ease-in-out;
    outline: none;
    width: 100%;
    height: 4.4rem;
    background: var(--color-grey-8);
    padding: 0px 16px;
    border-radius: var(--radius-1);
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-grey-1);
  }

  input::placeholder {
    color: var(--color-grey-3);
  }
  input:focus {
    border: 0.12rem solid var(--color-grey-0);
  }
`;
