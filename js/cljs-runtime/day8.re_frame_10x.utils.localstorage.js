goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__40417 = arguments.length;
switch (G__40417) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__40423 = cljs.core.seq(Object.keys(localStorage));
var chunk__40424 = null;
var count__40425 = (0);
var i__40426 = (0);
while(true){
if((i__40426 < count__40425)){
var k = chunk__40424.cljs$core$IIndexed$_nth$arity$2(null,i__40426);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40433 = seq__40423;
var G__40434 = chunk__40424;
var G__40435 = count__40425;
var G__40436 = (i__40426 + (1));
seq__40423 = G__40433;
chunk__40424 = G__40434;
count__40425 = G__40435;
i__40426 = G__40436;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40423);
if(temp__5735__auto__){
var seq__40423__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40423__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40423__$1);
var G__40437 = cljs.core.chunk_rest(seq__40423__$1);
var G__40438 = c__4556__auto__;
var G__40439 = cljs.core.count(c__4556__auto__);
var G__40440 = (0);
seq__40423 = G__40437;
chunk__40424 = G__40438;
count__40425 = G__40439;
i__40426 = G__40440;
continue;
} else {
var k = cljs.core.first(seq__40423__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40441 = cljs.core.next(seq__40423__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40423 = G__40441;
chunk__40424 = G__40442;
count__40425 = G__40443;
i__40426 = G__40444;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
