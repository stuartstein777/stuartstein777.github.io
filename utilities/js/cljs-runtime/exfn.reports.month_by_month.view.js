goog.provide('exfn.reports.month_by_month.view');
exfn.reports.month_by_month.view.total_received_rows = (function exfn$reports$month_by_month$view$total_received_rows(report){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Received"], null)], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$total_received_rows_$_iter__17447(s__17448){
return (new cljs.core.LazySeq(null,(function (){
var s__17448__$1 = s__17448;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17448__$1);
if(temp__5804__auto__){
var s__17448__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17448__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17448__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17450 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17449 = (0);
while(true){
if((i__17449 < size__5522__auto__)){
var debit = cljs.core._nth(c__5521__auto__,i__17449);
cljs.core.chunk_append(b__17450,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(debit)], null));

var G__17492 = (i__17449 + (1));
i__17449 = G__17492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17450),exfn$reports$month_by_month$view$total_received_rows_$_iter__17447(cljs.core.chunk_rest(s__17448__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17450),null);
}
} else {
var debit = cljs.core.first(s__17448__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(debit)], null),exfn$reports$month_by_month$view$total_received_rows_$_iter__17447(cljs.core.rest(s__17448__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-credits","total-credits",982108473),report));
})());
});
exfn.reports.month_by_month.view.total_spent_rows = (function exfn$reports$month_by_month$view$total_spent_rows(report){
return cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Spent"], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$total_spent_rows_$_iter__17457(s__17458){
return (new cljs.core.LazySeq(null,(function (){
var s__17458__$1 = s__17458;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17458__$1);
if(temp__5804__auto__){
var s__17458__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17458__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17458__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17460 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17459 = (0);
while(true){
if((i__17459 < size__5522__auto__)){
var debit = cljs.core._nth(c__5521__auto__,i__17459);
cljs.core.chunk_append(b__17460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(debit)], null));

var G__17493 = (i__17459 + (1));
i__17459 = G__17493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17460),exfn$reports$month_by_month$view$total_spent_rows_$_iter__17457(cljs.core.chunk_rest(s__17458__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17460),null);
}
} else {
var debit = cljs.core.first(s__17458__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(debit)], null),exfn$reports$month_by_month$view$total_spent_rows_$_iter__17457(cljs.core.rest(s__17458__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-debits","total-debits",-129756239),report));
})()], null));
});
exfn.reports.month_by_month.view.total_diff_rows = (function exfn$reports$month_by_month$view$total_diff_rows(report){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.diff-row","tr.diff-row",1040971481),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#e9e9e9"], null)], null),"Difference"], null)], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$total_diff_rows_$_iter__17463(s__17464){
return (new cljs.core.LazySeq(null,(function (){
var s__17464__$1 = s__17464;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17464__$1);
if(temp__5804__auto__){
var s__17464__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17464__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17464__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17466 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17465 = (0);
while(true){
if((i__17465 < size__5522__auto__)){
var diff = cljs.core._nth(c__5521__auto__,i__17465);
cljs.core.chunk_append(b__17466,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((diff < (0)))?new cljs.core.Keyword(null,"red","red",-969428204):(((diff === (0)))?"#e9e9e9":"#00DA00"
))], null)], null),exfn.shared.logic.format_number(diff)], null));

