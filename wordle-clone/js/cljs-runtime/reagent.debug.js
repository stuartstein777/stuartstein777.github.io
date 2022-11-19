goog.provide('reagent.debug');
goog.require('cljs.core');
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
var G__37662__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37663__i = 0, G__37663__a = new Array(arguments.length -  0);
while (G__37663__i < G__37663__a.length) {G__37663__a[G__37663__i] = arguments[G__37663__i + 0]; ++G__37663__i;}
  args = new cljs.core.IndexedSeq(G__37663__a,0,null);
} 
return G__37662__delegate.call(this,args);};
G__37662.cljs$lang$maxFixedArity = 0;
G__37662.cljs$lang$applyTo = (function (arglist__37664){
var args = cljs.core.seq(arglist__37664);
return G__37662__delegate(args);
});
G__37662.cljs$core$IFn$_invoke$arity$variadic = G__37662__delegate;
return G__37662;
})()
);

(o.error = (function() { 
var G__37665__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37666__i = 0, G__37666__a = new Array(arguments.length -  0);
while (G__37666__i < G__37666__a.length) {G__37666__a[G__37666__i] = arguments[G__37666__i + 0]; ++G__37666__i;}
  args = new cljs.core.IndexedSeq(G__37666__a,0,null);
} 
return G__37665__delegate.call(this,args);};
G__37665.cljs$lang$maxFixedArity = 0;
G__37665.cljs$lang$applyTo = (function (arglist__37667){
var args = cljs.core.seq(arglist__37667);
return G__37665__delegate(args);
});
G__37665.cljs$core$IFn$_invoke$arity$variadic = G__37665__delegate;
return G__37665;
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
