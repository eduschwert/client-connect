import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Container, StyledFormBoard, StyledLogoBoard } from './styles';
import logo from '../../assets/logo.svg';
import login from '../../assets/login.svg';
import { StyledText, StyledTitle } from '../../styles/typography';
import { Input } from '../../components/Input';
import { StyledForm } from '../../styles/Form';
import { StyledButton, StyledLinkButton } from '../../styles/buttons';
// import { LoginData, schema } from "./validator"
// import { useAuth } from "../../hooks/useAuth"

export const Login = () => {
  // const {signIn} = useAuth();
  // const { register, handleSubmit } = useForm<LoginData>({
  //   resolver: zodResolver(schema)
  // })

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
          <img className="loginIMG" src={login} alt="Logo" />
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
          <StyledForm>
            <StyledTitle
              tag="h3"
              fontSize="two"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Acesse sua conta
            </StyledTitle>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Seu email"
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              placeholder="Sua senha"
            />
            <StyledButton buttonSize="default" buttonStyle="primary">
              Acessar
            </StyledButton>
            <StyledText
              tag="p"
              fontSize="one"
              fontWeight="500"
              color="var(--color-grey-1)"
            >
              Ainda não possui uma conta?
            </StyledText>
            <StyledLinkButton
              to="/regiter"
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
