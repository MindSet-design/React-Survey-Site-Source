import './Nav_Bar.css';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
      <div className="Navdiv">       
        <h1 className="Navh1"><Link to= "/React-Survey-Site">Home</Link></h1>
        <h1 className="Navh1"><Link to= "/React-Survey-Site/Survey">Survey</Link></h1>
        <h1 className="Navh1"><Link to= "/React-Survey-Site/Results">Data</Link></h1>
      </div>
    );
  }
  
  export default NavBar;