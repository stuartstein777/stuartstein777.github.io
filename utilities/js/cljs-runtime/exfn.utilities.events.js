goog.provide('exfn.utilities.events');
exfn.utilities.events.map_dates = (function exfn$utilities$events$map_dates(utilities){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (u){
var vec__17220 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,clojure.string.split.cljs$core$IFn$_invoke$arity$2((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"date","date",-1463434462)) : u.call(null,new cljs.core.Keyword(null,"date","date",-1463434462))),/\-/));
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(0),null);
var month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220,(2),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [month,day], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"electricity","electricity",-196078075),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cost","cost",-1094861735),(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038)) : u.call(null,new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038))),new cljs.core.Keyword(null,"usage","usage",-1583752910),(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461)) : u.call(null,new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461)))], null),new cljs.core.Keyword(null,"gas","gas",-139961463),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cost","cost",-1094861735),(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688)) : u.call(null,new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688))),new cljs.core.Keyword(null,"usage","usage",-1583752910),(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253)) : u.call(null,new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253)))], null)], null)]);
}),utilities));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-utilities","process-utilities",1462277543),(function (db,p__17223){
var vec__17224 = p__17223;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17224,(0),null);
var utilities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17224,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"erorr","erorr",-173294492),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"grid","grid",402978600)], null),exfn.utilities.events.map_dates(utilities)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688)], null),""),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253)], null),""),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));
exfn.utilities.events.api = (function exfn$utilities$events$api(year){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/utilities/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-utilities","process-utilities",1462277543)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-date","utilities/set-date",2013001457),(function (db,p__17228){
var vec__17229 = p__17228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17229,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17229,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-gas-electricity-selector","utilities/set-gas-electricity-selector",-1358892726),(function (db,p__17239){
var vec__17240 = p__17239;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17240,(0),null);
var selector = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17240,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-energy","selected-energy",1528418928)], null),selector);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-cost-or-kwh","utilities/set-cost-or-kwh",-1223835061),(function (db,p__17243){
var vec__17244 = p__17243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17244,(0),null);
var selected = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17244,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"cost-kwh-selector","cost-kwh-selector",952323884)], null),selected);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-electricity-cost","utilities/set-electricity-cost",-1598980097),(function (db,p__17249){
var vec__17251 = p__17249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17251,(0),null);
var cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17251,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"electricity-cost","electricity-cost",-986754038)], null),cost);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-electricity-usage","utilities/set-electricity-usage",715545960),(function (db,p__17267){
var vec__17268 = p__17267;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17268,(0),null);
var usage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17268,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"electricity-usage","electricity-usage",1478081461)], null),usage);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-gas-usage","utilities/set-gas-usage",-624343095),(function (db,p__17271){
var vec__17272 = p__17271;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17272,(0),null);
var usage = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17272,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gas-usage","gas-usage",-2091485253)], null),usage);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","set-gas-cost","utilities/set-gas-cost",1895777458),(function (db,p__17275){
var vec__17276 = p__17275;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276,(0),null);
var cost = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17276,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"utilities","utilities",1849533213),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"gas-cost","gas-cost",511960688)], null),cost);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","reload","utilities/reload",1770116633),(function (p__17279,_){
var map__17280 = p__17279;
var map__17280__$1 = cljs.core.__destructure_map(map__17280);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17280__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.utilities.events.api(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("utilities","save-reading","utilities/save-reading",910796097),(function (p__17285,_){
var map__17286 = p__17285;
var map__17286__$1 = cljs.core.__destructure_map(map__17286);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17286__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Utilities"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(),new cljs.core.Keyword(null,"params","params",710516235),exfn.utilities.logic.build_reading(db),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("utilities","reload","utilities/reload",1770116633)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));

//# sourceMappingURL=exfn.utilities.events.js.map
