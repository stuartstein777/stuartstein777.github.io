goog.provide('exfn.dividends.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","date","dividends/date",-204359354),(function (db,p__17054){
var vec__17059 = p__17054;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17059,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17059,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","company","dividends/company",-931089191),(function (db,p__17066){
var vec__17067 = p__17066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17067,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17067,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"company","company",-340475075)], null),c);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","amount","dividends/amount",1965407428),(function (db,p__17077){
var vec__17156 = p__17077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17156,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17156,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"amount","amount",364489504)], null),amount);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","currency","dividends/currency",1798919700),(function (db,p__17159){
var vec__17160 = p__17159;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(0),null);
var currency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"currency","currency",-898327568)], null),currency);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-dividends","process-dividends",2080804054),(function (db,p__17163){
var vec__17164 = p__17163;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17164,(0),null);
var dividends = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17164,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"grid","grid",402978600)], null),dividends),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"company","company",-340475075),"",new cljs.core.Keyword(null,"amount","amount",364489504),"",new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007),"",new cljs.core.Keyword(null,"currency","currency",-898327568),"USD",new cljs.core.Keyword(null,"exchange-rate","exchange-rate",-1868509202),""], null)),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
exfn.dividends.events.dividends_api = (function exfn$dividends$events$dividends_api(year){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/dividends/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-dividends","process-dividends",2080804054)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-exchange-rate","process-exchange-rate",1821608786),(function (db,p__17167){
var vec__17168 = p__17167;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168,(0),null);
var exch_rate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168,(1),null);
var ex_rate = new cljs.core.Keyword(null,"GBP","GBP",-2016775967).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rates","rates",-990130920).cljs$core$IFn$_invoke$arity$1(exch_rate));
var amount = (cljs.core.truth_(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))))?(ex_rate * Number(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))))):(0));
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"exchange-rate","exchange-rate",-1868509202)], null),ex_rate),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007)], null),amount);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends",":get-exchange-rate","dividends/:get-exchange-rate",-54210388),(function (p__17178,p__17179){
var map__17180 = p__17178;
var map__17180__$1 = cljs.core.__destructure_map(map__17180);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17180__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17181 = p__17179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(0),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17181,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["https://openexchangerates.org/api/historical/",exfn.dividends.logic.get_query_date(date),".json?app_id=370ad878565d4f04ae57500c7143ed65&symbols=GBP"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-exchange-rate","process-exchange-rate",1821608786)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","calculate-amount-gbp","dividends/calculate-amount-gbp",283339889),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dividends","dividends",925888197),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007)], null),(new cljs.core.Keyword(null,"exchange-rate","exchange-rate",-1868509202).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))) * new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db)))));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","reload","dividends/reload",345431667),(function (p__17184,_){
var map__17185 = p__17184;
var map__17185__$1 = cljs.core.__destructure_map(map__17185);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17185__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.dividends.events.dividends_api(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db)))], null);
}));
exfn.dividends.events.build_dividend = (function exfn$dividends$events$build_dividend(db){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"date","date",-1463434462),exfn.dividends.logic.get_request_date(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"company","company",-340475075),new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"amount","amount",364489504),new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"exchange-rate","exchange-rate",-1868509202),new cljs.core.Keyword(null,"exchange-rate","exchange-rate",-1868509202).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007),new cljs.core.Keyword(null,"amount-gbp","amount-gbp",1812554007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dividends","dividends",925888197).cljs$core$IFn$_invoke$arity$1(db)))], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("dividends","save-dividend","dividends/save-dividend",662189581),(function (p__17186,_){
var map__17187 = p__17186;
var map__17187__$1 = cljs.core.__destructure_map(map__17187);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17187__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/dividends"].join(''),new cljs.core.Keyword(null,"params","params",710516235),exfn.dividends.events.build_dividend(db),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dividends","reload","dividends/reload",345431667)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));

//# sourceMappingURL=exfn.dividends.events.js.map