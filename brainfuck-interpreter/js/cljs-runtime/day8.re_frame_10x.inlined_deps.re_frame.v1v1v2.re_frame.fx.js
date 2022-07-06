goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace');
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
var _STAR_current_trace_STAR__orig_val__34688 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34689 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34689);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___34785 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___34785)){
var new_db_34786 = temp__5735__auto___34785;
var fexpr__34693_34787 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34693_34787.cljs$core$IFn$_invoke$arity$1 ? fexpr__34693_34787.cljs$core$IFn$_invoke$arity$1(new_db_34786) : fexpr__34693_34787.call(null,new_db_34786));
} else {
}

var seq__34694 = cljs.core.seq(effects_without_db);
var chunk__34695 = null;
var count__34696 = (0);
var i__34697 = (0);
while(true){
if((i__34697 < count__34696)){
var vec__34709 = chunk__34695.cljs$core$IIndexed$_nth$arity$2(null,i__34697);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34709,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34709,(1),null);
var temp__5733__auto___34788 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34788)){
var effect_fn_34789 = temp__5733__auto___34788;
(effect_fn_34789.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34789.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34789.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34790 = seq__34694;
var G__34791 = chunk__34695;
var G__34792 = count__34696;
var G__34793 = (i__34697 + (1));
seq__34694 = G__34790;
chunk__34695 = G__34791;
count__34696 = G__34792;
i__34697 = G__34793;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34694);
if(temp__5735__auto__){
var seq__34694__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34694__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34694__$1);
var G__34794 = cljs.core.chunk_rest(seq__34694__$1);
var G__34795 = c__4556__auto__;
var G__34796 = cljs.core.count(c__4556__auto__);
var G__34797 = (0);
seq__34694 = G__34794;
chunk__34695 = G__34795;
count__34696 = G__34796;
i__34697 = G__34797;
continue;
} else {
var vec__34715 = cljs.core.first(seq__34694__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34715,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34715,(1),null);
var temp__5733__auto___34798 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34798)){
var effect_fn_34799 = temp__5733__auto___34798;
(effect_fn_34799.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34799.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34799.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34800 = cljs.core.next(seq__34694__$1);
var G__34801 = null;
var G__34802 = (0);
var G__34803 = (0);
seq__34694 = G__34800;
chunk__34695 = G__34801;
count__34696 = G__34802;
i__34697 = G__34803;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34362__auto___34804 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34363__auto___34805 = (end__34362__auto___34804 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34363__auto___34805,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34362__auto___34804);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34688);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___34806 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___34806)){
var new_db_34807 = temp__5735__auto___34806;
var fexpr__34718_34808 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__34718_34808.cljs$core$IFn$_invoke$arity$1 ? fexpr__34718_34808.cljs$core$IFn$_invoke$arity$1(new_db_34807) : fexpr__34718_34808.call(null,new_db_34807));
} else {
}

