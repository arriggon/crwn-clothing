import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, withRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const Page404 = withRouter(({ history }) => (
  <div className="homepage">
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
    <button onClick={() => history.push("/")}>Home</button>
  </div>
));

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
