(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+Dg0":function(t){t.exports=JSON.parse('{"data":{"allGhostSettings":{"edges":[{"node":{"title":"CJ Blog","description":"Thoughts, stories and ideas.","logo":"https://static.ghost.org/v1.0.0/images/ghost-logo.svg","icon":null,"cover_image":"https://static.ghost.org/v3.0.0/images/publication-cover.png","facebook":"ghost","twitter":"@tryghost","lang":"en","timezone":"Etc/UTC","codeinjection_head":null,"codeinjection_foot":null,"codeinjection_styles":"","navigation":[{"label":"Home","url":"/"},{"label":"Tag","url":"/tag/getting-started/"},{"label":"Author","url":"/author/ghost/"},{"label":"Help","url":"https://ghost.org/docs/"}]}}]}}}')},"4JlD":function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("RW0V"),n("bWfx"),n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F");var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?i(o(t),(function(o){var s=encodeURIComponent(r(o))+n;return a(t[o])?i(t[o],(function(t){return s+encodeURIComponent(r(t))})).join(e):s+encodeURIComponent(r(t[o]))})).join(e):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,e){if(t.map)return t.map(e);for(var n=[],r=0;r<t.length;r++)n.push(e(t[r],r));return n}var o=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},"6VaU":function(t,e,n){"use strict";var r=n("XKFU"),a=n("xF/b"),i=n("S/j/"),o=n("ne8i"),s=n("2OiF"),l=n("zRwo");r(r.P,"Array",{flatMap:function(t){var e,n,r=i(this);return s(t),e=o(r.length),n=l(r,0),a(n,r,r,e,0,1,t,arguments[1]),n}}),n("nGyu")("flatMap")},"7VC1":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padEnd:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},"9VmF":function(t,e,n){"use strict";var r=n("XKFU"),a=n("ne8i"),i=n("0sh+"),o="".startsWith;r(r.P+r.F*n("UUeW")("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,n):e.slice(n,n+r.length)===r}})},"9XZr":function(t,e,n){"use strict";var r=n("XKFU"),a=n("Lgjv"),i=n("ol8x"),o=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);r(r.P+r.F*o,"String",{padStart:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},AphP:function(t,e,n){"use strict";var r=n("XKFU"),a=n("S/j/"),i=n("apmT");r(r.P+r.F*n("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=a(this),n=i(e);return"number"!=typeof n||isFinite(n)?e.toISOString():null}})},CxY0:function(t,e,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("mGWK"),n("SRfc"),n("Tze0"),n("pIFo"),n("KKXr"),n("V+eJ"),n("OG14");var r=n("GYWy"),a=n("Nehr");function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}e.parse=b,e.resolve=function(t,e){return b(t,!1,!0).resolve(e)},e.resolveObject=function(t,e){return t?b(t,!1,!0).resolveObject(e):e},e.format=function(t){a.isString(t)&&(t=b(t));return t instanceof i?t.format():i.prototype.format.call(t)},e.Url=i;var o=/^([a-z0-9.+-]+:)/i,s=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(c),u=["%","/","?",";","#"].concat(h),p=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,f=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},d={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=n("s4NR");function b(t,e,n){if(t&&a.isObject(t)&&t instanceof i)return t;var r=new i;return r.parse(t,e,n),r}i.prototype.parse=function(t,e,n){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),s=-1!==i&&i<t.indexOf("#")?"?":"#",c=t.split(s);c[0]=c[0].replace(/\\/g,"/");var b=t=c.join(s);if(b=b.trim(),!n&&1===t.split("#").length){var w=l.exec(b);if(w)return this.path=b,this.href=b,this.pathname=w[1],w[2]?(this.search=w[2],this.query=e?y.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var E=o.exec(b);if(E){var j=(E=E[0]).toLowerCase();this.protocol=j,b=b.substr(E.length)}if(n||E||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===b.substr(0,2);!O||E&&d[E]||(b=b.substr(2),this.slashes=!0)}if(!d[E]&&(O||E&&!v[E])){for(var x,S,A=-1,I=0;I<p.length;I++){-1!==(_=b.indexOf(p[I]))&&(-1===A||_<A)&&(A=_)}-1!==(S=-1===A?b.lastIndexOf("@"):b.lastIndexOf("@",A))&&(x=b.slice(0,S),b=b.slice(S+1),this.auth=decodeURIComponent(x)),A=-1;for(I=0;I<u.length;I++){var _;-1!==(_=b.indexOf(u[I]))&&(-1===A||_<A)&&(A=_)}-1===A&&(A=b.length),this.host=b.slice(0,A),b=b.slice(A),this.parseHost(),this.hostname=this.hostname||"";var U="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!U)for(var C=this.hostname.split(/\./),F=(I=0,C.length);I<F;I++){var P=C[I];if(P&&!P.match(m)){for(var k="",q=0,R=P.length;q<R;q++)P.charCodeAt(q)>127?k+="x":k+=P[q];if(!k.match(m)){var N=C.slice(0,I),T=C.slice(I+1),W=P.match(f);W&&(N.push(W[1]),T.unshift(W[2])),T.length&&(b="/"+T.join(".")+b),this.hostname=N.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),U||(this.hostname=r.toASCII(this.hostname));var K=this.port?":"+this.port:"",G=this.hostname||"";this.host=G+K,this.href+=this.host,U&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!g[j])for(I=0,F=h.length;I<F;I++){var J=h[I];if(-1!==b.indexOf(J)){var H=encodeURIComponent(J);H===J&&(H=escape(J)),b=b.split(J).join(H)}}var L=b.indexOf("#");-1!==L&&(this.hash=b.substr(L),b=b.slice(0,L));var M=b.indexOf("?");if(-1!==M?(this.search=b.substr(M),this.query=b.substr(M+1),e&&(this.query=y.parse(this.query)),b=b.slice(0,M)):e&&(this.search="",this.query={}),b&&(this.pathname=b),v[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){K=this.pathname||"";var X=this.search||"";this.path=K+X}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(o=y.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||v[e])&&!1!==i?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),s&&"?"!==s.charAt(0)&&(s="?"+s),e+i+(n=n.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(s=s.replace("#","%23"))+r},i.prototype.resolve=function(t){return this.resolveObject(b(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(a.isString(t)){var e=new i;e.parse(t,!1,!0),t=e}for(var n=new i,r=Object.keys(this),o=0;o<r.length;o++){var s=r[o];n[s]=this[s]}if(n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol){for(var l=Object.keys(t),c=0;c<l.length;c++){var h=l[c];"protocol"!==h&&(n[h]=t[h])}return v[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n}if(t.protocol&&t.protocol!==n.protocol){if(!v[t.protocol]){for(var u=Object.keys(t),p=0;p<u.length;p++){var m=u[p];n[m]=t[m]}return n.href=n.format(),n}if(n.protocol=t.protocol,t.host||d[t.protocol])n.pathname=t.pathname;else{for(var f=(t.pathname||"").split("/");f.length&&!(t.host=f.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==f[0]&&f.unshift(""),f.length<2&&f.unshift(""),n.pathname=f.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var g=n.pathname||"",y=n.search||"";n.path=g+y}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var b=n.pathname&&"/"===n.pathname.charAt(0),w=t.host||t.pathname&&"/"===t.pathname.charAt(0),E=w||b||n.host&&t.pathname,j=E,O=n.pathname&&n.pathname.split("/")||[],x=(f=t.pathname&&t.pathname.split("/")||[],n.protocol&&!v[n.protocol]);if(x&&(n.hostname="",n.port=null,n.host&&(""===O[0]?O[0]=n.host:O.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===f[0]?f[0]=t.host:f.unshift(t.host)),t.host=null),E=E&&(""===f[0]||""===O[0])),w)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,O=f;else if(f.length)O||(O=[]),O.pop(),O=O.concat(f),n.search=t.search,n.query=t.query;else if(!a.isNullOrUndefined(t.search)){if(x)n.hostname=n.host=O.shift(),(U=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=U.shift(),n.host=n.hostname=U.shift());return n.search=t.search,n.query=t.query,a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!O.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var S=O.slice(-1)[0],A=(n.host||t.host||O.length>1)&&("."===S||".."===S)||""===S,I=0,_=O.length;_>=0;_--)"."===(S=O[_])?O.splice(_,1):".."===S?(O.splice(_,1),I++):I&&(O.splice(_,1),I--);if(!E&&!j)for(;I--;I)O.unshift("..");!E||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),A&&"/"!==O.join("/").substr(-1)&&O.push("");var U,C=""===O[0]||O[0]&&"/"===O[0].charAt(0);x&&(n.hostname=n.host=C?"":O.length?O.shift():"",(U=!!(n.host&&n.host.indexOf("@")>0)&&n.host.split("@"))&&(n.auth=U.shift(),n.host=n.hostname=U.shift()));return(E=E||n.host&&O.length)&&!C&&O.unshift(""),O.length?n.pathname=O.join("/"):(n.pathname=null,n.path=null),a.isNull(n.pathname)&&a.isNull(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},i.prototype.parseHost=function(){var t=this.host,e=s.exec(t);e&&(":"!==(e=e[0])&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},FLlr:function(t,e,n){var r=n("XKFU");r(r.P,"String",{repeat:n("l0Rn")})},GYWy:function(t,e,n){(function(t,r){var a;n("mGWK"),n("pIFo"),n("KKXr"),function(i){e&&e.nodeType,t&&t.nodeType;var o="object"==typeof r&&r;o.global!==o&&o.window!==o&&o.self;var s,l=2147483647,c=/^xn--/,h=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=Math.floor,f=String.fromCharCode;function g(t){throw new RangeError(p[t])}function d(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function v(t,e){var n=t.split("@"),r="";return n.length>1&&(r=n[0]+"@",t=n[1]),r+d((t=t.replace(u,".")).split("."),e).join(".")}function y(t){for(var e,n,r=[],a=0,i=t.length;a<i;)(e=t.charCodeAt(a++))>=55296&&e<=56319&&a<i?56320==(64512&(n=t.charCodeAt(a++)))?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),a--):r.push(e);return r}function b(t){return d(t,(function(t){var e="";return t>65535&&(e+=f((t-=65536)>>>10&1023|55296),t=56320|1023&t),e+=f(t)})).join("")}function w(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function E(t,e,n){var r=0;for(t=n?m(t/700):t>>1,t+=m(t/e);t>455;r+=36)t=m(t/35);return m(r+36*t/(t+38))}function j(t){var e,n,r,a,i,o,s,c,h,u,p,f=[],d=t.length,v=0,y=128,w=72;for((n=t.lastIndexOf("-"))<0&&(n=0),r=0;r<n;++r)t.charCodeAt(r)>=128&&g("not-basic"),f.push(t.charCodeAt(r));for(a=n>0?n+1:0;a<d;){for(i=v,o=1,s=36;a>=d&&g("invalid-input"),((c=(p=t.charCodeAt(a++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:36)>=36||c>m((l-v)/o))&&g("overflow"),v+=c*o,!(c<(h=s<=w?1:s>=w+26?26:s-w));s+=36)o>m(l/(u=36-h))&&g("overflow"),o*=u;w=E(v-i,e=f.length+1,0==i),m(v/e)>l-y&&g("overflow"),y+=m(v/e),v%=e,f.splice(v++,0,y)}return b(f)}function O(t){var e,n,r,a,i,o,s,c,h,u,p,d,v,b,j,O=[];for(d=(t=y(t)).length,e=128,n=0,i=72,o=0;o<d;++o)(p=t[o])<128&&O.push(f(p));for(r=a=O.length,a&&O.push("-");r<d;){for(s=l,o=0;o<d;++o)(p=t[o])>=e&&p<s&&(s=p);for(s-e>m((l-n)/(v=r+1))&&g("overflow"),n+=(s-e)*v,e=s,o=0;o<d;++o)if((p=t[o])<e&&++n>l&&g("overflow"),p==e){for(c=n,h=36;!(c<(u=h<=i?1:h>=i+26?26:h-i));h+=36)j=c-u,b=36-u,O.push(f(w(u+j%b,0))),c=m(j/b);O.push(f(w(c,0))),i=E(n,v,r==a),n=0,++r}++n,++e}return O.join("")}s={version:"1.4.1",ucs2:{decode:y,encode:b},decode:j,encode:O,toASCII:function(t){return v(t,(function(t){return h.test(t)?"xn--"+O(t):t}))},toUnicode:function(t){return v(t,(function(t){return c.test(t)?j(t.slice(4).toLowerCase()):t}))}},void 0===(a=function(){return s}.call(e,n,e,t))||(t.exports=a)}()}).call(this,n("YuTi")(t),n("yLpj"))},I74W:function(t,e,n){"use strict";n("qncB")("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},INQe:function(t){t.exports=JSON.parse('{"data":{"allGhostSettings":{"edges":[{"node":{"title":"CJ Blog","description":"Thoughts, stories and ideas."}}]}}}')},Lgjv:function(t,e,n){var r=n("ne8i"),a=n("l0Rn"),i=n("vhPU");t.exports=function(t,e,n,o){var s=String(i(t)),l=s.length,c=void 0===n?" ":String(n),h=r(e);if(h<=l||""==c)return s;var u=h-l,p=a.call(c,Math.ceil(u/c.length));return p.length>u&&(p=p.slice(0,u)),o?p+s:s+p}},Nehr:function(t,e,n){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},Nr18:function(t,e,n){"use strict";var r=n("S/j/"),a=n("d/Gc"),i=n("ne8i");t.exports=function(t){for(var e=r(this),n=i(e.length),o=arguments.length,s=a(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:a(l,n);c>s;)e[s++]=t;return e}},SPin:function(t,e,n){"use strict";var r=n("XKFU"),a=n("eyMr");r(r.P+r.F*!n("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(t){return a(this,t,arguments.length,arguments[1],!0)}})},Tze0:function(t,e,n){"use strict";n("qncB")("trim",(function(t){return function(){return t(this,3)}}))},YuTi:function(t,e,n){n("HAE/"),t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bHtr:function(t,e,n){var r=n("XKFU");r(r.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},dRSK:function(t,e,n){"use strict";var r=n("XKFU"),a=n("CkkT")(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r(r.P+r.F*i,"Array",{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},fA63:function(t,e,n){"use strict";n("qncB")("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},kd2E:function(t,e,n){"use strict";function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),n("V+eJ"),n("pIFo"),n("KKXr"),t.exports=function(t,e,n,i){e=e||"&",n=n||"=";var o={};if("string"!=typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e);var l=1e3;i&&"number"==typeof i.maxKeys&&(l=i.maxKeys);var c=t.length;l>0&&c>l&&(c=l);for(var h=0;h<c;++h){var u,p,m,f,g=t[h].replace(s,"%20"),d=g.indexOf(n);d>=0?(u=g.substr(0,d),p=g.substr(d+1)):(u=g,p=""),m=decodeURIComponent(u),f=decodeURIComponent(p),r(o,m)?a(o[m])?o[m].push(f):o[m]=[o[m],f]:o[m]=f}return o};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},l0Rn:function(t,e,n){"use strict";var r=n("RYi7"),a=n("vhPU");t.exports=function(t){var e=String(a(this)),n="",i=r(t);if(i<0||i==1/0)throw RangeError("Count can't be negative");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},laY6:function(t){t.exports=JSON.parse('{"data":{"allGhostSettings":{"edges":[{"node":{"title":"CJ Blog","description":"Thoughts, stories and ideas.","logo":"https://static.ghost.org/v1.0.0/images/ghost-logo.svg","icon":null,"cover_image":"https://static.ghost.org/v3.0.0/images/publication-cover.png","facebook":"ghost","twitter":"@tryghost","lang":"en","timezone":"Etc/UTC","codeinjection_head":null,"codeinjection_foot":null,"codeinjection_styles":"","navigation":[{"label":"Home","url":"/"},{"label":"Tag","url":"/tag/getting-started/"},{"label":"Author","url":"/author/ghost/"},{"label":"Help","url":"https://ghost.org/docs/"}]}}]}}}')},mGWK:function(t,e,n){"use strict";var r=n("XKFU"),a=n("aCFj"),i=n("RYi7"),o=n("ne8i"),s=[].lastIndexOf,l=!!s&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(l||!n("LyE8")(s)),"Array",{lastIndexOf:function(t){if(l)return s.apply(this,arguments)||0;var e=a(this),n=o(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},rVk7:function(t){t.exports=JSON.parse('{"data":{"allGhostSettings":{"edges":[{"node":{"title":"CJ Blog","description":"Thoughts, stories and ideas.","logo":"https://static.ghost.org/v1.0.0/images/ghost-logo.svg","icon":null,"cover_image":"https://static.ghost.org/v3.0.0/images/publication-cover.png","facebook":"ghost","twitter":"@tryghost","lang":"en","timezone":"Etc/UTC","codeinjection_head":null,"codeinjection_foot":null,"codeinjection_styles":"","navigation":[{"label":"Home","url":"/"},{"label":"Tag","url":"/tag/getting-started/"},{"label":"Author","url":"/author/ghost/"},{"label":"Help","url":"https://ghost.org/docs/"}]}}]}}}')},s4NR:function(t,e,n){"use strict";e.decode=e.parse=n("kd2E"),e.encode=e.stringify=n("4JlD")},wCQ3:function(t,e,n){"use strict";n.d(e,"a",(function(){return F}));n("91GP");var r=n("INQe"),a=n("q1tI"),i=n.n(a),o=n("Wbzz"),s=n("CxY0"),l=n.n(s),c=n("N0cg"),h=n.n(c),u=(n("pIFo"),n("f3/d"),n("laY6")),p=n("TJpk"),m=n.n(p),f=n("LvDl"),g=n.n(f),d=n("17x9"),v=n.n(d),y=function(t){var e=[];return e.push(t.website?t.website:null,t.twitter?"https://twitter.com/"+t.twitter.replace(/^@/,"")+"/":null,t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null),e=g.a.compact(e),{name:t.name||null,sameAsArray:e.length?'["'+g.a.join(e,'", "')+'"]':null,image:t.profile_image||null,facebookUrl:t.facebook?"https://www.facebook.com/"+t.facebook.replace(/^\//,"")+"/":null}};y.defaultProps={fetchAuthorData:!1},y.PropTypes={primaryAuthor:v.a.shape({name:v.a.string.isRequired,profile_image:v.a.string,website:v.a.string,twitter:v.a.string,facebook:v.a.string}).isRequired};var b=y,w=function(t){var e=t.image;return e?i.a.createElement(m.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:e}),i.a.createElement("meta",{property:"og:image",content:e}),i.a.createElement("meta",{property:"og:image:width",content:h.a.shareImageWidth}),i.a.createElement("meta",{property:"og:image:height",content:h.a.shareImageHeight})):null},E=n("reRv"),j=function(t){var e=t.data,n=t.settings,r=t.canonical,a=e;n=n.allGhostSettings.edges[0].node;var o=b(a.primary_author),s=g.a.map(Object(E.tags)(a,{visibility:"public",fn:function(t){return t}}),"name"),c=s[0]||"",u=a.feature_image?a.feature_image:g.a.get(n,"cover_image",null),p=n.logo||h.a.siteIcon?l.a.resolve(h.a.siteUrl,n.logo||h.a.siteIcon):null,f={"@context":"https://schema.org/","@type":"Article",author:{"@type":"Person",name:o.name,image:o.image?o.image:void 0,sameAs:o.sameAsArray?o.sameAsArray:void 0},keywords:s.length?s.join(", "):void 0,headline:a.meta_title||a.title,url:r,datePublished:a.published_at,dateModified:a.updated_at,image:u?{"@type":"ImageObject",url:u,width:h.a.shareImageWidth,height:h.a.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:n.title,logo:{"@type":"ImageObject",url:p,width:60,height:60}},description:a.meta_description||a.excerpt,mainEntityOfPage:{"@type":"WebPage","@id":h.a.siteUrl}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,a.meta_title||a.title),i.a.createElement("meta",{name:"description",content:a.meta_description||a.excerpt}),i.a.createElement("link",{rel:"canonical",href:r}),i.a.createElement("meta",{property:"og:site_name",content:n.title}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:title",content:a.og_title||a.meta_title||a.title}),i.a.createElement("meta",{property:"og:description",content:a.og_description||a.excerpt||a.meta_description}),i.a.createElement("meta",{property:"og:url",content:r}),i.a.createElement("meta",{property:"article:published_time",content:a.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:a.updated_at}),s.map((function(t,e){return i.a.createElement("meta",{property:"article:tag",content:t,key:e})})),o.facebookUrl&&i.a.createElement("meta",{property:"article:author",content:o.facebookUrl}),i.a.createElement("meta",{name:"twitter:title",content:a.twitter_title||a.meta_title||a.title}),i.a.createElement("meta",{name:"twitter:description",content:a.twitter_description||a.excerpt||a.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:r}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:o.name}),c&&i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),c&&i.a.createElement("meta",{name:"twitter:data2",content:c}),n.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+n.twitter.replace(/^@/,"")+"/"}),n.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:n.twitter}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f,void 0,4))),i.a.createElement(w,{image:u}))},O=function(t){return i.a.createElement(o.StaticQuery,{query:"1004981455",render:function(e){return i.a.createElement(j,Object.assign({settings:e},t))},data:u})},x=n("rVk7"),S=function(t){var e=t.data,n=t.settings,r=t.canonical,a=t.title,o=t.description,s=t.image,c=t.type;n=n.allGhostSettings.edges[0].node;var u=l.a.resolve(h.a.siteUrl,n.logo||h.a.siteIcon),p=s||e.feature_image||g.a.get(n,"cover_image",null);p=p?l.a.resolve(h.a.siteUrl,p):null,o=o||e.meta_description||e.description||h.a.siteDescriptionMeta||n.description,a=(a||e.meta_title||e.name||e.title)+" - "+n.title;var f={"@context":"https://schema.org/","@type":c,url:r,image:p?{"@type":"ImageObject",url:p,width:h.a.shareImageWidth,height:h.a.shareImageHeight}:void 0,publisher:{"@type":"Organization",name:n.title,logo:{"@type":"ImageObject",url:u,width:60,height:60}},mainEntityOfPage:{"@type":"WebPage","@id":h.a.siteUrl},description:o};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,a),i.a.createElement("meta",{name:"description",content:o}),i.a.createElement("link",{rel:"canonical",href:r}),i.a.createElement("meta",{property:"og:site_name",content:n.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{property:"og:description",content:o}),i.a.createElement("meta",{property:"og:url",content:r}),i.a.createElement("meta",{name:"twitter:title",content:a}),i.a.createElement("meta",{name:"twitter:description",content:o}),i.a.createElement("meta",{name:"twitter:url",content:r}),n.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+n.twitter.replace(/^@/,"")+"/"}),n.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:n.twitter}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f,void 0,4))),i.a.createElement(w,{image:p}))},A=function(t){return i.a.createElement(o.StaticQuery,{query:"3093436507",render:function(e){return i.a.createElement(S,Object.assign({settings:e},t))},data:x})},I=n("+Dg0"),_=function(t){var e=t.data,n=t.settings,r=t.canonical;n=n.allGhostSettings.edges[0].node;var a=b(e),o=a.image||g.a.get(n,"cover_image",null),s=e.name+" - "+n.title,l=e.bio||h.a.siteDescriptionMeta||n.description,c={"@context":"https://schema.org/","@type":"Person",name:e.name,sameAs:a.sameAsArray?a.sameAsArray:void 0,url:r,image:o?{"@type":"ImageObject",url:o,width:h.a.shareImageWidth,height:h.a.shareImageHeight}:void 0,mainEntityOfPage:{"@type":"WebPage","@id":h.a.siteUrl},description:l};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement("title",null,s),i.a.createElement("meta",{name:"description",content:l}),i.a.createElement("link",{rel:"canonical",href:r}),i.a.createElement("meta",{property:"og:site_name",content:n.title}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:s}),i.a.createElement("meta",{property:"og:description",content:l}),i.a.createElement("meta",{property:"og:url",content:r}),i.a.createElement("meta",{name:"twitter:title",content:s}),i.a.createElement("meta",{name:"twitter:description",content:l}),i.a.createElement("meta",{name:"twitter:url",content:r}),n.twitter&&i.a.createElement("meta",{name:"twitter:site",content:"https://twitter.com/"+n.twitter.replace(/^@/,"")+"/"}),n.twitter&&i.a.createElement("meta",{name:"twitter:creator",content:n.twitter}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c,void 0,4))),i.a.createElement(w,{image:o}))},U=function(t){return i.a.createElement(o.StaticQuery,{query:"4112685740",render:function(e){return i.a.createElement(_,Object.assign({settings:e},t))},data:I})},C=function(t){var e=t.data,n=t.settings,r=t.title,a=t.description,o=t.image,s=t.location,c=l.a.resolve(h.a.siteUrl,s.pathname),u=e.ghostPost,p=e.ghostTag,m=e.ghostAuthor,f=e.ghostPage;return n=n.allGhostSettings.edges[0].node,u?i.a.createElement(O,{data:u,canonical:c}):p?i.a.createElement(A,{data:p,canonical:c,type:"Series"}):m?i.a.createElement(U,{data:m,canonical:c}):f?i.a.createElement(A,{data:f,canonical:c,type:"WebSite"}):(r=r||h.a.siteTitleMeta||n.title,a=a||h.a.siteDescriptionMeta||n.description,o=(o=o||n.cover_image||null)?l.a.resolve(h.a.siteUrl,o):null,i.a.createElement(A,{data:{},canonical:c,title:r,description:a,image:o,type:"WebSite"}))};C.defaultProps={data:{}};var F=function(t){return i.a.createElement(o.StaticQuery,{query:"2233248733",render:function(e){return i.a.createElement(C,Object.assign({settings:e},t))},data:r})}},"xF/b":function(t,e,n){"use strict";var r=n("EWmC"),a=n("0/R4"),i=n("ne8i"),o=n("m0Pp"),s=n("K0xU")("isConcatSpreadable");t.exports=function t(e,n,l,c,h,u,p,m){for(var f,g,d=h,v=0,y=!!p&&o(p,m,3);v<c;){if(v in l){if(f=y?y(l[v],v,n):l[v],g=!1,a(f)&&(g=void 0!==(g=f[s])?!!g:r(f)),g&&u>0)d=t(e,n,f,i(f.length),d,u-1)-1;else{if(d>=9007199254740991)throw TypeError();e[d]=f}d++}v++}return d}}}]);
//# sourceMappingURL=2831839c8c69a30f13d29ea8fc75dcc861615f0b-40a8c58303e8a4a2bb6f.js.map