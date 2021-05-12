goog.provide('exfn.validators');
exfn.validators.has_two_arguments_QMARK_ = (function exfn$validators$has_two_arguments_QMARK_(line){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(3))){
return "";
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(line))," requires 2 arguments."].join('');
}
});
exfn.validators.has_one_argument_QMARK_ = (function exfn$validators$has_one_argument_QMARK_(line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(2));
});
exfn.validators.has_no_arguments_QMARK_ = (function exfn$validators$has_no_arguments_QMARK_(line){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(line),(1));
});
exfn.validators.first_argument_is_a_register_QMARK_ = (function exfn$validators$first_argument_is_a_register_QMARK_(line){
return clojure.string.starts_with_QMARK_(cljs.core.second(line),":");
});
exfn.validators.rules = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mov","mov",605355799),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.validators.has_two_arguments_QMARK_,exfn.validators.first_argument_is_a_register_QMARK_], null)], null);
exfn.validators.get_section = (function exfn$validators$get_section(code){
var pred__34449 = cljs.core._EQ_;
var expr__34450 = code;
if(cljs.core.truth_((pred__34449.cljs$core$IFn$_invoke$arity$2 ? pred__34449.cljs$core$IFn$_invoke$arity$2(".data",expr__34450) : pred__34449.call(null,".data",expr__34450)))){
return new cljs.core.Keyword(null,"data","data",-232669377);
} else {
if(cljs.core.truth_((pred__34449.cljs$core$IFn$_invoke$arity$2 ? pred__34449.cljs$core$IFn$_invoke$arity$2(".code",expr__34450) : pred__34449.call(null,".code",expr__34450)))){
return new cljs.core.Keyword(null,"code","code",1586293142);
} else {
if(cljs.core.truth_((pred__34449.cljs$core$IFn$_invoke$arity$2 ? pred__34449.cljs$core$IFn$_invoke$arity$2(".macros",expr__34450) : pred__34449.call(null,".macros",expr__34450)))){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34450)].join('')));
}
}
}
});
exfn.validators.join = (function exfn$validators$join(suggestions){
var pred__34452 = cljs.core._EQ_;
var expr__34453 = cljs.core.count(suggestions);
if(cljs.core.truth_((pred__34452.cljs$core$IFn$_invoke$arity$2 ? pred__34452.cljs$core$IFn$_invoke$arity$2((1),expr__34453) : pred__34452.call(null,(1),expr__34453)))){
return cljs.core.first(suggestions);
} else {
if(cljs.core.truth_((pred__34452.cljs$core$IFn$_invoke$arity$2 ? pred__34452.cljs$core$IFn$_invoke$arity$2((2),expr__34453) : pred__34452.call(null,(2),expr__34453)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(suggestions))," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(suggestions))].join('');
} else {
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(suggestions))," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(suggestions))].join('');
}
}
});
exfn.validators.build_error = (function exfn$validators$build_error(invalid_instruction,line_no,replacements,is_macro_QMARK_){
var suggestions = exfn.helpers.get_suggestions_for_invalid_instruction(invalid_instruction,replacements);
if((cljs.core.count(suggestions) > (4))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Invalid ",(cljs.core.truth_(is_macro_QMARK_)?"macro call `":"instruction `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_instruction)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Invalid ",(cljs.core.truth_(is_macro_QMARK_)?"macro call `":"instruction `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(invalid_instruction),"`. Did you mean ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.validators.join(suggestions)),"?"].join('');
}
});
exfn.validators.validate_macro_call = (function exfn$validators$validate_macro_call(acc,macro_names,macro_call,line_no){
var macro_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__34455_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("(",p1__34455_SHARP_);
}),macro_call));
if(cljs.core.truth_((macro_names.cljs$core$IFn$_invoke$arity$1 ? macro_names.cljs$core$IFn$_invoke$arity$1(macro_name) : macro_names.call(null,macro_name)))){
return acc;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,exfn.validators.build_error(macro_call,line_no,macro_names,true));
}
});
exfn.validators.validate_line = (function exfn$validators$validate_line(p__34456,line_no,code,in_macro_QMARK_,macro_names){
var map__34457 = p__34456;
var map__34457__$1 = (((((!((map__34457 == null))))?(((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34457):map__34457);
var acc = map__34457__$1;
var in_macro_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,new cljs.core.Keyword(null,"in-macro?","in-macro?",-109612903));
var vec__34459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(code,/ /);
var seq__34460 = cljs.core.seq(vec__34459);
var first__34461 = cljs.core.first(seq__34460);
var seq__34460__$1 = cljs.core.next(seq__34460);
var instruction = first__34461;
var args = seq__34460__$1;
if(cljs.core.truth_(cljs.core.re_find(/(\(\)|(\(.+?\)))/,code))){
return exfn.validators.validate_macro_call(acc,macro_names,code,line_no);
} else {
if(cljs.core.truth_(cljs.core.re_find(/\w+:/,code))){
return acc;
} else {
if(cljs.core.not((exfn.helpers.valid_instructions.cljs$core$IFn$_invoke$arity$1 ? exfn.helpers.valid_instructions.cljs$core$IFn$_invoke$arity$1(instruction) : exfn.helpers.valid_instructions.call(null,instruction)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,exfn.validators.build_error(instruction,line_no,exfn.helpers.valid_instructions,false));
} else {
return acc;
}

}
}
});
exfn.validators.verify = (function exfn$validators$verify(p__34462,p__34463){
var map__34464 = p__34462;
var map__34464__$1 = (((((!((map__34464 == null))))?(((((map__34464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34464):map__34464);
var acc = map__34464__$1;
var current_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34464__$1,new cljs.core.Keyword(null,"current-section","current-section",1519906460));
var open_macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34464__$1,new cljs.core.Keyword(null,"open-macro","open-macro",28238664));
var macro_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34464__$1,new cljs.core.Keyword(null,"macro-names","macro-names",1965941696));
var vec__34465 = p__34463;
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34465,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".macros")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".code")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".data")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"current-section","current-section",1519906460),exfn.validators.get_section(code));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"%end"))?open_macro:false):false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),false);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"%end")) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),exfn.errors.invalid_macro_end].join(''));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && (clojure.string.starts_with_QMARK_(code,"%")) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),true),new cljs.core.Keyword(null,"macro-names","macro-names",1965941696),cljs.core.conj,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(code,(1)));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section))?((clojure.string.starts_with_QMARK_(code,"%"))?open_macro:false):false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),exfn.errors.invalid_macro_definition].join(''));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && ((!(clojure.string.starts_with_QMARK_(code,"%")))) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Any instructions in a macro section should be between a macro definition. Macro definitions start with %macro-name and end with %end\n","e.g.\n","%square-and-sum\n","   mul %1 %1\n","   mul %2 %2\n","   add %1 %2\n","%end"].join(''));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section))?(((!(clojure.string.starts_with_QMARK_(code,"%"))))?open_macro:false):false))){
return exfn.validators.validate_line(acc,line_no,code,true,macro_names);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),current_section)){
return exfn.validators.validate_line(acc,line_no,code,false,macro_names);
} else {
return acc;

}
}
}
}
}
}
}
}
});
exfn.validators.sample_code = cljs.core.list(".macros","%square-and-sum","mul %1 %1","muk %2 %2","add %1 %2","%end","%add-ten","add %1 10","%end",".code","mov :a 0","mov :b 1","squareandsub(:a, :b)","mov :c 2","prn :b","call foo","mul :c :b","cmp :a :b","ffne quax","mul :c 10","quax:","nop","cdlk bar","pop :d","pop :e","prn :d","prn :e","xor :b :b","end","foo:","inc :b","xxx","ret","bar:","add :a 7","sub :c 1","push 3","push 4","wet",".data","xyz 123");
exfn.validators.validate = (function exfn$validators$validate(code){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.validators.verify,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),null,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"macro-names","macro-names",1965941696),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),false], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(exfn.validators.sample_code)),exfn.validators.sample_code)));
});

//# sourceMappingURL=exfn.validators.js.map
