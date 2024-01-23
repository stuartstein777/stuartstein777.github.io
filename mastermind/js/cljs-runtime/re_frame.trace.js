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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__39619){
var map__39620 = p__39619;
var map__39620__$1 = (((((!((map__39620 == null))))?(((((map__39620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39620):map__39620);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39620__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__39624_39659 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__39625_39660 = null;
var count__39626_39661 = (0);
var i__39627_39662 = (0);
while(true){
if((i__39627_39662 < count__39626_39661)){
var vec__39642_39663 = chunk__39625_39660.cljs$core$IIndexed$_nth$arity$2(null,i__39627_39662);
var k_39664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39642_39663,(0),null);
var cb_39665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39642_39663,(1),null);
try{var G__39646_39667 = cljs.core.deref(re_frame.trace.traces);
(cb_39665.cljs$core$IFn$_invoke$arity$1 ? cb_39665.cljs$core$IFn$_invoke$arity$1(G__39646_39667) : cb_39665.call(null,G__39646_39667));
}catch (e39645){var e_39670 = e39645;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39664,"while storing",cljs.core.deref(re_frame.trace.traces),e_39670], 0));
}

var G__39671 = seq__39624_39659;
var G__39672 = chunk__39625_39660;
var G__39673 = count__39626_39661;
var G__39674 = (i__39627_39662 + (1));
seq__39624_39659 = G__39671;
chunk__39625_39660 = G__39672;
count__39626_39661 = G__39673;
i__39627_39662 = G__39674;
continue;
} else {
var temp__5735__auto___39675 = cljs.core.seq(seq__39624_39659);
if(temp__5735__auto___39675){
var seq__39624_39676__$1 = temp__5735__auto___39675;
if(cljs.core.chunked_seq_QMARK_(seq__39624_39676__$1)){
var c__4556__auto___39677 = cljs.core.chunk_first(seq__39624_39676__$1);
var G__39678 = cljs.core.chunk_rest(seq__39624_39676__$1);
var G__39679 = c__4556__auto___39677;
var G__39680 = cljs.core.count(c__4556__auto___39677);
var G__39681 = (0);
seq__39624_39659 = G__39678;
chunk__39625_39660 = G__39679;
count__39626_39661 = G__39680;
i__39627_39662 = G__39681;
continue;
} else {
var vec__39647_39682 = cljs.core.first(seq__39624_39676__$1);
var k_39683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39647_39682,(0),null);
var cb_39684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39647_39682,(1),null);
try{var G__39651_39685 = cljs.core.deref(re_frame.trace.traces);
(cb_39684.cljs$core$IFn$_invoke$arity$1 ? cb_39684.cljs$core$IFn$_invoke$arity$1(G__39651_39685) : cb_39684.call(null,G__39651_39685));
}catch (e39650){var e_39686 = e39650;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_39683,"while storing",cljs.core.deref(re_frame.trace.traces),e_39686], 0));
}

var G__39687 = cljs.core.next(seq__39624_39676__$1);
var G__39688 = null;
var G__39689 = (0);
var G__39690 = (0);
seq__39624_39659 = G__39687;
chunk__39625_39660 = G__39688;
count__39626_39661 = G__39689;
i__39627_39662 = G__39690;
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
