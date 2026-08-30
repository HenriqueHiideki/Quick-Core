import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckboxOption } from "../../components/CheckboxOption/CheckboxOption";
import { DescriptionText } from "../../components/Description/DescriptionText";
import { FormField } from "../../components/FormField/FormField";
import { Title } from "../../components/Title/Title";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import { registerUser } from "../../services/api";

import "./register-style.css";

export function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Preencha todos os campos.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (!acceptedTerms) {
      setError("Você precisa aceitar os termos de serviço.");
      return;
    }

    try {
      setIsLoading(true);
      setError("");

      await registerUser(name, email, password);

      alert("Conta criada com sucesso! Faça login para continuar.");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <div className="register-title-block">
          <Title>Use o Quick Core</Title>
          <DescriptionText>Crie sua conta para iniciar votacoes em tempo real</DescriptionText>
        </div>

        <div className="register-container">

          <FormField
            label="Nome Completo"
            type="text"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            label="Endereço de Email"
            type="email"
            placeholder="Digite seu endereço de email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormField
            label="Senha"
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormField
            label="Confirme a senha"
            type="password"
            placeholder="Repita a senha escolhida"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <CheckboxOption
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          >
            Aceito os termos de serviço e políticas de privacidade
          </CheckboxOption>

          {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

          <div style={{ marginTop: "16px" }}>
            <ButtonCreatePoll onClick={handleRegister} disabled={isLoading}>
              {isLoading ? "Criando conta..." : "Criar conta"}
            </ButtonCreatePoll>
          </div>
        </div>
      </div>

      <div className="register-right">
        <div className="register-img-container">
          <img
            src="/img-register.png"
            alt="Imagem Inicial"
            className="register-img"
          />
        </div>
      </div>
    </div>
  );
}