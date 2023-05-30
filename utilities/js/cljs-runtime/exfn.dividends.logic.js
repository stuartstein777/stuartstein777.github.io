goog.provide('exfn.dividends.logic');
exfn.dividends.logic.get_currency_symbol = (function exfn$dividends$logic$get_currency_symbol(cur){
var pred__16776 = cljs.core._EQ_;
var expr__16777 = cur;
if(cljs.core.truth_((pred__16776.cljs$core$IFn$_invoke$arity$2 ? pred__16776.cljs$core$IFn$_invoke$arity$2("USD",expr__16777) : pred__16776.call(null,"USD",expr__16777)))){
return "$";
} else {
if(cljs.core.truth_((pred__16776.cljs$core$IFn$_invoke$arity$2 ? pred__16776.cljs$core$IFn$_invoke$arity$2("GBP",expr__16777) : pred__16776.call(null,"GBP",expr__16777)))){
return "\u00A3";
} else {
if(cljs.core.truth_((pred__16776.cljs$core$IFn$_invoke$arity$2 ? pred__16776.cljs$core$IFn$_invoke$arity$2("EUR",expr__16777) : pred__16776.call(null,"EUR",expr__16777)))){
return "\u20AC";
} else {
return "?";
}
}
}
});
exfn.dividends.logic.format_date_for_query = (function exfn$dividends$logic$format_date_for_query(year,month,day){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(year),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((month < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''):month)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((day < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''):day))].join('');
});
exfn.dividends.logic.get_query_date = (function exfn$dividends$logic$get_query_date(date){
return exfn.dividends.logic.format_date_for_query(date.getFullYear(),(date.getMonth() + (1)),date.getDate());
});
exfn.dividends.logic.format_date_for_request = (function exfn$dividends$logic$format_date_for_request(year,month,day){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((day < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''):day)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((month < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''):month)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
exfn.dividends.logic.get_request_date = (function exfn$dividends$logic$get_request_date(date){
return exfn.dividends.logic.format_date_for_request(date.getFullYear(),(date.getMonth() + (1)),date.getDate());
});
exfn.dividends.logic.total_amount = (function exfn$dividends$logic$total_amount(dividends){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),dividends));
});
exfn.dividends.logic.total_amount_gbp = (function exfn$dividends$logic$total_amount_gbp(dividends){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007),dividends));
});

//# sourceMappingURL=exfn.dividends.logic.js.map
