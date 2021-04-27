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
var G__38145__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38146__i = 0, G__38146__a = new Array(arguments.length -  0);
while (G__38146__i < G__38146__a.length) {G__38146__a[G__38146__i] = arguments[G__38146__i + 0]; ++G__38146__i;}
  args = new cljs.core.IndexedSeq(G__38146__a,0,null);
} 
return G__38145__delegate.call(this,args);};
G__38145.cljs$lang$maxFixedArity = 0;
G__38145.cljs$lang$applyTo = (function (arglist__38147){
var args = cljs.core.seq(arglist__38147);
return G__38145__delegate(args);
});
G__38145.cljs$core$IFn$_invoke$arity$variadic = G__38145__delegate;
return G__38145;
})()
);

(o.error = (function() { 
var G__38148__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38148 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38149__i = 0, G__38149__a = new Array(arguments.length -  0);
while (G__38149__i < G__38149__a.length) {G__38149__a[G__38149__i] = arguments[G__38149__i + 0]; ++G__38149__i;}
  args = new cljs.core.IndexedSeq(G__38149__a,0,null);
} 
return G__38148__delegate.call(this,args);};
G__38148.cljs$lang$maxFixedArity = 0;
G__38148.cljs$lang$applyTo = (function (arglist__38150){
var args = cljs.core.seq(arglist__38150);
return G__38148__delegate(args);
});
G__38148.cljs$core$IFn$_invoke$arity$variadic = G__38148__delegate;
return G__38148;
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
