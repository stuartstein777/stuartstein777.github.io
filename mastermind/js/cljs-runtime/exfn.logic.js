goog.provide('exfn.logic');
exfn.logic.colors = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"red","red",-969428204),"red",new cljs.core.Keyword(null,"orange","orange",73816386),"orange",new cljs.core.Keyword(null,"yellow","yellow",-881035449),"yellow",new cljs.core.Keyword(null,"green","green",-945526839),"green",new cljs.core.Keyword(null,"pink","pink",393815864),"pink",new cljs.core.Keyword(null,"purple","purple",-876021126),"purple",new cljs.core.Keyword(null,"cyan","cyan",1118839274),"cyan",new cljs.core.Keyword(null,"blue","blue",-622100620),"blue"], null);
exfn.logic.generate_solution = (function exfn$logic$generate_solution(no_colors){
return cljs.core.keys(cljs.core.take.cljs$core$IFn$_invoke$arity$2(no_colors,cljs.core.shuffle(exfn.logic.colors)));
});
exfn.logic.check_guess = (function exfn$logic$check_guess(solution,guess){
return cljs.core.shuffle(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (s,g){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,g)){
return new cljs.core.Keyword(null,"pos-and-color","pos-and-color",2011772860);
} else {
if(cljs.core.truth_((function (){var fexpr__29764 = cljs.core.set(solution);
return (fexpr__29764.cljs$core$IFn$_invoke$arity$1 ? fexpr__29764.cljs$core$IFn$_invoke$arity$1(g) : fexpr__29764.call(null,g));
})())){
return new cljs.core.Keyword(null,"color","color",1011675173);
} else {
return new cljs.core.Keyword(null,"wrong","wrong",-1945918192);

}
}
}),solution,guess));
});
exfn.logic.get_clue_marker = (function exfn$logic$get_clue_marker(clue){
var pred__29765 = cljs.core._EQ_;
var expr__29766 = clue;
if(cljs.core.truth_((pred__29765.cljs$core$IFn$_invoke$arity$2 ? pred__29765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos-and-color","pos-and-color",2011772860),expr__29766) : pred__29765.call(null,new cljs.core.Keyword(null,"pos-and-color","pos-and-color",2011772860),expr__29766)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle","i.fas.fa-circle",-163893018)], null);
} else {
if(cljs.core.truth_((pred__29765.cljs$core$IFn$_invoke$arity$2 ? pred__29765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color","color",1011675173),expr__29766) : pred__29765.call(null,new cljs.core.Keyword(null,"color","color",1011675173),expr__29766)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.far.fa-circle","i.far.fa-circle",-1409075494)], null);
} else {
if(cljs.core.truth_((pred__29765.cljs$core$IFn$_invoke$arity$2 ? pred__29765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wrong","wrong",-1945918192),expr__29766) : pred__29765.call(null,new cljs.core.Keyword(null,"wrong","wrong",-1945918192),expr__29766)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-circle.wrong","i.fas.fa-circle.wrong",-246091548)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29766)].join('')));
}
}
}
});

//# sourceMappingURL=exfn.logic.js.map
