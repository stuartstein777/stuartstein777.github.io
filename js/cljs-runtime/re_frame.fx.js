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
var _STAR_current_trace_STAR__orig_val__40145 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40146 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40146);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40269 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40269)){
var new_db_40270 = temp__5735__auto___40269;
var fexpr__40148_40271 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40148_40271.cljs$core$IFn$_invoke$arity$1 ? fexpr__40148_40271.cljs$core$IFn$_invoke$arity$1(new_db_40270) : fexpr__40148_40271.call(null,new_db_40270));
} else {
}

var seq__40149 = cljs.core.seq(effects_without_db);
var chunk__40150 = null;
var count__40151 = (0);
var i__40152 = (0);
while(true){
if((i__40152 < count__40151)){
var vec__40162 = chunk__40150.cljs$core$IIndexed$_nth$arity$2(null,i__40152);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40162,(1),null);
var temp__5733__auto___40272 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40272)){
var effect_fn_40273 = temp__5733__auto___40272;
(effect_fn_40273.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40273.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40273.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40274 = seq__40149;
var G__40275 = chunk__40150;
var G__40276 = count__40151;
var G__40277 = (i__40152 + (1));
seq__40149 = G__40274;
chunk__40150 = G__40275;
count__40151 = G__40276;
i__40152 = G__40277;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40149);
if(temp__5735__auto__){
var seq__40149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40149__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40149__$1);
var G__40279 = cljs.core.chunk_rest(seq__40149__$1);
var G__40280 = c__4556__auto__;
var G__40281 = cljs.core.count(c__4556__auto__);
var G__40282 = (0);
seq__40149 = G__40279;
chunk__40150 = G__40280;
count__40151 = G__40281;
i__40152 = G__40282;
continue;
} else {
var vec__40166 = cljs.core.first(seq__40149__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40166,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40166,(1),null);
var temp__5733__auto___40286 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40286)){
var effect_fn_40287 = temp__5733__auto___40286;
(effect_fn_40287.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40287.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40287.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40294 = cljs.core.next(seq__40149__$1);
var G__40295 = null;
var G__40296 = (0);
var G__40297 = (0);
seq__40149 = G__40294;
chunk__40150 = G__40295;
count__40151 = G__40296;
i__40152 = G__40297;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39755__auto___40298 = re_frame.interop.now();
var duration__39756__auto___40299 = (end__39755__auto___40298 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39756__auto___40299,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39755__auto___40298);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40145);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40304 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40304)){
var new_db_40305 = temp__5735__auto___40304;
var fexpr__40170_40306 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40170_40306.cljs$core$IFn$_invoke$arity$1 ? fexpr__40170_40306.cljs$core$IFn$_invoke$arity$1(new_db_40305) : fexpr__40170_40306.call(null,new_db_40305));
} else {
}

