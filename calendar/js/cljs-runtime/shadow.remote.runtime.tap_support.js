goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__43135,p__43136){
var map__43137 = p__43135;
var map__43137__$1 = cljs.core.__destructure_map(map__43137);
var svc = map__43137__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43137__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43138 = p__43136;
var map__43138__$1 = cljs.core.__destructure_map(map__43138);
var msg = map__43138__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43138__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43138__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43138__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43138__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__43150,p__43151){
var map__43152 = p__43150;
var map__43152__$1 = cljs.core.__destructure_map(map__43152);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43152__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__43153 = p__43151;
var map__43153__$1 = cljs.core.__destructure_map(map__43153);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43153__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__43162,p__43163){
var map__43164 = p__43162;
var map__43164__$1 = cljs.core.__destructure_map(map__43164);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43164__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__43165 = p__43163;
var map__43165__$1 = cljs.core.__destructure_map(map__43165);
var msg = map__43165__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43165__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__43173,tid){
var map__43175 = p__43173;
var map__43175__$1 = cljs.core.__destructure_map(map__43175);
var svc = map__43175__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43175__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__43188 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__43189 = null;
var count__43190 = (0);
var i__43191 = (0);
while(true){
if((i__43191 < count__43190)){
var vec__43225 = chunk__43189.cljs$core$IIndexed$_nth$arity$2(null,i__43191);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43225,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43254 = seq__43188;
var G__43255 = chunk__43189;
var G__43256 = count__43190;
var G__43257 = (i__43191 + (1));
seq__43188 = G__43254;
chunk__43189 = G__43255;
count__43190 = G__43256;
i__43191 = G__43257;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__43188);
if(temp__5753__auto__){
var seq__43188__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43188__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__43188__$1);
var G__43259 = cljs.core.chunk_rest(seq__43188__$1);
var G__43260 = c__4649__auto__;
var G__43261 = cljs.core.count(c__4649__auto__);
var G__43262 = (0);
seq__43188 = G__43259;
chunk__43189 = G__43260;
count__43190 = G__43261;
i__43191 = G__43262;
continue;
} else {
var vec__43232 = cljs.core.first(seq__43188__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43232,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__43263 = cljs.core.next(seq__43188__$1);
var G__43264 = null;
var G__43265 = (0);
var G__43266 = (0);
seq__43188 = G__43263;
chunk__43189 = G__43264;
count__43190 = G__43265;
i__43191 = G__43266;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__43177_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__43177_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__43178_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__43178_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__43179_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__43179_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__43180_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__43180_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__43240){
var map__43241 = p__43240;
var map__43241__$1 = cljs.core.__destructure_map(map__43241);
var svc = map__43241__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43241__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43241__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
