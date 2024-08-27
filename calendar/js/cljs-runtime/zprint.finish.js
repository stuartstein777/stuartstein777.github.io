goog.provide('zprint.finish');
zprint.finish.no_style_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"f","f",-1597136552),(function (p1__34926_SHARP_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__34926_SHARP_,new cljs.core.Keyword(null,"none","none",1333468478))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reverse","reverse",-888455266)], null),p1__34926_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reverse","reverse",-888455266)], null);
}
}),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.identity,new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.identity], null);
/**
 * Is n within the closed range of low to high?
 */
zprint.finish.within_QMARK_ = (function zprint$finish$within_QMARK_(n,p__34927){
var vec__34928 = p__34927;
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928,(1),null);
return (((n >= low)) && ((n <= high)));
});
/**
 * Is n within any of the the closed range of low to high?
 */
zprint.finish.within_vec_QMARK_ = (function zprint$finish$within_vec_QMARK_(n,low_high_vec){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.within_QMARK_,n),low_high_vec);
});
/**
 * Ignore any foreground/background designation, and use the
 *   focus and the color to figure out a style.  Intimately 
 *   associated with build-styles.
 *   You don't have to have a color, but you do need a ground.
 *   If the ground is :c, it is used, otherwise the ground is
 *   determined from the focus.  In focus gets :f, otherwise :b.
 *   If you don't have a color, the style you get
 *   is the same as the key for the ground you get from the
 *   focus.  If you don't have a focus, you get the background.
 */
zprint.finish.ground_color_to_style = (function zprint$finish$ground_color_to_style(p__34933,s,color,element,idx){
var map__34934 = p__34933;
var map__34934__$1 = cljs.core.__destructure_map(map__34934);
var style_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"style-map","style-map",1488693527));
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34934__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var output_QMARK_ = (cljs.core.truth_(select)?zprint.finish.within_vec_QMARK_(idx,select):true);
if(cljs.core.truth_(output_QMARK_)){
var G__34937 = (function (){var or__4223__auto__ = color;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"none","none",1333468478);
}
})();
var fexpr__34936 = (function (){var G__34938 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"cursor-element","cursor-element",-616791907)))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cursor-element:",s], 0));

return new cljs.core.Keyword(null,"c","c",-1763192079);
})()
:(cljs.core.truth_((function (){var and__4221__auto__ = focus;
if(cljs.core.truth_(and__4221__auto__)){
return ((zprint.finish.within_QMARK_(idx,focus)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(element,new cljs.core.Keyword(null,"indent","indent",-148200125))));
} else {
return and__4221__auto__;
}
})())?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return (style_map.cljs$core$IFn$_invoke$arity$1 ? style_map.cljs$core$IFn$_invoke$arity$1(G__34938) : style_map.call(null,G__34938));
})();
return (fexpr__34936.cljs$core$IFn$_invoke$arity$1 ? fexpr__34936.cljs$core$IFn$_invoke$arity$1(G__34937) : fexpr__34936.call(null,G__34937));
} else {
return null;
}
});
/**
 * Given [string :style <start>] turn it into
 *   [string :style <start> <length>]
 */
zprint.finish.add_length = (function zprint$finish$add_length(p__34939){
var vec__34941 = p__34939;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941,(0),null);
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941,(1),null);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34941,(2),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,style,start,cljs.core.count(s)], null);
});
/**
 * Take an index and a [string :color element] and produce a
 *   [string :style element] with the correct elements (i.e., the
 *   elements with the correct idx) having a different 
 *   background for focus output. The ctx is a map which
 *   must have a :style-map and may have a :focus.  The
 *   :focus is a two element vector of start and end elements
 *   which are in focus.
 */
zprint.finish.gc_vec_to_style_vec = (function zprint$finish$gc_vec_to_style_vec(ctx,idx,p__34945){
var vec__34946 = p__34945;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946,(0),null);
var keyword_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946,(1),null);
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34946,(2),null);
var style = zprint.finish.ground_color_to_style(ctx,s,keyword_color,element,idx);
if(cljs.core.truth_(style)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"none","none",1333468478)))?style:null),element], null);
} else {
return null;
}
});
/**
 * Take a vector of any length, and trim it to be
 *   only n elements in length.
 */
zprint.finish.trim_vec = (function zprint$finish$trim_vec(n,v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,v));
});
/**
 * Take an ssv element which is presumably an indent, and do 1/2
 *   of it.  If the argument is nil, do a newline with no indent.
 */
