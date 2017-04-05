const babelLoader = {
  loader: 'babel-loader',
  query: {
    plugins: [
      ['root-import', {
        rootPathPrefix: "@",
        rootPathSuffix: "./imports"
      }]
    ]
  }
};

module.exports = {
  entry: './client/main.js',
  output: {
    filename: 'out.js'
  },
  module: {
    loaders: [babelLoader]
  }
};
