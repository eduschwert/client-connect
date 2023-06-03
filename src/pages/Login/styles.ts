import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 728px) {
    flex-direction: row;
  }
`;

export const StyledLogoBoard = styled.div`
  width: 100%;
  background: var(--color-grey-8);
  padding: 3rem 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > .logo {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
  }

  & > .loginIMG {
    object-fit: cover;
    width: 100%;
    max-width: 427px;
    height: auto;
    margin-bottom: 1rem;
  }

  & .brand {
    color: var(--color-brand-1);
  }

  @media (min-width: 728px) {
    width: 40%;
    height: 100%;
    gap: 6rem;
  }
`;

export const StyledFormBoard = styled.div`
  width: 100%;
  padding: 3rem 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 728px) {
    width: 60%;
    height: 100%;
  }
`;
