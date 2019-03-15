import React from "react";
import styled from "styled-components";
import { Box, Heading, Text } from "grommet";
import { Link } from "react-router-dom";

const TopBarContainer = styled(Box)`
  box-shadow: 0 10px 20px 0 rgba(46, 84, 117, 0.08);
  background-color: #ffffff;
`;

const Title = () => (
  <Box align="center" >
    <Heading level="2" size="small" margin="none">
      LYNX
    </Heading>
  </Box>
);

const TopLink = styled(Link)`
  size: "small";
  text-decoration: none;
  color: ${props => props.theme.global.colors.base};
  font-weight:bold;
  &:hover {
    color: ${props => props.theme.global.colors.brand};
    text-decoration: none !important;
  }
`;

const RightSide = () => (
  <Box gap="large" direction="row" margin={{ right: "large" }}>
    <TopLink to="/my-assets">My Assets</TopLink>
    <TopLink to="/about">About</TopLink>
    <TopLink to="/help">Help</TopLink>
  </Box>
);

const TopBar = () => (
  <TopBarContainer
    direction="row"
    align="center"
    pad="large"
    height="62px"
    width="100%"
    justify="between"
  >
    <Title />
    <RightSide />
  </TopBarContainer>
);

export default TopBar;
