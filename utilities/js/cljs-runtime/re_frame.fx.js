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
var _STAR_current_trace_STAR__orig_val__25012 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__25013 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__25013);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___25177 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___25177)){
var new_db_25178 = temp__5804__auto___25177;
var fexpr__25016_25179 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25016_25179.cljs$core$IFn$_invoke$arity$1 ? fexpr__25016_25179.cljs$core$IFn$_invoke$arity$1(new_db_25178) : fexpr__25016_25179.call(null,new_db_25178));
} else {
}

var seq__25017 = cljs.core.seq(effects_without_db);
var chunk__25018 = null;
var count__25019 = (0);
var i__25020 = (0);
while(true){
if((i__25020 < count__25019)){
var vec__25037 = chunk__25018.cljs$core$IIndexed$_nth$arity$2(null,i__25020);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25037,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25037,(1),null);
var temp__5802__auto___25180 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25180)){
var effect_fn_25181 = temp__5802__auto___25180;
(effect_fn_25181.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25181.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25181.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25182 = seq__25017;
var G__25183 = chunk__25018;
var G__25184 = count__25019;
var G__25185 = (i__25020 + (1));
seq__25017 = G__25182;
chunk__25018 = G__25183;
count__25019 = G__25184;
i__25020 = G__25185;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25017);
if(temp__5804__auto__){
var seq__25017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25017__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25017__$1);
var G__25186 = cljs.core.chunk_rest(seq__25017__$1);
var G__25187 = c__5568__auto__;
var G__25188 = cljs.core.count(c__5568__auto__);
var G__25189 = (0);
seq__25017 = G__25186;
chunk__25018 = G__25187;
count__25019 = G__25188;
i__25020 = G__25189;
continue;
} else {
var vec__25046 = cljs.core.first(seq__25017__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25046,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25046,(1),null);
var temp__5802__auto___25190 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25190)){
var effect_fn_25191 = temp__5802__auto___25190;
(effect_fn_25191.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25191.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25191.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25192 = cljs.core.next(seq__25017__$1);
var G__25193 = null;
var G__25194 = (0);
var G__25195 = (0);
seq__25017 = G__25192;
chunk__25018 = G__25193;
count__25019 = G__25194;
i__25020 = G__25195;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24562__auto___25196 = re_frame.interop.now();
var duration__24563__auto___25197 = (end__24562__auto___25196 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24563__auto___25197,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24562__auto___25196);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__25012);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___25198 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___25198)){
var new_db_25199 = temp__5804__auto___25198;
var fexpr__25083_25200 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__25083_25200.cljs$core$IFn$_invoke$arity$1 ? fexpr__25083_25200.cljs$core$IFn$_invoke$arity$1(new_db_25199) : fexpr__25083_25200.call(null,new_db_25199));
} else {
}

