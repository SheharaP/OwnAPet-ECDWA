import { useState, useEffect } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ProductDetail from "./ProductDetail";
import {
  Button,
  Flex,
  SelectField,
  Text,
} from "@aws-amplify/ui-react";
import AboutUsSection from "./AboutUsSection";

export default function PetCareSection(props) {
  const { overrides, ...rest } = props;
  
  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL
  const ASSETS_URL = import.meta.env.VITE_REACT_APP_S3_ASSETS_URL

  const [petCareType, setPetCareType] = useState("dog"); 

  const [caringTips, setCaringTips] = useState([]); 

  useEffect(() => {
    const jsonDataURL = `${ASSETS_URL}CaringTips.json`
    fetch(jsonDataURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); 
      })
      .then((data) => {
        console.log("Caring Tips Data:", data);
        const tipsData = data.articles.find(
          (article) => article.type === petCareType
        );

        setCaringTips(tipsData);
      })
      .catch((error) => {
        console.error("Error fetching JSON data:", error);
      });
  }, [petCareType]);


  const onInputChange = (e) => {
    setPetCareType(e.target.value); 
  };

  return (
    <Flex
      gap="24px"
      direction="column"
      width="100vw"
      height="auto"
      paddingBottom="320px"
      overflow="hidden"
      position="relative"
      marginTop="40px"
      padding="48px 48px 48px 48px"
      backgroundColor="rgba(255,255,255,255)"
      {...getOverrideProps(overrides, "MarketingPricing")}
      {...rest}
    >
      <Flex justifyContent="center" alignItems="center">
        <Text
          fontFamily="Inter"
          fontSize="35px"
          fontWeight="600"
          color="rgba(114,108,234,1)"
          lineHeight="32px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="center"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Pet Parent Resources"
          {...getOverrideProps(overrides, "Discover Your Lifelong Companion")}
        ></Text>
      </Flex>
      <AboutUsSection
        width="100%"
        image={`${IMAGE_URL}training-4.png`}
        information={`Prioritizing your pet's wellbeing and training is not just responsible but also rewarding. It leads to happier pets and a more harmonious home. Invest in your furry friend's wellbeing for a loyal and loving companion.`}
        heading={"Pet Wellbeing and Training"}
        button={"View Store"}
        buttonLink={'view-store'}
      />
      <SelectField
        width="200px"
        height="unset"
        label="Type of animal"
        grow=".5"
        shrink="0"
        marginLeft="140px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        name="type"
        value={petCareType}
        onChange={(e) => onInputChange(e)}
        {...getOverrideProps(overrides, "SelectField")}
      >
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </SelectField>
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <ProductDetail
          display="flex"
          gap="24px"
          direction="row"
          width="1160px"
          height="auto"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          title={caringTips.title}
          desc={caringTips.description}
          checklist={caringTips.checklist}
          tips={caringTips.caring_tips}
          image={petCareType === "dog" ? `${IMAGE_URL}caring-tips-dog.jpg` : `${IMAGE_URL}caring-tips-cat.jpg`}
          {...getOverrideProps(overrides, "ProductDetail")}
        ></ProductDetail>
      </Flex>
    </Flex>
  );
}
