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
var G__25443 = arguments.length;
switch (G__25443) {
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
var seq__25446 = cljs.core.seq(Object.keys(localStorage));
var chunk__25447 = null;
var count__25448 = (0);
var i__25449 = (0);
while(true){
if((i__25449 < count__25448)){
var k = chunk__25447.cljs$core$IIndexed$_nth$arity$2(null,i__25449);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__25467 = seq__25446;
var G__25468 = chunk__25447;
var G__25469 = count__25448;
var G__25470 = (i__25449 + (1));
seq__25446 = G__25467;
chunk__25447 = G__25468;
count__25448 = G__25469;
i__25449 = G__25470;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25446);
if(temp__5804__auto__){
var seq__25446__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25446__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25446__$1);
var G__25471 = cljs.core.chunk_rest(seq__25446__$1);
var G__25472 = c__5568__auto__;
var G__25473 = cljs.core.count(c__5568__auto__);
var G__25474 = (0);
seq__25446 = G__25471;
chunk__25447 = G__25472;
count__25448 = G__25473;
i__25449 = G__25474;
continue;
} else {
var k = cljs.core.first(seq__25446__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__25475 = cljs.core.next(seq__25446__$1);
var G__25476 = null;
var G__25477 = (0);
var G__25478 = (0);
seq__25446 = G__25475;
chunk__25447 = G__25476;
count__25448 = G__25477;
i__25449 = G__25478;
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
