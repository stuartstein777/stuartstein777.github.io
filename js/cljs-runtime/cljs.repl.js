goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43095){
var map__43096 = p__43095;
var map__43096__$1 = (((((!((map__43096 == null))))?(((((map__43096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43096):map__43096);
var m = map__43096__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43096__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43112_43455 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43114_43456 = null;
var count__43115_43457 = (0);
var i__43116_43458 = (0);
while(true){
if((i__43116_43458 < count__43115_43457)){
var f_43460 = chunk__43114_43456.cljs$core$IIndexed$_nth$arity$2(null,i__43116_43458);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43460], 0));


var G__43461 = seq__43112_43455;
var G__43462 = chunk__43114_43456;
var G__43463 = count__43115_43457;
var G__43464 = (i__43116_43458 + (1));
seq__43112_43455 = G__43461;
chunk__43114_43456 = G__43462;
count__43115_43457 = G__43463;
i__43116_43458 = G__43464;
continue;
} else {
var temp__5735__auto___43470 = cljs.core.seq(seq__43112_43455);
if(temp__5735__auto___43470){
var seq__43112_43471__$1 = temp__5735__auto___43470;
if(cljs.core.chunked_seq_QMARK_(seq__43112_43471__$1)){
var c__4556__auto___43473 = cljs.core.chunk_first(seq__43112_43471__$1);
var G__43474 = cljs.core.chunk_rest(seq__43112_43471__$1);
var G__43475 = c__4556__auto___43473;
var G__43476 = cljs.core.count(c__4556__auto___43473);
var G__43477 = (0);
seq__43112_43455 = G__43474;
chunk__43114_43456 = G__43475;
count__43115_43457 = G__43476;
i__43116_43458 = G__43477;
continue;
} else {
var f_43483 = cljs.core.first(seq__43112_43471__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43483], 0));


var G__43490 = cljs.core.next(seq__43112_43471__$1);
var G__43491 = null;
var G__43492 = (0);
var G__43493 = (0);
seq__43112_43455 = G__43490;
chunk__43114_43456 = G__43491;
count__43115_43457 = G__43492;
i__43116_43458 = G__43493;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43496 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43496], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43496)))?cljs.core.second(arglists_43496):arglists_43496)], 0));
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
var seq__43153_43524 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43154_43525 = null;
var count__43155_43526 = (0);
var i__43156_43527 = (0);
while(true){
if((i__43156_43527 < count__43155_43526)){
var vec__43181_43528 = chunk__43154_43525.cljs$core$IIndexed$_nth$arity$2(null,i__43156_43527);
var name_43529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43181_43528,(0),null);
var map__43184_43530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43181_43528,(1),null);
var map__43184_43531__$1 = (((((!((map__43184_43530 == null))))?(((((map__43184_43530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43184_43530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43184_43530):map__43184_43530);
var doc_43532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43184_43531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43184_43531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43529], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43533], 0));

if(cljs.core.truth_(doc_43532)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43532], 0));
} else {
}


var G__43539 = seq__43153_43524;
var G__43540 = chunk__43154_43525;
var G__43541 = count__43155_43526;
var G__43542 = (i__43156_43527 + (1));
seq__43153_43524 = G__43539;
chunk__43154_43525 = G__43540;
count__43155_43526 = G__43541;
i__43156_43527 = G__43542;
continue;
} else {
var temp__5735__auto___43544 = cljs.core.seq(seq__43153_43524);
if(temp__5735__auto___43544){
var seq__43153_43545__$1 = temp__5735__auto___43544;
if(cljs.core.chunked_seq_QMARK_(seq__43153_43545__$1)){
var c__4556__auto___43546 = cljs.core.chunk_first(seq__43153_43545__$1);
var G__43548 = cljs.core.chunk_rest(seq__43153_43545__$1);
var G__43549 = c__4556__auto___43546;
var G__43550 = cljs.core.count(c__4556__auto___43546);
var G__43551 = (0);
seq__43153_43524 = G__43548;
chunk__43154_43525 = G__43549;
count__43155_43526 = G__43550;
i__43156_43527 = G__43551;
continue;
} else {
var vec__43190_43552 = cljs.core.first(seq__43153_43545__$1);
var name_43553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190_43552,(0),null);
var map__43193_43554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43190_43552,(1),null);
var map__43193_43555__$1 = (((((!((map__43193_43554 == null))))?(((((map__43193_43554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43193_43554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43193_43554):map__43193_43554);
var doc_43556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43193_43555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43193_43555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43553], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43557], 0));

if(cljs.core.truth_(doc_43556)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43556], 0));
} else {
}


var G__43561 = cljs.core.next(seq__43153_43545__$1);
var G__43562 = null;
var G__43563 = (0);
var G__43564 = (0);
seq__43153_43524 = G__43561;
chunk__43154_43525 = G__43562;
count__43155_43526 = G__43563;
i__43156_43527 = G__43564;
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

var seq__43204 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43205 = null;
var count__43206 = (0);
var i__43207 = (0);
while(true){
if((i__43207 < count__43206)){
var role = chunk__43205.cljs$core$IIndexed$_nth$arity$2(null,i__43207);
var temp__5735__auto___43566__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43566__$1)){
var spec_43567 = temp__5735__auto___43566__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43567)], 0));
} else {
}


