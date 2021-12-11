import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path='/' component={First}></Route>
          <Route exact path='/first' component={First}></Route>
          <Route exact path='/second' component={Second}></Route>
          <Route exact path='/third' component={Third}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
