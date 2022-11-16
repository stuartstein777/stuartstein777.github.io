goog.provide('exfn.app');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('exfn.subscriptions');
goog.require('exfn.events');
exfn.app.get_square_icon = (function exfn$app$get_square_icon(p){
var pred__8962 = cljs.core._EQ_;
var expr__8963 = p;
if(cljs.core.truth_((pred__8962.cljs$core$IFn$_invoke$arity$2 ? pred__8962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_","_",1453416199),expr__8963) : pred__8962.call(null,new cljs.core.Keyword(null,"_","_",1453416199),expr__8963)))){
return "";
} else {
if(cljs.core.truth_((pred__8962.cljs$core$IFn$_invoke$arity$2 ? pred__8962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__8963) : pred__8962.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__8963)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-times","i.fas.fa-times",-1487825087)], null);
} else {
if(cljs.core.truth_((pred__8962.cljs$core$IFn$_invoke$arity$2 ? pred__8962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"o","o",-1350007228),expr__8963) : pred__8962.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),expr__8963)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-circle","i.far.fa-circle",-1409075494)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__8963)].join('')));
}
}
}
});
exfn.app.winner = (function exfn$app$winner(){
var winner = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"winner","winner",714604679)], null)));
var game_over_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.winner","div.winner",-795149627),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_((function (){var or__4126__auto__ = winner;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return game_over_QMARK_;
}
})())?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(winner)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"The winner is ",exfn.app.get_square_icon(winner)], null)], null):"The game is a draw.")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-success","button.btn.btn-success",574341715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
})], null),"reset"], null)], null)], null);
});
exfn.app.to_play = (function exfn$app$to_play(){
var player = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.player","span.player",-2049470157),exfn.app.get_square_icon(player)," to play"], null);
});
exfn.app.board = (function exfn$app$board(){
var board = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),(function (){var iter__4529__auto__ = (function exfn$app$board_$_iter__8965(s__8966){
return (new cljs.core.LazySeq(null,(function (){
var s__8966__$1 = s__8966;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8966__$1);
if(temp__5735__auto__){
var s__8966__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__8966__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8966__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8968 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8967 = (0);
while(true){
if((i__8967 < size__4528__auto__)){
var r = cljs.core._nth(c__4527__auto__,i__8967);
cljs.core.chunk_append(b__8968,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.game-row","div.row.game-row",-518315706),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),(function (){var iter__4529__auto__ = ((function (i__8967,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board){
return (function exfn$app$board_$_iter__8965_$_iter__8969(s__8970){
return (new cljs.core.LazySeq(null,((function (i__8967,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board){
return (function (){
var s__8970__$1 = s__8970;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8970__$1);
if(temp__5735__auto____$1){
var s__8970__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8970__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__8970__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__8972 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__8971 = (0);
while(true){
if((i__8971 < size__4528__auto____$1)){
var c = cljs.core._nth(c__4527__auto____$1,i__8971);
cljs.core.chunk_append(b__8972,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.game-square","div.col-4.game-square",2044548097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),")"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8971,i__8967,c,c__4527__auto____$1,size__4528__auto____$1,b__8972,s__8970__$2,temp__5735__auto____$1,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-board","update-board",-392441434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null));
});})(i__8971,i__8967,c,c__4527__auto____$1,size__4528__auto____$1,b__8972,s__8970__$2,temp__5735__auto____$1,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-marker","div.board-marker",491574721),exfn.app.get_square_icon(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))], null)], null));

var G__8977 = (i__8971 + (1));
i__8971 = G__8977;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8972),exfn$app$board_$_iter__8965_$_iter__8969(cljs.core.chunk_rest(s__8970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8972),null);
}
} else {
var c = cljs.core.first(s__8970__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.game-square","div.col-4.game-square",2044548097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),")"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8967,c,s__8970__$2,temp__5735__auto____$1,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-board","update-board",-392441434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null));
});})(i__8967,c,s__8970__$2,temp__5735__auto____$1,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-marker","div.board-marker",491574721),exfn.app.get_square_icon(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))], null)], null),exfn$app$board_$_iter__8965_$_iter__8969(cljs.core.rest(s__8970__$2)));
}
} else {
return null;
}
break;
}
});})(i__8967,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board))
,null,null));
});})(i__8967,r,c__4527__auto__,size__4528__auto__,b__8968,s__8966__$2,temp__5735__auto__,board))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null));

var G__8978 = (i__8967 + (1));
i__8967 = G__8978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8968),exfn$app$board_$_iter__8965(cljs.core.chunk_rest(s__8966__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8968),null);
}
} else {
var r = cljs.core.first(s__8966__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.game-row","div.row.game-row",-518315706),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('')], null),(function (){var iter__4529__auto__ = ((function (r,s__8966__$2,temp__5735__auto__,board){
return (function exfn$app$board_$_iter__8965_$_iter__8973(s__8974){
return (new cljs.core.LazySeq(null,(function (){
var s__8974__$1 = s__8974;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8974__$1);
if(temp__5735__auto____$1){
var s__8974__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8974__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8974__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8976 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8975 = (0);
while(true){
if((i__8975 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__8975);
cljs.core.chunk_append(b__8976,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.game-square","div.col-4.game-square",2044548097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),")"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__8975,c,c__4527__auto__,size__4528__auto__,b__8976,s__8974__$2,temp__5735__auto____$1,r,s__8966__$2,temp__5735__auto__,board){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-board","update-board",-392441434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null));
});})(i__8975,c,c__4527__auto__,size__4528__auto__,b__8976,s__8974__$2,temp__5735__auto____$1,r,s__8966__$2,temp__5735__auto__,board))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-marker","div.board-marker",491574721),exfn.app.get_square_icon(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))], null)], null));

var G__8979 = (i__8975 + (1));
i__8975 = G__8979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8976),exfn$app$board_$_iter__8965_$_iter__8973(cljs.core.chunk_rest(s__8974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8976),null);
}
} else {
var c = cljs.core.first(s__8974__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-4.game-square","div.col-4.game-square",2044548097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),")"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (c,s__8974__$2,temp__5735__auto____$1,r,s__8966__$2,temp__5735__auto__,board){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-board","update-board",-392441434),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)], null));
});})(c,s__8974__$2,temp__5735__auto____$1,r,s__8966__$2,temp__5735__auto__,board))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-marker","div.board-marker",491574721),exfn.app.get_square_icon(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,c], null)))], null)], null),exfn$app$board_$_iter__8965_$_iter__8973(cljs.core.rest(s__8974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__8966__$2,temp__5735__auto__,board))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null),exfn$app$board_$_iter__8965(cljs.core.rest(s__8966__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})()], null);
});
exfn.app.app = (function exfn$app$app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic Tac Toe"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.to_play], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.winner], null)], null);
});
exfn.app.start = (function exfn$app$start(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.app], null),document.getElementById("app"));
});
exfn.app.init = (function exfn$app$init(){
return exfn.app.start();
});
goog.exportSymbol('exfn.app.init', exfn.app.init);
if((typeof exfn !== 'undefined') && (typeof exfn.app !== 'undefined') && (typeof exfn.app.initialize !== 'undefined')){
} else {
exfn.app.initialize = re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}

//# sourceMappingURL=exfn.app.js.map
