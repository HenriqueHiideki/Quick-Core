import { DescriptionText } from "../../components/Description/DescriptionText";
import { Title } from "../../components/Title/Title";
import { FormField } from "../../components/FormField/FormField";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import "./login-style.css";

export function Login() {
  return (
    <div className="login-page">
      <div className="login-content">
        <div className="login-header-container">
          <img
            src="/quick-core-logo.png"
            alt="Logo do Quick Core"
            className="login-logo"
          />
          <Title>QuickCore</Title>
        </div>

        <div className="login-center-container">
          <DescriptionText>Bem-Vindo ao Quick Core!</DescriptionText>
          <p className="login-text">Entre com as suas credenciais</p>

          <FormField
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            helperText="Esqueceu seu e-mail?"
          />
          <FormField
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            helperText="Esqueceu sua senha?"
          />

          <div className="login-button-container">
            <ButtonCreatePoll>Entrar</ButtonCreatePoll>
          </div>
        </div>

        <div className="login-button-container">
          <div className="login-button">
            <img
              src="/icon-google.png"
              alt="Login Google"
              className="login-img"
            />
            <p>Google</p>
          </div>
          <div className="login-button">
            <img
              src="/icon-github.png"
              alt="Login GitHub"
              className="login-img"
            />
            <p>GitHub</p>
          </div>
        </div>

        <div className="login-footer-container">
          <DescriptionText>
            Nao possui uma conta? <span className="login-add">Registre-se</span>
          </DescriptionText>
        </div>
      </div>
    </div>
  );
}
