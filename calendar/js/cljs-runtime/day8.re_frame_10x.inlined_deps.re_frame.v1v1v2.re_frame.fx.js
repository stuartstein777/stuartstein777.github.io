goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__34676 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34677 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34677);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34814 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34814)){
var new_db_34815 = temp__5753__auto___34814;
var fexpr__34678_34816 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34678_34816.cljs$core$IFn$_invoke$arity$1 ? fexpr__34678_34816.cljs$core$IFn$_invoke$arity$1(new_db_34815) : fexpr__34678_34816.call(null,new_db_34815));
} else {
}

var seq__34679 = cljs.core.seq(effects_without_db);
var chunk__34680 = null;
var count__34681 = (0);
var i__34682 = (0);
while(true){
if((i__34682 < count__34681)){
var vec__34696 = chunk__34680.cljs$core$IIndexed$_nth$arity$2(null,i__34682);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34696,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34696,(1),null);
var temp__5751__auto___34817 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34817)){
var effect_fn_34818 = temp__5751__auto___34817;
(effect_fn_34818.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34818.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34818.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34819 = seq__34679;
var G__34820 = chunk__34680;
var G__34821 = count__34681;
var G__34822 = (i__34682 + (1));
seq__34679 = G__34819;
chunk__34680 = G__34820;
count__34681 = G__34821;
i__34682 = G__34822;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34679);
if(temp__5753__auto__){
var seq__34679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34679__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34679__$1);
var G__34823 = cljs.core.chunk_rest(seq__34679__$1);
var G__34824 = c__4649__auto__;
var G__34825 = cljs.core.count(c__4649__auto__);
var G__34826 = (0);
seq__34679 = G__34823;
chunk__34680 = G__34824;
count__34681 = G__34825;
i__34682 = G__34826;
continue;
} else {
var vec__34702 = cljs.core.first(seq__34679__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,(1),null);
var temp__5751__auto___34827 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34827)){
var effect_fn_34828 = temp__5751__auto___34827;
(effect_fn_34828.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34828.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34828.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34829 = cljs.core.next(seq__34679__$1);
var G__34830 = null;
var G__34831 = (0);
var G__34832 = (0);
seq__34679 = G__34829;
chunk__34680 = G__34830;
count__34681 = G__34831;
i__34682 = G__34832;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34315__auto___34833 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34316__auto___34834 = (end__34315__auto___34833 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34316__auto___34834,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34315__auto___34833);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34676);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___34835 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___34835)){
var new_db_34836 = temp__5753__auto___34835;
var fexpr__34708_34837 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34708_34837.cljs$core$IFn$_invoke$arity$1 ? fexpr__34708_34837.cljs$core$IFn$_invoke$arity$1(new_db_34836) : fexpr__34708_34837.call(null,new_db_34836));
} else {
}

