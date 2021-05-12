goog.provide('exfn.parser');
exfn.parser.is_register_QMARK_ = (function exfn$parser$is_register_QMARK_(x){
return cljs.core.boolean$(clojure.string.starts_with_QMARK_(x,":"));
});
exfn.parser.get_value = (function exfn$parser$get_value(x){
if(exfn.parser.is_register_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(1)));
} else {
return x;
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
var G__34484 = cljs.core.rest(to_parse);
var G__34485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,current_string);
var G__34486 = false;
var G__34487 = "";
to_parse = G__34484;
res = G__34485;
in_quote_QMARK_ = G__34486;
current_string = G__34487;
continue;
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = in_quote_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,"'");
} else {
return and__4115__auto__;
}
})())){
var G__34488 = cljs.core.rest(to_parse);
var G__34489 = res;
var G__34490 = in_quote_QMARK_;
var G__34491 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__34488;
res = G__34489;
in_quote_QMARK_ = G__34490;
current_string = G__34491;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"'")))){
var G__34492 = cljs.core.rest(to_parse);
var G__34493 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",current_string))?res:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string)));
var G__34494 = true;
var G__34495 = "";
to_parse = G__34492;
res = G__34493;
in_quote_QMARK_ = G__34494;
current_string = G__34495;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i," ")))){
var G__34496 = cljs.core.rest(to_parse);
var G__34497 = res;
var G__34498 = in_quote_QMARK_;
var G__34499 = current_string;
to_parse = G__34496;
res = G__34497;
in_quote_QMARK_ = G__34498;
current_string = G__34499;
continue;
} else {
if(((cljs.core.not(in_quote_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,";")))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,exfn.parser.get_value(current_string));
} else {
var G__34500 = cljs.core.rest(to_parse);
var G__34501 = res;
var G__34502 = in_quote_QMARK_;
var G__34503 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_string),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
to_parse = G__34500;
res = G__34501;
in_quote_QMARK_ = G__34502;
current_string = G__34503;
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
exfn.parser.format_arg = (function exfn$parser$format_arg(arg){
if(exfn.parser.is_register_QMARK_(arg)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arg,(1)));
} else {
if(cljs.core.truth_(cljs.core.re_find(/(\d+)/,arg))){
return Number(arg);
} else {
if(((clojure.string.starts_with_QMARK_(arg,"'")) || (clojure.string.starts_with_QMARK_(arg,"`")))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(arg,(1),(cljs.core.count(arg) - (1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg);

}
}
}
});
exfn.parser.format_arguments = (function exfn$parser$format_arguments(p__34469){
var vec__34470 = p__34469;
var instruction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(0),null);
var arg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(1),null);
var arg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,(2),null);
var G__34473 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(instruction)], null);
var G__34473__$1 = (cljs.core.truth_(arg1)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__34473,exfn.parser.format_arg(arg1)):G__34473);
if((((!((arg2 == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",arg2)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__34473__$1,exfn.parser.format_arg(arg2));
} else {
return G__34473__$1;
}
});
exfn.parser.get_first_arg = (function exfn$parser$get_first_arg(args){
if(clojure.string.starts_with_QMARK_(args,":")){
return cljs.core.first(cljs.core.re_find(/^(\:\w+)/,args));
} else {
if(clojure.string.starts_with_QMARK_(args,"`")){
return cljs.core.first(cljs.core.re_find(/([`])(?:(?=(\\?))\2.)*?\1/,args));
} else {
if(clojure.string.starts_with_QMARK_(args,"'")){
return cljs.core.first(cljs.core.re_find(/(['])(?:(?=(\\?))\2.)*?\1/,args));
} else {
if(cljs.core.truth_(cljs.core.re_find(/^\d/,args))){
return cljs.core.first(cljs.core.re_find(/(\d+)/,args));
} else {
return cljs.core.first(cljs.core.re_find(/(\w+)/,args));

}
}
}
}
});
exfn.parser.parse_line_of_code = (function exfn$parser$parse_line_of_code(line){
if(cljs.core.truth_(cljs.core.re_find(/\w+:$/,line))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,(0),(cljs.core.count(line) - (1))))], null);
} else {
var instruction = cljs.core.first(cljs.core.re_find(/^(\w+)/,line));
var args = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(cljs.core.count(instruction) + (1)));
var first_arg = exfn.parser.get_first_arg(args);
var second_arg = clojure.string.trim(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(args,cljs.core.count(first_arg)));
return exfn.parser.format_arguments((((((first_arg == null)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(second_arg,""))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruction], null):(cljs.core.truth_((function (){var and__4115__auto__ = first_arg;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(second_arg,"");
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruction,first_arg], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [instruction,first_arg,second_arg], null)
)));
}
});
exfn.parser.scrub_comments = (function exfn$parser$scrub_comments(s){
if((((!(clojure.string.starts_with_QMARK_(s,"msg")))) && (clojure.string.includes_QMARK_(s,";")))){
return clojure.string.trimr(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,";")));
} else {
return s;
}
});
exfn.parser.get_macros = (function exfn$parser$get_macros(source){
var macro_start = source.indexOf(".macros");
var macro_end = source.indexOf(".code");
var macros = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34474_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list("%end"),p1__34474_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"%end");
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(((macro_end - (1)) - macro_start),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((macro_start + (1)),source))));
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34475_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__34475_SHARP_,(1));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,macros)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,macros));
});
exfn.parser.get_code = (function exfn$parser$get_code(source){
var code_start = source.indexOf(".code");
var data_start = source.indexOf(".data");
var code_end = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),data_start))?cljs.core.count(source):data_start);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(((code_end - (1)) - code_start),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((code_start + (1)),source));
});
exfn.parser.get_macro_call = (function exfn$parser$get_macro_call(macro_names,line){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34476_SHARP_){
return clojure.string.starts_with_QMARK_(line,p1__34476_SHARP_);
}),macro_names));
});
exfn.parser.get_args = (function exfn$parser$get_args(line){
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34477_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__34477_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.rest(cljs.core.first(cljs.core.re_seq(/\((.*?)\)/,line)))),",")));
if(cljs.core.seq(args)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1)))),args);
} else {
return null;
}
});
exfn.parser.replace_macro_args = (function exfn$parser$replace_macro_args(args,macro_line){
var regex = cljs.core.re_pattern(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.keys(args)));
return clojure.string.replace(macro_line,regex,args);
});
exfn.parser.expand = (function exfn$parser$expand(line,macro){
var args = exfn.parser.get_args(line);
if(cljs.core.truth_(args)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.parser.replace_macro_args,args),macro);
} else {
return macro;
}
});
exfn.parser.macro_expand_line = (function exfn$parser$macro_expand_line(macros,line){
var macro_call = exfn.parser.get_macro_call(cljs.core.keys(macros),line);
if(cljs.core.truth_(macro_call)){
return exfn.parser.expand(line,(macros.cljs$core$IFn$_invoke$arity$1 ? macros.cljs$core$IFn$_invoke$arity$1(macro_call) : macros.call(null,macro_call)));
} else {
return (new cljs.core.List(null,line,null,(1),null));
}
});
exfn.parser.macro_expand_code = (function exfn$parser$macro_expand_code(code,macros){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.parser.macro_expand_line,macros),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code], 0));
});
exfn.parser.verify_macros = (function exfn$parser$verify_macros(macros){
return true;
});
exfn.parser.get_data = (function exfn$parser$get_data(source){
var data_start = source.indexOf(".data");
var data_end = cljs.core.count(source);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),data_start)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(((data_end - (1)) - data_start),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((data_start + (1)),source));
} else {
return null;
}
});
exfn.parser.parse_data_entry = (function exfn$parser$parse_data_entry(data){
var vec__34478 = cljs.core.re_find(/^(\w+) (.+)/,data);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);
var reg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(reg),exfn.parser.format_arg(value)], null);
});
exfn.parser.prepare_source = (function exfn$parser$prepare_source(asm){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34483_SHARP_){
return clojure.string.starts_with_QMARK_(p1__34483_SHARP_,";");
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34482_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__34482_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.scrub_comments,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34481_SHARP_){
return clojure.string.trimr(clojure.string.triml(p1__34481_SHARP_));
}),clojure.string.split_lines(asm)))));
});
exfn.parser.parse = (function exfn$parser$parse(asm){
var source = exfn.parser.prepare_source(asm);
var macros = exfn.parser.get_macros(source);
var code = exfn.parser.get_code(source);
var data = exfn.parser.get_data(source);
if(exfn.parser.verify_macros(macros)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.parser.parse_line_of_code,exfn.parser.macro_expand_code(code,macros)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(exfn.parser.parse_data_entry,data)], null);
} else {
return null;
}
});

//# sourceMappingURL=exfn.parser.js.map
