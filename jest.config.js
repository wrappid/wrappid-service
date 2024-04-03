module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePathIgnorePatterns: ["./.wrappid", "./build"],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "test/**/*.{js,jsx,ts}",
    "!**/node_modules/**"
  

  ],
};