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
var G__39890 = arguments.length;
switch (G__39890) {
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
var seq__39895 = cljs.core.seq(Object.keys(localStorage));
var chunk__39896 = null;
var count__39897 = (0);
var i__39898 = (0);
while(true){
if((i__39898 < count__39897)){
var k = chunk__39896.cljs$core$IIndexed$_nth$arity$2(null,i__39898);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39900 = seq__39895;
var G__39901 = chunk__39896;
var G__39902 = count__39897;
var G__39903 = (i__39898 + (1));
seq__39895 = G__39900;
chunk__39896 = G__39901;
count__39897 = G__39902;
i__39898 = G__39903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39895);
if(temp__5753__auto__){
var seq__39895__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39895__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39895__$1);
var G__39904 = cljs.core.chunk_rest(seq__39895__$1);
var G__39905 = c__4649__auto__;
var G__39906 = cljs.core.count(c__4649__auto__);
var G__39907 = (0);
seq__39895 = G__39904;
chunk__39896 = G__39905;
count__39897 = G__39906;
i__39898 = G__39907;
continue;
} else {
var k = cljs.core.first(seq__39895__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39908 = cljs.core.next(seq__39895__$1);
var G__39909 = null;
var G__39910 = (0);
var G__39911 = (0);
seq__39895 = G__39908;
chunk__39896 = G__39909;
count__39897 = G__39910;
i__39898 = G__39911;
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
