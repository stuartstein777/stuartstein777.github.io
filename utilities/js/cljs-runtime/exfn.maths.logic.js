goog.provide('exfn.maths.logic');
exfn.maths.logic.gcd = (function exfn$maths$logic$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__16178 = b;
var G__16179 = cljs.core.mod(a,b);
a = G__16178;
b = G__16179;
continue;
}
break;
}
});
exfn.maths.logic.greatest_common_divisor = (function exfn$maths$logic$greatest_common_divisor(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(exfn.maths.logic.gcd,xs);
});
exfn.maths.logic.lcm = (function exfn$maths$logic$lcm(a,b){
if((a === (0))){
return (0);
} else {
var g = exfn.maths.logic.gcd(a,b);
return ((a * b) / g);
}
});
exfn.maths.logic.least_common_multiple = (function exfn$maths$logic$least_common_multiple(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(exfn.maths.logic.lcm,xs);
});
exfn.maths.logic.is_prime_QMARK_ = (function exfn$maths$logic$is_prime_QMARK_(n){
if((n <= (1))){
return false;
} else {
var i = (2);
while(true){
if((i >= Math.sqrt(n))){
return true;
} else {
if((cljs.core.mod(n,i) === (0))){
return false;
} else {
var G__16180 = (i + (1));
i = G__16180;
continue;
}
}
break;
}
}
});
exfn.maths.logic.is_pentagonal_QMARK_ = (function exfn$maths$logic$is_pentagonal_QMARK_(n){
return (cljs.core.rem(((Math.sqrt(((n * (24)) + (1))) + (1)) / (6)),(1)) === (0));
});
exfn.maths.logic.is_generalised_pentagonal_QMARK_ = (function exfn$maths$logic$is_generalised_pentagonal_QMARK_(n){
if((((n == null)) || ((Number(n) === (0))))){
return false;
} else {
return (cljs.core.rem(((Math.sqrt(((n * (24)) + (1))) + (1)) / (6)),(1)) === (0));
}
});
exfn.maths.logic.median = (function exfn$maths$logic$median(xs){
if(cljs.core.seq(xs)){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs);
var count = cljs.core.count(sorted);
if(cljs.core.odd_QMARK_(count)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,((count / (2)) | (0)));
} else {
return ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,((count / (2)) | (0))) + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sorted,(((count / (2)) | (0)) - (1)))) / (2));
}
} else {
return null;
}
});
exfn.maths.logic.get_range = (function exfn$maths$logic$get_range(xs){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs);
return (((cljs.core.last(sorted) + (1)) - cljs.core.first(sorted)) - (1));
});
exfn.maths.logic.average = (function exfn$maths$logic$average(xs){
if(cljs.core.seq(xs)){
var sum = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
var count = cljs.core.count(xs);
return (sum / count);
} else {
return null;
}
});
exfn.maths.logic.standard_deviation = (function exfn$maths$logic$standard_deviation(xs){
if(cljs.core.seq(xs)){
var cnt = cljs.core.count(xs);
var μ = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs) / cnt);
var squared_diffs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16176_SHARP_){
return Math.pow((p1__16176_SHARP_ - μ),(2));
}),xs);
var variance = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,squared_diffs) / cnt);
return Math.sqrt(variance);
} else {
return null;
}
});
exfn.maths.logic.mode = (function exfn$maths$logic$mode(xs){
if(cljs.core.seq(xs)){
var counts = cljs.core.frequencies(xs);
var max_count = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(counts));
var modes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16177_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.val(p1__16177_SHARP_),max_count);
}),counts);
return cljs.core.keys(modes);
} else {
return null;
}
});
exfn.maths.logic.interquartile_range = (function exfn$maths$logic$interquartile_range(xs){
if((cljs.core.count(xs) > (2))){
var sorted = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs);
var count = cljs.core.count(sorted);
var q1 = exfn.maths.logic.median(cljs.core.take.cljs$core$IFn$_invoke$arity$2((count / (2)),sorted));
var q3 = exfn.maths.logic.median(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((count / (2)),sorted));
return (q3 - q1);
} else {
return null;
}
});
exfn.maths.logic.product = (function exfn$maths$logic$product(xs){
if(cljs.core.seq(xs)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),xs);
} else {
return null;
}
});
exfn.maths.logic.count_within_percentile = (function exfn$maths$logic$count_within_percentile(xs,p){
var sorted_xs = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(xs);
var total_count = cljs.core.count(xs);
var percentile_index = Math.round(((p / (100)) * total_count));
return cljs.core.count(cljs.core.take.cljs$core$IFn$_invoke$arity$2(percentile_index,sorted_xs));
});
exfn.maths.logic.calculate_stats = (function exfn$maths$logic$calculate_stats(xs){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"iqr","iqr",1758816648),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"product","product",1363474257),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"std-deviation","std-deviation",-891200908),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"percentiles","percentiles",-1268827594),new cljs.core.Keyword(null,"average","average",-492356168),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"range","range",1639692286)],[exfn.maths.logic.interquartile_range(xs),exfn.maths.logic.mode(xs),exfn.maths.logic.product(xs),exfn.maths.logic.median(xs),exfn.maths.logic.standard_deviation(xs),cljs.core.count(xs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"10","10",-333527256),exfn.maths.logic.count_within_percentile(xs,(10)),new cljs.core.Keyword(null,"25","25",-1028288238),exfn.maths.logic.count_within_percentile(xs,(25)),new cljs.core.Keyword(null,"50","50",-510472304),exfn.maths.logic.count_within_percentile(xs,(50)),new cljs.core.Keyword(null,"75","75",389757224),exfn.maths.logic.count_within_percentile(xs,(75)),new cljs.core.Keyword(null,"90","90",-1828276392),exfn.maths.logic.count_within_percentile(xs,(90))], null),exfn.maths.logic.average(xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs),exfn.maths.logic.get_range(xs)]);
});
exfn.maths.logic.add_matrices = (function exfn$maths$logic$add_matrices(matrix1,matrix2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,matrix1,matrix2);
});
exfn.maths.logic.subtract_matrices = (function exfn$maths$logic$subtract_matrices(matrix1,matrix2){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,matrix1,matrix2);
});

//# sourceMappingURL=exfn.maths.logic.js.map
