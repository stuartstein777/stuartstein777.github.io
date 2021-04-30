goog.provide('exfn.interpreter');
exfn.interpreter.get_value = (function exfn$interpreter$get_value(registers,x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,x);
} else {
return x;
}
});
exfn.interpreter.mov = (function exfn$interpreter$mov(registers,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(registers,x,exfn.interpreter.get_value(registers,y));
});
exfn.interpreter.unary_op = (function exfn$interpreter$unary_op(registers,op,x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(registers,x,op);
});
exfn.interpreter.binary_op = (function exfn$interpreter$binary_op(registers,op,x,y){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(registers,x,(function (){var G__30936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,x);
var G__30937 = exfn.interpreter.get_value(registers,y);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__30936,G__30937) : op.call(null,G__30936,G__30937));
})());
});
exfn.interpreter.cmp_jump_predicates = (function exfn$interpreter$cmp_jump_predicates(jump_instruction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jge","jge",-1714175238),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jg","jg",-1962753332),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jne","jne",-2047783498),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"je","je",-374989490),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jle","jle",1869256266),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jl","jl",89093076),jump_instruction)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
return null;
}
}
}
}
}
}
});
exfn.interpreter.get_binary_operations = (function exfn$interpreter$get_binary_operations(instruction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),instruction)){
return cljs.core._PLUS_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),instruction)){
return cljs.core._;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mul","mul",-354626062),instruction)){
return cljs.core._STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),instruction)){
return cljs.core.quot;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xor","xor",-1119942254),instruction)){
return cljs.core.bit_xor;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),instruction)){
return cljs.core.bit_or;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),instruction)){
return cljs.core.bit_and;
} else {
return null;
}
}
}
}
}
}
}
});
exfn.interpreter.get_unary_operation = (function exfn$interpreter$get_unary_operation(instruction){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),instruction)){
return cljs.core.inc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),instruction)){
return cljs.core.dec;
} else {
return null;
}
}
});
exfn.interpreter.jnz = (function exfn$interpreter$jnz(registers,x,y){
if((exfn.interpreter.get_value(registers,x) === (0))){
return (1);
} else {
return exfn.interpreter.get_value(registers,y);
}
});
exfn.interpreter.cmp = (function exfn$interpreter$cmp(registers,x,y){
var x_val = (((x instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,x):x);
var y_val = (((y instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,y):y);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_val,y_val)){
return new cljs.core.Keyword(null,"eq","eq",-618539067);
} else {
if((x_val > y_val)){
return new cljs.core.Keyword(null,"gt","gt",-1797443692);
} else {
if((x_val < y_val)){
return new cljs.core.Keyword(null,"lt","lt",421989243);
} else {
return null;
}
}
}
});
exfn.interpreter.cmp_jmp = (function exfn$interpreter$cmp_jmp(internal_registers,symbol_table,eip,valid_comps,lbl){
if(((function (){var G__30938 = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(internal_registers);
return (valid_comps.cljs$core$IFn$_invoke$arity$1 ? valid_comps.cljs$core$IFn$_invoke$arity$1(G__30938) : valid_comps.call(null,G__30938));
})() == null)){
return (eip + (1));
} else {
return (lbl.cljs$core$IFn$_invoke$arity$1 ? lbl.cljs$core$IFn$_invoke$arity$1(symbol_table) : lbl.call(null,symbol_table));
}
});
exfn.interpreter.call = (function exfn$interpreter$call(symbol_table,label){
return (label.cljs$core$IFn$_invoke$arity$1 ? label.cljs$core$IFn$_invoke$arity$1(symbol_table) : label.call(null,symbol_table));
});
exfn.interpreter.set_message = (function exfn$interpreter$set_message(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30976 = arguments.length;
var i__4737__auto___30977 = (0);
while(true){
if((i__4737__auto___30977 < len__4736__auto___30976)){
args__4742__auto__.push((arguments[i__4737__auto___30977]));

var G__30978 = (i__4737__auto___30977 + (1));
i__4737__auto___30977 = G__30978;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return exfn.interpreter.set_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(exfn.interpreter.set_message.cljs$core$IFn$_invoke$arity$variadic = (function (registers,args){
return cljs.core.assoc_in(registers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"return-code","return-code",484385358)], null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (s,a){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,a))].join('');
}),args));
}));

