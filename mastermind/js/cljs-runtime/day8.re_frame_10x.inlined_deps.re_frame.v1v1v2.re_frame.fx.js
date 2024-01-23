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
var _STAR_current_trace_STAR__orig_val__35103 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35104 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35104);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35215 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35215)){
var new_db_35216 = temp__5735__auto___35215;
var fexpr__35107_35217 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35107_35217.cljs$core$IFn$_invoke$arity$1 ? fexpr__35107_35217.cljs$core$IFn$_invoke$arity$1(new_db_35216) : fexpr__35107_35217.call(null,new_db_35216));
} else {
}

var seq__35108 = cljs.core.seq(effects_without_db);
var chunk__35109 = null;
var count__35110 = (0);
var i__35111 = (0);
while(true){
if((i__35111 < count__35110)){
var vec__35119 = chunk__35109.cljs$core$IIndexed$_nth$arity$2(null,i__35111);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35119,(1),null);
var temp__5733__auto___35218 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35218)){
var effect_fn_35219 = temp__5733__auto___35218;
(effect_fn_35219.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35219.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35219.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35220 = seq__35108;
var G__35221 = chunk__35109;
var G__35222 = count__35110;
var G__35223 = (i__35111 + (1));
seq__35108 = G__35220;
chunk__35109 = G__35221;
count__35110 = G__35222;
i__35111 = G__35223;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35108);
if(temp__5735__auto__){
var seq__35108__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35108__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35108__$1);
var G__35225 = cljs.core.chunk_rest(seq__35108__$1);
var G__35226 = c__4556__auto__;
var G__35227 = cljs.core.count(c__4556__auto__);
var G__35228 = (0);
seq__35108 = G__35225;
chunk__35109 = G__35226;
count__35110 = G__35227;
i__35111 = G__35228;
continue;
} else {
var vec__35123 = cljs.core.first(seq__35108__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35123,(1),null);
var temp__5733__auto___35229 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35229)){
var effect_fn_35230 = temp__5733__auto___35229;
(effect_fn_35230.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35230.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35230.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35231 = cljs.core.next(seq__35108__$1);
var G__35232 = null;
var G__35233 = (0);
var G__35234 = (0);
seq__35108 = G__35231;
chunk__35109 = G__35232;
count__35110 = G__35233;
i__35111 = G__35234;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34767__auto___35235 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34768__auto___35236 = (end__34767__auto___35235 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34768__auto___35236,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34767__auto___35235);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35103);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35237 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35237)){
var new_db_35238 = temp__5735__auto___35237;
var fexpr__35126_35239 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35126_35239.cljs$core$IFn$_invoke$arity$1 ? fexpr__35126_35239.cljs$core$IFn$_invoke$arity$1(new_db_35238) : fexpr__35126_35239.call(null,new_db_35238));
} else {
}

