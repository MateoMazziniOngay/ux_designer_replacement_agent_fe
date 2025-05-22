import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text, Link, Image } from "@forge/react";
import { invoke } from "@forge/bridge";
import myImage from "../static/my-image.png";
import { generateUIImage } from "../services/uiGeneratorService";
import { TextField, Button } from "@forge/react";


export default MyComponent;

const App = () => {
  const [requirement, setRequirement] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleGenerateUI = async () => {
    if (!requirement.trim()) return;

    setLoading(true);
    setImageUrl(null);

    try {
      const url = await generateUIImage(requirement);
      setImageUrl(url);
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false);
  };


  return (
    <>
      <TextField
        name="requirement"
        placeholder="e.g. A modern mobile login screen"
        value={requirement}
        onChange={(e) => setRequirement(e.target.value)}
      />

      <Button text="Generate UI" onClick={handleGenerateUI} />

      {loading && <Text>Generating...</Text>}

      {imageUrl && (
        <>
          <Text>Generated Image:</Text>
          <Image src={imageUrl} alt="Generated UI" />
        </>
      )}
    </>
  );
};

ForgeReconciler.render(<App />);