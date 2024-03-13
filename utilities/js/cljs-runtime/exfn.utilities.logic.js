goog.provide('exfn.utilities.logic');
exfn.utilities.logic.text_stats = (function exfn$utilities$logic$text_stats(text){
if(cljs.core.truth_(text)){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\s+/);
var chars = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\s*/);
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\n/);
var vowels = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/[aeiou]/);
var consonants = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/[^aeiou]/);
var digits = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\d/);
var punctuation = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/[^\w\s]/);
var word_freqs = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.frequencies(words)));
var char_freqs = cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.frequencies(chars)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"char-freqs","char-freqs",-984545503),new cljs.core.Keyword(null,"vowels","vowels",1022301577),new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"digits","digits",-1134635061),new cljs.core.Keyword(null,"chars-no-spaces","chars-no-spaces",-718963054),new cljs.core.Keyword(null,"chars","chars",-1094630317),new cljs.core.Keyword(null,"punctuation","punctuation",-1466717709),new cljs.core.Keyword(null,"consonants","consonants",-919870537),new cljs.core.Keyword(null,"word-freqs","word-freqs",-200532897)],[char_freqs,cljs.core.count(vowels),cljs.core.count(words),cljs.core.count(lines),cljs.core.count(digits),cljs.core.count(text),cljs.core.count(chars),cljs.core.count(punctuation),cljs.core.count(consonants),word_freqs]);
} else {
return null;
}
});
exfn.utilities.logic.alternating_case_reducer = (function exfn$utilities$logic$alternating_case_reducer(p__15638,st){
var map__15639 = p__15638;
var map__15639__$1 = cljs.core.__destructure_map(map__15639);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15639__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15639__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"upper","upper",246243906),c)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),clojure.string.upper_case(st)].join(''),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"lower","lower",1120320821)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),clojure.string.lower_case(st)].join(''),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"upper","upper",246243906)], null);
}
});
exfn.utilities.logic.to_alternating_case = (function exfn$utilities$logic$to_alternating_case(s,start_upper_QMARK_){
var initial = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),"",new cljs.core.Keyword(null,"c","c",-1763192079),(cljs.core.truth_(start_upper_QMARK_)?new cljs.core.Keyword(null,"upper","upper",246243906):new cljs.core.Keyword(null,"lower","lower",1120320821))], null);
return new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(exfn.utilities.logic.alternating_case_reducer,initial,s));
});
exfn.utilities.logic.words_to_camel_case = (function exfn$utilities$logic$words_to_camel_case(s){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\s|\-|\_]+/);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15640_SHARP_,p2__15641_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15640_SHARP_),clojure.string.capitalize(p2__15641_SHARP_)].join('');
}),"",words);
});
exfn.utilities.logic.to_camel_case = (function exfn$utilities$logic$to_camel_case(s){
var lines = clojure.string.split_lines(s);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return exfn.utilities.logic.words_to_camel_case(line);
}),lines));
});
exfn.utilities.logic.invert_case = (function exfn$utilities$logic$invert_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
if(((((65) <= c.charCodeAt((0)))) && ((c.charCodeAt((0)) <= (90))))){
return clojure.string.lower_case(c);
} else {
if(((((97) <= c.charCodeAt((0)))) && ((c.charCodeAt((0)) <= (122))))){
return clojure.string.upper_case(c);
} else {
return c;

}
}
}),s));
});
exfn.utilities.logic.to_lower_case = (function exfn$utilities$logic$to_lower_case(s){
return clojure.string.lower_case(s);
});
exfn.utilities.logic.to_upper_case = (function exfn$utilities$logic$to_upper_case(s){
return clojure.string.upper_case(s);
});
exfn.utilities.logic.words_to_snake_case = (function exfn$utilities$logic$words_to_snake_case(s){
var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[\s|\-|\_|A-Z]+/);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__15642_SHARP_,p2__15643_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15642_SHARP_),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15643_SHARP_)].join('');
}),"",words);
});
exfn.utilities.logic.word_to_snake_case = (function exfn$utilities$logic$word_to_snake_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("_",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?<=.)(?=[A-Z])|\s|-/)));
});
exfn.utilities.logic.to_snake_case = (function exfn$utilities$logic$to_snake_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.utilities.logic.word_to_snake_case,clojure.string.split_lines(s)));
});
exfn.utilities.logic.csv_breakdown = (function exfn$utilities$logic$csv_breakdown(csv){
var lines = clojure.string.split_lines(csv);
var comma_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__15644_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__15644_SHARP_,",");
}),line));
}),lines);
var grid_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__15645_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__15645_SHARP_,/,/);
}),lines);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (c,l){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null),l);
}),comma_counts,grid_lines);
});
exfn.utilities.logic.to_kebab_case = (function exfn$utilities$logic$to_kebab_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?<=.)(?=[A-Z])|\s|_/)));
});
exfn.utilities.logic.lines_to_kebab_case = (function exfn$utilities$logic$lines_to_kebab_case(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(exfn.utilities.logic.to_kebab_case,clojure.string.split_lines(s)));
});
exfn.utilities.logic.alphabetise = (function exfn$utilities$logic$alphabetise(s){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(clojure.string.split_lines(s)));
});

//# sourceMappingURL=exfn.utilities.logic.js.map
