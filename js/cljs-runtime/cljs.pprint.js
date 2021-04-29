goog.provide('cljs.pprint');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29757 = arguments.length;
var i__4737__auto___29758 = (0);
while(true){
if((i__4737__auto___29758 < len__4736__auto___29757)){
args__4742__auto__.push((arguments[i__4737__auto___29758]));

var G__29759 = (i__4737__auto___29758 + (1));
i__4737__auto___29758 = G__29759;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
}));

(cljs.pprint.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.print.cljs$lang$applyTo = (function (seq27332){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27332));
}));

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29761 = arguments.length;
var i__4737__auto___29762 = (0);
while(true){
if((i__4737__auto___29762 < len__4736__auto___29761)){
args__4742__auto__.push((arguments[i__4737__auto___29762]));

var G__29764 = (i__4737__auto___29762 + (1));
i__4737__auto___29762 = G__29764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.println.cljs$lang$applyTo = (function (seq27339){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27339));
}));

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__27341 = cljs.core._EQ_;
var expr__27342 = c;
if(cljs.core.truth_((function (){var G__27344 = "\b";
var G__27345 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27344,G__27345) : pred__27341.call(null,G__27344,G__27345));
})())){
return "\\backspace";
} else {
if(cljs.core.truth_((function (){var G__27346 = " ";
var G__27347 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27346,G__27347) : pred__27341.call(null,G__27346,G__27347));
})())){
return "\\space";
} else {
if(cljs.core.truth_((function (){var G__27348 = "\t";
var G__27349 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27348,G__27349) : pred__27341.call(null,G__27348,G__27349));
})())){
return "\\tab";
} else {
if(cljs.core.truth_((function (){var G__27350 = "\n";
var G__27351 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27350,G__27351) : pred__27341.call(null,G__27350,G__27351));
})())){
return "\\newline";
} else {
if(cljs.core.truth_((function (){var G__27352 = "\f";
var G__27353 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27352,G__27353) : pred__27341.call(null,G__27352,G__27353));
})())){
return "\\formfeed";
} else {
if(cljs.core.truth_((function (){var G__27354 = "\r";
var G__27355 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27354,G__27355) : pred__27341.call(null,G__27354,G__27355));
})())){
return "\\return";
} else {
if(cljs.core.truth_((function (){var G__27356 = "\"";
var G__27357 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27356,G__27357) : pred__27341.call(null,G__27356,G__27357));
})())){
return "\\\"";
} else {
if(cljs.core.truth_((function (){var G__27358 = "\\";
var G__27359 = expr__27342;
return (pred__27341.cljs$core$IFn$_invoke$arity$2 ? pred__27341.cljs$core$IFn$_invoke$arity$2(G__27358,G__27359) : pred__27341.call(null,G__27358,G__27359));
})())){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29766 = arguments.length;
var i__4737__auto___29767 = (0);
while(true){
if((i__4737__auto___29767 < len__4736__auto___29766)){
args__4742__auto__.push((arguments[i__4737__auto___29767]));

var G__29768 = (i__4737__auto___29767 + (1));
i__4737__auto___29767 = G__29768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
}));

(cljs.pprint.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.pr.cljs$lang$applyTo = (function (seq27360){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27360));
}));

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29770 = arguments.length;
var i__4737__auto___29771 = (0);
while(true){
if((i__4737__auto___29771 < len__4736__auto___29770)){
args__4742__auto__.push((arguments[i__4737__auto___29771]));

var G__29773 = (i__4737__auto___29771 + (1));
i__4737__auto___29771 = G__29773;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
}));

(cljs.pprint.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.pprint.prn.cljs$lang$applyTo = (function (seq27364){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27364));
}));

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && ((!(isNaN(n)))) && ((!((n === Infinity)))) && ((!((parseFloat(n) === parseInt(n,(10)))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__27377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27377,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27377,(1),null);
var G__29777 = new_context;
var G__29778 = remainder;
var G__29779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29777;
lis__$1 = G__29778;
acc = G__29779;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27387 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__29782 = new_context;
var G__29783 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29782;
acc = G__29783;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__27403 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27403,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27403,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27403,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__29786 = new_context;
var G__29787 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__29786;
acc = G__29787;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__27418(s__27419){
return (new cljs.core.LazySeq(null,(function (){
var s__27419__$1 = s__27419;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27419__$1);
if(temp__5735__auto__){
var s__27419__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27419__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27419__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27425 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27424 = (0);
while(true){
if((i__27424 < size__4528__auto__)){
var vec__27429 = cljs.core._nth(c__4527__auto__,i__27424);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27429,(0),null);
var vec__27433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27429,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27433,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27433,(1),null);
cljs.core.chunk_append(b__27425,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__29790 = (i__27424 + (1));
i__27424 = G__29790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27425),cljs$pprint$unzip_map_$_iter__27418(cljs.core.chunk_rest(s__27419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27425),null);
}
} else {
var vec__27440 = cljs.core.first(s__27419__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(0),null);
var vec__27443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27440,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27443,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27443,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__27418(cljs.core.rest(s__27419__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$unzip_map_$_iter__27450(s__27451){
return (new cljs.core.LazySeq(null,(function (){
var s__27451__$1 = s__27451;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27451__$1);
if(temp__5735__auto__){
var s__27451__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27451__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27451__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27453 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27452 = (0);
while(true){
if((i__27452 < size__4528__auto__)){
var vec__27459 = cljs.core._nth(c__4527__auto__,i__27452);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,(0),null);
var vec__27463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27459,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27463,(1),null);
cljs.core.chunk_append(b__27453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__29795 = (i__27452 + (1));
i__27452 = G__29795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27453),cljs$pprint$unzip_map_$_iter__27450(cljs.core.chunk_rest(s__27451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27453),null);
}
} else {
var vec__27470 = cljs.core.first(s__27451__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27470,(0),null);
var vec__27473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27470,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27473,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27473,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__27450(cljs.core.rest(s__27451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function cljs$pprint$tuple_map_$_iter__27487(s__27488){
return (new cljs.core.LazySeq(null,(function (){
var s__27488__$1 = s__27488;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27488__$1);
if(temp__5735__auto__){
var s__27488__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27488__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__27488__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__27490 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__27489 = (0);
while(true){
if((i__27489 < size__4528__auto__)){
var vec__27497 = cljs.core._nth(c__4527__auto__,i__27489);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27497,(1),null);
cljs.core.chunk_append(b__27490,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__29798 = (i__27489 + (1));
i__27489 = G__29798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27490),cljs$pprint$tuple_map_$_iter__27487(cljs.core.chunk_rest(s__27488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27490),null);
}
} else {
var vec__27500 = cljs.core.first(s__27488__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27500,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__27487(cljs.core.rest(s__27488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__29801 = (n - (1));
n = G__29801;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if((((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__29803 = (n + (1));
n = G__29803;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__27514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__27514) : test.call(null,G__27514));
})())))){
return pos;
} else {
var G__29804 = (pos + (1));
pos = G__29804;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

var cljs$pprint$IPrettyFlush$_ppflush$dyn_29805 = (function (pp){
var x__4428__auto__ = (((pp == null))?null:pp);
var m__4429__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4429__auto__.call(null,pp));
} else {
var m__4426__auto__ = (cljs.pprint._ppflush["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4426__auto__.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
});
cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((((!((pp == null)))) && ((!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
return cljs$pprint$IPrettyFlush$_ppflush$dyn_29805(pp);
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__27526 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__27526) : sym.call(null,G__27526));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__27537 = arguments.length;
switch (G__27537) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
}));

(cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint27539 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint27539 = (function (writer,max_columns,fields,meta27540){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta27540 = meta27540;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint27539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27541,meta27540__$1){
var self__ = this;
var _27541__$1 = this;
return (new cljs.pprint.t_cljs$pprint27539(self__.writer,self__.max_columns,self__.fields,meta27540__$1));
}));

(cljs.pprint.t_cljs$pprint27539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27541){
var self__ = this;
var _27541__$1 = this;
return self__.meta27540;
}));

(cljs.pprint.t_cljs$pprint27539.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint27539.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint27539.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__27543 = cljs.core._EQ_;
var expr__27544 = cljs.core.type(x);
if(cljs.core.truth_((pred__27543.cljs$core$IFn$_invoke$arity$2 ? pred__27543.cljs$core$IFn$_invoke$arity$2(String,expr__27544) : pred__27543.call(null,String,expr__27544)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__27535_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__27535_SHARP_,"\n");
}),s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__27543.cljs$core$IFn$_invoke$arity$2 ? pred__27543.cljs$core$IFn$_invoke$arity$2(Number,expr__27544) : pred__27543.call(null,Number,expr__27544)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27544)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint27539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta27540","meta27540",-1908412509,null)], null);
}));

(cljs.pprint.t_cljs$pprint27539.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint27539.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint27539");

(cljs.pprint.t_cljs$pprint27539.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint27539");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint27539.
 */
cljs.pprint.__GT_t_cljs$pprint27539 = (function cljs$pprint$__GT_t_cljs$pprint27539(writer__$1,max_columns__$1,fields__$1,meta27540){
return (new cljs.pprint.t_cljs$pprint27539(writer__$1,max_columns__$1,fields__$1,meta27540));
});

}

return (new cljs.pprint.t_cljs$pprint27539(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27549,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27554 = k27549;
var G__27554__$1 = (((G__27554 instanceof cljs.core.Keyword))?G__27554.fqn:null);
switch (G__27554__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27549,else__4383__auto__);

}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27558){
var vec__27559 = p__27558;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27559,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27548){
var self__ = this;
var G__27548__$1 = this;
return (new cljs.core.RecordIter((0),G__27548__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27550,other27551){
var self__ = this;
var this27550__$1 = this;
return (((!((other27551 == null)))) && ((this27550__$1.constructor === other27551.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.parent,other27551.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.section,other27551.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.start_col,other27551.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.indent,other27551.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.done_nl,other27551.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.intra_block_nl,other27551.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.prefix,other27551.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.per_line_prefix,other27551.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.suffix,other27551.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.logical_block_callback,other27551.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27550__$1.__extmap,other27551.__extmap)));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27548){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27577 = cljs.core.keyword_identical_QMARK_;
var expr__27578 = k__4388__auto__;
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__27578)))){
return (new cljs.pprint.logical_block(G__27548,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section","section",-300141526),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,G__27548,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__27548,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__27548,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__27548,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__27548,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__27548,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__27548,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__27548,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27577.cljs$core$IFn$_invoke$arity$2 ? pred__27577.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__27578) : pred__27577.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__27578)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__27548,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27548),null));
}
}
}
}
}
}
}
}
}
}
}));

(cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
}));

(cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27548){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__27548,self__.__extmap,self__.__hash));
}));

(cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
}));

(cljs.pprint.logical_block.cljs$lang$type = true);

(cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
}));

(cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/logical-block");
}));

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__27552){
var extmap__4419__auto__ = (function (){var G__27591 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27552,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0));
if(cljs.core.record_QMARK_(G__27552)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27591);
} else {
return G__27591;
}
})();
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__27552),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__27552),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__29854 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__29854;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27600,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27608 = k27600;
var G__27608__$1 = (((G__27608 instanceof cljs.core.Keyword))?G__27608.fqn:null);
switch (G__27608__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27600,else__4383__auto__);

}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27616){
var vec__27617 = p__27616;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27617,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27617,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27599){
var self__ = this;
var G__27599__$1 = this;
return (new cljs.core.RecordIter((0),G__27599__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27601,other27602){
var self__ = this;
var this27601__$1 = this;
return (((!((other27602 == null)))) && ((this27601__$1.constructor === other27602.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.type_tag,other27602.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.data,other27602.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.trailing_white_space,other27602.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.start_pos,other27602.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.end_pos,other27602.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27601__$1.__extmap,other27602.__extmap)));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27599){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27660 = cljs.core.keyword_identical_QMARK_;
var expr__27661 = k__4388__auto__;
if(cljs.core.truth_((pred__27660.cljs$core$IFn$_invoke$arity$2 ? pred__27660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27661) : pred__27660.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27661)))){
return (new cljs.pprint.buffer_blob(G__27599,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27660.cljs$core$IFn$_invoke$arity$2 ? pred__27660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__27661) : pred__27660.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27661)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__27599,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27660.cljs$core$IFn$_invoke$arity$2 ? pred__27660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__27661) : pred__27660.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__27661)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__27599,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27660.cljs$core$IFn$_invoke$arity$2 ? pred__27660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27661) : pred__27660.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27661)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__27599,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27660.cljs$core$IFn$_invoke$arity$2 ? pred__27660.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27661) : pred__27660.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27661)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__27599,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27599),null));
}
}
}
}
}
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27599){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__27599,self__.__extmap,self__.__hash));
}));

(cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.buffer_blob.cljs$lang$type = true);

(cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
}));

(cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/buffer-blob");
}));

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__27603){
var extmap__4419__auto__ = (function (){var G__27663 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27603,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27603)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27663);
} else {
return G__27663;
}
})();
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27603),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27603),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__27603),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27603),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27603),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__27228__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27228__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27665,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27671 = k27665;
var G__27671__$1 = (((G__27671 instanceof cljs.core.Keyword))?G__27671.fqn:null);
switch (G__27671__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27665,else__4383__auto__);

}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27672){
var vec__27673 = p__27672;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27664){
var self__ = this;
var G__27664__$1 = this;
return (new cljs.core.RecordIter((0),G__27664__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27666,other27667){
var self__ = this;
var this27666__$1 = this;
return (((!((other27667 == null)))) && ((this27666__$1.constructor === other27667.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.type_tag,other27667.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.type,other27667.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.logical_block,other27667.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.start_pos,other27667.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.end_pos,other27667.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27666__$1.__extmap,other27667.__extmap)));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27664){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27680 = cljs.core.keyword_identical_QMARK_;
var expr__27681 = k__4388__auto__;
if(cljs.core.truth_((pred__27680.cljs$core$IFn$_invoke$arity$2 ? pred__27680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27681) : pred__27680.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27681)))){
return (new cljs.pprint.nl_t(G__27664,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27680.cljs$core$IFn$_invoke$arity$2 ? pred__27680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__27681) : pred__27680.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__27681)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__27664,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27680.cljs$core$IFn$_invoke$arity$2 ? pred__27680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27681) : pred__27680.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27681)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__27664,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27680.cljs$core$IFn$_invoke$arity$2 ? pred__27680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27681) : pred__27680.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27681)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__27664,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27680.cljs$core$IFn$_invoke$arity$2 ? pred__27680.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27681) : pred__27680.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27681)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__27664,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27664),null));
}
}
}
}
}
}));

(cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27664){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__27664,self__.__extmap,self__.__hash));
}));

(cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.nl_t.cljs$lang$type = true);

(cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
}));

(cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/nl-t");
}));

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__27668){
var extmap__4419__auto__ = (function (){var G__27684 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27668,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27668)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27684);
} else {
return G__27684;
}
})();
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27668),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__27668),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27668),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27668),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27668),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__27228__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27228__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27687,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27692 = k27687;
var G__27692__$1 = (((G__27692 instanceof cljs.core.Keyword))?G__27692.fqn:null);
switch (G__27692__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27687,else__4383__auto__);

}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27694){
var vec__27695 = p__27694;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27695,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27686){
var self__ = this;
var G__27686__$1 = this;
return (new cljs.core.RecordIter((0),G__27686__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27688,other27689){
var self__ = this;
var this27688__$1 = this;
return (((!((other27689 == null)))) && ((this27688__$1.constructor === other27689.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.type_tag,other27689.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.logical_block,other27689.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.start_pos,other27689.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.end_pos,other27689.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27688__$1.__extmap,other27689.__extmap)));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27686){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27702 = cljs.core.keyword_identical_QMARK_;
var expr__27703 = k__4388__auto__;
if(cljs.core.truth_((pred__27702.cljs$core$IFn$_invoke$arity$2 ? pred__27702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27703) : pred__27702.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27703)))){
return (new cljs.pprint.start_block_t(G__27686,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27702.cljs$core$IFn$_invoke$arity$2 ? pred__27702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27703) : pred__27702.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27703)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__27686,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27702.cljs$core$IFn$_invoke$arity$2 ? pred__27702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27703) : pred__27702.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27703)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__27686,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27702.cljs$core$IFn$_invoke$arity$2 ? pred__27702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27703) : pred__27702.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27703)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27686,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27686),null));
}
}
}
}
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27686){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27686,self__.__extmap,self__.__hash));
}));

(cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.start_block_t.cljs$lang$type = true);

(cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
}));

(cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/start-block-t");
}));

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__27690){
var extmap__4419__auto__ = (function (){var G__27716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27690,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27690)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27716);
} else {
return G__27716;
}
})();
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27690),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27690),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27690),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27690),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__27228__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27228__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27732,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27738 = k27732;
var G__27738__$1 = (((G__27738 instanceof cljs.core.Keyword))?G__27738.fqn:null);
switch (G__27738__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27732,else__4383__auto__);

}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27739){
var vec__27740 = p__27739;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27740,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27740,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27731){
var self__ = this;
var G__27731__$1 = this;
return (new cljs.core.RecordIter((0),G__27731__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27733,other27734){
var self__ = this;
var this27733__$1 = this;
return (((!((other27734 == null)))) && ((this27733__$1.constructor === other27734.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27733__$1.type_tag,other27734.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27733__$1.logical_block,other27734.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27733__$1.start_pos,other27734.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27733__$1.end_pos,other27734.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27733__$1.__extmap,other27734.__extmap)));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27731){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27772 = cljs.core.keyword_identical_QMARK_;
var expr__27773 = k__4388__auto__;
if(cljs.core.truth_((pred__27772.cljs$core$IFn$_invoke$arity$2 ? pred__27772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27773) : pred__27772.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27773)))){
return (new cljs.pprint.end_block_t(G__27731,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27772.cljs$core$IFn$_invoke$arity$2 ? pred__27772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27773) : pred__27772.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27773)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__27731,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27772.cljs$core$IFn$_invoke$arity$2 ? pred__27772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27773) : pred__27772.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27773)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__27731,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27772.cljs$core$IFn$_invoke$arity$2 ? pred__27772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27773) : pred__27772.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27773)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__27731,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27731),null));
}
}
}
}
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27731){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__27731,self__.__extmap,self__.__hash));
}));

(cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.end_block_t.cljs$lang$type = true);

(cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
}));

(cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/end-block-t");
}));

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__27735){
var extmap__4419__auto__ = (function (){var G__27800 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27735,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27735)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27800);
} else {
return G__27800;
}
})();
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27735),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27735),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27735),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27735),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__27228__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27228__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k27815,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__27827 = k27815;
var G__27827__$1 = (((G__27827 instanceof cljs.core.Keyword))?G__27827.fqn:null);
switch (G__27827__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27815,else__4383__auto__);

}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__27832){
var vec__27833 = p__27832;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27833,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27814){
var self__ = this;
var G__27814__$1 = this;
return (new cljs.core.RecordIter((0),G__27814__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27816,other27817){
var self__ = this;
var this27816__$1 = this;
return (((!((other27817 == null)))) && ((this27816__$1.constructor === other27817.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.type_tag,other27817.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.logical_block,other27817.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.relative_to,other27817.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.offset,other27817.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.start_pos,other27817.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.end_pos,other27817.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27816__$1.__extmap,other27817.__extmap)));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__27814){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__27851 = cljs.core.keyword_identical_QMARK_;
var expr__27852 = k__4388__auto__;
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__27852)))){
return (new cljs.pprint.indent_t(G__27814,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__27852)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__27814,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__27852)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__27814,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__27852)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__27814,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__27852)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__27814,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27851.cljs$core$IFn$_invoke$arity$2 ? pred__27851.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27852) : pred__27851.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__27852)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__27814,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__27814),null));
}
}
}
}
}
}
}));

(cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
}));

(cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__27814){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__27814,self__.__extmap,self__.__hash));
}));

(cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
}));

(cljs.pprint.indent_t.cljs$lang$type = true);

(cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
}));

(cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/indent-t");
}));

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__27818){
var extmap__4419__auto__ = (function (){var G__27867 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27818,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0));
if(cljs.core.record_QMARK_(G__27818)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27867);
} else {
return G__27867;
}
})();
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__27818),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__27818),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__27818),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__27818),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__27818),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__27818),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__27228__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__27228__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__27892 = cljs.core.get_global_hierarchy;
return (fexpr__27892.cljs$core$IFn$_invoke$arity$0 ? fexpr__27892.cljs$core$IFn$_invoke$arity$0() : fexpr__27892.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),(function (p1__27889_SHARP_,p2__27888_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__27888_SHARP_);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5735__auto___29992 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___29992)){
var cb_29993 = temp__5735__auto___29992;
(cb_29993.cljs$core$IFn$_invoke$arity$1 ? cb_29993.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_29993.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5735__auto___30001 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5735__auto___30001)){
var prefix_30002 = temp__5735__auto___30001;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_30002);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5735__auto___30008 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___30008)){
var cb_30009 = temp__5735__auto___30008;
(cb_30009.cljs$core$IFn$_invoke$arity$1 ? cb_30009.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_30009.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}

var temp__5735__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5735__auto__)){
var suffix = temp__5735__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__27904 = cljs.core._EQ_;
var expr__27905 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__27904.cljs$core$IFn$_invoke$arity$2 ? pred__27904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__27905) : pred__27904.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__27905)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__27904.cljs$core$IFn$_invoke$arity$2 ? pred__27904.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__27905) : pred__27904.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__27905)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__27905)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889))))){
return cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return false;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__5733__auto___30026 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___30026)){
var tws_30027 = temp__5733__auto___30026;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_30027);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__27928 = cljs.core.seq(tokens);
var chunk__27929 = null;
var count__27930 = (0);
var i__27931 = (0);
while(true){
if((i__27931 < count__27930)){
var token = chunk__27929.cljs$core$IIndexed$_nth$arity$2(null,i__27931);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___30033 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___30033)){
var tws_30036 = temp__5733__auto___30033;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_30036);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_30044 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_30044;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_30044);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__30050 = seq__27928;
var G__30051 = chunk__27929;
var G__30052 = count__27930;
var G__30053 = (i__27931 + (1));
seq__27928 = G__30050;
chunk__27929 = G__30051;
count__27930 = G__30052;
i__27931 = G__30053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27928);
if(temp__5735__auto__){
var seq__27928__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27928__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27928__$1);
var G__30058 = cljs.core.chunk_rest(seq__27928__$1);
var G__30059 = c__4556__auto__;
var G__30060 = cljs.core.count(c__4556__auto__);
var G__30061 = (0);
seq__27928 = G__30058;
chunk__27929 = G__30059;
count__27930 = G__30060;
i__27931 = G__30061;
continue;
} else {
var token = cljs.core.first(seq__27928__$1);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114))))){
var temp__5733__auto___30065 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto___30065)){
var tws_30067 = temp__5733__auto___30065;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_30067);
} else {
}
} else {
}

cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_30069 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__4115__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4115__auto__)){
return tws_30069;
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_30069);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__30070 = cljs.core.next(seq__27928__$1);
var G__30071 = null;
var G__30072 = (0);
var G__30073 = (0);
seq__27928 = G__30070;
chunk__27929 = G__30071;
count__27930 = G__30072;
i__27931 = G__30073;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.pprint.tokens_fit_QMARK_(this$,section)));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width(this$);
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__4115__auto__ = miser_width;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = maxcol;
if(cljs.core.truth_(and__4115__auto____$1)){
if((cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width))){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28004 = cljs.core.get_global_hierarchy;
return (fexpr__28004.cljs$core$IFn$_invoke$arity$0 ? fexpr__28004.cljs$core$IFn$_invoke$arity$0() : fexpr__28004.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),(function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4126__auto__ = cljs.core.deref(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.pprint.tokens_fit_QMARK_(this$,subsection)));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28011_SHARP_){
return (!(((cljs.pprint.nl_t_QMARK_(p1__28011_SHARP_)) && (cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28011_SHARP_),lb)))));
}),cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28017_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__28017_SHARP_);
return (!(((cljs.pprint.nl_t_QMARK_(p1__28017_SHARP_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb)) || (cljs.pprint.ancestor_QMARK_(nl_lb,lb)))))));
}),cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__30131 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__30131;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_30132 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_30132);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__28033_SHARP_){
return (!(cljs.pprint.nl_t_QMARK_(p1__28033_SHARP_)));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__28038 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28038,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28038,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__28045 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28045,(1),null);
var newl = cljs.core.first(b);
var do_nl = cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(newl,this$,section,cljs.pprint.get_sub_section(b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = (!(cljs.pprint.tokens_fit_QMARK_(this$,result)));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,buffer)))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if((!((buffer === new_buffer)))){
var G__30141 = new_buffer;
buffer = G__30141;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if((!(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__5733__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var buf = temp__5733__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5735__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto__)){
var tws = temp__5735__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_30153 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_30154 = (oldpos_30153 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_30154);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_30153,newpos_30154));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__28089_30157 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__28090_30158 = null;
var count__28091_30159 = (0);
var i__28092_30160 = (0);
while(true){
if((i__28092_30160 < count__28091_30159)){
var l_30165__$1 = chunk__28090_30158.cljs$core$IIndexed$_nth$arity$2(null,i__28092_30160);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_30165__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__30166 = seq__28089_30157;
var G__30167 = chunk__28090_30158;
var G__30168 = count__28091_30159;
var G__30169 = (i__28092_30160 + (1));
seq__28089_30157 = G__30166;
chunk__28090_30158 = G__30167;
count__28091_30159 = G__30168;
i__28092_30160 = G__30169;
continue;
} else {
var temp__5735__auto___30170 = cljs.core.seq(seq__28089_30157);
if(temp__5735__auto___30170){
var seq__28089_30171__$1 = temp__5735__auto___30170;
if(cljs.core.chunked_seq_QMARK_(seq__28089_30171__$1)){
var c__4556__auto___30172 = cljs.core.chunk_first(seq__28089_30171__$1);
var G__30173 = cljs.core.chunk_rest(seq__28089_30171__$1);
var G__30174 = c__4556__auto___30172;
var G__30175 = cljs.core.count(c__4556__auto___30172);
var G__30176 = (0);
seq__28089_30157 = G__30173;
chunk__28090_30158 = G__30174;
count__28091_30159 = G__30175;
i__28092_30160 = G__30176;
continue;
} else {
var l_30177__$1 = cljs.core.first(seq__28089_30171__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_30177__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}


var G__30178 = cljs.core.next(seq__28089_30171__$1);
var G__30179 = null;
var G__30180 = (0);
var G__30181 = (0);
seq__28089_30157 = G__30178;
chunk__28090_30158 = G__30179;
count__28091_30159 = G__30180;
i__28092_30160 = G__30181;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint28129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint28129 = (function (writer,max_columns,miser_width,lb,fields,meta28130){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta28130 = meta28130;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint28129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28131,meta28130__$1){
var self__ = this;
var _28131__$1 = this;
return (new cljs.pprint.t_cljs$pprint28129(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta28130__$1));
}));

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28131){
var self__ = this;
var _28131__$1 = this;
return self__.meta28130;
}));

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
}));

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__28139 = cljs.core._EQ_;
var expr__28140 = cljs.core.type(x);
if(cljs.core.truth_((pred__28139.cljs$core$IFn$_invoke$arity$2 ? pred__28139.cljs$core$IFn$_invoke$arity$2(String,expr__28140) : pred__28139.call(null,String,expr__28140)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,((s).length));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__28139.cljs$core$IFn$_invoke$arity$2 ? pred__28139.cljs$core$IFn$_invoke$arity$2(Number,expr__28140) : pred__28139.call(null,Number,expr__28140)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28140)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$core$IWriter$_flush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
}));

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.pprint.t_cljs$pprint28129.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
}));

(cljs.pprint.t_cljs$pprint28129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta28130","meta28130",9753180,null)], null);
}));

(cljs.pprint.t_cljs$pprint28129.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint28129.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint28129");

(cljs.pprint.t_cljs$pprint28129.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint28129");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint28129.
 */
cljs.pprint.__GT_t_cljs$pprint28129 = (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint28129(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28130){
return (new cljs.pprint.t_cljs$pprint28129(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta28130));
});

}

return (new cljs.pprint.t_cljs$pprint28129(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__5735__auto___30194 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___30194)){
var cb_30198 = temp__5735__auto___30194;
(cb_30198.cljs$core$IFn$_invoke$arity$1 ? cb_30198.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_30198.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(lb.start_col,col);

return cljs.core.reset_BANG_(lb.indent,col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__5735__auto___30200 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__5735__auto___30200)){
var cb_30201 = temp__5735__auto___30200;
(cb_30201.cljs$core$IFn$_invoke$arity$1 ? cb_30201.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_30201.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}
} else {
var oldpos_30202 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_30203 = (oldpos_30202 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_30203);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_30202,newpos_30203));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__28181 = cljs.core._EQ_;
var expr__28182 = relative_to;
if(cljs.core.truth_((pred__28181.cljs$core$IFn$_invoke$arity$2 ? pred__28181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__28182) : pred__28181.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__28182)))){
return cljs.core.deref(new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((pred__28181.cljs$core$IFn$_invoke$arity$2 ? pred__28181.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__28182) : pred__28181.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__28182)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28182)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__28200_SHARP_){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__28200_SHARP_));
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__28200_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x))){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return false;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4115__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
(cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1)));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30208 = arguments.length;
var i__4737__auto___30209 = (0);
while(true){
if((i__4737__auto___30209 < len__4736__auto___30208)){
args__4742__auto__.push((arguments[i__4737__auto___30209]));

var G__30210 = (i__4737__auto___30209 + (1));
i__4737__auto___30209 = G__30210;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR__orig_val__28238 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR__orig_val__28239 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR__orig_val__28240 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__28241 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR__orig_val__28242 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR__orig_val__28243 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR__orig_val__28244 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR__orig_val__28245 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR__orig_val__28246 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR__orig_val__28247 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR__orig_val__28248 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR__orig_val__28249 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
var _STAR_print_base_STAR__temp_val__28250 = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);
var _STAR_print_circle_STAR__temp_val__28251 = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);
var _STAR_print_length_STAR__temp_val__28252 = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);
var _STAR_print_level_STAR__temp_val__28253 = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);
var _STAR_print_lines_STAR__temp_val__28254 = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);
var _STAR_print_miser_width_STAR__temp_val__28255 = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);
var _STAR_print_pprint_dispatch_STAR__temp_val__28256 = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);
var _STAR_print_pretty_STAR__temp_val__28257 = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);
var _STAR_print_radix_STAR__temp_val__28258 = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);
var _STAR_print_readably_STAR__temp_val__28259 = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);
var _STAR_print_right_margin_STAR__temp_val__28260 = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);
var _STAR_print_suppress_namespaces_STAR__temp_val__28261 = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);
(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__temp_val__28250);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__temp_val__28251);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__28252);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__28253);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__temp_val__28254);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__temp_val__28255);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__28256);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__28257);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__temp_val__28258);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__28259);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__temp_val__28260);

(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__temp_val__28261);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__27203__auto___30213 = base_writer;
var new_writer__27204__auto___30214 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27203__auto___30213));
var _STAR_out_STAR__orig_val__28279_30216 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28280_30217 = ((new_writer__27204__auto___30214)?cljs.pprint.make_pretty_writer(base_writer__27203__auto___30213,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27203__auto___30213);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28280_30217);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28279_30216);
}} else {
var _STAR_out_STAR__orig_val__28281_30218 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28282_30219 = base_writer;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28282_30219);

try{cljs.pprint.pr.call(null,object);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28281_30218);
}}

if(optval === true){
cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
}

if((optval == null)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
return null;
}
}finally {}}finally {(cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR__orig_val__28249);

(cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR__orig_val__28248);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__28247);

(cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR__orig_val__28246);

(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__28245);

(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__28244);

(cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR__orig_val__28243);

(cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR__orig_val__28242);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__28241);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__28240);

(cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR__orig_val__28239);

(cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR__orig_val__28238);
}}));

(cljs.pprint.write.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.pprint.write.cljs$lang$applyTo = (function (seq28232){
var G__28233 = cljs.core.first(seq28232);
var seq28232__$1 = cljs.core.next(seq28232);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28233,seq28232__$1);
}));

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__28290 = arguments.length;
switch (G__28290) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__28292 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28293 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28293);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28292);
}}));

(cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__27203__auto__ = writer;
var new_writer__27204__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__27203__auto__));
var _STAR_out_STAR__orig_val__28300 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__28301 = ((new_writer__27204__auto__)?cljs.pprint.make_pretty_writer(base_writer__27203__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__27203__auto__);
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__28301);

try{var _STAR_print_pretty_STAR__orig_val__28302_30221 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_pretty_STAR__temp_val__28303_30222 = true;
(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__temp_val__28303_30222);

try{cljs.pprint.write_out(object);
}finally {(cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR__orig_val__28302_30221);
}
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_))))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__28300);
}}));

(cljs.pprint.pprint.cljs$lang$maxFixedArity = 2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$);

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4115__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4115__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30225 = arguments.length;
var i__4737__auto___30226 = (0);
while(true){
if((i__4737__auto___30226 < len__4736__auto___30225)){
args__4742__auto__.push((arguments[i__4737__auto___30226]));

var G__30227 = (i__4737__auto___30226 + (1));
i__4737__auto___30226 = G__30227;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format(format_in):format_in);
var navigator = cljs.pprint.init_navigator(args);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator);
}));

(cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq28333){
var G__28334 = cljs.core.first(seq28333);
var seq28333__$1 = cljs.core.next(seq28333);
var G__28335 = cljs.core.first(seq28333__$1);
var seq28333__$2 = cljs.core.next(seq28333__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28334,G__28335,seq28333__$2);
}));

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28366,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28379 = k28366;
var G__28379__$1 = (((G__28379 instanceof cljs.core.Keyword))?G__28379.fqn:null);
switch (G__28379__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28366,else__4383__auto__);

}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28382){
var vec__28385 = p__28382;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28385,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28365){
var self__ = this;
var G__28365__$1 = this;
return (new cljs.core.RecordIter((0),G__28365__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28368,other28369){
var self__ = this;
var this28368__$1 = this;
return (((!((other28369 == null)))) && ((this28368__$1.constructor === other28369.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28368__$1.seq,other28369.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28368__$1.rest,other28369.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28368__$1.pos,other28369.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28368__$1.__extmap,other28369.__extmap)));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28365){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28432 = cljs.core.keyword_identical_QMARK_;
var expr__28433 = k__4388__auto__;
if(cljs.core.truth_((pred__28432.cljs$core$IFn$_invoke$arity$2 ? pred__28432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28433) : pred__28432.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__28433)))){
return (new cljs.pprint.arg_navigator(G__28365,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28432.cljs$core$IFn$_invoke$arity$2 ? pred__28432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__28433) : pred__28432.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__28433)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__28365,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28432.cljs$core$IFn$_invoke$arity$2 ? pred__28432.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),expr__28433) : pred__28432.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__28433)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__28365,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28365),null));
}
}
}
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28365){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__28365,self__.__extmap,self__.__hash));
}));

(cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
}));

(cljs.pprint.arg_navigator.cljs$lang$type = true);

(cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
}));

(cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/arg-navigator");
}));

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__28370){
var extmap__4419__auto__ = (function (){var G__28458 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28370,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0));
if(cljs.core.record_QMARK_(G__28370)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28458);
} else {
return G__28458;
}
})();
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__28370),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__28370),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__28370),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__28472 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28472,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format(raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__28475 = navigator;
var G__28476 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__28475,G__28476) : cljs.pprint.relative_reposition.call(null,G__28475,G__28476));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28482,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28488 = k28482;
var G__28488__$1 = (((G__28488 instanceof cljs.core.Keyword))?G__28488.fqn:null);
switch (G__28488__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28482,else__4383__auto__);

}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28493){
var vec__28494 = p__28493;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28494,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28481){
var self__ = this;
var G__28481__$1 = this;
return (new cljs.core.RecordIter((0),G__28481__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28483,other28484){
var self__ = this;
var this28483__$1 = this;
return (((!((other28484 == null)))) && ((this28483__$1.constructor === other28484.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28483__$1.func,other28484.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28483__$1.def,other28484.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28483__$1.params,other28484.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28483__$1.offset,other28484.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28483__$1.__extmap,other28484.__extmap)));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28481){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28538 = cljs.core.keyword_identical_QMARK_;
var expr__28539 = k__4388__auto__;
if(cljs.core.truth_((pred__28538.cljs$core$IFn$_invoke$arity$2 ? pred__28538.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040),expr__28539) : pred__28538.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__28539)))){
return (new cljs.pprint.compiled_directive(G__28481,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28538.cljs$core$IFn$_invoke$arity$2 ? pred__28538.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"def","def",-1043430536),expr__28539) : pred__28538.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__28539)))){
return (new cljs.pprint.compiled_directive(self__.func,G__28481,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28538.cljs$core$IFn$_invoke$arity$2 ? pred__28538.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__28539) : pred__28538.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__28539)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__28481,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28538.cljs$core$IFn$_invoke$arity$2 ? pred__28538.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__28539) : pred__28538.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__28539)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__28481,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28481),null));
}
}
}
}
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28481){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__28481,self__.__extmap,self__.__hash));
}));

(cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
}));

(cljs.pprint.compiled_directive.cljs$lang$type = true);

(cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
}));

(cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.pprint/compiled-directive");
}));

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__28485){
var extmap__4419__auto__ = (function (){var G__28553 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28485,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0));
if(cljs.core.record_QMARK_(G__28485)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28553);
} else {
return G__28553;
}
})();
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__28485),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__28485),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__28485),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__28485),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__28565,navigator){
var vec__28567 = p__28565;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28567,(0),null);
var vec__28570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28567,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28570,(1),null);
var vec__28574 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28574,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28574,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__28584 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28584,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str(cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__28594 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28594,(1),null);
var base_output = (function (){var or__4126__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__28607_SHARP_){
if((p1__28607_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__28607_SHARP_,base),cljs.core.quot(p1__28607_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28613_SHARP_){
if((p1__28613_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__28613_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__28613_SHARP_ - (10))));
}
}),cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__28631 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28631,(1),null);
if(cljs.pprint.integral_QMARK_(arg)){
var neg_30264 = (arg < (0));
var pos_arg_30265 = ((neg_30264)?(- arg):arg);
var raw_str_30266 = cljs.pprint.opt_base_str(base,pos_arg_30265);
var group_str_30267 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28624_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__28624_SHARP_);
}),cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_30266));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_30266);
var signed_str_30268 = ((neg_30264)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_30267)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_30267)].join(''):group_str_30267
));
var padded_str_30269 = (((signed_str_30268.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_30268.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_30268)].join(''):signed_str_30268);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_30269], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),(((((!(cljs.core.empty_QMARK_(this$)))) && ((!(cljs.core.empty_QMARK_(acc))))))?", ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),(((((!(cljs.core.empty_QMARK_(this$)))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null)].join('');
} else {
var G__30288 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__30289 = (pos - (1));
var G__30290 = cljs.core.first(remainder);
var G__30291 = cljs.core.next(remainder);
acc = G__30288;
pos = G__30289;
this$ = G__30290;
remainder = G__30291;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__28699 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28699,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28699,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_30292 = (((arg < (0)))?(- arg):arg);
var parts_30293 = cljs.pprint.remainders((1000),abs_arg_30292);
if((cljs.core.count(parts_30293) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_30294 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_30293);
var full_str_30295 = cljs.pprint.add_english_scales(parts_strs_30294,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),full_str_30295].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [(((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null),(((((hundreds > (0))) && ((tens > (0)))))?" ":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if((((ten_digit > (0))) && ((!((unit_digit > (0))))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),(((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__28725 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28725,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28725,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_30302 = (((arg < (0)))?(- arg):arg);
var parts_30303 = cljs.pprint.remainders((1000),abs_arg_30302);
if((cljs.core.count(parts_30303) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_30304 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_30303));
var head_str_30305 = cljs.pprint.add_english_scales(parts_strs_30304,(1));
var tail_str_30306 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_30303));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(((arg < (0)))?"minus ":null),(((((!(cljs.core.empty_QMARK_(head_str_30305)))) && ((!(cljs.core.empty_QMARK_(tail_str_30306))))))?[head_str_30305,", ",tail_str_30306].join(''):(((!(cljs.core.empty_QMARK_(head_str_30305))))?[head_str_30305,"th"].join(''):tail_str_30306
))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_30307 = cljs.core.rem(arg,(100));
var not_teens_30308 = ((((11) < low_two_digits_30307)) || (((19) > low_two_digits_30307)));
var low_digit_30309 = cljs.core.rem(low_two_digits_30307,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((((low_digit_30309 === (1))) && (not_teens_30308)))?"st":(((((low_digit_30309 === (2))) && (not_teens_30308)))?"nd":(((((low_digit_30309 === (3))) && (not_teens_30308)))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__28729 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28729,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28729,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_30311 = cljs.pprint.remainders((10),arg);
var acc_30312 = cljs.core.PersistentVector.EMPTY;
var pos_30313 = (cljs.core.count(digits_30311) - (1));
var digits_30314__$1 = digits_30311;
while(true){
if(cljs.core.empty_QMARK_(digits_30314__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_30312)], 0));
} else {
var digit_30315 = cljs.core.first(digits_30314__$1);
var G__30316 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_30315))?acc_30312:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_30312,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_30313),(digit_30315 - (1)))));
var G__30317 = (pos_30313 - (1));
var G__30318 = cljs.core.next(digits_30314__$1);
acc_30312 = G__30316;
pos_30313 = G__30317;
digits_30314__$1 = G__30318;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__28745 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28745,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__28751 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28751,(1),null);
var pred__28756_30334 = cljs.core._EQ_;
var expr__28757_30335 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((function (){var G__28760 = "o";
var G__28761 = expr__28757_30335;
return (pred__28756_30334.cljs$core$IFn$_invoke$arity$2 ? pred__28756_30334.cljs$core$IFn$_invoke$arity$2(G__28760,G__28761) : pred__28756_30334.call(null,G__28760,G__28761));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((function (){var G__28762 = "u";
var G__28763 = expr__28757_30335;
return (pred__28756_30334.cljs$core$IFn$_invoke$arity$2 ? pred__28756_30334.cljs$core$IFn$_invoke$arity$2(G__28762,G__28763) : pred__28756_30334.call(null,G__28762,G__28763));
})())){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__28756_30334.cljs$core$IFn$_invoke$arity$2 ? pred__28756_30334.cljs$core$IFn$_invoke$arity$2(null,expr__28757_30335) : pred__28756_30334.call(null,null,expr__28757_30335)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__28757_30335)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__28768 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28768,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__28775 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28775,(1),null);
var vec__28779 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28779,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(f));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,cljs.core.str.cljs$core$IFn$_invoke$arity$1((((s).length) - (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1)))].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc)].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__28795 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28795,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = (((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+"))))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__30347 = (i - (1));
i = G__30347;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4126__auto__ = d;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4214__auto__ = (2);
var y__4215__auto__ = w;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4214__auto__ = (e + (1));
var y__4215__auto__ = (w__$1 - (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(w__$1 + e)
));
var vec__28804 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28804,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > ((result).length));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__28808 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28808,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28808,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc)].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k),".",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k)].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__28820 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28820,(1),null);
var vec__28823 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28823,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28823,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__28826 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28826,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28826,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp)));
var vec__28829 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28829,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = w;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = d;
if(cljs.core.truth_(and__4115__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((((fixed_repr).length) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_30377 = ((fixed_repr__$1).length);
var signed_len_30378 = (cljs.core.truth_(add_sign)?(len_30377 + (1)):len_30377);
var prepend_zero_30379__$1 = ((prepend_zero) && ((!((signed_len_30378 >= w)))));
var append_zero_30380__$1 = ((append_zero) && ((!((signed_len_30378 >= w)))));
var full_len_30381 = ((((prepend_zero_30379__$1) || (append_zero_30380__$1)))?(signed_len_30378 + (1)):signed_len_30378);
if(cljs.core.truth_((((full_len_30381 > w))?new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params):false))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_30381),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero_30379__$1)?"0":null),fixed_repr__$1,((append_zero_30380__$1)?"0":null)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),((prepend_zero)?"0":null),fixed_repr__$1,((append_zero)?"0":null)].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__28835 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__28841_30385 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__28842_30386 = G__28841_30385;
var mantissa_30387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_30386,(0),null);
var exp_30388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28842_30386,(1),null);
var G__28841_30389__$1 = G__28841_30385;
while(true){
var vec__28845_30390 = G__28841_30389__$1;
var mantissa_30391__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845_30390,(0),null);
var exp_30392__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28845_30390,(1),null);
var w_30396 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_30397 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_30398 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_30399 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_30400 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "E";
}
})();
var add_sign_30401 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_30402 = (k_30399 <= (0));
var scaled_exp_30403 = (exp_30392__$1 - (k_30399 - (1)));
var scaled_exp_str_30404 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_30403));
var scaled_exp_str_30405__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_30400),(((scaled_exp_30403 < (0)))?"-":"+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_30398)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_30398 - ((scaled_exp_str_30404).length)),"0")):null)),scaled_exp_str_30404].join('');
var exp_width_30406 = ((scaled_exp_str_30405__$1).length);
var base_mantissa_width_30407 = cljs.core.count(mantissa_30391__$1);
var scaled_mantissa_30408 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_30399),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_30391__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_30397)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_30397 - (base_mantissa_width_30407 - (1))) - (((k_30399 < (0)))?(- k_30399):(0))),"0")):null))].join('');
var w_mantissa_30409 = (cljs.core.truth_(w_30396)?(w_30396 - exp_width_30406):null);
var vec__28849_30410 = cljs.pprint.round_str(scaled_mantissa_30408,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_30399,(0)))?(d_30397 - (1)):(((k_30399 > (0)))?d_30397:(((k_30399 < (0)))?(d_30397 - (1)):null))),(cljs.core.truth_(w_mantissa_30409)?(w_mantissa_30409 - (cljs.core.truth_(add_sign_30401)?(1):(0))):null));
var rounded_mantissa_30411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849_30410,(0),null);
var __30412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849_30410,(1),null);
var incr_exp_30413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28849_30410,(2),null);
var full_mantissa_30414 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_30411,k_30399);
var append_zero_30415 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_30399,cljs.core.count(rounded_mantissa_30411))) && ((d_30397 == null)));
if(cljs.core.not(incr_exp_30413)){
if(cljs.core.truth_(w_30396)){
var len_30426 = (((full_mantissa_30414).length) + exp_width_30406);
var signed_len_30427 = (cljs.core.truth_(add_sign_30401)?(len_30426 + (1)):len_30426);
var prepend_zero_30428__$1 = ((prepend_zero_30402) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_30427,w_30396)))));
var full_len_30429 = ((prepend_zero_30428__$1)?(signed_len_30427 + (1)):signed_len_30427);
var append_zero_30430__$1 = ((append_zero_30415) && ((full_len_30429 < w_30396)));
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var or__4126__auto__ = (full_len_30429 > w_30396);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = e_30398;
if(cljs.core.truth_(and__4115__auto__)){
return ((exp_width_30406 - (2)) > e_30398);
} else {
return and__4115__auto__;
}
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_30396,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_30396 - full_len_30429) - ((append_zero_30430__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(add_sign_30401)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_30428__$1)?"0":null),full_mantissa_30414,((append_zero_30430__$1)?"0":null),scaled_exp_str_30405__$1].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_(add_sign_30401)?(((arg__$1 < (0)))?"-":"+"):null),((prepend_zero_30402)?"0":null),full_mantissa_30414,((append_zero_30415)?"0":null),scaled_exp_str_30405__$1].join('')], 0));
}
} else {
var G__30439 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_30411,(exp_30392__$1 + (1))], null);
G__28841_30389__$1 = G__30439;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__28865 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28865,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__28868 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28868,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28868,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4214__auto__ = cljs.core.count(mantissa);
var y__4215__auto__ = (function (){var x__4217__auto__ = n;
var y__4218__auto__ = (7);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__28871 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28871,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28871,(1),null);
var vec__28874 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28874,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (arg < (0));
}
})();
var vec__28877 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28877,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),fixed_repr].join('');
var full_len = (((full_repr).length) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return add_sign;
} else {
return and__4115__auto__;
}
})())?(((arg < (0)))?"-":"+"):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)))?add_sign:false))?(((arg < (0)))?"-":"+"):null),full_repr].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__28890 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28890,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses)))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__28897 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28897,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__28900 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28900,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28904 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28904,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28904,(1),null);
var vec__28907 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__30453 = (count + (1));
var G__30454 = iter_result;
var G__30455 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__30453;
args__$1 = G__30454;
last_pos = G__30455;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28918 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28918,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28918,(1),null);
var vec__28921 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28921,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(arg_list__$1)) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__30460 = (count + (1));
var G__30461 = cljs.core.next(arg_list__$1);
count = G__30460;
arg_list__$1 = G__30461;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28931 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28931,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28931,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__30475 = (count + (1));
var G__30476 = iter_result;
var G__30477 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__30475;
navigator__$2 = G__30476;
last_pos = G__30477;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__28960 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28960,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var and__4115__auto__ = max_count;
if(cljs.core.truth_(and__4115__auto__)){
return (count >= max_count);
} else {
return and__4115__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__28982 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28982,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28982,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__30488 = (count + (1));
var G__30489 = navigator__$3;
count = G__30488;
navigator__$2 = G__30489;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block(params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses(params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__29007 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR__orig_val__29010 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29011 = (new cljs.core.StringBufferWriter(sb));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29011);

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)], null);
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29010);
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29007,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29007,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__30501 = cljs.core.next(clauses__$1);
var G__30502 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__30503 = iter_result;
clauses__$1 = G__30501;
acc = G__30502;
navigator__$1 = G__30503;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__29016 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var else$ = temp__5735__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__29019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29019,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(1),null);
var navigator__$1 = (function (){var or__4126__auto__ = new_navigator;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator;
}
})();
var vec__29022 = (function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5735__auto__)){
var p = temp__5735__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29022,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29022,(1),null);
var navigator__$2 = (function (){var or__4126__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4126__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__29025 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(1),null);
var slots = (function (){var x__4214__auto__ = (1);
var y__4215__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4214__auto__ = minpad;
var y__4215__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4115__auto__ = eol_str;
if(cljs.core.truth_(and__4115__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__4115__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_30525__$1 = slots;
var extra_pad_30526__$1 = extra_pad;
var strs_30527__$1 = strs;
var pad_only_30528 = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_30527__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq(strs_30527__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_30528))?cljs.core.first(strs_30527__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__4126__auto__ = pad_only_30528;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.next(strs_30527__$1);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_30526__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__30529 = (slots_30525__$1 - (1));
var G__30530 = (extra_pad_30526__$1 - (1));
var G__30531 = (cljs.core.truth_(pad_only_30528)?strs_30527__$1:cljs.core.next(strs_30527__$1));
var G__30532 = false;
slots_30525__$1 = G__30529;
extra_pad_30526__$1 = G__30530;
strs_30527__$1 = G__30531;
pad_only_30528 = G__30532;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29049 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29049 = (function (writer,meta29050){
this.writer = writer;
this.meta29050 = meta29050;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29051,meta29050__$1){
var self__ = this;
var _29051__$1 = this;
return (new cljs.pprint.t_cljs$pprint29049(self__.writer,meta29050__$1));
}));

(cljs.pprint.t_cljs$pprint29049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29051){
var self__ = this;
var _29051__$1 = this;
return self__.meta29050;
}));

(cljs.pprint.t_cljs$pprint29049.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint29049.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29059 = cljs.core._EQ_;
var expr__29060 = cljs.core.type(x);
if(cljs.core.truth_((pred__29059.cljs$core$IFn$_invoke$arity$2 ? pred__29059.cljs$core$IFn$_invoke$arity$2(String,expr__29060) : pred__29059.call(null,String,expr__29060)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__29059.cljs$core$IFn$_invoke$arity$2 ? pred__29059.cljs$core$IFn$_invoke$arity$2(Number,expr__29060) : pred__29059.call(null,Number,expr__29060)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29060)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint29049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29050","meta29050",1917354509,null)], null);
}));

(cljs.pprint.t_cljs$pprint29049.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29049.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29049");

(cljs.pprint.t_cljs$pprint29049.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint29049");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29049.
 */
cljs.pprint.__GT_t_cljs$pprint29049 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint29049(writer__$1,meta29050){
return (new cljs.pprint.t_cljs$pprint29049(writer__$1,meta29050));
});

}

return (new cljs.pprint.t_cljs$pprint29049(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29066 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29066 = (function (writer,meta29067){
this.writer = writer;
this.meta29067 = meta29067;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29068,meta29067__$1){
var self__ = this;
var _29068__$1 = this;
return (new cljs.pprint.t_cljs$pprint29066(self__.writer,meta29067__$1));
}));

(cljs.pprint.t_cljs$pprint29066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29068){
var self__ = this;
var _29068__$1 = this;
return self__.meta29067;
}));

(cljs.pprint.t_cljs$pprint29066.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint29066.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29073 = cljs.core._EQ_;
var expr__29074 = cljs.core.type(x);
if(cljs.core.truth_((pred__29073.cljs$core$IFn$_invoke$arity$2 ? pred__29073.cljs$core$IFn$_invoke$arity$2(String,expr__29074) : pred__29073.call(null,String,expr__29074)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__29073.cljs$core$IFn$_invoke$arity$2 ? pred__29073.cljs$core$IFn$_invoke$arity$2(Number,expr__29074) : pred__29073.call(null,Number,expr__29074)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29074)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint29066.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta29067","meta29067",-717099915,null)], null);
}));

(cljs.pprint.t_cljs$pprint29066.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29066.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29066");

(cljs.pprint.t_cljs$pprint29066.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint29066");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29066.
 */
cljs.pprint.__GT_t_cljs$pprint29066 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint29066(writer__$1,meta29067){
return (new cljs.pprint.t_cljs$pprint29066(writer__$1,meta29067));
});

}

return (new cljs.pprint.t_cljs$pprint29066(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = f;
if(cljs.core.truth_(and__4115__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())?[clojure.string.upper_case(f),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume((function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return (m.index + (1));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
}),s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29088 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29088 = (function (writer,last_was_whitespace_QMARK_,meta29089){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta29089 = meta29089;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29090,meta29089__$1){
var self__ = this;
var _29090__$1 = this;
return (new cljs.pprint.t_cljs$pprint29088(self__.writer,self__.last_was_whitespace_QMARK_,meta29089__$1));
}));

(cljs.pprint.t_cljs$pprint29088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29090){
var self__ = this;
var _29090__$1 = this;
return self__.meta29089;
}));

(cljs.pprint.t_cljs$pprint29088.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint29088.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29094 = cljs.core._EQ_;
var expr__29095 = cljs.core.type(x);
if(cljs.core.truth_((pred__29094.cljs$core$IFn$_invoke$arity$2 ? pred__29094.cljs$core$IFn$_invoke$arity$2(String,expr__29095) : pred__29094.call(null,String,expr__29095)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__29094.cljs$core$IFn$_invoke$arity$2 ? pred__29094.cljs$core$IFn$_invoke$arity$2(Number,expr__29095) : pred__29094.call(null,Number,expr__29095)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29095)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint29088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta29089","meta29089",1131679181,null)], null);
}));

(cljs.pprint.t_cljs$pprint29088.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29088.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29088");

(cljs.pprint.t_cljs$pprint29088.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint29088");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29088.
 */
cljs.pprint.__GT_t_cljs$pprint29088 = (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint29088(writer__$1,last_was_whitespace_QMARK___$1,meta29089){
return (new cljs.pprint.t_cljs$pprint29088(writer__$1,last_was_whitespace_QMARK___$1,meta29089));
});

}

return (new cljs.pprint.t_cljs$pprint29088(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint29102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint29102 = (function (writer,capped,meta29103){
this.writer = writer;
this.capped = capped;
this.meta29103 = meta29103;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.pprint.t_cljs$pprint29102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29104,meta29103__$1){
var self__ = this;
var _29104__$1 = this;
return (new cljs.pprint.t_cljs$pprint29102(self__.writer,self__.capped,meta29103__$1));
}));

(cljs.pprint.t_cljs$pprint29102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29104){
var self__ = this;
var _29104__$1 = this;
return self__.meta29103;
}));

(cljs.pprint.t_cljs$pprint29102.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
}));

