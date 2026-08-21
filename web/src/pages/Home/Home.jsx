import './home-style.css'
import { DescriptionTitle } from '../../components/Description/DescriptionTitle';
import { ButtonCreatePoll } from '../../components/Button/Button-Create-Poll';
import { FilterTabs } from '../../components/FilterTabs/FilterTabs';
import { Cards } from '../../components/Cards/Cards';


export function Home() {
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
          />{" "}
          Filtro
        </FilterTabs>
      </div>

      <div className="container-cards">
        <Cards>Qual linguagem devemos usar?</Cards>
        <Cards>Qual tecnologia voce tem experiencia?</Cards>
        <Cards>Qual linguagem é mais eficaz?</Cards>
      </div>
    </>
  );
}
