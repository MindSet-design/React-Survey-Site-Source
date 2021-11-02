import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="Home">       
        <h2 className="Homeh2">Welcome to my survey site. If reviewing
        my resume answer the survey for the job applied for. Otherwise 
        answer for your own job. Provide as much or as little info as 
        you want to none of the fields are requierd.</h2>

        <h1 className="Homeh1"><Link to= "/React-Survey-Site/Survey">Survey &#10140;</Link></h1>
 
      </div>   
    );
  }
  
  export default Home;