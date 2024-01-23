goog.provide('exfn.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"solution","solution",-1727231491),exfn.logic.generate_solution((4)),new cljs.core.Keyword(null,"current-guess-number","current-guess-number",-93079164),(1),new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265),new cljs.core.PersistentArrayMap(null, 4, [(1),null,(2),null,(3),null,(4),null], null),new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"clues","clues",1918948918),cljs.core.PersistentVector.EMPTY], null);
}));
exfn.events.already_guessed = (function exfn$events$already_guessed(guesses,color){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((1)) : guesses.call(null,(1))),color)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((2)) : guesses.call(null,(2))),color)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((3)) : guesses.call(null,(3))),color)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((guesses.cljs$core$IFn$_invoke$arity$1 ? guesses.cljs$core$IFn$_invoke$arity$1((4)) : guesses.call(null,(4))),color)));
});
exfn.events.add_guess = (function exfn$events$add_guess(current_guess,color){
if(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1((1)) : current_guess.call(null,(1))))){
if(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1((2)) : current_guess.call(null,(2))))){
if(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1((3)) : current_guess.call(null,(3))))){
if(cljs.core.truth_((current_guess.cljs$core$IFn$_invoke$arity$1 ? current_guess.cljs$core$IFn$_invoke$arity$1((4)) : current_guess.call(null,(4))))){
return current_guess;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_guess,(4),color);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_guess,(3),color);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_guess,(2),color);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_guess,(1),color);
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-guess","add-guess",-115828310),(function (db,p__35700){
var vec__35701 = p__35700;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35701,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35701,(1),null);
if(cljs.core.truth_((function (){var or__4126__auto__ = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)) : db.call(null,new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835)));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return exfn.events.already_guessed((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265)) : db.call(null,new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265))),color);
}
})())){
return db;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265),exfn.events.add_guess((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265)) : db.call(null,new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265))),color));
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remove-guess","remove-guess",1131438287),(function (db,p__35704){
var vec__35705 = p__35704;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(0),null);
var position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35705,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(db,new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265),cljs.core.assoc,position,null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"check-guess","check-guess",-1041834016),(function (db,_){
var solution = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"solution","solution",-1727231491)) : db.call(null,new cljs.core.Keyword(null,"solution","solution",-1727231491)));
var guess = (db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265)) : db.call(null,new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265)));
var clue = exfn.logic.check_guess(solution,cljs.core.vals(guess));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"clues","clues",1918948918),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((db.cljs$core$IFn$_invoke$arity$1 ? db.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clues","clues",1918948918)) : db.call(null,new cljs.core.Keyword(null,"clues","clues",1918948918))),clue)),new cljs.core.Keyword(null,"current-guess-number","current-guess-number",-93079164),cljs.core.inc),new cljs.core.Keyword(null,"guesses","guesses",272840547),cljs.core.conj,guess),new cljs.core.Keyword(null,"current-guess","current-guess",-2059201265),new cljs.core.PersistentArrayMap(null, 4, [(1),null,(2),null,(3),null,(4),null], null)),new cljs.core.Keyword(null,"game-won?","game-won?",-1933899835),clojure.set.subset_QMARK_(cljs.core.set(solution),cljs.core.set(cljs.core.vals(guess))));
}));

//# sourceMappingURL=exfn.events.js.map
