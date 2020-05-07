import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

const Page404 = () => (
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
    <p>
      <button>
        <Link to="/">GO HOME</Link>
      </button>
    </p>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  authSubscription = null;

  componentDidMount() {
    this.authSubscription = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(this.state.currentUser);
    });
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
          <Route exact path="/error" component={Page404} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    );
  }

  componentWillUnmount() {
    this.authSubscription();
  }
}

export default App;
