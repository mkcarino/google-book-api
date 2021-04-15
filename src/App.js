import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "././components/ScrollToTop";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Details from "./pages/Details";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pages/Result/:text/:pageNumber" component={Result} />
        <Route path="/pages/Details/:book" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
