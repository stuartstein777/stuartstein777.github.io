goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types');
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
var args__4742__auto__ = [];
var len__4736__auto___33355 = arguments.length;
var i__4737__auto___33356 = (0);
while(true){
if((i__4737__auto___33356 < len__4736__auto___33355)){
args__4742__auto__.push((arguments[i__4737__auto___33356]));

var G__33357 = (i__4737__auto___33356 + (1));
i__4737__auto___33356 = G__33357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__33360__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__33360 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__33363__i = 0, G__33363__a = new Array(arguments.length -  0);
while (G__33363__i < G__33363__a.length) {G__33363__a[G__33363__i] = arguments[G__33363__i + 0]; ++G__33363__i;}
  children = new cljs.core.IndexedSeq(G__33363__a,0,null);
} 
return G__33360__delegate.call(this,children);};
G__33360.cljs$lang$maxFixedArity = 0;
G__33360.cljs$lang$applyTo = (function (arglist__33364){
var children = cljs.core.seq(arglist__33364);
return G__33360__delegate(children);
});
G__33360.cljs$core$IFn$_invoke$arity$variadic = G__33360__delegate;
return G__33360;
})()
;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq33292){
var G__33293 = cljs.core.first(seq33292);
var seq33292__$1 = cljs.core.next(seq33292);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33293,seq33292__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__33367__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__33367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33373__i = 0, G__33373__a = new Array(arguments.length -  0);
while (G__33373__i < G__33373__a.length) {G__33373__a[G__33373__i] = arguments[G__33373__i + 0]; ++G__33373__i;}
  args = new cljs.core.IndexedSeq(G__33373__a,0,null);
} 
return G__33367__delegate.call(this,args);};
G__33367.cljs$lang$maxFixedArity = 0;
G__33367.cljs$lang$applyTo = (function (arglist__33375){
var args = cljs.core.seq(arglist__33375);
return G__33367__delegate(args);
});
G__33367.cljs$core$IFn$_invoke$arity$variadic = G__33367__delegate;
return G__33367;
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
var args__4742__auto__ = [];
var len__4736__auto___33376 = arguments.length;
var i__4737__auto___33377 = (0);
while(true){
if((i__4737__auto___33377 < len__4736__auto___33376)){
args__4742__auto__.push((arguments[i__4737__auto___33377]));

var G__33380 = (i__4737__auto___33377 + (1));
i__4737__auto___33377 = G__33380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq33299){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33299));
}));

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_import(var_args){
var G__33312 = arguments.length;
switch (G__33312) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___33382 = arguments.length;
var i__4737__auto___33383 = (0);
while(true){
if((i__4737__auto___33383 < len__4736__auto___33382)){
args_arr__4757__auto__.push((arguments[i__4737__auto___33383]));

var G__33385 = (i__4737__auto___33383 + (1));
i__4737__auto___33383 = G__33385;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq33309){
var G__33311 = cljs.core.first(seq33309);
var seq33309__$1 = cljs.core.next(seq33309);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33311,seq33309__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1));

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_media(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33393 = arguments.length;
var i__4737__auto___33394 = (0);
while(true){
if((i__4737__auto___33394 < len__4736__auto___33393)){
args__4742__auto__.push((arguments[i__4737__auto___33394]));

var G__33395 = (i__4737__auto___33394 + (1));
i__4737__auto___33394 = G__33395;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq33331){
var G__33332 = cljs.core.first(seq33331);
var seq33331__$1 = cljs.core.next(seq33331);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33332,seq33331__$1);
}));

day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_supports(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33399 = arguments.length;
var i__4737__auto___33400 = (0);
while(true){
if((i__4737__auto___33400 < len__4736__auto___33399)){
args__4742__auto__.push((arguments[i__4737__auto___33400]));

var G__33402 = (i__4737__auto___33400 + (1));
i__4737__auto___33400 = G__33402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq33333){
var G__33334 = cljs.core.first(seq33333);
var seq33333__$1 = cljs.core.next(seq33333);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33334,seq33333__$1);
}));

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$stylesheet$at_keyframes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33405 = arguments.length;
var i__4737__auto___33406 = (0);
while(true){
if((i__4737__auto___33406 < len__4736__auto___33405)){
args__4742__auto__.push((arguments[i__4737__auto___33406]));

var G__33407 = (i__4737__auto___33406 + (1));
i__4737__auto___33406 = G__33407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_rule(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq33341){
var G__33342 = cljs.core.first(seq33341);
var seq33341__$1 = cljs.core.next(seq33341);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33342,seq33341__$1);
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
