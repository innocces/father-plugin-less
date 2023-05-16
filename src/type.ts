import type { IApi } from 'father';

export type LessInBabelOptions = Less.Options;

export type LessInBabel = boolean | LessInBabelOptions;

export type Config = IApi['config'] & { lessInBabel?: LessInBabel };
