define("vue-weui/src/upload/3rd/webuploader/widgets/queue.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/queue.js","vue-weui/src/upload/3rd/webuploader/file.js","vue-weui/src/upload/3rd/webuploader/lib/file.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,t,u){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=a(e("vue-weui/src/upload/3rd/webuploader/base.js")),r=a(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),o=a(e("vue-weui/src/upload/3rd/webuploader/queue.js")),i=a(e("vue-weui/src/upload/3rd/webuploader/file.js")),s=a(e("vue-weui/src/upload/3rd/webuploader/lib/file.js")),c=a(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js"))
function a(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var p=n.default.$,l=/\.\w+$/,d=i.default.Status
t.default=r.default.register({name:"queue",init:function(e){var t,u,r,i,s,a,l,d=this
if(p.isPlainObject(e.accept)&&(e.accept=[e.accept]),e.accept){for(s=[],r=0,u=e.accept.length;r<u;r++)(i=e.accept[r].extensions)&&s.push(i)
s.length&&(a="\\."+s.join(",").replace(/,/g,"$|\\.").replace(/\*/g,".*")+"$"),d.accept=new RegExp(a,"i")}if(d.queue=new o.default,d.stats=d.queue.stats,"html5"===this.request("predict-runtime-type"))return t=n.default.Deferred(),this.placeholder=l=new c.default("Placeholder"),l.connectRuntime({runtimeOrder:"html5"},function(){d._ruid=l.getRuid(),t.resolve()}),t.promise()},_wrapFile:function(e){if(!(e instanceof i.default)){if(!(e instanceof s.default)){if(!this._ruid)throw new Error("Can't add external files.")
e=new s.default(this._ruid,e)}e=new i.default(e)}return e},acceptFile:function(e){return!(!e||!e.size||this.accept&&l.exec(e.name)&&!this.accept.test(e.name))},_addFile:function(e){var t=this
if(e=t._wrapFile(e),t.owner.trigger("beforeFileQueued",e)){if(t.acceptFile(e))return t.queue.append(e),t.owner.trigger("fileQueued",e),e
t.owner.trigger("error","Q_TYPE_DENIED",e)}},getFile:function(e){return this.queue.getFile(e)},addFile:function(e){var t=this
e.length||(e=[e]),(e=p.map(e,function(e){return t._addFile(e)})).length&&(t.owner.trigger("filesQueued",e),t.options.auto&&setTimeout(function(){t.request("start-upload")},20))},getStats:function(){return this.stats},removeFile:function(e,t){e=e.id?e:this.queue.getFile(e),this.request("cancel-file",e),t&&this.queue.removeFile(e)},getFiles:function(){return this.queue.getFiles.apply(this.queue,arguments)},fetchFile:function(){return this.queue.fetch.apply(this.queue,arguments)},retry:function(e,t){var u,r,i
if(e)return(e=e.id?e:this.queue.getFile(e)).setStatus(d.QUEUED),void(t||this.request("start-upload"))
for(r=0,i=(u=this.queue.getFiles(d.ERROR)).length;r<i;r++)(e=u[r]).setStatus(d.QUEUED)
this.request("start-upload")},sortFiles:function(){return this.queue.sort.apply(this.queue,arguments)},reset:function(){this.owner.trigger("reset"),this.queue=new o.default,this.stats=this.queue.stats},destroy:function(){this.reset(),this.placeholder&&this.placeholder.destroy()}})})
define("vue-weui/src/upload/3rd/webuploader/queue.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/mediator.js","vue-weui/src/upload/3rd/webuploader/file.js"],function(e,u,t){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var s=i(e("vue-weui/src/upload/3rd/webuploader/base.js")),a=i(e("vue-weui/src/upload/3rd/webuploader/mediator.js")),n=i(e("vue-weui/src/upload/3rd/webuploader/file.js"))
function i(e){return e&&e.__esModule?e:{default:e}}var r=s.default.$,d=n.default.Status
function l(){this.stats={numOfQueue:0,numOfSuccess:0,numOfCancel:0,numOfProgress:0,numOfUploadFailed:0,numOfInvalid:0,numOfDeleted:0,numOfInterrupt:0},this._queue=[],this._map={}}r.extend(l.prototype,{append:function(e){return this._queue.push(e),this._fileAdded(e),this},prepend:function(e){return this._queue.unshift(e),this._fileAdded(e),this},getFile:function(e){return"string"!=typeof e?e:this._map[e]},fetch:function(e){var u,t,s=this._queue.length
for(e=e||d.QUEUED,u=0;u<s;u++)if(e===(t=this._queue[u]).getStatus())return t
return null},sort:function(e){"function"==typeof e&&this._queue.sort(e)},getFiles:function(){for(var e,u=[].slice.call(arguments,0),t=[],s=0,a=this._queue.length;s<a;s++)e=this._queue[s],u.length&&!~r.inArray(e.getStatus(),u)||t.push(e)
return t},removeFile:function(e){this._map[e.id]&&(delete this._map[e.id],this._delFile(e),e.destroy(),this.stats.numOfDeleted++)},_fileAdded:function(e){var t=this
this._map[e.id]||(this._map[e.id]=e).on("statuschange",function(e,u){t._onFileStatusChange(e,u)})},_delFile:function(e){for(var u=this._queue.length-1;0<=u;u--)if(this._queue[u]==e){this._queue.splice(u,1)
break}},_onFileStatusChange:function(e,u){var t=this.stats
switch(u){case d.PROGRESS:t.numOfProgress--
break
case d.QUEUED:t.numOfQueue--
break
case d.ERROR:t.numOfUploadFailed--
break
case d.INVALID:t.numOfInvalid--
break
case d.INTERRUPT:t.numOfInterrupt--}switch(e){case d.QUEUED:t.numOfQueue++
break
case d.PROGRESS:t.numOfProgress++
break
case d.ERROR:t.numOfUploadFailed++
break
case d.COMPLETE:t.numOfSuccess++
break
case d.CANCELLED:t.numOfCancel++
break
case d.INVALID:t.numOfInvalid++
break
case d.INTERRUPT:t.numOfInterrupt++}}}),a.default.installTo(l.prototype),u.default=l})
define("vue-weui/src/upload/3rd/webuploader/widgets/runtime.js",["vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/runtime/runtime.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,u,r){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var t=d(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),i=d(e("vue-weui/src/upload/3rd/webuploader/runtime/runtime.js"))
function d(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js"),t.default.support=function(){return i.default.hasRuntime.apply(i.default,arguments)},u.default=t.default.register({name:"runtime",init:function(){if(!this.predictRuntimeType())throw Error("Runtime Error")},predictRuntimeType:function(){var e,u,r=this.options.runtimeOrder||i.default.orders,t=this.type
if(!t)for(e=0,u=(r=r.split(/\s*,\s*/g)).length;e<u;e++)if(i.default.hasRuntime(r[e])){this.type=t=r[e]
break}return t}})})
define("vue-weui/src/upload/3rd/webuploader/widgets/upload.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/file.js","vue-weui/src/upload/3rd/webuploader/lib/transport.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,t,r){"use strict"
var c=s(e("vue-weui/src/upload/3rd/webuploader/base.js")),i=s(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),n=s(e("vue-weui/src/upload/3rd/webuploader/file.js")),p=s(e("vue-weui/src/upload/3rd/webuploader/lib/transport.js"))
function s(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var d=c.default.$,o=c.default.isPromise,f=n.default.Status
d.extend(i.default.options,{prepareNextFile:!1,chunked:!1,chunkSize:5242880,chunkRetry:2,chunkRetryDelay:1e3,threads:3,formData:{}}),i.default.register({name:"upload",init:function(){var e=this.owner,t=this
this.runing=!1,this.progress=!1,e.on("startUpload",function(){t.progress=!0}).on("uploadFinished",function(){t.progress=!1}),this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this.__tick=c.default.bindFn(this._tick,this),e.on("uploadComplete",function(e){e.blocks&&d.each(e.blocks,function(e,t){t.transport&&(t.transport.abort(),t.transport.destroy()),delete t.transport}),delete e.blocks,delete e.remaning})},reset:function(){this.request("stop-upload",!0),this.runing=!1,this.pool=[],this.stack=[],this.pending=[],this.remaning=0,this._trigged=!1,this._promise=null},startUpload:function(r){var i=this
if(d.each(i.request("get-files",f.INVALID),function(){i.request("remove-file",this)}),r?(r=r.id?r:i.request("get-file",r)).getStatus()===f.INTERRUPT?(r.setStatus(f.QUEUED),d.each(i.pool,function(e,t){t.file===r&&(t.transport&&t.transport.send(),r.setStatus(f.PROGRESS))})):r.getStatus()!==f.PROGRESS&&r.setStatus(f.QUEUED):d.each(i.request("get-files",[f.INITED]),function(){this.setStatus(f.QUEUED)}),i.runing)return i.owner.trigger("startUpload",r),c.default.nextTick(i.__tick)
i.runing=!0
var n=[]
r||d.each(i.pool,function(e,t){var r=t.file
r.getStatus()===f.INTERRUPT&&(i._trigged=!1,n.push(r),t.transport&&t.transport.send())}),d.each(n,function(){this.setStatus(f.PROGRESS)}),r||d.each(i.request("get-files",f.INTERRUPT),function(){this.setStatus(f.PROGRESS)}),i._trigged=!1,c.default.nextTick(i.__tick),i.owner.trigger("startUpload")},stopUpload:function(r,i){var n=this
if(!0===r&&(i=r,r=null),!1!==n.runing){if(r){if((r=r.id?r:n.request("get-file",r)).getStatus()!==f.PROGRESS&&r.getStatus()!==f.QUEUED)return
return r.setStatus(f.INTERRUPT),d.each(n.pool,function(e,t){t.file===r&&(t.transport&&t.transport.abort(),i&&(n._putback(t),n._popBlock(t)))}),n.owner.trigger("stopUpload",r),c.default.nextTick(n.__tick)}n.runing=!1,this._promise&&this._promise.file&&this._promise.file.setStatus(f.INTERRUPT),i&&d.each(n.pool,function(e,t){t.transport&&t.transport.abort(),t.file.setStatus(f.INTERRUPT)}),n.owner.trigger("stopUpload")}},cancelFile:function(e){(e=e.id?e:this.request("get-file",e)).blocks&&d.each(e.blocks,function(e,t){var r=t.transport
r&&(r.abort(),r.destroy(),delete t.transport)}),e.setStatus(f.CANCELLED),this.owner.trigger("fileDequeued",e)},isInProgress:function(){return!!this.progress},_getStats:function(){return this.request("get-stats")},skipFile:function(e,t){(e=e.id?e:this.request("get-file",e)).setStatus(t||f.COMPLETE),e.skipped=!0,e.blocks&&d.each(e.blocks,function(e,t){var r=t.transport
r&&(r.abort(),r.destroy(),delete t.transport)}),this.owner.trigger("uploadSkip",e)},_tick:function(){var e,t,r=this,i=r.options
if(r._promise)return r._promise.always(r.__tick)
r.pool.length<i.threads&&(t=r._nextBlock())?(r._trigged=!1,e=function(e){r._promise=null,e&&e.file&&r._startSend(e),c.default.nextTick(r.__tick)},r._promise=o(t)?t.always(e):e(t)):r.remaning||r._getStats().numOfQueue||r._getStats().numOfInterrupt||(r.runing=!1,r._trigged||c.default.nextTick(function(){r.owner.trigger("uploadFinished")}),r._trigged=!0)},_putback:function(e){e.cuted.unshift(e),~this.stack.indexOf(e.cuted)||this.stack.unshift(e.cuted)},_getStack:function(){for(var e,t=0;e=this.stack[t++];){if(e.has()&&e.file.getStatus()===f.PROGRESS)return e
e.has()&&(e.file.getStatus()===f.PROGRESS||e.file.getStatus()===f.INTERRUPT)||this.stack.splice(--t,1)}return null},_nextBlock:function(){var t,e,r,i,n=this,s=n.options
return(t=this._getStack())?(s.prepareNextFile&&!n.pending.length&&n._prepareNextFile(),t.shift()):n.runing?(!n.pending.length&&n._getStats().numOfQueue&&n._prepareNextFile(),e=n.pending.shift(),r=function(e){return e?(t=function(e,t){var r,i,n=[],s=e.source.size,o=t?Math.ceil(s/t):1,u=0,a=0
for(i={file:e,has:function(){return!!n.length},shift:function(){return n.shift()},unshift:function(e){n.unshift(e)}};a<o;)r=Math.min(t,s-u),n.push({file:e,start:u,end:t?u+r:s,total:s,chunks:o,chunk:a++,cuted:i}),u+=r
return e.blocks=n.concat(),e.remaning=n.length,i}(e,s.chunked?s.chunkSize:0),n.stack.push(t),t.shift()):null},o(e)?(i=e.file,(e=e[e.pipe?"pipe":"then"](r)).file=i,e):r(e)):void 0},_prepareNextFile:function(){var t,r=this,i=r.request("fetch-file"),n=r.pending
i&&(t=r.request("before-send-file",i,function(){return i.getStatus()===f.PROGRESS||i.getStatus()===f.INTERRUPT?i:r._finishFile(i)}),r.owner.trigger("uploadStart",i),i.setStatus(f.PROGRESS),t.file=i,t.done(function(){var e=d.inArray(t,n)
~e&&n.splice(e,1,i)}),t.fail(function(e){i.setStatus(f.ERROR,e),r.owner.trigger("uploadError",i,e),r.owner.trigger("uploadComplete",i)}),n.push(t))},_popBlock:function(e){var t=d.inArray(e,this.pool)
this.pool.splice(t,1),e.file.remaning--,this.remaning--},_startSend:function(e){var t=this,r=e.file
r.getStatus()===f.PROGRESS?(t.pool.push(e),t.remaning++,e.blob=1===e.chunks?r.source:r.source.slice(e.start,e.end),t.request("before-send",e,function(){r.getStatus()===f.PROGRESS?t._doSend(e):(t._popBlock(e),c.default.nextTick(t.__tick))}).fail(function(){1===r.remaning?t._finishFile(r).always(function(){e.percentage=1,t._popBlock(e),t.owner.trigger("uploadComplete",r),c.default.nextTick(t.__tick)}):(e.percentage=1,t.updateFileProgress(r),t._popBlock(e),c.default.nextTick(t.__tick))})):r.getStatus()===f.INTERRUPT&&t._putback(e)},_doSend:function(r){var i,n,s=this,o=s.owner,u=d.extend({},s.options,r.options),a=r.file,l=new p.default(u),e=d.extend({},u.formData),t=d.extend({},u.headers);(r.transport=l).on("destroy",function(){delete r.transport,s._popBlock(r),c.default.nextTick(s.__tick)}),l.on("progress",function(e){r.percentage=e,s.updateFileProgress(a)}),i=function(t){var e
return(n=l.getResponseAsJson()||{})._raw=l.getResponse(),n._headers=l.getResponseHeaders(),r.response=n,e=function(e){t=e},o.trigger("uploadAccept",r,n,e)||(t=t||"server"),t},l.on("error",function(e,t){r.retried=r.retried||0,1<r.chunks&&~"http,abort,server".indexOf(e.replace(/-.*/,""))&&r.retried<u.chunkRetry?(r.retried++,s.retryTimer=setTimeout(function(){l.send()},u.chunkRetryDelay||1e3)):(t||"server"!==e||(e=i(e)),a.setStatus(f.ERROR,e),o.trigger("uploadError",a,e),o.trigger("uploadComplete",a))}),l.on("load",function(){var e;(e=i())?l.trigger("error",e,!0):1===a.remaning?s._finishFile(a,n):l.destroy()}),e=d.extend(e,{id:a.id,name:a.name,type:a.type,lastModifiedDate:a.lastModifiedDate,size:a.size}),1<r.chunks&&d.extend(e,{chunks:r.chunks,chunk:r.chunk}),o.trigger("uploadBeforeSend",r,e,t),l.appendBlob(u.fileVal,r.blob,a.name),l.append(e),l.setRequestHeader(t),l.send()},_finishFile:function(t,e,r){var i=this.owner
return i.request("after-send-file",arguments,function(){t.setStatus(f.COMPLETE),i.trigger("uploadSuccess",t,e,r)}).fail(function(e){t.getStatus()===f.PROGRESS&&t.setStatus(f.ERROR,e),i.trigger("uploadError",t,e)}).always(function(){i.trigger("uploadComplete",t)})},updateFileProgress:function(e){var t,r=0
e.blocks&&(d.each(e.blocks,function(e,t){r+=(t.percentage||0)*(t.end-t.start)}),t=r/e.size,this.owner.trigger("uploadProgress",e,t||0))},destroy:function(){clearTimeout(this.retryTimer)}})})
define("vue-weui/src/upload/3rd/webuploader/lib/transport.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/client.js","vue-weui/src/upload/3rd/webuploader/mediator.js"],function(e,t,o){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=u(e("vue-weui/src/upload/3rd/webuploader/base.js")),n=u(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js")),s=u(e("vue-weui/src/upload/3rd/webuploader/mediator.js"))
function u(e){return e&&e.__esModule?e:{default:e}}var a=r.default.$
function d(e){var t=this
e=t.options=a.extend(!0,{},d.options,e||{}),n.default.call(this,"Transport"),this._blob=null,this._formData=e.formData||{},this._headers=e.headers||{},this.on("progress",this._timeout),this.on("load error",function(){t.trigger("progress",1),clearTimeout(t._timer)})}d.options={server:"",method:"POST",withCredentials:!1,fileVal:"file",timeout:12e4,formData:{},headers:{},sendAsBinary:!1},a.extend(d.prototype,{appendBlob:function(e,t,o){var i=this,r=i.options
i.getRuid()&&i.disconnectRuntime(),i.connectRuntime(t.ruid,function(){i.exec("init")}),i._blob=t,r.fileVal=e||r.fileVal,r.filename=o||r.filename},append:function(e,t){"object"===(void 0===e?"undefined":i(e))?a.extend(this._formData,e):this._formData[e]=t},setRequestHeader:function(e,t){"object"===(void 0===e?"undefined":i(e))?a.extend(this._headers,e):this._headers[e]=t},send:function(e){this.exec("send",e),this._timeout()},abort:function(){return clearTimeout(this._timer),this.exec("abort")},destroy:function(){this.trigger("destroy"),this.off(),this.exec("destroy"),this.disconnectRuntime()},getResponseHeaders:function(){return this.exec("getResponseHeaders")},getResponse:function(){return this.exec("getResponse")},getResponseAsJson:function(){return this.exec("getResponseAsJson")},getStatus:function(){return this.exec("getStatus")},_timeout:function(){var e=this,t=e.options.timeout
t&&(clearTimeout(e._timer),e._timer=setTimeout(function(){e.abort(),e.trigger("error","timeout")},t))}}),s.default.installTo(d.prototype),t.default=d})
define("vue-weui/src/upload/3rd/webuploader/widgets/validator.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/file.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,i,u){"use strict"
Object.defineProperty(i,"__esModule",{value:!0})
var t=n(e("vue-weui/src/upload/3rd/webuploader/base.js")),r=n(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),o=n(e("vue-weui/src/upload/3rd/webuploader/file.js"))
function n(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js")
var d,a=t.default.$,l={}
d={addValidator:function(e,i){l[e]=i},removeValidator:function(e){delete l[e]}},r.default.register({name:"validator",init:function(){var e=this
t.default.nextTick(function(){a.each(l,function(){this.call(e.owner)})})}}),d.addValidator("fileNumLimit",function(){var e=this,i=e.options,u=0,t=parseInt(i.fileNumLimit,10),r=!0
t&&(e.on("beforeFileQueued",function(e){return!!this.trigger("beforeFileQueuedCheckfileNumLimit",e,u)&&(t<=u&&r&&(r=!1,this.trigger("error","Q_EXCEED_NUM_LIMIT",t,e),setTimeout(function(){r=!0},1)),!(t<=u))}),e.on("fileQueued",function(){u++}),e.on("fileDequeued",function(){u--}),e.on("reset",function(){u=0}))}),d.addValidator("fileSizeLimit",function(){var e=this,i=e.options,u=0,t=parseInt(i.fileSizeLimit,10),r=!0
t&&(e.on("beforeFileQueued",function(e){var i=u+e.size>t
return i&&r&&(r=!1,this.trigger("error","Q_EXCEED_SIZE_LIMIT",t,e),setTimeout(function(){r=!0},1)),!i}),e.on("fileQueued",function(e){u+=e.size}),e.on("fileDequeued",function(e){u-=e.size}),e.on("reset",function(){u=0}))}),d.addValidator("fileSingleSizeLimit",function(){var i=this.options.fileSingleSizeLimit
i&&this.on("beforeFileQueued",function(e){if(e.size>i)return e.setStatus(o.default.Status.INVALID,"exceed_size"),this.trigger("error","F_EXCEED_SIZE",i,e),!1})}),d.addValidator("duplicate",function(){var e=this,i=e.options,u={}
i.duplicate||(e.on("beforeFileQueued",function(e){var i=e.__hash||(e.__hash=function(e){for(var i=0,u=0,t=e.length;u<t;u++)i=e.charCodeAt(u)+(i<<6)+(i<<16)-i
return i}(e.name+e.size+e.lastModifiedDate))
if(u[i])return this.trigger("error","F_DUPLICATE",e),!1}),e.on("fileQueued",function(e){var i=e.__hash
i&&(u[i]=!0)}),e.on("fileDequeued",function(e){var i=e.__hash
i&&delete u[i]}),e.on("reset",function(){u={}}))}),i.default=d})
define("vue-weui/src/upload/3rd/webuploader/widgets/md5.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/uploader.js","vue-weui/src/upload/3rd/webuploader/lib/blob.js","vue-weui/src/upload/3rd/webuploader/lib/md5.js","vue-weui/src/upload/3rd/webuploader/widgets/widget.js"],function(e,u,d){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var s=o(e("vue-weui/src/upload/3rd/webuploader/base.js")),r=o(e("vue-weui/src/upload/3rd/webuploader/uploader.js")),a=o(e("vue-weui/src/upload/3rd/webuploader/lib/blob.js")),i=o(e("vue-weui/src/upload/3rd/webuploader/lib/md5.js"))
function o(e){return e&&e.__esModule?e:{default:e}}e("vue-weui/src/upload/3rd/webuploader/widgets/widget.js"),u.default=r.default.register({name:"md5",md5File:function(e,u,d){var r=new i.default,o=s.default.Deferred(),l=e instanceof a.default?e:this.request("get-file",e).source
return r.on("progress load",function(e){e=e||{},o.notify(e.total?e.loaded/e.total:1)}),r.on("complete",function(){o.resolve(r.getResult())}),r.on("error",function(e){o.reject(e)}),1<arguments.length&&(d=d||0,(u=u||0)<0&&(u=l.size+u),d<0&&(d=l.size+d),d=Math.min(d,l.size),l=l.slice(u,d)),r.loadFromBlob(l),o.promise()}})})
define("vue-weui/src/upload/3rd/webuploader/lib/md5.js",["vue-weui/src/upload/3rd/webuploader/runtime/client.js","vue-weui/src/upload/3rd/webuploader/mediator.js"],function(e,u,t){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var o=r(e("vue-weui/src/upload/3rd/webuploader/runtime/client.js"))
function r(e){return e&&e.__esModule?e:{default:e}}function d(){o.default.call(this,"Md5")}r(e("vue-weui/src/upload/3rd/webuploader/mediator.js")).default.installTo(d.prototype),d.prototype.loadFromBlob=function(e){var u=this
u.getRuid()&&u.disconnectRuntime(),u.connectRuntime(e.ruid,function(){u.exec("init"),u.exec("loadFromBlob",e)})},d.prototype.getResult=function(){return this.exec("getResult")},u.default=d})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/blob.js",["vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js","vue-weui/src/upload/3rd/webuploader/lib/blob.js"],function(e,u,r){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var l=t(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js")),i=t(e("vue-weui/src/upload/3rd/webuploader/lib/blob.js"))
function t(e){return e&&e.__esModule?e:{default:e}}u.default=l.default.register("Blob",{slice:function(e,u){var r=this.owner.source,l=r.slice||r.webkitSlice||r.mozSlice
return r=l.call(r,e,u),new i.default(this.getRuid(),r)}})})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/runtime.js","vue-weui/src/upload/3rd/webuploader/runtime/compbase.js"],function(e,u,r){"use strict"
Object.defineProperty(u,"__esModule",{value:!0})
var n=d(e("vue-weui/src/upload/3rd/webuploader/base.js")),t=d(e("vue-weui/src/upload/3rd/webuploader/runtime/runtime.js")),i=d(e("vue-weui/src/upload/3rd/webuploader/runtime/compbase.js"))
function d(e){return e&&e.__esModule?e:{default:e}}var o="html5",s={}
function a(){var d={},a=this,e=this.destroy
t.default.apply(a,arguments),a.type=o,a.exec=function(e,u){var r,t=this.uid,i=n.default.slice(arguments,2)
if(s[e]&&(r=d[t]=d[t]||new s[e](this,a))[u])return r[u].apply(r,i)},a.destroy=function(){return e&&e.apply(this,arguments)}}n.default.inherits(t.default,{constructor:a,init:function(){var e=this
setTimeout(function(){e.trigger("ready")},1)}}),a.register=function(e,u){return s[e]=n.default.inherits(i.default,u)},window.Blob&&window.FileReader&&window.DataView&&t.default.addRuntime(o,a),u.default=a})
define("vue-weui/src/upload/3rd/webuploader/runtime/compbase.js",[],function(e,t,i){"use strict"
Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){this.owner=e,this.options=e.options,this.getRuntime=function(){return t},this.getRuid=function(){return t.uid},this.trigger=function(){return e.trigger.apply(e,arguments)}}})
define("vue-weui/src/upload/3rd/webuploader/runtime/html5/dnd.js",["vue-weui/src/upload/3rd/webuploader/base.js","vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js","vue-weui/src/upload/3rd/webuploader/lib/file.js"],function(e,r,t){"use strict"
Object.defineProperty(r,"__esModule",{value:!0})
var v=d(e("vue-weui/src/upload/3rd/webuploader/base.js")),a=d(e("vue-weui/src/upload/3rd/webuploader/runtime/html5/runtime.js")),i=d(e("vue-weui/src/upload/3rd/webuploader/lib/file.js"))
function d(e){return e&&e.__esModule?e:{default:e}}var l=v.default.$,s="webuploader-dnd-"
r.default=a.default.register("DragAndDrop",{init:function(){var e=this.elem=this.options.container
this.dragEnterHandler=v.default.bindFn(this._dragEnterHandler,this),this.dragOverHandler=v.default.bindFn(this._dragOverHandler,this),this.dragLeaveHandler=v.default.bindFn(this._dragLeaveHandler,this),this.dropHandler=v.default.bindFn(this._dropHandler,this),this.dndOver=!1,e.on("dragenter",this.dragEnterHandler),e.on("dragover",this.dragOverHandler),e.on("dragleave",this.dragLeaveHandler),e.on("drop",this.dropHandler),this.options.disableGlobalDnd&&(l(document).on("dragover",this.dragOverHandler),l(document).on("drop",this.dropHandler))},_dragEnterHandler:function(e){var r,t=this,a=t._denied||!1
return e=e.originalEvent||e,t.dndOver||(t.dndOver=!0,(r=e.dataTransfer.items)&&r.length&&(t._denied=a=!t.trigger("accept",r)),t.elem.addClass(s+"over"),t.elem[a?"addClass":"removeClass"](s+"denied"),t.trigger("dragOver")),e.dataTransfer.dropEffect=a?"none":"copy",!1},_dragOverHandler:function(e){var r=this.elem.parent().get(0)
return r&&!l.contains(r,e.currentTarget)||(clearTimeout(this._leaveTimer),this._dragEnterHandler.call(this,e)),!1},_dragLeaveHandler:function(){var e,r=this
return e=function(){r.dndOver=!1,r.elem.removeClass(s+"over "+s+"denied")},r.trigger("dragLeave"),clearTimeout(r._leaveTimer),r._leaveTimer=setTimeout(e,100),!1},_dropHandler:function(e){var r,t,a=this,d=a.getRuid(),n=a.elem.parent().get(0)
if(n&&!l.contains(n,e.currentTarget))return!1
r=(e=e.originalEvent||e).dataTransfer
try{t=r.getData("text/html")}catch(e){}return a.dndOver=!1,a.elem.removeClass(s+"over"),r&&!t?(a._getTansferFiles(r,function(e){a.trigger("drop",l.map(e,function(e){return new i.default(d,e)}))}),!1):void 0},_getTansferFiles:function(e,r){var t,a,d,n,i,l,s,o=[],u=[]
for(t=e.items,a=e.files,s=!(!t||!t[0].webkitGetAsEntry),i=0,l=a.length;i<l;i++)d=a[i],n=t&&t[i],s&&n.webkitGetAsEntry().isDirectory?u.push(this._traverseDirectoryTree(n.webkitGetAsEntry(),o)):o.push(d)
v.default.when.apply(v.default,u).done(function(){o.length&&r(o)})},_traverseDirectoryTree:function(e,n){var i=v.default.Deferred(),l=this
return e.isFile?e.file(function(e){n.push(e),i.resolve()}):e.isDirectory&&e.createReader().readEntries(function(e){var r,t=e.length,a=[],d=[]
for(r=0;r<t;r++)a.push(l._traverseDirectoryTree(e[r],d))
v.default.when.apply(v.default,a).then(function(){n.push.apply(n,d),i.resolve()},i.reject)}),i.promise()},destroy:function(){var e=this.elem
e&&(e.off("dragenter",this.dragEnterHandler),e.off("dragover",this.dragOverHandler),e.off("dragleave",this.dragLeaveHandler),e.off("drop",this.dropHandler),this.options.disableGlobalDnd&&(l(document).off("dragover",this.dragOverHandler),l(document).off("drop",this.dropHandler)))}})})
