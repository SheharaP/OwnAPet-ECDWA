/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBarHeaderAdmin(props) {
  const { image, onViewInventory, onViewPets, action, overrides, ...rest } = props;
  return (
    <View
      width="100vw"
      display="flex"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      {...getOverrideProps(overrides, "NavBarHeaderAdmin")}
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
        position="fixed"
        top="0"
        boxShadow="0px 2px 6px rgba(0.05098039284348488, 0.10196078568696976, 0.14901961386203766, 0.15000000596046448)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255)"
        {...getOverrideProps(overrides, "NavBarHeaderAdmin")}
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
          gap="40px"
          direction="row"
          width="392px"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="30px"
          left="1100px"
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="Manage Pets"
            onClick={() => {
              onViewPets(); 
            }}
            {...getOverrideProps(overrides, "Manage Pets")}
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
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            isDisabled={false}
            variation="link"
            children="Inventory"
            onClick={() => {
              onViewInventory(); 
            }}
            {...getOverrideProps(overrides, "Inventory")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Sign Out"
            onClick={action}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(79,70,229,255)"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="120px"
          height="36px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="35px"
          left="600px"
          padding="0px 0px 0px 0px"
          whiteSpace="nowrap"
          children="OWN A PET ADMIN DASHBOARD"
          {...getOverrideProps(overrides, "ADMIN DASHBOARD")}
        ></Text>
      </Flex>
    </View>
  );
}
