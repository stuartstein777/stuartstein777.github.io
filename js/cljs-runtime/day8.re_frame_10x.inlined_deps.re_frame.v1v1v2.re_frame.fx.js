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
var _STAR_current_trace_STAR__orig_val__35079 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35080 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35080);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35186 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35186)){
var new_db_35187 = temp__5735__auto___35186;
var fexpr__35081_35188 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35081_35188.cljs$core$IFn$_invoke$arity$1 ? fexpr__35081_35188.cljs$core$IFn$_invoke$arity$1(new_db_35187) : fexpr__35081_35188.call(null,new_db_35187));
} else {
}

var seq__35082 = cljs.core.seq(effects_without_db);
var chunk__35083 = null;
var count__35084 = (0);
var i__35085 = (0);
while(true){
if((i__35085 < count__35084)){
var vec__35095 = chunk__35083.cljs$core$IIndexed$_nth$arity$2(null,i__35085);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35095,(1),null);
var temp__5733__auto___35189 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35189)){
var effect_fn_35190 = temp__5733__auto___35189;
(effect_fn_35190.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35190.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35190.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35191 = seq__35082;
var G__35192 = chunk__35083;
var G__35193 = count__35084;
var G__35194 = (i__35085 + (1));
seq__35082 = G__35191;
chunk__35083 = G__35192;
count__35084 = G__35193;
i__35085 = G__35194;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35082);
if(temp__5735__auto__){
var seq__35082__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35082__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35082__$1);
var G__35195 = cljs.core.chunk_rest(seq__35082__$1);
var G__35196 = c__4556__auto__;
var G__35197 = cljs.core.count(c__4556__auto__);
var G__35198 = (0);
seq__35082 = G__35195;
chunk__35083 = G__35196;
count__35084 = G__35197;
i__35085 = G__35198;
continue;
} else {
var vec__35098 = cljs.core.first(seq__35082__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35098,(1),null);
var temp__5733__auto___35199 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35199)){
var effect_fn_35200 = temp__5733__auto___35199;
(effect_fn_35200.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35200.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35200.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35201 = cljs.core.next(seq__35082__$1);
var G__35202 = null;
var G__35203 = (0);
var G__35204 = (0);
seq__35082 = G__35201;
chunk__35083 = G__35202;
count__35084 = G__35203;
i__35085 = G__35204;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__34763__auto___35205 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__34764__auto___35206 = (end__34763__auto___35205 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34764__auto___35206,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__34763__auto___35205);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35079);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___35207 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___35207)){
var new_db_35208 = temp__5735__auto___35207;
var fexpr__35110_35209 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35110_35209.cljs$core$IFn$_invoke$arity$1 ? fexpr__35110_35209.cljs$core$IFn$_invoke$arity$1(new_db_35208) : fexpr__35110_35209.call(null,new_db_35208));
} else {
}

