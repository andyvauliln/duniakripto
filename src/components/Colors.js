import { css } from 'styled-components';

export const directColors = css`
  // dark theme direct (for sidebar)
  --dark-base-bg: #222222;
  --dark-nav-bg: #282828;
  --dark-label-color: #cbcbcb;
  --dark-link-color: #2196f3;
  --dark-input-bg: #181818;
  --dark-input-text-color: #ffffff;
  --dark-dim-color: #adadad;
  --dark-inactive-color: #484848;

  // fixed
  --white: #ffffff;
  --yellow: #ffbe06;
  --orange: #fb5607;
  --red: #ff006e;
  --pink: #8338ec;

  // mostly unused, unless transparent
  --alert-base: #f2628a;
  --alert-darker: #ee3468;
  --alert-brighter: #f98ba6;
  --alert-outlines: #f76488;
  --alert-transparent: rgba(247, 100, 136, 0.25);

  // mostly used
  --success-base: #42ce45;
  --success-darker: #299e2b;
  --success-brighter: #70da72;
  --success-outlines: #c7f0c7;
  --success-transparent: rgba(152, 255, 155, 0.25);

  // mostly unused, unless transparent
  --main-base: #33fff1;
  --main-darker: #28ccc0;
  --main-brighter: #8ffff7;
  --main-outlines: #8ffff7;
  --main-transparent: rgb(51, 255, 241, 0.75);

  // unused
  --secondary-base: #00b8ff;
  --secondary-darker: #0093cc;
  --secondary-brighter: #4ccdff;
  --secondary-outlines: #4ccdff;
  --secondary-transparent: rgb(0, 184, 255, 0.75);

  // mosty used
  --compl1-base: #5286ff;
  --compl1-darker: #416bcc;
  --compl1-brighter: #86aaff;
  --compl1-outlines: #86aaff;
  --compl1-transparent: rgb(0, 184, 255, 0.75);

  // mostly used
  --compl2-base: #a69cff;
  --compl2-darker: #847ccc;
  --compl2-brighter: #c0b9ff;
  --compl2-outlines: #c0b9ff;
  --compl2-transparent: rgb(166, 156, 255, 0.75);

  // mostly used
  --compl3-base: #fdeb63;
  --compl3-darker: #fbcb0d;
  --compl3-brighter: #fef4ac;
  --compl3-outlines: #e6cb02;
  --compl3-transparent: rgb(253, 235, 99, 0.75);

  // used in  charts 1
  --compl4-1: #22594e;
  --compl4-2: #2f7d6d;
  --compl4-3: #3da18d;
  --compl4-4: #69c2b0;
  --compl4-5: #a1d9ce;
  --compl4-6: #98c0be;
  --compl4-transparent: rgb(253, 235, 99, 0.75);

  // used in  charts 2
  --compl2-1: #6659a5;
  --compl2-2: #847ccc;
  --compl2-3: #a69cff;
  --compl2-4: #c0b9ff;
  --compl2-5: #9d8ec4;
  --compl2-6: #bea9d7;

  // used in tree map
  --compl5-base: #418bfd;
  --compl5-darker: #444755;

  // shadows
  --outer-shadow: 0 1px 5px 0 var(--shadow-color);
  --inner-shadow: 0 0 0 1px var(--shadow-color) inset;
  --active-shadow: 0 0 2px var(--active-border);

  // // SVG cursors
  // --dollar-cursor: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"><circle stroke="white" stroke-width="1.5" fill="black" cx="12" cy="12" r="10"/><line x1="12" y1="6" x2="12" y2="18" stroke="white" stroke-width="2"/><path d="M14.4999999,8 L10.7499999,8 C9.78350162,8 8.99999993,8.8954305 8.99999993,10 C8.99999993,11.1045695 9.78350162,12 10.7499999,12 L13.25,12 C14.2164983,12 14.9999999,12.8954305 14.9999999,14 C14.9999999,15.1045695 14.2164983,16 13.25,16 L8.99999993,16" stroke="white" stroke-width="2"/></svg>')
  //     12 12,
  //   pointer;
`;

