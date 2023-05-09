"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[93089,32701],{34297:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(2784),r=a(56224);function l(e){let{img:t,caption:a,externalLink:l}=e;const o=l?n.createElement("figcaption",null,a," (",n.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"source"),")"):n.createElement("figcaption",null,a);return n.createElement("figure",null,n.createElement(r.Z,{img:t,alt:a}),o)}},55171:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(34297),r=a(81998),l=a(33142),o=a(43193);const m={...r.Z,Tabs:o.Z,TabItem:l.Z,Figure:n.Z}},20116:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(2784),r=a(6277),l=a(16094),o=a(27909),m=a(70357),i=a(85629),c=a(62995),s=a(39939),u=a(76542);function g(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,l.default)(),{blogDescription:r,blogTitle:m,permalink:i}=t,c="/"===i?a:m;return n.createElement(n.Fragment,null,n.createElement(o.d,{title:c,description:r}),n.createElement(s.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:a,sidebar:r}=e;return n.createElement(i.Z,{sidebar:r},n.createElement(u.Z,{items:a}),n.createElement(c.Z,{metadata:t}))}function E(e){return n.createElement(o.FG,{className:(0,r.Z)(m.k.wrapper.blogPages,m.k.page.blogListPage)},n.createElement(g,e),n.createElement(p,e))}},62995:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(22376),l=a(60919);function o(e){const{metadata:t}=e,{previousPage:a,nextPage:o}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(l.Z,{permalink:a,title:n.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(l.Z,{permalink:o,title:n.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},30314:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(2784),r=a(6277),l=a(59361),o=a(41789),m=a(30417),i=a(35209),c=a(40597);function s(e){return e.href?n.createElement(c.default,e):n.createElement(n.Fragment,null,e.children)}function u(e){let{author:t,className:a}=e;const{name:l,title:o,url:m,imageURL:i,email:c}=t,u=m||c&&`mailto:${c}`||void 0;return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(s,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:l})),l&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(s,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},l))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}const g={authorCol:"authorCol_q_iI",imageOnlyAuthorRow:"imageOnlyAuthorRow_les7",imageOnlyAuthorCol:"imageOnlyAuthorCol_uMKf"};function p(e){let{className:t}=e;const{metadata:{authors:a},assets:o}=(0,l.C)();if(0===a.length)return null;const m=a.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",m?g.imageOnlyAuthorRow:"row",t)},a.map(((e,t)=>n.createElement("div",{className:(0,r.Z)(!m&&"col col--6",m?g.imageOnlyAuthorCol:g.authorCol),key:t},n.createElement(u,{author:{...e,imageURL:o.authorsImageUrls[t]??e.imageURL}})))))}function E(){return n.createElement("header",null,n.createElement(m.Z,null),n.createElement(i.Z,null),n.createElement(p,null))}var d=a(96154),h=a(81770);function f(e){let{children:t,className:a}=e;const m=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return n.createElement(o.Z,{className:(0,r.Z)(m,a)},n.createElement(E,null),n.createElement(d.Z,null,t),n.createElement(h.Z,null))}},76542:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(59361),l=a(30314);function o(e){let{items:t,component:a=l.Z}=e;return n.createElement(n.Fragment,null,t.map((e=>{let{content:t}=e;return n.createElement(r.n,{key:t.metadata.permalink,content:t},n.createElement(a,null,n.createElement(t,null)))})))}}}]);