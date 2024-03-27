const path = require('path');

module.exports = {
  template: require('./templates/svg.js'),
  typescript: true,
  outDir: path.join('src', 'icons'),
  expandProps: 'end',
  memo: true,
  icon: true,
  svgProps: {
    fill: 'currentColor',
    className: '{`raresail-react-ionicon ${className}`}',
    'data-animation': '{animation}'
  }
};
