/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useEffect, useState } from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, SelectField, Button } from "@aws-amplify/ui-react";
import ActionCard from "./ActionCard";
import PetService from "../services/PetService";

export default function MarketingPricing(props) {
  const [pets, setPets] = useState([]);
  const [breedOptions, setBreedOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [ageOptions, setAgeOptions] = useState([]);
  const [characteristicsOptions, setCharacteristicsOptions] = useState([]);

  const [selectedFilters, setSelectedFilters] = useState({
    breed: "",
    color: "",
    age: "",
    characteristics: "",
  });

  const { breed, color, age, characteristics } = selectedFilters;

  useEffect(() => {
    loadPets();
  }, []);

  const handleFilterChange = (e) => {
    console.log(`NAME : ${e.target.name}, VALUE : ${e.target.value}`);
    setSelectedFilters({ ...selectedFilters, [e.target.name]: e.target.value });
  };

  const loadPets = async () => {
    const response = await PetService.getPets();
    const petData = response.data;
    setPets(petData);

    // Extract unique values for breed, color, age, and characteristics
    const breedOptions = extractUniqueValues(petData.map((pet) => pet.breed));
    const colorOptions = extractUniqueValues(
      petData.map((pet) => pet.color.toLowerCase())
    );
    const ageOptions = extractUniqueValues(petData.map((pet) => pet.age));
    const characteristicsOptions = extractUniqueValues(
      petData.flatMap((pet) =>
        pet.characteristics
          .toLowerCase()
          .split(",")
          .map((char) => char.trim())
      )
    );

    setBreedOptions(breedOptions);
    setColorOptions(colorOptions);
    setAgeOptions(ageOptions);
    setCharacteristicsOptions(characteristicsOptions);
  };

  const extractUniqueValues = (data) => {
    return [...new Set(data)];
  };

  const applyFilters = () => {
    console.log(selectedFilters);
    const filteredPets = pets.filter((pet) => {
      const petCharacteristics = pet.characteristics
        .toLowerCase()
        .split(",")
        .map((char) => char.trim());
      if (
        pet.breed.toLowerCase() === selectedFilters.breed.toLowerCase() ||
        pet.color.toLowerCase() === selectedFilters.color.toLowerCase() ||
        pet.age.toLowerCase() === selectedFilters.age.toLowerCase() ||
        petCharacteristics.includes(
          selectedFilters.characteristics.toLowerCase()
        )
      ) {
        return true; // Include the pet in filteredPets
      } else {
        return false; // Exclude the pet from filteredPets
      }
    });
    console.log(filteredPets);
    setPets(filteredPets);
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      breed: "",
      color: "",
      age: "",
      characteristics: "",
    });
    loadPets();
  };

  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="100vw"
      height="auto"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      marginTop="40px"
      padding="48px 48px 48px 48px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "MarketingPricing")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <Text
          fontFamily="Inter"
          fontSize="32px"
          fontWeight="600"
          color="rgba(114,108,234,1)"
          lineHeight="32px"
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
          children="Discover Your Lifelong Companion"
          {...getOverrideProps(overrides, "Discover Your Lifelong Companion")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="996px"
          height="101px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Explore a world of furry and feathered friends at our pet store. From loyal dogs to playful kittens and exotic birds, find the perfect companion to share your life's journey. Our expert team is here to help you choose the ideal pet that will fill your days with joy, love, and unforgettable memories. Welcome to a place where friendships are forged and hearts are won—one pawprint at a time."
          {...getOverrideProps(
            overrides,
            "Explore a world of furry and feathered friends at our pet store. From loyal dogs to playful kittens and exotic birds, find the perfect companion to share your life's journey. Our expert team is here to help you choose the ideal pet that will fill your days with joy, love, and unforgettable memories. Welcome to a place where friendships are forged and hearts are won\u2014one pawprint at a time."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="1429px"
        height="107px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="8px"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Filters38605337")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-end"
          overflow="hidden"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Filters")}
          {...rest}
        >
          <SelectField
            width="100px"
            height="unset"
            label="Breed"
            placeholder="All"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            options={breedOptions}
            name="breed"
            value={selectedFilters.breed}
            onChange={(e) => {
              handleFilterChange(e);
            }}
            {...getOverrideProps(overrides, "SelectField38963527")}
          ></SelectField>
          <SelectField
            width="100px"
            height="unset"
            label="Color"
            placeholder="All"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            options={colorOptions}
            name="color"
            value={selectedFilters.color}
            onChange={(e) => handleFilterChange(e)}
            {...getOverrideProps(overrides, "SelectField38963544")}
          ></SelectField>
          <SelectField
            width="100px"
            height="unset"
            label="Age"
            placeholder="All"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            options={ageOptions}
            name="age"
            value={selectedFilters.age}
            onChange={(e) => {
              handleFilterChange(e);
            }}
            {...getOverrideProps(overrides, "SelectField38963544")}
          ></SelectField>
          <SelectField
            width="100px"
            height="unset"
            label="Characteristics"
            placeholder="All"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            options={characteristicsOptions}
            name="characteristics"
            value={selectedFilters.characteristics}
            onChange={(e) => {
              handleFilterChange(e);
            }}
            {...getOverrideProps(overrides, "SelectField38963544")}
          ></SelectField>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="Clear"
            onClick={(e) => handleClearFilters()}
          ></Button>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="Apply Filters"
            onClick={() => {
              applyFilters();
            }}
          ></Button>
        </Flex>
      </Flex>
      <Flex gap="16px">
        <Flex>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {pets.map((pet, index) => (
              <ActionCard
                key={index}
                name={pet.petName}
                breed={pet.breed}
                age={pet.age}
                color={pet.color}
                charac={pet.characteristics}
                imageUrl={pet.imageUrl}
              />
            ))}
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
