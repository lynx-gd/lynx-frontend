import React from "react";
import TopBar from "./TopBar";
import Main from "./Main";
import { Box } from "grommet";
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { assets, collect } = this.props;
    return (
      <Box basis="full">
        <TopBar />
        <Main collect={collect} assets={assets} />
      </Box>
    );
  }
}

export default Home;
