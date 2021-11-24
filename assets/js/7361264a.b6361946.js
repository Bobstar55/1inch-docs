"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[3387],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return s}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),d=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=d(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=o,f=p["".concat(l,".").concat(s)]||p[s]||u[s]||i;return n?t.createElement(f,a(a({ref:r},m),{},{components:n})):t.createElement(f,a({ref:r},m))}));function s(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25410:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return p}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={sidebar_position:9},l="Limit order remaining",d={unversionedId:"limit-order-protocol/guide/remaining",id:"limit-order-protocol/guide/remaining",isDocsHomePage:!1,title:"Limit order remaining",description:"LimitOrderProtocolFacade.remaining()",source:"@site/docs/limit-order-protocol/guide/remaining.md",sourceDirName:"limit-order-protocol/guide",slug:"/limit-order-protocol/guide/remaining",permalink:"/docs/limit-order-protocol/guide/remaining",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/limit-order-protocol/guide/remaining.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Predicate",permalink:"/docs/limit-order-protocol/guide/predicate"},next:{title:"Validate a limit order",permalink:"/docs/limit-order-protocol/guide/validate-limit-order"}},m=[{value:"Example:",id:"example",children:[]}],u={toc:m};function p(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limit-order-remaining"},"Limit order remaining"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LimitOrderProtocolFacade.remaining()")),(0,i.kt)("p",null,"By default, a limit order is created unfilled.",(0,i.kt)("br",{parentName:"p"}),"\n","Until the first fill the ",(0,i.kt)("inlineCode",{parentName:"p"},"remaining")," method will throw an error ",(0,i.kt)("inlineCode",{parentName:"p"},"LOP: Unknown order"),".",(0,i.kt)("br",{parentName:"p"}),"\n","After the first fill, the method will return the remaining amount."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: a limit order can be partially filled")),(0,i.kt)("h2",{id:"example"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import Web3 from 'web3';\nimport {\n    LimitOrderProtocolFacade,\n    LimitOrderHash,\n    Web3ProviderConnector,\n} from '@1inch/limit-order-protocol';\nimport {BigNumber} from 'ethers/utils';\n\nconst orderMakerAmount = '400000000000'; // initial amount of the limit order\nconst orderHash: LimitOrderHash = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';\nconst contractAddress = '0x5fa31604fc5dcebfcac2481f9fa59d174126e5e6';\n\nconst connector = new Web3ProviderConnector(new Web3('...'));\nconst limitOrderProtocolFacade = new LimitOrderProtocolFacade(\n    contractAddress,\n    connector\n);\n\nconst remaining = await getRemaining(orderHash);\n\nasync function getRemaining(orderHash: string): string {\n    try {\n        const remaining: BigNumber = limitOrderProtocolFacade.remaining(\n            orderHash\n        );\n\n        return remaining.toString();\n    } catch (error) {\n        const errorMessage = typeof error === 'string' ? error : error.message;\n\n        if (errorMessage.includes('LOP: Unknown order')) {\n            return orderMakerAmount;\n        }\n\n        throw error;\n    }\n}\n")))}p.isMDXComponent=!0}}]);