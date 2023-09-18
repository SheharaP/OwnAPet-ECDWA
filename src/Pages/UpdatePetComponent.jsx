/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import PetService from "../services/PetService";
import { Flex } from "@aws-amplify/ui-react";
export function UpdatePetComponent(props) {
  let navigate = useNavigate();

  const { id } = useParams();

  const [pet, setPet] = useState({
    petName: "",
    breed: "",
    type: "",
    color: "",
    characteristics: [],
    age: "",
  });

  const { petName, breed, type, color, characteristics, age } = pet;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("gettin pets function invoke");
    getPet();
  }, []);

  const getPet = async () => {
    console.log("getting by ID", id);
    const response = await PetService.getPetById(id);
    console.log(response.data);
    setPet(response.data);
  };

  const handleCharacteristicChange = (e) => {
    const updatedCharacteristics = [...characteristics];
    const newValue = e.target.value;

    if (!updatedCharacteristics.includes(newValue)) {
      updatedCharacteristics.push(newValue);
      setPet({ ...pet, characteristics: updatedCharacteristics });
      console.log(updatedCharacteristics);
    }
  };

  const { overrides, ...rest } = props;
  return (
    <Flex
      width="100vw"
      height="auto"
      display="flex"
      gap="unset"
      marginTop="120px"
      alignItems="center"
      justifyContent="center"
      position="center"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddPetComponent")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center-++"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 32px 0px 32px"
        {...getOverrideProps(overrides, "Frame 406")}
      >
        <h3 className="text-center">Update Pet's Information</h3>
        <form className="mb-3 px-2">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Pet Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Pet Name"
              name="petName"
              value={petName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Pet Breed
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Breed of pet"
              name="breed"
              value={breed}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Pet Type
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Type of pet"
              name="type"
              value={type}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Pet Color
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Color of pet"
              name="color"
              value={color}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Pet Age
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Pet's Age (year(s)/month(s))"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={() => {
              console.log("UPDATED PET", pet);
              PetService.updatePet(pet, id);
              navigate("/admin");
            }}
          >
            Update
          </button>
          <Link className="btn btn-outline-danger mx-3" to="/admin">
            Cancel
          </Link>
        </form>
      </Flex>
    </Flex>
  );
}
