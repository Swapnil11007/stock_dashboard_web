import { ColorRing } from "react-loader-spinner";
import React from "react";
const MyLoader = () => (
  <ColorRing
    visible={true}
    wrapperClass="color-ring-wrapper"
    height="80"
    width="80"
    ariaLabel="color-ring-loading"
    wrapperStyle={{}}
    colors={["#e15b64", "#f47e60", "#f8b26a", "red", "#849b87"]}
  />
);
export default MyLoader;
