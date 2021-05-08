# React-Progressbar-Fancy

  <p align="center">
  <a href="https://github.com/Juniourrau/react-progressbar-fancy/releases" alt="Downloads"><img src="https://img.shields.io/npm/dt/react-progressbar-fancy" /></a>
  <a href="https://github.com/Juniourrau/react-progressbar-fancy/stargazers" alt="Stars"><img src="https://img.shields.io/github/stars/Juniourrau/react-progressbar-fancy" /></a>
  <a href="https://github.com/Juniourrau/react-progressbar-fancy/network" alt="Forks"><img src="https://img.shields.io/github/v/release/Juniourrau/react-progressbar-fancy" /></a>
  <a href="https://github.com/Juniourrau/react-progressbar-fancy/issues" alt="Issues"><img src="https://img.shields.io/github/languages/code-size/Juniourrau/react-progressbar-fancy" /></a>
  <a href="https://github.com/Juniourrau/react-progressbar-fancy/blob/master/LICENSE" alt="License"><img src="https://img.shields.io/npm/l/react-progressbar-fancy" /></a>
</p>

A fancy progress bar component, with gradient styling and some amazing animation. You are able to add your own custom gradient colors




<img src="https://i.ibb.co/1R4QMjX/fancy-progressbar.gif" alt="fancy-progressbar">

## Testing
You can check out and play around with the component in codepen <a>https://codesandbox.io/s/summer-flower-i8wni?file=/src/App.js</a>

## Installation

Install with npm:
- `npm install react-progressbar-fancy`


or yarn:
- `yarn add react-progressbar-fancy`


## Usage

Import the component with just one line of code

```javascript
import {ProgressBar} from "react-progressbar-fancy";
```

Now you can use the component:

```javascript
<ProgressBar score={25}/>
```


## Props

| Name                | Description                                                                                                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `score`             | Progression value of the progressbar. Required.                                                                                                                                                          |
| `label`             | Label text of the progressbar. Default: `''`                                                                                                                                                                                       |
| `progressWidth`     | The width of the progressbar. Default: `''`.                                                                                                                                                                                      |
| `hideText`          | To show only progressbar and remove all text. Default: `false`.                                                                                                                                                                                    |
| `darkTheme`         | Change the color of the text to black. Default: `false`.                                                                                                                                                                                     |
| `progressColor`     | Some present gradient colors to choose from. `'red','green','blue','purple'`. Default: `'red'`.                                                                                                                                        |
| `primaryColor`      | To add custom color for the progressbar. Advice to use both primaryColor and secondaryColor. Default: `''`.                                                                                                                                                                                 |
| `secondaryColor`    | To add custom color for the progressbar. Advice to use both primaryColor and secondaryColor. Default: `''`.                                                                                             |
| `disableGlow`       | Remove glow effect of the progressbar. Default: `false`.                                                                                                                                                         |
| `className`         | to add extra styles. Default: `''`.         

## Extras

You can take some inspiration for your custom gradient colors from https://uigradients.com/
