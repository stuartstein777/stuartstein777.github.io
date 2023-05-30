goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27846){
var map__27847 = p__27846;
var map__27847__$1 = cljs.core.__destructure_map(map__27847);
var runtime = map__27847__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27847__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_27953 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_27953)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__27850 = runtime;
var G__27851 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_27953);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__27850,G__27851) : shadow.remote.runtime.shared.process.call(null,G__27850,G__27851));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27852,res){
var map__27853 = p__27852;
var map__27853__$1 = cljs.core.__destructure_map(map__27853);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27854 = res;
var G__27854__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27854,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27854);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27854__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27854__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27858 = arguments.length;
switch (G__27858) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27859,msg,handlers,timeout_after_ms){
var map__27860 = p__27859;
var map__27860__$1 = cljs.core.__destructure_map(map__27860);
var runtime = map__27860__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27860__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27962 = arguments.length;
var i__5770__auto___27963 = (0);
while(true){
if((i__5770__auto___27963 < len__5769__auto___27962)){
args__5775__auto__.push((arguments[i__5770__auto___27963]));

var G__27964 = (i__5770__auto___27963 + (1));
i__5770__auto___27963 = G__27964;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27870,ev,args){
var map__27871 = p__27870;
var map__27871__$1 = cljs.core.__destructure_map(map__27871);
var runtime = map__27871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27872 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27875 = null;
var count__27876 = (0);
var i__27877 = (0);
while(true){
if((i__27877 < count__27876)){
var ext = chunk__27875.cljs$core$IIndexed$_nth$arity$2(null,i__27877);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27966 = seq__27872;
var G__27967 = chunk__27875;
var G__27968 = count__27876;
var G__27969 = (i__27877 + (1));
seq__27872 = G__27966;
chunk__27875 = G__27967;
count__27876 = G__27968;
i__27877 = G__27969;
continue;
} else {
var G__27970 = seq__27872;
var G__27971 = chunk__27875;
var G__27972 = count__27876;
var G__27973 = (i__27877 + (1));
seq__27872 = G__27970;
chunk__27875 = G__27971;
count__27876 = G__27972;
i__27877 = G__27973;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27872);
if(temp__5804__auto__){
var seq__27872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27872__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27872__$1);
var G__27976 = cljs.core.chunk_rest(seq__27872__$1);
var G__27977 = c__5568__auto__;
var G__27978 = cljs.core.count(c__5568__auto__);
var G__27979 = (0);
seq__27872 = G__27976;
chunk__27875 = G__27977;
count__27876 = G__27978;
i__27877 = G__27979;
continue;
} else {
var ext = cljs.core.first(seq__27872__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27980 = cljs.core.next(seq__27872__$1);
var G__27981 = null;
var G__27982 = (0);
var G__27983 = (0);
seq__27872 = G__27980;
chunk__27875 = G__27981;
count__27876 = G__27982;
i__27877 = G__27983;
continue;
} else {
var G__27984 = cljs.core.next(seq__27872__$1);
var G__27985 = null;
var G__27986 = (0);
var G__27987 = (0);
seq__27872 = G__27984;
chunk__27875 = G__27985;
count__27876 = G__27986;
i__27877 = G__27987;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27865){
var G__27866 = cljs.core.first(seq27865);
var seq27865__$1 = cljs.core.next(seq27865);
var G__27867 = cljs.core.first(seq27865__$1);
var seq27865__$2 = cljs.core.next(seq27865__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27866,G__27867,seq27865__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27880,p__27881){
var map__27882 = p__27880;
var map__27882__$1 = cljs.core.__destructure_map(map__27882);
var runtime = map__27882__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27882__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27883 = p__27881;
var map__27883__$1 = cljs.core.__destructure_map(map__27883);
var msg = map__27883__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27883__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__27884 = cljs.core.deref(state_ref);
var map__27884__$1 = cljs.core.__destructure_map(map__27884);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27884__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27884__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27888,msg){
var map__27889 = p__27888;
var map__27889__$1 = cljs.core.__destructure_map(map__27889);
var runtime = map__27889__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27889__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27894,key,p__27895){
var map__27896 = p__27894;
var map__27896__$1 = cljs.core.__destructure_map(map__27896);
var state = map__27896__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27896__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27897 = p__27895;
var map__27897__$1 = cljs.core.__destructure_map(map__27897);
var spec = map__27897__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27897__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27901,key,spec){
var map__27902 = p__27901;
var map__27902__$1 = cljs.core.__destructure_map(map__27902);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27902__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27903_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27903_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27904_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27904_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27905_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27905_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27906_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27906_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27907_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27907_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27910,key){
var map__27911 = p__27910;
var map__27911__$1 = cljs.core.__destructure_map(map__27911);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27912,msg){
var map__27913 = p__27912;
var map__27913__$1 = cljs.core.__destructure_map(map__27913);
var runtime = map__27913__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27913__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27916,p__27917){
var map__27918 = p__27916;
var map__27918__$1 = cljs.core.__destructure_map(map__27918);
var runtime = map__27918__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27918__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27921 = p__27917;
var map__27921__$1 = cljs.core.__destructure_map(map__27921);
var msg = map__27921__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27921__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__27932 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27934 = null;
var count__27935 = (0);
var i__27936 = (0);
while(true){
if((i__27936 < count__27935)){
var map__27950 = chunk__27934.cljs$core$IIndexed$_nth$arity$2(null,i__27936);
var map__27950__$1 = cljs.core.__destructure_map(map__27950);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27950__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27988 = seq__27932;
var G__27989 = chunk__27934;
var G__27990 = count__27935;
var G__27991 = (i__27936 + (1));
seq__27932 = G__27988;
chunk__27934 = G__27989;
count__27935 = G__27990;
i__27936 = G__27991;
continue;
} else {
var G__27992 = seq__27932;
var G__27993 = chunk__27934;
var G__27994 = count__27935;
var G__27995 = (i__27936 + (1));
seq__27932 = G__27992;
chunk__27934 = G__27993;
count__27935 = G__27994;
i__27936 = G__27995;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__27932);
if(temp__5804__auto__){
var seq__27932__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27932__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__27932__$1);
var G__27996 = cljs.core.chunk_rest(seq__27932__$1);
var G__27997 = c__5568__auto__;
var G__27998 = cljs.core.count(c__5568__auto__);
var G__27999 = (0);
seq__27932 = G__27996;
chunk__27934 = G__27997;
count__27935 = G__27998;
i__27936 = G__27999;
continue;
} else {
var map__27951 = cljs.core.first(seq__27932__$1);
var map__27951__$1 = cljs.core.__destructure_map(map__27951);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27951__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28000 = cljs.core.next(seq__27932__$1);
var G__28001 = null;
var G__28002 = (0);
var G__28003 = (0);
seq__27932 = G__28000;
chunk__27934 = G__28001;
count__27935 = G__28002;
i__27936 = G__28003;
continue;
} else {
var G__28004 = cljs.core.next(seq__27932__$1);
var G__28005 = null;
var G__28006 = (0);
var G__28007 = (0);
seq__27932 = G__28004;
chunk__27934 = G__28005;
count__27935 = G__28006;
i__27936 = G__28007;
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
