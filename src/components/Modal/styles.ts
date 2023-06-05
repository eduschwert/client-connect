import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background: transparent;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    max-width: 100%;
    width: 40rem;
  }

  > div > div:nth-child(1) {
    background: var(--color-brand-1);

    min-height: 5.4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 2.2rem;

    border-radius: var(--radius-2) var(--radius-2) 0 0;
  }

  & .close {
    cursor: pointer;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div > div:nth-child(2) {
    display: flex;
    justify-content: center;
    background: var(--color-grey-9);
  }
`;
