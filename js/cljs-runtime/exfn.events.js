goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"running?","running?",-257884763),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"finished?","finished?",2067288119),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)],[false,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),new cljs.core.Keyword(null,"eip","eip",-346827869),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),new cljs.core.Keyword(null,"termination-message","termination-message",647459967)],[cljs.core.PersistentVector.EMPTY,(0),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,"$ Toy Asm Output >",cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,""]),false,".macros\n   %square-and-sum\n      mul %1 %1\n      mul %2 %2\n      add %1 %2\n   %end\n   %add-ten\n      add %1 10\n   %end\n\n.code\n; function calls.\nmov :a 0    ; a = 0\nmov :b 1    ; a = 0, b = 1\nsquare-and-sum(:a, :b)\nmov :c 2    ; a = 0, b = 1, c = 2\nprn :b\ncall foo   ; move eip to foo, push eip to eip-stack\nmul :c :b    ; a = 0, b = 2, c = 4\ncmp :a :b    ; :cmp = lt\njne quax   ; jump\nmul :c 10   ;\n\n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\npop :d\npop :e\nprn :d\nprn :e\nxor :b :b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n\n\n;; foo:: increment b\nfoo:\ninc :b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd :a 7    ; a = 7, b = 2, c = 4\nsub :c 1    ; a = 7, b = 2, c = 3\npush 3\npush 4\nret        ; ret to bar call, pop eip stack\n\n.data\nxyz 123",null,cljs.core.PersistentVector.EMPTY,false,false,cljs.core.PersistentHashSet.EMPTY,(250)]);
}));
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__29760){
var vec__29761 = p__29760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29761,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29761,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),(function (_){
return (document.getElementById("code-container").scrollTop = (0));
}));
exfn.events.fill_data_registers = (function exfn$events$fill_data_registers(data){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,data));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__29764,_){
var map__29765 = p__29764;
var map__29765__$1 = (((((!((map__29765 == null))))?(((((map__29765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29765):map__29765);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29765__$1,new cljs.core.Keyword(null,"db","db",993250759));
var parsed = exfn.parser.parse((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539)) : db.call(null,new cljs.core.Keyword(null,"source","source",-433931539))));
var symbol_table = exfn.interpreter.build_symbol_table((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),new cljs.core.Keyword(null,"eip","eip",-346827869),new cljs.core.Keyword(null,"registers","registers",81921893),new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),new cljs.core.Keyword(null,"termination-message","termination-message",647459967)],[cljs.core.PersistentVector.EMPTY,(0),exfn.events.fill_data_registers((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377)) : parsed.call(null,new cljs.core.Keyword(null,"data","data",-232669377)))),cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))),"\nUser terminated."].join(''):new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))),symbol_table,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,""])),new cljs.core.Keyword(null,"code","code",1586293142),(parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142)))),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),(cljs.core.count((parsed.cljs$core$IFn$_invoke$arity$1 ? parsed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : parsed.call(null,new cljs.core.Keyword(null,"code","code",1586293142)))) > (0))),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_,new cljs.core.Keyword(null,"end-running","end-running",420137350),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-parsed","clear-parsed",-1655539557),(function (p__29767,_){
var map__29768 = p__29767;
var map__29768__$1 = (((((!((map__29768 == null))))?(((((map__29768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29768):map__29768);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29768__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"output","output",-1105869043),(cljs.core.truth_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))),"\nUser terminated."].join(''):new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"end-running","end-running",420137350),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-breakpoints","clear-breakpoints",-910746754),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.PersistentHashSet.EMPTY);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__29770,p__29771){
var map__29772 = p__29770;
var map__29772__$1 = (((((!((map__29772 == null))))?(((((map__29772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29772):map__29772);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29772__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29773 = p__29771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29773,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29773,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-source","clear-source",-602361457),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"");
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__29777,p__29778){
var map__29779 = p__29777;
var map__29779__$1 = (((((!((map__29779 == null))))?(((((map__29779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29779):map__29779);
var db = map__29779__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__29780 = p__29778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29780,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__29784){
var vec__29785 = p__29784;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__29788){
var vec__29789 = p__29788;
var running_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789,(1),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29789,(2),null);
if(cljs.core.truth_(running_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,speed)], null));
} else {
return clearInterval(handle);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),(function (eip){
return (document.getElementById("code-container").scrollTop = (eip * (25)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__29792,_){
var map__29793 = p__29792;
var map__29793__$1 = (((((!((map__29793 == null))))?(((((map__29793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29793):map__29793);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29793__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)) : db.call(null,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183)))], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-running","end-running",420137350),(function (handle){
return clearInterval(handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),(function (p__29795){
var vec__29796 = p__29795;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29796,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (p__29799,_){
var map__29800 = p__29799;
var map__29800__$1 = (((((!((map__29800 == null))))?(((((map__29800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29800):map__29800);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29800__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep-counters-stack","rep-counters-stack",-1518632905),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"output","output",-1105869043),(cljs.core.truth_((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))),"\nUser terminated."].join(''):new cljs.core.Keyword(null,"output","output",-1105869043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db)))], null)),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904),(function (p__29802,_){
var map__29803 = p__29802;
var map__29803__$1 = (((((!((map__29803 == null))))?(((((map__29803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29803):map__29803);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29803__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__29805 = exfn.interpreter.interpret((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : db.call(null,new cljs.core.Keyword(null,"code","code",1586293142))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430)) : db.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430))));
var map__29805__$1 = (((((!((map__29805 == null))))?(((((map__29805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29805):map__29805);
var memory = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29805__$1,new cljs.core.Keyword(null,"memory","memory",-1449401430));
var finished_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29805__$1,new cljs.core.Keyword(null,"finished?","finished?",2067288119));
var terminated_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29805__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129));
var breakpoints = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)) : db.call(null,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739)));
var db__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),memory),new cljs.core.Keyword(null,"finished?","finished?",2067288119),finished_QMARK_),new cljs.core.Keyword(null,"running?","running?",-257884763),(cljs.core.truth_(finished_QMARK_)?false:(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))));
if((!(((function (){var G__29807 = new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory);
return (breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(G__29807) : breakpoints.call(null,G__29807));
})() == null)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),true),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
} else {
if(cljs.core.truth_(terminated_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"terminated?","terminated?",209866129),terminated_QMARK_),new cljs.core.Keyword(null,"on-breakpoint","on-breakpoint",1734264634),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),true),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db__$1.cljs$core$IFn$_invoke$arity$1 ? db__$1.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db__$1.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),(function (){var or__4126__auto__ = finished_QMARK_;
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__29808){
var vec__29809 = p__29808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29809,(0),null);
var vec__29812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29809,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29812,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-running-speed","update-running-speed",-1892375383),(function (db,p__29815){
var vec__29816 = p__29815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29816,(0),null);
var speed = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29816,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running-speed","running-speed",1483517183),speed);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-stack","add-value-to-stack",-680759018),(function (db,p__29819){
var vec__29820 = p__29819;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29820,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-eip","reset-eip",-2046799124),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"eip","eip",-346827869)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-code","test-code",-1774221919),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov :a 0    ; a = 0\nmov :b 1    ; a = 0, b = 1\nmov :c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul :c :b    ; a = 0, b = 2, c = 4\ncmp :a :b    ; :cmp = lt\njne quax   ; jump\nmul :c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor :b :b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc :b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd :a 7    ; a = 7, b = 2, c = 4\nsub :c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack");
}));

//# sourceMappingURL=exfn.events.js.map
