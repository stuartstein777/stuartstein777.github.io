goog.provide('exfn.app');
exfn.app.code_editor = (function exfn$app$code_editor(){
var source = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.editor","div.editor",-1423342585),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.source-editor-header.header","div.source-editor-header.header",236152436),"Source Editor",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn.py-0","button.btn.btn-danger.btn.py-0",1046993051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-source","clear-source",-602361457)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2)], null)], null),"clear"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#lineNos.text-editor-line-nos","textarea#lineNos.text-editor-line-nos",1781901793),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"value","value",305978217),exfn.helpers.get_source_line_numbers(source)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#editor.text-editor","textarea#editor.text-editor",1897910906),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55279_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-source","update-source",-132063591),p1__55279_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),(function (e){
var scroll_pos = e.target.scrollTop;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),scroll_pos], null));
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539)], null))),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"off","off",606440789)], null)], null)], null)], null);
});
exfn.app.code = (function exfn$app$code(){
var code = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null)));
var breakpoints = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)], null)));
var code_with_lines = cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(code)),code);
var eip = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip","eip",-346827869)], null)));
var on_breakpoint_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"height","height",1025178622),(455),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"width","width",-384071477),(1000)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.parsed-code-header.header","div.parsed-code-header.header",1340136393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash-alt","i.fas.fa-trash-alt",-1253754412),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-breakpoints","clear-breakpoints",-910746754)], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null)], null),"Parsed Code"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn.py-0","button.btn.btn-danger.btn.py-0",1046993051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-parsed","clear-parsed",-1655539557)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2)], null)], null),"clear"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#code-container.code-container","div#code-container.code-container",-736315052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table#code.code","table#code.code",814799279),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4529__auto__ = (function exfn$app$code_$_iter__55280(s__55281){
return (new cljs.core.LazySeq(null,(function (){
var s__55281__$1 = s__55281;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55281__$1);
if(temp__5735__auto__){
var s__55281__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55281__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55281__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55283 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55282 = (0);
while(true){
if((i__55282 < size__4528__auto__)){
var vec__55284 = cljs.core._nth(c__4527__auto__,i__55282);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55284,(0),null);
var code_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55284,(1),null);
cljs.core.chunk_append(b__55283,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.code-line","tr.code-line",-2090327719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),line_no,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?"goldenrod":"white")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.breakpoint","td.breakpoint",-1114738418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?"red":"lightgray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__55282,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),line_no], null));
});})(i__55282,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.code-eip","td.code-eip",-1267316521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-double-right","i.fas.fa-angle-double-right",928633881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.line-number","td.line-number",450146472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),line_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.instruction","label.instruction",1686016595),cljs.core.first(code_line)], null),(function (){var arguments$ = cljs.core.rest(code_line);
var iter__4529__auto__ = ((function (i__55282,arguments$,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_){
return (function exfn$app$code_$_iter__55280_$_iter__55287(s__55288){
return (new cljs.core.LazySeq(null,((function (i__55282,arguments$,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_){
return (function (){
var s__55288__$1 = s__55288;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55288__$1);
if(temp__5735__auto____$1){
var s__55288__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55288__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__55288__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__55290 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__55289 = (0);
while(true){
if((i__55289 < size__4528__auto____$1)){
var i = cljs.core._nth(c__4527__auto____$1,i__55289);
cljs.core.chunk_append(b__55290,(((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)));

var G__55385 = (i__55289 + (1));
i__55289 = G__55385;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55290),exfn$app$code_$_iter__55280_$_iter__55287(cljs.core.chunk_rest(s__55288__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55290),null);
}
} else {
var i = cljs.core.first(s__55288__$2);
return cljs.core.cons((((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)),exfn$app$code_$_iter__55280_$_iter__55287(cljs.core.rest(s__55288__$2)));
}
} else {
return null;
}
break;
}
});})(i__55282,arguments$,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_))
,null,null));
});})(i__55282,arguments$,vec__55284,line_no,code_line,c__4527__auto__,size__4528__auto__,b__55283,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_))
;
return iter__4529__auto__(exfn.helpers.keyed_collection(arguments$));
})()], null)], null)], null));

