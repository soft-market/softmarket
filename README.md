# Setup Stroybook with react-native

    # Create our application:
    expo init --template tabs taskbox

    cd taskbox

    # Add Storybook:
    npx -p @storybook/cli sb init --type react_native

## allow action for storybook

- change storybook/rn-addons.js

    yarn add -D @storybook/addon-ondevice-actions

# Setup Jest with React Native

1. Create a new folder called __mocks__ and inside add a new file globalMock.js

```javascript
jest.mock('global', () => ({
  ...global,
  WebSocket: function WebSocket() {},
}));
```

2. Update the jest field in package.json

```json
"jest": {
    "preset": "jest-expo",
    "transformIgnorePatterns": [
      "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/__mocks__/globalMock.js"
    ]
  }
```
