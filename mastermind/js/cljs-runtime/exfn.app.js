goog.provide('exfn.app');
exfn.app.app = (function exfn$app$app(){
var current_guess = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265)], null)));
var current_guess_number = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-guess-number","current-guess-number",-93079164)], null)));
var guesses = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guesses","guesses",272840547)], null)));
var clues = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clues","clues",1918948918)], null)));
var solution = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"solution","solution",-1727231491)], null)));
var game_won_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-8","div.col.col-lg-8",1181006263),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mastermind"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-4","div.col.col-lg-4",1297141949),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(50)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fab.fa-github","i.fab.fa-github",-107064877)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/stuartstein777/peg-solitaire",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)," (repo) "], null),"|",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://stuartstein777.github.io/",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null)," other projects"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-1","div.col.col-lg-1",640572310),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.Keyword(null,"row-span","row-span",-365554241),(8)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29845 = cljs.core.set(current_guess);
return (fexpr__29845.cljs$core$IFn$_invoke$arity$1 ? fexpr__29845.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"green","green",-945526839)) : fexpr__29845.call(null,new cljs.core.Keyword(null,"green","green",-945526839)));
})())?"marble green guessed":"marble green"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"green","green",-945526839)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29846 = cljs.core.set(current_guess);
return (fexpr__29846.cljs$core$IFn$_invoke$arity$1 ? fexpr__29846.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"red","red",-969428204)) : fexpr__29846.call(null,new cljs.core.Keyword(null,"red","red",-969428204)));
})())?"marble red guessed":"marble red"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"red","red",-969428204)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29847 = cljs.core.set(current_guess);
return (fexpr__29847.cljs$core$IFn$_invoke$arity$1 ? fexpr__29847.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blue","blue",-622100620)) : fexpr__29847.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620)));
})())?"marble blue guessed":"marble blue"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29848 = cljs.core.set(current_guess);
return (fexpr__29848.cljs$core$IFn$_invoke$arity$1 ? fexpr__29848.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"orange","orange",73816386)) : fexpr__29848.call(null,new cljs.core.Keyword(null,"orange","orange",73816386)));
})())?"marble orange guessed":"marble orange"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"orange","orange",73816386)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29849 = cljs.core.set(current_guess);
return (fexpr__29849.cljs$core$IFn$_invoke$arity$1 ? fexpr__29849.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yellow","yellow",-881035449)) : fexpr__29849.call(null,new cljs.core.Keyword(null,"yellow","yellow",-881035449)));
})())?"marble yellow guessed":"marble yellow"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29850 = cljs.core.set(current_guess);
return (fexpr__29850.cljs$core$IFn$_invoke$arity$1 ? fexpr__29850.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pink","pink",393815864)) : fexpr__29850.call(null,new cljs.core.Keyword(null,"pink","pink",393815864)));
})())?"marble pink guessed":"marble pink"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"pink","pink",393815864)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29851 = cljs.core.set(current_guess);
return (fexpr__29851.cljs$core$IFn$_invoke$arity$1 ? fexpr__29851.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purple","purple",-876021126)) : fexpr__29851.call(null,new cljs.core.Keyword(null,"purple","purple",-876021126)));
})())?"marble purple guessed":"marble purple"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"purple","purple",-876021126)], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-cell","div.board-cell",1945585078),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((function (){var fexpr__29852 = cljs.core.set(current_guess);
return (fexpr__29852.cljs$core$IFn$_invoke$arity$1 ? fexpr__29852.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274)) : fexpr__29852.call(null,new cljs.core.Keyword(null,"cyan","cyan",1118839274)));
})())?"marble cyan guessed":"marble cyan"
),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),new cljs.core.Keyword(null,"cyan","cyan",1118839274)], null));
})], null)], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-3","div.col.col-lg-3",974533226)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__29853(s__29854){
return (new cljs.core.LazySeq(null,(function (){
var s__29854__$1 = s__29854;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29854__$1);
if(temp__5735__auto__){
var s__29854__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29854__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29854__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29856 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29855 = (0);
while(true){
if((i__29855 < size__4528__auto__)){
var j = cljs.core._nth(c__4527__auto__,i__29855);
cljs.core.chunk_append(b__29856,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4529__auto__ = ((function (i__29855,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function exfn$app$app_$_iter__29853_$_iter__29857(s__29858){
return (new cljs.core.LazySeq(null,((function (i__29855,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
var s__29858__$1 = s__29858;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29858__$1);
if(temp__5735__auto____$1){
var s__29858__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29858__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__29858__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__29860 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__29859 = (0);
while(true){
if((i__29859 < size__4528__auto____$1)){
var i = cljs.core._nth(c__4527__auto____$1,i__29859);
cljs.core.chunk_append(b__29860,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((current_guess_number < j))?"guess-cell inactive":"guess-cell")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))?["marble ",cljs.core.name((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))].join(''):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29859,i__29855,i,c__4527__auto____$1,size__4528__auto____$1,b__29860,s__29858__$2,temp__5735__auto____$1,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-guess","remove-guess",1131438287),i], null));
});})(i__29859,i__29855,i,c__4527__auto____$1,size__4528__auto____$1,b__29860,s__29858__$2,temp__5735__auto____$1,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null)], null):(function (){var guess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(guesses,(j - (1)),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guess: ",guess], 0));

if(cljs.core.truth_((function (){var and__4115__auto__ = guess;
if(cljs.core.truth_(and__4115__auto__)){
return (guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name((guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i)))].join('')], null)], null);
} else {
return null;
}
})())], null));

var G__29883 = (i__29859 + (1));
i__29859 = G__29883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29860),exfn$app$app_$_iter__29853_$_iter__29857(cljs.core.chunk_rest(s__29858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29860),null);
}
} else {
var i = cljs.core.first(s__29858__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((current_guess_number < j))?"guess-cell inactive":"guess-cell")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))?["marble ",cljs.core.name((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))].join(''):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29855,i,s__29858__$2,temp__5735__auto____$1,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-guess","remove-guess",1131438287),i], null));
});})(i__29855,i,s__29858__$2,temp__5735__auto____$1,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null)], null):(function (){var guess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(guesses,(j - (1)),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guess: ",guess], 0));

if(cljs.core.truth_((function (){var and__4115__auto__ = guess;
if(cljs.core.truth_(and__4115__auto__)){
return (guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name((guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i)))].join('')], null)], null);
} else {
return null;
}
})())], null),exfn$app$app_$_iter__29853_$_iter__29857(cljs.core.rest(s__29858__$2)));
}
} else {
return null;
}
break;
}
});})(i__29855,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
,null,null));
});})(i__29855,j,c__4527__auto__,size__4528__auto__,b__29856,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
})()));

