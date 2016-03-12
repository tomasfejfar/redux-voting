module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "mocha"
  ],
  "env": {
    "mocha": true
  },
  "rules": {
    "react/prefer-es6-class": [2, 'never'],
    "react/prop-types": [0],
    "react/prefer-stateless-function": [0],
    "no-console": [0],
    "quote-props": [0],
  },
};
