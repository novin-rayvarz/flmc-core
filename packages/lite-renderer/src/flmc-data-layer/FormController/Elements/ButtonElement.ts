import IElement, { ValidationResult } from "../IElement";
import { ElementTypes } from "./ElementTypes";
import { Observable, BehaviorSubject, isObservable } from "rxjs";

export interface OnTapCallBack {
  (): void;
}

export class ButtonElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementTypes.Button;
  }

  validate(): ValidationResult {
    return new ValidationResult(true);
  }

  // text

  buttonText = new BehaviorSubject<string>("");

  private textR(text: string): ButtonElement {
    this.buttonText.next(text);
    return this;
  }

  private textO(text: Observable<string>): ButtonElement {
    text.subscribe({
      next: v => this.buttonText.next(v)
    });
    return this;
  }

  text(text: Observable<string> | string): ButtonElement {
    if (typeof text === "string") return this.textR(text);
    if (isObservable(text)) return this.textO(text);
    throw new Error("given text type is not supported");
  }
  // callback

  buttonCallback = new BehaviorSubject<OnTapCallBack | null>(null);

  private onTapR(action: OnTapCallBack): ButtonElement {
    this.buttonCallback.next(action);
    return this;
  }

  private onTapO(action: Observable<OnTapCallBack>): ButtonElement {
    action.subscribe({
      next: v => this.buttonCallback.next(v)
    });
    return this;
  }

  onTap(action: Observable<OnTapCallBack> | OnTapCallBack): ButtonElement {
    if (typeof action === "function") return this.onTapR(action);
    if (isObservable(action)) return this.onTapO(action);
    throw new Error("given action type is not supported");
  }
}

const Button = (title: string | null): ButtonElement => {
  let element = new ButtonElement();
  if (title == null) return element;
  return element.text(title);
};

export default Button;