(cljs.pprint.t_cljs$pprint29102.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__29108 = cljs.core._EQ_;
var expr__29109 = cljs.core.type(x);
if(cljs.core.truth_((pred__29108.cljs$core$IFn$_invoke$arity$2 ? pred__29108.cljs$core$IFn$_invoke$arity$2(String,expr__29109) : pred__29108.call(null,String,expr__29109)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4115__auto__ = m;
if(cljs.core.truth_(and__4115__auto__)){
return m.index;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset),clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset)),clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__29108.cljs$core$IFn$_invoke$arity$2 ? pred__29108.cljs$core$IFn$_invoke$arity$2(Number,expr__29109) : pred__29108.call(null,Number,expr__29109)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref(self__.capped)))?goog.string.isUnicodeChar(c):false))){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29109)].join('')));
}
}
}));

(cljs.pprint.t_cljs$pprint29102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta29103","meta29103",-1243096511,null)], null);
}));

(cljs.pprint.t_cljs$pprint29102.cljs$lang$type = true);

(cljs.pprint.t_cljs$pprint29102.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint29102");

(cljs.pprint.t_cljs$pprint29102.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.pprint/t_cljs$pprint29102");
}));

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint29102.
 */
cljs.pprint.__GT_t_cljs$pprint29102 = (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint29102(writer__$1,capped__$1,meta29103){
return (new cljs.pprint.t_cljs$pprint29102(writer__$1,capped__$1,meta29103));
});

}

