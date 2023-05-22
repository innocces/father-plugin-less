import { defineConfig } from 'father-plugin-less';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { output: 'dist' },
  lessInBabel: {
    modifyVars: {
      '@primaryColor': 'red',
    },
  },
  plugins: ['father-plugin-less'],
});
