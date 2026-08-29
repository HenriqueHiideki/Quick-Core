import { useNavigate } from "react-router-dom";
import "./side-bar-estilos.css";
import { SideBarItem } from "../SidebarItem/SideBarItem";
import { Title } from "../Title/Title";
import { ButtonCreatePoll } from "../Button/Button-Create-Poll";

export function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <Title>Seja Bem-Vindo!</Title>
      </div>
      <ul className="SideBarList">
        {SideBarItem.map((value, key) => {
          return (
            <li
              key={key}
              className="row"
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => navigate(value.link)}
            >
              <div className="sidebar-img">{value.icon}</div>{" "}
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
      <div className='sidebar-footer'>
        <ButtonCreatePoll onClick={() => navigate("/create-poll")}>
          Criar Enquete
        </ButtonCreatePoll>
      </div>
    </div>
  );
}