goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__39699__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39700__i = 0, G__39700__a = new Array(arguments.length -  0);
while (G__39700__i < G__39700__a.length) {G__39700__a[G__39700__i] = arguments[G__39700__i + 0]; ++G__39700__i;}
  args = new cljs.core.IndexedSeq(G__39700__a,0,null);
} 
return G__39699__delegate.call(this,args);};
G__39699.cljs$lang$maxFixedArity = 0;
G__39699.cljs$lang$applyTo = (function (arglist__39701){
var args = cljs.core.seq(arglist__39701);
return G__39699__delegate(args);
});
G__39699.cljs$core$IFn$_invoke$arity$variadic = G__39699__delegate;
return G__39699;
})()
);

(o.error = (function() { 
var G__39702__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__39702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39703__i = 0, G__39703__a = new Array(arguments.length -  0);
while (G__39703__i < G__39703__a.length) {G__39703__a[G__39703__i] = arguments[G__39703__i + 0]; ++G__39703__i;}
  args = new cljs.core.IndexedSeq(G__39703__a,0,null);
} 
return G__39702__delegate.call(this,args);};
G__39702.cljs$lang$maxFixedArity = 0;
G__39702.cljs$lang$applyTo = (function (arglist__39704){
var args = cljs.core.seq(arglist__39704);
return G__39702__delegate(args);
});
G__39702.cljs$core$IFn$_invoke$arity$variadic = G__39702__delegate;
return G__39702;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
