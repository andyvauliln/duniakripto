import { directColors, getThemeColors } from 'tz-theme';
import { createGlobalStyle } from 'styled-components';
import { defaultFontSizePx } from 'tz-config';

const GlobalStyle = createGlobalStyle`
  //
  // Theme
  //
  @media (prefers-color-scheme: no-preference) {}/* Apply a light color scheme */
  @media (prefers-color-scheme: light) {}/* Apply a dark color scheme */
  @media (prefers-color-scheme: dark) {}
  //
  // Fonts
  //
  // * {
  //   font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }
  :focus {outline:none;}
  ::selection { background: var(--secondary-transparent); }

  :root {
    font-size: ${defaultFontSizePx}px;
    line-height: 1.2;
    font-weight: 400;
    ${directColors}
    ${getThemeColors};
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  html {
    background: var(--base-bg);
    touch-action: manipulation;
    overscroll-behavior: contain;
  }

  body {
    background: var(--base-bg);
    color: var(--text-color);
    font-size: ${defaultFontSizePx}px;
    min-height: 100vh;
    min-width: 100vw;
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
    scrollbar-width: none;
  }

  //
  // Links
  //
  a {
    text-decoration: none;
    font-weight: 400;
    color: inherit;
  }
  a.link,
  .markdown a {
    border-bottom-width: 1px;
    border-bottom-style: dotted;
    border-bottom-color: transparent;
    color: var(--link-color);
    &:hover {
      border-bottom-color: currentColor;
    }
  }
  .markdown a {
    display: inline-block;
    vertical-align: top;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  header a.link {
    border: 0 none;
  }
  a[href],
  input[type='submit'],
  input[type='image'],
  label[for],
  select,
  button,
  .pointer {
    cursor: pointer;
  }

  //
  // Other
  //
  h1 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
    // align-self: flex-start;
  }
  b, strong {
    font-weight: 500;
  }

  //
  // Navigation
  //
  nav {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }

  //
  // Button
  //
  button,
  input[type="file"]::-webkit-file-upload-button {
    border: 1px solid var(--outline-color);
    color: var(--label-color);
    background-color: var(--button-bg);
    border-radius: .25rem;
    font-size: inherit;
    padding: .5em 1em;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }
  button:hover {
    color: var(--link-color);
    background-color: var(--button-hover-bg);
    outline: none;
    box-shadow: none;
  }
  input[type="file"]::-webkit-file-upload-button:hover {
    color: var(--link-color);
    background-color: var(--button-hover-bg);
    outline: none;
    box-shadow: none;
  }
  button:active {
    color: var(--link-color);
    background-color: var(--button-active-bg);
    outline: none;
    box-shadow: none;
  }
  button.nostyle,
  button.nostyle:hover,
  button.nostyle:active {
    background-color: transparent;
    border: 0 none;
    outline: none;
    box-shadow: none;
  }
  button.nostyle:hover,
  button.nostyle:active {
    color: var(--highlight-color);
  }

  //
  // Input
  //
  input[type=text], input[type=number] {
    font-size: 1rem;
    padding: 0.5em 1em;
    border: 1px solid var(--outline-color);
    background-color: var(--input-bg);
    border-radius: .25rem;
    outline: none;
    color: var(--input-text-color);
    // box-shadow: var(--inner-shadow);
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    -o-user-select: text;
    user-select: text;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
  }
  select::-moz-focus-inner,
  button::-moz-focus-inner,
  input[type="reset"]::-moz-focus-inner,
  input[type="button"]::-moz-focus-inner,
  input[type="submit"]::-moz-focus-inner,
  input[type="file"] > input[type="button"]::-moz-focus-inner {
      border:0;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: var(--inactive-color);
    opacity: 1;
  }
  select:focus, textarea:focus, input:focus {
    box-shadow: var(--active-shadow);
    border-color: var(--active-border);
  }

  //
  // Scroll
  //
  ::-webkit-scrollbar-track {
    border-radius: .25rem;
    background-color: var(--base-bg);
  }
  ::-webkit-scrollbar {
    width: .4rem;
    background-color: var(--nav-bg);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: .25rem;
    background-color: var(--nav-bg);
  }


  @keyframes pulse {
    0% {
      box-shadow: 0px 0px 0px 0px rgba(52, 106, 180, 1)
    }
    100% {
      box-shadow: 0px 0px 0px 12px rgba(52, 106, 180, 0)
    }
  }


`;

export default GlobalStyle;
