goog.provide('exfn.total_income.logic');
exfn.total_income.logic.map_reduce = (function exfn$total_income$logic$map_reduce(m,f,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(r,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,m));
});
exfn.total_income.logic.total_gross = (function exfn$total_income$logic$total_gross(incomes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
var or__5045__auto__ = new cljs.core.Keyword(null,"gross","gross",-1024265890).cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(i);
}
}),incomes));
});
exfn.total_income.logic.totals = (function exfn$total_income$logic$totals(incomes){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"gross","gross",-1024265890),exfn.total_income.logic.total_gross(incomes),new cljs.core.Keyword(null,"tax","tax",-226525810),exfn.total_income.logic.map_reduce(incomes,new cljs.core.Keyword(null,"tax","tax",-226525810),cljs.core._PLUS_),new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169),exfn.total_income.logic.map_reduce(incomes,new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169),cljs.core._PLUS_),new cljs.core.Keyword(null,"student-loan","student-loan",1010936014),exfn.total_income.logic.map_reduce(incomes,new cljs.core.Keyword(null,"student-loan","student-loan",1010936014),cljs.core._PLUS_),new cljs.core.Keyword(null,"pension","pension",-2017712809),exfn.total_income.logic.map_reduce(incomes,new cljs.core.Keyword(null,"pension","pension",-2017712809),cljs.core._PLUS_),new cljs.core.Keyword(null,"amount","amount",364489504),exfn.total_income.logic.map_reduce(incomes,new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core._PLUS_)], null);
});
exfn.total_income.logic.missing_salary_deductions = (function exfn$total_income$logic$missing_salary_deductions(incomes){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (i){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(i),(14))) && (cljs.core.not((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"tax","tax",-226525810).cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169).cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = new cljs.core.Keyword(null,"student-loan","student-loan",1010936014).cljs$core$IFn$_invoke$arity$1(i);
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
return new cljs.core.Keyword(null,"pension","pension",-2017712809).cljs$core$IFn$_invoke$arity$1(i);
}
}
}
})())));
}),incomes);
});

//# sourceMappingURL=exfn.total_income.logic.js.map
