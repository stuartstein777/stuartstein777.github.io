goog.provide('re_pressed.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__29849){
var vec__29850 = p__29849;
var seq__29851 = cljs.core.seq(vec__29850);
var first__29852 = cljs.core.first(seq__29851);
var seq__29851__$1 = cljs.core.next(seq__29851);
var ___$1 = first__29852;
var first__29852__$1 = cljs.core.first(seq__29851__$1);
var seq__29851__$2 = cljs.core.next(seq__29851__$1);
var event_type = first__29852__$1;
var map__29853 = seq__29851__$2;
var map__29853__$1 = (((((!((map__29853 == null))))?(((((map__29853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29853):map__29853);
var args_map = map__29853__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args_map], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__29855,p__29856){
var map__29857 = p__29855;
var map__29857__$1 = (((((!((map__29857 == null))))?(((((map__29857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29857):map__29857);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29857__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29858 = p__29856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29858,(0),null);
var map__29861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29858,(1),null);
var map__29861__$1 = (((((!((map__29861 == null))))?(((((map__29861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29861):map__29861);
var opts = map__29861__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29861__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__29864,p__29865){
var map__29866 = p__29864;
var map__29866__$1 = (((((!((map__29866 == null))))?(((((map__29866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29866):map__29866);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29866__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29867 = p__29865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29867,(0),null);
var map__29870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29867,(1),null);
var map__29870__$1 = (((((!((map__29870 == null))))?(((((map__29870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29870):map__29870);
var opts = map__29870__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29870__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29870__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29870__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__29873,p__29874){
var map__29875 = p__29873;
var map__29875__$1 = (((((!((map__29875 == null))))?(((((map__29875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29875):map__29875);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29875__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29876 = p__29874;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(0),null);
var map__29879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(1),null);
var map__29879__$1 = (((((!((map__29879 == null))))?(((((map__29879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29879):map__29879);
var opts = map__29879__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=re_pressed.core.js.map
