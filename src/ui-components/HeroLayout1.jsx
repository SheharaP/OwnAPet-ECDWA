/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { image1, image2, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      height="auto"
      justifyContent="center"
      marginTop="40px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="450px"
        height="auto"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="auto"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
      >
        <Image
          src={image1}
          width="450px"
          height="520px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="540px"
        height="520px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        marginTop="20px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(64,170,191,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="Fur-tastic Friends!"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="30px"
              textAlign="center"
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
              children="Welcome to Own A Pet - Your One-Stop Destination for Happy Tails!"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="Own A Pet Pet Store is your gateway to pet happiness! We offer a delightful selection of cats and dogs ready to bring joy to your home. Beyond pets, we provide top-notch food, accessories, expert training, and well-being sessions to enrich your furry friend's life."
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="450px"
        height="520px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="auto"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
      >
        <Image
          src={image2}
          width="450px"
          height="564px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="unset"
        ></Image>
      </Flex>
    </Flex>
  );
}
