const isDev = process.env.NODE_ENV === 'development';

module.exports = (baseConfig, { waitDependencies }) =>
  waitDependencies('webpack-serve').then(webpackServeConfig => {
    const presets = [['@babel/preset-react']];
    const plugins = [['@babel/plugin-transform-react-constant-elements']];
    if (isDev) {
      plugins.push(['@babel/plugin-transform-react-jsx-source']);
      if (webpackServeConfig.hmr) {
        plugins.push(['react-hot-loader/babel', {}]);
      }
    } else {
      plugins.push(['@babel/plugin-transform-react-inline-elements']);
    }
    return {
      presets: baseConfig.presets.concat(presets),
      plugins: plugins.concat(baseConfig.plugins),
    };
  });
