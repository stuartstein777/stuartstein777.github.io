goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33341 = arguments.length;
var i__5770__auto___33342 = (0);
while(true){
if((i__5770__auto___33342 < len__5769__auto___33341)){
args__5775__auto__.push((arguments[i__5770__auto___33342]));

var G__33343 = (i__5770__auto___33342 + (1));
i__5770__auto___33342 = G__33343;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32693){
var G__32694 = cljs.core.first(seq32693);
var seq32693__$1 = cljs.core.next(seq32693);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32694,seq32693__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32703 = cljs.core.seq(sources);
var chunk__32704 = null;
var count__32705 = (0);
var i__32706 = (0);
while(true){
if((i__32706 < count__32705)){
var map__32715 = chunk__32704.cljs$core$IIndexed$_nth$arity$2(null,i__32706);
var map__32715__$1 = cljs.core.__destructure_map(map__32715);
var src = map__32715__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32715__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32717){var e_33344 = e32717;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_33344);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33344.message)].join('')));
}

var G__33345 = seq__32703;
var G__33346 = chunk__32704;
var G__33347 = count__32705;
var G__33348 = (i__32706 + (1));
seq__32703 = G__33345;
chunk__32704 = G__33346;
count__32705 = G__33347;
i__32706 = G__33348;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32703);
if(temp__5804__auto__){
var seq__32703__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32703__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32703__$1);
var G__33349 = cljs.core.chunk_rest(seq__32703__$1);
var G__33350 = c__5568__auto__;
var G__33351 = cljs.core.count(c__5568__auto__);
var G__33352 = (0);
seq__32703 = G__33349;
chunk__32704 = G__33350;
count__32705 = G__33351;
i__32706 = G__33352;
continue;
} else {
var map__32790 = cljs.core.first(seq__32703__$1);
var map__32790__$1 = cljs.core.__destructure_map(map__32790);
var src = map__32790__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32790__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32790__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32790__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32790__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32791){var e_33353 = e32791;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_33353);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33353.message)].join('')));
}

var G__33354 = cljs.core.next(seq__32703__$1);
var G__33355 = null;
var G__33356 = (0);
var G__33357 = (0);
seq__32703 = G__33354;
chunk__32704 = G__33355;
count__32705 = G__33356;
i__32706 = G__33357;
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
var seq__32792 = cljs.core.seq(js_requires);
var chunk__32793 = null;
var count__32794 = (0);
var i__32795 = (0);
while(true){
if((i__32795 < count__32794)){
var js_ns = chunk__32793.cljs$core$IIndexed$_nth$arity$2(null,i__32795);
var require_str_33358 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33358);


var G__33359 = seq__32792;
var G__33360 = chunk__32793;
var G__33361 = count__32794;
var G__33362 = (i__32795 + (1));
seq__32792 = G__33359;
chunk__32793 = G__33360;
count__32794 = G__33361;
i__32795 = G__33362;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32792);
if(temp__5804__auto__){
var seq__32792__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32792__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32792__$1);
var G__33363 = cljs.core.chunk_rest(seq__32792__$1);
var G__33364 = c__5568__auto__;
var G__33365 = cljs.core.count(c__5568__auto__);
var G__33366 = (0);
seq__32792 = G__33363;
chunk__32793 = G__33364;
count__32794 = G__33365;
i__32795 = G__33366;
continue;
} else {
var js_ns = cljs.core.first(seq__32792__$1);
var require_str_33367 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33367);


