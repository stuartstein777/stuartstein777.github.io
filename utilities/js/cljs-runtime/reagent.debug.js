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
var G__23161__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23161 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23162__i = 0, G__23162__a = new Array(arguments.length -  0);
while (G__23162__i < G__23162__a.length) {G__23162__a[G__23162__i] = arguments[G__23162__i + 0]; ++G__23162__i;}
  args = new cljs.core.IndexedSeq(G__23162__a,0,null);
} 
return G__23161__delegate.call(this,args);};
G__23161.cljs$lang$maxFixedArity = 0;
G__23161.cljs$lang$applyTo = (function (arglist__23163){
var args = cljs.core.seq(arglist__23163);
return G__23161__delegate(args);
});
G__23161.cljs$core$IFn$_invoke$arity$variadic = G__23161__delegate;
return G__23161;
})()
);

(o.error = (function() { 
var G__23164__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23165__i = 0, G__23165__a = new Array(arguments.length -  0);
while (G__23165__i < G__23165__a.length) {G__23165__a[G__23165__i] = arguments[G__23165__i + 0]; ++G__23165__i;}
  args = new cljs.core.IndexedSeq(G__23165__a,0,null);
} 
return G__23164__delegate.call(this,args);};
G__23164.cljs$lang$maxFixedArity = 0;
G__23164.cljs$lang$applyTo = (function (arglist__23166){
var args = cljs.core.seq(arglist__23166);
return G__23164__delegate(args);
});
G__23164.cljs$core$IFn$_invoke$arity$variadic = G__23164__delegate;
return G__23164;
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
