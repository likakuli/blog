define("pages/modules/faq/faq_hover/faq_hover.js",["pages/modules/faq/faq_hover/faq_hover.tpl.js"],function(e,o,t){"use strict"
var n=e("pages/modules/faq/faq_hover/faq_hover.tpl.js")
t.exports=Vue.component("mp-faq-hover",{name:"mp-faq-hover",template:n,props:{qaSrc:{type:String,default:"https://mp.weixin.qq.com/webpoc/customerService?type=15"},newKf:{type:Boolean,default:!1}},data:function(){return{qrCodeShow:!1,questShow:!0,timer:null}},methods:{feedbackClick:function(){window.openUrl("https://developers.weixin.qq.com/community/minihome/question/1277775808983138305?mockCommonUse=1",{},!0)},showQuestQrcode:function(){this.newKf?window.openUrl(this.qaSrc,{},!0):(this.qrCodeShow=!0,this.questShow=!1)},mouseover:function(){this.timer&&clearTimeout(this.timer)},mouseout:function(){var e=this
this.timer=setTimeout(function(){e.questShow=!0,e.qrCodeShow=!1},300,!0)}},computed:{onlineQAText:function(){return this.newKf?"向在线客服咨询问题":"在手机上咨询智能客服"}}})})
define("pages/modules/faq/faq_hover/faq_hover.tpl.js",[],function(e,i,t){return'<div>    <div class="weui-desktop-online-faq__panel__wrp" v-show="questShow" style="padding-right:18px">    <div class="weui-desktop-online-faq__panel" style="border-radius:4px">        <div class="weui-desktop-online-faq__panel_content" @click="feedbackClick">          <div class="weui-desktop-online-faq__panel_content_h">            <span>问题反馈</span>            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="10" viewBox="0 0 6 10">              <defs>              <rect id="3e21b119-3d56-439a-949e-ed007be0980f-b" width="166" height="135" x="0" y="0" rx="2"/>              <filter id="3e21b119-3d56-439a-949e-ed007be0980f-a" width="119.3%" height="123.7%" x="-9.6%" y="-10.4%" filterUnits="objectBoundingBox">              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.894117647   0 0 0 0 0.909803922   0 0 0 0 0.921568627  0 0 0 1 0"/>              </filter>              </defs>              <g fill="none" fill-rule="evenodd" transform="translate(-1536 -561)">              <g transform="translate(1390 541)">              <use xlink:href="#3e21b119-3d56-439a-949e-ed007be0980f-b"/>              <path stroke="#353535" stroke-linecap="round" stroke-linejoin="round" d="M147 21l4 4.011L147 29"/>              </g>              </g>            </svg>          </div>          <div class="weui-desktop-online-faq__panel_content_t">向微信公众平台反馈意见</div>        </div>        <i class="divide"></i>        <div class="weui-desktop-online-faq__panel_content" @click="showQuestQrcode">          <div class="weui-desktop-online-faq__panel_content_h">            <span>在线客服</span>            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="6" height="10" viewBox="0 0 6 10">              <defs>              <rect id="3e21b119-3d56-439a-949e-ed007be0980f-b" width="166" height="135" x="0" y="0" rx="2"/>              <filter id="3e21b119-3d56-439a-949e-ed007be0980f-a" width="119.3%" height="123.7%" x="-9.6%" y="-10.4%" filterUnits="objectBoundingBox">              <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1"/>              <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="5"/>              <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.894117647   0 0 0 0 0.909803922   0 0 0 0 0.921568627  0 0 0 1 0"/>              </filter>              </defs>              <g fill="none" fill-rule="evenodd" transform="translate(-1536 -561)">              <g transform="translate(1390 541)">              <use xlink:href="#3e21b119-3d56-439a-949e-ed007be0980f-b"/>              <path stroke="#353535" stroke-linecap="round" stroke-linejoin="round" d="M147 21l4 4.011L147 29"/>              </g>              </g>            </svg>          </div>          <div class="weui-desktop-online-faq__panel_content_t">{{onlineQAText}}</div>        </div>    </div>  </div>  <div v-show="qrCodeShow" v-on:mouseover="mouseover" v-on:mouseout="mouseout" class="weui-desktop-online-faq__panel__wrp">    <div class="weui-desktop-online-faq__panel weui-desktop-online-faq_qrcode">        <img src="/mpres/htmledition/images/pic/common/pic_kf_qrcode.jpg" alt="">        <strong>扫码提问</strong>    </div>  </div></div>'})
define("pages/modules/utils/ajax.js",[],function(t,e,o){"use strict"
function l(){}var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
o.exports=function(o){var t=(o.type||"GET").toUpperCase(),e=o.url,r=void 0===o.async||o.async,n=new XMLHttpRequest
n.donotHock=!!o.donotHock
var a=null,c=null,s=l,u=l,i=l
if(o.success&&(s=function(t){try{o.success(t)}catch(t){throw t}}),o.error&&(u=function(t,e){try{o.error(t,e)}catch(t){throw t}}),o.complete&&(i=function(){try{o.complete()}catch(t){throw t}}),"object"===f(o.data)){var y=o.data
for(var p in c=[],y)Object.prototype.hasOwnProperty.call(y,p)&&c.push(p+"="+encodeURIComponent(y[p]))
c=c.join("&")}else c="string"==typeof o.data?o.data:null
"GET"===t&&c&&(e+=(0<=e.indexOf("?")?"&":"?")+c),n.open(t,e,r),n.onerror=function(){u(n,"error"),a&&clearTimeout(a),i()},n.onreadystatechange=function(){if(3===n.readyState&&o.received&&o.received(n),4===n.readyState){n.onreadystatechange=null
var t=n.status
if(200<=t&&t<400)try{var e=n.responseText
if("json"===o.dataType)try{e=JSON.parse(e)}catch(t){return void u(n,"parsererror")}s(e)}catch(t){throw t}else u(n,"error")
a&&clearTimeout(a),i(),i=l}},"POST"===t&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),o.crossDomain||n.setRequestHeader("X-Requested-With","XMLHttpRequest"),void 0!==o.timeout&&(a=setTimeout(function(){n.abort("timeout"),u(n,"timeout"),i(),i=l},o.timeout))
try{n.send(c)}catch(t){u(n,"timeout")}}})
define("pages/modules/utils/get_custom_service.js",["pages/modules/utils/cgi.js"],function(e,t,s){"use strict"
var c=e("pages/modules/utils/cgi.js")
s.exports=function(){return new Promise(function(t){var e=localStorage.getItem("custom_service_flag")
e?t("true"===e):c.get({url:"/webpoc/cgi/chat/checkChatPermission?type=15&grayType=random"},function(e){0===e.ret&&(t("true"===e.can.toString()),localStorage.setItem("custom_service_flag",e.can))})})}})
define("pages/modules/utils/cgi.js",["pages/modules/utils/ajax.js","pages/modules/utils/str_util.js","pages/modules/utils/object.js","pages/modules/utils/url.js"],function(e,r,t){"use strict"
function a(e){for(var r=e||{},t=Object.keys(m),o=0;o<t.length;o++)r[t[o]]=m[t[o]]
return r}function n(e,r){var t=-1!==location.href.indexOf("/cgi-bin/home")&&(-1!==r.url.indexOf("/misc/safeassistant")||-1!==r.url.indexOf("/safe/safeuuid")),o=11
switch(e){case"timeout":o=7
break
case"error":o=8
break
case"notmodified":o=9
break
case"parsererror":o=10
break
default:o=11}for(var a=["lang","random","f","ajax","token"],n=0;n<a.length;++n){var s=a[n]
r.data&&r.data[s]&&delete r.data[s]}o+=t?100:0
var i=""
i=/selfcheck/.test(r.url)?r.data&&r.data.AppMsgId:JSON.stringify(r.data).substr(0,50),u({url:"/misc/jslog?1=1",data:{content:l.format("[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]",{uin:p.uin,useragent:window.navigator.userAgent,page:location.href,url:r.url,param:i,info:e}),id:o,level:"error"},type:"POST"}),u({url:"/misc/jslog?1=1",data:{content:l.format("[fakeid={uin}] [xhr] [url={url}] [param={param}] [info={info}] [useragent={useragent}] [page={page}]",{uin:p.uin,useragent:window.navigator.userAgent,page:location.href,url:r.url,param:i,info:e}),id:6+(t?100:0),level:"error"},type:"POST"}),"timeout"!==e||r.notShowTimeoutErr||Vue.prototype.$tipsErr("你的网络环境较差，请稍后重试")}function s(e,n){var s=e
return"function"!=typeof s&&(s=function(){}),e=function(e){try{var r=s.toString(),t={uin:p.uin||"0",id:"64430",key:"0",url:"",location:encodeURIComponent(window.location.href)||"",ret:e&&e.base_resp&&e.base_resp.ret||"undefined"}
if(e&&e.base_resp&&0!==e.base_resp.ret&&(r.indexOf("handleRet")<0&&r.indexOf(e.base_resp.ret)<0&&((new Image).src=l.format("https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}",{uin:t.uin,url:t.url||t.location,id:138,msg:encodeURIComponent("ret="+t.ret+"|idkey="+t.id+":"+t.key)})),void 0!==window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs)){var o=""
if(-1!==n.indexOf("?")){o=n.substr(0,n.indexOf("?"))
var a=c.parseQuery(n)
a.action&&(o+="?action="+a.action)}else o=n
window.WX_BJ_REPORT.BadJs.report(o,"ret="+e.base_resp.ret,{mid:window.PAGE_MID,view:"web_retcode"})}}catch(e){console.error(e)}s(e)}}var i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]
for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u=e("pages/modules/utils/ajax.js"),l=e("pages/modules/utils/str_util.js"),d=e("pages/modules/utils/object.js"),c=e("pages/modules/utils/url.js"),p=window.wx.commonData?window.wx.commonData.data:window.wx.data,m={token:p.t,lang:p.lang,f:"json",ajax:"1"},g={0:"恭喜你，操作成功！","-1":"系统错误，请稍后尝试。",200002:"参数错误，请核对参数后重试。",200003:"登录超时，请重新登录。",200004:"请求页面的域名没有授权。",200005:"请求方式错误，请确认请求方式后重试。",200006:"表单名称验证出错，请核对表单名称后重试。",200007:"登录超时，请重新登录。",200040:"登录超时，请重新登录。"},o={updateCommonPostData:function(){m={token:p.data.t,lang:p.lang,f:"json",ajax:"1"}},get:function(t,e,o,r){t.data=a(t.data),t.success=t.success||e,t.complete=t.complete||r,o=t.error||o,t.error=function(e,r){n(r,t),o&&o(e,r)},t.dataType="json",t.success=s(t.success,t.url),u(t)},post:function(t,e,o,r){t.type="POST",t.data=a(t.data),t.success=t.success||e,t.complete=t.complete||r,o=t.error||o,t.error=function(e,r){n(r,t),o&&o(e,r)},t.dataType="json",t.success=s(t.success,t.url),u(t)},handleRet:function(e,r){console.log(e,r)
var t={msg:r.msg||"系统繁忙，请稍后尝试"}
if(e&&e.base_resp&&e.base_resp.ret){r=d.clone(r,!0),(r=i({uin:p.uin||"0",id:"64430",key:"0",url:"",location:encodeURIComponent(window.location.href)||"",ret:e.base_resp.ret,showMsg:!0,msg:"系统繁忙，请稍后尝试"},r)).url=encodeURIComponent(r.url)
var o=g[r.ret]
o?(r.showMsg&&Vue.prototype.$tipsErr(o),t.msg=o):((new Image).src=l.format("/mp/unknow_ret_report?uin={uin}&id={id}&key={key}&url={url}&location={location}&ret={ret}&method=get&action=report",r),r.showMsg&&Vue.prototype.$tipsErr(r.msg),(new Image).src=l.format("/mp/unknow_ret_report?uin={uin}&id=64430&key=126&url={url}&location={location}&ret={ret}&method=get&action=report",r),(new Image).src=l.format("https://badjs.weixinbridge.com/badjs?level=4&uin={uin}&id={id}&msg={msg}&from={url}",{uin:r.uin,url:r.url||r.location,id:138,msg:encodeURIComponent("ret="+r.ret+"|idkey="+r.id+":"+r.key)}))}return t}}
t.exports=o})
define("pages/modules/utils/str_util.js",[],function(t,n,e){"use strict"
e.exports={escape2Html:function(t){var e={lt:"<",gt:">",nbsp:" ",amp:"&",quot:'"'}
return t.replace(/&(lt|gt|nbsp|amp|quot);/gi,function(t,n){return e[n]})},format:function(t,e){return t.replace(/\{(\w+)\}/g,function(t,n){return void 0!==e[n]?e[n]:t})},sprintf:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e]
var r=void 0,i=n[0]||"",o=void 0,u=void 0,c=n.length-1
if(c<1)return i
for(r=1;r<1+c;)i=i.replace(/%s/,"{#"+r+"#}"),r++
for(i.replace("%s",""),r=1;void 0!==(o=n[r]);)u=new RegExp("{#"+r+"#}","g"),i=i.replace(u,o),r++
return i},text:function(t){return t.replace(/<\/?[^>]*\/?>/g,"")},len:function(t){return t.replace(/[^\x00-\xff]/g,"**").length},truncate:function(t,n,e){var r=n||30,i=Object.isUndefined(e)?"...":e
return t.length>r?t.slice(0,r-i.length)+i:String(t)},trim:String.prototype.trim||function(t,n){return!0===n?t.replace(/^\s+/,""):!1===n?t.replace(/\s+$/,""):t.replace(/^\s+/,"").replace(/\s+$/,"")},html:function(t,n){var e=void 0
e=!1===n?["&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&amp;","&"]:["&","&amp;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;"]
for(var r=t,i=0;i<e.length;i+=2)r=r.replace(new RegExp(e[i],"g"),e[1+i])
return r},has:function(t,n){return-1<t.indexOf(n)},startsWith:function(t,n){return 0===t.lastIndexOf(n,0)},endsWith:function(t,n){var e=t.length-n.length
return 0<=e&&t.indexOf(n,e)===e},param:function(t,e,n){if("function"!=typeof t.split)return null
var r=t.split(n||"&"),i={}
return r.each(function(t){var n=t.split("=")
2===n.length&&n[0]&&n[1]&&(!0===e?i[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):i[n[0]]=n[1])}),i},empty:function(t){return""===t},blank:function(t){return/^\s*$/.test(t)},bytes:function(t){for(var n=0,e=void 0,r=0;e=t.charAt(n++);)r+=e.charCodeAt().toString(16).length/2
return r}}})
define("pages/modules/utils/object.js",[],function(n,t,e){"use strict"
var r="[object Array]",i="[object Object]",o=Object.prototype.toString,u=Object.prototype.hasOwnProperty
function c(n,t){return u.call(n,t)}function f(n,t){for(var e in t)c(t,e)&&(n[e]=t[e])
return n}function a(n){return o.call(n)===i}function s(n){return o.call(n)===r}var l=null
l="function"==typeof Number.isFinite?Number.isFinite.bind(Number):"function"==typeof window.isFinite?window.isFinite:function(){return!0}
var b=null
b="function"==typeof Object.assign?Object.assign:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e]
if(null==t[0])throw new TypeError("Cannot convert undefined or null to object")
for(var r=Object(t[0]),i=1;i<t.length;i++){var o=t[i]
if(null!=o)for(var u in o)c(o,u)&&(r[u]=o[u])}return r},e.exports={assign:b,extend:f,clone:function n(t,e){var r=void 0
if(!0!==e)return f({},t)
if(s(t))for(var i in r=[],t)c(t,i)&&(a(t[i])?r.push(n(t[i],!0)):r.push(t[i]))
else for(var o in r={},t)c(t,o)&&(a(t[o])?r[o]=n(t[o],!0):r[o]=t[o])
return r},isObject:a,isElement:function(n){return!(!this||1!==n.nodeType)},isArray:s,isFunction:function(n){return"function"==typeof n},isString:function(n){return"[object String]"===o.call(n)},isBoolean:function(n){return"[object Boolean]"===o.call(n)},isNumber:function(n){return"[object Number]"===o.call(n)},isDate:function(n){return"[object Date]"===o.call(n)},isUndefined:function(n){return void 0===n},isRepExp:function(n){return"[object RegExp]"===o.call(n)},isFinite:l,param:function(n,t){var e=[]
for(var r in n)c(n,r)&&(!0===t?e.push([encodeURIComponent(r),"=",encodeURIComponent(n[r]),"&"].join("")):e.push([r,"=",n[r],"&"].join("")))
return e.join("").slice(0,-1)},each:function(n,t){if(void 0!==t)for(var e in n)if(c(n,e)&&!1===t(n[e],e))break},hasOwn:c}})
define("pages/modules/utils/url.js",[],function(r,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.fullUrl=function(r){if(!r)return""
if(0===r.indexOf("javasript:"))return r
var t=wx.commonData.data.param
return-1!==r.indexOf("?")?r+t:r+"?1=1"+t},t.addBaseParm=function(r){if(!r)return""
if(0===r.indexOf("javasript:"))return r
var t=window.wx.commonData.data,a=r.charAt(r.length-1)
"?"!==a&&(-1===r.indexOf("?")?r+="?":"&"!==a&&(r+="&"))
return r+"token="+t.t+"&lang="+t.lang},t.parseQuery=function(r){var t={},a=r.match(/[?&]([^=&#]+)=([^&#]*)/g)
if(a)for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var n=a[e].split("="),i=n[0].substr(1),u=n[1]
t[i]?t[i]=[].concat(t[i],u):t[i]=u}return t}})
define("pages/modules/faq/faq.tpl.js",[],function(e,i,s){return'<div class="weui-desktop-online-faq__wrp" v-if="faqShow">  <div class="weui-desktop-online-faq">    <div class="weui-desktop-online-faq__inner">      <div class="weui-desktop-online-faq__switch" style="border-radius: 4px">                <div class="weui-desktop-online-faq__switch_content" v-if="mpAppShow">        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.758" viewBox="0 0 24 22.758">          <path fill="#42C642" fill-rule="evenodd" d="M19.502 4.126c.04.06.152.243.437.733-2.647-1.213-5.971-1.143-8.913.467-1.2.656-2.22 1.506-3.038 2.478-1.1 1.31-1.873 2.877-2.138 4.45 0 .003 0-.006 0 0-.971-1.19-1.562-2.459-1.757-3.774-.284-1.914.301-3.87 1.649-5.51C7.76.515 10.292 0 12.059 0c2.951 0 5.664 1.504 7.443 4.126zm-1.718 12.14c.114-.085.225-.171.333-.263-.005.059-.014.117-.022.175a7.56 7.56 0 0 1-.94 2.82 7.469 7.469 0 0 1-5.886 3.76h-1.147C1.1 22.74-2.588 16.302 1.932 8.436c0 0 .12-.215.308-.545.006.288.03.577.065.867.297 2.473 1.631 4.962 3.886 6.782.454.366.927.69 1.412.972a.68.68 0 0 1 .26.493.817.817 0 0 1-.023.22c-.133.655-.33 1.601-.34 1.65-.016.083-.044.17-.04.254.012.19.174.333.362.321a.38.38 0 0 0 .193-.075l2.16-1.433c.164-.108.338-.178.534-.19a1.02 1.02 0 0 1 .304.027l.018-.003c2.462.443 4.92-.062 6.753-1.51zm4.685-7.552c2.641 3.425 1.78 8.512-1.925 11.363a8.994 8.994 0 0 1-3.252 1.587c2.508-2.272 3.449-6.1 2.076-9.638-1.138-2.935-3.588-4.946-6.323-5.54 3.37-1.4 7.247-.595 9.424 2.228z"/>        </svg>          <div class="text">订阅号助手</div>          <div class="weui-desktop-online-faq__panel__wrp">            <div class="weui-desktop-online-faq__panel weui-desktop-online-faq_qrcode">                <img src="/mpres/zh_CN/htmledition/pages/home/index/pic_mp_app.png" alt="">                <strong>扫一扫下载订阅号助手，用手机发文章</strong>            </div>          </div>        </div>                <div class="weui-desktop-online-faq__switch_content" style="border-radius:4px">        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">          <path fill="#4C4D4E" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6zM9 9.707C9.077 8.2 10.081 7 12.042 7 13.8 7 15 8.088 15 9.526c0 1.095-.565 1.87-1.458 2.407-.886.523-1.137.914-1.137 1.646v.454h-1.221v-.642c-.007-.921.44-1.55 1.395-2.121.81-.496 1.123-.935 1.123-1.682 0-.865-.67-1.5-1.709-1.5-1.053 0-1.723.621-1.8 1.619H9zm2.798 7.507a.786.786 0 0 1-.796-.795c0-.454.35-.796.796-.796.453 0 .795.342.795.796a.782.782 0 0 1-.795.795z"/>        </svg>          <div class="text" style="font-size: 14px;color: #4c4d4e;line-height:19.6px">遇到问题</div>          <mp-faq-hover :newKf="newKf" :qaSrc="\'https://mp.weixin.qq.com/webpoc/customerService?type=13\'"/>        </div>              </div>          </div>      </div></div>'})
define("pages/modules/announcement/announcement.js",["vue-weui/src/msg/msg.js","pages/modules/announcement/announcement.css.js"],function(n,e,t){"use strict"
n("vue-weui/src/msg/msg.js"),n("pages/modules/announcement/announcement.css.js")
var s={}
document.querySelector("#_announcement")&&(s=new Vue({el:"#_announcement",data:{list:window.wx.announcement.announcement_list},mounted:function(){var e=this
this.list=this.list.map(function(n){return{type:n.type,content:e.htmlDecode(n.content).replace(/\f\r\t\v/g,"").replace(/\n/g,"<br>")}})
var n=window.wx.commonData.load_done
""!==n&&0==+n&&this.list.push({type:0,content:"后台数据系统统计延迟，请稍后查看相关数据"})},methods:{htmlDecode:function(n){var e=document.createElement("div")
return e.innerHTML=n.replace(/&nbsp;/g," "),e.innerText||e.textContent}}})),t.exports=s})
define("pages/modules/announcement/announcement.css.js", [], function (require, exports, module){module.exports = "#_announcement {  margin: 6px 0 20px 0;}";});define("pages/modules/mp_header/mp_header.js",["vue-weui/src/operation_group/operation_group.js","pages/modules/utils/url.js"],function(o,t,n){"use strict"
o("vue-weui/src/operation_group/operation_group.js")
var i=o("pages/modules/utils/url.js").fullUrl
if(window.document&&document.getElementById("mp_header")){var e=void 0
if(16===window.wx.commonData.data.open_app_type){var a=void 0
a=0!==window.wx.commonData.data.realnameType?"/acct/wxverifyorder?action=index":1===window.wx.commonData.data.isPersonVerify?"/cgi-bin/personverify?action=get_apply_form":"/cgi-bin/settingpage?t=setting/index&action=index",e=[{label:"帐号详情",value:i("/cgi-bin/settingpage?t=setting/index&action=index"),icon:window.wx.commonData.path.icon.account_user},{label:"认证详情",value:i(a),icon:window.wx.commonData.path.icon.account_wxverify},{label:"功能设置",value:i("/cgi-bin/settingpage?t=setting/function&action=function"),icon:window.wx.commonData.path.icon.account_setting},{label:"退出登录",value:i("/cgi-bin/logout?t=wxm-logout"),icon:window.wx.commonData.path.icon.account_logout}]}else e=[{label:"退出登录",value:i("/cgi-bin/logout?t=wxm-logout"),icon:window.wx.commonData.path.icon.account_logout}]
var c=new Vue({el:"#mp_header",data:{options:e,showMenu:!1},mounted:function(){if(1===window.wx.commonData.data.disable_head_box)try{this.data.options=[this.data.options.pop()]}catch(o){this.options=[this.options.pop()]}var o=document.getElementById("mp_header_account")
o&&(o.style.visibility="visible")},methods:{selectOperation:function(o){window.openUrl(o.value)},onAccountOprShow:function(){window.top.postMessage("showOprGroup","*"),this.hasShowOpr=!0},onAccountOprHide:function(){this.hasShowOpr&&window.top.postMessage("hideOprGroup","*"),this.hasShowOpr=!1}}})
n.exports=c}})
define("pages/modules/base/polyfill/symbol.js",[],function(e,o,t){"use strict"
if("undefined"==typeof Symbol){window.Symbol=function(){}
var n="__symbol_iterator_key"
Symbol.iterator=n,Array.prototype[n]=function(){var e=this,o=0
return{next:function(){return{done:e.length===o,value:e.length===o?void 0:e[o++]}}}}}})
define("pages/modules/base/polyfill/promise.js",[],function(t,n,e){"use strict"
var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}
!function(t){var n,e=t.Promise
if(!(e&&"resolve"in e&&"reject"in e&&"all"in e&&"race"in e&&(new e(function(t){n=t}),"function"==typeof n))){t.Promise=P
var o,r="pending",i="sealed",f="fulfilled",c="rejected",u=function(){},a="undefined"!=typeof setImmediate?setImmediate:setTimeout,s=[]
P.prototype={constructor:P,state_:r,then_:null,data_:void 0,then:function(t,n){var e={owner:this,then:new this.constructor(u),fulfilled:t,rejected:n}
return this.state_===f||this.state_===c?p(d,e):this.then_.push(e),e.then},catch:function(t){return this.then(null,t)}},P.all=function(c){if(!l(c))throw new TypeError("You must pass an array to Promise.all().")
return new this(function(e,t){var o=[],r=0
function n(n){return r++,function(t){o[n]=t,--r||e(o)}}for(var i,f=0;f<c.length;f++)(i=c[f])&&"function"==typeof i.then?i.then(n(f),t):o[f]=i
r||e(o)})},P.race=function(r){if(!l(r))throw new TypeError("You must pass an array to Promise.race().")
return new this(function(t,n){for(var e,o=0;o<r.length;o++)(e=r[o])&&"function"==typeof e.then?e.then(t,n):t(e)})},P.resolve=function(n){return n&&"object"===(void 0===n?"undefined":S(n))&&n.constructor===this?n:new this(function(t){t(n)})},P.reject=function(e){return new this(function(t,n){n(e)})}}function l(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(){for(var t=0;t<s.length;t++)s[t][0](s[t][1])
o=!(s=[])}function p(t,n){s.push([t,n]),o||(o=!0,a(h,0))}function y(t,n){function e(t){_(n,t)}try{t(function(t){w(n,t)},e)}catch(t){e(t)}}function d(t){var n=t.owner,e=n.state_,o=n.data_,r=t[e],i=t.then
if("function"==typeof r){e=f
try{o=r(o)}catch(t){_(i,t)}}m(i,o)||(e===f&&w(i,o),e===c&&_(i,o))}function m(n,e){var o
try{if(n===e)throw new TypeError("A promises callback cannot return that same promise.")
if(e&&("function"==typeof e||"object"===(void 0===e?"undefined":S(e)))){var t=e.then
if("function"==typeof t)return t.call(e,function(t){o||(o=!0,(e!==t?w:v)(n,t))},function(t){o||(o=!0,_(n,t))}),1}}catch(t){return o||_(n,t),1}}function w(t,n){t!==n&&m(t,n)||v(t,n)}function v(t,n){t.state_===r&&(t.state_=i,t.data_=n,p(g,t))}function _(t,n){t.state_===r&&(t.state_=i,t.data_=n,p(j,t))}function b(t){var n=t.then_
t.then_=void 0
for(var e=0;e<n.length;e++)d(n[e])}function g(t){t.state_=f,b(t)}function j(t){t.state_=c,b(t)}function P(t){if("function"!=typeof t)throw new TypeError("Promise constructor takes a function argument")
if(this instanceof P==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
this.then_=[],y(t,this)}}("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:void 0)})
define("pages/modules/base/polyfill/array.js",[],function(r,e,t){"use strict"
Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined')
var t=Object(this),n=t.length>>>0
if("function"!=typeof r)throw new TypeError("predicate must be a function")
for(var i=e,o=0;o<n;){var f=t[o]
if(r.call(i,f,o,t))return o
o++}return-1}}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined')
var t=Object(this),n=t.length>>>0
if("function"!=typeof r)throw new TypeError("predicate must be a function")
for(var i=e,o=0;o<n;){var f=t[o]
if(r.call(i,f,o,t))return f
o++}}}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(r,e){if(null==this)throw new TypeError('"this" is null or not defined')
var t=Object(this),n=t.length>>>0
if(0==n)return!1
for(var i=0|e,o=Math.max(0<=i?i:n-Math.abs(i),0);o<n;){if(t[o]===r)return!0
o++}return!1}})})
define("pages/modules/base/polyfill/string.js",[],function(t,r,e){"use strict"
function n(t,r){if(null==this)throw TypeError()
var e=String(this)
if(t&&"[object RegExp]"==u.call(t))throw TypeError()
var n=e.length,i=String(t),o=i.length,a=1<arguments.length?r:void 0,h=a?Number(a):0
h!=h&&(h=0)
var s=Math.min(Math.max(h,0),n)
if(n<o+s)return!1
for(var l=-1;++l<o;)if(e.charCodeAt(s+l)!=i.charCodeAt(l))return!1
return!0}var i,u
String.prototype.includes||(String.prototype.includes=function(t,r){return"number"!=typeof r&&(r=0),!(r+t.length>this.length)&&-1!==this.indexOf(t,r)}),String.prototype.startsWith||(i=function(){try{var t={},r=Object.defineProperty,e=r(t,t,t)&&r}catch(t){}return e}(),u={}.toString,i?i(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n)})
