import axios from 'axios';
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Survey.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Company: '', Position: '', City: '', Province: '', Country: '',

      Interest:'', Comments:''

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
      Company: this.state.Company,
      Position: this.state.Position,
      City: this.state.City,
      Province: this.state.Province,
      Country: this.state.Country,
      Interest: this.state.Interest,
      Comments: this.state.Comments
    })
    
    alert('thank you for your submission');
    this.props.history.push("/React-Survey-Site/Results");

    //having trouble getting this working and rerouting the page
    //but there is other stuff I'd rather working on so  
    //could be fixed by making a div with buttons instead of alerts
    

    // .then(function(res)  {   
    //   console.log(res);
    //   alert('Your submission was successfull! Go to the data page');      
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
              placeholder="Company"
              name="Company"
              type="text"
              value={this.state.Company}
              onChange={this.handleChange} /><br />

            <input
              className="textinput"
              placeholder="Position"
              name="Position"
              type="text"
              value={this.state.Position}
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
            <legend>Interest/Comments</legend>

            {/*interest level / Comments*/}

            <label className="Question">
               Interest Level
            </label> <br />

            <div className="answer">  
              <input
              className="bubbles"
              id="weak" 
              name="Interest"
              type="radio"
              value="weak"
              onChange={this.handleChange}
              /> 
              <label htmlFor="weak">weak</label>

              <input 
              className="bubbles"
              id="below"
              name="Interest"
              type="radio"
              value="below average"
              onChange={this.handleChange}
              /> 
              <label htmlFor="below">below average</label>

              <input 
              className="bubbles"
              id="average"
              name="Interest"
              type="radio"
              value="average"
              onChange={this.handleChange}
              /> 
              <label htmlFor="average">average</label>

              <input 
              className="bubbles"
              id="above"
              name="Interest"
              type="radio"
              value="above average"
              onChange={this.handleChange}
              /> 
              <label htmlFor="above">above average</label>

              <input 
              className="bubbles"
              id="strong"
              name="Interest"
              type="radio"
              value="strong"
              onChange={this.handleChange}
              /> 
              <label htmlFor="strong">strong</label>

            </div>
            <label className="Question">
               Comments
            </label> <br />

            <div className='answer'>
              <textarea
                className="textinput"
                placeholder="Comments"
                name="Comments"
                type="text"
                rows="4"
                cols="50"
                maxlength="250"
                value={this.state.Comments}
                onChange={this.handleChange} /> <br />
            </div>

          </fieldset>
          <input className="submit" type="submit" value="Submit" />
        </fieldset>
        
      </form>
    );
  }
  
}
  
  export default withRouter(Form);