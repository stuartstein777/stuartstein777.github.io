goog.provide('exfn.purchases.view');
exfn.purchases.view.purchase_summary = (function exfn$purchases$view$purchase_summary(){
var selected_store = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-store","selected-store",536185141)], null)));
var selected_purchases = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"store-summary","store-summary",-1166123264)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.selected-store","div.row.selected-store",-682771059),selected_store], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Account"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Narrative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Amount"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$purchases$view$purchase_summary_$_iter__17382(s__17383){
return (new cljs.core.LazySeq(null,(function (){
var s__17383__$1 = s__17383;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17383__$1);
if(temp__5804__auto__){
var s__17383__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17383__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17383__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17385 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17384 = (0);
while(true){
if((i__17384 < size__5522__auto__)){
var vec__17390 = cljs.core._nth(c__5521__auto__,i__17384);
var purchase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17390,(1),null);
cljs.core.chunk_append(b__17385,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sel-pur-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : purchase.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"narrative","narrative",-1575878033)) : purchase.call(null,new cljs.core.Keyword(null,"narrative","narrative",-1575878033)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226)) : purchase.call(null,new cljs.core.Keyword(null,"account-name","account-name",-296718226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : purchase.call(null,new cljs.core.Keyword(null,"amount","amount",364489504))))], null)], null));

var G__17426 = (i__17384 + (1));
i__17384 = G__17426;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17385),exfn$purchases$view$purchase_summary_$_iter__17382(cljs.core.chunk_rest(s__17383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17385),null);
}
} else {
var vec__17395 = cljs.core.first(s__17383__$2);
var purchase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sel-pur-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : purchase.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"narrative","narrative",-1575878033)) : purchase.call(null,new cljs.core.Keyword(null,"narrative","narrative",-1575878033)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226)) : purchase.call(null,new cljs.core.Keyword(null,"account-name","account-name",-296718226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : purchase.call(null,new cljs.core.Keyword(null,"amount","amount",364489504))))], null)], null),exfn$purchases$view$purchase_summary_$_iter__17382(cljs.core.rest(s__17383__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.zipmap(selected_purchases,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
})()], null)], null)], null)], null);
});
exfn.purchases.view.view = (function exfn$purchases$view$view(){
var purchases = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var show_full_year_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-full-year-purchases?","show-full-year-purchases?",157352331)], null)));
var map__17404 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849)], null)));
var map__17404__$1 = cljs.core.__destructure_map(map__17404);
var sort_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,new cljs.core.Keyword(null,"sort-col","sort-col",-718754882));
var sort_asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17404__$1,new cljs.core.Keyword(null,"sort-asc?","sort-asc?",-324736827));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"Purchases"], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"purchase","purchase",-221263379)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.clickable-header","th.clickable-header",1789301780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849),new cljs.core.Keyword(null,"store","store",1512230022)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Store   ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,new cljs.core.Keyword(null,"store","store",1512230022)))?(cljs.core.truth_(sort_asc_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-down","i.fas.fa-angle-down",596435338)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-up","i.fas.fa-angle-up",-990480707)], null)):null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col.clickable-header","th.amount-col.clickable-header",-995728894),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849),new cljs.core.Keyword(null,"total","total",1916810418)], null));
})], null),"Total   ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,new cljs.core.Keyword(null,"total","total",1916810418)))?(cljs.core.truth_(sort_asc_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-down","i.fas.fa-angle-down",596435338)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-angle-up","i.fas.fa-angle-up",-990480707)], null)):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$purchases$view$view_$_iter__17407(s__17408){
return (new cljs.core.LazySeq(null,(function (){
var s__17408__$1 = s__17408;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17408__$1);
if(temp__5804__auto__){
var s__17408__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17408__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17408__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17410 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17409 = (0);
while(true){
if((i__17409 < size__5522__auto__)){
var map__17416 = cljs.core._nth(c__5521__auto__,i__17409);
var map__17416__$1 = cljs.core.__destructure_map(map__17416);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17416__$1,new cljs.core.Keyword(null,"total","total",1916810418));
cljs.core.chunk_append(b__17410,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["st-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(store)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null),exfn.purchases.logic.get_store_icon(store)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17409,map__17416,map__17416__$1,store,total,c__5521__auto__,size__5522__auto__,b__17410,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-store-summary","get-store-summary",-114996958),store], null));
});})(i__17409,map__17416,map__17416__$1,store,total,c__5521__auto__,size__5522__auto__,b__17410,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_))
], null),store], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17409,map__17416,map__17416__$1,store,total,c__5521__auto__,size__5522__auto__,b__17410,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-store-summary","get-store-summary",-114996958),store], null));
});})(i__17409,map__17416,map__17416__$1,store,total,c__5521__auto__,size__5522__auto__,b__17410,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_))
], null),exfn.shared.logic.format_number(total)], null)], null));

var G__17432 = (i__17409 + (1));
i__17409 = G__17432;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17410),exfn$purchases$view$view_$_iter__17407(cljs.core.chunk_rest(s__17408__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17410),null);
}
} else {
var map__17418 = cljs.core.first(s__17408__$2);
var map__17418__$1 = cljs.core.__destructure_map(map__17418);
var store = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17418__$1,new cljs.core.Keyword(null,"store","store",1512230022));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17418__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["st-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(store)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(50)], null)], null),exfn.purchases.logic.get_store_icon(store)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17418,map__17418__$1,store,total,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-store-summary","get-store-summary",-114996958),store], null));
});})(map__17418,map__17418__$1,store,total,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_))
], null),store], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17418,map__17418__$1,store,total,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-store-summary","get-store-summary",-114996958),store], null));
});})(map__17418,map__17418__$1,store,total,s__17408__$2,temp__5804__auto__,purchases,error,loading_QMARK_,show_full_year_QMARK_,map__17404,map__17404__$1,sort_col,sort_asc_QMARK_))
], null),exfn.shared.logic.format_number(total)], null)], null),exfn$purchases$view$view_$_iter__17407(cljs.core.rest(s__17408__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(purchases);
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.total-row.table-primary","tr.total-row.table-primary",-1841650799),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),exfn.shared.logic.format_number(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total","total",1916810418),purchases)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colspan","colspan",-1512420934),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),"Show full year?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-check.form-switch","div.form-check.form-switch",1467700811),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-check-input","input.form-check-input",-153409294),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"switch","switch",71881310),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),show_full_year_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-full-year","toggle-full-year",-1134064139)], null));
})], null)], null)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.purchases.view.purchase_summary], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754)], null)], null)
))], null);
});

//# sourceMappingURL=exfn.purchases.view.js.map
