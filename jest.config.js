export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  testEnvironment: 'jest-environment-jsdom',
};
