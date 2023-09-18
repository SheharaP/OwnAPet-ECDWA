/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import PetService from "../services/PetService";
import {
  Button,
  Flex,
  Image,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddPetComponent(props) {
  let navigate = useNavigate();

  const [pet, setPet] = useState({
    petName: "",
    breed: "",
    type: "dog",
    color: "",
    characteristics: [],
    age: "",
    imageUrl: "",
  });

  const { petName, breed, type, color, characteristics, age, imageUrl } = pet;

  const onInputChange = (e) => {
    console.log(`NAME : ${e.target.name}, VALUE : ${e.target.value}`);
    setPet({ ...pet, [e.target.name]: e.target.value });
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

  const imageInputRef = useRef();
  const [secureUrl, setSecureUrl] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [uploadImage, setUploadImage] = useState();

  // Function to handle image upload
  const handleImageSelection = async (e) => {
    const file = e.target.files[0];

    setUploadImage(file);
    setSelectedImage(URL.createObjectURL(file));

    const response = await PetService.getSecureUrl();
    setSecureUrl(response);
  };

  const handleImageUpload = async (e) => {

    const petImageUrl = await PetService.uploadPetImage(uploadImage, secureUrl);
    console.log(`This is IMAGE URL: ${petImageUrl}`);
    setPet({ ...pet, imageUrl: petImageUrl });
    console.log(pet.imageUrl);
    
  };

  const { overrides, ...rest } = props;
  return (
    <Flex
      width="100vw"
      height="auto"
      display="flex"
      gap="unset"
      marginTop="50px"
      marginBottom="50px"
      alignItems="center"
      justifyContent="center"
      position="center"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "AddPetComponent")}
      {...rest}
    >
      <Flex
        gap="48px"
        direction="row"
        width="1200px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AddPetComponent")}
        {...rest}
      >
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="600"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
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
              children="Add Pet's Information"
              {...getOverrideProps(overrides, "Add Pet's Information")}
            ></Text>
            <TextField
              width="unset"
              height="unset"
              label="Pet's Name"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              name="petName"
              value={petName}
              onChange={(e) => onInputChange(e)}
              {...getOverrideProps(overrides, "TextField29767014")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 426")}
            >
              <TextField
                width="unset"
                height="unset"
                label="Breed"
                grow=".8"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                name="breed"
                value={breed}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField29767009")}
              ></TextField>
              <SelectField
                width="100px"
                height="unset"
                label="Type of animal"
                grow=".5"
                shrink="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                name="type"
                value={type}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "SelectField")}
              >
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </SelectField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 425")}
            >
              {/* Age TextField */}
              <TextField
                width="unset"
                height="unset"
                label="Age (year(s)/month(s))"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                onBlur={(e) => {
                  const ageValue = parseInt(e.target.value, 10);
                  if (isNaN(ageValue) || ageValue < 0 || ageValue > 20) {
                    e.target.value = "";
                  }
                }}
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField29767015")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Color"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                name="color"
                value={color}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField39343126")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="24px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 410")}
          >
            <label htmlFor="characteristics" className="form-label mt-3">
              Characteristics
            </label>
            <select
              multiple
              className="form-select"
              name="characteristics"
              value={characteristics}
              onChange={handleCharacteristicChange}
            >
              <option
                value="loyal"
                disabled={characteristics.includes("loyal")}
              >
                Loyal
              </option>
              <option
                value="playful"
                disabled={characteristics.includes("playful")}
              >
                Playful
              </option>
              <option
                value="intelligent"
                disabled={characteristics.includes("intelligent")}
              >
                Intelligent
              </option>
              <option
                value="protective"
                disabled={characteristics.includes("protective")}
              >
                Protective
              </option>
              <option
                value="energetic"
                disabled={characteristics.includes("energetic")}
              >
                Energetic
              </option>
              <option
                value="affectionate"
                disabled={characteristics.includes("affectionate")}
              >
                Affectionate
              </option>
              <option
                value="obedient"
                disabled={characteristics.includes("obedient")}
              >
                Obedient
              </option>
              <option
                value="social"
                disabled={characteristics.includes("social")}
              >
                Social
              </option>
              <option
                value="gentle"
                disabled={characteristics.includes("gentle")}
              >
                Gentle
              </option>
              <option
                value="cuddly"
                disabled={characteristics.includes("cuddly")}
              >
                Cuddly
              </option>
            </select>
            <div>
              <p>Selected Characteristics: {characteristics.join(", ")}</p>
            </div>
          </Flex>
          <Flex
            gap="24px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 41139343187")}
          >
            <button
              type="submit"
              className="btn btn-outline-success"
              onClick={() => {
                console.log(pet);
                PetService.createPet(pet)
                  .then(() => {
                    navigate("/admin");
                    setTimeout(() => {
                      window.location.href = "/admin";
                    }, 100);
                  })
                  .catch((error) => {
                    console.error("Error creating pet:", error);
                  });
              }}
            >
              Create Pet
            </button>
            <Link className="btn btn-outline-danger mx-3" to="/admin">
              Cancel
            </Link>
          </Flex>
        </Flex>
        <Flex
          gap="32px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          grow="1"
          shrink="1"
          basis="0"
          marginTop="60px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Image
            src={selectedImage}
            width="392px"
            height="360px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            border="1px solid #ccc"
            {...getOverrideProps(overrides, "image")}
          ></Image>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelection}
            />
            <Button
              disabled={selectedImage == null}
              style={{ border: "1px solid #ccc", marginTop: "20px"}}
              onClick={(e) => handleImageUpload(e)}
            >
              Upload Image
            </Button>
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
}
