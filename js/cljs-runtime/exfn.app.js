goog.provide('exfn.app');
exfn.app.code_editor = (function exfn$app$code_editor(){
var source = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-editor-header","div.source-editor-header",117839807),"Source Editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#lineNos.text-editor-line-nos","textarea#lineNos.text-editor-line-nos",1781901793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),exfn.helpers.get_source_line_numbers(source)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#editor.text-editor","textarea#editor.text-editor",1897910906),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__47401_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-source","update-source",-132063591),p1__47401_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (e){
var scroll_pos = e.target.scrollTop;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),scroll_pos], null));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539)], null))),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"off","off",606440789)], null)], null)], null)], null);
});
exfn.app.code = (function exfn$app$code(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.code-container","div.code-container",-712521625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.parsed-code-header","div.parsed-code-header",-1083529098),"Parsed Code"], null),(function (){var code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)));
var breakpoints = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)], null)));
var code_with_lines = cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(code)),code);
var eip = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip","eip",-346827869)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.code","table.code",1206067114),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function exfn$app$code_$_iter__47402(s__47403){
return (new cljs.core.LazySeq(null,(function (){
var s__47403__$1 = s__47403;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47403__$1);
if(temp__5735__auto__){
var s__47403__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47403__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47403__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47405 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47404 = (0);
while(true){
if((i__47404 < size__4528__auto__)){
var vec__47406 = cljs.core._nth(c__4527__auto__,i__47404);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(0),null);
var code_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47406,(1),null);
cljs.core.chunk_append(b__47405,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.code-line","tr.code-line",-2090327719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),line_no,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?"goldenrod":"white")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.breakpoint","td.breakpoint",-1114738418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?"red":"lightgray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__47404,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),line_no], null));
});})(i__47404,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.code-eip","td.code-eip",-1267316521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-double-right","i.fas.fa-angle-double-right",928633881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.line-number","td.line-number",450146472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),line_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.instruction","label.instruction",1686016595),cljs.core.first(code_line)], null),(function (){var arguments$ = cljs.core.rest(code_line);
var iter__4529__auto__ = ((function (i__47404,arguments$,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip){
return (function exfn$app$code_$_iter__47402_$_iter__47409(s__47410){
return (new cljs.core.LazySeq(null,((function (i__47404,arguments$,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip){
return (function (){
var s__47410__$1 = s__47410;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47410__$1);
if(temp__5735__auto____$1){
var s__47410__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47410__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__47410__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__47412 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__47411 = (0);
while(true){
if((i__47411 < size__4528__auto____$1)){
var i = cljs.core._nth(c__4527__auto____$1,i__47411);
cljs.core.chunk_append(b__47412,(((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)));

var G__47424 = (i__47411 + (1));
i__47411 = G__47424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47412),exfn$app$code_$_iter__47402_$_iter__47409(cljs.core.chunk_rest(s__47410__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47412),null);
}
} else {
var i = cljs.core.first(s__47410__$2);
return cljs.core.cons((((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)),exfn$app$code_$_iter__47402_$_iter__47409(cljs.core.rest(s__47410__$2)));
}
} else {
return null;
}
break;
}
});})(i__47404,arguments$,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip))
,null,null));
});})(i__47404,arguments$,vec__47406,line_no,code_line,c__4527__auto__,size__4528__auto__,b__47405,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip))
;
return iter__4529__auto__(cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arguments$)),arguments$));
})()], null)], null)], null));

