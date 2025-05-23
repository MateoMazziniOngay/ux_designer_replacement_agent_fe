import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getText", ({ payload }) => {
  // Devuelve el valor del inputValue recibido en el payload
  return payload?.inputValue || "";
});

export const handler = resolver.getDefinitions();
