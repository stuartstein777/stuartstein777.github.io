goog.provide('exfn.helpers');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('clojure.set');
goog.require('cljs_time.predicates');
goog.require('clojure.data.avl');
exfn.helpers.is_leap_year = (function exfn$helpers$is_leap_year(year){
return (((cljs.core.mod(year,(400)) === (0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(year,(100)))) && ((cljs.core.mod(year,(4)) === (0))))));
});
exfn.helpers.get_days_of_month = (function exfn$helpers$get_days_of_month(month){
var year = cljs_time.core.year(cljs_time.core.now());
var pred__34506 = cljs.core._EQ_;
var expr__34507 = month;
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((1),expr__34507) : pred__34506.call(null,(1),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((2),expr__34507) : pred__34506.call(null,(2),expr__34507)))){
if(exfn.helpers.is_leap_year(year)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(30));
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29));
}
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((3),expr__34507) : pred__34506.call(null,(3),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((4),expr__34507) : pred__34506.call(null,(4),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((5),expr__34507) : pred__34506.call(null,(5),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((6),expr__34507) : pred__34506.call(null,(6),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((7),expr__34507) : pred__34506.call(null,(7),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((8),expr__34507) : pred__34506.call(null,(8),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((9),expr__34507) : pred__34506.call(null,(9),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((10),expr__34507) : pred__34506.call(null,(10),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((11),expr__34507) : pred__34506.call(null,(11),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__34506.cljs$core$IFn$_invoke$arity$2 ? pred__34506.cljs$core$IFn$_invoke$arity$2((12),expr__34507) : pred__34506.call(null,(12),expr__34507)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}
}
}
}
}
}
}
}
}
}
});
exfn.helpers.get_days_keyed_on_months = (function exfn$helpers$get_days_keyed_on_months(months){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function exfn$helpers$get_days_keyed_on_months_$_iter__34509(s__34510){
return (new cljs.core.LazySeq(null,(function (){
var s__34510__$1 = s__34510;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34510__$1);
if(temp__5735__auto__){
var s__34510__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34510__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34510__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34512 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34511 = (0);
while(true){
if((i__34511 < size__4528__auto__)){
var vec__34513 = cljs.core._nth(c__4527__auto__,i__34511);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,(1),null);
cljs.core.chunk_append(b__34512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day","day",-274800446),days)], null));

var G__34540 = (i__34511 + (1));
i__34511 = G__34540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),exfn$helpers$get_days_keyed_on_months_$_iter__34509(cljs.core.chunk_rest(s__34510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),null);
}
} else {
var vec__34516 = cljs.core.first(s__34510__$2);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34516,(0),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34516,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day","day",-274800446),days)], null),exfn$helpers$get_days_keyed_on_months_$_iter__34509(cljs.core.rest(s__34510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(months);
})());
});
exfn.helpers.count_all_values = (function exfn$helpers$count_all_values(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(m)));
});
exfn.helpers.working_days = (function exfn$helpers$working_days(){
var start_date = cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((2023),(1),(1));
return exfn.helpers.get_days_keyed_on_months(cljs.core.group_by(new cljs.core.Keyword(null,"month","month",-1960248533),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (day){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"day","day",-274800446),cljs_time.core.day(day),new cljs.core.Keyword(null,"month","month",-1960248533),cljs_time.core.month(day)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (day){
return cljs_time.predicates.weekday_QMARK_(day);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (day){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start_date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(day));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(366)))))));
});
exfn.helpers.date_passed_QMARK_ = (function exfn$helpers$date_passed_QMARK_(day,month){
return (cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((2023),month,day) <= cljs_time.core.now());
});
exfn.helpers.days_left = (function exfn$helpers$days_left(calendar,now_day,now_month){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function exfn$helpers$days_left_$_iter__34519(s__34520){
return (new cljs.core.LazySeq(null,(function (){
var s__34520__$1 = s__34520;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34520__$1);
if(temp__5735__auto__){
var s__34520__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34520__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34520__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34522 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34521 = (0);
while(true){
if((i__34521 < size__4528__auto__)){
var vec__34523 = cljs.core._nth(c__4527__auto__,i__34521);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(1),null);
if((k >= now_month)){
cljs.core.chunk_append(b__34522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,now_month))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__34521,s__34520__$1,vec__34523,k,v,c__4527__auto__,size__4528__auto__,b__34522,s__34520__$2,temp__5735__auto__){
return (function (x){
return (x <= now_day);
});})(i__34521,s__34520__$1,vec__34523,k,v,c__4527__auto__,size__4528__auto__,b__34522,s__34520__$2,temp__5735__auto__))
,v):v)], null));

