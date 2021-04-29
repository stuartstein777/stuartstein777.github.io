goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov a 0    ; a = 0\nmov b 1    ; a = 0, b = 1\nmov c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul c b    ; a = 0, b = 2, c = 4\ncmp a b    ; :cmp = lt\njne quax   ; jump\nmul c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor b b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd a 7    ; a = 7, b = 2, c = 4\nsub c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"last-edit-register","last-edit-register",-465830339),null], null),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"finished?","finished?",2067288119),false,new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),false,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),null], null);
}));
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__32765){
var vec__32766 = p__32765;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32766,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),(function (_){
return (document.getElementById("code-container").scrollTop = (0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__32769,_){
var map__32770 = p__32769;
var map__32770__$1 = (((((!((map__32770 == null))))?(((((map__32770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32770):map__32770);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32770__$1,new cljs.core.Keyword(null,"db","db",993250759));
var parsed = exfn.parser.parse((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"source","source",-433931539)) : db.call(null,new cljs.core.Keyword(null,"source","source",-433931539))));
var symbol_table = exfn.interpreter.build_symbol_table(parsed);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),symbol_table], null)),new cljs.core.Keyword(null,"code","code",1586293142),parsed),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),(cljs.core.count(parsed) > (0))),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false),new cljs.core.Keyword(null,"scroll-parsed-code-to-top","scroll-parsed-code-to-top",-144526972),_], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-parsed","clear-parsed",-1655539557),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"has-parsed-code?","has-parsed-code?",1132141677),false),new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentVector.EMPTY], null));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__32772,p__32773){
var map__32774 = p__32772;
var map__32774__$1 = (((((!((map__32774 == null))))?(((((map__32774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32774):map__32774);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32774__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32775 = p__32773;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32775,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__32779,p__32780){
var map__32781 = p__32779;
var map__32781__$1 = (((((!((map__32781 == null))))?(((((map__32781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32781):map__32781);
var db = map__32781__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32781__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__32782 = p__32780;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32782,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__32786){
var vec__32787 = p__32786;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32787,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__32790){
var vec__32791 = p__32790;
var running_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32791,(1),null);
if(cljs.core.truth_(running_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,(1000))], null));
} else {
return clearInterval(handle);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),(function (eip){
return (document.getElementById("code-container").scrollTop = (eip * (25)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (p__32794,_){
var map__32795 = p__32794;
var map__32795__$1 = (((((!((map__32795 == null))))?(((((map__32795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32795):map__32795);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32795__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763))))),new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),(function (p__32797){
var vec__32798 = p__32797;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430).cljs$core$IFn$_invoke$arity$1(db))], null)),new cljs.core.Keyword(null,"running?","running?",-257884763),false),new cljs.core.Keyword(null,"finished?","finished?",2067288119),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"next-instruction","next-instruction",-1250475904),(function (p__32801,_){
var map__32802 = p__32801;
var map__32802__$1 = (((((!((map__32802 == null))))?(((((map__32802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32802):map__32802);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32802__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32804 = exfn.interpreter.interpret((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142)) : db.call(null,new cljs.core.Keyword(null,"code","code",1586293142))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"memory","memory",-1449401430)) : db.call(null,new cljs.core.Keyword(null,"memory","memory",-1449401430))));
var memory = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(0),null);
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32804,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"memory","memory",-1449401430),memory),new cljs.core.Keyword(null,"finished?","finished?",2067288119),finished_QMARK_),new cljs.core.Keyword(null,"scroll-current-code-into-view","scroll-current-code-into-view",-2147354324),new cljs.core.Keyword(null,"eip","eip",-346827869).cljs$core$IFn$_invoke$arity$1(memory),new cljs.core.Keyword(null,"end-if-finished","end-if-finished",1848036361),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930))),finished_QMARK_], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__32807){
var vec__32808 = p__32807;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(0),null);
var vec__32811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32811,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-stack","add-value-to-stack",-680759018),(function (db,p__32814){
var vec__32815 = p__32814;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32815,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32815,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-eip","reset-eip",-2046799124),(function (db,_){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"eip","eip",-346827869)], null),(0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-code","test-code",-1774221919),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov a 0    ; a = 0\nmov b 1    ; a = 0, b = 1\nmov c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul c b    ; a = 0, b = 2, c = 4\ncmp a b    ; :cmp = lt\njne quax   ; jump\nmul c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor b b    ; a = 7, b = 0, c = 3\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd a 7    ; a = 7, b = 2, c = 4\nsub c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack");
}));

//# sourceMappingURL=exfn.events.js.map
