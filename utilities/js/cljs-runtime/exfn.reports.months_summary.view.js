goog.provide('exfn.reports.months_summary.view');
exfn.reports.months_summary.view.months = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["July","January","April","June","March","December","February","November","September","May","October","August"]);
exfn.reports.months_summary.view.view = (function exfn$reports$months_summary$view$view(){
var summary = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months-summary","months-summary",603562283)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"Month by Month Summary"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-8","div.col.col-lg-8",1181006263),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"purchase","purchase",-221263379)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(550)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-hover","table.table.table-sm.table-hover",692093562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Month"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Income"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Expenses"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Net"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Income (Gross)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$reports$months_summary$view$view_$_iter__17427(s__17428){
return (new cljs.core.LazySeq(null,(function (){
var s__17428__$1 = s__17428;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17428__$1);
if(temp__5804__auto__){
var s__17428__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17428__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17428__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17430 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17429 = (0);
while(true){
if((i__17429 < size__5522__auto__)){
var month = cljs.core._nth(c__5521__auto__,i__17429);
cljs.core.chunk_append(b__17430,(function (){var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"total-in","total-in",1727359963),(0));
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"total-out","total-out",1962526351),(0));
var net = (in$ - out);
var gross_in = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"gross-in","gross-in",170459651),(0));
var bg = (((net > (0)))?"#d4edda":"#f8d7da");
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var G__17433 = (month.cljs$core$IFn$_invoke$arity$1 ? month.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533)) : month.call(null,new cljs.core.Keyword(null,"month","month",-1960248533)));
return (exfn.reports.months_summary.view.months.cljs$core$IFn$_invoke$arity$1 ? exfn.reports.months_summary.view.months.cljs$core$IFn$_invoke$arity$1(G__17433) : exfn.reports.months_summary.view.months.call(null,G__17433));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),in$))?"-":exfn.shared.logic.format_number(in$))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(out)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null),exfn.shared.logic.format_number(net)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),gross_in))?"-":exfn.shared.logic.format_number(gross_in))], null)], null);
})());

var G__17446 = (i__17429 + (1));
i__17429 = G__17446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17430),exfn$reports$months_summary$view$view_$_iter__17427(cljs.core.chunk_rest(s__17428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17430),null);
}
} else {
var month = cljs.core.first(s__17428__$2);
return cljs.core.cons((function (){var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"total-in","total-in",1727359963),(0));
var out = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"total-out","total-out",1962526351),(0));
var net = (in$ - out);
var gross_in = cljs.core.get.cljs$core$IFn$_invoke$arity$3(month,new cljs.core.Keyword(null,"gross-in","gross-in",170459651),(0));
var bg = (((net > (0)))?"#d4edda":"#f8d7da");
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(function (){var G__17434 = (month.cljs$core$IFn$_invoke$arity$1 ? month.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"month","month",-1960248533)) : month.call(null,new cljs.core.Keyword(null,"month","month",-1960248533)));
return (exfn.reports.months_summary.view.months.cljs$core$IFn$_invoke$arity$1 ? exfn.reports.months_summary.view.months.cljs$core$IFn$_invoke$arity$1(G__17434) : exfn.reports.months_summary.view.months.call(null,G__17434));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),in$))?"-":exfn.shared.logic.format_number(in$))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(out)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null),exfn.shared.logic.format_number(net)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),gross_in))?"-":exfn.shared.logic.format_number(gross_in))], null)], null);
})(),exfn$reports$months_summary$view$view_$_iter__17427(cljs.core.rest(s__17428__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(summary);
})(),(function (){var total_in = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-in","total-in",1727359963),summary));
var total_out = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-out","total-out",1962526351),summary));
var total_net = (total_in - total_out);
var total_gross = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gross-in","gross-in",170459651),summary));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.total-row","tr.total-row",1757449698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(total_in)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(total_out)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(total_net)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(total_gross)], null)], null);
})()], null)], null)], null)], null)
))], null)], null)], null);
});

//# sourceMappingURL=exfn.reports.months_summary.view.js.map
