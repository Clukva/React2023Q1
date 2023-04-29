module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: ['transform-class-properties', 'istanbul'],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
};
