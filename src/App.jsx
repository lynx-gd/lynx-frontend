import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import Home from "./containers/home/Home";
import AddAsset from "./containers/add-asset/AddAsset";
import { history } from "./index";
import Notification from "./components/notification/Notification";
import AssetDetail from "./containers/asset-detail/AssetDetail";

function PrivateRoute({ user, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends React.Component {
  constructor(props) {
    props.initialize();
    super(props);
  }

  render() {
    const {
      isInitialized,
      user,
      notification,
      removeNotification
    } = this.props;
    if (!isInitialized) {
      return <h1> Loading </h1>;
    }
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/asset/:id" component={AssetDetail} />
            <Route exact path="/add-asset" component={AddAsset} />
            <Route exact path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
        <Notification {...notification} onClose={removeNotification} />
      </React.Fragment>
    );
  }
}

export default App;