var G__29884 = (i__29855 + (1));
i__29855 = G__29884;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29856),exfn$app$app_$_iter__29853(cljs.core.chunk_rest(s__29854__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29856),null);
}
} else {
var j = cljs.core.first(s__29854__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4529__auto__ = ((function (j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function exfn$app$app_$_iter__29853_$_iter__29861(s__29862){
return (new cljs.core.LazySeq(null,(function (){
var s__29862__$1 = s__29862;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__29862__$1);
if(temp__5735__auto____$1){
var s__29862__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29862__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29862__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29864 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29863 = (0);
while(true){
if((i__29863 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__29863);
cljs.core.chunk_append(b__29864,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((current_guess_number < j))?"guess-cell inactive":"guess-cell")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))?["marble ",cljs.core.name((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))].join(''):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29863,i,c__4527__auto__,size__4528__auto__,b__29864,s__29862__$2,temp__5735__auto____$1,j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-guess","remove-guess",1131438287),i], null));
});})(i__29863,i,c__4527__auto__,size__4528__auto__,b__29864,s__29862__$2,temp__5735__auto____$1,j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null)], null):(function (){var guess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(guesses,(j - (1)),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guess: ",guess], 0));

if(cljs.core.truth_((function (){var and__4115__auto__ = guess;
if(cljs.core.truth_(and__4115__auto__)){
return (guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name((guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i)))].join('')], null)], null);
} else {
return null;
}
})())], null));

