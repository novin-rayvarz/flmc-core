import * as React from 'react';
import { Visibility } from '../base/BaseElement';
import { ImageBorderType } from './ImageBorderType';
import { ImageElement } from './ImageElement';
import { Address, Alt, Border, Height, Scale, Width } from './ImageElementAttributes';

type Props = {
  element: ImageElement,
  weight: number
}

export default function ImageView({ element, weight }: Props) {

  //region generated
  /*******************************************/
  /* GENERATED CODE, DO NOT MODIFY BY HAND!! */
  /*******************************************/
  const [address, setAddress] = React.useState<Address>(() => element.addressContainer.value);
  const [alt, setAlt] = React.useState<Alt>(() => element.altContainer.value);
  const [width, setWidth] = React.useState<Width>(() => element.widthContainer.value);
  const [height, setHeight] = React.useState<Height>(() => element.heightContainer.value);
  const [scale, setScale] = React.useState<Scale>(() => element.scaleContainer.value);
  const [border, setBorder] = React.useState<Border>(ImageBorderType.None);
  const [visibility, setVisibility] = React.useState<Visibility>(() => element.elementVisibilityContainer.value);

  React.useEffect(() => {

    let addressSub = element.addressContainer.subscribe({ next: v => setAddress(v) });
    let altSub = element.altContainer.subscribe({ next: v => setAlt(v) });
    let widthSub = element.widthContainer.subscribe({ next: v => setWidth(v) });
    let heightSub = element.heightContainer.subscribe({ next: v => setHeight(v) });
    let scaleSub = element.scaleContainer.subscribe({ next: v => setScale(v) });
    let borderSub = element.borderContainer.subscribe({ next: v => setBorder(v) });
    let visibilitySub = element.elementVisibilityContainer.subscribe({ next: v => setVisibility(v) });

    return () => {
      addressSub.unsubscribe();
      altSub.unsubscribe();
      widthSub.unsubscribe();
      heightSub.unsubscribe();
      scaleSub.unsubscribe();
      borderSub.unsubscribe();
      visibilitySub.unsubscribe();
    };
  }, []);
  /*******************************************/
  /* END OF GENERATED CODE                   */
  /*******************************************/
  //endregion

  function createStyle() {
    return {
      flexGrow: weight,
      objectFit: scale,
      borderRadius: border == ImageBorderType.Avatar ? '50%' : border == ImageBorderType.Round ? '4px' : 'none'
    };
  }

  return (
    <img
      style={
        {
          ...element.getVisibilityStyle(visibility),
          ...element.getWeightStyle(weight),
          ...createStyle(),
        }
      }
      src={address}
      width={width}
      height={height}
      alt={alt}
    />
  )

}
