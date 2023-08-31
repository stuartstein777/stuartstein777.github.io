goog.provide('exfn.interpreter');
goog.require('cljs.core');
exfn.interpreter.inc_dec_mod = (function exfn$interpreter$inc_dec_mod(f,n){
return cljs.core.mod((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),(256));
});
exfn.interpreter.reducer = (function exfn$interpreter$reducer(p__32579,i){
var map__32580 = p__32579;
var map__32580__$1 = (((((!((map__32580 == null))))?(((((map__32580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32580):map__32580);
var state = map__32580__$1;
var instr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32580__$1,new cljs.core.Keyword(null,"instr","instr",1938970239));
var open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32580__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
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
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["here!"], 0));

return new cljs.core.Keyword(null,"res","res",-1395007879).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.interpreter.reducer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"instr","instr",1938970239),(0),new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"res","res",-1395007879),cljs.core.PersistentArrayMap.EMPTY], null),code));
});
exfn.interpreter.get_jmp_target = (function exfn$interpreter$get_jmp_target(p__32582,direction){
var map__32583 = p__32582;
var map__32583__$1 = (((((!((map__32583 == null))))?(((((map__32583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32583):map__32583);
var dp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"dp","dp",-1761626539));
var memory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"memory","memory",-1449401430));
var ip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"ip","ip",58378915));
var jmp_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32583__$1,new cljs.core.Keyword(null,"jmp-table","jmp-table",-22718494));
var byte_at_dp = (memory.cljs$core$IFn$_invoke$arity$2 ? memory.cljs$core$IFn$_invoke$arity$2(dp,(0)) : memory.call(null,dp,(0)));
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"forward","forward",-557345303))) && ((byte_at_dp === (0))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"backward","backward",554036364))) && ((!((byte_at_dp === (0))))))))){
return ((jmp_table.cljs$core$IFn$_invoke$arity$1 ? jmp_table.cljs$core$IFn$_invoke$arity$1(ip) : jmp_table.call(null,ip)) + (1));
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"forward","forward",-557345303))) && ((!((byte_at_dp === (0))))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"backward","backward",554036364))) && ((byte_at_dp === (0))))))){
return (ip + (1));
} else {
return null;
}
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
var code_len = cljs.core.count(code__$1);
var vm = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ip","ip",58378915),(0),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.seq(input),new cljs.core.Keyword(null,"jmp-table","jmp-table",-22718494),exfn.interpreter.build_jmp_table(code__$1),new cljs.core.Keyword(null,"dp","dp",-1761626539),(0),new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentArrayMap.EMPTY], null);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(vm),code_len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043)) : vm.call(null,new cljs.core.Keyword(null,"output","output",-1105869043))));
} else {
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code__$1,new cljs.core.Keyword(null,"ip","ip",58378915).cljs$core$IFn$_invoke$arity$1(vm));
var pred__32604 = cljs.core._EQ_;
var expr__32605 = cur;
if(cljs.core.truth_((function (){var G__32607 = "+";
var G__32608 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32607,G__32608) : pred__32604.call(null,G__32607,G__32608));
})())){
var G__32636 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.interpreter.inc_dec_mod,cljs.core.inc),(0)));
vm = G__32636;
continue;
} else {
if(cljs.core.truth_((function (){var G__32609 = "-";
var G__32610 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32609,G__32610) : pred__32604.call(null,G__32609,G__32610));
})())){
var G__32643 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.interpreter.inc_dec_mod,cljs.core.dec),(0)));
vm = G__32643;
continue;
} else {
if(cljs.core.truth_((function (){var G__32611 = ">";
var G__32612 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32611,G__32612) : pred__32604.call(null,G__32611,G__32612));
})())){
var G__32644 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"dp","dp",-1761626539),cljs.core.inc);
vm = G__32644;
continue;
} else {
if(cljs.core.truth_((function (){var G__32613 = "<";
var G__32614 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32613,G__32614) : pred__32604.call(null,G__32613,G__32614));
})())){
var G__32645 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"dp","dp",-1761626539),cljs.core.dec);
vm = G__32645;
continue;
} else {
if(cljs.core.truth_((function (){var G__32615 = ".";
var G__32616 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32615,G__32616) : pred__32604.call(null,G__32615,G__32616));
})())){
var G__32646 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),String.fromCharCode(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),(0))));
vm = G__32646;
continue;
} else {
if(cljs.core.truth_((function (){var G__32617 = ",";
var G__32618 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32617,G__32618) : pred__32604.call(null,G__32617,G__32618));
})())){
var G__32647 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),(vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dp","dp",-1761626539)) : vm.call(null,new cljs.core.Keyword(null,"dp","dp",-1761626539)))], null),exfn.interpreter.read_input((vm.cljs$core$IFn$_invoke$arity$1 ? vm.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"input","input",556931961)) : vm.call(null,new cljs.core.Keyword(null,"input","input",556931961))))),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.rest);
vm = G__32647;
continue;
} else {
if(cljs.core.truth_((function (){var G__32619 = "[";
var G__32620 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32619,G__32620) : pred__32604.call(null,G__32619,G__32620));
})())){
var G__32648 = (function (){var new_ip = exfn.interpreter.get_jmp_target(vm,new cljs.core.Keyword(null,"forward","forward",-557345303));
return cljs.core.assoc_in(vm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ip","ip",58378915)], null),new_ip);
})();
vm = G__32648;
continue;
} else {
if(cljs.core.truth_((function (){var G__32621 = "]";
var G__32622 = expr__32605;
return (pred__32604.cljs$core$IFn$_invoke$arity$2 ? pred__32604.cljs$core$IFn$_invoke$arity$2(G__32621,G__32622) : pred__32604.call(null,G__32621,G__32622));
})())){
var G__32649 = (function (){var new_ip = exfn.interpreter.get_jmp_target(vm,new cljs.core.Keyword(null,"backward","backward",554036364));
return cljs.core.assoc_in(vm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ip","ip",58378915)], null),new_ip);
})();
vm = G__32649;
continue;
} else {
var G__32650 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(vm,new cljs.core.Keyword(null,"ip","ip",58378915),cljs.core.inc);
vm = G__32650;
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
