goog.provide('exfn.logic');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.reader');
exfn.logic.guess_distribution_histogram = (function exfn$logic$guess_distribution_histogram(guesses){
var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(guesses));
return new cljs.core.PersistentArrayMap(null, 6, [(1),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((1)) : guesses.call(null,(1))) / max)) | (0)),(2),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((2)) : guesses.call(null,(2))) / max)) | (0)),(3),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((3)) : guesses.call(null,(3))) / max)) | (0)),(4),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((4)) : guesses.call(null,(4))) / max)) | (0)),(5),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((5)) : guesses.call(null,(5))) / max)) | (0)),(6),(((250) * ((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((6)) : guesses.call(null,(6))) / max)) | (0))], null);
});

//# sourceMappingURL=exfn.logic.js.map
