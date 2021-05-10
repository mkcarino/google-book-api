import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "././components/ScrollToTop";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Details from "./pages/Details";


function App() {
  return (
    
    <Router>
      <AuthProvider>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:text/:pageNumber" component={Result} />
        <Route path="/book/:book" component={Details} />
      </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
