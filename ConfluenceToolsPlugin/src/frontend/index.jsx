import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text, Link, Image } from "@forge/react";
import { invoke } from "@forge/bridge";
import myImage from "../static/my-image.png";

export default MyComponent;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  return (
    <>
      <Text>{data ? data : "Loading..."}</Text>
      <Text>My image1:</Text>
      <Image src={myImage} alt="My image" />

      <Text>Espacioooooooooooo:</Text>
      <Text>My image1:</Text>
    </>
  );
};

ForgeReconciler.render(<App />);
