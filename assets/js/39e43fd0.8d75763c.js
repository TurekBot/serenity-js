"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[17698],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=a,y=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},34721:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,toc:()=>s});var n=r(7896),a=(r(2784),r(30876));const o={},i=void 0,s=[{value:"Serenity/JS Mocha",id:"serenityjs-mocha",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage with standalone Mocha",id:"usage-with-standalone-mocha",level:3},{value:"JavaScript",id:"javascript",level:4},{value:"TypeScript",id:"typescript",level:4},{value:"Using Mocha configuration file",id:"using-mocha-configuration-file",level:4},{value:"Using Serenity/JS Mocha with Protractor",id:"using-serenityjs-mocha-with-protractor",level:3},{value:"Using Serenity/JS Mocha with WebdriverIO",id:"using-serenityjs-mocha-with-webdriverio",level:3},{value:"Example projects",id:"example-projects",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}],p={toc:s},l="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,a.kt)("p",null,"\u2b50\ufe0f Get started with Serenity/JS!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario"},"Serenity/JS web testing tutorial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook")," and ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started/"},"Getting Started guides")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/core"},"API documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS Project Templates on GitHub"))),(0,a.kt)("p",null,"\ud83d\udc4b Join the Serenity/JS Community!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Meet other Serenity/JS developers and maintainers on the ",(0,a.kt)("a",{parentName:"li",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community chat channel"),","),(0,a.kt)("li",{parentName:"ul"},"Find answers to your Serenity/JS questions on the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Forum"),","),(0,a.kt)("li",{parentName:"ul"},"Learn how to ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/contributing"},"contribute to Serenity/JS"),","),(0,a.kt)("li",{parentName:"ul"},"Support the project and gain access to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/playbooks"},"Serenity/JS Playbooks")," by becoming a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sponsors/serenity-js"},"Serenity/JS GitHub Sponsor"),"!")),(0,a.kt)("h2",{id:"serenityjs-mocha"},"Serenity/JS Mocha"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/mocha/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/mocha"))," contains an adapter you register with ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha test runner")," to enable integration between Mocha and Serenity/JS."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," version 8.x or newer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev mocha@8.x\n")),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@serenity-js/mocha")," adapter, as well as ",(0,a.kt)("inlineCode",{parentName:"p"},"@serenity-js/core")," and any ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/console-reporter/"},"Serenity/JS reporting modules")," you'd like to use, for example ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/console-reporter/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/console-reporter")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/mocha\n")),(0,a.kt)("p",null,"To learn more about Serenity/JS and how to use it on your project, follow the ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started/"},"Serenity/JS Getting Started guide"),"."),(0,a.kt)("h3",{id:"usage-with-standalone-mocha"},"Usage with standalone Mocha"),(0,a.kt)("p",null,"To use Serenity/JS with standalone Mocha, for example to run tests of ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js/api/rest"},"REST APIs"),",\nyou'll need a setup file that configures Serenity/JS reporting services."),(0,a.kt)("h4",{id:"javascript"},"JavaScript"),(0,a.kt)("p",null,"If you're writing your tests in JavaScript, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.js")," file (for example under ",(0,a.kt)("inlineCode",{parentName:"p"},"spec/support/setup.js"),", but you can use any location you like):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// spec/support/setup.js\n\nconst \n    { ConsoleReporter } = require('@serenity-js/console-reporter'),\n    { configure } = require('@serenity-js/core');\n\nconfigure({\n    crew: [\n        ConsoleReporter.forDarkTerminals(),\n    ],\n})\n")),(0,a.kt)("p",null,"Next, run Mocha as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"mocha --reporter=@serenity-js/mocha \\\n      --require=spec/support/setup.js \\\n      'spec/**/*.spec.js'\n")),(0,a.kt)("h4",{id:"typescript"},"TypeScript"),(0,a.kt)("p",null,"If you're writing your tests in TypeScript, you might want to run them via ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-node"},(0,a.kt)("inlineCode",{parentName:"a"},"ts-node")),", which transpiles TypeScript in memory without you having to do it before every test run."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev typescript ts-node\n")),(0,a.kt)("p",null,"If you haven't done so already, configure your TypeScript transpiler via ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},(0,a.kt)("inlineCode",{parentName:"a"},"tsconfig.json")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "es2018",\n    "lib": ["es2018"],\n    "module": "commonjs"\n  }\n}\n')),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.ts")," file (for example under ",(0,a.kt)("inlineCode",{parentName:"p"},"spec/support/setup.ts"),", but you can use any location you like):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// spec/support/setup.ts\n\nimport { ConsoleReporter } from '@serenity-js/console-reporter'\nimport { configure } from '@serenity-js/core'\n\nconfigure({\n    crew: [\n        ConsoleReporter.forDarkTerminals(),\n    ],\n})\n")),(0,a.kt)("p",null,"Next, run Mocha as follows: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mocha --reporter=@serenity-js/mocha \\\n      --require=ts-node/register \\\n      --require=spec/support/setup.ts \\\n      'spec/**/*.spec.ts'\n")),(0,a.kt)("h4",{id:"using-mocha-configuration-file"},"Using Mocha configuration file"),(0,a.kt)("p",null,"Please note that you can use ",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org/#configuring-mocha-nodejs"},"Mocha configuration file"),"\nto simplify your command line execution."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# .mocharc.yml\nreporter: '@serenity-js/mocha'\nrequire:\n  - ts-node/register\n  - spec/support/setup.ts\ncheck-leaks: false\ntimeout: 5000\nv8-stack-trace-limit: 100\n# ...other config\n")),(0,a.kt)("h3",{id:"using-serenityjs-mocha-with-protractor"},"Using Serenity/JS Mocha with Protractor"),(0,a.kt)("p",null,"Configure your Protractor installation as per instructions in ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/protractor/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))," module."),(0,a.kt)("p",null,"Next, instruct Serenity/JS to run your tests using Mocha. You can also use your ",(0,a.kt)("inlineCode",{parentName:"p"},"protractor.conf.js")," file to ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/"},"configure Mocha")," if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="protractor.conf.js"',title:'"protractor.conf.js"'},"// protractor.conf.js\n\nexports.config = {\n    // Tell Protractor to use the Serenity/JS framework adapter\n    framework:      'custom',\n    frameworkPath:  require.resolve('@serenity-js/protractor/adapter'),\n  \n    serenity: {\n        runner: 'mocha',        // Use Mocha\n        // ... other Serenity/JS-specific configuration\n    },\n\n    mochaOpts: {\n        // Mocha-specific configuration\n    },\n\n    // ... other Protractor-specific configuration   \n}\n")),(0,a.kt)("p",null,"Learn more about supported ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/"},"Mocha configuration options"),"."),(0,a.kt)("h3",{id:"using-serenityjs-mocha-with-webdriverio"},"Using Serenity/JS Mocha with WebdriverIO"),(0,a.kt)("p",null,"Configure your WebdriverIO installation as per instructions in ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/webdriverio/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))," module."),(0,a.kt)("p",null,"Next, instruct Serenity/JS to run your tests using Mocha. You can also use your ",(0,a.kt)("inlineCode",{parentName:"p"},"wdio.conf.ts")," file to ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/"},"configure Mocha")," if needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"// wdio.conf.ts\n\nexport const config = {\n    // Tell WebdriverIO to use the Serenity/JS framework adapter\n    framework: '@serenity-js/webdriverio',\n\n    // Serenity/JS configuration\n    serenity: {\n        // Configure Serenity/JS to use an appropriate test runner adapter\n        runner: 'mocha',        // Use Mocha\n        // ... other Serenity/JS-specific configuration\n    },\n\n    mochaOpts: {\n        // Mocha-specific configuration\n    },\n\n    // ... other Protractor-specific configuration   \n}\n")),(0,a.kt)("p",null,"Learn more about supported ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/mocha-adapter/interface/MochaConfig/"},"Mocha configuration options"),"."),(0,a.kt)("h3",{id:"example-projects"},"Example projects"),(0,a.kt)("p",null,"Study ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"Serenity/JS example projects")," to learn more. "),(0,a.kt)("h2",{id:"-stay-up-to-date"},"\ud83d\udce3 Stay up to date"),(0,a.kt)("p",null,"New features, tutorials, and demos are coming soon!\nFollow ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"Serenity/JS on LinkedIn"),",\nsubscribe to ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},"Serenity/JS channel on YouTube")," and join the ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"Serenity/JS on GitHub")," to help others discover the framework!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"}))),(0,a.kt)("h2",{id:"-support-serenityjs"},"\ud83d\udc9b Support Serenity/JS"),(0,a.kt)("p",null,"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))))}c.isMDXComponent=!0}}]);