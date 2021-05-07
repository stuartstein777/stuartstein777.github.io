goog.provide('exfn.interpreter');
exfn.interpreter.get_parity = (function exfn$interpreter$get_parity(n){
if(cljs.core.even_QMARK_(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56009_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",p1__56009_SHARP_);
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
exfn.interpreter.cmp_jump_predicates = (function exfn$interpreter$cmp_jump_predicates(jump_instruction){
var pred__56010 = cljs.core._EQ_;
var expr__56011 = jump_instruction;
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"je","je",-374989490),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"je","je",-374989490),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),null], null), null);
} else {
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jle","jle",1869256266),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"jle","jle",1869256266),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__56010.cljs$core$IFn$_invoke$arity$2 ? pred__56010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jl","jl",89093076),expr__56011) : pred__56010.call(null,new cljs.core.Keyword(null,"jl","jl",89093076),expr__56011)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56011)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.build_symbol_table = (function exfn$interpreter$build_symbol_table(asm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__56013){
var vec__56014 = p__56013;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56014,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56014,(1),null);
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",existing)){
return new$;
} else {
return null;
}
}
}
});
exfn.interpreter.mov = (function exfn$interpreter$mov(p__56017,p__56018){
var map__56019 = p__56017;
var map__56019__$1 = (((((!((map__56019 == null))))?(((((map__56019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56019):map__56019);
var memory = map__56019__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56020 = p__56018;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56020,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56020,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.assoc,a,exfn.interpreter.get_value(registers,b));
});
exfn.interpreter.prnout = (function exfn$interpreter$prnout(p__56024,args){
var map__56025 = p__56024;
var map__56025__$1 = (((((!((map__56025 == null))))?(((((map__56025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56025):map__56025);
var memory = map__56025__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56025__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56025__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output(output,exfn.interpreter.get_value(registers,cljs.core.first(args))));
});
exfn.interpreter.get_math_fun = (function exfn$interpreter$get_math_fun(f){
var pred__56027 = cljs.core._EQ_;
var expr__56028 = f;
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__56028)))){
return cljs.core._PLUS_;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__56028)))){
return cljs.core._;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"div","div",1057191632),expr__56028)))){
return cljs.core.quot;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mul","mul",-354626062),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"mul","mul",-354626062),expr__56028)))){
return cljs.core._STAR_;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__56028)))){
return cljs.core.bit_xor;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"and","and",-971899817),expr__56028)))){
return cljs.core.bit_and;
} else {
if(cljs.core.truth_((pred__56027.cljs$core$IFn$_invoke$arity$2 ? pred__56027.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),expr__56028) : pred__56027.call(null,new cljs.core.Keyword(null,"or","or",235744169),expr__56028)))){
return cljs.core.bit_or;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56028)].join('')));
}
}
}
}
}
}
}
});
exfn.interpreter.add_error = (function exfn$interpreter$add_error(memory,err_no,err_msg){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),err_no),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"errmsg","errmsg",719608620),err_msg);
});
exfn.interpreter.math_func = (function exfn$interpreter$math_func(instruction,p__56030,p__56031){
var map__56032 = p__56030;
var map__56032__$1 = (((((!((map__56032 == null))))?(((((map__56032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56032):map__56032);
var memory = map__56032__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56032__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56033 = p__56031;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56033,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56033,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
if((((!(typeof av === 'number'))) || ((!(typeof bv === 'number'))))){
return exfn.interpreter.add_error(memory,(1),["Math operation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)," performed on non number arguments.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
} else {
var result = (function (){var fexpr__56037 = exfn.interpreter.get_math_fun(instruction);
return (fexpr__56037.cljs$core$IFn$_invoke$arity$2 ? fexpr__56037.cljs$core$IFn$_invoke$arity$2(av,bv) : fexpr__56037.call(null,av,bv));
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
}
});
exfn.interpreter.str_cat = (function exfn$interpreter$str_cat(p__56038,p__56039){
var map__56040 = p__56038;
var map__56040__$1 = (((((!((map__56040 == null))))?(((((map__56040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56040):map__56040);
var memory = map__56040__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56040__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56041 = p__56039;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56041,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56041,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,b))].join(''));
});
exfn.interpreter.increment = (function exfn$interpreter$increment(p__56045,p__56046){
var map__56047 = p__56045;
var map__56047__$1 = (((((!((map__56047 == null))))?(((((map__56047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56047):map__56047);
var memory = map__56047__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56047__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56048 = p__56046;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56048,(0),null);
var result = (exfn.interpreter.get_value(registers,a) + (1));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
});
exfn.interpreter.decrement = (function exfn$interpreter$decrement(p__56052,p__56053){
var map__56054 = p__56052;
var map__56054__$1 = (((((!((map__56054 == null))))?(((((map__56054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56054):map__56054);
var memory = map__56054__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56054__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56055 = p__56053;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56055,(0),null);
var result = (exfn.interpreter.get_value(registers,a) - (1));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
});
exfn.interpreter.bitnot = (function exfn$interpreter$bitnot(p__56059,p__56060){
var map__56061 = p__56059;
var map__56061__$1 = (((((!((map__56061 == null))))?(((((map__56061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56061):map__56061);
var memory = map__56061__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56061__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56062 = p__56060;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56062,(0),null);
if(typeof a === 'number'){
var result = (~ exfn.interpreter.get_value(registers,a));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),(1));
}
});
exfn.interpreter.strlen = (function exfn$interpreter$strlen(p__56066,p__56067){
var map__56068 = p__56066;
var map__56068__$1 = (((((!((map__56068 == null))))?(((((map__56068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56068):map__56068);
var memory = map__56068__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56068__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56069 = p__56067;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56069,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56069,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,cljs.core.count(exfn.interpreter.get_value(registers,b)));
});
exfn.interpreter.jnz = (function exfn$interpreter$jnz(p__56073,p__56074){
var map__56075 = p__56073;
var map__56075__$1 = (((((!((map__56075 == null))))?(((((map__56075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56075):map__56075);
var memory = map__56075__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56075__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56075__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56076 = p__56074;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56076,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56076,(1),null);
var a__$1 = exfn.interpreter.get_value(registers,a);
var b__$1 = exfn.interpreter.get_value(registers,b);
var jmp = (((a__$1 === (0)))?(1):b__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(eip + jmp));
});
exfn.interpreter.jmp = (function exfn$interpreter$jmp(p__56080,p__56081){
var map__56082 = p__56080;
var map__56082__$1 = (((((!((map__56082 == null))))?(((((map__56082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56082):map__56082);
var memory = map__56082__$1;
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56082__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__56083 = p__56081;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56083,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.get.cljs$core$IFn$_invoke$arity$2(symbol_table,a));
});
exfn.interpreter.cmp = (function exfn$interpreter$cmp(p__56087,p__56088){
var map__56089 = p__56087;
var map__56089__$1 = (((((!((map__56089 == null))))?(((((map__56089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56089):map__56089);
var memory = map__56089__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56089__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56090 = p__56088;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56090,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
return cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"cmp","cmp",575646375)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(av,bv))?new cljs.core.Keyword(null,"eq","eq",-618539067):(((av > bv))?new cljs.core.Keyword(null,"gt","gt",-1797443692):(((av < bv))?new cljs.core.Keyword(null,"lt","lt",421989243):null))));
});
exfn.interpreter.cmp_jmp = (function exfn$interpreter$cmp_jmp(p__56094,jump_type,p__56095){
var map__56096 = p__56094;
var map__56096__$1 = (((((!((map__56096 == null))))?(((((map__56096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56096):map__56096);
var memory = map__56096__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var internal_registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56096__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__56097 = p__56095;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56097,(0),null);
var cmp = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(internal_registers);
var valid_predicates = exfn.interpreter.cmp_jump_predicates(jump_type);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmp], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([valid_predicates], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.truth_((valid_predicates.cljs$core$IFn$_invoke$arity$1 ? valid_predicates.cljs$core$IFn$_invoke$arity$1(cmp) : valid_predicates.call(null,cmp)))?(function (){var G__56101 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__56101) : symbol_table.call(null,G__56101));
})():(eip + (1))));
});
exfn.interpreter.call = (function exfn$interpreter$call(p__56102,p__56103){
var map__56104 = p__56102;
var map__56104__$1 = (((((!((map__56104 == null))))?(((((map__56104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56104):map__56104);
var memory = map__56104__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56104__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__56105 = p__56103;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56105,(0),null);
var target = (function (){var G__56109 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__56109) : symbol_table.call(null,G__56109));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),target);
});
exfn.interpreter.ret = (function exfn$interpreter$ret(p__56110){
var map__56111 = p__56110;
var map__56111__$1 = (((((!((map__56111 == null))))?(((((map__56111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56111):map__56111);
var memory = map__56111__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1))),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
});
exfn.interpreter.pop_stack = (function exfn$interpreter$pop_stack(p__56113,p__56114){
var map__56115 = p__56113;
var map__56115__$1 = (((((!((map__56115 == null))))?(((((map__56115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56115):map__56115);
var memory = map__56115__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var vec__56116 = p__56114;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56116,(0),null);
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),"Popped empty stack.");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),a], null),cljs.core.peek(stack)),new cljs.core.Keyword(null,"stack","stack",-793405930),((cljs.core.empty_QMARK_(stack))?cljs.core.identity:cljs.core.pop)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);
}
});
exfn.interpreter.push = (function exfn$interpreter$push(p__56120,args){
var map__56121 = p__56120;
var map__56121__$1 = (((((!((map__56121 == null))))?(((((map__56121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56121):map__56121);
var memory = map__56121__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56121__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var x = exfn.interpreter.get_value(registers,cljs.core.first(args));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,x);
});
exfn.interpreter.rep = (function exfn$interpreter$rep(p__56123,args){
var map__56124 = p__56123;
var map__56124__$1 = (((((!((map__56124 == null))))?(((((map__56124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56124):map__56124);
var memory = map__56124__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56124__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56124__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
if(cljs.core.seq(args)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)], null),cljs.core.conj,exfn.interpreter.get_value(registers,cljs.core.first(args))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
}
});
exfn.interpreter.rp = (function exfn$interpreter$rp(p__56126){
var map__56127 = p__56126;
var map__56127__$1 = (((((!((map__56127 == null))))?(((((map__56127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56127):map__56127);
var memory = map__56127__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56127__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var counter = cljs.core.peek((memory.cljs$core$IFn$_invoke$arity$1 ? memory.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)) : memory.call(null,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905))));
if((counter <= (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.conj,(counter - (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
}
});
exfn.interpreter.get_conditional_repeat_function = (function exfn$interpreter$get_conditional_repeat_function(f){
var pred__56129 = cljs.core._EQ_;
var expr__56130 = f;
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rz","rz",386461181),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rz","rz",386461181),expr__56130)))){
return (function (x){
return (!((x === (0))));
});
} else {
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__56130)))){
return cljs.core.zero_QMARK_;
} else {
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__56130)))){
return (function (x){
return (x > (0));
});
} else {
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__56130)))){
return (function (x){
return (x >= (0));
});
} else {
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__56130)))){
return (function (x){
return (x <= (0));
});
} else {
if(cljs.core.truth_((pred__56129.cljs$core$IFn$_invoke$arity$2 ? pred__56129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__56130) : pred__56129.call(null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__56130)))){
return (function (x){
return (x < (0));
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56130)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.conditional_repeat = (function exfn$interpreter$conditional_repeat(p__56132,instruction,p__56133){
var map__56134 = p__56132;
var map__56134__$1 = (((((!((map__56134 == null))))?(((((map__56134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56134):map__56134);
var memory = map__56134__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56134__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__56135 = p__56133;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56135,(0),null);
var condition = exfn.interpreter.get_conditional_repeat_function(instruction);
if(cljs.core.truth_((function (){var G__56139 = exfn.interpreter.get_value(registers,a);
return (condition.cljs$core$IFn$_invoke$arity$1 ? condition.cljs$core$IFn$_invoke$arity$1(G__56139) : condition.call(null,G__56139));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
}
});
exfn.interpreter.interpret = (function exfn$interpreter$interpret(instructions,p__56140){
var map__56141 = p__56140;
var map__56141__$1 = (((((!((map__56141 == null))))?(((((map__56141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56141):map__56141);
var memory = map__56141__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56141__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var vec__56143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,eip);
var seq__56144 = cljs.core.seq(vec__56143);
var first__56145 = cljs.core.first(seq__56144);
var seq__56144__$1 = cljs.core.next(seq__56144);
var instruction = first__56145;
var args = seq__56144__$1;
var memory__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mov","mov",605355799),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.mov(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__56146 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"xor","xor",-1119942254),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null);
return (fexpr__56146.cljs$core$IFn$_invoke$arity$1 ? fexpr__56146.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__56146.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.math_func(instruction,memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cat","cat",-1457810207),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.str_cat(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.increment(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.decrement(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not","not",-595976884),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.bitnot(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"len","len",1423657078),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.strlen(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__56147 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nop","nop",-1754075182),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null), null);
return (fexpr__56147.cljs$core$IFn$_invoke$arity$1 ? fexpr__56147.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__56147.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prn","prn",-78846618),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.prnout(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jnz","jnz",1316296026),instruction))?exfn.interpreter.jnz(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jmp","jmp",-1109847893),instruction))?exfn.interpreter.jmp(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmp","cmp",575646375),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.cmp(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__56148 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__56148.cljs$core$IFn$_invoke$arity$1 ? fexpr__56148.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__56148.call(null,instruction));
})())?exfn.interpreter.cmp_jmp(memory,instruction,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction))?exfn.interpreter.call(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction))?exfn.interpreter.ret(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push","push",799791267),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.push(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop","pop",-1734778776),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.pop_stack(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.rep(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rp","rp",2006698083),instruction))?exfn.interpreter.rp(memory):(cljs.core.truth_((function (){var fexpr__56149 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rgz","rgz",2018641921),null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),null,new cljs.core.Keyword(null,"rlz","rlz",701636908),null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),null,new cljs.core.Keyword(null,"rz","rz",386461181),null], null), null);
return (fexpr__56149.cljs$core$IFn$_invoke$arity$1 ? fexpr__56149.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__56149.call(null,instruction));
})())?exfn.interpreter.conditional_repeat(memory,instruction,args):memory
))))))))))))))))))));
var terminated_QMARK_ = ((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869))) > (cljs.core.count(instructions) - (1)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"memory","memory",-1449401430),((terminated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : memory__$1.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))),"*** Program terminated: EIP past last instruction. ***")):memory__$1),new cljs.core.Keyword(null,"terminated?","terminated?",209866129),terminated_QMARK_,new cljs.core.Keyword(null,"finished?","finished?",2067288119),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),instruction)], null);
});

//# sourceMappingURL=exfn.interpreter.js.map
