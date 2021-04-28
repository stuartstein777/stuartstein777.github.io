goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43147){
var map__43149 = p__43147;
var map__43149__$1 = (((((!((map__43149 == null))))?(((((map__43149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43149):map__43149);
var m = map__43149__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43149__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43149__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__43162_43501 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43163_43502 = null;
var count__43164_43503 = (0);
var i__43165_43504 = (0);
while(true){
if((i__43165_43504 < count__43164_43503)){
var f_43506 = chunk__43163_43502.cljs$core$IIndexed$_nth$arity$2(null,i__43165_43504);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43506], 0));


var G__43507 = seq__43162_43501;
var G__43508 = chunk__43163_43502;
var G__43509 = count__43164_43503;
var G__43510 = (i__43165_43504 + (1));
seq__43162_43501 = G__43507;
chunk__43163_43502 = G__43508;
count__43164_43503 = G__43509;
i__43165_43504 = G__43510;
continue;
} else {
var temp__5735__auto___43511 = cljs.core.seq(seq__43162_43501);
if(temp__5735__auto___43511){
var seq__43162_43512__$1 = temp__5735__auto___43511;
if(cljs.core.chunked_seq_QMARK_(seq__43162_43512__$1)){
var c__4556__auto___43513 = cljs.core.chunk_first(seq__43162_43512__$1);
var G__43514 = cljs.core.chunk_rest(seq__43162_43512__$1);
var G__43515 = c__4556__auto___43513;
var G__43516 = cljs.core.count(c__4556__auto___43513);
var G__43517 = (0);
seq__43162_43501 = G__43514;
chunk__43163_43502 = G__43515;
count__43164_43503 = G__43516;
i__43165_43504 = G__43517;
continue;
} else {
var f_43519 = cljs.core.first(seq__43162_43512__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43519], 0));


var G__43520 = cljs.core.next(seq__43162_43512__$1);
var G__43521 = null;
var G__43522 = (0);
var G__43523 = (0);
seq__43162_43501 = G__43520;
chunk__43163_43502 = G__43521;
count__43164_43503 = G__43522;
i__43165_43504 = G__43523;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43529 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43529], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43529)))?cljs.core.second(arglists_43529):arglists_43529)], 0));
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
var seq__43182_43534 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43183_43535 = null;
var count__43184_43536 = (0);
var i__43185_43537 = (0);
while(true){
if((i__43185_43537 < count__43184_43536)){
var vec__43217_43539 = chunk__43183_43535.cljs$core$IIndexed$_nth$arity$2(null,i__43185_43537);
var name_43540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43217_43539,(0),null);
var map__43220_43541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43217_43539,(1),null);
var map__43220_43542__$1 = (((((!((map__43220_43541 == null))))?(((((map__43220_43541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43220_43541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43220_43541):map__43220_43541);
var doc_43543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43220_43542__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43220_43542__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43540], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43544], 0));

if(cljs.core.truth_(doc_43543)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43543], 0));
} else {
}


var G__43548 = seq__43182_43534;
var G__43549 = chunk__43183_43535;
var G__43550 = count__43184_43536;
var G__43551 = (i__43185_43537 + (1));
seq__43182_43534 = G__43548;
chunk__43183_43535 = G__43549;
count__43184_43536 = G__43550;
i__43185_43537 = G__43551;
continue;
} else {
var temp__5735__auto___43554 = cljs.core.seq(seq__43182_43534);
if(temp__5735__auto___43554){
var seq__43182_43558__$1 = temp__5735__auto___43554;
if(cljs.core.chunked_seq_QMARK_(seq__43182_43558__$1)){
var c__4556__auto___43559 = cljs.core.chunk_first(seq__43182_43558__$1);
var G__43560 = cljs.core.chunk_rest(seq__43182_43558__$1);
var G__43561 = c__4556__auto___43559;
var G__43562 = cljs.core.count(c__4556__auto___43559);
var G__43563 = (0);
seq__43182_43534 = G__43560;
chunk__43183_43535 = G__43561;
count__43184_43536 = G__43562;
i__43185_43537 = G__43563;
continue;
} else {
var vec__43228_43565 = cljs.core.first(seq__43182_43558__$1);
var name_43566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43228_43565,(0),null);
var map__43231_43567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43228_43565,(1),null);
var map__43231_43568__$1 = (((((!((map__43231_43567 == null))))?(((((map__43231_43567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43231_43567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43231_43567):map__43231_43567);
var doc_43569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231_43568__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43570 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231_43568__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43566], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43570], 0));

if(cljs.core.truth_(doc_43569)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43569], 0));
} else {
}


var G__43573 = cljs.core.next(seq__43182_43558__$1);
var G__43574 = null;
var G__43575 = (0);
var G__43576 = (0);
seq__43182_43534 = G__43573;
chunk__43183_43535 = G__43574;
count__43184_43536 = G__43575;
i__43185_43537 = G__43576;
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

var seq__43242 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43243 = null;
var count__43244 = (0);
var i__43245 = (0);
while(true){
if((i__43245 < count__43244)){
var role = chunk__43243.cljs$core$IIndexed$_nth$arity$2(null,i__43245);
var temp__5735__auto___43580__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43580__$1)){
var spec_43581 = temp__5735__auto___43580__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43581)], 0));
} else {
}


