goog.provide('exfn.helpers');
exfn.helpers.get_source_line_numbers = (function exfn$helpers$get_source_line_numbers(source){
return new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30003,i){
var map__30004 = p__30003;
var map__30004__$1 = (((((!((map__30004 == null))))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30004):map__30004);
var acc = map__30004__$1;
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,new cljs.core.Keyword(null,"cur","cur",1153190599));
var line_nos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30004__$1,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",i)) || (clojure.string.starts_with_QMARK_(i,";")))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_nos),"\n"].join(''));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_nos),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur),"\n"].join('')),new cljs.core.Keyword(null,"cur","cur",1153190599),cljs.core.inc);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line-nos","line-nos",-1830843435),""], null),clojure.string.split.cljs$core$IFn$_invoke$arity$3(source,/\r?\n/,(-1))));
});

//# sourceMappingURL=exfn.helpers.js.map
