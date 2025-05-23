module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }], // поддержка JSX с новым runtime React 17+
    '@babel/preset-typescript',
  ],
};