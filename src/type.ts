import type { IApi } from 'father';

export type LessInBabelOptions = Less.Options;

export type LessInBabel = LessInBabelOptions;

export type Config = IApi['config'] & { lessInBabel?: LessInBabel };
