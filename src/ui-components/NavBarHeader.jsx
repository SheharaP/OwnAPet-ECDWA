/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { image, overrides, ...rest } = props;
  let navigate = useNavigate();
  return (
    <View
      width="100vw"
      display="flex"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        width="100vw"
        height="93px"
        marginTop="0px"
        display="flex"
        gap="auto"
        alignItems="unset"
        justifyContent="unset"
        position="static"
        top="0"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,255)"
        {...getOverrideProps(overrides, "NavBarHeader")}
        {...rest}
      >
        <Image
          src={image}
          width="63px"
          height="61px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16px"
          left="45px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "logo 2")}
        ></Image>
        <Flex
          gap="20px"
          direction="row"
          width="392px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="25px"
          left="1020px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 321")}
        >
          <Button
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
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
            position="relative"
            padding="10px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="Dashboard"
            onClick={() => navigate("/")}
            {...getOverrideProps(overrides, "Dashboard")}
          ></Button>
          <Button
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
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
            position="relative"
            padding="10px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="View Store"
            onClick={() => {
              navigate("/view-store");
            }}
            {...getOverrideProps(overrides, "View Store")}
          ></Button>
          <Button
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
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
            position="relative"
            padding="10px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="Pet Care"
            onClick={() => {
              navigate("/pet-care");
            }}
            {...getOverrideProps(overrides, "Pet Care")}
          ></Button>
          <Button
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
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
            position="relative"
            padding="10px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="About Us"
            onClick={() => navigate('/about-us')}
            {...getOverrideProps(overrides, "About Us")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="600"
          color="rgba(79,70,229,255)"
          lineHeight="36px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="200px"
          height="36px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="28px"
          left="640px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="OWN A PET"
          {...getOverrideProps(overrides, "OWN A PET")}
        ></Text>
      </Flex>
    </View>
  );
}
