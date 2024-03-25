import { CSSProperties } from 'react';

export interface IonIconProps {
  svgProps?: Omit<React.SVGProps<SVGSVGElement>, 'className' | 'style'>;
  style?: CSSProperties;
  strokeWidth?: number;
  className?: string;
  color?: string;
}
