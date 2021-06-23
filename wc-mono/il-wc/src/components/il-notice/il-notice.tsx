import { Component, Prop, h } from "@stencil/core";
import { IVariationConfig, VARIATIONS } from "./il-notice.types";

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

const DEFAULT_VARIATION = VARIATIONS.INFO;

const getVariationConfig = (variation = VARIATIONS.INFO) =>
  VARIATION_CONFIGS[variation];

@Component({
  tag: "il-notice",
  styleUrl: "il-notice.scss",
  shadow: true,
})
export class ILNotice {
  @Prop() variation: VARIATIONS = DEFAULT_VARIATION;

  @Prop() isDismissable: boolean = false;

  private onDismiss(event: MouseEvent) {
    console.log("dismissed", event);
  }

  private getRole() {
    if (this.isDismissable) {
      return getVariationConfig(this.variation).isNegative
        ? "alertdialog"
        : "dialog";
    }
    return getVariationConfig(this.variation).isNegative ? "alert" : "dialog";
  }

  render() {
    return (
      <div role={this.getRole()} class={`il-notice ${this.variation}`}>
        {this.isDismissable && (
          <button onClick={this.onDismiss} class="btn-close">
            x
          </button>
        )}
        <slot></slot>
      </div>
    );
  }
}
