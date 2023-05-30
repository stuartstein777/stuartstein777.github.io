goog.provide('exfn.utilities.logic');
exfn.utilities.logic.build_reading = (function exfn$utilities$logic$build_reading(db){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),exfn.dividends.logic.get_request_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"utilities","utilities",1849533213).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461),new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"utilities","utilities",1849533213).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038),new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"utilities","utilities",1849533213).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688),new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"utilities","utilities",1849533213).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253),new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"utilities","utilities",1849533213).cljs$core$IFn$_invoke$arity$1(db)))], null);
});
exfn.utilities.logic.get_days_for_month = (function exfn$utilities$logic$get_days_for_month(u,month){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__20145){
var vec__20146 = p__20145;
var vec__20149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20146,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20149,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20146,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,month);
}),u));
});
exfn.utilities.logic.debug = (function exfn$utilities$logic$debug(n,d){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,d], 0));

return d;
});
exfn.utilities.logic.get_total = (function exfn$utilities$logic$get_total(data,month,utility,cost_or_kwh){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["******** ",month," *******"], 0));

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,exfn.utilities.logic.debug("cost",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cost_or_kwh,utility),exfn.utilities.logic.debug("days for month",cljs.core.vals(exfn.utilities.logic.get_days_for_month(data,month))))));
});
exfn.utilities.logic.total_for_month = (function exfn$utilities$logic$total_for_month(data,month,utility,cost_or_kwh){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(utility,new cljs.core.Keyword(null,"both","both",-393648840))){
return (exfn.utilities.logic.get_total(data,month,new cljs.core.Keyword(null,"electricity","electricity",-196078075),cost_or_kwh) + exfn.utilities.logic.get_total(data,month,new cljs.core.Keyword(null,"gas","gas",-139961463),cost_or_kwh));
} else {
return exfn.utilities.logic.get_total(data,month,utility,cost_or_kwh);
}
});
exfn.utilities.logic.day_in_month_QMARK_ = (function exfn$utilities$logic$day_in_month_QMARK_(day,month,year){
return (day <= cljs.core.last(exfn.month.logic.get_days_of_month(year,month)));
});
exfn.utilities.logic.get_days = (function exfn$utilities$logic$get_days(u,day){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__20152){
var vec__20153 = p__20152;
var vec__20156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20153,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,day);
}),u));
});

//# sourceMappingURL=exfn.utilities.logic.js.map
