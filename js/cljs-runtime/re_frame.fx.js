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
var _STAR_current_trace_STAR__orig_val__40056 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40057 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40057);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40205 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40205)){
var new_db_40206 = temp__5735__auto___40205;
var fexpr__40058_40207 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40058_40207.cljs$core$IFn$_invoke$arity$1 ? fexpr__40058_40207.cljs$core$IFn$_invoke$arity$1(new_db_40206) : fexpr__40058_40207.call(null,new_db_40206));
} else {
}

var seq__40059 = cljs.core.seq(effects_without_db);
var chunk__40060 = null;
var count__40061 = (0);
var i__40062 = (0);
while(true){
if((i__40062 < count__40061)){
var vec__40071 = chunk__40060.cljs$core$IIndexed$_nth$arity$2(null,i__40062);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40071,(1),null);
var temp__5733__auto___40214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40214)){
var effect_fn_40215 = temp__5733__auto___40214;
(effect_fn_40215.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40215.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40215.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40219 = seq__40059;
var G__40220 = chunk__40060;
var G__40221 = count__40061;
var G__40222 = (i__40062 + (1));
seq__40059 = G__40219;
chunk__40060 = G__40220;
count__40061 = G__40221;
i__40062 = G__40222;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40059);
if(temp__5735__auto__){
var seq__40059__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40059__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40059__$1);
var G__40226 = cljs.core.chunk_rest(seq__40059__$1);
var G__40227 = c__4556__auto__;
var G__40228 = cljs.core.count(c__4556__auto__);
var G__40229 = (0);
seq__40059 = G__40226;
chunk__40060 = G__40227;
count__40061 = G__40228;
i__40062 = G__40229;
continue;
} else {
var vec__40074 = cljs.core.first(seq__40059__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40074,(1),null);
var temp__5733__auto___40230 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40230)){
var effect_fn_40231 = temp__5733__auto___40230;
(effect_fn_40231.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40231.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40231.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40232 = cljs.core.next(seq__40059__$1);
var G__40233 = null;
var G__40234 = (0);
var G__40235 = (0);
seq__40059 = G__40232;
chunk__40060 = G__40233;
count__40061 = G__40234;
i__40062 = G__40235;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39663__auto___40240 = re_frame.interop.now();
var duration__39664__auto___40241 = (end__39663__auto___40240 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39664__auto___40241,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39663__auto___40240);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40056);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40242 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40242)){
var new_db_40243 = temp__5735__auto___40242;
var fexpr__40109_40244 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40109_40244.cljs$core$IFn$_invoke$arity$1 ? fexpr__40109_40244.cljs$core$IFn$_invoke$arity$1(new_db_40243) : fexpr__40109_40244.call(null,new_db_40243));
} else {
}

