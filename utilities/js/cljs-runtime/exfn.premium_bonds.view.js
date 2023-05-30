goog.provide('exfn.premium_bonds.view');
exfn.premium_bonds.view.view = (function exfn$premium_bonds$view$view(){
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var premium_bonds = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"premium-bonds","premium-bonds",565078800)], null)));
var premium_bonds_with_balances = exfn.premium_bonds.logic.get_balances(premium_bonds);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"Premium Bonds"], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"purchase","purchase",-221263379)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(500)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Amount"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.center-col","th.center-col",570871093)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col","th.amount-col",728249986),"Balance"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$premium_bonds$view$view_$_iter__17399(s__17400){
return (new cljs.core.LazySeq(null,(function (){
var s__17400__$1 = s__17400;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17400__$1);
if(temp__5804__auto__){
var s__17400__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17400__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17400__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17402 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17401 = (0);
while(true){
if((i__17401 < size__5522__auto__)){
var map__17403 = cljs.core._nth(c__5521__auto__,i__17401);
var map__17403__$1 = cljs.core.__destructure_map(map__17403);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17403__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17403__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var narrative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17403__$1,new cljs.core.Keyword(null,"narrative","narrative",-1575878033));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17403__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
cljs.core.chunk_append(b__17402,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),narrative], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(amount)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.center-col","td.center-col",-1583759546),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(narrative,"Prize"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-star","i.far.fa-star",-806998411)], null):"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(balance)], null)], null));

var G__17417 = (i__17401 + (1));
i__17401 = G__17417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17402),exfn$premium_bonds$view$view_$_iter__17399(cljs.core.chunk_rest(s__17400__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17402),null);
}
} else {
var map__17406 = cljs.core.first(s__17400__$2);
var map__17406__$1 = cljs.core.__destructure_map(map__17406);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var narrative = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,new cljs.core.Keyword(null,"narrative","narrative",-1575878033));
var balance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17406__$1,new cljs.core.Keyword(null,"balance","balance",418967409));
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),narrative], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(amount)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.center-col","td.center-col",-1583759546),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(narrative,"Prize"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-star","i.far.fa-star",-806998411)], null):"")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(balance)], null)], null),exfn$premium_bonds$view$view_$_iter__17399(cljs.core.rest(s__17400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(premium_bonds_with_balances);
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Total Prizes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),exfn.shared.logic.format_number(exfn.premium_bonds.logic.get_total_prizes(premium_bonds))], null)], null)], null)], null)
))], null);
});

//# sourceMappingURL=exfn.premium_bonds.view.js.map
