import React, { useState } from "react";
import ForgeReconciler, { Text, TextArea, Button, Image } from "@forge/react";
import { generateUIImage } from "../services/uiGeneratorService";

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setImageUrl(null);

    try {
      const url = await generateUIImage(input);
      console.log("[DEBUG] Received image URL:", url);
      setImageUrl(url);
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <Text>Enter a UI requirement:</Text>

      <TextArea
        autoFocus={true}
        label="Requirement"
        name="requirement"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. A login modal with 2 fields"
      />

      <Button text="Generate UI" onClick={handleClick}>Generate UI</Button>

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