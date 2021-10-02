import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// Components
import Header from './components/Header/index';
import People from './components/Content/People';
import Planets from './components/Content/Planets';
import Ships from './components/Content/Ships';
import DetailPeople from './components/Content/DetailPeople';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/people' exact component={People} />
          <Route path='/people/:id' component={DetailPeople} />
          <Route path='/ships' component={Ships} />
          <Route path='/planets' component={Planets} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