var G__34545 = (i__34521 + (1));
i__34521 = G__34545;
continue;
} else {
var G__34546 = (i__34521 + (1));
i__34521 = G__34546;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34522),exfn$helpers$days_left_$_iter__34519(cljs.core.chunk_rest(s__34520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34522),null);
}
} else {
var vec__34526 = cljs.core.first(s__34520__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34526,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34526,(1),null);
if((k >= now_month)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,now_month))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (s__34520__$1,vec__34526,k,v,s__34520__$2,temp__5735__auto__){
return (function (x){
return (x <= now_day);
});})(s__34520__$1,vec__34526,k,v,s__34520__$2,temp__5735__auto__))
,v):v)], null),exfn$helpers$days_left_$_iter__34519(cljs.core.rest(s__34520__$2)));
} else {
var G__34551 = cljs.core.rest(s__34520__$2);
s__34520__$1 = G__34551;
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
return iter__4529__auto__(calendar);
})());
});
exfn.helpers.holidays_passed = (function exfn$helpers$holidays_passed(calendar,now_day,now_month){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"duration","duration",1444101068),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vals,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function exfn$helpers$holidays_passed_$_iter__34529(s__34530){
return (new cljs.core.LazySeq(null,(function (){
var s__34530__$1 = s__34530;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34530__$1);
if(temp__5735__auto__){
var s__34530__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34530__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34530__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34532 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34531 = (0);
while(true){
if((i__34531 < size__4528__auto__)){
var vec__34533 = cljs.core._nth(c__4527__auto__,i__34531);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34533,(1),null);
if((k <= now_month)){
cljs.core.chunk_append(b__34532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,now_month))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__34531,s__34530__$1,vec__34533,k,v,c__4527__auto__,size__4528__auto__,b__34532,s__34530__$2,temp__5735__auto__){
return (function (x){
return (x > now_day);
});})(i__34531,s__34530__$1,vec__34533,k,v,c__4527__auto__,size__4528__auto__,b__34532,s__34530__$2,temp__5735__auto__))
,v):v)], null));

var G__34556 = (i__34531 + (1));
i__34531 = G__34556;
continue;
} else {
var G__34557 = (i__34531 + (1));
i__34531 = G__34557;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34532),exfn$helpers$holidays_passed_$_iter__34529(cljs.core.chunk_rest(s__34530__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34532),null);
}
} else {
var vec__34536 = cljs.core.first(s__34530__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(1),null);
if((k <= now_month)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,now_month))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (s__34530__$1,vec__34536,k,v,s__34530__$2,temp__5735__auto__){
return (function (x){
return (x > now_day);
});})(s__34530__$1,vec__34536,k,v,s__34530__$2,temp__5735__auto__))
,v):v)], null),exfn$helpers$holidays_passed_$_iter__34529(cljs.core.rest(s__34530__$2)));
} else {
var G__34558 = cljs.core.rest(s__34530__$2);
s__34530__$1 = G__34558;
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
return iter__4529__auto__(calendar);
})()))], 0))));
});
exfn.helpers.total_working_days_left = (function exfn$helpers$total_working_days_left(calendar){
var day = cljs_time.core.day(cljs_time.core.now());
var month = cljs_time.core.month(cljs_time.core.now());
return exfn.helpers.count_all_values(exfn.helpers.days_left(calendar,day,month));
});
exfn.helpers.used_holidays = (function exfn$helpers$used_holidays(holidays){
var day = cljs_time.core.day(cljs_time.core.now());
var month = cljs_time.core.month(cljs_time.core.now());
return exfn.helpers.holidays_passed(holidays,day,month);
});
exfn.helpers.public_holidays_remaining = (function exfn$helpers$public_holidays_remaining(public_holidays){
var day = cljs_time.core.day(cljs_time.core.now());
var month = cljs_time.core.month(cljs_time.core.now());
return exfn.helpers.count_all_values(exfn.helpers.days_left(public_holidays,day,month));
});
exfn.helpers.month__GT_str = (function exfn$helpers$month__GT_str(month){
var fexpr__34539 = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["July","January","April","June","March","December","February","November","September","May","October","August"]);
return (fexpr__34539.cljs$core$IFn$_invoke$arity$1 ? fexpr__34539.cljs$core$IFn$_invoke$arity$1(month) : fexpr__34539.call(null,month));
});
exfn.helpers.working_days_in_holidays = (function exfn$helpers$working_days_in_holidays(from_day,from_month,to_day,to_month){
var calendar = exfn.helpers.working_days();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_month,to_month)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([from_month,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set((calendar.cljs$core$IFn$_invoke$arity$1 ? calendar.cljs$core$IFn$_invoke$arity$1(from_month) : calendar.call(null,from_month))),cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(from_day,(to_day + (1)))))]);
} else {
var last_day_in_from_mth = cljs.core.last(exfn.helpers.get_days_of_month(from_month));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([from_month,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2(from_day,(last_day_in_from_mth + (1)))),cljs.core.set((calendar.cljs$core$IFn$_invoke$arity$1 ? calendar.cljs$core$IFn$_invoke$arity$1(from_month) : calendar.call(null,from_month)))),to_month,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(to_day + (1)))),cljs.core.set((calendar.cljs$core$IFn$_invoke$arity$1 ? calendar.cljs$core$IFn$_invoke$arity$1(to_month) : calendar.call(null,to_month))))]);

}
});

//# sourceMappingURL=exfn.helpers.js.map
