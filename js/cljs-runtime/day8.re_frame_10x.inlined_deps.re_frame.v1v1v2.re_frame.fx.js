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
var _STAR_current_trace_STAR__orig_val__31367 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__31368 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__31368);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31511 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31511)){
var new_db_31512 = temp__5735__auto___31511;
var fexpr__31371_31513 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31371_31513.cljs$core$IFn$_invoke$arity$1 ? fexpr__31371_31513.cljs$core$IFn$_invoke$arity$1(new_db_31512) : fexpr__31371_31513.call(null,new_db_31512));
} else {
}

var seq__31372 = cljs.core.seq(effects_without_db);
var chunk__31373 = null;
var count__31374 = (0);
var i__31375 = (0);
while(true){
if((i__31375 < count__31374)){
var vec__31385 = chunk__31373.cljs$core$IIndexed$_nth$arity$2(null,i__31375);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31385,(1),null);
var temp__5733__auto___31517 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31517)){
var effect_fn_31518 = temp__5733__auto___31517;
(effect_fn_31518.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31518.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31518.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31519 = seq__31372;
var G__31520 = chunk__31373;
var G__31521 = count__31374;
var G__31522 = (i__31375 + (1));
seq__31372 = G__31519;
chunk__31373 = G__31520;
count__31374 = G__31521;
i__31375 = G__31522;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31372);
if(temp__5735__auto__){
var seq__31372__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31372__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31372__$1);
var G__31523 = cljs.core.chunk_rest(seq__31372__$1);
var G__31524 = c__4556__auto__;
var G__31525 = cljs.core.count(c__4556__auto__);
var G__31526 = (0);
seq__31372 = G__31523;
chunk__31373 = G__31524;
count__31374 = G__31525;
i__31375 = G__31526;
continue;
} else {
var vec__31394 = cljs.core.first(seq__31372__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31394,(1),null);
var temp__5733__auto___31527 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31527)){
var effect_fn_31528 = temp__5733__auto___31527;
(effect_fn_31528.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31528.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31528.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31529 = cljs.core.next(seq__31372__$1);
var G__31530 = null;
var G__31531 = (0);
var G__31532 = (0);
seq__31372 = G__31529;
chunk__31373 = G__31530;
count__31374 = G__31531;
i__31375 = G__31532;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31035__auto___31533 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31036__auto___31534 = (end__31035__auto___31533 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31036__auto___31534,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31035__auto___31533);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__31367);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___31535 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___31535)){
var new_db_31536 = temp__5735__auto___31535;
var fexpr__31398_31537 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__31398_31537.cljs$core$IFn$_invoke$arity$1 ? fexpr__31398_31537.cljs$core$IFn$_invoke$arity$1(new_db_31536) : fexpr__31398_31537.call(null,new_db_31536));
} else {
}

