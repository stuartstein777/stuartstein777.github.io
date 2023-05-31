goog.provide('exfn.maths.logic');
exfn.maths.logic.gcd = (function exfn$maths$logic$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__15392 = b;
var G__15393 = cljs.core.mod(a,b);
a = G__15392;
b = G__15393;
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
var G__15394 = (i + (1));
i = G__15394;
continue;
}
}
break;
}
}
});

//# sourceMappingURL=exfn.maths.logic.js.map
