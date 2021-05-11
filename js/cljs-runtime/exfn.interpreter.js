goog.provide('exfn.interpreter');
exfn.interpreter.get_parity = (function exfn$interpreter$get_parity(n){
if(cljs.core.even_QMARK_(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__106221_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",p1__106221_SHARP_);
}),n.toString((2)))))){
return (1);
} else {
return (0);
}
});
exfn.interpreter.get_value = (function exfn$interpreter$get_value(registers,x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,x);
} else {
return x;
}
});
exfn.interpreter.add_error = (function exfn$interpreter$add_error(memory,err_no,err_msg){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),err_no),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err_msg);
});
exfn.interpreter.cmp_jump_predicates = (function exfn$interpreter$cmp_jump_predicates(jump_instruction){
var pred__106222 = cljs.core._EQ_;
var expr__106223 = jump_instruction;
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"je","je",-374989490),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"je","je",-374989490),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),null], null), null);
} else {
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jle","jle",1869256266),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"jle","jle",1869256266),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__106222.cljs$core$IFn$_invoke$arity$2 ? pred__106222.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jl","jl",89093076),expr__106223) : pred__106222.call(null,new cljs.core.Keyword(null,"jl","jl",89093076),expr__106223)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__106223)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.build_symbol_table = (function exfn$interpreter$build_symbol_table(asm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__106225){
var vec__106226 = p__106225;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106226,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106226,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ix),new cljs.core.Keyword(null,"label","label",1718410804))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,cljs.core.second(ix),i);
} else {
return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),asm));
});
exfn.interpreter.append_output = (function exfn$interpreter$append_output(existing,new$){
if(cljs.core.truth_((function (){var and__4115__auto__ = existing;
if(cljs.core.truth_(and__4115__auto__)){
return new$;
} else {
return and__4115__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(existing),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new$)].join('');
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = existing;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new$);
} else {
return and__4115__auto__;
}
})())){
return existing;
} else {
return new$;

}
}
});
exfn.interpreter.mov = (function exfn$interpreter$mov(p__106229,p__106230){
var map__106231 = p__106229;
var map__106231__$1 = (((((!((map__106231 == null))))?(((((map__106231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106231):map__106231);
var memory = map__106231__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106231__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106232 = p__106230;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106232,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106232,(1),null);
if(cljs.core.truth_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.assoc,a,exfn.interpreter.get_value(registers,b));
} else {
return exfn.interpreter.add_error(memory,(101),"First argument to mov must be a register.");
}
});
exfn.interpreter.prnout = (function exfn$interpreter$prnout(p__106236,args){
var map__106237 = p__106236;
var map__106237__$1 = (((((!((map__106237 == null))))?(((((map__106237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106237):map__106237);
var memory = map__106237__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106237__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106237__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output(output,exfn.interpreter.get_value(registers,cljs.core.first(args))));
});
exfn.interpreter.get_math_fun = (function exfn$interpreter$get_math_fun(f){
var pred__106239 = cljs.core._EQ_;
var expr__106240 = f;
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__106240)))){
return cljs.core._PLUS_;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__106240)))){
return cljs.core._;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"div","div",1057191632),expr__106240)))){
return cljs.core.quot;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mul","mul",-354626062),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"mul","mul",-354626062),expr__106240)))){
return cljs.core._STAR_;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__106240)))){
return cljs.core.bit_xor;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"and","and",-971899817),expr__106240)))){
return cljs.core.bit_and;
} else {
if(cljs.core.truth_((pred__106239.cljs$core$IFn$_invoke$arity$2 ? pred__106239.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),expr__106240) : pred__106239.call(null,new cljs.core.Keyword(null,"or","or",235744169),expr__106240)))){
return cljs.core.bit_or;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__106240)].join('')));
}
}
}
}
}
}
}
});
exfn.interpreter.math_func = (function exfn$interpreter$math_func(instruction,p__106242,p__106243){
var map__106244 = p__106242;
var map__106244__$1 = (((((!((map__106244 == null))))?(((((map__106244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106244):map__106244);
var memory = map__106244__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106244__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106245 = p__106243;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106245,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106245,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
if((!((a instanceof cljs.core.Keyword)))){
return exfn.interpreter.add_error(memory,(202),["First argument to math operation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)," must be a register. Invalid {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),"}"].join(''));
} else {
if((((!(typeof av === 'number'))) || ((!(typeof bv === 'number'))))){
return exfn.interpreter.add_error(memory,(201),["Math operation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)," performed on non number arguments.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
} else {
var result = (function (){var fexpr__106249 = exfn.interpreter.get_math_fun(instruction);
return (fexpr__106249.cljs$core$IFn$_invoke$arity$2 ? fexpr__106249.cljs$core$IFn$_invoke$arity$2(av,bv) : fexpr__106249.call(null,av,bv));
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));

}
}
});
exfn.interpreter.str_cat = (function exfn$interpreter$str_cat(p__106250,p__106251){
var map__106252 = p__106250;
var map__106252__$1 = (((((!((map__106252 == null))))?(((((map__106252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106252):map__106252);
var memory = map__106252__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106252__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106253 = p__106251;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106253,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106253,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,b))].join(''));
});
exfn.interpreter.increment = (function exfn$interpreter$increment(p__106257,p__106258){
var map__106259 = p__106257;
var map__106259__$1 = (((((!((map__106259 == null))))?(((((map__106259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106259):map__106259);
var memory = map__106259__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106259__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106260 = p__106258;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106260,(0),null);
var target = exfn.interpreter.get_value(registers,a);
if(typeof target === 'number'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(target + (1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity((target + (1))));
} else {
return exfn.interpreter.add_error(memory,(203),"Can only increment numbers.");
}
});
exfn.interpreter.decrement = (function exfn$interpreter$decrement(p__106264,p__106265){
var map__106266 = p__106264;
var map__106266__$1 = (((((!((map__106266 == null))))?(((((map__106266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106266):map__106266);
var memory = map__106266__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106266__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106267 = p__106265;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106267,(0),null);
var target = exfn.interpreter.get_value(registers,a);
if(typeof target === 'number'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(target - (1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity((target - (1))));
} else {
return exfn.interpreter.add_error(memory,(204),"Can only decrement numbers.");
}
});
exfn.interpreter.bitnot = (function exfn$interpreter$bitnot(p__106271,p__106272){
var map__106273 = p__106271;
var map__106273__$1 = (((((!((map__106273 == null))))?(((((map__106273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106273):map__106273);
var memory = map__106273__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106273__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106274 = p__106272;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106274,(0),null);
if(typeof exfn.interpreter.get_value(registers,a) === 'number'){
var result = (~ exfn.interpreter.get_value(registers,a));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);
} else {
return exfn.interpreter.add_error(memory,(205),"not instruction argument not a number.");
}
});
exfn.interpreter.strlen = (function exfn$interpreter$strlen(p__106278,p__106279){
var map__106280 = p__106278;
var map__106280__$1 = (((((!((map__106280 == null))))?(((((map__106280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106280):map__106280);
var memory = map__106280__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106280__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106281 = p__106279;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106281,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106281,(1),null);
var v = exfn.interpreter.get_value(registers,b);
if(typeof v === 'string'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,((v).length));
} else {
return exfn.interpreter.add_error(memory,(301),"len passed non-string argument.");
}
});
exfn.interpreter.jnz = (function exfn$interpreter$jnz(p__106285,p__106286){
var map__106287 = p__106285;
var map__106287__$1 = (((((!((map__106287 == null))))?(((((map__106287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106287):map__106287);
var memory = map__106287__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106287__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106287__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106288 = p__106286;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106288,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106288,(1),null);
var a__$1 = exfn.interpreter.get_value(registers,a);
var b__$1 = exfn.interpreter.get_value(registers,b);
var jmp = (((a__$1 === (0)))?(1):b__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(eip + jmp));
});
exfn.interpreter.jz = (function exfn$interpreter$jz(p__106292,p__106293){
var map__106294 = p__106292;
var map__106294__$1 = (((((!((map__106294 == null))))?(((((map__106294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106294):map__106294);
var memory = map__106294__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106294__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106294__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106295 = p__106293;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106295,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106295,(1),null);
var a__$1 = exfn.interpreter.get_value(registers,a);
var b__$1 = exfn.interpreter.get_value(registers,b);
var jmp = (((!((a__$1 === (0)))))?(1):b__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(eip + jmp));
});
exfn.interpreter.jmp = (function exfn$interpreter$jmp(p__106299,p__106300){
var map__106301 = p__106299;
var map__106301__$1 = (((((!((map__106301 == null))))?(((((map__106301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106301):map__106301);
var memory = map__106301__$1;
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106301__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__106302 = p__106300;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106302,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.get.cljs$core$IFn$_invoke$arity$3(symbol_table,a,(-2)));
});
exfn.interpreter.cmp = (function exfn$interpreter$cmp(p__106306,p__106307){
var map__106308 = p__106306;
var map__106308__$1 = (((((!((map__106308 == null))))?(((((map__106308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106308):map__106308);
var memory = map__106308__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106308__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106309 = p__106307;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106309,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106309,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
return cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"cmp","cmp",575646375)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(av,bv))?new cljs.core.Keyword(null,"eq","eq",-618539067):(((av > bv))?new cljs.core.Keyword(null,"gt","gt",-1797443692):(((av < bv))?new cljs.core.Keyword(null,"lt","lt",421989243):null))));
});
exfn.interpreter.cmp_jmp = (function exfn$interpreter$cmp_jmp(p__106313,jump_type,p__106314){
var map__106315 = p__106313;
var map__106315__$1 = (((((!((map__106315 == null))))?(((((map__106315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106315):map__106315);
var memory = map__106315__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106315__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var internal_registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106315__$1,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106315__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__106316 = p__106314;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106316,(0),null);
var cmp = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(internal_registers);
var valid_predicates = exfn.interpreter.cmp_jump_predicates(jump_type);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.truth_((valid_predicates.cljs$core$IFn$_invoke$arity$1 ? valid_predicates.cljs$core$IFn$_invoke$arity$1(cmp) : valid_predicates.call(null,cmp)))?(function (){var G__106320 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__106320) : symbol_table.call(null,G__106320));
})():(eip + (1))));
});
exfn.interpreter.call = (function exfn$interpreter$call(p__106321,p__106322){
var map__106323 = p__106321;
var map__106323__$1 = (((((!((map__106323 == null))))?(((((map__106323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106323):map__106323);
var memory = map__106323__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106323__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106323__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__106324 = p__106322;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106324,(0),null);
var target = (function (){var G__106328 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__106328) : symbol_table.call(null,G__106328));
})();
if(cljs.core.truth_(target)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),target);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(-3));
}
});
exfn.interpreter.ret = (function exfn$interpreter$ret(p__106329){
var map__106330 = p__106329;
var map__106330__$1 = (((((!((map__106330 == null))))?(((((map__106330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106330):map__106330);
var memory = map__106330__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106330__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var target = cljs.core.peek(eip_stack);
if(cljs.core.truth_(target)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1))),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(-4));
}
});
exfn.interpreter.pop_stack = (function exfn$interpreter$pop_stack(p__106332,p__106333){
var map__106334 = p__106332;
var map__106334__$1 = (((((!((map__106334 == null))))?(((((map__106334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106334):map__106334);
var memory = map__106334__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106334__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var vec__106335 = p__106333;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106335,(0),null);
if(cljs.core.empty_QMARK_(stack)){
return exfn.interpreter.add_error(memory,(401),"Popped empty stack.");
} else {
if((!((a instanceof cljs.core.Keyword)))){
return exfn.interpreter.add_error(memory,(402),"Invalid pop target.");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),a], null),cljs.core.peek(stack)),new cljs.core.Keyword(null,"stack","stack",-793405930),((cljs.core.empty_QMARK_(stack))?cljs.core.identity:cljs.core.pop)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);

}
}
});
exfn.interpreter.push = (function exfn$interpreter$push(p__106339,args){
var map__106340 = p__106339;
var map__106340__$1 = (((((!((map__106340 == null))))?(((((map__106340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106340):map__106340);
var memory = map__106340__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106340__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var x = exfn.interpreter.get_value(registers,cljs.core.first(args));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,x);
});
exfn.interpreter.rep = (function exfn$interpreter$rep(p__106342,args){
var map__106343 = p__106342;
var map__106343__$1 = (((((!((map__106343 == null))))?(((((map__106343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106343.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106343):map__106343);
var memory = map__106343__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106343__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106343__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
if(cljs.core.seq(args)){
var rep_ctr = exfn.interpreter.get_value(registers,cljs.core.first(args));
if(typeof rep_ctr === 'number'){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)], null),cljs.core.conj,rep_ctr),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
} else {
return exfn.interpreter.add_error(memory,(501),["Invalid argument {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rep_ctr),"} to rep"].join(''));
}
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
}
});
exfn.interpreter.cer = (function exfn$interpreter$cer(memory){
if(cljs.core.truth_(new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520).cljs$core$IFn$_invoke$arity$1(memory))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"err","err",-2089457205)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684));
} else {
return memory;
}
});
exfn.interpreter.rp = (function exfn$interpreter$rp(p__106345){
var map__106346 = p__106345;
var map__106346__$1 = (((((!((map__106346 == null))))?(((((map__106346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106346):map__106346);
var memory = map__106346__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106346__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
if(cljs.core.empty_QMARK_((memory.cljs$core$IFn$_invoke$arity$1 ? memory.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)) : memory.call(null,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905))))){
return exfn.interpreter.add_error(memory,(502),"rp called with empty rep counters stack");
} else {
var counter = cljs.core.peek((memory.cljs$core$IFn$_invoke$arity$1 ? memory.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)) : memory.call(null,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905))));
if((counter <= (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.conj,(counter - (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
}
}
});
exfn.interpreter.get_conditional_repeat_function = (function exfn$interpreter$get_conditional_repeat_function(f){
var pred__106348 = cljs.core._EQ_;
var expr__106349 = f;
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rz","rz",386461181),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rz","rz",386461181),expr__106349)))){
return (function (x){
return (!((x === (0))));
});
} else {
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__106349)))){
return cljs.core.zero_QMARK_;
} else {
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__106349)))){
return (function (x){
return (x > (0));
});
} else {
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__106349)))){
return (function (x){
return (x >= (0));
});
} else {
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__106349)))){
return (function (x){
return (x <= (0));
});
} else {
if(cljs.core.truth_((pred__106348.cljs$core$IFn$_invoke$arity$2 ? pred__106348.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__106349) : pred__106348.call(null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__106349)))){
return (function (x){
return (x < (0));
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__106349)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.conditional_repeat = (function exfn$interpreter$conditional_repeat(p__106351,instruction,p__106352){
var map__106353 = p__106351;
var map__106353__$1 = (((((!((map__106353 == null))))?(((((map__106353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106353):map__106353);
var memory = map__106353__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106353__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106353__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__106354 = p__106352;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106354,(0),null);
var condition = exfn.interpreter.get_conditional_repeat_function(instruction);
var v = exfn.interpreter.get_value(registers,a);
if(typeof v === 'number'){
if(cljs.core.truth_((condition.cljs$core$IFn$_invoke$arity$1 ? condition.cljs$core$IFn$_invoke$arity$1(v) : condition.call(null,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.add_error(memory,(503),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)," called with non numeric argument."].join('')),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
}
});
exfn.interpreter.get_termination_cause = (function exfn$interpreter$get_termination_cause(eip){
var pred__106358 = cljs.core._EQ_;
var expr__106359 = eip;
if(cljs.core.truth_((pred__106358.cljs$core$IFn$_invoke$arity$2 ? pred__106358.cljs$core$IFn$_invoke$arity$2((-1),expr__106359) : pred__106358.call(null,(-1),expr__106359)))){
return "Terminated: EIP jumped past last instruction.";
} else {
if(cljs.core.truth_((pred__106358.cljs$core$IFn$_invoke$arity$2 ? pred__106358.cljs$core$IFn$_invoke$arity$2((-2),expr__106359) : pred__106358.call(null,(-2),expr__106359)))){
return "Terminated: Jump to non existant label.";
} else {
if(cljs.core.truth_((pred__106358.cljs$core$IFn$_invoke$arity$2 ? pred__106358.cljs$core$IFn$_invoke$arity$2((-3),expr__106359) : pred__106358.call(null,(-3),expr__106359)))){
return "Called non-existent function.";
} else {
if(cljs.core.truth_((pred__106358.cljs$core$IFn$_invoke$arity$2 ? pred__106358.cljs$core$IFn$_invoke$arity$2((-4),expr__106359) : pred__106358.call(null,(-4),expr__106359)))){
return "Encoutered ret, with no value on eip stack.";
} else {
return "Program exited without :end";
}
}
}
}
});
exfn.interpreter.interpret = (function exfn$interpreter$interpret(instructions,p__106361){
var map__106362 = p__106361;
var map__106362__$1 = (((((!((map__106362 == null))))?(((((map__106362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106362):map__106362);
var memory = map__106362__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106362__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var vec__106364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,eip);
var seq__106365 = cljs.core.seq(vec__106364);
var first__106366 = cljs.core.first(seq__106365);
var seq__106365__$1 = cljs.core.next(seq__106365);
var instruction = first__106366;
var args = seq__106365__$1;
var memory__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mov","mov",605355799),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.mov(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__106367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"xor","xor",-1119942254),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null);
return (fexpr__106367.cljs$core$IFn$_invoke$arity$1 ? fexpr__106367.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__106367.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.math_func(instruction,memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cat","cat",-1457810207),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.str_cat(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cer","cer",-947748970),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.cer(memory),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.increment(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.decrement(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not","not",-595976884),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.bitnot(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"len","len",1423657078),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.strlen(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__106368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nop","nop",-1754075182),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null), null);
return (fexpr__106368.cljs$core$IFn$_invoke$arity$1 ? fexpr__106368.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__106368.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prn","prn",-78846618),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.prnout(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jnz","jnz",1316296026),instruction))?(function (){var map__106369 = exfn.interpreter.jnz(memory,args);
var map__106369__$1 = (((((!((map__106369 == null))))?(((((map__106369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106369):map__106369);
var memory__$1 = map__106369__$1;
var eip__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106369__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
if((eip__$1 > cljs.core.count(instructions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"eip","eip",-346827869),(-1));
} else {
return memory__$1;
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jz","jz",122601060),instruction))?(function (){var map__106371 = exfn.interpreter.jz(memory,args);
var map__106371__$1 = (((((!((map__106371 == null))))?(((((map__106371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106371):map__106371);
var memory__$1 = map__106371__$1;
var eip__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106371__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
if((eip__$1 > cljs.core.count(instructions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"eip","eip",-346827869),(-1));
} else {
return memory__$1;
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jmp","jmp",-1109847893),instruction))?(function (){var map__106373 = exfn.interpreter.jmp(memory,args);
var map__106373__$1 = (((((!((map__106373 == null))))?(((((map__106373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106373):map__106373);
var memory__$1 = map__106373__$1;
var eip__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106373__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
if((eip__$1 > cljs.core.count(instructions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"eip","eip",-346827869),(-1));
} else {
return memory__$1;
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmp","cmp",575646375),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.cmp(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__106375 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__106375.cljs$core$IFn$_invoke$arity$1 ? fexpr__106375.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__106375.call(null,instruction));
})())?(function (){var map__106376 = exfn.interpreter.cmp_jmp(memory,instruction,args);
var map__106376__$1 = (((((!((map__106376 == null))))?(((((map__106376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__106376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__106376):map__106376);
var memory__$1 = map__106376__$1;
var eip__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__106376__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
if((eip__$1 > cljs.core.count(instructions))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"eip","eip",-346827869),(-1));
} else {
return memory__$1;
}
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction))?exfn.interpreter.call(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction))?exfn.interpreter.ret(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push","push",799791267),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.push(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop","pop",-1734778776),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.pop_stack(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.rep(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rp","rp",2006698083),instruction))?exfn.interpreter.rp(memory):(cljs.core.truth_((function (){var fexpr__106378 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rgz","rgz",2018641921),null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),null,new cljs.core.Keyword(null,"rlz","rlz",701636908),null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),null,new cljs.core.Keyword(null,"rz","rz",386461181),null], null), null);
return (fexpr__106378.cljs$core$IFn$_invoke$arity$1 ? fexpr__106378.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__106378.call(null,instruction));
})())?exfn.interpreter.conditional_repeat(memory,instruction,args):memory
))))))))))))))))))))));
var terminated_QMARK_ = ((((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869))) > (cljs.core.count(instructions) - (1)))) || (((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869))) < (0))));
var finished_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),instruction);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(function (){var G__106379 = memory__$1;
var G__106379__$1 = ((terminated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__106379,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : memory__$1.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))),exfn.interpreter.get_termination_cause((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869)))))):G__106379);
if(finished_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__106379__$1,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : memory__$1.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))),"Exited."));
} else {
return G__106379__$1;
}
})(),new cljs.core.Keyword(null,"terminated?","terminated?",209866129),terminated_QMARK_,new cljs.core.Keyword(null,"finished?","finished?",2067288119),((finished_QMARK_) || (terminated_QMARK_))], null);
});

//# sourceMappingURL=exfn.interpreter.js.map
