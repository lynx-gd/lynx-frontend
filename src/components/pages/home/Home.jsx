import React from "react";
import TopBar from "./TopBar";
import Main from "./Main";
import { Box } from "grommet";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { assets } = this.props;
    return (
      <Box basis="full">
        <TopBar />
        <Main assets={assets} />
      </Box>
    );
  }
}

export default Home;
