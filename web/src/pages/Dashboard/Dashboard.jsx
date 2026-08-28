import { useEffect, useState } from "react";
import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { Details } from "../../components/Details/Details";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { getPolls, deletePoll } from "../../services/api";
import "./dashboard.css";

export function Dashboard() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getPolls()
      .then((data) => {
        const pollsList = Array.isArray(data) ? data : data.polls || [];
        setPolls(pollsList);
      })
      .catch(console.error);
  }, []);

  const handleDeletePoll = async (id) => {
    const confirm = window.confirm("Tem certeza que deseja excluir esta enquete?");
    if (!confirm) return;

    try {
      await deletePoll(id);
      setPolls(polls.filter((poll) => poll.id !== id));
    } catch (error) {
      alert(error.message);
    }
  };

  const totalVotes = polls.reduce((acc, poll) => {
    const pollVotes = poll.options?.reduce((sum, opt) => sum + (opt.votes || 0), 0) || 0;
    return acc + pollVotes;
  }, 0);

  return (
    <div>
      <DescriptionTitle>Minhas Enquetes</DescriptionTitle>

      <div className="dashboard-content">
        <Details polls={polls} onDelete={handleDeletePoll} />

        <div className="cards-info-container">
          <CardInfo icon="/icon-up.png" label="Votos Totais" value={totalVotes.toString()} />
          <CardInfo icon="/icon-verified.png" label="Enquetes abertas" value={polls.length.toString()} />
          <CardInfo icon="/icon-watch-blue.png" label="Encerramento" value="7 dias" />
        </div>
      </div>
    </div>
  );
}