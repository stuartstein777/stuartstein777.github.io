goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
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
var _STAR_current_trace_STAR__orig_val__39467 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39468 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39468);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___39587 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___39587)){
var new_db_39589 = temp__5735__auto___39587;
var fexpr__39470_39590 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39470_39590.cljs$core$IFn$_invoke$arity$1 ? fexpr__39470_39590.cljs$core$IFn$_invoke$arity$1(new_db_39589) : fexpr__39470_39590.call(null,new_db_39589));
} else {
}

var seq__39471 = cljs.core.seq(effects_without_db);
var chunk__39472 = null;
var count__39473 = (0);
var i__39474 = (0);
while(true){
if((i__39474 < count__39473)){
var vec__39485 = chunk__39472.cljs$core$IIndexed$_nth$arity$2(null,i__39474);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39485,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39485,(1),null);
var temp__5733__auto___39591 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39591)){
var effect_fn_39592 = temp__5733__auto___39591;
(effect_fn_39592.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39592.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39592.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39593 = seq__39471;
var G__39594 = chunk__39472;
var G__39595 = count__39473;
var G__39596 = (i__39474 + (1));
seq__39471 = G__39593;
chunk__39472 = G__39594;
count__39473 = G__39595;
i__39474 = G__39596;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39471);
if(temp__5735__auto__){
var seq__39471__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39471__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39471__$1);
var G__39597 = cljs.core.chunk_rest(seq__39471__$1);
var G__39598 = c__4556__auto__;
var G__39599 = cljs.core.count(c__4556__auto__);
var G__39600 = (0);
seq__39471 = G__39597;
chunk__39472 = G__39598;
count__39473 = G__39599;
i__39474 = G__39600;
continue;
} else {
var vec__39501 = cljs.core.first(seq__39471__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39501,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39501,(1),null);
var temp__5733__auto___39601 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39601)){
var effect_fn_39603 = temp__5733__auto___39601;
(effect_fn_39603.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39603.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39603.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39606 = cljs.core.next(seq__39471__$1);
var G__39607 = null;
var G__39608 = (0);
var G__39609 = (0);
seq__39471 = G__39606;
chunk__39472 = G__39607;
count__39473 = G__39608;
i__39474 = G__39609;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39037__auto___39610 = re_frame.interop.now();
var duration__39038__auto___39611 = (end__39037__auto___39610 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39038__auto___39611,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39037__auto___39610);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39467);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___39612 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___39612)){
var new_db_39613 = temp__5735__auto___39612;
var fexpr__39505_39614 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39505_39614.cljs$core$IFn$_invoke$arity$1 ? fexpr__39505_39614.cljs$core$IFn$_invoke$arity$1(new_db_39613) : fexpr__39505_39614.call(null,new_db_39613));
} else {
}

