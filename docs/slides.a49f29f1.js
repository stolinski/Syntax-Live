parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MRve":[function(require,module,exports) {
var e,t=window.location.origin+window.location.pathname,n=["far-past","past","current","next","far-next"],o=15;function a(e){return e<0||e>=slideEls.length?null:slideEls[e]}function i(e,t){var o=a(e);if(o)for(var i in t&&o.classList.add(t),n)t!=n[i]&&o.classList.remove(n[i])}function r(){for(var t=0;t<slideEls.length;t++)switch(t){case e-2:i(t,"far-past");break;case e-1:i(t,"past");break;case e:i(t,"current");break;case e+1:i(t,"next");break;case e+2:i(t,"far-next");break;default:i(t)}u(e-1),l(e),window.setTimeout(function(){g(e-2)},301),p(e-1),p(e+2),L()&&b(slideEls[e]),M()}function s(){var t=slideEls[e].querySelectorAll(".to-build");return!!t.length&&(t[0].classList.remove("to-build"),L()&&b(t[0]),!0)}function c(){e>0&&(e--,r())}function d(){s()||e<slideEls.length-1&&(e++,r())}function l(e){var t=a(e);if(t){var n=t.getAttribute("onslideenter");n&&new Function(n).call(t);var o=document.createEvent("Event");o.initEvent("slideenter",!0,!0),o.slideNumber=e+1,t.dispatchEvent(o)}}function u(e){var t=a(e);if(t){var n=t.getAttribute("onslideleave");n&&new Function(n).call(t);var o=document.createEvent("Event");o.initEvent("slideleave",!0,!0),o.slideNumber=e+1,t.dispatchEvent(o)}}function h(e){1==e.touches.length&&(touchDX=0,touchDY=0,touchStartX=e.touches[0].pageX,touchStartY=e.touches[0].pageY,document.body.addEventListener("touchmove",v,!0),document.body.addEventListener("touchend",f,!0))}function v(e){e.touches.length>1?m():(touchDX=e.touches[0].pageX-touchStartX,touchDY=e.touches[0].pageY-touchStartY)}function f(e){var t=Math.abs(touchDX),n=Math.abs(touchDY);t>o&&n<2*t/3&&(touchDX>0?c():d()),m()}function m(){document.body.removeEventListener("touchmove",v,!0),document.body.removeEventListener("touchend",f,!0)}function g(e){var t=a(e);if(t)for(var n,o=t.getElementsByTagName("iframe"),i=0;n=o[i];i++)x(n)}function p(e){var t=a(e);if(t)for(var n,o=t.getElementsByTagName("iframe"),i=0;n=o[i];i++)E(n)}function x(e){e.src="about:blank"}function E(e){var t=e._src;e.src!=t&&"about:blank"!=t&&(e.src=t)}function C(){for(var t,n=document.querySelectorAll("iframe"),o=0;t=n[o];o++)t._src=t.src,x(t);p(e),p(e+1),p(e+2)}function y(){var e;(e=document.createElement("div")).className="slide-area",e.id="prev-slide-area",e.addEventListener("click",c,!1),document.querySelector("section.slides").appendChild(e),(e=document.createElement("div")).className="slide-area",e.id="next-slide-area",e.addEventListener("click",d,!1),document.querySelector("section.slides").appendChild(e),document.body.addEventListener("touchstart",h,!1)}function L(){return"undefined"!=typeof cvox}function b(e){if(L()){cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.syncToNode(e),cvox.ChromeVoxUserCommands.finishNavCommand("");for(var t=e;t.firstChild;)t=t.firstChild;cvox.ChromeVox.navigationManager.syncToNode(t)}}function w(){if(L()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.next(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),slideEls[e])){for(var t=slideEls[e];t.firstChild;)t=t.firstChild;cvox.ChromeVox.navigationManager.syncToNode(t),cvox.ChromeVox.navigationManager.next(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function N(){if(L()){if(cvox.ChromeVox.navigationManager.switchToStrategy(cvox.ChromeVoxNavigationManager.STRATEGIES.LINEARDOM,0,!0),cvox.ChromeVox.navigationManager.previous(!0),!cvox.DomUtil.isDescendantOfNode(cvox.ChromeVox.navigationManager.getCurrentNode(),slideEls[e])){for(var t=slideEls[e];t.lastChild;)t=t.lastChild;cvox.ChromeVox.navigationManager.syncToNode(t),cvox.ChromeVox.navigationManager.previous(!0)}cvox.ChromeVoxUserCommands.finishNavCommand("")}}function D(){var t=parseInt(location.hash.substr(1));e=t?t-1:0}function M(){location.replace("#".concat(e+1))}function T(e){switch(e.keyCode){case 39:case 13:case 32:case 34:d(),e.preventDefault();break;case 37:case 8:case 33:c(),e.preventDefault();break;case 40:L()?w():d(),e.preventDefault();break;case 38:L()?N():c(),e.preventDefault()}}function S(){document.addEventListener("keydown",T,!1)}function k(){}function A(){}function _(){var e;(e=document.createElement("link")).rel="stylesheet",e.type="text/css",e.href="".concat(t,"styles.css"),document.body.appendChild(e),(e=document.createElement("meta")).name="viewport",e.content="width=1100,height=750",document.querySelector("head").appendChild(e),(e=document.createElement("meta")).name="apple-mobile-web-app-capable",e.content="yes",document.querySelector("head").appendChild(e)}function V(){for(var t,n=e;t=slideEls[n];n++)for(var o,a=t.querySelectorAll(".build > *"),i=0;o=a[i];i++)o.classList&&o.classList.add("to-build")}function O(){slideEls=document.querySelectorAll("section.slides > article"),C(),A(),k(),S(),r(),y(),V(),document.body.classList.add("loaded")}function G(){D(),window._DEBUG&&(t="../"),window._DCL?O():document.addEventListener("DOMContentLoaded",O,!1)}if("undefined"==typeof document||"classList"in document.createElement("a")||function(e){var t=(e.HTMLElement||e.Element).prototype,n=Object;if(strTrim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},arrIndexOf=Array.prototype.indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},DOMEx=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},checkTokenAndGetIndex=function(e,t){if(""===t)throw new DOMEx("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new DOMEx("INVALID_CHARACTER_ERR","String contains an invalid character");return arrIndexOf.call(e,t)},ClassList=function(e){for(var t=strTrim.call(e.className),n=t?t.split(/\s+/):[],o=0,a=n.length;o<a;o++)this.push(n[o]);this._updateClassName=function(){e.className=this.toString()}},classListProto=ClassList.prototype=[],classListGetter=function(){return new ClassList(this)},DOMEx.prototype=Error.prototype,classListProto.item=function(e){return this[e]||null},classListProto.contains=function(e){return-1!==checkTokenAndGetIndex(this,e+="")},classListProto.add=function(e){e+="",-1===checkTokenAndGetIndex(this,e)&&(this.push(e),this._updateClassName())},classListProto.remove=function(e){var t=checkTokenAndGetIndex(this,e+="");-1!==t&&(this.splice(t,1),this._updateClassName())},classListProto.toggle=function(e){e+="",-1===checkTokenAndGetIndex(this,e)?this.add(e):this.remove(e)},classListProto.toString=function(){return this.join(" ")},n.defineProperty){var o={get:classListGetter,enumerable:!0,configurable:!0};try{n.defineProperty(t,"classList",o)}catch(a){-2146823252===a.number&&(o.enumerable=!1,n.defineProperty(t,"classList",o))}}else n.prototype.__defineGetter__&&t.__defineGetter__("classList",classListGetter)}(self),window._DEBUG||-1===document.location.href.indexOf("?debug"))G();else{document.addEventListener("DOMContentLoaded",function(){window._DCL=!0},!1),window._DEBUG=!0;var I=document.createElement("script");I.type="text/javascript",I.src="../slides.js";var R=document.getElementsByTagName("script")[0];R.parentNode.insertBefore(I,R),R.parentNode.removeChild(R)}
},{}]},{},["MRve"], null)
//# sourceMappingURL=/Syntax-Live/slides.a49f29f1.js.map