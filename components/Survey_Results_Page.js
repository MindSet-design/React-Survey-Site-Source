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
          <h2>{survey.Company}, {survey.Position}</h2>
          <p>{survey.City}, {survey.Province}, {survey.Country}</p>                           
          <h3>Interest Level:{survey.Interest}</h3>
          <h3>Comments:</h3>
          <p>{survey.Comments}</p>
          </li>)}
      </ul>
    )
  }
}

export default SurveyResults;

