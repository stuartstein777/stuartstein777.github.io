goog.provide('exfn.maths.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-gcd-values","set-gcd-values",-778612014),(function (db,p__15315){
var vec__15316 = p__15315;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15316,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-gcd","calculate-gcd",-728753712),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)) : db.call(null,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-result","math/gcd-result",-1967132144),exfn.maths.logic.greatest_common_divisor(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lcm-values","set-lcm-values",-393966295),(function (db,p__15319){
var vec__15320 = p__15319;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15320,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-lcm","calculate-lcm",-940994705),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)) : db.call(null,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-result","math/lcm-result",-1364549331),exfn.maths.logic.least_common_multiple(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-prime-value","set-is-prime-value",86146448),(function (db,p__15323){
var vec__15324 = p__15323;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15324,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-is-prime","check-is-prime",1100623584),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-result","math/is-prime-result",-1788587587),exfn.maths.logic.is_prime_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)) : db.call(null,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-pentagonal-value","set-is-pentagonal-value",-1977388052),(function (db,p__15327){
var vec__15328 = p__15327;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15328,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-is-pentagonal","check-is-pentagonal",-1634781351),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-pentagonal-result","math/is-pentagonal-result",-2099005836),exfn.maths.logic.is_pentagonal_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)) : db.call(null,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688))))),new cljs.core.Keyword("math","is-generalised-pentagonal-result","math/is-generalised-pentagonal-result",-1123436362),exfn.maths.logic.is_generalised_pentagonal_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)) : db.call(null,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)))));
}));

//# sourceMappingURL=exfn.maths.events.js.map
