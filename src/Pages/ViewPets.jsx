import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PetService from "../services/PetService";
import { MyIcon } from "../ui-components";
import { Flex, SelectField, Button } from "@aws-amplify/ui-react";

export function ViewPets() {
  const [pets, setPets] = useState([]);
  const [petsUnfiltered, setPetsUnfiltered] = useState([]);
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

  const deletePet = async (petId) => {
    try {
      await PetService.deletePet(petId);
      console.log("Deleted pet ID:", petId);
      loadPets();
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  const loadPets = async () => {
    const response = await PetService.getPets();
    const petData = response.data;
    setPetsUnfiltered(petData);
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
  const handleFilterChange = (e) => {
    console.log(`NAME : ${e.target.name}, VALUE : ${e.target.value}`);
    setSelectedFilters({ ...selectedFilters, [e.target.name]: e.target.value });
  };

  const extractUniqueValues = (data) => {
    return [...new Set(data)];
  };

  const applyFilters = () => {
    console.log(selectedFilters);
    const filteredPets = petsUnfiltered.filter((pet) => {
      const petCharacteristics = pet.characteristics
      .toLowerCase()
      .split(",")
      .map((char) => char.trim());
      if (
        pet.breed.toLowerCase() === selectedFilters.breed.toLowerCase() ||
        pet.color.toLowerCase() === selectedFilters.color.toLowerCase() ||
        pet.age.toLowerCase() === selectedFilters.age.toLowerCase() ||
        petCharacteristics.includes(selectedFilters.characteristics.toLowerCase())
      ) {
        return true; // Include the pet in filteredPets
      } else {
        return false;
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

  return (
    <div className="container py-4 mt-5">
      <h1
        className="pt-4 mt-5 d-flex justify-content-start"
        style={{ color: "#4f46e5" }}
      >
        MANAGE PETS
      </h1>
      <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          overflow="hidden"
          position="relative"
          padding="16px 16px 0px 16px"
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
      <div className="container pb-4 mt-5">
        <div className="container d-flex justify-content-end">
          <Link className="btn btn-primary" to="/admin/add-pet" >
            Add Pet
          </Link>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="py-4">
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col" className="py-4">
                    Pet ID
                  </th>
                  <th scope="col" className="py-4">
                    Name
                  </th>
                  <th scope="col" className="py-4">
                    Breed
                  </th>
                  <th scope="col" className="py-4">
                    Color
                  </th>
                  <th scope="col" className="py-4">
                    Age
                  </th>
                  <th scope="col" className="py-4">
                    Characteristics
                  </th>
                  <th scope="col" className="py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {pets.map((pet) => (
                  <tr key={pet.petId}>
                    <td className="px-3">{pet.petId}</td>
                    <td className="px-3">{pet.petName}</td>
                    <td className="px-5">{pet.breed}</td>
                    <td className="px-3">{pet.color}</td>
                    <td className="px-5">{pet.age}</td>
                    <td className="px-5">{pet.characteristics}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-end">
                        {/* Delete Icon */}
                        <MyIcon
                          type="delete"
                          onClick={() => deletePet(pet.petId)}
                          className="mx-3"
                        ></MyIcon>
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/admin/update-pet/${pet.petId}`}
                        >
                          {" "}
                          Update{" "}
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
