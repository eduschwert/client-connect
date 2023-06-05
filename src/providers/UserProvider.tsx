import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { iLoginData } from '../pages/Login/validator';
import { api } from '../services/api';
import { iRegisterData } from '../pages/Register/validator';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { iUpdateData } from '../components/ModalPerfil/validator';

interface iUserProviderProps {
  children: ReactNode;
}
// signUp
interface iUserContextValues {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  signIn: (data: iLoginData) => void;
  signUp: (data: iRegisterData) => void;
  updateUser: (data: iUpdateData, toggleModal: () => void) => void;
  deleteUser: (setDeleteLoading: Dispatch<SetStateAction<boolean>>) => void;
  logout: () => void;
  globalLoading: boolean;
  localLoading: boolean;
}

interface iUser {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export const UserContext = createContext<iUserContextValues>(
  {} as iUserContextValues
);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iUser | null>(null);

  const [localLoading, setLocalLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('client-connect:token');

    if (!token) {
      setGlobalLoading(false);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const getUser = async () => {
      try {
        const { data } = await api.get('/users');
        setUser(data);
      } catch (error) {
        localStorage.removeItem('client-connect:token');
      } finally {
        setGlobalLoading(false);
      }
    };
    getUser();
  }, []);

  const signIn = async (data: iLoginData) => {
    try {
      setLocalLoading(true);
      const response = await api.post('/login', data);
      const { token } = response.data;
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      localStorage.setItem('client-connect:token', token);

      const getUser = async () => {
        const { data } = await api.get('/users');
        toast.success('Login efetuado com sucesso');
        setUser(data);
      };
      getUser();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        localStorage.removeItem('client-connect:token');
        if (error.response?.data.message.includes('Wrong')) {
          toast.error('Email ou senha incorretos');
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const signUp = async (data: iRegisterData) => {
    try {
      setLocalLoading(true);
      await api.post('/users', data);
      toast.success('Registro efetuado com sucesso');
      navigate('/');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        if (error.response?.data.message.includes('Email already')) {
          toast.error('Email já está em uso');
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const updateUser = async (data: iUpdateData, toggleModal: () => void) => {
    try {
      setLocalLoading(true);
      const { data: newUser } = await api.patch('/users', data);
      toast.success('Perfil atualizado com sucesso');
      setUser(newUser);
      toggleModal();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        if (error.response?.data.message.includes('Email already')) {
          toast.error('Email já está em uso');
        }
        if (error.response?.status == 401) {
          toast.error('Sessão expirada, faça login novamente');
          setUser(null);
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const deleteUser = async (
    setDeleteLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      setDeleteLoading(true);
      await api.delete('/users');
      toast.success('Perfil excluído com sucesso');
      setUser(null);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        if (error.response?.status == 401) {
          toast.error('Sessão expirada, faça login novamente');
          setUser(null);
        }
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('client-connect:token');
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signUp,
        updateUser,
        deleteUser,
        logout,
        localLoading,
        globalLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
