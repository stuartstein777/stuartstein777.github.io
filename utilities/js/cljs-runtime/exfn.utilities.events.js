goog.provide('exfn.utilities.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-text-value","set-text-value",-923881883),(function (db,p__15646){
var vec__15647 = p__15646;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15647,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15647,(1),null);
var stats = exfn.utilities.logic.text_stats(text);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("utilities","text-stats","utilities/text-stats",260070479),stats),new cljs.core.Keyword("utilities","text-text","utilities/text-text",1413521024),text);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-csv-value","set-csv-value",686771025),(function (db,p__15650){
var vec__15651 = p__15650;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15651,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("utilities","csv-breakdown","utilities/csv-breakdown",-594106492),exfn.utilities.logic.csv_breakdown(text)),new cljs.core.Keyword("utilities","csv-text","utilities/csv-text",-1546653046),text);
}));

//# sourceMappingURL=exfn.utilities.events.js.map
