goog.provide('exfn.investing.logic');
exfn.investing.logic.get_closing_p_and_l_$ = (function exfn$investing$logic$get_closing_p_and_l_$(units,buy_price,sell_price){
return ((sell_price - buy_price) * units);
});
exfn.investing.logic.get_closing_p_and_l__PERCENT_ = (function exfn$investing$logic$get_closing_p_and_l__PERCENT_(buy_price,sell_price){
return ((100) * ((sell_price - buy_price) / buy_price));
});
exfn.investing.logic.get_total_closed_profits = (function exfn$investing$logic$get_total_closed_profits(investments){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__19383){
var map__19384 = p__19383;
var map__19384__$1 = cljs.core.__destructure_map(map__19384);
var units = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19384__$1,new cljs.core.Keyword(null,"units","units",-533089095));
var buy_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19384__$1,new cljs.core.Keyword(null,"buy-price","buy-price",1121591789));
var sell_price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19384__$1,new cljs.core.Keyword(null,"sell-price","sell-price",1375427842));
return (acc + exfn.investing.logic.get_closing_p_and_l_$(units,buy_price,sell_price));
}),(0),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19382_SHARP_){
return (new cljs.core.Keyword(null,"sell-date","sell-date",1307709086).cljs$core$IFn$_invoke$arity$1(p1__19382_SHARP_) == null);
}),investments));
});

//# sourceMappingURL=exfn.investing.logic.js.map
