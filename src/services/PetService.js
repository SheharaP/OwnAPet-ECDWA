import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const S3_URL = import.meta.env.VITE_REACT_APP_S3_BUCKET_URL;

class PetService {
  getPets() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/pets`);
  }
  deletePet(petId) {
    return axios.delete(`${BASE_URL}/pet`, {
      params: { petId },
    });
  }
  createPet(pet) {
    return axios.post(`${BASE_URL}/pet`, pet);
  }
  getPetById(petId) {
    return axios.get(`${BASE_URL}/pet`, {
      params: { petId },
    });
  }
  updatePet(updatePet, petId) {
    return axios.patch(`${BASE_URL}/pet`, updatePet, {
      params: { petId },
    });
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

  async uploadPetImage(file, secureUrl) {
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
        modifiedUrl = `${baseUrl}s3.ap-south-1.amazonaws.com/${restOfUrl}`;
      }

      console.log(`modifiedUrl ${modifiedUrl}`);
      return modifiedUrl;

    } catch (error) {
      console.error(error);
    }
  }
}

//GET Image
// uploadPetImage(file, secureUrl) {

//   axios.put(secureUrl, {
//     headers: {
//       'Content-Type': 'multipart/form-data', // Set the appropriate content type for formData
//     },
//     body: file
//   })

//   const imageUrl = secureUrl.split('?')[0];
//   console.log(`This is IMAGE URL: ${imageUrl}`);
//   return imageUrl;

// }

export default new PetService();
