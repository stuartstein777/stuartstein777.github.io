goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"finished?","finished?",2067288119),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)],[false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),new cljs.core.Keyword(null,"eip","eip",-346827869),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),new cljs.core.Keyword(null,"termination-message","termination-message",647459967)],[cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"$ Toy Asm Output >",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,""]),false,".macros\n   %square-and-sum\n      mul %1 %1\n      mul %2 %2\n      add %1 %2\n   %end\n   %add-ten\n      add %1 10\n   %end\n\n.code\n; function calls.\nmov :a 0    ; a = 0\nmov :b 1    ; a = 0, b = 1\nsquare-and-sum(:a, :b)\nmov :c 2    ; a = 0, b = 1, c = 2\nprn :b\ncall foo   ; move eip to foo, push eip to eip-stack\nmul :c :b    ; a = 0, b = 2, c = 4\ncmp :a :b    ; :cmp = lt\njne quax   ; jump\nmul :c 10   ;\n\n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\npop :d\npop :e\nprn :d\nprn :e\nxor :b :b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n\n\n;; foo:: increment b\nfoo:\ninc :b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd :a 7    ; a = 7, b = 2, c = 4\nsub :c 1    ; a = 7, b = 2, c = 3\npush 3\npush 4\nret        ; ret to bar call, pop eip stack\n\n.data\nxyz 123",null,cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentHashSet.EMPTY,(250)]);
}));
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__48809){
var vec__48810 = p__48809;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48810,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48810,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),(function (_){
return (document.getElementById("code-container").scrollTop = (0));
}));
exfn.events.fill_data = (function exfn$events$fill_data(data){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,data));
});
exfn.events.fill_data(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foo 42","quax `this is a string`","bar 'abc `def` ghi'"], null));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__48813,_){
var map__48814 = p__48813;
var map__48814__$1 = (((((!((map__48814 == null))))?(((((map__48814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48814):map__48814);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48814__$1,new cljs.core.Keyword(null,"db","db",993250759));
var parsed = exfn.parser.parse((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539)) : db.call(null,new cljs.core.Keyword(null,"source","source",-433931539))));
var symbol_table = exfn.interpreter.build_symbol_table((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),new cljs.core.Keyword(null,"eip","eip",-346827869),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),new cljs.core.Keyword(null,"termination-message","termination-message",647459967)],[cljs.core.PersistentVector.EMPTY,(0),exfn.events.fill_data((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377)) : parsed.call(null,new cljs.core.Keyword(null,"data","data",-232669377)))),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)),symbol_table,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,""])),new cljs.core.Keyword(null,"code","code",1586293142),(parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142)))),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),(cljs.core.count((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142)))) > (0))),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_,new cljs.core.Keyword(null,"end-running","end-running",420137350),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-parsed","clear-parsed",-1655539557),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-breakpoints","clear-breakpoints",-910746754),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.PersistentHashSet.EMPTY);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__48816,p__48817){
var map__48818 = p__48816;
var map__48818__$1 = (((((!((map__48818 == null))))?(((((map__48818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48818):map__48818);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48818__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__48819 = p__48817;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48819,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48819,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-source","clear-source",-602361457),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__48823,p__48824){
var map__48825 = p__48823;
var map__48825__$1 = (((((!((map__48825 == null))))?(((((map__48825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48825):map__48825);
var db = map__48825__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48825__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__48826 = p__48824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48826,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__48830){
var vec__48831 = p__48830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48831,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__48834){
var vec__48835 = p__48834;
var running_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(1),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48835,(2),null);
if(cljs.core.truth_(running_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,speed)], null));
} else {
return clearInterval(handle);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),(function (eip){
return (document.getElementById("code-container").scrollTop = (eip * (25)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__48838,_){
var map__48839 = p__48838;
var map__48839__$1 = (((((!((map__48839 == null))))?(((((map__48839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48839):map__48839);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48839__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)) : db.call(null,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)))], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-running","end-running",420137350),(function (handle){
return clearInterval(handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),(function (p__48841){
var vec__48842 = p__48841;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48842,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48842,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (p__48845,_){
var map__48846 = p__48845;
var map__48846__$1 = (((((!((map__48846 == null))))?(((((map__48846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48846):map__48846);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48846__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),new cljs.core.Keyword(null,"eip","eip",-346827869),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),new cljs.core.Keyword(null,"termination-message","termination-message",647459967)],[cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,""])),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904),(function (p__48848,_){
var map__48849 = p__48848;
var map__48849__$1 = (((((!((map__48849 == null))))?(((((map__48849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48849):map__48849);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48849__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__48851 = exfn.interpreter.interpret((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : db.call(null,new cljs.core.Keyword(null,"code","code",1586293142))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430)) : db.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430))));
var map__48851__$1 = (((((!((map__48851 == null))))?(((((map__48851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48851):map__48851);
var memory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"memory","memory",-1449401430));
var finished_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"finished?","finished?",2067288119));
var terminated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48851__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129));
var breakpoints = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)) : db.call(null,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)));
var db__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),memory),new cljs.core.Keyword(null,"finished?","finished?",2067288119),finished_QMARK_),new cljs.core.Keyword(null,"running?","running?",-257884763),(cljs.core.truth_(finished_QMARK_)?false:(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))));
if((!(((function (){var G__48853 = new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory);
return (breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(G__48853) : breakpoints.call(null,G__48853));
})() == null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),true),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
} else {
if(cljs.core.truth_(terminated_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129),terminated_QMARK_),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),true),new cljs.core.Keyword(null,"termination-message","termination-message",647459967),"EIP moved beyond last instruction. Program terminated."),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(function (){var or__4126__auto__ = finished_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return terminated_QMARK_;
}
})()], null)], null);
} else {
if(cljs.core.truth_(finished_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),true),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(function (){var or__4126__auto__ = finished_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return terminated_QMARK_;
}
})()], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(function (){var or__4126__auto__ = finished_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return terminated_QMARK_;
}
})()], null)], null);

}
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-output","clear-output",-1992375499),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"output","output",-1105869043)], null),"$ Toy Asm Output >");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__48854){
var vec__48855 = p__48854;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48855,(0),null);
var vec__48858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48855,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48858,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48858,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-running-speed","update-running-speed",-1892375383),(function (db,p__48861){
var vec__48862 = p__48861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48862,(0),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48862,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183),speed);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-stack","add-value-to-stack",-680759018),(function (db,p__48865){
var vec__48866 = p__48865;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48866,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48866,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-eip","reset-eip",-2046799124),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"eip","eip",-346827869)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-code","test-code",-1774221919),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov :a 0    ; a = 0\nmov :b 1    ; a = 0, b = 1\nmov :c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul :c :b    ; a = 0, b = 2, c = 4\ncmp :a :b    ; :cmp = lt\njne quax   ; jump\nmul :c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor :b :b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc :b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd :a 7    ; a = 7, b = 2, c = 4\nsub :c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack");
}));

//# sourceMappingURL=exfn.events.js.map
