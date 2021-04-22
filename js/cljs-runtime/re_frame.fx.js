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
var _STAR_current_trace_STAR__orig_val__41019 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__41020 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__41020);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___41106 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___41106)){
var new_db_41107 = temp__5735__auto___41106;
var fexpr__41023_41108 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41023_41108.cljs$core$IFn$_invoke$arity$1 ? fexpr__41023_41108.cljs$core$IFn$_invoke$arity$1(new_db_41107) : fexpr__41023_41108.call(null,new_db_41107));
} else {
}

var seq__41024 = cljs.core.seq(effects_without_db);
var chunk__41025 = null;
var count__41026 = (0);
var i__41027 = (0);
while(true){
if((i__41027 < count__41026)){
var vec__41036 = chunk__41025.cljs$core$IIndexed$_nth$arity$2(null,i__41027);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41036,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41036,(1),null);
var temp__5733__auto___41109 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41109)){
var effect_fn_41110 = temp__5733__auto___41109;
(effect_fn_41110.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41110.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41110.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41111 = seq__41024;
var G__41112 = chunk__41025;
var G__41113 = count__41026;
var G__41114 = (i__41027 + (1));
seq__41024 = G__41111;
chunk__41025 = G__41112;
count__41026 = G__41113;
i__41027 = G__41114;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41024);
if(temp__5735__auto__){
var seq__41024__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41024__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41024__$1);
var G__41115 = cljs.core.chunk_rest(seq__41024__$1);
var G__41116 = c__4556__auto__;
var G__41117 = cljs.core.count(c__4556__auto__);
var G__41118 = (0);
seq__41024 = G__41115;
chunk__41025 = G__41116;
count__41026 = G__41117;
i__41027 = G__41118;
continue;
} else {
var vec__41039 = cljs.core.first(seq__41024__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41039,(1),null);
var temp__5733__auto___41119 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41119)){
var effect_fn_41120 = temp__5733__auto___41119;
(effect_fn_41120.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41120.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41120.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41121 = cljs.core.next(seq__41024__$1);
var G__41122 = null;
var G__41123 = (0);
var G__41124 = (0);
seq__41024 = G__41121;
chunk__41025 = G__41122;
count__41026 = G__41123;
i__41027 = G__41124;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__28485__auto___41125 = re_frame.interop.now();
var duration__28486__auto___41126 = (end__28485__auto___41125 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28486__auto___41126,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__28485__auto___41125);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__41019);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___41127 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___41127)){
var new_db_41128 = temp__5735__auto___41127;
var fexpr__41042_41129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__41042_41129.cljs$core$IFn$_invoke$arity$1 ? fexpr__41042_41129.cljs$core$IFn$_invoke$arity$1(new_db_41128) : fexpr__41042_41129.call(null,new_db_41128));
} else {
}