(exfn.interpreter.set_message.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(exfn.interpreter.set_message.cljs$lang$applyTo = (function (seq30939){
var G__30940 = cljs.core.first(seq30939);
var seq30939__$1 = cljs.core.next(seq30939);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30940,seq30939__$1);
}));

exfn.interpreter.return_value = (function exfn$interpreter$return_value(registers,return_registers_QMARK_){
var res = new cljs.core.Keyword(null,"return-code","return-code",484385358).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520).cljs$core$IFn$_invoke$arity$1(registers));
var ret_value = (((res == null))?(0):(cljs.core.truth_(cljs.core.re_matches(/^[\+\-]?\d*\.?[Ee]?[\+\-]?\d*$/,res))?Number(res):res
));
if(cljs.core.truth_(return_registers_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret_value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(registers,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520))], null);
} else {
return ret_value;
}
});
exfn.interpreter.process_jump = (function exfn$interpreter$process_jump(eip,instruction,registers,internal_registers,symbol_table,eip_stack,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jmp","jmp",-1109847893),instruction)){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(symbol_table,cljs.core.first(args)) + (1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jnz","jnz",1316296026),instruction)){
var vec__30941 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30941,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30941,(1),null);
return (eip + exfn.interpreter.jnz(registers,x,y));
} else {
if(cljs.core.truth_((function (){var fexpr__30944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__30944.cljs$core$IFn$_invoke$arity$1 ? fexpr__30944.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__30944.call(null,instruction));
})())){
var pred = exfn.interpreter.cmp_jump_predicates(instruction);
var x = cljs.core.first(args);
return exfn.interpreter.cmp_jmp(internal_registers,symbol_table,eip,pred,x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction)){
return exfn.interpreter.call(symbol_table,cljs.core.first(args));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction)){
if(cljs.core.empty_QMARK_(eip_stack)){
return (-1);
} else {
return (cljs.core.peek(eip_stack) + (1));
}
} else {
return (eip + (1));

}
}
}
}
}
});
exfn.interpreter.process_instruction = (function exfn$interpreter$process_instruction(instruction,p__30946,args){
var map__30947 = p__30946;
var map__30947__$1 = (((((!((map__30947 == null))))?(((((map__30947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30947):map__30947);
var memory = map__30947__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30947__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30947__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mov","mov",605355799),instruction)){
var vec__30949 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30949,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30949,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"registers","registers",81921893),exfn.interpreter.mov(registers,x,y)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),x);
} else {
if(cljs.core.truth_((function (){var fexpr__30952 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inc","inc",-1316026094),null,new cljs.core.Keyword(null,"dec","dec",1888433436),null], null), null);
return (fexpr__30952.cljs$core$IFn$_invoke$arity$1 ? fexpr__30952.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__30952.call(null,instruction));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"registers","registers",81921893),exfn.interpreter.unary_op(registers,exfn.interpreter.get_unary_operation(instruction),cljs.core.first(args))),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args));
} else {
if(cljs.core.truth_((function (){var fexpr__30953 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"xor","xor",-1119942254),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"add","add",235287739),null], null), null);
return (fexpr__30953.cljs$core$IFn$_invoke$arity$1 ? fexpr__30953.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__30953.call(null,instruction));
})())){
var vec__30954 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"registers","registers",81921893),exfn.interpreter.binary_op(registers,exfn.interpreter.get_binary_operations(instruction),x,y)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),x);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmp","cmp",575646375),instruction)){
var vec__30957 = args;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30957,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30957,(1),null);
return cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"cmp","cmp",575646375)], null),exfn.interpreter.cmp(registers,x,y));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop","pop",-1734778776),instruction)){
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),"Popped empty stack.");
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"registers","registers",81921893),exfn.interpreter.mov(registers,cljs.core.first(args),cljs.core.peek(stack))),new cljs.core.Keyword(null,"stack","stack",-793405930),((cljs.core.empty_QMARK_(stack))?cljs.core.identity:cljs.core.pop)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),cljs.core.first(args));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push","push",799791267),instruction)){
var x = exfn.interpreter.get_value(registers,cljs.core.first(args));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"stack","stack",-793405930),(function (p1__30945_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30945_SHARP_,x);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"msg","msg",-1386103444),instruction)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.interpreter.set_message,registers),args));
} else {
return null;
}
}
}
}
}
}
}
});
exfn.interpreter.build_symbol_table = (function exfn$interpreter$build_symbol_table(asm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__30960){
var vec__30961 = p__30960;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30961,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30961,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ix),new cljs.core.Keyword(null,"label","label",1718410804))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,cljs.core.second(ix),i);
} else {
return a;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),asm));
});
exfn.interpreter.interpret = (function exfn$interpreter$interpret(instructions,p__30964){
var map__30965 = p__30964;
var map__30965__$1 = (((((!((map__30965 == null))))?(((((map__30965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30965):map__30965);
var memory = map__30965__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var internal_registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30965__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__30967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,eip);
var seq__30968 = cljs.core.seq(vec__30967);
var first__30969 = cljs.core.first(seq__30968);
var seq__30968__$1 = cljs.core.next(seq__30968);
var instruction = first__30969;
var args = seq__30968__$1;
var new_eip = (cljs.core.truth_((function (){var fexpr__30970 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"ret","ret",-468222814),null,new cljs.core.Keyword(null,"jgl","jgl",-1806173053),null,new cljs.core.Keyword(null,"call","call",-519999866),null,new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jmp","jmp",-1109847893),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jnz","jnz",1316296026),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__30970.cljs$core$IFn$_invoke$arity$1 ? fexpr__30970.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__30970.call(null,instruction));
})())?exfn.interpreter.process_jump(eip,instruction,registers,internal_registers,symbol_table,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163).cljs$core$IFn$_invoke$arity$1(memory),args):(eip + (1)));
var memory__$1 = (cljs.core.truth_((function (){var fexpr__30971 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"push","push",799791267),null,new cljs.core.Keyword(null,"sub","sub",-2093760025),null,new cljs.core.Keyword(null,"cmp","cmp",575646375),null,new cljs.core.Keyword(null,"pop","pop",-1734778776),null,new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"msg","msg",-1386103444),null,new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.Keyword(null,"inc","inc",-1316026094),null,new cljs.core.Keyword(null,"xor","xor",-1119942254),null,new cljs.core.Keyword(null,"mul","mul",-354626062),null,new cljs.core.Keyword(null,"and","and",-971899817),null,new cljs.core.Keyword(null,"mov","mov",605355799),null,new cljs.core.Keyword(null,"add","add",235287739),null,new cljs.core.Keyword(null,"dec","dec",1888433436),null], null), null);
return (fexpr__30971.cljs$core$IFn$_invoke$arity$1 ? fexpr__30971.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__30971.call(null,instruction));
})())?exfn.interpreter.process_instruction(instruction,memory,args):memory);
var eip_stack = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction))?cljs.core.pop(new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163).cljs$core$IFn$_invoke$arity$1(memory__$1)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163).cljs$core$IFn$_invoke$arity$1(memory__$1),eip):new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163).cljs$core$IFn$_invoke$arity$1(memory__$1)
));
var output = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prn","prn",-78846618),instruction))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,cljs.core.first(args))):null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory__$1,new cljs.core.Keyword(null,"eip","eip",-346827869),new_eip),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),eip_stack),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,new_eip),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end","end",-268185958)], null))) || ((new_eip > cljs.core.count(instructions)))),output], null);
});

//# sourceMappingURL=exfn.interpreter.js.map
