"use strict"
define("3rd/editor/plugin/legalhint.js",["3rd/editor/tpl/legal_check.tpl.js"],function(t,i,e){var n=t("3rd/editor/tpl/legal_check.tpl.js")
return{init:function(){this.container=$("#legal_check_container"),this.wordcount=$("#word_count_container"),this.checktext=$("#js_checktext"),this.container&&0!==this.container.length||$("#bot_bar_left_container").prepend(template.compile(n)({hintState:"自检中"}))},setText:function(t){switch(this.init(),t){case 0:this.container.find(".icon__legal__check").removeClass("finish"),this.container.find(".title__legal__check").text("自检中")
break
case 1:this.container.find(".icon__legal__check").addClass("finish"),this.container.find(".title__legal__check").text("自检完成，保存中...")
break
case 2:this.container.find(".icon__legal__check").addClass("finish"),this.container.find(".title__legal__check").text("自检失败，保存中...")}},show:function(){this.init(),this.container.css("display","inline-block"),this.wordcount.css("display","none"),this.checktext.css("display","none")},hide:function(){this.init(),this.container.css("display","none"),this.container.remove(),this.wordcount.css("display","inline-block"),this.checktext.css("display","inline-block")}}})
define("3rd/editor/tpl/legal_check.tpl.js",[],function(e,l,a){return'<span id="legal_check_container" class="fold_tips" style="display: none;">      <span class="icon__legal__check"></span><span class="title__legal__check">{hintState}</span></span>'})
define("pages/modules/legal_check_dialog/legal_check_dialog.tpl.js",[],function(e,t,l){return'<div class="mode_media_dialog_legal_check">        <mp-dialog         v-model="dialogShow"        v-if="isLegalShow"        weui="true"        class="legal_check_dialog"        title="自检工具"        :width="740"        @close="dialogClose">                        <template v-if="stepInner === 1 && canuseselfcheck === 1">            <div class="legal_check_dialog__body">                <div class="legal_check_dialog__info-empty">                    <p class="legal_check_dialog__info-empty__info">自检工具能够检测文章内容存在的违规风险，主要支持检测垃圾营销、欺诈等可供系统识别的类型。反馈结果仅供参考以降低违规风险，并不代表最终的审核与处理结果。目前仅支持检测文字内容。</p>                </div>            </div>            <template slot="footer">                <mp-checkbox class="legal_check_dialog__is-check" v-model="isCheck">                    在「保存」时自动进行校验                </mp-checkbox>                                  <mp-button type="primary" @click="startSelfCheck">开始检测</mp-button>            </template>        </template>        <template v-if="stepInner === 2">            <div class="legal_check_dialog__body">                <div class="legal_check_dialog__info-empty">                    <p class="legal_check_dialog__info-empty__info">自检工具能够检测文章可能存在的违规内容。反馈结果仅供参考以降低违规风险，并不保证或代表最终的审核或处理结果。目前仅支持图文消息检测。</p>                </div>            </div>            <template slot="footer">                <mp-checkbox class="legal_check_dialog__is-check" v-model="isCheck" :checkedval="true" :uncheckedval="false">                    在「保存」时自动进行校验                </mp-checkbox>                  <mp-button type="primary"  :loading="true">检测中</mp-button>            </template>        </template>                <template v-if="stepInner === 1 && !canuseselfcheck">            <div class="legal_check_dialog__body">                <div class="legal_check_dialog__info-empty">                    <p class="legal_check_dialog__info-empty__info">根据违规情况的评估结果，暂不支持使用此功能。</p>                </div>            </div>            <template slot="footer">                <mp-button type="default" @click="dialogClose">我知道了</mp-button>            </template>        </template>                <div class="legal_check_dialog__status" v-if="stepInner===3">            <span class="weui-desktop-msg__hd">                <i class="weui-desktop-icon-success weui-desktop-icon_msg"></i>            </span>            <div class="weui-desktop-msg__bd">                <h4 class="weui-desktop-msg__title">检测完毕，文章暂无风险。</h4>                <div class="weui-desktop-msg__desc-wrp">                    <div class="weui-desktop-msg__desc">反馈结果仅供参考以降低违规风险，并不保证或代表最终的审核或处理结果。</div>                </div>            </div>        </div>                <div class="legal_check_dialog__status" v-if="stepInner === 6">            <span class="weui-desktop-msg__hd">                <i class="weui-desktop-icon-warn weui-desktop-icon_msg"></i>            </span>            <div class="weui-desktop-msg__bd">                <h4 class="weui-desktop-msg__title" ref="error_wording">{{ errorWording }}</h4>            </div>            <mp-button type="primary" @click="startSelfCheck">重新检测</mp-button>        </div>                <template v-if="stepInner===4 || stepInner===5">            <mp-msg                v-if="hasMustModify"                class="legal_check_dialog__tips"                icon="warn"                size="mini"                content="存在以下风险，其中包含需要重新编辑才可保存的内容，请修改。"></mp-msg>            <mp-table class="legal_check_dialog_table" :data="tableData"  @click-content="handleClickContent"></mp-table>            <template slot="footer">                <mp-button type="primary" @click="goToArticle">前往修改</mp-button>                <mp-button v-if="!(fromsave && !hasMustModify)" type="default"  @click="dialogClose">取消</mp-button>                <mp-button v-if="!hasMustModify" type="default"  @click="saveArticle">                   <span v-if="isneedpreview">                       继续预览                   </span>                   <span v-else>                       继续保存                   </span>                </mp-button>            </template>        </template>        <template v-if="stepInner===7">            <mp-table class="legal_check_dialog_table" :data="tableData"  @click-content="handleClickContent"></mp-table>            <template slot="footer">                <mp-button v-if="hasModify" type="primary" @click="goToArticle">前往修改</mp-button>                <mp-button type="primary" @click="dialogClose">我知道了</mp-button>            </template>        </template>    </mp-dialog></div>'})
define("pages/editor/videoTransitionDialog4web1.js",["pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.js"],function(i,o,a){"use strict"
function t(i){return{defaultShow:!1,isShow:!1,type:"setting",selectedvalue:i}}i("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.js"),a.exports={getParams:t,bindEvent:function(o){o.eventBus.$on("requireVideoAdTransitionDialog",function(){o.isRequired||(i("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.js"),o.isRequired=!0)}),o.eventBus.$on("showVideoAdTransitionDialog",function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
o.eventBus.$emit("requireVideoAdTransitionDialog"),function(i,o){var a=t()
for(var e in o)void 0!==a[e]&&(a[e]=o[e])
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(i.params[n]=a[n])
i.params.isShow=!0,i.params.defaultShow=!0}(o,i),o.eventBus.$emit("update-component",{key:"mp-video-ad-backtransition-dialog",params:o.params})})},close:function(i){i.eventBus.$emit("showVideoAdTransitionDialog_callback",i.data)}}})
define("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.js",["vue-weui/src/form/form_item.js","vue-weui/src/radio/radio.js","vue-weui/src/radio/radio_group.js","vue-weui/src/dialog/dialog.js","vue-weui/src/button/button.js","vue-weui/src/checkbox/checkbox.js","pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.css.js","pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.tpl.js"],function(i,e,o){"use strict"
i("vue-weui/src/form/form_item.js"),i("vue-weui/src/radio/radio.js"),i("vue-weui/src/radio/radio_group.js"),i("vue-weui/src/dialog/dialog.js"),i("vue-weui/src/button/button.js"),i("vue-weui/src/checkbox/checkbox.js"),i("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.css.js")
var t=i("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.tpl.js")
Vue.component("mp-video-ad-backtransition-dialog",{template:t,props:{title:{type:String,default:"开启尾贴广告"},type:{type:String,default:"setting"},value:{type:Boolean,default:!0},selectedvalue:{type:String,default:""}},data:function(){return{dialogShow:!1,isActive:!1,selectedAdInfo:this.selectedvalue}},watch:{value:function(i){!0===i?this.show():this.hide()},dialogShow:function(i){this.$emit("input",i)}},mounted:function(){!0===this.value?this.show():this.hide()},methods:{show:function(){!0!==this.dialogShow&&(this.dialogShow=!0)},hide:function(){!1!==this.dialogShow&&(this.dialogShow=!1)},onDialogClose:function(i){this[i]=!1,this.hide(),this.$emit("cancel",!1)},onConfirm:function(){this.$emit("select",this.selectedAdInfo),this.hide()},removeAnimation:function(){this.isActive=!1},handleShowAnimation:function(){this.isActive=!0,setTimeout(this.removeAnimation,1e3)}}})})
define("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.css.js", [], function (require, exports, module){module.exports = "@grid BreakPoints: {  xs: 0;  sm: 576px;  md: 768px;  lg: 992px;  xl: 1200px;}@container MaxWidths: {  xs: auto;  sm: 540px;  md: 720px;  lg: 960px;  xl: 1140px;}/*How to usefont-family: 'wechatnum';*/.video-ad-backpanel-deal-dialog .weui-desktop-dialog__bd {  text-align: center;  padding: 60px 0;}.video-ad-backpanel-deal-dialog .dialog_foot_tips {  margin-bottom: 10px;}.video-ad-backpanel-select-dialog .video-ad-preview-box {  position: relative;  width: 200px;  height: 130px;  margin: 0 auto;  background-color: var(--weuiDesktop_globalColor);}.video-ad-backpanel-select-dialog .video-ad-preview-box.active {  animation: popup 0.4s ease 0s 1;}.video-ad-backpanel-select-dialog .video-ad-preview-box.active .video-ad-preview-info {  animation: fadeinout 2s ease 0s 1 forwards;}.video-ad-backpanel-select-dialog .video-ad-preview-box.active .video-ad-preview-box-operation {  animation: operationHide 2s ease 0s 1;}.video-ad-backpanel-select-dialog .video-ad-preview-info {  line-height: 130px;  text-align: center;  color: var(--weuiDesktop_FG_Text_lightColor);}.video-ad-backpanel-select-dialog .video-ad-preview-box-operation {  position: absolute;  bottom: 10px;  left: 10px;  line-height: 18px;  border-radius: 9px;  background-color: var(--weuiDesktop_descColor);  padding: 0 10px;  color: var(--weuiDesktop_FG_Text_lightColor);  text-align: center;  display: inline-block;  font-size: var(--weuiDesktop_descFontSize);}.video-ad-backpanel-select-dialog .weui-desktop-form__control-group_choose {  display: block;  padding: 30px 150px 0;  margin-bottom: 0;}.video-ad-backpanel-select-dialog .weui-desktop-form__label {  float: none;  margin-bottom: 10px;  display: block;  width: auto;}.video-ad-backpanel-select-dialog .weui-desktop-form__controls {  width: initial;}.video-ad-backpanel-select-dialog .weui-desktop-form__check-label {  display: block;  margin-bottom: 10px;}.video-ad-backpanel-select-dialog .video-ad-backpanel-select-foot-tips {  color: var(--weuiDesktop_FG_Text_descColor);  margin-bottom: 20px;}@keyframes popup {  0% {    opacity: 0;    transform: scale(0.8);  }  70% {    transform: scale(1.02);  }  100% {    opacity: 1;    transform: scale(1);  }}@keyframes fadeinout {  0% {    opacity: 0;  }  50% {    opacity: 1;  }  /*80%{    opacity: 1;  }*/  100% {    opacity: 1;  }}@keyframes operationHide {  0% {    opacity: 0;  }  100% {    opacity: 0;  }}";});define("pages/modules/media_dialog/video_ad_transition_dialog/video_ad_transition_dialog.tpl.js",[],function(e,a,o){return'<div>    <mp-dialog v-if="type === \'setting\'" v-model="dialogShow" weui="true" class="video-ad-backpanel-select-dialog" :title="title" @close="onDialogClose" rootElm="#vue_app">    <template>      <div class="video-ad-backpanel-select-body">        <mp-form-item class="weui-desktop-form__control-group_choose">          <template slot="label">你可以选择一个广告过渡效果，让视频播放完成后更自然地展示视频后贴广告。</template>          <mp-radio-group v-model="selectedAdInfo">            <mp-radio value=\'接下来，是广告时间\' name="test" checked>接下来，是广告时间</mp-radio>            <mp-radio value=\'最后，是今天的广告\' name="test">最后，是今天的广告</mp-radio>            <mp-radio value=\'广告时刻，获取更多讯息\' name="test">广告时刻，获取更多讯息</mp-radio>            <mp-radio value=\'即将进入广告，3、2、1\' name="test">即将进入广告，3、2、1</mp-radio>            <mp-radio value=\'最后是今日广告，敬请探索\' name="test">最后是今日广告，敬请探索</mp-radio>          </mp-radio-group>        </mp-form-item>        <div class="video-ad-backpanel-select-preview">            <div class="video-ad-preview-box" :class="{\'active\': isActive}">                <p class="video-ad-preview-info">{{ selectedAdInfo }}</p>                <a class="video-ad-preview-box-operation" href="javascript:;" @click="handleShowAnimation">查看过渡示例</a>            </div>        </div>      </div>    </template>    <template slot="footer">      <p class="video-ad-backpanel-select-foot-tips">此处只能设置本视频的尾贴广告 </p>      <mp-button type="primary" @click="onConfirm">确定</mp-button>      <mp-button @click="onDialogClose">取消</mp-button>    </template>  </mp-dialog>  </div>'})
define("pages/editor/blockquoteDialog4Web1.js",["pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.js"],function(e,o,t){"use strict"
function n(){return{isShow:!1,text:"",dataset:{},hasReportOverSize:!1}}t.exports={getParams:n,bindEvent:function(o){o.eventBus.$on("requireBlockquoteDialog",function(){o.isRequired||(e("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.js"),o.isRequired=!0)}),o.eventBus.$on("showBlockquoteDialog",function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}
o.eventBus.$emit("requireBlockquoteDialog"),function(e,o){var t=n()
for(var a in o)void 0!==t[a]&&(t[a]=o[a])
for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e.params[i]=t[i])
e.params.isShow=!0}(o,e),o.eventBus.$emit("update-component",{key:"mp-blockquote-dialog",params:o.params})})},close:function(e){e.eventBus.$emit("showBlockquoteDialog_callback",e.data)}}})
define("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.js",["pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.css.js","vue-weui/src/dialog/dialog.js","vue-weui/src/pagination/pagination.js","vue-weui/src/tab/tab.js","vue-weui/src/search/search.js","vue-weui/src/form/form.js","vue-weui/src/form/form_item.js","vue-weui/src/input/input.js","vue-weui/src/radio/radio.js","vue-weui/src/radio/radio_group.js","pages/modules/utils/str_util.js","3rd/editor/common/monitor.js","pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.tpl.js","pages/modules/utils/object.js","pages/modules/utils/time.js","pages/modules/utils/cgi.js"],function(e,t,i){"use strict"
e("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.css.js"),e("vue-weui/src/dialog/dialog.js"),e("vue-weui/src/pagination/pagination.js"),e("vue-weui/src/tab/tab.js"),e("vue-weui/src/search/search.js"),e("vue-weui/src/form/form.js"),e("vue-weui/src/form/form_item.js"),e("vue-weui/src/input/input.js"),e("vue-weui/src/radio/radio.js"),e("vue-weui/src/radio/radio_group.js")
var r=e("pages/modules/utils/str_util.js"),a=e("3rd/editor/common/monitor.js"),s=e("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.tpl.js"),o=e("pages/modules/utils/object.js").assign,n=e("pages/modules/utils/time.js").formatDate,d=e("pages/modules/utils/cgi.js"),l={tab:"inner",source:"url",digest:"",digestError:"",from:"",search:{url:{data:"",loading:null,error:"",result:null},biz:{data:"",loading:null,error:"",result:[],pagination:{total:0,current:0}},article:{data:"",loading:null,result:[],pagination:{total:0,current:0,showJumper:!0,showEndpage:!0}}},chooseUrlIdx:null,chooseBizIdx:null,chooseArticleIdx:null,can_use_new_search:window.wx&&window.wx.cgiData&&window.wx.cgiData.can_use_new_search||0,articleCacheData:{},showPageMap:[],noKey:"__mpnokey",editorReportData:{innerClick:{id:"122333",key:"75",len:0},outClick:{id:"122333",key:"76",len:0},urlClick:{id:"122333",key:"77",len:0},bizClick:{id:"122333",key:"78",len:0}}}
Vue.component("mp-blockquote-dialog",{template:s,props:{value:{type:Boolean,default:!1},text:{type:String,default:""},dataset:{type:Object,default:function(){}},hasReportOverSize:{type:Boolean,default:!1}},data:function(){return o({defaultBizAvatar:window.wx.cgiData.defaultBizAvatar,tabs:[{id:"inner",name:"公众号文章",url:"",show:!0},{id:"out",name:"外部内容",url:"",show:!0}],dialogShow:!1},JSON.parse(JSON.stringify(l)))},computed:{confirmDisabled:function(){if(""===this.digest&&""===this.text||300<this.digest.length)return!0
if("inner"===this.tab)switch(this.source){case"url":if(null===this.chooseUrlIdx)return!0
break
case"biz":if(null===this.chooseArticleIdx)return!0
break
default:return!0}return!1}},watch:{dialogShow:function(e){this.$emit("input",e)},value:function(e){!0===e?this.show():this.hide()},dataset:function(e){void 0!==e.type&&("1"===e.type?(this.tab="inner",this.search.url.data=e.url,this.searchUrl()):(this.tab="out",this.from=e.sourceTitle))},source:function(e){var t=this.editorReportData[e+"Click"]
t&&t.len++}},filters:{formatDate:function(e){return n(e,"YYYY-MM-DD")}},created:function(){this._parseValue(this.value),this._parseDataset(this.dataset)},methods:{_parseValue:function(e){!0===e?this.show():this.hide()},_parseDataset:function(e){void 0!==e.type&&("1"===e.type?(this.tab="inner",this.search.url.data=e.url,this.searchUrl()):(this.tab="out",this.from=e.sourceTitle))},getEditorReportData:function(){var e=[]
for(var t in this.editorReportData)if(Object.prototype.hasOwnProperty.call(this.editorReportData,t)){var i=this.editorReportData[t]
0<i.len&&e.push({id:i.id,key:i.key,len:i.len})}return e},show:function(){!0!==this.dialogShow&&(this.initData(),this.dialogShow=!0)},hide:function(){!1!==this.dialogShow&&(this.dialogShow=!1)},dialogClose:function(){this.hide(),this.$emit("close",{hasReportOverSize:this.hasReportOverSize,editorReportData:this.getEditorReportData()})},initData:function(){for(var e in o(this,JSON.parse(JSON.stringify(l))),this.innerSearchUrl="",this.innerSearchBiz="",this.innerSearchArticle="",this.editorReportData)Object.prototype.hasOwnProperty.call(this.editorReportData,e)&&(this.editorReportData[e].len=0)},tabChange:function(e){this.tab=e
var t=this.editorReportData[e+"Click"]
t&&t.len++},digestInput:function(){var e=this;(this.digestError="")===this.digest?this.$nextTick(function(){e.digestError="请输入引用文本"}):300<this.digest.length&&(this.hasReportOverSize||(a.setSum(69271,37,1),this.hasReportOverSize=!0),this.$nextTick(function(){e.digestError="为避免不合理引用而产生侵权风险，单次引用字数不得超过300字"}))},searchUrl:function(){var t=this,i=this.search.url
this.innerSearchUrl!==i.data&&(i.error="",i.result=null,this.innerSearchUrl=i.data,""!==i.data&&/^https?:\/\/mp\.weixin\.qq\.com.*/.test(i.data)?(i.loading=!0,d.get({url:"/cgi-bin/quotecgi?action=geturlinfo",data:{url:this.innerSearchUrl}},function(e){if(e&&e.base_resp)switch(e.base_resp.ret){case 0:delete e.base_resp,t.chooseUrlIdx=0,i.result=e
break
case 17987001:case 17987002:i.error="未找到相应的文章链接"
break
case 17987003:i.error="请输入已群发的公众号文章链接"
break
case 17987004:i.error="付费文章不可被引用"
break
default:i.error="系统错误，请稍候重试",t.innerSearchUrl=""}else i.error="系统错误，请稍候重试",t.innerSearchUrl=""
i.loading=!1},function(){i.error="系统错误，请稍候重试",t.innerSearchUrl="",i.loading=!1})):this.$nextTick(function(){i.error="请输入以 https://mp.weixin.qq.com 开头的正确的公众号文章链接"}))},searchBiz:function(){var e=this.search.biz
""!==e.data?this.renderBizData(e.data):e.error="请输入文章所属公众号的名称"},chooseBiz:function(e){this.chooseBizIdx=e,this.search.article.data="",this.searchArticle()},searchArticle:function(e){var t=0<arguments.length&&void 0!==e?e:""
this.chooseArticleIdx=null,this.renderArticleData(t)},confirm:function(){var e={type:this.tab,source:this.source,digest:this.digest,digestLen:this.digest.length||this.text.length,text:this.text,article:{},hasReportOverSize:this.hasReportOverSize,editorReportData:this.getEditorReportData()}
if(""===e.text&&(e.digest="<p>"+r.html(e.digest,!0)+"</p>"),"inner"===e.type)if("url"===e.source){var t=this.search.url.result
e.article={title:t.title,url:t.url,nickname:t.nickname,authorName:t.author_name}}else{var i=this.search.biz.result[this.chooseBizIdx],a=this.search.article.result[this.chooseArticleIdx]
e.article={title:a.title.replace(/<\/?em>/g,""),url:a.link,nickname:i.nickname,authorName:a.author_name}}else e.from=this.from
this.$emit("select",JSON.parse(JSON.stringify(e))),this.hide()},bizPageChange:function(e){var t=e.currentPage
this.renderBizData(this.innerSearchBiz,t)},articlePageChange:function(e){var t=e.currentPage
this.chooseArticleIdx=null
var i=t
this.can_use_new_search&&this.innerSearchArticle&&(this.showPageMap[t-1]?i=this.showPageMap[t-1].requestPage:this.showPageMap[t-2]&&(i=this.showPageMap[t-2].requestPage+1)),this.renderArticleData(this.innerSearchArticle,i)},renderBizData:function(e,t,i){var a=1<arguments.length&&void 0!==t?t:1,r=2<arguments.length&&void 0!==i?i:3
this.innerSearchBiz=e
var s=this.search.biz
s.error="",s.result=[],s.loading=!0,d.get({url:"/cgi-bin/searchbiz?action=search_biz",data:{query:e,begin:(a-1)*r,count:r}},function(e){if(e&&e.base_resp)switch(e.base_resp.ret){case 0:s.result=e.list,s.pagination={total:e.total,current:a}
break
default:s.error="系统错误，请稍候重试"}else s.error="系统错误，请稍候重试"
s.loading=!1},function(){s.error="系统错误，请稍候重试",s.loading=!1})},renderNewArticleData:function(a,e,t){var r=this,s=1<arguments.length&&void 0!==e?e:1,o=2<arguments.length&&void 0!==t?t:5,n=this.search.article
if(!n.loading){var l=""
l=this.innerSearchArticle!==a||n.pagination.current<=s?"next":"pre",this.innerSearchArticle=a,n.result=[],n.loading=!0
var c=this.search.biz.result[this.chooseBizIdx].fakeid||this.noKey,h=encodeURIComponent(this.innerSearchArticle||this.noKey),i=function(e){if(n.loading=!1,e&&e.base_resp)switch(e.base_resp.ret){case 0:r.articleCacheData[c]||(r.articleCacheData[c]={}),r.articleCacheData[c][h]||(r.articleCacheData[c][h]={})
var t=!0
if(r.articleCacheData[c][h][s]||(t=!(r.articleCacheData[c][h][s]={resp:e,showPage:null})),e.app_msg_list&&0!==e.app_msg_list.length||!("next"===l&&e.app_msg_cnt>s*o||"pre"===l&&1<=s-1))t||(r.showPageMap.push({requestPage:s}),r.articleCacheData[c][h][s].showPage=r.showPageMap.length-1),n.result=e.app_msg_list,n.pagination={total:e.app_msg_cnt,current:s,showJumper:!1,showEndpage:!1}
else{var i="next"===l?s+1:s-1
r.renderNewArticleData(a,i,o)}break
case 200013:r.$tipsErr("操作太频繁，请稍后再试")
break
default:r.$tipsErr("系统错误，请稍候重试")}else r.$tipsErr("系统错误，请稍候重试")},u=null
this.articleCacheData[c]&&this.articleCacheData[c][h]&&this.articleCacheData[c][h][s]&&(u=this.articleCacheData[c][h][s].resp),u?i(u):d.get({url:"/cgi-bin/appmsg?action=list_ex",data:{fakeid:this.search.biz.result[this.chooseBizIdx].fakeid,query:a,begin:(s-1)*o,count:o,type:9,need_author_name:1}},i,function(){r.$tipsErr("系统错误，请稍候重试"),n.loading=null})}},renderArticleData:function(e,t,i){var a=this,r=1<arguments.length&&void 0!==t?t:1,s=2<arguments.length&&void 0!==i?i:4,o=this.search.article
o.loading||(this.can_use_new_search&&e?this.renderNewArticleData(e,r,s):(this.innerSearchArticle=e,o.result=[],o.loading=!0,d.get({url:"/cgi-bin/appmsg?action=list_ex",data:{fakeid:this.search.biz.result[this.chooseBizIdx].fakeid,query:e,begin:(r-1)*s,count:s,type:9,need_author_name:1}},function(e){if(o.loading=!1,e&&e.base_resp)switch(e.base_resp.ret){case 0:o.result=e.app_msg_list,o.pagination={total:e.app_msg_cnt,current:r,showJumper:!0,showEndpage:!0}
break
case 200013:a.$tipsErr("操作太频繁，请稍后再试")
break
default:a.$tipsErr("系统错误，请稍候重试")}else a.$tipsErr("系统错误，请稍候重试")},function(){a.$tipsErr("系统错误，请稍候重试"),o.loading=null})))}}})})
define("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.css.js", [], function (require, exports, module){module.exports = "@grid BreakPoints: {  xs: 0;  sm: 576px;  md: 768px;  lg: 992px;  xl: 1200px;}@container MaxWidths: {  xs: auto;  sm: 540px;  md: 720px;  lg: 960px;  xl: 1140px;}/*How to usefont-family: 'wechatnum';*/.quote_wrp {  padding: 30px;}.quote_wrp .weui-desktop-form__textarea {  min-height: 100px;}.quote_wrp .weui-desktop-media__list-wrp {  height: 188px;}.quote_article_table {  margin-top: 20px;}.quote_article_table th {  padding-top: 9px;  padding-bottom: 9px;}.quote_article_table .weui-desktop-table__check-cell .weui-desktop-form__check-label {  visibility: visible;  opacity: 1;}.quote_article_title {  font-weight: 400;  overflow: hidden;  text-overflow: ellipsis;  display: -webkit-box;  -webkit-box-orient: vertical;  -webkit-line-clamp: 1;  color: var(--weuiDesktop_FG_Text_globalColor);}.quote_article_title em {  font-style: normal;  color: var(--weuiDesktop_themeColor);}.quote_article_nickname {  displya: inline-block;  vertical-align: middle;  width: 10em;  overflow: hidden;  text-overflow: ellipsis;  white-space: nowrap;  word-wrap: normal;}.quote_article_area .weui-desktop-search {  margin-bottom: 20px;}.weui-desktop-media__list-wrp {  border: 1px solid var(--weuiDesktop_separateColor);}.quote_article_item {  display: block;  border-bottom: 1px solid var(--weuiDesktop_separateColor);}.quote_article_item:last-child {  border-bottom: 0;}.quote_account_item,.quote_article_item {  padding: 12px;  cursor: pointer;}.quote_account_nickname {  font-weight: 400;  margin-left: 1em;  display: inline-block;  vertical-align: middle;  width: 7em;  overflow: hidden;  text-overflow: ellipsis;  white-space: nowrap;  word-wrap: normal;}.quote_account_wechat {  font-style: normal;  margin-left: 1em;  color: var(--weuiDesktop_FG_Text_descColor);}.quote_account_avatar {  width: 36px;  height: 36px;  vertical-align: middle;  -webkit-border-radius: 50px;  border-radius: 50px;}.quote_account_type {  color: var(--weuiDesktop_FG_Text_descColor);}.quote_account_msg .weui-desktop-link-btn {  vertical-align: baseline;  margin-left: 1em;}.quote_article_item .weui-desktop-form__check-label {  margin-top: -4px;}.quote_article_date {  color: var(--weuiDesktop_FG_Text_descColor);}.quote_tips {  color: var(--weuiDesktop_FG_Text_descColor);  padding: 20px 30px 0;}body .weui-desktop-key-tag_pay {  float: left;  background-color: #FA9D3B;  color: var(--weuiDesktop_FG_Text_lightColor);  margin-top: 2px;}";});define("pages/modules/media_dialog/blockquote_dialog/blockquote_dialog.tpl.js",[],function(e,a,t){return'<mp-dialog weui="true" v-model="dialogShow" title="插入引用格式" wrap-class="weui-desktop-video-dialog" @close="dialogClose" rootElm="#vue_app">  <mp-tab class="weui-desktop-tab_dialog" :tabs="tabs" :selected="tab" @click="tabChange"></mp-tab>    <div class="quote_wrp">    <div class="quote_inner">      <mp-form>        <mp-form-item>          <template slot="label">引用文本</template>          <mp-input v-if="text === \'\'" :multi="true" :countable="true" :maxlength="300" v-model="digest" filter="trim" placeholder="输入引用文本（300字以内）" @input="digestInput" :status="digestError ? \'warn\' : \'normal\'">            <template slot="message">{{ digestError }}</template>          </mp-input>          <mp-input v-else :multi="true" v-model="text" disabled></mp-input>        </mp-form-item>                <template v-if="tab === \'inner\'">          <mp-form-item class="weui-desktop-form__control-group_offset">            <template slot="label">查找来源</template>            <mp-radio-group v-model="source">              <mp-radio value="url">输入文章地址</mp-radio>              <mp-radio value="biz">查找公众号文章</mp-radio>            </mp-radio-group>          </mp-form-item>          <div class="quote_article_area">                        <div class="quote_article_area_inner" v-if="source === \'url\'">              <mp-form-item>                <template slot="label">文章链接</template>                <template>                  <mp-input filter="trim" v-model.trim="search.url.data" placeholder="输入引用文本所属公众号文章链接" @input="searchUrl" :status="search.url.error ? \'warn\' : \'normal\'">                    <template slot="message">{{ search.url.error }}</template>                  </mp-input>                  <div class="weui-desktop-table__wrp quote_article_table" v-if="search.url.loading !== null && !search.url.error">                    <table class="weui-desktop-table">                      <thead class="weui-desktop-table__hd">                        <tr>                          <th class="weui-desktop-table__check-cell"></th>                          <th>文章</th>                          <th>公众号</th>                        </tr>                      </thead>                      <tbody class="weui-desktop-table__bd">                        <tr v-if="search.url.loading">                          <td colspan="3" loading="true">                            <i class="weui-desktop-loading">加载中</i>                          </td>                        </tr>                        <tr v-else-if="search.url.result === null">                          <td colspan="3" empty="true">暂无数据</td>                        </tr>                        <tr v-else>                          <td class="weui-desktop-table__check-cell">                            <mp-radio-group v-model="chooseUrlIdx">                              <mp-radio :value="0"></mp-radio>                            </mp-radio-group>                          </td>                          <td>                            <a :href="search.url.result.url" target="_blank" class="quote_article_title">{{ search.url.result.title }}</a>                          </td>                          <td>                            <div class="quote_article_nickname">{{ search.url.result.nickname }}</div>                          </td>                        </tr>                      </tbody>                    </table>                  </div>                </template>              </mp-form-item>            </div>                        <div class="quote_article_area_inner" v-else>              <mp-form-item>                <template slot="label">公众号</template>                <template>                                    <div class="quote_account_area quote_account_area_account" v-if="chooseBizIdx === null">                    <mp-search filter="trim" placeholder="输入引用文章所属的公众号名称或微信号" v-model.trim="search.biz.data" @search="searchBiz" @input="search.biz.error = \'\', search.biz.loading = null" :status="search.biz.error ? \'warn\' : \'normal\'">                      <template v-if="search.biz.error" slot="message">{{ search.biz.error }}</template>                    </mp-search>                    <div v-if="search.biz.loading !== null && !search.biz.error" class="weui-desktop-media__list-wrp">                      <div v-if="search.biz.loading" class="weui-desktop-media-tips"><i class="weui-desktop-loading"></i></div>                      <ul v-else-if="search.biz.result.length" class="quote_account_list">                        <li class="quote_account_item" v-for="(biz, bizIdx) in search.biz.result" @click="chooseBiz(bizIdx)">                          <div class="weui-desktop-vm_primary">                            <img class="quote_account_avatar" :src="biz.round_head_img || defaultBizAvatar">                            <strong class="quote_account_nickname">{{ biz.nickname }}</strong>                            <i class="quote_account_wechat">微信号：{{ biz.alias || \'未设置\' }}</i>                          </div>                          <div class="weui-desktop-vm_default quote_account_type">{{ biz.service_type === 0 ? \'订阅号\' : \'服务号\' }}</div>                        </li>                      </ul>                      <div v-else class="weui-desktop-media-tips">暂无数据</div>                    </div>                    <mp-pagination v-if="search.biz.loading !== null && !search.biz.error && !search.biz.loading && search.biz.result.length" :total-num="search.biz.pagination.total" :per-page="3" :current="search.biz.pagination.current" @page-change="bizPageChange"></mp-pagination>                  </div>                                    <div class="quote_account_area quote_account_area_article" v-else>                    <p class="quote_account_msg">                      {{ search.biz.result[chooseBizIdx].nickname }}<mp-button class="weui-desktop-link-btn weui-desktop-link" @click="chooseBizIdx = null, chooseArticleIdx = null, search.biz.data = \'\', search.biz.loading = null">重新搜索</mp-button>                    </p>                    <mp-search filter="trim" placeholder="输入文章名查找公众号群发过的文章" v-model.trim="search.article.data" @search="searchArticle"></mp-search>                    <div v-if="search.article.loading !== null" class="weui-desktop-media__list-wrp">                      <div v-if="search.article.loading" class="weui-desktop-media-tips"><i class="weui-desktop-loading"></i></div>                      <div v-else-if="search.article.result.length" class="quote_article_list">                        <mp-radio-group v-model="chooseArticleIdx">                          <label class="quote_article_item" v-for="(article, articleIdx) in search.article.result">                            <span class="weui-desktop-vm_default">                              <mp-radio :value="articleIdx" :disabled="article.is_pay_subscribe === 1"></mp-radio>                            </span>                            <span class="weui-desktop-vm_primary">                              <span v-if="article.is_pay_subscribe" class="weui-desktop-key-tag weui-desktop-key-tag_pay">付费</span>                              <a :href="article.link" target="_blank" class="quote_article_title" v-html="article.title"></a>                            </span>                            <span class="weui-desktop-vm_default quote_article_date">{{ article.update_time | formatDate }}</span>                          </label>                        </mp-radio-group>                      </div>                      <div v-else class="weui-desktop-media-tips">暂无数据</div>                    </div>                    <mp-pagination v-if="search.article.loading !== null && !search.article.loading && search.article.result.length" :total-num="search.article.pagination.total" :per-page="4" :current="search.article.pagination.current" :show-jumper="search.article.pagination.showJumper" :show-endpage="search.article.pagination.showEndpage" @page-change="articlePageChange"></mp-pagination>                  </div>                </template>              </mp-form-item>            </div>          </div>        </template>                <template v-else>          <mp-form-item>            <template slot="label">引用来源</template>            <mp-input filter="trim" placeholder="输入外部内容来源信息：作者，来源等（选填）" v-model="from"></mp-input>          </mp-form-item>        </template>      </mp-form>    </div>  </div>  <template slot="footer">    <mp-button type="primary" :disabled="confirmDisabled" @click="confirm">确定</mp-button>    <mp-button @click="dialogClose">取消</mp-button>  </template></mp-dialog>'})
