module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-es6-class': [1, 'always'],
    'react/prefer-stateless-function': false,
  },
};
