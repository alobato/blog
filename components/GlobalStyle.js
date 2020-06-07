import { createGlobalStyle } from 'styled-components'

// http://k88hudson.github.io/syntax-highlighting-theme-generator/www/
const prism = `
pre[class*="language-"],
code[class*="language-"] {
  color: hsla(218, 20%, 75%, 1);
  font-family: 'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-weight: 500;
  font-size: 16px;
  text-shadow: none;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  line-height: 1.5;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
pre[class*="language-"]::selection,
code[class*="language-"]::selection,
pre[class*="language-"]::mozselection,
code[class*="language-"]::mozselection {
  text-shadow: none;
  background: #98a4b9;
}
@media print {
  pre[class*="language-"],
  code[class*="language-"] {
    text-shadow: none;
  }
}
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
  background: hsla(240, 7%, 16%, 1);
}
:not(pre) > code[class*="language-"] {
  padding: .1em .3em;
  border-radius: .3em;
  color: white;
  background: hsla(240, 7%, 16%, 1);
}
/*********************************************************
* Tokens
*/
.namespace {
  opacity: .7;
}
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #66747f;
}
.token.punctuation {
  color: #98a4b9;
}
.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #d18771;
}
.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: hsla(92, 30%, 60%, 1);
}
.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: hsla(30, 30%, 55%, 1);;
  background: hsla(240, 7%, 16%, 1);
}
.token.atrule,
.token.attr-value,
.token.keyword {
  color: hsla(34, 50%, 65%, 1);
}
.token.function {
  color: hsla(281, 25%, 70%, 1);
}
.token.regex,
.token.important,
.token.variable {
  color: #9a685b;
}
.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}
.token.entity {
  cursor: help;
}
/*********************************************************
* Line highlighting
*/
pre[data-line] {
  position: relative;
}
pre[class*="language-"] > code[class*="language-"] {
  position: relative;
  z-index: 1;
}
.line-highlight {
  position: absolute;
  left: 0;
  right: 0;
  padding: inherit 0;
  margin-top: 1em;
  background: hsla(240, 7%, 16%, 1);
  box-shadow: inset 5px 0 0 white;
  z-index: 0;
  pointer-events: none;
  line-height: inherit;
  white-space: pre;
}
`

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    font-family: ${props => `"${props.theme.primaryFontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`};
    font-size: ${props => props.theme.primaryFontSize};
    font-weight: ${props => props.theme.primaryFontWeight};
    line-height: ${props => props.theme.primaryLineHeight};
    color: ${props => props.theme.colors.textColor};
    background-color: ${props => props.theme.colors.bodyBgColor};
    transition: background-color 300ms linear;
  }
  div {
    -webkit-overflow-scrolling: touch;
  }
  a {
    text-decoration: underline;
    color: ${props => props.theme.colors.linkColor};
  }
  svg {
    display: block;
  }


  [hidden] {
  display: none !important;
  }
  mark {
    padding: 0.2em;
    background-color: #feffe6;
  }
  ::-moz-selection {
    color: #fff;
    background: #1890ff;
  }
  ::selection {
    color: #fff;
    background: #1890ff;
  }

  figure.notion-asset-wrapper {
    width: auto !important;
  }

  figure.notion-asset-wrapper div {
    padding-bottom: 0 !important;
  }

  figure.notion-asset-wrapper div img {
    width: 100%;
  }

  ${prism}
`

export default GlobalStyle


// code[class*="language-"],
// pre[class*="language-"] {
// 	color: #ccc;
// 	background: none;
// 	font-family: 'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
//   font-weight: 500;
// 	font-size: 15px;
// 	text-align: left;
// 	white-space: pre;
// 	word-spacing: normal;
// 	word-break: normal;
// 	word-wrap: normal;
// 	line-height: 1.5;

// 	-moz-tab-size: 4;
// 	-o-tab-size: 4;
// 	tab-size: 4;

// 	-webkit-hyphens: none;
// 	-moz-hyphens: none;
// 	-ms-hyphens: none;
// 	hyphens: none;

// }

// /* Code blocks */
// pre[class*="language-"] {
// 	padding: 1em;
// 	margin: .5em 0;
// 	overflow: auto;
// }

// :not(pre) > code[class*="language-"],
// pre[class*="language-"] {
// 	background: hsla(240, 7%, 21%, 1);
// }

// /* Inline code */
// :not(pre) > code[class*="language-"] {
// 	padding: .1em;
// 	border-radius: .3em;
// 	white-space: normal;
// }

// .token.comment,
// .token.block-comment,
// .token.prolog,
// .token.doctype,
// .token.cdata {
// 	color: #999;
// }

// .token.punctuation {
// 	color: #ccc;
// }

// .token.tag,
// .token.attr-name,
// .token.namespace,
// .token.deleted {
// 	color: #e2777a;
// }

// .token.function-name {
// 	color: #6196cc;
// }

// .token.boolean,
// .token.number,
// .token.function {
// 	color: #f08d49;
// }

// .token.property,
// .token.class-name,
// .token.constant,
// .token.symbol {
// 	color: #f8c555;
// }

// .token.selector,
// .token.important,
// .token.atrule,
// .token.keyword,
// .token.builtin {
// 	color: #cc99cd;
// }

// .token.string,
// .token.char,
// .token.attr-value,
// .token.regex,
// .token.variable {
// 	color: #7ec699;
// }

// .token.operator,
// .token.entity,
// .token.url {
// 	color: #67cdcc;
// }

// .token.important,
// .token.bold {
// 	font-weight: bold;
// }
// .token.italic {
// 	font-style: italic;
// }

// .token.entity {
// 	cursor: help;
// }

// .token.inserted {
// 	color: green;
// }
