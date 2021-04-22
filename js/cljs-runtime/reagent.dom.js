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
var _STAR_always_update_STAR__orig_val__44782 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__44783 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__44783);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__44784 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__44785 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__44785);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__44784);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__44782);
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
var G__44791 = arguments.length;
switch (G__44791) {
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

var vec__44796 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44796,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44796,(1),null);
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

var seq__44802_44857 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__44803_44858 = null;
var count__44804_44859 = (0);
var i__44805_44860 = (0);
while(true){
if((i__44805_44860 < count__44804_44859)){
var vec__44818_44862 = chunk__44803_44858.cljs$core$IIndexed$_nth$arity$2(null,i__44805_44860);
var container_44863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44818_44862,(0),null);
var comp_44864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44818_44862,(1),null);
reagent.dom.re_render_component(comp_44864,container_44863);


var G__44865 = seq__44802_44857;
var G__44866 = chunk__44803_44858;
var G__44867 = count__44804_44859;
var G__44868 = (i__44805_44860 + (1));
seq__44802_44857 = G__44865;
chunk__44803_44858 = G__44866;
count__44804_44859 = G__44867;
i__44805_44860 = G__44868;
continue;
} else {
var temp__5735__auto___44870 = cljs.core.seq(seq__44802_44857);
if(temp__5735__auto___44870){
var seq__44802_44871__$1 = temp__5735__auto___44870;
if(cljs.core.chunked_seq_QMARK_(seq__44802_44871__$1)){
var c__4556__auto___44872 = cljs.core.chunk_first(seq__44802_44871__$1);
var G__44873 = cljs.core.chunk_rest(seq__44802_44871__$1);
var G__44874 = c__4556__auto___44872;
var G__44875 = cljs.core.count(c__4556__auto___44872);
var G__44876 = (0);
seq__44802_44857 = G__44873;
chunk__44803_44858 = G__44874;
count__44804_44859 = G__44875;
i__44805_44860 = G__44876;
continue;
} else {
var vec__44840_44877 = cljs.core.first(seq__44802_44871__$1);
var container_44878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44840_44877,(0),null);
var comp_44879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44840_44877,(1),null);
reagent.dom.re_render_component(comp_44879,container_44878);


var G__44881 = cljs.core.next(seq__44802_44871__$1);
var G__44882 = null;
var G__44883 = (0);
var G__44884 = (0);
seq__44802_44857 = G__44881;
chunk__44803_44858 = G__44882;
count__44804_44859 = G__44883;
i__44805_44860 = G__44884;
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
