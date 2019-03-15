import React from "react";
import { connect } from "react-redux";
import Home from "../../components/pages/home/Home";

const HomeContainer = props => <Home {...props} />;
const mapStateToProps = state => ({
  user: state.app.user,
  assets: state.app.assets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
