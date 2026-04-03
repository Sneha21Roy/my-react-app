import { Bookmark } from "lucide-react";

function Card({ company, logo, role, type, level, salary, city }) {
  return (
    <div className="card">
      
      <div className="top">
        <img src={logo} alt={company} />
        <button>Save <Bookmark size={12} /></button>
      </div>

      <div className="center">
        <h3>{company} <span>5 days ago</span></h3>
        <h2>{role}</h2>

        <div className="tag">
          <h4>{type}</h4>
          <h4>{level}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <div>
            <h3>{salary}</h3>
            <p>{city}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

    </div>
  );
}

export default Card;
