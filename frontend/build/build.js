!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/frontend/build/",e(e.s=8)}([function(t,e){t.exports=function(t,e,n,i,r,a){var s,o=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,o=t.default);var l="function"==typeof o?o.options:o;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r);var u;if(a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):i&&(u=i),u){var f=l.functional,d=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,e){return u.call(e),d(t,e)}):l.beforeCreate=d?[].concat(d,u):[u]}return{esModule:s,exports:o,options:l}}},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(a(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));u[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,i=document.querySelector("style["+g+'~="'+t.id+'"]');if(i){if(v)return h;i.parentNode.removeChild(i)}if(_){var a=p++;i=d||(d=r()),e=s.bind(null,i,a,!1),n=s.bind(null,i,a,!0)}else i=r(),e=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=C(e,r);else{var a=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function o(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),m.ssrId&&t.setAttribute(g,e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(12),u={},f=c&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,v=!1,h=function(){},m=null,g="data-vue-ssr-id",_="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n,r){v=n,m=r||{};var a=l(t,e);return i(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r],o=u[s.id];o.refs--,n.push(o)}e?(a=l(t,e),i(a)):a=[];for(var r=0;r<n.length;r++){var o=n[r];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete u[o.id]}}}};var C=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";var i=n(13),r=n(17);e.a={name:"editor",components:{"file-list":i.a,"editor-tabs":r.a},data:function(){return{rootDir:ROOT_DIR}},methods:{addInRootClick:function(){EVENT_BUS.$emit("fmgr-add",ROOT_DIR)},fmrgAdd:function(t){alert("Add into "+t)},fmrgCopy:function(t){alert("Copy "+t)},fmrgRename:function(t){alert("Rename "+t)},fmrgDelete:function(t){alert("Delete "+t)}},created:function(){EVENT_BUS.$on("fmgr-add",this.fmrgAdd),EVENT_BUS.$on("fmgr-copy",this.fmrgCopy),EVENT_BUS.$on("fmgr-rename",this.fmrgRename),EVENT_BUS.$on("fmgr-unlink",this.fmrgDelete)}}},function(t,e,n){"use strict";e.a={name:"file-list",props:{opened:Boolean,directory:String},data:function(){return{isLoading:!1,isLoaded:!1,files:[]}},methods:{add:function(t){EVENT_BUS.$emit("fmgr-add",t)},copy:function(t){EVENT_BUS.$emit("fmgr-copy",t)},rename:function(t){EVENT_BUS.$emit("fmgr-rename",t)},unlink:function(t){EVENT_BUS.$emit("fmgr-unlink",t)},open:function(t){EVENT_BUS.$emit("fmgr-open",t)},toggleSubdir:function(t){t.isOpened=!t.isOpened},loadFiles:function(){var t=this,e=new XMLHttpRequest;e.open("POST",window.location.href+"?fn=getfiles",!0),e.onload=function(){try{t.files=JSON.parse(e.responseText)}catch(n){return t.files=[],void e.onerror()}t.isLoaded=!0,t.isLoading=!1},e.onerror=function(){console.error(e.responseText),t.isLoading=!1};var n=new FormData;n.append("path",t.directory),t.isLoading=!0,e.send(n)}},watch:{opened:function(t){1!=t||this.isLoaded||this.loadFiles()}},created:function(){this.opened&&!this.isLoaded&&this.loadFiles()}}},function(t,e,n){"use strict";var i=n(20),r=n(22);e.a={name:"editor-tabs",components:{"image-viewer":i.a,"text-editor":r.a},data:function(){return{files:[],active:0}},methods:{open:function(t){for(var e=0;e<this.files.length;e++)if(this.files[e].path==t)return void(this.active=e);var n={name:t.split("/").pop().toLowerCase(),path:t,isUnsaved:!1},i=["jpg","jpeg","png","gif","svg","ico"],r=t.split(".").pop().toLowerCase();-1!=i.indexOf(r)?n.viewer="image-viewer":n.viewer="text-editor",this.files.push(n),this.active=this.files.length-1},close:function(t){this.files.splice(t,1),this.active>=this.files.length&&this.files.length>0&&(this.active=this.files.length-1)}},created:function(){EVENT_BUS.$on("fmgr-open",this.open)}}},function(t,e,n){"use strict";e.a={name:"image-viewer",props:{path:String},data:function(){return{url:"",isLoading:!0}},created:function(){this.url=this.path.replace(ROOT_DIR,"")}}},function(t,e,n){"use strict";function i(t){return new Promise(function(e,n){if(-1!=a.indexOf(t))return void e();var i=document.createElement("SCRIPT");i.src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/"+t+"/"+t+".min.js",i.onload=function(){a.push(t),e()},i.onerror=function(){n()},document.head.appendChild(i)})}function r(t){return new Promise(function(e,n){var i=new XMLHttpRequest;i.open("POST",window.location.href+"?fn=fread",!0),i.onload=function(){e(i.responseText)},i.onerror=function(){n()};var r=new FormData;r.append("path",t),i.send(r)})}var a=["text/plain","xml","clike","php","javascript","css","htmlmixed"];e.a={name:"text-editor",props:{path:String},data:function(){return{}},created:function(){var t=this,e=t.path,n=e.split(".").pop().toLowerCase(),a={css:"css",htm:"htmlmixed",html:"htmlmixed",js:"javascript",json:"javascript",jsx:"jsx",md:"markdown",php:"php",sass:"sass",scss:"sass",sh:"shell",sql:"sql",twig:"twig",xml:"xml"},s=n in a?a[n]:"text/plain";i(s).then(r.bind(null,e)).then(function(e){var n=t.codeMirror=CodeMirror(function(e){t.$el.parentNode.appendChild(e),t.$el.style.display="none"},{value:e,mode:s,theme:"material",lineNumbers:!0,lineWrapping:!0});n.keyMap.default==n.keyMap.macDefault?(n.addKeyMap({"Cmd-S":t.save}),n.addKeyMap({"Cmd-Shift-S":t.saveAs})):(n.addKeyMap({"Ctrl-S":t.save}),n.addKeyMap({"Ctrl-Shift-S":t.saveAs}))},function(){alert("Error! Check the internet connection.")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);window.EVENT_BUS=new Vue({}),new Vue({el:"#root",render:function(t){return t(i.a)}})},function(t,e,n){"use strict";function i(t){n(10)}var r=n(3),a=n(27),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e,n){var i=n(11);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("d2ca7b6e",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,"",""])},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],s=a[0],o=a[1],c=a[2],l=a[3],u={id:t+":"+r,css:o,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}},function(t,e,n){"use strict";function i(t){n(14)}var r=n(4),a=n(16),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e,n){var i=n(15);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("b80f2088",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"show",rawName:"v-show",value:t.opened,expression:"opened"}]},[t.isLoading?n("li",{staticClass:"loading-indicator"},[n("i",{staticClass:"fa fa-circle-o-notch fa-spin"})]):t._e(),t._v(" "),t._l(t.files,function(e){return n("li",[e.isDirectory?n("div",{staticClass:"filename"},[n("div",{class:["folder",{opened:e.isOpened}],on:{click:function(n){return t.toggleSubdir(e)}}},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"fmgr-controls"},[n("button",{attrs:{title:"Rename folder"},on:{click:function(n){return t.rename(e.path)}}},[n("i",{staticClass:"fa fa-pencil"})]),t._v(" "),n("button",{attrs:{title:"Add file or folder"},on:{click:function(n){return t.add(e.path)}}},[n("i",{staticClass:"fa fa-plus"})]),t._v(" "),n("button",{staticClass:"delete",attrs:{title:"Delete file"},on:{click:function(n){return t.unlink(e.path)}}},[n("i",{staticClass:"fa fa-times"})])])]):t._e(),t._v(" "),e.isDirectory?n("file-list",{attrs:{opened:e.isOpened,directory:e.path}}):n("div",{staticClass:"filename"},[n("div",{class:["file-"+e.extension],on:{click:function(n){return t.open(e.path)}}},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("div",{staticClass:"fmgr-controls"},[n("button",{attrs:{title:"Rename file"},on:{click:function(n){return t.rename(e.path)}}},[n("i",{staticClass:"fa fa-pencil"})]),t._v(" "),n("button",{attrs:{title:"Copy file"},on:{click:function(n){return t.copy(e.path)}}},[n("i",{staticClass:"fa fa-copy"})]),t._v(" "),n("button",{staticClass:"delete",attrs:{title:"Delete file"},on:{click:function(n){return t.unlink(e.path)}}},[n("i",{staticClass:"fa fa-times"})])])])],1)})],2)},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(18)}var r=n(5),a=n(26),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e,n){var i=n(19);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("461f3c68",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var i=n(6),r=n(21),a=n(0),s=a(i.a,r.a,!1,null,null,null);e.a=s.exports},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"loading-indicator":t.isLoading,"image-viewer":!t.isLoading}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]},[n("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),n("br"),t._v('\n    Loading file "'+t._s(t.path)+'"\n  ')]),t._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],attrs:{src:t.url,alt:t.path},on:{load:function(e){t.isLoading=!1}}})])},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";function i(t){n(23)}var r=n(7),a=n(25),s=n(0),o=i,c=s(r.a,a.a,!1,o,null,null);e.a=c.exports},function(t,e,n){var i=n(24);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(2)("2f186208",i,!0,{})},function(t,e,n){e=t.exports=n(1)(!1),e.push([t.i,"",""])},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loading-indicator"},[n("span",[n("i",{staticClass:"fa fa-circle-o-notch fa-spin"}),n("br"),t._v('\n    Loading file "'+t._s(t.path)+'"\n  ')])])},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{attrs:{id:"tabs"}},t._l(t.files,function(e,i){return n("li",{class:{active:t.active==i,unsaved:e.isUnsaved},on:{click:function(e){t.active=i}}},[t._v("\n      "+t._s(e.name)+"\n      "),n("i",{staticClass:"fa fa-times",on:{click:function(e){return e.stopPropagation(),t.close(i)}}})])}),0),t._v(" "),n("ul",{attrs:{id:"documents"}},t._l(t.files,function(e,i){return n("li",{key:e.path,class:{active:t.active==i}},[n(e.viewer,{tag:"component",attrs:{path:e.path}})],1)}),0)])},r=[],a={render:i,staticRenderFns:r};e.a=a},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("div",{attrs:{id:"aside"}},[n("div",{attrs:{id:"filemanager"}},[n("button",{staticClass:"add-in-root",on:{click:t.addInRootClick}},[n("i",{staticClass:"fa fa-plus"})]),t._v(" "),n("file-list",{attrs:{opened:!0,directory:t.rootDir}})],1),t._v(" "),n("div",{attrs:{id:"statusbar"}},[t._v("\n      Status bar\n    ")])]),t._v(" "),n("editor-tabs",{attrs:{id:"content"}})],1)},r=[],a={render:i,staticRenderFns:r};e.a=a}]);