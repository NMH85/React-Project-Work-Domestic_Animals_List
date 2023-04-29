import { Link } from "react-router-dom";


export const Header = () => {
  
  return (
    
    <div className = " header ">
    
     <h3> Homely Friends for sale </h3>
    
      <Link to="/">Dashboard</Link>
      
      <Link to="/animal/new">Register your Friend</Link>
    
    </div>
  );
};

