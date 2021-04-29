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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__40710){
var map__40711 = p__40710;
var map__40711__$1 = (((((!((map__40711 == null))))?(((((map__40711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40711):map__40711);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40711__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40711__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40711__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40711__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__40713_40744 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__40714_40745 = null;
var count__40715_40746 = (0);
var i__40716_40747 = (0);
while(true){
if((i__40716_40747 < count__40715_40746)){
var vec__40727_40748 = chunk__40714_40745.cljs$core$IIndexed$_nth$arity$2(null,i__40716_40747);
var k_40749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40727_40748,(0),null);
var cb_40750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40727_40748,(1),null);
try{var G__40731_40751 = cljs.core.deref(re_frame.trace.traces);
(cb_40750.cljs$core$IFn$_invoke$arity$1 ? cb_40750.cljs$core$IFn$_invoke$arity$1(G__40731_40751) : cb_40750.call(null,G__40731_40751));
}catch (e40730){var e_40752 = e40730;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40749,"while storing",cljs.core.deref(re_frame.trace.traces),e_40752], 0));
}

var G__40753 = seq__40713_40744;
var G__40754 = chunk__40714_40745;
var G__40755 = count__40715_40746;
var G__40756 = (i__40716_40747 + (1));
seq__40713_40744 = G__40753;
chunk__40714_40745 = G__40754;
count__40715_40746 = G__40755;
i__40716_40747 = G__40756;
continue;
} else {
var temp__5735__auto___40757 = cljs.core.seq(seq__40713_40744);
if(temp__5735__auto___40757){
var seq__40713_40758__$1 = temp__5735__auto___40757;
if(cljs.core.chunked_seq_QMARK_(seq__40713_40758__$1)){
var c__4556__auto___40759 = cljs.core.chunk_first(seq__40713_40758__$1);
var G__40760 = cljs.core.chunk_rest(seq__40713_40758__$1);
var G__40761 = c__4556__auto___40759;
var G__40762 = cljs.core.count(c__4556__auto___40759);
var G__40763 = (0);
seq__40713_40744 = G__40760;
chunk__40714_40745 = G__40761;
count__40715_40746 = G__40762;
i__40716_40747 = G__40763;
continue;
} else {
var vec__40734_40764 = cljs.core.first(seq__40713_40758__$1);
var k_40765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40734_40764,(0),null);
var cb_40766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40734_40764,(1),null);
try{var G__40738_40767 = cljs.core.deref(re_frame.trace.traces);
(cb_40766.cljs$core$IFn$_invoke$arity$1 ? cb_40766.cljs$core$IFn$_invoke$arity$1(G__40738_40767) : cb_40766.call(null,G__40738_40767));
}catch (e40737){var e_40768 = e40737;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_40765,"while storing",cljs.core.deref(re_frame.trace.traces),e_40768], 0));
}

var G__40769 = cljs.core.next(seq__40713_40758__$1);
var G__40770 = null;
var G__40771 = (0);
var G__40772 = (0);
seq__40713_40744 = G__40769;
chunk__40714_40745 = G__40770;
count__40715_40746 = G__40771;
i__40716_40747 = G__40772;
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
