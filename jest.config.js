const nextJest = require("next/jest");

const createJestConfig = nextJest({
  //NODE_ENV: ".env.development",
});
const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});
module.exports = jestConfig;

// setup file for jest
//const dotenv = require("dotenv");
//dotenv.config({ path: "./env.development" });
//console.log(jestConfig);
//module.exports = { setupFiles: ["dotenv/config"] };
