goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__42734 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42735 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42735);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__42737 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__42738 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__42738);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42737);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__42734);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__42745 = arguments.length;
switch (G__42745) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__42750 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42750,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42750,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__42793_42827 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__42794_42828 = null;
var count__42795_42829 = (0);
var i__42796_42830 = (0);
while(true){
if((i__42796_42830 < count__42795_42829)){
var vec__42809_42834 = chunk__42794_42828.cljs$core$IIndexed$_nth$arity$2(null,i__42796_42830);
var container_42835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42809_42834,(0),null);
var comp_42836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42809_42834,(1),null);
reagent.dom.re_render_component(comp_42836,container_42835);


var G__42837 = seq__42793_42827;
var G__42838 = chunk__42794_42828;
var G__42839 = count__42795_42829;
var G__42840 = (i__42796_42830 + (1));
seq__42793_42827 = G__42837;
chunk__42794_42828 = G__42838;
count__42795_42829 = G__42839;
i__42796_42830 = G__42840;
continue;
} else {
var temp__5753__auto___42842 = cljs.core.seq(seq__42793_42827);
if(temp__5753__auto___42842){
var seq__42793_42843__$1 = temp__5753__auto___42842;
if(cljs.core.chunked_seq_QMARK_(seq__42793_42843__$1)){
var c__4649__auto___42844 = cljs.core.chunk_first(seq__42793_42843__$1);
var G__42845 = cljs.core.chunk_rest(seq__42793_42843__$1);
var G__42846 = c__4649__auto___42844;
var G__42847 = cljs.core.count(c__4649__auto___42844);
var G__42848 = (0);
seq__42793_42827 = G__42845;
chunk__42794_42828 = G__42846;
count__42795_42829 = G__42847;
i__42796_42830 = G__42848;
continue;
} else {
var vec__42814_42849 = cljs.core.first(seq__42793_42843__$1);
var container_42850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814_42849,(0),null);
var comp_42851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814_42849,(1),null);
reagent.dom.re_render_component(comp_42851,container_42850);


var G__42853 = cljs.core.next(seq__42793_42843__$1);
var G__42854 = null;
var G__42855 = (0);
var G__42856 = (0);
seq__42793_42827 = G__42853;
chunk__42794_42828 = G__42854;
count__42795_42829 = G__42855;
i__42796_42830 = G__42856;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
