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

Use the icon, to change the size of the icon use the `font-size` CSS property and for the color (fill or stroke) use the `color` CSS property

```tsx
function Component() {
  return (
    <AddCircleOutline
      // To change any style related to the svg, font size or color
      style={{
        fontSize: '20px',
        color: 'red'
      }}
      // For icons that use strokeWidth you can change it like this
      strokeWidth={32}
      // to add a class name to the svg
      className="your class"
      // All the props are forwarded to the SVG component
    />
  );
}
```

### Props

| Name        | Type             | Default  |
| ----------- | ---------------- | -------- |
| style       | CSSProperties    | {}       |
| strokeWidth | number \| string | 32 or 16 |
| className   | string           |          |
| ...         | Other SVG Props  |          |

### Animations

#### Spin

To spin a icon add the `spin` prop, if you want to adjust the speed, use the `animation-duration` css property

```tsx
function() {
  return <SyncOutline spin />;
}
```

#### Beat

To spin a icon add the `beat` prop, if you want to adjust the speed, use the `animation-duration` css property

```tsx
function() {
  return <SyncOutline beat />;
}
```
