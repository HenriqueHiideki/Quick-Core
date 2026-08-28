import { useEffect, useState } from "react";
import "./home-style.css";
import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { FilterTabs } from "../../components/FilterTabs/FilterTabs";
import { Cards } from "../../components/Cards/Cards";
import { getPolls } from "../../services/api";

export function Home() {
  const [polls, setPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPolls()
      .then((data) => {
        const pollsList = Array.isArray(data) ? data : data.polls || [];
        setPolls(pollsList);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <DescriptionTitle>Explore Tendências</DescriptionTitle>

      <div className="container-cards">
        <FilterTabs>Todos</FilterTabs>
        <FilterTabs>Ativos</FilterTabs>
        <FilterTabs>Encerrados</FilterTabs>
        <FilterTabs>Minhas enquetes</FilterTabs>
        <FilterTabs>
          <img
            src="/icon-filter.png"
            alt="icone de filtro"
            className="button-img"
          />
          <img
            src="/icon-filter-white.png"
            alt="icone de filtro branco"
            className="button-img-hover"
          />
          Filtro
        </FilterTabs>
      </div>

      <div className="container-cards">
        {isLoading && <p>Carregando enquetes...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && polls.length === 0 && (
          <p>Nenhuma enquete encontrada.</p>
        )}

        {!isLoading &&
          !error &&
          Array.isArray(polls) &&
          polls.map((poll) => (
            <Cards key={poll.id} poll={poll}>
              {poll.question}
            </Cards>
          ))}
      </div>
    </>
  );
}
