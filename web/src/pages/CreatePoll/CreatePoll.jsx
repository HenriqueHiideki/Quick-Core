import { Header } from "../../components/Header/header";
import { SideBar } from "../../components/SideBar/SideBar";
import { FormField } from "../../components/FormField/FormField";
import { ButtonCreatePoll } from "../../components/Button/Button-Create-Poll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPoll } from "../../services/api";
import "./create-poll.style.css";

export function CreatePoll() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [allowMultiple, setAllowMultiple] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleCreatePoll = async () => {
    const validOptions = options.filter((o) => o.trim() !== "");

    if (!question.trim() || validOptions.length < 2) {
      alert("Preencha a pergunta e pelo menos 2 opções válidas.");
      return;
    }

    try {
      setIsLoading(true);

      await createPoll(question, validOptions);

      alert("Enquete criada com sucesso!");
      navigate("/dashboard");

    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const filledOptions = options.filter((o) => o.trim() !== "");

  return (
    <div className="create-poll-page">
      <Header />

      <div className="create-poll-body">
        <SideBar />

        <main className="create-poll-main">
          <div className="create-poll-content">
            <div className="create-poll-form">

              <section className="create-poll-card">
                <FormField
                  label="Poll Question"
                  placeholder="What's on your mind?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />

                <p className="form-label">Options</p>

                {options.map((option, index) => (
                  <div className="option-field" key={index}>
                    <input
                      className="option-input"
                      placeholder={`Option ${index + 1}`}
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                    />
                    {options.length > 2 && (
                      <span
                        className="option-remove"
                        onClick={() => handleRemoveOption(index)}
                      >
                        ×
                      </span>
                    )}
                  </div>
                ))}

                <span className="options-add-button" onClick={handleAddOption}>
                  + Add Option
                </span>
              </section>

              <section className="create-poll-card">
                <h3 className="create-poll-card-title">Advanced Settings</h3>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={allowMultiple}
                    onChange={(e) => setAllowMultiple(e.target.checked)}
                  />
                  <span className="toggle-slider"></span>
                  <span className="toggle-text">Allow multiple answers</span>
                </label>

                <div className="create-poll-settings-row">
                  <FormField label="Expiry Date" type="date" />

                  <div className="form-field">
                    <label className="form-label">Privacy</label>
                    <select className="form-input">
                      <option value="public">Público</option>
                      <option value="private">Privado</option>
                    </select>
                  </div>
                </div>
              </section>

              <div className="create-poll-actions">
                <ButtonCreatePoll>Save Draft</ButtonCreatePoll>
                <ButtonCreatePoll onClick={handleCreatePoll} disabled={isLoading}>
                  {isLoading ? "Criando..." : "Create Poll"}
                </ButtonCreatePoll>
              </div>
            </div>

            <div className="live-preview">
              <div className="live-preview-header">
                <span>LIVE PREVIEW</span>
                <span className="live-preview-badge">ACTIVE</span>
              </div>

              <div className="live-preview-body">
                <p className="live-preview-question">
                  {question || "Sua pergunta vai aparecer aqui..."}
                </p>

                {filledOptions.map((option, index) => (
                  <div className="live-preview-option" key={index}>
                    {option}
                  </div>
                ))}

                <div className="live-preview-meta">
                  <span>0 votos</span>
                  <span>Expira em 7 dias</span>
                </div>

                <button className="live-preview-vote">Votar Agora</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}