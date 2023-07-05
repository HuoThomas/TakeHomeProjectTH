import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import Detail from "./components/Detail";
import Create from "./components/Create";
import Edit from "./components/Edit"

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/detail/:id" children={<Detail/>}></Route>
      <Route path="/edit/:id" children={<Edit/>}></Route>
        <Route path="/create">
          <Create/>
        </Route>
        <Route path="/" exact component={Recipes} />
        <Route path="/detail">
          <Detail/>
        </Route>
        <Route path="/edit">
          <Detail/>
        </Route>
        <Route path="/recipes">
          <Create />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
