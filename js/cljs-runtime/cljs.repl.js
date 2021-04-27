goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38498){
var map__38505 = p__38498;
var map__38505__$1 = (((((!((map__38505 == null))))?(((((map__38505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38505):map__38505);
var m = map__38505__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38516_38898 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38517_38899 = null;
var count__38518_38900 = (0);
var i__38519_38901 = (0);
while(true){
if((i__38519_38901 < count__38518_38900)){
var f_38902 = chunk__38517_38899.cljs$core$IIndexed$_nth$arity$2(null,i__38519_38901);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38902], 0));


var G__38903 = seq__38516_38898;
var G__38904 = chunk__38517_38899;
var G__38905 = count__38518_38900;
var G__38906 = (i__38519_38901 + (1));
seq__38516_38898 = G__38903;
chunk__38517_38899 = G__38904;
count__38518_38900 = G__38905;
i__38519_38901 = G__38906;
continue;
} else {
var temp__5735__auto___38907 = cljs.core.seq(seq__38516_38898);
if(temp__5735__auto___38907){
var seq__38516_38908__$1 = temp__5735__auto___38907;
if(cljs.core.chunked_seq_QMARK_(seq__38516_38908__$1)){
var c__4556__auto___38909 = cljs.core.chunk_first(seq__38516_38908__$1);
var G__38910 = cljs.core.chunk_rest(seq__38516_38908__$1);
var G__38911 = c__4556__auto___38909;
var G__38912 = cljs.core.count(c__4556__auto___38909);
var G__38913 = (0);
seq__38516_38898 = G__38910;
chunk__38517_38899 = G__38911;
count__38518_38900 = G__38912;
i__38519_38901 = G__38913;
continue;
} else {
var f_38914 = cljs.core.first(seq__38516_38908__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38914], 0));


var G__38915 = cljs.core.next(seq__38516_38908__$1);
var G__38916 = null;
var G__38917 = (0);
var G__38918 = (0);
seq__38516_38898 = G__38915;
chunk__38517_38899 = G__38916;
count__38518_38900 = G__38917;
i__38519_38901 = G__38918;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38919 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38919], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38919)))?cljs.core.second(arglists_38919):arglists_38919)], 0));
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
var seq__38596_38920 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38598_38921 = null;
var count__38599_38922 = (0);
var i__38600_38923 = (0);
while(true){
if((i__38600_38923 < count__38599_38922)){
var vec__38658_38924 = chunk__38598_38921.cljs$core$IIndexed$_nth$arity$2(null,i__38600_38923);
var name_38925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658_38924,(0),null);
var map__38661_38926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38658_38924,(1),null);
var map__38661_38927__$1 = (((((!((map__38661_38926 == null))))?(((((map__38661_38926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38661_38926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38661_38926):map__38661_38926);
var doc_38928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661_38927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38661_38927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38925], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38929], 0));

if(cljs.core.truth_(doc_38928)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38928], 0));
} else {
}


var G__38930 = seq__38596_38920;
var G__38931 = chunk__38598_38921;
var G__38932 = count__38599_38922;
var G__38933 = (i__38600_38923 + (1));
seq__38596_38920 = G__38930;
chunk__38598_38921 = G__38931;
count__38599_38922 = G__38932;
i__38600_38923 = G__38933;
continue;
} else {
var temp__5735__auto___38934 = cljs.core.seq(seq__38596_38920);
if(temp__5735__auto___38934){
var seq__38596_38935__$1 = temp__5735__auto___38934;
if(cljs.core.chunked_seq_QMARK_(seq__38596_38935__$1)){
var c__4556__auto___38936 = cljs.core.chunk_first(seq__38596_38935__$1);
var G__38937 = cljs.core.chunk_rest(seq__38596_38935__$1);
var G__38938 = c__4556__auto___38936;
var G__38939 = cljs.core.count(c__4556__auto___38936);
var G__38940 = (0);
seq__38596_38920 = G__38937;
chunk__38598_38921 = G__38938;
count__38599_38922 = G__38939;
i__38600_38923 = G__38940;
continue;
} else {
var vec__38667_38945 = cljs.core.first(seq__38596_38935__$1);
var name_38946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38667_38945,(0),null);
var map__38670_38947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38667_38945,(1),null);
var map__38670_38948__$1 = (((((!((map__38670_38947 == null))))?(((((map__38670_38947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38670_38947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38670_38947):map__38670_38947);
var doc_38949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670_38948__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38670_38948__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38946], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38950], 0));

if(cljs.core.truth_(doc_38949)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38949], 0));
} else {
}


var G__38954 = cljs.core.next(seq__38596_38935__$1);
var G__38955 = null;
var G__38956 = (0);
var G__38957 = (0);
seq__38596_38920 = G__38954;
chunk__38598_38921 = G__38955;
count__38599_38922 = G__38956;
i__38600_38923 = G__38957;
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

var seq__38675 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38676 = null;
var count__38677 = (0);
var i__38678 = (0);
while(true){
if((i__38678 < count__38677)){
var role = chunk__38676.cljs$core$IIndexed$_nth$arity$2(null,i__38678);
var temp__5735__auto___38958__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38958__$1)){
var spec_38959 = temp__5735__auto___38958__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38959)], 0));
} else {
}


