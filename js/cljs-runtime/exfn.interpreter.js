goog.provide('exfn.interpreter');
exfn.interpreter.get_value = (function exfn$interpreter$get_value(registers,x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(registers,x);
} else {
return x;
}
});
exfn.interpreter.cmp_jump_predicates = (function exfn$interpreter$cmp_jump_predicates(jump_instruction){
var pred__31145 = cljs.core._EQ_;
var expr__31146 = jump_instruction;
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"jge","jge",-1714175238),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"jg","jg",-1962753332),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null], null), null);
} else {
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"jne","jne",-2047783498),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gt","gt",-1797443692),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"je","je",-374989490),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"je","je",-374989490),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eq","eq",-618539067),null], null), null);
} else {
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jle","jle",1869256266),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"jle","jle",1869256266),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eq","eq",-618539067),null,new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
if(cljs.core.truth_((pred__31145.cljs$core$IFn$_invoke$arity$2 ? pred__31145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jl","jl",89093076),expr__31146) : pred__31145.call(null,new cljs.core.Keyword(null,"jl","jl",89093076),expr__31146)))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),null], null), null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31146)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.build_symbol_table = (function exfn$interpreter$build_symbol_table(asm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__31152){
var vec__31153 = p__31152;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31153,(0),null);
var ix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31153,(1),null);
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
exfn.interpreter.mov = (function exfn$interpreter$mov(p__31157,p__31158){
var map__31159 = p__31157;
var map__31159__$1 = (((((!((map__31159 == null))))?(((((map__31159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31159.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31159):map__31159);
var memory = map__31159__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31159__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31160 = p__31158;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31160,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,exfn.interpreter.get_value(registers,b)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.prnout = (function exfn$interpreter$prnout(p__31164,args){
var map__31168 = p__31164;
var map__31168__$1 = (((((!((map__31168 == null))))?(((((map__31168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31168):map__31168);
var memory = map__31168__$1;
var output = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31168__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"output","output",-1105869043),exfn.interpreter.append_output(output,exfn.interpreter.get_value(registers,cljs.core.first(args)))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.add = (function exfn$interpreter$add(p__31172,p__31173){
var map__31174 = p__31172;
var map__31174__$1 = (((((!((map__31174 == null))))?(((((map__31174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31174):map__31174);
var memory = map__31174__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31174__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31175 = p__31173;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31175,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) + exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.sub = (function exfn$interpreter$sub(p__31179,p__31180){
var map__31181 = p__31179;
var map__31181__$1 = (((((!((map__31181 == null))))?(((((map__31181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31181):map__31181);
var memory = map__31181__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31181__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31182 = p__31180;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31182,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) - exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.mul = (function exfn$interpreter$mul(p__31186,p__31187){
var map__31188 = p__31186;
var map__31188__$1 = (((((!((map__31188 == null))))?(((((map__31188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31188):map__31188);
var memory = map__31188__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31188__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31189 = p__31187;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31189,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31189,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) * exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.div = (function exfn$interpreter$div(p__31195,p__31196){
var map__31197 = p__31195;
var map__31197__$1 = (((((!((map__31197 == null))))?(((((map__31197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31197):map__31197);
var memory = map__31197__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31197__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31198 = p__31196;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31198,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31198,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,cljs.core.quot(exfn.interpreter.get_value(registers,a),exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.xor = (function exfn$interpreter$xor(p__31202,p__31203){
var map__31204 = p__31202;
var map__31204__$1 = (((((!((map__31204 == null))))?(((((map__31204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31204):map__31204);
var memory = map__31204__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31204__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31205 = p__31203;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) ^ exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.bitand = (function exfn$interpreter$bitand(p__31209,p__31210){
var map__31211 = p__31209;
var map__31211__$1 = (((((!((map__31211 == null))))?(((((map__31211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31211):map__31211);
var memory = map__31211__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31211__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31212 = p__31210;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31212,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) & exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.bitor = (function exfn$interpreter$bitor(p__31219,p__31220){
var map__31221 = p__31219;
var map__31221__$1 = (((((!((map__31221 == null))))?(((((map__31221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31221):map__31221);
var memory = map__31221__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31221__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31222 = p__31220;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31222,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) & exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.str_cat = (function exfn$interpreter$str_cat(p__31242,p__31243){
var map__31248 = p__31242;
var map__31248__$1 = (((((!((map__31248 == null))))?(((((map__31248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31248):map__31248);
var memory = map__31248__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31248__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31249 = p__31243;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(exfn.interpreter.get_value(registers,b))].join('')),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.increment = (function exfn$interpreter$increment(p__31253,p__31254){
var map__31255 = p__31253;
var map__31255__$1 = (((((!((map__31255 == null))))?(((((map__31255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31255):map__31255);
var memory = map__31255__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31255__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31256 = p__31254;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31256,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) + (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.decrement = (function exfn$interpreter$decrement(p__31260,p__31261){
var map__31262 = p__31260;
var map__31262__$1 = (((((!((map__31262 == null))))?(((((map__31262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31262):map__31262);
var memory = map__31262__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31262__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31263 = p__31261;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31263,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(exfn.interpreter.get_value(registers,a) - (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.bitnot = (function exfn$interpreter$bitnot(p__31267,p__31268){
var map__31269 = p__31267;
var map__31269__$1 = (((((!((map__31269 == null))))?(((((map__31269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31269):map__31269);
var memory = map__31269__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31269__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31270 = p__31268;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31270,(0),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,(~ exfn.interpreter.get_value(registers,a))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.nop = (function exfn$interpreter$nop(memory){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.strlen = (function exfn$interpreter$strlen(p__31274,p__31275){
var map__31276 = p__31274;
var map__31276__$1 = (((((!((map__31276 == null))))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31276):map__31276);
var memory = map__31276__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31277 = p__31275;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31277,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31277,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,a,cljs.core.count(exfn.interpreter.get_value(registers,b))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.jnz = (function exfn$interpreter$jnz(p__31281,p__31282){
var map__31283 = p__31281;
var map__31283__$1 = (((((!((map__31283 == null))))?(((((map__31283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31283):map__31283);
var memory = map__31283__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31283__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31283__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31284 = p__31282;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31284,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31284,(1),null);
var jmp = (((exfn.interpreter.get_value(registers,a) === (0)))?(1):exfn.interpreter.get_value(registers,b));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(eip + jmp));
});
exfn.interpreter.jmp = (function exfn$interpreter$jmp(p__31288,p__31289){
var map__31290 = p__31288;
var map__31290__$1 = (((((!((map__31290 == null))))?(((((map__31290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31290):map__31290);
var memory = map__31290__$1;
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31290__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__31291 = p__31289;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31291,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.get.cljs$core$IFn$_invoke$arity$2(symbol_table,a));
});
exfn.interpreter.cmp = (function exfn$interpreter$cmp(p__31295,p__31296){
var map__31297 = p__31295;
var map__31297__$1 = (((((!((map__31297 == null))))?(((((map__31297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31297):map__31297);
var memory = map__31297__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31297__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31298 = p__31296;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31298,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31298,(1),null);
var av = exfn.interpreter.get_value(registers,a);
var bv = exfn.interpreter.get_value(registers,b);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"cmp","cmp",575646375)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(av,bv))?new cljs.core.Keyword(null,"eq","eq",-618539067):(((av > bv))?new cljs.core.Keyword(null,"gt","gt",-1797443692):(((av < bv))?new cljs.core.Keyword(null,"lt","lt",421989243):null)))),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.cmp_jmp = (function exfn$interpreter$cmp_jmp(p__31302,jump_type,p__31303){
var map__31304 = p__31302;
var map__31304__$1 = (((((!((map__31304 == null))))?(((((map__31304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31304):map__31304);
var memory = map__31304__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31304__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var internal_registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31304__$1,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31304__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__31305 = p__31303;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31305,(0),null);
var cmp = new cljs.core.Keyword(null,"cmp","cmp",575646375).cljs$core$IFn$_invoke$arity$1(internal_registers);
var valid_predicates = exfn.interpreter.cmp_jump_predicates(jump_type);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmp], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([valid_predicates], 0));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.truth_((valid_predicates.cljs$core$IFn$_invoke$arity$1 ? valid_predicates.cljs$core$IFn$_invoke$arity$1(cmp) : valid_predicates.call(null,cmp)))?(function (){var G__31309 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__31309) : symbol_table.call(null,G__31309));
})():(eip + (1))));
});
exfn.interpreter.call = (function exfn$interpreter$call(p__31310,p__31311){
var map__31312 = p__31310;
var map__31312__$1 = (((((!((map__31312 == null))))?(((((map__31312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31312):map__31312);
var memory = map__31312__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31312__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var symbol_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31312__$1,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521));
var vec__31313 = p__31311;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31313,(0),null);
var target = (function (){var G__31317 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(a);
return (symbol_table.cljs$core$IFn$_invoke$arity$1 ? symbol_table.cljs$core$IFn$_invoke$arity$1(G__31317) : symbol_table.call(null,G__31317));
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),target);
});
exfn.interpreter.ret = (function exfn$interpreter$ret(p__31318){
var map__31319 = p__31318;
var map__31319__$1 = (((((!((map__31319 == null))))?(((((map__31319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31319):map__31319);
var memory = map__31319__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31319__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1))),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
});
exfn.interpreter.pop_stack = (function exfn$interpreter$pop_stack(p__31321,p__31322){
var map__31323 = p__31321;
var map__31323__$1 = (((((!((map__31323 == null))))?(((((map__31323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31323):map__31323);
var memory = map__31323__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31323__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var vec__31324 = p__31322;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31324,(0),null);
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520)], null),cljs.core.assoc,new cljs.core.Keyword(null,"err","err",-2089457205),"Popped empty stack."),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(memory,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registers","registers",81921893),a], null),cljs.core.peek(stack)),new cljs.core.Keyword(null,"stack","stack",-793405930),((cljs.core.empty_QMARK_(stack))?cljs.core.identity:cljs.core.pop)),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),a),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
}
});
exfn.interpreter.push = (function exfn$interpreter$push(p__31328,args){
var map__31329 = p__31328;
var map__31329__$1 = (((((!((map__31329 == null))))?(((((map__31329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31329):map__31329);
var memory = map__31329__$1;
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31329__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var x = exfn.interpreter.get_value(registers,cljs.core.first(args));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj,x),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
});
exfn.interpreter.rep = (function exfn$interpreter$rep(p__31331,args){
var map__31332 = p__31331;
var map__31332__$1 = (((((!((map__31332 == null))))?(((((map__31332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31332):map__31332);
var memory = map__31332__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31332__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
if(cljs.core.seq(args)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)], null),cljs.core.conj,exfn.interpreter.get_value(registers,cljs.core.first(args))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(memory,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163)], null),cljs.core.conj,eip),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
}
});
exfn.interpreter.rp = (function exfn$interpreter$rp(p__31334){
var map__31335 = p__31334;
var map__31335__$1 = (((((!((map__31335 == null))))?(((((map__31335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31335):map__31335);
var memory = map__31335__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31335__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var counter = cljs.core.peek((memory.cljs$core$IFn$_invoke$arity$1 ? memory.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905)) : memory.call(null,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905))));
if((counter <= (1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop),new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.pop),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.conj,(counter - (1))),new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
}
});
exfn.interpreter.get_conditional_repeat_function = (function exfn$interpreter$get_conditional_repeat_function(f){
var pred__31337 = cljs.core._EQ_;
var expr__31338 = f;
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rz","rz",386461181),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rz","rz",386461181),expr__31338)))){
return (function (x){
return (!((x === (0))));
});
} else {
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),expr__31338)))){
return cljs.core.zero_QMARK_;
} else {
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),expr__31338)))){
return (function (x){
return (x > (0));
});
} else {
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rlz","rlz",701636908),expr__31338)))){
return (function (x){
return (x >= (0));
});
} else {
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rgz","rgz",2018641921),expr__31338)))){
return (function (x){
return (x <= (0));
});
} else {
if(cljs.core.truth_((pred__31337.cljs$core$IFn$_invoke$arity$2 ? pred__31337.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__31338) : pred__31337.call(null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),expr__31338)))){
return (function (x){
return (x < (0));
});
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31338)].join('')));
}
}
}
}
}
}
});
exfn.interpreter.conditional_repeat = (function exfn$interpreter$conditional_repeat(p__31340,instruction,p__31341){
var map__31342 = p__31340;
var map__31342__$1 = (((((!((map__31342 == null))))?(((((map__31342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31342):map__31342);
var memory = map__31342__$1;
var eip_stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31342__$1,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163));
var registers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31342__$1,new cljs.core.Keyword(null,"registers","registers",81921893));
var vec__31343 = p__31341;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31343,(0),null);
var condition = exfn.interpreter.get_conditional_repeat_function(instruction);
if(cljs.core.truth_((function (){var G__31347 = exfn.interpreter.get_value(registers,a);
return (condition.cljs$core$IFn$_invoke$arity$1 ? condition.cljs$core$IFn$_invoke$arity$1(G__31347) : condition.call(null,G__31347));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),(cljs.core.peek(eip_stack) + (1)));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(memory,new cljs.core.Keyword(null,"eip","eip",-346827869),cljs.core.inc),new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.pop);
}
});
exfn.interpreter.interpret = (function exfn$interpreter$interpret(instructions,p__31348){
var map__31349 = p__31348;
var map__31349__$1 = (((((!((map__31349 == null))))?(((((map__31349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31349):map__31349);
var memory = map__31349__$1;
var eip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31349__$1,new cljs.core.Keyword(null,"eip","eip",-346827869));
var vec__31351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(instructions,eip);
var seq__31352 = cljs.core.seq(vec__31351);
var first__31353 = cljs.core.first(seq__31352);
var seq__31352__$1 = cljs.core.next(seq__31352);
var instruction = first__31353;
var args = seq__31352__$1;
var memory__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mov","mov",605355799),instruction))?exfn.interpreter.mov(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add","add",235287739),instruction))?exfn.interpreter.add(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),instruction))?exfn.interpreter.sub(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mul","mul",-354626062),instruction))?exfn.interpreter.mul(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"div","div",1057191632),instruction))?exfn.interpreter.div(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"xor","xor",-1119942254),instruction))?exfn.interpreter.xor(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"and","and",-971899817),instruction))?exfn.interpreter.bitand(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"or","or",235744169),instruction))?exfn.interpreter.bitor(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cat","cat",-1457810207),instruction))?exfn.interpreter.str_cat(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc","inc",-1316026094),instruction))?exfn.interpreter.increment(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dec","dec",1888433436),instruction))?exfn.interpreter.decrement(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not","not",-595976884),instruction))?exfn.interpreter.bitnot(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"len","len",1423657078),instruction))?exfn.interpreter.strlen(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nop","nop",-1754075182),instruction))?exfn.interpreter.nop(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prn","prn",-78846618),instruction))?exfn.interpreter.prnout(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jnz","jnz",1316296026),instruction))?exfn.interpreter.jnz(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),instruction))?exfn.interpreter.nop(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"jmp","jmp",-1109847893),instruction))?exfn.interpreter.jmp(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cmp","cmp",575646375),instruction))?exfn.interpreter.cmp(memory,args):(cljs.core.truth_((function (){var fexpr__31354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"jle","jle",1869256266),null,new cljs.core.Keyword(null,"jg","jg",-1962753332),null,new cljs.core.Keyword(null,"je","je",-374989490),null,new cljs.core.Keyword(null,"jl","jl",89093076),null,new cljs.core.Keyword(null,"jne","jne",-2047783498),null,new cljs.core.Keyword(null,"jge","jge",-1714175238),null], null), null);
return (fexpr__31354.cljs$core$IFn$_invoke$arity$1 ? fexpr__31354.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__31354.call(null,instruction));
})())?exfn.interpreter.cmp_jmp(memory,instruction,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"call","call",-519999866),instruction))?exfn.interpreter.call(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ret","ret",-468222814),instruction))?exfn.interpreter.ret(memory):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"push","push",799791267),instruction))?exfn.interpreter.push(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pop","pop",-1734778776),instruction))?exfn.interpreter.pop_stack(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rep","rep",-1226820564),instruction))?exfn.interpreter.rep(memory,args):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rp","rp",2006698083),instruction))?exfn.interpreter.rp(memory):(cljs.core.truth_((function (){var fexpr__31355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rgz","rgz",2018641921),null,new cljs.core.Keyword(null,"rnz","rnz",-1575911994),null,new cljs.core.Keyword(null,"rlz","rlz",701636908),null,new cljs.core.Keyword(null,"rgez","rgez",-593603636),null,new cljs.core.Keyword(null,"rlez","rlez",-1075597671),null,new cljs.core.Keyword(null,"rz","rz",386461181),null], null), null);
return (fexpr__31355.cljs$core$IFn$_invoke$arity$1 ? fexpr__31355.cljs$core$IFn$_invoke$arity$1(instruction) : fexpr__31355.call(null,instruction));
})())?exfn.interpreter.conditional_repeat(memory,instruction,args):memory
)))))))))))))))))))))))))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"memory","memory",-1449401430),memory__$1,new cljs.core.Keyword(null,"finished?","finished?",2067288119),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end","end",-268185958),instruction)) || (((memory__$1.cljs$core$IFn$_invoke$arity$1 ? memory__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"eip","eip",-346827869)) : memory__$1.call(null,new cljs.core.Keyword(null,"eip","eip",-346827869))) > cljs.core.count(instructions))))], null);
});

//# sourceMappingURL=exfn.interpreter.js.map
