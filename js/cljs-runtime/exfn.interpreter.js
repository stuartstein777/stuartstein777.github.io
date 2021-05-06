goog.provide('exfn.interpreter');
exfn.interpreter.get_parity = (function exfn$interpreter$get_parity(n){
if(cljs.core.even_QMARK_(cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__47759_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("1",p1__47759_SHARP_);
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
var pred__47760 = cljs.core._EQ_;
var expr__47761 = jump_instruction;
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"je","je",-374989490),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"je","je",-374989490),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),null], null), null);
} else {
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jle","jle",1869256266),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"jle","jle",1869256266),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__47760.cljs$core$IFn$_invoke$arity$2 ? pred__47760.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jl","jl",89093076),expr__47761) : pred__47760.call(null,new cljs.core.Keyword(null,"jl","jl",89093076),expr__47761)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47761)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.build_symbol_table = (function exfn$interpreter$build_symbol_table(asm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__47763){
var vec__47764 = p__47763;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47764,(1),null);
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
exfn.interpreter.mov = (function exfn$interpreter$mov(p__47767,p__47768){
var map__47769 = p__47767;
var map__47769__$1 = (((((!((map__47769 == null))))?(((((map__47769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47769):map__47769);
var memory = map__47769__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47769__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47770 = p__47768;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47770,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.assoc,a,exfn.interpreter.get_value(registers,b));
});
exfn.interpreter.prnout = (function exfn$interpreter$prnout(p__47774,args){
var map__47775 = p__47774;
var map__47775__$1 = (((((!((map__47775 == null))))?(((((map__47775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47775):map__47775);
var memory = map__47775__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47775__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47775__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output(output,exfn.interpreter.get_value(registers,cljs.core.first(args))));
});
exfn.interpreter.get_math_fun = (function exfn$interpreter$get_math_fun(f){
var pred__47777 = cljs.core._EQ_;
var expr__47778 = f;
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"add","add",235287739),expr__47778)))){
return cljs.core._PLUS_;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),expr__47778)))){
return cljs.core._;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"div","div",1057191632),expr__47778)))){
return cljs.core.quot;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mul","mul",-354626062),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"mul","mul",-354626062),expr__47778)))){
return cljs.core._STAR_;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"xor","xor",-1119942254),expr__47778)))){
return cljs.core.bit_xor;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"and","and",-971899817),expr__47778)))){
return cljs.core.bit_and;
} else {
if(cljs.core.truth_((pred__47777.cljs$core$IFn$_invoke$arity$2 ? pred__47777.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),expr__47778) : pred__47777.call(null,new cljs.core.Keyword(null,"or","or",235744169),expr__47778)))){
return cljs.core.bit_or;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47778)].join('')));
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
exfn.interpreter.math_func = (function exfn$interpreter$math_func(instruction,p__47780,p__47781){
var map__47782 = p__47780;
var map__47782__$1 = (((((!((map__47782 == null))))?(((((map__47782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47782):map__47782);
var memory = map__47782__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47782__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47783 = p__47781;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47783,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47783,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
if((((!(typeof av === 'number'))) || ((!(typeof bv === 'number'))))){
return exfn.interpreter.add_error(memory,(1),["Math operation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instruction)," performed on non number arguments.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''));
} else {
var result = (function (){var fexpr__47787 = exfn.interpreter.get_math_fun(instruction);
return (fexpr__47787.cljs$core$IFn$_invoke$arity$2 ? fexpr__47787.cljs$core$IFn$_invoke$arity$2(av,bv) : fexpr__47787.call(null,av,bv));
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
}
});
exfn.interpreter.str_cat = (function exfn$interpreter$str_cat(p__47788,p__47789){
var map__47790 = p__47788;
var map__47790__$1 = (((((!((map__47790 == null))))?(((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47790):map__47790);
var memory = map__47790__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47791 = p__47789;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47791,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47791,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,b))].join(''));
});
exfn.interpreter.increment = (function exfn$interpreter$increment(p__47795,p__47796){
var map__47797 = p__47795;
var map__47797__$1 = (((((!((map__47797 == null))))?(((((map__47797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47797):map__47797);
var memory = map__47797__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47797__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47798 = p__47796;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47798,(0),null);
var result = (exfn.interpreter.get_value(registers,a) + (1));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
});
exfn.interpreter.decrement = (function exfn$interpreter$decrement(p__47802,p__47803){
var map__47804 = p__47802;
var map__47804__$1 = (((((!((map__47804 == null))))?(((((map__47804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47804):map__47804);
var memory = map__47804__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47804__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47805 = p__47803;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47805,(0),null);
var result = (exfn.interpreter.get_value(registers,a) - (1));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result));
});
exfn.interpreter.bitnot = (function exfn$interpreter$bitnot(p__47809,p__47810){
var map__47811 = p__47809;
var map__47811__$1 = (((((!((map__47811 == null))))?(((((map__47811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47811):map__47811);
var memory = map__47811__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47811__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47812 = p__47810;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47812,(0),null);
if(typeof a === 'number'){
var result = (~ exfn.interpreter.get_value(registers,a));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,result),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"par","par",-61778778),exfn.interpreter.get_parity(result)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),(1));
}
});
exfn.interpreter.strlen = (function exfn$interpreter$strlen(p__47816,p__47817){
var map__47818 = p__47816;
var map__47818__$1 = (((((!((map__47818 == null))))?(((((map__47818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47818):map__47818);
var memory = map__47818__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47818__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47819 = p__47817;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47819,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,cljs.core.count(exfn.interpreter.get_value(registers,b)));
});
exfn.interpreter.jnz = (function exfn$interpreter$jnz(p__47823,p__47824){
var map__47825 = p__47823;
var map__47825__$1 = (((((!((map__47825 == null))))?(((((map__47825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47825):map__47825);
var memory = map__47825__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47825__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47826 = p__47824;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47826,(0),null);
var a__$1 = exfn.interpreter.get_value(registers,a);
var jmp = (((a__$1 === (0)))?(1):a__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(eip + jmp));
});
exfn.interpreter.jmp = (function exfn$interpreter$jmp(p__47830,p__47831){
var map__47832 = p__47830;
var map__47832__$1 = (((((!((map__47832 == null))))?(((((map__47832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47832):map__47832);
var memory = map__47832__$1;
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47832__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__47833 = p__47831;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47833,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.get.cljs$core$IFn$_invoke$arity$2(symbol_table,a));
});
exfn.interpreter.cmp = (function exfn$interpreter$cmp(p__47837,p__47838){
var map__47839 = p__47837;
var map__47839__$1 = (((((!((map__47839 == null))))?(((((map__47839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47839):map__47839);
var memory = map__47839__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47839__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47840 = p__47838;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47840,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
return cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"cmp","cmp",575646375)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(av,bv))?new cljs.core.Keyword(null,"eq","eq",-618539067):(((av > bv))?new cljs.core.Keyword(null,"gt","gt",-1797443692):(((av < bv))?new cljs.core.Keyword(null,"lt","lt",421989243):null))));
});
exfn.interpreter.cmp_jmp = (function exfn$interpreter$cmp_jmp(p__47844,jump_type,p__47845){
var map__47846 = p__47844;
var map__47846__$1 = (((((!((map__47846 == null))))?(((((map__47846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47846):map__47846);
var memory = map__47846__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47846__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var internal_registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47846__$1,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47846__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__47847 = p__47845;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var cmp = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(internal_registers);
var valid_predicates = exfn.interpreter.cmp_jump_predicates(jump_type);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmp], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([valid_predicates], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.truth_((valid_predicates.cljs$core$IFn$_invoke$arity$1 ? valid_predicates.cljs$core$IFn$_invoke$arity$1(cmp) : valid_predicates.call(null,cmp)))?(function (){var G__47851 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__47851) : symbol_table.call(null,G__47851));
})():(eip + (1))));
});
exfn.interpreter.call = (function exfn$interpreter$call(p__47852,p__47853){
var map__47854 = p__47852;
var map__47854__$1 = (((((!((map__47854 == null))))?(((((map__47854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47854):map__47854);
var memory = map__47854__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47854__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47854__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__47855 = p__47853;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47855,(0),null);
var target = (function (){var G__47859 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__47859) : symbol_table.call(null,G__47859));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),target);
});
exfn.interpreter.ret = (function exfn$interpreter$ret(p__47860){
var map__47861 = p__47860;
var map__47861__$1 = (((((!((map__47861 == null))))?(((((map__47861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47861):map__47861);
var memory = map__47861__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47861__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1))),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
});
exfn.interpreter.pop_stack = (function exfn$interpreter$pop_stack(p__47863,p__47864){
var map__47865 = p__47863;
var map__47865__$1 = (((((!((map__47865 == null))))?(((((map__47865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47865):map__47865);
var memory = map__47865__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47865__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var vec__47866 = p__47864;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47866,(0),null);
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),"Popped empty stack.");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),a], null),cljs.core.peek(stack)),new cljs.core.Keyword(null,"stack","stack",-793405930),((cljs.core.empty_QMARK_(stack))?cljs.core.identity:cljs.core.pop)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a);
}
});
exfn.interpreter.push = (function exfn$interpreter$push(p__47870,args){
var map__47871 = p__47870;
var map__47871__$1 = (((((!((map__47871 == null))))?(((((map__47871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47871):map__47871);
var memory = map__47871__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47871__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var x = exfn.interpreter.get_value(registers,cljs.core.first(args));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,x);
});
exfn.interpreter.rep = (function exfn$interpreter$rep(p__47873,args){
var map__47874 = p__47873;
var map__47874__$1 = (((((!((map__47874 == null))))?(((((map__47874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47874):map__47874);
var memory = map__47874__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47874__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47874__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
if(cljs.core.seq(args)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)], null),cljs.core.conj,exfn.interpreter.get_value(registers,cljs.core.first(args))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip);
}
});
exfn.interpreter.rp = (function exfn$interpreter$rp(p__47876){
var map__47877 = p__47876;
var map__47877__$1 = (((((!((map__47877 == null))))?(((((map__47877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47877):map__47877);
var memory = map__47877__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47877__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var counter = cljs.core.peek((memory.cljs$core$IFn$_invoke$arity$1 ? memory.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)) : memory.call(null,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905))));
if((counter <= (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.conj,(counter - (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
}
});
exfn.interpreter.get_conditional_repeat_function = (function exfn$interpreter$get_conditional_repeat_function(f){
var pred__47879 = cljs.core._EQ_;
var expr__47880 = f;
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rz","rz",386461181),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rz","rz",386461181),expr__47880)))){
return (function (x){
return (!((x === (0))));
});
} else {
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__47880)))){
return cljs.core.zero_QMARK_;
} else {
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__47880)))){
return (function (x){
return (x > (0));
});
} else {
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__47880)))){
return (function (x){
return (x >= (0));
});
} else {
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__47880)))){
return (function (x){
return (x <= (0));
});
} else {
if(cljs.core.truth_((pred__47879.cljs$core$IFn$_invoke$arity$2 ? pred__47879.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__47880) : pred__47879.call(null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__47880)))){
return (function (x){
return (x < (0));
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47880)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.conditional_repeat = (function exfn$interpreter$conditional_repeat(p__47882,instruction,p__47883){
var map__47884 = p__47882;
var map__47884__$1 = (((((!((map__47884 == null))))?(((((map__47884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47884):map__47884);
var memory = map__47884__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47884__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47884__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__47885 = p__47883;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47885,(0),null);
var condition = exfn.interpreter.get_conditional_repeat_function(instruction);
if(cljs.core.truth_((function (){var G__47889 = exfn.interpreter.get_value(registers,a);
return (condition.cljs$core$IFn$_invoke$arity$1 ? condition.cljs$core$IFn$_invoke$arity$1(G__47889) : condition.call(null,G__47889));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
}
});
exfn.interpreter.interpret = (function exfn$interpreter$interpret(instructions,p__47890){
var map__47891 = p__47890;
var map__47891__$1 = (((((!((map__47891 == null))))?(((((map__47891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47891):map__47891);
var memory = map__47891__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47891__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var vec__47893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,eip);
var seq__47894 = cljs.core.seq(vec__47893);
var first__47895 = cljs.core.first(seq__47894);
var seq__47894__$1 = cljs.core.next(seq__47894);
var instruction = first__47895;
var args = seq__47894__$1;
var memory__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mov","mov",605355799),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.mov(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__47896 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"xor","xor",-1119942254),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null);
return (fexpr__47896.cljs$core$IFn$_invoke$arity$1 ? fexpr__47896.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__47896.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.math_func(instruction,memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cat","cat",-1457810207),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.str_cat(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.increment(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.decrement(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not","not",-595976884),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.bitnot(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"len","len",1423657078),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.strlen(memory,args),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args)),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__47897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nop","nop",-1754075182),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null), null);
return (fexpr__47897.cljs$core$IFn$_invoke$arity$1 ? fexpr__47897.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__47897.call(null,instruction));
})())?cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prn","prn",-78846618),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.prnout(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jnz","jnz",1316296026),instruction))?exfn.interpreter.jnz(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jmp","jmp",-1109847893),instruction))?exfn.interpreter.jmp(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmp","cmp",575646375),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.cmp(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):(cljs.core.truth_((function (){var fexpr__47898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__47898.cljs$core$IFn$_invoke$arity$1 ? fexpr__47898.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__47898.call(null,instruction));
})())?exfn.interpreter.cmp_jmp(memory,instruction,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction))?exfn.interpreter.call(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction))?exfn.interpreter.ret(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push","push",799791267),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.push(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop","pop",-1734778776),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.pop_stack(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),instruction))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.rep(memory,args),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rp","rp",2006698083),instruction))?exfn.interpreter.rp(memory):(cljs.core.truth_((function (){var fexpr__47899 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rgz","rgz",2018641921),null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),null,new cljs.core.Keyword(null,"rlz","rlz",701636908),null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),null,new cljs.core.Keyword(null,"rz","rz",386461181),null], null), null);
return (fexpr__47899.cljs$core$IFn$_invoke$arity$1 ? fexpr__47899.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__47899.call(null,instruction));
})())?exfn.interpreter.conditional_repeat(memory,instruction,args):memory
))))))))))))))))))));
var terminated_QMARK_ = ((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869))) > (cljs.core.count(instructions) - (1)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"memory","memory",-1449401430),((terminated_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : memory__$1.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))),"*** Program terminated: EIP past last instruction. ***")):memory__$1),new cljs.core.Keyword(null,"terminated?","terminated?",209866129),terminated_QMARK_,new cljs.core.Keyword(null,"finished?","finished?",2067288119),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),instruction)], null);
});

//# sourceMappingURL=exfn.interpreter.js.map
