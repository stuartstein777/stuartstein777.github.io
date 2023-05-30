goog.provide('exfn.reports.months_summary.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process","process",1643192938),(function (db,p__17212){
var vec__17213 = p__17212;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(0),null);
var summary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17213,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months-summary","months-summary",603562283),new cljs.core.Keyword(null,"grid","grid",402978600)], null),summary),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
exfn.reports.months_summary.events.api = (function exfn$reports$months_summary$events$api(year){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/months/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process","process",1643192938)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});

//# sourceMappingURL=exfn.reports.months_summary.events.js.map
