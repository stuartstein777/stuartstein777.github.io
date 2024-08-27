goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__42278,res){
var map__42279 = p__42278;
var map__42279__$1 = cljs.core.__destructure_map(map__42279);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42279__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42279__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__42284 = res;
var G__42284__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42284,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__42284);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42284__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__42284__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__42288 = arguments.length;
switch (G__42288) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__42289,msg,handlers,timeout_after_ms){
var map__42290 = p__42289;
var map__42290__$1 = cljs.core.__destructure_map(map__42290);
var runtime = map__42290__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___42469 = arguments.length;
var i__4830__auto___42470 = (0);
while(true){
if((i__4830__auto___42470 < len__4829__auto___42469)){
args__4835__auto__.push((arguments[i__4830__auto___42470]));

var G__42471 = (i__4830__auto___42470 + (1));
i__4830__auto___42470 = G__42471;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__42300,ev,args){
var map__42301 = p__42300;
var map__42301__$1 = cljs.core.__destructure_map(map__42301);
var runtime = map__42301__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__42302 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42305 = null;
var count__42306 = (0);
var i__42307 = (0);
while(true){
if((i__42307 < count__42306)){
var ext = chunk__42305.cljs$core$IIndexed$_nth$arity$2(null,i__42307);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42473 = seq__42302;
var G__42474 = chunk__42305;
var G__42475 = count__42306;
var G__42476 = (i__42307 + (1));
seq__42302 = G__42473;
chunk__42305 = G__42474;
count__42306 = G__42475;
i__42307 = G__42476;
continue;
} else {
var G__42478 = seq__42302;
var G__42479 = chunk__42305;
var G__42480 = count__42306;
var G__42481 = (i__42307 + (1));
seq__42302 = G__42478;
chunk__42305 = G__42479;
count__42306 = G__42480;
i__42307 = G__42481;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42302);
if(temp__5753__auto__){
var seq__42302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42302__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42302__$1);
var G__42483 = cljs.core.chunk_rest(seq__42302__$1);
var G__42484 = c__4649__auto__;
var G__42485 = cljs.core.count(c__4649__auto__);
var G__42486 = (0);
seq__42302 = G__42483;
chunk__42305 = G__42484;
count__42306 = G__42485;
i__42307 = G__42486;
continue;
} else {
var ext = cljs.core.first(seq__42302__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__42497 = cljs.core.next(seq__42302__$1);
var G__42498 = null;
var G__42499 = (0);
var G__42500 = (0);
seq__42302 = G__42497;
chunk__42305 = G__42498;
count__42306 = G__42499;
i__42307 = G__42500;
continue;
} else {
var G__42502 = cljs.core.next(seq__42302__$1);
var G__42503 = null;
var G__42504 = (0);
var G__42505 = (0);
seq__42302 = G__42502;
chunk__42305 = G__42503;
count__42306 = G__42504;
i__42307 = G__42505;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq42293){
var G__42294 = cljs.core.first(seq42293);
var seq42293__$1 = cljs.core.next(seq42293);
var G__42295 = cljs.core.first(seq42293__$1);
var seq42293__$2 = cljs.core.next(seq42293__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42294,G__42295,seq42293__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__42324,p__42325){
var map__42326 = p__42324;
var map__42326__$1 = cljs.core.__destructure_map(map__42326);
var runtime = map__42326__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42326__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42327 = p__42325;
var map__42327__$1 = cljs.core.__destructure_map(map__42327);
var msg = map__42327__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42327__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__42328 = cljs.core.deref(state_ref);
var map__42328__$1 = cljs.core.__destructure_map(map__42328);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42328__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42328__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__42352){
var map__42353 = p__42352;
var map__42353__$1 = cljs.core.__destructure_map(map__42353);
var runtime = map__42353__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42353__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__42364,msg){
var map__42365 = p__42364;
var map__42365__$1 = cljs.core.__destructure_map(map__42365);
var runtime = map__42365__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42365__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__42369,key,p__42370){
var map__42371 = p__42369;
var map__42371__$1 = cljs.core.__destructure_map(map__42371);
var state = map__42371__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42371__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__42372 = p__42370;
var map__42372__$1 = cljs.core.__destructure_map(map__42372);
var spec = map__42372__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42372__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__42378,key,spec){
var map__42379 = p__42378;
var map__42379__$1 = cljs.core.__destructure_map(map__42379);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42379__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__42380_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__42380_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__42381_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__42381_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__42382_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__42382_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__42383_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__42383_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__42384_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__42384_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__42388,key){
var map__42392 = p__42388;
var map__42392__$1 = cljs.core.__destructure_map(map__42392);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__42393,msg){
var map__42394 = p__42393;
var map__42394__$1 = cljs.core.__destructure_map(map__42394);
var runtime = map__42394__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__42401,p__42402){
var map__42403 = p__42401;
var map__42403__$1 = cljs.core.__destructure_map(map__42403);
var runtime = map__42403__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42403__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__42404 = p__42402;
var map__42404__$1 = cljs.core.__destructure_map(map__42404);
var msg = map__42404__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42404__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__42410 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__42412 = null;
var count__42413 = (0);
var i__42414 = (0);
while(true){
if((i__42414 < count__42413)){
var map__42432 = chunk__42412.cljs$core$IIndexed$_nth$arity$2(null,i__42414);
var map__42432__$1 = cljs.core.__destructure_map(map__42432);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42432__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42625 = seq__42410;
var G__42626 = chunk__42412;
var G__42627 = count__42413;
var G__42628 = (i__42414 + (1));
seq__42410 = G__42625;
chunk__42412 = G__42626;
count__42413 = G__42627;
i__42414 = G__42628;
continue;
} else {
var G__42633 = seq__42410;
var G__42634 = chunk__42412;
var G__42635 = count__42413;
var G__42636 = (i__42414 + (1));
seq__42410 = G__42633;
chunk__42412 = G__42634;
count__42413 = G__42635;
i__42414 = G__42636;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42410);
if(temp__5753__auto__){
var seq__42410__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42410__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42410__$1);
var G__42637 = cljs.core.chunk_rest(seq__42410__$1);
var G__42638 = c__4649__auto__;
var G__42639 = cljs.core.count(c__4649__auto__);
var G__42640 = (0);
seq__42410 = G__42637;
chunk__42412 = G__42638;
count__42413 = G__42639;
i__42414 = G__42640;
continue;
} else {
var map__42436 = cljs.core.first(seq__42410__$1);
var map__42436__$1 = cljs.core.__destructure_map(map__42436);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42436__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__42641 = cljs.core.next(seq__42410__$1);
var G__42642 = null;
var G__42643 = (0);
var G__42644 = (0);
seq__42410 = G__42641;
chunk__42412 = G__42642;
count__42413 = G__42643;
i__42414 = G__42644;
continue;
} else {
var G__42645 = cljs.core.next(seq__42410__$1);
var G__42646 = null;
var G__42647 = (0);
var G__42648 = (0);
seq__42410 = G__42645;
chunk__42412 = G__42646;
count__42413 = G__42647;
i__42414 = G__42648;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
