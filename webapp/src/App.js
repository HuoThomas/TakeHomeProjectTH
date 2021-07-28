import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/recipes/:recipeId" component={Recipe} />
        <Route path="/" exact component={Recipes} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
