// src/components/SectionCard.jsx
import { Link } from "react-router-dom";

function SectionCard({ title, description, linkTo }) {
  return (
    <div className="section-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={linkTo} className="btn small">
        자세히 보기
      </Link>
    </div>
  );
}

export default SectionCard;
