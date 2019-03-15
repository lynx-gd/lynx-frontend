import React from "react";
import { connect } from "react-redux";
import Home from "../../components/pages/asset-detail/AssetDetail";

const AssetDetailContainer = props => <Home {...props} />;
const mapStateToProps = state => ({
  user: state.app.user,
  assets: state.app.assets
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetDetailContainer);
