// import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import external from 'rollup-plugin-peer-deps-external';
// import url from 'rollup-plugin-url';

import pkg from './package.json';

export default {
  input: './index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    },
    {
      file: pkg.browser,
      format: 'umd',
      name: 'exectime',
      sourcemap: true
    }
  ],
  plugins: [
    // external(),
    // url(),
    // babel({
    //   exclude: 'node_modules/**'
    // }),
    // resolve(),
    commonjs()
  ]
};
