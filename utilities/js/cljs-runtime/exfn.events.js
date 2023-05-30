goog.provide('exfn.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page","set-current-page",-1047328569),(function (db,p__16460){
var vec__16461 = p__16460;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16461,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16461,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-is-math-expanded","toggle-is-math-expanded",153525693),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-maths-expanded","is-maths-expanded",1270835593),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-is-converters-expanded","toggle-is-converters-expanded",-137817879),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toggle-is-converters-expanded","toggle-is-converters-expanded",-137817879),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-is-utilities-expanded","toggle-is-utilities-expanded",320558280),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toggle-is-utilities-expanded","toggle-is-utilities-expanded",320558280),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-is-time-expanded","toggle-is-time-expanded",233189916),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"toggle-is-time-expanded","toggle-is-time-expanded",233189916),cljs.core.not);
}));

//# sourceMappingURL=exfn.events.js.map
