export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    "moduleNameMapper": {
      "^src/(.*)$": "<rootDir>/$1"
    }
  };