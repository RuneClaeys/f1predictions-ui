import{C as n}from"./Card.e0403388.js";import{B as c}from"./Button.10f28fc7.js";import{P as s}from"./Placeholder.e408a6d1.js";import{c as g,u as p,j as a}from"./vendor.855a4921.js";import{b,a as d,c as N,d as l,f as v}from"./index.14756eb0.js";import{s as x}from"./Home.0f248aa9.js";import"./Col.fc6e8593.js";import"./index.970aea1b.js";import"./index.6783881c.js";var h={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};function j(e,o,m){m=m||{};var i;return typeof h[e]=="string"?i=h[e]:o===1?i=h[e].one:i=h[e].other.replace("{{count}}",o),m.addSuffix?m.comparison>0?"over "+i:i+" geleden":i}var y={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},w={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},D={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},M={date:b({formats:y,defaultWidth:"full"}),time:b({formats:w,defaultWidth:"full"}),dateTime:b({formats:D,defaultWidth:"full"})},E=M,T={lastWeek:"'vorige' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"};function P(e,o,m,i){return T[e]}var V={narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},z={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},k={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},W={narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},C={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"}};function H(e){var o=Number(e);return o+"e"}var F={ordinalNumber:H,era:d({values:V,defaultWidth:"wide"}),quarter:d({values:z,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:d({values:k,defaultWidth:"wide"}),day:d({values:W,defaultWidth:"wide"}),dayPeriod:d({values:C,defaultWidth:"wide"})},_=F,B=/^(\d+)e?/i,X=/\d+/i,L={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},S={any:[/^v/,/^n/]},q={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},A={any:[/1/i,/2/i,/3/i,/4/i]},K={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},R={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},O={narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},Y={narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},J={any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},$={any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},Q={ordinalNumber:N({matchPattern:B,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:l({matchPatterns:L,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),quarter:l({matchPatterns:q,defaultMatchWidth:"wide",parsePatterns:A,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:l({matchPatterns:K,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),day:l({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),dayPeriod:l({matchPatterns:J,defaultMatchWidth:"any",parsePatterns:$,defaultParseWidth:"any"})},Z=Q,I={code:"nl-BE",formatDistance:j,formatLong:E,formatRelative:P,localize:_,match:Z,options:{weekStartsOn:1,firstWeekContainsDate:4}},f=I,r="C:\\Users\\runec\\Documents\\Projects\\f1predictions-ui\\src\\components\\Home\\ShowcaseGP.jsx";const me=({showcaseGP:e,isUpcomming:o,isActive:m,loading:i})=>{const{push:u}=g(),{t}=p();return a.exports.jsxDEV(n,{children:i?a.exports.jsxDEV(n.Body,{children:[a.exports.jsxDEV(s,{as:n.Title,animation:"glow",children:a.exports.jsxDEV(s,{className:"rounded-1",xs:8},void 0,!1,{fileName:r,lineNumber:20,columnNumber:25},globalThis)},void 0,!1,{fileName:r,lineNumber:19,columnNumber:21},globalThis),a.exports.jsxDEV(s,{as:n.Text,animation:"glow",children:[a.exports.jsxDEV(s,{className:"rounded-1",xs:10},void 0,!1,{fileName:r,lineNumber:23,columnNumber:25},globalThis),a.exports.jsxDEV(s,{className:"rounded-1",xs:6},void 0,!1,{fileName:r,lineNumber:24,columnNumber:25},globalThis),a.exports.jsxDEV(s,{className:"rounded-1",xs:8},void 0,!1,{fileName:r,lineNumber:25,columnNumber:25},globalThis)]},void 0,!0,{fileName:r,lineNumber:22,columnNumber:21},globalThis),a.exports.jsxDEV(s.Button,{xs:6,"aria-hidden":"true"},void 0,!1,{fileName:r,lineNumber:27,columnNumber:21},globalThis)]},void 0,!0,{fileName:r,lineNumber:18,columnNumber:17},globalThis):e?a.exports.jsxDEV(n.Body,{children:[a.exports.jsxDEV(n.Title,{children:e.name},void 0,!1,{fileName:r,lineNumber:31,columnNumber:21},globalThis),m?a.exports.jsxDEV(a.exports.Fragment,{children:[a.exports.jsxDEV(n.Text,{className:"mb-1",children:t("home.passed-gp",{name:e.name})},void 0,!1,{fileName:r,lineNumber:35,columnNumber:29},globalThis),a.exports.jsxDEV("div",{className:"d-flex gap-5",children:[a.exports.jsxDEV("p",{children:[t("home.quali"),": ",v(e.qualifying_start_timestamp,"EE dd/MM HH:mm",{locale:f})]},void 0,!0,{fileName:r,lineNumber:37,columnNumber:33},globalThis),a.exports.jsxDEV("p",{children:["Race: ",v(e.race_start_timestamp,"EE dd/MM HH:mm",{locale:f})]},void 0,!0,{fileName:r,lineNumber:40,columnNumber:33},globalThis)," "]},void 0,!0,{fileName:r,lineNumber:36,columnNumber:29},globalThis)]},void 0,!0):o?a.exports.jsxDEV(n.Text,{children:[t("home.upcomming-gp",{name:e.name}),a.exports.jsxDEV("strong",{className:"ms-1",children:v(x(new Date(e.qualifying_start_timestamp),1),"dd/MM HH:mm")},void 0,!1,{fileName:r,lineNumber:46,columnNumber:29},globalThis),"!"]},void 0,!0,{fileName:r,lineNumber:44,columnNumber:25},globalThis):a.exports.jsxDEV(n.Text,{children:t("home.passed-gp-and-result",{name:e.name})},void 0,!1,{fileName:r,lineNumber:52,columnNumber:25},globalThis),m?a.exports.jsxDEV(c,{onClick:()=>u("/result/"+e.id),variant:"primary",type:"button",children:t("home.show-prediction")},void 0,!1,{fileName:r,lineNumber:56,columnNumber:25},globalThis):o?e?.user_prediction?a.exports.jsxDEV(c,{onClick:()=>u("/prediction/"+e.id),variant:"primary",type:"button",children:t("home.edit-prediction")},void 0,!1,{fileName:r,lineNumber:61,columnNumber:29},globalThis):a.exports.jsxDEV(c,{onClick:()=>u("/prediction/"+e.id),variant:"primary",type:"button",children:t("home.enter-prediction")},void 0,!1,{fileName:r,lineNumber:65,columnNumber:29},globalThis):a.exports.jsxDEV(c,{onClick:()=>u("/result/"+e.id),variant:"primary",type:"button",children:t("home.show-results")},void 0,!1,{fileName:r,lineNumber:70,columnNumber:25},globalThis)]},void 0,!0,{fileName:r,lineNumber:30,columnNumber:17},globalThis):a.exports.jsxDEV(n.Body,{children:[a.exports.jsxDEV(n.Title,{children:t("global.season-start-title")},void 0,!1,{fileName:r,lineNumber:77,columnNumber:21},globalThis),a.exports.jsxDEV(n.Text,{children:t("global.season-start-description")},void 0,!1,{fileName:r,lineNumber:79,columnNumber:21},globalThis)]},void 0,!0,{fileName:r,lineNumber:76,columnNumber:17},globalThis)},void 0,!1,{fileName:r,lineNumber:16,columnNumber:9},globalThis)};export{me as default};