const lightTheme = css`
  --base-bg: #fafafa;
  --nav-bg: #fafafa;
  --nav-highlight-bg: #157aca;
  --nav-highlight-text: #ffffff;
  --card-bg: #ffffff;
  --card-highlight-bg: #fafafa;
  --button-bg: #fafafa;
  --button-active-bg: #fefefe;
  --button-hover-bg: #ffffff;
  --badge-color: #0093cc;
  --input-bg: #ffffff;
  --input-text-color: #212529;
  --text-color: #212529;
  --invert-color: #ffffff;
  --overlay-color: #caced3;
  --outline-color: #c9c9c9;
  --divider-color: rgb(0, 0, 0, 0.1);
  --headline-color: #111111;
  --label-color: #6b6d6f;
  --link-color: #157aca;
  --tooltip-color: #212529;
  --tooltip-bg: var(--overlay-color);
  --highlight-color: #212529;
  --shadow-color: rgba(0, 0, 0, 0.15);
  --dim-color: #cccccc;
  --inactive-color: #bbbbbb;
  --active-color: #00b8ff;
  --active-border: rgba(82, 168, 236, 0.8);
  --tag-color: #6b6d6f;
  --map-bg: #e0e0e0;

  // theme-specific selections
  --main-color: var(--main-base);
  --secondary-color: var(--secondary-base);
  --compl1-color: var(--compl1-darker);
  --compl2-color: var(--compl2-darker);
  --compl3-color: var(--compl3-darker);
  --alert-color: var(--alert-base);
  --success-color: var(--success-darker);
`;

const darkTheme = css`
  --base-bg: #222222;
  --nav-bg: #282828;
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
  --label-color: #cbcbcb;
  --link-color: #2196f3;
  --tooltip-color: #ffffff;
  --tooltip-bg: var(--overlay-color);
  --highlight-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.15);
  --dim-color: #adadad;
  --inactive-color: #484848;
  --active-color: var(--secondary-base);
  --active-border: rgba(82, 168, 236, 0.8);
  --tag-color: #fafafa;
  --map-bg: #4b4b4b;

  // theme-specific selections
  --main-color: var(--main-base);
  --secondary-color: var(--secondary-base);
  --compl1-color: var(--compl1-brighter);
  --compl2-color: var(--compl2-brighter);
  --compl3-color: var(--compl3-darker);
  --alert-color: var(--alert-base);
  --success-color: var(--success-base);
`;

const solardarkTheme = css`
  --dark-nav-bg: #141925;
  --base-bg: #00212b;
  --nav-bg: #073642;
  --nav-highlight-bg: #2196f3;
  --nav-highlight-text: #ffffff;
  --card-bg: #002b36;
  --card-highlight-bg: #03333f;
  --button-bg: #1B2733;
  --button-active-bg: #1c2c3c;
  --button-hover-bg: #273747;
  --badge-color: #0093cc;
  --input-bg: #141925;
  --input-text-color: #ffffff;
  --text-color: #fafafa;
  --invert-color: #212529;
  --overlay-color: #222222;
  --outline-color: #273747;
  --divider-color: rgba(255, 255, 255, 0.2);
  --headline-color: #dcdcdc;
  --label-color: #cbcbcb;
  --link-color: #268bd2;
  --tooltip-color: #ffffff;
  --tooltip-bg: var(--overlay-color);
  --highlight-color: #ffffff;
  --shadow-color: rgba(0, 0, 0, 0.15);
  --dim-color: #adadad;
  --inactive-color: #484848;
  --active-color: var(--secondary-base);
  --active-border: rgba(82, 168, 236, 0.8);
  --tag-color: #eee8d5;
  --map-bg: #304357;

  // theme-specific selections
  --main-color: var(--main-base);
  --secondary-color: var(--secondary-base);
  --compl1-color: var(--compl1-brighter);
  --compl2-color: var(--compl2-brighter);
  --compl3-color: var(--compl3-darker);
  --alert-color: var(--alert-base);
  --success-color: var(--success-base);
`;


export const themeColors = {
  light: lightTheme,
  dark: darkTheme,
  solardark: solardarkTheme,
};

export default {
  themeColors,
  directColors,
};
