import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text, Link, Image } from "@forge/react";
import { invoke } from "@forge/bridge";
import myImage from "../static/my-image.png";
import { generateUIImage } from "../services/uiGeneratorService";


export default MyComponent;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    generateUIImage("Design a dashboard with KPIs and charts")
      .then((url) => setData(url))
      .catch((err) => {
        console.error("Failed to generate image:", err);
        setData(null);
      });
  }, []);

  return (
    <>
      <Text>{data ? "Generated Image:" : "Loading..."}</Text>
      {data && <Image src={data} alt="Generated UI" />}
    </>
  );
};

ForgeReconciler.render(<App />);