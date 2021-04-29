goog.provide('exfn.parser');
exfn.parser.is_register_QMARK_ = (function exfn$parser$is_register_QMARK_(x){
return (cljs.core.re_find(/^[\+\-]?\d*\.?[\+\-]?\d*$/,x) == null);
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
<<<<<<< HEAD
var G__35238 = cljs.core.rest(to_parse);
var G__35239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,current_string);
var G__35240 = false;
var G__35241 = "";
to_parse = G__35238;
res = G__35239;
in_quote_QMARK_ = G__35240;
current_string = G__35241;
=======
var G__30017 = cljs.core.rest(to_parse);
var G__30018 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,current_string);
var G__30019 = false;
var G__30020 = "";
to_parse = G__30017;
res = G__30018;
in_quote_QMARK_ = G__30019;
current_string = G__30020;
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
continue;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_quote_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,"'");
} else {
return and__4115__auto__;
}
})())){
<<<<<<< HEAD
var G__35242 = cljs.core.rest(to_parse);
var G__35243 = res;
var G__35244 = in_quote_QMARK_;
var G__35245 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__35242;
res = G__35243;
in_quote_QMARK_ = G__35244;
current_string = G__35245;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'")))){
var G__35246 = cljs.core.rest(to_parse);
var G__35247 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current_string))?res:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string)));
var G__35248 = true;
var G__35249 = "";
to_parse = G__35246;
res = G__35247;
in_quote_QMARK_ = G__35248;
current_string = G__35249;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i," ")))){
var G__35250 = cljs.core.rest(to_parse);
var G__35251 = res;
var G__35252 = in_quote_QMARK_;
var G__35253 = current_string;
to_parse = G__35250;
res = G__35251;
in_quote_QMARK_ = G__35252;
current_string = G__35253;
=======
var G__30021 = cljs.core.rest(to_parse);
var G__30022 = res;
var G__30023 = in_quote_QMARK_;
var G__30024 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__30021;
res = G__30022;
in_quote_QMARK_ = G__30023;
current_string = G__30024;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'")))){
var G__30025 = cljs.core.rest(to_parse);
var G__30026 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current_string))?res:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string)));
var G__30027 = true;
var G__30028 = "";
to_parse = G__30025;
res = G__30026;
in_quote_QMARK_ = G__30027;
current_string = G__30028;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i," ")))){
var G__30029 = cljs.core.rest(to_parse);
var G__30030 = res;
var G__30031 = in_quote_QMARK_;
var G__30032 = current_string;
to_parse = G__30029;
res = G__30030;
in_quote_QMARK_ = G__30031;
current_string = G__30032;
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,";")))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string));
} else {
<<<<<<< HEAD
var G__35254 = cljs.core.rest(to_parse);
var G__35255 = res;
var G__35256 = in_quote_QMARK_;
var G__35257 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__35254;
res = G__35255;
in_quote_QMARK_ = G__35256;
current_string = G__35257;
=======
var G__30033 = cljs.core.rest(to_parse);
var G__30034 = res;
var G__30035 = in_quote_QMARK_;
var G__30036 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__30033;
res = G__30034;
in_quote_QMARK_ = G__30035;
current_string = G__30036;
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
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
<<<<<<< HEAD
var vec__35231 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(instructions,/ /);
var instruction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231,(0),null);
var op1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231,(1),null);
var op2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35231,(2),null);
=======
var vec__30010 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(instructions,/ /);
var instruction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(0),null);
var op1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(1),null);
var op2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30010,(2),null);
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("msg",instruction)){
return exfn.parser.parse_msg(instructions);
} else {
if((((op1 == null)) && ((op2 == null)) && (clojure.string.ends_with_QMARK_(instruction,":")))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(exfn.parser.drop_last_char(instruction))], null);
} else {
<<<<<<< HEAD
var G__35234 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instruction)], null);
var G__35234__$1 = (((!((op1 == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35234,exfn.parser.get_value(op1)):G__35234);
if((!((op2 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35234__$1,exfn.parser.get_value(op2));
} else {
return G__35234__$1;
=======
var G__30013 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instruction)], null);
var G__30013__$1 = (((!((op1 == null))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30013,exfn.parser.get_value(op1)):G__30013);
if((!((op2 == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30013__$1,exfn.parser.get_value(op2));
} else {
return G__30013__$1;
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
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
<<<<<<< HEAD
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.to_keywords,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35237_SHARP_){
return clojure.string.starts_with_QMARK_(p1__35237_SHARP_,";");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35236_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__35236_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.scrub_comments,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35235_SHARP_){
return clojure.string.trimr(clojure.string.triml(p1__35235_SHARP_));
=======
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.to_keywords,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30016_SHARP_){
return clojure.string.starts_with_QMARK_(p1__30016_SHARP_,";");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30015_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__30015_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.scrub_comments,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30014_SHARP_){
return clojure.string.trimr(clojure.string.triml(p1__30014_SHARP_));
>>>>>>> 7c6035e4298a1da3cc9f8039115d74e442a71da9
}),clojure.string.split_lines(asm))))));
});

//# sourceMappingURL=exfn.parser.js.map
