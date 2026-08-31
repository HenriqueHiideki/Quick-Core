import { useState, useEffect } from "react";
import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { TitleVotes } from "../../components/Title/TitleVotes";
import "./settings-style.css";
import { DescriptionText } from "../../components/Description/DescriptionText";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import { CheckboxOption } from "../../components/CheckboxOption/CheckboxOption";
import { FormField } from "../../components/FormField/FormField";
import { useAuth } from "../../contexts/AuthContext";
import { updateMe } from "../../services/api";

export function Settings() {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notifyUpdates, setNotifyUpdates] = useState(false);
  const [notifyMarketing, setNotifyMarketing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleSave = async () => {
    if (!name.trim() || !email.trim()) {
      setFeedback("Preencha nome e e-mail.");
      return;
    }

    try {
      setIsSaving(true);
      setFeedback("");

      const data = await updateMe(name, email);
      updateUser(data.user);

      setFeedback("Dados atualizados com sucesso!");
    } catch (err) {
      setFeedback(err.message);
    } finally {
      setIsSaving(false);
    }
  };

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
            <ButtonCreatePoll disabled title="Em breve">Upload</ButtonCreatePoll>
            <button className="button-secondary" disabled title="Em breve">Remover</button>
          </div>
        </div>
      </div>

      <div className="settings-personal-information">
        <TitleVotes>Informações Pessoais</TitleVotes>
        <hr />

        <div className="form-row">
          <FormField
            label="Nome completo"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="settings-checkboxes">
            <CheckboxOption
              checked={notifyUpdates}
              onChange={(e) => setNotifyUpdates(e.target.checked)}
            >
              Receber atualizações e resumos de enquetes
            </CheckboxOption>
            <CheckboxOption
              checked={notifyMarketing}
              onChange={(e) => setNotifyMarketing(e.target.checked)}
            >
              Receber e-mails de marketing e promocionais
            </CheckboxOption>
          </div>
        </div>
      </div>

      {feedback && <p style={{ marginTop: "16px", fontWeight: "bold" }}>{feedback}</p>}

      <div style={{ marginTop: "16px" }}>
        <ButtonCreatePoll onClick={handleSave} disabled={isSaving}>
          {isSaving ? "Salvando..." : "Salvar alterações"}
        </ButtonCreatePoll>
      </div>
    </div>
  );
}