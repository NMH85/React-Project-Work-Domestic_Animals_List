import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <div className="header">
      <Link to="/">Dashboard</Link>
      <Link to="/animal">Domestic Animals</Link>
      <Link to="/animal/new">Add new one</Link>
    </div>
  );
};