var G__17494 = (i__17465 + (1));
i__17465 = G__17494;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17466),exfn$reports$month_by_month$view$total_diff_rows_$_iter__17463(cljs.core.chunk_rest(s__17464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17466),null);
}
} else {
var diff = cljs.core.first(s__17464__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(((diff < (0)))?new cljs.core.Keyword(null,"red","red",-969428204):(((diff === (0)))?"#e9e9e9":"#00DA00"
))], null)], null),exfn.shared.logic.format_number(diff)], null),exfn$reports$month_by_month$view$total_diff_rows_$_iter__17463(cljs.core.rest(s__17464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (cr,db){
return (cr - db);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-credits","total-credits",982108473),report),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-debits","total-debits",-129756239),report)));
})());
});
exfn.reports.month_by_month.view.category_spend = (function exfn$reports$month_by_month$view$category_spend(category,spends){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),category], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(cljs.core.truth_((function (){var and__5043__auto__ = m;
if(cljs.core.truth_(and__5043__auto__)){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(category) : m.call(null,category));
} else {
return and__5043__auto__;
}
})())?exfn.shared.logic.format_number((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(category) : m.call(null,category))):"-")], null);
}),spends));
});
exfn.reports.month_by_month.view.interest_rate = (function exfn$reports$month_by_month$view$interest_rate(accounts,account_name){
return new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17467_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"account-name","account-name",-296718226).cljs$core$IFn$_invoke$arity$1(p1__17467_SHARP_),account_name);
}),accounts)));
});
exfn.reports.month_by_month.view.view = (function exfn$reports$month_by_month$view$view(){
var year = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var report = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("monthly-summaries","annual-report","monthly-summaries/annual-report",-639668337)], null)));
var accounts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17468){
var vec__17469 = p__17468;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469,(0),null);
var accounts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17469,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"account-name","account-name",-296718226),name,new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224),exfn.reports.month_by_month.view.interest_rate(accounts,name),new cljs.core.Keyword(null,"balances","balances",-1047003019),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"balance","balance",418967409),accounts)], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"account-name","account-name",-296718226),cljs.core.flatten(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"accounts","accounts",-935308676),report)))));
var category_spends = cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.reports.month_by_month.logic.flatten_month,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category-spends","category-spends",-757546609),report));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),["Annual Breakdown - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"month","month",-1960248533)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-hover","table.table.table-sm.table-hover",692093562),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#171819",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Jan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Feb"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Mar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Apr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"May"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Jun"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Jul"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Aug"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Sep"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Oct"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Nov"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month-col","td.month-col",374584417),"Dec"], null)], null)], null),cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.total_received_rows,report], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.total_spent_rows,report], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.total_diff_rows,report], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#171819",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.col","td.col",-1928655213),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(13)], null),"Balances @ EOM"], null)], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$view_$_iter__17472(s__17473){
return (new cljs.core.LazySeq(null,(function (){
var s__17473__$1 = s__17473;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17473__$1);
if(temp__5804__auto__){
var s__17473__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17473__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17473__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17475 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17474 = (0);
while(true){
if((i__17474 < size__5522__auto__)){
var account = cljs.core._nth(c__5521__auto__,i__17474);
cljs.core.chunk_append(b__17475,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224).cljs$core$IFn$_invoke$arity$1(account) === (0)))?new cljs.core.Keyword(null,"account-name","account-name",-296718226).cljs$core$IFn$_invoke$arity$1(account):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226).cljs$core$IFn$_invoke$arity$1(account))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224).cljs$core$IFn$_invoke$arity$1(account)),"%)"].join(''))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__17474,account,c__5521__auto__,size__5522__auto__,b__17475,s__17473__$2,temp__5804__auto__,year,error,loading_QMARK_,report,accounts,category_spends){
return (function (balance){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((balance < (0)))?new cljs.core.Keyword(null,"red","red",-969428204):new cljs.core.Keyword(null,"black","black",1294279647))], null)], null),exfn.shared.logic.format_number(balance)], null);
});})(i__17474,account,c__5521__auto__,size__5522__auto__,b__17475,s__17473__$2,temp__5804__auto__,year,error,loading_QMARK_,report,accounts,category_spends))
,new cljs.core.Keyword(null,"balances","balances",-1047003019).cljs$core$IFn$_invoke$arity$1(account))));

