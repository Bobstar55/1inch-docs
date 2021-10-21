"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[4906],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(r),s=a,k=u["".concat(c,".").concat(s)]||u[s]||m[s]||l;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},151:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={},c="ChainlinkCalculator",p={unversionedId:"limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",id:"limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",isDocsHomePage:!1,title:"ChainlinkCalculator",description:"A helper contract for interactions with https://docs.chain.link",source:"@site/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator.md",sourceDirName:"limit-order-protocol/smart-contract/helpers",slug:"/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",permalink:"/new-docs/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/smart-contract/helpers/ChainlinkCalculator.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AmountCalculator",permalink:"/new-docs/docs/limit-order-protocol/smart-contract/helpers/AmountCalculator"},next:{title:"ERC1155Proxy",permalink:"/new-docs/docs/limit-order-protocol/smart-contract/helpers/ERC1155Proxy"}},d=[{value:"Functions",id:"functions",children:[{value:"singlePrice",id:"singleprice",children:[]},{value:"doublePrice",id:"doubleprice",children:[]}]}],m={toc:d};function u(t){var e=t.components,r=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"chainlinkcalculator"},"ChainlinkCalculator"),(0,l.kt)("p",null,"A helper contract for interactions with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.chain.link"},"https://docs.chain.link")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"singleprice"},"singlePrice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function singlePrice(\n  contract AggregatorInterface oracle,\n  uint256 inverseAndSpread,\n  uint256 amount\n) external returns (uint256)\n")),(0,l.kt)("p",null,"Calculates price of token relative to ETH scaled by 1e18"),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oracle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorInterface"),(0,l.kt)("td",{parentName:"tr",align:"left"},"concatenated inverse flag and spread. Lowest 254 bits specify spread amount. Spread is scaled by 1e9, i.e. 101% = 1.01e9, 99% = 0.99e9. Highest bit is set when oracle price should be inverted, e.g. for DAI-ETH oracle, inverse=false means that we request DAI price in ETH and inverse=true means that we request ETH price in DAI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"inverseAndSpread")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Result")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorInterface"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Token price times amount")))),(0,l.kt)("h3",{id:"doubleprice"},"doublePrice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function doublePrice(\n  contract AggregatorInterface oracle1,\n  contract AggregatorInterface oracle2,\n  uint256 spread,\n  uint256 amount\n) external returns (uint256)\n")),(0,l.kt)("p",null,"Calculates price of token A relative to token B. Note that order is important"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oracle1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorInterface"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"oracle2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorInterface"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"spread")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"amount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"return-values-1"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Result")),(0,l.kt)("td",{parentName:"tr",align:"left"},"contract AggregatorInterface"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Token A relative price times amount")))))}u.isMDXComponent=!0}}]);