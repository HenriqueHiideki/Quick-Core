import "./header-style.css";
import { Title } from "../Title/Title";
import { ButtonCreatePoll } from "../Button/Button-Create-Poll";
import { UserIcon } from "../UserIcon/UserIcon";
import { SearchBar } from "../SearchBar/Search-Bar";

export function Header() {
  return (
    <header>
      <div className="header-container">
        <img
          src="/quick-core-logo.png"
          alt="icone do quick core"
          className="logo"
        />
        <Title>Quick Core</Title>
      </div>
      <SearchBar>Pesquise Enquetes, tópicos ou criadores...</SearchBar>
      <div className="header-container">
        <ButtonCreatePoll>Create Poll</ButtonCreatePoll>
        <UserIcon></UserIcon>
      </div>
    </header>
  );
}
