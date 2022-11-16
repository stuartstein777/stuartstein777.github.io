goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__39788 = arguments.length;
switch (G__39788) {
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
var seq__39789 = cljs.core.seq(Object.keys(localStorage));
var chunk__39790 = null;
var count__39791 = (0);
var i__39792 = (0);
while(true){
if((i__39792 < count__39791)){
var k = chunk__39790.cljs$core$IIndexed$_nth$arity$2(null,i__39792);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39802 = seq__39789;
var G__39803 = chunk__39790;
var G__39804 = count__39791;
var G__39805 = (i__39792 + (1));
seq__39789 = G__39802;
chunk__39790 = G__39803;
count__39791 = G__39804;
i__39792 = G__39805;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39789);
if(temp__5735__auto__){
var seq__39789__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39789__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39789__$1);
var G__39807 = cljs.core.chunk_rest(seq__39789__$1);
var G__39808 = c__4556__auto__;
var G__39809 = cljs.core.count(c__4556__auto__);
var G__39810 = (0);
seq__39789 = G__39807;
chunk__39790 = G__39808;
count__39791 = G__39809;
i__39792 = G__39810;
continue;
} else {
var k = cljs.core.first(seq__39789__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__39812 = cljs.core.next(seq__39789__$1);
var G__39813 = null;
var G__39814 = (0);
var G__39815 = (0);
seq__39789 = G__39812;
chunk__39790 = G__39813;
count__39791 = G__39814;
i__39792 = G__39815;
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
