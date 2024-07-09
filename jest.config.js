const dotenv = require("dotenv");
dotenv.config({ path: ".env.development" });

const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"],
});
module.exports = jestConfig;

/*/ setup file for jest
Poderia também só colocar no script isso: NODE_ENV=development antes do Jest...
 */
