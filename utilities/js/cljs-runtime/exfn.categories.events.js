goog.provide('exfn.categories.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-categories","process-categories",508249381),(function (db,p__17120){
var vec__17121 = p__17120;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(0),null);
var categories = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17121,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"grid","grid",402978600)], null),categories),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-summary","process-summary",915627689),(function (db,p__17141){
var vec__17142 = p__17141;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17142,(0),null);
var summary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17142,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"breakdown-grid","breakdown-grid",1844950752)], null),summary),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-category-summary","get-category-summary",-1297623231),(function (p__17147,p__17148){
var map__17171 = p__17147;
var map__17171__$1 = cljs.core.__destructure_map(map__17171);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17171__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17172 = p__17148;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17172,(0),null);
var vec__17175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17172,(1),null);
var category_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(0),null);
var category_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17175,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-category","selected-category",-1539830769)], null),category_id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categories","categories",178386610),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-category-name","selected-category-name",-2037395339)], null),category_name),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/categories-breakdown/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(category_id)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-summary","process-summary",915627689)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
exfn.categories.events.categories_api = (function exfn$categories$events$categories_api(year){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/categories-breakdown"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(-1)], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-categories","process-categories",508249381)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});

//# sourceMappingURL=exfn.categories.events.js.map
