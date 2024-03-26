const propTypesTemplate = (
  { /* imports, */ interfaces, componentName, jsx, exports },
  { tpl }
) => {
  return tpl`import { memo } from 'react';
import type { IonIconProps } from '../types';
${interfaces}

function ${componentName}({ className, strokeWidth, style, svgProps: props }: IonIconProps) {
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
