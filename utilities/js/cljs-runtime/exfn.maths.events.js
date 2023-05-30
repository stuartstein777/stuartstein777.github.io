goog.provide('exfn.maths.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-gcd-values","set-gcd-values",-778612014),(function (db,p__16291){
var vec__16292 = p__16291;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16292,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16292,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"gcd-values","gcd-values",1095194091),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-gcd","calculate-gcd",-728753712),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gcd-values","gcd-values",1095194091)) : db.call(null,new cljs.core.Keyword(null,"gcd-values","gcd-values",1095194091)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-result","math/gcd-result",-1967132144),exfn.maths.logic.greatest_common_divisor(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lcm-values","set-lcm-values",-393966295),(function (db,p__16295){
var vec__16296 = p__16295;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16296,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"lcm-values","lcm-values",-2131655589),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-lcm","calculate-lcm",-940994705),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"lcm-values","lcm-values",-2131655589)) : db.call(null,new cljs.core.Keyword(null,"lcm-values","lcm-values",-2131655589)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-result","math/lcm-result",-1364549331),exfn.maths.logic.least_common_multiple(values));
}));

//# sourceMappingURL=exfn.maths.events.js.map