var seq__25084 = cljs.core.seq(effects_without_db);
var chunk__25085 = null;
var count__25086 = (0);
var i__25087 = (0);
while(true){
if((i__25087 < count__25086)){
var vec__25099 = chunk__25085.cljs$core$IIndexed$_nth$arity$2(null,i__25087);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25099,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25099,(1),null);
var temp__5802__auto___25201 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25201)){
var effect_fn_25202 = temp__5802__auto___25201;
(effect_fn_25202.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25202.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25202.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25203 = seq__25084;
var G__25204 = chunk__25085;
var G__25205 = count__25086;
var G__25206 = (i__25087 + (1));
seq__25084 = G__25203;
chunk__25085 = G__25204;
count__25086 = G__25205;
i__25087 = G__25206;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25084);
if(temp__5804__auto__){
var seq__25084__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25084__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25084__$1);
var G__25207 = cljs.core.chunk_rest(seq__25084__$1);
var G__25208 = c__5568__auto__;
var G__25209 = cljs.core.count(c__5568__auto__);
var G__25210 = (0);
seq__25084 = G__25207;
chunk__25085 = G__25208;
count__25086 = G__25209;
i__25087 = G__25210;
continue;
} else {
var vec__25103 = cljs.core.first(seq__25084__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25103,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25103,(1),null);
var temp__5802__auto___25211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25211)){
var effect_fn_25212 = temp__5802__auto___25211;
(effect_fn_25212.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25212.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25212.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__25213 = cljs.core.next(seq__25084__$1);
var G__25214 = null;
var G__25215 = (0);
var G__25216 = (0);
seq__25084 = G__25213;
chunk__25085 = G__25214;
count__25086 = G__25215;
i__25087 = G__25216;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__25121){
var map__25122 = p__25121;
var map__25122__$1 = cljs.core.__destructure_map(map__25122);
var effect = map__25122__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25122__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25122__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__25124 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25125 = null;
var count__25126 = (0);
var i__25127 = (0);
while(true){
if((i__25127 < count__25126)){
var effect = chunk__25125.cljs$core$IIndexed$_nth$arity$2(null,i__25127);
re_frame.fx.dispatch_later(effect);


var G__25217 = seq__25124;
var G__25218 = chunk__25125;
var G__25219 = count__25126;
var G__25220 = (i__25127 + (1));
seq__25124 = G__25217;
chunk__25125 = G__25218;
count__25126 = G__25219;
i__25127 = G__25220;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25124);
if(temp__5804__auto__){
var seq__25124__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25124__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25124__$1);
var G__25221 = cljs.core.chunk_rest(seq__25124__$1);
var G__25222 = c__5568__auto__;
var G__25223 = cljs.core.count(c__5568__auto__);
var G__25224 = (0);
seq__25124 = G__25221;
chunk__25125 = G__25222;
count__25126 = G__25223;
i__25127 = G__25224;
continue;
} else {
var effect = cljs.core.first(seq__25124__$1);
re_frame.fx.dispatch_later(effect);


var G__25225 = cljs.core.next(seq__25124__$1);
var G__25226 = null;
var G__25227 = (0);
var G__25228 = (0);
seq__25124 = G__25225;
chunk__25125 = G__25226;
count__25126 = G__25227;
i__25127 = G__25228;
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
var seq__25129 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__25130 = null;
var count__25131 = (0);
var i__25132 = (0);
while(true){
if((i__25132 < count__25131)){
var vec__25144 = chunk__25130.cljs$core$IIndexed$_nth$arity$2(null,i__25132);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25144,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___25229 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25229)){
var effect_fn_25230 = temp__5802__auto___25229;
(effect_fn_25230.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25230.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25230.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25231 = seq__25129;
var G__25232 = chunk__25130;
var G__25233 = count__25131;
var G__25234 = (i__25132 + (1));
seq__25129 = G__25231;
chunk__25130 = G__25232;
count__25131 = G__25233;
i__25132 = G__25234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25129);
if(temp__5804__auto__){
var seq__25129__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25129__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25129__$1);
var G__25239 = cljs.core.chunk_rest(seq__25129__$1);
var G__25240 = c__5568__auto__;
var G__25241 = cljs.core.count(c__5568__auto__);
var G__25242 = (0);
seq__25129 = G__25239;
chunk__25130 = G__25240;
count__25131 = G__25241;
i__25132 = G__25242;
continue;
} else {
var vec__25150 = cljs.core.first(seq__25129__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25150,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25150,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___25243 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___25243)){
var effect_fn_25244 = temp__5802__auto___25243;
(effect_fn_25244.cljs$core$IFn$_invoke$arity$1 ? effect_fn_25244.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_25244.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__25245 = cljs.core.next(seq__25129__$1);
var G__25246 = null;
var G__25247 = (0);
var G__25248 = (0);
seq__25129 = G__25245;
chunk__25130 = G__25246;
count__25131 = G__25247;
i__25132 = G__25248;
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
var seq__25156 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__25157 = null;
var count__25158 = (0);
var i__25159 = (0);
while(true){
if((i__25159 < count__25158)){
var event = chunk__25157.cljs$core$IIndexed$_nth$arity$2(null,i__25159);
re_frame.router.dispatch(event);


var G__25252 = seq__25156;
var G__25253 = chunk__25157;
var G__25254 = count__25158;
var G__25255 = (i__25159 + (1));
seq__25156 = G__25252;
chunk__25157 = G__25253;
count__25158 = G__25254;
i__25159 = G__25255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25156);
if(temp__5804__auto__){
var seq__25156__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25156__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25156__$1);
var G__25256 = cljs.core.chunk_rest(seq__25156__$1);
var G__25257 = c__5568__auto__;
var G__25258 = cljs.core.count(c__5568__auto__);
var G__25259 = (0);
seq__25156 = G__25256;
chunk__25157 = G__25257;
count__25158 = G__25258;
i__25159 = G__25259;
continue;
} else {
var event = cljs.core.first(seq__25156__$1);
re_frame.router.dispatch(event);


var G__25263 = cljs.core.next(seq__25156__$1);
var G__25264 = null;
var G__25265 = (0);
var G__25266 = (0);
seq__25156 = G__25263;
chunk__25157 = G__25264;
count__25158 = G__25265;
i__25159 = G__25266;
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
var seq__25169 = cljs.core.seq(value);
var chunk__25170 = null;
var count__25171 = (0);
var i__25172 = (0);
while(true){
if((i__25172 < count__25171)){
var event = chunk__25170.cljs$core$IIndexed$_nth$arity$2(null,i__25172);
clear_event(event);


var G__25267 = seq__25169;
var G__25268 = chunk__25170;
var G__25269 = count__25171;
var G__25270 = (i__25172 + (1));
seq__25169 = G__25267;
chunk__25170 = G__25268;
count__25171 = G__25269;
i__25172 = G__25270;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25169);
if(temp__5804__auto__){
var seq__25169__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25169__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25169__$1);
var G__25271 = cljs.core.chunk_rest(seq__25169__$1);
var G__25272 = c__5568__auto__;
var G__25273 = cljs.core.count(c__5568__auto__);
var G__25274 = (0);
seq__25169 = G__25271;
chunk__25170 = G__25272;
count__25171 = G__25273;
i__25172 = G__25274;
continue;
} else {
var event = cljs.core.first(seq__25169__$1);
clear_event(event);


var G__25275 = cljs.core.next(seq__25169__$1);
var G__25276 = null;
var G__25277 = (0);
var G__25278 = (0);
seq__25169 = G__25275;
chunk__25170 = G__25276;
count__25171 = G__25277;
i__25172 = G__25278;
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
