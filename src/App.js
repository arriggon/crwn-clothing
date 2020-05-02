import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const Page404 = () => (
  <div>
    <h1>404 Page not found</h1>
    <p>
      We are sorry, but we couldn't find the page you were trying to navigate
      to!
    </p>
    <p>Please check your URL and try again!</p>
    <p>
      If this issue keeps happening, please{" "}
      <a href="mailto:contact@moritz-b.com">contact us</a>!
    </p>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
