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
var _STAR_current_trace_STAR__orig_val__20258 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20259 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20259);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20371 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20371)){
var new_db_20372 = temp__5804__auto___20371;
var fexpr__20276_20373 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20276_20373.cljs$core$IFn$_invoke$arity$1 ? fexpr__20276_20373.cljs$core$IFn$_invoke$arity$1(new_db_20372) : fexpr__20276_20373.call(null,new_db_20372));
} else {
}

var seq__20284 = cljs.core.seq(effects_without_db);
var chunk__20287 = null;
var count__20288 = (0);
var i__20289 = (0);
while(true){
if((i__20289 < count__20288)){
var vec__20301 = chunk__20287.cljs$core$IIndexed$_nth$arity$2(null,i__20289);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20301,(1),null);
var temp__5802__auto___20374 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20374)){
var effect_fn_20375 = temp__5802__auto___20374;
(effect_fn_20375.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20375.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20375.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20376 = seq__20284;
var G__20377 = chunk__20287;
var G__20378 = count__20288;
var G__20379 = (i__20289 + (1));
seq__20284 = G__20376;
chunk__20287 = G__20377;
count__20288 = G__20378;
i__20289 = G__20379;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20284);
if(temp__5804__auto__){
var seq__20284__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20284__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20284__$1);
var G__20380 = cljs.core.chunk_rest(seq__20284__$1);
var G__20381 = c__5568__auto__;
var G__20382 = cljs.core.count(c__5568__auto__);
var G__20383 = (0);
seq__20284 = G__20380;
chunk__20287 = G__20381;
count__20288 = G__20382;
i__20289 = G__20383;
continue;
} else {
var vec__20316 = cljs.core.first(seq__20284__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20316,(1),null);
var temp__5802__auto___20384 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20384)){
var effect_fn_20385 = temp__5802__auto___20384;
(effect_fn_20385.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20385.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20385.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20386 = cljs.core.next(seq__20284__$1);
var G__20387 = null;
var G__20388 = (0);
var G__20389 = (0);
seq__20284 = G__20386;
chunk__20287 = G__20387;
count__20288 = G__20388;
i__20289 = G__20389;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__19900__auto___20390 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__19901__auto___20391 = (end__19900__auto___20390 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__19901__auto___20391,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__19900__auto___20390);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20258);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___20392 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___20392)){
var new_db_20393 = temp__5804__auto___20392;
var fexpr__20319_20394 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20319_20394.cljs$core$IFn$_invoke$arity$1 ? fexpr__20319_20394.cljs$core$IFn$_invoke$arity$1(new_db_20393) : fexpr__20319_20394.call(null,new_db_20393));
} else {
}

