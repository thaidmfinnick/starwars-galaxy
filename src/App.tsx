import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import DetailPeople from './screens/People/DetailPeople';
import ListPeople from './screens/People/ListPeople';
import DetailPlanets from './screens/Planets/DetailPlanets';
import ListPlanets from './screens/Planets/ListPlanets';
import DetailShips from './screens/Ships/DetailShips';
import ListShips from './screens/Ships/ListShips';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route path='/people' exact component={ListPeople} />
        <Route path='/people/:id' component={DetailPeople} />
        <Route path='/ships' exact component={ListShips} />
        <Route path='/ships/:id' component={DetailShips} />
        <Route path='/planets' exact component={ListPlanets} />
        <Route path='/planets/:id' component={DetailPlanets} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
