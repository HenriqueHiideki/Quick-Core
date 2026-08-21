import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { TitleVotes } from "../../components/Title/TitleVotes";
import { Title } from "../../components/Title/Title";
import "./settings-style.css";
import { DescriptionText } from "../../components/Description/DescriptionText";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import { CheckboxOption } from "../../components/CheckboxOption/CheckboxOption";
import { FormField } from "../../components/FormField/FormField";

export function Settings() {
  return (
    <div className="settings-container">
      <DescriptionTitle>Configuracoes</DescriptionTitle>
      <div className="settings-content">
        <img
          src="/user-icon.png"
          alt="Icone de Usuário"
          className="settings-img"
        />
        <div className="settings-profile">
          <div className="settings-text">
            <TitleVotes>Foto de Perfil</TitleVotes>
            <DescriptionText>JPG ou PNG</DescriptionText>
          </div>

          <div className="settings-actions">
            <ButtonCreatePoll>Upload</ButtonCreatePoll>
            <button className="button-secondary">Remover</button>
          </div>
        </div>
      </div>

      <div className="settings-personal-information">
        <TitleVotes>Informações Pessoais</TitleVotes>
        <hr />

        <div className="form-row">
          <FormField label="First Name" placeholder="Digite seu nome" />
          <FormField label="Last Name" placeholder="Digite seu sobrenome" />
        </div>
      </div>

      <div className="settings-personal-information">
        <TitleVotes>Configuração de E-mail</TitleVotes>
        <hr />

        <div className="settings-form">
          <FormField
            label="Endereço de E-mail"
            type="email"
            placeholder="Digite seu E-mail"
            helperText="Para alterar seu e-mail, contate o suporte."
          />

          <div className="settings-checkboxes">
            <CheckboxOption>
              Receber atualizações e resumos de enquetes
            </CheckboxOption>
            <CheckboxOption>
              Receber e-mails de marketing e promocionais
            </CheckboxOption>
          </div>
        </div>
      </div>
    </div>
  );
}
