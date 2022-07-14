goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46364){
var map__46365 = p__46364;
var map__46365__$1 = (((((!((map__46365 == null))))?(((((map__46365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46365):map__46365);
var m = map__46365__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46365__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46367_46468 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46368_46469 = null;
var count__46369_46470 = (0);
var i__46370_46471 = (0);
while(true){
if((i__46370_46471 < count__46369_46470)){
var f_46472 = chunk__46368_46469.cljs$core$IIndexed$_nth$arity$2(null,i__46370_46471);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46472], 0));


var G__46473 = seq__46367_46468;
var G__46474 = chunk__46368_46469;
var G__46475 = count__46369_46470;
var G__46476 = (i__46370_46471 + (1));
seq__46367_46468 = G__46473;
chunk__46368_46469 = G__46474;
count__46369_46470 = G__46475;
i__46370_46471 = G__46476;
continue;
} else {
var temp__5735__auto___46477 = cljs.core.seq(seq__46367_46468);
if(temp__5735__auto___46477){
var seq__46367_46478__$1 = temp__5735__auto___46477;
if(cljs.core.chunked_seq_QMARK_(seq__46367_46478__$1)){
var c__4556__auto___46479 = cljs.core.chunk_first(seq__46367_46478__$1);
var G__46480 = cljs.core.chunk_rest(seq__46367_46478__$1);
var G__46481 = c__4556__auto___46479;
var G__46482 = cljs.core.count(c__4556__auto___46479);
var G__46483 = (0);
seq__46367_46468 = G__46480;
chunk__46368_46469 = G__46481;
count__46369_46470 = G__46482;
i__46370_46471 = G__46483;
continue;
} else {
var f_46484 = cljs.core.first(seq__46367_46478__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_46484], 0));


var G__46485 = cljs.core.next(seq__46367_46478__$1);
var G__46486 = null;
var G__46487 = (0);
var G__46488 = (0);
seq__46367_46468 = G__46485;
chunk__46368_46469 = G__46486;
count__46369_46470 = G__46487;
i__46370_46471 = G__46488;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46489 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_46489], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_46489)))?cljs.core.second(arglists_46489):arglists_46489)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46371_46490 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46372_46491 = null;
var count__46373_46492 = (0);
var i__46374_46493 = (0);
while(true){
if((i__46374_46493 < count__46373_46492)){
var vec__46385_46494 = chunk__46372_46491.cljs$core$IIndexed$_nth$arity$2(null,i__46374_46493);
var name_46495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46385_46494,(0),null);
var map__46388_46496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46385_46494,(1),null);
var map__46388_46497__$1 = (((((!((map__46388_46496 == null))))?(((((map__46388_46496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46388_46496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46388_46496):map__46388_46496);
var doc_46498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388_46497__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46388_46497__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46495], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46499], 0));

if(cljs.core.truth_(doc_46498)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46498], 0));
} else {
}


var G__46500 = seq__46371_46490;
var G__46501 = chunk__46372_46491;
var G__46502 = count__46373_46492;
var G__46503 = (i__46374_46493 + (1));
seq__46371_46490 = G__46500;
chunk__46372_46491 = G__46501;
count__46373_46492 = G__46502;
i__46374_46493 = G__46503;
continue;
} else {
var temp__5735__auto___46504 = cljs.core.seq(seq__46371_46490);
if(temp__5735__auto___46504){
var seq__46371_46505__$1 = temp__5735__auto___46504;
if(cljs.core.chunked_seq_QMARK_(seq__46371_46505__$1)){
var c__4556__auto___46506 = cljs.core.chunk_first(seq__46371_46505__$1);
var G__46507 = cljs.core.chunk_rest(seq__46371_46505__$1);
var G__46508 = c__4556__auto___46506;
var G__46509 = cljs.core.count(c__4556__auto___46506);
var G__46510 = (0);
seq__46371_46490 = G__46507;
chunk__46372_46491 = G__46508;
count__46373_46492 = G__46509;
i__46374_46493 = G__46510;
continue;
} else {
var vec__46390_46511 = cljs.core.first(seq__46371_46505__$1);
var name_46512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46390_46511,(0),null);
var map__46393_46513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46390_46511,(1),null);
var map__46393_46514__$1 = (((((!((map__46393_46513 == null))))?(((((map__46393_46513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46393_46513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46393_46513):map__46393_46513);
var doc_46515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46393_46514__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46393_46514__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_46512], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_46516], 0));

if(cljs.core.truth_(doc_46515)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_46515], 0));
} else {
}


var G__46517 = cljs.core.next(seq__46371_46505__$1);
var G__46518 = null;
var G__46519 = (0);
var G__46520 = (0);
seq__46371_46490 = G__46517;
chunk__46372_46491 = G__46518;
count__46373_46492 = G__46519;
i__46374_46493 = G__46520;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__46395 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46396 = null;
var count__46397 = (0);
var i__46398 = (0);
while(true){
if((i__46398 < count__46397)){
var role = chunk__46396.cljs$core$IIndexed$_nth$arity$2(null,i__46398);
var temp__5735__auto___46521__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46521__$1)){
var spec_46522 = temp__5735__auto___46521__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46522)], 0));
} else {
}