var seq__20320 = cljs.core.seq(effects_without_db);
var chunk__20321 = null;
var count__20322 = (0);
var i__20323 = (0);
while(true){
if((i__20323 < count__20322)){
var vec__20330 = chunk__20321.cljs$core$IIndexed$_nth$arity$2(null,i__20323);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20330,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20330,(1),null);
var temp__5802__auto___20395 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20395)){
var effect_fn_20396 = temp__5802__auto___20395;
(effect_fn_20396.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20396.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20396.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20397 = seq__20320;
var G__20398 = chunk__20321;
var G__20399 = count__20322;
var G__20400 = (i__20323 + (1));
seq__20320 = G__20397;
chunk__20321 = G__20398;
count__20322 = G__20399;
i__20323 = G__20400;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20320);
if(temp__5804__auto__){
var seq__20320__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20320__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20320__$1);
var G__20401 = cljs.core.chunk_rest(seq__20320__$1);
var G__20402 = c__5568__auto__;
var G__20403 = cljs.core.count(c__5568__auto__);
var G__20404 = (0);
seq__20320 = G__20401;
chunk__20321 = G__20402;
count__20322 = G__20403;
i__20323 = G__20404;
continue;
} else {
var vec__20333 = cljs.core.first(seq__20320__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20333,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20333,(1),null);
var temp__5802__auto___20405 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20405)){
var effect_fn_20406 = temp__5802__auto___20405;
(effect_fn_20406.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20406.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20406.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__20407 = cljs.core.next(seq__20320__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20320 = G__20407;
chunk__20321 = G__20408;
count__20322 = G__20409;
i__20323 = G__20410;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__20336){
var map__20337 = p__20336;
var map__20337__$1 = cljs.core.__destructure_map(map__20337);
var effect = map__20337__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20337__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20337__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__20338 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20339 = null;
var count__20340 = (0);
var i__20341 = (0);
while(true){
if((i__20341 < count__20340)){
var effect = chunk__20339.cljs$core$IIndexed$_nth$arity$2(null,i__20341);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20411 = seq__20338;
var G__20412 = chunk__20339;
var G__20413 = count__20340;
var G__20414 = (i__20341 + (1));
seq__20338 = G__20411;
chunk__20339 = G__20412;
count__20340 = G__20413;
i__20341 = G__20414;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20338);
if(temp__5804__auto__){
var seq__20338__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20338__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20338__$1);
var G__20415 = cljs.core.chunk_rest(seq__20338__$1);
var G__20416 = c__5568__auto__;
var G__20417 = cljs.core.count(c__5568__auto__);
var G__20418 = (0);
seq__20338 = G__20415;
chunk__20339 = G__20416;
count__20340 = G__20417;
i__20341 = G__20418;
continue;
} else {
var effect = cljs.core.first(seq__20338__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__20419 = cljs.core.next(seq__20338__$1);
var G__20420 = null;
var G__20421 = (0);
var G__20422 = (0);
seq__20338 = G__20419;
chunk__20339 = G__20420;
count__20340 = G__20421;
i__20341 = G__20422;
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
var seq__20342 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__20343 = null;
var count__20344 = (0);
var i__20345 = (0);
while(true){
if((i__20345 < count__20344)){
var vec__20352 = chunk__20343.cljs$core$IIndexed$_nth$arity$2(null,i__20345);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20352,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20423 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20423)){
var effect_fn_20424 = temp__5802__auto___20423;
(effect_fn_20424.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20424.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20424.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20425 = seq__20342;
var G__20426 = chunk__20343;
var G__20427 = count__20344;
var G__20428 = (i__20345 + (1));
seq__20342 = G__20425;
chunk__20343 = G__20426;
count__20344 = G__20427;
i__20345 = G__20428;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20342);
if(temp__5804__auto__){
var seq__20342__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20342__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20342__$1);
var G__20429 = cljs.core.chunk_rest(seq__20342__$1);
var G__20430 = c__5568__auto__;
var G__20431 = cljs.core.count(c__5568__auto__);
var G__20432 = (0);
seq__20342 = G__20429;
chunk__20343 = G__20430;
count__20344 = G__20431;
i__20345 = G__20432;
continue;
} else {
var vec__20355 = cljs.core.first(seq__20342__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20355,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___20433 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___20433)){
var effect_fn_20434 = temp__5802__auto___20433;
(effect_fn_20434.cljs$core$IFn$_invoke$arity$1 ? effect_fn_20434.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_20434.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__20435 = cljs.core.next(seq__20342__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__20342 = G__20435;
chunk__20343 = G__20436;
count__20344 = G__20437;
i__20345 = G__20438;
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
var seq__20360 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__20361 = null;
var count__20362 = (0);
var i__20363 = (0);
while(true){
if((i__20363 < count__20362)){
var event = chunk__20361.cljs$core$IIndexed$_nth$arity$2(null,i__20363);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20439 = seq__20360;
var G__20440 = chunk__20361;
var G__20441 = count__20362;
var G__20442 = (i__20363 + (1));
seq__20360 = G__20439;
chunk__20361 = G__20440;
count__20362 = G__20441;
i__20363 = G__20442;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20360);
if(temp__5804__auto__){
var seq__20360__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20360__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20360__$1);
var G__20443 = cljs.core.chunk_rest(seq__20360__$1);
var G__20444 = c__5568__auto__;
var G__20445 = cljs.core.count(c__5568__auto__);
var G__20446 = (0);
seq__20360 = G__20443;
chunk__20361 = G__20444;
count__20362 = G__20445;
i__20363 = G__20446;
continue;
} else {
var event = cljs.core.first(seq__20360__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__20447 = cljs.core.next(seq__20360__$1);
var G__20448 = null;
var G__20449 = (0);
var G__20450 = (0);
seq__20360 = G__20447;
chunk__20361 = G__20448;
count__20362 = G__20449;
i__20363 = G__20450;
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
var seq__20367 = cljs.core.seq(value);
var chunk__20368 = null;
var count__20369 = (0);
var i__20370 = (0);
while(true){
if((i__20370 < count__20369)){
var event = chunk__20368.cljs$core$IIndexed$_nth$arity$2(null,i__20370);
clear_event(event);


var G__20451 = seq__20367;
var G__20452 = chunk__20368;
var G__20453 = count__20369;
var G__20454 = (i__20370 + (1));
seq__20367 = G__20451;
chunk__20368 = G__20452;
count__20369 = G__20453;
i__20370 = G__20454;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20367);
if(temp__5804__auto__){
var seq__20367__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20367__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20367__$1);
var G__20455 = cljs.core.chunk_rest(seq__20367__$1);
var G__20456 = c__5568__auto__;
var G__20457 = cljs.core.count(c__5568__auto__);
var G__20458 = (0);
seq__20367 = G__20455;
chunk__20368 = G__20456;
count__20369 = G__20457;
i__20370 = G__20458;
continue;
} else {
var event = cljs.core.first(seq__20367__$1);
clear_event(event);


var G__20459 = cljs.core.next(seq__20367__$1);
var G__20460 = null;
var G__20461 = (0);
var G__20462 = (0);
seq__20367 = G__20459;
chunk__20368 = G__20460;
count__20369 = G__20461;
i__20370 = G__20462;
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
