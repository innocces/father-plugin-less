import type { IBundlessLoader } from 'father';
import type { ILoaderItem } from 'father/dist/builder/bundless/loaders';
import type { ILoaderOutput } from 'father/dist/builder/bundless/loaders/types';
import type { Config } from '../type';

import { render } from 'less';

export type { ILoaderItem };

const loader: IBundlessLoader = function (content) {
  const outputOpts: ILoaderOutput['options'] = {
    ext: '.css',
  };

  const cb = this.async();
  const { lessInBabel } = this.config as Config;

  const lessOptions = (lessInBabel ?? {}) as Less.Options;
  lessOptions.filename = this.resource;

  render(content, lessOptions).then(({ css, map }) => {
    if (lessOptions.sourceMap) {
      outputOpts.map = map;
    }

    this.setOutputOptions(outputOpts);
    cb(null, css);
  }, cb);
};

export default loader;
