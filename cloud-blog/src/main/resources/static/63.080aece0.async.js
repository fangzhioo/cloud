(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{"4aKW":function(e,t,a){(function(e){e(a("pWS9"))})((function(e){"use strict";e.defineMode("ebnf",(function(t){var a={slash:0,parenthesis:1},c={comment:0,_string:1,characterClass:2},n=null;return t.bracesMode&&(n=e.getMode(t,t.bracesMode)),{startState:function(){return{stringType:null,commentType:null,braced:0,lhs:!0,localState:null,stack:[],inDefinition:!1}},token:function(t,r){if(t){switch(0===r.stack.length&&('"'==t.peek()||"'"==t.peek()?(r.stringType=t.peek(),t.next(),r.stack.unshift(c._string)):t.match(/^\/\*/)?(r.stack.unshift(c.comment),r.commentType=a.slash):t.match(/^\(\*/)&&(r.stack.unshift(c.comment),r.commentType=a.parenthesis)),r.stack[0]){case c._string:while(r.stack[0]===c._string&&!t.eol())t.peek()===r.stringType?(t.next(),r.stack.shift()):"\\"===t.peek()?(t.next(),t.next()):t.match(/^.[^\\\"\']*/);return r.lhs?"property string":"string";case c.comment:while(r.stack[0]===c.comment&&!t.eol())r.commentType===a.slash&&t.match(/\*\//)||r.commentType===a.parenthesis&&t.match(/\*\)/)?(r.stack.shift(),r.commentType=null):t.match(/^.[^\*]*/);return"comment";case c.characterClass:while(r.stack[0]===c.characterClass&&!t.eol())t.match(/^[^\]\\]+/)||t.match(/^\\./)||r.stack.shift();return"operator"}var s=t.peek();if(null!==n&&(r.braced||"{"===s)){null===r.localState&&(r.localState=e.startState(n));var i=n.token(t,r.localState),h=t.current();if(!i)for(var m=0;m<h.length;m++)"{"===h[m]?(0===r.braced&&(i="matchingbracket"),r.braced++):"}"===h[m]&&(r.braced--,0===r.braced&&(i="matchingbracket"));return i}switch(s){case"[":return t.next(),r.stack.unshift(c.characterClass),"bracket";case":":case"|":case";":return t.next(),"operator";case"%":if(t.match("%%"))return"header";if(t.match(/[%][A-Za-z]+/))return"keyword";if(t.match(/[%][}]/))return"matchingbracket";break;case"/":if(t.match(/[\/][A-Za-z]+/))return"keyword";case"\\":if(t.match(/[\][a-z]+/))return"string-2";case".":if(t.match("."))return"atom";case"*":case"-":case"+":case"^":if(t.match(s))return"atom";case"$":if(t.match("$$"))return"builtin";if(t.match(/[$][0-9]+/))return"variable-3";case"<":if(t.match(/<<[a-zA-Z_]+>>/))return"builtin"}return t.match(/^\/\//)?(t.skipToEnd(),"comment"):t.match(/return/)?"operator":t.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)?t.match(/(?=[\(.])/)?"variable":t.match(/(?=[\s\n]*[:=])/)?"def":"variable-2":-1!=["[","]","(",")"].indexOf(t.peek())?(t.next(),"bracket"):(t.eatSpace()||t.next(),null)}}}})),e.defineMIME("text/x-ebnf","ebnf")}))}}]);