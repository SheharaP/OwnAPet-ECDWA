/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Text, Image } from "@aws-amplify/ui-react";
export default function AboutUsSection(props) {

  const { image, information, heading, button, buttonLink, ...rest } = props;

  let navigate = useNavigate();

  return (
    <Flex
      gap="10px"
      direction="column"
      width="100vw"
      height="640px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="center"
      marginTop="60px"
      padding="120px 240px 120px 240px"
      backgroundColor="rgba(255,255,255,1)"
      boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
      display="flex"
      {...rest}
    >
      <Flex
        gap="40px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
      >
        <Flex
          gap="40px"
          direction="row"
          width="auto"
          height="auto"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
        >
          <Image
            src={image}
            width="550px"
            height="564px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            marginRight="120px"
          ></Image>
          <Flex 
          direction="column"
          marginTop="60px">
            <Text
              fontFamily="Inter"
              fontSize="32px"
              fontWeight="700"
              color="rgba(4,125,149,1)"
              lineHeight="40px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="400px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={heading}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              children={information}
              ></Text>

            <Button
              width="unset"
              height="unset"
              shrink="0"
              size="large"
              isDisabled={false}
              variation="primary"
              children={button}
              onClick={() => navigate(`/${buttonLink}`)}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex> 
  );
}
