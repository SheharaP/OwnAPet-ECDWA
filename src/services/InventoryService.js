import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const S3_URL = import.meta.env.VITE_REACT_APP_S3_BUCKET_URL;

class InventoryService {
  getProducts() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/products`);
  }
  deleteProduct(productId){
    return axios.delete(`${BASE_URL}/product`, {
      params: { productId }
    });
  }
  createProduct(product){
    return axios.post(`${BASE_URL}/product`, product)
  }
  getProductById(productId){
    return axios.get(`${BASE_URL}/product`, {
      params: { productId }
    });
  }
  updateProduct(updateProduct, productId){
    return axios.patch(`${BASE_URL}/product`, updateProduct, {
      params: { productId }
    }
    )
  }
  getInventoryReport() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/reports`);
  }

  async getSecureUrl() {
    try {
      const response = await axios.get(`${S3_URL}`);
      console.log(`this is response ${response.data}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async uploadProductImage(file, secureUrl) {
    try {
      const response = await axios.put(secureUrl, file, {
        headers: {
          "Content-Type": file.type, 
        },
      });

      const imageUrl = secureUrl.split("?")[0];
      let modifiedUrl;
      const parts = imageUrl.split("s3.amazonaws.com/");
      if (parts.length === 2) {
        const baseUrl = parts[0];
        const restOfUrl = parts[1];

        // Append the desired AWS region (ap-south-1) to the base URL
        modifiedUrl = `${baseUrl}s3.ap-south-1.amazonaws.com/${restOfUrl}`;
      }

      console.log(`modifiedUrl ${modifiedUrl}`);
      return modifiedUrl;

    } catch (error) {
      console.error(error);
    }
  }
}

export default new InventoryService();
