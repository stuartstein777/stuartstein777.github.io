goog.provide('exfn.premium_bonds.logic');
exfn.premium_bonds.logic.get_balances = (function exfn$premium_bonds$logic$get_balances(premium_bonds){
return cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (pb,b){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pb,new cljs.core.Keyword(null,"balance","balance",418967409),b),new cljs.core.Keyword(null,"narrative","narrative",-1575878033),(function (){var pred__16522 = cljs.core._EQ_;
var expr__16523 = (pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"category","category",-593092832)) : pb.call(null,new cljs.core.Keyword(null,"category","category",-593092832)));
if(cljs.core.truth_((pred__16522.cljs$core$IFn$_invoke$arity$2 ? pred__16522.cljs$core$IFn$_invoke$arity$2((21),expr__16523) : pred__16522.call(null,(21),expr__16523)))){
return "Deposit";
} else {
if(cljs.core.truth_((pred__16522.cljs$core$IFn$_invoke$arity$2 ? pred__16522.cljs$core$IFn$_invoke$arity$2((29),expr__16523) : pred__16522.call(null,(29),expr__16523)))){
return "Withdrawl";
} else {
if(cljs.core.truth_((pred__16522.cljs$core$IFn$_invoke$arity$2 ? pred__16522.cljs$core$IFn$_invoke$arity$2((17),expr__16523) : pred__16522.call(null,(17),expr__16523)))){
return "Prize";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16523)].join('')));
}
}
}
})());
}),premium_bonds,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),premium_bonds))));
});
exfn.premium_bonds.logic.get_total_prizes = (function exfn$premium_bonds$logic$get_total_prizes(premium_bonds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"amount","amount",364489504),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16525_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((17),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__16525_SHARP_));
}),premium_bonds)));
});

//# sourceMappingURL=exfn.premium_bonds.logic.js.map