zprint.finish.elide_indent = (function zprint$finish$elide_indent(ssv_element){
if(cljs.core.truth_(ssv_element)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",clojure.string.replace(cljs.core.first(ssv_element)," ",""))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\n",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((cljs.core.count(cljs.core.first(ssv_element)) - (1)) / (1))," ")),new cljs.core.Keyword(null,"none","none",1333468478)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\n",new cljs.core.Keyword(null,"none","none",1333468478)], null);
}
});
/**
 * Replace all sequences of nil in the sequence with elide
 */
zprint.finish.replace_nil_seq = (function zprint$finish$replace_nil_seq(ctx,ssv_in,elide){
var last_element = new cljs.core.Keyword(null,"last-element","last-element",-1161021771).cljs$core$IFn$_invoke$arity$1(ctx);
var elide__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(elide),cljs.core.second(last_element),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(last_element,(2))], null);
var ssv = ssv_in;
var doing_nil_QMARK_ = false;
var last_elide = null;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(ssv)){
if(doing_nil_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.gc_vec_to_style_vec(ctx,(0),(function (){var or__4223__auto__ = last_elide;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return zprint.finish.elide_indent(null);
}
})())),zprint.finish.gc_vec_to_style_vec(ctx,(0),elide__$1)),zprint.finish.gc_vec_to_style_vec(ctx,(0),new cljs.core.Keyword(null,"last-element","last-element",-1161021771).cljs$core$IFn$_invoke$arity$1(ctx)));
} else {
return out;
}
} else {
var this_ssv = cljs.core.first(ssv);
var this_elide = ((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?zprint.finish.elide_indent(this_ssv):null);
var G__35057 = cljs.core.next(ssv);
var G__35058 = (this_ssv == null);
var G__35059 = (cljs.core.truth_(this_elide)?this_elide:last_elide);
var G__35060 = ((((doing_nil_QMARK_) && ((this_ssv == null))))?out:((((doing_nil_QMARK_) && ((!((this_ssv == null))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.gc_vec_to_style_vec(ctx,(0),this_elide)),zprint.finish.gc_vec_to_style_vec(ctx,(0),elide__$1)),this_ssv):(((this_ssv == null))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,this_ssv)
)));
ssv = G__35057;
doing_nil_QMARK_ = G__35058;
last_elide = G__35059;
out = G__35060;
continue;
}
break;
}
});
/**
 * Given a cvec, generate an index vector which can be input to map
 *   and will make map work like map-indexed -- unless there are
 *   :comment-wrap elements, in which case the :comment-wrap element
 *   will have the same element idx as the previous :comment element.
 */
zprint.finish.index_vec = (function zprint$finish$index_vec(cvec){
var remaining_cvec = cvec;
var idx = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(remaining_cvec)){
return out;
} else {
var vec__34960 = cljs.core.first(remaining_cvec);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(1),null);
var element_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34960,(2),null);
var new_idx = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.first(remaining_cvec),(2)),new cljs.core.Keyword(null,"comment-wrap","comment-wrap",720664128)))?idx:(idx + (1)));
var G__35067 = cljs.core.next(remaining_cvec);
var G__35068 = new_idx;
var G__35069 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new_idx);
remaining_cvec = G__35067;
idx = G__35068;
out = G__35069;
continue;
}
break;
}
});
/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] input.
 *   The focus is a vector of [start-focus end-focus] which are the 
 *   inclusive values for the focus.  The end is inclusive because it 
 *   gets a bit dicey if it was 'beyond', since how much beyond would 
 *   be interesting given the amount of whitespace in the input.
 *   Not clear at this point just what the counts in the focus-vec count,
 *   possibly things with <anything> == :element, possibly just any
 *   [string color <anything>] vector.
 *   From this, build of: [[string :style] [string :style] ...], where
 *   :style might be a color, like :blue or :none, or it might be a 
 *   java-text-pane style (which would have a color encoded in it).  This
 *   is based on the :style-map in the ctx map. Note that this :style-map
 *   doesn't have any relation to the :style-map in the options map.
 */