var seq__34709 = cljs.core.seq(effects_without_db);
var chunk__34710 = null;
var count__34711 = (0);
var i__34712 = (0);
while(true){
if((i__34712 < count__34711)){
var vec__34741 = chunk__34710.cljs$core$IIndexed$_nth$arity$2(null,i__34712);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34741,(1),null);
var temp__5751__auto___34838 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34838)){
var effect_fn_34839 = temp__5751__auto___34838;
(effect_fn_34839.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34839.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34839.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34840 = seq__34709;
var G__34841 = chunk__34710;
var G__34842 = count__34711;
var G__34843 = (i__34712 + (1));
seq__34709 = G__34840;
chunk__34710 = G__34841;
count__34711 = G__34842;
i__34712 = G__34843;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34709);
if(temp__5753__auto__){
var seq__34709__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34709__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34709__$1);
var G__34844 = cljs.core.chunk_rest(seq__34709__$1);
var G__34845 = c__4649__auto__;
var G__34846 = cljs.core.count(c__4649__auto__);
var G__34847 = (0);
seq__34709 = G__34844;
chunk__34710 = G__34845;
count__34711 = G__34846;
i__34712 = G__34847;
continue;
} else {
var vec__34750 = cljs.core.first(seq__34709__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34750,(1),null);
var temp__5751__auto___34848 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34848)){
var effect_fn_34849 = temp__5751__auto___34848;
(effect_fn_34849.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34849.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34849.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34850 = cljs.core.next(seq__34709__$1);
var G__34851 = null;
var G__34852 = (0);
var G__34853 = (0);
seq__34709 = G__34850;
chunk__34710 = G__34851;
count__34711 = G__34852;
i__34712 = G__34853;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__34753){
var map__34755 = p__34753;
var map__34755__$1 = cljs.core.__destructure_map(map__34755);
var effect = map__34755__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__34769 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34770 = null;
var count__34771 = (0);
var i__34772 = (0);
while(true){
if((i__34772 < count__34771)){
var effect = chunk__34770.cljs$core$IIndexed$_nth$arity$2(null,i__34772);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34854 = seq__34769;
var G__34855 = chunk__34770;
var G__34856 = count__34771;
var G__34857 = (i__34772 + (1));
seq__34769 = G__34854;
chunk__34770 = G__34855;
count__34771 = G__34856;
i__34772 = G__34857;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34769);
if(temp__5753__auto__){
var seq__34769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34769__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34769__$1);
var G__34858 = cljs.core.chunk_rest(seq__34769__$1);
var G__34859 = c__4649__auto__;
var G__34860 = cljs.core.count(c__4649__auto__);
var G__34861 = (0);
seq__34769 = G__34858;
chunk__34770 = G__34859;
count__34771 = G__34860;
i__34772 = G__34861;
continue;
} else {
var effect = cljs.core.first(seq__34769__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34862 = cljs.core.next(seq__34769__$1);
var G__34863 = null;
var G__34864 = (0);
var G__34865 = (0);
seq__34769 = G__34862;
chunk__34770 = G__34863;
count__34771 = G__34864;
i__34772 = G__34865;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__34785 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__34786 = null;
var count__34787 = (0);
var i__34788 = (0);
while(true){
if((i__34788 < count__34787)){
var vec__34795 = chunk__34786.cljs$core$IIndexed$_nth$arity$2(null,i__34788);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34866 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34866)){
var effect_fn_34867 = temp__5751__auto___34866;
(effect_fn_34867.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34867.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34867.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34868 = seq__34785;
var G__34869 = chunk__34786;
var G__34870 = count__34787;
var G__34871 = (i__34788 + (1));
seq__34785 = G__34868;
chunk__34786 = G__34869;
count__34787 = G__34870;
i__34788 = G__34871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34785);
if(temp__5753__auto__){
var seq__34785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34785__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34785__$1);
var G__34872 = cljs.core.chunk_rest(seq__34785__$1);
var G__34873 = c__4649__auto__;
var G__34874 = cljs.core.count(c__4649__auto__);
var G__34875 = (0);
seq__34785 = G__34872;
chunk__34786 = G__34873;
count__34787 = G__34874;
i__34788 = G__34875;
continue;
} else {
var vec__34798 = cljs.core.first(seq__34785__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___34876 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___34876)){
var effect_fn_34877 = temp__5751__auto___34876;
(effect_fn_34877.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34877.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34877.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34878 = cljs.core.next(seq__34785__$1);
var G__34879 = null;
var G__34880 = (0);
var G__34881 = (0);
seq__34785 = G__34878;
chunk__34786 = G__34879;
count__34787 = G__34880;
i__34788 = G__34881;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__34801 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34802 = null;
var count__34803 = (0);
var i__34804 = (0);
while(true){
if((i__34804 < count__34803)){
var event = chunk__34802.cljs$core$IIndexed$_nth$arity$2(null,i__34804);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34882 = seq__34801;
var G__34883 = chunk__34802;
var G__34884 = count__34803;
var G__34885 = (i__34804 + (1));
seq__34801 = G__34882;
chunk__34802 = G__34883;
count__34803 = G__34884;
i__34804 = G__34885;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34801);
if(temp__5753__auto__){
var seq__34801__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34801__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34801__$1);
var G__34886 = cljs.core.chunk_rest(seq__34801__$1);
var G__34887 = c__4649__auto__;
var G__34888 = cljs.core.count(c__4649__auto__);
var G__34889 = (0);
seq__34801 = G__34886;
chunk__34802 = G__34887;
count__34803 = G__34888;
i__34804 = G__34889;
continue;
} else {
var event = cljs.core.first(seq__34801__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34890 = cljs.core.next(seq__34801__$1);
var G__34891 = null;
var G__34892 = (0);
var G__34893 = (0);
seq__34801 = G__34890;
chunk__34802 = G__34891;
count__34803 = G__34892;
i__34804 = G__34893;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__34807 = cljs.core.seq(value);
var chunk__34808 = null;
var count__34809 = (0);
var i__34810 = (0);
while(true){
if((i__34810 < count__34809)){
var event = chunk__34808.cljs$core$IIndexed$_nth$arity$2(null,i__34810);
clear_event(event);


var G__34894 = seq__34807;
var G__34895 = chunk__34808;
var G__34896 = count__34809;
var G__34897 = (i__34810 + (1));
seq__34807 = G__34894;
chunk__34808 = G__34895;
count__34809 = G__34896;
i__34810 = G__34897;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34807);
if(temp__5753__auto__){
var seq__34807__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34807__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__34807__$1);
var G__34898 = cljs.core.chunk_rest(seq__34807__$1);
var G__34899 = c__4649__auto__;
var G__34900 = cljs.core.count(c__4649__auto__);
var G__34901 = (0);
seq__34807 = G__34898;
chunk__34808 = G__34899;
count__34809 = G__34900;
i__34810 = G__34901;
continue;
} else {
var event = cljs.core.first(seq__34807__$1);
clear_event(event);


var G__34903 = cljs.core.next(seq__34807__$1);
var G__34904 = null;
var G__34905 = (0);
var G__34906 = (0);
seq__34807 = G__34903;
chunk__34808 = G__34904;
count__34809 = G__34905;
i__34810 = G__34906;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
