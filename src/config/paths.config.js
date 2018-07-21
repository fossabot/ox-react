import keys from '@vzhdi/ox/utils/keys';

export default (baseConfig, { config }) => {
  const {
    [keys['rc-config']]: { dir: userDirs },
  } = config;

  const dirs = {
    src: (userDirs || {}).src || './src',
  };

  return {
    'src.indexJs': `${dirs.src}/index.jsx`,
  };
};