var G__33368 = cljs.core.next(seq__32792__$1);
var G__33369 = null;
var G__33370 = (0);
var G__33371 = (0);
seq__32792 = G__33368;
chunk__32793 = G__33369;
count__32794 = G__33370;
i__32795 = G__33371;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__32825){
var map__32826 = p__32825;
var map__32826__$1 = cljs.core.__destructure_map(map__32826);
var msg = map__32826__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32826__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32826__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32827(s__32828){
return (new cljs.core.LazySeq(null,(function (){
var s__32828__$1 = s__32828;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__32828__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__32833 = cljs.core.first(xs__6360__auto__);
var map__32833__$1 = cljs.core.__destructure_map(map__32833);
var src = map__32833__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32833__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__32828__$1,map__32833,map__32833__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32826,map__32826__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32827_$_iter__32829(s__32830){
return (new cljs.core.LazySeq(null,((function (s__32828__$1,map__32833,map__32833__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32826,map__32826__$1,msg,info,reload_info){
return (function (){
var s__32830__$1 = s__32830;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__32830__$1);
if(temp__5804__auto____$1){
var s__32830__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32830__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__32830__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__32832 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__32831 = (0);
while(true){
if((i__32831 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__32831);
cljs.core.chunk_append(b__32832,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33377 = (i__32831 + (1));
i__32831 = G__33377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32832),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32827_$_iter__32829(cljs.core.chunk_rest(s__32830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32832),null);
}
} else {
var warning = cljs.core.first(s__32830__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32827_$_iter__32829(cljs.core.rest(s__32830__$2)));
}
} else {
return null;
}
break;
}
});})(s__32828__$1,map__32833,map__32833__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32826,map__32826__$1,msg,info,reload_info))
,null,null));
});})(s__32828__$1,map__32833,map__32833__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__32826,map__32826__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32827(cljs.core.rest(s__32828__$1)));
} else {
var G__33378 = cljs.core.rest(s__32828__$1);
s__32828__$1 = G__33378;
continue;
}
} else {
var G__33379 = cljs.core.rest(s__32828__$1);
s__32828__$1 = G__33379;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__32834_33380 = cljs.core.seq(warnings);
var chunk__32835_33381 = null;
var count__32836_33382 = (0);
var i__32837_33383 = (0);
while(true){
if((i__32837_33383 < count__32836_33382)){
var map__32840_33384 = chunk__32835_33381.cljs$core$IIndexed$_nth$arity$2(null,i__32837_33383);
var map__32840_33385__$1 = cljs.core.__destructure_map(map__32840_33384);
var w_33386 = map__32840_33385__$1;
var msg_33387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32840_33385__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32840_33385__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32840_33385__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32840_33385__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33390)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33388),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33389),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33387__$1)].join(''));


var G__33391 = seq__32834_33380;
var G__33392 = chunk__32835_33381;
var G__33393 = count__32836_33382;
var G__33394 = (i__32837_33383 + (1));
seq__32834_33380 = G__33391;
chunk__32835_33381 = G__33392;
count__32836_33382 = G__33393;
i__32837_33383 = G__33394;
continue;
} else {
var temp__5804__auto___33395 = cljs.core.seq(seq__32834_33380);
if(temp__5804__auto___33395){
var seq__32834_33396__$1 = temp__5804__auto___33395;
if(cljs.core.chunked_seq_QMARK_(seq__32834_33396__$1)){
var c__5568__auto___33397 = cljs.core.chunk_first(seq__32834_33396__$1);
var G__33398 = cljs.core.chunk_rest(seq__32834_33396__$1);
var G__33399 = c__5568__auto___33397;
var G__33400 = cljs.core.count(c__5568__auto___33397);
var G__33401 = (0);
seq__32834_33380 = G__33398;
chunk__32835_33381 = G__33399;
count__32836_33382 = G__33400;
i__32837_33383 = G__33401;
continue;
} else {
var map__32841_33402 = cljs.core.first(seq__32834_33396__$1);
var map__32841_33403__$1 = cljs.core.__destructure_map(map__32841_33402);
var w_33404 = map__32841_33403__$1;
var msg_33405__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841_33403__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841_33403__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841_33403__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32841_33403__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33408)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33406),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33407),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33405__$1)].join(''));


