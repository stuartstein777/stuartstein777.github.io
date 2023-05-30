goog.provide('exfn.accounts.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-accounts","process-accounts",38059885),(function (db,p__17188){
var vec__17189 = p__17188;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17189,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17189,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"account-summaries","account-summaries",-1808815201),(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"accounts","accounts",-935308676)) : data.call(null,new cljs.core.Keyword(null,"accounts","accounts",-935308676)))),new cljs.core.Keyword(null,"account-types","account-types",1393577075),(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"account-types","account-types",1393577075)) : data.call(null,new cljs.core.Keyword(null,"account-types","account-types",1393577075))));
}));
exfn.accounts.events.accounts_api = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Accounts/all"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-accounts","process-accounts",38059885)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-account-update","process-account-update",-1834841732),(function (p__17192,_){
var map__17193 = p__17192;
var map__17193__$1 = cljs.core.__destructure_map(map__17193);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17193__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),(exfn.accounts.events.accounts_api.cljs$core$IFn$_invoke$arity$0 ? exfn.accounts.events.accounts_api.cljs$core$IFn$_invoke$arity$0() : exfn.accounts.events.accounts_api.call(null))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-account","update-account",1908883912),(function (p__17194,p__17195){
var map__17196 = p__17194;
var map__17196__$1 = cljs.core.__destructure_map(map__17196);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17196__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17197 = p__17195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17197,(0),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17197,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Accounts"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"params","params",710516235),account,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-account-update","process-account-update",-1834841732)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-account","add-account",-987257438),(function (p__17200,p__17201){
var map__17202 = p__17200;
var map__17202__$1 = cljs.core.__destructure_map(map__17202);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17202__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17203 = p__17201;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(0),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Accounts"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"params","params",710516235),account,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-account-update","process-account-update",-1834841732)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));

//# sourceMappingURL=exfn.accounts.events.js.map
