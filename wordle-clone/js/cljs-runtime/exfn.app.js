goog.provide('exfn.app');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('exfn.subscriptions');
goog.require('clojure.string');
goog.require('exfn.events');
goog.require('exfn.logic');
goog.require('goog.string.format');
exfn.app.display_message = (function exfn$app$display_message(){
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var game_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)));
var current_row = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-row","current-row",-1645608308)], null)));
var num_of_guesses = (current_row - (1));
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.invalid-word-error","div.invalid-word-error",1245664094),(cljs.core.truth_(error)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-error","data-error",-1058016301),error], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-win","data-win",654012507),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"lost","lost",-744692984)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-lost","data-lost",-478866715),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"lost","lost",-744692984))], null):null))),(cljs.core.truth_(error)?"Not in word list!":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"lost","lost",-744692984)))?word:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(1)))))?"Genuis!":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(2)))))?"Magnificient!":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(3)))))?"Impressive!":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(4)))))?"Splendid!":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(5)))))?"Great!":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_of_guesses,(6)))))?"Phew!":null))))))))], null);
});
exfn.app.histogram_row = (function exfn$app$histogram_row(n,solves,stats){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754),n], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-10","div.col.col-lg-10",-1700161380),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.histogram-bar","div.histogram-bar",592881982),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(solves.cljs$core$IFn$_invoke$arity$1 ? solves.cljs$core$IFn$_invoke$arity$1(n) : solves.call(null,n)),new cljs.core.Keyword(null,"background-color","background-color",570434026),((((solves.cljs$core$IFn$_invoke$arity$1 ? solves.cljs$core$IFn$_invoke$arity$1(n) : solves.call(null,n)) > (0)))?"#538d4e":"#3a3a3c")], null)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2((stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"solves","solves",-1204589400)) : stats.call(null,new cljs.core.Keyword(null,"solves","solves",-1204589400))),n)], null)], null)], null);
});
exfn.app.stats_view = (function exfn$app$stats_view(){
var stats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011)], null)));
var stats_visible = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats-visible","stats-visible",536430735)], null)));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.stats-view","div.stats-view",-1962792261),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),(cljs.core.truth_(stats_visible)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.closex","div.row.closex",1774903089),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-stats","toggle-stats",1431946576)], null));
})], null),"X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Stats for session"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.streak-summary","div.row.streak-summary",618136357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-value","div.col.streak-value",-1959543596),(stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"played","played",-1713723590)) : stats.call(null,new cljs.core.Keyword(null,"played","played",-1713723590)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-value","div.col.streak-value",-1959543596),((((stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"played","played",-1713723590)) : stats.call(null,new cljs.core.Keyword(null,"played","played",-1713723590))) > (0)))?(((stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wins","wins",1850756412)) : stats.call(null,new cljs.core.Keyword(null,"wins","wins",1850756412))) / (stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"played","played",-1713723590)) : stats.call(null,new cljs.core.Keyword(null,"played","played",-1713723590)))) * 100.0):"-")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-value","div.col.streak-value",-1959543596),(stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628)) : stats.call(null,new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-value","div.col.streak-value",-1959543596),(stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max-streak","max-streak",1027422876)) : stats.call(null,new cljs.core.Keyword(null,"max-streak","max-streak",1027422876)))], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.streak-summary","div.row.streak-summary",618136357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-header","div.col.streak-header",637842679),"Played"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-header","div.col.streak-header",637842679),"Win %"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-header","div.col.streak-header",637842679),"Current streak"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.streak-header","div.col.streak-header",637842679),"Max streak"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"GUESS DISTRIBUTION"], null)], null),(function (){var solves = exfn.logic.guess_distribution_histogram((stats.cljs$core$IFn$_invoke$arity$1 ? stats.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"solves","solves",-1204589400)) : stats.call(null,new cljs.core.Keyword(null,"solves","solves",-1204589400))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], null),(function (){var iter__4529__auto__ = (function exfn$app$stats_view_$_iter__31381(s__31382){
return (new cljs.core.LazySeq(null,(function (){
var s__31382__$1 = s__31382;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31382__$1);
if(temp__5735__auto__){
var s__31382__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31382__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31382__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31384 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31383 = (0);
while(true){
if((i__31383 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__31383);
cljs.core.chunk_append(b__31384,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.histogram_row,n,solves,stats], null));

var G__31404 = (i__31383 + (1));
i__31383 = G__31404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31384),exfn$app$stats_view_$_iter__31381(cljs.core.chunk_rest(s__31382__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31384),null);
}
} else {
var n = cljs.core.first(s__31382__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.histogram_row,n,solves,stats], null),exfn$app$stats_view_$_iter__31381(cljs.core.rest(s__31382__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)));
})()], null);
})()], null);
});
exfn.app.guess_background = (function exfn$app$guess_background(col,row){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var current_row = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-row","current-row",-1645608308)], null)));
var guesses = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guesses","guesses",272840547)], null)));
var row_guess = (guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1(row) : guesses.call(null,row));
if((current_row > row)){
if(cljs.core.truth_((function (){var and__4115__auto__ = row_guess;
if(cljs.core.truth_(and__4115__auto__)){
var G__31386 = (row_guess.cljs$core$IFn$_invoke$arity$1 ? row_guess.cljs$core$IFn$_invoke$arity$1(col) : row_guess.call(null,col));
var fexpr__31385 = cljs.core.set(word);
return (fexpr__31385.cljs$core$IFn$_invoke$arity$1 ? fexpr__31385.cljs$core$IFn$_invoke$arity$1(G__31386) : fexpr__31385.call(null,G__31386));
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(word,(col - (1))),(row_guess.cljs$core$IFn$_invoke$arity$1 ? row_guess.cljs$core$IFn$_invoke$arity$1(col) : row_guess.call(null,col)))){
return "#538d4e";
} else {
return "#b59f3b";
}
} else {
return "#3a3a3c";
}
} else {
return "#121213";
}
});
exfn.app.guess_row = (function exfn$app$guess_row(current_row,current_col,rows,error,row_no,game_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(function (){var iter__4529__auto__ = (function exfn$app$guess_row_$_iter__31387(s__31388){
return (new cljs.core.LazySeq(null,(function (){
var s__31388__$1 = s__31388;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31388__$1);
if(temp__5735__auto__){
var s__31388__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31388__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31388__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31390 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31389 = (0);
while(true){
if((i__31389 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__31389);
cljs.core.chunk_append(b__31390,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-cell","div.letter-cell",-383621841),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data-filled","data-filled",2030611738),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,current_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_no,current_row)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))))),new cljs.core.Keyword(null,"data-error","data-error",-1058016301),(function (){var and__4115__auto__ = error;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,row_no);
} else {
return and__4115__auto__;
}
})(),new cljs.core.Keyword(null,"data-guessed","data-guessed",-1563603296),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["data-won",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405)))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.guess_background(n,row_no)], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_no),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))], null));

