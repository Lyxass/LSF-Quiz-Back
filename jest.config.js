module.exports = {
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!src/plugins/*",
    "!src/**/server.js",
    "!src/*",
    "!**/vendor/**"
  ],
  "testMatch": ['**/tests/**/*.spec.{j,t}s?(x)']
}
