import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { Details } from "../../components/Details/Details";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import "./dashboard.css";

export function Dashboard() {
  return (
    <div>
      <DescriptionTitle>Minhas Enquetes</DescriptionTitle>

      <div className="dashboard-content">
        <Details />

        <div className="cards-info-container">
          <CardInfo icon="/icon-up.png" label="Votos Totais" value="250" />
          <CardInfo icon="/icon-verified.png" label="Enquetes abertas" value="14" />
          <CardInfo icon="/icon-watch-blue.png" label="Encerramento" value="4 dias" />
        </div>
      </div>
    </div>
  );
}