var G__55386 = (i__55282 + (1));
i__55282 = G__55386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55283),exfn$app$code_$_iter__55280(cljs.core.chunk_rest(s__55281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55283),null);
}
} else {
var vec__55291 = cljs.core.first(s__55281__$2);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55291,(0),null);
var code_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55291,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.code-line","tr.code-line",-2090327719),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),line_no,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?"goldenrod":"white")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.breakpoint","td.breakpoint",-1114738418),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?"red":"lightgray")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__55291,line_no,code_line,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),line_no], null));
});})(vec__55291,line_no,code_line,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.code-eip","td.code-eip",-1267316521),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-double-right","i.fas.fa-angle-double-right",928633881),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(eip,line_no))?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.line-number","td.line-number",450146472),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),line_no], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.instruction","label.instruction",1686016595),cljs.core.first(code_line)], null),(function (){var arguments$ = cljs.core.rest(code_line);
var iter__4529__auto__ = ((function (arguments$,vec__55291,line_no,code_line,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_){
return (function exfn$app$code_$_iter__55280_$_iter__55294(s__55295){
return (new cljs.core.LazySeq(null,(function (){
var s__55295__$1 = s__55295;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55295__$1);
if(temp__5735__auto____$1){
var s__55295__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55295__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55295__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55297 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55296 = (0);
while(true){
if((i__55296 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__55296);
cljs.core.chunk_append(b__55297,(((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)));

var G__55387 = (i__55296 + (1));
i__55296 = G__55387;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55297),exfn$app$code_$_iter__55280_$_iter__55294(cljs.core.chunk_rest(s__55295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55297),null);
}
} else {
var i = cljs.core.first(s__55295__$2);
return cljs.core.cons((((cljs.core.val(i) instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.register","label.register",1605989368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.value","label.value",-1924406993),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(i)], null),cljs.core.val(i)], null)),exfn$app$code_$_iter__55280_$_iter__55294(cljs.core.rest(s__55295__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(arguments$,vec__55291,line_no,code_line,s__55281__$2,temp__5735__auto__,code,breakpoints,code_with_lines,eip,on_breakpoint_QMARK_))
;
return iter__4529__auto__(exfn.helpers.keyed_collection(arguments$));
})()], null)], null)], null),exfn$app$code_$_iter__55280(cljs.core.rest(s__55281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(code_with_lines);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.breakpoint-indicator","div.breakpoint-indicator",1071892466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(on_breakpoint_QMARK_)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),["Breakpoint hit: Line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(eip)].join('')], null)], null)], null);
});
exfn.app.execution_controls = (function exfn$app$execution_controls(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var is_running_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running?","running?",-257884763)], null)));
var finished_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finished?","finished?",2067288119)], null)));
var has_parsed_code_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677)], null)));
var running_speed = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)], null)));
var on_breakpoint = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634)], null)));
var valid_running_speed = cljs.core.re_matches(/^\d+/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(running_speed));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.execution-controls","div.execution-controls",-293109282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary.parse-btn","button.btn.btn-primary.parse-btn",-1960914073),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse","parse",-1162164619)], null));
})], null),"Parse"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.play-pause","button.btn.btn-success.play-pause",-949830727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var and__4115__auto__ = (function (){var or__4126__auto__ = finished_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.not(has_parsed_code_QMARK_)) || (cljs.core.not(valid_running_speed)));
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(on_breakpoint);
} else {
return and__4115__auto__;
}
})()], null),(cljs.core.truth_(is_running_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-pause","i.fas.fa-pause",854339760)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play","i.fas.fa-play",-721810049)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success.next-instruction","button.btn.btn-success.next-instruction",112569682),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var and__4115__auto__ = (function (){var or__4126__auto__ = finished_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.not(has_parsed_code_QMARK_);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return is_running_QMARK_;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(on_breakpoint);
} else {
return and__4115__auto__;
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-forward","i.fas.fa-forward",-1250741135)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.stop-button","button.btn.btn-danger.stop-button",522335043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset","reset",-800929946)], null));
})], null),(cljs.core.truth_(finished_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-redo","i.fas.fa-redo",-523624103)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-stop","i.fas.fa-stop",1897729921)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.instr-per-sec","input.instr-per-sec",-210769157),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),is_running_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__55298_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-running-speed","update-running-speed",-1892375383),p1__55298_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"1000",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),running_speed], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.speed-label","label.speed-label",1581692934),"speed (msecs / instruction.)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.speed-value-error","label.speed-value-error",1127649156),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(valid_running_speed)?new cljs.core.Keyword(null,"hidden","hidden",-312506092):new cljs.core.Keyword(null,"visible","visible",-1024216805))], null)], null),"Speed should be a whole number."], null)], null);
})()], null);
});
exfn.app.eip = (function exfn$app$eip(){
var eip = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip","eip",-346827869)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.eip-header.header","label.eip-header.header",-261871729),"EIP"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.eip","label.eip",-1239988013),eip], null)], null);
});
exfn.app.registers = (function exfn$app$registers(){
var registers = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null)));
var last_edit_register = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-container","div.registers-container",1675690722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-header.header","div.registers-header.header",-2039720730),"Registers"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-list","div.registers-list",799848361),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(registers,cljs.core.PersistentArrayMap.EMPTY))?(function (){var iter__4529__auto__ = (function exfn$app$registers_$_iter__55299(s__55300){
return (new cljs.core.LazySeq(null,(function (){
var s__55300__$1 = s__55300;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55300__$1);
if(temp__5735__auto__){
var s__55300__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55300__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55300__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55302 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55301 = (0);
while(true){
if((i__55301 < size__4528__auto__)){
var vec__55303 = cljs.core._nth(c__4527__auto__,i__55301);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55303,(0),null);
var vec__55306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55303,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55306,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55306,(1),null);
cljs.core.chunk_append(b__55302,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:name"].join('')], null),name], null),((cljs.core.keyword_identical_QMARK_(name,last_edit_register))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["reg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:value"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null),v], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["reg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:value"].join('')], null),v], null))], null));

var G__55388 = (i__55301 + (1));
i__55301 = G__55388;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55302),exfn$app$registers_$_iter__55299(cljs.core.chunk_rest(s__55300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55302),null);
}
} else {
var vec__55309 = cljs.core.first(s__55300__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55309,(0),null);
var vec__55312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55309,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55312,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:name"].join('')], null),name], null),((cljs.core.keyword_identical_QMARK_(name,last_edit_register))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["reg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:value"].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null),v], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["reg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"reg:value"].join('')], null),v], null))], null),exfn$app$registers_$_iter__55299(cljs.core.rest(s__55300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(registers));
})():null)], null)], null);
});
exfn.app.cmp_values = (function exfn$app$cmp_values(cmp){
if(cljs.core.keyword_identical_QMARK_(cmp,new cljs.core.Keyword(null,"lt","lt",421989243))){
return "<";
} else {
if(cljs.core.keyword_identical_QMARK_(cmp,new cljs.core.Keyword(null,"gt","gt",-1797443692))){
return ">";
} else {
if(cljs.core.keyword_identical_QMARK_(cmp,new cljs.core.Keyword(null,"eq","eq",-618539067))){
return "=";
} else {
return cmp;

}
}
}
});
exfn.app.internal_registers = (function exfn$app$internal_registers(){
var internal_registers = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null))),new cljs.core.Keyword(null,"errmsg","errmsg",719608620));
var eip_stack = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null)));
var rep_counters = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-container","div.registers-container",1675690722),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-header.header","div.registers-header.header",-2039720730),"Internal Registers"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.registers-list","div.registers-list",799848361),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(internal_registers,cljs.core.PersistentArrayMap.EMPTY))?(function (){var iter__4529__auto__ = (function exfn$app$internal_registers_$_iter__55315(s__55316){
return (new cljs.core.LazySeq(null,(function (){
var s__55316__$1 = s__55316;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55316__$1);
if(temp__5735__auto__){
var s__55316__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55316__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55316__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55318 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55317 = (0);
while(true){
if((i__55317 < size__4528__auto__)){
var vec__55319 = cljs.core._nth(c__4527__auto__,i__55317);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55319,(0),null);
var vec__55322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55319,(1),null);
var reg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(1),null);
cljs.core.chunk_append(b__55318,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["irgn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),reg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["irgv-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),exfn.app.cmp_values(v)], null)], null));