var G__29885 = (i__29863 + (1));
i__29863 = G__29885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29864),exfn$app$app_$_iter__29853_$_iter__29861(cljs.core.chunk_rest(s__29862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29864),null);
}
} else {
var i = cljs.core.first(s__29862__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((current_guess_number < j))?"guess-cell inactive":"guess-cell")], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,j))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))?["marble ",cljs.core.name((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1(i) : current_guess.call(null,i)))].join(''):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__29862__$2,temp__5735__auto____$1,j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remove-guess","remove-guess",1131438287),i], null));
});})(i,s__29862__$2,temp__5735__auto____$1,j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null)], null):(function (){var guess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(guesses,(j - (1)),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["guess: ",guess], 0));

if(cljs.core.truth_((function (){var and__4115__auto__ = guess;
if(cljs.core.truth_(and__4115__auto__)){
return (guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i));
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name((guess.cljs$core$IFn$_invoke$arity$1 ? guess.cljs$core$IFn$_invoke$arity$1(i) : guess.call(null,i)))].join('')], null)], null);
} else {
return null;
}
})())], null),exfn$app$app_$_iter__29853_$_iter__29861(cljs.core.rest(s__29862__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(j,s__29854__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(5)));
})()),exfn$app$app_$_iter__29853(cljs.core.rest(s__29854__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-1","div.col.col-lg-1",640572310),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__29865(s__29866){
return (new cljs.core.LazySeq(null,(function (){
var s__29866__$1 = s__29866;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29866__$1);
if(temp__5735__auto__){
var s__29866__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29866__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29866__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29868 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29867 = (0);
while(true){
if((i__29867 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__29867);
cljs.core.chunk_append(b__29868,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.check-guess-holder","div.check-guess-holder",299945877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vals(current_guess)))))?new cljs.core.Keyword(null,"block","block",664686210):new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__29867,i,c__4527__auto__,size__4528__auto__,b__29868,s__29866__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-guess","check-guess",-1041834016)], null));
});})(i__29867,i,c__4527__auto__,size__4528__auto__,b__29868,s__29866__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null),((((cljs.core.not(game_won_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,i))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play.check-guess","i.fas.fa-play.check-guess",-67869299)], null):null)], null)], null));

var G__29886 = (i__29867 + (1));
i__29867 = G__29886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29868),exfn$app$app_$_iter__29865(cljs.core.chunk_rest(s__29866__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29868),null);
}
} else {
var i = cljs.core.first(s__29866__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.check-guess-holder","div.check-guess-holder",299945877),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.vals(current_guess)))))?new cljs.core.Keyword(null,"block","block",664686210):new cljs.core.Keyword(null,"none","none",1333468478))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__29866__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_){
return (function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-guess","check-guess",-1041834016)], null));
});})(i,s__29866__$2,temp__5735__auto__,current_guess,current_guess_number,guesses,clues,solution,game_won_QMARK_))
], null),((((cljs.core.not(game_won_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,i))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-play.check-guess","i.fas.fa-play.check-guess",-67869299)], null):null)], null)], null),exfn$app$app_$_iter__29865(cljs.core.rest(s__29866__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(9)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-2","div.col.col-lg-2",-539414754),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__29869(s__29870){
return (new cljs.core.LazySeq(null,(function (){
var s__29870__$1 = s__29870;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29870__$1);
if(temp__5735__auto__){
var s__29870__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29870__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29870__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29872 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29871 = (0);
while(true){
if((i__29871 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__29871);
cljs.core.chunk_append(b__29872,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(((cljs.core.count(clues) > i))?(function (){var vec__29873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(clues,i,null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29873,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clue.clue-grid","div.clue.clue-grid",-1390609258),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(b)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(d)], null)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null));

var G__29887 = (i__29871 + (1));
i__29871 = G__29887;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29872),exfn$app$app_$_iter__29869(cljs.core.chunk_rest(s__29870__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29872),null);
}
} else {
var i = cljs.core.first(s__29870__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),(((cljs.core.count(clues) > i))?(function (){var vec__29876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(clues,i,null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(3),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clue.clue-grid","div.clue.clue-grid",-1390609258),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(b)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(c)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),exfn.logic.get_clue_marker(d)], null)], null);
})():new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null),exfn$app$app_$_iter__29869(cljs.core.rest(s__29870__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(9)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-1","div.col.col-lg-1",640572310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-3","div.col.col-lg-3",974533226),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_guess_number,(9));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return game_won_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(70)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(game_won_QMARK_)?"Winner!":"Solution")], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515)], null),(function (){var iter__4529__auto__ = (function exfn$app$app_$_iter__29879(s__29880){
return (new cljs.core.LazySeq(null,(function (){
var s__29880__$1 = s__29880;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__29880__$1);
if(temp__5735__auto__){
var s__29880__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29880__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__29880__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__29882 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__29881 = (0);
while(true){
if((i__29881 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__29881);
cljs.core.chunk_append(b__29882,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.guess-cell","div.guess-cell",608696903),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solution,i))].join('')], null)], null)], null));

var G__29888 = (i__29881 + (1));
i__29881 = G__29888;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29882),exfn$app$app_$_iter__29879(cljs.core.chunk_rest(s__29880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29882),null);
}
} else {
var i = cljs.core.first(s__29880__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.guess-cell","div.guess-cell",608696903),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["marble ",cljs.core.name(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(solution,i))].join('')], null)], null)], null),exfn$app$app_$_iter__29879(cljs.core.rest(s__29880__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(4)));
})())], null):null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-1","div.col.col-lg-1",640572310)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-lg-3","div.col.col-lg-3",974533226),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));
})], null),"New Game"], null)], null)], null)], null);
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
