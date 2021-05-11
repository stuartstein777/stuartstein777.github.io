goog.provide('re_frame_flow.core');
var module$node_modules$react_flow_renderer$dist$ReactFlow=shadow.js.require("module$node_modules$react_flow_renderer$dist$ReactFlow", {});
var module$node_modules$dagre$index=shadow.js.require("module$node_modules$dagre$index", {});
re_frame_flow.core.fx_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_flow.core.id__GT_node_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_flow.core.get_deps = (function re_frame_flow$core$get_deps(result){
var G__29761 = cljs.core.PersistentHashSet.EMPTY;
var G__29761__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(result))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29761,cljs.core.first(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(result))):G__29761);
var G__29761__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(result))?clojure.set.union.cljs$core$IFn$_invoke$arity$2(G__29761__$1,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236).cljs$core$IFn$_invoke$arity$1(result)))):G__29761__$1);
var G__29761__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390).cljs$core$IFn$_invoke$arity$1(result))?(function (p1__29760_SHARP_){
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390).cljs$core$IFn$_invoke$arity$1(result))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__29760_SHARP_,cljs.core.first(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390).cljs$core$IFn$_invoke$arity$1(result))));
} else {
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__29760_SHARP_,cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390).cljs$core$IFn$_invoke$arity$1(result))));
}
})(G__29761__$2):G__29761__$2);
var G__29761__$4 = (cljs.core.truth_(new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http","http",382524695).cljs$core$IFn$_invoke$arity$1(result)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29761__$3,cljs.core.first(new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http","http",382524695).cljs$core$IFn$_invoke$arity$1(result)))):G__29761__$3);
var G__29761__$5 = (cljs.core.truth_(new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(result)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29761__$4,cljs.core.first(new cljs.core.Keyword(null,"on-success","on-success",1786904109).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(result)))):G__29761__$4);
var G__29761__$6 = (cljs.core.truth_(new cljs.core.Keyword(null,"on-failure","on-failure",842888245).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http","http",382524695).cljs$core$IFn$_invoke$arity$1(result)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29761__$5,cljs.core.first(new cljs.core.Keyword(null,"on-failure","on-failure",842888245).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http","http",382524695).cljs$core$IFn$_invoke$arity$1(result)))):G__29761__$5);
var G__29761__$7 = (cljs.core.truth_(new cljs.core.Keyword(null,"on-failure","on-failure",842888245).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(result)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__29761__$6,cljs.core.first(new cljs.core.Keyword(null,"on-failure","on-failure",842888245).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714).cljs$core$IFn$_invoke$arity$1(result)))):G__29761__$6);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(G__29761__$7,cljs.core.set(cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.Keyword(null,"http","http",382524695),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714)], 0)))));

});
re_frame_flow.core.kw__GT_str = (function re_frame_flow$core$kw__GT_str(id){
if(cljs.core.qualified_keyword_QMARK_(id)){
return [cljs.core.namespace(id),"/",cljs.core.name(id)].join('');
} else {
return cljs.core.name(id);
}
});
re_frame_flow.core.id__GT_node = (function re_frame_flow$core$id__GT_node(id){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame_flow.core.kw__GT_str(id),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"monospace",new cljs.core.Keyword(null,"wordBreak","wordBreak",-1023554627),"break-word",new cljs.core.Keyword(null,"width","width",-384071477),(200)], null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),id,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(id),new cljs.core.Keyword(null,"namespace","namespace",-377510372),cljs.core.namespace(id)], null),new cljs.core.Keyword(null,"sourcePosition","sourcePosition",458626458),"right",new cljs.core.Keyword(null,"targetPosition","targetPosition",-1658945768),"left",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null);
});
re_frame_flow.core.ids__GT_edge = (function re_frame_flow$core$ids__GT_edge(id1,id2){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),["e-",re_frame_flow.core.kw__GT_str(id1),"+",re_frame_flow.core.kw__GT_str(id2)].join(''),new cljs.core.Keyword(null,"source","source",-433931539),re_frame_flow.core.kw__GT_str(id1),new cljs.core.Keyword(null,"target","target",253001721),re_frame_flow.core.kw__GT_str(id2),new cljs.core.Keyword(null,"type","type",1174270348),"smoothstep",new cljs.core.Keyword(null,"animated","animated",129318795),true], null);
});
re_frame_flow.core.create_node_and_edges = (function re_frame_flow$core$create_node_and_edges(handlers){
return cljs.core.reduce_kv((function (acc,k,v){
var nodes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_frame_flow.core.id__GT_node,cljs.core.cons(k,v));
var edges = cljs.core.map.cljs$core$IFn$_invoke$arity$3(re_frame_flow.core.ids__GT_edge,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,edges));
}),cljs.core.PersistentVector.EMPTY,handlers);
});
re_frame_flow.core.get_id__GT_node_map = (function re_frame_flow$core$get_id__GT_node_map(handlers){
var m = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var fx = new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(m);
var events = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(m);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,e){
var id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e));
var color = (cljs.core.truth_((id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(fx) : id.call(null,fx)))?"red":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-handler","db-handler",579530098),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last((id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(events) : id.call(null,events))))))?"#336edc":"green"
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),cljs.core.assoc_in(cljs.core.assoc_in(e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"color","color",1011675173)], null),color),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"border","border",1444987323)], null),["1px solid ",color].join('')));
}),cljs.core.PersistentArrayMap.EMPTY,re_frame_flow.core.create_node_and_edges(handlers));
});
(re_frame.std_interceptors.fx_handler__GT_interceptor = (function re_frame_flow$core$fx_handler__GT_interceptor(id,handler_fn){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097),new cljs.core.Keyword(null,"before","before",-1633692388),(function re_frame_flow$core$fx_handler__GT_interceptor_$_fx_handler_before(context){
var new_context = ((re_frame.trace.is_trace_enabled_QMARK_())?(function (){var _STAR_current_trace_STAR__orig_val__29762 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__29763 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","handler","event/handler",-295903150),new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"original-event","original-event",2121330403))], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__29763);

try{try{var map__29764 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__29764__$1 = (((((!((map__29764 == null))))?(((((map__29764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29764):map__29764);
var coeffects = map__29764__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29764__$1,new cljs.core.Keyword(null,"event","event",301435442));
var result = (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event));
var result_29774__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"db","db",993250759));
var deps_29775 = re_frame_flow.core.get_deps(result_29774__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame_flow.core.fx_handlers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps_29775], 0));

cljs.core.reset_BANG_(re_frame_flow.core.id__GT_node_map,re_frame_flow.core.get_id__GT_node_map(cljs.core.deref(re_frame_flow.core.fx_handlers)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),result);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__28220__auto___29776 = re_frame.interop.now();
var duration__28221__auto___29777 = (end__28220__auto___29776 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__28221__auto___29777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__28220__auto___29776);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__29762);
}})():(function (){var map__29766 = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
var map__29766__$1 = (((((!((map__29766 == null))))?(((((map__29766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29766):map__29766);
var coeffects = map__29766__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29766__$1,new cljs.core.Keyword(null,"event","event",301435442));
var result = (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(coeffects,event) : handler_fn.call(null,coeffects,event));
var result_29778__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"db","db",993250759));
var deps_29779 = re_frame_flow.core.get_deps(result_29778__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(re_frame_flow.core.fx_handlers,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([deps_29779], 0));

cljs.core.reset_BANG_(re_frame_flow.core.id__GT_node_map,re_frame_flow.core.get_id__GT_node_map(cljs.core.deref(re_frame_flow.core.fx_handlers)));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"effects","effects",-282369292),result);
})());
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__28222__auto___29780 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"effects","effects",-282369292),re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(new_context),new cljs.core.Keyword(null,"coeffects","coeffects",497912985),re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__28222__auto___29780);

} else {
}

return new_context;
})], 0));
}));
(re_frame.core.reg_event_fx = (function() {
var re_frame_flow$core$reg_event_fx = null;
var re_frame_flow$core$reg_event_fx__2 = (function (id,handler){
return re_frame_flow$core$reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
});
var re_frame_flow$core$reg_event_fx__3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.std_interceptors.inject_global_interceptors,interceptors,(function (){var fexpr__29768 = (((typeof re_frame !== 'undefined') && (typeof re_frame.std_interceptors !== 'undefined') && (typeof re_frame.std_interceptors.fx_handler__GT_interceptor !== 'undefined'))?(new cljs.core.Var((function (){
return re_frame.std_interceptors.fx_handler__GT_interceptor;
}),cljs.core.with_meta(new cljs.core.Symbol("re-frame.std-interceptors","fx-handler->interceptor","re-frame.std-interceptors/fx-handler->interceptor",-1578716139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null)),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"re-frame.std-interceptors","re-frame.std-interceptors",-683710862,null),new cljs.core.Symbol(null,"fx-handler->interceptor","fx-handler->interceptor",-2052585990,null),"re_frame/std_interceptors.cljc",(30),(1),(109),(109),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler-fn","handler-fn",841143797,null)], null)),"Returns an interceptor which wraps the kind of event handler given to `reg-event-fx`.\n\n  These handlers take two arguments;  `coeffects` and `event`, and they return `effects`.\n\n      (fn [coeffects event]\n         {:db ...\n          :dispatch ...})\n\n   Wrap handler in an interceptor so it can be added to (the RHS) of a chain:\n     1. extracts `:coeffects`\n     2. call handler-fn giving coeffects\n     3. stores the result back into the `:effects`",(cljs.core.truth_(re_frame.std_interceptors.fx_handler__GT_interceptor)?re_frame.std_interceptors.fx_handler__GT_interceptor.cljs$lang$test:null)]))):null);
return (fexpr__29768.cljs$core$IFn$_invoke$arity$2 ? fexpr__29768.cljs$core$IFn$_invoke$arity$2(id,handler) : fexpr__29768.call(null,id,handler));
})()], null));
});
re_frame_flow$core$reg_event_fx = function(id,interceptors,handler){
switch(arguments.length){
case 2:
return re_frame_flow$core$reg_event_fx__2.call(this,id,interceptors);
case 3:
return re_frame_flow$core$reg_event_fx__3.call(this,id,interceptors,handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame_flow$core$reg_event_fx.cljs$core$IFn$_invoke$arity$2 = re_frame_flow$core$reg_event_fx__2;
re_frame_flow$core$reg_event_fx.cljs$core$IFn$_invoke$arity$3 = re_frame_flow$core$reg_event_fx__3;
return re_frame_flow$core$reg_event_fx;
})()
);
re_frame_flow.core.clear_cache_BANG_ = (function re_frame_flow$core$clear_cache_BANG_(){
cljs.core.reset_BANG_(re_frame_flow.core.fx_handlers,cljs.core.PersistentArrayMap.EMPTY);

return cljs.core.reset_BANG_(re_frame_flow.core.id__GT_node_map,cljs.core.PersistentArrayMap.EMPTY);
});
re_frame_flow.core.Graph = module$node_modules$dagre$index.graphlib.Graph;
re_frame_flow.core.dagre_graph = (new re_frame_flow.core.Graph());
re_frame_flow.core.dagre_graph.setDefaultEdgeLabel((function (){
return cljs.core.clj__GT_js(cljs.core.PersistentArrayMap.EMPTY);
}));
re_frame_flow.core.dagre_graph.setGraph(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),"LR"], null)));
re_frame_flow.core.react_flow_pro = reagent.core.adapt_react_class(module$node_modules$react_flow_renderer$dist$ReactFlow.ReactFlowProvider);
re_frame_flow.core.react_flow = reagent.core.adapt_react_class(module$node_modules$react_flow_renderer$dist$ReactFlow.default);
re_frame_flow.core.background = reagent.core.adapt_react_class(module$node_modules$react_flow_renderer$dist$ReactFlow.Background);
re_frame_flow.core.controls = reagent.core.adapt_react_class(module$node_modules$react_flow_renderer$dist$ReactFlow.Controls);
if((typeof re_frame_flow !== 'undefined') && (typeof re_frame_flow.core !== 'undefined') && (typeof re_frame_flow.core.show_panel_QMARK_ !== 'undefined')){
} else {
re_frame_flow.core.show_panel_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
re_frame_flow.core.update_handles_color = (function re_frame_flow$core$update_handles_color(){
var css = ".react-flow__handle { background: white !important;\n                                   border: 1px solid #b1b1b7 !important;}";
var head = (function (){var or__4126__auto__ = document.head;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (document.getElementsByTagName("head")[(0)]);
}
})();
var style = document.createElement("style");
head.appendChild(style);

return style.appendChild(document.createTextNode(css));
});
re_frame_flow.core.on_node_mouse_enter = (function re_frame_flow$core$on_node_mouse_enter(hovered_node_id,_,node){
var id = node.id;
var ns_STAR_ = node.data.namespace;
var name_STAR_ = node.data.name;
cljs.core.reset_BANG_(hovered_node_id,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_flow.core.id__GT_node_map,(function (elements,id__$1,v){
return cljs.core.assoc_in(cljs.core.assoc_in(elements,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"label","label",1718410804)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609)], null),(4));
}),id,(cljs.core.truth_(ns_STAR_)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_STAR_)].join(''):[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_STAR_)].join('')));
});
re_frame_flow.core.on_node_mouse_leave = (function re_frame_flow$core$on_node_mouse_leave(hovered_node_id,_,node){
var id = node.id;
var name_STAR_ = node.data.name;
cljs.core.reset_BANG_(hovered_node_id,null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_flow.core.id__GT_node_map,(function (elements,id__$1,v){
return cljs.core.assoc_in(cljs.core.assoc_in(elements,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"label","label",1718410804)], null),v),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609)], null),(3));
}),id,name_STAR_);
});
re_frame_flow.core.flow_panel = (function re_frame_flow$core$flow_panel(){
var handle_keys = (function (e){
var tag_name = e.target.tagName;
var entering_input_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((((!(entering_input_QMARK_)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"g"))?e.ctrlKey:false):false))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame_flow.core.show_panel_QMARK_,cljs.core.not);

return e.preventDefault();
} else {
return null;
}
});
var hovered_node_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var elements = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Flow Panel",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
window.addEventListener("keydown",handle_keys);

