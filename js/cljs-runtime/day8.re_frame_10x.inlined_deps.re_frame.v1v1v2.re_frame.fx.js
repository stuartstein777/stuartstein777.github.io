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
var _STAR_current_trace_STAR__orig_val__35091 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35092 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35092);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35237 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35237)){
var new_db_35238 = temp__5735__auto___35237;
var fexpr__35094_35239 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35094_35239.cljs$core$IFn$_invoke$arity$1 ? fexpr__35094_35239.cljs$core$IFn$_invoke$arity$1(new_db_35238) : fexpr__35094_35239.call(null,new_db_35238));
} else {
}

var seq__35095 = cljs.core.seq(effects_without_db);
var chunk__35096 = null;
var count__35097 = (0);
var i__35098 = (0);
while(true){
if((i__35098 < count__35097)){
var vec__35111 = chunk__35096.cljs$core$IIndexed$_nth$arity$2(null,i__35098);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35111,(1),null);
var temp__5733__auto___35240 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35240)){
var effect_fn_35241 = temp__5733__auto___35240;
(effect_fn_35241.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35241.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35241.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35242 = seq__35095;
var G__35243 = chunk__35096;
var G__35244 = count__35097;
var G__35245 = (i__35098 + (1));
seq__35095 = G__35242;
chunk__35096 = G__35243;
count__35097 = G__35244;
i__35098 = G__35245;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35095);
if(temp__5735__auto__){
var seq__35095__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35095__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35095__$1);
var G__35246 = cljs.core.chunk_rest(seq__35095__$1);
var G__35247 = c__4556__auto__;
var G__35248 = cljs.core.count(c__4556__auto__);
var G__35249 = (0);
seq__35095 = G__35246;
chunk__35096 = G__35247;
count__35097 = G__35248;
i__35098 = G__35249;
continue;
} else {
var vec__35118 = cljs.core.first(seq__35095__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35118,(1),null);
var temp__5733__auto___35250 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35250)){
var effect_fn_35251 = temp__5733__auto___35250;
(effect_fn_35251.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35251.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35251.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35252 = cljs.core.next(seq__35095__$1);
var G__35253 = null;
var G__35254 = (0);
var G__35255 = (0);
seq__35095 = G__35252;
chunk__35096 = G__35253;
count__35097 = G__35254;
i__35098 = G__35255;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34769__auto___35256 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34770__auto___35257 = (end__34769__auto___35256 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34770__auto___35257,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34769__auto___35256);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35091);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35260 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35260)){
var new_db_35261 = temp__5735__auto___35260;
var fexpr__35124_35262 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35124_35262.cljs$core$IFn$_invoke$arity$1 ? fexpr__35124_35262.cljs$core$IFn$_invoke$arity$1(new_db_35261) : fexpr__35124_35262.call(null,new_db_35261));
} else {
}

