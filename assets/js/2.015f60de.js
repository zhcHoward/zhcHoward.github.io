(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){var s,i;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(i="function"==typeof(s=function(){var t,e,n={version:"0.2.0"},s=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,n){return t<e?e:t>n?n:t}function a(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(s[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=i(t,s.minimum,1),n.status=1===t?null:t;var l=n.render(!e),u=l.querySelector(s.barSelector),c=s.speed,h=s.easing;return l.offsetWidth,r(function(e){""===s.positionUsing&&(s.positionUsing=n.getPositioningCSS()),o(u,function(t,e,n){var i;return(i="translate3d"===s.positionUsing?{transform:"translate3d("+a(t)+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+a(t)+"%,0)"}:{"margin-left":a(t)+"%"}).transition="all "+e+"ms "+n,i}(t,c,h)),1===t?(o(l,{transition:"none",opacity:1}),l.offsetWidth,setTimeout(function(){o(l,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},c)},c)):setTimeout(e,c)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},s.trickleSpeed)};return s.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*s.trickleRate)},t=0,e=0,n.promise=function(s){return s&&"resolved"!==s.state()?(0===e&&n.start(),t++,e++,s.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=s.template;var i,r=e.querySelector(s.barSelector),l=t?"-100":a(n.status||0),c=document.querySelector(s.parent);return o(r,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),s.showSpinner||(i=e.querySelector(s.spinnerSelector))&&d(i),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(e),e},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(s.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var r=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),o=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var s,i=t.length,a=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((s=t[i]+a)in n)return s;return e}(n))}function s(t,e,s){e=n(e),t.style[e]=s}return function(t,e){var n,i,a=arguments;if(2==a.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&s(t,n,i);else s(t,a[1],a[2])}}();function l(t,e){var n="string"==typeof t?t:h(t);return n.indexOf(" "+e+" ")>=0}function u(t,e){var n=h(t),s=n+e;l(n,e)||(t.className=s.substring(1))}function c(t,e){var n,s=h(t);l(t,e)&&(n=s.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function h(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n})?s.call(e,n,e,t):s)||(t.exports=i)},function(t,e,n){"use strict";var s=n(10);n.n(s).a},function(t,e,n){"use strict";var s=n(11);n.n(s).a},function(t,e,n){"use strict";var s=n(12);n.n(s).a},function(t,e,n){"use strict";var s=n(13);n.n(s).a},function(t,e,n){"use strict";var s=n(14);n.n(s).a},function(t,e,n){"use strict";var s=n(15);n.n(s).a},function(t,e,n){"use strict";var s=n(16);n.n(s).a},function(t,e,n){"use strict";var s=n(17);n.n(s).a},function(t,e,n){"use strict";var s=n(18);n.n(s).a},function(t,e,n){"use strict";var s=n(19);n.n(s).a},function(t,e,n){"use strict";var s=n(20);n.n(s).a},function(t,e,n){"use strict";var s=n(21);n.n(s).a},function(t,e,n){"use strict";var s=n(22);n.n(s).a},,function(t,e,n){"use strict";n.r(e);var s=n(0),i=n(25),a=n.n(i);const r=/#.*$/,o=/\.(md|html)$/,l=/\/$/,u=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(r,"").replace(o,"")}function h(t){return u.test(t)}function d(t){if(h(t))return t;const e=t.match(r),n=e?e[0]:"",s=c(t);return l.test(s)?t:s+".html"+n}function p(t,e){const n=t.hash,s=function(t){const e=t.match(r);if(e)return e[0]}(e);return(!s||n===s)&&c(t.path)===c(e)}function f(t,e,n){n&&(e=function(t,e,n){const s=t.charAt(0);if("/"===s)return t;if("?"===s||"#"===s)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const s=c(e);return s in t?Object.assign({},t[s],{type:"page",path:d(t[s].path)}):(console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{})}function g(t,e,n,s){const{pages:i,themeConfig:a}=n,r=s&&a.locales&&a.locales[s]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){const e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=r.sidebar||a.sidebar,l=i.reduce((t,e)=>(t[c(e.regularPath)]=e,t),{});if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const s in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(s))return{base:s,config:e[s]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,s,i){if("string"==typeof e)return f(n,e,s);if(Array.isArray(e))return Object.assign(f(n,e[0],s),{title:e[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const a=e.children||[];return{type:"group",title:e.title,children:a.map(e=>t(e,n,s,!0)),collapsable:!1!==e.collapsable}}})(e,l,t)):[]}return[]}function m(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}var b={props:{item:{required:!0}},computed:{link(){return d(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:h,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},_=n(1),k=Object(_.a)(b,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);k.options.__file="NavLink.vue";var $=k.exports,C={components:{NavLink:$},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},x=(n(26),Object(_.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,s){return n("div",{key:s,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));x.options.__file="Home.vue";var y=x.exports,S=(n(27),Object(_.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));S.options.__file="SidebarButton.vue";var w=S.exports,L={data:()=>({query:"",focused:!1,focusIndex:0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,n=this.$localePath,s=e=>e.title&&e.title.toLowerCase().indexOf(t)>-1,i=[];for(let t=0;t<e.length&&!(i.length>=5);t++){const a=e[t];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(s(a))i.push(a);else if(a.headers)for(let t=0;t<a.headers.length&&!(i.length>=5);t++){const e=a.headers[t];s(e)&&i.push(Object.assign({},a,{path:a.path+"#"+e.slug,header:e}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter(e=>t.path.match(e)).length>0},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},T=(n(28),Object(_.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,s){return n("li",{staticClass:"suggestion",class:{focused:s===t.focusIndex},on:{mousedown:function(e){t.go(s)},mouseenter:function(e){t.focus(s)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null));T.options.__file="SearchBox.vue";var O=T.exports,I={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},E=(n(29),Object(_.a)(I,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));E.options.__file="DropdownTransition.vue";var N=E.exports,U={components:{NavLink:$,DropdownTransition:N},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},j=(n(30),Object(_.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,s){return n("li",{key:e.link||s,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null));j.options.__file="DropdownLink.vue";var P={components:{NavLink:$,DropdownLink:j.exports},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav(){const{locales:t}=this.$site;if(t&&Object.keys(t).length>1){const e=this.$page.path,n=this.$router.options.routes,s=this.$site.themeConfig.locales||{},i={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(i=>{const a=t[i],r=s[i]&&s[i].label||a.lang;let o;return a.lang===this.$lang?o=e:(o=e.replace(this.$localeConfig.path,i),n.some(t=>t.path===o)||(o=i)),{text:r,link:o}})};return[...this.userNav,i]}return this.userNav},userLinks(){return(this.nav||[]).map(t=>Object.assign(v(t),{items:(t.items||[]).map(v)}))},repoLink(){const{repo:t}=this.$site.themeConfig;if(t)return/^https?:/.test(t)?t:`https://github.com/${t}`},repoLabel(){if(!this.repoLink)return;if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const s=e[n];if(new RegExp(s,"i").test(t))return s}return"Source"}}},D=(n(31),Object(_.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));D.options.__file="NavLinks.vue";var M=D.exports;function A(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var W={components:{SidebarButton:w,NavLinks:M,SearchBox:O,AlgoliaSearchBox:{}},data:()=>({linksWrapMaxWidth:null}),mounted(){const t=parseInt(A(this.$el,"paddingLeft"))+parseInt(A(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)},computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},B=(n(32),Object(_.a)(W,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));B.options.__file="Navbar.vue";var H=B.exports;function G(t,e,n){const s=[];e.forEach(t=>{"group"===t.type?s.push(...t.children||[]):s.push(t)});for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+n]}}var q={props:["sidebarItems"],computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev(){const t=this.$page.frontmatter.prev;return!1===t?void 0:t?f(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,G(e,n,-1));var e,n},next(){const t=this.$page.frontmatter.next;return!1===t?void 0:t?f(this.$site.pages,t,this.$route.path):(e=this.$page,n=this.sidebarItems,G(e,n,1));var e,n},editLink(){if(!1===this.$page.frontmatter.editLink)return;const{repo:t,editLinks:e,docsDir:n="",docsBranch:s="master",docsRepo:i=t}=this.$site.themeConfig;let a=c(this.$page.path);return l.test(a)?a+="README.md":a+=".md",i&&e?this.createEditLink(t,i,n,s,a):void 0},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,s,i){if(/bitbucket.org/.test(t)){return(u.test(e)?e:t).replace(l,"")+`/${s}`+(n?"/"+n.replace(l,""):"")+i+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}return(u.test(e)?e:`https://github.com/${e}`).replace(l,"")+`/edit/${s}`+(n?"/"+n.replace(l,""):"")+i}}},R=(n(33),Object(_.a)(q,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));R.options.__file="Page.vue";var z=R.exports;function V(t,e,n,s){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}function J(t,e,n,s,i,a=1){return!e||a>i?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const r=p(s,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[V(t,n+"#"+e.slug,e.title,r),J(t,e.children,n,s,i,a+1)])}))}var X={functional:!0,props:["item"],render(t,{parent:{$page:e,$site:n,$route:s},props:{item:i}}){const a=p(s,i.path),o="auto"===i.type?a||i.children.some(t=>p(s,i.basePath+"#"+t.slug)):a,l=V(t,i.path,i.title||i.path,o),u=null!=e.frontmatter.sidebarDepth?e.frontmatter.sidebarDepth:n.themeConfig.sidebarDepth,c=null==u?1:u,h=!!n.themeConfig.displayAllHeaders;if("auto"===i.type)return[l,J(t,i.children,i.basePath,s,c)];if((o||h)&&i.headers&&!r.test(i.path)){return[l,J(t,m(i.headers),i.path,s,c)]}return l}},Y=(n(34),Object(_.a)(X,void 0,void 0,!1,null,null,null));Y.options.__file="SidebarLink.vue";var K=Y.exports,F={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:K,DropdownTransition:N}},Q=(n(35),Object(_.a)(F,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)}),0):t._e()])],1)},[],!1,null,null,null));Q.options.__file="SidebarGroup.vue";var Z={components:{SidebarGroup:Q.exports,SidebarLink:K,NavLinks:M},props:["items"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const s=e[n];if("group"===s.type&&s.children.some(e=>p(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return p(this.$route,t.regularPath)}}},tt=(n(36),Object(_.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,s){return n("li",{key:s},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===s,open:s===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(s)}}}):n("SidebarLink",{attrs:{item:e}})],1)}),0):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));tt.options.__file="Sidebar.vue";var et={components:{Home:y,Page:z,Sidebar:tt.exports,Navbar:H},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return g(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){a.a.configure({showSpinner:!1}),this.$router.beforeEach((t,e,n)=>{t.path===e.path||s.a.component(t.name)||a.a.start(),n()}),this.$router.afterEach(()=>{a.a.done(),this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},nt=(n(37),n(38),Object(_.a)(et,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));nt.options.__file="Layout.vue";e.default=nt.exports}]]);