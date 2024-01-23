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
var G__40420 = arguments.length;
switch (G__40420) {
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
var seq__40425 = cljs.core.seq(Object.keys(localStorage));
var chunk__40426 = null;
var count__40427 = (0);
var i__40428 = (0);
while(true){
if((i__40428 < count__40427)){
var k = chunk__40426.cljs$core$IIndexed$_nth$arity$2(null,i__40428);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40438 = seq__40425;
var G__40439 = chunk__40426;
var G__40440 = count__40427;
var G__40441 = (i__40428 + (1));
seq__40425 = G__40438;
chunk__40426 = G__40439;
count__40427 = G__40440;
i__40428 = G__40441;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40425);
if(temp__5735__auto__){
var seq__40425__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40425__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40425__$1);
var G__40442 = cljs.core.chunk_rest(seq__40425__$1);
var G__40443 = c__4556__auto__;
var G__40444 = cljs.core.count(c__4556__auto__);
var G__40445 = (0);
seq__40425 = G__40442;
chunk__40426 = G__40443;
count__40427 = G__40444;
i__40428 = G__40445;
continue;
} else {
var k = cljs.core.first(seq__40425__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__40446 = cljs.core.next(seq__40425__$1);
var G__40447 = null;
var G__40448 = (0);
var G__40449 = (0);
seq__40425 = G__40446;
chunk__40426 = G__40447;
count__40427 = G__40448;
i__40428 = G__40449;
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
