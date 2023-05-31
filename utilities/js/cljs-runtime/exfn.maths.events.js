goog.provide('exfn.maths.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-gcd-values","set-gcd-values",-778612014),(function (db,p__15395){
var vec__15396 = p__15395;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15396,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-gcd","calculate-gcd",-728753712),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)) : db.call(null,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-result","math/gcd-result",-1967132144),exfn.maths.logic.greatest_common_divisor(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lcm-values","set-lcm-values",-393966295),(function (db,p__15399){
var vec__15400 = p__15399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15400,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15400,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-lcm","calculate-lcm",-940994705),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)) : db.call(null,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-result","math/lcm-result",-1364549331),exfn.maths.logic.least_common_multiple(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-prime-value","set-is-prime-value",86146448),(function (db,p__15403){
var vec__15404 = p__15403;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15404,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-is-prime","check-is-prime",1100623584),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-result","math/is-prime-result",-1788587587),exfn.maths.logic.is_prime_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)) : db.call(null,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)))));
}));

//# sourceMappingURL=exfn.maths.events.js.map
