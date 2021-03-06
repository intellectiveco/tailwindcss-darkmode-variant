# Tailwind CSS DarkMode Variant

## Installation

```
npm install tailwindcss-darkmode-variant --save-dev
```

Add the plugin to the `plugins` array in your Tailwind configuration.

```javascript
plugins: [require("tailwindcss-darkmode-variant")()];
```

## Usage

Styles generated by this plugin are only used if the selector is applied to the `<html>` element. How you do that is up to you. `prefers-dark.js` is provided as an option, which is a simple script that enables dark mode based on the user's system theme.

### Available Variants

Variants for dark mode are based on [Tailwind's own variants](https://tailwindcss.com/docs/state-variants/)...

- `darkmode`
- `darkmode-hover`
- `darkmode-focus`
- `darkmode-active`
- `darkmode-group-hover`
- `darkmode-focus-within`
- `darkmode-even`
- `darkmode-odd`

... and are used in the same way.

```html
<div class="bg-white darkmode:bg-black">
  <p class="text-black darkmode:text-white">
    My eyes are grateful.

    <a
      ...
      class="text-blue-300 hover:text-blue-400 darkmode:text-blue-700 darkmode-hover:text-blue-600"
    >
      Learn more
    </a>
  </p>
</div>
```

### Enabling Variants

As with existing variants such as `hover` and `focus`, variants for dark mode must be enabled in your Tailwind configuration for any utilities that need them.

```javascript
variants: {
  backgroundColor: ['darkmode', 'darkmode-hover', 'darkmode-group-hover', 'darkmode-even', 'darkmode-odd'],
  borderColor: ['darkmode', 'darkmode-focus', 'darkmode-focus-within'],
  textColor: ['darkmode', 'darkmode-hover', 'darkmode-active']
}
```

### Changing the Selector

By default, `.mode-dark` is used as the selector for dark mode. You can change this by adding the `darkSelector` key to the `theme` section in your Tailwind configuration.

```javascript
theme: {
  darkSelector: ".mode-dark";
  darkIdentifier: "darkmode";
}
```

Don't forget to also change the selector in `prefers-dark.js` if you are using it.

## PurgeCSS

If you are using PurgeCSS, you should either add the selector to the `whitelist` array...

```javascript
whitelist: ["mode-dark"];
```

... or add `prefers-dark.js` to the `content` array.

```javascript
content: [
  "**/*.js",
  "./node_modules/tailwindcss-darkmode-variant/prefers-dark.js",
  "./or/your/own/prefers-dark.js"
];
```

Otherwise, PurgeCSS will assume that any classes related to dark mode should be removed, as the selector is only applied when the page is loaded. If you have a custom selector then you will need to make a copy of the `prefers-dark.js` file and update it with your darkSelector and then include in the `content` array

This repo is forked from the original [TailwindCSS Dark Mode](https://github.com/ChanceArthur/tailwindcss-dark-mode) repo and modified to provide additional options
