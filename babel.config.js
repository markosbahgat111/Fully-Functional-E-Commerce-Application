module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'babel-preset-expo'],
  env: {
    production: {
      plugins: [
        ['babel-plugin-root-import',
        {
          rootPathPrefix: 'src',
          rootPathSuffix: 'src'
        }, ]
      ]
    }
  },
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: 'src',
        rootPathSuffix: 'src'
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
