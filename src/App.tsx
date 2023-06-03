import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyle';
import { Login } from './pages/Login';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ fontSize: '1.4rem', fontWeight: '700' }}
      />
      <Login />
    </>
  );
};