var G__55389 = (i__55317 + (1));
i__55317 = G__55389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55318),exfn$app$internal_registers_$_iter__55315(cljs.core.chunk_rest(s__55316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55318),null);
}
} else {
var vec__55325 = cljs.core.first(s__55316__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55325,(0),null);
var vec__55328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55325,(1),null);
var reg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55328,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-name","div.col-col-lg6.register-name",-1851700654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["irgn-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),reg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.register-value","div.col-col-lg6.register-value",-1474081480),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["irgv-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),exfn.app.cmp_values(v)], null)], null),exfn$app$internal_registers_$_iter__55315(cljs.core.rest(s__55316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(internal_registers));
})():null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"width","width",-384071477),(103),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),"EIP Stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function exfn$app$internal_registers_$_iter__55331(s__55332){
return (new cljs.core.LazySeq(null,(function (){
var s__55332__$1 = s__55332;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55332__$1);
if(temp__5735__auto__){
var s__55332__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55332__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55332__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55334 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55333 = (0);
while(true){
if((i__55333 < size__4528__auto__)){
var vec__55335 = cljs.core._nth(c__4527__auto__,i__55333);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55335,(1),null);
cljs.core.chunk_append(b__55334,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.eip-stack-value","div.eip-stack-value",610435750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),r], null));

var G__55390 = (i__55333 + (1));
i__55333 = G__55390;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55334),exfn$app$internal_registers_$_iter__55331(cljs.core.chunk_rest(s__55332__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55334),null);
}
} else {
var vec__55338 = cljs.core.first(s__55332__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55338,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55338,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.eip-stack-value","div.eip-stack-value",610435750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),r], null),exfn$app$internal_registers_$_iter__55331(cljs.core.rest(s__55332__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(cljs.core.reverse(eip_stack)));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"width","width",-384071477),(103),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),"RP Stack"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4529__auto__ = (function exfn$app$internal_registers_$_iter__55341(s__55342){
return (new cljs.core.LazySeq(null,(function (){
var s__55342__$1 = s__55342;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55342__$1);
if(temp__5735__auto__){
var s__55342__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55342__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55342__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55344 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55343 = (0);
while(true){
if((i__55343 < size__4528__auto__)){
var vec__55345 = cljs.core._nth(c__4527__auto__,i__55343);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55345,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55345,(1),null);
cljs.core.chunk_append(b__55344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.eip-stack-value","div.eip-stack-value",610435750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),r], null));

var G__55391 = (i__55343 + (1));
i__55343 = G__55391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55344),exfn$app$internal_registers_$_iter__55341(cljs.core.chunk_rest(s__55342__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55344),null);
}
} else {
var vec__55348 = cljs.core.first(s__55342__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55348,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55348,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.eip-stack-value","div.eip-stack-value",610435750),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),r], null),exfn$app$internal_registers_$_iter__55341(cljs.core.rest(s__55342__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(cljs.core.reverse(rep_counters)));
})()], null)], null)], null)], null)], null);
});
exfn.app.stack = (function exfn$app$stack(stack,title){
var stack__$1 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stack-container","div.stack-container",-1944006882),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stack-header.header","div.stack-header.header",431551021),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stack-list","div.stack-list",-1856363118),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stack__$1,cljs.core.PersistentArrayMap.EMPTY))?(function (){var iter__4529__auto__ = (function exfn$app$stack_$_iter__55351(s__55352){
return (new cljs.core.LazySeq(null,(function (){
var s__55352__$1 = s__55352;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55352__$1);
if(temp__5735__auto__){
var s__55352__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55352__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55352__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55354 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55353 = (0);
while(true){
if((i__55353 < size__4528__auto__)){
var vec__55355 = cljs.core._nth(c__4527__auto__,i__55353);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55355,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55355,(1),null);
cljs.core.chunk_append(b__55354,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.stack-value","div.col-col-lg6.stack-value",1780603749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["stack-val-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),r], null)], null));

var G__55392 = (i__55353 + (1));
i__55353 = G__55392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55354),exfn$app$stack_$_iter__55351(cljs.core.chunk_rest(s__55352__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55354),null);
}
} else {
var vec__55358 = cljs.core.first(s__55352__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55358,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55358,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.stack-value","div.col-col-lg6.stack-value",1780603749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["stack-val-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),r], null)], null),exfn$app$stack_$_iter__55351(cljs.core.rest(s__55352__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(cljs.core.reverse(stack__$1)));
})():null)], null)], null);
});
exfn.app.symbol_table = (function exfn$app$symbol_table(){
var symbols = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbols","symbols",1211743)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.symbol-table-container","div.symbol-table-container",-1374298015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.symbol-table-header.header","div.symbol-table-header.header",948250767),"Symbol Table"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.symbol-table","div.symbol-table",67468454),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,symbols))?(function (){var iter__4529__auto__ = (function exfn$app$symbol_table_$_iter__55361(s__55362){
return (new cljs.core.LazySeq(null,(function (){
var s__55362__$1 = s__55362;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55362__$1);
if(temp__5735__auto__){
var s__55362__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55362__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55362__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55364 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55363 = (0);
while(true){
if((i__55363 < size__4528__auto__)){
var vec__55365 = cljs.core._nth(c__4527__auto__,i__55363);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55365,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55365,(1),null);
cljs.core.chunk_append(b__55364,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.symbol-name","div.col-col-lg6.symbol-name",-2107972826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["symbols-name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),cljs.core.key(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.symbol-value","div.col-col-lg6.symbol-value",1910069043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["symbols-value-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),cljs.core.val(s)], null)], null));

var G__55393 = (i__55363 + (1));
i__55363 = G__55393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55364),exfn$app$symbol_table_$_iter__55361(cljs.core.chunk_rest(s__55362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55364),null);
}
} else {
var vec__55368 = cljs.core.first(s__55362__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55368,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55368,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.symbol-name","div.col-col-lg6.symbol-name",-2107972826),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["symbols-name-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),cljs.core.key(s)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-col-lg6.symbol-value","div.col-col-lg6.symbol-value",1910069043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["symbols-value-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null),cljs.core.val(s)], null)], null),exfn$app$symbol_table_$_iter__55361(cljs.core.rest(s__55362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(symbols));
})():null)], null)], null);
});
exfn.app.supported_instructions = (function exfn$app$supported_instructions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Supported Instructions"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-hover","table.table.table-striped.table-hover",726875574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.table","thead.table",1106836644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgb(18, 18, 19)",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null),"Instruction"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null),"Example"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], null),"Description"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var instructions = exfn.helpers.get_supported_instructions();
var iter__4529__auto__ = (function exfn$app$supported_instructions_$_iter__55371(s__55372){
return (new cljs.core.LazySeq(null,(function (){
var s__55372__$1 = s__55372;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55372__$1);
if(temp__5735__auto__){
var s__55372__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__55372__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55372__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55374 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55373 = (0);
while(true){
if((i__55373 < size__4528__auto__)){
var vec__55375 = cljs.core._nth(c__4527__auto__,i__55373);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55375,(0),null);
var map__55378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55375,(1),null);
var map__55378__$1 = (((((!((map__55378 == null))))?(((((map__55378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55378):map__55378);
var instruction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55378__$1,new cljs.core.Keyword(null,"instruction","instruction",915804765));
var example = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55378__$1,new cljs.core.Keyword(null,"example","example",-1755779144));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55378__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
cljs.core.chunk_append(b__55374,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black"], null)], null),instruction], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black"], null)], null),example], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),description], null)], null));

