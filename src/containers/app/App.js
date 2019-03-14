import React from "react";
import { connect } from "react-redux";
import { initialize, removeNotification } from "../../store/app/actions";
import { getIsInitialized, getUser } from "../../store/app/selectors";
import App from "../../App";

const AppContainer = props => <App {...props} />;
const mapStateToProps = state => ({
  isInitialized: getIsInitialized(state),
  user: getUser(state),
  notification: state.app.notification
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(initialize()),
  removeNotification: () => dispatch(removeNotification())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
