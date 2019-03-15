import React from "react";
import { connect } from "react-redux";
import AddAsset from "../../components/pages/add-asset/AddAsset";
import { addAsset } from "../../store/app/actions";

const AddAssetContainer = props => <AddAsset {...props} />;
const mapStateToProps = state => ({
  user: state.app.user
});

const mapDispatchToProps = dispatch => ({
  addAsset: asset => dispatch(addAsset(asset))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAssetContainer);