var seq__40172 = cljs.core.seq(effects_without_db);
var chunk__40173 = null;
var count__40174 = (0);
var i__40175 = (0);
while(true){
if((i__40175 < count__40174)){
var vec__40183 = chunk__40173.cljs$core$IIndexed$_nth$arity$2(null,i__40175);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40183,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40183,(1),null);
var temp__5733__auto___40311 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40311)){
var effect_fn_40312 = temp__5733__auto___40311;
(effect_fn_40312.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40312.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40312.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40313 = seq__40172;
var G__40314 = chunk__40173;
var G__40315 = count__40174;
var G__40316 = (i__40175 + (1));
seq__40172 = G__40313;
chunk__40173 = G__40314;
count__40174 = G__40315;
i__40175 = G__40316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40172);
if(temp__5735__auto__){
var seq__40172__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40172__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40172__$1);
var G__40317 = cljs.core.chunk_rest(seq__40172__$1);
var G__40318 = c__4556__auto__;
var G__40319 = cljs.core.count(c__4556__auto__);
var G__40320 = (0);
seq__40172 = G__40317;
chunk__40173 = G__40318;
count__40174 = G__40319;
i__40175 = G__40320;
continue;
} else {
var vec__40188 = cljs.core.first(seq__40172__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40188,(1),null);
var temp__5733__auto___40324 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40324)){
var effect_fn_40325 = temp__5733__auto___40324;
(effect_fn_40325.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40325.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40325.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40327 = cljs.core.next(seq__40172__$1);
var G__40328 = null;
var G__40329 = (0);
var G__40330 = (0);
seq__40172 = G__40327;
chunk__40173 = G__40328;
count__40174 = G__40329;
i__40175 = G__40330;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40191){
var map__40192 = p__40191;
var map__40192__$1 = (((((!((map__40192 == null))))?(((((map__40192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40192):map__40192);
var effect = map__40192__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40192__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__40198 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40199 = null;
var count__40200 = (0);
var i__40201 = (0);
while(true){
if((i__40201 < count__40200)){
var effect = chunk__40199.cljs$core$IIndexed$_nth$arity$2(null,i__40201);
re_frame.fx.dispatch_later(effect);


var G__40339 = seq__40198;
var G__40340 = chunk__40199;
var G__40341 = count__40200;
var G__40342 = (i__40201 + (1));
seq__40198 = G__40339;
chunk__40199 = G__40340;
count__40200 = G__40341;
i__40201 = G__40342;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40198);
if(temp__5735__auto__){
var seq__40198__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40198__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40198__$1);
var G__40343 = cljs.core.chunk_rest(seq__40198__$1);
var G__40344 = c__4556__auto__;
var G__40345 = cljs.core.count(c__4556__auto__);
var G__40346 = (0);
seq__40198 = G__40343;
chunk__40199 = G__40344;
count__40200 = G__40345;
i__40201 = G__40346;
continue;
} else {
var effect = cljs.core.first(seq__40198__$1);
re_frame.fx.dispatch_later(effect);


var G__40350 = cljs.core.next(seq__40198__$1);
var G__40351 = null;
var G__40352 = (0);
var G__40353 = (0);
seq__40198 = G__40350;
chunk__40199 = G__40351;
count__40200 = G__40352;
i__40201 = G__40353;
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
var seq__40212 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40213 = null;
var count__40214 = (0);
var i__40215 = (0);
while(true){
if((i__40215 < count__40214)){
var vec__40234 = chunk__40213.cljs$core$IIndexed$_nth$arity$2(null,i__40215);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40234,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40234,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40357 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40357)){
var effect_fn_40358 = temp__5733__auto___40357;
(effect_fn_40358.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40358.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40358.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40359 = seq__40212;
var G__40360 = chunk__40213;
var G__40361 = count__40214;
var G__40362 = (i__40215 + (1));
seq__40212 = G__40359;
chunk__40213 = G__40360;
count__40214 = G__40361;
i__40215 = G__40362;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40212);
if(temp__5735__auto__){
var seq__40212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40212__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40212__$1);
var G__40363 = cljs.core.chunk_rest(seq__40212__$1);
var G__40364 = c__4556__auto__;
var G__40365 = cljs.core.count(c__4556__auto__);
var G__40366 = (0);
seq__40212 = G__40363;
chunk__40213 = G__40364;
count__40214 = G__40365;
i__40215 = G__40366;
continue;
} else {
var vec__40244 = cljs.core.first(seq__40212__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40244,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40244,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40367 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40367)){
var effect_fn_40368 = temp__5733__auto___40367;
(effect_fn_40368.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40368.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40368.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40369 = cljs.core.next(seq__40212__$1);
var G__40370 = null;
var G__40371 = (0);
var G__40372 = (0);
seq__40212 = G__40369;
chunk__40213 = G__40370;
count__40214 = G__40371;
i__40215 = G__40372;
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
var seq__40250 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40251 = null;
var count__40252 = (0);
var i__40253 = (0);
while(true){
if((i__40253 < count__40252)){
var event = chunk__40251.cljs$core$IIndexed$_nth$arity$2(null,i__40253);
re_frame.router.dispatch(event);


var G__40373 = seq__40250;
var G__40374 = chunk__40251;
var G__40375 = count__40252;
var G__40376 = (i__40253 + (1));
seq__40250 = G__40373;
chunk__40251 = G__40374;
count__40252 = G__40375;
i__40253 = G__40376;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40250);
if(temp__5735__auto__){
var seq__40250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40250__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40250__$1);
var G__40378 = cljs.core.chunk_rest(seq__40250__$1);
var G__40379 = c__4556__auto__;
var G__40380 = cljs.core.count(c__4556__auto__);
var G__40381 = (0);
seq__40250 = G__40378;
chunk__40251 = G__40379;
count__40252 = G__40380;
i__40253 = G__40381;
continue;
} else {
var event = cljs.core.first(seq__40250__$1);
re_frame.router.dispatch(event);


var G__40382 = cljs.core.next(seq__40250__$1);
var G__40383 = null;
var G__40384 = (0);
var G__40385 = (0);
seq__40250 = G__40382;
chunk__40251 = G__40383;
count__40252 = G__40384;
i__40253 = G__40385;
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
var seq__40260 = cljs.core.seq(value);
var chunk__40261 = null;
var count__40262 = (0);
var i__40263 = (0);
while(true){
if((i__40263 < count__40262)){
var event = chunk__40261.cljs$core$IIndexed$_nth$arity$2(null,i__40263);
clear_event(event);


var G__40388 = seq__40260;
var G__40389 = chunk__40261;
var G__40390 = count__40262;
var G__40391 = (i__40263 + (1));
seq__40260 = G__40388;
chunk__40261 = G__40389;
count__40262 = G__40390;
i__40263 = G__40391;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40260);
if(temp__5735__auto__){
var seq__40260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40260__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40260__$1);
var G__40392 = cljs.core.chunk_rest(seq__40260__$1);
var G__40393 = c__4556__auto__;
var G__40394 = cljs.core.count(c__4556__auto__);
var G__40395 = (0);
seq__40260 = G__40392;
chunk__40261 = G__40393;
count__40262 = G__40394;
i__40263 = G__40395;
continue;
} else {
var event = cljs.core.first(seq__40260__$1);
clear_event(event);


var G__40396 = cljs.core.next(seq__40260__$1);
var G__40397 = null;
var G__40398 = (0);
var G__40399 = (0);
seq__40260 = G__40396;
chunk__40261 = G__40397;
count__40262 = G__40398;
i__40263 = G__40399;
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
