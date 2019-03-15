import React from "react";
import TopBar from "./TopBar";
import { Box } from "grommet";
import { Redirect } from "react-router-dom";
import Main from "./Main";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    step: 1,
    assetType: "Land",
    value: 0,
    description: "",
    images: [],
    poa: {}
  };

  render() {
    const { addAsset } = this.props;
    const { step, assetType, value, description, images, poa } = this.state;
    let actStep = step;
    if (step === 0) {
      return <Redirect to="/" />;
    }
    if (step === 4) {
      console.log(this.state);
      addAsset(this.state);
      actStep = 3;
    }
    const onChange = (name, val) => this.setState({ [name]: val });
    return (
      <Box basis="full">
        <TopBar step={step} onChange={onChange} />
        <Main
          assetType={assetType}
          value={value}
          description={description}
          onChange={onChange}
          step={actStep}
          images={images}
          poa={poa}
        />
      </Box>
    );
  }
}

export default Home;
