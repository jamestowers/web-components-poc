import { Component, Host, h, State, Event, EventEmitter } from "@stencil/core";
import { IState } from "./il-form.types";

@Component({
  tag: "il-form",
  styleUrl: "il-form.scss",
  shadow: true,
})
export class IlForm {
  @State() values: IState;

  @Event()
  submit: EventEmitter<IState>;

  private handleValueChanged = (
    event: CustomEvent<{ name: string; value: string }>
  ) => {
    this.values = {
      ...this.values,
      [event.detail.name]: event.detail.value,
    };
  };

  private handleSubmit = () => {
    this.submit.emit(this.values);
  };

  render() {
    return (
      <Host>
        <slot></slot>
        <il-field
          name="name"
          label="Name"
          placeholder="Enter your name"
          isRequired
          onValueChange={this.handleValueChanged}
        />
        <il-field
          name="email"
          label="Email address"
          placeholder="Enter your email address"
          onValueChange={this.handleValueChanged}
        />
        <button onClick={this.handleSubmit}>Save</button>
      </Host>
    );
  }
}
