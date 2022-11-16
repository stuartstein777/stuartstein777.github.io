goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.gamelogic');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199),new cljs.core.Keyword(null,"_","_",1453416199)], null)], null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false,new cljs.core.Keyword(null,"winner","winner",714604679),null], null);
}));
exfn.events.update_game_state = (function exfn$events$update_game_state(board,p__8945,player){
var vec__8946 = p__8945;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8946,(1),null);
var new_board = cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),player);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"board","board",-1907017633),new_board),new cljs.core.Keyword(null,"player","player",-97687400),(function (){var fexpr__8949 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null);
return (fexpr__8949.cljs$core$IFn$_invoke$arity$1 ? fexpr__8949.cljs$core$IFn$_invoke$arity$1(player) : fexpr__8949.call(null,player));
})()),new cljs.core.Keyword(null,"winner","winner",714604679),exfn.gamelogic.winner_QMARK_(new_board)),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),exfn.gamelogic.no_more_moves_QMARK_(new_board));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-board","update-board",-392441434),(function (p__8950,p__8951){
var map__8952 = p__8950;
var map__8952__$1 = (((((!((map__8952 == null))))?(((((map__8952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8952):map__8952);
var db = map__8952__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8952__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8952__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8952__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var game_over_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8952__$1,new cljs.core.Keyword(null,"game-over?","game-over?",432859304));
var vec__8953 = p__8951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8953,(0),null);
var vec__8956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8953,(1),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8956,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8956,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null)),new cljs.core.Keyword(null,"_","_",1453416199))) && (cljs.core.not(winner)) && (cljs.core.not(game_over_QMARK_)))){
var map__8960 = exfn.events.update_game_state(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,col], null),player);
var map__8960__$1 = (((((!((map__8960 == null))))?(((((map__8960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8960):map__8960);
var game = map__8960__$1;
var winner__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8960__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var game_over_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8960__$1,new cljs.core.Keyword(null,"game-over?","game-over?",432859304));
var board__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8960__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var player__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8960__$1,new cljs.core.Keyword(null,"player","player",-97687400));
if(cljs.core.truth_((function (){var or__4126__auto__ = winner__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_over_QMARK___$1;
}
})())){
return game;
} else {
return exfn.events.update_game_state(board__$1,exfn.gamelogic.cpu_move(board__$1,player__$1),player__$1);
}
} else {
return db;
}
}));

//# sourceMappingURL=exfn.events.js.map
