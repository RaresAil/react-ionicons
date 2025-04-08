const propTypesTemplate = (
  { /* imports, */ interfaces, componentName, jsx, exports },
  { tpl }
) => {
  return tpl`import '../style.css';
import { memo } from 'react';
import { IonIconProps } from '../types';
${interfaces}

function ${componentName}({
  strokeWidth,
  className,
  spin,
  beat,
  ...props
}: IonIconProps) {
  const animation = (spin && 'spin') || (beat && 'beat');
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
