/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ReviewCard from "./ReviewCard";
import { Flex } from "@aws-amplify/ui-react";
export default function ProductSection(props) {
  const { overrides, name, price, information, imageUrl, ...rest } = props;
  return (
    <Flex
      gap="10px"
      marginTop="40px"
      direction="column"
      width="550px"
      height="unset"
      overflow="hidden"
      position="relative"
      padding="159px 119px 119px 119px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ProductSection")}
      {...rest}
    >
      <ReviewCard
        display="flex"
        gap="0"
        direction="row"
        width="1000px"
        height="351px"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        name={name}
        price={price}
        information={information}
        image={imageUrl}
        {...getOverrideProps(overrides, "ReviewCard")}
      ></ReviewCard>
    </Flex>
  );
}
