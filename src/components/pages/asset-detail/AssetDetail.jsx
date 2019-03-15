import React from "react";
import { Box } from "grommet";
import TopBar from "./TopBar";
import Main from "./Main";

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { assets } = this.props;
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <Box basis="full">
        <TopBar />
        <Main assets={assets} id={id} />
      </Box>
    );
  }
}

export default AssetDetail;
