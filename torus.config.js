const defaultConfig = {
  esm: true, // Whether to generate an esm build. Default: true
  cjs: true, // Whether to generate a cjs build. Default: true
  umd: false, // Whether to generate an umd build. Default: true
  cjsBundled: false, // Whether to generate an cjs build with troubling deps bundled. Default: false
  analyzerMode: "server",

};

module.exports = defaultConfig;