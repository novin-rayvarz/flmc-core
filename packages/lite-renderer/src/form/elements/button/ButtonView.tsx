import { Button, CircularProgress, createMuiTheme, Icon as MIcon, withStyles } from "@material-ui/core";
import * as React from "react";
import useFunctionAsState from "../../../custom-hooks/function-state";
import { Visibility } from "../base/BaseElement";
import { ButtonElement } from "./ButtonElement";
import { Colors, Disabled, Icon, Loading, OnClick, Text, Variant } from "./ButtonElementAttributes";
import { useTheme } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

type Props = {
  element: ButtonElement;
  weight: number;
};

export default function ButtonView({ element, weight }: Props) {
  const theme = useTheme<Theme>();

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [text, setText] = React.useState<Text>(undefined);
  const [loading, setLoading] = React.useState<Loading>(false);
  const [disabled, setDisabled] = React.useState<Disabled>(false);
  const [colors, setColors] = React.useState<Colors>("default");
  const [variant, setVariant] = React.useState<Variant>("contained");
  const [icon, setIcon] = React.useState<Icon>(undefined);
  const [onClick, setOnClick] = useFunctionAsState<OnClick>(undefined);
  const [visibility, setVisibility] = React.useState<Visibility>("show");

  React.useEffect(() => {
    let textSub = element.textContainer.subscribe({ next: v => setText(v) });
    let loadingSub = element.loadingContainer.subscribe({ next: v => setLoading(v) });
    let disabledSub = element.disabledContainer.subscribe({ next: v => setDisabled(v) });
    let colorsSub = element.colorsContainer.subscribe({ next: v => setColors(v) });
    let variantSub = element.variantContainer.subscribe({ next: v => setVariant(v) });
    let iconSub = element.iconContainer.subscribe({ next: v => setIcon(v) });
    let onClickSub = element.onClickContainer.subscribe({ next: v => setOnClick(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      textSub.unsubscribe();
      loadingSub.unsubscribe();
      disabledSub.unsubscribe();
      colorsSub.unsubscribe();
      variantSub.unsubscribe();
      iconSub.unsubscribe();
      onClickSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function getProgressColor(variant: Variant, color: Colors) {
    if (theme === null) return "#000000";
    if (variant === "contained") return theme.palette.primary.light;
    else return theme.palette.primary.dark;
  }

  const ColorCircularProgress = withStyles({
    root: {
      color: getProgressColor(variant, colors)
    }
  })(CircularProgress);

  function createIcon() {
    if (!icon) return null;
    return <MIcon style={{ marginRight: !!text ? 8 : 0 }}>{icon}</MIcon>;
  }

  function createLoading() {
    if (!loading) return null;
    return <ColorCircularProgress style={{ marginRight: !!text ? 8 : 0 }} size={20} thickness={3} />;
  }

  const handleClick = () => {
    if (loading || onClick == null) return;
    onClick();
  };

  return (
    <Button
      style={{
        ...element.getVisibilityStyle(visibility),
        ...element.getWeightStyle(weight)
      }}
      variant={variant as any}
      color={colors}
      disabled={disabled}
      onClick={handleClick}
    >
      {createIcon()}
      {createLoading()}
      {text}
    </Button>
  );
}
