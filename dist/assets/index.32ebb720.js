import{r as f,t as v,g as R}from"./index.970aea1b.js";function h(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function Q(e,t){f(2,arguments);var a=v(e).getTime(),r=h(t);return new Date(a+r)}function X(e){return f(1,arguments),e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function _(e){if(f(1,arguments),!X(e)&&typeof e!="number")return!1;var t=v(e);return!isNaN(Number(t))}var A={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},G=function(e,t,a){var r,n=A[e];return typeof n=="string"?r=n:t===1?r=n.one:r=n.other.replace("{{count}}",t.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r},I=G;function x(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth,r=e.formats[a]||e.formats[e.defaultWidth];return r}}var B={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},j={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},V={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$={date:x({formats:B,defaultWidth:"full"}),time:x({formats:j,defaultWidth:"full"}),dateTime:x({formats:V,defaultWidth:"full"})},J=$,z={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},K=function(e,t,a,r){return z[e]},Z=K;function C(e){return function(t,a){var r=a||{},n=r.context?String(r.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=r.width?String(r.width):o;i=e.formattingValues[d]||e.formattingValues[o]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;i=e.values[c]||e.values[s]}var y=e.argumentCallback?e.argumentCallback(t):t;return i[y]}}var ee={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},te={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ae={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},re={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ne={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ie={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},oe=function(e,t){var a=Number(e),r=a%100;if(r>20||r<10)switch(r%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},ue={ordinalNumber:oe,era:C({values:ee,defaultWidth:"wide"}),quarter:C({values:te,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:C({values:ae,defaultWidth:"wide"}),day:C({values:re,defaultWidth:"wide"}),dayPeriod:C({values:ne,defaultWidth:"wide",formattingValues:ie,defaultFormattingWidth:"wide"})},se=ue;function M(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.width,n=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?ce(d,function(l){return l.test(o)}):de(d,function(l){return l.test(o)}),c;c=e.valueCallback?e.valueCallback(s):s,c=a.valueCallback?a.valueCallback(c):c;var y=t.slice(o.length);return{value:c,rest:y}}}function de(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}function ce(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}function fe(e){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var n=r[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=a.valueCallback?a.valueCallback(o):o;var d=t.slice(n.length);return{value:o,rest:d}}}var me=/^(\d+)(th|st|nd|rd)?/i,he=/\d+/i,le={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ve={any:[/^b/i,/^(a|c)/i]},ge={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},we={any:[/1/i,/2/i,/3/i,/4/i]},ye={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},be={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},pe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Te={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ce={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Me={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},De={ordinalNumber:fe({matchPattern:me,parsePattern:he,valueCallback:function(e){return parseInt(e,10)}}),era:M({matchPatterns:le,defaultMatchWidth:"wide",parsePatterns:ve,defaultParseWidth:"any"}),quarter:M({matchPatterns:ge,defaultMatchWidth:"wide",parsePatterns:we,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:M({matchPatterns:ye,defaultMatchWidth:"wide",parsePatterns:be,defaultParseWidth:"any"}),day:M({matchPatterns:pe,defaultMatchWidth:"wide",parsePatterns:Te,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:Ce,defaultMatchWidth:"any",parsePatterns:Me,defaultParseWidth:"any"})},Pe=De,We={code:"en-US",formatDistance:I,formatLong:J,formatRelative:Z,localize:se,match:Pe,options:{weekStartsOn:0,firstWeekContainsDate:1}},xe=We;function Oe(e,t){f(2,arguments);var a=h(t);return Q(e,-a)}function u(e,t){for(var a=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return a+r}var ke={y:function(e,t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return u(t==="yy"?r%100:r,t.length)},M:function(e,t){var a=e.getUTCMonth();return t==="M"?String(a+1):u(a+1,2)},d:function(e,t){return u(e.getUTCDate(),t.length)},a:function(e,t){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.toUpperCase();case"aaa":return a;case"aaaaa":return a[0];case"aaaa":default:return a==="am"?"a.m.":"p.m."}},h:function(e,t){return u(e.getUTCHours()%12||12,t.length)},H:function(e,t){return u(e.getUTCHours(),t.length)},m:function(e,t){return u(e.getUTCMinutes(),t.length)},s:function(e,t){return u(e.getUTCSeconds(),t.length)},S:function(e,t){var a=t.length,r=e.getUTCMilliseconds(),n=Math.floor(r*Math.pow(10,a-3));return u(n,t.length)}},w=ke,Se=864e5;function Ue(e){f(1,arguments);var t=v(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),n=a-r;return Math.floor(n/Se)+1}function P(e){f(1,arguments);var t=1,a=v(e),r=a.getUTCDay(),n=(r<t?7:0)+r-t;return a.setUTCDate(a.getUTCDate()-n),a.setUTCHours(0,0,0,0),a}function k(e){f(1,arguments);var t=v(e),a=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(a+1,0,4),r.setUTCHours(0,0,0,0);var n=P(r),i=new Date(0);i.setUTCFullYear(a,0,4),i.setUTCHours(0,0,0,0);var o=P(i);return t.getTime()>=n.getTime()?a+1:t.getTime()>=o.getTime()?a:a-1}function Ye(e){f(1,arguments);var t=k(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var r=P(a);return r}var Ee=6048e5;function Ne(e){f(1,arguments);var t=v(e),a=P(t).getTime()-Ye(t).getTime();return Math.round(a/Ee)+1}function W(e,t){f(1,arguments);var a=t||{},r=a.locale,n=r&&r.options&&r.options.weekStartsOn,i=n==null?0:h(n),o=a.weekStartsOn==null?i:h(a.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=v(e),s=d.getUTCDay(),c=(s<o?7:0)+s-o;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d}function S(e,t){f(1,arguments);var a=v(e,t),r=a.getUTCFullYear(),n=t||{},i=n.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=o==null?1:h(o),s=n.firstWeekContainsDate==null?d:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,s),c.setUTCHours(0,0,0,0);var y=W(c,t),l=new Date(0);l.setUTCFullYear(r,0,s),l.setUTCHours(0,0,0,0);var p=W(l,t);return a.getTime()>=y.getTime()?r+1:a.getTime()>=p.getTime()?r:r-1}function Fe(e,t){f(1,arguments);var a=t||{},r=a.locale,n=r&&r.options&&r.options.firstWeekContainsDate,i=n==null?1:h(n),o=a.firstWeekContainsDate==null?i:h(a.firstWeekContainsDate),d=S(e,t),s=new Date(0);s.setUTCFullYear(d,0,o),s.setUTCHours(0,0,0,0);var c=W(s,t);return c}var qe=6048e5;function Le(e,t){f(1,arguments);var a=v(e),r=W(a,t).getTime()-Fe(a,t).getTime();return Math.round(r/qe)+1}var T={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},He={G:function(e,t,a){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return a.era(r,{width:"abbreviated"});case"GGGGG":return a.era(r,{width:"narrow"});case"GGGG":default:return a.era(r,{width:"wide"})}},y:function(e,t,a){if(t==="yo"){var r=e.getUTCFullYear(),n=r>0?r:1-r;return a.ordinalNumber(n,{unit:"year"})}return w.y(e,t)},Y:function(e,t,a,r){var n=S(e,r),i=n>0?n:1-n;if(t==="YY"){var o=i%100;return u(o,2)}return t==="Yo"?a.ordinalNumber(i,{unit:"year"}):u(i,t.length)},R:function(e,t){var a=k(e);return u(a,t.length)},u:function(e,t){var a=e.getUTCFullYear();return u(a,t.length)},Q:function(e,t,a){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return u(r,2);case"Qo":return a.ordinalNumber(r,{unit:"quarter"});case"QQQ":return a.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return a.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,a){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return u(r,2);case"qo":return a.ordinalNumber(r,{unit:"quarter"});case"qqq":return a.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return a.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,a){var r=e.getUTCMonth();switch(t){case"M":case"MM":return w.M(e,t);case"Mo":return a.ordinalNumber(r+1,{unit:"month"});case"MMM":return a.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return a.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,a){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return u(r+1,2);case"Lo":return a.ordinalNumber(r+1,{unit:"month"});case"LLL":return a.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return a.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,a,r){var n=Le(e,r);return t==="wo"?a.ordinalNumber(n,{unit:"week"}):u(n,t.length)},I:function(e,t,a){var r=Ne(e);return t==="Io"?a.ordinalNumber(r,{unit:"week"}):u(r,t.length)},d:function(e,t,a){return t==="do"?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):w.d(e,t)},D:function(e,t,a){var r=Ue(e);return t==="Do"?a.ordinalNumber(r,{unit:"dayOfYear"}):u(r,t.length)},E:function(e,t,a){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(r,{width:"short",context:"formatting"});case"EEEE":default:return a.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,a,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return u(i,2);case"eo":return a.ordinalNumber(i,{unit:"day"});case"eee":return a.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(n,{width:"short",context:"formatting"});case"eeee":default:return a.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,a,r){var n=e.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return u(i,t.length);case"co":return a.ordinalNumber(i,{unit:"day"});case"ccc":return a.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(n,{width:"narrow",context:"standalone"});case"cccccc":return a.day(n,{width:"short",context:"standalone"});case"cccc":default:return a.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,a){var r=e.getUTCDay(),n=r===0?7:r;switch(t){case"i":return String(n);case"ii":return u(n,t.length);case"io":return a.ordinalNumber(n,{unit:"day"});case"iii":return a.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(r,{width:"short",context:"formatting"});case"iiii":default:return a.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,a){var r=e.getUTCHours(),n=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,a){var r=e.getUTCHours(),n;switch(r===12?n=T.noon:r===0?n=T.midnight:n=r/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,a){var r=e.getUTCHours(),n;switch(r>=17?n=T.evening:r>=12?n=T.afternoon:r>=4?n=T.morning:n=T.night,t){case"B":case"BB":case"BBB":return a.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return a.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,a){if(t==="ho"){var r=e.getUTCHours()%12;return r===0&&(r=12),a.ordinalNumber(r,{unit:"hour"})}return w.h(e,t)},H:function(e,t,a){return t==="Ho"?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):w.H(e,t)},K:function(e,t,a){var r=e.getUTCHours()%12;return t==="Ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},k:function(e,t,a){var r=e.getUTCHours();return r===0&&(r=24),t==="ko"?a.ordinalNumber(r,{unit:"hour"}):u(r,t.length)},m:function(e,t,a){return t==="mo"?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w.m(e,t)},s:function(e,t,a){return t==="so"?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):w.s(e,t)},S:function(e,t){return w.S(e,t)},X:function(e,t,a,r){var n=r._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return Y(i);case"XXXX":case"XX":return b(i);case"XXXXX":case"XXX":default:return b(i,":")}},x:function(e,t,a,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(t){case"x":return Y(i);case"xxxx":case"xx":return b(i);case"xxxxx":case"xxx":default:return b(i,":")}},O:function(e,t,a,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+U(i,":");case"OOOO":default:return"GMT"+b(i,":")}},z:function(e,t,a,r){var n=r._originalDate||e,i=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+U(i,":");case"zzzz":default:return"GMT"+b(i,":")}},t:function(e,t,a,r){var n=r._originalDate||e,i=Math.floor(n.getTime()/1e3);return u(i,t.length)},T:function(e,t,a,r){var n=r._originalDate||e,i=n.getTime();return u(i,t.length)}};function U(e,t){var a=e>0?"-":"+",r=Math.abs(e),n=Math.floor(r/60),i=r%60;if(i===0)return a+String(n);var o=t||"";return a+String(n)+o+u(i,2)}function Y(e,t){if(e%60==0){var a=e>0?"-":"+";return a+u(Math.abs(e)/60,2)}return b(e,t)}function b(e,t){var a=t||"",r=e>0?"-":"+",n=Math.abs(e),i=u(Math.floor(n/60),2),o=u(n%60,2);return r+i+a+o}var Re=He;function E(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function N(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function Qe(e,t){var a=e.match(/(P+)(p+)?/),r=a[1],n=a[2];if(!n)return E(e,t);var i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",E(r,t)).replace("{{time}}",N(n,t))}var Xe={p:N,P:Qe},_e=Xe,Ae=["D","DD"],Ge=["YY","YYYY"];function Ie(e){return Ae.indexOf(e)!==-1}function Be(e){return Ge.indexOf(e)!==-1}function F(e,t,a){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://git.io/fxCyr"))}var je=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ve=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,$e=/^'([^]*?)'?$/,Je=/''/g,ze=/[a-zA-Z]/;function et(e,t,a){f(2,arguments);var r=String(t),n=a||{},i=n.locale||xe,o=i.options&&i.options.firstWeekContainsDate,d=o==null?1:h(o),s=n.firstWeekContainsDate==null?d:h(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,y=c==null?0:h(c),l=n.weekStartsOn==null?y:h(n.weekStartsOn);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var p=v(e);if(!_(p))throw new RangeError("Invalid time value");var q=R(p),L=Oe(p,q),O={firstWeekContainsDate:s,weekStartsOn:l,locale:i,_originalDate:p},H=r.match(Ve).map(function(m){var g=m[0];if(g==="p"||g==="P"){var D=_e[g];return D(m,i.formatLong,O)}return m}).join("").match(je).map(function(m){if(m==="''")return"'";var g=m[0];if(g==="'")return Ke(m);var D=Re[g];if(D)return!n.useAdditionalWeekYearTokens&&Be(m)&&F(m,t,e),!n.useAdditionalDayOfYearTokens&&Ie(m)&&F(m,t,e),D(L,m,i.localize,O);if(g.match(ze))throw new RangeError("Format string contains an unescaped latin alphabet character `"+g+"`");return m}).join("");return H}function Ke(e){return e.match($e)[1].replace(Je,"'")}export{Q as a,et as f,h as t};
