goog.provide('rewrite_clj.zip.findz');
rewrite_clj.zip.findz.tag_predicate = (function rewrite_clj$zip$findz$tag_predicate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36971 = arguments.length;
var i__4737__auto___36972 = (0);
while(true){
if((i__4737__auto___36972 < len__4736__auto___36971)){
args__4742__auto__.push((arguments[i__4737__auto___36972]));

var G__36973 = (i__4737__auto___36972 + (1));
i__4737__auto___36972 = G__36973;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic = (function (t,p__36913){
var vec__36914 = p__36913;
var additional = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36914,(0),null);
if(cljs.core.truth_(additional)){
return (function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(node),t)){
return (additional.cljs$core$IFn$_invoke$arity$1 ? additional.cljs$core$IFn$_invoke$arity$1(node) : additional.call(null,node));
} else {
return false;
}
});
} else {
return (function (p1__36903_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__36903_SHARP_),t);
});
}
}));

(rewrite_clj.zip.findz.tag_predicate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rewrite_clj.zip.findz.tag_predicate.cljs$lang$applyTo = (function (seq36905){
var G__36906 = cljs.core.first(seq36905);
var seq36905__$1 = cljs.core.next(seq36905);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36906,seq36905__$1);
}));

rewrite_clj.zip.findz.in_range_QMARK_ = (function rewrite_clj$zip$findz$in_range_QMARK_(p__36923,p__36924){
var map__36925 = p__36923;
var map__36925__$1 = (((((!((map__36925 == null))))?(((((map__36925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36925):map__36925);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36925__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__36926 = p__36924;
var map__36926__$1 = (((((!((map__36926 == null))))?(((((map__36926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36926):map__36926);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36926__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
if((r >= row)){
if((r <= end_row)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,row))?(c >= col):true)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,end_row)){
return (c <= end_col);
} else {
return true;
}
} else {
return false;
}
} else {
return false;
}
} else {
return false;
}
});
/**
 * Find node satisfying the given predicate by repeatedly
 * applying the given movement function to the initial zipper
 * location.
 */
rewrite_clj.zip.findz.find = (function rewrite_clj$zip$findz$find(var_args){
var G__36935 = arguments.length;
switch (G__36935) {
case 2:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
}));

(rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(p_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(f,zloc)))));
}));

(rewrite_clj.zip.findz.find.cljs$lang$maxFixedArity = 3);

/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
rewrite_clj.zip.findz.find_last_by_pos = (function rewrite_clj$zip$findz$find_last_by_pos(var_args){
var G__36938 = arguments.length;
switch (G__36938) {
case 2:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$2 = (function (zloc,pos){
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,cljs.core.constantly(true));
}));

(rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3 = (function (zloc,pos,p_QMARK_){
return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36936_SHARP_){
var and__4115__auto__ = (p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__36936_SHARP_) : p_QMARK_.call(null,p1__36936_SHARP_));
if(cljs.core.truth_(and__4115__auto__)){
return rewrite_clj.zip.findz.in_range_QMARK_(cljs.core.meta(clojure.zip.node(p1__36936_SHARP_)),pos);
} else {
return and__4115__auto__;
}
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(clojure.zip.next,zloc)))));
}));

(rewrite_clj.zip.findz.find_last_by_pos.cljs$lang$maxFixedArity = 3);

/**
 * Find node satisfying the given predicate by traversing
 * the zipper in a depth-first way.
 */
rewrite_clj.zip.findz.find_depth_first = (function rewrite_clj$zip$findz$find_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node other than the current zipper location matching
 * the given predicate by applying the given movement function
 * to the initial zipper location.
 */
rewrite_clj.zip.findz.find_next = (function rewrite_clj$zip$findz$find_next(var_args){
var G__36943 = arguments.length;
switch (G__36943) {
case 2:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
}));

(rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
var G__36944 = zloc;
var G__36944__$1 = (((G__36944 == null))?null:(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36944) : f.call(null,G__36944)));
if((G__36944__$1 == null)){
return null;
} else {
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(G__36944__$1,f,p_QMARK_);
}
}));

(rewrite_clj.zip.findz.find_next.cljs$lang$maxFixedArity = 3);

/**
 * Find node other than the current zipper location matching
 * the given predicate by traversing the zipper in a
 * depth-first way.
 */
