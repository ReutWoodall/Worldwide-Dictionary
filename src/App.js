 import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Country from './components/Country';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Country} />
          <Route path={`/country/:countryName`} component={Country} />
        </Switch>
      </Router>  
    </div>
  );
}

export default App;
