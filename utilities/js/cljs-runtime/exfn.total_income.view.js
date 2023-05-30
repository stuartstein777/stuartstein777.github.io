goog.provide('exfn.total_income.view');
exfn.total_income.view.missing_salary_entry = (function exfn$total_income$view$missing_salary_entry(income){
var gross = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var national_insurance = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var student_loan = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var pension = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var tax = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (income__$1){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date(new cljs.core.Keyword(null,"transaction-date","transaction-date",207994004).cljs$core$IFn$_invoke$arity$1(income__$1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.text-end","input.form-control.text-end",-1618009135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(gross),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17313_SHARP_){
return cljs.core.reset_BANG_(gross,p1__17313_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.text-end","input.form-control.text-end",-1618009135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(tax),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17314_SHARP_){
return cljs.core.reset_BANG_(tax,p1__17314_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.text-end","input.form-control.text-end",-1618009135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(national_insurance),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17321_SHARP_){
return cljs.core.reset_BANG_(national_insurance,p1__17321_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.text-end","input.form-control.text-end",-1618009135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(student_loan),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17322_SHARP_){
return cljs.core.reset_BANG_(student_loan,p1__17322_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.text-end","input.form-control.text-end",-1618009135),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(pension),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(80)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__17325_SHARP_){
return cljs.core.reset_BANG_(pension,p1__17325_SHARP_.target.value);
}),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-text","span.input-group-text",-604882300),"\u00A3"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-missing-salary-deductions","save-missing-salary-deductions",-1739967158),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transaction-id","transaction-id",780730677),new cljs.core.Keyword(null,"transaction-id","transaction-id",780730677).cljs$core$IFn$_invoke$arity$1(income__$1),new cljs.core.Keyword(null,"gross","gross",-1024265890),cljs.core.deref(gross),new cljs.core.Keyword(null,"tax","tax",-226525810),cljs.core.deref(tax),new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169),cljs.core.deref(national_insurance),new cljs.core.Keyword(null,"student-loan","student-loan",1010936014),cljs.core.deref(student_loan),new cljs.core.Keyword(null,"pension","pension",-2017712809),cljs.core.deref(pension)], null)], null));
})], null),"Save"], null)], null)], null);
});
});
exfn.total_income.view.view = (function exfn$total_income$view$view(){
var year = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null)));
var incomes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"incomes-report","incomes-report",-320201482)], null)));
var totals = exfn.total_income.logic.totals(incomes);
var missing_salary_deductions = exfn.total_income.logic.missing_salary_deductions(incomes);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.col-md-9.ms-sm-auto.col-lg-10.px-md-4","main.col-md-9.ms-sm-auto.col-lg-10.px-md-4",-49870703),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom","div.d-flex.justify-content-between.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom",688956960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.h2","h1.h2",1073238485),["Total Income - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.error.error_indicator,error,new cljs.core.Keyword(null,"month","month",-1960248533)], null):(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.shared.loading.loading,loading_QMARK_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-hover","table.table.table-sm.table-hover",692093562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#171819",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Date"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Gross"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Tax"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"National Ins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Student Loan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Pension"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),"Net"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$total_income$view$view_$_iter__17355(s__17356){
return (new cljs.core.LazySeq(null,(function (){
var s__17356__$1 = s__17356;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17356__$1);
if(temp__5804__auto__){
var s__17356__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17356__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17356__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17358 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17357 = (0);
while(true){
if((i__17357 < size__5522__auto__)){
var income = cljs.core._nth(c__5521__auto__,i__17357);
cljs.core.chunk_append(b__17358,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date(new cljs.core.Keyword(null,"transaction-date","transaction-date",207994004).cljs$core$IFn$_invoke$arity$1(income))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"category-description","category-description",1321418577).cljs$core$IFn$_invoke$arity$1(income)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"gross","gross",-1024265890).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return exfn.shared.logic.format_number(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(income));
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"tax","tax",-226525810).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"student-loan","student-loan",1010936014).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"pension","pension",-2017712809).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(income))], null)], null));

