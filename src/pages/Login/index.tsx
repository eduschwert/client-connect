import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Container, StyledFormBoard, StyledLogoBoard } from './styles';
import logo from '../../assets/logo.svg';
import loginIMG from '../../assets/login.svg';
import { StyledText, StyledTitle } from '../../styles/typography';
import { Input } from '../../components/Input';
import { StyledForm } from '../../styles/Form';
import { StyledButton, StyledLinkButton } from '../../styles/buttons';
import { useUser } from '../../hooks/useUser';
import { iLoginData, schema } from './validator';
import { TailSpin } from 'react-loader-spinner';

export const Login = () => {
  const { signIn, localLoading } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <main>
      <Container>
        <StyledLogoBoard>
          <img className="logo" src={logo} alt="Logo" />
          <StyledTitle
            tag="h1"
            fontSize="one"
            fontWeight="600"
            color="var(--color-grey-1)"
          >
            Gerenciador de contatos
          </StyledTitle>
          <img className="loginIMG" src={loginIMG} alt="Logo" />
          <StyledTitle
            tag="h2"
            fontSize="two"
            fontWeight="600"
            color="var(--color-grey-2)"
          >
            Torne o <span className="brand">gerenciamento</span> de seus
            contatos mais <span className="brand">eficiente </span>
            com o clientconnect
          </StyledTitle>
        </StyledLogoBoard>
        <StyledFormBoard>
          <StyledForm onSubmit={handleSubmit(signIn)} noValidate>
            <StyledTitle
              tag="h3"
              fontSize="two"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Acesse sua conta
            </StyledTitle>
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
              {!localLoading && 'Acessar'}
            </StyledButton>
            <StyledText
              tag="p"
              fontSize="two"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Ainda não possui uma conta?
            </StyledText>
            <StyledLinkButton
              to="/register"
              buttonSize="default"
              buttonStyle="grey"
            >
              Cadastrar
            </StyledLinkButton>
          </StyledForm>
        </StyledFormBoard>
      </Container>
    </main>
  );
};
