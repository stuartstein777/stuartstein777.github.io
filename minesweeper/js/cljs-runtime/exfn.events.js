goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,p__29431){
var vec__29432 = p__29431;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29432,(0),null);
var vec__29435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29432,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(0),null);
var mines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29435,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"revealed","revealed",-1090849585),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"ticking?","ticking?",523217754),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"board","board",-1907017633)],[false,false,false,(0),cljs.core.PersistentHashSet.EMPTY,null,mines,false,cljs.core.PersistentHashSet.EMPTY,exfn.logic.generate_full_board(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),mines], null))]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__29438){
var vec__29439 = p__29438;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29439,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29439,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick","tick",-835886976),(function (p__29442,_){
var map__29443 = p__29442;
var map__29443__$1 = (((((!((map__29443 == null))))?(((((map__29443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29443):map__29443);
var db = map__29443__$1;
var ticking_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29443__$1,new cljs.core.Keyword(null,"ticking?","ticking?",523217754));
if(cljs.core.truth_(ticking_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
} else {
return db;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),(function (p__29445){
var vec__29446 = p__29445;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(0),null);
if((handle == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,(1000))], null));
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),(function (p__29449){
var vec__29450 = p__29449;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29450,(0),null);
if((!((handle == null)))){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-timer","start-timer",1546455416),(function (p__29453,_){
var map__29454 = p__29453;
var map__29454__$1 = (((((!((map__29454 == null))))?(((((map__29454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29454):map__29454);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29454__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),true),new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960),(function (p__29456,_){
var map__29457 = p__29456;
var map__29457__$1 = (((((!((map__29457 == null))))?(((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29457):map__29457);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in :stop-timer"], 0));

var handle = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stopping timer. ",handle], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),null),new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),cljs.core.not);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-if-game-finished","stop-if-game-finished",877118659),(function (p__29459){
var vec__29460 = p__29459;
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29460,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29460,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finished. So stop handle"], 0));

return clearInterval(handle);
} else {
return null;
}
}));
exfn.events.reveal_numbers_with_flags = (function exfn$events$reveal_numbers_with_flags(p__29463,p__29464){
var map__29465 = p__29463;
var map__29465__$1 = (((((!((map__29465 == null))))?(((((map__29465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29465):map__29465);
var db = map__29465__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29465__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29465__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29466 = p__29464;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29466,(1),null);
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
exfn.events.reveal_blank = (function exfn$events$reveal_blank(p__29470,p__29471){
var map__29472 = p__29470;
var map__29472__$1 = (((((!((map__29472 == null))))?(((((map__29472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29472):map__29472);
var db = map__29472__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29472__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29472__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29472__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29473 = p__29471;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29473,(1),null);
var new_revealed = exfn.logic.reveal(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),revealed,board);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_revealed,revealed);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),up_revealed)),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));
});
exfn.events.reveal_numbers = (function exfn$events$reveal_numbers(p__29477,p__29478){
var map__29479 = p__29477;
var map__29479__$1 = (((((!((map__29479 == null))))?(((((map__29479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29479):map__29479);
var db = map__29479__$1;
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29479__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29479__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29479__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__29480 = p__29478;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(1),null);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]));
var game_won_QMARK_ = exfn.logic.game_won_QMARK_(up_revealed,board,mines);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]))),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),game_won_QMARK_);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-click","cell-click",323295235),(function (p__29484,p__29485){
var map__29486 = p__29484;
var map__29486__$1 = (((((!((map__29486 == null))))?(((((map__29486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29486):map__29486);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29486__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__29487 = p__29485;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(0),null);
var vec__29490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29487,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29490,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29490,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cell click",x,y], 0));

var contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633)) : db.call(null,new cljs.core.Keyword(null,"board","board",-1907017633))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var up_db = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,new cljs.core.Keyword(null,"mine","mine",-130428525)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,(0)))?exfn.events.reveal_blank(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):(cljs.core.truth_(((typeof contents === 'number')?(function (){var G__29497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__29496 = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)));
return (fexpr__29496.cljs$core$IFn$_invoke$arity$1 ? fexpr__29496.cljs$core$IFn$_invoke$arity$1(G__29497) : fexpr__29496.call(null,G__29497));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),(function (p__29498,p__29499){
var map__29500 = p__29498;
var map__29500__$1 = (((((!((map__29500 == null))))?(((((map__29500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29500):map__29500);
var db = map__29500__$1;
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var vec__29501 = p__29499;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29501,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29501,(1),null);
var up_flags = (cljs.core.truth_((flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(cell) : flags.call(null,cell)))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.PersistentHashSet.createAsIfByAssoc([cell])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,cell));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flags","flags",1775418075),up_flags),new cljs.core.Keyword(null,"started?","started?",-1301062863),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-game-over","set-game-over",-1856710011),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (_,p__29505){
var vec__29506 = p__29505;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29506,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29506,(1),null);
return game;
}));

//# sourceMappingURL=exfn.events.js.map