var G__46523 = seq__46395;
var G__46524 = chunk__46396;
var G__46525 = count__46397;
var G__46526 = (i__46398 + (1));
seq__46395 = G__46523;
chunk__46396 = G__46524;
count__46397 = G__46525;
i__46398 = G__46526;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__46395);
if(temp__5735__auto____$1){
var seq__46395__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__46395__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46395__$1);
var G__46527 = cljs.core.chunk_rest(seq__46395__$1);
var G__46528 = c__4556__auto__;
var G__46529 = cljs.core.count(c__4556__auto__);
var G__46530 = (0);
seq__46395 = G__46527;
chunk__46396 = G__46528;
count__46397 = G__46529;
i__46398 = G__46530;
continue;
} else {
var role = cljs.core.first(seq__46395__$1);
var temp__5735__auto___46531__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___46531__$2)){
var spec_46532 = temp__5735__auto___46531__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_46532)], 0));
} else {
}


var G__46533 = cljs.core.next(seq__46395__$1);
var G__46534 = null;
var G__46535 = (0);
var G__46536 = (0);
seq__46395 = G__46533;
chunk__46396 = G__46534;
count__46397 = G__46535;
i__46398 = G__46536;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__46537 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__46538 = cljs.core.ex_cause(t);
via = G__46537;
t = G__46538;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__46401 = datafied_throwable;
var map__46401__$1 = (((((!((map__46401 == null))))?(((((map__46401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46401):map__46401);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46401__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46401__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__46402 = cljs.core.last(via);
var map__46402__$1 = (((((!((map__46402 == null))))?(((((map__46402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46402):map__46402);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46402__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46402__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46402__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__46403 = data;
var map__46403__$1 = (((((!((map__46403 == null))))?(((((map__46403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46403):map__46403);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46403__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46403__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46403__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__46404 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__46404__$1 = (((((!((map__46404 == null))))?(((((map__46404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46404):map__46404);
var top_data = map__46404__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46404__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__46409 = phase;
var G__46409__$1 = (((G__46409 instanceof cljs.core.Keyword))?G__46409.fqn:null);
switch (G__46409__$1) {
case "read-source":
var map__46410 = data;
var map__46410__$1 = (((((!((map__46410 == null))))?(((((map__46410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46410):map__46410);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46410__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46410__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__46412 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__46412__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46412,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46412);
var G__46412__$2 = (cljs.core.truth_((function (){var fexpr__46413 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46413.cljs$core$IFn$_invoke$arity$1 ? fexpr__46413.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46413.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46412__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46412__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46412__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46412__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__46414 = top_data;
var G__46414__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46414,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__46414);
var G__46414__$2 = (cljs.core.truth_((function (){var fexpr__46415 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46415.cljs$core$IFn$_invoke$arity$1 ? fexpr__46415.cljs$core$IFn$_invoke$arity$1(source) : fexpr__46415.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__46414__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__46414__$1);
var G__46414__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46414__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46414__$2);
var G__46414__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46414__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46414__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46414__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46414__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__46416 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46416,(3),null);
var G__46419 = top_data;
var G__46419__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46419,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__46419);
var G__46419__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46419__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__46419__$1);
var G__46419__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46419__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__46419__$2);
var G__46419__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46419__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__46419__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46419__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__46419__$4;
}

break;
case "execution":
var vec__46420 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46420,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__46400_SHARP_){
var or__4126__auto__ = (p1__46400_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__46424 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__46424.cljs$core$IFn$_invoke$arity$1 ? fexpr__46424.cljs$core$IFn$_invoke$arity$1(p1__46400_SHARP_) : fexpr__46424.call(null,p1__46400_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__46425 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__46425__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__46425);
var G__46425__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__46425__$1);
var G__46425__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__46425__$2);
var G__46425__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__46425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__46425__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46409__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__46428){
var map__46429 = p__46428;
var map__46429__$1 = (((((!((map__46429 == null))))?(((((map__46429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46429):map__46429);
var triage_data = map__46429__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__46431 = phase;
var G__46431__$1 = (((G__46431 instanceof cljs.core.Keyword))?G__46431.fqn:null);
switch (G__46431__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__46432 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__46433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46434 = loc;
var G__46435 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46436_46541 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46437_46542 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46438_46543 = true;
var _STAR_print_fn_STAR__temp_val__46439_46544 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46438_46543);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46439_46544);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46426_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46426_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46437_46542);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46436_46541);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46432,G__46433,G__46434,G__46435) : format.call(null,G__46432,G__46433,G__46434,G__46435));

break;
case "macroexpansion":
var G__46440 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__46441 = cause_type;
var G__46442 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46443 = loc;
var G__46444 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46440,G__46441,G__46442,G__46443,G__46444) : format.call(null,G__46440,G__46441,G__46442,G__46443,G__46444));

break;
case "compile-syntax-check":
var G__46445 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__46446 = cause_type;
var G__46447 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46448 = loc;
var G__46449 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46445,G__46446,G__46447,G__46448,G__46449) : format.call(null,G__46445,G__46446,G__46447,G__46448,G__46449));

break;
case "compilation":
var G__46450 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__46451 = cause_type;
var G__46452 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46453 = loc;
var G__46454 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46450,G__46451,G__46452,G__46453,G__46454) : format.call(null,G__46450,G__46451,G__46452,G__46453,G__46454));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__46455 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__46456 = symbol;
var G__46457 = loc;
var G__46458 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__46459_46545 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__46460_46546 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__46461_46547 = true;
var _STAR_print_fn_STAR__temp_val__46462_46548 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__46461_46547);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__46462_46548);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46427_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46427_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__46460_46546);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__46459_46545);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__46455,G__46456,G__46457,G__46458) : format.call(null,G__46455,G__46456,G__46457,G__46458));
} else {
var G__46463 = "Execution error%s at %s(%s).\n%s\n";
var G__46464 = cause_type;
var G__46465 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__46466 = loc;
var G__46467 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__46463,G__46464,G__46465,G__46466,G__46467) : format.call(null,G__46463,G__46464,G__46465,G__46466,G__46467));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46431__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
