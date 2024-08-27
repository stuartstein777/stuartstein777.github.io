goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__39394 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39395 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39395);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39562 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39562)){
var new_db_39563 = temp__5753__auto___39562;
var fexpr__39422_39564 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39422_39564.cljs$core$IFn$_invoke$arity$1 ? fexpr__39422_39564.cljs$core$IFn$_invoke$arity$1(new_db_39563) : fexpr__39422_39564.call(null,new_db_39563));
} else {
}

var seq__39423 = cljs.core.seq(effects_without_db);
var chunk__39424 = null;
var count__39425 = (0);
var i__39426 = (0);
while(true){
if((i__39426 < count__39425)){
var vec__39447 = chunk__39424.cljs$core$IIndexed$_nth$arity$2(null,i__39426);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39447,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39447,(1),null);
var temp__5751__auto___39567 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39567)){
var effect_fn_39568 = temp__5751__auto___39567;
(effect_fn_39568.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39568.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39568.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39570 = seq__39423;
var G__39571 = chunk__39424;
var G__39572 = count__39425;
var G__39573 = (i__39426 + (1));
seq__39423 = G__39570;
chunk__39424 = G__39571;
count__39425 = G__39572;
i__39426 = G__39573;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39423);
if(temp__5753__auto__){
var seq__39423__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39423__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39423__$1);
var G__39574 = cljs.core.chunk_rest(seq__39423__$1);
var G__39575 = c__4649__auto__;
var G__39576 = cljs.core.count(c__4649__auto__);
var G__39577 = (0);
seq__39423 = G__39574;
chunk__39424 = G__39575;
count__39425 = G__39576;
i__39426 = G__39577;
continue;
} else {
var vec__39450 = cljs.core.first(seq__39423__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39450,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39450,(1),null);
var temp__5751__auto___39581 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39581)){
var effect_fn_39582 = temp__5751__auto___39581;
(effect_fn_39582.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39582.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39582.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39586 = cljs.core.next(seq__39423__$1);
var G__39587 = null;
var G__39588 = (0);
var G__39589 = (0);
seq__39423 = G__39586;
chunk__39424 = G__39587;
count__39425 = G__39588;
i__39426 = G__39589;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38970__auto___39591 = re_frame.interop.now();
var duration__38971__auto___39592 = (end__38970__auto___39591 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38971__auto___39592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38970__auto___39591);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39394);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39593 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39593)){
var new_db_39594 = temp__5753__auto___39593;
var fexpr__39454_39595 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39454_39595.cljs$core$IFn$_invoke$arity$1 ? fexpr__39454_39595.cljs$core$IFn$_invoke$arity$1(new_db_39594) : fexpr__39454_39595.call(null,new_db_39594));
} else {
}

