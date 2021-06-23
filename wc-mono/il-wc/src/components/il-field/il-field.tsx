import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";
import { FIELD_VARIATIONS, TYPE_VARIATIONS } from "./il-field.types";

@Component({
  tag: "il-field",
  styleUrl: "il-field.scss",
  shadow: true,
})
export class IlField {
  @Prop() type?: TYPE_VARIATIONS = TYPE_VARIATIONS.TEXT;
  @Prop() name: string;
  @Prop() label: string;
  @Prop() value?: string = "";
  @Prop() placeholder?: string;
  @Prop() status?: string = FIELD_VARIATIONS.DEFAULT;
  @Prop() isRequired?: boolean = false;

  @Event()
  valueChange: EventEmitter<{ name: string; value: string }>;

  private onChangeHandler = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;

    this.valueChange.emit({ name: this.name, value });
  };

  render() {
    return (
      <Host>
        <label htmlFor={`field-${this.name}`}>
          {this.label} {this.isRequired && "*"}
        </label>
        <input
          id={`field-${this.name}`}
          type={this.type}
          name={this.name}
          value={String(this.value)}
          placeholder={this.placeholder}
          onChange={this.onChangeHandler}
          disabled={this.status === FIELD_VARIATIONS.DISABLED}
          required={this.isRequired}
        />
      </Host>
    );
  }
}