var G__43568 = seq__43204;
var G__43569 = chunk__43205;
var G__43570 = count__43206;
var G__43571 = (i__43207 + (1));
seq__43204 = G__43568;
chunk__43205 = G__43569;
count__43206 = G__43570;
i__43207 = G__43571;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__43204);
if(temp__5735__auto____$1){
var seq__43204__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43204__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43204__$1);
var G__43574 = cljs.core.chunk_rest(seq__43204__$1);
var G__43575 = c__4556__auto__;
var G__43576 = cljs.core.count(c__4556__auto__);
var G__43577 = (0);
seq__43204 = G__43574;
chunk__43205 = G__43575;
count__43206 = G__43576;
i__43207 = G__43577;
continue;
} else {
var role = cljs.core.first(seq__43204__$1);
var temp__5735__auto___43578__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43578__$2)){
var spec_43579 = temp__5735__auto___43578__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43579)], 0));
} else {
}


var G__43580 = cljs.core.next(seq__43204__$1);
var G__43581 = null;
var G__43582 = (0);
var G__43583 = (0);
seq__43204 = G__43580;
chunk__43205 = G__43581;
count__43206 = G__43582;
i__43207 = G__43583;
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
var G__43587 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43588 = cljs.core.ex_cause(t);
via = G__43587;
t = G__43588;
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
var map__43249 = datafied_throwable;
var map__43249__$1 = (((((!((map__43249 == null))))?(((((map__43249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43249):map__43249);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43249__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43249__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43249__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43251 = cljs.core.last(via);
var map__43251__$1 = (((((!((map__43251 == null))))?(((((map__43251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43251):map__43251);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43251__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43251__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43251__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43252 = data;
var map__43252__$1 = (((((!((map__43252 == null))))?(((((map__43252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43252):map__43252);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43252__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43252__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43252__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43253 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43253__$1 = (((((!((map__43253 == null))))?(((((map__43253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43253):map__43253);
var top_data = map__43253__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43280 = phase;
var G__43280__$1 = (((G__43280 instanceof cljs.core.Keyword))?G__43280.fqn:null);
switch (G__43280__$1) {
case "read-source":
var map__43282 = data;
var map__43282__$1 = (((((!((map__43282 == null))))?(((((map__43282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43282):map__43282);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43282__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43290 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43290__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43290,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43290);
var G__43290__$2 = (cljs.core.truth_((function (){var fexpr__43293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43293.cljs$core$IFn$_invoke$arity$1 ? fexpr__43293.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43293.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43290__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43290__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43290__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43290__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43296 = top_data;
var G__43296__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43296,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43296);
var G__43296__$2 = (cljs.core.truth_((function (){var fexpr__43298 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43298.cljs$core$IFn$_invoke$arity$1 ? fexpr__43298.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43298.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43296__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43296__$1);
var G__43296__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43296__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43296__$2);
var G__43296__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43296__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43296__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43296__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43296__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43300 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43300,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43300,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43300,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43300,(3),null);
var G__43305 = top_data;
var G__43305__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43305);
var G__43305__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43305__$1);
var G__43305__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43305__$2);
var G__43305__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43305__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43305__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43305__$4;
}

break;
case "execution":
var vec__43330 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43330,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43330,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43330,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43330,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43243_SHARP_){
var or__4126__auto__ = (p1__43243_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__43335 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43335.cljs$core$IFn$_invoke$arity$1 ? fexpr__43335.cljs$core$IFn$_invoke$arity$1(p1__43243_SHARP_) : fexpr__43335.call(null,p1__43243_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__43338 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43338__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43338,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43338);
var G__43338__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43338__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43338__$1);
var G__43338__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43338__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43338__$2);
var G__43338__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43338__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43338__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43338__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43338__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43280__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43350){
var map__43352 = p__43350;
var map__43352__$1 = (((((!((map__43352 == null))))?(((((map__43352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43352):map__43352);
var triage_data = map__43352__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43352__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__43358 = phase;
var G__43358__$1 = (((G__43358 instanceof cljs.core.Keyword))?G__43358.fqn:null);
switch (G__43358__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43360 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43361 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43362 = loc;
var G__43363 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43368_43642 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43369_43643 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43370_43644 = true;
var _STAR_print_fn_STAR__temp_val__43371_43645 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43370_43644);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43371_43645);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43345_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43345_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43369_43643);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43368_43642);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43360,G__43361,G__43362,G__43363) : format.call(null,G__43360,G__43361,G__43362,G__43363));

break;
case "macroexpansion":
var G__43387 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43388 = cause_type;
var G__43389 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43390 = loc;
var G__43391 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43387,G__43388,G__43389,G__43390,G__43391) : format.call(null,G__43387,G__43388,G__43389,G__43390,G__43391));

break;
case "compile-syntax-check":
var G__43396 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43397 = cause_type;
var G__43398 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43399 = loc;
var G__43400 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43396,G__43397,G__43398,G__43399,G__43400) : format.call(null,G__43396,G__43397,G__43398,G__43399,G__43400));

break;
case "compilation":
var G__43401 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43402 = cause_type;
var G__43403 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43404 = loc;
var G__43405 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43401,G__43402,G__43403,G__43404,G__43405) : format.call(null,G__43401,G__43402,G__43403,G__43404,G__43405));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43409 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43410 = symbol;
var G__43411 = loc;
var G__43412 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43413_43678 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43414_43679 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43415_43680 = true;
var _STAR_print_fn_STAR__temp_val__43416_43681 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43415_43680);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43416_43681);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43348_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43348_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43414_43679);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43413_43678);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43409,G__43410,G__43411,G__43412) : format.call(null,G__43409,G__43410,G__43411,G__43412));
} else {
var G__43419 = "Execution error%s at %s(%s).\n%s\n";
var G__43420 = cause_type;
var G__43421 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43422 = loc;
var G__43423 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43419,G__43420,G__43421,G__43422,G__43423) : format.call(null,G__43419,G__43420,G__43421,G__43422,G__43423));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43358__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
