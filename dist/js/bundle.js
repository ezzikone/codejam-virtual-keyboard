!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e){e.exports=JSON.parse('{"rus":[["Backquote","ё"],["Digit1","1","!"],["Digit2","2","\\""],["Digit3","3","№"],["Digit4","4",";"],["Digit5","5","%"],["Digit6","6","^"],["Digit7","7","&"],["Digit8","8","*"],["Digit9","9","("],["Digit0","0",")"],["Minus","-","_"],["Equal","=","+"],["Backspace","Backspace"],["Tab","Tab"],["KeyQ","й"],["KeyW","ц"],["KeyE","у"],["KeyR","к"],["KeyT","е"],["KeyY","н"],["KeyU","г"],["KeyI","ш"],["KeyO","щ"],["KeyP","з"],["BracketLeft","х"],["BracketRight","ъ"],["Backslash","\\\\","/"],["Delete","Del"],["CapsLock","CapsLock"],["KeyA","ф"],["KeyS","ы"],["KeyD","в"],["KeyF","а"],["KeyG","п"],["KeyH","р"],["KeyJ","о"],["KeyK","л"],["KeyL","д"],["Semicolon","ж"],["Quote","э"],["Enter","ENTER"],["ShiftLeft","Shift"],["KeyZ","я"],["KeyX","ч"],["KeyC","с"],["KeyV","м"],["KeyB","и"],["KeyN","т"],["KeyM","ь"],["Comma","б"],["Period","ю"],["Slash","/"],["ArrowUp","▲"],["ShiftRight","Shift"],["ControlLeft","Ctrl"],["AltLeft","Alt"],["Space"," "],["AltRight","Alt"],["ControlRight","Ctrl"],["ArrowLeft","◄"],["ArrowDown","▼"],["ArrowRight","►"]],"eng":[["Backquote","`","~"],["Digit1","1","!"],["Digit2","2","@"],["Digit3","3","#"],["Digit4","4","$"],["Digit5","5","%"],["Digit6","6",":"],["Digit7","7","?"],["Digit8","8","*"],["Digit9","9","("],["Digit0","0",")"],["Minus","-","_"],["Equal","=","+"],["Backspace","Backspace"],["Tab","Tab"],["KeyQ","q"],["KeyW","w"],["KeyE","e"],["KeyR","r"],["KeyT","t"],["KeyY","y"],["KeyU","u"],["KeyI","i"],["KeyO","o"],["KeyP","p"],["BracketLeft","["],["BracketRight","]"],["Backslash","\\\\","/"],["Delete","Del"],["CapsLock","CapsLock"],["KeyA","a"],["KeyS","s"],["KeyD","d"],["KeyF","f"],["KeyG","g"],["KeyH","h"],["KeyJ","j"],["KeyK","k"],["KeyL","l"],["Semicolon",";"],["Quote","\'"],["Enter","ENTER"],["ShiftLeft","Shift"],["KeyZ","z"],["KeyX","x"],["KeyC","c"],["KeyV","v"],["KeyB","b"],["KeyN","n"],["KeyM","m"],["Comma",","],["Period","."],["Slash","/"],["ArrowUp","▲"],["ShiftRight","Shift"],["ControlLeft","Ctrl"],["AltLeft","Alt"],["Space"," "],["AltRight","Alt"],["ControlRight","Ctrl"],["ArrowLeft","◄"],["ArrowDown","▼"],["ArrowRight","►"]]}')},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};n(3)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){},function(e,t,n){"use strict";var r,a={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function s(e,t){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function c(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(p(r.parts[i],t))}else{for(var s=[];i<r.parts.length;i++)s.push(p(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function y(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a&&e.setAttribute("media",a),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function p(e,t){var n,r,a;if(t.singleton){var o=h++;n=f||(f=u(t)),r=y.bind(null,n,o,!1),a=y.bind(null,n,o,!0)}else n=u(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e,t);return c(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o],u=a[i.id];u&&(u.refs--,r.push(u))}e&&c(s(e,t),t);for(var l=0;l<r.length;l++){var d=r[l];if(0===d.refs){for(var y=0;y<d.parts.length;y++)d.parts[y]();delete a[d.id]}}}}},function(e,t,n){"use strict";n.r(t);n(1);var r=n(0);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keys=r,this.lang="eng",this.tmpStr="",this.caps=!1,this.shift=!1,this.tmp=[],this.mouseID=0}var t,n,o;return t=e,o=[{key:"createHTML",value:function(){var e=document.createElement("div"),t=document.createElement("textarea");return e.className="container",t.className="textarea",document.body.append(e),document.querySelector(".container").append(t),!0}}],(n=[{key:"createKeyboard",value:function(){var e=this,t=document.createElement("div");t.className="keysContainer",document.querySelector(".container").append(t),this.keys[this.lang].forEach((function(t,n){var r=document.createElement("div"),a=document.createElement("span"),o=t[1];if(r.setAttribute("data-key",t[0]),r.classList.add("buttonClass"),e.caps&&/^[a-zа-я]$/i.test(t[1])&&r.classList.add("caps"),r.classList.add("key-".concat(n)),document.querySelector(".keysContainer").append(r),a.innerHTML=o,a.classList.add("main"),document.querySelector(".key-".concat(n)).append(a),t[2]){var i=document.createElement("span");i.innerHTML=t[2],i.classList.add("edition"),document.querySelector(".key-".concat(n)).append(i)}}))}},{key:"updateCaps",value:function(){this.keys[this.lang].forEach((function(e){/^[a-z\][а-я']$/i.test(e[1])&&document.querySelector(".buttonClass[data-key=".concat(e[0],"]")).classList.toggle("caps")})),this.caps=!this.caps}},{key:"Lang",value:function(){this.lang="rus"===this.lang?"eng":"rus",this.Storage(this.lang),this.keys[this.lang].forEach((function(e){var t=document.querySelector(".buttonClass[data-key=".concat(e[0],"]"));if(t.querySelector(".main").innerHTML=e[1],e[2]){if(null==t.querySelector(".edition")){var n=document.createElement("span");n.classList.add("edition"),t.append(n)}t.querySelector(".edition").innerHTML=e[2]}else null!=t.querySelector(".edition")&&t.querySelector(".edition").remove()}))}},{key:"Events",value:function(){var e=this;document.querySelector(".keysContainer").addEventListener("mousedown",(function(t){t.target.classList.contains("buttonClass")?e.keysFilter(t.target,!1):(t.target.classList.contains("main")||t.target.classList.contains("edition"))&&e.keysFilter(t.target.parentElement,!1)})),document.querySelector(".keysContainer").addEventListener("mouseup",(function(t){t.target.classList.contains("buttonClass")?e.keysFilter(t.target,!0):(t.target.classList.contains("main")||t.target.classList.contains("edition"))&&e.keysFilter(t.target.parentElement,!0),document.querySelector(".textarea").focus()})),document.addEventListener("keydown",(function(t){t.preventDefault(),!0!==t.repeat||!0===t.repeat&&!0===t.shiftKey&&"Shift"!==t.key?-1!==e.keys[e.lang].map((function(e){return e[0]})).indexOf(t.code)&&(document.querySelector(".buttonClass[data-key=".concat(t.code,"]")).classList.add("act"),e.keysFilter(document.querySelector(".buttonClass[data-key=".concat(t.code,"]")),!1)):e.shift=!0,document.querySelector(".textarea").focus()})),document.addEventListener("keyup",(function(t){t.preventDefault(),-1!==e.keys[e.lang].map((function(e){return e[0]})).indexOf(t.code)&&(document.querySelector(".buttonClass[data-key=".concat(t.code,"]")).classList.remove("act"),e.keysFilter(document.querySelector(".buttonClass[data-key=".concat(t.code,"]")),!0))}))}},{key:"keysFilter",value:function(e,t){-1!==["Backspace","ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Delete","Tab","CapsLock","Enter","ShiftLeft","ShiftRight","ControlLeft","AltLeft","ControlRight","AltRight"].indexOf(e.getAttribute("data-key"))||t?t?this.KeysUpper(e):this.CapsLock(e,!1):this.CapsLock(e,!0)}},{key:"CapsLock",value:function(e,t){!this.caps&&t?this.printValue(e.querySelector(".main").innerHTML):this.caps&&t?e.querySelector(".edition")?this.printValue(e.querySelector(".edition").innerHTML):this.printValue(e.querySelector(".main").innerHTML.toUpperCase()):this.KeyPress(e)}},{key:"KeyPress",value:function(e){var t=this;switch(-1===this.tmp.indexOf(e.querySelector(".main").innerHTML)&&this.tmp.push(e.querySelector(".main").innerHTML),e.querySelector(".main").innerHTML){case"Backspace":if(this.mouseID=document.querySelector(".textarea").selectionStart,this.mouseID>0){var n=document.querySelector(".textarea").innerHTML;this.tmpStr=n.slice(0,this.mouseID-1)+n.slice(this.mouseID),document.querySelector(".textarea").innerHTML=this.tmpStr,document.querySelector(".textarea").selectionStart=this.mouseID-1,document.querySelector(".textarea").selectionEnd=this.mouseID-1}break;case"CapsLock":case"Shift":this.updateCaps();break;case"Del":if(this.mouseID=document.querySelector(".textarea").selectionStart,this.mouseID<document.querySelector(".textarea").innerHTML.length){var r=document.querySelector(".textarea").innerHTML;this.tmpStr=r.slice(0,this.mouseID)+r.slice(this.mouseID+1),document.querySelector(".textarea").innerHTML=this.tmpStr,document.querySelector(".textarea").selectionStart=this.mouseID,document.querySelector(".textarea").selectionEnd=this.mouseID}break;case"ENTER":this.printValue("\n");break;case"Tab":!function(){var e=document.querySelector(".textarea").innerHTML;t.mouseID=document.querySelector(".textarea").selectionStart,t.tmpStr="".concat(e.slice(0,t.mouseID),"  ").concat(e.slice(t.mouseID)),document.querySelector(".textarea").innerHTML=t.tmpStr,document.querySelector(".textarea").selectionStart=t.mouseID+2,document.querySelector(".textarea").selectionEnd=t.mouseID+2}();break;case"◄":this.mouseID=document.querySelector(".textarea").selectionStart,this.mouseID>0&&(document.querySelector(".textarea").selectionStart=this.mouseID-1,document.querySelector(".textarea").selectionEnd=this.mouseID-1);break;case"►":this.mouseID=document.querySelector(".textarea").selectionStart,this.mouseID<document.querySelector(".textarea").innerHTML.length&&(document.querySelector(".textarea").selectionStart=this.mouseID+1,document.querySelector(".textarea").selectionEnd=this.mouseID+1);break;case"▼":!function(){t.mouseID=document.querySelector(".textarea").selectionStart;var e=document.querySelector(".textarea").innerHTML.indexOf("\n",t.mouseID+1);-1!==e?(document.querySelector(".textarea").selectionStart=e,document.querySelector(".textarea").selectionEnd=e):(document.querySelector(".textarea").selectionStart=document.querySelector(".textarea").innerHTML.length,document.querySelector(".textarea").selectionEnd=document.querySelector(".textarea").innerHTML.length)}();break;case"▲":!function(){t.mouseID=document.querySelector(".textarea").selectionStart;var e=document.querySelector(".textarea").innerHTML.lastIndexOf("\n",t.mouseID-1);-1!==e&&(document.querySelector(".textarea").selectionStart=e,document.querySelector(".textarea").selectionEnd=e)}()}}},{key:"KeysUpper",value:function(e){switch(-1!==this.tmp.indexOf("Alt")&&-1!==this.tmp.indexOf("Shift")&&this.Lang(),e.querySelector(".main").innerHTML){case"Shift":this.updateCaps()}-1!==this.tmp.indexOf(e.querySelector(".main").innerHTML)&&this.tmp.splice(this.tmp.indexOf(e.querySelector(".main").innerHTML),1)}},{key:"Storage",value:function(e){e?(localStorage.removeItem("lang"),localStorage.setItem("lang","".concat(e))):localStorage.getItem("lang")?this.lang=localStorage.getItem("lang"):(localStorage.removeItem("lang"),localStorage.setItem("lang","".concat(this.lang)))}},{key:"printValue",value:function(e){this.mouseID=document.querySelector(".textarea").selectionStart;var t=document.querySelector(".textarea").innerHTML;this.tmpStr=t.slice(0,this.mouseID)+e+t.slice(this.mouseID),document.querySelector(".textarea").innerHTML=this.tmpStr,document.querySelector(".textarea").selectionStart=this.mouseID+1,document.querySelector(".textarea").selectionEnd=this.mouseID+1}}])&&a(t.prototype,n),o&&a(t,o),e}(),i=new o;new Promise((function(e,t){o.createHTML()?e():t()})).then((function(){i.Storage()})).then((function(){i.createKeyboard()})).then((function(){i.Events()}))}]);