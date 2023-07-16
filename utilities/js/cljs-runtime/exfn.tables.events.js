goog.provide('exfn.tables.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-unicode-value","set-unicode-value",844533267),(function (db,p__18024){
var vec__18025 = p__18024;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18025,(0),null);
var vec__18028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18025,(1),null);
var unicode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(0),null);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(1),null);
var html = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(2),null);
var html_named = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(3),null);
var url_encoded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(4),null);
var css = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(5),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(6),null);
var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18028,(7),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("table","unicode-value","table/unicode-value",987960740),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"unicode","unicode",-542572710),unicode,new cljs.core.Keyword(null,"char","char",-641587586),char$,new cljs.core.Keyword(null,"html","html",-998796897),html,new cljs.core.Keyword(null,"html-named","html-named",575187773),html_named,new cljs.core.Keyword(null,"url-encoded","url-encoded",-1369506083),url_encoded,new cljs.core.Keyword(null,"css","css",1135045163),css,new cljs.core.Keyword(null,"category","category",-593092832),category,new cljs.core.Keyword(null,"description","description",-1428560544),description], null));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),(function (v){
return navigator.clipboard.writeText(v);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copy-unicode-to-clipboard","copy-unicode-to-clipboard",944153877),(function (p__18031,_){
var map__18032 = p__18031;
var map__18032__$1 = cljs.core.__destructure_map(map__18032);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),new cljs.core.Keyword(null,"char","char",-641587586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("table","unicode-value","table/unicode-value",987960740).cljs$core$IFn$_invoke$arity$1(db))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),(function (p__18033,p__18034){
var map__18035 = p__18033;
var map__18035__$1 = cljs.core.__destructure_map(map__18035);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18035__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18036 = p__18034;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18036,(0),null);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18036,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"copy-to-clipboard","copy-to-clipboard",-1375474147),ch], null);
}));

//# sourceMappingURL=exfn.tables.events.js.map
