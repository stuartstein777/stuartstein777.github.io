goog.provide('exfn.maths.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-gcd-values","set-gcd-values",-778612014),(function (db,p__16181){
var vec__16182 = p__16181;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16182,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-gcd","calculate-gcd",-728753712),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)) : db.call(null,new cljs.core.Keyword("math","gcd-values","math/gcd-values",1098530563)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","gcd-result","math/gcd-result",-1967132144),exfn.maths.logic.greatest_common_divisor(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-lcm-values","set-lcm-values",-393966295),(function (db,p__16185){
var vec__16186 = p__16185;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186,(0),null);
var gcd_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16186,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861),gcd_values);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-lcm","calculate-lcm",-940994705),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)) : db.call(null,new cljs.core.Keyword("math","lcm-values","math/lcm-values",-2134856861)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$1);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","lcm-result","math/lcm-result",-1364549331),exfn.maths.logic.least_common_multiple(values));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-prime-value","set-is-prime-value",86146448),(function (db,p__16189){
var vec__16190 = p__16189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16190,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-is-prime","check-is-prime",1100623584),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-prime-result","math/is-prime-result",-1788587587),exfn.maths.logic.is_prime_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)) : db.call(null,new cljs.core.Keyword("math","is-prime-value","math/is-prime-value",-138408109)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-is-pentagonal-value","set-is-pentagonal-value",-1977388052),(function (db,p__16193){
var vec__16194 = p__16193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16194,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-is-pentagonal","check-is-pentagonal",-1634781351),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","is-pentagonal-result","math/is-pentagonal-result",-2099005836),exfn.maths.logic.is_pentagonal_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)) : db.call(null,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688))))),new cljs.core.Keyword("math","is-generalised-pentagonal-result","math/is-generalised-pentagonal-result",-1123436362),exfn.maths.logic.is_generalised_pentagonal_QMARK_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)) : db.call(null,new cljs.core.Keyword("math","is-pentagonal-value","math/is-pentagonal-value",-1905329688)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-stats-values","set-stats-values",1588535779),(function (db,p__16197){
var vec__16198 = p__16197;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","stats-values","math/stats-values",56782346),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"calculate-stats","calculate-stats",1771511209),(function (db,_){
var values = (function (){var o = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("math","stats-values","math/stats-values",56782346)) : db.call(null,new cljs.core.Keyword("math","stats-values","math/stats-values",56782346)));
var o__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(o,/ /);
var o__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__16201_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__16201_SHARP_);
}),o__$1);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.parse_long,o__$2);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("math","stats","math/stats",-87022027),exfn.maths.logic.calculate_stats(values));
}));

//# sourceMappingURL=exfn.maths.events.js.map
