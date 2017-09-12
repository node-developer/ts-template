import rollupTypescript from 'rollup-plugin-typescript'
import typescript from 'typescript'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import config from './package.json'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/graphic.js',
    format: 'umd',
    name: 'graphic'
  },
  sourcemap: true,
  plugins: [
    resolve({
      preferBuiltins: false
    }),
    commonjs({
      exclude: Object.keys(config.devDependencies).map(name => `node_modules/${name}/**`)
    }),
    rollupTypescript({
      typescript
    })
  ]
}
