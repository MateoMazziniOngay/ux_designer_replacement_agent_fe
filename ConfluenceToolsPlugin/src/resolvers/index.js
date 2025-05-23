import Resolver from "@forge/resolver";

const resolver = new Resolver();

resolver.define("getText", (req) => {
  return req.payload.inputValue;
});

export const handler = resolver.getDefinitions();
