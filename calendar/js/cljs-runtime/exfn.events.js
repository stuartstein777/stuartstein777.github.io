goog.provide('exfn.events');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.events.parse_event = (function exfn$events$parse_event(event){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Id","Id",-2148601)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Name","Name",-131211369)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Description","Description",-679315496)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Type","Type",-1483634215)),new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Location","Location",-1926306596)),new cljs.core.Keyword(null,"date","date",-1463434462),module$node_modules$moment$moment(cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Date","Date",-693674507)))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-events","process-events",35942262),(function (db,p__33528){
var vec__33529 = p__33528;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(0),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33529,(1),null);
var processed_events = cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.events.parse_event,events);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741),processed_events);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (p__33532,p__33533){
var map__33534 = p__33532;
var map__33534__$1 = cljs.core.__destructure_map(map__33534);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33534__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33535 = p__33533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),module$node_modules$moment$moment().startOf("month"),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"month","month",-1960248533)], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://stuartstein777.github.io/calendar/events.json",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-events","process-events",35942262)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-month","next-month",1823833970),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__33538_SHARP_){
return p1__33538_SHARP_.clone().add((1),"month");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__33539_SHARP_){
return p1__33539_SHARP_.clone().subtract((1),"month");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-year","next-year",-1541587170),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__33540_SHARP_){
return p1__33540_SHARP_.clone().add((1),"year");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev-year","prev-year",707761911),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__33541_SHARP_){
return p1__33541_SHARP_.clone().subtract((1),"year");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-view","update-view",355575066),(function (db,p__33542){
var vec__33543 = p__33542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33543,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33543,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),view);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),(function (db,p__33546){
var vec__33547 = p__33546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33547,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),date);
}));

//# sourceMappingURL=exfn.events.js.map
