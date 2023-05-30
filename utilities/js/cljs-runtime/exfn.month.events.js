goog.provide('exfn.month.events');
exfn.month.events.get_accounts = (function exfn$month$events$get_accounts(data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : d.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"name","name",1843675177),(d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177)) : d.call(null,new cljs.core.Keyword(null,"name","name",1843675177)))], null);
}),data);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-month","process-month",-1859305898),(function (db,p__17062){
var vec__17063 = p__17062;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17063,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.Keyword(null,"month","month",-1960248533),data),new cljs.core.Keyword(null,"accounts","accounts",-935308676),exfn.month.events.get_accounts(data)),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
exfn.month.events.month_api = (function exfn$month$events$month_api(year,month){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Month"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-month","process-month",-1859305898)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-current-month","load-current-month",1642780606),(function (p__17078,_){
var map__17079 = p__17078;
var map__17079__$1 = cljs.core.__destructure_map(map__17079);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17079__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.month.events.month_api(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db)),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-month","current-month",229356226)) : db.call(null,new cljs.core.Keyword(null,"current-month","current-month",229356226))))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-transaction","delete-transaction",1458228631),(function (p__17083,p__17084){
var map__17090 = p__17083;
var map__17090__$1 = cljs.core.__destructure_map(map__17090);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17090__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17091 = p__17084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(0),null);
var transactionId = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17091,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Transaction?transactionId=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(transactionId)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transactionId","transactionId",-1563380247),transactionId], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-month","set-current-month",-488360925),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-month","current-month",229356226)) : db.call(null,new cljs.core.Keyword(null,"current-month","current-month",229356226)))], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-transaction","save-transaction",8842640),(function (p__17104,p__17105){
var map__17106 = p__17104;
var map__17106__$1 = cljs.core.__destructure_map(map__17106);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17106__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17107 = p__17105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(0),null);
var transaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17107,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Transaction"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),transaction,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-month","set-current-month",-488360925),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-month","current-month",229356226)) : db.call(null,new cljs.core.Keyword(null,"current-month","current-month",229356226)))], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-editor","toggle-editor",-946211849),(function (db,p__17125){
var vec__17129 = p__17125;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17129,(0),null);
var vec__17132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17129,(1),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(0),null);
var account_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-editors","expanded-editors",-1082102702),account_id], null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-editors","expanded-editors",-1082102702)], null),(function (xs){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.PersistentHashSet.createAsIfByAssoc([account_id]));
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-editors","expanded-editors",-1082102702)], null),(function (xs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,account_id);
}));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-account","toggle-account",-1415459981),(function (db,p__17149){
var vec__17150 = p__17149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17150,(0),null);
var vec__17153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17150,(1),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(0),null);
var account_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-accounts","expanded-accounts",1812809537),account_id], null)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-accounts","expanded-accounts",1812809537)], null),(function (xs){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.PersistentHashSet.createAsIfByAssoc([account_id]));
}));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ui-settings","ui-settings",-256296358),new cljs.core.Keyword(null,"months","months",-45571637),month,new cljs.core.Keyword(null,"expanded-accounts","expanded-accounts",1812809537)], null),(function (xs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(xs,account_id);
}));
}
}));

//# sourceMappingURL=exfn.month.events.js.map
