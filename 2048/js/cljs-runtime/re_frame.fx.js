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
var _STAR_current_trace_STAR__orig_val__40039 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__40040 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__40040);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40175 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40175)){
var new_db_40176 = temp__5735__auto___40175;
var fexpr__40048_40177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40048_40177.cljs$core$IFn$_invoke$arity$1 ? fexpr__40048_40177.cljs$core$IFn$_invoke$arity$1(new_db_40176) : fexpr__40048_40177.call(null,new_db_40176));
} else {
}

var seq__40049 = cljs.core.seq(effects_without_db);
var chunk__40050 = null;
var count__40051 = (0);
var i__40052 = (0);
while(true){
if((i__40052 < count__40051)){
var vec__40063 = chunk__40050.cljs$core$IIndexed$_nth$arity$2(null,i__40052);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40063,(1),null);
var temp__5733__auto___40178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40178)){
var effect_fn_40179 = temp__5733__auto___40178;
(effect_fn_40179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40180 = seq__40049;
var G__40181 = chunk__40050;
var G__40182 = count__40051;
var G__40183 = (i__40052 + (1));
seq__40049 = G__40180;
chunk__40050 = G__40181;
count__40051 = G__40182;
i__40052 = G__40183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40049);
if(temp__5735__auto__){
var seq__40049__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40049__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40049__$1);
var G__40184 = cljs.core.chunk_rest(seq__40049__$1);
var G__40185 = c__4556__auto__;
var G__40186 = cljs.core.count(c__4556__auto__);
var G__40187 = (0);
seq__40049 = G__40184;
chunk__40050 = G__40185;
count__40051 = G__40186;
i__40052 = G__40187;
continue;
} else {
var vec__40067 = cljs.core.first(seq__40049__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40067,(1),null);
var temp__5733__auto___40188 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40188)){
var effect_fn_40189 = temp__5733__auto___40188;
(effect_fn_40189.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40189.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40189.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40190 = cljs.core.next(seq__40049__$1);
var G__40191 = null;
var G__40192 = (0);
var G__40193 = (0);
seq__40049 = G__40190;
chunk__40050 = G__40191;
count__40051 = G__40192;
i__40052 = G__40193;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__39593__auto___40194 = re_frame.interop.now();
var duration__39594__auto___40195 = (end__39593__auto___40194 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39594__auto___40195,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__39593__auto___40194);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__40039);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___40196 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___40196)){
var new_db_40197 = temp__5735__auto___40196;
var fexpr__40073_40198 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__40073_40198.cljs$core$IFn$_invoke$arity$1 ? fexpr__40073_40198.cljs$core$IFn$_invoke$arity$1(new_db_40197) : fexpr__40073_40198.call(null,new_db_40197));
} else {
}

