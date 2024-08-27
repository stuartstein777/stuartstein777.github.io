goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42261){
var map__42262 = p__42261;
var map__42262__$1 = cljs.core.__destructure_map(map__42262);
var m = map__42262__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42262__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__42263_42405 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42264_42406 = null;
var count__42265_42407 = (0);
var i__42266_42408 = (0);
while(true){
if((i__42266_42408 < count__42265_42407)){
var f_42410 = chunk__42264_42406.cljs$core$IIndexed$_nth$arity$2(null,i__42266_42408);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42410], 0));


var G__42411 = seq__42263_42405;
var G__42412 = chunk__42264_42406;
var G__42413 = count__42265_42407;
var G__42414 = (i__42266_42408 + (1));
seq__42263_42405 = G__42411;
chunk__42264_42406 = G__42412;
count__42265_42407 = G__42413;
i__42266_42408 = G__42414;
continue;
} else {
var temp__5753__auto___42416 = cljs.core.seq(seq__42263_42405);
if(temp__5753__auto___42416){
var seq__42263_42418__$1 = temp__5753__auto___42416;
if(cljs.core.chunked_seq_QMARK_(seq__42263_42418__$1)){
var c__4649__auto___42420 = cljs.core.chunk_first(seq__42263_42418__$1);
var G__42421 = cljs.core.chunk_rest(seq__42263_42418__$1);
var G__42422 = c__4649__auto___42420;
var G__42423 = cljs.core.count(c__4649__auto___42420);
var G__42424 = (0);
seq__42263_42405 = G__42421;
chunk__42264_42406 = G__42422;
count__42265_42407 = G__42423;
i__42266_42408 = G__42424;
continue;
} else {
var f_42426 = cljs.core.first(seq__42263_42418__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42426], 0));


var G__42428 = cljs.core.next(seq__42263_42418__$1);
var G__42429 = null;
var G__42430 = (0);
var G__42431 = (0);
seq__42263_42405 = G__42428;
chunk__42264_42406 = G__42429;
count__42265_42407 = G__42430;
i__42266_42408 = G__42431;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42435 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42435], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42435)))?cljs.core.second(arglists_42435):arglists_42435)], 0));
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
var seq__42273_42448 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42274_42449 = null;
var count__42275_42450 = (0);
var i__42276_42451 = (0);
while(true){
if((i__42276_42451 < count__42275_42450)){
var vec__42287_42452 = chunk__42274_42449.cljs$core$IIndexed$_nth$arity$2(null,i__42276_42451);
var name_42453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287_42452,(0),null);
var map__42290_42454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42287_42452,(1),null);
var map__42290_42455__$1 = cljs.core.__destructure_map(map__42290_42454);
var doc_42456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290_42455__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42290_42455__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42453], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42457], 0));

if(cljs.core.truth_(doc_42456)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42456], 0));
} else {
}


var G__42460 = seq__42273_42448;
var G__42461 = chunk__42274_42449;
var G__42462 = count__42275_42450;
var G__42463 = (i__42276_42451 + (1));
seq__42273_42448 = G__42460;
chunk__42274_42449 = G__42461;
count__42275_42450 = G__42462;
i__42276_42451 = G__42463;
continue;
} else {
var temp__5753__auto___42464 = cljs.core.seq(seq__42273_42448);
if(temp__5753__auto___42464){
var seq__42273_42465__$1 = temp__5753__auto___42464;
if(cljs.core.chunked_seq_QMARK_(seq__42273_42465__$1)){
var c__4649__auto___42466 = cljs.core.chunk_first(seq__42273_42465__$1);
var G__42467 = cljs.core.chunk_rest(seq__42273_42465__$1);
var G__42468 = c__4649__auto___42466;
var G__42469 = cljs.core.count(c__4649__auto___42466);
var G__42470 = (0);
seq__42273_42448 = G__42467;
chunk__42274_42449 = G__42468;
count__42275_42450 = G__42469;
i__42276_42451 = G__42470;
continue;
} else {
var vec__42291_42471 = cljs.core.first(seq__42273_42465__$1);
var name_42472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291_42471,(0),null);
var map__42294_42473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42291_42471,(1),null);
var map__42294_42474__$1 = cljs.core.__destructure_map(map__42294_42473);
var doc_42475 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42294_42474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42294_42474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42472], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42476], 0));

if(cljs.core.truth_(doc_42475)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42475], 0));
} else {
}


var G__42477 = cljs.core.next(seq__42273_42465__$1);
var G__42478 = null;
var G__42479 = (0);
var G__42480 = (0);
seq__42273_42448 = G__42477;
chunk__42274_42449 = G__42478;
count__42275_42450 = G__42479;
i__42276_42451 = G__42480;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42295 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42296 = null;
var count__42297 = (0);
var i__42298 = (0);
while(true){
if((i__42298 < count__42297)){
var role = chunk__42296.cljs$core$IIndexed$_nth$arity$2(null,i__42298);
var temp__5753__auto___42481__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42481__$1)){
var spec_42482 = temp__5753__auto___42481__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42482)], 0));
} else {
}


