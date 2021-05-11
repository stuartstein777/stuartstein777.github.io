goog.provide('exfn.validators');
exfn.validators.valid_instructions = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 34, ["jg",null,"jl",null,"rep",null,"call",null,"rnz",null,"sub",null,"jgz",null,"cer",null,"pop",null,"nop",null,"rlz",null,"push",null,"rgez",null,"inc",null,"rz",null,"ret",null,"or",null,"prn",null,"jge",null,"mov",null,"and",null,"rlez",null,"mul",null,"div",null,"rza",null,"jle",null,"add",null,"jmp",null,"dec",null,"je",null,"jne",null,"xor",null,"end",null,"rgz",null], null), null);
exfn.validators.sample_code = cljs.core.list(".macros","%square-and-sum","mul %1 %1","mul %2 %2","add %1 %2","%end","%add-ten","add %1 10","%end",".code","mov :a 0","mov :b 1","square-and-sum(:a, :b)","mov :c 2","prn :b","call foo","mul :c :b","cmp :a :b","jne quax","mul :c 10","quax:","nop","call bar","pop :d","pop :e","prn :d","prn :e","xor :b :b","end","foo:","inc :b","ret","bar:","add :a 7","sub :c 1","push 3","push 4","ret",".data","xyz 123");
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
var pred__34298 = cljs.core._EQ_;
var expr__34299 = code;
if(cljs.core.truth_((pred__34298.cljs$core$IFn$_invoke$arity$2 ? pred__34298.cljs$core$IFn$_invoke$arity$2(".data",expr__34299) : pred__34298.call(null,".data",expr__34299)))){
return new cljs.core.Keyword(null,"data","data",-232669377);
} else {
if(cljs.core.truth_((pred__34298.cljs$core$IFn$_invoke$arity$2 ? pred__34298.cljs$core$IFn$_invoke$arity$2(".code",expr__34299) : pred__34298.call(null,".code",expr__34299)))){
return new cljs.core.Keyword(null,"code","code",1586293142);
} else {
if(cljs.core.truth_((pred__34298.cljs$core$IFn$_invoke$arity$2 ? pred__34298.cljs$core$IFn$_invoke$arity$2(".macros",expr__34299) : pred__34298.call(null,".macros",expr__34299)))){
return new cljs.core.Keyword(null,"macro","macro",-867863404);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__34299)].join('')));
}
}
}
});
exfn.validators.parse_instruction = (function exfn$validators$parse_instruction(acc,line_no,code,in_macro_QMARK_){
var vec__34301 = clojure.string.split.cljs$core$IFn$_invoke$arity$2("mul %1 %1",/ /);
var seq__34302 = cljs.core.seq(vec__34301);
var first__34303 = cljs.core.first(seq__34302);
var seq__34302__$1 = cljs.core.next(seq__34302);
var instruction = first__34303;
var args = seq__34302__$1;
if(cljs.core.truth_((exfn.validators.valid_instructions.cljs$core$IFn$_invoke$arity$1 ? exfn.validators.valid_instructions.cljs$core$IFn$_invoke$arity$1(instruction) : exfn.validators.valid_instructions.call(null,instruction)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Invalid instruction."].join('');
} else {
return null;
}
});
exfn.validators.verify = (function exfn$validators$verify(p__34304,p__34305){
var map__34306 = p__34304;
var map__34306__$1 = (((((!((map__34306 == null))))?(((((map__34306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34306):map__34306);
var acc = map__34306__$1;
var current_section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34306__$1,new cljs.core.Keyword(null,"current-section","current-section",1519906460));
var open_macro = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34306__$1,new cljs.core.Keyword(null,"open-macro","open-macro",28238664));
var vec__34307 = p__34305;
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(0),null);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34307,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".macros")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".code")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,".data")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"current-section","current-section",1519906460),exfn.validators.get_section(code));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"%end"))?open_macro:false):false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),false);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,"%end")) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Invalid macro end definition. Macros start definitions should be of the form %macro-name"].join(''));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && (clojure.string.starts_with_QMARK_(code,"%")) && (cljs.core.not(open_macro)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),true);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && (clojure.string.starts_with_QMARK_(code,"%")) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Invalid macro start definition. Previous macro was not closed. Are you missing %end ?"].join(''));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section)) && ((!(clojure.string.starts_with_QMARK_(code,"%")))) && (cljs.core.not(open_macro)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.conj,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_no),": Any instructions in a macro section should be between a macro definition. Macro definitions start with %macro-name and end with %end\n","e.g.\n","%square-and-sum\n","   mul %1 %1\n","   mul %2 %2\n","   add %1 %2\n","%end"].join(''));
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"macro","macro",-867863404),current_section))?(((!(clojure.string.starts_with_QMARK_(code,"%"))))?open_macro:false):false))){
return acc;
} else {
return acc;

}
}
}
}
}
}
}
});
exfn.validators.validate = (function exfn$validators$validate(lines){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.validators.verify,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-section","current-section",1519906460),null,new cljs.core.Keyword(null,"open-macro","open-macro",28238664),false,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(exfn.validators.sample_code)),exfn.validators.sample_code)));
});
exfn.validators.get_all_prefixes = (function exfn$validators$get_all_prefixes(s){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34311_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),p1__34311_SHARP_);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) + (1)))));
});

//# sourceMappingURL=exfn.validators.js.map