var seq__35111 = cljs.core.seq(effects_without_db);
var chunk__35112 = null;
var count__35113 = (0);
var i__35114 = (0);
while(true){
if((i__35114 < count__35113)){
var vec__35124 = chunk__35112.cljs$core$IIndexed$_nth$arity$2(null,i__35114);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124,(1),null);
var temp__5733__auto___35211 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35211)){
var effect_fn_35213 = temp__5733__auto___35211;
(effect_fn_35213.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35213.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35213.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35214 = seq__35111;
var G__35215 = chunk__35112;
var G__35216 = count__35113;
var G__35217 = (i__35114 + (1));
seq__35111 = G__35214;
chunk__35112 = G__35215;
count__35113 = G__35216;
i__35114 = G__35217;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35111);
if(temp__5735__auto__){
var seq__35111__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35111__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35111__$1);
var G__35218 = cljs.core.chunk_rest(seq__35111__$1);
var G__35219 = c__4556__auto__;
var G__35220 = cljs.core.count(c__4556__auto__);
var G__35221 = (0);
seq__35111 = G__35218;
chunk__35112 = G__35219;
count__35113 = G__35220;
i__35114 = G__35221;
continue;
} else {
var vec__35131 = cljs.core.first(seq__35111__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(1),null);
var temp__5733__auto___35222 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35222)){
var effect_fn_35223 = temp__5733__auto___35222;
(effect_fn_35223.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35223.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35223.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35224 = cljs.core.next(seq__35111__$1);
var G__35225 = null;
var G__35226 = (0);
var G__35227 = (0);
seq__35111 = G__35224;
chunk__35112 = G__35225;
count__35113 = G__35226;
i__35114 = G__35227;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__35136){
var map__35137 = p__35136;
var map__35137__$1 = (((((!((map__35137 == null))))?(((((map__35137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35137):map__35137);
var effect = map__35137__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35137__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35137__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__35140 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35141 = null;
var count__35142 = (0);
var i__35143 = (0);
while(true){
if((i__35143 < count__35142)){
var effect = chunk__35141.cljs$core$IIndexed$_nth$arity$2(null,i__35143);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35230 = seq__35140;
var G__35231 = chunk__35141;
var G__35232 = count__35142;
var G__35233 = (i__35143 + (1));
seq__35140 = G__35230;
chunk__35141 = G__35231;
count__35142 = G__35232;
i__35143 = G__35233;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35140);
if(temp__5735__auto__){
var seq__35140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35140__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35140__$1);
var G__35236 = cljs.core.chunk_rest(seq__35140__$1);
var G__35237 = c__4556__auto__;
var G__35238 = cljs.core.count(c__4556__auto__);
var G__35239 = (0);
seq__35140 = G__35236;
chunk__35141 = G__35237;
count__35142 = G__35238;
i__35143 = G__35239;
continue;
} else {
var effect = cljs.core.first(seq__35140__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__35240 = cljs.core.next(seq__35140__$1);
var G__35241 = null;
var G__35242 = (0);
var G__35243 = (0);
seq__35140 = G__35240;
chunk__35141 = G__35241;
count__35142 = G__35242;
i__35143 = G__35243;
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
var seq__35146 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35147 = null;
var count__35148 = (0);
var i__35149 = (0);
while(true){
if((i__35149 < count__35148)){
var vec__35156 = chunk__35147.cljs$core$IIndexed$_nth$arity$2(null,i__35149);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35244 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35244)){
var effect_fn_35245 = temp__5733__auto___35244;
(effect_fn_35245.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35245.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35245.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35246 = seq__35146;
var G__35247 = chunk__35147;
var G__35248 = count__35148;
var G__35249 = (i__35149 + (1));
seq__35146 = G__35246;
chunk__35147 = G__35247;
count__35148 = G__35248;
i__35149 = G__35249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35146);
if(temp__5735__auto__){
var seq__35146__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35146__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35146__$1);
var G__35250 = cljs.core.chunk_rest(seq__35146__$1);
var G__35251 = c__4556__auto__;
var G__35252 = cljs.core.count(c__4556__auto__);
var G__35253 = (0);
seq__35146 = G__35250;
chunk__35147 = G__35251;
count__35148 = G__35252;
i__35149 = G__35253;
continue;
} else {
var vec__35160 = cljs.core.first(seq__35146__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35160,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35160,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___35254 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___35254)){
var effect_fn_35255 = temp__5733__auto___35254;
(effect_fn_35255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35255.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35256 = cljs.core.next(seq__35146__$1);
var G__35257 = null;
var G__35258 = (0);
var G__35259 = (0);
seq__35146 = G__35256;
chunk__35147 = G__35257;
count__35148 = G__35258;
i__35149 = G__35259;
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
var seq__35165 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35166 = null;
var count__35167 = (0);
var i__35168 = (0);
while(true){
if((i__35168 < count__35167)){
var event = chunk__35166.cljs$core$IIndexed$_nth$arity$2(null,i__35168);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35266 = seq__35165;
var G__35267 = chunk__35166;
var G__35268 = count__35167;
var G__35269 = (i__35168 + (1));
seq__35165 = G__35266;
chunk__35166 = G__35267;
count__35167 = G__35268;
i__35168 = G__35269;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35165);
if(temp__5735__auto__){
var seq__35165__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35165__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35165__$1);
var G__35270 = cljs.core.chunk_rest(seq__35165__$1);
var G__35271 = c__4556__auto__;
var G__35272 = cljs.core.count(c__4556__auto__);
var G__35273 = (0);
seq__35165 = G__35270;
chunk__35166 = G__35271;
count__35167 = G__35272;
i__35168 = G__35273;
continue;
} else {
var event = cljs.core.first(seq__35165__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__35274 = cljs.core.next(seq__35165__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__35165 = G__35274;
chunk__35166 = G__35275;
count__35167 = G__35276;
i__35168 = G__35277;
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
var seq__35170 = cljs.core.seq(value);
var chunk__35171 = null;
var count__35172 = (0);
var i__35173 = (0);
while(true){
if((i__35173 < count__35172)){
var event = chunk__35171.cljs$core$IIndexed$_nth$arity$2(null,i__35173);
clear_event(event);


var G__35278 = seq__35170;
var G__35279 = chunk__35171;
var G__35280 = count__35172;
var G__35281 = (i__35173 + (1));
seq__35170 = G__35278;
chunk__35171 = G__35279;
count__35172 = G__35280;
i__35173 = G__35281;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35170);
if(temp__5735__auto__){
var seq__35170__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35170__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35170__$1);
var G__35282 = cljs.core.chunk_rest(seq__35170__$1);
var G__35283 = c__4556__auto__;
var G__35284 = cljs.core.count(c__4556__auto__);
var G__35285 = (0);
seq__35170 = G__35282;
chunk__35171 = G__35283;
count__35172 = G__35284;
i__35173 = G__35285;
continue;
} else {
var event = cljs.core.first(seq__35170__$1);
clear_event(event);


var G__35286 = cljs.core.next(seq__35170__$1);
var G__35287 = null;
var G__35288 = (0);
var G__35289 = (0);
seq__35170 = G__35286;
chunk__35171 = G__35287;
count__35172 = G__35288;
i__35173 = G__35289;
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