var G__17495 = (i__17474 + (1));
i__17474 = G__17495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17475),exfn$reports$month_by_month$view$view_$_iter__17472(cljs.core.chunk_rest(s__17473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17475),null);
}
} else {
var account = cljs.core.first(s__17473__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),(((new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224).cljs$core$IFn$_invoke$arity$1(account) === (0)))?new cljs.core.Keyword(null,"account-name","account-name",-296718226).cljs$core$IFn$_invoke$arity$1(account):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-name","account-name",-296718226).cljs$core$IFn$_invoke$arity$1(account))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interest-rate","interest-rate",1016892224).cljs$core$IFn$_invoke$arity$1(account)),"%)"].join(''))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (account,s__17473__$2,temp__5804__auto__,year,error,loading_QMARK_,report,accounts,category_spends){
return (function (balance){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((balance < (0)))?new cljs.core.Keyword(null,"red","red",-969428204):new cljs.core.Keyword(null,"black","black",1294279647))], null)], null),exfn.shared.logic.format_number(balance)], null);
});})(account,s__17473__$2,temp__5804__auto__,year,error,loading_QMARK_,report,accounts,category_spends))
,new cljs.core.Keyword(null,"balances","balances",-1047003019).cljs$core$IFn$_invoke$arity$1(account))),exfn$reports$month_by_month$view$view_$_iter__17472(cljs.core.rest(s__17473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(accounts);
})(),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.total-row","tr.total-row",1757449698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),"Total"], null)], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$view_$_iter__17480(s__17481){
return (new cljs.core.LazySeq(null,(function (){
var s__17481__$1 = s__17481;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17481__$1);
if(temp__5804__auto__){
var s__17481__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17481__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17481__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17483 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17482 = (0);
while(true){
if((i__17482 < size__5522__auto__)){
var r = cljs.core._nth(c__5521__auto__,i__17482);
cljs.core.chunk_append(b__17483,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"balance","balance",418967409),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(r))))], null));

var G__17496 = (i__17482 + (1));
i__17482 = G__17496;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17483),exfn$reports$month_by_month$view$view_$_iter__17480(cljs.core.chunk_rest(s__17481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17483),null);
}
} else {
var r = cljs.core.first(s__17481__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"balance","balance",418967409),new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(r))))], null),exfn$reports$month_by_month$view$view_$_iter__17480(cljs.core.rest(s__17481__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(report);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null)], null),"Total to savings"], null),(function (){var iter__5523__auto__ = (function exfn$reports$month_by_month$view$view_$_iter__17484(s__17485){
return (new cljs.core.LazySeq(null,(function (){
var s__17485__$1 = s__17485;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17485__$1);
if(temp__5804__auto__){
var s__17485__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17485__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17485__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17487 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17486 = (0);
while(true){
if((i__17486 < size__5522__auto__)){
var v = cljs.core._nth(c__5521__auto__,i__17486);
cljs.core.chunk_append(b__17487,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(v)], null));

var G__17497 = (i__17486 + (1));
i__17486 = G__17497;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17487),exfn$reports$month_by_month$view$view_$_iter__17484(cljs.core.chunk_rest(s__17485__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17487),null);
}
} else {
var v = cljs.core.first(s__17485__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(v)], null),exfn$reports$month_by_month$view$view_$_iter__17484(cljs.core.rest(s__17485__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"total-to-savings","total-to-savings",-332490916),report));
})()], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(25)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#171819",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535)], null),new cljs.core.Keyword(null,"colSpan","colSpan",872137394),(13)], null),"Categories"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Night Out Beers",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Transport",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Eating Out",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Groceries",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Internet and Telephone",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Mortgage",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Factors",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Council Tax",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Utilities",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"TV and Entertainment",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Digital Subscriptions",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Haircut",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Misc",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Books and Comics",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Music",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Holidays",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Hotel",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Study and Courses",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Student Loan Overpayment",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Photo Prints",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Clothing",category_spends], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.reports.month_by_month.view.category_spend,"Concerts",category_spends], null)], true)], null)], null)
))], null)], null);
});

//# sourceMappingURL=exfn.reports.month_by_month.view.js.map
