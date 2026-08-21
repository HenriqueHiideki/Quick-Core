import { CheckboxOption } from "../../components/CheckboxOption/CheckboxOption";
import { DescriptionText } from "../../components/Description/DescriptionText";
import { FormField } from "../../components/FormField/FormField";
import { Title } from "../../components/Title/Title";

import "./register-style.css";

export function Register() {
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
          />
          <FormField
            label="Endereço de Email"
            type="email"
            placeholder="Digite seu endereço de email"
          />
          <FormField
            label="Senha"
            type="password"
            placeholder="Digite a sua senha"
          />
          <FormField
            label="Confirme a senha"
            type="password"
            placeholder="Repita a senha escolhida"
          />
          <CheckboxOption>
            Aceito os termos de serviço e políticas de privacidade
          </CheckboxOption>
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