zprint.finish.cvec_to_style_vec = (function zprint$finish$cvec_to_style_vec(var_args){
var G__34965 = arguments.length;
switch (G__34965) {
case 4:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4 = (function (ctx,cvec,focus_vec,select_vec){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"last-element","last-element",-1161021771),cljs.core.last(cvec));
var str_style_vec_w_nil = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.gc_vec_to_style_vec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ctx__$1,new cljs.core.Keyword(null,"focus","focus",234677911),focus_vec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"select","select",1147833503),select_vec], 0))),cvec);
var count_w_nil = cljs.core.count(str_style_vec_w_nil);
var str_style_vec = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,str_style_vec_w_nil);
var elide_vec = (cljs.core.truth_(new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(ctx__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(ctx__$1),new cljs.core.Keyword(null,"none","none",1333468478)], null):null);
var str_style_vec__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(count_w_nil,cljs.core.count(str_style_vec)))?str_style_vec:(cljs.core.truth_(elide_vec)?zprint.finish.replace_nil_seq(ctx__$1,str_style_vec_w_nil,elide_vec):str_style_vec));
return str_style_vec__$1;
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$2 = (function (ctx,cvec){
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3(ctx,cvec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$3 = (function (ctx,cvec,focus_vec){
return zprint.finish.cvec_to_style_vec.cljs$core$IFn$_invoke$arity$4(ctx,cvec,focus_vec,null);
}));

(zprint.finish.cvec_to_style_vec.cljs$lang$maxFixedArity = 4);

/**
 * Take a [[string :style] [string :style] ...] vector and
 *   build a list of: [[string :style <start> <length>] 
 *                  [string :style <start> <length>]...]
 *   from it.  This will compress strings which have the same style.
 */
zprint.finish.compress_style = (function zprint$finish$compress_style(var_args){
var G__34973 = arguments.length;
switch (G__34973) {
case 2:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2 = (function (str_style_vec,initial_pos){
var ss_vec = str_style_vec;
var current = null;
var pos = initial_pos;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var ss = cljs.core.first(ss_vec);
if(cljs.core.not(ss)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.add_length(current));
} else {
var same_style_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(current),cljs.core.second(ss));
var G__35080 = cljs.core.next(ss_vec);
var G__35081 = ((same_style_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(current)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ss))].join(''),cljs.core.second(current),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(current,(2))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(ss),cljs.core.second(ss),pos], null));
var G__35082 = (pos + cljs.core.count(cljs.core.first(ss)));
var G__35083 = ((((same_style_QMARK_) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(initial_pos,pos))))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,zprint.finish.add_length(current)));
ss_vec = G__35080;
current = G__35081;
pos = G__35082;
out = G__35083;
continue;
}
break;
}
}));

(zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$1 = (function (str_style_vec){
return zprint.finish.compress_style.cljs$core$IFn$_invoke$arity$2(str_style_vec,(0));
}));

(zprint.finish.compress_style.cljs$lang$maxFixedArity = 2);

/**
 * Take a [[string :color <anything>] 
 *         [string :color <anything>] ...] as input.
 *   and a focus-vec and, possibly, a non-empty cursor-vec.  If
 *   there is a cursor-vec, replace the focus-vec items with a cursor
 *   vec and return a new focus-vec and gcw-vec as [focus-vec gcw-vec], 
 *   else just return with no changes
 */
zprint.finish.replace_focus_w_cursor = (function zprint$finish$replace_focus_w_cursor(gcw_vec,p__34982,cursor_vec){
var vec__34983 = p__34982;
var focus_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983,(0),null);
var focus_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34983,(1),null);
var focus_vec = vec__34983;
if(cljs.core.empty_QMARK_(cursor_vec)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_vec,gcw_vec], null);
} else {
var vec__34986 = cljs.core.split_at(focus_start,gcw_vec);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(0),null);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34986,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [focus_start,(focus_start + (cljs.core.count(cursor_vec) - (1)))], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(front,cursor_vec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2(((focus_end - focus_start) + (1)),back)], 0))], null);
}
});
/**
 * Turn a [string :color] into an ansi colored string.
 */
zprint.finish.color_style = (function zprint$finish$color_style(p__34992){
var vec__34993 = p__34992;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34993,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34993,(1),null);
if((color == null)){
return s;
} else {
if(cljs.core.coll_QMARK_(color)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(zprint.ansi.color_str,s,color);
} else {
return zprint.ansi.color_str.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([color], 0));
}
}
});
/**
 * Use output from compress-style -- but just the [string :style] part,
 *   which since we used identity as the color map, should be just
 *   [string :color].  Produce a single string with ansi escape sequences embedded
 *   in it.
 */
zprint.finish.color_comp_vec = (function zprint$finish$color_comp_vec(comp_vec){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(zprint.finish.color_style,comp_vec));
});
/**
 * Ensure one number is above a certain value.
 */
zprint.finish.floor = (function zprint$finish$floor(f,n){
if((n >= f)){
return n;
} else {
return f;
}
});
zprint.finish.fzprint_cursor = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["default-cursor",(0)], null);
/**
 * Take a [<string> cursor-number] pair and produce the style-vec
 *   that will display it. Allow for existing characters.
 *   This is a style-vec that map-style can use, i.e.,
 *   [[string <start> <length>] ...]
 */
