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
var G__45096 = cljs.core.rest(to_parse);
var G__45097 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,current_string);
var G__45098 = false;
var G__45099 = "";
to_parse = G__45096;
res = G__45097;
in_quote_QMARK_ = G__45098;
current_string = G__45099;
continue;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_quote_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,"'");
} else {
return and__4115__auto__;
}
})())){
var G__45100 = cljs.core.rest(to_parse);
var G__45101 = res;
var G__45102 = in_quote_QMARK_;
var G__45103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__45100;
res = G__45101;
in_quote_QMARK_ = G__45102;
current_string = G__45103;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'")))){
var G__45105 = cljs.core.rest(to_parse);
var G__45106 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current_string))?res:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string)));
var G__45107 = true;
var G__45108 = "";
to_parse = G__45105;
res = G__45106;
in_quote_QMARK_ = G__45107;
current_string = G__45108;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i," ")))){
var G__45110 = cljs.core.rest(to_parse);
var G__45111 = res;
var G__45112 = in_quote_QMARK_;
var G__45113 = current_string;
to_parse = G__45110;
res = G__45111;
in_quote_QMARK_ = G__45112;
current_string = G__45113;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,";")))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string));
} else {
var G__45114 = cljs.core.rest(to_parse);
var G__45115 = res;
var G__45116 = in_quote_QMARK_;
var G__45117 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__45114;
res = G__45115;
in_quote_QMARK_ = G__45116;
current_string = G__45117;
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
var vec__45056 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(instructions,/ /);
var instruction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45056,(0),null);
var op1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45056,(1),null);
var op2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45056,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("msg",instruction)){
return exfn.parser.parse_msg(instructions);
} else {
if((((op1 == null)) && ((op2 == null)) && (clojure.string.ends_with_QMARK_(instruction,":")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(exfn.parser.drop_last_char(instruction))], null);
} else {
var G__45061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instruction)], null);
var G__45061__$1 = (((!((op1 == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45061,exfn.parser.get_value(op1)):G__45061);
if((!((op2 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__45061__$1,exfn.parser.get_value(op2));
} else {
return G__45061__$1;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.to_keywords,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45088_SHARP_){
return clojure.string.starts_with_QMARK_(p1__45088_SHARP_,";");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__45087_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.scrub_comments,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45086_SHARP_){
return clojure.string.trimr(clojure.string.triml(p1__45086_SHARP_));
}),clojure.string.split_lines(asm))))));
});

//# sourceMappingURL=exfn.parser.js.map
