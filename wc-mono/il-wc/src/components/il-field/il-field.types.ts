export enum FIELD_VARIATIONS {
  DEFAULT = "DEFAULT",
  VALID = "VALID",
  INVALID = "INVALID",
  DISABLED = "DISABLED",
}

export enum TYPE_VARIATIONS {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
  NUMBER = "number",
  SEARCH = "search",
  DATE = "date",
  TIME = "time",
}

export enum VALIDATION_STATUS {
  REQUIREMENT = "REQUIREMENT",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface IValidationMessage {
  status?: VALIDATION_STATUS;
  qaid?: string;
  text: string;
}

export interface IFieldProps {
  /**
   * The field type to output, eg, text, email, password etc.
   */
  type?: TYPE_VARIATIONS;
  /**
   * The status of the field (disabled, invalid etc.)
   */
  status?: FIELD_VARIATIONS;
  /**
   * The field label
   */
  label: string;
  /**
   * The field name. Not visible to the user, used as the key of a key/value pair when returning field/form data
   */
  name: string;
  /**
   * The field value. If passed an empty string, it will resolve to `undefined`
   */
  value: string | number | Date;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * A description of the field, displayed underneath the field label
   */
  description?: string;
  /**
   * An array of validation messages
   */
  validationMessages?: IValidationMessage[];
  /**
   * Function to call on field blur
   */
  onBlur?: (event: Event) => void;
  /**
   * Function to call on field change
   */
  onChange?: (event: Event) => void;
  /**
   * Function to call on field focus
   */
  onFocus?: (event: Event) => void;
  /**
   * Specifies if the field is mandatory. If set to `true` an asterisk will append the field label
   */
  isRequired?: boolean;
  /**
   * Specifies whether the field label should be visually hidden. Note: a hidden label is still visible to screen readers
   */
  isLabelHidden?: boolean;
  /**
   * An icon to display on the left of the field
   */
  iconLeft?: Node;
  /**
   * An icon to display on the right of the field
   */
  iconRight?: Node;
  /**
   * The maximum character limit allowed
   */
  characterLimit?: number;
  /**
   * Specifies whether the autoComplete functionality should be turned off.
   */
  disableAutoComplete?: boolean;
}
