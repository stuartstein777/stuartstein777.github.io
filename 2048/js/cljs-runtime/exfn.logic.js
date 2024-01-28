goog.provide('exfn.logic');
exfn.logic.cell_to_coord = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(15),(13),(6),(3),(12),(2),(11),(9),(5),(14),(16),(10),(8)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null)]);
exfn.logic.rotate_board = (function exfn$logic$rotate_board(board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,board);
});
exfn.logic.pad_left = (function exfn$logic$pad_left(n,v){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - cljs.core.count(v)),(0))));
});
exfn.logic.slide_left = (function exfn$logic$slide_left(row){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,row));
});
exfn.logic.score_row = (function exfn$logic$score_row(row,new_row){
var original = cljs.core.frequencies(cljs.core.flatten(row));
var updated = cljs.core.frequencies(cljs.core.flatten(new_row));
var higher = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34068_SHARP_){
return (cljs.core.first(p1__34068_SHARP_) > (1));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34067_SHARP_){
return (cljs.core.second(p1__34067_SHARP_) > cljs.core.get.cljs$core$IFn$_invoke$arity$2(original,cljs.core.first(p1__34067_SHARP_)));
}),updated));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__34069){
var vec__34070 = p__34069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34070,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["k: ",k,", v: ",v], 0));

var ov = cljs.core.get.cljs$core$IFn$_invoke$arity$3(original,k,(0));
return (acc + (k * (v - ov)));
}),(0),higher);
});
exfn.logic.score = (function exfn$logic$score(board,new_board){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (row,new_row){
return exfn.logic.score_row(row,new_row);
}),board,new_board));
});
exfn.logic.merge_vector = (function exfn$logic$merge_vector(row){
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i >= cljs.core.count(row))){
return cljs.core.vec(res);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(row) - (1)),i)){
var G__34074 = (i + (1));
var G__34075 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,i));
i = G__34074;
res = G__34075;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,(i + (1))))){
var G__34076 = ((2) + i);
var G__34077 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,((2) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,i)));
i = G__34076;
res = G__34077;
continue;
} else {
var G__34078 = (i + (1));
var G__34079 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(row,i));
i = G__34078;
res = G__34079;
continue;
}
}
}
break;
}
});
exfn.logic.update_2d_vector = (function exfn$logic$update_2d_vector(v,coord,value){
return cljs.core.assoc_in(v,coord,value);
});
exfn.logic.get_empty_cells = (function exfn$logic$get_empty_cells(board){
var xs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(17));
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.logic.cell_to_coord,xs);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__34073_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,p1__34073_SHARP_));
}),cells);
});
exfn.logic.add_random_value = (function exfn$logic$add_random_value(possibilities,board){
var number = cljs.core.first(cljs.core.shuffle(possibilities));
var empty_cells = exfn.logic.get_empty_cells(board);
var random_cell = cljs.core.first(cljs.core.shuffle(empty_cells));
if(cljs.core.empty_QMARK_(empty_cells)){
return board;
} else {
return exfn.logic.update_2d_vector(board,random_cell,number);
}
});
exfn.logic.add_random_if_moved = (function exfn$logic$add_random_if_moved(board,new_board){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_board,board)){
return board;
} else {
return exfn.logic.add_random_value(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(2),(2),(4)], null),exfn.logic.add_random_value(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(2),(2),(2),(2),(2),(2),(4)], null),new_board));
}
});
exfn.logic.debug = (function exfn$logic$debug(d){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0));

return d;
});
exfn.logic.collapse_left = (function exfn$logic$collapse_left(board){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.logic.pad_left,(4)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(exfn.logic.merge_vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(exfn.logic.slide_left,board)));
});
exfn.logic.collapse_right = (function exfn$logic$collapse_right(board){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.reverse),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.logic.pad_left,(4)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(exfn.logic.merge_vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(exfn.logic.slide_left,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,board)))));
});
exfn.logic.collapse_down = (function exfn$logic$collapse_down(board){
return cljs.core.vec(exfn.logic.rotate_board(exfn.logic.rotate_board(exfn.logic.rotate_board(exfn.logic.collapse_right(exfn.logic.rotate_board(board))))));
});
exfn.logic.collapse_up = (function exfn$logic$collapse_up(board){
return cljs.core.vec(exfn.logic.rotate_board(exfn.logic.rotate_board(exfn.logic.rotate_board(exfn.logic.collapse_left(exfn.logic.rotate_board(board))))));
});
exfn.logic.generate_board = (function exfn$logic$generate_board(){
var board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null);
return exfn.logic.add_random_value(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),exfn.logic.add_random_value(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),board));
});
exfn.logic.any_moves_QMARK_ = (function exfn$logic$any_moves_QMARK_(row){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,row)));
});
exfn.logic.game_over_QMARK_ = (function exfn$logic$game_over_QMARK_(board){
return ((cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.logic.any_moves_QMARK_,board))) && (cljs.core.every_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.logic.any_moves_QMARK_,exfn.logic.rotate_board(board)))));
});

//# sourceMappingURL=exfn.logic.js.map
