import React from "react";
import { connect } from "react-redux";
import Home from "../../components/pages/home/Home";
import {collect} from "../../store/app/actions"

const HomeContainer = props => <Home {...props} />;
const mapStateToProps = state => ({
  user: state.app.user,
  assets: state.app.assets
});

const mapDispatchToProps = dispatch => ({
  collect: () => dispatch(collect())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
