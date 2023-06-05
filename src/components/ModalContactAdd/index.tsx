import { StyledForm } from '../../styles/Form';
import { StyledText, StyledTitle } from '../../styles/typography';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { zodResolver } from '@hookform/resolvers/zod';
import { TailSpin } from 'react-loader-spinner';
import ReactInputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';
import { StyledFieldset } from '../../pages/Login/styles';
import { StyledButton } from '../../styles/buttons';
import { useContact } from '../../hooks/useContact';
import { iContactData, schema } from './validator';

interface iModalPerfilProps {
  toggleModal: () => void;
}

export const ModalContactAdd = ({ toggleModal }: iModalPerfilProps) => {
  const { localLoading, createContact } = useContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <Modal toggleModal={toggleModal}>
      <div>
        <StyledTitle
          tag="h3"
          fontSize="two"
          fontWeight="500"
          color="var(--color-grey-9)"
        >
          Adicionar contato
        </StyledTitle>
        <button className="close" onClick={toggleModal}>
          <StyledText
            tag="span"
            fontSize="one"
            fontWeight="700"
            color="var(--color-grey-9)"
          >
            X
          </StyledText>
        </button>
      </div>
      <div>
        <StyledForm
          onSubmit={handleSubmit((data) => createContact(data, toggleModal))}
          noValidate
        >
          <Input
            register={register('name')}
            error={errors.name}
            disabled={localLoading}
            id="name"
            label="Nome"
            type="text"
            placeholder="Seu nome"
          />
          <Input
            register={register('email')}
            error={errors.email}
            disabled={localLoading}
            id="email"
            label="Email"
            type="email"
            placeholder="Seu email"
          />
          <StyledFieldset error={errors.phone}>
            <label htmlFor="phone">Telefone</label>
            <ReactInputMask
              {...register('phone')}
              mask="(99) 99999-9999"
              id="phone"
              type="text"
              placeholder="Seu telefone"
              disabled={localLoading}
            />
            {errors.phone && (
              <StyledText
                tag="p"
                fontSize="two"
                fontWeight="500"
                color="var(--color-negative)"
              >
                {errors.phone?.message}
              </StyledText>
            )}
          </StyledFieldset>
          <StyledButton
            type="submit"
            buttonSize="default"
            buttonStyle="primary"
          >
            <TailSpin
              height="100%"
              width="100%"
              color="#F8F9FA"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{ width: '100%', height: '50%' }}
              wrapperClass=""
              visible={localLoading}
            />
            {!localLoading && 'Criar contato'}
          </StyledButton>
        </StyledForm>
      </div>
    </Modal>
  );
};