var seq__40110 = cljs.core.seq(effects_without_db);
var chunk__40112 = null;
var count__40113 = (0);
var i__40114 = (0);
while(true){
if((i__40114 < count__40113)){
var vec__40129 = chunk__40112.cljs$core$IIndexed$_nth$arity$2(null,i__40114);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40129,(1),null);
var temp__5733__auto___40249 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40249)){
var effect_fn_40250 = temp__5733__auto___40249;
(effect_fn_40250.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40250.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40250.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40251 = seq__40110;
var G__40252 = chunk__40112;
var G__40253 = count__40113;
var G__40254 = (i__40114 + (1));
seq__40110 = G__40251;
chunk__40112 = G__40252;
count__40113 = G__40253;
i__40114 = G__40254;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40110);
if(temp__5735__auto__){
var seq__40110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40110__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40110__$1);
var G__40258 = cljs.core.chunk_rest(seq__40110__$1);
var G__40259 = c__4556__auto__;
var G__40260 = cljs.core.count(c__4556__auto__);
var G__40261 = (0);
seq__40110 = G__40258;
chunk__40112 = G__40259;
count__40113 = G__40260;
i__40114 = G__40261;
continue;
} else {
var vec__40136 = cljs.core.first(seq__40110__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40136,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40136,(1),null);
var temp__5733__auto___40270 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40270)){
var effect_fn_40271 = temp__5733__auto___40270;
(effect_fn_40271.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40271.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40271.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40272 = cljs.core.next(seq__40110__$1);
var G__40273 = null;
var G__40274 = (0);
var G__40275 = (0);
seq__40110 = G__40272;
chunk__40112 = G__40273;
count__40113 = G__40274;
i__40114 = G__40275;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40144){
var map__40145 = p__40144;
var map__40145__$1 = (((((!((map__40145 == null))))?(((((map__40145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40145):map__40145);
var effect = map__40145__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40145__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40145__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__40153 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40154 = null;
var count__40155 = (0);
var i__40156 = (0);
while(true){
if((i__40156 < count__40155)){
var effect = chunk__40154.cljs$core$IIndexed$_nth$arity$2(null,i__40156);
re_frame.fx.dispatch_later(effect);


var G__40276 = seq__40153;
var G__40277 = chunk__40154;
var G__40278 = count__40155;
var G__40279 = (i__40156 + (1));
seq__40153 = G__40276;
chunk__40154 = G__40277;
count__40155 = G__40278;
i__40156 = G__40279;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40153);
if(temp__5735__auto__){
var seq__40153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40153__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40153__$1);
var G__40280 = cljs.core.chunk_rest(seq__40153__$1);
var G__40281 = c__4556__auto__;
var G__40282 = cljs.core.count(c__4556__auto__);
var G__40283 = (0);
seq__40153 = G__40280;
chunk__40154 = G__40281;
count__40155 = G__40282;
i__40156 = G__40283;
continue;
} else {
var effect = cljs.core.first(seq__40153__$1);
re_frame.fx.dispatch_later(effect);


var G__40284 = cljs.core.next(seq__40153__$1);
var G__40285 = null;
var G__40286 = (0);
var G__40287 = (0);
seq__40153 = G__40284;
chunk__40154 = G__40285;
count__40155 = G__40286;
i__40156 = G__40287;
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
var seq__40164 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40165 = null;
var count__40166 = (0);
var i__40167 = (0);
while(true){
if((i__40167 < count__40166)){
var vec__40174 = chunk__40165.cljs$core$IIndexed$_nth$arity$2(null,i__40167);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40174,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40174,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40295 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40295)){
var effect_fn_40296 = temp__5733__auto___40295;
(effect_fn_40296.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40296.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40296.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40301 = seq__40164;
var G__40302 = chunk__40165;
var G__40303 = count__40166;
var G__40304 = (i__40167 + (1));
seq__40164 = G__40301;
chunk__40165 = G__40302;
count__40166 = G__40303;
i__40167 = G__40304;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40164);
if(temp__5735__auto__){
var seq__40164__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40164__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40164__$1);
var G__40309 = cljs.core.chunk_rest(seq__40164__$1);
var G__40310 = c__4556__auto__;
var G__40311 = cljs.core.count(c__4556__auto__);
var G__40312 = (0);
seq__40164 = G__40309;
chunk__40165 = G__40310;
count__40166 = G__40311;
i__40167 = G__40312;
continue;
} else {
var vec__40177 = cljs.core.first(seq__40164__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40177,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40177,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40317 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40317)){
var effect_fn_40318 = temp__5733__auto___40317;
(effect_fn_40318.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40318.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40318.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40319 = cljs.core.next(seq__40164__$1);
var G__40320 = null;
var G__40321 = (0);
var G__40322 = (0);
seq__40164 = G__40319;
chunk__40165 = G__40320;
count__40166 = G__40321;
i__40167 = G__40322;
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
var seq__40191 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40192 = null;
var count__40193 = (0);
var i__40194 = (0);
while(true){
if((i__40194 < count__40193)){
var event = chunk__40192.cljs$core$IIndexed$_nth$arity$2(null,i__40194);
re_frame.router.dispatch(event);


var G__40323 = seq__40191;
var G__40324 = chunk__40192;
var G__40325 = count__40193;
var G__40326 = (i__40194 + (1));
seq__40191 = G__40323;
chunk__40192 = G__40324;
count__40193 = G__40325;
i__40194 = G__40326;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40191);
if(temp__5735__auto__){
var seq__40191__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40191__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40191__$1);
var G__40327 = cljs.core.chunk_rest(seq__40191__$1);
var G__40328 = c__4556__auto__;
var G__40329 = cljs.core.count(c__4556__auto__);
var G__40330 = (0);
seq__40191 = G__40327;
chunk__40192 = G__40328;
count__40193 = G__40329;
i__40194 = G__40330;
continue;
} else {
var event = cljs.core.first(seq__40191__$1);
re_frame.router.dispatch(event);


var G__40331 = cljs.core.next(seq__40191__$1);
var G__40332 = null;
var G__40333 = (0);
var G__40334 = (0);
seq__40191 = G__40331;
chunk__40192 = G__40332;
count__40193 = G__40333;
i__40194 = G__40334;
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
var seq__40200 = cljs.core.seq(value);
var chunk__40201 = null;
var count__40202 = (0);
var i__40203 = (0);
while(true){
if((i__40203 < count__40202)){
var event = chunk__40201.cljs$core$IIndexed$_nth$arity$2(null,i__40203);
clear_event(event);


var G__40336 = seq__40200;
var G__40337 = chunk__40201;
var G__40338 = count__40202;
var G__40339 = (i__40203 + (1));
seq__40200 = G__40336;
chunk__40201 = G__40337;
count__40202 = G__40338;
i__40203 = G__40339;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40200);
if(temp__5735__auto__){
var seq__40200__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40200__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40200__$1);
var G__40340 = cljs.core.chunk_rest(seq__40200__$1);
var G__40341 = c__4556__auto__;
var G__40342 = cljs.core.count(c__4556__auto__);
var G__40343 = (0);
seq__40200 = G__40340;
chunk__40201 = G__40341;
count__40202 = G__40342;
i__40203 = G__40343;
continue;
} else {
var event = cljs.core.first(seq__40200__$1);
clear_event(event);


var G__40344 = cljs.core.next(seq__40200__$1);
var G__40345 = null;
var G__40346 = (0);
var G__40347 = (0);
seq__40200 = G__40344;
chunk__40201 = G__40345;
count__40202 = G__40346;
i__40203 = G__40347;
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
