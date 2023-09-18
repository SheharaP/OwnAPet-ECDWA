/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Image, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";

export default function ActionCard(props) {
  const { overrides, name, breed, age, color, charac, imageUrl, ...rest } =
    props;
  let naigate = useNavigate();

  function capitalizeWords(inputString) {
    return inputString
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <Flex
      gap="0"
      direction="column"
      width="350px"
      height="500px"
      marginBottom="20px"
      justifyContent="space-between"
      alignItems="flex-end"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ActionCard")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(80,72,229,1)"
        lineHeight="50px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={capitalizeWords(name)}
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Image
        src={imageUrl}
        width="542px"
        height="250px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "pup")}
      ></Image>
      <Flex
        direction="column"
        width="unset"
        height="200px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="30px 30px 30px 30px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="84px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={capitalizeWords(breed)}
            {...getOverrideProps(overrides, "Breed")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={capitalizeWords(age)}
            {...getOverrideProps(overrides, "Age")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="22px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={capitalizeWords(color)}
            {...getOverrideProps(overrides, "Color")}
          ></Text>
        </Flex>
        <Flex
          direction="row"
          width="unset"
          height="42px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <div>
            {charac.split(",").map((character, index) => (
              <Badge
                key={index}
                width="unset"
                height="unset"
                backgroundColor="rgba(170,166,242,1)"
                shrink="0"
                marginRight="5px"
                size="small"
                variation="default"
                children={capitalizeWords(character.trim())}
                {...getOverrideProps(overrides, "Badge38605321")}
              ></Badge>
            ))}
          </div>
        </Flex>
        <Flex
          direction="row"
          width="unset"
          height="auto"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          top="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 30px 0px 30px"
          {...getOverrideProps(overrides, "Read more")}
        >
          <MyIcon
            width="20px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="arrow-right"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            textDecoration="underline"
            letterSpacing="0.01px"
            width="126px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Pet Care Tips"
            onClick={() => naigate("/pet-care")}
            style={{ cursor: "pointer" }}
            {...getOverrideProps(overrides, "Pet Care Tips")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
