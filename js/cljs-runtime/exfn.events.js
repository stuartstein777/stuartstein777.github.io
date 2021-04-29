goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"finished?","finished?",2067288119),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)],[false,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),null], null),false,"; function calls.\nmov a 0    ; a = 0\nmov b 1    ; a = 0, b = 1\nmov c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul c b    ; a = 0, b = 2, c = 4\ncmp a b    ; :cmp = lt\njne quax   ; jump\nmul c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor b b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd a 7    ; a = 7, b = 2, c = 4\nsub c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack",null,cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentHashSet.EMPTY,(1000)]);
}));
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__32092){
var vec__32093 = p__32092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32093,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),(function (_){
return (document.getElementById("code-container").scrollTop = (0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__32096,_){
var map__32097 = p__32096;
var map__32097__$1 = (((((!((map__32097 == null))))?(((((map__32097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32097):map__32097);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32097__$1,new cljs.core.Keyword(null,"db","db",993250759));
var parsed = exfn.parser.parse((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539)) : db.call(null,new cljs.core.Keyword(null,"source","source",-433931539))));
var symbol_table = exfn.interpreter.build_symbol_table(parsed);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),symbol_table], null)),new cljs.core.Keyword(null,"code","code",1586293142),parsed),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),(cljs.core.count(parsed) > (0))),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-parsed","clear-parsed",-1655539557),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__32099,p__32100){
var map__32101 = p__32099;
var map__32101__$1 = (((((!((map__32101 == null))))?(((((map__32101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32101):map__32101);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32101__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32102 = p__32100;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32102,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32102,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__32106,p__32107){
var map__32108 = p__32106;
var map__32108__$1 = (((((!((map__32108 == null))))?(((((map__32108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32108):map__32108);
var db = map__32108__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32108__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__32109 = p__32107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32109,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__32113){
var vec__32114 = p__32113;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32114,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32114,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__32117){
var vec__32118 = p__32117;
var running_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32118,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32118,(1),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32118,(2),null);
if(cljs.core.truth_(running_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,speed)], null));
} else {
return clearInterval(handle);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),(function (eip){
return (document.getElementById("code-container").scrollTop = (eip * (25)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__32121,_){
var map__32122 = p__32121;
var map__32122__$1 = (((((!((map__32122 == null))))?(((((map__32122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32122):map__32122);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32122__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)) : db.call(null,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)))], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),(function (p__32124){
var vec__32125 = p__32124;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32125,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32125,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (p__32128,_){
var map__32129 = p__32128;
var map__32129__$1 = (((((!((map__32129 == null))))?(((((map__32129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32129):map__32129);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32129__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))], null)),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904),(function (p__32131,_){
var map__32132 = p__32131;
var map__32132__$1 = (((((!((map__32132 == null))))?(((((map__32132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32132):map__32132);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32132__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32134 = exfn.interpreter.interpret((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : db.call(null,new cljs.core.Keyword(null,"code","code",1586293142))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430)) : db.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430))));
var memory = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32134,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32134,(1),null);
var breakpoints = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)) : db.call(null,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)));
var db__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),memory),new cljs.core.Keyword(null,"finished?","finished?",2067288119),finished_QMARK_);
if((!(((function (){var G__32137 = new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory);
return (breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(G__32137) : breakpoints.call(null,G__32137));
})() == null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),true),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),finished_QMARK_], null)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__32138){
var vec__32139 = p__32138;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32139,(0),null);
var vec__32142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32139,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32142,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-running-speed","update-running-speed",-1892375383),(function (db,p__32145){
var vec__32146 = p__32145;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32146,(0),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32146,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183),speed);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-stack","add-value-to-stack",-680759018),(function (db,p__32149){
var vec__32150 = p__32149;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32150,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32150,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-eip","reset-eip",-2046799124),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"eip","eip",-346827869)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-code","test-code",-1774221919),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov a 0    ; a = 0\nmov b 1    ; a = 0, b = 1\nmov c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul c b    ; a = 0, b = 2, c = 4\ncmp a b    ; :cmp = lt\njne quax   ; jump\nmul c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor b b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd a 7    ; a = 7, b = 2, c = 4\nsub c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack");
}));

//# sourceMappingURL=exfn.events.js.map
