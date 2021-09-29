import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* General Variables */
  :root {
    --default-font-number: 14;
    --font-interval: 1;
    --default-font-size: 14px;
    --base-bg: #222222;
    --nav-bg: #26272b;
    --label-color: #999999;
    --link-color: #4881d8;
    --nav-link-color: #ffffff;
    --input-bg: #181818;
    --input-text-color: #ffffff;
    --dim-color: #adadad;
    --inactive-color: #484848;
    --nav-highlight-bg: #2196f3;
    --nav-highlight-text: #ffffff;
    --card-bg: #323232;
    --card-highlight-bg: #363636;
    --button-bg: #222222;
    --button-active-bg: #282828;
    --button-hover-bg: #323232;
    --badge-color: #0093cc;
    --input-bg: #181818;
    --input-text-color: #ffffff;
    --text-color: #fafafa;
    --invert-color: #212529;
    --overlay-color: #222222;
    --outline-color: #363636;
    --divider-color: rgba(255, 255, 255, 0.2);
    --headline-color: #dcdcdc;
    --tooltip-color: #ffffff;
    --tooltip-bg: var(--overlay-color);
    --highlight-color: #ffffff;
    --shadow-color: rgba(0, 0, 0, 0.15);
    --active-color: var(--secondary-base);
    --active-border: rgba(82, 168, 236, 0.8);
    --tag-color: #fafafa;
    --map-bg: #4b4b4b;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family: 'Oswald';

    --outer-shadow: box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.91);
    --inner-shadow: box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.91);
    --active-shadow: box-shadow: 0px 2px 10px 4px rgba(0,0,0,0.91);
    font-size: var(--default-font-size);
    line-height: 1.2;
    font-weight: 400;
    
  }

  html {
    background: var(--base-bg);
    touch-action: manipulation;
    overscroll-behavior: contain;
  }

  body {
    box-shadow: var(--inner-shadow);
    margin: 0;
    padding: 0;
    background: var(--base-bg);
    color: var(--text-color);
    font-size: var(--default-font-size);
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
    padding: 0.2em;
  }
  /* a.link {
    border-bottom-width: 1px;
    border-bottom-style: dotted;
    border-bottom-color: transparent;
    &:hover {
      border-bottom-color: currentColor;
    }
  }
  header a.link {
    border: 0 none;
  } */
  a,
  input[type='submit'],
  input[type='image'],
  label[for],
  select,
  button,
  .pointer {
    cursor: pointer;
  }
  .link-active {
		color: var(--link-color) !important;
    /* border-bottom: 3px solid; */
    /* vertical-align: super; */
    
	}
  p {
    padding-top: 1em;
    text-indent: 10px;
  }

  //
  // Other
  //
  /* h1 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
  h2 {
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
  } */
  /* b, strong {
    font-weight: 500;
  } */

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
    border: 1px solid var(--link-color);
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


	/* Media Queries */
	@media only screen and (min-width: 1920px) {
    :root, body{
      font-size: 18px  
    }
	}
	@media only screen and (max-width: 1919px) {
    :root, body{
      font-size: 16px  
    }
	}
	@media only screen and (max-width: 1680px) {
    :root, body{
      font-size: 14px  
    }
	}
	@media only screen and (max-width: 1366px) {
    :root, body{
      font-size: 13px  
    }
	}
	@media only screen and (max-width: 1120px) {
    :root, body{
      font-size: 12px  
    }
	}
	@media only screen and (max-width: 1024px) {
    :root, body{
      font-size: 11.5px  
    }
	}
	@media only screen and (max-width: 860px) {
    :root, body{
      font-size: 11px  
    }
	}
	@media only screen and (max-width: 768px) {
    :root, body{
      font-size: 10.5px  
    }
	}
	@media only screen and (max-width: 480px) {
    :root, body{
      font-size: 10px  
    }
	}
  .coinmarketcap-currency-widget {
    & > div:only-child {
      border: none!important;
      /* margin-top: -224px!important; */

	}
  .coinmarketcap-currency-widget {
    & > div:only-child
      border: 1px solid var(---label-color)!important;

	}
  }

`;

export default GlobalStyle;
