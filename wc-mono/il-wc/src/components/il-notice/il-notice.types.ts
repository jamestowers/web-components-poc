export enum VARIATIONS {
  INFO = "info",
  SUCCESS = "success",
  FEATURE = "feature",
  WARNING = "warning",
  ERROR = "error",
}

export interface IVariationConfig {
  isNegative: boolean;
  title: string;
}
