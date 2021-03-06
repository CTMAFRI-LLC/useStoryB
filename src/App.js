import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//importing components
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import SafePage from "./pages/SafePage";

//importing styles
import "./App.css";
import { AppStore } from "./stores/app-store";

function App() {
  return (
    <AppStore>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/sign-up" exact>
              <Auth />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/safe" exact>
              <SafePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppStore>
  );
}

export default App;
