// https://github.com/umijs/father/blob/father-build%401.22.5/packages/father-build/src/getBabelConfig.ts#L25
import type { IApi } from 'father';

const transformImportLess2Css: Required<
  IApi['config']
>['extraBabelPlugins'][0] = () => {
  return {
    name: 'transform-import-less-to-css',
    visitor: {
      ImportDeclaration(path: any) {
        const re = /\.less$/;
        if (re.test(path.node.source.value)) {
          path.node.source.value = path.node.source.value.replace(re, '.css');
        }
      },
    },
  };
};

export default transformImportLess2Css;
