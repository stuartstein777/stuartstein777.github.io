goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('exfn.words');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"word","word",-420123725),clojure.string.upper_case(cljs.core.first(cljs.core.shuffle(exfn.words.words))),new cljs.core.Keyword(null,"guesses","guesses",272840547),new cljs.core.PersistentArrayMap(null, 6, [(1),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(2),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(3),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(4),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(5),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(6),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null)], null),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"correct-letters","correct-letters",533359080),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"current-row","current-row",-1645608308),(1),new cljs.core.Keyword(null,"current-col","current-col",90922695),(0),new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335)], null);
}));
exfn.events.clamp = (function exfn$events$clamp(n){
var x__4217__auto__ = (function (){var x__4214__auto__ = n;
var y__4215__auto__ = (0);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4218__auto__ = (5);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
});
exfn.events.valid_key_QMARK_ = (function exfn$events$valid_key_QMARK_(key){
var fexpr__30672 = cljs.core.set("ABCDEFGHJIKLMNOPQRSTUVWXYZ");
return (fexpr__30672.cljs$core$IFn$_invoke$arity$1 ? fexpr__30672.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30672.call(null,key));
});
exfn.events.get_correct_letters = (function exfn$events$get_correct_letters(word,guess){
var green = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (w,g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(w,g)){
return g;
} else {
return null;
}
}),word,guess)));
var yellow = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (g){
var fexpr__30673 = cljs.core.set(word);
return (fexpr__30673.cljs$core$IFn$_invoke$arity$1 ? fexpr__30673.cljs$core$IFn$_invoke$arity$1(g) : fexpr__30673.call(null,g));
}),guess)),green);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"green","green",-945526839),green,new cljs.core.Keyword(null,"yellow","yellow",-881035449),yellow], null);
});
exfn.events.set_game_over = (function exfn$events$set_game_over(p__30674,guess){
var map__30675 = p__30674;
var map__30675__$1 = (((((!((map__30675 == null))))?(((((map__30675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30675):map__30675);
var db = map__30675__$1;
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30675__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30675__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,guess)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"won","won",910394405));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,(7))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"lost","lost",-744692984));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335));

}
}
});
exfn.events.process_key = (function exfn$events$process_key(p__30679,key){
var map__30680 = p__30679;
var map__30680__$1 = (((((!((map__30680 == null))))?(((((map__30680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30680):map__30680);
var db = map__30680__$1;
var guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"guesses","guesses",272840547));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
var current_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"current-col","current-col",90922695));
var guessed_letters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30680__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var pred__30682 = cljs.core._EQ_;
var expr__30683 = key;
if(cljs.core.truth_((pred__30682.cljs$core$IFn$_invoke$arity$2 ? pred__30682.cljs$core$IFn$_invoke$arity$2("DEL",expr__30683) : pred__30682.call(null,"DEL",expr__30683)))){
if((current_col >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,current_col], null),""),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__30677_SHARP_){
return exfn.events.clamp((p1__30677_SHARP_ - (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
} else {
if(cljs.core.truth_((pred__30682.cljs$core$IFn$_invoke$arity$2 ? pred__30682.cljs$core$IFn$_invoke$arity$2("ENTER",expr__30683) : pred__30682.call(null,"ENTER",expr__30683)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),current_col)){
var guess = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(guesses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row], null))));
if(cljs.core.truth_((function (){var G__30685 = clojure.string.lower_case(guess);
return (exfn.words.words.cljs$core$IFn$_invoke$arity$1 ? exfn.words.words.cljs$core$IFn$_invoke$arity$1(G__30685) : exfn.words.words.call(null,G__30685));
})())){
return exfn.events.set_game_over(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),false),new cljs.core.Keyword(null,"current-row","current-row",-1645608308),cljs.core.inc),new cljs.core.Keyword(null,"correct-letters","correct-letters",533359080),exfn.events.get_correct_letters(word,guess)),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),clojure.set.union.cljs$core$IFn$_invoke$arity$2(guessed_letters,cljs.core.set(guess))),new cljs.core.Keyword(null,"current-col","current-col",90922695),(0)),guess);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),true);
}
} else {
return db;
}
} else {
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(game_state,new cljs.core.Keyword(null,"playing","playing",70013335)))?(function (){var and__4115__auto__ = exfn.events.valid_key_QMARK_(key);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_col,(5));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,(current_col + (1))], null),key),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__30678_SHARP_){
return exfn.events.clamp((p1__30678_SHARP_ + (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__30686){
var vec__30687 = p__30686;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30687,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30687,(1),null);
return exfn.events.process_key(db,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),(function (db,p__30690){
var vec__30691 = p__30690;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30691,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30691,(1),null);
return exfn.events.process_key(db,(function (){var G__30695 = key;
var G__30696 = cljs.core.char$(key);
var fexpr__30694 = new cljs.core.PersistentArrayMap(null, 2, [(13),"ENTER",(8),"DEL"], null);
return (fexpr__30694.cljs$core$IFn$_invoke$arity$2 ? fexpr__30694.cljs$core$IFn$_invoke$arity$2(G__30695,G__30696) : fexpr__30694.call(null,G__30695,G__30696));
})());
}));

//# sourceMappingURL=exfn.events.js.map