return re_frame_flow.core.update_handles_color();
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (){
return window.removeEventListener("keydown",handle_keys);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (){
var width = (280);
var height = (36);
var elements_STAR_ = cljs.core.vals(cljs.core.deref(re_frame_flow.core.id__GT_node_map));
var _ = (function (){var seq__29770 = cljs.core.seq(elements_STAR_);
var chunk__29771 = null;
var count__29772 = (0);
var i__29773 = (0);
while(true){
if((i__29773 < count__29772)){
var el = chunk__29771.cljs$core$IIndexed$_nth$arity$2(null,i__29773);
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(el))){
re_frame_flow.core.dagre_graph.setNode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)));
} else {
re_frame_flow.core.dagre_graph.setEdge(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(el));
}


var G__29781 = seq__29770;
var G__29782 = chunk__29771;
var G__29783 = count__29772;
var G__29784 = (i__29773 + (1));
seq__29770 = G__29781;
chunk__29771 = G__29782;
count__29772 = G__29783;
i__29773 = G__29784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29770);
if(temp__5735__auto__){
var seq__29770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29770__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29770__$1);
var G__29785 = cljs.core.chunk_rest(seq__29770__$1);
var G__29786 = c__4556__auto__;
var G__29787 = cljs.core.count(c__4556__auto__);
var G__29788 = (0);
seq__29770 = G__29785;
chunk__29771 = G__29786;
count__29772 = G__29787;
i__29773 = G__29788;
continue;
} else {
var el = cljs.core.first(seq__29770__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(el))){
re_frame_flow.core.dagre_graph.setNode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null)));
} else {
re_frame_flow.core.dagre_graph.setEdge(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(el));
}


