import React from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Select,
  Text,
  FormField,
  TextInput,
  TextArea
} from "grommet";
import ImageUploader from "react-images-upload";

const Description = ({ label }) => (
  <Box direction="row" pad="large">
    <Text weight="bold">{label}</Text>
  </Box>
);

const Details = ({ onChange, assetType, value, description }) => (
  <Box direction="column">
    <Description label="Asset details" />
    <Box direction="column">
      <Box justify="center" direction="row" gap="xlarge">
        <FormField label="Choose an asset type">
          <Select
            options={["Land", "Apartment", "House"]}
            value={assetType}
            onChange={({ option }) => onChange("assetType", option)}
          />
        </FormField>
        <FormField label="Set the asset value">
          <TextInput
            value={value}
            onChange={e => {
              console.log(e.target.value);
              onChange("value", e.target.value);
            }}
            type="number"
            placeholder="type here"
          />
        </FormField>
      </Box>
      <Box pad="medium" width="100%" justify="center" direction="row">
        <FormField style={{ width: "760px" }} label="Asset description">
          <TextArea
            value={description}
            onChange={e => onChange("description", e.target.value)}
            width="100%"
            size="xlarge"
          />
        </FormField>
      </Box>
    </Box>
  </Box>
);

const Photos = ({ onChange, images }) => (
  <Box direction="column">
    <Description label="Asset photos" />

    <Box justify="center" direction="row" gap="xlarge">
      <Box basis="large">
        <ImageUploader
          withPreview
          label="Upload your images"
          buttonText="Upload"
          buttonStyles={{
            background: "linear-gradient(81deg, #ec2383, #e63296 25%, #df42ab)"
          }}
          onChange={(pictureFiles, _pictureDataURLs) =>
            onChange("images", images.concat(pictureFiles))
          }
        />
      </Box>
    </Box>
  </Box>
);

const Docs = ({ onChange, _poa }) => {
  return (
    <Box direction="column">
      <Description label="Proof of ownership" />

      <Box justify="center" direction="row" gap="xlarge">
        <Box basis="large">
          <ImageUploader
            imgExtension={[".pdf"]}
            label="Upload your proof of ownership"
            buttonText="Upload"
            buttonStyles={{
              background:
                "linear-gradient(81deg, #ec2383, #e63296 25%, #df42ab)"
            }}
            onChange={(pictureFiles, _pictureDataURLs) =>
              onChange("poa", pictureFiles.length > 0 ? pictureFiles[0] : {})
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

const MainAdd = ({
  step,
  assetType,
  onChange,
  value,
  description,
  images,
  poa
}) => {
  switch (step) {
    case 1: {
      return (
        <Details
          onChange={onChange}
          assetType={assetType}
          value={value}
          description={description}
        />
      );
    }
    case 2: {
      return <Photos onChange={onChange} images={images} />;
    }
    case 3: {
      return <Docs onChange={onChange} />;
    }
    default: {
      console.log(value);
      return <h1>Error</h1>;
    }
  }
};

export default MainAdd;
