import React from "react";
import styled from "styled-components";
import { Box, Heading, Text } from "grommet";
import { Link } from "react-router-dom";
import AssetCard from "./AssetCard";

const AssetGrid = ({ assets }) => {
  console.log(assets);
  if (assets.length === 0) {
    return <h1>Loading</h1>;
  }
  return (
    <Box pad={{vertical:"medium"}} justify='start' direction="row" wrap>
      {assets.map((asset, idx) => <AssetCard idx={idx} key={asset.id} asset={asset} />)}
    </Box>
  );
};

export default AssetGrid;