rewrite_clj.zip.findz.find_next_depth_first = (function rewrite_clj$zip$findz$find_next_depth_first(zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.next,p_QMARK_);
});
/**
 * Find node with the given tag by repeatedly applying the given
 * movement function to the initial zipper location.
 */
rewrite_clj.zip.findz.find_tag = (function rewrite_clj$zip$findz$find_tag(var_args){
var G__36947 = arguments.length;
switch (G__36947) {
case 2:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,t);
}));

(rewrite_clj.zip.findz.find_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,(function (p1__36945_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__36945_SHARP_),t);
}));
}));

(rewrite_clj.zip.findz.find_tag.cljs$lang$maxFixedArity = 3);

/**
 * Find node other than the current zipper location with the
 * given tag by repeatedly applying the given movement function to
 * the initial zipper location.
 */
rewrite_clj.zip.findz.find_next_tag = (function rewrite_clj$zip$findz$find_next_tag(var_args){
var G__36950 = arguments.length;
switch (G__36950) {
case 2:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$2 = (function (zloc,t){
return rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,t);
}));

(rewrite_clj.zip.findz.find_next_tag.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,t){
return rewrite_clj.zip.findz.find_next.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_clj.zip.findz.tag_predicate(t));
}));

(rewrite_clj.zip.findz.find_next_tag.cljs$lang$maxFixedArity = 3);

/**
 * Find node with the given tag and pos depth-first from initial zipper location.
 */
rewrite_clj.zip.findz.find_tag_by_pos = (function rewrite_clj$zip$findz$find_tag_by_pos(zloc,pos,t){
return rewrite_clj.zip.findz.find_last_by_pos.cljs$core$IFn$_invoke$arity$3(zloc,pos,(function (p1__36957_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.tag(p1__36957_SHARP_),t);
}));
});
/**
 * Find token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_token = (function rewrite_clj$zip$findz$find_token(var_args){
var G__36959 = arguments.length;
switch (G__36959) {
case 2:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
}));

(rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find.cljs$core$IFn$_invoke$arity$3(zloc,f,rewrite_clj.zip.findz.tag_predicate.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_QMARK_], 0)));
}));

(rewrite_clj.zip.findz.find_token.cljs$lang$maxFixedArity = 3);

/**
 * Find next token node matching the given predicate by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_token = (function rewrite_clj$zip$findz$find_next_token(var_args){
var G__36962 = arguments.length;
switch (G__36962) {
case 2:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$2 = (function (zloc,p_QMARK_){
return rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,p_QMARK_);
}));

(rewrite_clj.zip.findz.find_next_token.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,p_QMARK_){
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,p_QMARK_);
}));

(rewrite_clj.zip.findz.find_next_token.cljs$lang$maxFixedArity = 3);

/**
 * Find token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_value = (function rewrite_clj$zip$findz$find_value(var_args){
var G__36968 = arguments.length;
switch (G__36968) {
case 2:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,v);
}));

(rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
var p_QMARK_ = ((cljs.core.set_QMARK_(v))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(v,rewrite_clj.zip.base.sexpr):(function (p1__36966_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.base.sexpr(p1__36966_SHARP_),v);
}));
return rewrite_clj.zip.findz.find_token.cljs$core$IFn$_invoke$arity$3(zloc,f,p_QMARK_);
}));

(rewrite_clj.zip.findz.find_value.cljs$lang$maxFixedArity = 3);

/**
 * Find next token node whose value matches the given one by applying the
 * given movement function to the initial zipper location, defaulting
 * to `right`.
 */
rewrite_clj.zip.findz.find_next_value = (function rewrite_clj$zip$findz$find_next_value(var_args){
var G__36970 = arguments.length;
switch (G__36970) {
case 2:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$2 = (function (zloc,v){
return rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3(zloc,rewrite_clj.zip.move.right,v);
}));

(rewrite_clj.zip.findz.find_next_value.cljs$core$IFn$_invoke$arity$3 = (function (zloc,f,v){
return rewrite_clj.zip.findz.find_value.cljs$core$IFn$_invoke$arity$3((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(zloc) : f.call(null,zloc)),f,v);
}));

(rewrite_clj.zip.findz.find_next_value.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rewrite_clj.zip.findz.js.map
