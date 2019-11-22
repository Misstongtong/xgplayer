import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**' // 仅仅转译我们的源码
    })
  ],
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'Render'
  }
};