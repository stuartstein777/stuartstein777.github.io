goog.provide('exfn.utilities.view');
exfn.utilities.view.csv_view = (function exfn$utilities$view$csv_view(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"CSV Utilities"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-12","div.col.col-lg-12",27637915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"text-input",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter text here...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","csv-text","utilities/csv-text",-1546653046)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15831_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-csv-value","set-csv-value",686771025),p1__15831_SHARP_.target.value], null));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(function (){var csv_breakdown = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","csv-breakdown","utilities/csv-breakdown",-594106492)], null)));
var csv_pivoted = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,csv_breakdown);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-12","div.col.col-lg-12",27637915),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),", cnt"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$utilities$view$csv_view_$_iter__15832(s__15833){
return (new cljs.core.LazySeq(null,(function (){
var s__15833__$1 = s__15833;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15833__$1);
if(temp__5804__auto__){
var s__15833__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15833__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15833__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15835 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15834 = (0);
while(true){
if((i__15834 < size__5522__auto__)){
var line = cljs.core._nth(c__5521__auto__,i__15834);
cljs.core.chunk_append(b__15835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5523__auto__ = ((function (i__15834,line,c__5521__auto__,size__5522__auto__,b__15835,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted){
return (function exfn$utilities$view$csv_view_$_iter__15832_$_iter__15836(s__15837){
return (new cljs.core.LazySeq(null,((function (i__15834,line,c__5521__auto__,size__5522__auto__,b__15835,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted){
return (function (){
var s__15837__$1 = s__15837;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15837__$1);
if(temp__5804__auto____$1){
var s__15837__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15837__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__15837__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__15839 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__15838 = (0);
while(true){
if((i__15838 < size__5522__auto____$1)){
var cell = cljs.core._nth(c__5521__auto____$1,i__15838);
cljs.core.chunk_append(b__15839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null));

var G__15865 = (i__15838 + (1));
i__15838 = G__15865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15839),exfn$utilities$view$csv_view_$_iter__15832_$_iter__15836(cljs.core.chunk_rest(s__15837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15839),null);
}
} else {
var cell = cljs.core.first(s__15837__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null),exfn$utilities$view$csv_view_$_iter__15832_$_iter__15836(cljs.core.rest(s__15837__$2)));
}
} else {
return null;
}
break;
}
});})(i__15834,line,c__5521__auto__,size__5522__auto__,b__15835,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted))
,null,null));
});})(i__15834,line,c__5521__auto__,size__5522__auto__,b__15835,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted))
;
return iter__5523__auto__(line);
})()], null));

var G__15866 = (i__15834 + (1));
i__15834 = G__15866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15835),exfn$utilities$view$csv_view_$_iter__15832(cljs.core.chunk_rest(s__15833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15835),null);
}
} else {
var line = cljs.core.first(s__15833__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5523__auto__ = ((function (line,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted){
return (function exfn$utilities$view$csv_view_$_iter__15832_$_iter__15840(s__15841){
return (new cljs.core.LazySeq(null,(function (){
var s__15841__$1 = s__15841;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__15841__$1);
if(temp__5804__auto____$1){
var s__15841__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15841__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15841__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15843 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15842 = (0);
while(true){
if((i__15842 < size__5522__auto__)){
var cell = cljs.core._nth(c__5521__auto__,i__15842);
cljs.core.chunk_append(b__15843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null));

var G__15867 = (i__15842 + (1));
i__15842 = G__15867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),exfn$utilities$view$csv_view_$_iter__15832_$_iter__15840(cljs.core.chunk_rest(s__15841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15843),null);
}
} else {
var cell = cljs.core.first(s__15841__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cell], null),exfn$utilities$view$csv_view_$_iter__15832_$_iter__15840(cljs.core.rest(s__15841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(line,s__15833__$2,temp__5804__auto__,csv_breakdown,csv_pivoted))
;
return iter__5523__auto__(line);
})()], null),exfn$utilities$view$csv_view_$_iter__15832(cljs.core.rest(s__15833__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(csv_pivoted);
})()], null)], null)], null);
})()], null)], null);
});
exfn.utilities.view.text_view = (function exfn$utilities$view$text_view(){
var text_stats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-stats","utilities/text-stats",260070479)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"Text Utilities"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.form-control","textarea.form-control",-1690362789),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"text-input",new cljs.core.Keyword(null,"rows","rows",850049680),(20),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter text here...",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__15844_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),p1__15844_SHARP_.target.value], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.lines_to_kebab_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"To kebab-case"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.to_camel_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"To camelCase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.to_snake_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"To snake_case"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.invert_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"Invert case"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.to_upper_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"To UPPERCASE"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.to_lower_case(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"To lowercase"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(150),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(15),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(15)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),exfn.utilities.logic.alphabetise(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024)], null))))], null));
})], null),"Alphabetise"], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Chars (with spaces)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"chars","chars",-1094630317))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Chars (no spaces)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"chars-no-spaces","chars-no-spaces",-718963054))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Words"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"words","words",1924933001))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Lines"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"lines","lines",-700165781))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Vowels"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"vowels","vowels",1022301577))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Consonants"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"consonants","consonants",-919870537))], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Char Frequencies"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Char"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Frequency"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(cljs.core.truth_(text_stats)?(function (){var iter__5523__auto__ = (function exfn$utilities$view$text_view_$_iter__15845(s__15846){
return (new cljs.core.LazySeq(null,(function (){
var s__15846__$1 = s__15846;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15846__$1);
if(temp__5804__auto__){
var s__15846__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15846__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15846__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15848 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15847 = (0);
while(true){
if((i__15847 < size__5522__auto__)){
var vec__15849 = cljs.core._nth(c__5521__auto__,i__15847);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15849,(1),null);
cljs.core.chunk_append(b__15848,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.format("%s",char$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),freq], null)], null));

var G__15871 = (i__15847 + (1));
i__15847 = G__15871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15848),exfn$utilities$view$text_view_$_iter__15845(cljs.core.chunk_rest(s__15846__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15848),null);
}
} else {
var vec__15852 = cljs.core.first(s__15846__$2);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15852,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.format("%s",char$)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),freq], null)], null),exfn$utilities$view$text_view_$_iter__15845(cljs.core.rest(s__15846__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"char-freqs","char-freqs",-984545503)));
})():null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Word Frequencies"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Word"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Frequency"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(cljs.core.truth_(text_stats)?(function (){var iter__5523__auto__ = (function exfn$utilities$view$text_view_$_iter__15855(s__15856){
return (new cljs.core.LazySeq(null,(function (){
var s__15856__$1 = s__15856;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__15856__$1);
if(temp__5804__auto__){
var s__15856__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15856__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__15856__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__15858 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__15857 = (0);
while(true){
if((i__15857 < size__5522__auto__)){
var vec__15859 = cljs.core._nth(c__5521__auto__,i__15857);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15859,(1),null);
cljs.core.chunk_append(b__15858,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.format("%s",word)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),freq], null)], null));

var G__15872 = (i__15857 + (1));
i__15857 = G__15872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15858),exfn$utilities$view$text_view_$_iter__15855(cljs.core.chunk_rest(s__15856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15858),null);
}
} else {
var vec__15862 = cljs.core.first(s__15856__$2);
var word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(0),null);
var freq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15862,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),goog.string.format("%s",word)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),freq], null)], null),exfn$utilities$view$text_view_$_iter__15855(cljs.core.rest(s__15856__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get.cljs$core$IFn$_invoke$arity$2(text_stats,new cljs.core.Keyword(null,"word-freqs","word-freqs",-200532897)));
})():null)], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=exfn.utilities.view.js.map
