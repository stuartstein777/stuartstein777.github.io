goog.provide('exfn.gamelogic');
goog.require('cljs.core');
exfn.gamelogic.board_squares = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
exfn.gamelogic.winner_QMARK_ = (function exfn$gamelogic$winner_QMARK_(board){
var win_states = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null)], null);
var flattened = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,board);
var pnth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,flattened);
return cljs.core.first(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228)], null)]),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (win_state){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pnth,win_state);
}),win_states)));
});
exfn.gamelogic.no_more_moves_QMARK_ = (function exfn$gamelogic$no_more_moves_QMARK_(board){
return (cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"_","_",1453416199),null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,board)) == null);
});
exfn.gamelogic.get_square_to_play = (function exfn$gamelogic$get_square_to_play(p__38900){
var vec__38901 = p__38900;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38901,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38901,(1),null);
return cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38904){
var vec__38905 = p__38904;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38905,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38905,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,new cljs.core.Keyword(null,"_","_",1453416199));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,b,s))));
});
exfn.gamelogic.find_wins = (function exfn$gamelogic$find_wins(board,player){
var win_states = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(4),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(7),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(4),(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(5),(8)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(8)], null)], null);
var flattened = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,board);
var pnth = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.nth,flattened);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__38908){
var vec__38909 = p__38908;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38909,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38909,(1),null);
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,player,new cljs.core.Keyword(null,"_","_",1453416199)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [player,new cljs.core.Keyword(null,"_","_",1453416199),player], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_","_",1453416199),player,player], null)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (win_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(pnth,win_state),win_state], null);
}),win_states));
});
exfn.gamelogic.find_fork = (function exfn$gamelogic$find_fork(board,player){
var squares = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
while(true){
if(cljs.core.seq(squares)){
var vec__38915 = cljs.core.first(squares);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38915,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38915,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["trying ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], 0));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))) && ((cljs.core.count(exfn.gamelogic.find_wins(cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null),player),player)) >= (2))))){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["found fork @ ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null);
} else {
var G__38920 = cljs.core.rest(squares);
squares = G__38920;
continue;
}
} else {
return null;
}
break;
}
});
exfn.gamelogic.win_QMARK_ = (function exfn$gamelogic$win_QMARK_(board,player){
var square = exfn.gamelogic.get_square_to_play(cljs.core.first(exfn.gamelogic.find_wins(board,player)));
if(cljs.core.truth_(square)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor((square / (3))),cljs.core.mod(square,(3))], null);
} else {
return null;
}
});
exfn.gamelogic.random_cpu_move = (function exfn$gamelogic$random_cpu_move(board){
var squares = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null);
return cljs.core.first(cljs.core.shuffle(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (f){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,f));
}),squares)));
});
exfn.gamelogic.play_center_if_possible = (function exfn$gamelogic$play_center_if_possible(board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
} else {
return null;
}
});
exfn.gamelogic.cpu_move = (function exfn$gamelogic$cpu_move(b,p){
var or__4126__auto__ = exfn.gamelogic.win_QMARK_(b,p);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = exfn.gamelogic.win_QMARK_(b,(function (){var fexpr__38919 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null);
return (fexpr__38919.cljs$core$IFn$_invoke$arity$1 ? fexpr__38919.cljs$core$IFn$_invoke$arity$1(p) : fexpr__38919.call(null,p));
})());
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = exfn.gamelogic.find_fork(b,p);
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = exfn.gamelogic.play_center_if_possible(b);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return exfn.gamelogic.random_cpu_move(b);
}
}
}
}
});

//# sourceMappingURL=exfn.gamelogic.js.map
