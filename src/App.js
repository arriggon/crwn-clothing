import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

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
  authSubscription = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authSubscription = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/error" component={Page404} />
          <Route>
            <Redirect to="/error" />
          </Route>
        </Switch>
      </div>
    );
  }

  componentWillUnmount() {
    if (!!this.authSubscription) {
      this.authSubscription();
    }
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
