goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__44103,p__44104){
var map__44105 = p__44103;
var map__44105__$1 = (((((!((map__44105 == null))))?(((((map__44105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44105):map__44105);
var svc = map__44105__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44105__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44106 = p__44104;
var map__44106__$1 = (((((!((map__44106 == null))))?(((((map__44106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44106):map__44106);
var msg = map__44106__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44106__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44106__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44106__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44106__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__44128,p__44129){
var map__44130 = p__44128;
var map__44130__$1 = (((((!((map__44130 == null))))?(((((map__44130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44130):map__44130);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44130__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__44131 = p__44129;
var map__44131__$1 = (((((!((map__44131 == null))))?(((((map__44131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44131):map__44131);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44131__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__44145,p__44146){
var map__44148 = p__44145;
var map__44148__$1 = (((((!((map__44148 == null))))?(((((map__44148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44148):map__44148);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44148__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44148__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__44149 = p__44146;
var map__44149__$1 = (((((!((map__44149 == null))))?(((((map__44149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44149):map__44149);
var msg = map__44149__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44149__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__44163,tid){
var map__44166 = p__44163;
var map__44166__$1 = (((((!((map__44166 == null))))?(((((map__44166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44166):map__44166);
var svc = map__44166__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44166__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__44181 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__44182 = null;
var count__44183 = (0);
var i__44184 = (0);
while(true){
if((i__44184 < count__44183)){
var vec__44199 = chunk__44182.cljs$core$IIndexed$_nth$arity$2(null,i__44184);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44199,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44199,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44218 = seq__44181;
var G__44219 = chunk__44182;
var G__44220 = count__44183;
var G__44221 = (i__44184 + (1));
seq__44181 = G__44218;
chunk__44182 = G__44219;
count__44183 = G__44220;
i__44184 = G__44221;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44181);
if(temp__5735__auto__){
var seq__44181__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44181__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44181__$1);
var G__44222 = cljs.core.chunk_rest(seq__44181__$1);
var G__44223 = c__4556__auto__;
var G__44224 = cljs.core.count(c__4556__auto__);
var G__44225 = (0);
seq__44181 = G__44222;
chunk__44182 = G__44223;
count__44183 = G__44224;
i__44184 = G__44225;
continue;
} else {
var vec__44204 = cljs.core.first(seq__44181__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44204,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44204,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__44226 = cljs.core.next(seq__44181__$1);
var G__44227 = null;
var G__44228 = (0);
var G__44229 = (0);
seq__44181 = G__44226;
chunk__44182 = G__44227;
count__44183 = G__44228;
i__44184 = G__44229;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__44171_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__44171_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__44172_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__44172_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__44173_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__44173_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__44174_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__44174_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__44210){
var map__44212 = p__44210;
var map__44212__$1 = (((((!((map__44212 == null))))?(((((map__44212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44212):map__44212);
var svc = map__44212__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44212__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