var seq__31399 = cljs.core.seq(effects_without_db);
var chunk__31400 = null;
var count__31401 = (0);
var i__31402 = (0);
while(true){
if((i__31402 < count__31401)){
var vec__31414 = chunk__31400.cljs$core$IIndexed$_nth$arity$2(null,i__31402);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31414,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31414,(1),null);
var temp__5733__auto___31538 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31538)){
var effect_fn_31539 = temp__5733__auto___31538;
(effect_fn_31539.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31539.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31539.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31540 = seq__31399;
var G__31541 = chunk__31400;
var G__31542 = count__31401;
var G__31543 = (i__31402 + (1));
seq__31399 = G__31540;
chunk__31400 = G__31541;
count__31401 = G__31542;
i__31402 = G__31543;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31399);
if(temp__5735__auto__){
var seq__31399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31399__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31399__$1);
var G__31544 = cljs.core.chunk_rest(seq__31399__$1);
var G__31545 = c__4556__auto__;
var G__31546 = cljs.core.count(c__4556__auto__);
var G__31547 = (0);
seq__31399 = G__31544;
chunk__31400 = G__31545;
count__31401 = G__31546;
i__31402 = G__31547;
continue;
} else {
var vec__31418 = cljs.core.first(seq__31399__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31418,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31418,(1),null);
var temp__5733__auto___31549 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31549)){
var effect_fn_31550 = temp__5733__auto___31549;
(effect_fn_31550.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31550.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31550.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__31552 = cljs.core.next(seq__31399__$1);
var G__31553 = null;
var G__31554 = (0);
var G__31555 = (0);
seq__31399 = G__31552;
chunk__31400 = G__31553;
count__31401 = G__31554;
i__31402 = G__31555;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__31430){
var map__31434 = p__31430;
var map__31434__$1 = (((((!((map__31434 == null))))?(((((map__31434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31434):map__31434);
var effect = map__31434__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31434__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__31442 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31443 = null;
var count__31444 = (0);
var i__31445 = (0);
while(true){
if((i__31445 < count__31444)){
var effect = chunk__31443.cljs$core$IIndexed$_nth$arity$2(null,i__31445);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__31556 = seq__31442;
var G__31557 = chunk__31443;
var G__31558 = count__31444;
var G__31559 = (i__31445 + (1));
seq__31442 = G__31556;
chunk__31443 = G__31557;
count__31444 = G__31558;
i__31445 = G__31559;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31442);
if(temp__5735__auto__){
var seq__31442__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31442__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31442__$1);
var G__31560 = cljs.core.chunk_rest(seq__31442__$1);
var G__31561 = c__4556__auto__;
var G__31562 = cljs.core.count(c__4556__auto__);
var G__31563 = (0);
seq__31442 = G__31560;
chunk__31443 = G__31561;
count__31444 = G__31562;
i__31445 = G__31563;
continue;
} else {
var effect = cljs.core.first(seq__31442__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__31564 = cljs.core.next(seq__31442__$1);
var G__31565 = null;
var G__31566 = (0);
var G__31567 = (0);
seq__31442 = G__31564;
chunk__31443 = G__31565;
count__31444 = G__31566;
i__31445 = G__31567;
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
var seq__31448 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__31449 = null;
var count__31450 = (0);
var i__31451 = (0);
while(true){
if((i__31451 < count__31450)){
var vec__31495 = chunk__31449.cljs$core$IIndexed$_nth$arity$2(null,i__31451);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31495,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31495,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___31569 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31569)){
var effect_fn_31570 = temp__5733__auto___31569;
(effect_fn_31570.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31570.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31570.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31571 = seq__31448;
var G__31572 = chunk__31449;
var G__31573 = count__31450;
var G__31574 = (i__31451 + (1));
seq__31448 = G__31571;
chunk__31449 = G__31572;
count__31450 = G__31573;
i__31451 = G__31574;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31448);
if(temp__5735__auto__){
var seq__31448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31448__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31448__$1);
var G__31575 = cljs.core.chunk_rest(seq__31448__$1);
var G__31576 = c__4556__auto__;
var G__31577 = cljs.core.count(c__4556__auto__);
var G__31578 = (0);
seq__31448 = G__31575;
chunk__31449 = G__31576;
count__31450 = G__31577;
i__31451 = G__31578;
continue;
} else {
var vec__31498 = cljs.core.first(seq__31448__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31498,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31498,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___31580 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___31580)){
var effect_fn_31581 = temp__5733__auto___31580;
(effect_fn_31581.cljs$core$IFn$_invoke$arity$1 ? effect_fn_31581.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_31581.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__31582 = cljs.core.next(seq__31448__$1);
var G__31583 = null;
var G__31584 = (0);
var G__31585 = (0);
seq__31448 = G__31582;
chunk__31449 = G__31583;
count__31450 = G__31584;
i__31451 = G__31585;
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
var seq__31501 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__31502 = null;
var count__31503 = (0);
var i__31504 = (0);
while(true){
if((i__31504 < count__31503)){
var event = chunk__31502.cljs$core$IIndexed$_nth$arity$2(null,i__31504);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__31586 = seq__31501;
var G__31587 = chunk__31502;
var G__31588 = count__31503;
var G__31589 = (i__31504 + (1));
seq__31501 = G__31586;
chunk__31502 = G__31587;
count__31503 = G__31588;
i__31504 = G__31589;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31501);
if(temp__5735__auto__){
var seq__31501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31501__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31501__$1);
var G__31590 = cljs.core.chunk_rest(seq__31501__$1);
var G__31591 = c__4556__auto__;
var G__31592 = cljs.core.count(c__4556__auto__);
var G__31593 = (0);
seq__31501 = G__31590;
chunk__31502 = G__31591;
count__31503 = G__31592;
i__31504 = G__31593;
continue;
} else {
var event = cljs.core.first(seq__31501__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__31595 = cljs.core.next(seq__31501__$1);
var G__31596 = null;
var G__31597 = (0);
var G__31598 = (0);
seq__31501 = G__31595;
chunk__31502 = G__31596;
count__31503 = G__31597;
i__31504 = G__31598;
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
var seq__31505 = cljs.core.seq(value);
var chunk__31506 = null;
var count__31507 = (0);
var i__31508 = (0);
while(true){
if((i__31508 < count__31507)){
var event = chunk__31506.cljs$core$IIndexed$_nth$arity$2(null,i__31508);
clear_event(event);


var G__31600 = seq__31505;
var G__31601 = chunk__31506;
var G__31602 = count__31507;
var G__31603 = (i__31508 + (1));
seq__31505 = G__31600;
chunk__31506 = G__31601;
count__31507 = G__31602;
i__31508 = G__31603;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31505);
if(temp__5735__auto__){
var seq__31505__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31505__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31505__$1);
var G__31604 = cljs.core.chunk_rest(seq__31505__$1);
var G__31605 = c__4556__auto__;
var G__31606 = cljs.core.count(c__4556__auto__);
var G__31607 = (0);
seq__31505 = G__31604;
chunk__31506 = G__31605;
count__31507 = G__31606;
i__31508 = G__31607;
continue;
} else {
var event = cljs.core.first(seq__31505__$1);
clear_event(event);


var G__31608 = cljs.core.next(seq__31505__$1);
var G__31609 = null;
var G__31610 = (0);
var G__31611 = (0);
seq__31505 = G__31608;
chunk__31506 = G__31609;
count__31507 = G__31610;
i__31508 = G__31611;
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
