import styled from 'styled-components';

export const Containter = styled.div`
  width: 130rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 1.8rem;
`;

export const StyledHeader = styled.header`
  div {
    width: 130rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 3rem 1.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    width: max-content;
  }
`;

export const StyledPerfilButton = styled.button`
  min-height: 6rem;
  width: 100%;
  background: var(--color-brand-1);
  border: 0.2rem solid var(--color-brand-1);
  color: var(--color-grey-9);
  transition: 200ms ease-in-out;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;

  &:hover {
    background: var(--color-brand-2);
    border: 0.2rem solid var(--color-brand-2);
  }

  div {
    width: 130rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 2rem 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    flex-grow: 1;

    @media (min-width: 728px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }

  span {
    text-align: initial;
    word-break: break-word;
  }
`;

export const StyledContactAddDiv = styled.div`
  width: 100%;
  min-height: 4rem;
  padding: 2rem 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130rem;
  max-width: 100%;
  margin: 0 auto;

  button {
    background: var(--color-grey-8);
    border: 0.2rem solid var(--color-grey-1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;

    &:hover {
      background: var(--color-grey-6);
      border: 0.2rem solid var(--color-grey-1);
    }
  }
`;

export const StyledContactButton = styled.ol`
  height: 60vh;
  overflow-y: auto;
  background: var(--color-grey-8);
  border: 0.2rem solid var(--color-grey-8);
  width: 130rem;
  max-width: 100%;
  margin: 1rem auto 0 auto;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    background: var(--color-grey-6);
    border: 0.2rem solid var(--color-grey-6);
  }

  li {
    padding: 2rem 1.8rem;
    border-bottom: 0.2rem solid var(--color-brand-1);
    &:hover {
      background: var(--color-grey-3);
    }
  }

  button {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    flex-grow: 1;
    background: none;
    border: none;

    @media (min-width: 728px) {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  }

  span {
    text-align: initial;
    word-break: break-word;
  }
`;
