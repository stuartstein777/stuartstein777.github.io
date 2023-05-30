goog.provide('exfn.month.view');
exfn.month.view.transaction_editor = (function exfn$month$view$transaction_editor(account_id,account_name){
var current_month = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-month","current-month",229356226)], null)));
var current_year = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null)));
var accounts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null)));
var accounts__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17247_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__17247_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17247_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226)) : p1__17247_SHARP_.call(null,new cljs.core.Keyword(null,"account-name","account-name",-296718226))),account_name);
}),accounts);
var selected_day = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var selected_narrative = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var selected_category = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((31));
var selected_amount = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var selected_store = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var selected_repeat = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
var selected_account_to = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-id","account-id",-860833743).cljs$core$IFn$_invoke$arity$1(cljs.core.first(accounts__$1)));
return (function (account_id__$1,account_name__$1){
var build_transaction = (function exfn$month$view$transaction_editor_$_build_transaction(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"date","date",-1463434462),exfn.month.logic.format_date_for_request(current_year,current_month,cljs.core.deref(selected_day)),new cljs.core.Keyword(null,"narrative","narrative",-1575878033),cljs.core.deref(selected_narrative),new cljs.core.Keyword(null,"category","category",-593092832),cljs.core.deref(selected_category),new cljs.core.Keyword(null,"amount","amount",364489504),parseFloat(cljs.core.deref(selected_amount)),new cljs.core.Keyword(null,"store","store",1512230022),(function (){var or__5045__auto__ = cljs.core.deref(selected_store);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"account-id","account-id",-860833743),account_id__$1,new cljs.core.Keyword(null,"account-to-from","account-to-from",568827142),cljs.core.deref(selected_account_to),new cljs.core.Keyword(null,"repeat","repeat",832692087),cljs.core.deref(selected_repeat)], null);
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.transaction-editor","div.transaction-editor",1693669984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid black",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),(1300)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"Day"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.custom-select","select.custom-select",1340665129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17248_SHARP_){
return cljs.core.reset_BANG_(selected_day,p1__17248_SHARP_.target.value);
})], null),(function (){var iter__5523__auto__ = (function exfn$month$view$transaction_editor_$_iter__17281(s__17282){
return (new cljs.core.LazySeq(null,(function (){
var s__17282__$1 = s__17282;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17282__$1);
if(temp__5804__auto__){
var s__17282__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17282__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17282__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17284 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17283 = (0);
while(true){
if((i__17283 < size__5522__auto__)){
var d = cljs.core._nth(c__5521__auto__,i__17283);
cljs.core.chunk_append(b__17284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"key","key",-1516042587),["day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('')], null),d], null));

var G__17419 = (i__17283 + (1));
i__17283 = G__17419;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17284),exfn$month$view$transaction_editor_$_iter__17281(cljs.core.chunk_rest(s__17282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17284),null);
}
} else {
var d = cljs.core.first(s__17282__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"key","key",-1516042587),["day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(d)].join('')], null),d], null),exfn$month$view$transaction_editor_$_iter__17281(cljs.core.rest(s__17282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(exfn.month.logic.get_days_of_month(current_year,current_month));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"Narrative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17250_SHARP_){
return cljs.core.reset_BANG_(selected_narrative,p1__17250_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(102)], null)], null),"Category"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.custom-select","select.custom-select",1340665129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17254_SHARP_){
return cljs.core.reset_BANG_(selected_category,(p1__17254_SHARP_.target.value | (0)));
})], null),(function (){var iter__5523__auto__ = (function exfn$month$view$transaction_editor_$_iter__17308(s__17309){
return (new cljs.core.LazySeq(null,(function (){
var s__17309__$1 = s__17309;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17309__$1);
if(temp__5804__auto__){
var s__17309__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17309__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17309__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17311 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17310 = (0);
while(true){
if((i__17310 < size__5522__auto__)){
var cat = cljs.core._nth(c__5521__auto__,i__17310);
cljs.core.chunk_append(b__17311,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(exfn.shared.logic.all_categories.cljs$core$IFn$_invoke$arity$1 ? exfn.shared.logic.all_categories.cljs$core$IFn$_invoke$arity$1(cat) : exfn.shared.logic.all_categories.call(null,cat)),new cljs.core.Keyword(null,"key","key",-1516042587),["cat-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cat)].join('')], null),cat], null));

var G__17421 = (i__17310 + (1));
i__17310 = G__17421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17311),exfn$month$view$transaction_editor_$_iter__17308(cljs.core.chunk_rest(s__17309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17311),null);
}
} else {
var cat = cljs.core.first(s__17309__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(exfn.shared.logic.all_categories.cljs$core$IFn$_invoke$arity$1 ? exfn.shared.logic.all_categories.cljs$core$IFn$_invoke$arity$1(cat) : exfn.shared.logic.all_categories.call(null,cat)),new cljs.core.Keyword(null,"key","key",-1516042587),["cat-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cat)].join('')], null),cat], null),exfn$month$view$transaction_editor_$_iter__17308(cljs.core.rest(s__17309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core._LT_,cljs.core.keys(exfn.shared.logic.all_categories)));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"Store"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17255_SHARP_){
return cljs.core.reset_BANG_(selected_store,p1__17255_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-1","div.col.col-lg-1",640572310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17256_SHARP_){
return cljs.core.reset_BANG_(selected_amount,p1__17256_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"Repeat"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.custom-select","select.custom-select",1340665129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17257_SHARP_){
return cljs.core.reset_BANG_(selected_repeat,p1__17257_SHARP_.target.value);
})], null),(function (){var iter__5523__auto__ = (function exfn$month$view$transaction_editor_$_iter__17339(s__17340){
return (new cljs.core.LazySeq(null,(function (){
var s__17340__$1 = s__17340;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17340__$1);
if(temp__5804__auto__){
var s__17340__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17340__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17340__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17342 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17341 = (0);
while(true){
if((i__17341 < size__5522__auto__)){
var d = cljs.core._nth(c__5521__auto__,i__17341);
cljs.core.chunk_append(b__17342,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"key","key",-1516042587),d], null),d], null));

var G__17422 = (i__17341 + (1));
i__17341 = G__17422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17342),exfn$month$view$transaction_editor_$_iter__17339(cljs.core.chunk_rest(s__17340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17342),null);
}
} else {
var d = cljs.core.first(s__17340__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),d,new cljs.core.Keyword(null,"key","key",-1516042587),d], null),d], null),exfn$month$view$transaction_editor_$_iter__17339(cljs.core.rest(s__17340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13)));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_category),(21))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(selected_category),(29)))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.input-group-sm.mb-3","div.input-group.input-group-sm.mb-3",-312981450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-prepend","div.input-group-prepend",-1522435373),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(100)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"Account To"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.custom-select","select.custom-select",1340665129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17258_SHARP_){
return cljs.core.reset_BANG_(selected_account_to,p1__17258_SHARP_.target.value);
})], null),(function (){
cljs.core.reset_BANG_(selected_account_to,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (acc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(acc),account_id__$1);
}),accounts__$1))));

