// Simple entry point for the project.
let forgeTunnel;
try {
  forgeTunnel = require("forge-tunnel");
} catch (err) {
  forgeTunnel = null;
}

function main() {
  if (!forgeTunnel) {
    console.log(
      "forge-tunnel not installed.\nInstall dependencies with `npm install`."
    );
  } else {
    console.log("forge-tunnel available. Starting tunnel...");
    // Example usage placeholder
    // forgeTunnel.start();
  }
}

if (require.main === module) {
  main();
}
