module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
  // devServer: {
    // proxy: {
      // '*': {
        // target: 'https://api.notion.com/v1/databases/db0f7e62548e4870a3e2ed49b25eca06/'
      // }
    // }
  // }
};
