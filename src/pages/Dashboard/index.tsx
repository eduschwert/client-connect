import {
  StyledContactAddDiv,
  StyledContactButton,
  StyledHeader,
  StyledPerfilButton,
} from './style';
import logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/useUser';
import { StyledButton } from '../../styles/buttons';
import { StyledTitle } from '../../styles/typography';
import { useState } from 'react';
import { ModalPerfil } from '../../components/ModalPerfil';
import { useContact } from '../../hooks/useContact';
import { AiOutlinePlus } from 'react-icons/ai';
import { ModalContactAdd } from '../../components/ModalContactAdd';
import { iContactData } from '../../components/ModalContactAdd/validator';
import { ModalContactEditDel } from '../../components/ModalContactEditDel';

export const Dashboard = () => {
  const [actualContact, setActualContact] = useState<iContactData>(
    {} as iContactData
  );
  const { contacts, globalLoading } = useContact();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const { user, logout } = useUser();
  return (
    <>
      {isOpenModal && typeModal === 'perfil' && (
        <ModalPerfil toggleModal={toggleModal} />
      )}
      {isOpenModal && typeModal === 'addContact' && (
        <ModalContactAdd toggleModal={toggleModal} />
      )}
      {isOpenModal && typeModal === 'editDelContact' && (
        <ModalContactEditDel
          toggleModal={toggleModal}
          contact={actualContact}
        />
      )}
      <StyledHeader>
        <div>
          <img src={logo} alt="Logo" />
          <StyledButton
            onClick={logout}
            buttonSize="default"
            buttonStyle="primary"
          >
            Sair
          </StyledButton>
        </div>
      </StyledHeader>
      <StyledPerfilButton
        onClick={() => {
          setTypeModal('perfil');
          toggleModal();
        }}
      >
        <div>
          <span>{user?.name}</span>
          <span>{user?.email}</span>
          <span>{user?.phone}</span>
        </div>
      </StyledPerfilButton>
      <StyledContactAddDiv>
        <StyledTitle
          tag="h4"
          textAlign="center"
          fontSize="two"
          fontWeight="500"
          color="var(--color-grey-1)"
        >
          Contatos
        </StyledTitle>
        <button
          onClick={() => {
            setTypeModal('addContact');
            toggleModal();
          }}
        >
          <AiOutlinePlus />
        </button>
      </StyledContactAddDiv>
      <StyledContactButton>
        {globalLoading ? (
          <></>
        ) : !contacts ? (
          <></>
        ) : (
          contacts?.map((contact) => (
            <li key={contact.id}>
              <button
                onClick={() => {
                  setActualContact(contact);
                  setTypeModal('editDelContact');
                  toggleModal();
                }}
              >
                <span>{contact?.name}</span>
                <span>{contact?.email}</span>
                <span>{contact?.phone}</span>
              </button>
            </li>
          ))
        )}
      </StyledContactButton>
    </>
  );
};
