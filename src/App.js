import './App.css';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './Checkout';

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header/>          
        <Switch>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='/'>
            {/* Home */}
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
