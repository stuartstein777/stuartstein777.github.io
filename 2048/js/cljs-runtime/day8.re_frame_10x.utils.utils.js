goog.provide('day8.re_frame_10x.utils.utils');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector. Returns nil if v is empty
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
var num = cljs.core.count(v);
if((num === (0))){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(num - (1)));
}
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__33304_SHARP_,p2__33303_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__33303_SHARP_) : pred.call(null,p2__33303_SHARP_)))){
return p1__33304_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame_10x.utils.utils.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__33305_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33305_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__33305_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__33307 = arguments.length;
switch (G__33307) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
}));

(day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
}));

(day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2);

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33344 = arguments.length;
var i__4737__auto___33345 = (0);
while(true){
if((i__4737__auto___33345 < len__4736__auto___33344)){
args__4742__auto__.push((arguments[i__4737__auto___33345]));

var G__33347 = (i__4737__auto___33345 + (1));
i__4737__auto___33345 = G__33347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33311){
var vec__33312 = p__33311;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33312,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4126__auto__ = plural;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq33308){
var G__33309 = cljs.core.first(seq33308);
var seq33308__$1 = cljs.core.next(seq33308);
var G__33310 = cljs.core.first(seq33308__$1);
var seq33308__$2 = cljs.core.next(seq33308__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33309,G__33310,seq33308__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33352 = arguments.length;
var i__4737__auto___33353 = (0);
while(true){
if((i__4737__auto___33353 < len__4736__auto___33352)){
args__4742__auto__.push((arguments[i__4737__auto___33353]));

var G__33354 = (i__4737__auto___33353 + (1));
i__4737__auto___33353 = G__33354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__33321){
var vec__33322 = p__33321;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33322,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4126__auto__ = plural;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq33316){
var G__33318 = cljs.core.first(seq33316);
var seq33316__$1 = cljs.core.next(seq33316);
var G__33319 = cljs.core.first(seq33316__$1);
var seq33316__$2 = cljs.core.next(seq33316__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33318,G__33319,seq33316__$2);
}));

day8.re_frame_10x.utils.utils.copy_to_clipboard = (function day8$re_frame_10x$utils$utils$copy_to_clipboard(text){
var el = document.createElement("textarea");
(el.value = text);

(el.style.position = "absolute");

(el.style.left = "-9999px");

document.body.appendChild(el);

el.select();

document.execCommand("copy");

return document.body.removeChild(el);
});
day8.re_frame_10x.utils.utils.default_readers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),(function day8$re_frame_10x$utils$utils$default_uuid_reader(form){
if(typeof form === 'string'){
} else {
throw (new Error("Assert failed: (string? form)"));
}

return cljs.core.uuid(form);
})], null);

//# sourceMappingURL=day8.re_frame_10x.utils.utils.js.map
