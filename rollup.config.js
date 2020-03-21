import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

const babelOptions = {
  extensions: [".js", ".ts"]
};

const terserOptions = { output: { comments: "" } };

export default [
  {
    input: "src/index.ts",
    plugins: [
      typescript(),
      commonjs(),
      babel(babelOptions),
      terser(terserOptions)
    ],
    output: {
      file: "dist/map-loader.umd.js",
      format: "umd",
      name: "google.maps.plugins.map-loader",
      sourcemap: true
    }
  },
  {
    input: "src/index.ts",
    plugins: [
      typescript(),
      commonjs(),
      babel(babelOptions),
      terser(terserOptions)
    ],
    output: {
      file: "dist/map-loader.min.js",
      format: "iife",
      name: "google.maps.plugins.map-loader"
    }
  },
  {
    input: "src/index.ts",
    plugins: [typescript(), commonjs(), babel(babelOptions)],
    output: {
      file: "dist/map-loader.dev.js",
      format: "iife",
      name: "google.maps.plugins.map-loader"
    }
  },
  {
    input: "src/index.ts",
    plugins: [typescript()],
    output: {
      file: "dist/map-loader.esm.js",
      format: "esm",
      sourcemap: true
    }
  }
];
