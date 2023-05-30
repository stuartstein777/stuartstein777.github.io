goog.provide('exfn.month.logic');
exfn.month.logic.custom_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("dd-MM-yyyy");
exfn.month.logic.month_no__GT_string = (function exfn$month$logic$month_no__GT_string(month){
var pred__19896 = cljs.core._EQ_;
var expr__19897 = month;
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((1),expr__19897) : pred__19896.call(null,(1),expr__19897)))){
return "January";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((2),expr__19897) : pred__19896.call(null,(2),expr__19897)))){
return "February";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((3),expr__19897) : pred__19896.call(null,(3),expr__19897)))){
return "March";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((4),expr__19897) : pred__19896.call(null,(4),expr__19897)))){
return "April";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((5),expr__19897) : pred__19896.call(null,(5),expr__19897)))){
return "May";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((6),expr__19897) : pred__19896.call(null,(6),expr__19897)))){
return "June";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((7),expr__19897) : pred__19896.call(null,(7),expr__19897)))){
return "July";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((8),expr__19897) : pred__19896.call(null,(8),expr__19897)))){
return "August";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((9),expr__19897) : pred__19896.call(null,(9),expr__19897)))){
return "September";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((10),expr__19897) : pred__19896.call(null,(10),expr__19897)))){
return "October";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((11),expr__19897) : pred__19896.call(null,(11),expr__19897)))){
return "November";
} else {
if(cljs.core.truth_((pred__19896.cljs$core$IFn$_invoke$arity$2 ? pred__19896.cljs$core$IFn$_invoke$arity$2((12),expr__19897) : pred__19896.call(null,(12),expr__19897)))){
return "December";
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19897)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}
});
exfn.month.logic.format_date_for_request = (function exfn$month$logic$format_date_for_request(year,month,day){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((day < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)].join(''):day)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((month < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)].join(''):month)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
exfn.month.logic.format_date = (function exfn$month$logic$format_date(date){
if((date == null)){
return "-";
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.re_matches(/^\d{4}-\d{2}-\d{2}$/,date);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.re_matches(/^\d{4}-\d{2}-\d{2}T00:00:00/,date);
}
})())){
return cljs_time.format.unparse(exfn.month.logic.custom_formatter,cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(date,(0),(10))));
} else {
return date;
}
}
});
exfn.month.logic.calculate_totals = (function exfn$month$logic$calculate_totals(transactions,field){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(field,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19899_SHARP_){
return ((field.cljs$core$IFn$_invoke$arity$1 ? field.cljs$core$IFn$_invoke$arity$1(p1__19899_SHARP_) : field.call(null,p1__19899_SHARP_)) == null);
}),transactions)));
});
exfn.month.logic.is_leap_year = (function exfn$month$logic$is_leap_year(year){
return (((cljs.core.mod(year,(400)) === (0))) || (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.mod(year,(100)))) && ((cljs.core.mod(year,(4)) === (0))))));
});
exfn.month.logic.get_days_of_month = (function exfn$month$logic$get_days_of_month(year,month){
var pred__19900 = cljs.core._EQ_;
var expr__19901 = month;
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((1),expr__19901) : pred__19900.call(null,(1),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((2),expr__19901) : pred__19900.call(null,(2),expr__19901)))){
if(exfn.month.logic.is_leap_year(year)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(30));
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29));
}
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((3),expr__19901) : pred__19900.call(null,(3),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((4),expr__19901) : pred__19900.call(null,(4),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((5),expr__19901) : pred__19900.call(null,(5),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((6),expr__19901) : pred__19900.call(null,(6),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((7),expr__19901) : pred__19900.call(null,(7),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((8),expr__19901) : pred__19900.call(null,(8),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((9),expr__19901) : pred__19900.call(null,(9),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((10),expr__19901) : pred__19900.call(null,(10),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((11),expr__19901) : pred__19900.call(null,(11),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(31));
} else {
if(cljs.core.truth_((pred__19900.cljs$core$IFn$_invoke$arity$2 ? pred__19900.cljs$core$IFn$_invoke$arity$2((12),expr__19901) : pred__19900.call(null,(12),expr__19901)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(32));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19901)].join('')));
}
}
}
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=exfn.month.logic.js.map