return (new cljs.pprint.t_cljs$pprint29102(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR__orig_val__29135 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29136 = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29136);

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29135);
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if((((!((cljs.core._STAR_out_STAR_ == null))))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_30587 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_30588 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_30589 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_30590 = (((current_30589 < colnum_30587))?(colnum_30587 - current_30589):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_30588,(0)))?(0):(colinc_30588 - cljs.core.rem((current_30589 - colnum_30587),colinc_30588))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_30590," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_30593 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_30594 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_30595 = (colrel_30593 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_30596 = (((colinc_30594 > (0)))?cljs.core.rem(start_col_30595,colinc_30594):(0));
var space_count_30597 = (colrel_30593 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_30596))?(0):(colinc_30594 - offset_30596)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_30597," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__29160 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29160,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29165_30601 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29166_30602 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29167_30603 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29168_30604 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29167_30603);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29168_30604);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29166_30602);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29165_30601);
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29169_SHARP_,p2__29170_SHARP_,p3__29171_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__29169_SHARP_,p2__29170_SHARP_,p3__29171_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29172_SHARP_,p2__29173_SHARP_,p3__29174_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__29172_SHARP_,p2__29173_SHARP_,p3__29174_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29175_SHARP_,p2__29176_SHARP_,p3__29177_SHARP_){
return cljs.pprint.format_integer((10),p1__29175_SHARP_,p2__29176_SHARP_,p3__29177_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29178_SHARP_,p2__29179_SHARP_,p3__29180_SHARP_){
return cljs.pprint.format_integer((2),p1__29178_SHARP_,p2__29179_SHARP_,p3__29180_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29181_SHARP_,p2__29182_SHARP_,p3__29183_SHARP_){
return cljs.pprint.format_integer((8),p1__29181_SHARP_,p2__29182_SHARP_,p3__29183_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__29184_SHARP_,p2__29185_SHARP_,p3__29186_SHARP_){
return cljs.pprint.format_integer((16),p1__29184_SHARP_,p2__29185_SHARP_,p3__29186_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29188_SHARP_,p2__29189_SHARP_,p3__29190_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__29188_SHARP_),p1__29188_SHARP_,p2__29189_SHARP_,p3__29190_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return (function (p1__29192_SHARP_,p2__29193_SHARP_,p3__29194_SHARP_){
return cljs.pprint.format_old_roman(p1__29192_SHARP_,p2__29193_SHARP_,p3__29194_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29195_SHARP_,p2__29196_SHARP_,p3__29197_SHARP_){
return cljs.pprint.format_new_roman(p1__29195_SHARP_,p2__29196_SHARP_,p3__29197_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29198_SHARP_,p2__29199_SHARP_,p3__29200_SHARP_){
return cljs.pprint.format_ordinal_english(p1__29198_SHARP_,p2__29199_SHARP_,p3__29200_SHARP_);
});
} else {
return (function (p1__29201_SHARP_,p2__29202_SHARP_,p3__29203_SHARP_){
return cljs.pprint.format_cardinal_english(p1__29201_SHARP_,p2__29202_SHARP_,p3__29203_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__29220 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29220,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___30637 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30638 = (0);
while(true){
if((i_30638 < n__4613__auto___30637)){
cljs.pprint.prn();

var G__30639 = (i_30638 + (1));
i_30638 = G__30639;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_30643 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_30643 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__4613__auto___30644 = (cnt_30643 - (1));
var i_30645 = (0);
while(true){
if((i_30645 < n__4613__auto___30644)){
cljs.pprint.prn();

var G__30646 = (i_30645 + (1));
i_30645 = G__30646;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4613__auto___30648 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_30649 = (0);
while(true){
if((i_30649 < n__4613__auto___30648)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__30650 = (i_30649 + (1));
i_30649 = G__30650;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__29208_SHARP_,p2__29209_SHARP_,p3__29210_SHARP_){
return cljs.pprint.relative_tabulation(p1__29208_SHARP_,p2__29209_SHARP_,p3__29210_SHARP_);
});
} else {
return (function (p1__29211_SHARP_,p2__29212_SHARP_,p3__29213_SHARP_){
return cljs.pprint.absolute_tabulation(p1__29211_SHARP_,p2__29212_SHARP_,p3__29213_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__29227 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29227,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29227,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29230 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29230,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29230,(1),null);
var vec__29233 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return (function (p1__29214_SHARP_,p2__29215_SHARP_,p3__29216_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__29214_SHARP_,p2__29215_SHARP_,p3__29216_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = arg2;
if(cljs.core.truth_(and__4115__auto____$1)){
return arg3;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = arg1;
if(cljs.core.truth_(and__4115__auto__)){
return arg2;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return (function (params__$1,navigator,offsets){
var vec__29239 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29239,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
} else {
return (function (params__$1,navigator,offsets){
var vec__29242 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29242,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__29251){
var vec__29252 = p__29251;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29252,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__29267){
var vec__29268 = p__29267;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29268,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29268,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0))))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__29282){
var vec__29283 = p__29282;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29283,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed)))?new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags):false))){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_(((cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed)))?(function (){var and__4115__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4115__auto__;
}
})():false))){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4217__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4218__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29292_SHARP_,p2__29293_SHARP_){
var val = cljs.core.first(p1__29292_SHARP_);
if((!((((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__29293_SHARP_)),cljs.core.type(val))))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.name(cljs.core.first(p2__29293_SHARP_))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__29292_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4529__auto__ = (function cljs$pprint$map_params_$_iter__29301(s__29302){
return (new cljs.core.LazySeq(null,(function (){
var s__29302__$1 = s__29302;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29302__$1);
if(temp__5735__auto__){
var s__29302__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29302__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29302__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29304 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29303 = (0);
while(true){
if((i__29303 < size__4528__auto__)){
var vec__29305 = cljs.core._nth(c__4527__auto__,i__29303);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29305,(0),null);
var vec__29308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29305,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29308,(0),null);
cljs.core.chunk_append(b__29304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__30724 = (i__29303 + (1));
i__29303 = G__30724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29304),cljs$pprint$map_params_$_iter__29301(cljs.core.chunk_rest(s__29302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29304),null);
}
} else {
var vec__29311 = cljs.core.first(s__29302__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29311,(0),null);
var vec__29314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29311,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29314,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__29301(cljs.core.rest(s__29302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__29294_SHARP_,p2__29295_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__29294_SHARP_,p2__29295_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29296_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29296_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__29321 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(0),null);
var vec__29324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29321,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29324,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29324,(1),null);
var vec__29327 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29327,(0),null);
var vec__29330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29327,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29330,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29330,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29330,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__29336 = new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__29336.cljs$core$IFn$_invoke$arity$2 ? fexpr__29336.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__29336.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4115__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4115__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__29352 = cljs.pprint.collect_clauses(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__29362){
var vec__29363 = p__29362;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(2),null);
var vec__29366 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(0),null);
var vec__29369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29366,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29369,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR__orig_val__29372 = cljs.pprint._STAR_format_str_STAR_;
var _STAR_format_str_STAR__temp_val__29373 = format_str;
(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__temp_val__29373);

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume((function (p__29375){
var vec__29376 = p__29375;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29376,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29376,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {(cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR__orig_val__29372);
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__30750 = cljs.core.next(format__$1);
format__$1 = G__30750;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__29380 = arguments.length;
switch (G__29380) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not(stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = ((((cljs.pprint.needs_pretty(format)) && (cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream)))))?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR__orig_val__29381 = cljs.core._STAR_out_STAR_;
var _STAR_out_STAR__temp_val__29382 = wrapped_stream;
(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__temp_val__29382);

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if((!((real_stream === wrapped_stream)))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
} else {
if(stream === true){
return cljs.core.string_print(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb));
} else {
return null;

}
}
}finally {(cljs.core._STAR_out_STAR_ = _STAR_out_STAR__orig_val__29381);
}}));

(cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.pprint.abort_QMARK_(context)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__29383 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29383,(1),null);
var vec__29386 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
}));

(cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__29389 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__29389) : cljs.pprint.reader_macros.call(null,G__29389));
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = macro_char;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4115__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29393_30760 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29394_30761 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29395_30762 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29396_30763 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29395_30762);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29396_30763);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count29400_30764 = (0);
var alis_30765__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29400_30764 < cljs.core._STAR_print_length_STAR_)))){
if(alis_30765__$1){
cljs.pprint.write_out(cljs.core.first(alis_30765__$1));

if(cljs.core.next(alis_30765__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30766 = (length_count29400_30764 + (1));
var G__30767 = cljs.core.next(alis_30765__$1);
length_count29400_30764 = G__30766;
alis_30765__$1 = G__30767;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29394_30761);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29393_30760);
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29401_30768 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29402_30769 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29403_30770 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29404_30771 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29403_30770);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29404_30771);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29405_30772 = (0);
var aseq_30773 = cljs.core.seq(avec);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29405_30772 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30773){
cljs.pprint.write_out(cljs.core.first(aseq_30773));

if(cljs.core.next(aseq_30773)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30776 = (length_count29405_30772 + (1));
var G__30777 = cljs.core.next(aseq_30773);
length_count29405_30772 = G__30776;
aseq_30773 = G__30777;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29402_30769);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29401_30768);
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__27298__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30778__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30778 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30779__i = 0, G__30779__a = new Array(arguments.length -  0);
while (G__30779__i < G__30779__a.length) {G__30779__a[G__30779__i] = arguments[G__30779__i + 0]; ++G__30779__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30779__a,0,null);
} 
return G__30778__delegate.call(this,args__27300__auto__);};
G__30778.cljs$lang$maxFixedArity = 0;
G__30778.cljs$lang$applyTo = (function (arglist__30781){
var args__27300__auto__ = cljs.core.seq(arglist__30781);
return G__30778__delegate(args__27300__auto__);
});
G__30778.cljs$core$IFn$_invoke$arity$variadic = G__30778__delegate;
return G__30778;
})()
;
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__29410 = (((!(cljs.core.record_QMARK_(amap))))?(function (){var fexpr__29417 = new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",15,1,10307,10307,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__29417.cljs$core$IFn$_invoke$arity$1 ? fexpr__29417.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__29417.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29410,(1),null);
var amap__$1 = (function (){var or__4126__auto__ = lift_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29418_30787 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29419_30788 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29420_30789 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29421_30790 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29420_30789);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29421_30790);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count29422_30792 = (0);
var aseq_30793 = cljs.core.seq(amap__$1);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29422_30792 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_30793){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29423_30794 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29424_30795 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29425_30796 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29426_30797 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29425_30796);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29426_30797);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_30793));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

(cljs.pprint._STAR_current_length_STAR_ = (0));

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_30793)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29424_30795);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29423_30794);
}}


if(cljs.core.next(aseq_30793)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30802 = (length_count29422_30792 + (1));
var G__30803 = cljs.core.next(aseq_30793);
length_count29422_30792 = G__30802;
aseq_30793 = G__30803;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29419_30788);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29418_30787);
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__27298__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30807__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30807 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30808__i = 0, G__30808__a = new Array(arguments.length -  0);
while (G__30808__i < G__30808__a.length) {G__30808__a[G__30808__i] = arguments[G__30808__i + 0]; ++G__30808__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30808__a,0,null);
} 
return G__30807__delegate.call(this,args__27300__auto__);};
G__30807.cljs$lang$maxFixedArity = 0;
G__30807.cljs$lang$applyTo = (function (arglist__30810){
var args__27300__auto__ = cljs.core.seq(arglist__30810);
return G__30807__delegate(args__27300__auto__);
});
G__30807.cljs$core$IFn$_invoke$arity$variadic = G__30807__delegate;
return G__30807;
})()
;
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4126__auto__ = (function (){var temp__5735__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5735__auto__)){
var match = temp__5735__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29427_30816 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29428_30817 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29429_30818 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29430_30819 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29429_30818);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29430_30819);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (((prefix).length) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((((((!((o == null))))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o)))?(!(cljs.core._realized_QMARK_(o))):false))?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29428_30817);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29427_30816);
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__27298__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30824__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30824 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30826__i = 0, G__30826__a = new Array(arguments.length -  0);
while (G__30826__i < G__30826__a.length) {G__30826__a[G__30826__i] = arguments[G__30826__i + 0]; ++G__30826__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30826__a,0,null);
} 
return G__30824__delegate.call(this,args__27300__auto__);};
G__30824.cljs$lang$maxFixedArity = 0;
G__30824.cljs$lang$applyTo = (function (arglist__30827){
var args__27300__auto__ = cljs.core.seq(arglist__30827);
return G__30824__delegate(args__27300__auto__);
});
G__30824.cljs$core$IFn$_invoke$arity$variadic = G__30824__delegate;
return G__30824;
})()
;
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29440 = cljs.core.get_global_hierarchy;
return (fexpr__29440.cljs$core$IFn$_invoke$arity$0 ? fexpr__29440.cljs$core$IFn$_invoke$arity$0() : fexpr__29440.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__29448 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29448,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29448,(1),null);
var vec__29451 = reference;
var seq__29452 = cljs.core.seq(vec__29451);
var first__29453 = cljs.core.first(seq__29452);
var seq__29452__$1 = cljs.core.next(seq__29452);
var keyw = first__29453;
var args = seq__29452__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29456_30828 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29457_30829 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29458_30830 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29459_30831 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29458_30830);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29459_30831);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__27298__auto__ = "~w~:i";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30832__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30832 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30833__i = 0, G__30833__a = new Array(arguments.length -  0);
while (G__30833__i < G__30833__a.length) {G__30833__a[G__30833__i] = arguments[G__30833__i + 0]; ++G__30833__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30833__a,0,null);
} 
return G__30832__delegate.call(this,args__27300__auto__);};
G__30832.cljs$lang$maxFixedArity = 0;
G__30832.cljs$lang$applyTo = (function (arglist__30834){
var args__27300__auto__ = cljs.core.seq(arglist__30834);
return G__30832__delegate(args__27300__auto__);
});
G__30832.cljs$core$IFn$_invoke$arity$variadic = G__30832__delegate;
return G__30832;
})()
;
})()(keyw);

var args_30835__$1 = args;
while(true){
if(cljs.core.seq(args_30835__$1)){
(function (){var format_in__27298__auto__ = " ";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30837__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30837 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30840__i = 0, G__30840__a = new Array(arguments.length -  0);
while (G__30840__i < G__30840__a.length) {G__30840__a[G__30840__i] = arguments[G__30840__i + 0]; ++G__30840__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30840__a,0,null);
} 
return G__30837__delegate.call(this,args__27300__auto__);};
G__30837.cljs$lang$maxFixedArity = 0;
G__30837.cljs$lang$applyTo = (function (arglist__30841){
var args__27300__auto__ = cljs.core.seq(arglist__30841);
return G__30837__delegate(args__27300__auto__);
});
G__30837.cljs$core$IFn$_invoke$arity$variadic = G__30837__delegate;
return G__30837;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})()();

var arg_30844 = cljs.core.first(args_30835__$1);
if(cljs.core.sequential_QMARK_(arg_30844)){
var vec__29466_30845 = cljs.pprint.brackets(arg_30844);
var start_30846__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466_30845,(0),null);
var end_30847__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466_30845,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29472_30848 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29473_30849 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29474_30850 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29475_30851 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29474_30850);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29475_30851);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_30846__$1,null,end_30847__$1);

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_30844),(3))) && ((cljs.core.second(arg_30844) instanceof cljs.core.Keyword)))){
var vec__29481_30852 = arg_30844;
var ns_30853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481_30852,(0),null);
var kw_30854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481_30852,(1),null);
var lis_30855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29481_30852,(2),null);
(function (){var format_in__27298__auto__ = "~w ~w ";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29481_30852,ns_30853,kw_30854,lis_30855,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30858__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30858 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30859__i = 0, G__30859__a = new Array(arguments.length -  0);
while (G__30859__i < G__30859__a.length) {G__30859__a[G__30859__i] = arguments[G__30859__i + 0]; ++G__30859__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30859__a,0,null);
} 
return G__30858__delegate.call(this,args__27300__auto__);};
G__30858.cljs$lang$maxFixedArity = 0;
G__30858.cljs$lang$applyTo = (function (arglist__30861){
var args__27300__auto__ = cljs.core.seq(arglist__30861);
return G__30858__delegate(args__27300__auto__);
});
G__30858.cljs$core$IFn$_invoke$arity$variadic = G__30858__delegate;
return G__30858;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29481_30852,ns_30853,kw_30854,lis_30855,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})()(ns_30853,kw_30854);

if(cljs.core.sequential_QMARK_(lis_30855)){
(function (){var format_in__27298__auto__ = ((cljs.core.vector_QMARK_(lis_30855))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29481_30852,ns_30853,kw_30854,lis_30855,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30862__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30862 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30864__i = 0, G__30864__a = new Array(arguments.length -  0);
while (G__30864__i < G__30864__a.length) {G__30864__a[G__30864__i] = arguments[G__30864__i + 0]; ++G__30864__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30864__a,0,null);
} 
return G__30862__delegate.call(this,args__27300__auto__);};
G__30862.cljs$lang$maxFixedArity = 0;
G__30862.cljs$lang$applyTo = (function (arglist__30865){
var args__27300__auto__ = cljs.core.seq(arglist__30865);
return G__30862__delegate(args__27300__auto__);
});
G__30862.cljs$core$IFn$_invoke$arity$variadic = G__30862__delegate;
return G__30862;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29481_30852,ns_30853,kw_30854,lis_30855,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})()(lis_30855);
} else {
cljs.pprint.write_out(lis_30855);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27298__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30876__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30876 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30877__i = 0, G__30877__a = new Array(arguments.length -  0);
while (G__30877__i < G__30877__a.length) {G__30877__a[G__30877__i] = arguments[G__30877__i + 0]; ++G__30877__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30877__a,0,null);
} 
return G__30876__delegate.call(this,args__27300__auto__);};
G__30876.cljs$lang$maxFixedArity = 0;
G__30876.cljs$lang$applyTo = (function (arglist__30878){
var args__27300__auto__ = cljs.core.seq(arglist__30878);
return G__30876__delegate(args__27300__auto__);
});
G__30876.cljs$core$IFn$_invoke$arity$variadic = G__30876__delegate;
return G__30876;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,_STAR_current_level_STAR__orig_val__29472_30848,_STAR_current_length_STAR__orig_val__29473_30849,_STAR_current_level_STAR__temp_val__29474_30850,_STAR_current_length_STAR__temp_val__29475_30851,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})(),arg_30844);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29473_30849);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29472_30848);
}}


