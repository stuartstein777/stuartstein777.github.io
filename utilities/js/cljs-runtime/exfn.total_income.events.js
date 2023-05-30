goog.provide('exfn.total_income.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-total-income","process-total-income",188576012),(function (db,p__17044){
var vec__17045 = p__17044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17045,(0),null);
var incomes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17045,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"incomes","incomes",1312870880),new cljs.core.Keyword(null,"grid","grid",402978600)], null),incomes),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
exfn.total_income.events.total_income_api = (function exfn$total_income$events$total_income_api(year){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/total-income/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-total-income","process-total-income",188576012)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-account-update","process-account-update",-1834841732),(function (p__17071,_){
var map__17076 = p__17071;
var map__17076__$1 = cljs.core.__destructure_map(map__17076);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17076__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.total_income.events.total_income_api(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-missing-salary-deductions","save-missing-salary-deductions",-1739967158),(function (p__17080,p__17081){
var map__17085 = p__17080;
var map__17085__$1 = cljs.core.__destructure_map(map__17085);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17085__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17086 = p__17081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(0),null);
var deductions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17086,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/TotalIncome"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"params","params",710516235),deductions,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-account-update","process-account-update",-1834841732)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));

//# sourceMappingURL=exfn.total_income.events.js.map
