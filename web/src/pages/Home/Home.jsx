import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./home-style.css";
import { DescriptionTitle } from "../../components/Description/DescriptionTitle";
import { FilterTabs } from "../../components/FilterTabs/FilterTabs";
import { Cards } from "../../components/Cards/Cards";
import { getPolls } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

export function Home() {
  const [polls, setPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const socketsRef = useRef([]);
  const { user } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const filter = searchParams.get("filter") || "all";

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

  useEffect(() => {
    socketsRef.current.forEach((ws) => ws.close());
    socketsRef.current = [];

    if (polls.length === 0) return;

    const sockets = polls.map((poll) => {
      const WS_BASE_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:3333'
      const ws = new WebSocket(`${WS_BASE_URL}/polls/${poll.id}/results`)

      ws.onmessage = (event) => {
        const { optionId, votes } = JSON.parse(event.data);

        setPolls((prevPolls) =>
          prevPolls.map((p) =>
            p.id !== poll.id
              ? p
              : {
                  ...p,
                  options: p.options.map((option) =>
                    option.id === optionId ? { ...option, votes } : option
                  ),
                }
          )
        );
      };

      return ws;
    });

    socketsRef.current = sockets;

    return () => {
      sockets.forEach((ws) => ws.close());
    };
  }, [polls.length]);

  const handleFilterClick = (newFilter) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("filter", newFilter);
    setSearchParams(newParams);
  };

  const filteredPolls = polls
    .filter((poll) => {
      if (filter === "mine") return poll.user_id === user?.id;
      if (filter === "closed") return false;
      return true;
    })
    .filter((poll) =>
      poll.question.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <>
      <DescriptionTitle>Explore Tendências</DescriptionTitle>

      <div className="container-cards">
        <FilterTabs active={filter === "all"} onClick={() => handleFilterClick("all")}>
          Todos
        </FilterTabs>
        <FilterTabs active={filter === "active"} onClick={() => handleFilterClick("active")}>
          Ativos
        </FilterTabs>
        <FilterTabs active={filter === "closed"} onClick={() => handleFilterClick("closed")}>
          Encerrados
        </FilterTabs>
        <FilterTabs active={filter === "mine"} onClick={() => handleFilterClick("mine")}>
          Minhas enquetes
        </FilterTabs>
      </div>

      <div className="container-cards">
        {isLoading && <p>Carregando enquetes...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && filteredPolls.length === 0 && (
          <p>Nenhuma enquete encontrada.</p>
        )}

        {!isLoading &&
          !error &&
          filteredPolls.map((poll) => (
            <Cards key={poll.id} poll={poll}>
              {poll.question}
            </Cards>
          ))}
      </div>
    </>
  );
}