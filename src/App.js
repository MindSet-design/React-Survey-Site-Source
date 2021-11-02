import SurveyResults from './components/Survey_Results_Page';
import Home from './components/Home';
import NavBar from './components/Nav_Bar';
import Form from './components/Survey';
import {Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <NavBar />
        <Route exact path="/React-Survey-Site" component={Home}/>
        <Route exact path="/React-Survey-Site/Survey" component={Form}/>
        <Route exact path="/React-Survey-Site/Results" component={SurveyResults}/>
        
    </div>
  );
}

export default App;