if(cljs.core.next(args_30835__$1)){
(function (){var format_in__27298__auto__ = "~_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30882__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30882 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30883__i = 0, G__30883__a = new Array(arguments.length -  0);
while (G__30883__i < G__30883__a.length) {G__30883__a[G__30883__i] = arguments[G__30883__i + 0]; ++G__30883__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30883__a,0,null);
} 
return G__30882__delegate.call(this,args__27300__auto__);};
G__30882.cljs$lang$maxFixedArity = 0;
G__30882.cljs$lang$applyTo = (function (arglist__30885){
var args__27300__auto__ = cljs.core.seq(arglist__30885);
return G__30882__delegate(args__27300__auto__);
});
G__30882.cljs$core$IFn$_invoke$arity$variadic = G__30882__delegate;
return G__30882;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,vec__29466_30845,start_30846__$1,end_30847__$1,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})()();
} else {
}
} else {
cljs.pprint.write_out(arg_30844);

if(cljs.core.next(args_30835__$1)){
(function (){var format_in__27298__auto__ = "~:_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return ((function (args_30835__$1,format_in__27298__auto__,cf__27299__auto__,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args){
return (function() { 
var G__30886__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30886 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30887__i = 0, G__30887__a = new Array(arguments.length -  0);
while (G__30887__i < G__30887__a.length) {G__30887__a[G__30887__i] = arguments[G__30887__i + 0]; ++G__30887__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30887__a,0,null);
} 
return G__30886__delegate.call(this,args__27300__auto__);};
G__30886.cljs$lang$maxFixedArity = 0;
G__30886.cljs$lang$applyTo = (function (arglist__30888){
var args__27300__auto__ = cljs.core.seq(arglist__30888);
return G__30886__delegate(args__27300__auto__);
});
G__30886.cljs$core$IFn$_invoke$arity$variadic = G__30886__delegate;
return G__30886;
})()
;
;})(args_30835__$1,format_in__27298__auto__,cf__27299__auto__,arg_30844,_STAR_current_level_STAR__orig_val__29456_30828,_STAR_current_length_STAR__orig_val__29457_30829,_STAR_current_level_STAR__temp_val__29458_30830,_STAR_current_length_STAR__temp_val__29459_30831,vec__29448,start,end,vec__29451,seq__29452,first__29453,seq__29452__$1,keyw,args))
})()();
} else {
}
}

var G__30890 = cljs.core.next(args_30835__$1);
args_30835__$1 = G__30890;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29457_30829);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29456_30828);
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__29501 = alis;
var seq__29502 = cljs.core.seq(vec__29501);
var first__29503 = cljs.core.first(seq__29502);
var seq__29502__$1 = cljs.core.next(seq__29502);
var ns_sym = first__29503;
var first__29503__$1 = cljs.core.first(seq__29502__$1);
var seq__29502__$2 = cljs.core.next(seq__29502__$1);
var ns_name = first__29503__$1;
var stuff = seq__29502__$2;
var vec__29504 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(1),null);
var vec__29507 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29507,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29507,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29513_30894 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29514_30895 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29515_30896 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29516_30897 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29515_30896);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29516_30897);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27298__auto__ = "~w ~1I~@_~w";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30901__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30901 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30902__i = 0, G__30902__a = new Array(arguments.length -  0);
while (G__30902__i < G__30902__a.length) {G__30902__a[G__30902__i] = arguments[G__30902__i + 0]; ++G__30902__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30902__a,0,null);
} 
return G__30901__delegate.call(this,args__27300__auto__);};
G__30901.cljs$lang$maxFixedArity = 0;
G__30901.cljs$lang$applyTo = (function (arglist__30903){
var args__27300__auto__ = cljs.core.seq(arglist__30903);
return G__30901__delegate(args__27300__auto__);
});
G__30901.cljs$core$IFn$_invoke$arity$variadic = G__30901__delegate;
return G__30901;
})()
;
})()(ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = attr_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__27298__auto__ = "~@:_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30904__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30904 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30905__i = 0, G__30905__a = new Array(arguments.length -  0);
while (G__30905__i < G__30905__a.length) {G__30905__a[G__30905__i] = arguments[G__30905__i + 0]; ++G__30905__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30905__a,0,null);
} 
return G__30904__delegate.call(this,args__27300__auto__);};
G__30904.cljs$lang$maxFixedArity = 0;
G__30904.cljs$lang$applyTo = (function (arglist__30906){
var args__27300__auto__ = cljs.core.seq(arglist__30906);
return G__30904__delegate(args__27300__auto__);
});
G__30904.cljs$core$IFn$_invoke$arity$variadic = G__30904__delegate;
return G__30904;
})()
;
})()();
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__4126__auto__ = attr_map;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27298__auto__ = "~w~:[~;~:@_~]";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30908__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30908 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30909__i = 0, G__30909__a = new Array(arguments.length -  0);
while (G__30909__i < G__30909__a.length) {G__30909__a[G__30909__i] = arguments[G__30909__i + 0]; ++G__30909__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30909__a,0,null);
} 
return G__30908__delegate.call(this,args__27300__auto__);};
G__30908.cljs$lang$maxFixedArity = 0;
G__30908.cljs$lang$applyTo = (function (arglist__30910){
var args__27300__auto__ = cljs.core.seq(arglist__30910);
return G__30908__delegate(args__27300__auto__);
});
G__30908.cljs$core$IFn$_invoke$arity$variadic = G__30908__delegate;
return G__30908;
})()
;
})()(attr_map,cljs.core.seq(references));
} else {
}

var references_30911__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_30911__$1));

var temp__5735__auto___30912 = cljs.core.next(references_30911__$1);
if(temp__5735__auto___30912){
var references_30913__$2 = temp__5735__auto___30912;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30914 = references_30913__$2;
references_30911__$1 = G__30914;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29514_30895);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29513_30894);
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__27298__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30916__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30916 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30917__i = 0, G__30917__a = new Array(arguments.length -  0);
while (G__30917__i < G__30917__a.length) {G__30917__a[G__30917__i] = arguments[G__30917__i + 0]; ++G__30917__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30917__a,0,null);
} 
return G__30916__delegate.call(this,args__27300__auto__);};
G__30916.cljs$lang$maxFixedArity = 0;
G__30916.cljs$lang$applyTo = (function (arglist__30919){
var args__27300__auto__ = cljs.core.seq(arglist__30919);
return G__30916__delegate(args__27300__auto__);
});
G__30916.cljs$core$IFn$_invoke$arity$variadic = G__30916__delegate;
return G__30916;
})()
;
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__27298__auto__ = " ~_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30922__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30922 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30924__i = 0, G__30924__a = new Array(arguments.length -  0);
while (G__30924__i < G__30924__a.length) {G__30924__a[G__30924__i] = arguments[G__30924__i + 0]; ++G__30924__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30924__a,0,null);
} 
return G__30922__delegate.call(this,args__27300__auto__);};
G__30922.cljs$lang$maxFixedArity = 0;
G__30922.cljs$lang$applyTo = (function (arglist__30925){
var args__27300__auto__ = cljs.core.seq(arglist__30925);
return G__30922__delegate(args__27300__auto__);
});
G__30922.cljs$core$IFn$_invoke$arity$variadic = G__30922__delegate;
return G__30922;
})()
;
})()();
} else {
(function (){var format_in__27298__auto__ = " ~@_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30926__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30926 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30927__i = 0, G__30927__a = new Array(arguments.length -  0);
while (G__30927__i < G__30927__a.length) {G__30927__a[G__30927__i] = arguments[G__30927__i + 0]; ++G__30927__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30927__a,0,null);
} 
return G__30926__delegate.call(this,args__27300__auto__);};
G__30926.cljs$lang$maxFixedArity = 0;
G__30926.cljs$lang$applyTo = (function (arglist__30930){
var args__27300__auto__ = cljs.core.seq(arglist__30930);
return G__30926__delegate(args__27300__auto__);
});
G__30926.cljs$core$IFn$_invoke$arity$variadic = G__30926__delegate;
return G__30926;
})()
;
})()();
}

return (function (){var format_in__27298__auto__ = "~{~w~^ ~_~}";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30932__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30932 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30933__i = 0, G__30933__a = new Array(arguments.length -  0);
while (G__30933__i < G__30933__a.length) {G__30933__a[G__30933__i] = arguments[G__30933__i + 0]; ++G__30933__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30933__a,0,null);
} 
return G__30932__delegate.call(this,args__27300__auto__);};
G__30932.cljs$lang$maxFixedArity = 0;
G__30932.cljs$lang$applyTo = (function (arglist__30936){
var args__27300__auto__ = cljs.core.seq(arglist__30936);
return G__30932__delegate(args__27300__auto__);
});
G__30932.cljs$core$IFn$_invoke$arity$variadic = G__30932__delegate;
return G__30932;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__27298__auto__ = " ~_~{~w~^ ~_~}";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30939__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30939 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30941__i = 0, G__30941__a = new Array(arguments.length -  0);
while (G__30941__i < G__30941__a.length) {G__30941__a[G__30941__i] = arguments[G__30941__i + 0]; ++G__30941__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30941__a,0,null);
} 
return G__30939__delegate.call(this,args__27300__auto__);};
G__30939.cljs$lang$maxFixedArity = 0;
G__30939.cljs$lang$applyTo = (function (arglist__30943){
var args__27300__auto__ = cljs.core.seq(arglist__30943);
return G__30939__delegate(args__27300__auto__);
});
G__30939.cljs$core$IFn$_invoke$arity$variadic = G__30939__delegate;
return G__30939;
})()
;
})()(alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__29552 = alis;
var seq__29553 = cljs.core.seq(vec__29552);
var first__29554 = cljs.core.first(seq__29553);
var seq__29553__$1 = cljs.core.next(seq__29553);
var defn_sym = first__29554;
var first__29554__$1 = cljs.core.first(seq__29553__$1);
var seq__29553__$2 = cljs.core.next(seq__29553__$1);
var defn_name = first__29554__$1;
var stuff = seq__29553__$2;
var vec__29555 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29555,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29555,(1),null);
var vec__29558 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29558,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29558,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29567_30945 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29568_30946 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29569_30947 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29570_30948 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29569_30947);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29570_30948);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__27298__auto__ = "~w ~1I~@_~w";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30949__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30949 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30952__i = 0, G__30952__a = new Array(arguments.length -  0);
while (G__30952__i < G__30952__a.length) {G__30952__a[G__30952__i] = arguments[G__30952__i + 0]; ++G__30952__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30952__a,0,null);
} 
return G__30949__delegate.call(this,args__27300__auto__);};
G__30949.cljs$lang$maxFixedArity = 0;
G__30949.cljs$lang$applyTo = (function (arglist__30954){
var args__27300__auto__ = cljs.core.seq(arglist__30954);
return G__30949__delegate(args__27300__auto__);
});
G__30949.cljs$core$IFn$_invoke$arity$variadic = G__30949__delegate;
return G__30949;
})()
;
})()(defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__27298__auto__ = " ~_~w";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30955__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30955 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30956__i = 0, G__30956__a = new Array(arguments.length -  0);
while (G__30956__i < G__30956__a.length) {G__30956__a[G__30956__i] = arguments[G__30956__i + 0]; ++G__30956__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30956__a,0,null);
} 
return G__30955__delegate.call(this,args__27300__auto__);};
G__30955.cljs$lang$maxFixedArity = 0;
G__30955.cljs$lang$applyTo = (function (arglist__30957){
var args__27300__auto__ = cljs.core.seq(arglist__30957);
return G__30955__delegate(args__27300__auto__);
});
G__30955.cljs$core$IFn$_invoke$arity$variadic = G__30955__delegate;
return G__30955;
})()
;
})()(doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__27298__auto__ = " ~_~w";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30961__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30961 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30962__i = 0, G__30962__a = new Array(arguments.length -  0);
while (G__30962__i < G__30962__a.length) {G__30962__a[G__30962__i] = arguments[G__30962__i + 0]; ++G__30962__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30962__a,0,null);
} 
return G__30961__delegate.call(this,args__27300__auto__);};
G__30961.cljs$lang$maxFixedArity = 0;
G__30961.cljs$lang$applyTo = (function (arglist__30968){
var args__27300__auto__ = cljs.core.seq(arglist__30968);
return G__30961__delegate(args__27300__auto__);
});
G__30961.cljs$core$IFn$_invoke$arity$variadic = G__30961__delegate;
return G__30961;
})()
;
})()(attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4126__auto__ = doc_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29568_30946);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29567_30945);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29577_30969 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29578_30970 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29579_30971 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29580_30972 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29579_30971);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29580_30972);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count29581_30973 = (0);
var binding_30974 = binding_vec;
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29581_30973 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq(binding_30974)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29582_30975 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29583_30976 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29584_30977 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29585_30978 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29584_30977);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29585_30978);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_30974));