var seq__40074 = cljs.core.seq(effects_without_db);
var chunk__40075 = null;
var count__40076 = (0);
var i__40077 = (0);
while(true){
if((i__40077 < count__40076)){
var vec__40098 = chunk__40075.cljs$core$IIndexed$_nth$arity$2(null,i__40077);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40098,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40098,(1),null);
var temp__5733__auto___40200 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40200)){
var effect_fn_40202 = temp__5733__auto___40200;
(effect_fn_40202.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40202.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40202.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40205 = seq__40074;
var G__40206 = chunk__40075;
var G__40207 = count__40076;
var G__40208 = (i__40077 + (1));
seq__40074 = G__40205;
chunk__40075 = G__40206;
count__40076 = G__40207;
i__40077 = G__40208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40074);
if(temp__5735__auto__){
var seq__40074__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40074__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40074__$1);
var G__40212 = cljs.core.chunk_rest(seq__40074__$1);
var G__40213 = c__4556__auto__;
var G__40214 = cljs.core.count(c__4556__auto__);
var G__40215 = (0);
seq__40074 = G__40212;
chunk__40075 = G__40213;
count__40076 = G__40214;
i__40077 = G__40215;
continue;
} else {
var vec__40102 = cljs.core.first(seq__40074__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40102,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40102,(1),null);
var temp__5733__auto___40218 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40218)){
var effect_fn_40219 = temp__5733__auto___40218;
(effect_fn_40219.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40219.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40219.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__40220 = cljs.core.next(seq__40074__$1);
var G__40221 = null;
var G__40222 = (0);
var G__40223 = (0);
seq__40074 = G__40220;
chunk__40075 = G__40221;
count__40076 = G__40222;
i__40077 = G__40223;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__40108){
var map__40109 = p__40108;
var map__40109__$1 = (((((!((map__40109 == null))))?(((((map__40109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40109):map__40109);
var effect = map__40109__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40109__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40109__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__40112 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40113 = null;
var count__40114 = (0);
var i__40115 = (0);
while(true){
if((i__40115 < count__40114)){
var effect = chunk__40113.cljs$core$IIndexed$_nth$arity$2(null,i__40115);
re_frame.fx.dispatch_later(effect);


var G__40224 = seq__40112;
var G__40225 = chunk__40113;
var G__40226 = count__40114;
var G__40227 = (i__40115 + (1));
seq__40112 = G__40224;
chunk__40113 = G__40225;
count__40114 = G__40226;
i__40115 = G__40227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40112);
if(temp__5735__auto__){
var seq__40112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40112__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40112__$1);
var G__40232 = cljs.core.chunk_rest(seq__40112__$1);
var G__40233 = c__4556__auto__;
var G__40234 = cljs.core.count(c__4556__auto__);
var G__40235 = (0);
seq__40112 = G__40232;
chunk__40113 = G__40233;
count__40114 = G__40234;
i__40115 = G__40235;
continue;
} else {
var effect = cljs.core.first(seq__40112__$1);
re_frame.fx.dispatch_later(effect);


var G__40236 = cljs.core.next(seq__40112__$1);
var G__40237 = null;
var G__40238 = (0);
var G__40239 = (0);
seq__40112 = G__40236;
chunk__40113 = G__40237;
count__40114 = G__40238;
i__40115 = G__40239;
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
var seq__40123 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__40124 = null;
var count__40125 = (0);
var i__40126 = (0);
while(true){
if((i__40126 < count__40125)){
var vec__40137 = chunk__40124.cljs$core$IIndexed$_nth$arity$2(null,i__40126);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40240 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40240)){
var effect_fn_40241 = temp__5733__auto___40240;
(effect_fn_40241.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40241.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40241.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40242 = seq__40123;
var G__40243 = chunk__40124;
var G__40244 = count__40125;
var G__40245 = (i__40126 + (1));
seq__40123 = G__40242;
chunk__40124 = G__40243;
count__40125 = G__40244;
i__40126 = G__40245;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40123);
if(temp__5735__auto__){
var seq__40123__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40123__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40123__$1);
var G__40246 = cljs.core.chunk_rest(seq__40123__$1);
var G__40247 = c__4556__auto__;
var G__40248 = cljs.core.count(c__4556__auto__);
var G__40249 = (0);
seq__40123 = G__40246;
chunk__40124 = G__40247;
count__40125 = G__40248;
i__40126 = G__40249;
continue;
} else {
var vec__40140 = cljs.core.first(seq__40123__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40140,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___40255 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___40255)){
var effect_fn_40256 = temp__5733__auto___40255;
(effect_fn_40256.cljs$core$IFn$_invoke$arity$1 ? effect_fn_40256.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_40256.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__40257 = cljs.core.next(seq__40123__$1);
var G__40258 = null;
var G__40259 = (0);
var G__40260 = (0);
seq__40123 = G__40257;
chunk__40124 = G__40258;
count__40125 = G__40259;
i__40126 = G__40260;
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
var seq__40144 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__40145 = null;
var count__40146 = (0);
var i__40147 = (0);
while(true){
if((i__40147 < count__40146)){
var event = chunk__40145.cljs$core$IIndexed$_nth$arity$2(null,i__40147);
re_frame.router.dispatch(event);


var G__40265 = seq__40144;
var G__40266 = chunk__40145;
var G__40267 = count__40146;
var G__40268 = (i__40147 + (1));
seq__40144 = G__40265;
chunk__40145 = G__40266;
count__40146 = G__40267;
i__40147 = G__40268;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40144);
if(temp__5735__auto__){
var seq__40144__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40144__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40144__$1);
var G__40269 = cljs.core.chunk_rest(seq__40144__$1);
var G__40270 = c__4556__auto__;
var G__40271 = cljs.core.count(c__4556__auto__);
var G__40272 = (0);
seq__40144 = G__40269;
chunk__40145 = G__40270;
count__40146 = G__40271;
i__40147 = G__40272;
continue;
} else {
var event = cljs.core.first(seq__40144__$1);
re_frame.router.dispatch(event);


var G__40274 = cljs.core.next(seq__40144__$1);
var G__40275 = null;
var G__40276 = (0);
var G__40277 = (0);
seq__40144 = G__40274;
chunk__40145 = G__40275;
count__40146 = G__40276;
i__40147 = G__40277;
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
var seq__40156 = cljs.core.seq(value);
var chunk__40157 = null;
var count__40158 = (0);
var i__40159 = (0);
while(true){
if((i__40159 < count__40158)){
var event = chunk__40157.cljs$core$IIndexed$_nth$arity$2(null,i__40159);
clear_event(event);


var G__40278 = seq__40156;
var G__40279 = chunk__40157;
var G__40280 = count__40158;
var G__40281 = (i__40159 + (1));
seq__40156 = G__40278;
chunk__40157 = G__40279;
count__40158 = G__40280;
i__40159 = G__40281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40156);
if(temp__5735__auto__){
var seq__40156__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40156__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40156__$1);
var G__40282 = cljs.core.chunk_rest(seq__40156__$1);
var G__40283 = c__4556__auto__;
var G__40284 = cljs.core.count(c__4556__auto__);
var G__40285 = (0);
seq__40156 = G__40282;
chunk__40157 = G__40283;
count__40158 = G__40284;
i__40159 = G__40285;
continue;
} else {
var event = cljs.core.first(seq__40156__$1);
clear_event(event);


var G__40286 = cljs.core.next(seq__40156__$1);
var G__40287 = null;
var G__40288 = (0);
var G__40289 = (0);
seq__40156 = G__40286;
chunk__40157 = G__40287;
count__40158 = G__40288;
i__40159 = G__40289;
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
