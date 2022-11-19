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
exfn.app.guess_background = (function exfn$app$guess_background(col,row){
var word = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word","word",-420123725)], null)));
var current_row = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-row","current-row",-1645608308)], null)));
var guesses = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guesses","guesses",272840547)], null)));
var row_guess = (guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1(row) : guesses.call(null,row));
if((current_row > row)){
if(cljs.core.truth_((function (){var and__4115__auto__ = row_guess;
if(cljs.core.truth_(and__4115__auto__)){
var G__30780 = (row_guess.cljs$core$IFn$_invoke$arity$1 ? row_guess.cljs$core$IFn$_invoke$arity$1(col) : row_guess.call(null,col));
var fexpr__30779 = cljs.core.set(word);
return (fexpr__30779.cljs$core$IFn$_invoke$arity$1 ? fexpr__30779.cljs$core$IFn$_invoke$arity$1(G__30780) : fexpr__30779.call(null,G__30780));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(function (){var iter__4529__auto__ = (function exfn$app$guess_row_$_iter__30781(s__30782){
return (new cljs.core.LazySeq(null,(function (){
var s__30782__$1 = s__30782;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30782__$1);
if(temp__5735__auto__){
var s__30782__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30782__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30782__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30784 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30783 = (0);
while(true){
if((i__30783 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__30783);
cljs.core.chunk_append(b__30784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-cell","div.letter-cell",-383621841),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data-filled","data-filled",2030611738),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,current_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_no,current_row)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))))),new cljs.core.Keyword(null,"data-error","data-error",-1058016301),(function (){var and__4115__auto__ = error;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,row_no);
} else {
return and__4115__auto__;
}
})(),new cljs.core.Keyword(null,"data-guessed","data-guessed",-1563603296),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["data-won",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405)))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.guess_background(n,row_no)], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_no),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))], null));

var G__30798 = (i__30783 + (1));
i__30783 = G__30798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30784),exfn$app$guess_row_$_iter__30781(cljs.core.chunk_rest(s__30782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30784),null);
}
} else {
var n = cljs.core.first(s__30782__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.letter-cell","div.letter-cell",-383621841),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data-filled","data-filled",2030611738),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,current_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_no,current_row)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))))),new cljs.core.Keyword(null,"data-error","data-error",-1058016301),(function (){var and__4115__auto__ = error;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,row_no);
} else {
return and__4115__auto__;
}
})(),new cljs.core.Keyword(null,"data-guessed","data-guessed",-1563603296),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["data-won",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(current_row - row_no))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"won","won",910394405)))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.guess_background(n,row_no)], null),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_no),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rows,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_no,n], null))], null),exfn$app$guess_row_$_iter__30781(cljs.core.rest(s__30782__$2)));
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
cljs.core.set("abc");
exfn.app.get_key_bg = (function exfn$app$get_key_bg(guessed_letters,correct_letters,key,word){
if(cljs.core.truth_((function (){var and__4115__auto__ = (guessed_letters.cljs$core$IFn$_invoke$arity$1 ? guessed_letters.cljs$core$IFn$_invoke$arity$1(key) : guessed_letters.call(null,key));
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__30785 = new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(correct_letters);
return (fexpr__30785.cljs$core$IFn$_invoke$arity$1 ? fexpr__30785.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30785.call(null,key));
} else {
return and__4115__auto__;
}
})())){
return "#538d4e";
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = (guessed_letters.cljs$core$IFn$_invoke$arity$1 ? guessed_letters.cljs$core$IFn$_invoke$arity$1(key) : guessed_letters.call(null,key));
if(cljs.core.truth_(and__4115__auto__)){
var fexpr__30786 = new cljs.core.Keyword(null,"yellow","yellow",-881035449).cljs$core$IFn$_invoke$arity$1(correct_letters);
return (fexpr__30786.cljs$core$IFn$_invoke$arity$1 ? fexpr__30786.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30786.call(null,key));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),(function (){var iter__4529__auto__ = (function exfn$app$keyboard_row_$_iter__30787(s__30788){
return (new cljs.core.LazySeq(null,(function (){
var s__30788__$1 = s__30788;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30788__$1);
if(temp__5735__auto__){
var s__30788__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30788__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30788__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30790 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30789 = (0);
while(true){
if((i__30789 < size__4528__auto__)){
var letter = cljs.core._nth(c__4527__auto__,i__30789);
cljs.core.chunk_append(b__30790,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__30789,letter,c__4527__auto__,size__4528__auto__,b__30790,s__30788__$2,temp__5735__auto__,guessed_letters,correct_letters,word){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),letter], null));
});})(i__30789,letter,c__4527__auto__,size__4528__auto__,b__30790,s__30788__$2,temp__5735__auto__,guessed_letters,correct_letters,word))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.get_key_bg(guessed_letters,correct_letters,letter,word)], null),new cljs.core.Keyword(null,"key","key",-1516042587),letter], null),letter], null));

