import { css, createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`${css`
  /*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */
  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  html {
    font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji";
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
  }

  body{
    background-color: #EDEFF1;
  }

  hr {
    height: 0;
    color: inherit;
  }
  abbr[title] {
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono",
      Menlo, monospace;
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
  button,
  select {
    text-transform: none;
  }
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }
  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  legend {
    padding: 0;
  }
  progress {
    vertical-align: baseline;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
  /*# sourceMappingURL=/sm/5b7c27b6a0fd11e81f813b36dc26f6049a71a06907ce03d53d65a3bfe866b576.map */
`}`;
