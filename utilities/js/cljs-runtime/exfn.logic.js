goog.provide('exfn.logic');
exfn.logic.prime_factorization = (function exfn$logic$prime_factorization(n){
var num = n;
var div = (2);
var factors = cljs.core.PersistentVector.EMPTY;
while(true){
if((div <= Math.sqrt(num))){
if((cljs.core.rem(num,div) === (0))){
var G__16644 = (num / div);
var G__16645 = div;
var G__16646 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,div);
num = G__16644;
div = G__16645;
factors = G__16646;
continue;
} else {
var G__16647 = num;
var G__16648 = (div + (1));
var G__16649 = factors;
num = G__16647;
div = G__16648;
factors = G__16649;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(factors,num);
}
break;
}
});

//# sourceMappingURL=exfn.logic.js.map