var G__29789 = cljs.core.next(seq__29770__$1);
var G__29790 = null;
var G__29791 = (0);
var G__29792 = (0);
seq__29770 = G__29789;
chunk__29771 = G__29790;
count__29772 = G__29791;
i__29773 = G__29792;
continue;
}
} else {
return null;
}
}
break;
}
})();
var ___$1 = module$node_modules$dagre$index.layout(re_frame_flow.core.dagre_graph);
var elements_STAR___$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (el){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(el))){
var node_with_pos = re_frame_flow.core.dagre_graph.node(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(el));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(el,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((node_with_pos.x - (width / (2))) + (Math.random() / (1000))),new cljs.core.Keyword(null,"y","y",-1757859776),(node_with_pos.y - (height / (2)))], null));
} else {
return el;
}
}),elements_STAR_);
return cljs.core.reset_BANG_(elements,elements_STAR___$1);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_flow.core.react_flow_pro,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_flow.core.react_flow,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"on-node-mouse-enter","on-node-mouse-enter",672722278),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame_flow.core.on_node_mouse_enter,hovered_node_id),new cljs.core.Keyword(null,"on-node-mouse-leave","on-node-mouse-leave",-1420517774),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame_flow.core.on_node_mouse_leave,hovered_node_id),new cljs.core.Keyword(null,"default-position","default-position",533262486),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["0","100%","white",(cljs.core.truth_(cljs.core.deref(re_frame_flow.core.show_panel_QMARK_))?"9999":"0"),(cljs.core.truth_(cljs.core.deref(re_frame_flow.core.show_panel_QMARK_))?"9999":"0"),"absolute",(cljs.core.truth_(cljs.core.deref(re_frame_flow.core.show_panel_QMARK_))?"visible":"hidden"),"100vh","0"]),new cljs.core.Keyword(null,"snap-to-grid","snap-to-grid",1615472929),true,new cljs.core.Keyword(null,"snap-grid","snap-grid",603697532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(15)], null),new cljs.core.Keyword(null,"elements","elements",657646735),(cljs.core.truth_(cljs.core.deref(hovered_node_id))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29769_SHARP_){
var or__4126__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__29769_SHARP_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__29769_SHARP_),cljs.core.deref(hovered_node_id));
}
}),cljs.core.deref(elements)):cljs.core.deref(elements))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_flow.core.controls], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_flow.core.background,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#aaa"], null)], null)], null)], null);
})], null));
});
re_frame_flow.core.panel_div = (function re_frame_flow$core$panel_div(){
var id = "--re-frame-flow--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
re_frame_flow.core.init_BANG_ = (function re_frame_flow$core$init_BANG_(){
re_frame_flow.core.clear_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame_flow.core.flow_panel], null),re_frame_flow.core.panel_div());
});

//# sourceMappingURL=re_frame_flow.core.js.map