var seq__34719 = cljs.core.seq(effects_without_db);
var chunk__34720 = null;
var count__34721 = (0);
var i__34722 = (0);
while(true){
if((i__34722 < count__34721)){
var vec__34732 = chunk__34720.cljs$core$IIndexed$_nth$arity$2(null,i__34722);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34732,(1),null);
var temp__5733__auto___34809 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34809)){
var effect_fn_34810 = temp__5733__auto___34809;
(effect_fn_34810.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34810.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34810.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34811 = seq__34719;
var G__34812 = chunk__34720;
var G__34813 = count__34721;
var G__34814 = (i__34722 + (1));
seq__34719 = G__34811;
chunk__34720 = G__34812;
count__34721 = G__34813;
i__34722 = G__34814;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34719);
if(temp__5735__auto__){
var seq__34719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34719__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34719__$1);
var G__34815 = cljs.core.chunk_rest(seq__34719__$1);
var G__34816 = c__4556__auto__;
var G__34817 = cljs.core.count(c__4556__auto__);
var G__34818 = (0);
seq__34719 = G__34815;
chunk__34720 = G__34816;
count__34721 = G__34817;
i__34722 = G__34818;
continue;
} else {
var vec__34735 = cljs.core.first(seq__34719__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34735,(1),null);
var temp__5733__auto___34819 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34819)){
var effect_fn_34820 = temp__5733__auto___34819;
(effect_fn_34820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34820.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34821 = cljs.core.next(seq__34719__$1);
var G__34822 = null;
var G__34823 = (0);
var G__34824 = (0);
seq__34719 = G__34821;
chunk__34720 = G__34822;
count__34721 = G__34823;
i__34722 = G__34824;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__34742){
var map__34743 = p__34742;
var map__34743__$1 = (((((!((map__34743 == null))))?(((((map__34743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34743):map__34743);
var effect = map__34743__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__34745 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34746 = null;
var count__34747 = (0);
var i__34748 = (0);
while(true){
if((i__34748 < count__34747)){
var effect = chunk__34746.cljs$core$IIndexed$_nth$arity$2(null,i__34748);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34825 = seq__34745;
var G__34826 = chunk__34746;
var G__34827 = count__34747;
var G__34828 = (i__34748 + (1));
seq__34745 = G__34825;
chunk__34746 = G__34826;
count__34747 = G__34827;
i__34748 = G__34828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34745);
if(temp__5735__auto__){
var seq__34745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34745__$1);
var G__34829 = cljs.core.chunk_rest(seq__34745__$1);
var G__34830 = c__4556__auto__;
var G__34831 = cljs.core.count(c__4556__auto__);
var G__34832 = (0);
seq__34745 = G__34829;
chunk__34746 = G__34830;
count__34747 = G__34831;
i__34748 = G__34832;
continue;
} else {
var effect = cljs.core.first(seq__34745__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__34833 = cljs.core.next(seq__34745__$1);
var G__34834 = null;
var G__34835 = (0);
var G__34836 = (0);
seq__34745 = G__34833;
chunk__34746 = G__34834;
count__34747 = G__34835;
i__34748 = G__34836;
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
var seq__34761 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__34762 = null;
var count__34763 = (0);
var i__34764 = (0);
while(true){
if((i__34764 < count__34763)){
var vec__34771 = chunk__34762.cljs$core$IIndexed$_nth$arity$2(null,i__34764);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___34837 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34837)){
var effect_fn_34838 = temp__5733__auto___34837;
(effect_fn_34838.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34838.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34838.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34840 = seq__34761;
var G__34841 = chunk__34762;
var G__34842 = count__34763;
var G__34843 = (i__34764 + (1));
seq__34761 = G__34840;
chunk__34762 = G__34841;
count__34763 = G__34842;
i__34764 = G__34843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34761);
if(temp__5735__auto__){
var seq__34761__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34761__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34761__$1);
var G__34849 = cljs.core.chunk_rest(seq__34761__$1);
var G__34850 = c__4556__auto__;
var G__34851 = cljs.core.count(c__4556__auto__);
var G__34852 = (0);
seq__34761 = G__34849;
chunk__34762 = G__34850;
count__34763 = G__34851;
i__34764 = G__34852;
continue;
} else {
var vec__34774 = cljs.core.first(seq__34761__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34774,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___34853 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34853)){
var effect_fn_34854 = temp__5733__auto___34853;
(effect_fn_34854.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34854.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34854.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__34855 = cljs.core.next(seq__34761__$1);
var G__34856 = null;
var G__34857 = (0);
var G__34858 = (0);
seq__34761 = G__34855;
chunk__34762 = G__34856;
count__34763 = G__34857;
i__34764 = G__34858;
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
var seq__34777 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34778 = null;
var count__34779 = (0);
var i__34780 = (0);
while(true){
if((i__34780 < count__34779)){
var event = chunk__34778.cljs$core$IIndexed$_nth$arity$2(null,i__34780);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34865 = seq__34777;
var G__34866 = chunk__34778;
var G__34867 = count__34779;
var G__34868 = (i__34780 + (1));
seq__34777 = G__34865;
chunk__34778 = G__34866;
count__34779 = G__34867;
i__34780 = G__34868;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34777);
if(temp__5735__auto__){
var seq__34777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34777__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34777__$1);
var G__34869 = cljs.core.chunk_rest(seq__34777__$1);
var G__34870 = c__4556__auto__;
var G__34871 = cljs.core.count(c__4556__auto__);
var G__34872 = (0);
seq__34777 = G__34869;
chunk__34778 = G__34870;
count__34779 = G__34871;
i__34780 = G__34872;
continue;
} else {
var event = cljs.core.first(seq__34777__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__34873 = cljs.core.next(seq__34777__$1);
var G__34874 = null;
var G__34875 = (0);
var G__34876 = (0);
seq__34777 = G__34873;
chunk__34778 = G__34874;
count__34779 = G__34875;
i__34780 = G__34876;
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
var seq__34781 = cljs.core.seq(value);
var chunk__34782 = null;
var count__34783 = (0);
var i__34784 = (0);
while(true){
if((i__34784 < count__34783)){
var event = chunk__34782.cljs$core$IIndexed$_nth$arity$2(null,i__34784);
clear_event(event);


var G__34882 = seq__34781;
var G__34883 = chunk__34782;
var G__34884 = count__34783;
var G__34885 = (i__34784 + (1));
seq__34781 = G__34882;
chunk__34782 = G__34883;
count__34783 = G__34884;
i__34784 = G__34885;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34781);
if(temp__5735__auto__){
var seq__34781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34781__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34781__$1);
var G__34886 = cljs.core.chunk_rest(seq__34781__$1);
var G__34887 = c__4556__auto__;
var G__34888 = cljs.core.count(c__4556__auto__);
var G__34889 = (0);
seq__34781 = G__34886;
chunk__34782 = G__34887;
count__34783 = G__34888;
i__34784 = G__34889;
continue;
} else {
var event = cljs.core.first(seq__34781__$1);
clear_event(event);


var G__34891 = cljs.core.next(seq__34781__$1);
var G__34892 = null;
var G__34893 = (0);
var G__34894 = (0);
seq__34781 = G__34891;
chunk__34782 = G__34892;
count__34783 = G__34893;
i__34784 = G__34894;
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
