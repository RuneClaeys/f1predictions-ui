import{r as m,t as v,g as R}from"./index.970aea1b.js";import{a as Q,t as l}from"./Home.0f248aa9.js";function X(e){return m(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function _(e){if(m(1,arguments),!X(e)&&typeof e!="number")return!1;var a=v(e);return!isNaN(Number(a))}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},G=function(e,a,t){var r,n=A[e];return typeof n=="string"?r=n:a===1?r=n.one:r=n.other.replace("{{count}}",a.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r},I=G;function x(e){return function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth,r=e.formats[t]||e.formats[e.defaultWidth];return r}}var B={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},j={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$={date:x({formats:B,defaultWidth:"full"}),time:x({formats:j,defaultWidth:"full"}),dateTime:x({formats:V,defaultWidth:"full"})},J=$,z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K=function(e,a,t,r){return z[e]},Z=K;function C(e){return function(a,t){var r=t||{},n=r.context?String(r.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):o;i=e.formattingValues[d]||e.formattingValues[o]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[s]}var y=e.argumentCallback?e.argumentCallback(a):a;return i[y]}}var ee={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},te={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ae={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},re={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ne={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ie={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},oe=function(e,a){var t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ue={ordinalNumber:oe,era:C({values:ee,defaultWidth:"wide"}),quarter:C({values:te,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:C({values:ae,defaultWidth:"wide"}),day:C({values:re,defaultWidth:"wide"}),dayPeriod:C({values:ne,defaultWidth:"wide",formattingValues:ie,defaultFormattingWidth:"wide"})},se=ue;function M(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=a.match(n);if(!i)return null;var o=i[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?ce(d,function(h){return h.test(o)}):de(d,function(h){return h.test(o)}),c;c=e.valueCallback?e.valueCallback(s):s,c=t.valueCallback?t.valueCallback(c):c;var y=a.slice(o.length);return{value:c,rest:y}}}function de(e,a){for(var t in e)if(e.hasOwnProperty(t)&&a(e[t]))return t}function ce(e,a){for(var t=0;t<e.length;t++)if(a(e[t]))return t}function fe(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.match(e.matchPattern);if(!r)return null;var n=r[0],i=a.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;var d=a.slice(n.length);return{value:o,rest:d}}}var me=/^(\d+)(th|st|nd|rd)?/i,he=/\d+/i,le={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ve={any:[/^b/i,/^(a|c)/i]},ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},we={any:[/1/i,/2/i,/3/i,/4/i]},ye={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},be={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Te={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ce={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Me={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},De={ordinalNumber:fe({matchPattern:me,parsePattern:he,valueCallback:function(e){return parseInt(e,10)}}),era:M({matchPatterns:le,defaultMatchWidth:"wide",parsePatterns:ve,defaultParseWidth:"any"}),quarter:M({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:ye,defaultMatchWidth:"wide",parsePatterns:be,defaultParseWidth:"any"}),day:M({matchPatterns:pe,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:Ce,defaultMatchWidth:"any",parsePatterns:Me,defaultParseWidth:"any"})},Pe=De,We={code:"en-US",formatDistance:I,formatLong:J,formatRelative:Z,localize:se,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}},xe=We;function Oe(e,a){m(2,arguments);var t=l(a);return Q(e,-t)}function u(e,a){for(var t=e<0?"-":"",r=Math.abs(e).toString();r.length<a;)r="0"+r;return t+r}var ke={y:function(e,a){var t=e.getUTCFullYear(),r=t>0?t:1-t;return u(a==="yy"?r%100:r,a.length)},M:function(e,a){var t=e.getUTCMonth();return a==="M"?String(t+1):u(t+1,2)},d:function(e,a){return u(e.getUTCDate(),a.length)},a:function(e,a){var t=e.getUTCHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h:function(e,a){return u(e.getUTCHours()%12||12,a.length)},H:function(e,a){return u(e.getUTCHours(),a.length)},m:function(e,a){return u(e.getUTCMinutes(),a.length)},s:function(e,a){return u(e.getUTCSeconds(),a.length)},S:function(e,a){var t=a.length,r=e.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,t-3));return u(n,a.length)}},w=ke,Se=864e5;function Ue(e){m(1,arguments);var a=v(e),t=a.getTime();a.setUTCMonth(0,1),a.setUTCHours(0,0,0,0);var r=a.getTime(),n=t-r;return Math.floor(n/Se)+1}function P(e){m(1,arguments);var a=1,t=v(e),r=t.getUTCDay(),n=(r<a?7:0)+r-a;return t.setUTCDate(t.getUTCDate()-n),t.setUTCHours(0,0,0,0),t}function k(e){m(1,arguments);var a=v(e),t=a.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(t+1,0,4),r.setUTCHours(0,0,0,0);var n=P(r),i=new Date(0);i.setUTCFullYear(t,0,4),i.setUTCHours(0,0,0,0);var o=P(i);return a.getTime()>=n.getTime()?t+1:a.getTime()>=o.getTime()?t:t-1}function Ye(e){m(1,arguments);var a=k(e),t=new Date(0);t.setUTCFullYear(a,0,4),t.setUTCHours(0,0,0,0);var r=P(t);return r}var Ee=6048e5;function Fe(e){m(1,arguments);var a=v(e),t=P(a).getTime()-Ye(a).getTime();return Math.round(t/Ee)+1}function W(e,a){m(1,arguments);var t=a||{},r=t.locale,n=r&&r.options&&r.options.weekStartsOn,i=n==null?0:l(n),o=t.weekStartsOn==null?i:l(t.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=v(e),s=d.getUTCDay(),c=(s<o?7:0)+s-o;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d}function S(e,a){m(1,arguments);var t=v(e,a),r=t.getUTCFullYear(),n=a||{},i=n.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=o==null?1:l(o),s=n.firstWeekContainsDate==null?d:l(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var y=W(c,a),h=new Date(0);h.setUTCFullYear(r,0,s),h.setUTCHours(0,0,0,0);var p=W(h,a);return t.getTime()>=y.getTime()?r+1:t.getTime()>=p.getTime()?r:r-1}function Ne(e,a){m(1,arguments);var t=a||{},r=t.locale,n=r&&r.options&&r.options.firstWeekContainsDate,i=n==null?1:l(n),o=t.firstWeekContainsDate==null?i:l(t.firstWeekContainsDate),d=S(e,a),s=new Date(0);s.setUTCFullYear(d,0,o),s.setUTCHours(0,0,0,0);var c=W(s,a);return c}var qe=6048e5;function Le(e,a){m(1,arguments);var t=v(e),r=W(t,a).getTime()-Ne(t,a).getTime();return Math.round(r/qe)+1}var T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},He={G:function(e,a,t){var r=e.getUTCFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(e,a,t){if(a==="yo"){var r=e.getUTCFullYear(),n=r>0?r:1-r;return t.ordinalNumber(n,{unit:"year"})}return w.y(e,a)},Y:function(e,a,t,r){var n=S(e,r),i=n>0?n:1-n;if(a==="YY"){var o=i%100;return u(o,2)}return a==="Yo"?t.ordinalNumber(i,{unit:"year"}):u(i,a.length)},R:function(e,a){var t=k(e);return u(t,a.length)},u:function(e,a){var t=e.getUTCFullYear();return u(t,a.length)},Q:function(e,a,t){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,a,t){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(a){case"q":return String(r);case"qq":return u(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,a,t){var r=e.getUTCMonth();switch(a){case"M":case"MM":return w.M(e,a);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(e,a,t){var r=e.getUTCMonth();switch(a){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(e,a,t,r){var n=Le(e,r);return a==="wo"?t.ordinalNumber(n,{unit:"week"}):u(n,a.length)},I:function(e,a,t){var r=Fe(e);return a==="Io"?t.ordinalNumber(r,{unit:"week"}):u(r,a.length)},d:function(e,a,t){return a==="do"?t.ordinalNumber(e.getUTCDate(),{unit:"date"}):w.d(e,a)},D:function(e,a,t){var r=Ue(e);return a==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):u(r,a.length)},E:function(e,a,t){var r=e.getUTCDay();switch(a){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(e,a,t,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(a){case"e":return String(i);case"ee":return u(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(n,{width:"short",context:"formatting"});case"eeee":default:return t.day(n,{width:"wide",context:"formatting"})}},c:function(e,a,t,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(a){case"c":return String(i);case"cc":return u(i,a.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(n,{width:"narrow",context:"standalone"});case"cccccc":return t.day(n,{width:"short",context:"standalone"});case"cccc":default:return t.day(n,{width:"wide",context:"standalone"})}},i:function(e,a,t){var r=e.getUTCDay(),n=r===0?7:r;switch(a){case"i":return String(n);case"ii":return u(n,a.length);case"io":return t.ordinalNumber(n,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(e,a,t){var r=e.getUTCHours(),n=r/12>=1?"pm":"am";switch(a){case"a":case"aa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,a,t){var r=e.getUTCHours(),n;switch(r===12?n=T.noon:r===0?n=T.midnight:n=r/12>=1?"pm":"am",a){case"b":case"bb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,a,t){var r=e.getUTCHours(),n;switch(r>=17?n=T.evening:r>=12?n=T.afternoon:r>=4?n=T.morning:n=T.night,a){case"B":case"BB":case"BBB":return t.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,a,t){if(a==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return w.h(e,a)},H:function(e,a,t){return a==="Ho"?t.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w.H(e,a)},K:function(e,a,t){var r=e.getUTCHours()%12;return a==="Ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,a.length)},k:function(e,a,t){var r=e.getUTCHours();return r===0&&(r=24),a==="ko"?t.ordinalNumber(r,{unit:"hour"}):u(r,a.length)},m:function(e,a,t){return a==="mo"?t.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w.m(e,a)},s:function(e,a,t){return a==="so"?t.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):w.s(e,a)},S:function(e,a){return w.S(e,a)},X:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(a){case"X":return Y(i);case"XXXX":case"XX":return b(i);case"XXXXX":case"XXX":default:return b(i,":")}},x:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"x":return Y(i);case"xxxx":case"xx":return b(i);case"xxxxx":case"xxx":default:return b(i,":")}},O:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+U(i,":");case"OOOO":default:return"GMT"+b(i,":")}},z:function(e,a,t,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+U(i,":");case"zzzz":default:return"GMT"+b(i,":")}},t:function(e,a,t,r){var n=r._originalDate||e,i=Math.floor(n.getTime()/1e3);return u(i,a.length)},T:function(e,a,t,r){var n=r._originalDate||e,i=n.getTime();return u(i,a.length)}};function U(e,a){var t=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),i=r%60;if(i===0)return t+String(n);var o=a||"";return t+String(n)+o+u(i,2)}function Y(e,a){if(e%60==0){var t=e>0?"-":"+";return t+u(Math.abs(e)/60,2)}return b(e,a)}function b(e,a){var t=a||"",r=e>0?"-":"+",n=Math.abs(e),i=u(Math.floor(n/60),2),o=u(n%60,2);return r+i+t+o}var Re=He;function E(e,a){switch(e){case"P":return a.date({width:"short"});case"PP":return a.date({width:"medium"});case"PPP":return a.date({width:"long"});case"PPPP":default:return a.date({width:"full"})}}function F(e,a){switch(e){case"p":return a.time({width:"short"});case"pp":return a.time({width:"medium"});case"ppp":return a.time({width:"long"});case"pppp":default:return a.time({width:"full"})}}function Qe(e,a){var t=e.match(/(P+)(p+)?/),r=t[1],n=t[2];if(!n)return E(e,a);var i;switch(r){case"P":i=a.dateTime({width:"short"});break;case"PP":i=a.dateTime({width:"medium"});break;case"PPP":i=a.dateTime({width:"long"});break;case"PPPP":default:i=a.dateTime({width:"full"});break}return i.replace("{{date}}",E(r,a)).replace("{{time}}",F(n,a))}var Xe={p:F,P:Qe},_e=Xe,Ae=["D","DD"],Ge=["YY","YYYY"];function Ie(e){return Ae.indexOf(e)!==-1}function Be(e){return Ge.indexOf(e)!==-1}function N(e,a,t){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(a,"`) for formatting years to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(a,"`) for formatting days of the month to the input `").concat(t,"`; see: https://git.io/fxCyr"))}var je=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$e=/^'([^]*?)'?$/,Je=/''/g,ze=/[a-zA-Z]/;function tt(e,a,t){m(2,arguments);var r=String(a),n=t||{},i=n.locale||xe,o=i.options&&i.options.firstWeekContainsDate,d=o==null?1:l(o),s=n.firstWeekContainsDate==null?d:l(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,y=c==null?0:l(c),h=n.weekStartsOn==null?y:l(n.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var p=v(e);if(!_(p))throw new RangeError("Invalid time value");var q=R(p),L=Oe(p,q),O={firstWeekContainsDate:s,weekStartsOn:h,locale:i,_originalDate:p},H=r.match(Ve).map(function(f){var g=f[0];if(g==="p"||g==="P"){var D=_e[g];return D(f,i.formatLong,O)}return f}).join("").match(je).map(function(f){if(f==="''")return"'";var g=f[0];if(g==="'")return Ke(f);var D=Re[g];if(D)return!n.useAdditionalWeekYearTokens&&Be(f)&&N(f,a,e),!n.useAdditionalDayOfYearTokens&&Ie(f)&&N(f,a,e),D(L,f,i.localize,O);if(g.match(ze))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return f}).join("");return H}function Ke(e){return e.match($e)[1].replace(Je,"'")}export{C as a,x as b,fe as c,M as d,tt as f};
