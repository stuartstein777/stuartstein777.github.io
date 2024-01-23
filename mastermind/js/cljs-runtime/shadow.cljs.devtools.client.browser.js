goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46481 = arguments.length;
var i__4737__auto___46482 = (0);
while(true){
if((i__4737__auto___46482 < len__4736__auto___46481)){
args__4742__auto__.push((arguments[i__4737__auto___46482]));

var G__46483 = (i__4737__auto___46482 + (1));
i__4737__auto___46482 = G__46483;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46331){
var G__46332 = cljs.core.first(seq46331);
var seq46331__$1 = cljs.core.next(seq46331);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46332,seq46331__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46336 = cljs.core.seq(sources);
var chunk__46337 = null;
var count__46338 = (0);
var i__46339 = (0);
while(true){
if((i__46339 < count__46338)){
var map__46348 = chunk__46337.cljs$core$IIndexed$_nth$arity$2(null,i__46339);
var map__46348__$1 = (((((!((map__46348 == null))))?(((((map__46348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46348):map__46348);
var src = map__46348__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46348__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46350){var e_46484 = e46350;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46484);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46484.message)].join('')));
}

var G__46485 = seq__46336;
var G__46486 = chunk__46337;
var G__46487 = count__46338;
var G__46488 = (i__46339 + (1));
seq__46336 = G__46485;
chunk__46337 = G__46486;
count__46338 = G__46487;
i__46339 = G__46488;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46336);
if(temp__5735__auto__){
var seq__46336__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46336__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46336__$1);
var G__46489 = cljs.core.chunk_rest(seq__46336__$1);
var G__46490 = c__4556__auto__;
var G__46491 = cljs.core.count(c__4556__auto__);
var G__46492 = (0);
seq__46336 = G__46489;
chunk__46337 = G__46490;
count__46338 = G__46491;
i__46339 = G__46492;
continue;
} else {
var map__46351 = cljs.core.first(seq__46336__$1);
var map__46351__$1 = (((((!((map__46351 == null))))?(((((map__46351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46351):map__46351);
var src = map__46351__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46351__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46353){var e_46493 = e46353;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46493);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46493.message)].join('')));
}

var G__46494 = cljs.core.next(seq__46336__$1);
var G__46495 = null;
var G__46496 = (0);
var G__46497 = (0);
seq__46336 = G__46494;
chunk__46337 = G__46495;
count__46338 = G__46496;
i__46339 = G__46497;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__46356 = cljs.core.seq(js_requires);
var chunk__46357 = null;
var count__46358 = (0);
var i__46359 = (0);
while(true){
if((i__46359 < count__46358)){
var js_ns = chunk__46357.cljs$core$IIndexed$_nth$arity$2(null,i__46359);
var require_str_46498 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46498);


var G__46499 = seq__46356;
var G__46500 = chunk__46357;
var G__46501 = count__46358;
var G__46502 = (i__46359 + (1));
seq__46356 = G__46499;
chunk__46357 = G__46500;
count__46358 = G__46501;
i__46359 = G__46502;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46356);
if(temp__5735__auto__){
var seq__46356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46356__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46356__$1);
var G__46503 = cljs.core.chunk_rest(seq__46356__$1);
var G__46504 = c__4556__auto__;
var G__46505 = cljs.core.count(c__4556__auto__);
var G__46506 = (0);
seq__46356 = G__46503;
chunk__46357 = G__46504;
count__46358 = G__46505;
i__46359 = G__46506;
continue;
} else {
var js_ns = cljs.core.first(seq__46356__$1);
var require_str_46507 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46507);


var G__46508 = cljs.core.next(seq__46356__$1);
var G__46509 = null;
var G__46510 = (0);
var G__46511 = (0);
seq__46356 = G__46508;
chunk__46357 = G__46509;
count__46358 = G__46510;
i__46359 = G__46511;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46361){
var map__46362 = p__46361;
var map__46362__$1 = (((((!((map__46362 == null))))?(((((map__46362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46362):map__46362);
var msg = map__46362__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46362__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46364(s__46365){
return (new cljs.core.LazySeq(null,(function (){
var s__46365__$1 = s__46365;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46365__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46370 = cljs.core.first(xs__6292__auto__);
var map__46370__$1 = (((((!((map__46370 == null))))?(((((map__46370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46370):map__46370);
var src = map__46370__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46370__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46365__$1,map__46370,map__46370__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46362,map__46362__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46364_$_iter__46366(s__46367){
return (new cljs.core.LazySeq(null,((function (s__46365__$1,map__46370,map__46370__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46362,map__46362__$1,msg,info,reload_info){
return (function (){
var s__46367__$1 = s__46367;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46367__$1);
if(temp__5735__auto____$1){
var s__46367__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46367__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46367__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46369 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46368 = (0);
while(true){
if((i__46368 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46368);
cljs.core.chunk_append(b__46369,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46512 = (i__46368 + (1));
i__46368 = G__46512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46369),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46364_$_iter__46366(cljs.core.chunk_rest(s__46367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46369),null);
}
} else {
var warning = cljs.core.first(s__46367__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46364_$_iter__46366(cljs.core.rest(s__46367__$2)));
}
} else {
return null;
}
break;
}
});})(s__46365__$1,map__46370,map__46370__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46362,map__46362__$1,msg,info,reload_info))
,null,null));
});})(s__46365__$1,map__46370,map__46370__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46362,map__46362__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46364(cljs.core.rest(s__46365__$1)));
} else {
var G__46513 = cljs.core.rest(s__46365__$1);
s__46365__$1 = G__46513;
continue;
}
} else {
var G__46514 = cljs.core.rest(s__46365__$1);
s__46365__$1 = G__46514;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46372_46515 = cljs.core.seq(warnings);
var chunk__46373_46516 = null;
var count__46374_46517 = (0);
var i__46375_46518 = (0);
while(true){
if((i__46375_46518 < count__46374_46517)){
var map__46380_46519 = chunk__46373_46516.cljs$core$IIndexed$_nth$arity$2(null,i__46375_46518);
var map__46380_46520__$1 = (((((!((map__46380_46519 == null))))?(((((map__46380_46519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46380_46519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46380_46519):map__46380_46519);
var w_46521 = map__46380_46520__$1;
var msg_46522__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46380_46520__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46380_46520__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46380_46520__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46380_46520__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46525)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46523),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46524),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46522__$1)].join(''));


var G__46526 = seq__46372_46515;
var G__46527 = chunk__46373_46516;
var G__46528 = count__46374_46517;
var G__46529 = (i__46375_46518 + (1));
seq__46372_46515 = G__46526;
chunk__46373_46516 = G__46527;
count__46374_46517 = G__46528;
i__46375_46518 = G__46529;
continue;
} else {
var temp__5735__auto___46530 = cljs.core.seq(seq__46372_46515);
if(temp__5735__auto___46530){
var seq__46372_46531__$1 = temp__5735__auto___46530;
if(cljs.core.chunked_seq_QMARK_(seq__46372_46531__$1)){
var c__4556__auto___46532 = cljs.core.chunk_first(seq__46372_46531__$1);
var G__46533 = cljs.core.chunk_rest(seq__46372_46531__$1);
var G__46534 = c__4556__auto___46532;
var G__46535 = cljs.core.count(c__4556__auto___46532);
var G__46536 = (0);
seq__46372_46515 = G__46533;
chunk__46373_46516 = G__46534;
count__46374_46517 = G__46535;
i__46375_46518 = G__46536;
continue;
} else {
var map__46382_46537 = cljs.core.first(seq__46372_46531__$1);
var map__46382_46538__$1 = (((((!((map__46382_46537 == null))))?(((((map__46382_46537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46382_46537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46382_46537):map__46382_46537);
var w_46539 = map__46382_46538__$1;
var msg_46540__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382_46538__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382_46538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382_46538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46382_46538__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46543)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46541),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46542),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46540__$1)].join(''));


var G__46544 = cljs.core.next(seq__46372_46531__$1);
var G__46545 = null;
var G__46546 = (0);
var G__46547 = (0);
seq__46372_46515 = G__46544;
chunk__46373_46516 = G__46545;
count__46374_46517 = G__46546;
i__46375_46518 = G__46547;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46360_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46360_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46384){
var map__46385 = p__46384;
var map__46385__$1 = (((((!((map__46385 == null))))?(((((map__46385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46385):map__46385);
var msg = map__46385__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46385__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46387 = cljs.core.seq(updates);
var chunk__46389 = null;
var count__46390 = (0);
var i__46391 = (0);
while(true){
if((i__46391 < count__46390)){
var path = chunk__46389.cljs$core$IIndexed$_nth$arity$2(null,i__46391);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46421_46548 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46425_46549 = null;
var count__46426_46550 = (0);
var i__46427_46551 = (0);
while(true){
if((i__46427_46551 < count__46426_46550)){
var node_46552 = chunk__46425_46549.cljs$core$IIndexed$_nth$arity$2(null,i__46427_46551);
if(cljs.core.not(node_46552.shadow$old)){
var path_match_46553 = shadow.cljs.devtools.client.browser.match_paths(node_46552.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46553)){
var new_link_46554 = (function (){var G__46433 = node_46552.cloneNode(true);
G__46433.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46553),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46433;
})();
(node_46552.shadow$old = true);

(new_link_46554.onload = ((function (seq__46421_46548,chunk__46425_46549,count__46426_46550,i__46427_46551,seq__46387,chunk__46389,count__46390,i__46391,new_link_46554,path_match_46553,node_46552,path,map__46385,map__46385__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46552);
});})(seq__46421_46548,chunk__46425_46549,count__46426_46550,i__46427_46551,seq__46387,chunk__46389,count__46390,i__46391,new_link_46554,path_match_46553,node_46552,path,map__46385,map__46385__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46553], 0));

goog.dom.insertSiblingAfter(new_link_46554,node_46552);


var G__46555 = seq__46421_46548;
var G__46556 = chunk__46425_46549;
var G__46557 = count__46426_46550;
var G__46558 = (i__46427_46551 + (1));
seq__46421_46548 = G__46555;
chunk__46425_46549 = G__46556;
count__46426_46550 = G__46557;
i__46427_46551 = G__46558;
continue;
} else {
var G__46559 = seq__46421_46548;
var G__46560 = chunk__46425_46549;
var G__46561 = count__46426_46550;
var G__46562 = (i__46427_46551 + (1));
seq__46421_46548 = G__46559;
chunk__46425_46549 = G__46560;
count__46426_46550 = G__46561;
i__46427_46551 = G__46562;
continue;
}
} else {
var G__46563 = seq__46421_46548;
var G__46564 = chunk__46425_46549;
var G__46565 = count__46426_46550;
var G__46566 = (i__46427_46551 + (1));
seq__46421_46548 = G__46563;
chunk__46425_46549 = G__46564;
count__46426_46550 = G__46565;
i__46427_46551 = G__46566;
continue;
}
} else {
var temp__5735__auto___46567 = cljs.core.seq(seq__46421_46548);
if(temp__5735__auto___46567){
var seq__46421_46568__$1 = temp__5735__auto___46567;
if(cljs.core.chunked_seq_QMARK_(seq__46421_46568__$1)){
var c__4556__auto___46569 = cljs.core.chunk_first(seq__46421_46568__$1);
var G__46570 = cljs.core.chunk_rest(seq__46421_46568__$1);
var G__46571 = c__4556__auto___46569;
var G__46572 = cljs.core.count(c__4556__auto___46569);
var G__46573 = (0);
seq__46421_46548 = G__46570;
chunk__46425_46549 = G__46571;
count__46426_46550 = G__46572;
i__46427_46551 = G__46573;
continue;
} else {
var node_46574 = cljs.core.first(seq__46421_46568__$1);
if(cljs.core.not(node_46574.shadow$old)){
var path_match_46575 = shadow.cljs.devtools.client.browser.match_paths(node_46574.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46575)){
var new_link_46576 = (function (){var G__46434 = node_46574.cloneNode(true);
G__46434.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46575),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46434;
})();
(node_46574.shadow$old = true);

(new_link_46576.onload = ((function (seq__46421_46548,chunk__46425_46549,count__46426_46550,i__46427_46551,seq__46387,chunk__46389,count__46390,i__46391,new_link_46576,path_match_46575,node_46574,seq__46421_46568__$1,temp__5735__auto___46567,path,map__46385,map__46385__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46574);
});})(seq__46421_46548,chunk__46425_46549,count__46426_46550,i__46427_46551,seq__46387,chunk__46389,count__46390,i__46391,new_link_46576,path_match_46575,node_46574,seq__46421_46568__$1,temp__5735__auto___46567,path,map__46385,map__46385__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46575], 0));

goog.dom.insertSiblingAfter(new_link_46576,node_46574);


var G__46577 = cljs.core.next(seq__46421_46568__$1);
var G__46578 = null;
var G__46579 = (0);
var G__46580 = (0);
seq__46421_46548 = G__46577;
chunk__46425_46549 = G__46578;
count__46426_46550 = G__46579;
i__46427_46551 = G__46580;
continue;
} else {
var G__46581 = cljs.core.next(seq__46421_46568__$1);
var G__46582 = null;
var G__46583 = (0);
var G__46584 = (0);
seq__46421_46548 = G__46581;
chunk__46425_46549 = G__46582;
count__46426_46550 = G__46583;
i__46427_46551 = G__46584;
continue;
}
} else {
var G__46585 = cljs.core.next(seq__46421_46568__$1);
var G__46586 = null;
var G__46587 = (0);
var G__46588 = (0);
seq__46421_46548 = G__46585;
chunk__46425_46549 = G__46586;
count__46426_46550 = G__46587;
i__46427_46551 = G__46588;
continue;
}
}
} else {
}
}
break;
}


var G__46589 = seq__46387;
var G__46590 = chunk__46389;
var G__46591 = count__46390;
var G__46592 = (i__46391 + (1));
seq__46387 = G__46589;
chunk__46389 = G__46590;
count__46390 = G__46591;
i__46391 = G__46592;
continue;
} else {
var G__46593 = seq__46387;
var G__46594 = chunk__46389;
var G__46595 = count__46390;
var G__46596 = (i__46391 + (1));
seq__46387 = G__46593;
chunk__46389 = G__46594;
count__46390 = G__46595;
i__46391 = G__46596;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46387);
if(temp__5735__auto__){
var seq__46387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46387__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46387__$1);
var G__46597 = cljs.core.chunk_rest(seq__46387__$1);
var G__46598 = c__4556__auto__;
var G__46599 = cljs.core.count(c__4556__auto__);
var G__46600 = (0);
seq__46387 = G__46597;
chunk__46389 = G__46598;
count__46390 = G__46599;
i__46391 = G__46600;
continue;
} else {
var path = cljs.core.first(seq__46387__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46435_46601 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46439_46602 = null;
var count__46440_46603 = (0);
var i__46441_46604 = (0);
while(true){
if((i__46441_46604 < count__46440_46603)){
var node_46605 = chunk__46439_46602.cljs$core$IIndexed$_nth$arity$2(null,i__46441_46604);
if(cljs.core.not(node_46605.shadow$old)){
var path_match_46606 = shadow.cljs.devtools.client.browser.match_paths(node_46605.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46606)){
var new_link_46607 = (function (){var G__46447 = node_46605.cloneNode(true);
G__46447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46606),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46447;
})();
(node_46605.shadow$old = true);

(new_link_46607.onload = ((function (seq__46435_46601,chunk__46439_46602,count__46440_46603,i__46441_46604,seq__46387,chunk__46389,count__46390,i__46391,new_link_46607,path_match_46606,node_46605,path,seq__46387__$1,temp__5735__auto__,map__46385,map__46385__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46605);
});})(seq__46435_46601,chunk__46439_46602,count__46440_46603,i__46441_46604,seq__46387,chunk__46389,count__46390,i__46391,new_link_46607,path_match_46606,node_46605,path,seq__46387__$1,temp__5735__auto__,map__46385,map__46385__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46606], 0));

goog.dom.insertSiblingAfter(new_link_46607,node_46605);


var G__46608 = seq__46435_46601;
var G__46609 = chunk__46439_46602;
var G__46610 = count__46440_46603;
var G__46611 = (i__46441_46604 + (1));
seq__46435_46601 = G__46608;
chunk__46439_46602 = G__46609;
count__46440_46603 = G__46610;
i__46441_46604 = G__46611;
continue;
} else {
var G__46612 = seq__46435_46601;
var G__46613 = chunk__46439_46602;
var G__46614 = count__46440_46603;
var G__46615 = (i__46441_46604 + (1));
seq__46435_46601 = G__46612;
chunk__46439_46602 = G__46613;
count__46440_46603 = G__46614;
i__46441_46604 = G__46615;
continue;
}
} else {
var G__46616 = seq__46435_46601;
var G__46617 = chunk__46439_46602;
var G__46618 = count__46440_46603;
var G__46619 = (i__46441_46604 + (1));
seq__46435_46601 = G__46616;
chunk__46439_46602 = G__46617;
count__46440_46603 = G__46618;
i__46441_46604 = G__46619;
continue;
}
} else {
var temp__5735__auto___46620__$1 = cljs.core.seq(seq__46435_46601);
if(temp__5735__auto___46620__$1){
var seq__46435_46621__$1 = temp__5735__auto___46620__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46435_46621__$1)){
var c__4556__auto___46622 = cljs.core.chunk_first(seq__46435_46621__$1);
var G__46623 = cljs.core.chunk_rest(seq__46435_46621__$1);
var G__46624 = c__4556__auto___46622;
var G__46625 = cljs.core.count(c__4556__auto___46622);
var G__46626 = (0);
seq__46435_46601 = G__46623;
chunk__46439_46602 = G__46624;
count__46440_46603 = G__46625;
i__46441_46604 = G__46626;
continue;
} else {
var node_46627 = cljs.core.first(seq__46435_46621__$1);
if(cljs.core.not(node_46627.shadow$old)){
var path_match_46628 = shadow.cljs.devtools.client.browser.match_paths(node_46627.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46628)){
var new_link_46629 = (function (){var G__46448 = node_46627.cloneNode(true);
G__46448.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46628),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46448;
})();
(node_46627.shadow$old = true);

(new_link_46629.onload = ((function (seq__46435_46601,chunk__46439_46602,count__46440_46603,i__46441_46604,seq__46387,chunk__46389,count__46390,i__46391,new_link_46629,path_match_46628,node_46627,seq__46435_46621__$1,temp__5735__auto___46620__$1,path,seq__46387__$1,temp__5735__auto__,map__46385,map__46385__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46627);
});})(seq__46435_46601,chunk__46439_46602,count__46440_46603,i__46441_46604,seq__46387,chunk__46389,count__46390,i__46391,new_link_46629,path_match_46628,node_46627,seq__46435_46621__$1,temp__5735__auto___46620__$1,path,seq__46387__$1,temp__5735__auto__,map__46385,map__46385__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46628], 0));

goog.dom.insertSiblingAfter(new_link_46629,node_46627);


var G__46630 = cljs.core.next(seq__46435_46621__$1);
var G__46631 = null;
var G__46632 = (0);
var G__46633 = (0);
seq__46435_46601 = G__46630;
chunk__46439_46602 = G__46631;
count__46440_46603 = G__46632;
i__46441_46604 = G__46633;
continue;
} else {
var G__46634 = cljs.core.next(seq__46435_46621__$1);
var G__46635 = null;
var G__46636 = (0);
var G__46637 = (0);
seq__46435_46601 = G__46634;
chunk__46439_46602 = G__46635;
count__46440_46603 = G__46636;
i__46441_46604 = G__46637;
continue;
}
} else {
var G__46638 = cljs.core.next(seq__46435_46621__$1);
var G__46639 = null;
var G__46640 = (0);
var G__46641 = (0);
seq__46435_46601 = G__46638;
chunk__46439_46602 = G__46639;
count__46440_46603 = G__46640;
i__46441_46604 = G__46641;
continue;
}
}
} else {
}
}
break;
}


var G__46642 = cljs.core.next(seq__46387__$1);
var G__46643 = null;
var G__46644 = (0);
var G__46645 = (0);
seq__46387 = G__46642;
chunk__46389 = G__46643;
count__46390 = G__46644;
i__46391 = G__46645;
continue;
} else {
var G__46646 = cljs.core.next(seq__46387__$1);
var G__46647 = null;
var G__46648 = (0);
var G__46649 = (0);
seq__46387 = G__46646;
chunk__46389 = G__46647;
count__46390 = G__46648;
i__46391 = G__46649;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46449){
var map__46450 = p__46449;
var map__46450__$1 = (((((!((map__46450 == null))))?(((((map__46450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46450):map__46450);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46450__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46452){
var map__46453 = p__46452;
var map__46453__$1 = (((((!((map__46453 == null))))?(((((map__46453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46453):map__46453);
var _ = map__46453__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46455,done,error){
var map__46456 = p__46455;
var map__46456__$1 = (((((!((map__46456 == null))))?(((((map__46456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46456):map__46456);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46456__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46458,done,error){
var map__46459 = p__46458;
var map__46459__$1 = (((((!((map__46459 == null))))?(((((map__46459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46459):map__46459);
var msg = map__46459__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46459__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46459__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46459__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46461){
var map__46462 = p__46461;
var map__46462__$1 = (((((!((map__46462 == null))))?(((((map__46462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46462):map__46462);
var src = map__46462__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46462__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46464 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46464) : done.call(null,G__46464));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46465){
var map__46466 = p__46465;
var map__46466__$1 = (((((!((map__46466 == null))))?(((((map__46466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46466):map__46466);
var msg__$1 = map__46466__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46466__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46468){var ex = e46468;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46469){
var map__46470 = p__46469;
var map__46470__$1 = (((((!((map__46470 == null))))?(((((map__46470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46470):map__46470);
var env = map__46470__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46470__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46472){
var map__46473 = p__46472;
var map__46473__$1 = (((((!((map__46473 == null))))?(((((map__46473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46473):map__46473);
var msg = map__46473__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46473__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46475){
var map__46476 = p__46475;
var map__46476__$1 = (((((!((map__46476 == null))))?(((((map__46476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46476):map__46476);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46476__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46476__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__46478){
var map__46479 = p__46478;
var map__46479__$1 = (((((!((map__46479 == null))))?(((((map__46479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46479):map__46479);
var svc = map__46479__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46479__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
