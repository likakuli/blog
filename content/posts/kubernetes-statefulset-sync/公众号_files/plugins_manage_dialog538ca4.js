define("pages/modules/emoji_panel/emoji_panel.css.js", [], function (require, exports, module){module.exports = "@grid BreakPoints: {  xs: 0;  sm: 576px;  md: 768px;  lg: 992px;  xl: 1200px;}@container MaxWidths: {  xs: auto;  sm: 540px;  md: 720px;  lg: 960px;  xl: 1140px;}/*How to usefont-family: 'wechatnum';*/.icon_emotion_sprite {  cursor: pointer;  width: 20px;  height: 20px;  vertical-align: middle;  display: inline-block;  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/emoji_panel\/icon_emotion_panel.2x538ca4.png) no-repeat 0 0;  background-size: 20px auto;}.weui-desktop-popover_emoji {  width: 396px;  padding: 5px;}.emotions {  -moz-user-select: none;  overflow: hidden;  position: relative;  z-index: 1;}.emotions_item {  float: left;  width: 24px;  height: 24px;  line-height: 24px;  font-size: 0;  text-align: center;  background-color: var(--weuiDesktop_cardBgColor);}.emotions_item:hover {  background-color: var(--weuiDesktop_globalBgColor);}.test {  float: left;}";});define("pages/modules/reply/reply.css.js", [], function (require, exports, module){module.exports = "@grid BreakPoints: {  xs: 0;  sm: 576px;  md: 768px;  lg: 992px;  xl: 1200px;}@container MaxWidths: {  xs: auto;  sm: 540px;  md: 720px;  lg: 960px;  xl: 1140px;}/*How to usefont-family: 'wechatnum';*/.emotion_editor {  position: relative;  border: 1px solid var(--weuiDesktop_separateColor);}.emotion_editor .edit_area {  padding: 14px 20px;  outline: 0;  color: var(--weuiDesktop_globalColor);  word-wrap: break-word;  -webkit-hyphens: auto;  -ms-hyphens: auto;  hyphens: auto;  background-color: var(--weuiDesktop_cardBgColor);  height: 188px;  overflow-y: auto;}.emotion_editor .edit_area img {  vertical-align: middle;}.emotion_editor .edit_area[placeholder]:empty:before {  content: attr(placeholder);  color: var(--weuiDesktop_FG_Text_descColor);}.emotion_editor:disabled,.emotion_editor[disabled] {  cursor: default;}.emotion_editor:disabled .edit_area,.emotion_editor[disabled] .edit_area,.emotion_editor:disabled .editor_toolbar,.emotion_editor[disabled] .editor_toolbar {  color: var(--weuiDesktop_descColor);  background-color: var(--weuiDesktop_areaBgColor);}.emotion_editor:disabled .icon_emotion,.emotion_editor[disabled] .icon_emotion {  cursor: default;}.emotion_editor:disabled .icon_emotion:hover i,.emotion_editor[disabled] .icon_emotion:hover i {  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_emotion538ca4.svg) no-repeat 0 0;  width: 20px;  height: 20px;  vertical-align: middle;  display: inline-block;}.emotion_editor:disabled .icon_pic,.emotion_editor[disabled] .icon_pic {  cursor: default;}.emotion_editor:disabled .icon_pic:hover i,.emotion_editor[disabled] .icon_pic:hover i {  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_pic538ca4.svg) no-repeat 0 0;  width: 20px;  height: 20px;  vertical-align: middle;  display: inline-block;}.editor_toolbar {  padding: 0 20px;  line-height: 36px;  background-color: var(--weuiDesktop_cardBgColor);  border-top: 1px solid var(--weuiDesktop_separateColor);}.editor_toolbar:after {  content: \"\\200B\";  display: block;  height: 0;  clear: both;}.editor_toolbar .weui-desktop-popover__wrp {  display: inline-block;  vertical-align: middle;}.editor_tip {  float: right;  color: var(--weuiDesktop_FG_Text_descColor);}.editor_tip em {  font-style: normal;  margin: 0 3px;}.editor_tip.warn {  color: var(--weuiDesktop_errorColor);}.icon_pic {  height: 28px;  width: 28px;  display: -ms-inline-flexbox;  display: inline-flex;  -ms-flex-align: center;      align-items: center;  -ms-flex-pack: center;      justify-content: center;  overflow: hidden;  font-size: 0;  vertical-align: middle;  cursor: pointer;}.icon_pic:hover i {  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_pic_hover538ca4.svg) no-repeat 0 0;}.icon_pic i {  margin-top: 3px;  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_pic538ca4.svg) no-repeat 0 0;  width: 20px;  height: 20px;  vertical-align: middle;  display: inline-block;}.icon_emotion {  float: left;  height: 28px;  width: 28px;  display: -ms-flexbox;  display: flex;  -ms-flex-align: center;      align-items: center;  -ms-flex-pack: center;      justify-content: center;  overflow: hidden;  font-size: 0;  cursor: pointer;}.icon_emotion:hover i {  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_emotion_hover538ca4.svg) no-repeat 0 0;}.icon_emotion i {  background: transparent url(\/mpres\/zh_CN\/htmledition\/pages\/modules\/reply\/images\/icon_emotion538ca4.svg) no-repeat 0 0;  width: 20px;  height: 20px;  vertical-align: middle;  display: inline-block;}.edit_upload_img {  max-width: 500px;  max-height: 300px;}";});define("pages/modules/reply/reply.tpl.js",[],function(e,i,t){return'<div ref="replyRef" :style="style">  <div class="emoion_editor_wrp">    <div class="emotion_editor" :disabled="disabled">      <div class="edit_area"        :contenteditable="!disabled"        :placeholder="placeholder"        ref="editArea"        @keyup="keyup"        @keydown.enter.prevent="keydownEnter"        @keydown.shift.enter.prevent="keydownShiftEnter"        @compositionend="compositionend"        @mouseup="mouseup"        @drop="drop"        @paste="paste"        @focus="notRender = true"        @blur="blur"        v-html="parsedContent"></div>       <slot name="inputTips"></slot>       <div class="editor_toolbar">         <a v-if="hasPic" @click="showImageDialog" class="icon_pic">          <i>图片</i>        </a>        <mp-emoji-panel showtype="click" ref="emojiPanelPopover" @select="select">          <a href="javascript:void(0);" class="icon_emotion emotion_switch" slot="target">            <i>表情</i>          </a>        </mp-emoji-panel>        <template v-if="limit > 0 && !disabled">          <p class="editor_tip opr_tips" v-if="entertype == 0">，按下Enter键换行</p>          <p class="editor_tip opr_tips" v-else-if="entertype == 1">，按下Shift+Enter键换行</p>          <p class="editor_tip" v-if="remain >= 0">还可以输入<em>{{remain}}</em>字</p>          <p class="editor_tip warn" v-else>已超出<em>{{-remain}}</em>字</p>        </template>        <template v-if="disabled && disabledTips">          <p class="editor_tip opr_tips">{{disabledTips}}</p>        </template>        <div class="emotion_wrp"></div>      </div>    </div>  </div>  <slot name="imgVerifyCode"></slot>  <slot name="bar"></slot>  <mp-image-dialog v-if="hasPic" ref="imageDialog" :uploadscene="6" @select="selectImage">    <template slot="uploadTips">大小不超过10M</template>  </mp-image-dialog></div>'})
"use strict"
function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t]
return r}return Array.from(e)}define("3rd/editor/common/domUtils.js",["3rd/editor/common/browser.js","3rd/editor/common/utils.js","3rd/editor/common/dtd.js"],function(e,t,r){var s=e("3rd/editor/common/browser.js").browser,d=e("3rd/editor/common/utils.js").utils,o=e("3rd/editor/common/dtd.js").dtd,f=s.ie,n=window.UE.dom
function u(e,t,r,n,i,o){var l,a=n&&e[t]
for(a=a||e[r];!a&&(l=(l||e).parentNode);){if("BODY"==l.tagName||o&&!o(l))return null
a=l[r]}return a&&i&&!i(a)?u(a,t,r,!1,i):a}var i=f&&s.version<9?{tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder"}:{tabindex:"tabIndex",readonly:"readOnly"},l=d.listToMap(["inline","inline-block","inline-table"]),c=d.listToMap(["-webkit-box","-moz-box","block","list-item","table","table-row-group","table-header-group","table-footer-group","table-row","table-column-group","table-column","table-cell","table-caption"]),p=f&&"6"==s.version?"\ufeff":"​",m=f&&"6"==s.version?"&#65279;":"&#8203;",g="_baidu_bookmark_",h="mpchecktext",y="mptmpchecktext",v="data-pluginname",N="wx-edui-media-wrp",b="custom_select_card_wrp",C=n.domUtils={NODE_ELEMENT:1,NODE_DOCUMENT:9,NODE_TEXT:3,NODE_COMMENT:8,NODE_DOCUMENT_FRAGMENT:11,POSITION_IDENTICAL:0,POSITION_DISCONNECTED:1,POSITION_FOLLOWING:2,POSITION_PRECEDING:4,POSITION_IS_CONTAINED:8,POSITION_CONTAINS:16,fillChar:p,fillCharEncode:m,fillCharReg:new RegExp(p,"g"),bookmarkFillChar:"‍",bookmarkFillCharEncdoe:"&zwj;",bookmarkFillCharReg:new RegExp("‍","g"),bookmarkPrefix:g,filterDataAttributeList:["data-shimo-docs"],keys:{8:1,46:1,16:1,17:1,18:1,37:1,38:1,39:1,40:1,13:1},getPosition:function(e,t){if(!e||!t)return 1
if(e===t)return 0
var r,n=[e],i=[t]
for(r=e;r=r.parentNode;){if(r===t)return 10
n.push(r)}for(r=t;r=r.parentNode;){if(r===e)return 20
i.push(r)}if(n.reverse(),i.reverse(),n[0]!==i[0])return 1
for(var o=-1;n[++o]===i[o];);for(e=n[o],t=i[o];e=e.nextSibling;)if(e===t)return 4
return 2},createFillcharTextNode:function(e){return e.createTextNode(p)},getNodeIndex:function(e,t){for(var r=e,n=0;r=r.previousSibling;)(!t||3!=r.nodeType||r.nodeType!=r.nextSibling.nodeType)&&n++
return n},inDoc:function(e,t){return 10==C.getPosition(e,t)},findParent:function(e,t,r){if(e&&!C.isBody(e))for(e=r?e:e.parentNode;e;){if(!t||t(e)||C.isBody(e))return t&&!t(e)&&C.isBody(e)?null:e
e=e.parentNode}return null},findPreviousSibling:function(e,t,r){if(e&&!C.isBody(e))for(e=r?e:e.previousSibling;e;){if(!t||t(e)||C.isBody(e))return t&&!t(e)&&C.isBody(e)?null:e
e=e.previousSibling}return null},findNextSibling:function(e,t,r){if(e&&!C.isBody(e))for(e=r?e:e.nextSibling;e;){if(!t||t(e)||C.isBody(e))return t&&!t(e)&&C.isBody(e)?null:e
e=e.nextSibling}return null},findParentByTagName:function(e,t,r,n){return t=d.listToMap(d.isArray(t)?t:[t]),C.findParent(e,function(e){return t[e.tagName]&&!(n&&n(e))},r)},findParents:function(e,t,r,n){for(var i=t&&(r&&r(e)||!r)?[e]:[];e=C.findParent(e,r);)i.push(e)
return n?i:i.reverse()},insertAfter:function(e,t){return e&&e.parentNode?e.parentNode.insertBefore(t,e.nextSibling):null},remove:function(e,t){if(e){var r,n=e.parentNode
if(n){if(t&&e.hasChildNodes())for(;r=e.firstChild;)n.insertBefore(r,e)
n.removeChild(e)}return e}},getNextDomNode:function(e,t,r,n){return u(e,"firstChild","nextSibling",t,r,n)},isBookmarkNode:function(e){return 1==e.nodeType&&e.id&&new RegExp("^"+g,"i").test(e.id)},createBookmarkNode:function(e,t){t=t||""
var r=(e=e||document).createElement("span")
return r.style.cssText="display:none;line-height:0px;",r.appendChild(e.createTextNode("‍")),r.id=g+"start_"+t,r},getBookmarkReg:function(){return new RegExp("<span[^>]*"+g+"[^>]*>[^<]*<\\/span>","g")},getWindow:function(e){var t=e.ownerDocument||e
return t.defaultView||t.parentWindow},getCommonAncestor:function(e,t){if(e===t)return e
for(var r=[e],n=[t],i=e,o=-1;i=i.parentNode;){if(i===t)return i
r.push(i)}for(i=t;i=i.parentNode;){if(i===e)return i
n.push(i)}for(r.reverse(),n.reverse();r[++o]===n[o];);return 0==o?null:r[o-1]},clearEmptySibling:function(e,t,r){function n(e,t){for(var r;e&&!C.isBookmarkNode(e)&&(C.isEmptyInlineElement(e)||!new RegExp("[^\t\n\r"+C.fillChar+"]").test(e.nodeValue));)r=e[t],C.remove(e),e=r}t||n(e.nextSibling,"nextSibling"),r||n(e.previousSibling,"previousSibling")},split:function(e,t){var r=e.ownerDocument
if(s.ie&&t==e.nodeValue.length){var n=r.createTextNode("")
return C.insertAfter(e,n)}var i=e.splitText(t)
if(s.ie8){var o=r.createTextNode("")
C.insertAfter(i,o),C.remove(o)}return i},isWhitespace:function(e){return!new RegExp("[^ \t\n\r"+C.fillChar+"]").test(e.nodeValue)},getXY:function(e){for(var t=0,r=0;e.offsetParent;)r+=e.offsetTop,t+=e.offsetLeft,e=e.offsetParent
if(0==t&&0==r){var n=$(e).offset()
t=n.left,r=n.top}return{x:t,y:r}},on:function(e,t,r){var n=d.isArray(t)?t:d.trim(t).split(/\s+/),i=n.length
if(i)for(;i--;)if(t=n[i],e.addEventListener)e.addEventListener(t,r,!1)
else{r._d||(r._d={els:[]})
var o=t+r.toString(),l=d.indexOf(r._d.els,e)
r._d[o]&&-1!=l||(-1==l&&r._d.els.push(e),r._d[o]||(r._d[o]=function(e){return r.call(e.srcElement,e||window.event)}),e.attachEvent("on"+t,r._d[o]))}e=null},un:function(e,t,r){var n=d.isArray(t)?t:[t],i=n.length
if(i)for(;i--;)if(t=n[i],e.removeEventListener)e.removeEventListener(t,r,!1)
else{var o=t+r.toString()
try{e.detachEvent("on"+t,r._d?r._d[o]:r)}catch(e){}if(r._d&&r._d[o]){var l=d.indexOf(r._d.els,e);-1!=l&&r._d.els.splice(l,1),0==r._d.els.length&&delete r._d[o]}}},isSameElement:function(e,t){if(e.tagName!=t.tagName)return!1
var r=e.attributes,n=t.attributes
if(!f&&r.length!=n.length)return!1
for(var i,o,l=0,a=0,s=0;i=r[s++];){if("style"==i.nodeName){if(i.specified&&l++,C.isSameStyle(e,t))continue
return!1}if(f){if(!i.specified)continue
l++,o=n.getNamedItem(i.nodeName)}else o=t.attributes[i.nodeName]
if(!o.specified||i.nodeValue!=o.nodeValue)return!1}if(f){for(s=0;o=n[s++];)o.specified&&a++
if(l!=a)return!1}return!0},isSameStyle:function(e,t){var r=e.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":"),n=t.style.cssText.replace(/( ?; ?)/g,";").replace(/( ?: ?)/g,":")
if(s.opera){if(r=e.style,n=t.style,r.length!=n.length)return!1
for(var i in r)if(!/^(\d+|csstext)$/i.test(i)&&r[i]!=n[i])return!1
return!0}if(!r||!n)return r==n
if(r=r.split(";"),n=n.split(";"),r.length!=n.length)return!1
for(var o,l=0;o=r[l++];)if(-1==d.indexOf(n,o))return!1
return!0},isBlockElm:function(e){return!!e&&(1==e.nodeType&&(o.$block[e.tagName]||c[C.getComputedStyle(e,"display")])&&!o.$nonChild[e.tagName])},isBlockElm2:function(e){if(e&&1==e.nodeType){var t=C.getComputedStyle(e,"display")
return!!(o.$block2[e.tagName]&&!l[t]||c[t])}return!1},isBody:function(e){return e&&1==e.nodeType&&"body"==e.tagName.toLowerCase()},breadByUneditable:function(e){var t=0<arguments.length&&void 0!==e?e:{},r=t.node,n=null,i=[]
do{if(!(n=(n=this.getChildUneditable({node:r,isMarkNode:!1}))[0]||null)){t.attrs&&this.setAttributes(r,t.attrs),this.removePluginDefaultClass({parent:a})
for(var o=r.querySelectorAll("[class]"),l=0,s=o.length;l<s;l++){var f=o[l]
this.removePluginDefaultClass({parent:f})}i.push(r)
break}var d=null
n.parentNode&&!this.isBody(n.parentNode)&&(d=n.parentNode.cloneNode(!1)),n.nextSibling&&this.isBr(n.nextSibling)&&n.parentNode.removeChild(n.nextSibling)
var u=this.breakParent({node:n,parent:r,keepLeft:!1,keepRight:!1,returnNewDom:!0})
d&&(n.parentNode.insertBefore(d,n),d.appendChild(n)),r=null
for(var c=!1,p=0,m=u.length;p<m;p++){var g=u[p]
if(g===n)t.attrs&&t.applyUneditablParent&&this.setAttributes(g.parentNode,t.attrs),i.push(g.parentNode),c=!0
else if(c)r=g
else{i.push(g),t.attrs&&this.setAttributes(g,t.attrs),this.removePluginDefaultClass({node:g})
for(var h=g.querySelectorAll("[class]"),y=0,v=h.length;y<v;y++){var N=h[y]
this.removePluginDefaultClass({node:N})}}}}while(r)
return i},breakParent:function(e,t,r,n){var i=!1
"[object Object]"===Object.prototype.toString.call(e)&&(t=e.parent,r=e.keepLeft,n=e.keepRight,i=e.returnNewDom,e=e.node)
var o,l,a,s,f,d=e,u=e,c=!0,p=!0
for(o=e;o&&o!==t&&!(s=this.findPreviousSibling(o,function(e){return!C.isFillChar(e)}));)o=o.parentNode
for(s||!0===r||(c=!1),o=e;o&&o!==t&&!(f=this.findNextSibling(o,function(e){return!C.isFillChar(e)}));)o=o.parentNode
f||!0===n||(p=!1)
do{if(d=d.parentNode,c&&(l?((o=d.cloneNode(!1)).appendChild(l),l=o):!(s=this.findPreviousSibling(u,function(e){return!C.isFillChar(e)}))&&!0!==r||(l=d.cloneNode(!1)),l))for(;o=u.previousSibling;)l.insertBefore(o,l.firstChild)
if(p&&(a?((o=d.cloneNode(!1)).appendChild(a),a=o):!(f=this.findNextSibling(u,function(e){return!C.isFillChar(e)}))&&!0!==n||(a=d.cloneNode(!1)),a))for(;o=u.nextSibling;)a.appendChild(o)
u=d}while(t!==d)
var m=[]
return o=t.parentNode,l&&(o.insertBefore(l,t),m.push(l)),o.insertBefore(e,t),m.push(e),a&&(o.insertBefore(a,t),m.push(a)),C.remove(t),!0===i?m:e},isEmptyInlineElement:function(e){if(1!=e.nodeType||!o.$removeEmpty[e.tagName])return 0
for(e=e.firstChild;e;){if(C.isBookmarkNode(e))return 0
if(1==e.nodeType&&!C.isEmptyInlineElement(e)||3==e.nodeType&&!C.isWhitespace(e))return 0
e=e.nextSibling}return 1},trimWhiteTextNode:function(r){function e(e){for(var t;(t=r[e])&&3==t.nodeType&&C.isWhitespace(t);)r.removeChild(t)}r&&3!=r.nodeType&&(e("firstChild"),e("lastChild"))},mergeChild:function(e,t,r){for(var n,i=C.getElementsByTagName(e,e.tagName.toLowerCase()),o=0;n=i[o++];)if(n.parentNode&&!C.isBookmarkNode(n))if("span"!=n.tagName.toLowerCase())C.isSameElement(e,n)&&C.remove(n,!0)
else{if(e===n.parentNode&&(C.trimWhiteTextNode(e),1==e.childNodes.length)){e.style.cssText=n.style.cssText+";"+e.style.cssText,C.remove(n,!0)
continue}if(n.style.cssText=e.style.cssText+";"+n.style.cssText,r){var l=r.style
if(l){l=l.split(";")
for(var a,s=0;a=l[s++];)n.style[d.cssStyleToDomStyle(a.split(":")[0])]=a.split(":")[1]}}C.isSameStyle(n,e)&&C.remove(n,!0)}},getElementsByTagName:function(e,t,r){if(!e)return[]
if(r&&d.isString(r)){var n=r
r=function(e){return C.hasClass(e,n)}}t=d.trim(t).replace(/[ ]{2,}/g," ").split(" ")
for(var i,o=[],l=0;i=t[l++];)for(var a,s=e.getElementsByTagName(i),f=0;a=s[f++];)r&&!r(a)||o.push(a)
return o},mergeToParent:function(e){for(var t=e.parentNode;t&&o.$removeEmpty[t.tagName];){if(t.tagName==e.tagName||"A"==t.tagName){if(C.trimWhiteTextNode(t),"SPAN"==t.tagName&&!C.isSameStyle(t,e)||"A"==t.tagName&&"SPAN"==e.tagName){if(1<t.childNodes.length||t!==e.parentNode){e.style.cssText=t.style.cssText+";"+e.style.cssText,t=t.parentNode
continue}t.style.cssText+=";"+e.style.cssText}if("A"!=t.tagName){t===e.parentNode&&C.remove(e,!0)
break}}t=t.parentNode}},mergeSibling:function(e,t,r){function n(e,t,r){var n
if((n=r[e])&&!C.isBookmarkNode(n)&&1==n.nodeType&&C.isSameElement(r,n)){for(;n.firstChild;)"firstChild"==t?r.insertBefore(n.lastChild,r.firstChild):r.appendChild(n.firstChild)
C.remove(n)}}t||n("previousSibling","firstChild",e),r||n("nextSibling","lastChild",e)},unSelectable:f&&s.ie9below||s.opera?function(e){e.onselectstart=function(){return!1},e.onclick=e.onkeyup=e.onkeydown=function(){return!1},e.unselectable="on",e.setAttribute("unselectable","on")
for(var t,r=0;t=e.all[r++];)switch(t.tagName.toLowerCase()){case"iframe":case"textarea":case"input":case"select":break
default:t.unselectable="on",e.setAttribute("unselectable","on")}}:function(e){e.style.MozUserSelect=e.style.webkitUserSelect=e.style.KhtmlUserSelect="none"},removeAttributes:function(e,t){t=d.isArray(t)?t:d.trim(t).replace(/[ ]{2,}/g," ").split(" ")
for(var r,n=0;r=t[n++];){switch(r=i[r]||r){case"className":e[r]=""
break
case"style":e.style.cssText="",!s.ie&&e.getAttributeNode("style")&&e.removeAttributeNode(e.getAttributeNode("style"))}e.removeAttribute(r)}},createElement:function(e,t,r){return C.setAttributes(e.createElement(t),r)},setAttributes:function(e,t){for(var r in t)if(t.hasOwnProperty(r)){var n=t[r]
switch(r){case"class":e.className=n
break
case"style":e.style.cssText=e.style.cssText+";"+n
break
case"innerHTML":e[r]=n
break
case"value":e.value=n
break
default:e.setAttribute(i[r]||r,n)}}return e},getComputedStyle:function(e,t){if(-1<"width height top left".indexOf(t))return e["offset"+t.replace(/^\w/,function(e){return e.toUpperCase()})]+"px"
if(3==e.nodeType&&(e=e.parentNode),s.ie&&s.version<9&&"font-size"==t&&!e.style.fontSize&&!o.$empty[e.tagName]&&!o.$nonChild[e.tagName]){var r=e.ownerDocument.createElement("span")
r.style.cssText="padding:0;border:0;font-family:simsun;",r.innerHTML=".",e.appendChild(r)
var n=r.offsetHeight
return e.removeChild(r),r=null,n+"px"}try{var i=C.getStyle(e,t)||(window.getComputedStyle?C.getWindow(e).getComputedStyle(e,"").getPropertyValue(t):(e.currentStyle||e.style)[d.cssStyleToDomStyle(t)])}catch(e){return""}return d.transUnitToPx(d.fixColor(t,i))},removeClasses:function(e,t){t=d.isArray(t)?t:d.trim(t).replace(/[ ]{2,}/g," ").split(" ")
for(var r,n=0,i=e.className;r=t[n++];)i=i.replace(new RegExp("\\b"+r+"\\b"),"");(i=d.trim(i).replace(/[ ]{2,}/g," "))?e.className=i:C.removeAttributes(e,["class"])},addClass:function(e,t){if(e){t=d.trim(t).replace(/[ ]{2,}/g," ").split(" ")
for(var r,n=0,i=e.className;r=t[n++];)new RegExp("\\b"+r+"\\b").test(i)||(e.className+=" "+r)}},hasClass:function(e,t){if(!e)return!1
if(d.isRegExp(t))return t.test(e.className)
t=d.trim(t).replace(/[ ]{2,}/g," ").split(" ")
for(var r,n=0,i=e.className;r=t[n++];)if(!new RegExp("\\b"+r+"\\b","i").test(i))return!1
return n-1==t.length},preventDefault:function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},removeStyle:function(e,t){s.ie?("color"==t&&(t="(^|;)"+t),e.style.cssText=e.style.cssText.replace(new RegExp(t+"[^:]*:[^;]+;?","ig"),"")):e.style.removeProperty?e.style.removeProperty(t):e.style.removeAttribute(d.cssStyleToDomStyle(t)),e.style.cssText||C.removeAttributes(e,["style"])},getStyles:function(e){if(!e||!e.style||!e.style.cssText)return null
for(var t={},r=e.style.cssText.replace(/( *; *)/g,";").replace(/( *: *)/g,":").split(";"),n=0,i=r.length;n<i;n++){var o=r[n]
if(o){var l=o.split(":")
l[0]&&l[1]&&!t[l[0]]&&(t[l[0]]=l[1])}}return t},getStyle:function(e,t){var r=e.style[d.cssStyleToDomStyle(t)]
return d.fixColor(t,r)},setStyle:function(e,t,r){e.style[d.cssStyleToDomStyle(t)]=r,d.trim(e.style.cssText)||this.removeAttributes(e,"style")},setStyles:function(e,t){for(var r in t)t.hasOwnProperty(r)&&C.setStyle(e,r,t[r])},removeDirtyAttr:function(e){for(var t,r=0,n=e.getElementsByTagName("*");t=n[r++];)t.removeAttribute("_moz_dirty")
e.removeAttribute("_moz_dirty")},getChildCount:function(e,t){var r=0,n=e.firstChild
for(t=t||function(){return 1};n;)t(n)&&r++,n=n.nextSibling
return r},isEmptyNode:function(e,n){return!e||1!=e.nodeType||(null==n&&(n=!0),!e.firstChild||0==C.getChildCount(e,function(e){var t=!C.isBr(e)&&!C.isMarkNode(e)&&!C.isWhitespace(e),r=!("none"!==C.getComputedStyle(e,"display"))
return n?t:t&&!r}))},clearSelectedArr:function(e){for(var t;t=e.pop();)C.removeAttributes(t,["class"])},scrollToView:function(e,t,r){var n,i,o=(n=t.document,(i="CSS1Compat"==n.compatMode)?n.documentElement.clientWidth:n.body.clientWidth,(i?n.documentElement.clientHeight:n.body.clientHeight)||0),l=-1*o+r
l+=e.offsetHeight||0,l+=C.getXY(e).y
var a=function(e){if("pageXOffset"in e)return{x:e.pageXOffset||0,y:e.pageYOffset||0}
var t=e.document
return{x:t.documentElement.scrollLeft||t.body.scrollLeft||0,y:t.documentElement.scrollTop||t.body.scrollTop||0}}(t).y;(a<l||l<a-o)&&t.scrollTo(0,l+(l<0?-20:20))},isBr:function(e){return 1==e.nodeType&&"BR"==e.tagName},isFillChar:function(e,t){return 3==e.nodeType&&!e.nodeValue.replace(new RegExp((t?"^":"")+C.fillChar,"g"),"").length},isFillChar2:function(e){return!(!e||3!==e.nodeType||this.replaceFillChar(e.nodeValue))},isStartInblock:function(e){var t,r=e.cloneRange(),n=0,i=r.startContainer
if(1==i.nodeType&&i.childNodes[r.startOffset])for(var o=(i=i.childNodes[r.startOffset]).previousSibling;o&&C.isFillChar(o);)o=(i=o).previousSibling
for(this.isFillChar(i,!0)&&1==r.startOffset&&(r.setStartBefore(i),i=r.startContainer);i&&C.isFillChar(i);)i=(t=i).previousSibling
for(t&&(r.setStartBefore(t),i=r.startContainer),1==i.nodeType&&C.isEmptyNode(i)&&1==r.startOffset&&r.setStart(i,0).collapse(!0);!r.startOffset;){if(i=r.startContainer,C.isBlockElm(i)||C.isBody(i)){n=1
break}var l
if(o=r.startContainer.previousSibling){for(;o&&C.isFillChar(o);)o=(l=o).previousSibling
l?r.setStartBefore(l):r.setStartBefore(r.startContainer)}else r.setStartBefore(r.startContainer)}return n&&!C.isBody(r.startContainer)?1:0},isEmptyBlock:function(e,t){if(!e)return 0
if(1!=e.nodeType)return 0
if(t=t||new RegExp("[ \t\r\n"+C.fillChar+"]","g"),0<e[s.ie?"innerText":"textContent"].replace(t,"").length)return 0
for(var r in o.$isNotEmpty)if(e.getElementsByTagName(r).length)return 0
return 1},getChildUneditable:function(e){var t=0<arguments.length&&void 0!==e?e:{},r=[]
if(!t.node||!t.node.querySelectorAll)return r
for(var n=t.node.querySelectorAll('[contenteditable="false"]'),i=0,o=n.length;i<o;i++){var l=n[i]
!t.isMarkNode&&this.isMarkNode(l)||r.push(l)}return r},getContentEditableNode:function(e){var t=0<arguments.length&&void 0!==e?e:{},r=null
if(!t.node)return r
var n=t.node
for(n&&3===n.nodeType&&(n=n.parentNode);n&&n.nodeName&&"body"!==n.nodeName.toLocaleLowerCase();){if(2===this.isContentEditable({node:n,checkParent:!1})&&(t.isMarkNode||!t.isMarkNode&&!this.isMarkNode(n))){r=n
break}n=n.parentNode}return r},isContentEditable:function(e){var t=0<arguments.length&&void 0!==e?e:{},r=t.node,n=t.checkParent
if(!r)return 2
var i=r
if(1!==i.nodeType&&(i=i.parentNode),!i||1!==i.nodeType)return 2
if(!n)return"false"==i.contentEditable+""?2:3
for(;i;){var o=i.contentEditable+""
if("false"==o)return 2
if("true"==o)return 1
i=i.parentNode}return 2},setViewportOffset:function(e,t){var r=0|parseInt(e.style.left),n=0|parseInt(e.style.top),i=e.getBoundingClientRect(),o=t.left-i.left,l=t.top-i.top
o&&(e.style.left=r+o+"px"),l&&(e.style.top=n+l+"px")},fillNode:function(e,t){var r=s.ie?e.createTextNode(C.fillChar):e.createElement("br")
t.innerHTML="",t.appendChild(r)},moveChild:function(e,t,r){for(;e.firstChild;)r&&t.firstChild?t.insertBefore(e.lastChild,t.firstChild):t.appendChild(e.firstChild)},hasNoAttributes:function(e){return s.ie?/^<\w+\s*?>/.test(e.outerHTML):0==e.attributes.length},isCustomeNode:function(e){return 1==e.nodeType&&e.getAttribute("_ue_custom_node_")},isTagNode:function(e,t){return 1==e.nodeType&&new RegExp("^"+e.tagName+"$","i").test(t)},filterNodeList:function(e,t,r){var n=[]
if(!d.isFunction(t)){var i=t
t=function(e){return-1!=d.indexOf(d.isArray(i)?i:i.split(" "),e.tagName.toLowerCase())}}return d.each(e,function(e){t(e)&&n.push(e)}),0==n.length?null:1!=n.length&&r?n:n[0]},isInNodeEndBoundary:function(e,t){var r=e.startContainer
if(3==r.nodeType&&e.startOffset!=r.nodeValue.length)return 0
if(1==r.nodeType&&e.startOffset!=r.childNodes.length)return 0
for(;r!==t;){if(r.nextSibling)return 0
r=r.parentNode}return 1},isBoundaryNode:function(e,t){for(;!C.isBody(e);)if(e!==(e=e.parentNode)[t])return!1
return!0},canContainByP:function(e){var t=0<arguments.length&&void 0!==e?e:{},r={body:1,div:1,p:1,section:1,ol:1,ul:1}
if(t.tagName)return!r[t.tagName]
if(t.dom){var n=t.dom.nodeType
if(1!==n)return 3===n
var i=t.dom.outerHTML
for(var o in r){if(Object.prototype.hasOwnProperty.call(r,o))if(new RegExp("<"+o+"\\s*[^>]*>","i").test(i))return!1}return!0}return!1},canContainP:function(e){var t=0<arguments.length&&void 0!==e?e:{},r={p:1}
if(t.tagName)return!r[t.tagName]
if(t.dom){for(var n=t.dom;n&&"body"!==n.nodeName.toLowerCase();){if(r[n.nodeName.toLowerCase()])return!1
n=n.parentNode}return!0}return!1},isMarkNode:function(e){if(!e||!e.tagName)return!1
var t=e.tagName.toLowerCase()
return t===h||t===y||"mp-pay-preview-filter"===t||!!this.isBookmarkNode(e)},replaceFillChar:function(e){return e?e.replace(this.fillCharReg,"").replace(this.bookmarkFillCharReg,""):""},getTreeWalker:function(e){var t=this,r=0<arguments.length&&void 0!==e?e:{}
if(!r.root||!d.isSupportWalker())return null
var n=null
return(r.filterMarkNode||r.filterFillchar||"function"==typeof r.filter)&&(n={acceptNode:function(e){return!(r.filterMarkNode&&t.isMarkNode(e)||r.filterFillchar&&t.isFillChar2(e))&&("function"!=typeof r.filter||r.filter({node:e}))?window.NodeFilter.FILTER_ACCEPT:window.NodeFilter.FILTER_REJECT}}),r.root.ownerDocument.createTreeWalker(r.root,r.whatToShow,n,!1)},isContainUneditable:function(e){var t=0<arguments.length&&void 0!==e?e:{}
if(!t.node||1!==t.node.nodeType)return!1
var r=[].concat(_toConsumableArray(t.node.querySelectorAll('[contenteditable="false"]'))).filter(function(e){return!e.dataset.editable})
if(!1===t.ignoreMarkNode)return 0<r.length
for(var n=0,i=r.length;n<i;n++)if(!this.isMarkNode(r[n]))return!0
return!1},isUneditableApplyStyle:function(e){return!!{margin:1,"margin-left":1,"margin-right":1,"margin-top":1,"margin-bottom":1}[(0<arguments.length&&void 0!==e?e:{}).styleKey]},getDelNode:function(e){var t=0<arguments.length&&void 0!==e?e:{},r="",n=""
if(n="pre"===t.type?(r="lastChild","previousSibling"):(r="firstChild","nextSibling"),!r)return null
for(var i=u(t.node,r,n,!1),o=null,l=null;i&&(!t.endNode||(l=C.getPosition(i,t.endNode)&C.POSITION_FOLLOWING)&&"pre"===t.type||"next"===t.type&&!l);){if(3==i.nodeType||t.filter&&t.filter(i)||!this.isBlockElm(i)&&!i[r]){o=i
break}i=u(i,r,n,!0)}return o},isUneditablePluginNode:function(e){var t=0<arguments.length&&void 0!==e?e:{}
return!!(t.node&&t.node.getAttribute&&t.node.getAttribute(v)&&2===this.isContentEditable({node:t.node,checkParent:!1}))},findUneditablePluginNode:function(e){return(0<arguments.length&&void 0!==e?e:{}).node.querySelectorAll('[contenteditable="false"]['+v+"]")},removeSiblingFillchar:function(e){var t=0<arguments.length&&void 0!==e?e:{}
if(t.node)for(var r=["previousSibling","nextSibling"],n=0,i=r.length;n<i;n++)for(var o=r[n],l=null,a=t.node[o];a&&this.isFillChar2(a);)l=a[o],this.remove(a),a=l},removePluginDefaultClass:function(e){var t=0<arguments.length&&void 0!==e?e:{}
if(t.node&&1===t.node.nodeType&&t.node.className&&"[object String]"===Object.prototype.toString.call(t.node.className)){var r=t.node.className.split(" ")
r.indexOf(N)<0||r.indexOf(b)<0||this.isContainUneditable({node:t.node,ignoreMarkNode:!0})||(r.splice(r.indexOf(N),1),r.splice(r.indexOf(b),1),t.node.className=r.join(" "),t.node.className||t.node.removeAttribute("class"))}},fillHtml:s.ie11below?p:"<br/>",getWordCountContent:function(e){return e?e.replace(C.fillCharReg,"").replace(C.bookmarkFillCharReg,"").replace(/(\b|^)\w+(\b|$)/g,"#").replace(/\s/g,""):""}}
return{domUtils:C,filterDataAttributeList:C.filterDataAttributeList,fillCharReg:C.fillCharReg,fillChar:p,fillCharEncode:m,getDomNode:u,checktextTagName:h,checktextTmpTagName:y,pluginAttr:v,pluginParentClass:N,uneditableParentClass:b}})
"use strict"
define("3rd/editor/common/browser.js",[],function(e,o,t){return window.UE||(window.UE={}),{browser:UE.browser=function(){var e=navigator.userAgent.toLowerCase(),o=window.opera,t={ipad:/(ipad).*\s([\d_]+)/i.test(e),iphone:/(iphone)\sos\s([\d_]+)/i.test(e),android:/(android)\s([\d\.]+)/i.test(e),edge:/edge\/([\w.]+)/i.test(e),ie:/(msie\s|trident.*rv:)([\w.]+)/.test(e),opera:!!o&&o.version,webkit:-1<e.indexOf(" applewebkit/"),mac:-1<e.indexOf("macintosh"),quirks:"BackCompat"==document.compatMode}
t.gecko="Gecko"==navigator.product&&!t.webkit&&!t.opera&&!t.ie
var i=0
if(t.ie){var d=e.match(/(?:msie\s([\w.]+))/),a=e.match(/(?:trident.*rv:([\w.]+))/)
i=d&&a&&d[1]&&a[1]?Math.max(+d[1],+a[1]):d&&d[1]?+d[1]:a&&a[1]?+a[1]:0,t.ie11Compat=11==document.documentMode,t.ie9Compat=9==document.documentMode,t.ie8=!!document.documentMode,t.ie8Compat=8==document.documentMode,t.ie7Compat=7==i&&!document.documentMode||7==document.documentMode,t.ie6Compat=i<7||t.quirks,t.ie9above=8<i,t.ie9below=i<9,t.ie11above=10<i,t.ie11below=i<11}if(t.gecko){var r=e.match(/rv:([\d\.]+)/)
r&&(i=1e4*(r=r[1].split("."))[0]+100*(r[1]||0)+ +(r[2]||0))}return/chrome\/(\d+\.\d)/i.test(e)&&(t.chrome=+RegExp.$1),/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e)&&!/chrome/i.test(e)&&(t.safari=+(RegExp.$1||RegExp.$2)),t.opera&&(i=parseFloat(o.version())),t.webkit&&(i=parseFloat(e.match(/ applewebkit\/(\d+)/)[1])),t.version=i,t.isCompatible=!t.mobile&&(t.ie&&6<=i||t.gecko&&10801<=i||t.opera&&9.5<=i||t.air&&1<=i||t.webkit&&522<=i||!1),t}()}})
"use strict"
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
define("3rd/editor/common/utils.js",["3rd/editor/common/browser.js"],function(e,t,r){var n=e("3rd/editor/common/browser.js").browser,i={supportWalker:!1,hasCheckWalker:!1}
window.UE||(window.UE={})
var o,u,a,c,l=UE.utils={each:function(e,t,r){if(null!=e)if(e.length===+e.length){for(var n=0,o=e.length;n<o;n++)if(!1===t.call(r,e[n],n,e))return!1}else for(var i in e)if(e.hasOwnProperty(i)&&!1===t.call(r,e[i],i,e))return!1},isSupportWalker:function(){if(i.hasCheckWalker)return i.supportWalker
if(i.hasCheckWalker=!0,"function"==typeof document.createTreeWalker&&window.NodeFilter&&window.NodeFilter.SHOW_ALL&&window.NodeFilter.SHOW_TEXT&&window.NodeFilter.FILTER_ACCEPT&&window.NodeFilter.FILTER_REJECT){var e=document.createElement("div")
e.style.display="none",e.innerHTML='<div id="test_walker_accept"></div>a<div id="test_walker_reject"></div>'
var t=[],r=[]
try{for(var n=document.createTreeWalker(e,window.NodeFilter.SHOW_TEXT,{acceptNode:function(){return window.NodeFilter.FILTER_ACCEPT}},!1),o=document.createTreeWalker(e,window.NodeFilter.SHOW_ALL,{acceptNode:function(e){return 1==e.nodeType&&"test_walker_accept"==e.id?window.NodeFilter.FILTER_ACCEPT:window.NodeFilter.FILTER_REJECT}},!1);n.nextNode();)t.push(n.currentNode)
for(;o.nextNode();)r.push(o.currentNode)}catch(e){t=[],r=[]}return 1==t.length&&"a"===t[0].nodeValue&&1==r.length&&"test_walker_accept"===r[0].id?i.supportWalker=!0:i.supportWalker=!1,i.supportWalker}},makeInstance:function(e){var t=new Function
return t.prototype=e,e=new t,t.prototype=null,e},extend:function(e,t,r){if(t)for(var n in t)r&&e.hasOwnProperty(n)||(e[n]=t[n])
return e},extend2:function(e){for(var t=arguments,r=1;r<t.length;r++){var n=t[r]
for(var o in n)e.hasOwnProperty(o)||(e[o]=n[o])}return e},inherits:function(e,t){var r=e.prototype,n=l.makeInstance(t.prototype)
return l.extend(n,r,!0),(e.prototype=n).constructor=e},bind:function(e,t){return function(){return e.apply(t,arguments)}},defer:function(e,t,r){var n
return function(){r&&clearTimeout(n),n=setTimeout(e,t)}},indexOf:function(e,r,n){var o=-1
return n=this.isNumber(n)?n:0,this.each(e,function(e,t){if(n<=t&&e===r)return o=t,!1}),o},removeItem:function(e,t){for(var r=0,n=e.length;r<n;r++)e[r]===t&&(e.splice(r,1),r--)},trim:function(e){return e.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g,"")},listToMap:function(e){if(!e)return{}
e=l.isArray(e)?e:e.split(",")
for(var t,r=0,n={};t=e[r++];)n[t.toUpperCase()]=n[t]=1
return n},unhtml:function(e,t){return e?e.replace(t||/[&<">'](?:(amp|lt|quot|gt|#39|nbsp);)?/g,function(e,t){return t?e:{"<":"&lt;","&":"&amp;",'"':"&quot;",">":"&gt;","'":"&#39;"}[e]}):""},html:function(e){return e?e.replace(/&((g|l|quo)t|amp|#39);/g,function(e){return{"&lt;":"<","&amp;":"&","&quot;":'"',"&gt;":">","&#39;":"'"}[e]}):""},cssStyleToDomStyle:(a=document.createElement("div").style,c={float:null!=a.cssFloat?"cssFloat":null!=a.styleFloat?"styleFloat":"float"},function(e){return c[e]||(c[e]=e.toLowerCase().replace(/-./g,function(e){return e.charAt(1).toUpperCase()}))}),loadFile:(u=[],function(t,r,e){r.src&&(r.src+="?v="+UE.version),r.href&&(r.href+="?v="+UE.version)
var n=d(t,r)
if(n)n.ready?e&&e():n.funs.push(e)
else if(u.push({doc:t,url:r.src||r.href,funs:[e]}),t.body){if(!r.id||!t.getElementById(r.id)){var o=t.createElement(r.tag)
for(var i in delete r.tag,r)o.setAttribute(i,r[i])
o.onload=o.onreadystatechange=function(){if(!this.readyState||/loaded|complete/.test(this.readyState)){if(0<(n=d(t,r)).funs.length){n.ready=1
for(var e;e=n.funs.pop();)e()}o.onload=o.onreadystatechange=null}},o.onerror=function(){throw Error("The load "+(r.href||r.src)+" fails,check the url settings of file ueditor.config.js ")},t.getElementsByTagName("head")[0].appendChild(o)}}else{var a=[]
for(var i in r)"tag"!=i&&a.push(i+'="'+r[i]+'"')
t.write("<"+r.tag+" "+a.join(" ")+" ></"+r.tag+">")}}),isEmptyObject:function(e){if(null==e)return!0
if(this.isArray(e)||this.isString(e))return 0===e.length
for(var t in e)if(e.hasOwnProperty(t))return!1
return!0},fixColor:function(e,t){if(/color/i.test(e)&&/rgba?/.test(t)){var r=t.split(",")
if(3<r.length)return""
t="#"
for(var n,o=0;n=r[o++];)t+=1==(n=parseInt(n.replace(/[^\d]/gi,""),10).toString(16)).length?"0"+n:n
t=t.toUpperCase()}return t},optCss:function(e){var o,i
function t(e,t){if(!e)return""
var r=e.top,n=e.bottom,o=e.left,i=e.right,a=""
if(r&&o&&n&&i)a+=";"+t+":"+(r==n&&n==o&&o==i?r:r==n&&o==i?r+" "+o:o==i?r+" "+o+" "+n:r+" "+i+" "+n+" "+o)+";"
else for(var u in e)a+=";"+t+"-"+u+":"+e[u]+";"
return a}return e=e.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi,function(e,t,r,n){if(1==n.split(" ").length)switch(t){case"padding":return(o=o||{})[r]=n,""
case"margin":return(i=i||{})[r]=n,""
case"border":return"initial"==n?"":e}return e}),(e+=t(o,"padding")+t(i,"margin")).replace(/^[ \n\r\t;]*|[ \n\r\t]*$/,"").replace(/;([ \n\r\t]+)|\1;/g,";").replace(/(&((l|g)t|quot|#39))?;{2,}/g,function(e,t){return t?t+";;":";"})},clone:function(e,t){var r
for(var n in t=t||{},e)e.hasOwnProperty(n)&&("object"==(void 0===(r=e[n])?"undefined":_typeof(r))?(t[n]=l.isArray(r)?[]:{},l.clone(e[n],t[n])):t[n]=r)
return t},transUnitToPx:function(n){if(!/(pt|cm)/.test(n))return n
var o
switch(n.replace(/([\d.]+)(\w+)/,function(e,t,r){n=t,o=r}),o){case"cm":n=25*parseFloat(n)
break
case"pt":n=Math.round(96*parseFloat(n)/72)}return n+(n?"px":"")},domReady:(o=[],function(e,t){var r=(t=t||window).document
e&&o.push(e),"complete"===r.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?s(r):(r.isReady&&s(r),t.addEventListener?(r.addEventListener("DOMContentLoaded",function e(){r.removeEventListener("DOMContentLoaded",e,!1),s(r)},!1),t.addEventListener("load",function(){s(r)},!1)):(function(){if(!r.isReady){try{r.documentElement.doScroll("left")}catch(e){return setTimeout(arguments.callee,0)}s(r)}}(),t.attachEvent("onload",function(){s(r)})))}),cssRule:n.ie&&11!=n.version&&document.createStyleSheet?function(e,t,r){var n,o,i
if((n=(r=r||document).indexList?r.indexList:r.indexList={})[e])i=r.styleSheets[n[e]]
else{if(void 0===t)return""
i=r.createStyleSheet("",o=r.styleSheets.length),n[e]=o}if(void 0===t)return i.cssText
i.cssText=t||""}:function(e,t,r){var n,o=(r=r||document).getElementsByTagName("head")[0]
if(!(n=r.getElementById(e))){if(void 0===t)return"";(n=r.createElement("style")).id=e,o.appendChild(n)}if(void 0===t)return n.innerHTML
""!==t?n.innerHTML=t:o.removeChild(n)},sort:function(e,t){t=t||function(e,t){return e.localeCompare(t)}
for(var r=0,n=e.length;r<n;r++)for(var o=r,i=e.length;o<i;o++)if(0<t(e[r],e[o])){var a=e[r]
e[r]=e[o],e[o]=a}return e}}
function s(e){e.isReady=!0
for(var t;t=o.pop();t());}function d(e,t){try{for(var r,n=0;r=u[n++];)if(r.doc===e&&r.url==(t.src||t.href))return r}catch(e){return null}}return l.each(["String","Function","Array","Number","RegExp","Object"],function(t){UE.utils["is"+t]=function(e){return Object.prototype.toString.apply(e)=="[object "+t+"]"}}),{utils:l}})
"use strict"
define("3rd/editor/common/dtd.js",["3rd/editor/common/utils.js"],function(e,t,o){var r,a,d,i,s,n,l,b,m,p,c,u,h,f,g,y,k,v,$,x,w,q,E,j,U,C,B=e("3rd/editor/common/utils.js").utils
function A(e){for(var t in e)e[t.toUpperCase()]=e[t]
return e}return window.UE||(window.UE={}),window.UE.dom||(window.UE.dom={}),{dtd:window.UE.dom.dtd=(r=B.extend2,a=A({isindex:1,fieldset:1}),d=A({input:1,button:1,select:1,textarea:1,label:1}),i=r(A({a:1}),d),s=r({iframe:1},i),n=A({hr:1,ul:1,menu:1,div:1,blockquote:1,noscript:1,table:1,center:1,address:1,dir:1,pre:1,h5:1,dl:1,h4:1,noframes:1,h6:1,ol:1,h1:1,h3:1,h2:1}),l=A({ins:1,del:1,script:1,style:1}),b=r(A({b:1,acronym:1,bdo:1,var:1,"#":1,abbr:1,code:1,br:1,i:1,cite:1,kbd:1,u:1,strike:1,s:1,tt:1,strong:1,q:1,samp:1,em:1,dfn:1,span:1}),l),m=r(A({sub:1,img:1,embed:1,object:1,sup:1,basefont:1,map:1,applet:1,font:1,big:1,small:1}),b),p=r(A({p:1}),m),c=r(A({iframe:1}),m,d),u=A({img:1,embed:1,noscript:1,br:1,kbd:1,center:1,button:1,basefont:1,h5:1,h4:1,samp:1,h6:1,ol:1,h1:1,h3:1,h2:1,form:1,font:1,"#":1,select:1,menu:1,ins:1,abbr:1,label:1,code:1,table:1,script:1,cite:1,input:1,iframe:1,strong:1,textarea:1,noframes:1,big:1,small:1,span:1,hr:1,sub:1,bdo:1,var:1,div:1,object:1,sup:1,strike:1,dir:1,map:1,dl:1,applet:1,del:1,isindex:1,fieldset:1,ul:1,b:1,acronym:1,a:1,blockquote:1,i:1,u:1,s:1,tt:1,address:1,q:1,pre:1,p:1,em:1,dfn:1}),h=r(A({a:0}),c),f=A({tr:1}),g=A({"#":1}),y=r(A({param:1}),u),k=r(A({form:1}),a,s,n,p),v=A({li:1,ol:1,ul:1}),$=A({style:1,script:1}),x=A({base:1,link:1,meta:1,title:1}),w=r(x,$),q=A({head:1,body:1}),E=A({html:1}),j=A({address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),U=A({figure:1,output:1,hgroup:1,video:1,footer:1,header:1,canvas:1,audio:1,aside:1,figcaption:1,section:1,address:1,blockquote:1,center:1,dir:1,div:1,dl:1,fieldset:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:1,isindex:1,menu:1,noframes:1,ol:1,p:1,pre:1,table:1,ul:1}),C=A({area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1}),A({$nonBodyContent:r(E,q,x),$block:j,$block2:U,$inline:h,$inlineWithA:r(A({a:1}),h),$body:r(A({script:1,style:1}),j),$cdata:A({script:1,style:1}),$empty:C,$nonChild:A({iframe:1,textarea:1}),$listItem:A({dd:1,dt:1,li:1}),$list:A({ul:1,ol:1,dl:1}),$isNotEmpty:A({pre:1,table:1,ul:1,ol:1,dl:1,iframe:1,area:1,base:1,col:1,hr:1,img:1,embed:1,input:1,link:1,meta:1,param:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1}),$removeEmpty:A({a:1,abbr:1,acronym:1,address:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,var:1}),$removeEmptyBlock:A({p:1,div:1}),$tableContent:A({caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1,table:1}),$notTransContent:A({pre:1,script:1,style:1,textarea:1}),html:q,head:w,style:g,script:g,body:k,base:{},link:{},meta:{},title:g,col:{},tr:A({td:1,th:1}),img:{},embed:{},colgroup:A({thead:1,col:1,tbody:1,tr:1,tfoot:1}),noscript:k,td:k,br:{},th:k,center:k,kbd:h,button:r(p,n),basefont:{},h5:h,h4:h,samp:h,h6:h,ol:v,h1:h,h3:h,option:g,h2:h,form:r(a,s,n,p),select:A({optgroup:1,option:1}),font:h,ins:h,menu:v,abbr:h,label:h,table:A({thead:1,col:1,tbody:1,tr:1,colgroup:1,caption:1,tfoot:1}),code:h,tfoot:f,cite:h,li:k,input:{},iframe:k,strong:h,textarea:g,noframes:k,big:h,small:h,span:A({"#":1,br:1,b:1,strong:1,u:1,i:1,em:1,sub:1,sup:1,strike:1,span:1}),hr:h,dt:h,sub:h,optgroup:A({option:1}),param:{},bdo:h,var:h,div:k,object:y,sup:h,dd:k,strike:h,area:{},dir:v,map:r(A({area:1,form:1,p:1}),a,l,n),applet:y,dl:A({dt:1,dd:1}),del:h,isindex:{},fieldset:r(A({legend:1}),u),thead:f,ul:v,acronym:h,b:h,a:r(A({a:1}),c),blockquote:r(A({td:1,tr:1,tbody:1,li:1}),k),caption:h,i:h,u:h,tbody:f,s:h,address:r(s,p),tt:h,legend:h,q:h,pre:r(b,i),p:r(A({a:1}),h),em:h,dfn:h}))}})
define("pages/modules/media_dialog/qa_dialog/qa_dialog.tpl.js",[],function(i,l,o){return'<div>    <mp-dialog title="插入读者讨论" v-model="value" @close="closeDialog" rootElm="#vue_app">    <div class="qa__insert">      <p style="text-align: center;">该功能已停止内测，正在更新调整</p>    </div>    <div slot="footer">      <mp-button type="primary" @click="closeDialog" :loading="loading">我知道了</mp-button>    </div>  </mp-dialog></div>'})
define("pages/editor/rewardSettingDialog4Web1.js",["pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.js"],function(e,t,a){"use strict"
function n(){return{defaultShow:!1,isShow:!1,writer:{},authorName:"",step:1,replyId:"",inviteAuthorLink:""}}a.exports={getParams:n,bindEvent:function(t){t.eventBus.$on("requireRewardSettingDialog",function(){t.isRequired||(e("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.js"),t.isRequired=!0)}),t.eventBus.$on("showRewardSettingDialog",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
t.eventBus.$emit("requireRewardSettingDialog"),function(e,t){var a=n()
for(var i in t)void 0!==a[i]&&(a[i]=t[i])
for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e.params[r]=a[r])
e.params.isShow=!0,e.params.defaultShow=!0}(t,e),t.eventBus.$emit("update-component",{key:"mp-reward-setting-dialog",params:t.params})})},close:function(e){e.eventBus.$emit("showRewardSettingDialog_callback",e.data)}}})
define("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.js",["pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.tpl.js","pages/modules/utils/cgi.js","vue-weui/src/step/step.js","vue-weui/src/step/step_item.js","vue-weui/src/checkbox/checkbox.js","vue-weui/src/form/form.js","vue-weui/src/form/form_item.js","vue-weui/src/search/search.js","pages/modules/author_selector/author_selector.js","pages/reward/modules/auto_apply_list/auto_apply_list.js","pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.css.js"],function(e,t,s){"use strict"
var i=e("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.tpl.js"),r=e("pages/modules/utils/cgi.js")
e("vue-weui/src/step/step.js"),e("vue-weui/src/step/step_item.js"),e("vue-weui/src/checkbox/checkbox.js"),e("vue-weui/src/form/form.js"),e("vue-weui/src/form/form_item.js"),e("vue-weui/src/search/search.js"),e("pages/modules/author_selector/author_selector.js"),e("pages/reward/modules/auto_apply_list/auto_apply_list.js"),e("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.css.js"),Vue.component("mp-reward-setting-dialog",{template:i,props:{value:{type:Boolean,default:!1},step:{type:Number,default:1},writer:{type:Object,default:function(){return{hasAuthor:!1,writerid:"",username:"",nickname:"",authorStatus:0,canReward:0,headimg:""}}},authorName:{type:String,default:""},replyId:{type:String,default:""},inviteAuthorLink:{type:String,default:""}},data:function(){var i=this
return{dialogShow:!1,showLoading:!1,curStep:this.step,stepTitles:["须知","选择赞赏账户"],step1Checked:!1,formData:{authorName:this.authorName,writer:this.writer,replyId:this.replyId},formRules:{authorName:[{validator:function(e,t,s){i.formData.writer.hasAuthor?s():s(new Error("请选择赞赏账户"))},trigger:"blur"}]},replyList:[],canShowReply:this.writer.hasAuthor}},computed:{replyTips:function(){return 0===this.replyList.length?'暂无赞赏回复素材。请在<a target="_blank" href="/merchant/reward?action=getautoreply">赞赏功能-赞赏回复设置</a>里添加，设置后可对赞赏本文的用户自动回复':this.formData.replyId?"已设置，默认选择最新的回复素材，选中内容将自动回复给用户。":"未设置，请从下列内容选择一条作为赞赏自动回复。"}},watch:{dialogShow:function(e){this.$emit("input",e)},value:function(e){!0===e?this.show():this.hide()},authorName:function(e){this.formData.authorName=e},replyId:function(e){e&&(this.formData.replyId=e||"")}},mounted:function(){!0===this.value&&this.show()},methods:{show:function(){!0!==this.dialogShow&&(this.dialogShow=!0,this.showLoading=!0,this.getReplyList())},hide:function(){!1!==this.dialogShow&&(this.dialogShow=!1)},dialogClose:function(){this.hide(),this.$emit("close")},confirm:function(){this.hide(),this.$emit("select",this.formData)},getReplyList:function(){var t=this
r.get({url:"/merchant/reward?action=getautoreply&ignore_del_reply_id="+this.replyId,data:{}},function(e){e.base_resp&&0==+e.base_resp.ret&&(t.replyList=e.reply_infos,t.formData.replyId||(t.formData.replyId=e.reply_infos[0]?e.reply_infos[0].reply_id:""),t.showLoading=!1)})},goStep:function(e){this.curStep=e},selectAuthor:function(e){var t=this;(this.formData.writer=e).hasAuthor?(this.canShowReply=!0,this.$nextTick(function(){return t.$refs.myForm.validateField("authorName")})):this.canShowReply=!1}}})})
define("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.tpl.js",[],function(e,t,l){return'<mp-dialog class="reward_setting_dialog" weui="true" v-model="dialogShow" title="开启赞赏" :width="960" @close="dialogClose" rootElm="#vue_app">  <template>    <mp-step :step="curStep">      <mp-step-item v-for="(title,index) in stepTitles" :title="title" :key="index"></mp-step-item>    </mp-step>  </template>  <div class="step_panel step_agreement" v-if="curStep === 1">    <div class="simple_dialog_content">      <div class="page_msg small default">        <div class="inner">          <div class="msg_content">            <h4 class="new-msg_title">赞赏须知</h4>                <p class="msg_section">                赞赏是读者认可原创内容而自愿赠予，用以鼓励的无偿行为。                </p>                <p class="msg_section">                如下情形不得对原创的信息内容使用赞赏功能，一经发现将永久收回赞赏功能使用权限，导致严重影响的还将对违规公众帐号予以一定期限内封号处理，处理时未结算资金将退还微信用户。<br>                （1）募捐，或类似资金筹集为目的的文章中使用本功能，包括但不限于公益筹款、众筹、乞讨，或者带有宗教色彩的募集、募捐等；<br>                （2）使用本功能进行赌博或抽奖的；<br>                （3）使用本功能售卖商品（任何实物或虚拟商品）的；<br>                （4）以提供增值服务利诱用户进行赞赏的；<br>                （5）其他不符合腾讯开发本功能目的的情形。                </p>          </div>          <div class="tool_area">            <mp-checkbox v-model="step1Checked">              我已阅读并同意遵守<a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1463730026&version=1&platform=2" target="_blank">《微信公众平台原创声明及相关功能使用协议》</a>            </mp-checkbox>          </div>        </div>      </div>    </div>      </div>  <div v-if="curStep === 2" class="original_edit_box">    <mp-form class="simple_dialog_content" :model="formData" :rules="formRules" ref="myForm" @submit.native.prevent>      <mp-form-item class="reward-account" prop="authorName">        <label slot="label">赞赏账户</label>        <div class="pay__author">          <mp-author-selector ref="authorSelector" v-model="formData.authorName" :writer="formData.writer" :invite-author-link="inviteAuthorLink" @select="selectAuthor"></mp-author-selector>                  </div>      </mp-form-item>      <mp-form-item prop="replyId" v-if="canShowReply" class="reward_reply">        <label slot="label">赞赏回复</label>        <p v-if="!showLoading" v-html="replyTips"></p>\t      <mp-auto-apply-list status="choose" v-model="formData.replyId" :data-list="replyList" :loading="showLoading"></mp-auto-apply-list>      </mp-form-item>    </mp-form>  </div>  <div slot="footer">        <template v-if="curStep === 1">      <mp-button type="default" @click="dialogClose">取消</mp-button>      <mp-button class="space_left" type="primary" :disabled="!step1Checked" @click="goStep(2)">下一步</mp-button>    </template>        <template v-else-if="curStep === 2">      <mp-button type="default" @click="goStep(1)">上一步</mp-button>      <mp-button class="space_left" type="primary" :disabled="!formData.writer.hasAuthor" @click="confirm">完成</mp-button>    </template>  </div></mp-dialog>'})
define("pages/modules/media_dialog/reward_setting_dialog/reward_setting_dialog.css.js", [], function (require, exports, module){module.exports = "@grid BreakPoints: {  xs: 0;  sm: 576px;  md: 768px;  lg: 992px;  xl: 1200px;}@container MaxWidths: {  xs: auto;  sm: 540px;  md: 720px;  lg: 960px;  xl: 1140px;}/*How to usefont-family: 'wechatnum';*/.reward_setting_dialog .space_left {  margin-left: 20px;}.reward_setting_dialog .reward_author_tip {  color: var(--weuiDesktop_FG_Text_descColor);  padding-top: 8px;}.reward_setting_dialog .new-msg_title {  padding: 30px 0;  font-size: var(--weuiDesktop_H2FontSize);  line-height: 26px;  text-align: center;  font-weight: bold;}.reward_setting_dialog .step_agreement .simple_dialog_content {  width: 750px;  display: block;  margin: 0 auto;}.reward_setting_dialog .reward-account {  display: -ms-flexbox;  display: flex;  -ms-flex-align: center;      align-items: center;}.reward_setting_dialog .reward_reply .weui-desktop-form__controls {  position: relative;  top: 7px;}.reward_setting_dialog .simple_dialog_content {  width: 840px;}.reward_setting_dialog .auto-reply__list-wrp {  margin-top: 12px;}.reward_setting_dialog .step_agreement .msg_content {  max-height: 450px;  overflow-y: auto;  margin-bottom: 20px;}.reward_setting_dialog .step_agreement .tool_area {  text-align: center;  width: auto;  padding: 10px 0 0 0;  border-top: 1px solid #e4e8eb;}.reward_setting_dialog .msg_section {  margin-bottom: 20px;}.reward_setting_dialog .original_edit_box {  padding-top: 45px;  height: 474px;  overflow: auto;}.reward_setting_dialog .original_edit_box .simple_dialog_content {  display: block;  margin: 0 auto;  text-align: left;}";});define("pages/editor/plugins_manage_dialog.js",["pages/modules/media_dialog/plugins_manage_dialog/plugins_manage_dialog.js"],function(a,n,i){"use strict"
function g(){return{isShow:!1}}a("pages/modules/media_dialog/plugins_manage_dialog/plugins_manage_dialog.js"),i.exports={getParams:g,bindEvent:function(o){o.eventBus.$on("showPluginsManageDialog",function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},n=g()
for(var i in a)void 0!==n[i]&&(n[i]=a[i])
for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(o.params[e]=n[e])
o.params.isShow=!0})},changeHandler:function(a){a.eventBus.$emit("showPluginsManageDialog_callback",a.data)}}})
