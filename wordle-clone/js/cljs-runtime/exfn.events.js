goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('exfn.words');
goog.require('re_pressed.core');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"word","word",-420123725),clojure.string.upper_case(cljs.core.first(cljs.core.shuffle(exfn.words.words))),new cljs.core.Keyword(null,"guesses","guesses",272840547),new cljs.core.PersistentArrayMap(null, 6, [(1),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(2),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(3),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(4),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(5),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(6),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null)], null),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"current-row","current-row",-1645608308),(1),new cljs.core.Keyword(null,"current-col","current-col",90922695),(0),new cljs.core.Keyword(null,"error","error",-978969032),false,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335)], null);
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
var fexpr__29946 = cljs.core.set("ABCDEFGHJIKLMNOPQRSTUVWXYZ");
return (fexpr__29946.cljs$core$IFn$_invoke$arity$1 ? fexpr__29946.cljs$core$IFn$_invoke$arity$1(key) : fexpr__29946.call(null,key));
});
exfn.events.set_game_over = (function exfn$events$set_game_over(p__29947,guess){
var map__29948 = p__29947;
var map__29948__$1 = (((((!((map__29948 == null))))?(((((map__29948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29948):map__29948);
var db = map__29948__$1;
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
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
exfn.events.process_key = (function exfn$events$process_key(p__29952,key){
var map__29953 = p__29952;
var map__29953__$1 = (((((!((map__29953 == null))))?(((((map__29953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29953):map__29953);
var db = map__29953__$1;
var guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"guesses","guesses",272840547));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
var current_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"current-col","current-col",90922695));
var guessed_letters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var pred__29955 = cljs.core._EQ_;
var expr__29956 = key;
if(cljs.core.truth_((pred__29955.cljs$core$IFn$_invoke$arity$2 ? pred__29955.cljs$core$IFn$_invoke$arity$2("DEL",expr__29956) : pred__29955.call(null,"DEL",expr__29956)))){
if((current_col >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,current_col], null),""),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__29950_SHARP_){
return exfn.events.clamp((p1__29950_SHARP_ - (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
} else {
if(cljs.core.truth_((pred__29955.cljs$core$IFn$_invoke$arity$2 ? pred__29955.cljs$core$IFn$_invoke$arity$2("ENTER",expr__29956) : pred__29955.call(null,"ENTER",expr__29956)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),current_col)){
var guess = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(guesses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row], null))));
if(cljs.core.truth_((function (){var G__29958 = clojure.string.lower_case(guess);
return (exfn.words.words.cljs$core$IFn$_invoke$arity$1 ? exfn.words.words.cljs$core$IFn$_invoke$arity$1(G__29958) : exfn.words.words.call(null,G__29958));
})())){
return exfn.events.set_game_over(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),false),new cljs.core.Keyword(null,"current-row","current-row",-1645608308),cljs.core.inc),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),clojure.set.union.cljs$core$IFn$_invoke$arity$2(guessed_letters,cljs.core.set(guess))),new cljs.core.Keyword(null,"current-col","current-col",90922695),(0)),guess);
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,(current_col + (1))], null),key),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__29951_SHARP_){
return exfn.events.clamp((p1__29951_SHARP_ + (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__29959){
var vec__29960 = p__29959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(1),null);
return exfn.events.process_key(db,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),(function (db,p__29963){
var vec__29964 = p__29963;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29964,(1),null);
return exfn.events.process_key(db,(function (){var G__29968 = key;
var G__29969 = cljs.core.char$(key);
var fexpr__29967 = new cljs.core.PersistentArrayMap(null, 2, [(13),"ENTER",(8),"DEL"], null);
return (fexpr__29967.cljs$core$IFn$_invoke$arity$2 ? fexpr__29967.cljs$core$IFn$_invoke$arity$2(G__29968,G__29969) : fexpr__29967.call(null,G__29968,G__29969));
})());
}));

//# sourceMappingURL=exfn.events.js.map
