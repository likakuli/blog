define("vue-weui/src/upload/3rd/webuploader/lib/dnd.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/mediator.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js"],function(e,u,t){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var r=d(e("vue-weui/src/upload/3rd/webuploader/base.js")),o=d(e("vue-weui/src/upload/3rd/webuploader/mediator.js")),i=d(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js"))
function d(e){return e&&e.__esModule?e:{default:e}}var n=r.default.$
function a(e){(e=this.options=n.extend({},a.options,e)).container=n(e.container),e.container.length&&i.default.call(this,"DragAndDrop")}a.options={accept:null,disableGlobalDnd:!1},r.default.inherits(i.default,{constructor:a,init:function(){var e=this
e.connectRuntime(e.options,function(){e.exec("init"),e.trigger("ready")})}}),o.default.installTo(a.prototype),u.default=a})
define("vue-weui/src/upload/3rd/webuploader/runtime/client.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/mediator.js","vue-weui/src/upload/3rd/webuploader/runtime/runtime.js"],function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n,u,d=s(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=s(e("vue-weui/src/upload/3rd/webuploader/mediator.js")),o=s(e("vue-weui/src/upload/3rd/webuploader/runtime/runtime.js"))
function s(e){return e&&e.__esModule?e:{default:e}}function l(t,r){var u,e,i=d.default.Deferred()
this.uid=d.default.guid("client_"),this.runtimeReady=function(e){return i.done(e)},this.connectRuntime=function(e,t){if(u)throw new Error("already connected!")
return i.done(t),"string"==typeof e&&n.get(e)&&(u=n.get(e)),(u=u||n.get(null,r))?(d.default.$.extend(u.options,e),u.__promise.then(i.resolve),u.__client++):((u=o.default.create(e,e.runtimeOrder)).__promise=i.promise(),u.once("ready",i.resolve),u.init(),n.add(u),u.__client=1),r&&(u.__standalone=r),u},this.getRuntime=function(){return u},this.disconnectRuntime=function(){u&&(u.__client--,u.__client<=0&&(n.remove(u),delete u.__promise,u.destroy()),u=null)},this.exec=function(){if(u){var e=d.default.slice(arguments)
return t&&e.unshift(t),u.exec.apply(this,e)}},this.getRuid=function(){return u&&u.uid},this.destroy=(e=this.destroy,function(){e&&e.apply(this,arguments),this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()})}u={},n={add:function(e){u[e.uid]=e},get:function(e,t){var r
if(e)return u[e]
for(r in u)if(!t||!u[r].__standalone)return u[r]
return null},remove:function(e){delete u[e.uid]}},i.default.installTo(l.prototype),t.default=l})
define("vue-weui/src/upload/3rd/webuploader/runtime/runtime.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/mediator.js"],function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=i(e("vue-weui/src/upload/3rd/webuploader/base.js")),o=i(e("vue-weui/src/upload/3rd/webuploader/mediator.js"))
function i(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t in e)if(e.hasOwnProperty(t))return t
return null}var a=n.default.$,d={}
function s(e){this.options=a.extend({container:document.body},e),this.uid=n.default.guid("rt_")}a.extend(s.prototype,{getContainer:function(){var e,t,r=this.options
return this._container?this._container:(e=a(r.container||document.body),(t=a(document.createElement("div"))).attr("id","rt_"+this.uid),t.css({position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),e.append(t),e.addClass("webuploader-container"),this._container=t,this._parent=e,t)},init:n.default.noop,exec:n.default.noop,destroy:function(){this._container&&this._container.remove(),this._parent&&this._parent.removeClass("webuploader-container"),this.off()}}),s.orders="html5,flash",s.addRuntime=function(e,t){d[e]=t},s.hasRuntime=function(e){return!!(e?d[e]:u(d))},s.create=function(e,t){var r
if(t=t||s.orders,a.each(t.split(/\s*,\s*/g),function(){if(d[this])return r=this,!1}),!(r=r||u(d)))throw new Error("Runtime Error")
return new d[r](e)},o.default.installTo(s.prototype),t.default=s})
define("vue-weui/src/upload/3rd/webuploader/widgets/widget.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js"],function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var l=r(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=r(e("vue-weui/src/upload/3rd/webuploader/uploader.js"))
function r(e){return e&&e.__esModule?e:{default:e}}var f=l.default.$,u=i.default.prototype._init,o=i.default.prototype.destroy,c={},s=[]
function a(e){this.owner=e,this.options=e.options}f.extend(a.prototype,{init:l.default.noop,invoke:function(e,t){var n=this.responseMap
return n&&e in n&&n[e]in this&&f.isFunction(this[n[e]])?this[n[e]].apply(this,t):c},request:function(){return this.owner.request.apply(this.owner,arguments)}}),f.extend(i.default.prototype,{_init:function(){var n=this,i=n._widgets=[],r=n.options.disableWidgets||""
return f.each(s,function(e,t){r&&~r.indexOf(t._name)||i.push(new t(n))}),u.apply(n,arguments)},request:function(e,t,n){var i,r,u,o=0,s=this._widgets,a=s&&s.length,d=[],p=[]
for(t=function(e){if(e){var t=e.length,n=f.type(e)
return 1===e.nodeType&&t||("array"===n||"function"!==n&&"string"!==n&&(0===t||"number"==typeof t&&0<t&&t-1 in e))}}(t)?t:[t];o<a;o++)(i=s[o].invoke(e,t))!==c&&(l.default.isPromise(i)?p.push(i):d.push(i))
return n||p.length?(r=l.default.when.apply(l.default,p))[u=r.pipe?"pipe":"then"](function(){var e=l.default.Deferred(),t=arguments
return 1===t.length&&(t=t[0]),setTimeout(function(){e.resolve(t)},1),e.promise()})[n?u:"done"](n||l.default.noop):d[0]},destroy:function(){o.apply(this,arguments),this._widgets=null}}),i.default.register=a.register=function(e,t){var n,i={init:"init",destroy:"destroy",name:"anonymous"}
return 1===arguments.length?(t=e,f.each(t,function(e){"_"!==e[0]&&"name"!==e?i[e.replace(/[A-Z]/g,"-$&").toLowerCase()]=e:"name"===e&&(i.name=t.name)})):i=f.extend(i,e),t.responseMap=i,(n=l.default.inherits(a,t))._name=i.name,s.push(n),n},i.default.unRegister=a.unRegister=function(e){if(e&&"anonymous"!==e)for(var t=s.length;t--;)s[t]._name===e&&s.splice(t,1)},t.default=a})
define("vue-weui/src/upload/3rd/webuploader/widgets/filepaste.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/lib/filepaste.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,u,r){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var s=t(e("vue-weui/src/upload/3rd/webuploader/base.js")),d=t(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),a=t(e("vue-weui/src/upload/3rd/webuploader/lib/filepaste.js"))
function t(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var i=s.default.$
u.default=d.default.register({name:"paste",init:function(e){if(e.paste&&"html5"===this.request("predict-runtime-type")){var u,r=this,d=s.default.Deferred(),t=i.extend({},{container:e.paste,accept:e.accept})
return this.paste=u=new a.default(t),u.once("ready",d.resolve),u.on("paste",function(e){r.owner.request("add-file",[e])}),u.init(),d.promise()}},destroy:function(){this.paste&&this.paste.destroy()}})})
define("vue-weui/src/upload/3rd/webuploader/lib/filepaste.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/mediator.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js"],function(e,u,t){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var r=o(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=o(e("vue-weui/src/upload/3rd/webuploader/mediator.js")),d=o(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js"))
function o(e){return e&&e.__esModule?e:{default:e}}var a=r.default.$
function l(e){(e=this.options=a.extend({},e)).container=a(e.container||document.body),d.default.call(this,"FilePaste")}r.default.inherits(d.default,{constructor:l,init:function(){var e=this
e.connectRuntime(e.options,function(){e.exec("init"),e.trigger("ready")})}}),i.default.installTo(l.prototype),u.default=l})
define("vue-weui/src/upload/3rd/webuploader/widgets/filepicker.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/lib/filepicker.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,i,u){"use strict"
Object.defineProperty(i,"__esModule",{value:!0})
var a=t(e("vue-weui/src/upload/3rd/webuploader/base.js")),r=t(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),c=t(e("vue-weui/src/upload/3rd/webuploader/lib/filepicker.js"))
function t(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var l=a.default.$
l.extend(r.default.options,{pick:null,accept:null}),i.default=r.default.register({name:"picker",init:function(e){return this.pickers=[],e.pick&&this.addBtn(e.pick)},refresh:function(){l.each(this.pickers,function(){this.refresh()})},addBtn:function(r){var t=this,d=t.options,s=d.accept,n=[]
if(r)return l.isPlainObject(r)||(r={id:r}),l(r.id).each(function(){var e,i,u
u=a.default.Deferred(),e=l.extend({},r,{accept:l.isPlainObject(s)?[s]:s,swf:d.swf,runtimeOrder:d.runtimeOrder,id:this}),(i=new c.default(e)).once("ready",u.resolve),i.on("select",function(e){t.owner.request("add-file",[e])}),i.on("dialogopen",function(){t.owner.trigger("dialogOpen",i.button)}),i.init(),t.pickers.push(i),n.push(u.promise())}),a.default.when.apply(a.default,n)},disable:function(){l.each(this.pickers,function(){this.disable()})},enable:function(){l.each(this.pickers,function(){this.enable()})},destroy:function(){l.each(this.pickers,function(){this.destroy()}),this.pickers=null}})})
define("vue-weui/src/upload/3rd/webuploader/lib/filepicker.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js","vue-weui/src/upload/3rd/webuploader/lib/file.js"],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var u=r(e("vue-weui/src/upload/3rd/webuploader/base.js")),n=r(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js")),l=r(e("vue-weui/src/upload/3rd/webuploader/lib/file.js"))
function r(e){return e&&e.__esModule?e:{default:e}}var s=u.default.$
function o(e){if((e=this.options=s.extend({},o.options,e)).container=s(e.id),!e.container.length)throw new Error("按钮指定错误")
e.innerHTML=e.innerHTML||e.label||e.container.html()||"",e.button=s(e.button||document.createElement("div")),e.button.html(e.innerHTML),e.container.html(e.button),n.default.call(this,"FilePicker",!0)}o.options={button:null,container:null,label:null,innerHTML:null,multiple:!0,accept:null,name:"file",style:"webuploader-pick"},u.default.inherits(n.default,{constructor:o,init:function(){var i=this,n=i.options,r=n.button,o=n.style
o&&r.addClass("webuploader-pick"),i.on("all",function(e){var t
switch(e){case"mouseenter":o&&r.addClass("webuploader-pick-hover")
break
case"mouseleave":o&&r.removeClass("webuploader-pick-hover")
break
case"change":t=i.exec("getFiles"),i.trigger("select",s.map(t,function(e){return(e=new l.default(i.getRuid(),e))._refer=n.container,e}),n.container)}}),i.connectRuntime(n,function(){i.refresh(),i.exec("init",n),i.trigger("ready")}),this._resizeHandler=u.default.bindFn(this.refresh,this),s(window).on("resize",this._resizeHandler)},refresh:function(){var e=this.getRuntime().getContainer(),t=this.options.button,i=t.outerWidth?t.outerWidth():t.width(),n=t.outerHeight?t.outerHeight():t.height(),r=t.offset()
i&&n&&e.css({bottom:"auto",right:"auto",width:i+"px",height:n+"px"}).offset(r)},enable:function(){this.options.button.removeClass("webuploader-pick-disable"),this.refresh()},disable:function(){var e=this.options.button
this.getRuntime().getContainer().css({top:"-99999px"}),e.addClass("webuploader-pick-disable")},destroy:function(){var e=this.options.button
s(window).off("resize",this._resizeHandler),e.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")}}),t.default=o})
define("vue-weui/src/upload/3rd/webuploader/lib/file.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/lib/blob.js"],function(e,a,u){"use strict"
Object.defineProperty(a,"__esModule",{value:!0})
var t=d(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=d(e("vue-weui/src/upload/3rd/webuploader/lib/blob.js"))
function d(e){return e&&e.__esModule?e:{default:e}}var l=1,r=/\.([^.]+)$/
a.default=t.default.inherits(i.default,function(e,a){var u
this.name=a.name||"untitled"+l++,!(u=r.exec(a.name)?RegExp.$1.toLowerCase():"")&&a.type&&(u=/\/(jpg|jpeg|png|gif|bmp)$/i.exec(a.type)?RegExp.$1.toLowerCase():"",this.name+="."+u),this.ext=u,this.lastModifiedDate=a.lastModifiedDate||(new Date).toLocaleString(),i.default.apply(this,arguments)})})
define("vue-weui/src/upload/3rd/webuploader/lib/blob.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js"],function(e,t,u){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=r(e("vue-weui/src/upload/3rd/webuploader/base.js")),s=r(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js"))
function r(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var u=this
u.source=t,u.ruid=e,this.size=t.size||0,!t.type&&this.ext&&~"jpg,jpeg,png,gif,bmp".indexOf(this.ext)?this.type="image/"+("jpg"===this.ext?"jpeg":this.ext):this.type=t.type||"application/octet-stream",s.default.call(u,"Blob"),this.uid=t.uid||this.uid,e&&u.connectRuntime(e)}i.default.inherits(s.default,{constructor:d,slice:function(e,t){return this.exec("slice",e,t)},getSource:function(){return this.source}}),t.default=d})
define("vue-weui/src/upload/3rd/webuploader/widgets/image.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/lib/image.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,i,o){"use strict"
Object.defineProperty(i,"__esModule",{value:!0})
var a=r(e("vue-weui/src/upload/3rd/webuploader/base.js")),t=r(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),n=r(e("vue-weui/src/upload/3rd/webuploader/lib/image.js"))
function r(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var u,s,d,l=a.default.$
function f(){for(var e;d.length&&s<5242880;)e=d.shift(),s+=e[0],e[1]()}s=0,d=[],u=function(e,i,o){d.push([i,o]),e.once("destroy",function(){s-=i,setTimeout(f,1)}),setTimeout(f,1)},l.extend(t.default.options,{thumb:{width:110,height:110,quality:70,allowMagnify:!0,crop:!0,preserveHeaders:!1,type:"image/jpeg"},compress:{width:1600,height:1600,quality:90,allowMagnify:!1,crop:!1,preserveHeaders:!0}}),i.default=t.default.register({name:"image",makeThumb:function(e,i,o,t){var r,s;(e=this.request("get-file",e)).type.match(/^image/)?(r=l.extend({},this.options.thumb),l.isPlainObject(o)&&(r=l.extend(r,o),o=null),o=o||r.width,t=t||r.height,(s=new n.default(r)).once("load",function(){e._info=e._info||s.info(),e._meta=e._meta||s.meta(),o<=1&&0<o&&(o=e._info.width*o),t<=1&&0<t&&(t=e._info.height*t),s.resize(o,t)}),s.once("complete",function(){i(!1,s.getAsDataUrl(r.type)),s.destroy()}),s.once("error",function(e){i(e||!0),s.destroy()}),u(s,e.source.size,function(){e._info&&s.info(e._info),e._meta&&s.meta(e._meta),s.loadFromBlob(e.source)})):i(!0)},beforeSendFile:function(o){var t,r,s=this.options.compress||this.options.resize,e=s&&s.compressSize||0,u=s&&s.noCompressIfLarger||!1
if(o=this.request("get-file",o),s&&~"image/jpeg,image/jpg".indexOf(o.type)&&!(o.size<e)&&!o._compressed)return s=l.extend({},s),r=a.default.Deferred(),t=new n.default(s),r.always(function(){t.destroy(),t=null}),t.once("error",r.reject),t.once("load",function(){var e=s.width,i=s.height
o._info=o._info||t.info(),o._meta=o._meta||t.meta(),e<=1&&0<e&&(e=o._info.width*e),i<=1&&0<i&&(i=o._info.height*i),t.resize(e,i)}),t.once("complete",function(){var e,i
try{e=t.getAsBlob(s.type),i=o.size,(!u||e.size<i)&&(o.source=e,o.size=e.size,o.trigger("resize",e.size,i)),o._compressed=!0,r.resolve()}catch(e){r.resolve()}}),o._info&&t.info(o._info),o._meta&&t.meta(o._meta),t.loadFromBlob(o.source),r.promise()}})})
define("vue-weui/src/upload/3rd/webuploader/lib/image.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js","vue-weui/src/upload/3rd/webuploader/lib/blob.js"],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var u=n(e("vue-weui/src/upload/3rd/webuploader/base.js")),o=n(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js")),r=n(e("vue-weui/src/upload/3rd/webuploader/lib/blob.js"))
function n(e){return e&&e.__esModule?e:{default:e}}var s=u.default.$
function a(e){this.options=s.extend({},a.options,e),o.default.call(this,"Image"),this.on("load",function(){this._info=this.exec("info"),this._meta=this.exec("meta")})}a.options={quality:90,crop:!1,preserveHeaders:!1,allowMagnify:!1},u.default.inherits(o.default,{constructor:a,info:function(e){return e?(this._info=e,this):this._info},meta:function(e){return e?(this._meta=e,this):this._meta},loadFromBlob:function(e){var t=this,i=e.getRuid()
this.connectRuntime(i,function(){t.exec("init",t.options),t.exec("loadFromBlob",e)})},resize:function(){var e=u.default.slice(arguments)
return this.exec.apply(this,["resize"].concat(e))},crop:function(){var e=u.default.slice(arguments)
return this.exec.apply(this,["crop"].concat(e))},getAsDataUrl:function(e){return this.exec("getAsDataUrl",e)},getAsBlob:function(e){var t=this.exec("getAsBlob",e)
return new r.default(this.getRuid(),t)}}),t.default=a})
