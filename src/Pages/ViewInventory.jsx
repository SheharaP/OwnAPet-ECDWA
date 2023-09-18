import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InventoryService from "../services/InventoryService";
import { MyIcon } from "../ui-components";

export function ViewInventory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);


  const loadProducts = async () => {
    const response = await InventoryService.getProducts();
    console.log(response.data);
    setProducts(response.data);
  };

    const deleteProduct = async (productId) => {
      try {
        await InventoryService.deleteProduct(productId);
        console.log("Deleted product ID:", productId);
        loadProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };

  const getReport = () => {
    try{
      InventoryService.getInventoryReport();
      console.log("Inventory Report sent to email:");
    }
    catch(error){
      console.error("Error sending report:", error);
    }
  }

  return (
    <div className="container py-4 mt-5">
      <h1
        className="pt-4 mt-5 d-flex justify-content-start"
        style={{ color: "#4f46e5" }}
      >
        INVENTORY
      </h1>
      <div className="container py-4 px-5 mt-5">
        <div className="container d-flex justify-content-end">
          <Link className="btn btn-primary" to="/admin/add-product">
            Add Product
          </Link>
          <Link className="btn btn-primary mx-2" onClick={() => getReport()}>
           Inventory Report
          </Link>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="py-4">
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col" className="py-4 px-4">
                    Product ID
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Name
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Price
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Inventory
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Information
                  </th>
                  <th scope="col" className="py-4 px-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.productId}>
                    <td className="px-5">{product.productId}</td>
                    <td className="px-5">{product.productName}</td>
                    <td className="px-5">{product.price}</td>
                    <td className="px-5">{product.inventory}</td>
                    <td className="px-5">{product.information}</td>
                    <td>
                      <div className="d-flex align-items-center justify-content-end">
                        <MyIcon
                          type="delete"
                           onClick={() => deleteProduct(product.productId)}
                          className="mx-3"
                        ></MyIcon>
                        <Link
                          className="btn btn-outline-primary mx-2"
                          to={`/admin/update-product/${product.productId}`}
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