var seq__39506 = cljs.core.seq(effects_without_db);
var chunk__39507 = null;
var count__39508 = (0);
var i__39509 = (0);
while(true){
if((i__39509 < count__39508)){
var vec__39516 = chunk__39507.cljs$core$IIndexed$_nth$arity$2(null,i__39509);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39516,(1),null);
var temp__5733__auto___39624 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39624)){
var effect_fn_39625 = temp__5733__auto___39624;
(effect_fn_39625.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39625.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39625.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39626 = seq__39506;
var G__39627 = chunk__39507;
var G__39628 = count__39508;
var G__39629 = (i__39509 + (1));
seq__39506 = G__39626;
chunk__39507 = G__39627;
count__39508 = G__39628;
i__39509 = G__39629;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39506);
if(temp__5735__auto__){
var seq__39506__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39506__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39506__$1);
var G__39630 = cljs.core.chunk_rest(seq__39506__$1);
var G__39631 = c__4556__auto__;
var G__39632 = cljs.core.count(c__4556__auto__);
var G__39633 = (0);
seq__39506 = G__39630;
chunk__39507 = G__39631;
count__39508 = G__39632;
i__39509 = G__39633;
continue;
} else {
var vec__39519 = cljs.core.first(seq__39506__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39519,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39519,(1),null);
var temp__5733__auto___39634 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39634)){
var effect_fn_39635 = temp__5733__auto___39634;
(effect_fn_39635.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39635.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39635.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39637 = cljs.core.next(seq__39506__$1);
var G__39638 = null;
var G__39639 = (0);
var G__39640 = (0);
seq__39506 = G__39637;
chunk__39507 = G__39638;
count__39508 = G__39639;
i__39509 = G__39640;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39523){
var map__39524 = p__39523;
var map__39524__$1 = (((((!((map__39524 == null))))?(((((map__39524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39524):map__39524);
var effect = map__39524__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39524__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39524__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__39530 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39531 = null;
var count__39532 = (0);
var i__39533 = (0);
while(true){
if((i__39533 < count__39532)){
var effect = chunk__39531.cljs$core$IIndexed$_nth$arity$2(null,i__39533);
re_frame.fx.dispatch_later(effect);


var G__39650 = seq__39530;
var G__39651 = chunk__39531;
var G__39652 = count__39532;
var G__39653 = (i__39533 + (1));
seq__39530 = G__39650;
chunk__39531 = G__39651;
count__39532 = G__39652;
i__39533 = G__39653;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39530);
if(temp__5735__auto__){
var seq__39530__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39530__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39530__$1);
var G__39654 = cljs.core.chunk_rest(seq__39530__$1);
var G__39655 = c__4556__auto__;
var G__39656 = cljs.core.count(c__4556__auto__);
var G__39657 = (0);
seq__39530 = G__39654;
chunk__39531 = G__39655;
count__39532 = G__39656;
i__39533 = G__39657;
continue;
} else {
var effect = cljs.core.first(seq__39530__$1);
re_frame.fx.dispatch_later(effect);


var G__39658 = cljs.core.next(seq__39530__$1);
var G__39659 = null;
var G__39660 = (0);
var G__39661 = (0);
seq__39530 = G__39658;
chunk__39531 = G__39659;
count__39532 = G__39660;
i__39533 = G__39661;
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
var seq__39537 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39538 = null;
var count__39539 = (0);
var i__39540 = (0);
while(true){
if((i__39540 < count__39539)){
var vec__39549 = chunk__39538.cljs$core$IIndexed$_nth$arity$2(null,i__39540);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39549,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___39666 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39666)){
var effect_fn_39667 = temp__5733__auto___39666;
(effect_fn_39667.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39667.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39667.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39668 = seq__39537;
var G__39669 = chunk__39538;
var G__39670 = count__39539;
var G__39671 = (i__39540 + (1));
seq__39537 = G__39668;
chunk__39538 = G__39669;
count__39539 = G__39670;
i__39540 = G__39671;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39537);
if(temp__5735__auto__){
var seq__39537__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39537__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39537__$1);
var G__39675 = cljs.core.chunk_rest(seq__39537__$1);
var G__39676 = c__4556__auto__;
var G__39677 = cljs.core.count(c__4556__auto__);
var G__39678 = (0);
seq__39537 = G__39675;
chunk__39538 = G__39676;
count__39539 = G__39677;
i__39540 = G__39678;
continue;
} else {
var vec__39552 = cljs.core.first(seq__39537__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39552,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39552,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___39679 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39679)){
var effect_fn_39680 = temp__5733__auto___39679;
(effect_fn_39680.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39680.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39680.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39684 = cljs.core.next(seq__39537__$1);
var G__39685 = null;
var G__39686 = (0);
var G__39687 = (0);
seq__39537 = G__39684;
chunk__39538 = G__39685;
count__39539 = G__39686;
i__39540 = G__39687;
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
var seq__39559 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39560 = null;
var count__39561 = (0);
var i__39562 = (0);
while(true){
if((i__39562 < count__39561)){
var event = chunk__39560.cljs$core$IIndexed$_nth$arity$2(null,i__39562);
re_frame.router.dispatch(event);


var G__39689 = seq__39559;
var G__39690 = chunk__39560;
var G__39691 = count__39561;
var G__39692 = (i__39562 + (1));
seq__39559 = G__39689;
chunk__39560 = G__39690;
count__39561 = G__39691;
i__39562 = G__39692;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39559);
if(temp__5735__auto__){
var seq__39559__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39559__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39559__$1);
var G__39696 = cljs.core.chunk_rest(seq__39559__$1);
var G__39697 = c__4556__auto__;
var G__39698 = cljs.core.count(c__4556__auto__);
var G__39699 = (0);
seq__39559 = G__39696;
chunk__39560 = G__39697;
count__39561 = G__39698;
i__39562 = G__39699;
continue;
} else {
var event = cljs.core.first(seq__39559__$1);
re_frame.router.dispatch(event);


var G__39700 = cljs.core.next(seq__39559__$1);
var G__39701 = null;
var G__39702 = (0);
var G__39703 = (0);
seq__39559 = G__39700;
chunk__39560 = G__39701;
count__39561 = G__39702;
i__39562 = G__39703;
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
var seq__39568 = cljs.core.seq(value);
var chunk__39569 = null;
var count__39570 = (0);
var i__39571 = (0);
while(true){
if((i__39571 < count__39570)){
var event = chunk__39569.cljs$core$IIndexed$_nth$arity$2(null,i__39571);
clear_event(event);


var G__39704 = seq__39568;
var G__39705 = chunk__39569;
var G__39706 = count__39570;
var G__39707 = (i__39571 + (1));
seq__39568 = G__39704;
chunk__39569 = G__39705;
count__39570 = G__39706;
i__39571 = G__39707;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39568);
if(temp__5735__auto__){
var seq__39568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39568__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39568__$1);
var G__39708 = cljs.core.chunk_rest(seq__39568__$1);
var G__39709 = c__4556__auto__;
var G__39710 = cljs.core.count(c__4556__auto__);
var G__39711 = (0);
seq__39568 = G__39708;
chunk__39569 = G__39709;
count__39570 = G__39710;
i__39571 = G__39711;
continue;
} else {
var event = cljs.core.first(seq__39568__$1);
clear_event(event);


var G__39712 = cljs.core.next(seq__39568__$1);
var G__39713 = null;
var G__39714 = (0);
var G__39715 = (0);
seq__39568 = G__39712;
chunk__39569 = G__39713;
count__39570 = G__39714;
i__39571 = G__39715;
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