var G__43583 = seq__43242;
var G__43584 = chunk__43243;
var G__43585 = count__43244;
var G__43586 = (i__43245 + (1));
seq__43242 = G__43583;
chunk__43243 = G__43584;
count__43244 = G__43585;
i__43245 = G__43586;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__43242);
if(temp__5735__auto____$1){
var seq__43242__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__43242__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43242__$1);
var G__43588 = cljs.core.chunk_rest(seq__43242__$1);
var G__43589 = c__4556__auto__;
var G__43590 = cljs.core.count(c__4556__auto__);
var G__43591 = (0);
seq__43242 = G__43588;
chunk__43243 = G__43589;
count__43244 = G__43590;
i__43245 = G__43591;
continue;
} else {
var role = cljs.core.first(seq__43242__$1);
var temp__5735__auto___43593__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43593__$2)){
var spec_43594 = temp__5735__auto___43593__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43594)], 0));
} else {
}


var G__43595 = cljs.core.next(seq__43242__$1);
var G__43596 = null;
var G__43597 = (0);
var G__43598 = (0);
seq__43242 = G__43595;
chunk__43243 = G__43596;
count__43244 = G__43597;
i__43245 = G__43598;
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
var G__43615 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43616 = cljs.core.ex_cause(t);
via = G__43615;
t = G__43616;
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
var map__43311 = datafied_throwable;
var map__43311__$1 = (((((!((map__43311 == null))))?(((((map__43311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43311):map__43311);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43311__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43311__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43311__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__43312 = cljs.core.last(via);
var map__43312__$1 = (((((!((map__43312 == null))))?(((((map__43312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43312):map__43312);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43312__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__43314 = data;
var map__43314__$1 = (((((!((map__43314 == null))))?(((((map__43314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43314):map__43314);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43314__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__43315 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__43315__$1 = (((((!((map__43315 == null))))?(((((map__43315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43315):map__43315);
var top_data = map__43315__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43315__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__43330 = phase;
var G__43330__$1 = (((G__43330 instanceof cljs.core.Keyword))?G__43330.fqn:null);
switch (G__43330__$1) {
case "read-source":
var map__43333 = data;
var map__43333__$1 = (((((!((map__43333 == null))))?(((((map__43333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43333):map__43333);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43333__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__43336 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__43336__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43336,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43336);
var G__43336__$2 = (cljs.core.truth_((function (){var fexpr__43339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43339.cljs$core$IFn$_invoke$arity$1 ? fexpr__43339.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43339.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43336__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43336__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43336__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43336__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__43341 = top_data;
var G__43341__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43341,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__43341);
var G__43341__$2 = (cljs.core.truth_((function (){var fexpr__43342 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43342.cljs$core$IFn$_invoke$arity$1 ? fexpr__43342.cljs$core$IFn$_invoke$arity$1(source) : fexpr__43342.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__43341__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__43341__$1);
var G__43341__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43341__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43341__$2);
var G__43341__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43341__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43341__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43341__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43341__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__43345 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(3),null);
var G__43351 = top_data;
var G__43351__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43351,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__43351);
var G__43351__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43351__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__43351__$1);
var G__43351__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43351__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__43351__$2);
var G__43351__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43351__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__43351__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43351__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__43351__$4;
}

break;
case "execution":
var vec__43370 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__43302_SHARP_){
var or__4126__auto__ = (p1__43302_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__43374 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__43374.cljs$core$IFn$_invoke$arity$1 ? fexpr__43374.cljs$core$IFn$_invoke$arity$1(p1__43302_SHARP_) : fexpr__43374.call(null,p1__43302_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__43376 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__43376__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43376,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__43376);
var G__43376__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43376__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__43376__$1);
var G__43376__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43376__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__43376__$2);
var G__43376__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43376__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__43376__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__43376__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__43376__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43330__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__43387){
var map__43388 = p__43387;
var map__43388__$1 = (((((!((map__43388 == null))))?(((((map__43388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43388):map__43388);
var triage_data = map__43388__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43388__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__43414 = phase;
var G__43414__$1 = (((G__43414 instanceof cljs.core.Keyword))?G__43414.fqn:null);
switch (G__43414__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__43416 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__43417 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43418 = loc;
var G__43419 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43421_43687 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43422_43688 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43423_43689 = true;
var _STAR_print_fn_STAR__temp_val__43424_43690 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43423_43689);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43424_43690);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43381_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43381_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43422_43688);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43421_43687);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43416,G__43417,G__43418,G__43419) : format.call(null,G__43416,G__43417,G__43418,G__43419));

break;
case "macroexpansion":
var G__43428 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43429 = cause_type;
var G__43430 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43431 = loc;
var G__43432 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43428,G__43429,G__43430,G__43431,G__43432) : format.call(null,G__43428,G__43429,G__43430,G__43431,G__43432));

break;
case "compile-syntax-check":
var G__43434 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43435 = cause_type;
var G__43436 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43437 = loc;
var G__43438 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43434,G__43435,G__43436,G__43437,G__43438) : format.call(null,G__43434,G__43435,G__43436,G__43437,G__43438));

break;
case "compilation":
var G__43439 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43440 = cause_type;
var G__43441 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43442 = loc;
var G__43443 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43439,G__43440,G__43441,G__43442,G__43443) : format.call(null,G__43439,G__43440,G__43441,G__43442,G__43443));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43449 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43450 = symbol;
var G__43451 = loc;
var G__43452 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43461_43702 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43462_43703 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43463_43704 = true;
var _STAR_print_fn_STAR__temp_val__43464_43705 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43463_43704);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43464_43705);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43385_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43385_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43462_43703);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43461_43702);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43449,G__43450,G__43451,G__43452) : format.call(null,G__43449,G__43450,G__43451,G__43452));
} else {
var G__43489 = "Execution error%s at %s(%s).\n%s\n";
var G__43490 = cause_type;
var G__43491 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43492 = loc;
var G__43493 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43489,G__43490,G__43491,G__43492,G__43493) : format.call(null,G__43489,G__43490,G__43491,G__43492,G__43493));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43414__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
