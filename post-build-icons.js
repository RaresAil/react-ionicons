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
      let content = await fs.readFile(iconPath, {
        encoding: 'utf8'
      });

      if (content.includes('strokeWidth:') || content.includes('strokeWidth=')) {
        content = content.replace('...props', 'strokeWidth, ...props');
      }

      await fs.writeFile(
        iconPath,
        content
          .replace(/'#000'/gm, "'currentColor'")
          .replace(/"#000"/gm, '"currentColor"')
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
