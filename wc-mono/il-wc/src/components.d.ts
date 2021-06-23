/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TYPE_VARIATIONS } from "./components/il-field/il-field.types";
import { IState } from "./components/il-form/il-form.types";
import { VARIATIONS } from "./components/il-notice/il-notice.types";
export namespace Components {
    interface IlField {
        "isRequired"?: boolean;
        "label": string;
        "name": string;
        "placeholder"?: string;
        "status"?: string;
        "type"?: TYPE_VARIATIONS;
        "value"?: string;
    }
    interface IlForm {
    }
    interface IlNotice {
        "isDismissable": boolean;
        "variation": VARIATIONS;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLIlFieldElement extends Components.IlField, HTMLStencilElement {
    }
    var HTMLIlFieldElement: {
        prototype: HTMLIlFieldElement;
        new (): HTMLIlFieldElement;
    };
    interface HTMLIlFormElement extends Components.IlForm, HTMLStencilElement {
    }
    var HTMLIlFormElement: {
        prototype: HTMLIlFormElement;
        new (): HTMLIlFormElement;
    };
    interface HTMLIlNoticeElement extends Components.IlNotice, HTMLStencilElement {
    }
    var HTMLIlNoticeElement: {
        prototype: HTMLIlNoticeElement;
        new (): HTMLIlNoticeElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "il-field": HTMLIlFieldElement;
        "il-form": HTMLIlFormElement;
        "il-notice": HTMLIlNoticeElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface IlField {
        "isRequired"?: boolean;
        "label"?: string;
        "name"?: string;
        "onValueChange"?: (event: CustomEvent<{ name: string; value: string }>) => void;
        "placeholder"?: string;
        "status"?: string;
        "type"?: TYPE_VARIATIONS;
        "value"?: string;
    }
    interface IlForm {
        "onSubmit"?: (event: CustomEvent<IState>) => void;
    }
    interface IlNotice {
        "isDismissable"?: boolean;
        "variation"?: VARIATIONS;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "il-field": IlField;
        "il-form": IlForm;
        "il-notice": IlNotice;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "il-field": LocalJSX.IlField & JSXBase.HTMLAttributes<HTMLIlFieldElement>;
            "il-form": LocalJSX.IlForm & JSXBase.HTMLAttributes<HTMLIlFormElement>;
            "il-notice": LocalJSX.IlNotice & JSXBase.HTMLAttributes<HTMLIlNoticeElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}