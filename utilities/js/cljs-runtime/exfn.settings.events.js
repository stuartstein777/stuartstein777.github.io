goog.provide('exfn.settings.events');
exfn.settings.events.settings_api = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Settings"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-settings","process-settings",214098607)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-settings","update-settings",-1455665780),(function (db,p__17040){
var vec__17041 = p__17040;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17041,(0),null);
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17041,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.Keyword(null,"settings","settings",1556144875),settings);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-settings","save-settings",-951707489),(function (p__17052,p__17053){
var map__17055 = p__17052;
var map__17055__$1 = cljs.core.__destructure_map(map__17055);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17055__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17056 = p__17053;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(0),null);
var settings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17056,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Settings"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),settings,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-settings","update-settings",-1455665780),settings], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-settings","process-settings",214098607),(function (db,p__17070){
var vec__17072 = p__17070;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072,(0),null);
var map__17075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17072,(1),null);
var map__17075__$1 = cljs.core.__destructure_map(map__17075);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17075__$1,new cljs.core.Keyword(null,"year","year",335913393));
var account_types = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17075__$1,new cljs.core.Keyword(null,"account-types","account-types",1393577075));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"year","year",335913393)], null),year),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"new-account-type","new-account-type",-1166831485)], null),""),new cljs.core.Keyword(null,"account-types","account-types",1393577075),account_types),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-settings","get-settings",-889888825),(function (p__17082,_){
var map__17089 = p__17082;
var map__17089__$1 = cljs.core.__destructure_map(map__17089);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17089__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.settings.events.settings_api], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-account-type","add-account-type",-1737340712),(function (p__17102,_){
var map__17103 = p__17102;
var map__17103__$1 = cljs.core.__destructure_map(map__17103);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17103__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/AccountTypes"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"account-type","account-type",609792564),new cljs.core.Keyword(null,"new-account-type","new-account-type",-1166831485).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-settings","get-settings",-889888825)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-account-type","delete-account-type",-1146827121),(function (p__17110,p__17111){
var map__17112 = p__17110;
var map__17112__$1 = cljs.core.__destructure_map(map__17112);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17112__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17113 = p__17111;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17113,(0),null);
var account_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17113,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/AccountTypes"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),account_type,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-settings","get-settings",-889888825)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-account-type-input","update-account-type-input",417666048),(function (db,p__17124){
var vec__17126 = p__17124;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126,(0),null);
var account_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17126,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"new-account-type","new-account-type",-1166831485)], null),account_type);
}));

//# sourceMappingURL=exfn.settings.events.js.map