var seq__35126 = cljs.core.seq(effects_without_db);
var chunk__35127 = null;
var count__35128 = (0);
var i__35129 = (0);
while(true){
if((i__35129 < count__35128)){
var vec__35141 = chunk__35127.cljs$core$IIndexed$_nth$arity$2(null,i__35129);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35141,(1),null);
var temp__5733__auto___35265 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35265)){
var effect_fn_35266 = temp__5733__auto___35265;
(effect_fn_35266.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35266.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35266.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35267 = seq__35126;
var G__35268 = chunk__35127;
var G__35269 = count__35128;
var G__35270 = (i__35129 + (1));
seq__35126 = G__35267;
chunk__35127 = G__35268;
count__35128 = G__35269;
i__35129 = G__35270;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35126);
if(temp__5735__auto__){
var seq__35126__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35126__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35126__$1);
var G__35271 = cljs.core.chunk_rest(seq__35126__$1);
var G__35272 = c__4556__auto__;
var G__35273 = cljs.core.count(c__4556__auto__);
var G__35274 = (0);
seq__35126 = G__35271;
chunk__35127 = G__35272;
count__35128 = G__35273;
i__35129 = G__35274;
continue;
} else {
var vec__35152 = cljs.core.first(seq__35126__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35152,(1),null);
var temp__5733__auto___35275 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35275)){
var effect_fn_35276 = temp__5733__auto___35275;
(effect_fn_35276.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35276.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35276.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35278 = cljs.core.next(seq__35126__$1);
var G__35279 = null;
var G__35280 = (0);
var G__35281 = (0);
seq__35126 = G__35278;
chunk__35127 = G__35279;
count__35128 = G__35280;
i__35129 = G__35281;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__35161){
var map__35162 = p__35161;
var map__35162__$1 = (((((!((map__35162 == null))))?(((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35162):map__35162);
var effect = map__35162__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35162__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35162__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__35168 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35169 = null;
var count__35170 = (0);
var i__35171 = (0);
while(true){
if((i__35171 < count__35170)){
var effect = chunk__35169.cljs$core$IIndexed$_nth$arity$2(null,i__35171);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35286 = seq__35168;
var G__35287 = chunk__35169;
var G__35288 = count__35170;
var G__35289 = (i__35171 + (1));
seq__35168 = G__35286;
chunk__35169 = G__35287;
count__35170 = G__35288;
i__35171 = G__35289;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35168);
if(temp__5735__auto__){
var seq__35168__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35168__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35168__$1);
var G__35290 = cljs.core.chunk_rest(seq__35168__$1);
var G__35291 = c__4556__auto__;
var G__35292 = cljs.core.count(c__4556__auto__);
var G__35293 = (0);
seq__35168 = G__35290;
chunk__35169 = G__35291;
count__35170 = G__35292;
i__35171 = G__35293;
continue;
} else {
var effect = cljs.core.first(seq__35168__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35294 = cljs.core.next(seq__35168__$1);
var G__35295 = null;
var G__35296 = (0);
var G__35297 = (0);
seq__35168 = G__35294;
chunk__35169 = G__35295;
count__35170 = G__35296;
i__35171 = G__35297;
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
var seq__35200 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35201 = null;
var count__35202 = (0);
var i__35203 = (0);
while(true){
if((i__35203 < count__35202)){
var vec__35211 = chunk__35201.cljs$core$IIndexed$_nth$arity$2(null,i__35203);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35211,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35211,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35300 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35300)){
var effect_fn_35301 = temp__5733__auto___35300;
(effect_fn_35301.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35301.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35301.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35302 = seq__35200;
var G__35303 = chunk__35201;
var G__35304 = count__35202;
var G__35305 = (i__35203 + (1));
seq__35200 = G__35302;
chunk__35201 = G__35303;
count__35202 = G__35304;
i__35203 = G__35305;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35200);
if(temp__5735__auto__){
var seq__35200__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35200__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35200__$1);
var G__35306 = cljs.core.chunk_rest(seq__35200__$1);
var G__35307 = c__4556__auto__;
var G__35308 = cljs.core.count(c__4556__auto__);
var G__35309 = (0);
seq__35200 = G__35306;
chunk__35201 = G__35307;
count__35202 = G__35308;
i__35203 = G__35309;
continue;
} else {
var vec__35214 = cljs.core.first(seq__35200__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35214,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35312 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35312)){
var effect_fn_35313 = temp__5733__auto___35312;
(effect_fn_35313.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35313.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35313.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35314 = cljs.core.next(seq__35200__$1);
var G__35315 = null;
var G__35316 = (0);
var G__35317 = (0);
seq__35200 = G__35314;
chunk__35201 = G__35315;
count__35202 = G__35316;
i__35203 = G__35317;
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
var seq__35229 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35230 = null;
var count__35231 = (0);
var i__35232 = (0);
while(true){
if((i__35232 < count__35231)){
var event = chunk__35230.cljs$core$IIndexed$_nth$arity$2(null,i__35232);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35318 = seq__35229;
var G__35319 = chunk__35230;
var G__35320 = count__35231;
var G__35321 = (i__35232 + (1));
seq__35229 = G__35318;
chunk__35230 = G__35319;
count__35231 = G__35320;
i__35232 = G__35321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35229);
if(temp__5735__auto__){
var seq__35229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35229__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35229__$1);
var G__35322 = cljs.core.chunk_rest(seq__35229__$1);
var G__35323 = c__4556__auto__;
var G__35324 = cljs.core.count(c__4556__auto__);
var G__35325 = (0);
seq__35229 = G__35322;
chunk__35230 = G__35323;
count__35231 = G__35324;
i__35232 = G__35325;
continue;
} else {
var event = cljs.core.first(seq__35229__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35326 = cljs.core.next(seq__35229__$1);
var G__35327 = null;
var G__35328 = (0);
var G__35329 = (0);
seq__35229 = G__35326;
chunk__35230 = G__35327;
count__35231 = G__35328;
i__35232 = G__35329;
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
var seq__35233 = cljs.core.seq(value);
var chunk__35234 = null;
var count__35235 = (0);
var i__35236 = (0);
while(true){
if((i__35236 < count__35235)){
var event = chunk__35234.cljs$core$IIndexed$_nth$arity$2(null,i__35236);
clear_event(event);


var G__35332 = seq__35233;
var G__35333 = chunk__35234;
var G__35334 = count__35235;
var G__35335 = (i__35236 + (1));
seq__35233 = G__35332;
chunk__35234 = G__35333;
count__35235 = G__35334;
i__35236 = G__35335;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35233);
if(temp__5735__auto__){
var seq__35233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35233__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35233__$1);
var G__35336 = cljs.core.chunk_rest(seq__35233__$1);
var G__35337 = c__4556__auto__;
var G__35338 = cljs.core.count(c__4556__auto__);
var G__35339 = (0);
seq__35233 = G__35336;
chunk__35234 = G__35337;
count__35235 = G__35338;
i__35236 = G__35339;
continue;
} else {
var event = cljs.core.first(seq__35233__$1);
clear_event(event);


var G__35340 = cljs.core.next(seq__35233__$1);
var G__35341 = null;
var G__35342 = (0);
var G__35343 = (0);
seq__35233 = G__35340;
chunk__35234 = G__35341;
count__35235 = G__35342;
i__35236 = G__35343;
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
