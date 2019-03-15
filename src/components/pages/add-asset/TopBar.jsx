import React from "react";
import styled from "styled-components";
import { Box, Heading, Text, Button, Meter, Stack } from "grommet";
import { Link } from "react-router-dom";

const TopBarContainer = styled(Box)`
  box-shadow: 0 10px 20px 0 rgba(46, 84, 117, 0.08);
  background-color: #ffffff;
`;

const LeftSide = ({ onClick }) => (
  <Box align="center">
    <Button plain label="Back" onClick={() => onClick()} />
  </Box>
);

const RightSide = ({ onClick }) => (
  <Box gap="large" direction="row" margin={{ right: "large" }}>
    <Button onClick={() => onClick()} label="Next" color="focus" />
  </Box>
);

const Circle = styled(Box)`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  bottom: 5px;
  font-weight: bold;
  position: relative;
  color:white;
`;

const STEPS = [
  { val: 1, label: "Details" },
  { val: 2, label: "Photos" },
  { val: 3, label: "Documents" }
];

const Progress = ({ value }) => (
  <Stack>
    <Meter
      background="bright"
      thickness="small"
      values={[{ value: (value * 100) / 3, color: "brand" }]}
      size="large"
      round
    />
    <Box direction="row" align="center" justify="evenly">
      {STEPS.map(({ val, label }) => {
        const color = value >= val ? "brand" : "bright";
        return (
          <Box key={val} align="center" width="33%" direction="column">
            <Circle align="center" justify="center" background={color}>
              {val}
            </Circle>
            <Text color={color}>{label}</Text>
          </Box>
        );
      })}
    </Box>
  </Stack>
);

const TopBar = ({ onChange, step }) => (
  <TopBarContainer
    direction="row"
    align="center"
    pad="large"
    height="62px"
    width="100%"
    justify="between"
  >
    <LeftSide
      onClick={() => {
        onChange("step", step - 1);
      }}
    />
    <Progress value={step} />
    <RightSide
      onClick={() => {
        onChange("step", step + 1);
      }}
    />
  </TopBarContainer>
);

export default TopBar;
