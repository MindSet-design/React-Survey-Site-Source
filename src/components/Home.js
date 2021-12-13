import './Home.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Home extends Component {

  componentDidMount() {
    axios.get(`https://mongodb-results-api.herokuapp.com/results/get`)
      .then(res => {
        const surveys = res.data;
        console.log(surveys);
      })
      .then(function (response) {
        console.log(response);
      })
  }

  render(){
    return (
      <div className="Home">       
        <p className="Homep">Welcome to my survey site.  Provide as much or as little info as 
        you want, none of the fields are required.  I really appreciate the survey being filled
        out as it helps me gauge interest in my applications.</p>

        <h1 className="Homeh1"><Link to= "/React-Survey-Site/Survey">Survey &#10140;</Link></h1>

 
      </div>   
    );
  }
} 
  export default Home;