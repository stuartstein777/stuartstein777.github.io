goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"board","board",-1907017633),exfn.logic.generate_board(),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restart","restart",-1779883612),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),exfn.logic.generate_board()),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),false),new cljs.core.Keyword(null,"score","score",-1963588780),(0));
}));
exfn.events.collapse = (function exfn$events$collapse(f,board){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(board) : f.call(null,board));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide-up","slide-up",589498832),(function (db,_){
var new_board = exfn.events.collapse(exfn.logic.collapse_left,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var turn_score = exfn.logic.score(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
var board_with_random = exfn.logic.add_random_if_moved(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_with_random),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),exfn.logic.game_over_QMARK_(new_board)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,turn_score);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide-down","slide-down",2146298743),(function (db,_){
var new_board = exfn.events.collapse(exfn.logic.collapse_right,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var turn_score = exfn.logic.score(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
var board_with_random = exfn.logic.add_random_if_moved(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_with_random),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),exfn.logic.game_over_QMARK_(new_board)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,turn_score);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide-right","slide-right",-1774002871),(function (db,_){
var new_board = exfn.events.collapse(exfn.logic.collapse_down,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var turn_score = exfn.logic.score(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
var board_with_random = exfn.logic.add_random_if_moved(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_with_random),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),exfn.logic.game_over_QMARK_(new_board)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,turn_score);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"slide-left","slide-left",1712014197),(function (db,_){
var new_board = exfn.events.collapse(exfn.logic.collapse_up,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db));
var turn_score = exfn.logic.score(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
var board_with_random = exfn.logic.add_random_if_moved(new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(db),new_board);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"board","board",-1907017633),board_with_random),new cljs.core.Keyword(null,"game-over?","game-over?",432859304),exfn.logic.game_over_QMARK_(new_board)),new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core._PLUS_,turn_score);
}));

//# sourceMappingURL=exfn.events.js.map
