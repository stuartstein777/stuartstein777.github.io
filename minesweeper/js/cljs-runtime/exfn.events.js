goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
exfn.events.dispatch_timer_event = (function exfn$events$dispatch_timer_event(){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"started","started",585705024),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"revealed","revealed",-1090849585),new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"ticking?","ticking?",523217754),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.Keyword(null,"board","board",-1907017633)],[false,false,false,(0),cljs.core.PersistentHashSet.EMPTY,null,(40),false,cljs.core.PersistentHashSet.EMPTY,exfn.logic.generate_full_board(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(16)], null),new cljs.core.Keyword(null,"mines","mines",-1960796490),(40)], null))]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-handle","set-handle",357208178),(function (db,p__37839){
var vec__37840 = p__37839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37840,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37840,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),handle);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tick","tick",-835886976),(function (p__37843,_){
var map__37844 = p__37843;
var map__37844__$1 = (((((!((map__37844 == null))))?(((((map__37844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37844):map__37844);
var db = map__37844__$1;
var ticking_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37844__$1,new cljs.core.Keyword(null,"ticking?","ticking?",523217754));
if(cljs.core.truth_(ticking_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
} else {
return db;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),(function (p__37846){
var vec__37847 = p__37846;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37847,(0),null);
if((handle == null)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-handle","set-handle",357208178),setInterval(exfn.events.dispatch_timer_event,(1000))], null));
} else {
return null;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),(function (p__37850){
var vec__37851 = p__37850;
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37851,(0),null);
if((!((handle == null)))){
return clearInterval(handle);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-timer","start-timer",1546455416),(function (p__37854,_){
var map__37855 = p__37854;
var map__37855__$1 = (((((!((map__37855 == null))))?(((((map__37855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37855):map__37855);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37855__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),true),new cljs.core.Keyword(null,"start-ticker-incrementer","start-ticker-incrementer",-1580200085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)))], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stop-timer","stop-timer",1989899960),(function (p__37857,_){
var map__37858 = p__37857;
var map__37858__$1 = (((((!((map__37858 == null))))?(((((map__37858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37858):map__37858);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37858__$1,new cljs.core.Keyword(null,"db","db",993250759));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["in :stop-timer"], 0));

var handle = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)) : db.call(null,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930)));
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db], 0));

cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["stopping timer. ",handle], 0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticker-handle","ticker-handle",-1979061930),null),new cljs.core.Keyword(null,"stop-ticker","stop-ticker",-1801221445),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handle], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"ticking?","ticking?",523217754),cljs.core.not);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"stop-if-game-finished","stop-if-game-finished",877118659),(function (p__37860){
var vec__37861 = p__37860;
var finished_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(0),null);
var handle = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37861,(1),null);
if(cljs.core.truth_(finished_QMARK_)){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["finished. So stop handle"], 0));

return clearInterval(handle);
} else {
return null;
}
}));
exfn.events.reveal_numbers_with_flags = (function exfn$events$reveal_numbers_with_flags(p__37864,p__37865){
var map__37866 = p__37864;
var map__37866__$1 = (((((!((map__37866 == null))))?(((((map__37866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37866):map__37866);
var db = map__37866__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37866__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37866__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__37867 = p__37865;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37867,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37867,(1),null);
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
exfn.events.reveal_blank = (function exfn$events$reveal_blank(p__37871,p__37872){
var map__37873 = p__37871;
var map__37873__$1 = (((((!((map__37873 == null))))?(((((map__37873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37873):map__37873);
var db = map__37873__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__37874 = p__37872;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(1),null);
var new_revealed = exfn.logic.reveal(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),revealed,board);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(new_revealed,revealed);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),up_revealed)),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),exfn.logic.game_won_QMARK_(up_revealed,board,mines));
});
exfn.events.reveal_numbers = (function exfn$events$reveal_numbers(p__37878,p__37879){
var map__37880 = p__37878;
var map__37880__$1 = (((((!((map__37880 == null))))?(((((map__37880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37880):map__37880);
var db = map__37880__$1;
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37880__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__37881 = p__37879;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37881,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37881,(1),null);
var up_revealed = clojure.set.union.cljs$core$IFn$_invoke$arity$2(revealed,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]));
var game_won_QMARK_ = exfn.logic.game_won_QMARK_(up_revealed,board,mines);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),up_revealed),new cljs.core.Keyword(null,"flags","flags",1775418075),clojure.set.difference.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075)) : db.call(null,new cljs.core.Keyword(null,"flags","flags",1775418075))),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]))),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),game_won_QMARK_);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell-click","cell-click",323295235),(function (p__37885,p__37886){
var map__37887 = p__37885;
var map__37887__$1 = (((((!((map__37887 == null))))?(((((map__37887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37887):map__37887);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37887__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__37888 = p__37886;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37888,(0),null);
var vec__37891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37888,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37891,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cell click",x,y], 0));

var contents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"board","board",-1907017633)) : db.call(null,new cljs.core.Keyword(null,"board","board",-1907017633))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
var up_db = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,new cljs.core.Keyword(null,"mine","mine",-130428525)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),true):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(contents,(0)))?exfn.events.reveal_blank(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)):(cljs.core.truth_(((typeof contents === 'number')?(function (){var G__37898 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var fexpr__37897 = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"revealed","revealed",-1090849585)) : db.call(null,new cljs.core.Keyword(null,"revealed","revealed",-1090849585)));
return (fexpr__37897.cljs$core$IFn$_invoke$arity$1 ? fexpr__37897.cljs$core$IFn$_invoke$arity$1(G__37898) : fexpr__37897.call(null,G__37898));
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
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-flag","toggle-flag",1517068136),(function (p__37899,p__37900){
var map__37901 = p__37899;
var map__37901__$1 = (((((!((map__37901 == null))))?(((((map__37901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37901):map__37901);
var db = map__37901__$1;
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37901__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var vec__37902 = p__37900;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37902,(1),null);
var up_flags = (cljs.core.truth_((flags.cljs$core$IFn$_invoke$arity$1 ? flags.cljs$core$IFn$_invoke$arity$1(cell) : flags.call(null,cell)))?clojure.set.difference.cljs$core$IFn$_invoke$arity$2(flags,cljs.core.PersistentHashSet.createAsIfByAssoc([cell])):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,cell));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"flags","flags",1775418075),up_flags);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-game-over","set-game-over",-1856710011),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-over?","game-over?",432859304),cljs.core.not((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-over?","game-over?",432859304)) : db.call(null,new cljs.core.Keyword(null,"game-over?","game-over?",432859304)))));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset","reset",-800929946),(function (_,p__37906){
var vec__37907 = p__37906;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37907,(0),null);
var game = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37907,(1),null);
return game;
}));

//# sourceMappingURL=exfn.events.js.map
