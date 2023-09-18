import React from "react";
import {
  HeroLayout1,
  BrowseProducts,
  PetTrainingWorkshops,
  AboutUsSection,
} from "../ui-components";

const Home = () => {
  const IMAGE_URL = import.meta.env.VITE_REACT_APP_S3_IMAGE_URL;

  return (
    <div>
      <HeroLayout1
        image1={`${IMAGE_URL}hero-1.jpg`}
        image2={`${IMAGE_URL}hero-2.jpg`}
      ></HeroLayout1>
      <AboutUsSection
        image={`${IMAGE_URL}home-3.png`}
        information={
          "At Own A Pet, we invite you to explore a world of affectionate cats and loyal dogs, each with their unique charm. Whether you're drawn to the graceful purrs of a cat or the boundless energy of a dog, our expert team is here to guide you. Explore out store today and meet your future friend at Own A Pet."
        }
        heading={"Discover Our Furry Friends"}
        button={"View Store"}
        buttonLink={"view-store"}
      />
      <BrowseProducts />
      <AboutUsSection
        image={`${IMAGE_URL}pet-store.png`}
        information={
          "Own A Pet is your trusted companion in the journey of pet ownership. We offer a carefully curated selection of cats and dogs, along with top-quality pet products and expert services to ensure the happiness and well-being of your furry friends. Join our pet-loving community and discover the joy of unconditional love with Own A Pet."
        }
        heading={"About Us"}
        button={"Check out our company!"}
        buttonLink={"about-us"}
      />
      <PetTrainingWorkshops
        training1={`${IMAGE_URL}training-5.png`}
        training2={`${IMAGE_URL}training-3.png`}
        training3={`${IMAGE_URL}training-2.png`}
        training4={`${IMAGE_URL}training-6.png`}
        training5={`${IMAGE_URL}training-1.png`}
        training6={`${IMAGE_URL}food-1.png`}
      />
    </div>
  );
};

export default Home;
