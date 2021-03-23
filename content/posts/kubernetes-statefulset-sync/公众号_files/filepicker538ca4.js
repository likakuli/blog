define("vue-weui/src/upload/3rd/webuploader/runtime/html5/filepaste.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js","vue-weui/src/upload/3rd/webuploader/lib/file.js"],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var l=u(e("vue-weui/src/upload/3rd/webuploader/base.js")),r=u(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js")),n=u(e("vue-weui/src/upload/3rd/webuploader/lib/file.js"))
function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.register("FilePaste",{init:function(){var e,t,i,r,u=this.options,a=this.elem=u.container,s=".*"
if(u.accept){for(e=[],t=0,i=u.accept.length;t<i;t++)(r=u.accept[t].mimeTypes)&&e.push(r)
e.length&&(s=(s=e.join(",")).replace(/,/g,"|").replace(/\*/g,".*"))}this.accept=s=new RegExp(s,"i"),this.hander=l.default.bindFn(this._pasteHander,this),a.on("paste",this.hander)},_pasteHander:function(e){var t,i,r,u,a,s=[],l=this.getRuid()
for(u=0,a=(t=(e=e.originalEvent||e).clipboardData.items).length;u<a;u++)"file"===(i=t[u]).kind&&(r=i.getAsFile())&&s.push(new n.default(l,r))
s.length&&(e.preventDefault(),e.stopPropagation(),this.trigger("paste",s))},destroy:function(){this.elem.off("paste",this.hander)}})})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/filepicker.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=u(e("vue-weui/src/upload/3rd/webuploader/base.js")),n=u(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"))
function u(e){return e&&e.__esModule?e:{default:e}}var p=r.default.$
t.default=n.default.register("FilePicker",{init:function(){var e,t,i,r,n,u=this.getRuntime().getContainer(),a=this,l=a.owner,o=a.options,s=this.label=p(document.createElement("label")),c=this.input=p(document.createElement("input"))
if(c.attr("type","file"),c.attr("capture","camera"),c.attr("name",o.name),c.addClass("webuploader-element-invisible"),s.on("click",function(e){c.trigger("click"),e.stopPropagation(),l.trigger("dialogopen")}),s.css({opacity:0,width:"100%",height:"100%",display:"block",cursor:"pointer",background:"#ffffff"}),o.multiple&&c.attr("multiple","multiple"),o.accept&&0<o.accept.length){for(e=[],t=0,i=o.accept.length;t<i;t++)e.push(o.accept[t].mimeTypes)
c.attr("accept",e.join(","))}u.append(c),u.append(s),r=function(e){l.trigger(e.type)},n=function(e){var t
if(0===e.target.files.length)return!1
a.files=e.target.files,(t=this.cloneNode(!0)).value=null,this.parentNode.replaceChild(t,this),c.off(),c=p(t).on("change",n).on("mouseenter mouseleave",r),l.trigger("change")},c.on("change",n),s.on("mouseenter mouseleave",r)},getFiles:function(){return this.files},destroy:function(){this.input.off(),this.label.off()}})})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/imagemeta/exif.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/imagemeta.js"],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var p=n(e("vue-weui/src/upload/3rd/webuploader/base.js")),a=n(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/imagemeta.js"))
function n(e){return e&&e.__esModule?e:{default:e}}var c={ExifMap:function(){return this}}
c.ExifMap.prototype.map={Orientation:274},c.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},c.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},c.exifTagTypes[7]=c.exifTagTypes[1],c.getExifValue=function(e,t,i,a,n,r){var u,f,l,s,g,d,o=c.exifTagTypes[a]
if(o){if(!((f=4<(u=o.size*n)?t+e.getUint32(i+8,r):i+8)+u>e.byteLength)){if(1===n)return o.getValue(e,f,r)
for(l=[],s=0;s<n;s+=1)l[s]=o.getValue(e,f+s*o.size,r)
if(o.ascii){for(g="",s=0;s<l.length&&"\0"!==(d=l[s]);s+=1)g+=d
return g}return l}p.default.log("Invalid Exif data: Invalid data offset.")}else p.default.log("Invalid Exif data: Invalid tag type.")},c.parseExifTag=function(e,t,i,a,n){var r=e.getUint16(i,a)
n.exif[r]=c.getExifValue(e,t,i,e.getUint16(i+2,a),e.getUint32(i+4,a),a)},c.parseExifTags=function(e,t,i,a,n){var r,u,f
if(i+6>e.byteLength)p.default.log("Invalid Exif data: Invalid directory offset.")
else{if(!((u=i+2+12*(r=e.getUint16(i,a)))+4>e.byteLength)){for(f=0;f<r;f+=1)this.parseExifTag(e,t,i+2+12*f,a,n)
return e.getUint32(u,a)}p.default.log("Invalid Exif data: Invalid directory size.")}},c.parseExifData=function(e,t,i,a){var n,r,u=t+10
if(1165519206===e.getUint32(t+4))if(u+8>e.byteLength)p.default.log("Invalid Exif data: Invalid segment size.")
else if(0===e.getUint16(t+8)){switch(e.getUint16(u)){case 18761:n=!0
break
case 19789:n=!1
break
default:return void p.default.log("Invalid Exif data: Invalid byte alignment marker.")}42===e.getUint16(u+2,n)?(r=e.getUint32(u+4,n),a.exif=new c.ExifMap,r=c.parseExifTags(e,u,u+r,n,a)):p.default.log("Invalid Exif data: Missing TIFF marker.")}else p.default.log("Invalid Exif data: Missing byte alignment offset.")},a.default.parsers[65505].push(c.parseExifData),t.default=c})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/imagemeta.js",["vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js"],function(e,a,t){"use strict"
Object.defineProperty(a,"__esModule",{value:!0})
var r,f,n=e("vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js"),u=(r=n)&&r.__esModule?r:{default:r}
f={parsers:{65505:[]},maxMetaDataSize:262144,parse:function(e,a){var t=this,r=new FileReader
r.onload=function(){a(!1,t._parse(this.result)),r=r.onload=r.onerror=null},r.onerror=function(e){a(e.message),r=r.onload=r.onerror=null},e=e.slice(0,t.maxMetaDataSize),r.readAsArrayBuffer(e.getSource())},_parse:function(e,a){if(!(e.byteLength<6)){var t,r,n,u,i=new DataView(e),l=2,s=i.byteLength-4,d=l,o={}
if(65496===i.getUint16(0)){for(;l<s&&(65504<=(t=i.getUint16(l))&&t<=65519||65534===t)&&!(l+(r=i.getUint16(l+2)+2)>i.byteLength);){if(n=f.parsers[t],!a&&n)for(u=0;u<n.length;u+=1)n[u].call(f,i,l,r,o)
d=l+=r}6<d&&(e.slice?o.imageHead=e.slice(2,d):o.imageHead=new Uint8Array(e).subarray(2,d))}return o}},updateImageHead:function(e,a){var t,r,n,u=this._parse(e,!0)
return n=2,u.imageHead&&(n=2+u.imageHead.byteLength),r=e.slice?e.slice(n):new Uint8Array(e).subarray(n),(t=new Uint8Array(a.byteLength+2+r.byteLength))[0]=255,t[1]=216,t.set(new Uint8Array(a),2),t.set(new Uint8Array(r),a.byteLength+2),t.buffer}},u.default.parseMeta=function(){return f.parse.apply(f,arguments)},u.default.updateImageHead=function(){return f.updateImageHead.apply(f,arguments)},a.default=f})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js",["vue-weui/src/upload/3rd/webuploader/base.js"],function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:!0})
var n,a=e("vue-weui/src/upload/3rd/webuploader/base.js"),o=(n=a)&&n.__esModule?n:{default:n}
var u=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL,d=o.default.noop,i=d
u&&(d=function(){return u.createObjectURL.apply(u,arguments)},i=function(){return u.revokeObjectURL.apply(u,arguments)}),r.default={createObjectURL:d,revokeObjectURL:i,dataURL2Blob:function(e){var r,t,n,a,o,u
for(r=(~(u=e.split(","))[0].indexOf("base64")?atob:decodeURIComponent)(u[1]),n=new ArrayBuffer(r.length),t=new Uint8Array(n),a=0;a<r.length;a++)t[a]=r.charCodeAt(a)
return o=u[0].split(":")[1].split(";")[0],this.arrayBufferToBlob(n,o)},dataURL2ArrayBuffer:function(e){var r,t,n,a
for(r=(~(a=e.split(","))[0].indexOf("base64")?atob:decodeURIComponent)(a[1]),t=new Uint8Array(r.length),n=0;n<r.length;n++)t[n]=r.charCodeAt(n)
return t.buffer},arrayBufferToBlob:function(e,r){var t,n=window.BlobBuilder||window.WebKitBlobBuilder
return n?((t=new n).append(e),t.getBlob(r)):new Blob([e],r?{type:r}:{})},canvasToDataUrl:function(e,r,t){return e.toDataURL(r,t/100)},parseMeta:function(e,r){r(!1,{})},updateImageHead:function(e){return e}}})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/androidpatch.js",["vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/jpegencoder.js","vue-weui/src/upload/3rd/webuploader/base.js"],function(e,u,a){"use strict"
var d=r(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js")),i=r(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/jpegencoder.js")),n=r(e("vue-weui/src/upload/3rd/webuploader/base.js"))
function r(e){return e&&e.__esModule?e:{default:e}}var p,s=d.default.canvasToDataUrl
d.default.canvasToDataUrl=function(e,u,a){var d,r,t,l,o
return n.default.os.android?("image/jpeg"===u&&void 0===p&&(l=(l=(~(o=(l=s.apply(null,arguments)).split(","))[0].indexOf("base64")?atob:decodeURIComponent)(o[1])).substring(0,2),p=255===l.charCodeAt(0)&&216===l.charCodeAt(1)),"image/jpeg"!==u||p?s.apply(null,arguments):(r=e.width,t=e.height,d=e.getContext("2d"),i.default.encode(d.getImageData(0,0,r,t),a))):s.apply(null,arguments)}})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/jpegencoder.js",[],function(r,a,o){"use strict"
function n(r){Math.round
var b,_,C,N,a,d=Math.floor,O=new Array(64),P=new Array(64),S=new Array(64),k=new Array(64),s=new Array(65535),p=new Array(65535),Y=new Array(64),g=new Array(64),q=[],x=0,z=7,B=new Array(64),D=new Array(64),E=new Array(64),o=new Array(256),F=new Array(2048),j=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],G=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],I=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],J=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],K=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],L=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],R=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250]
function n(r,a){for(var o=0,n=0,f=new Array,e=1;e<=16;e++){for(var v=1;v<=r[e];v++)f[a[n]]=[],f[a[n]][0]=o,f[a[n]][1]=e,n++,o++
o*=2}return f}function T(r){for(var a=r[0],o=r[1]-1;0<=o;)a&1<<o&&(x|=1<<z),o--,--z<0&&(255==x?(U(255),U(0)):U(x),z=7,x=0)}function U(r){q.push(o[r])}function V(r){U(r>>8&255),U(255&r)}function W(r,a,o,n,f){for(var e,v=f[0],t=f[240],i=function(r,a){var o,n,f,e,v,t,i,u,c,d,w=0
for(c=0;c<8;++c){o=r[w],n=r[w+1],f=r[w+2],e=r[w+3],v=r[w+4],t=r[w+5],i=r[w+6]
var y=o+(u=r[w+7]),h=o-u,A=n+i,l=n-i,s=f+t,p=f-t,g=e+v,j=e-v,m=y+g,M=y-g,b=A+s,_=A-s
r[w]=m+b,r[w+4]=m-b
var C=.707106781*(_+M)
r[w+2]=M+C,r[w+6]=M-C
var N=.382683433*((m=j+p)-(_=l+h)),O=.5411961*m+N,P=1.306562965*_+N,S=.707106781*(b=p+l),k=h+S,q=h-S
r[w+5]=q+O,r[w+3]=q-O,r[w+1]=k+P,r[w+7]=k-P,w+=8}for(c=w=0;c<8;++c){o=r[w],n=r[w+8],f=r[w+16],e=r[w+24],v=r[w+32],t=r[w+40],i=r[w+48]
var x=o+(u=r[w+56]),z=o-u,B=n+i,D=n-i,E=f+t,F=f-t,G=e+v,H=e-v,I=x+G,J=x-G,K=B+E,L=B-E
r[w]=I+K,r[w+32]=I-K
var Q=.707106781*(L+J)
r[w+16]=J+Q,r[w+48]=J-Q
var R=.382683433*((I=H+F)-(L=D+z)),T=.5411961*I+R,U=1.306562965*L+R,V=.707106781*(K=F+D),W=z+V,X=z-V
r[w+40]=X+T,r[w+24]=X-T,r[w+8]=W+U,r[w+56]=W-U,w++}for(c=0;c<64;++c)d=r[c]*a[c],Y[c]=0<d?.5+d|0:d-.5|0
return Y}(r,a),u=0;u<64;++u)g[j[u]]=i[u]
var c=g[0]-o
o=g[0],0==c?T(n[0]):(T(n[p[e=32767+c]]),T(s[e]))
for(var d=63;0<d&&0==g[d];d--);if(0==d)return T(v),o
for(var w,y=1;y<=d;){for(var h=y;0==g[y]&&y<=d;++y);var A=y-h
if(16<=A){w=A>>4
for(var l=1;l<=w;++l)T(t)
A&=15}e=32767+g[y],T(f[(A<<4)+p[e]]),T(s[e]),y++}return 63!=d&&T(v),o}function X(r){if(r<=0&&(r=1),100<r&&(r=100),a!=r){(function(r){for(var a=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],o=0;o<64;o++){var n=d((a[o]*r+50)/100)
n<1?n=1:255<n&&(n=255),O[j[o]]=n}for(var f=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],e=0;e<64;e++){var v=d((f[e]*r+50)/100)
v<1?v=1:255<v&&(v=255),P[j[e]]=v}for(var t=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],i=0,u=0;u<8;u++)for(var c=0;c<8;c++)S[i]=1/(O[j[i]]*t[u]*t[c]*8),k[i]=1/(P[j[i]]*t[u]*t[c]*8),i++})(r<50?Math.floor(5e3/r):Math.floor(200-2*r)),a=r}}this.encode=function(r,a){var o,n
a&&X(a),q=new Array,x=0,z=7,V(65496),V(65504),V(16),U(74),U(70),U(73),U(70),U(0),U(1),U(1),U(0),V(1),V(1),U(0),U(0),function(){V(65499),V(132),U(0)
for(var r=0;r<64;r++)U(O[r])
U(1)
for(var a=0;a<64;a++)U(P[a])}(),o=r.width,n=r.height,V(65472),V(17),U(8),V(n),V(o),U(3),U(1),U(17),U(0),U(2),U(17),U(1),U(3),U(17),U(1),function(){V(65476),V(418),U(0)
for(var r=0;r<16;r++)U(G[r+1])
for(var a=0;a<=11;a++)U(H[a])
U(16)
for(var o=0;o<16;o++)U(I[o+1])
for(var n=0;n<=161;n++)U(J[n])
U(1)
for(var f=0;f<16;f++)U(K[f+1])
for(var e=0;e<=11;e++)U(L[e])
U(17)
for(var v=0;v<16;v++)U(Q[v+1])
for(var t=0;t<=161;t++)U(R[t])}(),V(65498),V(12),U(3),U(1),U(0),U(2),U(17),U(3),U(17),U(0),U(63),U(0)
var f=0,e=0,v=0
x=0,z=7,this.encode.displayName="_encode_"
for(var t,i,u,c,d,w,y,h,A,l=r.data,s=r.width,p=r.height,g=4*s,j=0;j<p;){for(t=0;t<g;){for(w=d=g*j+t,y=-1,A=h=0;A<64;A++)w=d+(h=A>>3)*g+(y=4*(7&A)),p<=j+h&&(w-=g*(j+1+h-p)),g<=t+y&&(w-=t+y-g+4),i=l[w++],u=l[w++],c=l[w++],B[A]=(F[i]+F[u+256>>0]+F[c+512>>0]>>16)-128,D[A]=(F[i+768>>0]+F[u+1024>>0]+F[c+1280>>0]>>16)-128,E[A]=(F[i+1280>>0]+F[u+1536>>0]+F[c+1792>>0]>>16)-128
f=W(B,S,f,b,C),e=W(D,k,e,_,N),v=W(E,k,v,_,N),t+=32}j+=8}if(0<=z){var m=[]
m[1]=z+1,m[0]=(1<<z+1)-1,T(m)}V(65497)
var M="data:image/jpeg;base64,"+btoa(q.join(""))
return q=[],M},r=r||50,function(){for(var r=String.fromCharCode,a=0;a<256;a++)o[a]=r(a)}(),b=n(G,H),_=n(K,L),C=n(I,J),N=n(Q,R),function(){for(var r=1,a=2,o=1;o<=15;o++){for(var n=r;n<a;n++)p[32767+n]=o,s[32767+n]=[],s[32767+n][1]=o,s[32767+n][0]=n
for(var f=-(a-1);f<=-r;f++)p[32767+f]=o,s[32767+f]=[],s[32767+f][1]=o,s[32767+f][0]=a-1+f
r<<=1,a<<=1}}(),function(){for(var r=0;r<256;r++)F[r]=19595*r,F[r+256>>0]=38470*r,F[r+512>>0]=7471*r+32768,F[r+768>>0]=-11059*r,F[r+1024>>0]=-21709*r,F[r+1280>>0]=32768*r+8421375,F[r+1536>>0]=-27439*r,F[r+1792>>0]=-5329*r}(),X(r)}Object.defineProperty(a,"__esModule",{value:!0}),n.encode=function(r,a){return new n(a).encode(r)},a.default=n})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/image.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js"],function(t,e,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
var i=s(t("vue-weui/src/upload/3rd/webuploader/base.js")),r=s(t("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js")),n=s(t("vue-weui/src/upload/3rd/webuploader/runtime/html5/util.js"))
function s(t){return t&&t.__esModule?t:{default:t}}e.default=r.default.register("Image",{modified:!1,init:function(){var a=this,t=new Image
t.onload=function(){a._info={type:a.type,width:this.width,height:this.height},a._metas||"image/jpeg"!==a.type?a.owner.trigger("load"):n.default.parseMeta(a._blob,function(t,e){a._metas=e,a.owner.trigger("load")})},t.onerror=function(){a.owner.trigger("error")},a._img=t},loadFromBlob:function(t){var e=this,a=e._img
e._blob=t,e.type=t.type,a.src=n.default.createObjectURL(t.getSource()),e.owner.once("load",function(){n.default.revokeObjectURL(a.src)})},resize:function(t,e){var a=this._canvas||(this._canvas=document.createElement("canvas"))
this._resize(this._img,a,t,e),this._blob=null,this.modified=!0,this.owner.trigger("complete","resize")},crop:function(t,e,a,i,r){var n=this._canvas||(this._canvas=document.createElement("canvas")),s=this.options,o=this._img,h=o.naturalWidth,u=o.naturalHeight,l=this.getOrientation()
r=r||1,n.width=a,n.height=i,s.preserveHeaders||this._rotate2Orientaion(n,l),this._renderImageToCanvas(n,o,-t,-e,h*r,u*r),this._blob=null,this.modified=!0,this.owner.trigger("complete","crop")},getAsBlob:function(t){var e,a=this._blob,i=this.options
if(t=t||this.type,this.modified||this.type!==t){if(e=this._canvas,"image/jpeg"===t){if(a=n.default.canvasToDataUrl(e,t,i.quality),i.preserveHeaders&&this._metas&&this._metas.imageHead)return a=n.default.dataURL2ArrayBuffer(a),a=n.default.updateImageHead(a,this._metas.imageHead),a=n.default.arrayBufferToBlob(a,t)}else a=n.default.canvasToDataUrl(e,t)
a=n.default.dataURL2Blob(a)}return a},getAsDataUrl:function(t){var e=this.options
return"image/jpeg"===(t=t||this.type)?n.default.canvasToDataUrl(this._canvas,t,e.quality):this._canvas.toDataURL(t)},getOrientation:function(){return this._metas&&this._metas.exif&&this._metas.exif.get("Orientation")||1},info:function(t){return t?(this._info=t,this):this._info},meta:function(t){return t?(this._metas=t,this):this._metas},destroy:function(){var t=this._canvas
this._img.onload=null,t&&(t.getContext("2d").clearRect(0,0,t.width,t.height),t.width=t.height=0,this._canvas=null),this._img.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D",this._img=this._blob=null},_resize:function(t,e,a,i){var r,n,s,o,h,u=this.options,l=t.width,d=t.height,c=this.getOrientation()
~[5,6,7,8].indexOf(c)&&(a^=i,a^=i^=a),r=Math[u.crop?"max":"min"](a/l,i/d),u.allowMagnify||(r=Math.min(1,r)),n=l*r,s=d*r,u.crop?(e.width=a,e.height=i):(e.width=n,e.height=s),o=(e.width-n)/2,h=(e.height-s)/2,u.preserveHeaders||this._rotate2Orientaion(e,c),this._renderImageToCanvas(e,t,o,h,n,s)},_rotate2Orientaion:function(t,e){var a=t.width,i=t.height,r=t.getContext("2d")
switch(e){case 5:case 6:case 7:case 8:t.width=i,t.height=a}switch(e){case 2:r.translate(a,0),r.scale(-1,1)
break
case 3:r.translate(a,i),r.rotate(Math.PI)
break
case 4:r.translate(0,i),r.scale(1,-1)
break
case 5:r.rotate(.5*Math.PI),r.scale(1,-1)
break
case 6:r.rotate(.5*Math.PI),r.translate(0,-i)
break
case 7:r.rotate(.5*Math.PI),r.translate(a,-i),r.scale(-1,1)
break
case 8:r.rotate(-.5*Math.PI),r.translate(-a,0)}},_renderImageToCanvas:function(){if(!i.default.os.ios)return function(t){var e=i.default.slice(arguments,1),a=t.getContext("2d")
a.drawImage.apply(a,e)}
function C(t,e,a){var i,r,n=document.createElement("canvas"),s=n.getContext("2d"),o=0,h=a,u=a
for(n.width=1,n.height=a,s.drawImage(t,0,0),i=s.getImageData(0,0,1,a).data;o<u;)0===i[4*(u-1)+3]?h=u:o=u,u=h+o>>1
return 0==(r=u/a)?1:r}if(7<=i.default.os.ios)return function(t,e,a,i,r,n){var s=e.naturalWidth,o=e.naturalHeight,h=C(e,0,o)
return t.getContext("2d").drawImage(e,0,0,s*h,o*h,a,i,r,n)}
return function(t,e,a,i,r,n){var s,o,h,u,l,d,c,g,m,f,v,_=e.naturalWidth,p=e.naturalHeight,w=t.getContext("2d"),b=1048576<(v=(g=e).naturalWidth)*g.naturalHeight&&((m=document.createElement("canvas")).width=m.height=1,(f=m.getContext("2d")).drawImage(g,1-v,0),0===f.getImageData(0,0,1,1).data[3]),A="image/jpeg"===this.type,I=1024,y=0,j=0
for(b&&(_/=2,p/=2),w.save(),(s=document.createElement("canvas")).width=s.height=I,o=s.getContext("2d"),h=A?C(e,0,p):1,u=Math.ceil(I*r/_),l=Math.ceil(I*n/p/h);y<p;){for(c=d=0;d<_;)o.clearRect(0,0,I,I),o.drawImage(e,-d,-y),w.drawImage(s,0,0,I,I,a+c,i+j,u,l),d+=I,c+=u
y+=I,j+=l}w.restore(),s=o=null}}()})})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/transport.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"],function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i=n(e("vue-weui/src/upload/3rd/webuploader/base.js")),s=n(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"))
function n(e){return e&&e.__esModule?e:{default:e}}var a=i.default.noop,d=i.default.$
t.default=s.default.register("Transport",{init:function(){this._status=0,this._response=null},send:function(){var r,e,t,s=this.owner,n=this.options,a=this._initAjax(),o=s._blob,u=n.server
n.sendAsBinary?(u+=!1!==n.attachInfoToQuery?(/\?/.test(u)?"&":"?")+d.param(s._formData):"",e=o.getSource()):(r=new FormData,d.each(s._formData,function(e,t){r.append(e,t)}),r.append(n.fileVal,o.getSource(),n.filename||s._formData.name||"")),n.withCredentials&&"withCredentials"in a?(a.open(n.method,u,!0),a.withCredentials=!0):a.open(n.method,u),this._setRequestHeader(a,n.headers),e?(a.overrideMimeType&&a.overrideMimeType("application/octet-stream"),i.default.os.android?((t=new FileReader).onload=function(){a.send(this.result),t=t.onload=null},t.readAsArrayBuffer(e)):a.send(e)):a.send(r)},getResponse:function(){return this._response},getResponseAsJson:function(){return this._parseJson(this._response)},getResponseHeaders:function(){return this._headers},getStatus:function(){return this._status},abort:function(){var e=this._xhr
e&&(e.upload.onprogress=a,e.onreadystatechange=a,e.abort(),this._xhr=e=null)},destroy:function(){this.abort()},_parseHeader:function(e){var s={}
return e&&e.replace(/^([^\:]+):(.*)$/gm,function(e,t,r){s[t.trim()]=r.trim()}),s},_initAjax:function(){var r=this,e=new XMLHttpRequest
return!this.options.withCredentials||"withCredentials"in e||"undefined"==typeof XDomainRequest||(e=new XDomainRequest),e.upload.onprogress=function(e){var t=0
return e.lengthComputable&&(t=e.loaded/e.total),r.trigger("progress",t)},e.onreadystatechange=function(){if(4===e.readyState)return e.upload.onprogress=a,e.onreadystatechange=a,r._xhr=null,r._status=e.status,200<=e.status&&e.status<300?(r._response=e.responseText,r._headers=r._parseHeader(e.getAllResponseHeaders()),r.trigger("load")):500<=e.status&&e.status<600?(r._response=e.responseText,r._headers=r._parseHeader(e.getAllResponseHeaders()),r.trigger("error","server-"+e.status)):r.trigger("error",r._status?"http-"+e.status:"abort")},r._xhr=e},_setRequestHeader:function(r,e){d.each(e,function(e,t){r.setRequestHeader(e,t)})},_parseJson:function(e){var t
try{t=JSON.parse(e)}catch(e){t={}}return t}})})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/md5.js",["vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"],function(t,r,e){"use strict"
Object.defineProperty(r,"__esModule",{value:!0})
var n,i=t("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js"),o=(n=i)&&n.__esModule?n:{default:n}
function s(t,r,e,n,i,o){return r=b(b(r,t),b(n,o)),b(r<<i|r>>>32-i,e)}function u(t,r,e,n,i,o,u){return s(r&e|~r&n,t,r,i,o,u)}function a(t,r,e,n,i,o,u){return s(r&n|e&~n,t,r,i,o,u)}function f(t,r,e,n,i,o,u){return s(r^e^n,t,r,i,o,u)}function h(t,r,e,n,i,o,u){return s(e^(r|~n),t,r,i,o,u)}function c(t,r){var e=t[0],n=t[1],i=t[2],o=t[3]
e=u(e,n,i,o,r[0],7,-680876936),o=u(o,e,n,i,r[1],12,-389564586),i=u(i,o,e,n,r[2],17,606105819),n=u(n,i,o,e,r[3],22,-1044525330),e=u(e,n,i,o,r[4],7,-176418897),o=u(o,e,n,i,r[5],12,1200080426),i=u(i,o,e,n,r[6],17,-1473231341),n=u(n,i,o,e,r[7],22,-45705983),e=u(e,n,i,o,r[8],7,1770035416),o=u(o,e,n,i,r[9],12,-1958414417),i=u(i,o,e,n,r[10],17,-42063),n=u(n,i,o,e,r[11],22,-1990404162),e=u(e,n,i,o,r[12],7,1804603682),o=u(o,e,n,i,r[13],12,-40341101),i=u(i,o,e,n,r[14],17,-1502002290),n=u(n,i,o,e,r[15],22,1236535329),e=a(e,n,i,o,r[1],5,-165796510),o=a(o,e,n,i,r[6],9,-1069501632),i=a(i,o,e,n,r[11],14,643717713),n=a(n,i,o,e,r[0],20,-373897302),e=a(e,n,i,o,r[5],5,-701558691),o=a(o,e,n,i,r[10],9,38016083),i=a(i,o,e,n,r[15],14,-660478335),n=a(n,i,o,e,r[4],20,-405537848),e=a(e,n,i,o,r[9],5,568446438),o=a(o,e,n,i,r[14],9,-1019803690),i=a(i,o,e,n,r[3],14,-187363961),n=a(n,i,o,e,r[8],20,1163531501),e=a(e,n,i,o,r[13],5,-1444681467),o=a(o,e,n,i,r[2],9,-51403784),i=a(i,o,e,n,r[7],14,1735328473),n=a(n,i,o,e,r[12],20,-1926607734),e=f(e,n,i,o,r[5],4,-378558),o=f(o,e,n,i,r[8],11,-2022574463),i=f(i,o,e,n,r[11],16,1839030562),n=f(n,i,o,e,r[14],23,-35309556),e=f(e,n,i,o,r[1],4,-1530992060),o=f(o,e,n,i,r[4],11,1272893353),i=f(i,o,e,n,r[7],16,-155497632),n=f(n,i,o,e,r[10],23,-1094730640),e=f(e,n,i,o,r[13],4,681279174),o=f(o,e,n,i,r[0],11,-358537222),i=f(i,o,e,n,r[3],16,-722521979),n=f(n,i,o,e,r[6],23,76029189),e=f(e,n,i,o,r[9],4,-640364487),o=f(o,e,n,i,r[12],11,-421815835),i=f(i,o,e,n,r[15],16,530742520),n=f(n,i,o,e,r[2],23,-995338651),e=h(e,n,i,o,r[0],6,-198630844),o=h(o,e,n,i,r[7],10,1126891415),i=h(i,o,e,n,r[14],15,-1416354905),n=h(n,i,o,e,r[5],21,-57434055),e=h(e,n,i,o,r[12],6,1700485571),o=h(o,e,n,i,r[3],10,-1894986606),i=h(i,o,e,n,r[10],15,-1051523),n=h(n,i,o,e,r[1],21,-2054922799),e=h(e,n,i,o,r[8],6,1873313359),o=h(o,e,n,i,r[15],10,-30611744),i=h(i,o,e,n,r[6],15,-1560198380),n=h(n,i,o,e,r[13],21,1309151649),e=h(e,n,i,o,r[4],6,-145523070),o=h(o,e,n,i,r[11],10,-1120210379),i=h(i,o,e,n,r[2],15,718787259),n=h(n,i,o,e,r[9],21,-343485551),t[0]=b(e,t[0]),t[1]=b(n,t[1]),t[2]=b(i,t[2]),t[3]=b(o,t[3])}function l(t){var r,e=[]
for(r=0;r<64;r+=4)e[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24)
return e}function p(t){var r,e=[]
for(r=0;r<64;r+=4)e[r>>2]=t[r]+(t[r+1]<<8)+(t[r+2]<<16)+(t[r+3]<<24)
return e}function d(t){var r,e,n,i,o,u,s=t.length,a=[1732584193,-271733879,-1732584194,271733878]
for(r=64;r<=s;r+=64)c(a,l(t.substring(r-64,r)))
for(e=(t=t.substring(r-64)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<e;r+=1)n[r>>2]|=t.charCodeAt(r)<<(r%4<<3)
if(n[r>>2]|=128<<(r%4<<3),55<r)for(c(a,n),r=0;r<16;r+=1)n[r]=0
return i=(i=8*s).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),u=parseInt(i[1],16)||0,n[14]=o,n[15]=u,c(a,n),a}function y(t){var r,e=""
for(r=0;r<4;r+=1)e+=v[t>>8*r+4&15]+v[t>>8*r&15]
return e}function _(t){var r
for(r=0;r<t.length;r+=1)t[r]=y(t[r])
return t.join("")}function g(){this.reset()}var b=function(t,r){return t+r&4294967295},v=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
"5d41402abc4b2a76b9719d911017c592"!==_(d("hello"))&&(b=function(t,r){var e=(65535&t)+(65535&r)
return(t>>16)+(r>>16)+(e>>16)<<16|65535&e}),g.prototype.append=function(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),this.appendBinary(t),this},g.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length
var r,e=this._buff.length
for(r=64;r<=e;r+=64)c(this._state,l(this._buff.substring(r-64,r)))
return this._buff=this._buff.substr(r-64),this},g.prototype.end=function(t){var r,e,n=this._buff,i=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(r=0;r<i;r+=1)o[r>>2]|=n.charCodeAt(r)<<(r%4<<3)
return this._finish(o,i),e=t?this._state:_(this._state),this.reset(),e},g.prototype._finish=function(t,r){var e,n,i,o=r
if(t[o>>2]|=128<<(o%4<<3),55<o)for(c(this._state,t),o=0;o<16;o+=1)t[o]=0
e=(e=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(e[2],16),i=parseInt(e[1],16)||0,t[14]=n,t[15]=i,c(this._state,t)},g.prototype.reset=function(){return this._buff="",this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},g.prototype.destroy=function(){delete this._state,delete this._buff,delete this._length},g.hash=function(t,r){/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t)))
var e=d(t)
return r?e:_(e)},g.hashBinary=function(t,r){var e=d(t)
return r?e:_(e)},(g.ArrayBuffer=function(){this.reset()}).prototype.append=function(t){var r,e=this._concatArrayBuffer(this._buff,t),n=e.length
for(this._length+=t.byteLength,r=64;r<=n;r+=64)c(this._state,p(e.subarray(r-64,r)))
return this._buff=r-64<n?e.subarray(r-64):new Uint8Array(0),this},g.ArrayBuffer.prototype.end=function(t){var r,e,n=this._buff,i=n.length,o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
for(r=0;r<i;r+=1)o[r>>2]|=n[r]<<(r%4<<3)
return this._finish(o,i),e=t?this._state:_(this._state),this.reset(),e},g.ArrayBuffer.prototype._finish=g.prototype._finish,g.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._state=[1732584193,-271733879,-1732584194,271733878],this},g.ArrayBuffer.prototype.destroy=g.prototype.destroy,g.ArrayBuffer.prototype._concatArrayBuffer=function(t,r){var e=t.length,n=new Uint8Array(e+r.byteLength)
return n.set(t),n.set(new Uint8Array(r),e),n},g.ArrayBuffer.hash=function(t,r){var e=function(t){var r,e,n,i,o,u,s=t.length,a=[1732584193,-271733879,-1732584194,271733878]
for(r=64;r<=s;r+=64)c(a,p(t.subarray(r-64,r)))
for(e=(t=r-64<s?t.subarray(r-64):new Uint8Array(0)).length,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<e;r+=1)n[r>>2]|=t[r]<<(r%4<<3)
if(n[r>>2]|=128<<(r%4<<3),55<r)for(c(a,n),r=0;r<16;r+=1)n[r]=0
return i=(i=8*s).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(i[2],16),u=parseInt(i[1],16)||0,n[14]=o,n[15]=u,c(a,n),a}(new Uint8Array(t))
return r?e:_(e)},r.default=o.default.register("Md5",{init:function(){},loadFromBlob:function(e){var n,i,o=e.getSource(),u=2097152,s=Math.ceil(o.size/u),a=0,f=this.owner,h=new g.ArrayBuffer,c=this,l=o.mozSlice||o.webkitSlice||o.slice
i=new FileReader,(n=function(){var t,r
t=a*u,r=Math.min(t+u,o.size),i.onload=function(t){h.append(t.target.result),f.trigger("progress",{total:e.size,loaded:r})},i.onloadend=function(){i.onloadend=i.onload=null,++a<s?setTimeout(n,1):setTimeout(function(){f.trigger("load"),c.result=h.end(),n=e=o=h=null,f.trigger("complete")},50)},i.readAsArrayBuffer(l.call(o,t,r))})()},getResult:function(){return this.result}})})
define("vue-weui/src/upload/3rd/webuploader/runtime/flash/filepicker.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/flash/runtime.js"],function(e,t,u){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var r=l(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=l(e("vue-weui/src/upload/3rd/webuploader/runtime/flash/runtime.js"))
function l(e){return e&&e.__esModule?e:{default:e}}var a=r.default.$
t.default=i.default.register("FilePicker",{init:function(e){var t,u,r=a.extend({},e)
for(t=r.accept&&r.accept.length,u=0;u<t;u++)r.accept[u].title||(r.accept[u].title="Files")
delete r.button,delete r.id,delete r.container,this.flashExec("FilePicker","init",r)},destroy:function(){this.flashExec("FilePicker","destroy")}})})
