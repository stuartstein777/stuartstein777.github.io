goog.provide('exfn.logic');
exfn.logic.generate_board = (function exfn$logic$generate_board(){
return cljs.core.PersistentHashMap.fromArrays([(7),(20),(27),(1),(24),(4),(15),(21),(31),(32),(33),(13),(22),(29),(6),(28),(25),(17),(3),(12),(2),(23),(19),(11),(9),(5),(14),(26),(16),(30),(10),(18),(8)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(8),null,(14)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(20),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(13),null,(19),(27)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(27),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),null,(26),null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(2),null,(4)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(24),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(17),(25),(23),(29)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(5),null,(9)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(15),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(16),(14),(22)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(21),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),(22),null,null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(31),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(28),(32),null,null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(32),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(29),(33),(31),null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(33),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),null,(32),null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(13),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(12),(20)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(22),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(23),(21),null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(29),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(24),(30),(28),(32)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),null,(5),(11)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(28),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(23),(29),null,(31)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(25),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(18),(26),(24),(30)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(17),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),false,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(18),(16),(24)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,(2),(6)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(12),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(13),(11),(19)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(3),(1),(5)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(23),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(16),(24),(22),(28)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(19),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(12),(20),(18),(26)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(11),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(12),(10),(18)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(10),(8),(16)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(6),(4),(10)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(14),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),(15),null,(21)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(26),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(19),(27),(25),null], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(16),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(17),(15),(23)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(30),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),null,(29),(33)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(11),(9),(17)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(18),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(19),(17),(25)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(9),(7),(15)], null)], null)]);
});
exfn.logic.has_marble_QMARK_ = (function exfn$logic$has_marble_QMARK_(board,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703)], null)) === true;
});
exfn.logic.can_jump = (function exfn$logic$can_jump(board,from,direction){
var direct_neighbour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),direction], null));
var direct_neighbour_neighbour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [direct_neighbour,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),direction], null),null);
var direct_neighbour_has_marble_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direct_neighbour,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703)], null)) === true;
var direct_neighbour_neighbour_has_no_marble_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [direct_neighbour_neighbour,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703)], null)) === false;
return ((direct_neighbour_has_marble_QMARK_) && (direct_neighbour_neighbour_has_no_marble_QMARK_));
});
exfn.logic.get_potential_jumps = (function exfn$logic$get_potential_jumps(board,from){
var neighbors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473)], null));
var can_jump_north = exfn.logic.can_jump(board,from,(0));
var can_jump_east = exfn.logic.can_jump(board,from,(1));
var can_jump_west = exfn.logic.can_jump(board,from,(2));
var can_jump_south = exfn.logic.can_jump(board,from,(3));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"cell","cell",764245084),((can_jump_north)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1((0)) : neighbors.call(null,(0))),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),(0)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"cell","cell",764245084),((can_jump_east)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1((1)) : neighbors.call(null,(1))),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),(1)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"cell","cell",764245084),((can_jump_west)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1((2)) : neighbors.call(null,(2))),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),(2)], null)):null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"cell","cell",764245084),((can_jump_south)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(neighbors.cljs$core$IFn$_invoke$arity$1 ? neighbors.cljs$core$IFn$_invoke$arity$1((3)) : neighbors.call(null,(3))),new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),(3)], null)):null)], null)], null);
});
exfn.logic.pegs_remaining = (function exfn$logic$pegs_remaining(board){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),cljs.core.vals(board))));
});
exfn.logic.jump = (function exfn$logic$jump(board,from,target,direction){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(board,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [from], null),cljs.core.assoc,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [target], null),cljs.core.assoc,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),true),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,new cljs.core.Keyword(null,"neighbors","neighbors",1430436473),direction], null))], null),cljs.core.assoc,new cljs.core.Keyword(null,"has-marble","has-marble",1975360703),false);
});
exfn.logic.remaining_jumps = (function exfn$logic$remaining_jumps(board){
var cells = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(34));
var jumps = (function (){var iter__4529__auto__ = (function exfn$logic$remaining_jumps_$_iter__32739(s__32740){
return (new cljs.core.LazySeq(null,(function (){
var s__32740__$1 = s__32740;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32740__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var cell = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__32740__$1,cell,xs__6292__auto__,temp__5735__auto__,cells){
return (function exfn$logic$remaining_jumps_$_iter__32739_$_iter__32741(s__32742){
return (new cljs.core.LazySeq(null,((function (s__32740__$1,cell,xs__6292__auto__,temp__5735__auto__,cells){
return (function (){
var s__32742__$1 = s__32742;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__32742__$1);
if(temp__5735__auto____$1){
var s__32742__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32742__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32742__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32744 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32743 = (0);
while(true){
if((i__32743 < size__4528__auto__)){
var direction = cljs.core._nth(c__4527__auto__,i__32743);
if(((exfn.logic.has_marble_QMARK_(board,cell)) && (exfn.logic.can_jump(board,cell,direction)))){
cljs.core.chunk_append(b__32744,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell","cell",764245084),cell,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"has-jump","has-jump",1983296899),true], null));

var G__32759 = (i__32743 + (1));
i__32743 = G__32759;
continue;
} else {
var G__32761 = (i__32743 + (1));
i__32743 = G__32761;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32744),exfn$logic$remaining_jumps_$_iter__32739_$_iter__32741(cljs.core.chunk_rest(s__32742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32744),null);
}
} else {
var direction = cljs.core.first(s__32742__$2);
if(((exfn.logic.has_marble_QMARK_(board,cell)) && (exfn.logic.can_jump(board,cell,direction)))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cell","cell",764245084),cell,new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"has-jump","has-jump",1983296899),true], null),exfn$logic$remaining_jumps_$_iter__32739_$_iter__32741(cljs.core.rest(s__32742__$2)));
} else {
var G__32762 = cljs.core.rest(s__32742__$2);
s__32742__$1 = G__32762;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__32740__$1,cell,xs__6292__auto__,temp__5735__auto__,cells))
,null,null));
});})(s__32740__$1,cell,xs__6292__auto__,temp__5735__auto__,cells))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,exfn$logic$remaining_jumps_$_iter__32739(cljs.core.rest(s__32740__$1)));
} else {
var G__32763 = cljs.core.rest(s__32740__$1);
s__32740__$1 = G__32763;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cells);
})();
return jumps;
});
exfn.logic.game_won_QMARK_ = (function exfn$logic$game_won_QMARK_(board){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exfn.logic.pegs_remaining(board));
});
exfn.logic.get_cell_id = (function exfn$logic$get_cell_id(cell){
var or__4126__auto__ = (function (){var fexpr__32746 = cljs.core.PersistentHashMap.fromArrays([(20),(27),(24),(39),(46),(4),(15),(21),(31),(32),(40),(33),(22),(29),(28),(25),(34),(17),(3),(12),(23),(47),(35),(19),(11),(5),(45),(26),(16),(38),(30),(10),(18)],[(12),(19),(16),(29),(32),(2),(7),(13),(23),(24),(30),(25),(14),(21),(20),(17),(26),(9),(1),(6),(15),(33),(27),(11),(5),(3),(31),(18),(8),(28),(22),(4),(10)]);
return (fexpr__32746.cljs$core$IFn$_invoke$arity$1 ? fexpr__32746.cljs$core$IFn$_invoke$arity$1(cell) : fexpr__32746.call(null,cell));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (-1);
}
});
exfn.logic.target_cell_QMARK_ = (function exfn$logic$target_cell_QMARK_(targets,cell_id){
var fexpr__32747 = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cell","cell",764245084),targets)));
return (fexpr__32747.cljs$core$IFn$_invoke$arity$1 ? fexpr__32747.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__32747.call(null,cell_id));
});

//# sourceMappingURL=exfn.logic.js.map