var G__42483 = seq__42295;
var G__42484 = chunk__42296;
var G__42485 = count__42297;
var G__42486 = (i__42298 + (1));
seq__42295 = G__42483;
chunk__42296 = G__42484;
count__42297 = G__42485;
i__42298 = G__42486;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__42295);
if(temp__5753__auto____$1){
var seq__42295__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42295__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42295__$1);
var G__42487 = cljs.core.chunk_rest(seq__42295__$1);
var G__42488 = c__4649__auto__;
var G__42489 = cljs.core.count(c__4649__auto__);
var G__42490 = (0);
seq__42295 = G__42487;
chunk__42296 = G__42488;
count__42297 = G__42489;
i__42298 = G__42490;
continue;
} else {
var role = cljs.core.first(seq__42295__$1);
var temp__5753__auto___42491__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___42491__$2)){
var spec_42492 = temp__5753__auto___42491__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42492)], 0));
} else {
}


var G__42493 = cljs.core.next(seq__42295__$1);
var G__42494 = null;
var G__42495 = (0);
var G__42496 = (0);
seq__42295 = G__42493;
chunk__42296 = G__42494;
count__42297 = G__42495;
i__42298 = G__42496;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__42497 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42498 = cljs.core.ex_cause(t);
via = G__42497;
t = G__42498;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__42313 = datafied_throwable;
var map__42313__$1 = cljs.core.__destructure_map(map__42313);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42313__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42313__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42314 = cljs.core.last(via);
var map__42314__$1 = cljs.core.__destructure_map(map__42314);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42315 = data;
var map__42315__$1 = cljs.core.__destructure_map(map__42315);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42315__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42315__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42315__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42316 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42316__$1 = cljs.core.__destructure_map(map__42316);
var top_data = map__42316__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42316__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42317 = phase;
var G__42317__$1 = (((G__42317 instanceof cljs.core.Keyword))?G__42317.fqn:null);
switch (G__42317__$1) {
case "read-source":
var map__42319 = data;
var map__42319__$1 = cljs.core.__destructure_map(map__42319);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42319__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42321 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42321__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42321,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42321);
var G__42321__$2 = (cljs.core.truth_((function (){var fexpr__42322 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42322.cljs$core$IFn$_invoke$arity$1 ? fexpr__42322.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42322.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42321__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42321__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42321__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42321__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42325 = top_data;
var G__42325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42325);
var G__42325__$2 = (cljs.core.truth_((function (){var fexpr__42326 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42326.cljs$core$IFn$_invoke$arity$1 ? fexpr__42326.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42326.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42325__$1);
var G__42325__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42325__$2);
var G__42325__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42325__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42325__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42325__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42327 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42327,(3),null);
var G__42332 = top_data;
var G__42332__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42332,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42332);
var G__42332__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42332__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42332__$1);
var G__42332__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42332__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42332__$2);
var G__42332__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42332__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42332__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42332__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42332__$4;
}

break;
case "execution":
var vec__42335 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42335,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42311_SHARP_){
var or__4223__auto__ = (p1__42311_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__42338 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42338.cljs$core$IFn$_invoke$arity$1 ? fexpr__42338.cljs$core$IFn$_invoke$arity$1(p1__42311_SHARP_) : fexpr__42338.call(null,p1__42311_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__42341 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42341__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42341,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42341);
var G__42341__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42341__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42341__$1);
var G__42341__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42341__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42341__$2);
var G__42341__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42341__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42341__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42341__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42341__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42317__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42359){
var map__42360 = p__42359;
var map__42360__$1 = cljs.core.__destructure_map(map__42360);
var triage_data = map__42360__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42360__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42364 = phase;
var G__42364__$1 = (((G__42364 instanceof cljs.core.Keyword))?G__42364.fqn:null);
switch (G__42364__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42365 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42366 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42367 = loc;
var G__42368 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42369_42511 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42370_42512 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42371_42513 = true;
var _STAR_print_fn_STAR__temp_val__42372_42514 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42371_42513);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42372_42514);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42352_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42352_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42370_42512);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42369_42511);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42365,G__42366,G__42367,G__42368) : format.call(null,G__42365,G__42366,G__42367,G__42368));

break;
case "macroexpansion":
var G__42373 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42374 = cause_type;
var G__42375 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42376 = loc;
var G__42377 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42373,G__42374,G__42375,G__42376,G__42377) : format.call(null,G__42373,G__42374,G__42375,G__42376,G__42377));

break;
case "compile-syntax-check":
var G__42378 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42379 = cause_type;
var G__42380 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42381 = loc;
var G__42382 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42378,G__42379,G__42380,G__42381,G__42382) : format.call(null,G__42378,G__42379,G__42380,G__42381,G__42382));

break;
case "compilation":
var G__42383 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42384 = cause_type;
var G__42385 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42386 = loc;
var G__42387 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42383,G__42384,G__42385,G__42386,G__42387) : format.call(null,G__42383,G__42384,G__42385,G__42386,G__42387));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42388 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42389 = symbol;
var G__42390 = loc;
var G__42391 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42392_42518 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42393_42519 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42394_42520 = true;
var _STAR_print_fn_STAR__temp_val__42395_42521 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42394_42520);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42395_42521);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42353_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42353_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42393_42519);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42392_42518);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42388,G__42389,G__42390,G__42391) : format.call(null,G__42388,G__42389,G__42390,G__42391));
} else {
var G__42396 = "Execution error%s at %s(%s).\n%s\n";
var G__42397 = cause_type;
var G__42398 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42399 = loc;
var G__42400 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42396,G__42397,G__42398,G__42399,G__42400) : format.call(null,G__42396,G__42397,G__42398,G__42399,G__42400));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42364__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