var G__55394 = (i__55373 + (1));
i__55373 = G__55394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55374),exfn$app$supported_instructions_$_iter__55371(cljs.core.chunk_rest(s__55372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55374),null);
}
} else {
var vec__55380 = cljs.core.first(s__55372__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55380,(0),null);
var map__55383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55380,(1),null);
var map__55383__$1 = (((((!((map__55383 == null))))?(((((map__55383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55383):map__55383);
var instruction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55383__$1,new cljs.core.Keyword(null,"instruction","instruction",915804765));
var example = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55383__$1,new cljs.core.Keyword(null,"example","example",-1755779144));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55383__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black"], null)], null),instruction], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(200),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"border-right","border-right",-668932860),"1px solid black"], null)], null),example], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),description], null)], null),exfn$app$supported_instructions_$_iter__55371(cljs.core.rest(s__55372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(exfn.helpers.keyed_collection(instructions));
})()], null)], null)], null);
});
exfn.app.output = (function exfn$app$output(){
var output = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"output","output",-1105869043)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.std-out-container","div.std-out-container",-1188785671),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(5)], null)], null),"Output"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger.btn.py-0","button.btn.btn-danger.btn.py-0",1046993051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-output","clear-output",-1992375499)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.8em",new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(2),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),(2)], null)], null),"clear"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.std-out","textarea.std-out",-485242682),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),output,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"off","off",606440789)], null)], null)], null);
});
exfn.app.app = (function exfn$app$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.code_editor], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.code], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.execution_controls], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.eip-container","div.row.eip-container",-1317947265),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.eip], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",736588158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.registers], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.internal_registers], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.stack,new cljs.core.Keyword(null,"stack","stack",-793405930),"Stack"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.symbol_table], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.output], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.supported_instructions], null)], null)], null);
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
