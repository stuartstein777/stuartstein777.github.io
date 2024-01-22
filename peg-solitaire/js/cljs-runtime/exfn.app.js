goog.provide('exfn.app');
exfn.app.app = (function exfn$app$app(){
var board = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null)));
var selected_cell = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cell","selected-cell",1638390443)], null)));
var targets = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"targets","targets",2014963406)], null)));
var remaining_pegs = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remaining-pegs","remaining-pegs",-1694115001)], null)));
var game_over_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over?","game-over?",432859304)], null)));
var game_win_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-win?","game-win?",-1137534134)], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),(cljs.core.truth_(game_over_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-over","div.game-over",90680416),"Game Over"], null):null),(cljs.core.truth_(game_win_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.winner","div.winner",-795149627),"Winner!"], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-8","div.col.col-lg-8",1181006263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Peg Solitaire"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(50)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-github","i.fab.fa-github",-107064877)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/stuartstein777/peg-solitaire",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)," (repo) "], null),"|",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://stuartstein777.github.io/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)," other projects"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-12","div.col.col-lg-12",27637915),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board","div.board",905832129),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__32813(s__32814){
return (new cljs.core.LazySeq(null,(function (){
var s__32814__$1 = s__32814;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__32814__$1);
if(temp__5735__auto__){
var s__32814__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32814__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__32814__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__32816 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__32815 = (0);
while(true){
if((i__32815 < size__4528__auto__)){
var c = cljs.core._nth(c__4527__auto__,i__32815);
cljs.core.chunk_append(b__32816,(function (){var cell = exfn.logic.get_cell_id(c);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,(-1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inactive","div.inactive",1012404888)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(exfn.logic.target_cell_QMARK_(targets,cell))?((function (i__32815,cell,c,c__4527__auto__,size__4528__auto__,b__32816,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),cell], null));
});})(i__32815,cell,c,c__4527__auto__,size__4528__auto__,b__32816,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_))
:((function (i__32815,cell,c,c__4527__auto__,size__4528__auto__,b__32816,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-cell","select-cell",-1682016320),cell], null));
});})(i__32815,cell,c,c__4527__auto__,size__4528__auto__,b__32816,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_))
),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,selected_cell))?"selected":(cljs.core.truth_(exfn.logic.target_cell_QMARK_(targets,cell))?"target":"board-cell"
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.concave","div.concave",-858085309),((exfn.logic.has_marble_QMARK_(board,cell))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.marble","div.marble",-916805443)], null):null)], null)], null);
}
})());

var G__32817 = (i__32815 + (1));
i__32815 = G__32817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32816),exfn$app$app_$_iter__32813(cljs.core.chunk_rest(s__32814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32816),null);
}
} else {
var c = cljs.core.first(s__32814__$2);
return cljs.core.cons((function (){var cell = exfn.logic.get_cell_id(c);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,(-1))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inactive","div.inactive",1012404888)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(exfn.logic.target_cell_QMARK_(targets,cell))?((function (cell,c,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jump","jump",-971319427),cell], null));
});})(cell,c,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_))
:((function (cell,c,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-cell","select-cell",-1682016320),cell], null));
});})(cell,c,s__32814__$2,temp__5735__auto__,board,selected_cell,targets,remaining_pegs,game_over_QMARK_,game_win_QMARK_))
),new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cell,selected_cell))?"selected":(cljs.core.truth_(exfn.logic.target_cell_QMARK_(targets,cell))?"target":"board-cell"
))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.concave","div.concave",-858085309),((exfn.logic.has_marble_QMARK_(board,cell))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.marble","div.marble",-916805443)], null):null)], null)], null);
}
})(),exfn$app$app_$_iter__32813(cljs.core.rest(s__32814__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(49)));
})()], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(20)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),["Remaining Pegs ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining_pegs)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
})], null),"Reset Board"], null)], null)], null)], null);
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
