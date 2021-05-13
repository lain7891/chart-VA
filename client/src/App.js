import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home"
import Student from "./containers/Student";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
<Router>
  <NavBar/>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/student" component={Student} />
  </Switch>
</Router>
       
    </div>
  );
}

export default App;