var G__30799 = (i__30789 + (1));
i__30789 = G__30799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30790),exfn$app$keyboard_row_$_iter__30787(cljs.core.chunk_rest(s__30788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30790),null);
}
} else {
var letter = cljs.core.first(s__30788__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (letter,s__30788__$2,temp__5735__auto__,guessed_letters,correct_letters,word){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clicked","clicked",114423720),letter], null));
});})(letter,s__30788__$2,temp__5735__auto__,guessed_letters,correct_letters,word))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),exfn.app.get_key_bg(guessed_letters,correct_letters,letter,word)], null),new cljs.core.Keyword(null,"key","key",-1516042587),letter], null),letter], null),exfn$app$keyboard_row_$_iter__30787(cljs.core.rest(s__30788__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-row","div.keyboard-row",-1229156960),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.keyboard-key","div.keyboard-key",-1302360613),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"visibility","visibility",1338380893),(function (){var pred__30791 = cljs.core._EQ_;
var expr__30792 = game_state;
if(cljs.core.truth_((pred__30791.cljs$core$IFn$_invoke$arity$2 ? pred__30791.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"won","won",910394405),expr__30792) : pred__30791.call(null,new cljs.core.Keyword(null,"won","won",910394405),expr__30792)))){
return new cljs.core.Keyword(null,"visible","visible",-1024216805);
} else {
if(cljs.core.truth_((pred__30791.cljs$core$IFn$_invoke$arity$2 ? pred__30791.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"lost","lost",-744692984),expr__30792) : pred__30791.call(null,new cljs.core.Keyword(null,"lost","lost",-744692984),expr__30792)))){
return new cljs.core.Keyword(null,"visible","visible",-1024216805);
} else {
if(cljs.core.truth_((pred__30791.cljs$core$IFn$_invoke$arity$2 ? pred__30791.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"playing","playing",70013335),expr__30792) : pred__30791.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),expr__30792)))){
return new cljs.core.Keyword(null,"hidden","hidden",-312506092);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30792)].join('')));
}
}
}
})()], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
})], null),"New Game"], null)], null);
});
exfn.app.app = (function exfn$app$app(){
var rows = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guesses","guesses",272840547)], null)));
var error = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null)));
var current_row = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-row","current-row",-1645608308)], null)));
var current_col = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-col","current-col",90922695)], null)));
var game_state = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game","div.game",1488032861),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.display_message], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-8","div.col.col-lg-8",1181006263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wordle"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.guesses","div.row.guesses",92017155),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__30794(s__30795){
return (new cljs.core.LazySeq(null,(function (){
var s__30795__$1 = s__30795;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30795__$1);
if(temp__5735__auto__){
var s__30795__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30795__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30795__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30797 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30796 = (0);
while(true){
if((i__30796 < size__4528__auto__)){
var n = cljs.core._nth(c__4527__auto__,i__30796);
cljs.core.chunk_append(b__30797,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.guess_row,current_row,current_col,rows,error,n,game_state], null));

var G__30800 = (i__30796 + (1));
i__30796 = G__30800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30797),exfn$app$app_$_iter__30794(cljs.core.chunk_rest(s__30795__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30797),null);
}
} else {
var n = cljs.core.first(s__30795__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [exfn.app.guess_row,current_row,current_col,rows,error,n,game_state], null),exfn$app$app_$_iter__30794(cljs.core.rest(s__30795__$2)));
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