var seq__35127 = cljs.core.seq(effects_without_db);
var chunk__35128 = null;
var count__35129 = (0);
var i__35130 = (0);
while(true){
if((i__35130 < count__35129)){
var vec__35137 = chunk__35128.cljs$core$IIndexed$_nth$arity$2(null,i__35130);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35137,(1),null);
var temp__5733__auto___35240 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35240)){
var effect_fn_35245 = temp__5733__auto___35240;
(effect_fn_35245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35245.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35246 = seq__35127;
var G__35247 = chunk__35128;
var G__35248 = count__35129;
var G__35249 = (i__35130 + (1));
seq__35127 = G__35246;
chunk__35128 = G__35247;
count__35129 = G__35248;
i__35130 = G__35249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35127);
if(temp__5735__auto__){
var seq__35127__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35127__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35127__$1);
var G__35253 = cljs.core.chunk_rest(seq__35127__$1);
var G__35254 = c__4556__auto__;
var G__35255 = cljs.core.count(c__4556__auto__);
var G__35256 = (0);
seq__35127 = G__35253;
chunk__35128 = G__35254;
count__35129 = G__35255;
i__35130 = G__35256;
continue;
} else {
var vec__35140 = cljs.core.first(seq__35127__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35140,(1),null);
var temp__5733__auto___35262 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35262)){
var effect_fn_35264 = temp__5733__auto___35262;
(effect_fn_35264.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35264.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35264.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35267 = cljs.core.next(seq__35127__$1);
var G__35269 = null;
var G__35270 = (0);
var G__35272 = (0);
seq__35127 = G__35267;
chunk__35128 = G__35269;
count__35129 = G__35270;
i__35130 = G__35272;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__35144){
var map__35145 = p__35144;
var map__35145__$1 = (((((!((map__35145 == null))))?(((((map__35145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35145):map__35145);
var effect = map__35145__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35145__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35145__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__35149 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35150 = null;
var count__35151 = (0);
var i__35152 = (0);
while(true){
if((i__35152 < count__35151)){
var effect = chunk__35150.cljs$core$IIndexed$_nth$arity$2(null,i__35152);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35281 = seq__35149;
var G__35282 = chunk__35150;
var G__35283 = count__35151;
var G__35284 = (i__35152 + (1));
seq__35149 = G__35281;
chunk__35150 = G__35282;
count__35151 = G__35283;
i__35152 = G__35284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35149);
if(temp__5735__auto__){
var seq__35149__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35149__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35149__$1);
var G__35285 = cljs.core.chunk_rest(seq__35149__$1);
var G__35286 = c__4556__auto__;
var G__35287 = cljs.core.count(c__4556__auto__);
var G__35288 = (0);
seq__35149 = G__35285;
chunk__35150 = G__35286;
count__35151 = G__35287;
i__35152 = G__35288;
continue;
} else {
var effect = cljs.core.first(seq__35149__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35289 = cljs.core.next(seq__35149__$1);
var G__35290 = null;
var G__35291 = (0);
var G__35292 = (0);
seq__35149 = G__35289;
chunk__35150 = G__35290;
count__35151 = G__35291;
i__35152 = G__35292;
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
var seq__35155 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35156 = null;
var count__35157 = (0);
var i__35158 = (0);
while(true){
if((i__35158 < count__35157)){
var vec__35168 = chunk__35156.cljs$core$IIndexed$_nth$arity$2(null,i__35158);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35168,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35293 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35293)){
var effect_fn_35294 = temp__5733__auto___35293;
(effect_fn_35294.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35294.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35294.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35295 = seq__35155;
var G__35296 = chunk__35156;
var G__35297 = count__35157;
var G__35298 = (i__35158 + (1));
seq__35155 = G__35295;
chunk__35156 = G__35296;
count__35157 = G__35297;
i__35158 = G__35298;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35155);
if(temp__5735__auto__){
var seq__35155__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35155__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35155__$1);
var G__35299 = cljs.core.chunk_rest(seq__35155__$1);
var G__35300 = c__4556__auto__;
var G__35301 = cljs.core.count(c__4556__auto__);
var G__35302 = (0);
seq__35155 = G__35299;
chunk__35156 = G__35300;
count__35157 = G__35301;
i__35158 = G__35302;
continue;
} else {
var vec__35173 = cljs.core.first(seq__35155__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35173,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35303 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35303)){
var effect_fn_35304 = temp__5733__auto___35303;
(effect_fn_35304.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35304.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35304.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35305 = cljs.core.next(seq__35155__$1);
var G__35306 = null;
var G__35307 = (0);
var G__35308 = (0);
seq__35155 = G__35305;
chunk__35156 = G__35306;
count__35157 = G__35307;
i__35158 = G__35308;
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
var seq__35187 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35188 = null;
var count__35189 = (0);
var i__35190 = (0);
while(true){
if((i__35190 < count__35189)){
var event = chunk__35188.cljs$core$IIndexed$_nth$arity$2(null,i__35190);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35309 = seq__35187;
var G__35310 = chunk__35188;
var G__35311 = count__35189;
var G__35312 = (i__35190 + (1));
seq__35187 = G__35309;
chunk__35188 = G__35310;
count__35189 = G__35311;
i__35190 = G__35312;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35187);
if(temp__5735__auto__){
var seq__35187__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35187__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35187__$1);
var G__35313 = cljs.core.chunk_rest(seq__35187__$1);
var G__35314 = c__4556__auto__;
var G__35315 = cljs.core.count(c__4556__auto__);
var G__35316 = (0);
seq__35187 = G__35313;
chunk__35188 = G__35314;
count__35189 = G__35315;
i__35190 = G__35316;
continue;
} else {
var event = cljs.core.first(seq__35187__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35317 = cljs.core.next(seq__35187__$1);
var G__35318 = null;
var G__35319 = (0);
var G__35320 = (0);
seq__35187 = G__35317;
chunk__35188 = G__35318;
count__35189 = G__35319;
i__35190 = G__35320;
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
var seq__35202 = cljs.core.seq(value);
var chunk__35203 = null;
var count__35204 = (0);
var i__35205 = (0);
while(true){
if((i__35205 < count__35204)){
var event = chunk__35203.cljs$core$IIndexed$_nth$arity$2(null,i__35205);
clear_event(event);


var G__35321 = seq__35202;
var G__35322 = chunk__35203;
var G__35323 = count__35204;
var G__35324 = (i__35205 + (1));
seq__35202 = G__35321;
chunk__35203 = G__35322;
count__35204 = G__35323;
i__35205 = G__35324;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35202);
if(temp__5735__auto__){
var seq__35202__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35202__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35202__$1);
var G__35325 = cljs.core.chunk_rest(seq__35202__$1);
var G__35326 = c__4556__auto__;
var G__35327 = cljs.core.count(c__4556__auto__);
var G__35328 = (0);
seq__35202 = G__35325;
chunk__35203 = G__35326;
count__35204 = G__35327;
i__35205 = G__35328;
continue;
} else {
var event = cljs.core.first(seq__35202__$1);
clear_event(event);


var G__35329 = cljs.core.next(seq__35202__$1);
var G__35330 = null;
var G__35331 = (0);
var G__35332 = (0);
seq__35202 = G__35329;
chunk__35203 = G__35330;
count__35204 = G__35331;
i__35205 = G__35332;
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