if(cljs.core.next(binding_30974)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_30974));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29583_30976);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29582_30975);
}}


if(cljs.core.next(cljs.core.rest(binding_30974))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__30979 = (length_count29581_30973 + (1));
var G__30980 = cljs.core.next(cljs.core.rest(binding_30974));
length_count29581_30973 = G__30979;
binding_30974 = G__30980;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29578_30970);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29577_30969);
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29594_30981 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29595_30982 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29596_30983 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29597_30984 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29596_30983);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29597_30984);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis))))){
(function (){var format_in__27298__auto__ = "~w ~1I~@_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30985__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30985 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30986__i = 0, G__30986__a = new Array(arguments.length -  0);
while (G__30986__i < G__30986__a.length) {G__30986__a[G__30986__i] = arguments[G__30986__i + 0]; ++G__30986__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30986__a,0,null);
} 
return G__30985__delegate.call(this,args__27300__auto__);};
G__30985.cljs$lang$maxFixedArity = 0;
G__30985.cljs$lang$applyTo = (function (arglist__30987){
var args__27300__auto__ = cljs.core.seq(arglist__30987);
return G__30985__delegate(args__27300__auto__);
});
G__30985.cljs$core$IFn$_invoke$arity$variadic = G__30985__delegate;
return G__30985;
})()
;
})()(base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__27298__auto__ = " ~_~{~w~^ ~_~}";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30989__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30989 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30990__i = 0, G__30990__a = new Array(arguments.length -  0);
while (G__30990__i < G__30990__a.length) {G__30990__a[G__30990__i] = arguments[G__30990__i + 0]; ++G__30990__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30990__a,0,null);
} 
return G__30989__delegate.call(this,args__27300__auto__);};
G__30989.cljs$lang$maxFixedArity = 0;
G__30989.cljs$lang$applyTo = (function (arglist__30991){
var args__27300__auto__ = cljs.core.seq(arglist__30991);
return G__30989__delegate(args__27300__auto__);
});
G__30989.cljs$core$IFn$_invoke$arity$variadic = G__30989__delegate;
return G__30989;
})()
;
})()(cljs.core.next(cljs.core.rest(alis)));
} else {
cljs.pprint.pprint_simple_code_list(alis);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29595_30982);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29594_30981);
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__27298__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__30992__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__30992 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__30993__i = 0, G__30993__a = new Array(arguments.length -  0);
while (G__30993__i < G__30993__a.length) {G__30993__a[G__30993__i] = arguments[G__30993__i + 0]; ++G__30993__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__30993__a,0,null);
} 
return G__30992__delegate.call(this,args__27300__auto__);};
G__30992.cljs$lang$maxFixedArity = 0;
G__30992.cljs$lang$applyTo = (function (arglist__30994){
var args__27300__auto__ = cljs.core.seq(arglist__30994);
return G__30992__delegate(args__27300__auto__);
});
G__30992.cljs$core$IFn$_invoke$arity$variadic = G__30992__delegate;
return G__30992;
})()
;
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29610_30995 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29611_30996 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29612_30997 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29613_30998 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29612_30997);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29613_30998);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count29614_30999 = (0);
var alis_31000__$1 = cljs.core.next(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29614_30999 < cljs.core._STAR_print_length_STAR_)))){
if(alis_31000__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29615_31001 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29616_31002 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29617_31003 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29618_31004 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29617_31003);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29618_31004);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_31000__$1));

if(cljs.core.next(alis_31000__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_31000__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29616_31002);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29615_31001);
}}


if(cljs.core.next(cljs.core.rest(alis_31000__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31005 = (length_count29614_30999 + (1));
var G__31006 = cljs.core.next(cljs.core.rest(alis_31000__$1));
length_count29614_30999 = G__31005;
alis_31000__$1 = G__31006;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29611_30996);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29610_30995);
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29623_31007 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29624_31008 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29625_31009 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29626_31010 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29625_31009);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29626_31010);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__27298__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__31011__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__31011 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__31012__i = 0, G__31012__a = new Array(arguments.length -  0);
while (G__31012__i < G__31012__a.length) {G__31012__a[G__31012__i] = arguments[G__31012__i + 0]; ++G__31012__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__31012__a,0,null);
} 
return G__31011__delegate.call(this,args__27300__auto__);};
G__31011.cljs$lang$maxFixedArity = 0;
G__31011.cljs$lang$applyTo = (function (arglist__31013){
var args__27300__auto__ = cljs.core.seq(arglist__31013);
return G__31011__delegate(args__27300__auto__);
});
G__31011.cljs$core$IFn$_invoke$arity$variadic = G__31011__delegate;
return G__31011;
})()
;
})(),alis);

var length_count29628_31014 = (0);
var alis_31015__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29628_31014 < cljs.core._STAR_print_length_STAR_)))){
if(alis_31015__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29629_31016 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29630_31017 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29631_31018 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29632_31019 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29631_31018);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29632_31019);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_31015__$1));

if(cljs.core.next(alis_31015__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_31015__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29630_31017);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29629_31016);
}}


if(cljs.core.next(cljs.core.rest(alis_31015__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31020 = (length_count29628_31014 + (1));
var G__31021 = cljs.core.next(cljs.core.rest(alis_31015__$1));
length_count29628_31014 = G__31020;
alis_31015__$1 = G__31021;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29624_31008);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29623_31007);
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR__orig_val__29638 = cljs.pprint._STAR_symbol_map_STAR_;
var _STAR_symbol_map_STAR__temp_val__29639 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29636_SHARP_,p2__29637_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__29636_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__29637_SHARP_)].join('')],null));
}),args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));
(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__temp_val__29639);

try{return (function (){var format_in__27298__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__27299__auto__ = ((typeof format_in__27298__auto__ === 'string')?cljs.pprint.cached_compile(format_in__27298__auto__):format_in__27298__auto__);
return (function() { 
var G__31022__delegate = function (args__27300__auto__){
var navigator__27301__auto__ = cljs.pprint.init_navigator(args__27300__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__27299__auto__,navigator__27301__auto__);
};
var G__31022 = function (var_args){
var args__27300__auto__ = null;
if (arguments.length > 0) {
var G__31023__i = 0, G__31023__a = new Array(arguments.length -  0);
while (G__31023__i < G__31023__a.length) {G__31023__a[G__31023__i] = arguments[G__31023__i + 0]; ++G__31023__i;}
  args__27300__auto__ = new cljs.core.IndexedSeq(G__31023__a,0,null);
} 
return G__31022__delegate.call(this,args__27300__auto__);};
G__31022.cljs$lang$maxFixedArity = 0;
G__31022.cljs$lang$applyTo = (function (arglist__31024){
var args__27300__auto__ = cljs.core.seq(arglist__31024);
return G__31022__delegate(args__27300__auto__);
});
G__31022.cljs$core$IFn$_invoke$arity$variadic = G__31022__delegate;
return G__31022;
})()
;
})()(nlis);
}finally {(cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR__orig_val__29638);
}} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR__orig_val__29642_31025 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR__orig_val__29643_31026 = cljs.pprint._STAR_current_length_STAR_;
var _STAR_current_level_STAR__temp_val__29644_31027 = (cljs.pprint._STAR_current_level_STAR_ + (1));
var _STAR_current_length_STAR__temp_val__29645_31028 = (0);
(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__temp_val__29644_31027);

(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__temp_val__29645_31028);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count29646_31029 = (0);
var alis_31030__$1 = cljs.core.seq(alis);
while(true){
if(((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count29646_31029 < cljs.core._STAR_print_length_STAR_)))){
if(alis_31030__$1){
cljs.pprint.write_out(cljs.core.first(alis_31030__$1));

if(cljs.core.next(alis_31030__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__31031 = (length_count29646_31029 + (1));
var G__31032 = cljs.core.next(alis_31030__$1);
length_count29646_31029 = G__31031;
alis_31030__$1 = G__31032;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {(cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR__orig_val__29643_31026);

(cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR__orig_val__29642_31025);
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function cljs$pprint$two_forms_$_iter__29651(s__29652){
return (new cljs.core.LazySeq(null,(function (){
var s__29652__$1 = s__29652;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29652__$1);
if(temp__5735__auto__){
var s__29652__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29652__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29652__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29654 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29653 = (0);
while(true){
if((i__29653 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__29653);
cljs.core.chunk_append(b__29654,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__31037 = (i__29653 + (1));
i__29653 = G__31037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29654),cljs$pprint$two_forms_$_iter__29651(cljs.core.chunk_rest(s__29652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29654),null);
}
} else {
var x = cljs.core.first(s__29652__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__29651(cljs.core.rest(s__29652__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29661_SHARP_){
var vec__29665 = p1__29661_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29665,(1),null);
if(cljs.core.not((function (){var or__4126__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__29661_SHARP_;
}
}),amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__5733__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first(alis));
if(cljs.core.truth_(temp__5733__auto__)){
var special_form = temp__5733__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5733__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__5733__auto__)){
var arg_num = temp__5733__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__29674 = cljs.core.get_global_hierarchy;
return (fexpr__29674.cljs$core$IFn$_invoke$arity$0 ? fexpr__29674.cljs$core$IFn$_invoke$arity$0() : fexpr__29674.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (width - cljs.core.count(s));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__29689 = arguments.length;
switch (G__29689) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,((cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)).length),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29684_SHARP_){
return ((cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__29684_SHARP_,k))).length);
}),rows));
}),ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29685_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__29685_SHARP_,"-"));
}),widths);
var fmt_row = (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4529__auto__ = (function cljs$pprint$iter__29713(s__29714){
return (new cljs.core.LazySeq(null,(function (){
var s__29714__$1 = s__29714;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29714__$1);
if(temp__5735__auto__){
var s__29714__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29714__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29714__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29716 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29715 = (0);
while(true){
if((i__29715 < size__4528__auto__)){
var vec__29717 = cljs.core._nth(c__4527__auto__,i__29715);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(1),null);
cljs.core.chunk_append(b__29716,cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)));

var G__31049 = (i__29715 + (1));
i__29715 = G__31049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29716),cljs$pprint$iter__29713(cljs.core.chunk_rest(s__29714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29716),null);
}
} else {
var vec__29720 = cljs.core.first(s__29714__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29720,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29720,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)),cljs$pprint$iter__29713(cljs.core.rest(s__29714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29686_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__29686_SHARP_);
}),ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__29724 = cljs.core.seq(rows);
var chunk__29725 = null;
var count__29726 = (0);
var i__29727 = (0);
while(true){
if((i__29727 < count__29726)){
var row = chunk__29725.cljs$core$IIndexed$_nth$arity$2(null,i__29727);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__31050 = seq__29724;
var G__31051 = chunk__29725;
var G__31052 = count__29726;
var G__31053 = (i__29727 + (1));
seq__29724 = G__31050;
chunk__29725 = G__31051;
count__29726 = G__31052;
i__29727 = G__31053;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__29724);
if(temp__5735__auto__){
var seq__29724__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29724__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__29724__$1);
var G__31054 = cljs.core.chunk_rest(seq__29724__$1);
var G__31055 = c__4556__auto__;
var G__31056 = cljs.core.count(c__4556__auto__);
var G__31057 = (0);
seq__29724 = G__31054;
chunk__29725 = G__31055;
count__29726 = G__31056;
i__29727 = G__31057;
continue;
} else {
var row = cljs.core.first(seq__29724__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));


var G__31058 = cljs.core.next(seq__29724__$1);
var G__31059 = null;
var G__31060 = (0);
var G__31061 = (0);
seq__29724 = G__31058;
chunk__29725 = G__31059;
count__29726 = G__31060;
i__29727 = G__31061;
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
}));

(cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
}));

(cljs.pprint.print_table.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cljs.pprint.js.map
