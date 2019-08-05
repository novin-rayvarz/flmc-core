export enum LabelColors {
  Initial = "initial",
  Inherit = "inherit",
  Primary = "primary",
  Secondary = "secondary",
  TextPrimary = "textPrimary",
  TextSecondary = "textSecondary"
}

export function isLabelColors(value: any): value is LabelColors {
  return (
    value == "initial" ||
    value == "inherit" ||
    value == "primary" ||
    value == "secondary" ||
    value == "textPrimary" ||
    value == "textSecondary"
  );
}
