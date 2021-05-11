goog.provide('exfn.helpers');
exfn.helpers.get_source_line_numbers = (function exfn$helpers$get_source_line_numbers(source){
return new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34884,i){
var map__34885 = p__34884;
var map__34885__$1 = (((((!((map__34885 == null))))?(((((map__34885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34885):map__34885);
var acc = map__34885__$1;
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var line_nos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34885__$1,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",i)) || (clojure.string.starts_with_QMARK_(i,";")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_nos),"\n"].join(''));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_nos),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur),"\n"].join('')),new cljs.core.Keyword(null,"cur","cur",1153190599),cljs.core.inc);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),""], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$3(source,/\r?\n/,(-1)))));
});
exfn.helpers.keyed_collection = (function exfn$helpers$keyed_collection(col){
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(col)),col);
});
/**
 * 
 *   Copied here from clojure.contrib.map-utils. The original may have
 *   been a casualty of the clojure.contrib cataclysm.
 *   Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 *   (deepmerge + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
 *             {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
 *   -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
 *   
 */
exfn.helpers.deep_merge_with = (function exfn$helpers$deep_merge_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34921 = arguments.length;
var i__4737__auto___34922 = (0);
while(true){
if((i__4737__auto___34922 < len__4736__auto___34921)){
args__4742__auto__.push((arguments[i__4737__auto___34922]));

var G__34923 = (i__4737__auto___34922 + (1));
i__4737__auto___34922 = G__34923;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return exfn.helpers.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(exfn.helpers.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var exfn$helpers$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,exfn$helpers$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var exfn$helpers$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__34924__i = 0, G__34924__a = new Array(arguments.length -  0);
while (G__34924__i < G__34924__a.length) {G__34924__a[G__34924__i] = arguments[G__34924__i + 0]; ++G__34924__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__34924__a,0,null);
} 
return exfn$helpers$m__delegate.call(this,maps__$1);};
exfn$helpers$m.cljs$lang$maxFixedArity = 0;
exfn$helpers$m.cljs$lang$applyTo = (function (arglist__34925){
var maps__$1 = cljs.core.seq(arglist__34925);
return exfn$helpers$m__delegate(maps__$1);
});
exfn$helpers$m.cljs$core$IFn$_invoke$arity$variadic = exfn$helpers$m__delegate;
return exfn$helpers$m;
})()
,maps);
}));

(exfn.helpers.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(exfn.helpers.deep_merge_with.cljs$lang$applyTo = (function (seq34887){
var G__34888 = cljs.core.first(seq34887);
var seq34887__$1 = cljs.core.next(seq34887);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34888,seq34887__$1);
}));

/**
 * Copied from incanter
 * https://github.com/incanter/incanter/
 *   http://en.wikipedia.org/wiki/Levenshtein_distance
 *   internal representation is a table d with m+1 rows and n+1 columns
 *   where m is the length of a and m is the length of b.
 *   In information theory and computer science, the Levenshtein distance
 *   is a metric for measuring the amount of difference between two sequences
 *   (i.e., the so called edit distance).
 *   The Levenshtein distance between two strings is given by the minimum number
 *   of operations needed to transform one string into the other,
 *   where an operation is an insertion, deletion, or substitution of a single character.
 *   For example, the Levenshtein distance between "kitten" and "sitting" is 3,
 *   since the following three edits change one into the other,
 *   and there is no way to do it with fewer than three edits:
 * 1. kitten → sitten (substitution of 's' for 'k')
 * 2. sitten → sittin (substitution of 'i' for 'e')
 * 3. sittin → sitting (insert 'g' at the end).
 *   The Levenshtein distance has several simple upper and lower bounds that are useful
 *   in applications which compute many of them and compare them. These include:
 *  * It is always at least the difference of the sizes of the two strings.
 *  * It is at most the length of the longer string.
 *  * It is zero if and only if the strings are identical.
 *  * If the strings are the same size, the Hamming distance is an upper bound on the Levenshtein distance.
 *   
 */