var G__33409 = cljs.core.next(seq__32834_33396__$1);
var G__33410 = null;
var G__33411 = (0);
var G__33412 = (0);
seq__32834_33380 = G__33409;
chunk__32835_33381 = G__33410;
count__32836_33382 = G__33411;
i__32837_33383 = G__33412;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__32798_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32798_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__32860){
var map__32861 = p__32860;
var map__32861__$1 = cljs.core.__destructure_map(map__32861);
var msg = map__32861__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32861__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__32864 = cljs.core.seq(updates);
var chunk__32866 = null;
var count__32867 = (0);
var i__32868 = (0);
while(true){
if((i__32868 < count__32867)){
var path = chunk__32866.cljs$core$IIndexed$_nth$arity$2(null,i__32868);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33093_33413 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33097_33414 = null;
var count__33098_33415 = (0);
var i__33099_33416 = (0);
while(true){
if((i__33099_33416 < count__33098_33415)){
var node_33417 = chunk__33097_33414.cljs$core$IIndexed$_nth$arity$2(null,i__33099_33416);
if(cljs.core.not(node_33417.shadow$old)){
var path_match_33418 = shadow.cljs.devtools.client.browser.match_paths(node_33417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33418)){
var new_link_33419 = (function (){var G__33128 = node_33417.cloneNode(true);
G__33128.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33128;
})();
(node_33417.shadow$old = true);

(new_link_33419.onload = ((function (seq__33093_33413,chunk__33097_33414,count__33098_33415,i__33099_33416,seq__32864,chunk__32866,count__32867,i__32868,new_link_33419,path_match_33418,node_33417,path,map__32861,map__32861__$1,msg,updates,reload_info){
return (function (e){
var seq__33129_33420 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33131_33421 = null;
var count__33132_33422 = (0);
var i__33133_33423 = (0);
while(true){
if((i__33133_33423 < count__33132_33422)){
var map__33145_33424 = chunk__33131_33421.cljs$core$IIndexed$_nth$arity$2(null,i__33133_33423);
var map__33145_33425__$1 = cljs.core.__destructure_map(map__33145_33424);
var task_33426 = map__33145_33425__$1;
var fn_str_33427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33145_33425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33145_33425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33429 = goog.getObjectByName(fn_str_33427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33428)].join(''));

(fn_obj_33429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33429.cljs$core$IFn$_invoke$arity$2(path,new_link_33419) : fn_obj_33429.call(null,path,new_link_33419));


var G__33430 = seq__33129_33420;
var G__33431 = chunk__33131_33421;
var G__33432 = count__33132_33422;
var G__33433 = (i__33133_33423 + (1));
seq__33129_33420 = G__33430;
chunk__33131_33421 = G__33431;
count__33132_33422 = G__33432;
i__33133_33423 = G__33433;
continue;
} else {
var temp__5804__auto___33434 = cljs.core.seq(seq__33129_33420);
if(temp__5804__auto___33434){
var seq__33129_33435__$1 = temp__5804__auto___33434;
if(cljs.core.chunked_seq_QMARK_(seq__33129_33435__$1)){
var c__5568__auto___33436 = cljs.core.chunk_first(seq__33129_33435__$1);
var G__33437 = cljs.core.chunk_rest(seq__33129_33435__$1);
var G__33438 = c__5568__auto___33436;
var G__33439 = cljs.core.count(c__5568__auto___33436);
var G__33440 = (0);
seq__33129_33420 = G__33437;
chunk__33131_33421 = G__33438;
count__33132_33422 = G__33439;
i__33133_33423 = G__33440;
continue;
} else {
var map__33146_33441 = cljs.core.first(seq__33129_33435__$1);
var map__33146_33442__$1 = cljs.core.__destructure_map(map__33146_33441);
var task_33443 = map__33146_33442__$1;
var fn_str_33444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33146_33442__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33146_33442__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33446 = goog.getObjectByName(fn_str_33444,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33445)].join(''));

(fn_obj_33446.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33446.cljs$core$IFn$_invoke$arity$2(path,new_link_33419) : fn_obj_33446.call(null,path,new_link_33419));


var G__33447 = cljs.core.next(seq__33129_33435__$1);
var G__33448 = null;
var G__33449 = (0);
var G__33450 = (0);
seq__33129_33420 = G__33447;
chunk__33131_33421 = G__33448;
count__33132_33422 = G__33449;
i__33133_33423 = G__33450;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33417);
});})(seq__33093_33413,chunk__33097_33414,count__33098_33415,i__33099_33416,seq__32864,chunk__32866,count__32867,i__32868,new_link_33419,path_match_33418,node_33417,path,map__32861,map__32861__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33418], 0));

goog.dom.insertSiblingAfter(new_link_33419,node_33417);


var G__33451 = seq__33093_33413;
var G__33452 = chunk__33097_33414;
var G__33453 = count__33098_33415;
var G__33454 = (i__33099_33416 + (1));
seq__33093_33413 = G__33451;
chunk__33097_33414 = G__33452;
count__33098_33415 = G__33453;
i__33099_33416 = G__33454;
continue;
} else {
var G__33455 = seq__33093_33413;
var G__33456 = chunk__33097_33414;
var G__33457 = count__33098_33415;
var G__33458 = (i__33099_33416 + (1));
seq__33093_33413 = G__33455;
chunk__33097_33414 = G__33456;
count__33098_33415 = G__33457;
i__33099_33416 = G__33458;
continue;
}
} else {
var G__33459 = seq__33093_33413;
var G__33460 = chunk__33097_33414;
var G__33461 = count__33098_33415;
var G__33462 = (i__33099_33416 + (1));
seq__33093_33413 = G__33459;
chunk__33097_33414 = G__33460;
count__33098_33415 = G__33461;
i__33099_33416 = G__33462;
continue;
}
} else {
var temp__5804__auto___33463 = cljs.core.seq(seq__33093_33413);
if(temp__5804__auto___33463){
var seq__33093_33464__$1 = temp__5804__auto___33463;
if(cljs.core.chunked_seq_QMARK_(seq__33093_33464__$1)){
var c__5568__auto___33465 = cljs.core.chunk_first(seq__33093_33464__$1);
var G__33466 = cljs.core.chunk_rest(seq__33093_33464__$1);
var G__33467 = c__5568__auto___33465;
var G__33468 = cljs.core.count(c__5568__auto___33465);
var G__33469 = (0);
seq__33093_33413 = G__33466;
chunk__33097_33414 = G__33467;
count__33098_33415 = G__33468;
i__33099_33416 = G__33469;
continue;
} else {
var node_33470 = cljs.core.first(seq__33093_33464__$1);
if(cljs.core.not(node_33470.shadow$old)){
var path_match_33471 = shadow.cljs.devtools.client.browser.match_paths(node_33470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33471)){
var new_link_33472 = (function (){var G__33147 = node_33470.cloneNode(true);
G__33147.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33147;
})();
(node_33470.shadow$old = true);

(new_link_33472.onload = ((function (seq__33093_33413,chunk__33097_33414,count__33098_33415,i__33099_33416,seq__32864,chunk__32866,count__32867,i__32868,new_link_33472,path_match_33471,node_33470,seq__33093_33464__$1,temp__5804__auto___33463,path,map__32861,map__32861__$1,msg,updates,reload_info){
return (function (e){
var seq__33152_33473 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33154_33474 = null;
var count__33155_33475 = (0);
var i__33156_33476 = (0);
while(true){
if((i__33156_33476 < count__33155_33475)){
var map__33160_33477 = chunk__33154_33474.cljs$core$IIndexed$_nth$arity$2(null,i__33156_33476);
var map__33160_33478__$1 = cljs.core.__destructure_map(map__33160_33477);
var task_33479 = map__33160_33478__$1;
var fn_str_33480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33160_33478__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33160_33478__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33482 = goog.getObjectByName(fn_str_33480,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33481)].join(''));

(fn_obj_33482.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33482.cljs$core$IFn$_invoke$arity$2(path,new_link_33472) : fn_obj_33482.call(null,path,new_link_33472));


var G__33483 = seq__33152_33473;
var G__33484 = chunk__33154_33474;
var G__33485 = count__33155_33475;
var G__33486 = (i__33156_33476 + (1));
seq__33152_33473 = G__33483;
chunk__33154_33474 = G__33484;
count__33155_33475 = G__33485;
i__33156_33476 = G__33486;
continue;
} else {
var temp__5804__auto___33487__$1 = cljs.core.seq(seq__33152_33473);
if(temp__5804__auto___33487__$1){
var seq__33152_33488__$1 = temp__5804__auto___33487__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33152_33488__$1)){
var c__5568__auto___33489 = cljs.core.chunk_first(seq__33152_33488__$1);
var G__33490 = cljs.core.chunk_rest(seq__33152_33488__$1);
var G__33491 = c__5568__auto___33489;
var G__33492 = cljs.core.count(c__5568__auto___33489);
var G__33493 = (0);
seq__33152_33473 = G__33490;
chunk__33154_33474 = G__33491;
count__33155_33475 = G__33492;
i__33156_33476 = G__33493;
continue;
} else {
var map__33165_33494 = cljs.core.first(seq__33152_33488__$1);
var map__33165_33495__$1 = cljs.core.__destructure_map(map__33165_33494);
var task_33496 = map__33165_33495__$1;
var fn_str_33497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165_33495__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33165_33495__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33499 = goog.getObjectByName(fn_str_33497,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33498)].join(''));

(fn_obj_33499.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33499.cljs$core$IFn$_invoke$arity$2(path,new_link_33472) : fn_obj_33499.call(null,path,new_link_33472));


var G__33500 = cljs.core.next(seq__33152_33488__$1);
var G__33501 = null;
var G__33502 = (0);
var G__33503 = (0);
seq__33152_33473 = G__33500;
chunk__33154_33474 = G__33501;
count__33155_33475 = G__33502;
i__33156_33476 = G__33503;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33470);
});})(seq__33093_33413,chunk__33097_33414,count__33098_33415,i__33099_33416,seq__32864,chunk__32866,count__32867,i__32868,new_link_33472,path_match_33471,node_33470,seq__33093_33464__$1,temp__5804__auto___33463,path,map__32861,map__32861__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33471], 0));

goog.dom.insertSiblingAfter(new_link_33472,node_33470);


var G__33504 = cljs.core.next(seq__33093_33464__$1);
var G__33505 = null;
var G__33506 = (0);
var G__33507 = (0);
seq__33093_33413 = G__33504;
chunk__33097_33414 = G__33505;
count__33098_33415 = G__33506;
i__33099_33416 = G__33507;
continue;
} else {
var G__33508 = cljs.core.next(seq__33093_33464__$1);
var G__33509 = null;
var G__33510 = (0);
var G__33511 = (0);
seq__33093_33413 = G__33508;
chunk__33097_33414 = G__33509;
count__33098_33415 = G__33510;
i__33099_33416 = G__33511;
continue;
}
} else {
var G__33512 = cljs.core.next(seq__33093_33464__$1);
var G__33513 = null;
var G__33514 = (0);
var G__33515 = (0);
seq__33093_33413 = G__33512;
chunk__33097_33414 = G__33513;
count__33098_33415 = G__33514;
i__33099_33416 = G__33515;
continue;
}
}
} else {
}
}
break;
}


