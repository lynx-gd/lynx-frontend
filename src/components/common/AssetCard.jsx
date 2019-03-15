import React from "react";
import styled from "styled-components";
import { Box, Image, Heading, Text, Button } from "grommet";
import { FaBed, FaMapMarked, FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";

const PLACEHOLDER =
  "https://c1.staticflickr.com/3/2575/3710599253_3710a2d000_b.jpg";

const AssetCardContainer = styled(Box)`
  box-shadow: 0 4px 20px 0 rgba(46, 84, 117, 0.12);
`;

const AssetTitle = styled(Text)`
  text-transform: capitalize;
  max-width: 40%;
`;

const OwnershiptButton = styled(Button)`
  font-size: 0.95rem;
  color: ${props => props.theme.global.colors.base};
  border: 1px solid;
  border-color: ${props => props.theme.global.colors.base};
  padding: 3px 15px;
  border-radius: 20px;
  margin: 2px 0;
  &:hover {
    border-color: ${props => props.theme.global.colors.brand};
    color: ${props => props.theme.global.colors.brand};
  }
`;

const DetailLink = styled(Link)`
  color: ${props => props.theme.global.colors.brand};
  &:hover {
    text-decoration: none;
    color: #ce1d71;
  }
`;

const Ethereum = styled(FaEthereum)`
  fill: ${props => props.theme.global.colors.focus};
  opacity: 0.4;
`;

const AssetCard = ({ idx, asset }) => (
  <Box
    // margin={idx % 3 === 1 ? "medium" : { vertical: "medium" }}
    basis="1/4"
    pad={{ vertical: "small", horizontal: "small" }}
    align="center"
    direction="column"
  >
    <AssetCardContainer>
      <Image
        height="300px"
        src={
          asset.images && asset.images.length > 0
            ? `http://0.0.0.0:5000/images/${asset.images[0]}`
            : PLACEHOLDER
        }
      />
      <Box
        direction="column"
        height="150px"
        pad={{ vertical: "medium" }}
        justify="between"
      >
        <Box
          align="center"
          direction="row"
          pad={{ horizontal: "medium" }}
          justify="between"
        >
          <AssetTitle weight="bold" truncate>
            {asset.description}
          </AssetTitle>
          <Link to="/">
            <OwnershiptButton plain size="small" label="Proof of ownership" />
          </Link>
        </Box>
        <Box
          direction="row"
          align="center"
          gap="medium"
          pad={{ horizontal: "medium", top: "small" }}
        >
          <Box direction="row" align="center" gap="small">
            <FaBed />
            <Text>1</Text>
          </Box>
          <Box direction="row" align="center" gap="small">
            <FaMapMarked />
            <Text>
              22 m<sup>2</sup>
            </Text>
          </Box>
        </Box>
        <Box
          direction="row"
          align="center"
          gap="medium"
          pad={{ horizontal: "medium", top: "medium" }}
        >
          <Text color="focus">
            {asset.physicalAddress ? asset.physicalAddress : "No address"}
          </Text>
        </Box>
        <Box
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", top: "small" }}
        >
          <Box gap="xxsmall" align="center" direction="row">
            <Ethereum />
            <Text color="focus">{asset.value}</Text>
          </Box>
          <Box>
            <DetailLink to={`/asset/${asset.id}`}> Check it out </DetailLink>
          </Box>
        </Box>
      </Box>
    </AssetCardContainer>
  </Box>
);

export default AssetCard;
