const propTypesTemplate = (
  { /* imports, */ interfaces, componentName, jsx, exports },
  { tpl }
) => {
  return tpl`import { SVGProps, memo } from 'react';
${interfaces}

function ${componentName}({
  strokeWidth,
  ...props
}: Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'>) {
  return ${jsx};
}

${exports}
  `;
};

module.exports = propTypesTemplate;
