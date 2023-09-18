/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import MyIcon from "./MyIcon";
import { Text, View, Flex, Image } from "@aws-amplify/ui-react";
import InventoryService from "../services/InventoryService";
import ReviewCard from "./ReviewCard";

export default function BrowseProducts(props) {
  const { overrides, ...rest } = props;
  const [products, setProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const handleNextProductClick = () => {
    setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const response = await InventoryService.getProducts();
    console.log(response.data);
    setProducts(response.data);
  };

  return (
    <View
      width="100vw"
      height="550px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "BrowseProducts")}
      {...rest}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        <Flex
          direction="column"
          width="1440px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="10%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="159px 119px 119px 219px"
          backgroundColor="rgba(255,255,255,1)"
        >
          {products.map((product, index) => (
            <ReviewCard
              key={product.productId}
              display={index === currentProductIndex ? "flex" : "none"} 
              gap="0"
              direction="row"
              width="1000px"
              height="351px"
              shrink="0"
              position="relative"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              padding="0px 0px 0px 0px"
              name={product.productName}
              price={product.price}
              information={product.information}
              imageUrl={product.imageUrl}
              {...getOverrideProps(overrides, "ReviewCard")}
            ></ReviewCard>
          ))}
        </Flex>
        <MyIcon
          width="50px"
          height="50px"
          gap="unset"
          alignItems="unset"
          overflow="hidden"
          position="absolute"
          top="46.12%"
          bottom="45.96%"
          left="85.22%"
          right="4.31%"
          padding="0px 2px 0px 2px"
          type="arrow-right"
          style={{ cursor: "pointer" }}
          onClick={handleNextProductClick} 
          {...getOverrideProps(overrides, "MyIcon38616825")}
        ></MyIcon>
      </div>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="600"
        color="rgba(114,108,234,1)"
        lineHeight="32px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.04%"
        bottom="82.88%"
        left="38.61%"
        right="38.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Browse Our Products"
        {...getOverrideProps(overrides, "Browse Our Products")}
      ></Text>
    </View>
  );
}
