goog.provide('exfn.shared.error');
exfn.shared.error.error_indicator = (function exfn$shared$error$error_indicator(p__33073,current_page){
var map__33074 = p__33073;
var map__33074__$1 = cljs.core.__destructure_map(map__33074);
var error = map__33074__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33074__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(error)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"none","none",1333468478))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),status], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),status_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),uri], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.vals(response))], null)], null)], null);
});

//# sourceMappingURL=exfn.shared.error.js.map
