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
  ...props
}: IonIconProps) {
  const animation = useMemo(() => {
    if (spin) {
      return 'spin';
    }

    return '';
  }, [spin]);

  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
