goog.provide('exfn.maths.logic');
exfn.maths.logic.gcd = (function exfn$maths$logic$gcd(a,b){
while(true){
if((b === (0))){
return a;
} else {
var G__16653 = b;
var G__16654 = cljs.core.mod(a,b);
a = G__16653;
b = G__16654;
continue;
}
break;
}
});
exfn.maths.logic.greatest_common_divisor = (function exfn$maths$logic$greatest_common_divisor(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(exfn.maths.logic.gcd,xs);
});

//# sourceMappingURL=exfn.maths.logic.js.map
