goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$start_trace(p__34789){
var map__34790 = p__34789;
var map__34790__$1 = (((((!((map__34790 == null))))?(((((map__34790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34790):map__34790);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34790__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$tracing_cb_debounced(){
var seq__34794_34823 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.trace_cbs));
var chunk__34795_34824 = null;
var count__34796_34825 = (0);
var i__34797_34826 = (0);
while(true){
if((i__34797_34826 < count__34796_34825)){
var vec__34809_34827 = chunk__34795_34824.cljs$core$IIndexed$_nth$arity$2(null,i__34797_34826);
var k_34828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809_34827,(0),null);
var cb_34829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809_34827,(1),null);
try{var G__34813_34830 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_34829.cljs$core$IFn$_invoke$arity$1 ? cb_34829.cljs$core$IFn$_invoke$arity$1(G__34813_34830) : cb_34829.call(null,G__34813_34830));
}catch (e34812){var e_34831 = e34812;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34828,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_34831], 0));
}

var G__34832 = seq__34794_34823;
var G__34833 = chunk__34795_34824;
var G__34834 = count__34796_34825;
var G__34835 = (i__34797_34826 + (1));
seq__34794_34823 = G__34832;
chunk__34795_34824 = G__34833;
count__34796_34825 = G__34834;
i__34797_34826 = G__34835;
continue;
} else {
var temp__5735__auto___34836 = cljs.core.seq(seq__34794_34823);
if(temp__5735__auto___34836){
var seq__34794_34837__$1 = temp__5735__auto___34836;
if(cljs.core.chunked_seq_QMARK_(seq__34794_34837__$1)){
var c__4556__auto___34838 = cljs.core.chunk_first(seq__34794_34837__$1);
var G__34839 = cljs.core.chunk_rest(seq__34794_34837__$1);
var G__34840 = c__4556__auto___34838;
var G__34841 = cljs.core.count(c__4556__auto___34838);
var G__34842 = (0);
seq__34794_34823 = G__34839;
chunk__34795_34824 = G__34840;
count__34796_34825 = G__34841;
i__34797_34826 = G__34842;
continue;
} else {
var vec__34815_34843 = cljs.core.first(seq__34794_34837__$1);
var k_34844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34815_34843,(0),null);
var cb_34845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34815_34843,(1),null);
try{var G__34819_34846 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces);
(cb_34845.cljs$core$IFn$_invoke$arity$1 ? cb_34845.cljs$core$IFn$_invoke$arity$1(G__34819_34846) : cb_34845.call(null,G__34819_34846));
}catch (e34818){var e_34847 = e34818;
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34844,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces),e_34847], 0));
}

var G__34848 = cljs.core.next(seq__34794_34837__$1);
var G__34849 = null;
var G__34850 = (0);
var G__34851 = (0);
seq__34794_34823 = G__34848;
chunk__34795_34824 = G__34849;
count__34796_34825 = G__34850;
i__34797_34826 = G__34851;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.js.map
