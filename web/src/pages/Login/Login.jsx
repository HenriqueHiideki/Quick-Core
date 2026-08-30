import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DescriptionText } from "../../components/Description/DescriptionText";
import { Title } from "../../components/Title/Title";
import { FormField } from "../../components/FormField/FormField";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import { useAuth } from "../../contexts/AuthContext";
import { loginUser } from "../../services/api";
import "./login-style.css";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      setError("Preencha e-mail e senha.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      const data = await loginUser(email, password);
      login(data.user, data.token);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

          <div className="login-button-container">
            <ButtonCreatePoll onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </ButtonCreatePoll>
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
            Nao possui uma conta?{" "}
            <span className="login-add" onClick={() => navigate("/register")}>
              Registre-se
            </span>
          </DescriptionText>
        </div>
      </div>
    </div>
  );
}