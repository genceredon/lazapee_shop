import React from "react";
import image from "../assets/images/amazing_toy.jpg";

const Home = () => {
  return (
    <div>
      <p>Featured Product of the Month </p>
      <img src={image} alt="logo" />
      <p>[Authentic] Revengers - Incredible Fella</p>
    </div>
  );
};

export default Home;
