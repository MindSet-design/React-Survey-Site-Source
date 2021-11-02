import React, { Component } from 'react';
import axios from 'axios';
import './Survey_Results_Page.css';

class SurveyResults extends Component {
  state = {
    surveys: []
  }

  componentDidMount() {
    axios.get(`https://mongodb-results-api.herokuapp.com/results/get`)
      .then(res => {
        const surveys = res.data;
        this.setState({ surveys });
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert('failed to fetch data');
      }) 
  }

  render() {
    return (
      <ul>
        { this.state.surveys.map(survey => <li key={survey._id}>
          <h2>{survey.Name}, {survey.Company}</h2>
          <p>{survey.City}, {survey.Province}, {survey.Country}</p>                           
          <h3>{survey.RFV}, {survey.Industry}</h3>
          <p>{survey.WorkLocation}, {survey.TravelReq}</p>
          </li>)}
      </ul>
    )
  }
}

export default SurveyResults;

