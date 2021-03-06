import { BehaviorSubject, isObservable, Observable } from "rxjs";
import { isSubject } from "../../../flmc-data-layer";
import IElement, {
  ValidationResult
} from "../../../flmc-data-layer/FormController/IElement";
import { BaseElement } from "../base/BaseElement";
import { ElementType } from "../ElementType";
import {
  Direction,
  Disabled,
  EndIcon,
  EndText,
  HelperText,
  InputType,
  IsInError,
  Label,
  Mask,
  MaxLength,
  Multiline,
  NumberFormatter,
  OnEndIconClick,
  OnStartIconClick,
  Placeholder,
  PlaceholderDirection,
  Rows,
  RowsMax,
  SelectOptions,
  StartIcon,
  StartText,
  TypeGuards,
  Validations,
  Value,
  Variant
} from "./TextInputElementAttributes";

export class TextInputElement extends BaseElement implements IElement {
  lastHelperTextValue?: string;

  validate(): ValidationResult {
    this.isInErrorContainer.next(false);

    for (let validator of this.validationsContainer.value) {
      let validatorResult = validator(this.valueContainer.value);
      if (!validatorResult.isValid) {
        this.lastHelperTextValue = this.helperTextContainer.value;
        this.isInErrorContainer.next(true);
        this.helperTextContainer.next(validatorResult.validationMessage);
        return validatorResult;
      }
    }

    this.helperTextContainer.next(this.lastHelperTextValue);
    return new ValidationResult(true);
  }

  dispose(): void {}

  //region auto generated code
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/

  get type(): string {
    return ElementType.TextInput;
  }

  valueContainer = new BehaviorSubject<Value>("");
  // when we call valueB it becomes true and in TextInputView we will use this to
  // prevent calling .next
  isExternalValueContainer = false;

  /** iternal function for handling BehaviorSubject<Value> types used for bidirectional bindings*/
  private valueB(value: BehaviorSubject<Value>): TextInputElement {
    this.valueContainer = value;
    this.isExternalValueContainer = true;
    return this;
  }

