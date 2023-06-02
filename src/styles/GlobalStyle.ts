import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-primary-1: #47B1FF;
    --color-primary-2: #2F8FAA;

    --color-gray-100: #212529;
    --color-gray-200: #868E96;
    --color-gray-300: #E9ECEF;
    --color-gray-400: #F8F9FA;

    --color-negative: #E60000;
    --color-sucess: #168821;

    font-size: 60%;

    --radius-1: .4rem;
    --radius-2: .8rem;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body,html {
    width: 100vw;
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Inter';
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;
