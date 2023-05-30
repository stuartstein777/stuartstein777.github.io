goog.provide('exfn.maths.logic');
exfn.maths.logic.gcd = (function exfn$maths$logic$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__16289 = b;
var G__16290 = cljs.core.mod(a,b);
a = G__16289;
b = G__16290;
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

//# sourceMappingURL=exfn.maths.logic.js.map
