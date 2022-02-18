import{u as l,j as t,w as g,q as r,o as d,a as m,F as p,b as _,H as u,d as w,n as v}from"./q-fb951e08.js";import{H as y,M as R,F as k,_ as i,I as x}from"./assets/index.5c60ad40.js";var I=`/*
! tailwindcss v3.0.18 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
*/

html {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font family by default.
2. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

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

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input:-ms-input-placeholder, textarea:-ms-input-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/*
Ensure the default browser behavior of the \`hidden\` attribute.
*/

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
.static {
  position: static;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
`;const E=I,S=()=>{const[n]=l();return console.log("on:qRender => <ToDoApp/>"),t("section",{class:"todoapp",children:[t(y,{todos:n.todos}),t(R,{todos:n.todos}),t(k,{todos:n.todos})]})},F=n=>(g(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Root_withStyles")),d(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Root_onRender",[n])));function z(n,e){n.items.push({completed:!1,title:e}),c(n)}function P(n,e){n.items=n.items.filter(o=>o!=e),c(n)}function C(n,e){e.completed=!e.completed,c(n)}function A(n){n.items=n.items.filter(h.active),c(n)}const L=["all","active","completed"],h={all:()=>!0,active:n=>n.completed==!1,completed:n=>n.completed==!0};function c(n,e){e&&(n.filter=e.toLowerCase())}function b(n){return n.items.filter(h[n.filter])}function O(n){return b(n).filter(h.active).length}const T=()=>{const[n,e]=l(),o=m(),a=o.target.value;e.text=a,o.key==="Enter"&&a&&(z(n.todos,e.text),e.text="")},M=()=>{const[n,e]=l();return console.log("on:qRender => <Header/>"),t(p,{children:[t("h1",{children:"todos"}),t("input",{class:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:e.text,"on:keyup":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Header_onRender_input_onkeyup",[n,e])})]})},V=n=>{const e=_({text:""});return d(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Header_onRender",[n,e]))},D=()=>{const[n]=l();return console.log("on:qRender => <Main/>"),t(u,{class:"main",children:t("ul",{class:"todo-list",children:b(n.todos).map(e=>t(x,{item:e,todos:n.todos}))})})},H=n=>d(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Main_onRender",[n])),j=()=>{const[n]=l();return C(n.todos,n.item)},q=async()=>{const[n]=l();n.editing=!0;const e=w();await v(e);const o=e.querySelector("input.edit");o.focus(),o.selectionStart=o.selectionEnd=o.value.length},U=()=>{const[n]=l();return P(n.todos,n.item)},N=()=>{const[n]=l();return n.editing=!1},$=()=>{const[n,e]=l(),o=m(),a=o.target.value;n.item.title=a,o.key==="Enter"&&(e.editing=!1)},W=()=>{const[n,e]=l();return console.log('on:qRender => <Item item="'+JSON.stringify(n.item,(o,a)=>o.startsWith("__")?void 0:a)+'"/>'),t(u,{class:{completed:n.item.completed,editing:e.editing},children:[t("div",{class:"view",children:[t("input",{class:"toggle",type:"checkbox",checked:n.item.completed,"on:click":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender_input_onclick",[n])}),t("label",{"on:dblclick":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender_label_ondblclick",[e]),children:n.item.title}),t("button",{class:"destroy","on:click":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender_button_onclick",[n])})]}),e.editing?t("input",{class:"edit",value:n.item.title,"on:blur":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender_input_onblur",[e]),"on:keyup":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender_input_onkeyup",[n,e])}):null]})},B=n=>{const e=_({editing:!1});return d(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Item_onRender",[n,e]))},J=()=>{const[n,e]=l();return c(e.todos,n)},G=()=>{const[n]=l();return A(n.todos)},K=()=>{const[n]=l();console.log("on:qRender => <Footer/>");function e({filter:a}){const f=a.toLowerCase();return t("li",{children:t("a",{class:{selected:n.todos.filter==f},"on:click":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Footer_onRender_Filter_a_onclick",[a,n]),children:a[0].toUpperCase()+a.substr(1)})})}const o=O(n.todos);return t(u,{class:"footer",children:n.todos.items.length>0?t(p,{children:[t("span",{class:"todo-count",children:[t("strong",{children:o}),o==1?" item":" items"," left"]}),t("ul",{class:"filters",children:L.map(a=>t(e,{filter:a}))}),o>0?t("button",{class:"clear-completed","on:click":r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Footer_onRender_button_onclick",[n]),children:"Clear completed"}):null]}):null})},Q=n=>d(r(()=>i(()=>Promise.resolve().then(function(){return s}),void 0),"Footer_onRender",[n]));var s=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Root_withStyles:E,Root_onRender:S,Root:F,Header_onRender_input_onkeyup:T,Header_onRender:M,Header:V,Main_onRender:D,Main:H,Item_onRender_input_onclick:j,Item_onRender_label_ondblclick:q,Item_onRender_button_onclick:U,Item_onRender_input_onblur:N,Item_onRender_input_onkeyup:$,Item_onRender:W,Item:B,Footer_onRender_Filter_a_onclick:J,Footer_onRender_button_onclick:G,Footer_onRender:K,Footer:Q});export{Q as Footer,K as Footer_onRender,J as Footer_onRender_Filter_a_onclick,G as Footer_onRender_button_onclick,V as Header,M as Header_onRender,T as Header_onRender_input_onkeyup,B as Item,W as Item_onRender,U as Item_onRender_button_onclick,N as Item_onRender_input_onblur,j as Item_onRender_input_onclick,$ as Item_onRender_input_onkeyup,q as Item_onRender_label_ondblclick,H as Main,D as Main_onRender,F as Root,S as Root_onRender,E as Root_withStyles};
