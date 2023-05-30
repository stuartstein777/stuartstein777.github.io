goog.provide('exfn.reports.month_by_month.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-report","process-report",1518774288),(function (db,p__17216){
var vec__17217 = p__17216;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17217,(0),null);
var report = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17217,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"monthly-summaries","monthly-summaries",370815406),new cljs.core.Keyword(null,"annual-report","annual-report",-349121949)], null),report),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
exfn.reports.month_by_month.events.monthly_api = (function exfn$reports$month_by_month$events$monthly_api(year){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Reports/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-report","process-report",1518774288)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});

//# sourceMappingURL=exfn.reports.month_by_month.events.js.map
