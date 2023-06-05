import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/GlobalStyle';
import { UserProvider } from './providers/UserProvider';
import { RoutesMain } from './routes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
};
