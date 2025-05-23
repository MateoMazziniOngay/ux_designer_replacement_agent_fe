import React, { useEffect, useState } from "react";
import ForgeReconciler, {
  Text,
  Link,
  Image,
  Button,
  TextArea,
} from "@forge/react";
import { invoke } from "@forge/bridge";
import myImage from "../static/my-image.png";

const App = () => {
  const [data, setData] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    invoke("getText", { example: inputValue }).then(setData);
    setShowContent(true);
  };

  const handleButton = () => {};

  return (
    <>
      <TextArea
        label="Entrada"
        name="entrada"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button onClick={handleButton}>Generate Query</Button>
      {showContent && (
        <>
          <Text>Valor actual: {inputValue}</Text>
        </>
      )}

      <Button onClick={handleButtonClick}>Generate image</Button>
      {showContent && (
        <>
          <Text>Valor actual: {inputValue}</Text>
          <Image src={myImage} alt="My image" />

          <Text> jdfsdjkdjsjfdjfhjdajjdjsjad</Text>
        </>
      )}
    </>
  );
};

ForgeReconciler.render(<App />);
