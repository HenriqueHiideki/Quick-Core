import { DescriptionText } from "./DescriptionText";
import "./description-style.css";

export function DescriptionTitle(props) {
  return (
    <div className="content-title">
      <h2 className="description-title">{props.children}</h2>
      <DescriptionText>
        Participe da conversa e veja o que a comunidade está decidindo em tempo
        real.
      </DescriptionText>
    </div>
  );
}
