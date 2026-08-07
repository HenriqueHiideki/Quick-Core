import { ButtonCreatePoll } from "../Button/Button-Create-Poll";
import { DashboardDescription } from "../Description/DashboardDescription";
import { DashboardDescriptionText } from "../Description/DashboardDescriptionText";
import { DescriptionText } from "../Description/DescriptionText";
import "./details-style.css";

export function Details() {
  return (
    <div className="details-container">
      <div className="details-header">
        <DashboardDescriptionText>Poll Details</DashboardDescriptionText>
        <DashboardDescriptionText>Status</DashboardDescriptionText>
        <DashboardDescriptionText className="col-actions">
          Actions
        </DashboardDescriptionText>
      </div>
      <div className="details-row">
        <DashboardDescription>Favorite UI Framework 2026?</DashboardDescription>
        <DashboardDescription>Status</DashboardDescription>
        <div className="actions">
          <img src="/icon-edit.png" alt="Edit" />
          <img src="/icon-link.png" alt="Link" />
          <img src="/icon-delete.png" alt="Delete" />
        </div>
      </div>
      <div className="details-row">
        <DashboardDescription>Estratégia de Marketing?</DashboardDescription>
        <DashboardDescription>Status</DashboardDescription>
        <div className="actions">
          <img src="/icon-edit.png" alt="Edit" />
          <img src="/icon-link.png" alt="Link" />
          <img src="/icon-delete.png" alt="Delete" />
        </div>
      </div>
      <div className="details-row">
        <DashboardDescription>
          Qual Arquitetura usar no projeto?
        </DashboardDescription>
        <DashboardDescription>Status</DashboardDescription>
        <div className="actions">
          <img src="/icon-edit.png" alt="Edit" />
          <img src="/icon-link.png" alt="Link" />
          <img src="/icon-delete.png" alt="Delete" />
        </div>
      </div>
      <div className="details-button-container">
        <DashboardDescriptionText>3 de 12 enquetes</DashboardDescriptionText>
        <div className="details-button">
          <ButtonCreatePoll>Anterior</ButtonCreatePoll>
          <ButtonCreatePoll>Próximo</ButtonCreatePoll>
        </div>
      </div>
    </div>
  );
}
