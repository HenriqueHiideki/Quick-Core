import { ButtonCreatePoll } from "../Button/Button-Create-Poll";
import { DashboardDescription } from "../Description/DashboardDescription";
import { DashboardDescriptionText } from "../Description/DashboardDescriptionText";
import "./details-style.css";

export function Details({ polls = [], onDelete }) {
  const handleCopyLink = (pollId) => {
    const url = `${window.location.origin}/vote/${pollId}`;
    navigator.clipboard.writeText(url);
    alert("Link da votação copiado para a área de transferência!");
  };

  return (
    <div className="details-container">
      <div className="details-header">
        <DashboardDescriptionText>Poll Details</DashboardDescriptionText>
        <DashboardDescriptionText>Status</DashboardDescriptionText>
        <DashboardDescriptionText className="col-actions">
          Actions
        </DashboardDescriptionText>
      </div>

      {polls.length === 0 && (
        <div className="details-row" style={{ justifyContent: 'center' }}>
          <DashboardDescription>Nenhuma enquete cadastrada.</DashboardDescription>
        </div>
      )}

      {polls.map((poll) => (
        <div className="details-row" key={poll.id}>
          <DashboardDescription>{poll.question}</DashboardDescription>
          <DashboardDescription>Ativa</DashboardDescription>
          <div className="actions">
            <img 
              src="/icon-edit.png" 
              alt="Edit" 
              style={{ cursor: "not-allowed", opacity: 0.5 }} 
              title="Em breve"
            />
            <img 
              src="/icon-link.png" 
              alt="Link" 
              style={{ cursor: "pointer" }} 
              onClick={() => handleCopyLink(poll.id)}
            />
            <img 
              src="/icon-delete.png" 
              alt="Delete" 
              style={{ cursor: "pointer" }} 
              onClick={() => onDelete(poll.id)}
            />
          </div>
        </div>
      ))}

      <div className="details-button-container">
        <DashboardDescriptionText>{polls.length} enquetes totais</DashboardDescriptionText>
        <div className="details-button">
          <ButtonCreatePoll>Anterior</ButtonCreatePoll>
          <ButtonCreatePoll>Próximo</ButtonCreatePoll>
        </div>
      </div>
    </div>
  );
}