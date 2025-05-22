import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getText", (req) => {
  console.log(req);
  console.log("SOFI");

  // return fetch("http://127.0.0.1:8000/generate-ui", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     requirement: "string",
  //   }),
  // })
  //   .then((response) => response.text())
  //   .then((text) => {
  //     console.log("Respuesta de la API local:", text);
  //     return text;
  //   })
  //   .catch((error) => {
  //     console.error("Error al llamar la API local:", error);
  //     throw error;
  //   });
  return "Hola";
});

export const handler = resolver.getDefinitions();
