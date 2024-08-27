goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38996){
var map__38997 = p__38996;
var map__38997__$1 = cljs.core.__destructure_map(map__38997);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38997__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38998_39031 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38999_39032 = null;
var count__39000_39033 = (0);
var i__39001_39034 = (0);
while(true){
if((i__39001_39034 < count__39000_39033)){
var vec__39016_39035 = chunk__38999_39032.cljs$core$IIndexed$_nth$arity$2(null,i__39001_39034);
var k_39036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39016_39035,(0),null);
var cb_39037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39016_39035,(1),null);
try{var G__39020_39038 = cljs.core.deref(re_frame.trace.traces);
(cb_39037.cljs$core$IFn$_invoke$arity$1 ? cb_39037.cljs$core$IFn$_invoke$arity$1(G__39020_39038) : cb_39037.call(null,G__39020_39038));
}catch (e39019){var e_39039 = e39019;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39036,"while storing",cljs.core.deref(re_frame.trace.traces),e_39039], 0));
}

var G__39040 = seq__38998_39031;
var G__39041 = chunk__38999_39032;
var G__39042 = count__39000_39033;
var G__39043 = (i__39001_39034 + (1));
seq__38998_39031 = G__39040;
chunk__38999_39032 = G__39041;
count__39000_39033 = G__39042;
i__39001_39034 = G__39043;
continue;
} else {
var temp__5753__auto___39044 = cljs.core.seq(seq__38998_39031);
if(temp__5753__auto___39044){
var seq__38998_39045__$1 = temp__5753__auto___39044;
if(cljs.core.chunked_seq_QMARK_(seq__38998_39045__$1)){
var c__4649__auto___39046 = cljs.core.chunk_first(seq__38998_39045__$1);
var G__39047 = cljs.core.chunk_rest(seq__38998_39045__$1);
var G__39048 = c__4649__auto___39046;
var G__39049 = cljs.core.count(c__4649__auto___39046);
var G__39050 = (0);
seq__38998_39031 = G__39047;
chunk__38999_39032 = G__39048;
count__39000_39033 = G__39049;
i__39001_39034 = G__39050;
continue;
} else {
var vec__39021_39054 = cljs.core.first(seq__38998_39045__$1);
var k_39055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39021_39054,(0),null);
var cb_39056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39021_39054,(1),null);
try{var G__39025_39057 = cljs.core.deref(re_frame.trace.traces);
(cb_39056.cljs$core$IFn$_invoke$arity$1 ? cb_39056.cljs$core$IFn$_invoke$arity$1(G__39025_39057) : cb_39056.call(null,G__39025_39057));
}catch (e39024){var e_39058 = e39024;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39055,"while storing",cljs.core.deref(re_frame.trace.traces),e_39058], 0));
}

var G__39059 = cljs.core.next(seq__38998_39045__$1);
var G__39060 = null;
var G__39061 = (0);
var G__39062 = (0);
seq__38998_39031 = G__39059;
chunk__38999_39032 = G__39060;
count__39000_39033 = G__39061;
i__39001_39034 = G__39062;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