var iter__5523__auto__ = (function exfn$month$view$transaction_editor_$_iter__17363(s__17364){
return (new cljs.core.LazySeq(null,(function (){
var s__17364__$1 = s__17364;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17364__$1);
if(temp__5804__auto__){
var s__17364__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17364__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17364__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17366 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17365 = (0);
while(true){
if((i__17365 < size__5522__auto__)){
var account = cljs.core._nth(c__5521__auto__,i__17365);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account),account_id__$1)){
cljs.core.chunk_append(b__17366,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account),new cljs.core.Keyword(null,"key","key",-1516042587),["act-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)], null));

var G__17423 = (i__17365 + (1));
i__17365 = G__17423;
continue;
} else {
var G__17424 = (i__17365 + (1));
i__17365 = G__17424;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17366),exfn$month$view$transaction_editor_$_iter__17363(cljs.core.chunk_rest(s__17364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17366),null);
}
} else {
var account = cljs.core.first(s__17364__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account),account_id__$1)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account),new cljs.core.Keyword(null,"key","key",-1516042587),["act-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(account))].join('')], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(account)], null),exfn$month$view$transaction_editor_$_iter__17363(cljs.core.rest(s__17364__$2)));
} else {
var G__17425 = cljs.core.rest(s__17364__$2);
s__17364__$1 = G__17425;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(accounts__$1);
})()
], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-6","div.col.col-lg-6",-992592264),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-transaction","save-transaction",8842640),build_transaction()], null));
})], null),"Save"], null)], null)], null)], null);
});
});
exfn.month.view.account_transactions = (function exfn$month$view$account_transactions(account_id,account_name,transactions,month){
var ui = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months-ui-settings","months-ui-settings",-464983797)], null)));
var show_transaction_editor = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,new cljs.core.Keyword(null,"expanded-editors","expanded-editors",-1082102702),account_id], null)));
var expanded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,new cljs.core.Keyword(null,"expanded-accounts","expanded-accounts",1812809537),account_id], null)));
var show_balance_row_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var target_balance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (account_id__$1,account_name__$1,transactions__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["acc-statement-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_id__$1)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.account-name","div.col-md-10.account-name",487966772),account_name__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-1.add-transaction","div.col-md-1.add-transaction",-238905265),(cljs.core.truth_(cljs.core.deref(show_transaction_editor))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-square-minus.add-transaction","i.fas.fa-square-minus.add-transaction",953012253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-editor","toggle-editor",-946211849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,account_id__$1], null)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_transaction_editor,cljs.core.not);
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-square-plus.add-transaction","i.fas.fa-square-plus.add-transaction",76195747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-editor","toggle-editor",-946211849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,account_id__$1], null)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_transaction_editor,cljs.core.not);
})], null)], null))], null),(cljs.core.truth_(cljs.core.deref(show_transaction_editor))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.month.view.transaction_editor,account_id__$1,account_name__$1], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-sm.table-hover","table.table.table-striped.table-sm.table-hover",1455141965),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(1300)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-120","th.col-120",-356385860),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-200","th.col-200",802790769),"Narrative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col.col-120","th.amount-col.col-120",1652411307),"Debit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col.col-120","th.amount-col.col-120",1652411307),"Credit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.amount-col.col-120","th.amount-col.col-120",1652411307),"Balance"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-30","th.col-30",-996323700)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.col-30.delete-col","th.col-30.delete-col",-409405899),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-account","toggle-account",-1415459981),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,account_id__$1], null)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-minus","i.fas.fa-minus",1931739889)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-expand","i.fas.fa-expand",968402047)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(cljs.core.truth_(cljs.core.deref(expanded))?(function (){var iter__5523__auto__ = (function exfn$month$view$account_transactions_$_iter__17378(s__17379){
return (new cljs.core.LazySeq(null,(function (){
var s__17379__$1 = s__17379;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17379__$1);
if(temp__5804__auto__){
var s__17379__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17379__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17379__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17381 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17380 = (0);
while(true){
if((i__17380 < size__5522__auto__)){
var transaction = cljs.core._nth(c__5521__auto__,i__17380);
cljs.core.chunk_append(b__17381,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tran-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_id__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(transaction))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(transaction))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"debit","debit",214956555).cljs$core$IFn$_invoke$arity$1(transaction)))?exfn.shared.logic.format_number(new cljs.core.Keyword(null,"debit","debit",214956555).cljs$core$IFn$_invoke$arity$1(transaction)):"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"credit","credit",782856892).cljs$core$IFn$_invoke$arity$1(transaction)))?exfn.shared.logic.format_number(new cljs.core.Keyword(null,"credit","credit",782856892).cljs$core$IFn$_invoke$arity$1(transaction)):"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(transaction))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delete-col","td.delete-col",1313991014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__17380,transaction,c__5521__auto__,size__5522__auto__,b__17381,s__17379__$2,temp__5804__auto__,ui,show_transaction_editor,expanded,show_balance_row_QMARK_,target_balance){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-transaction","delete-transaction",1458228631),(transaction.cljs$core$IFn$_invoke$arity$1 ? transaction.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : transaction.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)))], null));
});})(i__17380,transaction,c__5521__auto__,size__5522__auto__,b__17381,s__17379__$2,temp__5804__auto__,ui,show_transaction_editor,expanded,show_balance_row_QMARK_,target_balance))
], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Opening Balance",new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-trash.bin","i.fa-solid.fa-trash.bin",-1691379756)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delete-col","td.delete-col",1313991014),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Opening Balance",new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-pencil.edit","i.fa-solid.fa-pencil.edit",805880457)], null):null)], null)], null));

