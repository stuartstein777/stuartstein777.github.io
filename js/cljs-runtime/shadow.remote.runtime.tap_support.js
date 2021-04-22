goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44099,p__44100){
var map__44101 = p__44099;
var map__44101__$1 = (((((!((map__44101 == null))))?(((((map__44101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44101):map__44101);
var svc = map__44101__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44101__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44101__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44102 = p__44100;
var map__44102__$1 = (((((!((map__44102 == null))))?(((((map__44102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44102):map__44102);
var msg = map__44102__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44102__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44102__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44102__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44102__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44123,p__44124){
var map__44126 = p__44123;
var map__44126__$1 = (((((!((map__44126 == null))))?(((((map__44126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44126):map__44126);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44128 = p__44124;
var map__44128__$1 = (((((!((map__44128 == null))))?(((((map__44128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44128):map__44128);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44128__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44143,p__44144){
var map__44145 = p__44143;
var map__44145__$1 = (((((!((map__44145 == null))))?(((((map__44145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44145):map__44145);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44145__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44145__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44146 = p__44144;
var map__44146__$1 = (((((!((map__44146 == null))))?(((((map__44146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44146):map__44146);
var msg = map__44146__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44146__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44156,tid){
var map__44159 = p__44156;
var map__44159__$1 = (((((!((map__44159 == null))))?(((((map__44159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44159):map__44159);
var svc = map__44159__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44159__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44179 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44180 = null;
var count__44181 = (0);
var i__44182 = (0);
while(true){
if((i__44182 < count__44181)){
var vec__44196 = chunk__44180.cljs$core$IIndexed$_nth$arity$2(null,i__44182);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44196,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44196,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44218 = seq__44179;
var G__44219 = chunk__44180;
var G__44220 = count__44181;
var G__44221 = (i__44182 + (1));
seq__44179 = G__44218;
chunk__44180 = G__44219;
count__44181 = G__44220;
i__44182 = G__44221;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44179);
if(temp__5735__auto__){
var seq__44179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44179__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44179__$1);
var G__44222 = cljs.core.chunk_rest(seq__44179__$1);
var G__44223 = c__4556__auto__;
var G__44224 = cljs.core.count(c__4556__auto__);
var G__44225 = (0);
seq__44179 = G__44222;
chunk__44180 = G__44223;
count__44181 = G__44224;
i__44182 = G__44225;
continue;
} else {
var vec__44202 = cljs.core.first(seq__44179__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44202,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44202,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44226 = cljs.core.next(seq__44179__$1);
var G__44227 = null;
var G__44228 = (0);
var G__44229 = (0);
seq__44179 = G__44226;
chunk__44180 = G__44227;
count__44181 = G__44228;
i__44182 = G__44229;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44170_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44170_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44171_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44171_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44172_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44172_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44173_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44173_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44208){
var map__44209 = p__44208;
var map__44209__$1 = (((((!((map__44209 == null))))?(((((map__44209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44209):map__44209);
var svc = map__44209__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44209__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44209__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
