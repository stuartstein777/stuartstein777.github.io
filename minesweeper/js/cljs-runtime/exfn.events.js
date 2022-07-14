goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"board","board",-1907017633),exfn.logic.generate_full_board(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),(40)], null)),new cljs.core.Keyword(null,"revealed","revealed",-1090849585),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"mines","mines",-1960796490),(40),new cljs.core.Keyword(null,"running?","running?",-257884763),false,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),false,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-click","cell-click",323295235),(function (p__40500,p__40501){
var map__40502 = p__40500;
var map__40502__$1 = (((((!((map__40502 == null))))?(((((map__40502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40502):map__40502);
var db = map__40502__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40502__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40502__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40502__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__40503 = p__40501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(0),null);
var vec__40506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40503,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40506,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x,y], 0));

var contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,new cljs.core.Keyword(null,"mine","mine",-130428525))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,(0))){
var new_revealed = exfn.logic.reveal(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),revealed,board);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_revealed,revealed);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),up_revealed)),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));
} else {
if(cljs.core.truth_(((typeof contents === 'number')?(function (){var G__40511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
return (revealed.cljs$core$IFn$_invoke$arity$1 ? revealed.cljs$core$IFn$_invoke$arity$1(G__40511) : revealed.call(null,G__40511));
})():false))){
var revealed__$1 = exfn.logic.reveal_with_flags((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633)) : db.call(null,new cljs.core.Keyword(null,"board","board",-1907017633))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"revealed-mine","revealed-mine",1471773354),revealed__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
} else {
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed__$1,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585))));
var also_revealed = exfn.logic.reveal(revealed__$1,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585))),board);
var fin_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(up_revealed,also_revealed);
var updated_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),fin_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference,fin_revealed),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));
return updated_db;
}
} else {
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]))),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));

}
}
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),(function (p__40512,p__40513){
var map__40514 = p__40512;
var map__40514__$1 = (((((!((map__40514 == null))))?(((((map__40514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40514):map__40514);
var db = map__40514__$1;
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40514__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var vec__40515 = p__40513;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40515,(1),null);
var up_flags = (cljs.core.truth_((flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(cell) : flags.call(null,cell)))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.PersistentHashSet.createAsIfByAssoc([cell])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,cell));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flags","flags",1775418075),up_flags);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-game-over","set-game-over",-1856710011),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (_,p__40519){
var vec__40520 = p__40519;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40520,(1),null);
return game;
}));

//# sourceMappingURL=exfn.events.js.map