var G__31405 = (i__31389 + (1));
i__31389 = G__31405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31390),exfn$app$guess_row_$_iter__31387(cljs.core.chunk_rest(s__31388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31390),null);
}
} else {
var n = cljs.core.first(s__31388__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-cell","div.letter-cell",-383621841),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data-filled","data-filled",2030611738),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,current_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_no,current_row)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))))),new cljs.core.Keyword(null,"data-error","data-error",-1058016301),(function (){var and__4115__auto__ = error;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,row_no);
} else {
return and__4115__auto__;
}
})(),new cljs.core.Keyword(null,"data-guessed","data-guessed",-1563603296),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["data-won",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405)))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.guess_background(n,row_no)], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_no),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))], null),exfn$app$guess_row_$_iter__31387(cljs.core.rest(s__31388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(6)));
})()], null);
});
exfn.app.get_key_bg = (function exfn$app$get_key_bg(guessed_letters,correct_letters,key,word){
if(cljs.core.truth_((function (){var and__4115__auto__ = (guessed_letters.cljs$core$IFn$_invoke$arity$1 ? guessed_letters.cljs$core$IFn$_invoke$arity$1(key) : guessed_letters.call(null,key));
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__31391 = new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(correct_letters);
return (fexpr__31391.cljs$core$IFn$_invoke$arity$1 ? fexpr__31391.cljs$core$IFn$_invoke$arity$1(key) : fexpr__31391.call(null,key));
} else {
return and__4115__auto__;
}
})())){
return "#538d4e";
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (guessed_letters.cljs$core$IFn$_invoke$arity$1 ? guessed_letters.cljs$core$IFn$_invoke$arity$1(key) : guessed_letters.call(null,key));
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__31392 = new cljs.core.Keyword(null,"yellow","yellow",-881035449).cljs$core$IFn$_invoke$arity$1(correct_letters);
return (fexpr__31392.cljs$core$IFn$_invoke$arity$1 ? fexpr__31392.cljs$core$IFn$_invoke$arity$1(key) : fexpr__31392.call(null,key));
} else {
return and__4115__auto__;
}
})())){
return "#b59f3b";
} else {
if(cljs.core.truth_((guessed_letters.cljs$core$IFn$_invoke$arity$1 ? guessed_letters.cljs$core$IFn$_invoke$arity$1(key) : guessed_letters.call(null,key)))){
return "#3a3a3c";
} else {
return "#818384";

}
}
}
});
exfn.app.keyboard_row = (function exfn$app$keyboard_row(keys){
var guessed_letters = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579)], null)));
var correct_letters = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correct-letters","correct-letters",533359080)], null)));
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),(function (){var iter__4529__auto__ = (function exfn$app$keyboard_row_$_iter__31393(s__31394){
return (new cljs.core.LazySeq(null,(function (){
var s__31394__$1 = s__31394;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31394__$1);
if(temp__5735__auto__){
var s__31394__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31394__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31394__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31396 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31395 = (0);
while(true){
if((i__31395 < size__4528__auto__)){
var letter = cljs.core._nth(c__4527__auto__,i__31395);
cljs.core.chunk_append(b__31396,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31395,letter,c__4527__auto__,size__4528__auto__,b__31396,s__31394__$2,temp__5735__auto__,guessed_letters,correct_letters,word){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),letter], null));
});})(i__31395,letter,c__4527__auto__,size__4528__auto__,b__31396,s__31394__$2,temp__5735__auto__,guessed_letters,correct_letters,word))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.get_key_bg(guessed_letters,correct_letters,letter,word)], null),new cljs.core.Keyword(null,"key","key",-1516042587),letter], null),letter], null));

