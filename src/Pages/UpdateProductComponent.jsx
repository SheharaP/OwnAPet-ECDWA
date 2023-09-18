/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import InventoryService from "../services/InventoryService";
import {
  Flex
} from "@aws-amplify/ui-react";
export function UpdateProductComponent(props) {
  let navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    productName: "",
    price: null,
    inventory: null,
    information: ""
  });

  const { productName, price, inventory, information } = product;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log("gettin pets function invoke");
    getProduct();
  }, []);

  const getProduct = async () => {
    console.log("getting by product ID", id);
    const response = await InventoryService.getProductById(id);
    console.log(response.data);
    setProduct(response.data);
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
              Product Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Pet Name"
              name="productName"
              value={productName}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Product price
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Product price"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Number of products
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Number of products"
              name="inventory"
              value={inventory}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label mt-3">
              Product information
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Product information"
              name="information"
              value={information}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-success"
            onClick={() => {
              console.log("UPDATED PRODUCT", product);
              InventoryService.updateProduct(product, id);
              navigate("/admin/inventory");
            }}
          >
            Update
          </button>
          <Link className="btn btn-outline-danger mx-3" to="/admin/inventory">
            Cancel
          </Link>
        </form>
      </Flex>
    </Flex>
  );
}
