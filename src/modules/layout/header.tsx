import { Link } from "react-router-dom";


export const Header = () => {
  
  return (
    
    <div className ='header'>
    
    <h2> - Pets For Sale - </h2>
    
    
     <h2>
     <Link to="/">- DASHBOARD -</Link>
     </h2>
      
      <h2>
      <Link to="/animal/new">- Register Into Catalog -</Link>
      </h2>
      
    </div>
  
  );
};

