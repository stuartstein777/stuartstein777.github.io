goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"source","source",-433931539),"",new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"eip","eip",-346827869),(0),new cljs.core.Keyword(null,"registers","registers",81921893),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"eip-stack","eip-stack",133100163),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"internal-registers","internal-registers",-1438566520),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"running?","running?",-257884763),false], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-source","update-source",-132063591),(function (db,p__45119){
var vec__45120 = p__45119;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45120,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45120,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"source","source",-433931539),source);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parse","parse",-1162164619),(function (p__45126,_){
var map__45127 = p__45126;
var map__45127__$1 = (((((!((map__45127 == null))))?(((((map__45127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45127):map__45127);
var db = map__45127__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45127__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var parsed = exfn.parser.parse(source);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"code","code",1586293142),parsed);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),(function (scroll_pos){
return (document.getElementById("lineNos").scrollTop = scroll_pos);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-scroll","update-scroll",-585233806),(function (p__45135,p__45136){
var map__45137 = p__45135;
var map__45137__$1 = (((((!((map__45137 == null))))?(((((map__45137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45137):map__45137);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45137__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__45138 = p__45136;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(0),null);
var scroll_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45138,(1),null);
console.log(["scroll-pos: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scroll_pos)].join(''));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569),scroll_pos),new cljs.core.Keyword(null,"scroll-line-nos","scroll-line-nos",-1303606273),scroll_pos], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-breakpoint","toggle-breakpoint",61273766),(function (p__45143,p__45144){
var map__45145 = p__45143;
var map__45145__$1 = (((((!((map__45145 == null))))?(((((map__45145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45145):map__45145);
var db = map__45145__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45145__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var vec__45146 = p__45144;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45146,(0),null);
var line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45146,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),(((!(((breakpoints.cljs$core$IFn$_invoke$arity$1 ? breakpoints.cljs$core$IFn$_invoke$arity$1(line_no) : breakpoints.call(null,line_no)) == null))))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(breakpoints,cljs.core.PersistentHashSet.createAsIfByAssoc([line_no])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(breakpoints,line_no)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-running","toggle-running",2059919510),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"running?","running?",-257884763),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"running?","running?",-257884763)) : db.call(null,new cljs.core.Keyword(null,"running?","running?",-257884763)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-value-to-registers","add-value-to-registers",-532527242),(function (db,p__45152){
var vec__45153 = p__45152;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45153,(0),null);
var vec__45156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45153,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45156,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"memory","memory",-1449401430),new cljs.core.Keyword(null,"registers","registers",81921893)], null),cljs.core.assoc,k,v);
}));

//# sourceMappingURL=exfn.events.js.map
