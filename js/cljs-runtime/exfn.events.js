goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),"",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"symbol-table","symbol-table",1884137521),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"running?","running?",-257884763),false], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__34413){
var vec__34414 = p__34413;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34414,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34414,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__34417,_){
var map__34418 = p__34417;
var map__34418__$1 = (((((!((map__34418 == null))))?(((((map__34418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34418):map__34418);
var db = map__34418__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34418__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var parsed = exfn.parser.parse(source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),parsed);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__34420,p__34421){
var map__34422 = p__34420;
var map__34422__$1 = (((((!((map__34422 == null))))?(((((map__34422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34422):map__34422);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34422__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__34423 = p__34421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34423,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34423,(1),null);
console.log(["scroll-pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scroll_pos)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__34427,p__34428){
var map__34429 = p__34427;
var map__34429__$1 = (((((!((map__34429 == null))))?(((((map__34429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34429):map__34429);
var db = map__34429__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34429__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__34430 = p__34428;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34430,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34430,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__34434){
var vec__34435 = p__34434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(0),null);
var vec__34438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-stack","add-value-to-stack",-680759018),(function (db,p__34441){
var vec__34442 = p__34441;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34442,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"stack","stack",-793405930)], null),cljs.core.conj,v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test-code","test-code",-1774221919),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),"; function calls.\nmov a 0    ; a = 0\nmov b 1    ; a = 0, b = 1\nmov c 2    ; a = 0, b = 1, c = 2\ncall foo   ; move eip to foo, push eip to eip-stack\nmul c b    ; a = 0, b = 2, c = 4\ncmp a b    ; :cmp = lt\njne quax   ; jump\nmul c 10   ;\n                      \n\n;; quax:: call bar and zero :b\nquax:      ;\nnop        ;\ncall bar   ; move eip to bar, push eip to eip-stack\nxor b b    ; a = 7, b = 0, c = 3\nmsg 'a = ' a ', b = ' b ', c = ' c\nend        ; a = 7, b = 0, c = 3\n                      \n\n;; foo:: increment b\nfoo:\ninc b      ; a = 0, b = 2, c = 2\nret        ; ret to foo call, pop eip stack\n\n\n;; bar:: add 7 to a and decrement c\nbar:\nadd a 7    ; a = 7, b = 2, c = 4\nsub c 1    ; a = 7, b = 2, c = 3\nret        ; ret to bar call, pop eip stack");
}));

//# sourceMappingURL=exfn.events.js.map
