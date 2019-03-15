import React from "react";
import styled from "styled-components";
import { Box, Button, Text, Image, Heading } from "grommet";
import { FaBed, FaMapMarked, FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";

const PLACEHOLDER =
  "https://c1.staticflickr.com/3/2575/3710599253_3710a2d000_b.jpg";

const ActionButton = styled(Button)`
  margin-top: 20px;
  height: 40px;
  color: ${props => props.theme.global.colors.brand};
  width: 180px;
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

const Ethereum = styled(FaEthereum)`
  fill: ${props => props.theme.global.colors.focus};
  opacity: 0.4;
`;

const AssetDesc = styled(Text)`
  width: 185px;
  height: 22px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.22;
  letter-spacing: 0.4px;
  text-align: left;
  color: #08132c;
`;

const Main = (props) => {
  const { assets, id } = props;
  const myasset = assets.find(asset => asset.id == id);
  console.log(myasset);
  return (<Box direction="row" pad="large">
    <Image
        gap="small"
        height="380px"
        width="600px"
        src={
          myasset.images && myasset.images.length > 0
            ? `http://0.0.0.0:5000/images/${myasset.images[0]}`
            : PLACEHOLDER
        }
      />
      <Box pad="large" direction="column">
      <AssetDesc>{myasset.description}</AssetDesc>
      <Text style={{paddingTop:"10px"}}>{myasset.physicalAddress}</Text>
      <Box direction="row" style={{paddingTop:"10px"}}><Ethereum /><Text>{myasset.value}</Text></Box>
      <Text style={{paddingTop:"10px", fontSize:"14px"}}>Go Bangkok studio is located in the heart of Bangkok and is within walking distance to BTS &amp; Chao Praya River.
This bright modern studio features a separate kitchen, a partitioned bedroom and a living area as well as a western style 3 piece bathroom</Text>
<ActionButton label="Buy me!" plain />
      </Box>
  </Box>)
};

export default Main;