var G__38960 = seq__38675;
var G__38961 = chunk__38676;
var G__38962 = count__38677;
var G__38963 = (i__38678 + (1));
seq__38675 = G__38960;
chunk__38676 = G__38961;
count__38677 = G__38962;
i__38678 = G__38963;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38675);
if(temp__5735__auto____$1){
var seq__38675__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38675__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38675__$1);
var G__38964 = cljs.core.chunk_rest(seq__38675__$1);
var G__38965 = c__4556__auto__;
var G__38966 = cljs.core.count(c__4556__auto__);
var G__38967 = (0);
seq__38675 = G__38964;
chunk__38676 = G__38965;
count__38677 = G__38966;
i__38678 = G__38967;
continue;
} else {
var role = cljs.core.first(seq__38675__$1);
var temp__5735__auto___38969__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38969__$2)){
var spec_38971 = temp__5735__auto___38969__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38971)], 0));
} else {
}


var G__38972 = cljs.core.next(seq__38675__$1);
var G__38973 = null;
var G__38974 = (0);
var G__38975 = (0);
seq__38675 = G__38972;
chunk__38676 = G__38973;
count__38677 = G__38974;
i__38678 = G__38975;
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
var G__38982 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38983 = cljs.core.ex_cause(t);
via = G__38982;
t = G__38983;
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
var map__38743 = datafied_throwable;
var map__38743__$1 = (((((!((map__38743 == null))))?(((((map__38743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38743):map__38743);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38743__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38743__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38743__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38748 = cljs.core.last(via);
var map__38748__$1 = (((((!((map__38748 == null))))?(((((map__38748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38748):map__38748);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38748__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38748__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38748__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38749 = data;
var map__38749__$1 = (((((!((map__38749 == null))))?(((((map__38749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38749):map__38749);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38749__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38750 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38750__$1 = (((((!((map__38750 == null))))?(((((map__38750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38750):map__38750);
var top_data = map__38750__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38750__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38803 = phase;
var G__38803__$1 = (((G__38803 instanceof cljs.core.Keyword))?G__38803.fqn:null);
switch (G__38803__$1) {
case "read-source":
var map__38804 = data;
var map__38804__$1 = (((((!((map__38804 == null))))?(((((map__38804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38804):map__38804);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38804__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38810 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38810__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38810,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38810);
var G__38810__$2 = (cljs.core.truth_((function (){var fexpr__38811 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38811.cljs$core$IFn$_invoke$arity$1 ? fexpr__38811.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38811.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38810__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38810__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38810__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38810__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38812 = top_data;
var G__38812__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38812,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38812);
var G__38812__$2 = (cljs.core.truth_((function (){var fexpr__38815 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38815.cljs$core$IFn$_invoke$arity$1 ? fexpr__38815.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38815.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38812__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38812__$1);
var G__38812__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38812__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38812__$2);
var G__38812__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38812__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38812__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38812__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38812__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38818 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38818,(3),null);
var G__38821 = top_data;
var G__38821__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38821,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38821);
var G__38821__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38821__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38821__$1);
var G__38821__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38821__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38821__$2);
var G__38821__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38821__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38821__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38821__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38821__$4;
}

break;
case "execution":
var vec__38822 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38822,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38738_SHARP_){
var or__4126__auto__ = (p1__38738_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38827 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38827.cljs$core$IFn$_invoke$arity$1 ? fexpr__38827.cljs$core$IFn$_invoke$arity$1(p1__38738_SHARP_) : fexpr__38827.call(null,p1__38738_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38828 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38828__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38828,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38828);
var G__38828__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38828__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38828__$1);
var G__38828__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38828__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38828__$2);
var G__38828__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38828__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38828__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38828__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38828__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38803__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38833){
var map__38834 = p__38833;
var map__38834__$1 = (((((!((map__38834 == null))))?(((((map__38834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38834):map__38834);
var triage_data = map__38834__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38834__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__38837 = phase;
var G__38837__$1 = (((G__38837 instanceof cljs.core.Keyword))?G__38837.fqn:null);
switch (G__38837__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38838 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38839 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38840 = loc;
var G__38841 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38842_39040 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38843_39041 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38844_39042 = true;
var _STAR_print_fn_STAR__temp_val__38845_39043 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38844_39042);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38845_39043);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38831_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38831_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38843_39041);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38842_39040);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38838,G__38839,G__38840,G__38841) : format.call(null,G__38838,G__38839,G__38840,G__38841));

break;
case "macroexpansion":
var G__38852 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38853 = cause_type;
var G__38854 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38855 = loc;
var G__38856 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38852,G__38853,G__38854,G__38855,G__38856) : format.call(null,G__38852,G__38853,G__38854,G__38855,G__38856));

break;
case "compile-syntax-check":
var G__38859 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38860 = cause_type;
var G__38861 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38862 = loc;
var G__38863 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38859,G__38860,G__38861,G__38862,G__38863) : format.call(null,G__38859,G__38860,G__38861,G__38862,G__38863));

break;
case "compilation":
var G__38864 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38865 = cause_type;
var G__38866 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38867 = loc;
var G__38868 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38864,G__38865,G__38866,G__38867,G__38868) : format.call(null,G__38864,G__38865,G__38866,G__38867,G__38868));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38869 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38870 = symbol;
var G__38871 = loc;
var G__38872 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38873_39049 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38874_39050 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38875_39051 = true;
var _STAR_print_fn_STAR__temp_val__38876_39052 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38875_39051);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38876_39052);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38832_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38832_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38874_39050);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38873_39049);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38869,G__38870,G__38871,G__38872) : format.call(null,G__38869,G__38870,G__38871,G__38872));
} else {
var G__38879 = "Execution error%s at %s(%s).\n%s\n";
var G__38880 = cause_type;
var G__38881 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38882 = loc;
var G__38883 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38879,G__38880,G__38881,G__38882,G__38883) : format.call(null,G__38879,G__38880,G__38881,G__38882,G__38883));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38837__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
