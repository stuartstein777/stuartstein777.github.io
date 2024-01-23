goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42853){
var map__42854 = p__42853;
var map__42854__$1 = (((((!((map__42854 == null))))?(((((map__42854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42854):map__42854);
var m = map__42854__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42854__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42867_43034 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42868_43035 = null;
var count__42869_43036 = (0);
var i__42870_43037 = (0);
while(true){
if((i__42870_43037 < count__42869_43036)){
var f_43038 = chunk__42868_43035.cljs$core$IIndexed$_nth$arity$2(null,i__42870_43037);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43038], 0));


var G__43039 = seq__42867_43034;
var G__43040 = chunk__42868_43035;
var G__43041 = count__42869_43036;
var G__43042 = (i__42870_43037 + (1));
seq__42867_43034 = G__43039;
chunk__42868_43035 = G__43040;
count__42869_43036 = G__43041;
i__42870_43037 = G__43042;
continue;
} else {
var temp__5735__auto___43043 = cljs.core.seq(seq__42867_43034);
if(temp__5735__auto___43043){
var seq__42867_43044__$1 = temp__5735__auto___43043;
if(cljs.core.chunked_seq_QMARK_(seq__42867_43044__$1)){
var c__4556__auto___43045 = cljs.core.chunk_first(seq__42867_43044__$1);
var G__43046 = cljs.core.chunk_rest(seq__42867_43044__$1);
var G__43047 = c__4556__auto___43045;
var G__43048 = cljs.core.count(c__4556__auto___43045);
var G__43049 = (0);
seq__42867_43034 = G__43046;
chunk__42868_43035 = G__43047;
count__42869_43036 = G__43048;
i__42870_43037 = G__43049;
continue;
} else {
var f_43050 = cljs.core.first(seq__42867_43044__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_43050], 0));


var G__43051 = cljs.core.next(seq__42867_43044__$1);
var G__43052 = null;
var G__43053 = (0);
var G__43054 = (0);
seq__42867_43034 = G__43051;
chunk__42868_43035 = G__43052;
count__42869_43036 = G__43053;
i__42870_43037 = G__43054;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43055 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43055], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43055)))?cljs.core.second(arglists_43055):arglists_43055)], 0));
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
var seq__42903_43058 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42904_43059 = null;
var count__42905_43060 = (0);
var i__42906_43061 = (0);
while(true){
if((i__42906_43061 < count__42905_43060)){
var vec__42928_43064 = chunk__42904_43059.cljs$core$IIndexed$_nth$arity$2(null,i__42906_43061);
var name_43065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42928_43064,(0),null);
var map__42931_43066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42928_43064,(1),null);
var map__42931_43067__$1 = (((((!((map__42931_43066 == null))))?(((((map__42931_43066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42931_43066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42931_43066):map__42931_43066);
var doc_43068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42931_43067__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42931_43067__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43065], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43069], 0));

if(cljs.core.truth_(doc_43068)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43068], 0));
} else {
}


var G__43071 = seq__42903_43058;
var G__43072 = chunk__42904_43059;
var G__43073 = count__42905_43060;
var G__43074 = (i__42906_43061 + (1));
seq__42903_43058 = G__43071;
chunk__42904_43059 = G__43072;
count__42905_43060 = G__43073;
i__42906_43061 = G__43074;
continue;
} else {
var temp__5735__auto___43075 = cljs.core.seq(seq__42903_43058);
if(temp__5735__auto___43075){
var seq__42903_43076__$1 = temp__5735__auto___43075;
if(cljs.core.chunked_seq_QMARK_(seq__42903_43076__$1)){
var c__4556__auto___43077 = cljs.core.chunk_first(seq__42903_43076__$1);
var G__43078 = cljs.core.chunk_rest(seq__42903_43076__$1);
var G__43079 = c__4556__auto___43077;
var G__43080 = cljs.core.count(c__4556__auto___43077);
var G__43081 = (0);
seq__42903_43058 = G__43078;
chunk__42904_43059 = G__43079;
count__42905_43060 = G__43080;
i__42906_43061 = G__43081;
continue;
} else {
var vec__42937_43082 = cljs.core.first(seq__42903_43076__$1);
var name_43083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937_43082,(0),null);
var map__42940_43084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937_43082,(1),null);
var map__42940_43085__$1 = (((((!((map__42940_43084 == null))))?(((((map__42940_43084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42940_43084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42940_43084):map__42940_43084);
var doc_43086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42940_43085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42940_43085__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43083], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43087], 0));

if(cljs.core.truth_(doc_43086)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43086], 0));
} else {
}


var G__43088 = cljs.core.next(seq__42903_43076__$1);
var G__43089 = null;
var G__43090 = (0);
var G__43091 = (0);
seq__42903_43058 = G__43088;
chunk__42904_43059 = G__43089;
count__42905_43060 = G__43090;
i__42906_43061 = G__43091;
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

var seq__42942 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42943 = null;
var count__42944 = (0);
var i__42945 = (0);
while(true){
if((i__42945 < count__42944)){
var role = chunk__42943.cljs$core$IIndexed$_nth$arity$2(null,i__42945);
var temp__5735__auto___43092__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43092__$1)){
var spec_43093 = temp__5735__auto___43092__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43093)], 0));
} else {
}


