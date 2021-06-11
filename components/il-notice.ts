import { define, property, dispatch, html, Hybrids } from "hybrids";

export enum VARIATIONS {
  INFO = "info",
  SUCCESS = "success",
  FEATURE = "feature",
  WARNING = "warning",
  ERROR = "error",
}

interface IVariationConfig {
  isNegative: boolean;
  title: string;
}

const VARIATION_CONFIGS: { [key: string]: IVariationConfig } = {
  [VARIATIONS.INFO]: {
    isNegative: false,
    title: "Informational message",
  },
  [VARIATIONS.SUCCESS]: {
    isNegative: false,
    title: "Successful action message",
  },
  [VARIATIONS.FEATURE]: {
    isNegative: false,
    title: "New feature message",
  },
  [VARIATIONS.WARNING]: {
    isNegative: true,
    title: "Warning alert",
  },
  [VARIATIONS.ERROR]: {
    isNegative: true,
    title: "Error alert",
  },
};

export const DEFAULT_VARIATION = VARIATIONS.INFO;

const getVariationConfig = (variation = VARIATIONS.INFO) =>
  VARIATION_CONFIGS[variation];

function getRole(variation: VARIATIONS, isDismissable: boolean = false) {
  if (isDismissable) {
    return getVariationConfig(variation).isNegative ? "alertdialog" : "dialog";
  }
  return getVariationConfig(variation).isNegative ? "alert" : "dialog";
}

interface ILNotice {
  variation: VARIATIONS;
  isDismissable?: boolean;
}

function onDismiss(host: EventTarget) {
  dispatch(host, "dismiss");
}

export const ILNotice: Hybrids<ILNotice> = {
  variation: VARIATIONS.INFO,

  isDismissable: false,

  render: ({ variation, isDismissable }) => html`
    <style>
      .il-notice {
        background: ${variation === "error"
          ? "var(--status-dangerLighter)"
          : "var(--status-infoLighter)"};
        border: 2px solid
          ${variation === "error"
            ? "var(--status-dangerLight)"
            : "var(--status-infoLight)"};
        border-radius: var(--border-radius-4, "4px");
        padding: var(--spacing-10);
      }
      .btn-close {
        float: right;
      }
    </style>

    <div role="${getRole(variation, isDismissable)}" class="il-notice">
      ${isDismissable &&
      html`<button onclick="${onDismiss}" class="btn-close">x</button>`}
      <slot></slot>
    </div>
  `,
};

define("il-notice", ILNotice);