var G__33516 = seq__32864;
var G__33517 = chunk__32866;
var G__33518 = count__32867;
var G__33519 = (i__32868 + (1));
seq__32864 = G__33516;
chunk__32866 = G__33517;
count__32867 = G__33518;
i__32868 = G__33519;
continue;
} else {
var G__33520 = seq__32864;
var G__33521 = chunk__32866;
var G__33522 = count__32867;
var G__33523 = (i__32868 + (1));
seq__32864 = G__33520;
chunk__32866 = G__33521;
count__32867 = G__33522;
i__32868 = G__33523;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__32864);
if(temp__5804__auto__){
var seq__32864__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32864__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__32864__$1);
var G__33524 = cljs.core.chunk_rest(seq__32864__$1);
var G__33525 = c__5568__auto__;
var G__33526 = cljs.core.count(c__5568__auto__);
var G__33527 = (0);
seq__32864 = G__33524;
chunk__32866 = G__33525;
count__32867 = G__33526;
i__32868 = G__33527;
continue;
} else {
var path = cljs.core.first(seq__32864__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__33166_33528 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__33170_33529 = null;
var count__33171_33530 = (0);
var i__33172_33531 = (0);
while(true){
if((i__33172_33531 < count__33171_33530)){
var node_33532 = chunk__33170_33529.cljs$core$IIndexed$_nth$arity$2(null,i__33172_33531);
if(cljs.core.not(node_33532.shadow$old)){
var path_match_33533 = shadow.cljs.devtools.client.browser.match_paths(node_33532.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33533)){
var new_link_33534 = (function (){var G__33248 = node_33532.cloneNode(true);
G__33248.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33533),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33248;
})();
(node_33532.shadow$old = true);

(new_link_33534.onload = ((function (seq__33166_33528,chunk__33170_33529,count__33171_33530,i__33172_33531,seq__32864,chunk__32866,count__32867,i__32868,new_link_33534,path_match_33533,node_33532,path,seq__32864__$1,temp__5804__auto__,map__32861,map__32861__$1,msg,updates,reload_info){
return (function (e){
var seq__33249_33535 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33251_33536 = null;
var count__33252_33537 = (0);
var i__33253_33538 = (0);
while(true){
if((i__33253_33538 < count__33252_33537)){
var map__33259_33539 = chunk__33251_33536.cljs$core$IIndexed$_nth$arity$2(null,i__33253_33538);
var map__33259_33540__$1 = cljs.core.__destructure_map(map__33259_33539);
var task_33541 = map__33259_33540__$1;
var fn_str_33542 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33259_33540__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33259_33540__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33544 = goog.getObjectByName(fn_str_33542,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33543)].join(''));

(fn_obj_33544.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33544.cljs$core$IFn$_invoke$arity$2(path,new_link_33534) : fn_obj_33544.call(null,path,new_link_33534));


var G__33545 = seq__33249_33535;
var G__33546 = chunk__33251_33536;
var G__33547 = count__33252_33537;
var G__33548 = (i__33253_33538 + (1));
seq__33249_33535 = G__33545;
chunk__33251_33536 = G__33546;
count__33252_33537 = G__33547;
i__33253_33538 = G__33548;
continue;
} else {
var temp__5804__auto___33549__$1 = cljs.core.seq(seq__33249_33535);
if(temp__5804__auto___33549__$1){
var seq__33249_33550__$1 = temp__5804__auto___33549__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33249_33550__$1)){
var c__5568__auto___33551 = cljs.core.chunk_first(seq__33249_33550__$1);
var G__33552 = cljs.core.chunk_rest(seq__33249_33550__$1);
var G__33553 = c__5568__auto___33551;
var G__33554 = cljs.core.count(c__5568__auto___33551);
var G__33555 = (0);
seq__33249_33535 = G__33552;
chunk__33251_33536 = G__33553;
count__33252_33537 = G__33554;
i__33253_33538 = G__33555;
continue;
} else {
var map__33260_33556 = cljs.core.first(seq__33249_33550__$1);
var map__33260_33557__$1 = cljs.core.__destructure_map(map__33260_33556);
var task_33558 = map__33260_33557__$1;
var fn_str_33559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33260_33557__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33260_33557__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33561 = goog.getObjectByName(fn_str_33559,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33560)].join(''));

(fn_obj_33561.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33561.cljs$core$IFn$_invoke$arity$2(path,new_link_33534) : fn_obj_33561.call(null,path,new_link_33534));


var G__33569 = cljs.core.next(seq__33249_33550__$1);
var G__33570 = null;
var G__33571 = (0);
var G__33572 = (0);
seq__33249_33535 = G__33569;
chunk__33251_33536 = G__33570;
count__33252_33537 = G__33571;
i__33253_33538 = G__33572;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33532);
});})(seq__33166_33528,chunk__33170_33529,count__33171_33530,i__33172_33531,seq__32864,chunk__32866,count__32867,i__32868,new_link_33534,path_match_33533,node_33532,path,seq__32864__$1,temp__5804__auto__,map__32861,map__32861__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33533], 0));

goog.dom.insertSiblingAfter(new_link_33534,node_33532);


var G__33573 = seq__33166_33528;
var G__33574 = chunk__33170_33529;
var G__33575 = count__33171_33530;
var G__33576 = (i__33172_33531 + (1));
seq__33166_33528 = G__33573;
chunk__33170_33529 = G__33574;
count__33171_33530 = G__33575;
i__33172_33531 = G__33576;
continue;
} else {
var G__33577 = seq__33166_33528;
var G__33578 = chunk__33170_33529;
var G__33579 = count__33171_33530;
var G__33580 = (i__33172_33531 + (1));
seq__33166_33528 = G__33577;
chunk__33170_33529 = G__33578;
count__33171_33530 = G__33579;
i__33172_33531 = G__33580;
continue;
}
} else {
var G__33581 = seq__33166_33528;
var G__33582 = chunk__33170_33529;
var G__33583 = count__33171_33530;
var G__33584 = (i__33172_33531 + (1));
seq__33166_33528 = G__33581;
chunk__33170_33529 = G__33582;
count__33171_33530 = G__33583;
i__33172_33531 = G__33584;
continue;
}
} else {
var temp__5804__auto___33585__$1 = cljs.core.seq(seq__33166_33528);
if(temp__5804__auto___33585__$1){
var seq__33166_33586__$1 = temp__5804__auto___33585__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33166_33586__$1)){
var c__5568__auto___33587 = cljs.core.chunk_first(seq__33166_33586__$1);
var G__33588 = cljs.core.chunk_rest(seq__33166_33586__$1);
var G__33589 = c__5568__auto___33587;
var G__33590 = cljs.core.count(c__5568__auto___33587);
var G__33591 = (0);
seq__33166_33528 = G__33588;
chunk__33170_33529 = G__33589;
count__33171_33530 = G__33590;
i__33172_33531 = G__33591;
continue;
} else {
var node_33592 = cljs.core.first(seq__33166_33586__$1);
if(cljs.core.not(node_33592.shadow$old)){
var path_match_33593 = shadow.cljs.devtools.client.browser.match_paths(node_33592.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33593)){
var new_link_33594 = (function (){var G__33261 = node_33592.cloneNode(true);
G__33261.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33593),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__33261;
})();
(node_33592.shadow$old = true);

(new_link_33594.onload = ((function (seq__33166_33528,chunk__33170_33529,count__33171_33530,i__33172_33531,seq__32864,chunk__32866,count__32867,i__32868,new_link_33594,path_match_33593,node_33592,seq__33166_33586__$1,temp__5804__auto___33585__$1,path,seq__32864__$1,temp__5804__auto__,map__32861,map__32861__$1,msg,updates,reload_info){
return (function (e){
var seq__33262_33595 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__33264_33596 = null;
var count__33265_33597 = (0);
var i__33266_33598 = (0);
while(true){
if((i__33266_33598 < count__33265_33597)){
var map__33270_33599 = chunk__33264_33596.cljs$core$IIndexed$_nth$arity$2(null,i__33266_33598);
var map__33270_33600__$1 = cljs.core.__destructure_map(map__33270_33599);
var task_33601 = map__33270_33600__$1;
var fn_str_33602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270_33600__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33270_33600__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33604 = goog.getObjectByName(fn_str_33602,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33603)].join(''));

(fn_obj_33604.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33604.cljs$core$IFn$_invoke$arity$2(path,new_link_33594) : fn_obj_33604.call(null,path,new_link_33594));


var G__33605 = seq__33262_33595;
var G__33606 = chunk__33264_33596;
var G__33607 = count__33265_33597;
var G__33608 = (i__33266_33598 + (1));
seq__33262_33595 = G__33605;
chunk__33264_33596 = G__33606;
count__33265_33597 = G__33607;
i__33266_33598 = G__33608;
continue;
} else {
var temp__5804__auto___33609__$2 = cljs.core.seq(seq__33262_33595);
if(temp__5804__auto___33609__$2){
var seq__33262_33610__$1 = temp__5804__auto___33609__$2;
if(cljs.core.chunked_seq_QMARK_(seq__33262_33610__$1)){
var c__5568__auto___33611 = cljs.core.chunk_first(seq__33262_33610__$1);
var G__33612 = cljs.core.chunk_rest(seq__33262_33610__$1);
var G__33613 = c__5568__auto___33611;
var G__33614 = cljs.core.count(c__5568__auto___33611);
var G__33615 = (0);
seq__33262_33595 = G__33612;
chunk__33264_33596 = G__33613;
count__33265_33597 = G__33614;
i__33266_33598 = G__33615;
continue;
} else {
var map__33271_33616 = cljs.core.first(seq__33262_33610__$1);
var map__33271_33617__$1 = cljs.core.__destructure_map(map__33271_33616);
var task_33618 = map__33271_33617__$1;
var fn_str_33619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33271_33617__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_33620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33271_33617__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_33621 = goog.getObjectByName(fn_str_33619,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_33620)].join(''));

(fn_obj_33621.cljs$core$IFn$_invoke$arity$2 ? fn_obj_33621.cljs$core$IFn$_invoke$arity$2(path,new_link_33594) : fn_obj_33621.call(null,path,new_link_33594));


var G__33622 = cljs.core.next(seq__33262_33610__$1);
var G__33623 = null;
var G__33624 = (0);
var G__33625 = (0);
seq__33262_33595 = G__33622;
chunk__33264_33596 = G__33623;
count__33265_33597 = G__33624;
i__33266_33598 = G__33625;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_33592);
});})(seq__33166_33528,chunk__33170_33529,count__33171_33530,i__33172_33531,seq__32864,chunk__32866,count__32867,i__32868,new_link_33594,path_match_33593,node_33592,seq__33166_33586__$1,temp__5804__auto___33585__$1,path,seq__32864__$1,temp__5804__auto__,map__32861,map__32861__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33593], 0));