zprint.finish.cursor_style = (function zprint$finish$cursor_style(var_args){
var G__35004 = arguments.length;
switch (G__35004) {
case 2:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2 = (function (p__35005,existing_count){
var vec__35006 = p__35005;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006,(0),null);
var cursor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35006,(1),null);
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["cursor-style: s:",s,",cursor:",cursor], 0));

if(cljs.core.truth_(cursor)){
var s__$1 = (((cursor >= cljs.core.count(s)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''):s);
var len = cljs.core.count(s__$1);
var cursor__$1 = (function (){var x__4309__auto__ = zprint.finish.floor((0),(len - (1)));
var y__4310__auto__ = cursor;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})();
return cljs.core.filterv((function (p1__35002_SHARP_){
return (!(cljs.core.empty_QMARK_(cljs.core.first(p1__35002_SHARP_))));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(0),cursor__$1),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s__$1,cursor__$1)),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"cursor-element","cursor-element",-616791907)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$1,(cursor__$1 + (1)),len),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"element","element",1974019749)], null)], null);
}
}));

(zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$1 = (function (str_cursor){
return zprint.finish.cursor_style.cljs$core$IFn$_invoke$arity$2(str_cursor,(0));
}));

(zprint.finish.cursor_style.cljs$lang$maxFixedArity = 2);

/**
 * Find out how many newlines are in a string, and where they appear.
 *   Returns either nil for no newlines, or a vector [<count> #{:b :m :e}]
 *   for beginning, middle, or end (or all three).
 */
zprint.finish.newline_vec = (function zprint$finish$newline_vec(s){
var nl_split = clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''),/\n/);
var nl_num = (cljs.core.count(nl_split) - (1));
if((!((nl_num === (0))))){
var where = ((cljs.core.empty_QMARK_(cljs.core.first(nl_split)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),null], null), null):cljs.core.PersistentHashSet.EMPTY);
var where__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(nl_split)," "))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(where,new cljs.core.Keyword(null,"e","e",1381269198)):where);
var where__$2 = (((nl_num > cljs.core.count(where__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(where__$1,new cljs.core.Keyword(null,"m","m",1632677161)):where__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nl_num,where__$2], null);
} else {
return null;
}
});
/**
 * Return a vector containing vectors each with the cvec elements 
 *   for the start and end of each line.
 */
zprint.finish.cvec_lines = (function zprint$finish$cvec_lines(cvec){
var cvec_nl = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(zprint.finish.newline_vec,cljs.core.first),cvec);
var idx = (0);
var start = (0);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(cvec_nl)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
} else {
var vec__35019 = cljs.core.first(cvec_nl);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019,(0),null);
var where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019,(1),null);
var cvec_element = vec__35019;
if((cvec_element == null)){
var G__35134 = cljs.core.next(cvec_nl);
var G__35135 = (idx + (1));
var G__35136 = start;
var G__35137 = out;
cvec_nl = G__35134;
idx = G__35135;
start = G__35136;
out = G__35137;
continue;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1));
if(and__4221__auto__){
return new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4221__auto__;
}
})())){
var G__35144 = cljs.core.next(cvec_nl);
var G__35145 = (idx + (1));
var G__35146 = idx;
var G__35147 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null));
cvec_nl = G__35144;
idx = G__35145;
start = G__35146;
out = G__35147;
continue;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(1));
if(and__4221__auto__){
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4221__auto__;
}
})())){
var G__35150 = cljs.core.next(cvec_nl);
var G__35151 = (idx + (1));
var G__35152 = (idx + (1));
var G__35153 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null));
cvec_nl = G__35150;
idx = G__35151;
start = G__35152;
out = G__35153;
continue;
} else {
if(cljs.core.truth_((function (){var and__4221__auto__ = (n > (1));
if(and__4221__auto__){
var and__4221__auto____$1 = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(where);
if(cljs.core.truth_(and__4221__auto____$1)){
return new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(where);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
var G__35156 = cljs.core.next(cvec_nl);
var G__35157 = (idx + (1));
var G__35158 = idx;
var G__35159 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(idx - (1))], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,idx], null)));
cvec_nl = G__35156;
idx = G__35157;
start = G__35158;
out = G__35159;
continue;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(where))){
var G__35161 = cljs.core.next(cvec_nl);
var G__35162 = (idx + (1));
var G__35163 = start;
var G__35164 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,out,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,idx], null)));
cvec_nl = G__35161;
idx = G__35162;
start = G__35163;
out = G__35164;
continue;
} else {
return null;
}
}
}
}
}
}
break;
}
});
/**
 * Given a cvec index, return the line that it is in.
 */