  /** iternal function for handling raw Value types*/
  private valueR(value: Value): TextInputElement {
    this.valueContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Value> types*/
  private valueO(value: Observable<Value>): TextInputElement {
    value.subscribe({ next: v => this.valueContainer.next(v) });
    return this;
  }

  /**
   * default value: ''
   *
   * container that holds value of text input.
   * @example
   * // read a text input value
   *
   * controller = new BehaviorSubject<string>("text input default value");
   * TextInput(controller);
   * console.log(controller.value);
   *
   * // set text input value
   *
   * controller.next("new value")
   *
   */
  value(
    value: BehaviorSubject<Value> | Observable<Value> | Value
  ): TextInputElement {
    if (TypeGuards.isValue(value)) return this.valueR(value);
    else if (isSubject(value)) return this.valueB(value);
    else if (isObservable(value)) return this.valueO(value);
    throw new Error(`invalid type ${typeof value} for Value`);
  }

  labelContainer = new BehaviorSubject<Label>(undefined);

  /** iternal function for handling raw Label types*/
  private labelR(value: Label): TextInputElement {
    this.labelContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Label> types*/
  private labelO(value: Observable<Label>): TextInputElement {
    value.subscribe({ next: v => this.labelContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * label of text input
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  label(value: Observable<Label> | Label): TextInputElement {
    if (TypeGuards.isLabel(value)) return this.labelR(value);
    else if (isObservable(value)) return this.labelO(value);
    throw new Error(`invalid type ${typeof value} for Label`);
  }

  placeholderContainer = new BehaviorSubject<Placeholder>(undefined);

  /** iternal function for handling raw Placeholder types*/
  private placeholderR(value: Placeholder): TextInputElement {
    this.placeholderContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Placeholder> types*/
  private placeholderO(value: Observable<Placeholder>): TextInputElement {
    value.subscribe({ next: v => this.placeholderContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * placeholder of text input
   * when value is empty it shows this value instead
   * @example
   * TextInput(controller)
   *   .placeholder("Please Enter Value...")
   * @
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  placeholder(value: Observable<Placeholder> | Placeholder): TextInputElement {
    if (TypeGuards.isPlaceholder(value)) return this.placeholderR(value);
    else if (isObservable(value)) return this.placeholderO(value);
    throw new Error(`invalid type ${typeof value} for Placeholder`);
  }

  disabledContainer = new BehaviorSubject<Disabled>(false);

  /** iternal function for handling raw Disabled types*/
  private disabledR(value: Disabled): TextInputElement {
    this.disabledContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Disabled> types*/
  private disabledO(value: Observable<Disabled>): TextInputElement {
    value.subscribe({ next: v => this.disabledContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   * control if user can input data or not
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  disabled(value: Observable<Disabled> | Disabled): TextInputElement {
    if (TypeGuards.isDisabled(value)) return this.disabledR(value);
    else if (isObservable(value)) return this.disabledO(value);
    throw new Error(`invalid type ${typeof value} for Disabled`);
  }

  helperTextContainer = new BehaviorSubject<HelperText>(undefined);

  /** iternal function for handling raw HelperText types*/
  private helperTextR(value: HelperText): TextInputElement {
    this.helperTextContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<HelperText> types*/
  private helperTextO(value: Observable<HelperText>): TextInputElement {
    value.subscribe({ next: v => this.helperTextContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * the text under text field
   * if error attribute is enabled it change colors to error color else
   * it can act as description
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  helperText(value: Observable<HelperText> | HelperText): TextInputElement {
    if (TypeGuards.isHelperText(value)) return this.helperTextR(value);
    else if (isObservable(value)) return this.helperTextO(value);
    throw new Error(`invalid type ${typeof value} for HelperText`);
  }

  isInErrorContainer = new BehaviorSubject<IsInError>(false);

  /** iternal function for handling raw IsInError types*/
  private isInErrorR(value: IsInError): TextInputElement {
    this.isInErrorContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<IsInError> types*/
  private isInErrorO(value: Observable<IsInError>): TextInputElement {
    value.subscribe({ next: v => this.isInErrorContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   * If true, the text field will be displayed in an error state.
   * error message can be set in helperText
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  isInError(value: Observable<IsInError> | IsInError): TextInputElement {
    if (TypeGuards.isInError(value)) return this.isInErrorR(value);
    else if (isObservable(value)) return this.isInErrorO(value);
    throw new Error(`invalid type ${typeof value} for IsInError`);
  }

  startTextContainer = new BehaviorSubject<StartText>(undefined);

  /** iternal function for handling raw StartText types*/
  private startTextR(value: StartText): TextInputElement {
    this.startTextContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<StartText> types*/
  private startTextO(value: Observable<StartText>): TextInputElement {
    value.subscribe({ next: v => this.startTextContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * text input prefix
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  startText(value: Observable<StartText> | StartText): TextInputElement {
    if (TypeGuards.isStartText(value)) return this.startTextR(value);
    else if (isObservable(value)) return this.startTextO(value);
    throw new Error(`invalid type ${typeof value} for StartText`);
  }

  endTextContainer = new BehaviorSubject<EndText>(undefined);

  /** iternal function for handling raw EndText types*/
  private endTextR(value: EndText): TextInputElement {
    this.endTextContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<EndText> types*/
  private endTextO(value: Observable<EndText>): TextInputElement {
    value.subscribe({ next: v => this.endTextContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * text input suffix
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  endText(value: Observable<EndText> | EndText): TextInputElement {
    if (TypeGuards.isEndText(value)) return this.endTextR(value);
    else if (isObservable(value)) return this.endTextO(value);
    throw new Error(`invalid type ${typeof value} for EndText`);
  }

  startIconContainer = new BehaviorSubject<StartIcon>(undefined);

  /** iternal function for handling raw StartIcon types*/
  private startIconR(value: StartIcon): TextInputElement {
    this.startIconContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<StartIcon> types*/
  private startIconO(value: Observable<StartIcon>): TextInputElement {
    value.subscribe({ next: v => this.startIconContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * name of text input prefix icon
   * all supported icon names : https://material.io/tools/icons
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  startIcon(value: Observable<StartIcon> | StartIcon): TextInputElement {
    if (TypeGuards.isStartIcon(value)) return this.startIconR(value);
    else if (isObservable(value)) return this.startIconO(value);
    throw new Error(`invalid type ${typeof value} for StartIcon`);
  }

  endIconContainer = new BehaviorSubject<EndIcon>(undefined);

  /** iternal function for handling raw EndIcon types*/
  private endIconR(value: EndIcon): TextInputElement {
    this.endIconContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<EndIcon> types*/
  private endIconO(value: Observable<EndIcon>): TextInputElement {
    value.subscribe({ next: v => this.endIconContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * name of text input suffix icon
   * all supported icon names : https://material.io/tools/icons
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  endIcon(value: Observable<EndIcon> | EndIcon): TextInputElement {
    if (TypeGuards.isEndIcon(value)) return this.endIconR(value);
    else if (isObservable(value)) return this.endIconO(value);
    throw new Error(`invalid type ${typeof value} for EndIcon`);
  }

  variantContainer = new BehaviorSubject<Variant>("standard");

  /** iternal function for handling raw Variant types*/
  private variantR(value: Variant): TextInputElement {
    this.variantContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Variant> types*/
  private variantO(value: Observable<Variant>): TextInputElement {
    value.subscribe({ next: v => this.variantContainer.next(v) });
    return this;
  }

  /**
   * default value: 'standard'
   *
   * text input style
   * supported styles : 'standard' | 'filled' | 'outlined' | TextInputStyleType.Standard | TextInputStyleType.Outlined | TextInputStyleType.Filled
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  variant(value: Observable<Variant> | Variant): TextInputElement {
    if (TypeGuards.isVariant(value)) return this.variantR(value);
    else if (isObservable(value)) return this.variantO(value);
    throw new Error(`invalid type ${typeof value} for Variant`);
  }

  inputTypeContainer = new BehaviorSubject<InputType>("text");

  /** iternal function for handling raw InputType types*/
  private inputTypeR(value: InputType): TextInputElement {
    this.inputTypeContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<InputType> types*/
  private inputTypeO(value: Observable<InputType>): TextInputElement {
    value.subscribe({ next: v => this.inputTypeContainer.next(v) });
    return this;
  }

  /**
   * default value: 'text'
   *
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  inputType(value: Observable<InputType> | InputType): TextInputElement {
    if (TypeGuards.isInputType(value)) return this.inputTypeR(value);
    else if (isObservable(value)) return this.inputTypeO(value);
    throw new Error(`invalid type ${typeof value} for InputType`);
  }

  multilineContainer = new BehaviorSubject<Multiline>(false);

  /** iternal function for handling raw Multiline types*/
  private multilineR(value: Multiline): TextInputElement {
    this.multilineContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Multiline> types*/
  private multilineO(value: Observable<Multiline>): TextInputElement {
    value.subscribe({ next: v => this.multilineContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   * enables multiline text input
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  multiline(value: Observable<Multiline> | Multiline): TextInputElement {
    if (TypeGuards.isMultiline(value)) return this.multilineR(value);
    else if (isObservable(value)) return this.multilineO(value);
    throw new Error(`invalid type ${typeof value} for Multiline`);
  }

  rowsContainer = new BehaviorSubject<Rows>(0);

  /** iternal function for handling raw Rows types*/
  private rowsR(value: Rows): TextInputElement {
    this.rowsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Rows> types*/
  private rowsO(value: Observable<Rows>): TextInputElement {
    value.subscribe({ next: v => this.rowsContainer.next(v) });
    return this;
  }

  /**
   * default value: 0
   *
   * numbers of rows for multi line input (set 0 for default)
   * cannot be used with RowsMax attribute
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  rows(value: Observable<Rows> | Rows): TextInputElement {
    if (TypeGuards.isRows(value)) return this.rowsR(value);
    else if (isObservable(value)) return this.rowsO(value);
    throw new Error(`invalid type ${typeof value} for Rows`);
  }

  rowsMaxContainer = new BehaviorSubject<RowsMax>(0);

  /** iternal function for handling raw RowsMax types*/
  private rowsMaxR(value: RowsMax): TextInputElement {
    this.rowsMaxContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<RowsMax> types*/
  private rowsMaxO(value: Observable<RowsMax>): TextInputElement {
    value.subscribe({ next: v => this.rowsMaxContainer.next(v) });
    return this;
  }

  /**
   * default value: 0
   *
   * maxium number of lines for multi line input (set 0 for default)
   * cannot be used with Rows attribute
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  rowsMax(value: Observable<RowsMax> | RowsMax): TextInputElement {
    if (TypeGuards.isRowsMax(value)) return this.rowsMaxR(value);
    else if (isObservable(value)) return this.rowsMaxO(value);
    throw new Error(`invalid type ${typeof value} for RowsMax`);
  }

  directionContainer = new BehaviorSubject<Direction>("default");

  /** iternal function for handling raw Direction types*/
  private directionR(value: Direction): TextInputElement {
    this.directionContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Direction> types*/
  private directionO(value: Observable<Direction>): TextInputElement {
    value.subscribe({ next: v => this.directionContainer.next(v) });
    return this;
  }

  /**
   * default value: 'ltr'
   *
   * text direction
   * valid inputs : TextDirection.rtl, TextDirection.ltr, "rtl", "ltr"
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  direction(value: Observable<Direction> | Direction): TextInputElement {
    if (TypeGuards.isDirection(value)) return this.directionR(value);
    else if (isObservable(value)) return this.directionO(value);
    throw new Error(`invalid type ${typeof value} for Direction`);
  }

  placeholderDirectionContainer = new BehaviorSubject<PlaceholderDirection>(
    undefined
  );

  /** iternal function for handling raw PlaceholderDirection types*/
  private placeholderDirectionR(value: PlaceholderDirection): TextInputElement {
    this.placeholderDirectionContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<PlaceholderDirection> types*/
  private placeholderDirectionO(
    value: Observable<PlaceholderDirection>
  ): TextInputElement {
    value.subscribe({ next: v => this.placeholderDirectionContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * if undefined then it follows .direction attribute
   *
   */
  placeholderDirection(
    value: Observable<PlaceholderDirection> | PlaceholderDirection
  ): TextInputElement {
    if (isObservable(value)) this.placeholderDirectionO(value);
    else this.placeholderDirectionR(value);
    return this;
  }

  onInputClickContainer = new BehaviorSubject<VoidFunction | undefined>(
    undefined
  );

  private onInputClickR(value: VoidFunction | undefined): TextInputElement {
    this.onInputClickContainer.next(value);
    return this;
  }

  private onInputClickO(
    value: Observable<VoidFunction | undefined>
  ): TextInputElement {
    value.subscribe({ next: v => this.onInputClickContainer.next(v) });
    return this;
  }

  onInputClick(
    value: Observable<VoidFunction | undefined> | VoidFunction | undefined
  ): TextInputElement {
    if (TypeGuards.isOnInputClick(value)) return this.onInputClickR(value);
    else if (isObservable(value)) return this.onInputClickO(value);
    throw new Error(`invalid type ${typeof value} for onClick`);
  }

  onEndIconClickContainer = new BehaviorSubject<OnEndIconClick>(undefined);

  /** iternal function for handling raw OnEndIconClick types*/
  private onEndIconClickR(value: OnEndIconClick): TextInputElement {
    this.onEndIconClickContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<OnEndIconClick> types*/
  private onEndIconClickO(value: Observable<OnEndIconClick>): TextInputElement {
    value.subscribe({ next: v => this.onEndIconClickContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * fires when user clicks on EndIcon
   * must also set endIcon attribute
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  onEndIconClick(
    value: Observable<OnEndIconClick> | OnEndIconClick
  ): TextInputElement {
    if (TypeGuards.isOnEndIconClick(value)) return this.onEndIconClickR(value);
    else if (isObservable(value)) return this.onEndIconClickO(value);
    throw new Error(`invalid type ${typeof value} for OnEndIconClick`);
  }

  onStartIconClickContainer = new BehaviorSubject<OnStartIconClick>(undefined);

  /** iternal function for handling raw OnStartIconClick types*/
  private onStartIconClickR(value: OnStartIconClick): TextInputElement {
    this.onStartIconClickContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<OnStartIconClick> types*/
  private onStartIconClickO(
    value: Observable<OnStartIconClick>
  ): TextInputElement {
    value.subscribe({ next: v => this.onStartIconClickContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * fires when user clicks on StartIcon
   * must also set startIcon attribute
   *
   * see https://material-ui.com/components/text-fields/ or https://material-ui.com/api/text-field/ for more info
   */
  onStartIconClick(
    value: Observable<OnStartIconClick> | OnStartIconClick
  ): TextInputElement {
    if (TypeGuards.isOnStartIconClick(value))
      return this.onStartIconClickR(value);
    else if (isObservable(value)) return this.onStartIconClickO(value);
    throw new Error(`invalid type ${typeof value} for OnStartIconClick`);
  }

  validationsContainer = new BehaviorSubject<Validations>([]);

  /** iternal function for handling raw Validations types*/
  private validationsR(value: Validations): TextInputElement {
    this.validationsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Validations> types*/
  private validationsO(value: Observable<Validations>): TextInputElement {
    value.subscribe({ next: v => this.validationsContainer.next(v) });
    return this;
  }

  /**
   * default value: []
   *
   * validations
   * create a custom validation or use TextInputValidations.*
   *
   * TODO: add docs
   */
  validations(value: Observable<Validations> | Validations): TextInputElement {
    if (TypeGuards.isValidation(value)) return this.validationsR(value);
    else if (isObservable(value)) return this.validationsO(value);
    throw new Error(`invalid type ${typeof value} for Validations`);
  }

  numberFormatterContainer = new BehaviorSubject<NumberFormatter>(false);

  /** iternal function for handling raw NumberFormatter types*/
  private numberFormatterR(value: NumberFormatter): TextInputElement {
    this.numberFormatterContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<NumberFormatter> types*/
  private numberFormatterO(
    value: Observable<NumberFormatter>
  ): TextInputElement {
    value.subscribe({ next: v => this.numberFormatterContainer.next(v) });
    return this;
  }

  /**
   * default value: false
   *
   *
   * TODO: add docs
   */
  numberFormatter(
    value: Observable<NumberFormatter> | NumberFormatter
  ): TextInputElement {
    if (isObservable(value)) this.numberFormatterO(value);
    else this.numberFormatterR(value);
    return this;
  }

  maskContainer = new BehaviorSubject<Mask>(undefined);

  /** iternal function for handling raw Mask types*/
  private maskR(value: Mask): TextInputElement {
    this.maskContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<Mask> types*/
  private maskO(value: Observable<Mask>): TextInputElement {
    value.subscribe({ next: v => this.maskContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   * example: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
   */
  mask(value: Observable<Mask> | Mask): TextInputElement {
    if (isObservable(value)) this.maskO(value);
    else this.maskR(value);
    return this;
  }

  selectOptionsContainer = new BehaviorSubject<SelectOptions>(undefined);

  /** iternal function for handling raw SelectOptions types*/
  private selectOptionsR(value: SelectOptions): TextInputElement {
    this.selectOptionsContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<SelectOptions> types*/
  private selectOptionsO(value: Observable<SelectOptions>): TextInputElement {
    value.subscribe({ next: v => this.selectOptionsContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  selectOptions(
    value: Observable<SelectOptions> | SelectOptions
  ): TextInputElement {
    if (isObservable(value)) this.selectOptionsO(value);
    else this.selectOptionsR(value);
    return this;
  }

  maxLengthContainer = new BehaviorSubject<MaxLength>(undefined);

  /** iternal function for handling raw MaxLength types*/
  private maxLengthR(value: MaxLength): TextInputElement {
    this.maxLengthContainer.next(value);
    return this;
  }

  /** iternal function for handling Observable<MaxLength> types*/
  private maxLengthO(value: Observable<MaxLength>): TextInputElement {
    value.subscribe({ next: v => this.maxLengthContainer.next(v) });
    return this;
  }

  /**
   * default value: undefined
   *
   *
   */
  maxLength(value: Observable<MaxLength> | MaxLength): TextInputElement {
    if (isObservable(value)) this.maxLengthO(value);
    else this.maxLengthR(value);
    return this;
  }
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion
}

/*******************************************/
/* GENERATED CODE, DO NOT MODIFY BY HAND!! */
/*******************************************/

/**
 * @example
 * // usage:
 * let controller = new BehaviorSubject<string>(""); // or BehaviorSubject<Value>
 * TextInput(controller);
 *
 */
const TextInput = (
  value: BehaviorSubject<Value> | Observable<Value> | Value
): TextInputElement => {
  return new TextInputElement().value(value);
};

export default TextInput;
/*******************************************/
/* END OF GENERATED CODE                   */
/*******************************************/
