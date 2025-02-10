goog.provide('exfn.app');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.app.event_type_legend = cljs.core.PersistentHashMap.fromArrays(["dentist","poker night","night out","hike","climbing","work event","pool","social","gig","multiple"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2e3440",new cljs.core.Keyword(null,"white","white",-483998618),"#fc9403"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#317a28",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a02c2d",new cljs.core.Keyword(null,"white","white",-483998618),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fb8e7e",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5e96ae",new cljs.core.Keyword(null,"white","white",-483998618),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fed797",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d3c0f9",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f3a4ed",new cljs.core.Keyword(null,"black","black",1294279647),null], null)]);
exfn.app.day_detail = (function exfn$app$day_detail(){
var selected_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null)));
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-responsive","table.table.table-sm.table-responsive",-909664134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.thead-dark","thead.thead-dark",1239861843),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Day"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Description"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4622__auto__ = (function exfn$app$day_detail_$_iter__31586(s__31587){
return (new cljs.core.LazySeq(null,(function (){
var s__31587__$1 = s__31587;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31587__$1);
if(temp__5753__auto__){
var s__31587__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31587__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31587__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31589 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31588 = (0);
while(true){
if((i__31588 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__31588);
cljs.core.chunk_append(b__31589,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31591 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__31591) : exfn.logic.day_of_week_short.call(null,G__31591));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null));

var G__31650 = (i__31588 + (1));
i__31588 = G__31650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31589),exfn$app$day_detail_$_iter__31586(cljs.core.chunk_rest(s__31587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31589),null);
}
} else {
var event = cljs.core.first(s__31587__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31593 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__31593) : exfn.logic.day_of_week_short.call(null,G__31593));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null),exfn$app$day_detail_$_iter__31586(cljs.core.rest(s__31587__$2)));
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
var pred__31594 = cljs.core._EQ_;
var expr__31595 = cljs.core.count(events);
if(cljs.core.truth_((pred__31594.cljs$core$IFn$_invoke$arity$2 ? pred__31594.cljs$core$IFn$_invoke$arity$2((0),expr__31595) : pred__31594.call(null,(0),expr__31595)))){
return "#2e3440";
} else {
if(cljs.core.truth_((pred__31594.cljs$core$IFn$_invoke$arity$2 ? pred__31594.cljs$core$IFn$_invoke$arity$2((1),expr__31595) : pred__31594.call(null,(1),expr__31595)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,clojure.string.lower_case(cljs.core.first(events)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,"multiple");
}
}
});
exfn.app.month_component = (function exfn$app$month_component(year,month){
var weeks = exfn.app.get_days_in_month(year,month);
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-month","div.calendar-month",835284509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month-title","div.month-title",1015309813),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM"),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day-initials","div.day-initials",570230170),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__31597(s__31598){
return (new cljs.core.LazySeq(null,(function (){
var s__31598__$1 = s__31598;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31598__$1);
if(temp__5753__auto__){
var s__31598__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31598__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31598__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31600 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31599 = (0);
while(true){
if((i__31599 < size__4621__auto__)){
var vec__31601 = cljs.core._nth(c__4620__auto__,i__31599);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31601,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31601,(1),null);
cljs.core.chunk_append(b__31600,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)));

var G__31651 = (i__31599 + (1));
i__31599 = G__31651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31600),exfn$app$month_component_$_iter__31597(cljs.core.chunk_rest(s__31598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31600),null);
}
} else {
var vec__31604 = cljs.core.first(s__31598__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31604,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31604,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)),exfn$app$month_component_$_iter__31597(cljs.core.rest(s__31598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","T","W","T","F","S","S"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))));
})()], null),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__31607(s__31608){
return (new cljs.core.LazySeq(null,(function (){
var s__31608__$1 = s__31608;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31608__$1);
if(temp__5753__auto__){
var s__31608__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31608__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31608__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31610 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31609 = (0);
while(true){
if((i__31609 < size__4621__auto__)){
var week = cljs.core._nth(c__4620__auto__,i__31609);
cljs.core.chunk_append(b__31610,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (i__31609,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__31607_$_iter__31611(s__31612){
return (new cljs.core.LazySeq(null,((function (i__31609,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events){
return (function (){
var s__31612__$1 = s__31612;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__31612__$1);
if(temp__5753__auto____$1){
var s__31612__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31612__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__31612__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__31614 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__31613 = (0);
while(true){
if((i__31613 < size__4621__auto____$1)){
var vec__31615 = cljs.core._nth(c__4620__auto____$1,i__31613);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31615,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31615,(1),null);
cljs.core.chunk_append(b__31614,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
var today_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,module$node_modules$moment$moment().date())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((month - (1)),module$node_modules$moment$moment().month())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,module$node_modules$moment$moment().year())))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":((today_QMARK_)?"1px solid #00f":"0px solid #2e3440"
)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":((today_QMARK_)?"#97aff0":"#2e3440"
)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":((today_QMARK_)?"#00f":"#fff"
))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31613,i__31609,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31615,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__31614,s__31612__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__31613,i__31609,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31615,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__31614,s__31612__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__31652 = (i__31613 + (1));
i__31613 = G__31652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31614),exfn$app$month_component_$_iter__31607_$_iter__31611(cljs.core.chunk_rest(s__31612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31614),null);
}
} else {
var vec__31618 = cljs.core.first(s__31612__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31618,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
var today_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,module$node_modules$moment$moment().date())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((month - (1)),module$node_modules$moment$moment().month())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,module$node_modules$moment$moment().year())))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":((today_QMARK_)?"1px solid #00f":"0px solid #2e3440"
)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":((today_QMARK_)?"#97aff0":"#2e3440"
)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":((today_QMARK_)?"#00f":"#fff"
))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31609,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31618,day,idx,s__31612__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__31609,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31618,day,idx,s__31612__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__31607_$_iter__31611(cljs.core.rest(s__31612__$2)));
}
} else {
return null;
}
break;
}
});})(i__31609,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events))
,null,null));
});})(i__31609,week,c__4620__auto__,size__4621__auto__,b__31610,s__31608__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__31653 = (i__31609 + (1));
i__31609 = G__31653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31610),exfn$app$month_component_$_iter__31607(cljs.core.chunk_rest(s__31608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31610),null);
}
} else {
var week = cljs.core.first(s__31608__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (week,s__31608__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__31607_$_iter__31621(s__31622){
return (new cljs.core.LazySeq(null,(function (){
var s__31622__$1 = s__31622;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__31622__$1);
if(temp__5753__auto____$1){
var s__31622__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31622__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31622__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31624 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31623 = (0);
while(true){
if((i__31623 < size__4621__auto__)){
var vec__31625 = cljs.core._nth(c__4620__auto__,i__31623);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31625,(1),null);
cljs.core.chunk_append(b__31624,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
var today_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,module$node_modules$moment$moment().date())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((month - (1)),module$node_modules$moment$moment().month())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,module$node_modules$moment$moment().year())))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":((today_QMARK_)?"1px solid #00f":"0px solid #2e3440"
)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":((today_QMARK_)?"#97aff0":"#2e3440"
)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":((today_QMARK_)?"#00f":"#fff"
))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31623,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31625,day,idx,c__4620__auto__,size__4621__auto__,b__31624,s__31622__$2,temp__5753__auto____$1,week,s__31608__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__31623,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31625,day,idx,c__4620__auto__,size__4621__auto__,b__31624,s__31622__$2,temp__5753__auto____$1,week,s__31608__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__31654 = (i__31623 + (1));
i__31623 = G__31654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31624),exfn$app$month_component_$_iter__31607_$_iter__31621(cljs.core.chunk_rest(s__31622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31624),null);
}
} else {
var vec__31628 = cljs.core.first(s__31622__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31628,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31628,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
var today_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,module$node_modules$moment$moment().date())) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((month - (1)),module$node_modules$moment$moment().month())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,module$node_modules$moment$moment().year())))));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":((today_QMARK_)?"1px solid #00f":"0px solid #2e3440"
)),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":((today_QMARK_)?"#97aff0":"#2e3440"
)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":((today_QMARK_)?"#00f":"#fff"
))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31628,day,idx,s__31622__$2,temp__5753__auto____$1,week,s__31608__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,today_QMARK_,vec__31628,day,idx,s__31622__$2,temp__5753__auto____$1,week,s__31608__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__31607_$_iter__31621(cljs.core.rest(s__31622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(week,s__31608__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$month_component_$_iter__31607(cljs.core.rest(s__31608__$2)));
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
var curent_month_events = exfn.logic.events_for_month(events,current_date.month(),current_date.year());
var current_year = Number(current_date.format("YYYY"));
var working_days_remaining = exfn.logic.working_days_remaining(events,current_year);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-grid","div.calendar-grid",-884381798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-year","div.calendar-year",1121808250),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__31632(s__31633){
return (new cljs.core.LazySeq(null,(function (){
var s__31633__$1 = s__31633;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31633__$1);
if(temp__5753__auto__){
var s__31633__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31633__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31633__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31635 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31634 = (0);
while(true){
if((i__31634 < size__4621__auto__)){
var month = cljs.core._nth(c__4620__auto__,i__31634);
cljs.core.chunk_append(b__31635,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__31655 = (i__31634 + (1));
i__31634 = G__31655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31635),exfn$app$display_year_$_iter__31632(cljs.core.chunk_rest(s__31633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31635),null);
}
} else {
var month = cljs.core.first(s__31633__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$display_year_$_iter__31632(cljs.core.rest(s__31633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend","div.legend",-315677844),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__31636(s__31637){
return (new cljs.core.LazySeq(null,(function (){
var s__31637__$1 = s__31637;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31637__$1);
if(temp__5753__auto__){
var s__31637__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31637__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31637__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31639 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31638 = (0);
while(true){
if((i__31638 < size__4621__auto__)){
var entry = cljs.core._nth(c__4620__auto__,i__31638);
cljs.core.chunk_append(b__31639,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry)),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))].join(''):"none")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)));

var G__31656 = (i__31638 + (1));
i__31638 = G__31656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31639),exfn$app$display_year_$_iter__31636(cljs.core.chunk_rest(s__31637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31639),null);
}
} else {
var entry = cljs.core.first(s__31637__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry)),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))].join(''):"none")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)),exfn$app$display_year_$_iter__31636(cljs.core.rest(s__31637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(exfn.app.event_type_legend);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events","div.current-months-events",1095185758),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$moment$moment().format("MMMM"))," events"].join('')], null),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__31640(s__31641){
return (new cljs.core.LazySeq(null,(function (){
var s__31641__$1 = s__31641;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__31641__$1);
if(temp__5753__auto__){
var s__31641__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31641__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__31641__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__31643 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__31642 = (0);
while(true){
if((i__31642 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__31642);
cljs.core.chunk_append(b__31643,(function (){var today = module$node_modules$moment$moment();
var event_date = module$node_modules$moment$moment(exfn.logic.build_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).date(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).month() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).year()));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31645 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__31645) : exfn.logic.day_of_week_short.call(null,G__31645));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),(cljs.core.truth_(event_date.isBefore(today))?"line-through":"none")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null));
})());

