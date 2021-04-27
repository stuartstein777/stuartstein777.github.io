goog.provide('exfn.parser');
exfn.parser.is_register_QMARK_ = (function exfn$parser$is_register_QMARK_(x){
return (cljs.core.re_find(/^[\+\-]?\d*\.?[Ee]?[\+\-]?\d*$/,x) == null);
});
exfn.parser.get_value = (function exfn$parser$get_value(x){
if(exfn.parser.is_register_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return Number(x);
}
});
exfn.parser.parse_msg = (function exfn$parser$parse_msg(instruction){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(instruction,(0),(3)))], null),(function (){var input = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(instruction,(4)));
var to_parse = input;
var res = cljs.core.PersistentVector.EMPTY;
var in_quote_QMARK_ = false;
var current_string = "";
while(true){
var i = cljs.core.first(to_parse);
if(cljs.core.empty_QMARK_(to_parse)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_quote_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'");
} else {
return and__4115__auto__;
}
})())){
var G__30091 = cljs.core.rest(to_parse);
var G__30092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,current_string);
var G__30093 = false;
var G__30094 = "";
to_parse = G__30091;
res = G__30092;
in_quote_QMARK_ = G__30093;
current_string = G__30094;
continue;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_quote_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,"'");
} else {
return and__4115__auto__;
}
})())){
var G__30095 = cljs.core.rest(to_parse);
var G__30096 = res;
var G__30097 = in_quote_QMARK_;
var G__30098 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__30095;
res = G__30096;
in_quote_QMARK_ = G__30097;
current_string = G__30098;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'")))){
var G__30099 = cljs.core.rest(to_parse);
var G__30100 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current_string))?res:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string)));
var G__30101 = true;
var G__30102 = "";
to_parse = G__30099;
res = G__30100;
in_quote_QMARK_ = G__30101;
current_string = G__30102;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i," ")))){
var G__30103 = cljs.core.rest(to_parse);
var G__30104 = res;
var G__30105 = in_quote_QMARK_;
var G__30106 = current_string;
to_parse = G__30103;
res = G__30104;
in_quote_QMARK_ = G__30105;
current_string = G__30106;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,";")))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string));
} else {
var G__30107 = cljs.core.rest(to_parse);
var G__30108 = res;
var G__30109 = in_quote_QMARK_;
var G__30110 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__30107;
res = G__30108;
in_quote_QMARK_ = G__30109;
current_string = G__30110;
continue;

}
}
}
}
}
}
break;
}
})());
});
exfn.parser.drop_last_char = (function exfn$parser$drop_last_char(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
});
exfn.parser.to_keywords = (function exfn$parser$to_keywords(instructions){
var vec__30084 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(instructions,/ /);
var instruction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084,(0),null);
var op1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084,(1),null);
var op2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30084,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("msg",instruction)){
return exfn.parser.parse_msg(instructions);
} else {
if((((op1 == null)) && ((op2 == null)) && (clojure.string.ends_with_QMARK_(instruction,":")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(exfn.parser.drop_last_char(instruction))], null);
} else {
var G__30087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instruction)], null);
var G__30087__$1 = (((!((op1 == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30087,exfn.parser.get_value(op1)):G__30087);
if((!((op2 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30087__$1,exfn.parser.get_value(op2));
} else {
return G__30087__$1;
}

}
}
});
exfn.parser.scrub_comments = (function exfn$parser$scrub_comments(s){
if((((!(clojure.string.starts_with_QMARK_(s,"msg")))) && (clojure.string.includes_QMARK_(s,";")))){
return clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,";")));
} else {
return s;
}
});
exfn.parser.parse = (function exfn$parser$parse(asm){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.to_keywords,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30090_SHARP_){
return clojure.string.starts_with_QMARK_(p1__30090_SHARP_,";");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30089_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__30089_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.scrub_comments,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30088_SHARP_){
return clojure.string.trimr(clojure.string.triml(p1__30088_SHARP_));
}),clojure.string.split_lines(asm))))));
});

//# sourceMappingURL=exfn.parser.js.map
