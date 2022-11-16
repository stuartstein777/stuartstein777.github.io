goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__39060){
var map__39061 = p__39060;
var map__39061__$1 = (((((!((map__39061 == null))))?(((((map__39061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39061):map__39061);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39061__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__39063_39095 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__39064_39096 = null;
var count__39065_39097 = (0);
var i__39066_39098 = (0);
while(true){
if((i__39066_39098 < count__39065_39097)){
var vec__39078_39100 = chunk__39064_39096.cljs$core$IIndexed$_nth$arity$2(null,i__39066_39098);
var k_39101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078_39100,(0),null);
var cb_39102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39078_39100,(1),null);
try{var G__39082_39103 = cljs.core.deref(re_frame.trace.traces);
(cb_39102.cljs$core$IFn$_invoke$arity$1 ? cb_39102.cljs$core$IFn$_invoke$arity$1(G__39082_39103) : cb_39102.call(null,G__39082_39103));
}catch (e39081){var e_39104 = e39081;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39101,"while storing",cljs.core.deref(re_frame.trace.traces),e_39104], 0));
}

var G__39107 = seq__39063_39095;
var G__39108 = chunk__39064_39096;
var G__39109 = count__39065_39097;
var G__39110 = (i__39066_39098 + (1));
seq__39063_39095 = G__39107;
chunk__39064_39096 = G__39108;
count__39065_39097 = G__39109;
i__39066_39098 = G__39110;
continue;
} else {
var temp__5735__auto___39112 = cljs.core.seq(seq__39063_39095);
if(temp__5735__auto___39112){
var seq__39063_39113__$1 = temp__5735__auto___39112;
if(cljs.core.chunked_seq_QMARK_(seq__39063_39113__$1)){
var c__4556__auto___39114 = cljs.core.chunk_first(seq__39063_39113__$1);
var G__39115 = cljs.core.chunk_rest(seq__39063_39113__$1);
var G__39116 = c__4556__auto___39114;
var G__39117 = cljs.core.count(c__4556__auto___39114);
var G__39118 = (0);
seq__39063_39095 = G__39115;
chunk__39064_39096 = G__39116;
count__39065_39097 = G__39117;
i__39066_39098 = G__39118;
continue;
} else {
var vec__39083_39119 = cljs.core.first(seq__39063_39113__$1);
var k_39120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083_39119,(0),null);
var cb_39121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083_39119,(1),null);
try{var G__39087_39122 = cljs.core.deref(re_frame.trace.traces);
(cb_39121.cljs$core$IFn$_invoke$arity$1 ? cb_39121.cljs$core$IFn$_invoke$arity$1(G__39087_39122) : cb_39121.call(null,G__39087_39122));
}catch (e39086){var e_39123 = e39086;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39120,"while storing",cljs.core.deref(re_frame.trace.traces),e_39123], 0));
}

var G__39124 = cljs.core.next(seq__39063_39113__$1);
var G__39125 = null;
var G__39126 = (0);
var G__39127 = (0);
seq__39063_39095 = G__39124;
chunk__39064_39096 = G__39125;
count__39065_39097 = G__39126;
i__39066_39098 = G__39127;
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