var G__31406 = (i__31395 + (1));
i__31395 = G__31406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31396),exfn$app$keyboard_row_$_iter__31393(cljs.core.chunk_rest(s__31394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31396),null);
}
} else {
var letter = cljs.core.first(s__31394__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__31394__$2,temp__5735__auto__,guessed_letters,correct_letters,word){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),letter], null));
});})(letter,s__31394__$2,temp__5735__auto__,guessed_letters,correct_letters,word))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.get_key_bg(guessed_letters,correct_letters,letter,word)], null),new cljs.core.Keyword(null,"key","key",-1516042587),letter], null),letter], null),exfn$app$keyboard_row_$_iter__31393(cljs.core.rest(s__31394__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(keys,/-/));
})()], null);
});
exfn.app.new_game_row = (function exfn$app$new_game_row(){
var game_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"visibility","visibility",1338380893),(function (){var pred__31397 = cljs.core._EQ_;
var expr__31398 = game_state;
if(cljs.core.truth_((pred__31397.cljs$core$IFn$_invoke$arity$2 ? pred__31397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"won","won",910394405),expr__31398) : pred__31397.call(null,new cljs.core.Keyword(null,"won","won",910394405),expr__31398)))){
return new cljs.core.Keyword(null,"visible","visible",-1024216805);
} else {
if(cljs.core.truth_((pred__31397.cljs$core$IFn$_invoke$arity$2 ? pred__31397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lost","lost",-744692984),expr__31398) : pred__31397.call(null,new cljs.core.Keyword(null,"lost","lost",-744692984),expr__31398)))){
return new cljs.core.Keyword(null,"visible","visible",-1024216805);
} else {
if(cljs.core.truth_((pred__31397.cljs$core$IFn$_invoke$arity$2 ? pred__31397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),expr__31398) : pred__31397.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),expr__31398)))){
return new cljs.core.Keyword(null,"hidden","hidden",-312506092);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31398)].join('')));
}
}
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-game","new-game",167241648)], null));
})], null),"New Game"], null)], null);
});
exfn.app.app = (function exfn$app$app(){
var rows = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guesses","guesses",272840547)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var current_row = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-row","current-row",-1645608308)], null)));
var current_col = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-col","current-col",90922695)], null)));
var game_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.display_message], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.stats_view], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-8","div.col.col-lg-8",1181006263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wordle"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-cubes.stats","i.fas.fa-cubes.stats",-833799349),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-stats","toggle-stats",1431946576)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.guesses","div.row.guesses",92017155),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__31400(s__31401){
return (new cljs.core.LazySeq(null,(function (){
var s__31401__$1 = s__31401;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__31401__$1);
if(temp__5735__auto__){
var s__31401__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31401__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__31401__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__31403 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__31402 = (0);
while(true){
if((i__31402 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__31402);
cljs.core.chunk_append(b__31403,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.guess_row,current_row,current_col,rows,error,n,game_state], null));

var G__31407 = (i__31402 + (1));
i__31402 = G__31407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31403),exfn$app$app_$_iter__31400(cljs.core.chunk_rest(s__31401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31403),null);
}
} else {
var n = cljs.core.first(s__31401__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.guess_row,current_row,current_col,rows,error,n,game_state], null),exfn$app$app_$_iter__31400(cljs.core.rest(s__31401__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(7)));
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard","div.keyboard",1307558669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.keyboard_row,"Q-W-E-R-T-Y-U-I-O-P"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.keyboard_row,"A-S-D-F-G-H-J-K-L"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.keyboard_row,"ENTER-Z-X-C-V-B-N-M-DEL"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.new_game_row], null)], null)], null)], null);
});
exfn.app.start = (function exfn$app$start(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.app], null),document.getElementById("app"));
});
exfn.app.init = (function exfn$app$init(){
(window.onkeydown = (function (gfg){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),gfg.keyCode], null));
}));

return exfn.app.start();
});
goog.exportSymbol('exfn.app.init', exfn.app.init);
if((typeof exfn !== 'undefined') && (typeof exfn.app !== 'undefined') && (typeof exfn.app.initialize !== 'undefined')){
} else {
exfn.app.initialize = re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
}

//# sourceMappingURL=exfn.app.js.map
