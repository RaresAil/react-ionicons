# @raresail/react-ionicons

### The current version uses the ionicons version `7.3.0`

This packages uses the svg icons from [ionic-team/ionicons](https://github.com/ionic-team/ionicons) and builds them as React Components to be used in the application

### Usage

Install the module

```bash
npm install --save @raresail/react-ionicons;
```

```bash
yarn add @raresail/react-ionicons;
```

Import the icons

```ts
import { AddCircleOutline } from '@raresail/react-ionicons';
```

Use the icon, to change the size of the icon use the `font-size` property

```tsx
function Component() {
  return (
    <AddCircleOutline
      // To change the icon color
      color="red"
      // To change any style related to the svg or font size
      style={{
        fontSize: '20px'
      }}
      // If you need to add extra props use
      svgProps={{}}
      // For icons that use strokeWidth you can change it like this
      strokeWidth={32}
      // to add a class name to the svg
      className="your class"
    />
  );
}
```

### Properties

| Name        | Type          | Default  |
| ----------- | ------------- | -------- |
| svgProps    | SVGProps      | {}       |
| style       | CSSProperties | {}       |
| strokeWidth | number        | 32 or 16 |
| className   | string        |          |
| color       | string        | #000     |
