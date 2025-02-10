goog.provide('exfn.logic');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.logic.events_for_month = (function exfn$logic$events_for_month(events,month_number,year){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Holiday",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__29471_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29470_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month_number,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29470_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462)).month())) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(year,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29470_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462)).year())));
}),events));
});
exfn.logic.events_for_day = (function exfn$logic$events_for_day(events,day){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29472_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__29472_SHARP_).isSame(day,"day");
}),events);
});
exfn.logic.day_of_week_short = new cljs.core.PersistentArrayMap(null, 7, [(1),"MON",(2),"TUE",(3),"WED",(4),"THU",(5),"FRI",(6),"SAT",(0),"SUN"], null);
exfn.logic.events_types_on_date = (function exfn$logic$events_types_on_date(events,date){
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29473_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__29473_SHARP_).isSame(date,"day");
}),events));
return result;
});
exfn.logic.pad_zero = (function exfn$logic$pad_zero(num){
if((num < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(num);
}
});
exfn.logic.build_date = (function exfn$logic$build_date(day,month,year){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month),"-",exfn.logic.pad_zero(day)].join('');
});
exfn.logic.debug = (function exfn$logic$debug(m,x){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,x], 0));

return x;
});
exfn.logic.weekends_between_now_and_eoy = (function exfn$logic$weekends_between_now_and_eoy(now,end_of_year){
var total_days_remaining = (end_of_year.diff(now,"days") + (1));
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),d.day())) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((6),d.day())));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29474_SHARP_){
return module$node_modules$moment$moment(cljs.core.str.cljs$core$IFn$_invoke$arity$1(now.clone().add(p1__29474_SHARP_,"days")));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((total_days_remaining + (1))))));
});
exfn.logic.holidays_for_selected_year = (function exfn$logic$holidays_for_selected_year(events,start_date,end_of_year){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29477_SHARP_){
return (((start_date <= p1__29477_SHARP_)) && ((p1__29477_SHARP_ <= end_of_year)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29476_SHARP_){
return module$node_modules$moment$moment(p1__29476_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29475_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Holiday",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__29475_SHARP_));
}),events)))));
});
exfn.logic.working_days_remaining = (function exfn$logic$working_days_remaining(events,selected_year){
var end_of_year = module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_year),"-12-31"].join(''));
var current_year = module$node_modules$moment$moment().year();
var start_date = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_year,selected_year))?module$node_modules$moment$moment().utc():module$node_modules$moment$moment([cljs.core.str.cljs$core$IFn$_invoke$arity$1(selected_year),"-01-01"].join('')));
var days_remaining_this_year = ((2) + end_of_year.diff(start_date,"days"));
var weekends = exfn.logic.weekends_between_now_and_eoy(start_date,end_of_year);
var holidays_for_selected_year = exfn.logic.holidays_for_selected_year(events,start_date,end_of_year);
if((selected_year < current_year)){
return (0);
} else {
return ((days_remaining_this_year - weekends) - holidays_for_selected_year);
}
});

//# sourceMappingURL=exfn.logic.js.map
