goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__29008,p__29009){
var map__29012 = p__29008;
var map__29012__$1 = cljs.core.__destructure_map(map__29012);
var svc = map__29012__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29012__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29013 = p__29009;
var map__29013__$1 = cljs.core.__destructure_map(map__29013);
var msg = map__29013__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29013__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29013__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29013__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29013__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__29026,p__29027){
var map__29028 = p__29026;
var map__29028__$1 = cljs.core.__destructure_map(map__29028);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29028__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__29029 = p__29027;
var map__29029__$1 = cljs.core.__destructure_map(map__29029);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29029__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__29032,p__29033){
var map__29034 = p__29032;
var map__29034__$1 = cljs.core.__destructure_map(map__29034);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29034__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29034__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__29035 = p__29033;
var map__29035__$1 = cljs.core.__destructure_map(map__29035);
var msg = map__29035__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29035__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__29038,tid){
var map__29039 = p__29038;
var map__29039__$1 = cljs.core.__destructure_map(map__29039);
var svc = map__29039__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29039__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__29044 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__29045 = null;
var count__29046 = (0);
var i__29047 = (0);
while(true){
if((i__29047 < count__29046)){
var vec__29055 = chunk__29045.cljs$core$IIndexed$_nth$arity$2(null,i__29047);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29055,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29075 = seq__29044;
var G__29076 = chunk__29045;
var G__29077 = count__29046;
var G__29078 = (i__29047 + (1));
seq__29044 = G__29075;
chunk__29045 = G__29076;
count__29046 = G__29077;
i__29047 = G__29078;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__29044);
if(temp__5804__auto__){
var seq__29044__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29044__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29044__$1);
var G__29079 = cljs.core.chunk_rest(seq__29044__$1);
var G__29080 = c__5568__auto__;
var G__29081 = cljs.core.count(c__5568__auto__);
var G__29082 = (0);
seq__29044 = G__29079;
chunk__29045 = G__29080;
count__29046 = G__29081;
i__29047 = G__29082;
continue;
} else {
var vec__29067 = cljs.core.first(seq__29044__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__29083 = cljs.core.next(seq__29044__$1);
var G__29084 = null;
var G__29085 = (0);
var G__29086 = (0);
seq__29044 = G__29083;
chunk__29045 = G__29084;
count__29046 = G__29085;
i__29047 = G__29086;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__29040_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__29040_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__29041_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__29041_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__29042_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__29042_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__29043_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__29043_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__29073){
var map__29074 = p__29073;
var map__29074__$1 = cljs.core.__destructure_map(map__29074);
var svc = map__29074__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29074__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