var seq__41043 = cljs.core.seq(effects_without_db);
var chunk__41044 = null;
var count__41045 = (0);
var i__41046 = (0);
while(true){
if((i__41046 < count__41045)){
var vec__41056 = chunk__41044.cljs$core$IIndexed$_nth$arity$2(null,i__41046);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41056,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41056,(1),null);
var temp__5733__auto___41130 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41130)){
var effect_fn_41131 = temp__5733__auto___41130;
(effect_fn_41131.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41131.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41131.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41132 = seq__41043;
var G__41133 = chunk__41044;
var G__41134 = count__41045;
var G__41135 = (i__41046 + (1));
seq__41043 = G__41132;
chunk__41044 = G__41133;
count__41045 = G__41134;
i__41046 = G__41135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41043);
if(temp__5735__auto__){
var seq__41043__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41043__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41043__$1);
var G__41136 = cljs.core.chunk_rest(seq__41043__$1);
var G__41137 = c__4556__auto__;
var G__41138 = cljs.core.count(c__4556__auto__);
var G__41139 = (0);
seq__41043 = G__41136;
chunk__41044 = G__41137;
count__41045 = G__41138;
i__41046 = G__41139;
continue;
} else {
var vec__41059 = cljs.core.first(seq__41043__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41059,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41059,(1),null);
var temp__5733__auto___41140 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41140)){
var effect_fn_41141 = temp__5733__auto___41140;
(effect_fn_41141.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41141.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41141.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__41142 = cljs.core.next(seq__41043__$1);
var G__41143 = null;
var G__41144 = (0);
var G__41145 = (0);
seq__41043 = G__41142;
chunk__41044 = G__41143;
count__41045 = G__41144;
i__41046 = G__41145;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__41063){
var map__41064 = p__41063;
var map__41064__$1 = (((((!((map__41064 == null))))?(((((map__41064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41064):map__41064);
var effect = map__41064__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41064__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41064__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__41066 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41067 = null;
var count__41068 = (0);
var i__41069 = (0);
while(true){
if((i__41069 < count__41068)){
var effect = chunk__41067.cljs$core$IIndexed$_nth$arity$2(null,i__41069);
re_frame.fx.dispatch_later(effect);


var G__41146 = seq__41066;
var G__41147 = chunk__41067;
var G__41148 = count__41068;
var G__41149 = (i__41069 + (1));
seq__41066 = G__41146;
chunk__41067 = G__41147;
count__41068 = G__41148;
i__41069 = G__41149;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41066);
if(temp__5735__auto__){
var seq__41066__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41066__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41066__$1);
var G__41150 = cljs.core.chunk_rest(seq__41066__$1);
var G__41151 = c__4556__auto__;
var G__41152 = cljs.core.count(c__4556__auto__);
var G__41153 = (0);
seq__41066 = G__41150;
chunk__41067 = G__41151;
count__41068 = G__41152;
i__41069 = G__41153;
continue;
} else {
var effect = cljs.core.first(seq__41066__$1);
re_frame.fx.dispatch_later(effect);


var G__41154 = cljs.core.next(seq__41066__$1);
var G__41155 = null;
var G__41156 = (0);
var G__41157 = (0);
seq__41066 = G__41154;
chunk__41067 = G__41155;
count__41068 = G__41156;
i__41069 = G__41157;
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
var seq__41082 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__41083 = null;
var count__41084 = (0);
var i__41085 = (0);
while(true){
if((i__41085 < count__41084)){
var vec__41092 = chunk__41083.cljs$core$IIndexed$_nth$arity$2(null,i__41085);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41092,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___41158 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41158)){
var effect_fn_41159 = temp__5733__auto___41158;
(effect_fn_41159.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41159.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41159.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41160 = seq__41082;
var G__41161 = chunk__41083;
var G__41162 = count__41084;
var G__41163 = (i__41085 + (1));
seq__41082 = G__41160;
chunk__41083 = G__41161;
count__41084 = G__41162;
i__41085 = G__41163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41082);
if(temp__5735__auto__){
var seq__41082__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41082__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41082__$1);
var G__41164 = cljs.core.chunk_rest(seq__41082__$1);
var G__41165 = c__4556__auto__;
var G__41166 = cljs.core.count(c__4556__auto__);
var G__41167 = (0);
seq__41082 = G__41164;
chunk__41083 = G__41165;
count__41084 = G__41166;
i__41085 = G__41167;
continue;
} else {
var vec__41095 = cljs.core.first(seq__41082__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41095,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41095,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___41168 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___41168)){
var effect_fn_41169 = temp__5733__auto___41168;
(effect_fn_41169.cljs$core$IFn$_invoke$arity$1 ? effect_fn_41169.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_41169.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__41170 = cljs.core.next(seq__41082__$1);
var G__41171 = null;
var G__41172 = (0);
var G__41173 = (0);
seq__41082 = G__41170;
chunk__41083 = G__41171;
count__41084 = G__41172;
i__41085 = G__41173;
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
var seq__41098 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__41099 = null;
var count__41100 = (0);
var i__41101 = (0);
while(true){
if((i__41101 < count__41100)){
var event = chunk__41099.cljs$core$IIndexed$_nth$arity$2(null,i__41101);
re_frame.router.dispatch(event);


var G__41174 = seq__41098;
var G__41175 = chunk__41099;
var G__41176 = count__41100;
var G__41177 = (i__41101 + (1));
seq__41098 = G__41174;
chunk__41099 = G__41175;
count__41100 = G__41176;
i__41101 = G__41177;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41098);
if(temp__5735__auto__){
var seq__41098__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41098__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41098__$1);
var G__41178 = cljs.core.chunk_rest(seq__41098__$1);
var G__41179 = c__4556__auto__;
var G__41180 = cljs.core.count(c__4556__auto__);
var G__41181 = (0);
seq__41098 = G__41178;
chunk__41099 = G__41179;
count__41100 = G__41180;
i__41101 = G__41181;
continue;
} else {
var event = cljs.core.first(seq__41098__$1);
re_frame.router.dispatch(event);


var G__41182 = cljs.core.next(seq__41098__$1);
var G__41183 = null;
var G__41184 = (0);
var G__41185 = (0);
seq__41098 = G__41182;
chunk__41099 = G__41183;
count__41100 = G__41184;
i__41101 = G__41185;
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
var seq__41102 = cljs.core.seq(value);
var chunk__41103 = null;
var count__41104 = (0);
var i__41105 = (0);
while(true){
if((i__41105 < count__41104)){
var event = chunk__41103.cljs$core$IIndexed$_nth$arity$2(null,i__41105);
clear_event(event);


var G__41186 = seq__41102;
var G__41187 = chunk__41103;
var G__41188 = count__41104;
var G__41189 = (i__41105 + (1));
seq__41102 = G__41186;
chunk__41103 = G__41187;
count__41104 = G__41188;
i__41105 = G__41189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41102);
if(temp__5735__auto__){
var seq__41102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41102__$1);
var G__41190 = cljs.core.chunk_rest(seq__41102__$1);
var G__41191 = c__4556__auto__;
var G__41192 = cljs.core.count(c__4556__auto__);
var G__41193 = (0);
seq__41102 = G__41190;
chunk__41103 = G__41191;
count__41104 = G__41192;
i__41105 = G__41193;
continue;
} else {
var event = cljs.core.first(seq__41102__$1);
clear_event(event);


var G__41194 = cljs.core.next(seq__41102__$1);
var G__41195 = null;
var G__41196 = (0);
var G__41197 = (0);
seq__41102 = G__41194;
chunk__41103 = G__41195;
count__41104 = G__41196;
i__41105 = G__41197;
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
