import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// Components
import Header from './components/Header/index';
import People from './components/Content/People';
import Planets from './components/Content/Planets';
import Ships from './components/Content/Ships';
import DetailPeople from './components/Content/DetailPeople';
import DetailShips from './components/Content/DetailShips';
import DetailPlanets from './components/Content/DetailPlanets';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/people' exact component={People} />
          <Route path='/people/:id' component={DetailPeople} />
          <Route path='/ships' exact component={Ships} />
          <Route path='/ships/:id' component={DetailShips} />
          <Route path='/planets' exact component={Planets} />
          <Route path='/planets/:id' component={DetailPlanets} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
