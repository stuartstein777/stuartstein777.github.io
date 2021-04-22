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
var G__33779 = arguments.length;
switch (G__33779) {
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
var seq__33783 = cljs.core.seq(Object.keys(localStorage));
var chunk__33784 = null;
var count__33785 = (0);
var i__33786 = (0);
while(true){
if((i__33786 < count__33785)){
var k = chunk__33784.cljs$core$IIndexed$_nth$arity$2(null,i__33786);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33796 = seq__33783;
var G__33797 = chunk__33784;
var G__33798 = count__33785;
var G__33799 = (i__33786 + (1));
seq__33783 = G__33796;
chunk__33784 = G__33797;
count__33785 = G__33798;
i__33786 = G__33799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33783);
if(temp__5735__auto__){
var seq__33783__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33783__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33783__$1);
var G__33800 = cljs.core.chunk_rest(seq__33783__$1);
var G__33801 = c__4556__auto__;
var G__33802 = cljs.core.count(c__4556__auto__);
var G__33803 = (0);
seq__33783 = G__33800;
chunk__33784 = G__33801;
count__33785 = G__33802;
i__33786 = G__33803;
continue;
} else {
var k = cljs.core.first(seq__33783__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33804 = cljs.core.next(seq__33783__$1);
var G__33805 = null;
var G__33806 = (0);
var G__33807 = (0);
seq__33783 = G__33804;
chunk__33784 = G__33805;
count__33785 = G__33806;
i__33786 = G__33807;
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
