const path = require('path');

module.exports = {
  template: require('./templates/svg.js'),
  typescript: true,
  outDir: path.join('src', 'icons'),
  memo: true,
  icon: true,
  svgProps: {
    className: '{className}',
    fill: "{'#000'}",
    style: '{style}'
  }
};
