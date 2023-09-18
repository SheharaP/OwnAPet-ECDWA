/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InventoryService from "../services/InventoryService";
import {
  Button,
  Flex,
  Image,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddProductComponent(props) {
  let navigate = useNavigate();

  const [product, setProduct] = useState({
    productName: "",
    price: null,
    inventory: null,
    information: "",
    imageUrl: ""
  });

  const { productName, price, inventory, information, imageUrl} = product;

  const onInputChange = (e) => {
    console.log(`PRODUCT NAME : ${e.target.name}, VALUE : ${e.target.value}`);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  
  const [secureUrl, setSecureUrl] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [uploadImage, setUploadImage] = useState();

  const handleImageSelection = async (e) => {
    const file = e.target.files[0];
    setUploadImage(file);
    setSelectedImage(URL.createObjectURL(file));

    const response = await InventoryService.getSecureUrl();
    setSecureUrl(response);
  };

  const handleImageUpload = async (e) => {

    const productImageUrl = await InventoryService.uploadProductImage(uploadImage, secureUrl);
    console.log(`This is IMAGE URL: ${productImageUrl}`);
    setProduct({ ...product, imageUrl: productImageUrl });
    console.log(product.productImageUrl);
    
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
      {...getOverrideProps(overrides, "AddProductComponent")}
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
        {...getOverrideProps(overrides, "AddProductComponent")}
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
              children="Add Product Information"
              {...getOverrideProps(overrides, "Add Product Information")}
            ></Text>
            <TextField
              width="unset"
              height="unset"
              label="Product Name"
              shrink="0"
              alignSelf="stretch"
              placeholder=""
              size="default"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              name="productName"
              value={productName}
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
                label="Price"
                grow=".8"
                shrink="1"
                basis="0"
                placeholder="Price of product"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                name="price"
                value={price}
                onBlur={(e) => {
                  const priceValue = parseInt(e.target.value, 10);
                  if (isNaN(priceValue) || priceValue < 0) {
                    e.target.value = "";
                  }
                }}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField29767009")}
              ></TextField>
              <TextField
                width="unset"
                height="unset"
                label="Inventory"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Number of products"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                onBlur={(e) => {
                  const inventoryValue = parseInt(e.target.value, 10);
                  if (isNaN(inventoryValue) || inventoryValue < 0) {
                    e.target.value = "";
                  }
                }}
                name="inventory"
                value={inventory}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField29767015")}
              ></TextField>
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
              <TextField
                width="unset"
                height="unset"
                label="Product information"
                grow="1"
                shrink="1"
                basis="0"
                placeholder=""
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                name="information"
                value={information}
                onChange={(e) => onInputChange(e)}
                {...getOverrideProps(overrides, "TextField39343126")}
              ></TextField>
            </Flex>
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
                console.log(product);
                InventoryService.createProduct(product)
                  .then(() => {
                    navigate("/admin");
                    setTimeout(() => {
                      window.location.href = "/admin";
                    }, 100);
                  })
                  .catch((error) => {
                    console.error("Error creating product:", error);
                  });
              }}
            >
              Create product
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
