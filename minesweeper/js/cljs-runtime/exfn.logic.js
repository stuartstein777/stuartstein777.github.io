goog.provide('exfn.logic');
goog.require('cljs.core');
goog.require('clojure.set');
exfn.logic.get_neighbour_mine_count = (function exfn$logic$get_neighbour_mine_count(board,p__40132){
var vec__40133 = p__40132;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40133,(1),null);
var neighbour_coords = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null)], null);
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b,new cljs.core.Keyword(null,"mine","mine",-130428525));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40136){
var vec__40137 = p__40136;
var xd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(0),null);
var yd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + xd),(y + yd)], null));
}),neighbour_coords)));
});
exfn.logic.generate_board = (function exfn$logic$generate_board(p__40140){
var map__40141 = p__40140;
var map__40141__$1 = (((((!((map__40141 == null))))?(((((map__40141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40141):map__40141);
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40141__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var vec__40143 = dimensions;
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40143,(0),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40143,(1),null);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(width,cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(mines,new cljs.core.Keyword(null,"mine","mine",-130428525)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((width * height) - mines),new cljs.core.Keyword(null,"blank","blank",-1249652109)))))));
});
exfn.logic.reducer = (function exfn$logic$reducer(acc,xy){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,xy),new cljs.core.Keyword(null,"mine","mine",-130428525))){
return acc;
} else {
return cljs.core.assoc_in(acc,xy,exfn.logic.get_neighbour_mine_count(acc,xy));
}
});
exfn.logic.get_all_cell_coords = (function exfn$logic$get_all_cell_coords(board){
var iter__4529__auto__ = (function exfn$logic$get_all_cell_coords_$_iter__40146(s__40147){
return (new cljs.core.LazySeq(null,(function (){
var s__40147__$1 = s__40147;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40147__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xs = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__40147__$1,xs,xs__6292__auto__,temp__5735__auto__){
return (function exfn$logic$get_all_cell_coords_$_iter__40146_$_iter__40148(s__40149){
return (new cljs.core.LazySeq(null,((function (s__40147__$1,xs,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__40149__$1 = s__40149;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40149__$1);
if(temp__5735__auto____$1){
var s__40149__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40149__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40149__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40151 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40150 = (0);
while(true){
if((i__40150 < size__4528__auto__)){
var ys = cljs.core._nth(c__4527__auto__,i__40150);
cljs.core.chunk_append(b__40151,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,ys], null));

var G__40160 = (i__40150 + (1));
i__40150 = G__40160;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40151),exfn$logic$get_all_cell_coords_$_iter__40146_$_iter__40148(cljs.core.chunk_rest(s__40149__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40151),null);
}
} else {
var ys = cljs.core.first(s__40149__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,ys], null),exfn$logic$get_all_cell_coords_$_iter__40146_$_iter__40148(cljs.core.rest(s__40149__$2)));
}
} else {
return null;
}
break;
}
});})(s__40147__$1,xs,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__40147__$1,xs,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(board))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,exfn$logic$get_all_cell_coords_$_iter__40146(cljs.core.rest(s__40147__$1)));
} else {
var G__40161 = cljs.core.rest(s__40147__$1);
s__40147__$1 = G__40161;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(board))));
});
exfn.logic.add_mine_counts = (function exfn$logic$add_mine_counts(board,cell_coords){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.logic.reducer,board,cell_coords);
});
exfn.logic.generate_full_board = (function exfn$logic$generate_full_board(board_options){
var board = exfn.logic.generate_board(board_options);
var cell_coords = exfn.logic.get_all_cell_coords(board);
return exfn.logic.add_mine_counts(board,cell_coords);
});
exfn.logic.get_neighbours = (function exfn$logic$get_neighbours(max_x,max_y,p__40152){
var vec__40153 = p__40152;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40153,(1),null);
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40156){
var vec__40157 = p__40156;
var x__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(0),null);
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40157,(1),null);
return (((x__$1 < (0))) || ((y__$1 < (0))) || ((x__$1 >= max_x)) || ((y__$1 >= max_y)));
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null)], null)));
});
exfn.logic.update_to_check = (function exfn$logic$update_to_check(to_check,neighbours,revealed){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(to_check,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(neighbours,revealed));
});
exfn.logic.reveal = (function exfn$logic$reveal(to_check,revealed,board){
while(true){
var get_neighbours = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(exfn.logic.get_neighbours,cljs.core.count(cljs.core.first(board)),cljs.core.count(board));
if(cljs.core.empty_QMARK_(to_check)){
return revealed;
} else {
var cur = cljs.core.first(to_check);
var board_item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cur);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),board_item)){
var neighbours = get_neighbours(cur);
var up_to_check = exfn.logic.update_to_check(to_check,neighbours,revealed);
var G__40172 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(up_to_check,cljs.core.PersistentHashSet.createAsIfByAssoc([cur]));
var G__40173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(revealed,cur);
var G__40174 = board;
to_check = G__40172;
revealed = G__40173;
board = G__40174;
continue;
} else {
var G__40175 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(to_check,cljs.core.PersistentHashSet.createAsIfByAssoc([cur]));
var G__40176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(revealed,cur);
var G__40177 = board;
to_check = G__40175;
revealed = G__40176;
board = G__40177;
continue;

}
}
break;
}
});
exfn.logic.game_won_QMARK_ = (function exfn$logic$game_won_QMARK_(revealed,board,mines){
var total_cells = cljs.core.count(board);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(revealed) + mines),(total_cells * total_cells));
});
exfn.logic.get_cell_if_mine = (function exfn$logic$get_cell_if_mine(board,cell){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mine","mine",-130428525),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cell))){
return cell;
} else {
return null;
}
});
exfn.logic.reveal_with_flags = (function exfn$logic$reveal_with_flags(flags,board,cell){
var neighbours = exfn.logic.get_neighbours(cljs.core.count(board),cljs.core.count(board),cell);
var neighbours_flag_count = cljs.core.count(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(flags,neighbours));
var cell_num = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,cell);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell_num,neighbours_flag_count)){
if(cljs.core.empty_QMARK_(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(exfn.logic.get_cell_if_mine,board),neighbours)),flags))){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(neighbours,flags);
} else {
return new cljs.core.Keyword(null,"revealed-mine","revealed-mine",1471773354);
}
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

//# sourceMappingURL=exfn.logic.js.map
