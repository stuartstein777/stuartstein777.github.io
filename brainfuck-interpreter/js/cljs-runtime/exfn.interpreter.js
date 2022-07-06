goog.provide('exfn.interpreter');
goog.require('cljs.core');
exfn.interpreter.increment = (function exfn$interpreter$increment(n){
return cljs.core.mod((n + (1)),(256));
});
exfn.interpreter.decrement = (function exfn$interpreter$decrement(n){
return cljs.core.mod((n - (1)),(256));
});
exfn.interpreter.reducer = (function exfn$interpreter$reducer(p__33167,i){
var map__33168 = p__33167;
var map__33168__$1 = (((((!((map__33168 == null))))?(((((map__33168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33168):map__33168);
var state = map__33168__$1;
var instr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"instr","instr",1938970239));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33168__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"[")){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.conj,instr),new cljs.core.Keyword(null,"instr","instr",1938970239),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,"]")){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.pop),new cljs.core.Keyword(null,"instr","instr",1938970239),cljs.core.inc),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.assoc,instr,cljs.core.peek(open)),new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.assoc,cljs.core.peek(open),instr);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"instr","instr",1938970239),cljs.core.inc);

}
}
});
exfn.interpreter.build_jmp_table = (function exfn$interpreter$build_jmp_table(code){
return new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.reducer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instr","instr",1938970239),(0),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.PersistentArrayMap.EMPTY], null),code));
});
exfn.interpreter.get_fwd_jump_target = (function exfn$interpreter$get_fwd_jump_target(p__33170){
var map__33171 = p__33170;
var map__33171__$1 = (((((!((map__33171 == null))))?(((((map__33171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33171):map__33171);
var dp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33171__$1,new cljs.core.Keyword(null,"dp","dp",-1761626539));
var memory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33171__$1,new cljs.core.Keyword(null,"memory","memory",-1449401430));
var ip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33171__$1,new cljs.core.Keyword(null,"ip","ip",58378915));
var jmp_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33171__$1,new cljs.core.Keyword(null,"jmp-table","jmp-table",-22718494));
var byte_at_dp = (memory.cljs$core$IFn$_invoke$arity$2 ? memory.cljs$core$IFn$_invoke$arity$2(dp,(0)) : memory.call(null,dp,(0)));
if((byte_at_dp === (0))){
return ((jmp_table.cljs$core$IFn$_invoke$arity$1 ? jmp_table.cljs$core$IFn$_invoke$arity$1(ip) : jmp_table.call(null,ip)) + (1));
} else {
return (ip + (1));
}
});
exfn.interpreter.get_bkwd_jump_target = (function exfn$interpreter$get_bkwd_jump_target(p__33173){
var map__33174 = p__33173;
var map__33174__$1 = (((((!((map__33174 == null))))?(((((map__33174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33174):map__33174);
var dp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33174__$1,new cljs.core.Keyword(null,"dp","dp",-1761626539));
var memory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33174__$1,new cljs.core.Keyword(null,"memory","memory",-1449401430));
var ip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33174__$1,new cljs.core.Keyword(null,"ip","ip",58378915));
var jmp_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33174__$1,new cljs.core.Keyword(null,"jmp-table","jmp-table",-22718494));
var byte_at_dp = (memory.cljs$core$IFn$_invoke$arity$2 ? memory.cljs$core$IFn$_invoke$arity$2(dp,(0)) : memory.call(null,dp,(0)));
if((byte_at_dp === (0))){
return (ip + (1));
} else {
return ((jmp_table.cljs$core$IFn$_invoke$arity$1 ? jmp_table.cljs$core$IFn$_invoke$arity$1(ip) : jmp_table.call(null,ip)) + (1));
}
});
exfn.interpreter.read_input = (function exfn$interpreter$read_input(input){
if(cljs.core.empty_QMARK_(input)){
return (0);
} else {
return cljs.core.first(input).charCodeAt();
}
});
exfn.interpreter.brain_fuck = (function exfn$interpreter$brain_fuck(code,input){
var code__$1 = cljs.core.seq(code);
var jmp_table = exfn.interpreter.build_jmp_table(code__$1);
var code_len = cljs.core.count(code__$1);
var vm = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ip","ip",58378915),(0),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.seq(input),new cljs.core.Keyword(null,"jmp-table","jmp-table",-22718494),jmp_table,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dp","dp",-1761626539),(0),new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentArrayMap.EMPTY], null);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(vm),code_len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : vm.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))));
} else {
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code__$1,new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(vm));
var pred__33195 = cljs.core._EQ_;
var expr__33196 = cur;
if(cljs.core.truth_((function (){var G__33198 = "+";
var G__33199 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33198,G__33199) : pred__33195.call(null,G__33198,G__33199));
})())){
var G__33226 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(exfn.interpreter.increment,(0)));
vm = G__33226;
continue;
} else {
if(cljs.core.truth_((function (){var G__33200 = "-";
var G__33201 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33200,G__33201) : pred__33195.call(null,G__33200,G__33201));
})())){
var G__33227 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(exfn.interpreter.decrement,(0)));
vm = G__33227;
continue;
} else {
if(cljs.core.truth_((function (){var G__33202 = ">";
var G__33203 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33202,G__33203) : pred__33195.call(null,G__33202,G__33203));
})())){
var G__33235 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"dp","dp",-1761626539),cljs.core.inc);
vm = G__33235;
continue;
} else {
if(cljs.core.truth_((function (){var G__33204 = "<";
var G__33205 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33204,G__33205) : pred__33195.call(null,G__33204,G__33205));
})())){
var G__33236 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"dp","dp",-1761626539),cljs.core.dec);
vm = G__33236;
continue;
} else {
if(cljs.core.truth_((function (){var G__33206 = ".";
var G__33207 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33206,G__33207) : pred__33195.call(null,G__33206,G__33207));
})())){
var G__33237 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.conj,String.fromCharCode(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),(0))));
vm = G__33237;
continue;
} else {
if(cljs.core.truth_((function (){var G__33208 = ",";
var G__33209 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33208,G__33209) : pred__33195.call(null,G__33208,G__33209));
})())){
var G__33238 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),exfn.interpreter.read_input((vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961)) : vm.call(null,new cljs.core.Keyword(null,"input","input",556931961))))),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.rest);
vm = G__33238;
continue;
} else {
if(cljs.core.truth_((function (){var G__33210 = "[";
var G__33211 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33210,G__33211) : pred__33195.call(null,G__33210,G__33211));
})())){
var G__33241 = (function (){var new_ip = exfn.interpreter.get_fwd_jump_target(vm);
return cljs.core.assoc_in(vm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ip","ip",58378915)], null),new_ip);
})();
vm = G__33241;
continue;
} else {
if(cljs.core.truth_((function (){var G__33212 = "]";
var G__33213 = expr__33196;
return (pred__33195.cljs$core$IFn$_invoke$arity$2 ? pred__33195.cljs$core$IFn$_invoke$arity$2(G__33212,G__33213) : pred__33195.call(null,G__33212,G__33213));
})())){
var G__33242 = (function (){var new_ip = exfn.interpreter.get_bkwd_jump_target(vm);
return cljs.core.assoc_in(vm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ip","ip",58378915)], null),new_ip);
})();
vm = G__33242;
continue;
} else {
var G__33243 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
vm = G__33243;
continue;
}
}
}
}
}
}
}
}
}
break;
}
});
exfn.interpreter.hello_world = "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
exfn.interpreter.fib = "+++++++++++>+>>>>++++++++++++++++++++++++++++++++++++++++++++>++++++++++++++++++++++++++++++++<<<<<<[>[>>>>>>+>+<<<<<<<-]>>>>>>>[<<<<<<<+>>>>>>>-]<[>++++++++++[-<-[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<[>>>+<<<-]>>[-]]<<]>>>[>>+>+<<<-]>>>[<<<+>>>-]+<[>[-]<[-]]>[<<+>>[-]]<<<<<<<]>>>>>[++++++++++++++++++++++++++++++++++++++++++++++++.[-]]++++++++++<[->-<]>++++++++++++++++++++++++++++++++++++++++++++++++.[-]<<<<<<<<<<<<[>>>+>+<<<<-]>>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+>-]>[<+>-]<<<-]";
exfn.interpreter.sorter = ">>,[>>,]<<[[<<]>>>>[<<[>+<<+>-]>>[>+<<<<[->]>[<]>>-]<<<[[-]>>[>+<-]>>[<<<+>>>-]]>>[[<+>-]>>]<]<<[>>+<<-]<<]>>>>[.>>]";
exfn.interpreter.bf_generator = "+++++[>+++++++++<-],[[>--.++>+<<-]>+.->[<.>-]<<,]";
exfn.interpreter.reverse_input = ">,[>,]<[.<]";

//# sourceMappingURL=exfn.interpreter.js.map
