const fs = require('fs/promises');
const path = require('path');

(async () => {
  const iconsPath = path.join('src', 'icons');
  const icons = await fs.readdir(iconsPath, {
    encoding: 'utf8'
  });

  await Promise.all(
    icons.map(async (file) => {
      const iconPath = path.join(iconsPath, file);
      const content = await fs.readFile(iconPath, {
        encoding: 'utf8'
      });

      await fs.writeFile(
        iconPath,
        content
          .replace(/'#000'/gm, "color || '#000'")
          .replace(/"#000"/gm, "{color || '#000'}")
          .replace(
            /strokeWidth={([0-9]+)}/gm,
            'strokeWidth={strokeWidth === undefined ? $1 : strokeWidth}'
          )
          .replace(
            /strokeWidth: ([0-9]+)/gm,
            'strokeWidth: strokeWidth === undefined ? $1 : strokeWidth'
          ),
        {
          encoding: 'utf8'
        }
      );
    })
  );
})();
