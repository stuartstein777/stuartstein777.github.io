goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,p__29371){
var vec__29372 = p__29371;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(0),null);
var vec__29375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29372,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(0),null);
var mines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29375,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"revealed","revealed",-1090849585),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"ticking?","ticking?",523217754),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"board","board",-1907017633)],[false,false,false,(0),cljs.core.PersistentHashSet.EMPTY,null,mines,false,cljs.core.PersistentHashSet.EMPTY,exfn.logic.generate_full_board(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),mines], null))]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__29378){
var vec__29379 = p__29378;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29379,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick","tick",-835886976),(function (p__29382,_){
var map__29383 = p__29382;
var map__29383__$1 = (((((!((map__29383 == null))))?(((((map__29383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29383):map__29383);
var db = map__29383__$1;
var ticking_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29383__$1,new cljs.core.Keyword(null,"ticking?","ticking?",523217754));
if(cljs.core.truth_(ticking_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
} else {
return db;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),(function (p__29385){
var vec__29386 = p__29385;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29386,(0),null);
if((handle == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,(1000))], null));
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),(function (p__29389){
var vec__29390 = p__29389;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29390,(0),null);
if((!((handle == null)))){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-timer","start-timer",1546455416),(function (p__29393,_){
var map__29394 = p__29393;
var map__29394__$1 = (((((!((map__29394 == null))))?(((((map__29394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29394):map__29394);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29394__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),true),new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960),(function (p__29396,_){
var map__29397 = p__29396;
var map__29397__$1 = (((((!((map__29397 == null))))?(((((map__29397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29397):map__29397);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29397__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in :stop-timer"], 0));

var handle = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stopping timer. ",handle], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),null),new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),cljs.core.not);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-if-game-finished","stop-if-game-finished",877118659),(function (p__29399){
var vec__29400 = p__29399;
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29400,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29400,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finished. So stop handle"], 0));

return clearInterval(handle);
} else {
return null;
}
}));
exfn.events.reveal_numbers_with_flags = (function exfn$events$reveal_numbers_with_flags(p__29403,p__29404){
var map__29405 = p__29403;
var map__29405__$1 = (((((!((map__29405 == null))))?(((((map__29405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29405):map__29405);
var db = map__29405__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29405__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29405__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29406 = p__29404;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29406,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29406,(1),null);
var revealed = exfn.logic.reveal_with_flags((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633)) : db.call(null,new cljs.core.Keyword(null,"board","board",-1907017633))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"revealed-mine","revealed-mine",1471773354),revealed)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true);
} else {
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585))));
var also_revealed = exfn.logic.reveal(revealed,(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585))),board);
var fin_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(up_revealed,also_revealed);
var game_won_QMARK_ = exfn.logic.game_won_QMARK_(fin_revealed,board,mines);
var updated_db = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),fin_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference,fin_revealed),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),game_won_QMARK_);
return updated_db;
}
});
exfn.events.reveal_blank = (function exfn$events$reveal_blank(p__29410,p__29411){
var map__29412 = p__29410;
var map__29412__$1 = (((((!((map__29412 == null))))?(((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29412):map__29412);
var db = map__29412__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29412__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29412__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29412__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29413 = p__29411;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29413,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29413,(1),null);
var new_revealed = exfn.logic.reveal(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),revealed,board);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_revealed,revealed);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),up_revealed)),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));
});
exfn.events.reveal_numbers = (function exfn$events$reveal_numbers(p__29417,p__29418){
var map__29419 = p__29417;
var map__29419__$1 = (((((!((map__29419 == null))))?(((((map__29419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29419):map__29419);
var db = map__29419__$1;
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29419__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29419__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29419__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29420 = p__29418;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29420,(1),null);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]));
var game_won_QMARK_ = exfn.logic.game_won_QMARK_(up_revealed,board,mines);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]))),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),game_won_QMARK_);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-click","cell-click",323295235),(function (p__29424,p__29425){
var map__29426 = p__29424;
var map__29426__$1 = (((((!((map__29426 == null))))?(((((map__29426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29426):map__29426);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29426__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29427 = p__29425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(0),null);
var vec__29430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29427,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29430,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29430,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cell click",x,y], 0));

var contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633)) : db.call(null,new cljs.core.Keyword(null,"board","board",-1907017633))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var up_db = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,new cljs.core.Keyword(null,"mine","mine",-130428525)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,(0)))?exfn.events.reveal_blank(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):(cljs.core.truth_(((typeof contents === 'number')?(function (){var G__29437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__29436 = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)));
return (fexpr__29436.cljs$core$IFn$_invoke$arity$1 ? fexpr__29436.cljs$core$IFn$_invoke$arity$1(G__29437) : fexpr__29436.call(null,G__29437));
})():false))?exfn.events.reveal_numbers_with_flags(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):exfn.events.reveal_numbers(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))
)));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Finished? ",(function (){var or__4126__auto__ = (up_db.cljs$core$IFn$_invoke$arity$1 ? up_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : up_db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (up_db.cljs$core$IFn$_invoke$arity$1 ? up_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)) : up_db.call(null,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)));
}
})()], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(up_db,new cljs.core.Keyword(null,"started?","started?",-1301062863),true),new cljs.core.Keyword(null,"stop-if-game-finished","stop-if-game-finished",877118659),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = (up_db.cljs$core$IFn$_invoke$arity$1 ? up_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : up_db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (up_db.cljs$core$IFn$_invoke$arity$1 ? up_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)) : up_db.call(null,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)));
}
})(),(up_db.cljs$core$IFn$_invoke$arity$1 ? up_db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : up_db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),(function (p__29438,p__29439){
var map__29440 = p__29438;
var map__29440__$1 = (((((!((map__29440 == null))))?(((((map__29440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29440):map__29440);
var db = map__29440__$1;
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29440__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var vec__29441 = p__29439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29441,(1),null);
var up_flags = (cljs.core.truth_((flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(cell) : flags.call(null,cell)))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.PersistentHashSet.createAsIfByAssoc([cell])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,cell));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flags","flags",1775418075),up_flags),new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-game-over","set-game-over",-1856710011),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (_,p__29445){
var vec__29446 = p__29445;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(1),null);
return game;
}));

//# sourceMappingURL=exfn.events.js.map
