!function(t,e){function n(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!==n?unescape(n[2]):null}function i(e,n){if(n=n||"log",t.console&&t.console[n]&&(U||t._tracker_debug))t._tracker_logs||(t._tracker_logs=[]),t._tracker_logs.push(n+":"+e),t.console[n]("t : "+e);else if("throw"===n)throw e+" >> http://developers.hypers.com.cn/website/debug.html"}function o(){var e;try{e=t.top.document.referrer}catch(n){i(n);try{e=t.parent.document.referrer}catch(o){i(o),e=document.referrer}}return e}function r(){var e=0;try{Plugin=t.navigator.plugins["Shockwave Flash"]||t.ActiveXObject,e=Plugin.description||new Plugin("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(n){i(n)}return e||i("No Flash"),e}function s(t){for(;t.length;)t.shift()()}function a(e,n){var i,o=h();t[o]=function(){n.apply(t,arguments),i.parentNode.removeChild(i),t[o]=null},e+="&jsonp="+o,i=c(e)}function c(t,n){var i=e.createElement("script"),o=e.getElementsByTagName("head")[0];return i.type="text/javascript",i.charset="utf-8",i.src=t,o.insertBefore(i,o.firstChild),i}function h(){return"_"+(1e18*Math.random()).toString(36).slice(0,5).toUpperCase()}function l(){}function u(e,n,i){return t.addEventListener?(e.addEventListener(n,i),e):(e.attachEvent("on"+n,i),e)}function d(e,n,i){return t.addEventListener?(e.removeEventListener(n,i),e):(e.detachEvent(n,i),e)}function f(t){return"function"==typeof t}function p(t){return"[object Object]"===Object.prototype.toString.call(t)}function g(t){return"[object Array]"===Object.prototype.toString.call(t)}function v(t){return/^[0-9]+$/.test(t)}function _(t){return encodeURIComponent(t)}function m(t,e){var n,i={};for(n in t)i[e+n]=t[n];return i}function b(t){var e,n={};for(e in t)n[e.toLowerCase()]=t[e];return n}function w(t){var e,n,i=[];for(e in t)n=t[e],void 0!==n&&""!==n&&i.push(e+"="+_(n));return i.join("&")}function y(t,e,n){var i,o={};if(n){for(i in t)o[i]=t[i];for(i in e)o[i]=e[i];return o}for(i in e)t[i]=e[i];return t}function S(n,i){function o(){if(!t[i].isReady){try{e.documentElement.doScroll("left")}catch(n){return void setTimeout(o,1)}r()}}function r(){t[i].isReady=!0,n(i)}var s;if(e.addEventListener?s=function(){e.removeEventListener("DOMContentLoaded",s,!1),r()}:e.attachEvent&&(s=function(){"complete"===e.readyState&&(e.detachEvent("onreadystatechange",s),r())}),"complete"===e.readyState)return setTimeout(r,1);if(e.addEventListener)e.addEventListener("DOMContentLoaded",s,!1),t.addEventListener("load",r,!1);else if(e.attachEvent){e.attachEvent("onreadystatechange",s),t.attachEvent("onload",r);var a=!1;try{a=null===t.frameElement}catch(c){}e.documentElement.doScroll&&a&&o()}}function C(){this.successCallbacks=[],this.failCallbacks=[],this.type="localstorage",this.available=function(){try{return t.postMessage&&t.localStorage?1:0}catch(e){return i(e),0}}()}function E(t,e,n){function i(i,o,r,s){function a(t){t&&"undefined"!=t&&u.push(t),d--,!d&&r&&r(u)}function c(t){t.initialize(function(){t[i].apply(t,o)},function(){a()},e,n)}var h,l=t.length,u=[],d=l;for(o.push(a);h=s[--l];)c(h)}this.storages=t,this.get=function(t,e,n){function o(t){for(var i,o,r,s=t.length;s--;)if(i=t[s]){if(i=i.split("___"),i.length<2)return e(i[0]);o=parseInt(i[0],36),(!r||r[0]>o)&&(r=i)}return r?void e(r[1]):n&&n()}i("get",[t],o,this.storages)},this.set=function(t,e,n){e=(+new Date).toString(36)+"___"+e,i("set",[t,e],n,this.storages)}}function k(e){if(!e.storage_id)throw Error("id is not defined");return t.sessionStorage?(this.id=(e.api_url+"-"+e.storage_id).replace(/http(s)?/,"").replace(/[\/:.]/g,"").toLocaleUpperCase(),this.available=!0,this.set=function(t){sessionStorage.setItem(this.id,t)},void(this.get=function(){return sessionStorage.getItem(this.id)})):{available:!1}}function L(n){this.loaded=0,this.hmtq=[],this.id=n,this.isReady=!1,this.bindClick=function(){function n(t,e){var n=s(t.href);t._hwt_href=t.href,p.hash[n]||(p.hash[n]=0),p.hash[n]++,t._hwt_index=e,t._hwt_group_index=p.hash[n],r(t)}function o(t,e){t._hwt_index=e,t._hwt_group_index=1,r(t)}function r(t){u(t,"click",function(e){a(t)})}function s(t){for(var e=0,n=0,i=t.length;n<i;n++)e=31*e+t.charCodeAt(n)<<0;return e}function a(n){var o,r=[];return n._hwt_href&&r.push("link_url="+_(n._hwt_href)),t[f.id].options?(r.push("seq="+p.total+"_"+n._hwt_index+"_"+n._hwt_group_index),r.push("txt="+_(n.innerHTML||n.value)),r.push("screen="+t.screen.width+"x"+t.screen.height),r.push("offset="+e.body.offsetWidth+"x"+e.body.offsetHeight),r.push("scroll="+e.body.scrollWidth+"x"+e.body.scrollHeight),r.push("client="+e.body.clientWidth+"x"+e.body.clientHeight),r.push("node="+n.nodeName),r.push("v="+t[f.id].options.version),r.push("_t=i"),r.push("type=clkmap"),r.push("r="+h()),o=t[f.id].options.api_url+"/hwt?"+r.join("&").replace(/%20/g,"+"),void c(o)):void i("Options is undefined","throw")}function c(t){var e=new Image(1,1);e.src=t,e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!==e.readyState&&"complete"!==e.readyState||(e.onload=e.onreadystatechange=null)},e.onerror=function(){e.onerror=null,i("Img error")}}var l,d,f=this,p={func:{},hash:{}},g=e.getElementsByTagName("*"),v=[];for(d=0;d<g.length;d++)l=g[d],"A"!==l.nodeName&&"BUTTON"!==l.nodeName&&"INPUT"!==l.nodeName||"HIDDEN"===l.type.toUpperCase()||v.push(l);for(p.total=v.length,d=0;d<v.length;d++)"A"==v[d].nodeName?n(v[d],d):o(v[d],d)},this.trigger=function(){this.hmtq.push(n)},this.init=function(){this.hmtq.length>0&&!this.loaded&&(this.bindClick(),this.loaded=1)}}function T(n){this.options={title:e.title,params:{}},this.available=!0,this.ua=0,this.has_cache=!0,this.logs=[],this.pageview=function(e){var n={},i=e[0]||{},o=e[1],r=i.url||this.options.url;return"_v1_1"!==this.alias&&(r&&!r.substr(0,8).match(/https?:\/\//)&&(r=[t.location.protocol,"//",t.location.hostname,"/"==r.substr(0,1)?"":"/",r].join("")),n.url=r),n.title=i.title||this.options.title,n.pv_fl=M,y(n,m(i.params,"p_")),A(this,"pv",n,o),this},this.action=function(t){var e=t[0],n=m(t[1],"p_"),i=t[2];return n.act_name=e,A(this,"act",n,i),this}}function A(t,e,n,o){function r(){y(n,m(t.options.params,"p_")),n.type=e,N(t,n,o)}var s=t.options.storage_id||"_hid";return t.available?t[s]?void r():t.comboStorage?void t.comboStorage.get(s,function(e){e&&(t[s]=e,t.session.set(e)),r()},function(){r()}):void r():void i("this is disable")}function N(t,e,n){var i,r,s,c=t.options.storage_id||"_hid",h={},l=0;if(y(h,e),t[c]&&"null"!==t[c]&&(h[c]=t[c]),t.options.with_ref&&(r=o())&&/.*[\u4e00-\u9fa5]+.*$/.test(r)&&(r=encodeURI(r)),h.ref=r,t.has_cache&&t.comboStorage){i=t.comboStorage.storages;for(var u=0;u<i.length;u++)l+=parseInt(i[u].available)||0;l||(t.has_cache=!1)}t.options.muid&&(h.muid=t.options.muid),t.options.uid&&(h.uid=t.options.uid),h._ua=t.ua,h.v=t.options.version,h.has_cache=t.has_cache,h["char"]=D,h.lang=R,h.sr=B,h.sd=P,s=t.options.api_url+"/hwt?"+w(h),a(s,function(e){t.comboStorage&&(t[c]=e,t.comboStorage.set(c,e)),O(e),f(n)&&n(t,s),U&&t.logs.push(s)})}function j(){this.trackers={},this.create=function(e,n,o){var r,s=e[0],a=e[1],c=e[2],h=[];s||i("14001","throw"),t[n]=t[n]||{},t[n].iframeStore=t[n].iframeStore||new C,r=new T(n),r.ua=s,r.alias=o,r.options=x(y(r.options,y(W,b(a),!0))),t[n].options=r.options,r.options.id&&(r.options.storage_id=r.options.id),r.options.no_ils||r.options.disable_iframe||h.push(t[n].iframeStore);var l=r.options.storage_id;return r.session=new k(r.options),r.session.available&&(r[l]=r.session.get()),h.length?r[l]||(r.comboStorage=r.comboStorage||new E(h,n,r.options)):r.has_cache=!1,this.trackers[o]=r,f(c)&&c(),this},this.enable=function(e,n,i){var o=e[0];return e.length?("clickmap"===o&&t[n]&&!t[n].hmt&&(t[n].hmt=new L(n),t[n].hmt.trigger(),S(function(e){t[n].hmt.init()},n)),this):void(this.trackers[i].available=!0)},this.send=function(t,e,n){var i=t.splice(0,1)[0];return this.trackers[n][i](t),this},this.set=function(t,e,n){function i(t,e){return p(e[0])?(y(t.options,e[0]),void(f(e[1])&&e[1](t))):e.length>=2?(t.options[e[0]]=e[1],void(f(e[2])&&e[2](t))):void 0}return i(this.trackers[n],t),this},this.identify=function(t,e,n){var i=t[0];if(!i)throw"muid is undifined";this.trackers[n].muid=i},this.track=function(t,e,n){n="_v1_2_v1_3",p(t[0])?t.splice(0,0,t[0].UA):t.splice(0,1,t[1].UA),this.create(t,e,n),this.send(["pageview"],e,n)}}function I(e,n){if(t[n].controller=t[n].controller||new j,this.push=function(e){var o,r,s="default";if(e=[].slice.apply(e),e.length)return t._ha_disable?void i("_ha is disabled"):t["_ha_disable_"+s]?void i("_ha ["+s+"]  is disabled"):(o=e.splice(0,1)[0],r=o.split("."),"create"===o&&e[1]&&e[1].name&&(s=e[1].name),r.length>1&&(s=r[0],o=r[1]),t[n].controller[o]?void t[n].controller[o](e,n,s):void i(o+"  is not defined"))},e&&e.length)for(var o=0;o<e.length;o++)this.push(e[o])}function O(e){var n=t.HWT_ID_READY_CALL_ONCE;n&&(f(n)?n(e):f(t[n])?t[n](e):c(n),O=l)}function x(t){function e(t,e){return t=t.replace(/\/(hwt|hmt)\?[^\s]*/,"").replace(/https?:/,""),"/"===t[t.length-1]&&(t=t.substr(0,t.length-1)),(e?"https:":H)+t}return t.api_url&&(t.api_url=e(t.api_url,t.force_ssl)),t.swf_url&&(t.swf_url=e(t.swf_url)),t.iframe_url&&(t.iframe_url=e(t.iframe_url)),t}function q(){if(t._hwtTQ){var e="_ha",n="_v1_1";t[e]||(t[e]=function(){return(t[e].q=t[e].q||[]).push(arguments)}),t[e].controller=t[e].controller||new j;for(var i,o=t._hwtTQ;i=o.shift();)i.splice(0,0,i[0].UA),t[e].controller.create(i,e,n),t[e].controller.send(["pageview"],e,n);t._hwt={track:function(i,o){t[e].controller.send(["pageview"],e,n)}}}}var H="https:"===e.location.protocol?"https:":"http:",U=n("_debug")||t._debug,M=r()||0,D=e.charset||e.characterSet,R=navigator.language||navigator.userLanguage,B=t.screen.width+"x"+t.screen.height,P=t.screen.colorDepth,W={force_ssl:!1,storage_id:"_hid",version:"1.7.3.161205",disable_iframe:!1,with_ref:!0,swf_url:"//t.hypers.com.cn/storage.swf#",iframe_url:"//t.hypers.com.cn/storage.html",api_url:"//t.hypers.com.cn/cgi-bin"};C.prototype.initialize=function(n,o,r,a){var c,h,l=this;return this.options=a,this.fn=r,this.available?this.initialized?n&&setTimeout(n,0):(this.loaded||(this.loaded=1,setTimeout(function(){function n(e){var i=(e.data+"").split("#"),o=i[0],r=i[1],a=i[2];v(a)&&(l.available=a),e.origin==l.origin&&r===l.fn&&(d(t,"message",n),"loaded"===o&&(clearTimeout(h),l.window=c.contentWindow,l.initialized=1,s(l.successCallbacks)))}e.body&&(c=e.createElement("iframe"),h=setTimeout(function(){c.onerror(),c.parentNode.removeChild(c)},3e3),c.style.display="none",c.src=l.options.iframe_url+"#"+l.fn,l.origin=c.src.split("/").slice(0,3).join("/"),u(t,"message",n),c.onerror=c.onabort=function(){l.available=0,s(l.failCallbacks),i("iframe storage error")},e.body.appendChild(c,e.body.firstChild))},50)),n&&this.successCallbacks.push(n),void(o&&this.failCallbacks.push(o))):void(f(o)&&o())},C.prototype.sendMessage=function(e,n,o,r){function s(n){var i=(n.data+"").split("#"),o=i[0],r=i[1];n.origin==a.origin&&r===a.fn&&(d(t,"message",s),e(o))}var a=this;u(t,"message",s);try{a.window.postMessage([n,o,r].join("#"),"*")}catch(c){i(c)}},C.prototype.get=function(t,e){return this.sendMessage(e,"getItem",t),this},C.prototype.set=function(t,e,n){return this.sendMessage(n,"setItem",t,e),this},q(),function(){var e="undefined"==typeof t.HyperAnalyticsObject?"_hwt":t.HyperAnalyticsObject;if(g(e))for(var n=0;n<e.length;n++)p(t[e[n]].q)||(t[e[n]].q=new I(t[e[n]].q,e[n]));else t[e]||(t[e]=function(){return(t[e].q=t[e].q||[]).push(arguments)}),t[e].q=new I(t[e].q,e)}(),t.CHECK_OPTIONS_CALLBACK&&t.CHECK_OPTIONS_CALLBACK(W)}(this,document);