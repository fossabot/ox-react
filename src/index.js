import path from 'path';
import { Plugin, AutoAssignConfig, BabelPresetReset, BabelPluginReset } from '@vzhdi/ox/plugins';
import WebpackPlugin from '@vzhdi/ox-webpack';
import prefix from './plugins/helper/prefix';

/* eslint-disable class-methods-use-this */
class ReactPlugin extends Plugin {
  constructor() {
    super(`${prefix}/index`);
  }

  getDependencies() {
    return [
      new WebpackPlugin(),
      new AutoAssignConfig(path.resolve(__dirname, './config')),
      new BabelPresetReset('@babel/preset-env', {
        modules: false,
      }),
      new BabelPluginReset('@babel/plugin-transform-runtime', {
        useESModules: true,
      }),
    ];
  }

  apply() {}
}
/* eslint-enable class-methods-use-this */

export default ReactPlugin;
