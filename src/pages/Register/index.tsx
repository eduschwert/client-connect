import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Container, StyledFormBoard, StyledLogoBoard } from './styles';
import logo from '../../assets/logo.svg';
import registerIMG from '../../assets/register.svg';
import { StyledText, StyledTitle } from '../../styles/typography';
import { Input } from '../../components/Input';
import { StyledForm } from '../../styles/Form';
import { StyledButton, StyledLinkButton } from '../../styles/buttons';
import { useUser } from '../../hooks/useUser';
import { iRegisterData, schema } from './validator';
import ReactInputMask from 'react-input-mask';
import { StyledFieldset } from '../Login/styles';
import { TailSpin } from 'react-loader-spinner';

export const Register = () => {
  const { signUp, localLoading } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <main>
      <Container>
        <StyledLogoBoard>
          <img className="logo" src={logo} alt="Logo" />
          <StyledTitle
            textAlign="center"
            tag="h1"
            fontSize="one"
            fontWeight="600"
            color="var(--color-grey-1)"
          >
            Cadastre-se e tenha <span className="brand">controle</span> completo
            sobre suas informações de contato.
          </StyledTitle>
          <img className="registerIMG" src={registerIMG} alt="Logo" />
          <StyledTitle
            tag="h2"
            fontSize="two"
            fontWeight="600"
            color="var(--color-grey-2)"
          >
            Gerencie seus contatos de forma
            <span className="brand"> eficiente</span> e mantenha todos eles
            <span className="brand"> organizados</span> em um só lugar
          </StyledTitle>
        </StyledLogoBoard>
        <StyledFormBoard>
          <StyledForm onSubmit={handleSubmit(signUp)} noValidate>
            <StyledTitle
              tag="h3"
              fontSize="two"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Cadastro de clientes
            </StyledTitle>
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
            <Input
              register={register('password')}
              error={errors.password}
              disabled={localLoading}
              id="password"
              label="Senha"
              type="password"
              placeholder="Sua senha"
            />
            <Input
              register={register('confirm')}
              error={errors.confirm}
              disabled={localLoading}
              id="confirm"
              label="Senha"
              type="password"
              placeholder="Confirme sua senha"
            />
            <StyledFieldset error={errors.phone}>
              <label htmlFor="phone">Telefone</label>
              <ReactInputMask
                mask="(99) 99999-9999"
                id="phone"
                type="text"
                placeholder="Seu telefone"
                disabled={localLoading}
                {...register('phone')}
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
              {!localLoading && 'Registrar'}
            </StyledButton>
            <StyledText
              tag="p"
              fontSize="two"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Já possui uma conta?
            </StyledText>
            <StyledLinkButton to="/" buttonSize="default" buttonStyle="grey">
              Login
            </StyledLinkButton>
          </StyledForm>
        </StyledFormBoard>
      </Container>
    </main>
  );
};
