import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/app/actions";
import Home from "../../components/pages/home/Home";

const HomeContainer = props => <Home {...props} />;
const mapStateToProps = state => ({
  user: state.app.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
