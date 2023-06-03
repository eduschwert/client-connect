import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   :root {
    --color-brand-1: #47B1FF;
    --color-brand-2: #2F8FAA;

    --color-grey-0: #0B0D0D;
    --color-grey-1: #212529;
    --color-grey-2: #495057;
    --color-grey-3: #868E96;
    --color-grey-4: #ADB5BD;
    --color-grey-5: #CED4DA;
    --color-grey-6: #DEE2E6;
    --color-grey-7: #E9ECEF;
    --color-grey-8: #F1F3F5;
    --color-grey-9: #F8F9FA;
    --color-grey-10: #FDFDFD;

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

  fieldset{
    border: none;
  }
`;