var G__17411 = (i__17357 + (1));
i__17357 = G__17411;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17358),exfn$total_income$view$view_$_iter__17355(cljs.core.chunk_rest(s__17356__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17358),null);
}
} else {
var income = cljs.core.first(s__17356__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),exfn.month.logic.format_date(new cljs.core.Keyword(null,"transaction-date","transaction-date",207994004).cljs$core$IFn$_invoke$arity$1(income))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"category-description","category-description",1321418577).cljs$core$IFn$_invoke$arity$1(income)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"gross","gross",-1024265890).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return exfn.shared.logic.format_number(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(income));
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"tax","tax",-226525810).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"student-loan","student-loan",1010936014).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),(function (){var or__5045__auto__ = exfn.shared.logic.format_number(new cljs.core.Keyword(null,"pension","pension",-2017712809).cljs$core$IFn$_invoke$arity$1(income));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "-";
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(new cljs.core.Keyword(null,"amount","amount",364489504).cljs$core$IFn$_invoke$arity$1(income))], null)], null),exfn$total_income$view$view_$_iter__17355(cljs.core.rest(s__17356__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(incomes);
})(),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.total-row","tr.total-row",1757449698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gross","gross",-1024265890)) : totals.call(null,new cljs.core.Keyword(null,"gross","gross",-1024265890))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tax","tax",-226525810)) : totals.call(null,new cljs.core.Keyword(null,"tax","tax",-226525810))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169)) : totals.call(null,new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"student-loan","student-loan",1010936014)) : totals.call(null,new cljs.core.Keyword(null,"student-loan","student-loan",1010936014))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pension","pension",-2017712809)) : totals.call(null,new cljs.core.Keyword(null,"pension","pension",-2017712809))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"amount","amount",364489504)) : totals.call(null,new cljs.core.Keyword(null,"amount","amount",364489504))))], null)], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bolder","bolder",1296463273)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Total Deductions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"(Tax, NI, Pension, Student Loan)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.amount-col","td.amount-col",-1661582213),exfn.shared.logic.format_number(((((totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tax","tax",-226525810)) : totals.call(null,new cljs.core.Keyword(null,"tax","tax",-226525810))) + (totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169)) : totals.call(null,new cljs.core.Keyword(null,"national-insurance","national-insurance",-1186097169)))) + (totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"student-loan","student-loan",1010936014)) : totals.call(null,new cljs.core.Keyword(null,"student-loan","student-loan",1010936014)))) + (totals.cljs$core$IFn$_invoke$arity$1 ? totals.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pension","pension",-2017712809)) : totals.call(null,new cljs.core.Keyword(null,"pension","pension",-2017712809)))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null)], null)], null)], null)
))], null),(((cljs.core.count(missing_salary_deductions) > (0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Missing Salary Deductions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-sm.table-hover","table.table.table-sm.table-hover",692093562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"75%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Gross"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Tax"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"National Ins."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Student Loan"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Pension"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5523__auto__ = (function exfn$total_income$view$view_$_iter__17373(s__17374){
return (new cljs.core.LazySeq(null,(function (){
var s__17374__$1 = s__17374;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17374__$1);
if(temp__5804__auto__){
var s__17374__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17374__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17374__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17376 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17375 = (0);
while(true){
if((i__17375 < size__5522__auto__)){
var income = cljs.core._nth(c__5521__auto__,i__17375);
cljs.core.chunk_append(b__17376,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.total_income.view.missing_salary_entry,income], null));

var G__17420 = (i__17375 + (1));
i__17375 = G__17420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17376),exfn$total_income$view$view_$_iter__17373(cljs.core.chunk_rest(s__17374__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17376),null);
}
} else {
var income = cljs.core.first(s__17374__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.total_income.view.missing_salary_entry,income], null),exfn$total_income$view$view_$_iter__17373(cljs.core.rest(s__17374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(missing_salary_deductions);
})()], null)], null)], null)], null):null)], null);
});

//# sourceMappingURL=exfn.total_income.view.js.map
