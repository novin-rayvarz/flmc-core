import IElement, { ValidationResult } from '../IElement';
import { Observable, BehaviorSubject } from 'rxjs';
export declare class LabelElement implements IElement {
    dispose(): void;
    readonly type: string;
    validate(): ValidationResult;
    value: BehaviorSubject<string>;
    private textR;
    private textO;
    text(text: Observable<string> | string): LabelElement;
}
declare const Label: (value: string | null) => LabelElement;
export default Label;
