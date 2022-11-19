goog.provide('re_pressed.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_pressed.impl');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","add-keyboard-event-listener","re-pressed.core/add-keyboard-event-listener",719500381),(function (_,p__29417){
var vec__29418 = p__29417;
var seq__29419 = cljs.core.seq(vec__29418);
var first__29420 = cljs.core.first(seq__29419);
var seq__29419__$1 = cljs.core.next(seq__29419);
var ___$1 = first__29420;
var first__29420__$1 = cljs.core.first(seq__29419__$1);
var seq__29419__$2 = cljs.core.next(seq__29419__$1);
var event_type = first__29420__$1;
var map__29421 = seq__29419__$2;
var map__29421__$1 = (((((!((map__29421 == null))))?(((((map__29421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29421):map__29421);
var args_map = map__29421__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-pressed.core","keyboard-event","re-pressed.core/keyboard-event",-1923839752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-type","event-type",319722813),event_type,new cljs.core.Keyword(null,"arguments","arguments",-1182834456),args_map], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keydown-rules","re-pressed.core/set-keydown-rules",1002257871),(function (p__29423,p__29424){
var map__29425 = p__29423;
var map__29425__$1 = (((((!((map__29425 == null))))?(((((map__29425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29425):map__29425);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29425__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29426 = p__29424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(0),null);
var map__29429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29426,(1),null);
var map__29429__$1 = (((((!((map__29429 == null))))?(((((map__29429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29429):map__29429);
var opts = map__29429__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
var prevent_default_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29429__$1,new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keydown","re-pressed.core/keydown",-1588093301),new cljs.core.Keyword(null,"prevent-default-keys","prevent-default-keys",1744205310)], null),prevent_default_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keypress-rules","re-pressed.core/set-keypress-rules",1541561860),(function (p__29432,p__29433){
var map__29434 = p__29432;
var map__29434__$1 = (((((!((map__29434 == null))))?(((((map__29434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29434):map__29434);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29434__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29435 = p__29433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var map__29438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
var map__29438__$1 = (((((!((map__29438 == null))))?(((((map__29438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29438):map__29438);
var opts = map__29438__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29438__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keypress","re-pressed.core/keypress",1975307043),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-pressed.core","set-keyup-rules","re-pressed.core/set-keyup-rules",519284589),(function (p__29441,p__29442){
var map__29443 = p__29441;
var map__29443__$1 = (((((!((map__29443 == null))))?(((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29443):map__29443);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29444 = p__29442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29444,(0),null);
var map__29447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29444,(1),null);
var map__29447__$1 = (((((!((map__29447 == null))))?(((((map__29447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29447):map__29447);
var opts = map__29447__$1;
var event_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"event-keys","event-keys",-835966631));
var clear_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539));
var always_listen_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29447__$1,new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"event-keys","event-keys",-835966631)], null),event_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"clear-keys","clear-keys",-1035470539)], null),clear_keys),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-pressed.core","keyup","re-pressed.core/keyup",-981006728),new cljs.core.Keyword(null,"always-listen-keys","always-listen-keys",497991050)], null),always_listen_keys)], null);
}));

//# sourceMappingURL=re_pressed.core.js.map
