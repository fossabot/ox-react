const { default: PluginReact } = require('./lib');

module.exports = {
  dir: {
    config: './test/config',
    src: './test/src',
  },
  plugins: [new PluginReact()],
};
