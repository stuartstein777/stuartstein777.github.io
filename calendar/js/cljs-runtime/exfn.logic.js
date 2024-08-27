goog.provide('exfn.logic');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.logic.events_for_month = (function exfn$logic$events_for_month(events,month_number){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__32050_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Holiday",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__32050_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32049_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month_number,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__32049_SHARP_,new cljs.core.Keyword(null,"date","date",-1463434462)).month());
}),events));
});
exfn.logic.events_for_day = (function exfn$logic$events_for_day(events,day){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32051_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__32051_SHARP_).isSame(day,"day");
}),events);
});
exfn.logic.day_of_week_short = new cljs.core.PersistentArrayMap(null, 7, [(1),"MON",(2),"TUE",(3),"WED",(4),"THU",(5),"FRI",(6),"SAT",(0),"SUN"], null);
exfn.logic.events_types_on_date = (function exfn$logic$events_types_on_date(events,date){
var result = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__32052_SHARP_){
return new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(p1__32052_SHARP_).isSame(date,"day");
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

//# sourceMappingURL=exfn.logic.js.map
