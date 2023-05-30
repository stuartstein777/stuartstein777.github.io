goog.provide('exfn.categories.view');
exfn.categories.view.category_summary = (function exfn$categories$view$category_summary(){
var selected_category_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-category-name","selected-category-name",-2037395339)], null)));
var selected_purchases = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"category-summary","category-summary",-431254479)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.selected-store","div.row.selected-store",-682771059),selected_category_name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Narrative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Account"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Amount"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$categories$view$category_summary_$_iter__17359(s__17360){
return (new cljs.core.LazySeq(null,(function (){
var s__17360__$1 = s__17360;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17360__$1);
if(temp__5804__auto__){
var s__17360__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17360__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17360__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17362 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17361 = (0);
while(true){
if((i__17361 < size__5522__auto__)){
var vec__17367 = cljs.core._nth(c__5521__auto__,i__17361);
var purchase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17367,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17367,(1),null);
cljs.core.chunk_append(b__17362,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sel-pur-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : purchase.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"narrative","narrative",-1575878033)) : purchase.call(null,new cljs.core.Keyword(null,"narrative","narrative",-1575878033)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226)) : purchase.call(null,new cljs.core.Keyword(null,"account-name","account-name",-296718226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : purchase.call(null,new cljs.core.Keyword(null,"amount","amount",364489504))))], null)], null));

var G__17398 = (i__17361 + (1));
i__17361 = G__17398;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17362),exfn$categories$view$category_summary_$_iter__17359(cljs.core.chunk_rest(s__17360__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17362),null);
}
} else {
var vec__17370 = cljs.core.first(s__17360__$2);
var purchase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17370,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17370,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["sel-pur-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : purchase.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"narrative","narrative",-1575878033)) : purchase.call(null,new cljs.core.Keyword(null,"narrative","narrative",-1575878033)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226)) : purchase.call(null,new cljs.core.Keyword(null,"account-name","account-name",-296718226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((purchase.cljs$core$IFn$_invoke$arity$1 ? purchase.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : purchase.call(null,new cljs.core.Keyword(null,"amount","amount",364489504))))], null)], null),exfn$categories$view$category_summary_$_iter__17359(cljs.core.rest(s__17360__$2)));
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
exfn.categories.view.view = (function exfn$categories$view$view(){
var categories = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),"Categories breakdown"], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"purchase","purchase",-221263379)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col.clickable-header","th.amount-col.clickable-header",-995728894),"Total"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$categories$view$view_$_iter__17386(s__17387){
return (new cljs.core.LazySeq(null,(function (){
var s__17387__$1 = s__17387;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17387__$1);
if(temp__5804__auto__){
var s__17387__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17387__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17387__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17389 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17388 = (0);
while(true){
if((i__17388 < size__5522__auto__)){
var map__17393 = cljs.core._nth(c__5521__auto__,i__17388);
var map__17393__$1 = cljs.core.__destructure_map(map__17393);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17393__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17393__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17393__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append(b__17389,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["st-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17388,map__17393,map__17393__$1,category,amount,id,c__5521__auto__,size__5522__auto__,b__17389,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-category-summary","get-category-summary",-1297623231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,category], null)], null));
});})(i__17388,map__17393,map__17393__$1,category,amount,id,c__5521__auto__,size__5522__auto__,b__17389,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_))
], null),category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17388,map__17393,map__17393__$1,category,amount,id,c__5521__auto__,size__5522__auto__,b__17389,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-category-summary","get-category-summary",-1297623231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,category], null)], null));
});})(i__17388,map__17393,map__17393__$1,category,amount,id,c__5521__auto__,size__5522__auto__,b__17389,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_))
], null),exfn.shared.logic.format_number(amount)], null)], null));

var G__17405 = (i__17388 + (1));
i__17388 = G__17405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17389),exfn$categories$view$view_$_iter__17386(cljs.core.chunk_rest(s__17387__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17389),null);
}
} else {
var map__17394 = cljs.core.first(s__17387__$2);
var map__17394__$1 = cljs.core.__destructure_map(map__17394);
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"amount","amount",364489504));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["st-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17394,map__17394__$1,category,amount,id,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-category-summary","get-category-summary",-1297623231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,category], null)], null));
});})(map__17394,map__17394__$1,category,amount,id,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_))
], null),category], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__17394,map__17394__$1,category,amount,id,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-category-summary","get-category-summary",-1297623231),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,category], null)], null));
});})(map__17394,map__17394__$1,category,amount,id,s__17387__$2,temp__5804__auto__,categories,error,loading_QMARK_))
], null),exfn.shared.logic.format_number(amount)], null)], null),exfn$categories$view$view_$_iter__17386(cljs.core.rest(s__17387__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),categories));
})()], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.categories.view.category_summary], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754)], null)], null)
))], null);
});

//# sourceMappingURL=exfn.categories.view.js.map
