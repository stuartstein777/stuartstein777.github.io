goog.provide('reagent.dom');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return shadow.js.shim.module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__29645 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29646 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29646);

try{return shadow.js.shim.module$react_dom.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__29652 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__29653 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__29653);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29652);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__29645);
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
var G__29661 = arguments.length;
switch (G__29661) {
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
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__29665 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(1),null);
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
return shadow.js.shim.module$react_dom.findDOMNode(this$);
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

var seq__29731_29757 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__29732_29758 = null;
var count__29733_29759 = (0);
var i__29734_29760 = (0);
while(true){
if((i__29734_29760 < count__29733_29759)){
var vec__29741_29761 = chunk__29732_29758.cljs$core$IIndexed$_nth$arity$2(null,i__29734_29760);
var container_29762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_29761,(0),null);
var comp_29763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29741_29761,(1),null);
reagent.dom.re_render_component(comp_29763,container_29762);


var G__29767 = seq__29731_29757;
var G__29768 = chunk__29732_29758;
var G__29769 = count__29733_29759;
var G__29770 = (i__29734_29760 + (1));
seq__29731_29757 = G__29767;
chunk__29732_29758 = G__29768;
count__29733_29759 = G__29769;
i__29734_29760 = G__29770;
continue;
} else {
var temp__5804__auto___29771 = cljs.core.seq(seq__29731_29757);
if(temp__5804__auto___29771){
var seq__29731_29773__$1 = temp__5804__auto___29771;
if(cljs.core.chunked_seq_QMARK_(seq__29731_29773__$1)){
var c__5568__auto___29774 = cljs.core.chunk_first(seq__29731_29773__$1);
var G__29775 = cljs.core.chunk_rest(seq__29731_29773__$1);
var G__29776 = c__5568__auto___29774;
var G__29777 = cljs.core.count(c__5568__auto___29774);
var G__29778 = (0);
seq__29731_29757 = G__29775;
chunk__29732_29758 = G__29776;
count__29733_29759 = G__29777;
i__29734_29760 = G__29778;
continue;
} else {
var vec__29744_29779 = cljs.core.first(seq__29731_29773__$1);
var container_29780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29744_29779,(0),null);
var comp_29781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29744_29779,(1),null);
reagent.dom.re_render_component(comp_29781,container_29780);


var G__29783 = cljs.core.next(seq__29731_29773__$1);
var G__29784 = null;
var G__29785 = (0);
var G__29786 = (0);
seq__29731_29757 = G__29783;
chunk__29732_29758 = G__29784;
count__29733_29759 = G__29785;
i__29734_29760 = G__29786;
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
