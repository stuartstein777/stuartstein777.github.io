goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rule(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18474 = arguments.length;
var i__5770__auto___18475 = (0);
while(true){
if((i__5770__auto___18475 < len__5769__auto___18474)){
args__5775__auto__.push((arguments[i__5770__auto___18475]));

var G__18476 = (i__5770__auto___18475 + (1));
i__5770__auto___18475 = G__18476;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (((typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__18477__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__18477 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__18478__i = 0, G__18478__a = new Array(arguments.length -  0);
while (G__18478__i < G__18478__a.length) {G__18478__a[G__18478__i] = arguments[G__18478__i + 0]; ++G__18478__i;}
  children = new cljs.core.IndexedSeq(G__18478__a,0,null);
} 
return G__18477__delegate.call(this,children);};
G__18477.cljs$lang$maxFixedArity = 0;
G__18477.cljs$lang$applyTo = (function (arglist__18479){
var children = cljs.core.seq(arglist__18479);
return G__18477__delegate(children);
});
G__18477.cljs$core$IFn$_invoke$arity$variadic = G__18477__delegate;
return G__18477;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq18423){
var G__18424 = cljs.core.first(seq18423);
var seq18423__$1 = cljs.core.next(seq18423);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18424,seq18423__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__18480__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__18480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18481__i = 0, G__18481__a = new Array(arguments.length -  0);
while (G__18481__i < G__18481__a.length) {G__18481__a[G__18481__i] = arguments[G__18481__i + 0]; ++G__18481__i;}
  args = new cljs.core.IndexedSeq(G__18481__a,0,null);
} 
return G__18480__delegate.call(this,args);};
G__18480.cljs$lang$maxFixedArity = 0;
G__18480.cljs$lang$applyTo = (function (arglist__18482){
var args = cljs.core.seq(arglist__18482);
return G__18480__delegate(args);
});
G__18480.cljs$core$IFn$_invoke$arity$variadic = G__18480__delegate;
return G__18480;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_font_face(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18483 = arguments.length;
var i__5770__auto___18484 = (0);
while(true){
if((i__5770__auto___18484 < len__5769__auto___18483)){
args__5775__auto__.push((arguments[i__5770__auto___18484]));

var G__18485 = (i__5770__auto___18484 + (1));
i__5770__auto___18484 = G__18485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq18428){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18428));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_import(var_args){
var G__18434 = arguments.length;
switch (G__18434) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___18487 = arguments.length;
var i__5770__auto___18488 = (0);
while(true){
if((i__5770__auto___18488 < len__5769__auto___18487)){
args_arr__5794__auto__.push((arguments[i__5770__auto___18488]));

var G__18489 = (i__5770__auto___18488 + (1));
i__5770__auto___18488 = G__18489;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq18432){
var G__18433 = cljs.core.first(seq18432);
var seq18432__$1 = cljs.core.next(seq18432);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18433,seq18432__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_media(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18492 = arguments.length;
var i__5770__auto___18493 = (0);
while(true){
if((i__5770__auto___18493 < len__5769__auto___18492)){
args__5775__auto__.push((arguments[i__5770__auto___18493]));

var G__18494 = (i__5770__auto___18493 + (1));
i__5770__auto___18493 = G__18494;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq18444){
var G__18445 = cljs.core.first(seq18444);
var seq18444__$1 = cljs.core.next(seq18444);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18445,seq18444__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_supports(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18495 = arguments.length;
var i__5770__auto___18496 = (0);
while(true){
if((i__5770__auto___18496 < len__5769__auto___18495)){
args__5775__auto__.push((arguments[i__5770__auto___18496]));

var G__18497 = (i__5770__auto___18496 + (1));
i__5770__auto___18496 = G__18497;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq18452){
var G__18453 = cljs.core.first(seq18452);
var seq18452__$1 = cljs.core.next(seq18452);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18453,seq18452__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_keyframes(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18498 = arguments.length;
var i__5770__auto___18499 = (0);
while(true){
if((i__5770__auto___18499 < len__5769__auto___18498)){
args__5775__auto__.push((arguments[i__5770__auto___18499]));

var G__18500 = (i__5770__auto___18499 + (1));
i__5770__auto___18499 = G__18500;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq18461){
var G__18462 = cljs.core.first(seq18461);
var seq18461__$1 = cljs.core.next(seq18461);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18462,seq18461__$1);
}));

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.js.map