var G__31657 = (i__31642 + (1));
i__31642 = G__31657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31643),exfn$app$display_year_$_iter__31640(cljs.core.chunk_rest(s__31641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31643),null);
}
} else {
var event = cljs.core.first(s__31641__$2);
return cljs.core.cons((function (){var today = module$node_modules$moment$moment();
var event_date = module$node_modules$moment$moment(exfn.logic.build_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).date(),(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).month() + (1)),new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).year()));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31647 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__31647) : exfn.logic.day_of_week_short.call(null,G__31647));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),(cljs.core.truth_(event_date.isBefore(today))?"line-through":"none")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null));
})(),exfn$app$display_year_$_iter__31640(cljs.core.rest(s__31641__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__31631_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__31631_SHARP_).date();
}),curent_month_events));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Working days remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(working_days_remaining)].join('')], null)], null)], null);
});
exfn.app.format_date = (function exfn$app$format_date(date,current_view){
var G__31648 = current_view;
var G__31648__$1 = (((G__31648 instanceof cljs.core.Keyword))?G__31648.fqn:null);
switch (G__31648__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31648__$1)].join('')));

}
});
exfn.app.get_chevron_visibilty = (function exfn$app$get_chevron_visibilty(current_view){
var G__31649 = current_view;
var G__31649__$1 = (((G__31649 instanceof cljs.core.Keyword))?G__31649.fqn:null);
switch (G__31649__$1) {
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
var selected_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-header","div.calendar-header",197075868),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.chevron-left","span.chevron-left",2048130219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),exfn.app.get_chevron_visibilty(current_view)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-left.ptr","i.fas.fa-chevron-left.ptr",-1462322710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_view,new cljs.core.Keyword(null,"year","year",335913393))){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-year","prev-year",707761911)], null));
} else {
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prev-month","prev-month",1275314015)], null));
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.calendar-header-month","span.calendar-header-month",2105479443),(cljs.core.truth_(selected_date)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.app.format_date(selected_date,current_view)):cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.app.format_date(current_date,current_view)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.chevron-right","span.chevron-right",273522359),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),exfn.app.get_chevron_visibilty(current_view)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-chevron-right.ptr","i.fas.fa-chevron-right.ptr",-1529906957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
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