var G__43094 = seq__42942;
var G__43095 = chunk__42943;
var G__43096 = count__42944;
var G__43097 = (i__42945 + (1));
seq__42942 = G__43094;
chunk__42943 = G__43095;
count__42944 = G__43096;
i__42945 = G__43097;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42942);
if(temp__5735__auto____$1){
var seq__42942__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42942__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42942__$1);
var G__43100 = cljs.core.chunk_rest(seq__42942__$1);
var G__43101 = c__4556__auto__;
var G__43102 = cljs.core.count(c__4556__auto__);
var G__43103 = (0);
seq__42942 = G__43100;
chunk__42943 = G__43101;
count__42944 = G__43102;
i__42945 = G__43103;
continue;
} else {
var role = cljs.core.first(seq__42942__$1);
var temp__5735__auto___43104__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43104__$2)){
var spec_43105 = temp__5735__auto___43104__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43105)], 0));
} else {
}


var G__43106 = cljs.core.next(seq__42942__$1);
var G__43107 = null;
var G__43108 = (0);
var G__43109 = (0);
seq__42942 = G__43106;
chunk__42943 = G__43107;
count__42944 = G__43108;
i__42945 = G__43109;
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
var G__43110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43111 = cljs.core.ex_cause(t);
via = G__43110;
t = G__43111;
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
var map__42953 = datafied_throwable;
var map__42953__$1 = (((((!((map__42953 == null))))?(((((map__42953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42953):map__42953);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42953__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42953__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42953__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42954 = cljs.core.last(via);
var map__42954__$1 = (((((!((map__42954 == null))))?(((((map__42954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42954):map__42954);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42954__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42955 = data;
var map__42955__$1 = (((((!((map__42955 == null))))?(((((map__42955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42955):map__42955);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42955__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42956 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42956__$1 = (((((!((map__42956 == null))))?(((((map__42956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42956):map__42956);
var top_data = map__42956__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42963 = phase;
var G__42963__$1 = (((G__42963 instanceof cljs.core.Keyword))?G__42963.fqn:null);
switch (G__42963__$1) {
case "read-source":
var map__42964 = data;
var map__42964__$1 = (((((!((map__42964 == null))))?(((((map__42964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42964):map__42964);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42964__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42964__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42966 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42966__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42966,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42966);
var G__42966__$2 = (cljs.core.truth_((function (){var fexpr__42967 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42967.cljs$core$IFn$_invoke$arity$1 ? fexpr__42967.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42967.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42966__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42966__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42966__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42966__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42968 = top_data;
var G__42968__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42968,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42968);
var G__42968__$2 = (cljs.core.truth_((function (){var fexpr__42970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42970.cljs$core$IFn$_invoke$arity$1 ? fexpr__42970.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42970.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42968__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42968__$1);
var G__42968__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42968__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42968__$2);
var G__42968__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42968__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42968__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42968__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42968__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42972 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42972,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42972,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42972,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42972,(3),null);
var G__42975 = top_data;
var G__42975__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42975,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42975);
var G__42975__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42975__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42975__$1);
var G__42975__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42975__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42975__$2);
var G__42975__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42975__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42975__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42975__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42975__$4;
}

break;
case "execution":
var vec__42976 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42976,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42952_SHARP_){
var or__4126__auto__ = (p1__42952_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__42980 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42980.cljs$core$IFn$_invoke$arity$1 ? fexpr__42980.cljs$core$IFn$_invoke$arity$1(p1__42952_SHARP_) : fexpr__42980.call(null,p1__42952_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42981 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42981__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42981,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42981);
var G__42981__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42981__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42981__$1);
var G__42981__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42981__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42981__$2);
var G__42981__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42981__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42981__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42981__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42981__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42963__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42987){
var map__42988 = p__42987;
var map__42988__$1 = (((((!((map__42988 == null))))?(((((map__42988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42988):map__42988);
var triage_data = map__42988__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42988__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__42990 = phase;
var G__42990__$1 = (((G__42990 instanceof cljs.core.Keyword))?G__42990.fqn:null);
switch (G__42990__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42991 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42992 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42993 = loc;
var G__42994 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42998_43154 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42999_43155 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43000_43156 = true;
var _STAR_print_fn_STAR__temp_val__43001_43157 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43000_43156);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43001_43157);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42985_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42999_43155);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42998_43154);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42991,G__42992,G__42993,G__42994) : format.call(null,G__42991,G__42992,G__42993,G__42994));

break;
case "macroexpansion":
var G__43002 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__43003 = cause_type;
var G__43004 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43005 = loc;
var G__43006 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43002,G__43003,G__43004,G__43005,G__43006) : format.call(null,G__43002,G__43003,G__43004,G__43005,G__43006));

break;
case "compile-syntax-check":
var G__43007 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__43008 = cause_type;
var G__43009 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43010 = loc;
var G__43011 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43007,G__43008,G__43009,G__43010,G__43011) : format.call(null,G__43007,G__43008,G__43009,G__43010,G__43011));

break;
case "compilation":
var G__43012 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__43013 = cause_type;
var G__43014 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43015 = loc;
var G__43016 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43012,G__43013,G__43014,G__43015,G__43016) : format.call(null,G__43012,G__43013,G__43014,G__43015,G__43016));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__43017 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__43018 = symbol;
var G__43019 = loc;
var G__43020 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43021_43171 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43022_43172 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43023_43173 = true;
var _STAR_print_fn_STAR__temp_val__43024_43174 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43023_43173);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43024_43174);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42986_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42986_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43022_43172);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43021_43171);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__43017,G__43018,G__43019,G__43020) : format.call(null,G__43017,G__43018,G__43019,G__43020));
} else {
var G__43025 = "Execution error%s at %s(%s).\n%s\n";
var G__43026 = cause_type;
var G__43027 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__43028 = loc;
var G__43029 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__43025,G__43026,G__43027,G__43028,G__43029) : format.call(null,G__43025,G__43026,G__43027,G__43028,G__43029));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42990__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
