goog.provide('devtools.formatters.markup');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30444 = arguments.length;
var i__4737__auto___30445 = (0);
while(true){
if((i__4737__auto___30445 < len__4736__auto___30444)){
args__4742__auto__.push((arguments[i__4737__auto___30445]));

var G__30446 = (i__4737__auto___30445 + (1));
i__4737__auto___30445 = G__30446;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__30121){
var vec__30122 = p__30121;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30122,(0),null);
var job_fn = (function (){
var G__30125 = value;
var G__30126 = tag;
var G__30127 = (devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0 ? devtools.formatters.markup.get_markup_db.cljs$core$IFn$_invoke$arity$0() : devtools.formatters.markup.get_markup_db.call(null));
return (method.cljs$core$IFn$_invoke$arity$3 ? method.cljs$core$IFn$_invoke$arity$3(G__30125,G__30126,G__30127) : method.call(null,G__30125,G__30126,G__30127));
});
if((!((max_level == null)))){
var _STAR_print_level_STAR__orig_val__30129 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_level_STAR__temp_val__30130 = (max_level + (1));
(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__30130);

try{return job_fn();
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__30129);
}} else {
return job_fn();
}
}));

(devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq30114){
var G__30115 = cljs.core.first(seq30114);
var seq30114__$1 = cljs.core.next(seq30114);
var G__30116 = cljs.core.first(seq30114__$1);
var seq30114__$2 = cljs.core.next(seq30114__$1);
var G__30117 = cljs.core.first(seq30114__$2);
var seq30114__$3 = cljs.core.next(seq30114__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30115,G__30116,G__30117,seq30114__$3);
}));

devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30449 = arguments.length;
var i__4737__auto___30450 = (0);
while(true){
if((i__4737__auto___30450 < len__4736__auto___30449)){
args__4742__auto__.push((arguments[i__4737__auto___30450]));

var G__30451 = (i__4737__auto___30450 + (1));
i__4737__auto___30450 = G__30451;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__30140){
var vec__30142 = p__30140;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30142,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_writer,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
}));

(devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first(seq30133);
var seq30133__$1 = cljs.core.next(seq30133);
var G__30135 = cljs.core.first(seq30133__$1);
var seq30133__$2 = cljs.core.next(seq30133__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30134,G__30135,seq30133__$2);
}));

devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30456 = arguments.length;
var i__4737__auto___30457 = (0);
while(true){
if((i__4737__auto___30457 < len__4736__auto___30456)){
args__4742__auto__.push((arguments[i__4737__auto___30457]));

var G__30458 = (i__4737__auto___30457 + (1));
i__4737__auto___30457 = G__30458;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__30156){
var vec__30162 = p__30156;
var max_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30162,(0),null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.printing.managed_print_via_protocol,value,tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([max_level], 0));
}));

(devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq30145){
var G__30146 = cljs.core.first(seq30145);
var seq30145__$1 = cljs.core.next(seq30145);
var G__30147 = cljs.core.first(seq30145__$1);
var seq30145__$2 = cljs.core.next(seq30145__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30146,G__30147,seq30145__$2);
}));

devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30464 = arguments.length;
var i__4737__auto___30465 = (0);
while(true){
if((i__4737__auto___30465 < len__4736__auto___30464)){
args__4742__auto__.push((arguments[i__4737__auto___30465]));

var G__30466 = (i__4737__auto___30465 + (1));
i__4737__auto___30465 = G__30466;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-inner-tag","expandable-inner-tag",-799648560)], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-tag","expandable-tag",151027578),new cljs.core.Keyword(null,"expandable-symbol","expandable-symbol",1644611290),inner_markup], null);
}));

(devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq30182){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30182));
}));

devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30471 = arguments.length;
var i__4737__auto___30473 = (0);
while(true){
if((i__4737__auto___30473 < len__4736__auto___30471)){
args__4742__auto__.push((arguments[i__4737__auto___30473]));

var G__30474 = (i__4737__auto___30473 + (1));
i__4737__auto___30473 = G__30474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
}));

(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq30189){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30189));
}));

devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30481 = arguments.length;
var i__4737__auto___30482 = (0);
while(true){
if((i__4737__auto___30482 < len__4736__auto___30481)){
args__4742__auto__.push((arguments[i__4737__auto___30482]));

var G__30484 = (i__4737__auto___30482 + (1));
i__4737__auto___30482 = G__30484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30193){
var vec__30195 = p__30193;
var object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(0),null);
var header = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(1),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(2),null);
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30195,(3),null);
var header__$1 = (((!((body == null))))?devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header], 0)):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,header__$1,body,start_index], 0));
}));

(devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq30190){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30190));
}));

devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30495 = arguments.length;
var i__4737__auto___30496 = (0);
while(true){
if((i__4737__auto___30496 < len__4736__auto___30495)){
args__4742__auto__.push((arguments[i__4737__auto___30496]));

var G__30498 = (i__4737__auto___30496 + (1));
i__4737__auto___30496 = G__30498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
}));

(devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq30199){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30199));
}));

devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30504 = arguments.length;
var i__4737__auto___30505 = (0);
while(true){
if((i__4737__auto___30505 < len__4736__auto___30504)){
args__4742__auto__.push((arguments[i__4737__auto___30505]));

var G__30507 = (i__4737__auto___30505 + (1));
i__4737__auto___30505 = G__30507;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_surrogate_GT_,args)], 0));
}));

(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq30204){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30204));
}));

devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30513 = arguments.length;
var i__4737__auto___30515 = (0);
while(true){
if((i__4737__auto___30515 < len__4736__auto___30513)){
args__4742__auto__.push((arguments[i__4737__auto___30515]));

var G__30516 = (i__4737__auto___30515 + (1));
i__4737__auto___30515 = G__30516;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-tag","circular-reference-tag",858973471),new cljs.core.Keyword(null,"circular-ref-icon","circular-ref-icon",-2087682919)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-body-tag","circular-reference-body-tag",-1301830023)], null),children)], 0));
}));

(devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq30206){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30206));
}));

devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,(function (p1__30207_SHARP_){
return devtools.formatters.state.set_prevent_recursion(p1__30207_SHARP_,true);
})], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-wrapper-tag","native-reference-wrapper-tag",2047690940),new cljs.core.Keyword(null,"native-reference-background","native-reference-background",-286129550),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-tag","native-reference-tag",-1516119079),reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,new cljs.core.Keyword(null,"header-expander-symbol","header-expander-symbol",907531743),new cljs.core.Keyword(null,"target","target",253001721)], 0)),devtools.formatters.state.reset_depth_limits], 0));
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30520 = arguments.length;
var i__4737__auto___30521 = (0);
while(true){
if((i__4737__auto___30521 < len__4736__auto___30520)){
args__4742__auto__.push((arguments[i__4737__auto___30521]));

var G__30522 = (i__4737__auto___30521 + (1));
i__4737__auto___30521 = G__30522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs-land-tag","cljs-land-tag",-7524377)], null),children);
}));

(devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq30215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30215));
}));

devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil-tag","nil-tag",-1587449115),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool-tag","bool-tag",-10409808),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bool)], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword-tag","keyword-tag",1587228387),cljs.core.str.cljs$core$IFn$_invoke$arity$1(keyword)], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol-tag","symbol-tag",-100807517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.integer_QMARK_(number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer-tag","integer-tag",698000472),number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float-tag","float-tag",-390834106),number], null);
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"dq","dq",-1690275860));
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206));
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)) + devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var quote_string = (function (s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dq)].join('');
});
var should_abbreviate_QMARK_ = (cljs.core.count(inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string(inline_string,devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112)),devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)),devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string(abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(nl_marker),"\n"].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-string-tag","expanded-string-tag",-2125162127),string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([string,abbreviated_string_markup,details_markup], 0));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string(inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,new cljs.core.Keyword(null,"header-tag","header-tag",1594852433),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413))], 0));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-tag","body-tag",433527431),markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aligned-li-tag","aligned-li-tag",1727029722)], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747)], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30539 = arguments.length;
var i__4737__auto___30540 = (0);
while(true){
if((i__4737__auto___30540 < len__4736__auto___30539)){
args__4742__auto__.push((arguments[i__4737__auto___30540]));

var G__30541 = (i__4737__auto___30540 + (1));
i__4737__auto___30540 = G__30541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__30231){
var vec__30232 = p__30231;
var no_margin_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30232,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747):new cljs.core.Keyword(null,"standard-ol-tag","standard-ol-tag",1120081433));
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-li-no-margin-tag","standard-li-no-margin-tag",-844555468):new cljs.core.Keyword(null,"standard-li-tag","standard-li-tag",-932749876));
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});
var lines_markups = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(prepend_li_tag,markups_lists);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
}));

(devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq30229){
var G__30230 = cljs.core.first(seq30229);
var seq30229__$1 = cljs.core.next(seq30229);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30230,seq30229__$1);
}));

devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0))], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-tag","index-tag",693492486),value,new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246)], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_(index);
var value_markup = devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(value,new cljs.core.Keyword(null,"item-tag","item-tag",-988763304),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(work)){
return lines;
} else {
var G__30542 = cljs.core.rest(work);
var G__30543 = (index + (1));
var G__30544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,devtools.formatters.markup.body_line(index,cljs.core.first(work)));
work = G__30542;
index = G__30543;
lines = G__30544;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq(value);
var max_number_body_items = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624));
var chunk = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var rest = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines(chunk,starting_index);
var continue_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),rest))));
if((!(continue_QMARK_))){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-items-more-tag","body-items-more-tag",867141569),new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123)], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest,more_label_markup,new cljs.core.Keyword(null,"target","target",253001721),start_index], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup.body_lines(value,starting_index),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([has_continuation_QMARK_], 0));
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_(body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30564 = arguments.length;
var i__4737__auto___30565 = (0);
while(true){
if((i__4737__auto___30565 < len__4736__auto___30564)){
args__4742__auto__.push((arguments[i__4737__auto___30565]));

var G__30568 = (i__4737__auto___30565 + (1));
i__4737__auto___30565 = G__30568;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__30238){
var vec__30239 = p__30238;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30239,(0),null);
var items_markups = cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_count,items);
var more_count = (cljs.core.count(items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"list-separator","list-separator",900562185);
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var more_symbol = temp__5733__auto__;
if(cljs.core.fn_QMARK_(more_symbol)){
return (more_symbol.cljs$core$IFn$_invoke$arity$1 ? more_symbol.cljs$core$IFn$_invoke$arity$1(more_count) : more_symbol.call(null,more_count));
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker(more_count);
}
})():null);
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"list-tag","list-tag",1555796884);
}
})(),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"list-open-symbol","list-open-symbol",-1162287443);
}
})()], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,items_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"list-close-symbol","list-close-symbol",-1120016586);
}
})()], null)], 0));
if(more_QMARK_){
var details_markup = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,(function (){var or__4126__auto__ = details_markup;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default_details_fn;
}
})()], 0));
} else {
return preview_markup;
}
}));

(devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq30235){
var G__30236 = cljs.core.first(seq30235);
var seq30235__$1 = cljs.core.next(seq30235);
var G__30237 = cljs.core.first(seq30235__$1);
var seq30235__$2 = cljs.core.next(seq30235__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30236,G__30237,seq30235__$2);
}));

devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body_fn = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-body-tag","meta-body-tag",1689183121),devtools.formatters.markup._LT_preview_GT_(metadata)], null);
});
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-header-tag","meta-header-tag",-1207812581),"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-reference-tag","meta-reference-tag",914791936),devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,header,body_fn], 0))], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30581 = arguments.length;
var i__4737__auto___30582 = (0);
while(true){
if((i__4737__auto___30582 < len__4736__auto___30581)){
args__4742__auto__.push((arguments[i__4737__auto___30582]));

var G__30583 = (i__4737__auto___30582 + (1));
i__4737__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-wrapper-tag","meta-wrapper-tag",1927429038)], null),children,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_(metadata)], null)], 0));
}));

