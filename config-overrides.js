module.exports = function override(config, env) {
  config.externals = {
    'agora-electron-sdk': 'commonjs2 agora-electron-sdk',
    'agora-rdc-core': 'commonjs2 agora-rdc-core',
  };
  return config;
};
