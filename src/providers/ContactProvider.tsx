import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';
import { useUser } from '../hooks/useUser';
import { iContactData } from '../components/ModalContactAdd/validator';
import { iContactUpdateData } from '../components/ModalContactEditDel/validator';
import { AxiosError } from 'axios';

interface iContactProviderProps {
  children: ReactNode;
}

interface iContactContextValues {
  contacts: iContact[] | null;
  createContact: (data: iContactData, toggleModal: () => void) => void;
  updateContact: (
    data: iContactUpdateData,
    actualContact: iContact,
    toggleModal: () => void
  ) => void;
  deleteContact: (
    actualContact: iContact,
    toggleModal: () => void,
    setDeleteLoading: Dispatch<SetStateAction<boolean>>
  ) => void;
  globalLoading: boolean;
  localLoading: boolean;
}

interface iContact {
  id?: string;
  name: string;
  email: string;
  phone: string;
}

export const ContactContext = createContext<iContactContextValues>(
  {} as iContactContextValues
);

export const ContactProvider = ({ children }: iContactProviderProps) => {
  const { setUser } = useUser();
  const [contacts, setContacts] = useState<iContact[] | []>([]);

  const [localLoading, setLocalLoading] = useState(false);
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('client-connect:token');

    if (!token) {
      setGlobalLoading(false);
      setUser(null);
      return;
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const getUserContacts = async () => {
      try {
        const { data } = await api.get('/users/contacts');
        setContacts(data);
      } catch (error) {
        localStorage.removeItem('client-connect:token');
        setUser(null);
      } finally {
        setGlobalLoading(false);
      }
    };
    getUserContacts();
  }, [setUser]);

  const createContact = async (data: iContactData, toggleModal: () => void) => {
    try {
      setLocalLoading(true);
      const { data: contact } = await api.post('/contacts', data);
      toast.success('Contato criado com sucesso');
      setContacts((previousContacts) => [contact, ...previousContacts]);
      toggleModal();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        localStorage.removeItem('client-connect:token');
        if (error.response?.status == 401) {
          toast.error('Sessão expirada, faça login novamente');
          setUser(null);
        }
        if (error.response?.data.message.includes('email')) {
          toast.error('Você já tem um contato com esse mesmo email');
        }
        if (error.response?.data.message.includes('phone')) {
          toast.error('Você já tem um contato com esse mesmo telefone');
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const updateContact = async (
    data: iContactUpdateData,
    actualContact: iContact,
    toggleModal: () => void
  ) => {
    try {
      setLocalLoading(true);
      const { data: newContact } = await api.patch(
        `/contacts/${actualContact.id}`,
        data
      );
      toast.success('Contato editado com sucesso');
      setContacts((previousContacts) =>
        previousContacts.map((previousContact) =>
          actualContact.id === previousContact.id ? newContact : previousContact
        )
      );

      toggleModal();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        if (error.response?.status == 401) {
          toast.error('Sessão expirada, faça login novamente');
          setUser(null);
        }
        if (error.response?.data.message.includes('email')) {
          toast.error('Você já tem um contato com esse mesmo email');
        }
        if (error.response?.data.message.includes('phone')) {
          toast.error('Você já tem um contato com esse mesmo phone');
        }
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const deleteContact = async (
    actualContact: iContact,
    toggleModal: () => void,
    setDeleteLoading: Dispatch<SetStateAction<boolean>>
  ) => {
    try {
      setDeleteLoading(true);
      await api.delete(`/contacts/${actualContact.id}`);
      toast.success('Contato deletado com sucesso');
      setContacts((previousContacts) =>
        previousContacts.filter(
          (previousContact) => previousContact.id !== actualContact.id
        )
      );

      toggleModal();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.error(error);
        localStorage.removeItem('client-connect:token');
        if (error.response?.status == 401) {
          toast.error('Sessão expirada, faça login novamente');
          setUser(null);
        }
      }
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contacts,
        createContact,
        updateContact,
        deleteContact,
        localLoading,
        globalLoading,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