(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq30251){
var G__30252 = cljs.core.first(seq30251);
var seq30251__$1 = cljs.core.next(seq30251);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30252,seq30251__$1);
}));

devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var arities__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-multi-arity-args-indent-tag","fn-multi-arity-args-indent-tag",-1931373734),prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),arity], null)], null);
});
var arities_markupts_lists = (((cljs.core.count(arities__$1) > (1)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(make_arity_markup_list,arities__$1):null);
var ns_markups_list = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_(fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count(arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),devtools.formatters.helpers.wrap_arity(((multi_arity_QMARK_)?devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653)):cljs.core.first(arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){
if(cljs.core.fn_QMARK_(fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var vec__30254 = devtools.munging.parse_fn_info(fn_obj);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_(name);
var spacer_symbol = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"spacer","spacer",2067425139));
var rest_symbol = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"rest-symbol","rest-symbol",1021371174));
var multi_arity_symbol = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653));
var arities = devtools.munging.extract_arities(fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_(arities);
var name_markup = (((!(lambda_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-name-tag","fn-name-tag",555823755),name], null):null);
var icon_markup = ((lambda_QMARK_)?new cljs.core.Keyword(null,"lambda-icon","lambda-icon",980753546):new cljs.core.Keyword(null,"fn-icon","fn-icon",-1412665288));
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-prefix-tag","fn-prefix-tag",1947411856),icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-header-tag","fn-header-tag",-1262068349),prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arities,prefix_markup], 0));
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fn_obj,preview_markup,details_fn], 0));
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-item-tag","type-basis-item-tag",50612816),cljs.core.name(basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-basis-item-separator","type-basis-item-separator",-2029193896),item_markups);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-tag","type-basis-tag",-2122159204)], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_(basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-basis-symbol","empty-basis-symbol",-1971559593)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"basis-icon","basis-icon",1917779567),devtools.formatters.markup._LT_type_basis_GT_(basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_(constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30598 = arguments.length;
var i__4737__auto___30599 = (0);
while(true){
if((i__4737__auto___30599 < len__4736__auto___30598)){
args__4742__auto__.push((arguments[i__4737__auto___30599]));

var G__30600 = (i__4737__auto___30599 + (1));
i__4737__auto___30599 = G__30600;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__30270){
var vec__30271 = p__30270;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30271,(0),null);
var vec__30275 = devtools.munging.parse_constructor_info(constructor_fn);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30275,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-name-tag","type-name-tag",-1317275511),name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = header_tag;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"type-header-tag","type-header-tag",1645372265);
}
})(),new cljs.core.Keyword(null,"type-symbol","type-symbol",-941894755),name_markup], null);
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([basis], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-wrapper-tag","type-wrapper-tag",-1732366004),new cljs.core.Keyword(null,"type-header-background","type-header-background",-810861696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-ref-tag","type-ref-tag",2126727355),devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([constructor_fn,preview_markup,details_markup_fn], 0))], null)], null);
}));

(devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq30260){
var G__30261 = cljs.core.first(seq30260);
var seq30260__$1 = cljs.core.next(seq30260);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30261,seq30260__$1);
}));

devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30605 = arguments.length;
var i__4737__auto___30606 = (0);
while(true){
if((i__4737__auto___30606 < len__4736__auto___30605)){
args__4742__auto__.push((arguments[i__4737__auto___30606]));

var G__30607 = (i__4737__auto___30606 + (1));
i__4737__auto___30606 = G__30607;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__30284){
var vec__30285 = p__30284;
var header_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30285,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standalone-type-tag","standalone-type-tag",-1677164791),devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header_tag], 0))], null);
}));

(devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq30280){
var G__30281 = cljs.core.first(seq30280);
var seq30280__$1 = cljs.core.next(seq30280);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30281,seq30280__$1);
}));

devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arity_fn], 0));
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30610 = arguments.length;
var i__4737__auto___30611 = (0);
while(true){
if((i__4737__auto___30611 < len__4736__auto___30610)){
args__4742__auto__.push((arguments[i__4737__auto___30611]));

var G__30613 = (i__4737__auto___30611 + (1));
i__4737__auto___30611 = G__30613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__30298){
var vec__30299 = p__30298;
var max_fns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30299,(0),null);
var max_fns__$1 = (function (){var or__4126__auto__ = max_fns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"max-protocol-method-arities-list","max-protocol-method-arities-list",-45936465));
}
})();
var more_QMARK_ = (cljs.core.count(fns) > max_fns__$1);
var aritites_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fns__$1,fns));
var preview_markup = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-tag","protocol-method-arities-header-tag",734407707),new cljs.core.Keyword(null,"protocol-method-arities-header-open-symbol","protocol-method-arities-header-open-symbol",1704200465)], null),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol-method-arities-list-header-separator","protocol-method-arities-list-header-separator",-115158954),aritites_markups),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-more-symbol","protocol-method-arities-more-symbol",-477018522)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-close-symbol","protocol-method-arities-header-close-symbol",-1375237120)], null)], 0));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,preview_markup,details_markup_fn], 0));
} else {
return preview_markup;
}
}));

(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq30296){
var G__30297 = cljs.core.first(seq30296);
var seq30296__$1 = cljs.core.next(seq30296);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30297,seq30296__$1);
}));

devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-tag","protocol-method-tag",2032279830),new cljs.core.Keyword(null,"method-icon","method-icon",-1678775281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-name-tag","protocol-method-name-tag",-1030376744),name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_(arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object(selector);
var ns_markups_list = (((!(cljs.core.empty_QMARK_(ns))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-ns-name-tag","protocol-ns-name-tag",1832081510),ns], null)], null):null);
var native_markups_list = (((!((protocol_obj == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_(protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods(obj,selector);
var methods_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30319){
var vec__30320 = p__30319;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(0),null);
var arities = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_(name,arities);
}),methods$);
var methods_markups_lists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30625 = arguments.length;
var i__4737__auto___30634 = (0);
while(true){
if((i__4737__auto___30634 < len__4736__auto___30625)){
args__4742__auto__.push((arguments[i__4737__auto___30634]));

var G__30635 = (i__4737__auto___30634 + (1));
i__4737__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__30328){
var vec__30329 = p__30328;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30329,(0),null);
var map__30332 = protocol;
var map__30332__$1 = (((((!((map__30332 == null))))?(((((map__30332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30332):map__30332);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var fast_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,new cljs.core.Keyword(null,"fast?","fast?",-1813307150));
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = tag;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"protocol-name-tag","protocol-name-tag",1508238310);
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?new cljs.core.Keyword(null,"fast-protocol-tag","fast-protocol-tag",2066025065):new cljs.core.Keyword(null,"slow-protocol-tag","slow-protocol-tag",2061129467)),new cljs.core.Keyword(null,"protocol-background","protocol-background",1111513794)], null);
if((!((obj == null)))){
var details_markup_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selector,fast_QMARK_], 0));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj,preview_markup,details_markup_fn], 0)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix_markup,preview_markup);
}
}));

(devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq30325){
var G__30326 = cljs.core.first(seq30325);
var seq30325__$1 = cljs.core.next(seq30325);
var G__30327 = cljs.core.first(seq30325__$1);
var seq30325__$2 = cljs.core.next(seq30325__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30326,G__30327,seq30325__$2);
}));

devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),devtools.formatters.helpers.get_more_marker(more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(null,fake_protocol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"protocol-more-tag","protocol-more-tag",2098702865)], 0));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30640 = arguments.length;
var i__4737__auto___30641 = (0);
while(true){
if((i__4737__auto___30641 < len__4736__auto___30640)){
args__4742__auto__.push((arguments[i__4737__auto___30641]));

var G__30642 = (i__4737__auto___30641 + (1));
i__4737__auto___30641 = G__30642;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__30339){
var vec__30340 = p__30339;
var max_protocols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30340,(0),null);
var max_protocols__$1 = (function (){var or__4126__auto__ = max_protocols;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"max-list-protocols","max-list-protocols",-537135129));
}
})();
var protocols_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(protocols_markups,max_protocols__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"protocols-header-tag","protocols-header-tag",-734413384),new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825),new cljs.core.Keyword(null,"protocols-list-open-symbol","protocols-list-open-symbol",-729713043),new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165),new cljs.core.Keyword(null,"protocols-list-close-symbol","protocols-list-close-symbol",652072902),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"header-protocol-separator","header-protocol-separator",445531439),new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242),devtools.formatters.markup._LT_more_protocols_GT_], null)], 0));
}));

(devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq30336){
var G__30337 = cljs.core.first(seq30336);
var seq30336__$1 = cljs.core.next(seq30336);
var G__30338 = cljs.core.first(seq30336__$1);
var seq30336__$2 = cljs.core.next(seq30336__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30337,G__30338,seq30336__$2);
}));

devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-tag","header-field-tag",-1403476101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-name-tag","header-field-name-tag",82291956),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null),new cljs.core.Keyword(null,"header-field-value-spacer","header-field-value-spacer",-1210630679),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-value-tag","header-field-value-tag",-1708691701),devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)),(function (p1__30356_SHARP_){
return devtools.formatters.state.set_managed_print_level(p1__30356_SHARP_,(1));
})], 0))], null),new cljs.core.Keyword(null,"header-field-separator","header-field-separator",-774444018)], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__30359 = field;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30359,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-tr-tag","body-field-tr-tag",37280691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td1-tag","body-field-td1-tag",256357429),new cljs.core.Keyword(null,"body-field-symbol","body-field-symbol",256897537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-name-tag","body-field-name-tag",917867601),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td2-tag","body-field-td2-tag",94501500),new cljs.core.Keyword(null,"body-field-value-spacer","body-field-value-spacer",1279911362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td3-tag","body-field-td3-tag",-803119922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-value-tag","body-field-value-tag",800789079),devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30651 = arguments.length;
var i__4737__auto___30652 = (0);
while(true){
if((i__4737__auto___30652 < len__4736__auto___30651)){
args__4742__auto__.push((arguments[i__4737__auto___30652]));

var G__30653 = (i__4737__auto___30652 + (1));
i__4737__auto___30652 = G__30653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__30365){
var vec__30366 = p__30365;
var max_fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30366,(0),null);
if((cljs.core.count(fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-no-fields-symbol","fields-header-no-fields-symbol",-1749204979)], null);
} else {
var max_fields__$1 = (function (){var or__4126__auto__ = max_fields;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"max-instance-header-fields","max-instance-header-fields",-126007269));
}
})();
var more_QMARK_ = (cljs.core.count(fields) > max_fields__$1);
var fields_markups = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30371){
var vec__30372 = p__30371;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30372,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30372,(1),null);
return devtools.formatters.markup._LT_field_GT_(name,value);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fields__$1,fields));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-open-symbol","fields-header-open-symbol",-26243798)], null),fields_markups,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?new cljs.core.Keyword(null,"more-fields-symbol","more-fields-symbol",720022882):null),new cljs.core.Keyword(null,"fields-header-close-symbol","fields-header-close-symbol",1615181116)], null)], 0));
}
}));

(devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq30362){
var G__30363 = cljs.core.first(seq30362);
var seq30362__$1 = cljs.core.next(seq30362);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30363,seq30362__$1);
}));

devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols(obj);
var has_protocols_QMARK_ = (!(cljs.core.empty_QMARK_(protocols)));
var fields_markup = (((!((cljs.core.count(fields) === (0)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-icon","fields-icon",-436030420),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-body-fields-table-tag","instance-body-fields-table-tag",1306340776)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols-icon","protocols-icon",-517302494),devtools.formatters.markup._LT_protocols_list_GT_(obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_(obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor(value);
var vec__30393 = devtools.munging.parse_constructor_info(constructor_fn);
var _ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(0),null);
var _name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(1),null);
var basis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30393,(2),null);
var custom_printing_QMARK_ = (((!((value == null))))?(((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IPrintWithWriter$))))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(constructor_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"instance-type-header-tag","instance-type-header-tag",-1015702989)], 0));
var fields = devtools.formatters.helpers.fetch_fields_values(value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(fields,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((custom_printing_QMARK_)?(0):null)], 0));
var fields_details_markup_fn = (function (){
return devtools.formatters.markup._LT_fields_details_GT_(fields,value);
});
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-value-tag","instance-value-tag",-1739593896),devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value,fields_markup,fields_details_markup_fn], 0))], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-custom-printing-wrapper-tag","instance-custom-printing-wrapper-tag",1461890684),new cljs.core.Keyword(null,"instance-custom-printing-background","instance-custom-printing-background",-248433646),devtools.formatters.markup.print_via_protocol(value,new cljs.core.Keyword(null,"instance-custom-printing-tag","instance-custom-printing-tag",-67034432))], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-header-tag","instance-header-tag",903623870),new cljs.core.Keyword(null,"instance-header-background","instance-header-background",1510357287),fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([devtools.formatters.markup._LT_preview_GT_(value)], 0));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__4126__auto__ = devtools.formatters.templating.get_surrogate_header(surrogate);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_(devtools.formatters.templating.get_surrogate_target(surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target(surrogate);
if(cljs.core.seqable_QMARK_(target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index(surrogate);
return devtools.formatters.markup._LT_details_GT_(target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_(target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__5733__auto__ = devtools.formatters.templating.get_surrogate_body(surrogate);
if(cljs.core.truth_(temp__5733__auto__)){
var body = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"target","target",253001721),body)){
return devtools.formatters.markup._LT_surrogate_target_GT_(surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-nils","render-nils",1360008699),value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_();
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-bools","render-bools",1793659724),value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-strings","render-strings",-1497177335),value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-numbers","render-numbers",-1385392009),value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-keywords","render-keywords",1200455875),value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-symbols","render-symbols",-887705016),value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-instances","render-instances",-1803579686),value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-types","render-types",-129927851),value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_(value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_(new cljs.core.Keyword(null,"render-functions","render-functions",1273333002),value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_(value);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
(devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aligned-body","aligned-body",-2124118747),new cljs.core.Keyword(null,"native-reference","native-reference",-2013708658),new cljs.core.Keyword(null,"reference-surrogate","reference-surrogate",274031791),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"protocol-method-arities","protocol-method-arities",-545542044),new cljs.core.Keyword(null,"surrogate-header","surrogate-header",1705524526),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"more-protocols","more-protocols",359555207),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"fields-details","fields-details",-269572714),new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"standard-body","standard-body",-1563020798),new cljs.core.Keyword(null,"type-basis","type-basis",-1825246054),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"standalone-type","standalone-type",-802565278),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),new cljs.core.Keyword(null,"cljs-land","cljs-land",1255896927),new cljs.core.Keyword(null,"type-basis-item","type-basis-item",-1662150132),new cljs.core.Keyword(null,"protocol-method-arities-details","protocol-method-arities-details",1944702118),new cljs.core.Keyword(null,"fields-details-row","fields-details-row",2066344936),new cljs.core.Keyword(null,"standard-body-reference","standard-body-reference",1513301561),new cljs.core.Keyword(null,"surrogate-body","surrogate-body",-1618569585),new cljs.core.Keyword(null,"expandable","expandable",-704609097),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"protocol-method-arity","protocol-method-arity",-1861927833),new cljs.core.Keyword(null,"raw-surrogate","raw-surrogate",904931181),new cljs.core.Keyword(null,"type-details","type-details",477755178),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"meta-wrapper","meta-wrapper",-1989845587),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"surrogate","surrogate",2122284260),new cljs.core.Keyword(null,"protocols-list","protocols-list",371434187),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Keyword(null,"function-details","function-details",1501147310),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"arities","arities",-1781122917),new cljs.core.Keyword(null,"header-expander","header-expander",-1606368578),new cljs.core.Keyword(null,"list-details","list-details",46031799),new cljs.core.Keyword(null,"circular-reference","circular-reference",970308727),new cljs.core.Keyword(null,"surrogate-target","surrogate-target",-1262730220),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"protocol-details","protocol-details",-121549824)],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]));
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});

//# sourceMappingURL=devtools.formatters.markup.js.map