var G__17431 = (i__17380 + (1));
i__17380 = G__17431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17381),exfn$month$view$account_transactions_$_iter__17378(cljs.core.chunk_rest(s__17379__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17381),null);
}
} else {
var transaction = cljs.core.first(s__17379__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["tran-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(account_id__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(transaction))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(transaction))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"debit","debit",214956555).cljs$core$IFn$_invoke$arity$1(transaction)))?exfn.shared.logic.format_number(new cljs.core.Keyword(null,"debit","debit",214956555).cljs$core$IFn$_invoke$arity$1(transaction)):"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,new cljs.core.Keyword(null,"credit","credit",782856892).cljs$core$IFn$_invoke$arity$1(transaction)))?exfn.shared.logic.format_number(new cljs.core.Keyword(null,"credit","credit",782856892).cljs$core$IFn$_invoke$arity$1(transaction)):"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(transaction))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delete-col","td.delete-col",1313991014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (transaction,s__17379__$2,temp__5804__auto__,ui,show_transaction_editor,expanded,show_balance_row_QMARK_,target_balance){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-transaction","delete-transaction",1458228631),(transaction.cljs$core$IFn$_invoke$arity$1 ? transaction.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : transaction.call(null,new cljs.core.Keyword(null,"id","id",-1388402092)))], null));
});})(transaction,s__17379__$2,temp__5804__auto__,ui,show_transaction_editor,expanded,show_balance_row_QMARK_,target_balance))
], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Opening Balance",new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-trash.bin","i.fa-solid.fa-trash.bin",-1691379756)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.delete-col","td.delete-col",1313991014),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("Opening Balance",new cljs.core.Keyword(null,"narrative","narrative",-1575878033).cljs$core$IFn$_invoke$arity$1(transaction)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa-solid.fa-pencil.edit","i.fa-solid.fa-pencil.edit",805880457)], null):null)], null)], null),exfn$month$view$account_transactions_$_iter__17378(cljs.core.rest(s__17379__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(transactions__$1);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.total-row.table-primary","tr.total-row.table-primary",-1841650799),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120","td.col-120",299516294)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-200","td.col-200",-1345302427)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col.col-120","td.amount-col.col-120",-1020191570),exfn.shared.logic.format_number(exfn.month.logic.calculate_totals(transactions__$1,new cljs.core.Keyword(null,"debit","debit",214956555)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col.col-120","td.amount-col.col-120",-1020191570),exfn.shared.logic.format_number(exfn.month.logic.calculate_totals(transactions__$1,new cljs.core.Keyword(null,"credit","credit",782856892)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120.amount-col","td.col-120.amount-col",936246003),exfn.shared.logic.format_number(new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(cljs.core.last(transactions__$1)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-30.delete-col","td.col-30.delete-col",-1903331850),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_balance_row_QMARK_,cljs.core.not);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-scale-unbalanced","i.fas.fa-scale-unbalanced",1790599646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-30","td.col-30",1849353199)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.balance-row","tr.balance-row",565242597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(cljs.core.deref(show_balance_row_QMARK_))?new cljs.core.Keyword(null,"table-row","table-row",118957987):new cljs.core.Keyword(null,"none","none",1333468478))], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120","td.col-120",299516294)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120","td.col-120",299516294)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120","td.col-120",299516294)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120.amount-col","td.col-120.amount-col",936246003),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Target balance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-120.amount-col","td.col-120.amount-col",936246003),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17377_SHARP_){
return cljs.core.reset_BANG_(target_balance,p1__17377_SHARP_.target.value);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col-30.amount-col","td.col-30.amount-col",1271982347),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),exfn.shared.logic.format_number((new cljs.core.Keyword(null,"balance","balance",418967409).cljs$core$IFn$_invoke$arity$1(cljs.core.last(transactions__$1)) - cljs.core.deref(target_balance)))], null)], null)], null)], null)], null)], null)], null);
});
});
exfn.month.view.view = (function exfn$month$view$view(){
var current_month = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-month","current-month",229356226)], null)));
var accounts = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month","month",-1960248533)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),["Month - ",exfn.month.logic.month_no__GT_string(current_month)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"month","month",-1960248533)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):(function (){var iter__5523__auto__ = (function exfn$month$view$view_$_iter__17412(s__17413){
return (new cljs.core.LazySeq(null,(function (){
var s__17413__$1 = s__17413;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17413__$1);
if(temp__5804__auto__){
var s__17413__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17413__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17413__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17415 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17414 = (0);
while(true){
if((i__17414 < size__5522__auto__)){
var account = cljs.core._nth(c__5521__auto__,i__17414);
cljs.core.chunk_append(b__17415,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.month.view.account_transactions,(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : account.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))),(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : account.call(null,new cljs.core.Keyword(null,"name","name",1843675177))),(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transactions","transactions",-1425846118)) : account.call(null,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))),current_month,(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-type","account-type",609792564)) : account.call(null,new cljs.core.Keyword(null,"account-type","account-type",609792564)))], null));

var G__17435 = (i__17414 + (1));
i__17414 = G__17435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17415),exfn$month$view$view_$_iter__17412(cljs.core.chunk_rest(s__17413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17415),null);
}
} else {
var account = cljs.core.first(s__17413__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.month.view.account_transactions,(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : account.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))),(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : account.call(null,new cljs.core.Keyword(null,"name","name",1843675177))),(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transactions","transactions",-1425846118)) : account.call(null,new cljs.core.Keyword(null,"transactions","transactions",-1425846118))),current_month,(account.cljs$core$IFn$_invoke$arity$1 ? account.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-type","account-type",609792564)) : account.call(null,new cljs.core.Keyword(null,"account-type","account-type",609792564)))], null),exfn$month$view$view_$_iter__17412(cljs.core.rest(s__17413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(accounts);
})()
))], null)], null);
});

//# sourceMappingURL=exfn.month.view.js.map
