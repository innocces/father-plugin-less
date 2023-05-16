import type { IApi } from 'father';
import type { Config } from './type';
import type { ILoaderItem } from './loader';
import { addLoader } from 'father/dist/builder/bundless/loaders';

import transformImportLess2Css from './babel/transformImportLess2Css';

/**
 * @description coverage options types
 * @param {Config} config
 * @returns {Config}
 */
export function defineConfig(config: Config) {
  return config;
}

export default async (api: IApi) => {
  api.describe({
    key: 'lessInBabel',
    config: {
      schema: ({ zod }) => {
        return zod.boolean() || zod.object().deepPartial();
      },
    },
    enableBy: api.EnableBy.config,
  });

  api.modifyConfig((memo) => {
    const config = memo as Config;

    // if open, modify support mode with custom plugins
    if (config.lessInBabel) {
      const supportMode = ['esm', 'cjs'] as const;
      supportMode.forEach((mode) => {
        if (config[mode]) {
          const { extraBabelPlugins = [] } = config[mode]!;
          config[mode]!.extraBabelPlugins = [
            ...extraBabelPlugins,
            // transform ts file less import source
            transformImportLess2Css,
          ];
        }
      });
    }

    return config;
  });

  const loaders: ILoaderItem[] = await api.applyPlugins({
    key: 'addLessLoader',
    initialValue: [
      {
        key: 'less-loader',
        test: /\.less$/,
        loader: require.resolve('./loader'),
      },
    ],
  });

  loaders.forEach((loader) => addLoader(loader));
};
