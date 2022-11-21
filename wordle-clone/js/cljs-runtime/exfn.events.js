goog.provide('exfn.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('exfn.logic');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('exfn.words');
exfn.events.reset_guesses = new cljs.core.PersistentArrayMap(null, 6, [(1),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(2),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(3),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(4),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(5),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null),(6),new cljs.core.PersistentArrayMap(null, 5, [(1),"",(2),"",(3),"",(4),"",(5),""], null)], null);
exfn.events.get_word = (function exfn$events$get_word(){
return clojure.string.upper_case(cljs.core.first(cljs.core.shuffle(exfn.words.words)));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"save-to-cookie","save-to-cookie",-132595839),(function (stats_and_guesses){
return document.cookie();
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"guesses","guesses",272840547),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),new cljs.core.Keyword(null,"current-col","current-col",90922695),new cljs.core.Keyword(null,"correct-letters","correct-letters",533359080),new cljs.core.Keyword(null,"current-row","current-row",-1645608308),new cljs.core.Keyword(null,"stats-visible","stats-visible",536430735),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"stats","stats",-85643011)],[exfn.events.reset_guesses,cljs.core.PersistentHashSet.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.PersistentHashSet.EMPTY], null),(1),true,new cljs.core.Keyword(null,"playing","playing",70013335),exfn.events.get_word(),false,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628),(0),new cljs.core.Keyword(null,"max-streak","max-streak",1027422876),(0),new cljs.core.Keyword(null,"wins","wins",1850756412),(0),new cljs.core.Keyword(null,"solves","solves",-1204589400),new cljs.core.PersistentArrayMap(null, 6, [(1),(0),(2),(0),(3),(0),(4),(0),(5),(0),(6),(0)], null),new cljs.core.Keyword(null,"played","played",-1713723590),(0)], null)]);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-game","new-game",167241648),(function (p__30039,_){
var map__30040 = p__30039;
var map__30040__$1 = (((((!((map__30040 == null))))?(((((map__30040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30040):map__30040);
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30040__$1,new cljs.core.Keyword(null,"stats","stats",-85643011));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"guesses","guesses",272840547),new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579),new cljs.core.Keyword(null,"current-col","current-col",90922695),new cljs.core.Keyword(null,"correct-letters","correct-letters",533359080),new cljs.core.Keyword(null,"current-row","current-row",-1645608308),new cljs.core.Keyword(null,"stats-visible","stats-visible",536430735),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"stats","stats",-85643011)],[exfn.events.reset_guesses,cljs.core.PersistentHashSet.EMPTY,(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"green","green",-945526839),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"yellow","yellow",-881035449),cljs.core.PersistentHashSet.EMPTY], null),(1),false,new cljs.core.Keyword(null,"playing","playing",70013335),exfn.events.get_word(),false,stats]);
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
var fexpr__30042 = cljs.core.set("ABCDEFGHJIKLMNOPQRSTUVWXYZ");
return (fexpr__30042.cljs$core$IFn$_invoke$arity$1 ? fexpr__30042.cljs$core$IFn$_invoke$arity$1(key) : fexpr__30042.call(null,key));
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
var fexpr__30043 = cljs.core.set(word);
return (fexpr__30043.cljs$core$IFn$_invoke$arity$1 ? fexpr__30043.cljs$core$IFn$_invoke$arity$1(g) : fexpr__30043.call(null,g));
}),guess)),green);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"green","green",-945526839),green,new cljs.core.Keyword(null,"yellow","yellow",-881035449),yellow], null);
});
exfn.events.set_game_over = (function exfn$events$set_game_over(p__30044,guess){
var map__30045 = p__30044;
var map__30045__$1 = (((((!((map__30045 == null))))?(((((map__30045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30045):map__30045);
var db = map__30045__$1;
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30045__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30045__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,guess)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"won","won",910394405)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"max-streak","max-streak",1027422876)], null),(function (cs){
var x__4214__auto__ = cs;
var y__4215__auto__ = (new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(db)) + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"solves","solves",-1204589400),(current_row - (1))], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"played","played",-1713723590)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"wins","wins",1850756412)], null),cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_row,(7))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"lost","lost",-744692984)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"current-streak","current-streak",-1065385628)], null),(0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"played","played",-1713723590)], null),cljs.core.inc);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing","playing",70013335));

}
}
});
exfn.events.process_key = (function exfn$events$process_key(p__30049,key){
var map__30050 = p__30049;
var map__30050__$1 = (((((!((map__30050 == null))))?(((((map__30050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30050):map__30050);
var db = map__30050__$1;
var guesses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"guesses","guesses",272840547));
var current_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"current-row","current-row",-1645608308));
var current_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"current-col","current-col",90922695));
var guessed_letters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"guessed-letters","guessed-letters",-1546175579));
var game_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"game-state","game-state",935682735));
var word = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30050__$1,new cljs.core.Keyword(null,"word","word",-420123725));
var pred__30052 = cljs.core._EQ_;
var expr__30053 = key;
if(cljs.core.truth_((pred__30052.cljs$core$IFn$_invoke$arity$2 ? pred__30052.cljs$core$IFn$_invoke$arity$2("DEL",expr__30053) : pred__30052.call(null,"DEL",expr__30053)))){
if((current_col >= (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,current_col], null),""),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__30047_SHARP_){
return exfn.events.clamp((p1__30047_SHARP_ - (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
} else {
if(cljs.core.truth_((pred__30052.cljs$core$IFn$_invoke$arity$2 ? pred__30052.cljs$core$IFn$_invoke$arity$2("ENTER",expr__30053) : pred__30052.call(null,"ENTER",expr__30053)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),current_col)){
var guess = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(guesses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row], null))));
if(cljs.core.truth_((function (){var G__30055 = clojure.string.lower_case(guess);
return (exfn.words.words.cljs$core$IFn$_invoke$arity$1 ? exfn.words.words.cljs$core$IFn$_invoke$arity$1(G__30055) : exfn.words.words.call(null,G__30055));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_row,(current_col + (1))], null),key),new cljs.core.Keyword(null,"current-col","current-col",90922695),(function (p1__30048_SHARP_){
return exfn.events.clamp((p1__30048_SHARP_ + (1)));
})),new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
return db;
}
}
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clicked","clicked",114423720),(function (db,p__30056){
var vec__30057 = p__30056;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30057,(1),null);
return exfn.events.process_key(db,key);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),(function (db,p__30060){
var vec__30061 = p__30060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30061,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30061,(1),null);
return exfn.events.process_key(db,(function (){var G__30065 = key;
var G__30066 = cljs.core.char$(key);
var fexpr__30064 = new cljs.core.PersistentArrayMap(null, 2, [(13),"ENTER",(8),"DEL"], null);
return (fexpr__30064.cljs$core$IFn$_invoke$arity$2 ? fexpr__30064.cljs$core$IFn$_invoke$arity$2(G__30065,G__30066) : fexpr__30064.call(null,G__30065,G__30066));
})());
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-stats","toggle-stats",1431946576),(function (db,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stats-visible","stats-visible",536430735),cljs.core.not);
}));

//# sourceMappingURL=exfn.events.js.map
