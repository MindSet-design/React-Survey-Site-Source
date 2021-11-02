import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Survey.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Company: '', Name: '', City: '', Province: '', Country: '',

      RFV: '', Industry: '', WorkLocation: '', TravelReq: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    axios.post('https://mongodb-results-api.herokuapp.com/results/post', {
      Name: this.state.Name,
      Company: this.state.Company,
      City: this.state.City ,
      Province: this.state.Province,
      Country: this.state.Country,
      RFV: this.state.RFV,
      Industry: this.state.Industry,
      WorkLocation: this.state.WorkLocation,
      TravelReq: this.state.TravelReq
    })
    
    alert('thank you for your submission');
    this.props.history.push("/React-Survey-Site/Results");

    //having trouble getting this working and rerouting the page
    //but there is other stuff I'd rather working on so  this is 
    //just the way it is for now unless I come back to work on it

    // .then(function(res)  {   
    //   console.log(res);
    //   alert('Your submission was successfull! Go to the data page');
    //   res.props.history.push("/results");      
    // })

    // .catch(function(error) {
    //   console.log(error);
    //   alert('Your submission failed please try again later');
    // })

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <fieldset className="info">
            {/*PERSONAL INFORMATION*/}
            <legend>Personal/Work Information</legend>

            <input
              className="textinput"
              placeholder="Name"
              name="Name"
              type="text"
              value={this.state.Name}
              onChange={this.handleChange} /><br />

            <input
              className="textinput"
              placeholder="Company"
              name="Company"
              type="text"
              value={this.state.Company}
              onChange={this.handleChange} /><br />
          
            <input
              className="textinput"
              placeholder="City"
              name="City"
              type="text"
              value={this.state.City}
              onChange={this.handleChange} /><br />
          
            <input
              className="textinput"
              placeholder="Province/State"
              name="Province"
              type="text"
              value={this.state.Province}
              onChange={this.handleChange} /><br />
          
            <input
              className="textinput"
              placeholder="Country"
              name="Country"
              type="text"
              value={this.state.Country}
              onChange={this.handleChange} /> <br />
            
          </fieldset>

          <fieldset>
            <legend>Survey</legend>
            {/*REASON FOR VIEWING*/}
            <label className="Question">
              Reason for viewing
            </label > <br />

            <div className="answer"> 
              <input 
              className="bubbles"
              id="workRFV"
              name="RFV"
              type="radio"
              value="Reviewing Resume"
              onChange={this.handleChange}
              />
              <label htmlFor="workRFV">Reviewing Resume</label>

              <input 
              className="bubbles"
              id="otherRFV"
              name="RFV"
              type="radio"
              value="Other"
              onChange={this.handleChange}
              /> 
              <label htmlFor="otherRFV">Other</label>
            </div><br />
       
            {/*INDUSTRY*/}

            <label className="Question">
              Industry
            </label> <br />

            <div className="answer"> 
              <input 
              className="bubbles"
              id="elec"
              name="Industry"
              type="radio"
              value="Electronics"
              onChange={this.handleChange}
              /> 
              <label htmlFor="elec">Electronics</label>
            
              <input 
              className="bubbles"
              id="soft"
              name="Industry"
              type="radio"
              value="Software"
              onChange={this.handleChange}
              /> 
              <label htmlFor="soft">Software</label>

              <input
              className="bubbles"
              id="otherIndustry" 
              name="Industry"
              type="radio"
              value="Other"
              onChange={this.handleChange}
              /> 
              <label htmlFor="otherIndustry">Other</label>
            </div><br />

            {/*WORK LOCATION*/}

            <label className="Question">
              Work Location
            </label> <br />

            <div className="answer"> 

              <input 
              className="bubbles"
              id="onsite"
              name="WorkLocation"
              type="radio"
              value="On Site"
              onChange={this.handleChange}
              /> 
              <label htmlFor="onsite">On Site</label>

              <input 
              className="bubbles"
              id="remote"
              name="WorkLocation"
              type="radio"
              value="Remote"
              onChange={this.handleChange}
              /> 
              <label htmlFor="remote">Remote</label>
            </div> <br />

            {/*TRAVEL REQUIRED*/}

            <label className="Question">
               Traveled Required
            </label> <br />

            <div className="answer">  
              <input
              className="bubbles"
              id="yes" 
              name="TravelReq"
              type="radio"
              value="Yes"
              onChange={this.handleChange}
              /> 
              <label htmlFor="yes">Yes</label>

              <input 
              className="bubbles"
              id="no"
              name="TravelReq"
              type="radio"
              value="No"
              onChange={this.handleChange}
              /> 
              <label htmlFor="no">No</label>
            </div>

          </fieldset>
          <input className="submit" type="submit" value="Submit" />
        </fieldset>
        
      </form>
    );
  }
  
}
  
  export default withRouter(Form);