goog.dom.insertSiblingAfter(new_link_33594,node_33592);


var G__33626 = cljs.core.next(seq__33166_33586__$1);
var G__33627 = null;
var G__33628 = (0);
var G__33629 = (0);
seq__33166_33528 = G__33626;
chunk__33170_33529 = G__33627;
count__33171_33530 = G__33628;
i__33172_33531 = G__33629;
continue;
} else {
var G__33630 = cljs.core.next(seq__33166_33586__$1);
var G__33631 = null;
var G__33632 = (0);
var G__33633 = (0);
seq__33166_33528 = G__33630;
chunk__33170_33529 = G__33631;
count__33171_33530 = G__33632;
i__33172_33531 = G__33633;
continue;
}
} else {
var G__33634 = cljs.core.next(seq__33166_33586__$1);
var G__33635 = null;
var G__33636 = (0);
var G__33637 = (0);
seq__33166_33528 = G__33634;
chunk__33170_33529 = G__33635;
count__33171_33530 = G__33636;
i__33172_33531 = G__33637;
continue;
}
}
} else {
}
}
break;
}


var G__33639 = cljs.core.next(seq__32864__$1);
var G__33640 = null;
var G__33641 = (0);
var G__33642 = (0);
seq__32864 = G__33639;
chunk__32866 = G__33640;
count__32867 = G__33641;
i__32868 = G__33642;
continue;
} else {
var G__33643 = cljs.core.next(seq__32864__$1);
var G__33644 = null;
var G__33645 = (0);
var G__33646 = (0);
seq__32864 = G__33643;
chunk__32866 = G__33644;
count__32867 = G__33645;
i__32868 = G__33646;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__33279){
var map__33280 = p__33279;
var map__33280__$1 = cljs.core.__destructure_map(map__33280);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33280__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__33300){
var map__33301 = p__33300;
var map__33301__$1 = cljs.core.__destructure_map(map__33301);
var _ = map__33301__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33301__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__33302,done,error){
var map__33303 = p__33302;
var map__33303__$1 = cljs.core.__destructure_map(map__33303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__33307,done,error){
var map__33308 = p__33307;
var map__33308__$1 = cljs.core.__destructure_map(map__33308);
var msg = map__33308__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33308__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33308__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33308__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__33310){
var map__33311 = p__33310;
var map__33311__$1 = cljs.core.__destructure_map(map__33311);
var src = map__33311__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33311__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__33312 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__33312) : done.call(null,G__33312));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__33313){
var map__33314 = p__33313;
var map__33314__$1 = cljs.core.__destructure_map(map__33314);
var msg__$1 = map__33314__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33314__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e33315){var ex = e33315;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__33316){
var map__33317 = p__33316;
var map__33317__$1 = cljs.core.__destructure_map(map__33317);
var env = map__33317__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33317__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__33334){
var map__33335 = p__33334;
var map__33335__$1 = cljs.core.__destructure_map(map__33335);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33335__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33335__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__33336){
var map__33337 = p__33336;
var map__33337__$1 = cljs.core.__destructure_map(map__33337);
var svc = map__33337__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33337__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
