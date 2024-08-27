goog.provide('exfn.app');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.app.event_type_legend = new cljs.core.PersistentArrayMap(null, 8, ["poker night",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#317a28",new cljs.core.Keyword(null,"black","black",1294279647)], null),"night out",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a02c2d",new cljs.core.Keyword(null,"white","white",-483998618)], null),"social",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fed797",new cljs.core.Keyword(null,"black","black",1294279647)], null),"pool",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5e96ae",new cljs.core.Keyword(null,"white","white",-483998618)], null),"gig",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d3c0f9",new cljs.core.Keyword(null,"black","black",1294279647)], null),"climbing",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fb8e7e",new cljs.core.Keyword(null,"black","black",1294279647)], null),"hike",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"black","black",1294279647)], null),"multiple",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f3a4ed",new cljs.core.Keyword(null,"black","black",1294279647)], null)], null);
exfn.app.day_detail = (function exfn$app$day_detail(){
var selected_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null)));
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-responsive","table.table.table-sm.table-responsive",-909664134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.thead-dark","thead.thead-dark",1239861843),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Day"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Description"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4622__auto__ = (function exfn$app$day_detail_$_iter__34308(s__34309){
return (new cljs.core.LazySeq(null,(function (){
var s__34309__$1 = s__34309;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34309__$1);
if(temp__5753__auto__){
var s__34309__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34309__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34309__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34311 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34310 = (0);
while(true){
if((i__34310 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__34310);
cljs.core.chunk_append(b__34311,(function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34313 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__34313) : exfn.logic.day_of_week_short.call(null,G__34313));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
})()
);

var G__34371 = (i__34310 + (1));
i__34310 = G__34371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34311),exfn$app$day_detail_$_iter__34308(cljs.core.chunk_rest(s__34309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34311),null);
}
} else {
var event = cljs.core.first(s__34309__$2);
return cljs.core.cons((function (){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34315 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__34315) : exfn.logic.day_of_week_short.call(null,G__34315));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null);
})()
,exfn$app$day_detail_$_iter__34308(cljs.core.rest(s__34309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(exfn.logic.events_for_day(events,selected_date));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn.btn.btn-primary","btn.btn.btn-primary",1356162253),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(30)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"year","year",335913393)], null));
})], null),"Back"], null)], null);
});
exfn.app.days_in_month = (function exfn$app$days_in_month(year,month){
var last_day = cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1)));
return cljs_time.core.day(last_day);
});
exfn.app.get_days_in_month = (function exfn$app$get_days_in_month(year,month){
var first_day = cljs_time.core.day_of_week(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1)));
var days_in_month = exfn.app.days_in_month(year,month);
var to_pad_end = ((42) - (days_in_month + first_day));
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((7),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((first_day - (1)),(0)),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(days_in_month + (1))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(to_pad_end,(0))], 0)));
});
exfn.app.get_bottom_border = (function exfn$app$get_bottom_border(week,weeks){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(week,cljs.core.last(weeks))){
return "1px solid #f3f3f3";
} else {
return null;
}
});
exfn.app.get_event_color = (function exfn$app$get_event_color(events){
var pred__34316 = cljs.core._EQ_;
var expr__34317 = cljs.core.count(events);
if(cljs.core.truth_((pred__34316.cljs$core$IFn$_invoke$arity$2 ? pred__34316.cljs$core$IFn$_invoke$arity$2((0),expr__34317) : pred__34316.call(null,(0),expr__34317)))){
return "#2e3440";
} else {
if(cljs.core.truth_((pred__34316.cljs$core$IFn$_invoke$arity$2 ? pred__34316.cljs$core$IFn$_invoke$arity$2((1),expr__34317) : pred__34316.call(null,(1),expr__34317)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,clojure.string.lower_case(cljs.core.first(events)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,"multiple");
}
}
});
exfn.app.month_component = (function exfn$app$month_component(year,month){
var weeks = exfn.app.get_days_in_month(year,month);
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-month","div.calendar-month",835284509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month-title","div.month-title",1015309813),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM"),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day-initials","div.day-initials",570230170),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__34319(s__34320){
return (new cljs.core.LazySeq(null,(function (){
var s__34320__$1 = s__34320;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34320__$1);
if(temp__5753__auto__){
var s__34320__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34320__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34320__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34322 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34321 = (0);
while(true){
if((i__34321 < size__4621__auto__)){
var vec__34323 = cljs.core._nth(c__4620__auto__,i__34321);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34323,(1),null);
cljs.core.chunk_append(b__34322,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)));

var G__34372 = (i__34321 + (1));
i__34321 = G__34372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),exfn$app$month_component_$_iter__34319(cljs.core.chunk_rest(s__34320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34322),null);
}
} else {
var vec__34326 = cljs.core.first(s__34320__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34326,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34326,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)),exfn$app$month_component_$_iter__34319(cljs.core.rest(s__34320__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","T","W","T","F","S","S"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))));
})()], null),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__34329(s__34330){
return (new cljs.core.LazySeq(null,(function (){
var s__34330__$1 = s__34330;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34330__$1);
if(temp__5753__auto__){
var s__34330__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34330__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34330__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34332 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34331 = (0);
while(true){
if((i__34331 < size__4621__auto__)){
var week = cljs.core._nth(c__4620__auto__,i__34331);
cljs.core.chunk_append(b__34332,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (i__34331,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__34329_$_iter__34333(s__34334){
return (new cljs.core.LazySeq(null,((function (i__34331,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events){
return (function (){
var s__34334__$1 = s__34334;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__34334__$1);
if(temp__5753__auto____$1){
var s__34334__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34334__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__34334__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__34336 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__34335 = (0);
while(true){
if((i__34335 < size__4621__auto____$1)){
var vec__34337 = cljs.core._nth(c__4620__auto____$1,i__34335);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34337,(1),null);
cljs.core.chunk_append(b__34336,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34335,i__34331,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34337,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__34336,s__34334__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__34335,i__34331,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34337,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__34336,s__34334__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__34373 = (i__34335 + (1));
i__34335 = G__34373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34336),exfn$app$month_component_$_iter__34329_$_iter__34333(cljs.core.chunk_rest(s__34334__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34336),null);
}
} else {
var vec__34340 = cljs.core.first(s__34334__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34340,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34331,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34340,day,idx,s__34334__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__34331,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34340,day,idx,s__34334__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__34329_$_iter__34333(cljs.core.rest(s__34334__$2)));
}
} else {
return null;
}
break;
}
});})(i__34331,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events))
,null,null));
});})(i__34331,week,c__4620__auto__,size__4621__auto__,b__34332,s__34330__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__34374 = (i__34331 + (1));
i__34331 = G__34374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34332),exfn$app$month_component_$_iter__34329(cljs.core.chunk_rest(s__34330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34332),null);
}
} else {
var week = cljs.core.first(s__34330__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (week,s__34330__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__34329_$_iter__34343(s__34344){
return (new cljs.core.LazySeq(null,(function (){
var s__34344__$1 = s__34344;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__34344__$1);
if(temp__5753__auto____$1){
var s__34344__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34344__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34344__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34346 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34345 = (0);
while(true){
if((i__34345 < size__4621__auto__)){
var vec__34347 = cljs.core._nth(c__4620__auto__,i__34345);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34347,(1),null);
cljs.core.chunk_append(b__34346,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34345,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34347,day,idx,c__4620__auto__,size__4621__auto__,b__34346,s__34344__$2,temp__5753__auto____$1,week,s__34330__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__34345,background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34347,day,idx,c__4620__auto__,size__4621__auto__,b__34346,s__34344__$2,temp__5753__auto____$1,week,s__34330__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__34375 = (i__34345 + (1));
i__34345 = G__34375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34346),exfn$app$month_component_$_iter__34329_$_iter__34343(cljs.core.chunk_rest(s__34344__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34346),null);
}
} else {
var vec__34350 = cljs.core.first(s__34344__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34350,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34350,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34350,day,idx,s__34344__$2,temp__5753__auto____$1,week,s__34330__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(background_color,text_color,events_for_day,holiday_day_QMARK_,vec__34350,day,idx,s__34344__$2,temp__5753__auto____$1,week,s__34330__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__34329_$_iter__34343(cljs.core.rest(s__34344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(week,s__34330__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$month_component_$_iter__34329(cljs.core.rest(s__34330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(weeks);
})()], null);
});
exfn.app.display_year = (function exfn$app$display_year(){
var current_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105)], null)));
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
var curent_month_events = exfn.logic.events_for_month(events,current_date.month());
var current_year = Number(current_date.format("YYYY"));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-grid","div.calendar-grid",-884381798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-year","div.calendar-year",1121808250),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__34353(s__34354){
return (new cljs.core.LazySeq(null,(function (){
var s__34354__$1 = s__34354;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34354__$1);
if(temp__5753__auto__){
var s__34354__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34354__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34354__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34356 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34355 = (0);
while(true){
if((i__34355 < size__4621__auto__)){
var month = cljs.core._nth(c__4620__auto__,i__34355);
cljs.core.chunk_append(b__34356,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__34376 = (i__34355 + (1));
i__34355 = G__34376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34356),exfn$app$display_year_$_iter__34353(cljs.core.chunk_rest(s__34354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34356),null);
}
} else {
var month = cljs.core.first(s__34354__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$display_year_$_iter__34353(cljs.core.rest(s__34354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend","div.legend",-315677844),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__34357(s__34358){
return (new cljs.core.LazySeq(null,(function (){
var s__34358__$1 = s__34358;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34358__$1);
if(temp__5753__auto__){
var s__34358__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34358__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34358__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34360 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34359 = (0);
while(true){
if((i__34359 < size__4621__auto__)){
var entry = cljs.core._nth(c__4620__auto__,i__34359);
cljs.core.chunk_append(b__34360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)));

var G__34377 = (i__34359 + (1));
i__34359 = G__34377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34360),exfn$app$display_year_$_iter__34357(cljs.core.chunk_rest(s__34358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34360),null);
}
} else {
var entry = cljs.core.first(s__34358__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)),exfn$app$display_year_$_iter__34357(cljs.core.rest(s__34358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(exfn.app.event_type_legend);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events","div.current-months-events",1095185758),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$moment$moment().format("MMMM"))," events"].join('')], null),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__34361(s__34362){
return (new cljs.core.LazySeq(null,(function (){
var s__34362__$1 = s__34362;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__34362__$1);
if(temp__5753__auto__){
var s__34362__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34362__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__34362__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__34364 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__34363 = (0);
while(true){
if((i__34363 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__34363);
cljs.core.chunk_append(b__34364,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34366 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__34366) : exfn.logic.day_of_week_short.call(null,G__34366));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)));

var G__34378 = (i__34363 + (1));
i__34363 = G__34378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34364),exfn$app$display_year_$_iter__34361(cljs.core.chunk_rest(s__34362__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34364),null);
}
} else {
var event = cljs.core.first(s__34362__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__34368 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__34368) : exfn.logic.day_of_week_short.call(null,G__34368));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)),exfn$app$display_year_$_iter__34361(cljs.core.rest(s__34362__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(curent_month_events);
})()], null)], null)], null);
});
exfn.app.format_date = (function exfn$app$format_date(date,current_view){
var G__34369 = current_view;
var G__34369__$1 = (((G__34369 instanceof cljs.core.Keyword))?G__34369.fqn:null);
switch (G__34369__$1) {
case "month":
return date.format("MMMM YYYY");

break;
case "year":
return date.format("YYYY");

break;
case "list":
return date.format("MMMM YYYY");

break;
case "day":
return date.format("DD MMMM YYYY");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34369__$1)].join('')));

}
});
exfn.app.get_chevron_visibilty = (function exfn$app$get_chevron_visibilty(current_view){
var G__34370 = current_view;
var G__34370__$1 = (((G__34370 instanceof cljs.core.Keyword))?G__34370.fqn:null);
switch (G__34370__$1) {
case "day":
return new cljs.core.Keyword(null,"none","none",1333468478);

break;
default:
return new cljs.core.Keyword(null,"inline","inline",1399884222);

}
});
exfn.app.calendar_header = (function exfn$app$calendar_header(){
var current_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105)], null)));
var current_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-header","div.calendar-header",197075868),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.chevron-left","span.chevron-left",2048130219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),exfn.app.get_chevron_visibilty(current_view)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-left.ptr","i.fas.fa-chevron-left.ptr",-1462322710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_view,new cljs.core.Keyword(null,"year","year",335913393))){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year","prev-year",707761911)], null));
} else {
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month","prev-month",1275314015)], null));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.calendar-header-month","span.calendar-header-month",2105479443),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.app.format_date(current_date,current_view))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.chevron-right","span.chevron-right",273522359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),exfn.app.get_chevron_visibilty(current_view)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-right.ptr","i.fas.fa-chevron-right.ptr",-1529906957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_view,new cljs.core.Keyword(null,"year","year",335913393))){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-year","next-year",-1541587170)], null));
} else {
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-month","next-month",1823833970)], null));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.calendar-selectors","span.calendar-selectors",1859698487),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-list-alt.mr-9.ptr","i.fas.fa-list-alt.mr-9.ptr",-450601458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"list","list",765357683)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-calendar.mr-9.ptr","i.fas.fa-calendar.mr-9.ptr",-1025196984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"month","month",-1960248533)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-calendar-alt.ptr","i.fas.fa-calendar-alt.ptr",-1957432997),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"year","year",335913393)], null));
})], null)], null)], null)], null);
});
exfn.app.app = (function exfn$app$app(){
var current_view = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-view","current-view",-1037279042)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.calendar_header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"year","year",335913393),current_view))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.display_year], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day","day",-274800446),current_view))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.day_detail], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)
))], null);
});
exfn.app.start = (function exfn$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.app], null),document.getElementById("app"));
});
exfn.app.init = (function exfn$app$init(){
console.log("Initializing app");

return exfn.app.start();
});
goog.exportSymbol('exfn.app.init', exfn.app.init);
if((typeof exfn !== 'undefined') && (typeof exfn.app !== 'undefined') && (typeof exfn.app.initialize !== 'undefined')){
} else {
exfn.app.initialize = re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}

//# sourceMappingURL=exfn.app.js.map