var seq__39456 = cljs.core.seq(effects_without_db);
var chunk__39457 = null;
var count__39458 = (0);
var i__39459 = (0);
while(true){
if((i__39459 < count__39458)){
var vec__39477 = chunk__39457.cljs$core$IIndexed$_nth$arity$2(null,i__39459);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39477,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39477,(1),null);
var temp__5751__auto___39596 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39596)){
var effect_fn_39597 = temp__5751__auto___39596;
(effect_fn_39597.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39597.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39597.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39598 = seq__39456;
var G__39599 = chunk__39457;
var G__39600 = count__39458;
var G__39601 = (i__39459 + (1));
seq__39456 = G__39598;
chunk__39457 = G__39599;
count__39458 = G__39600;
i__39459 = G__39601;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39456);
if(temp__5753__auto__){
var seq__39456__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39456__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39456__$1);
var G__39602 = cljs.core.chunk_rest(seq__39456__$1);
var G__39603 = c__4649__auto__;
var G__39604 = cljs.core.count(c__4649__auto__);
var G__39605 = (0);
seq__39456 = G__39602;
chunk__39457 = G__39603;
count__39458 = G__39604;
i__39459 = G__39605;
continue;
} else {
var vec__39482 = cljs.core.first(seq__39456__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39482,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39482,(1),null);
var temp__5751__auto___39606 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39606)){
var effect_fn_39607 = temp__5751__auto___39606;
(effect_fn_39607.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39607.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39607.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39608 = cljs.core.next(seq__39456__$1);
var G__39609 = null;
var G__39610 = (0);
var G__39611 = (0);
seq__39456 = G__39608;
chunk__39457 = G__39609;
count__39458 = G__39610;
i__39459 = G__39611;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39491){
var map__39492 = p__39491;
var map__39492__$1 = cljs.core.__destructure_map(map__39492);
var effect = map__39492__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39492__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39492__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__39494 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39495 = null;
var count__39496 = (0);
var i__39497 = (0);
while(true){
if((i__39497 < count__39496)){
var effect = chunk__39495.cljs$core$IIndexed$_nth$arity$2(null,i__39497);
re_frame.fx.dispatch_later(effect);


var G__39616 = seq__39494;
var G__39617 = chunk__39495;
var G__39618 = count__39496;
var G__39619 = (i__39497 + (1));
seq__39494 = G__39616;
chunk__39495 = G__39617;
count__39496 = G__39618;
i__39497 = G__39619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39494);
if(temp__5753__auto__){
var seq__39494__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39494__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39494__$1);
var G__39620 = cljs.core.chunk_rest(seq__39494__$1);
var G__39621 = c__4649__auto__;
var G__39622 = cljs.core.count(c__4649__auto__);
var G__39623 = (0);
seq__39494 = G__39620;
chunk__39495 = G__39621;
count__39496 = G__39622;
i__39497 = G__39623;
continue;
} else {
var effect = cljs.core.first(seq__39494__$1);
re_frame.fx.dispatch_later(effect);


var G__39624 = cljs.core.next(seq__39494__$1);
var G__39625 = null;
var G__39626 = (0);
var G__39627 = (0);
seq__39494 = G__39624;
chunk__39495 = G__39625;
count__39496 = G__39626;
i__39497 = G__39627;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__39499 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39500 = null;
var count__39501 = (0);
var i__39502 = (0);
while(true){
if((i__39502 < count__39501)){
var vec__39523 = chunk__39500.cljs$core$IIndexed$_nth$arity$2(null,i__39502);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39523,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39628 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39628)){
var effect_fn_39629 = temp__5751__auto___39628;
(effect_fn_39629.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39629.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39629.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39630 = seq__39499;
var G__39631 = chunk__39500;
var G__39632 = count__39501;
var G__39633 = (i__39502 + (1));
seq__39499 = G__39630;
chunk__39500 = G__39631;
count__39501 = G__39632;
i__39502 = G__39633;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39499);
if(temp__5753__auto__){
var seq__39499__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39499__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39499__$1);
var G__39634 = cljs.core.chunk_rest(seq__39499__$1);
var G__39635 = c__4649__auto__;
var G__39636 = cljs.core.count(c__4649__auto__);
var G__39637 = (0);
seq__39499 = G__39634;
chunk__39500 = G__39635;
count__39501 = G__39636;
i__39502 = G__39637;
continue;
} else {
var vec__39527 = cljs.core.first(seq__39499__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39527,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39527,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39639 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39639)){
var effect_fn_39640 = temp__5751__auto___39639;
(effect_fn_39640.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39640.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39640.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39641 = cljs.core.next(seq__39499__$1);
var G__39642 = null;
var G__39643 = (0);
var G__39644 = (0);
seq__39499 = G__39641;
chunk__39500 = G__39642;
count__39501 = G__39643;
i__39502 = G__39644;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__39531 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39532 = null;
var count__39533 = (0);
var i__39534 = (0);
while(true){
if((i__39534 < count__39533)){
var event = chunk__39532.cljs$core$IIndexed$_nth$arity$2(null,i__39534);
re_frame.router.dispatch(event);


var G__39652 = seq__39531;
var G__39653 = chunk__39532;
var G__39654 = count__39533;
var G__39655 = (i__39534 + (1));
seq__39531 = G__39652;
chunk__39532 = G__39653;
count__39533 = G__39654;
i__39534 = G__39655;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39531);
if(temp__5753__auto__){
var seq__39531__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39531__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39531__$1);
var G__39656 = cljs.core.chunk_rest(seq__39531__$1);
var G__39657 = c__4649__auto__;
var G__39658 = cljs.core.count(c__4649__auto__);
var G__39659 = (0);
seq__39531 = G__39656;
chunk__39532 = G__39657;
count__39533 = G__39658;
i__39534 = G__39659;
continue;
} else {
var event = cljs.core.first(seq__39531__$1);
re_frame.router.dispatch(event);


var G__39660 = cljs.core.next(seq__39531__$1);
var G__39661 = null;
var G__39662 = (0);
var G__39663 = (0);
seq__39531 = G__39660;
chunk__39532 = G__39661;
count__39533 = G__39662;
i__39534 = G__39663;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__39535 = cljs.core.seq(value);
var chunk__39536 = null;
var count__39537 = (0);
var i__39538 = (0);
while(true){
if((i__39538 < count__39537)){
var event = chunk__39536.cljs$core$IIndexed$_nth$arity$2(null,i__39538);
clear_event(event);


var G__39664 = seq__39535;
var G__39665 = chunk__39536;
var G__39666 = count__39537;
var G__39667 = (i__39538 + (1));
seq__39535 = G__39664;
chunk__39536 = G__39665;
count__39537 = G__39666;
i__39538 = G__39667;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39535);
if(temp__5753__auto__){
var seq__39535__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39535__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39535__$1);
var G__39668 = cljs.core.chunk_rest(seq__39535__$1);
var G__39669 = c__4649__auto__;
var G__39670 = cljs.core.count(c__4649__auto__);
var G__39671 = (0);
seq__39535 = G__39668;
chunk__39536 = G__39669;
count__39537 = G__39670;
i__39538 = G__39671;
continue;
} else {
var event = cljs.core.first(seq__39535__$1);
clear_event(event);


var G__39672 = cljs.core.next(seq__39535__$1);
var G__39673 = null;
var G__39674 = (0);
var G__39675 = (0);
seq__39535 = G__39672;
chunk__39536 = G__39673;
count__39537 = G__39674;
i__39538 = G__39675;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