exfn.helpers.levenshtein_distance = (function exfn$helpers$levenshtein_distance(a,b){
var m = cljs.core.count(a);
var n = cljs.core.count(b);
var init = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(exfn.helpers.deep_merge_with,(function (a__$1,b__$1){
return b__$1;
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function exfn$helpers$levenshtein_distance_$_iter__34889(s__34890){
return (new cljs.core.LazySeq(null,(function (){
var s__34890__$1 = s__34890;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34890__$1);
if(temp__5735__auto__){
var s__34890__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34890__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34890__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34892 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34891 = (0);
while(true){
if((i__34891 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__34891);
cljs.core.chunk_append(b__34892,cljs.core.PersistentArrayMap.createAsIfByAssoc([i,new cljs.core.PersistentArrayMap(null, 1, [(0),i], null)]));

var G__34926 = (i__34891 + (1));
i__34891 = G__34926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34892),exfn$helpers$levenshtein_distance_$_iter__34889(cljs.core.chunk_rest(s__34890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34892),null);
}
} else {
var i = cljs.core.first(s__34890__$2);
return cljs.core.cons(cljs.core.PersistentArrayMap.createAsIfByAssoc([i,new cljs.core.PersistentArrayMap(null, 1, [(0),i], null)]),exfn$helpers$levenshtein_distance_$_iter__34889(cljs.core.rest(s__34890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(m + (1))));
})(),(function (){var iter__4529__auto__ = (function exfn$helpers$levenshtein_distance_$_iter__34893(s__34894){
return (new cljs.core.LazySeq(null,(function (){
var s__34894__$1 = s__34894;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34894__$1);
if(temp__5735__auto__){
var s__34894__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34894__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34894__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34896 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34895 = (0);
while(true){
if((i__34895 < size__4528__auto__)){
var j = cljs.core._nth(c__4527__auto__,i__34895);
cljs.core.chunk_append(b__34896,new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.createAsIfByAssoc([j,j])], null));

var G__34928 = (i__34895 + (1));
i__34895 = G__34928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34896),exfn$helpers$levenshtein_distance_$_iter__34893(cljs.core.chunk_rest(s__34894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34896),null);
}
} else {
var j = cljs.core.first(s__34894__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [(0),cljs.core.PersistentArrayMap.createAsIfByAssoc([j,j])], null),exfn$helpers$levenshtein_distance_$_iter__34893(cljs.core.rest(s__34894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(n + (1))));
})()));
var table = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (d,p__34897){
var vec__34898 = p__34897;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34898,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34898,(1),null);
return exfn.helpers.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((function (a__$1,b__$1){
return b__$1;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d,cljs.core.PersistentArrayMap.createAsIfByAssoc([i,cljs.core.PersistentArrayMap.createAsIfByAssoc([j,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a,(i - (1))),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,(j - (1)))))?(function (){var G__34903 = (j - (1));
var fexpr__34902 = (function (){var G__34904 = (i - (1));
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__34904) : d.call(null,G__34904));
})();
return (fexpr__34902.cljs$core$IFn$_invoke$arity$1 ? fexpr__34902.cljs$core$IFn$_invoke$arity$1(G__34903) : fexpr__34902.call(null,G__34903));
})():(function (){var x__4217__auto__ = (function (){var x__4217__auto__ = ((function (){var fexpr__34906 = (function (){var G__34907 = (i - (1));
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__34907) : d.call(null,G__34907));
})();
return (fexpr__34906.cljs$core$IFn$_invoke$arity$1 ? fexpr__34906.cljs$core$IFn$_invoke$arity$1(j) : fexpr__34906.call(null,j));
})() + (1));
var y__4218__auto__ = ((function (){var G__34909 = (j - (1));
var fexpr__34908 = (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(i) : d.call(null,i));
return (fexpr__34908.cljs$core$IFn$_invoke$arity$1 ? fexpr__34908.cljs$core$IFn$_invoke$arity$1(G__34909) : fexpr__34908.call(null,G__34909));
})() + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = ((function (){var G__34912 = (j - (1));
var fexpr__34911 = (function (){var G__34913 = (i - (1));
return (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1(G__34913) : d.call(null,G__34913));
})();
return (fexpr__34911.cljs$core$IFn$_invoke$arity$1 ? fexpr__34911.cljs$core$IFn$_invoke$arity$1(G__34912) : fexpr__34911.call(null,G__34912));
})() + (1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})())])])], 0));
}),init,(function (){var iter__4529__auto__ = (function exfn$helpers$levenshtein_distance_$_iter__34914(s__34915){
return (new cljs.core.LazySeq(null,(function (){
var s__34915__$1 = s__34915;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__34915__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var j = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__34915__$1,j,xs__6292__auto__,temp__5735__auto__,m,n,init){
return (function exfn$helpers$levenshtein_distance_$_iter__34914_$_iter__34916(s__34917){
return (new cljs.core.LazySeq(null,((function (s__34915__$1,j,xs__6292__auto__,temp__5735__auto__,m,n,init){
return (function (){
var s__34917__$1 = s__34917;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__34917__$1);
if(temp__5735__auto____$1){
var s__34917__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34917__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__34917__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__34919 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__34918 = (0);
while(true){
if((i__34918 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__34918);
cljs.core.chunk_append(b__34919,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__34936 = (i__34918 + (1));
i__34918 = G__34936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34919),exfn$helpers$levenshtein_distance_$_iter__34914_$_iter__34916(cljs.core.chunk_rest(s__34917__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34919),null);
}
} else {
var i = cljs.core.first(s__34917__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),exfn$helpers$levenshtein_distance_$_iter__34914_$_iter__34916(cljs.core.rest(s__34917__$2)));
}
} else {
return null;
}
break;
}
});})(s__34915__$1,j,xs__6292__auto__,temp__5735__auto__,m,n,init))
,null,null));
});})(s__34915__$1,j,xs__6292__auto__,temp__5735__auto__,m,n,init))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(m + (1)))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,exfn$helpers$levenshtein_distance_$_iter__34914(cljs.core.rest(s__34915__$1)));
} else {
var G__34941 = cljs.core.rest(s__34915__$1);
s__34915__$1 = G__34941;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
var fexpr__34920 = (table.cljs$core$IFn$_invoke$arity$1 ? table.cljs$core$IFn$_invoke$arity$1(m) : table.call(null,m));
return (fexpr__34920.cljs$core$IFn$_invoke$arity$1 ? fexpr__34920.cljs$core$IFn$_invoke$arity$1(n) : fexpr__34920.call(null,n));
});

//# sourceMappingURL=exfn.helpers.js.map
