// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { globSync } from 'glob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const common = {
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
    postcss()
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime']
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false
      }
    ],
    ...common
  },
  {
    input: {
      ...Object.fromEntries(
        globSync('src/icons/*.tsx').map(file => [
          // This removes `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.tsx becomes nested/foo
          path.relative('src', file.slice(0, file.length - path.extname(file).length)),
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),
      index: 'src/index.ts'
    },
    output: [
      {
        dir: 'dist/esm',
        format: 'esm',
        sourcemap: false
      }
    ],
    ...common
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
    external: [/\.css$/]
  }
];
