goog.provide('exfn.investing.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-investments","process-investments",336109110),(function (p__17206,p__17207){
var map__17208 = p__17206;
var map__17208__$1 = cljs.core.__destructure_map(map__17208);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17208__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17209 = p__17207;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(0),null);
var investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17209,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"investments","investments",-1613851310)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"grid","grid",402978600)], null),investments),new cljs.core.Keyword(null,"error","error",-978969032),null)], null);
}));
exfn.investing.events.investments_api = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/investment/"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-investments","process-investments",336109110)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-close-investment","show-close-investment",-1557115510),(function (db,p__17232){
var vec__17233 = p__17232;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(0),null);
var vec__17236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17233,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17236,(0),null);
var price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17236,(1),null);
var investments = new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"investments","investments",-1613851310).cljs$core$IFn$_invoke$arity$1(db));
var selected_investment = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17227_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__17227_SHARP_));
}),investments));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"closing-investment","closing-investment",85220343)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-investment","selected-investment",1077422358)], null),selected_investment),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"sell-price","sell-price",1375427842)], null),price);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show-open-investment","show-open-investment",321351581),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"opening-investment","opening-investment",-1604897371)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"date","date",-1463434462)], null),(new Date()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel-close-investment","cancel-close-investment",-1941914858),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"investments","investments",-1613851310)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-investment","selected-investment",1077422358)], null),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"sell-price","sell-price",1375427842)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel-open-investment","cancel-open-investment",1229076736),(function (db,_){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"investments","investments",-1613851310)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"ticker","ticker",214613162)], null),""),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"price","price",22129180)], null),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"units","units",-533089095)], null),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"date","date",-1463434462)], null),(new Date()));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"investments-ui-sell-price","investments-ui-sell-price",296008353),(function (db,p__17259){
var vec__17260 = p__17259;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(0),null);
var price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17260,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"sell-price","sell-price",1375427842)], null),price);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"investments-ui-closing-date","investments-ui-closing-date",1158481690),(function (db,p__17263){
var vec__17264 = p__17263;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17264,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17264,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"closing-date","closing-date",2117402251)], null),date);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("investments","opening-date","investments/opening-date",-1701930317),(function (db,p__17287){
var vec__17288 = p__17287;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17288,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17288,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("investments","opening-ticker","investments/opening-ticker",1633051238),(function (db,p__17291){
var vec__17292 = p__17291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(0),null);
var ticker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"ticker","ticker",214613162)], null),ticker);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("investments","opening-units","investments/opening-units",-480694757),(function (db,p__17295){
var vec__17296 = p__17295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(0),null);
var units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"units","units",-533089095)], null),units);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("investments","opening-price","investments/opening-price",1202376690),(function (db,p__17299){
var vec__17300 = p__17299;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17300,(0),null);
var price = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17300,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"price","price",22129180)], null),price);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("investments","type","investments/type",2043287948),(function (db,p__17303){
var vec__17304 = p__17303;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17304,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17304,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"opening","opening",450993708),new cljs.core.Keyword(null,"type","type",1174270348)], null),type);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reload","reload",863702807),(function (p__17307,_){
var map__17312 = p__17307;
var map__17312__$1 = cljs.core.__destructure_map(map__17312);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17312__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"displaying","displaying",1205662025)], null),new cljs.core.Keyword(null,"investments","investments",-1613851310)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-investment","selected-investment",1077422358)], null),null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investments","investments",-1613851310),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"closing","closing",-1862893890),new cljs.core.Keyword(null,"sell-price","sell-price",1375427842)], null),(0)),new cljs.core.Keyword(null,"x-http-xhrio","x-http-xhrio",2008096532),exfn.investing.events.investments_api], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-investment","close-investment",690338912),(function (p__17315,p__17316){
var map__17317 = p__17315;
var map__17317__$1 = cljs.core.__destructure_map(map__17317);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17317__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17318 = p__17316;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(0),null);
var investment_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17318,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"x-http-xhrio","x-http-xhrio",2008096532),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/investment/close"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),investment_details,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload","reload",863702807)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"open-investment","open-investment",-1281796714),(function (p__17323,p__17324){
var map__17326 = p__17323;
var map__17326__$1 = cljs.core.__destructure_map(map__17326);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17327 = p__17324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17327,(0),null);
var investment_details = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17327,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"x-http-xhrio","x-http-xhrio",2008096532),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/investment/open"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),investment_details,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload","reload",863702807)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));

//# sourceMappingURL=exfn.investing.events.js.map
