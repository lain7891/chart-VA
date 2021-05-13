import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home"

function App() {
  return (
    <div>
<Router>
  <Switch>
  <Route exact path="/" component={Home} />
  </Switch>
</Router>
       
    </div>
  );
}

export default App;