zprint.finish.find_line = (function zprint$finish$find_line(lines,idx){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35025_SHARP_,p2__35024_SHARP_){
if(zprint.finish.within_QMARK_(idx,p2__35024_SHARP_)){
return cljs.core.reduced(p1__35025_SHARP_);
} else {
return (p1__35025_SHARP_ + (1));
}
}),(0),lines);
});
/**
 * Given a cvec and a focus-vec, and the number of line before and after
 *   the focus, output a vector of vectors of cvec indicies that cover the 
 *   desired lines. [[start end] [start end] ...]
 */
zprint.finish.surround_focus = (function zprint$finish$surround_focus(lines_to_cvec,p__35029,p__35030){
var vec__35031 = p__35029;
var focus_begin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(0),null);
var focus_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(1),null);
var vec__35034 = p__35030;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35034,(1),null);
var line_count = cljs.core.count(lines_to_cvec);
var focus_begin_line = zprint.finish.find_line(lines_to_cvec,focus_begin);
var focus_end_line = zprint.finish.find_line(lines_to_cvec,focus_end);
var before_line = (focus_begin_line - before);
var before_line__$1 = (((before_line > (0)))?before_line:(0));
var after_line = (focus_end_line + after);
var after_line__$1 = (((after_line >= line_count))?(line_count - (1)):after_line);
var surround_vec = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines_to_cvec,before_line__$1)),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines_to_cvec,after_line__$1))], null);
return surround_vec;
});
/**
 * If given a single integer, return the range from lines.  If given
 *   a range of lines, return the beginning of the first line and the end
 *   of the last line.
 */
zprint.finish.find_range = (function zprint$finish$find_range(lines,line_selector){
if(typeof line_selector === 'number'){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,line_selector);
} else {
if(cljs.core.vector_QMARK_(line_selector)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.first(line_selector))),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(lines,cljs.core.second(line_selector)))], null);
} else {
throw (new Error(["Line selector '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector),"' must be a number or a vector!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_selector)].join('')));

}
}
});
/**
 * line-vec is a vector of individual lines, or two-vecs of
 *   line ranges: [1 2 [3-5] 8 9]. Returns a vector of cvec element
 *   ranges [[0 20] [45-70] ...].  lines is the return from cvec-lines,
 *   which maps lines onto cvec ranges.
 */
zprint.finish.select_lines = (function zprint$finish$select_lines(lines_to_cvec,line_vec){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.finish.find_range,lines_to_cvec),line_vec);
});
/**
 * Take the current cvec and any focus-vec and the options map,
 *   and figure out a set of cvecs to use.  Don't generate lines
 *   array unless we need to.
 */
zprint.finish.handle_lines = (function zprint$finish$handle_lines(p__35044,cvec,focus_vec){
var map__35045 = p__35044;
var map__35045__$1 = cljs.core.__destructure_map(map__35045);
var options = map__35045__$1;
var map__35046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35045__$1,new cljs.core.Keyword(null,"output","output",-1105869043));
var map__35046__$1 = cljs.core.__destructure_map(map__35046);
var focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35046__$1,new cljs.core.Keyword(null,"focus","focus",234677911));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35046__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35046__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
if(cljs.core.truth_((function (){var or__4223__auto__ = lines;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = paths;
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.Keyword(null,"surround","surround",2016177296).cljs$core$IFn$_invoke$arity$1(focus);
}
}
})())){
var lines_to_cvec = zprint.finish.cvec_lines(cvec);
var surround = new cljs.core.Keyword(null,"surround","surround",2016177296).cljs$core$IFn$_invoke$arity$1(focus);
var cvec_ranges = (cljs.core.truth_(lines)?zprint.finish.select_lines(lines_to_cvec,lines):cljs.core.PersistentVector.EMPTY);
var cvec_ranges__$1 = (cljs.core.truth_(surround)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cvec_ranges,zprint.finish.surround_focus(lines_to_cvec,focus_vec,surround)):cvec_ranges);
var path_vecs = (cljs.core.truth_(paths)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(zprint.focus.range_ssv,cvec),paths):null);
var path_vecs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35043_SHARP_){
return zprint.finish.surround_focus(lines_to_cvec,p1__35043_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}),path_vecs);
var cvec_ranges__$2 = (cljs.core.truth_(path_vecs__$1)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cvec_ranges__$1,path_vecs__$1):cvec_ranges__$1);
if(cljs.core.empty_QMARK_(cvec_ranges__$2)){
return null;
} else {
return cvec_ranges__$2;
}
} else {
return null;
}
});

//# sourceMappingURL=zprint.finish.js.map
