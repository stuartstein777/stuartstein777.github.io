goog.provide('exfn.app');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.app.event_type_legend = cljs.core.PersistentHashMap.fromArrays(["dentist","poker night","night out","hike","climbing","work event","pool","social","gig","multiple"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2e3440",new cljs.core.Keyword(null,"white","white",-483998618),"#fc9403"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#317a28",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#a02c2d",new cljs.core.Keyword(null,"white","white",-483998618),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fb8e7e",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#5e96ae",new cljs.core.Keyword(null,"white","white",-483998618),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#fed797",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#d3c0f9",new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#f3a4ed",new cljs.core.Keyword(null,"black","black",1294279647),null], null)]);
exfn.app.day_detail = (function exfn$app$day_detail(){
var selected_date = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548)], null)));
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-responsive","table.table.table-sm.table-responsive",-909664134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead.thead-dark","thead.thead-dark",1239861843),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Day"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Location"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.la","th.la",2013913720),"Description"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4622__auto__ = (function exfn$app$day_detail_$_iter__30304(s__30305){
return (new cljs.core.LazySeq(null,(function (){
var s__30305__$1 = s__30305;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30305__$1);
if(temp__5753__auto__){
var s__30305__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30305__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30305__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30307 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30306 = (0);
while(true){
if((i__30306 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__30306);
cljs.core.chunk_append(b__30307,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30309 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__30309) : exfn.logic.day_of_week_short.call(null,G__30309));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null));

var G__30367 = (i__30306 + (1));
i__30306 = G__30367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30307),exfn$app$day_detail_$_iter__30304(cljs.core.chunk_rest(s__30305__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30307),null);
}
} else {
var event = cljs.core.first(s__30305__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30311 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__30311) : exfn.logic.day_of_week_short.call(null,G__30311));
})())," ",exfn.logic.pad_zero(selected_date.format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(event)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.la","td.la",-269979146),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(event)], null)], null),exfn$app$day_detail_$_iter__30304(cljs.core.rest(s__30305__$2)));
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
var pred__30312 = cljs.core._EQ_;
var expr__30313 = cljs.core.count(events);
if(cljs.core.truth_((pred__30312.cljs$core$IFn$_invoke$arity$2 ? pred__30312.cljs$core$IFn$_invoke$arity$2((0),expr__30313) : pred__30312.call(null,(0),expr__30313)))){
return "#2e3440";
} else {
if(cljs.core.truth_((pred__30312.cljs$core$IFn$_invoke$arity$2 ? pred__30312.cljs$core$IFn$_invoke$arity$2((1),expr__30313) : pred__30312.call(null,(1),expr__30313)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,clojure.string.lower_case(cljs.core.first(events)));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(exfn.app.event_type_legend,"multiple");
}
}
});
exfn.app.month_component = (function exfn$app$month_component(year,month){
var weeks = exfn.app.get_days_in_month(year,month);
var events = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-month","div.calendar-month",835284509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.month-title","div.month-title",1015309813),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM"),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day-initials","div.day-initials",570230170),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__30315(s__30316){
return (new cljs.core.LazySeq(null,(function (){
var s__30316__$1 = s__30316;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30316__$1);
if(temp__5753__auto__){
var s__30316__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30316__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30316__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30318 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30317 = (0);
while(true){
if((i__30317 < size__4621__auto__)){
var vec__30319 = cljs.core._nth(c__4620__auto__,i__30317);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30319,(1),null);
cljs.core.chunk_append(b__30318,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)));

var G__30368 = (i__30317 + (1));
i__30317 = G__30368;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30318),exfn$app$month_component_$_iter__30315(cljs.core.chunk_rest(s__30316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30318),null);
}
} else {
var vec__30322 = cljs.core.first(s__30316__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30322,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.initial-day","div.initial-day",935777672),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"-DI-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join('')], null)),exfn$app$month_component_$_iter__30315(cljs.core.rest(s__30316__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","T","W","T","F","S","S"], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1((7))));
})()], null),(function (){var iter__4622__auto__ = (function exfn$app$month_component_$_iter__30325(s__30326){
return (new cljs.core.LazySeq(null,(function (){
var s__30326__$1 = s__30326;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30326__$1);
if(temp__5753__auto__){
var s__30326__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30326__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30326__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30328 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30327 = (0);
while(true){
if((i__30327 < size__4621__auto__)){
var week = cljs.core._nth(c__4620__auto__,i__30327);
cljs.core.chunk_append(b__30328,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (i__30327,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__30325_$_iter__30329(s__30330){
return (new cljs.core.LazySeq(null,((function (i__30327,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events){
return (function (){
var s__30330__$1 = s__30330;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30330__$1);
if(temp__5753__auto____$1){
var s__30330__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30330__$2)){
var c__4620__auto____$1 = cljs.core.chunk_first(s__30330__$2);
var size__4621__auto____$1 = cljs.core.count(c__4620__auto____$1);
var b__30332 = cljs.core.chunk_buffer(size__4621__auto____$1);
if((function (){var i__30331 = (0);
while(true){
if((i__30331 < size__4621__auto____$1)){
var vec__30333 = cljs.core._nth(c__4620__auto____$1,i__30331);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(1),null);
cljs.core.chunk_append(b__30332,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30331,i__30327,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30333,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__30332,s__30330__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__30331,i__30327,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30333,day,idx,c__4620__auto____$1,size__4621__auto____$1,b__30332,s__30330__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__30369 = (i__30331 + (1));
i__30331 = G__30369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30332),exfn$app$month_component_$_iter__30325_$_iter__30329(cljs.core.chunk_rest(s__30330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30332),null);
}
} else {
var vec__30336 = cljs.core.first(s__30330__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30336,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30336,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30327,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30336,day,idx,s__30330__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__30327,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30336,day,idx,s__30330__$2,temp__5753__auto____$1,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__30325_$_iter__30329(cljs.core.rest(s__30330__$2)));
}
} else {
return null;
}
break;
}
});})(i__30327,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events))
,null,null));
});})(i__30327,week,c__4620__auto__,size__4621__auto__,b__30328,s__30326__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__30370 = (i__30327 + (1));
i__30327 = G__30370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30328),exfn$app$month_component_$_iter__30325(cljs.core.chunk_rest(s__30326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30328),null);
}
} else {
var week = cljs.core.first(s__30326__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.week","div.week",774846420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),exfn.app.get_bottom_border(week,weeks)], null)], null),(function (){var iter__4622__auto__ = ((function (week,s__30326__$2,temp__5753__auto__,weeks,events){
return (function exfn$app$month_component_$_iter__30325_$_iter__30339(s__30340){
return (new cljs.core.LazySeq(null,(function (){
var s__30340__$1 = s__30340;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__30340__$1);
if(temp__5753__auto____$1){
var s__30340__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30340__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30340__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30342 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30341 = (0);
while(true){
if((i__30341 < size__4621__auto__)){
var vec__30343 = cljs.core._nth(c__4620__auto__,i__30341);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30343,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30343,(1),null);
cljs.core.chunk_append(b__30342,(function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30341,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30343,day,idx,c__4620__auto__,size__4621__auto__,b__30342,s__30340__$2,temp__5753__auto____$1,week,s__30326__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(i__30341,background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30343,day,idx,c__4620__auto__,size__4621__auto__,b__30342,s__30340__$2,temp__5753__auto____$1,week,s__30326__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})());

var G__30371 = (i__30341 + (1));
i__30341 = G__30371;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30342),exfn$app$month_component_$_iter__30325_$_iter__30339(cljs.core.chunk_rest(s__30340__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30342),null);
}
} else {
var vec__30346 = cljs.core.first(s__30340__$2);
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(1),null);
return cljs.core.cons((function (){var events_for_day = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?exfn.logic.events_types_on_date(events,module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''))):cljs.core.PersistentVector.EMPTY);
var holiday_day_QMARK_ = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Holiday",null], null), null),events_for_day);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.daybox","div.daybox",-60345665),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(holiday_day_QMARK_)?"1px solid green":"0px solid #2e3440"),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(holiday_day_QMARK_)?"#C1E1C1":"#2e3440"),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(holiday_day_QMARK_)?"#000":"#fff")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.day","div.day",-884629784),(function (){var background_color = cljs.core.first(exfn.app.get_event_color(events_for_day));
var text_color = cljs.core.second(exfn.app.get_event_color(events_for_day));
var border_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(exfn.app.get_event_color(events_for_day),(2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color,new cljs.core.Keyword(null,"color","color",1011675173),text_color,new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(border_color)?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(border_color)].join(''):"none")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30346,day,idx,s__30340__$2,temp__5753__auto____$1,week,s__30326__$2,temp__5753__auto__,weeks,events){
return (function (_){
var moment = module$node_modules$moment$moment(exfn.logic.build_date(day,month,year));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),moment], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-view","update-view",355575066),new cljs.core.Keyword(null,"day","day",-274800446)], null));
});})(background_color,text_color,border_color,events_for_day,holiday_day_QMARK_,vec__30346,day,idx,s__30340__$2,temp__5753__auto____$1,week,s__30326__$2,temp__5753__auto__,weeks,events))
], null);
})(),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),day))?"":day)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["idx-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx),"day-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null));
})(),exfn$app$month_component_$_iter__30325_$_iter__30339(cljs.core.rest(s__30340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(week,s__30326__$2,temp__5753__auto__,weeks,events))
;
return iter__4622__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,week,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(week))));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["week-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(week),"-month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$month_component_$_iter__30325(cljs.core.rest(s__30326__$2)));
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
var working_days_remaining = exfn.logic.working_days_remaining(events,current_year);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-grid","div.calendar-grid",-884381798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.calendar-year","div.calendar-year",1121808250),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__30349(s__30350){
return (new cljs.core.LazySeq(null,(function (){
var s__30350__$1 = s__30350;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30350__$1);
if(temp__5753__auto__){
var s__30350__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30350__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30350__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30352 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30351 = (0);
while(true){
if((i__30351 < size__4621__auto__)){
var month = cljs.core._nth(c__4620__auto__,i__30351);
cljs.core.chunk_append(b__30352,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)));

var G__30372 = (i__30351 + (1));
i__30351 = G__30372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30352),exfn$app$display_year_$_iter__30349(cljs.core.chunk_rest(s__30350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30352),null);
}
} else {
var month = cljs.core.first(s__30350__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.month_component,current_year,month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["month-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join('')], null)),exfn$app$display_year_$_iter__30349(cljs.core.rest(s__30350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend","div.legend",-315677844),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__30353(s__30354){
return (new cljs.core.LazySeq(null,(function (){
var s__30354__$1 = s__30354;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30354__$1);
if(temp__5753__auto__){
var s__30354__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30354__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30354__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30356 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30355 = (0);
while(true){
if((i__30355 < size__4621__auto__)){
var entry = cljs.core._nth(c__4620__auto__,i__30355);
cljs.core.chunk_append(b__30356,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry)),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))].join(''):"none")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)));

var G__30373 = (i__30355 + (1));
i__30355 = G__30373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30356),exfn$app$display_year_$_iter__30353(cljs.core.chunk_rest(s__30354__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30356),null);
}
} else {
var entry = cljs.core.first(s__30354__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-entry","div.legend-entry",1313161040),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.legend-key","div.legend-key",2050112898),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.first(cljs.core.val(entry)),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))?["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.val(entry),(2)))].join(''):"none")], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.capitalize(cljs.core.key(entry))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key(entry)], null)),exfn$app$display_year_$_iter__30353(cljs.core.rest(s__30354__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(exfn.app.event_type_legend);
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events","div.current-months-events",1095185758),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(module$node_modules$moment$moment().format("MMMM"))," events"].join('')], null),(function (){var iter__4622__auto__ = (function exfn$app$display_year_$_iter__30357(s__30358){
return (new cljs.core.LazySeq(null,(function (){
var s__30358__$1 = s__30358;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__30358__$1);
if(temp__5753__auto__){
var s__30358__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30358__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__30358__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__30360 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__30359 = (0);
while(true){
if((i__30359 < size__4621__auto__)){
var event = cljs.core._nth(c__4620__auto__,i__30359);
cljs.core.chunk_append(b__30360,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30362 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__30362) : exfn.logic.day_of_week_short.call(null,G__30362));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)));

var G__30374 = (i__30359 + (1));
i__30359 = G__30374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30360),exfn$app$display_year_$_iter__30357(cljs.core.chunk_rest(s__30358__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30360),null);
}
} else {
var event = cljs.core.first(s__30358__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry","div.current-months-events-entry",-2059148065),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-date","div.current-months-events-entry-date",-651117948),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__30364 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).day();
return (exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1 ? exfn.logic.day_of_week_short.cljs$core$IFn$_invoke$arity$1(G__30364) : exfn.logic.day_of_week_short.call(null,G__30364));
})())," ",exfn.logic.pad_zero(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(event).format("D"))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.current-months-events-entry-name","div.current-months-events-entry-name",-1983790978),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(event)], null)),exfn$app$display_year_$_iter__30357(cljs.core.rest(s__30358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(curent_month_events);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(10),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Working days remaining: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(working_days_remaining)].join('')], null)], null)], null);
});
exfn.app.format_date = (function exfn$app$format_date(date,current_view){
var G__30365 = current_view;
var G__30365__$1 = (((G__30365 instanceof cljs.core.Keyword))?G__30365.fqn:null);
switch (G__30365__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30365__$1)].join('')));

}
});
exfn.app.get_chevron_visibilty = (function exfn$app$get_chevron_visibilty(current_view){
var G__30366 = current_view;
var G__30366__$1 = (((G__30366 instanceof cljs.core.Keyword))?G__30366.fqn:null);
switch (G__30366__$1) {
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
