import { SVGProps } from 'react';

export interface IonIconProps
  extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  spin?: true;
  beat?: true;
}
