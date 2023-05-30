goog.provide('exfn.purchases.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-purchases","process-purchases",1837141117),(function (db,p__17048){
var vec__17049 = p__17048;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(0),null);
var purchases = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"grid","grid",402978600)], null),purchases),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"breakdown-grid","breakdown-grid",1844950752)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
exfn.purchases.events.purchases_api = (function exfn$purchases$events$purchases_api(year,show_full_year_QMARK_){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Purchases"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-full-year","show-full-year",-1861109490),show_full_year_QMARK_,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-purchases","process-purchases",1837141117)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null);
});
exfn.purchases.events.current_sort_col = (function exfn$purchases$events$current_sort_col(db){
return new cljs.core.Keyword(null,"sort-col","sort-col",-718754882).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(db))));
});
exfn.purchases.events.current_sort_asc_QMARK_ = (function exfn$purchases$events$current_sort_asc_QMARK_(db){
return new cljs.core.Keyword(null,"sort-asc?","sort-asc?",-324736827).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(db))));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849),(function (db,p__17095){
var vec__17099 = p__17095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(0),null);
var sort_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17099,(1),null);
var new_sort_asc_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,exfn.purchases.events.current_sort_col(db)))?cljs.core.not((function (){var or__5045__auto__ = exfn.purchases.events.current_sort_asc_QMARK_(db);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})()):true);
var sort_dir = ((new_sort_asc_QMARK_)?cljs.core._LT_:cljs.core._GT_);
var sort_col_comp = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sort_col,new cljs.core.Keyword(null,"store","store",1512230022)))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,new cljs.core.Keyword(null,"store","store",1512230022)):new cljs.core.Keyword(null,"total","total",1916810418));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849),new cljs.core.Keyword(null,"sort-col","sort-col",-718754882)], null),sort_col),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"purchases-sort","purchases-sort",-2122612849),new cljs.core.Keyword(null,"sort-asc?","sort-asc?",-324736827)], null),new_sort_asc_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"grid","grid",402978600)], null),(function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_col_comp,sort_dir,new cljs.core.Keyword(null,"grid","grid",402978600).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(db)));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"process-store-summary","process-store-summary",-477839674),(function (db,p__17116){
var vec__17117 = p__17116;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17117,(0),null);
var store_summary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17117,(1),null);
return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"breakdown-grid","breakdown-grid",1844950752)], null),store_summary);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-store-summary","get-store-summary",-114996958),(function (p__17135,p__17136){
var map__17137 = p__17135;
var map__17137__$1 = cljs.core.__destructure_map(map__17137);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17137__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__17138 = p__17136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138,(0),null);
var store = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17138,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"selected-store","selected-store",536185141)], null),store),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[exfn.shared.logic.base_and_port,"/Purchases/",clojure.string.replace(store,/ /,"%20")].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-store-summary","process-store-summary",-477839674)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fail","fail",1706214930)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-full-year","toggle-full-year",-1134064139),(function (p__17145,_){
var map__17146 = p__17145;
var map__17146__$1 = cljs.core.__destructure_map(map__17146);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17146__$1,new cljs.core.Keyword(null,"db","db",993250759));
var show_full_year_QMARK_ = new cljs.core.Keyword(null,"show-full-year-purchases?","show-full-year-purchases?",157352331).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ui","ui",-469653645).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(db)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"ui","ui",-469653645),new cljs.core.Keyword(null,"show-full-year-purchases?","show-full-year-purchases?",157352331)], null),cljs.core.not(show_full_year_QMARK_)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),exfn.purchases.events.purchases_api(new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.not(show_full_year_QMARK_))], null);
}));

//# sourceMappingURL=exfn.purchases.events.js.map