var G__47425 = (i__47404 + (1));
i__47404 = G__47425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47405),exfn$app$code_$_iter__47402(cljs.core.chunk_rest(s__47403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47405),null);
}
} else {
var vec__47413 = cljs.core.first(s__47403__$2);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47413,(0),null);
var code_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47413,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.code-line","tr.code-line",-2090327719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),line_no,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?"goldenrod":"white")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.breakpoint","td.breakpoint",-1114738418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?"red":"lightgray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__47413,line_no,code_line,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),line_no], null));
});})(vec__47413,line_no,code_line,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.code-eip","td.code-eip",-1267316521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-double-right","i.fas.fa-angle-double-right",928633881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.line-number","td.line-number",450146472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),line_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.instruction","label.instruction",1686016595),cljs.core.first(code_line)], null),(function (){var arguments$ = cljs.core.rest(code_line);
var iter__4529__auto__ = ((function (arguments$,vec__47413,line_no,code_line,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip){
return (function exfn$app$code_$_iter__47402_$_iter__47416(s__47417){
return (new cljs.core.LazySeq(null,(function (){
var s__47417__$1 = s__47417;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47417__$1);
if(temp__5735__auto____$1){
var s__47417__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47417__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47417__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47419 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47418 = (0);
while(true){
if((i__47418 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__47418);
cljs.core.chunk_append(b__47419,(((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)));

var G__47426 = (i__47418 + (1));
i__47418 = G__47426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47419),exfn$app$code_$_iter__47402_$_iter__47416(cljs.core.chunk_rest(s__47417__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47419),null);
}
} else {
var i = cljs.core.first(s__47417__$2);
return cljs.core.cons((((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)),exfn$app$code_$_iter__47402_$_iter__47416(cljs.core.rest(s__47417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(arguments$,vec__47413,line_no,code_line,s__47403__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip))
;
return iter__4529__auto__(cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(arguments$)),arguments$));
})()], null)], null)], null),exfn$app$code_$_iter__47402(cljs.core.rest(s__47403__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(code_with_lines);
})()], null)], null);
})()], null);
});
exfn.app.execution_controls = (function exfn$app$execution_controls(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var is_running_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running?","running?",-257884763)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.execution-controls","div.execution-controls",-293109282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.play-pause","button.btn.btn-success.play-pause",-949830727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510)], null));
})], null),(cljs.core.truth_(is_running_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-pause","i.fas.fa-pause",854339760)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play","i.fas.fa-play",-721810049)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.next-instruction","button.btn.btn-success.next-instruction",112569682),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-forward","i.fas.fa-forward",-1250741135)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.stop-button","button.btn.btn-danger.stop-button",522335043),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-stop","i.fas.fa-stop",1897729921)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.instr-per-sec","input.instr-per-sec",-210769157),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.speed-label","label.speed-label",1581692934),"speed (secs / instruction.)"], null)], null);
})()], null);
});
exfn.app.eip = (function exfn$app$eip(){
var eip = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip","eip",-346827869)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.eip-header","label.eip-header",1794513153),"EIP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.eip","label.eip",-1239988013),eip], null)], null);
});
exfn.app.registers = (function exfn$app$registers(){
var registers = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers","div.registers",1076157528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-header","div.registers-header",139048518),"Registers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers.list","div.registers.list",-775717093),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(registers,cljs.core.PersistentArrayMap.EMPTY))?(function (){var iter__4529__auto__ = (function exfn$app$registers_$_iter__47420(s__47421){
return (new cljs.core.LazySeq(null,(function (){
var s__47421__$1 = s__47421;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47421__$1);
if(temp__5735__auto__){
var s__47421__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47421__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47421__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47423 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47422 = (0);
while(true){
if((i__47422 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__47422);
cljs.core.chunk_append(b__47423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),cljs.core.first(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),cljs.core.second(r)], null)], null));

var G__47427 = (i__47422 + (1));
i__47422 = G__47427;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47423),exfn$app$registers_$_iter__47420(cljs.core.chunk_rest(s__47421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47423),null);
}
} else {
var r = cljs.core.first(s__47421__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),cljs.core.first(r)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),cljs.core.second(r)], null)], null),exfn$app$registers_$_iter__47420(cljs.core.rest(s__47421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(registers);
})():null)], null)], null);
});
exfn.app.app = (function exfn$app$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.code_editor], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.code], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.parse-btn","button.btn.btn-primary.parse-btn",-1960914073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619)], null));
})], null),"Parse"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.execution_controls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.eip-container","div.row.eip-container",-1317947265),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.eip], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.registers], null)], null)], null);
});
exfn.app.start = (function exfn$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.app], null),document.getElementById("app"));
});
exfn.app.init = (function exfn$app$init(){
return exfn.app.start();
});
goog.exportSymbol('exfn.app.init', exfn.app.init);
if((typeof exfn !== 'undefined') && (typeof exfn.app !== 'undefined') && (typeof exfn.app.initialize !== 'undefined')){
} else {
exfn.app.initialize = re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}

//# sourceMappingURL=exfn.app.js.map
