const propTypesTemplate = (
  { /* imports, */ interfaces, componentName, jsx, exports },
  { tpl }
) => {
  return tpl`import '../style.css';
import { memo, useMemo } from 'react';
import { IonIconProps } from '../types';
${interfaces}

function ${componentName}({
  strokeWidth,
  className,
  spin,
  beat,
  ...props
}: IonIconProps) {
  const animation = useMemo(() => {
    if (spin) {
      return 'spin';
    }

    if (beat) {
      return 'beat';
    }

    return '';
  }, [spin]);

  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
