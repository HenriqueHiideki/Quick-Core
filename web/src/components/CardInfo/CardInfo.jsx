import "./cardinfo-style.css";

export function CardInfo({icon, label, value}) {
  return (
    <div className="card-info">
      <div>
        <img src={icon} className="card-info-img" />
      </div>
      <div>
        <p className="card-info-resume">{label}</p>
        <p className="card-info-data">{value}</p>
      </div>
    </div>
  );
}
