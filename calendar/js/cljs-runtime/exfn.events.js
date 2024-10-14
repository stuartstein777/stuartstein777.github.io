goog.provide('exfn.events');
var module$node_modules$moment$moment=shadow.js.require("module$node_modules$moment$moment", {});
exfn.events.parse_event = (function exfn$events$parse_event(event){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Id","Id",-2148601)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Name","Name",-131211369)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Description","Description",-679315496)),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Type","Type",-1483634215)),new cljs.core.Keyword(null,"location","location",1815599388),cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Location","Location",-1926306596)),new cljs.core.Keyword(null,"date","date",-1463434462),module$node_modules$moment$moment(cljs.core.get.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"Date","Date",-693674507)))], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-events","process-events",35942262),(function (db,p__29770){
var vec__29771 = p__29770;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29771,(0),null);
var events = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29771,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([events], 0));

var processed_events = cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.events.parse_event,events);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"calendar-events","calendar-events",798664741),processed_events);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (p__29774,p__29775){
var map__29776 = p__29774;
var map__29776__$1 = cljs.core.__destructure_map(map__29776);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29776__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29777 = p__29775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29777,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29777,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),module$node_modules$moment$moment().startOf("month"),new cljs.core.Keyword(null,"current-view","current-view",-1037279042),new cljs.core.Keyword(null,"month","month",-1960248533)], null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://stuartstein777.github.io/calendar/events.json",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-events","process-events",35942262)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-month","next-month",1823833970),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__29780_SHARP_){
return p1__29780_SHARP_.clone().add((1),"month");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev-month","prev-month",1275314015),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__29781_SHARP_){
return p1__29781_SHARP_.clone().subtract((1),"month");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-year","next-year",-1541587170),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__29782_SHARP_){
return p1__29782_SHARP_.clone().add((1),"year");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev-year","prev-year",707761911),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-date","current-date",-1728476105),(function (p1__29783_SHARP_){
return p1__29783_SHARP_.clone().subtract((1),"year");
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-view","update-view",355575066),(function (db,p__29784){
var vec__29785 = p__29784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(0),null);
var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-view","current-view",-1037279042),view);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-selected-date","set-selected-date",-1002312344),(function (db,p__29788){
var vec__29789 = p__29788;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),date);
}));

//# sourceMappingURL=exfn.events.js.map
