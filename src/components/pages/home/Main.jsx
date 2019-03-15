import React from "react";
import styled from "styled-components";
import { Box, Button, Text } from "grommet";
import { Link } from "react-router-dom";
import AssetGrid from "../../common/AssetGrid";

const LeftSide = () => (
  <Box align="center" justify="center">
    <Text weight="bold">Purchase an asset</Text>
  </Box>
);

const ActionButton = styled(Button)`
  height: 40px;
  color: ${props => props.theme.global.colors.brand};
  width: 220px;
  font-size: "0.9rem";
  border-radius: 20px;
  text-align: center;

  font-weight: bold;
  border: 1px solid;
  border-color: ${props => props.theme.global.colors.brand};
  &:hover {
    color: white;
    background-image: linear-gradient(81deg, #ce1d71, #cb217b 19%, #c52b92);
  }
`;

const PrimaryButton = styled(ActionButton)`
  background-image: linear-gradient(81deg, #ec2383, #e63296 25%, #df42ab);
  color: white;
`;

const RightSide = ({ collect }) => (
  <Box direction="row" gap="medium">
    <Link to="/add-asset">
      <PrimaryButton label="New Asset" plain />
    </Link>
    <ActionButton onClick={collect} label="Collect Dividend" plain />
  </Box>
);

const ActionLine = ({ collect }) => (
  <Box direction="row" pad={{ horizontal: "small" }} justify="between">
    <LeftSide />
    <RightSide collect={collect} />
  </Box>
);

const Main = ({ assets, collect }) => (
  <Box pad={{ horizontal: "large", vertical: "large" }}>
    <ActionLine collect={collect} />
    <AssetGrid assets={assets} />
  </Box>
);

export default Main;
