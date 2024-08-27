goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46294 = arguments.length;
var i__4830__auto___46295 = (0);
while(true){
if((i__4830__auto___46295 < len__4829__auto___46294)){
args__4835__auto__.push((arguments[i__4830__auto___46295]));

var G__46296 = (i__4830__auto___46295 + (1));
i__4830__auto___46295 = G__46296;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46170){
var G__46171 = cljs.core.first(seq46170);
var seq46170__$1 = cljs.core.next(seq46170);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46171,seq46170__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46172 = cljs.core.seq(sources);
var chunk__46173 = null;
var count__46174 = (0);
var i__46175 = (0);
while(true){
if((i__46175 < count__46174)){
var map__46182 = chunk__46173.cljs$core$IIndexed$_nth$arity$2(null,i__46175);
var map__46182__$1 = cljs.core.__destructure_map(map__46182);
var src = map__46182__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46182__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46183){var e_46297 = e46183;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46297);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46297.message)].join('')));
}

var G__46298 = seq__46172;
var G__46299 = chunk__46173;
var G__46300 = count__46174;
var G__46301 = (i__46175 + (1));
seq__46172 = G__46298;
chunk__46173 = G__46299;
count__46174 = G__46300;
i__46175 = G__46301;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46172);
if(temp__5753__auto__){
var seq__46172__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46172__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46172__$1);
var G__46302 = cljs.core.chunk_rest(seq__46172__$1);
var G__46303 = c__4649__auto__;
var G__46304 = cljs.core.count(c__4649__auto__);
var G__46305 = (0);
seq__46172 = G__46302;
chunk__46173 = G__46303;
count__46174 = G__46304;
i__46175 = G__46305;
continue;
} else {
var map__46184 = cljs.core.first(seq__46172__$1);
var map__46184__$1 = cljs.core.__destructure_map(map__46184);
var src = map__46184__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46184__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46185){var e_46306 = e46185;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46306);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46306.message)].join('')));
}

var G__46307 = cljs.core.next(seq__46172__$1);
var G__46308 = null;
var G__46309 = (0);
var G__46310 = (0);
seq__46172 = G__46307;
chunk__46173 = G__46308;
count__46174 = G__46309;
i__46175 = G__46310;
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
var seq__46186 = cljs.core.seq(js_requires);
var chunk__46187 = null;
var count__46188 = (0);
var i__46189 = (0);
while(true){
if((i__46189 < count__46188)){
var js_ns = chunk__46187.cljs$core$IIndexed$_nth$arity$2(null,i__46189);
var require_str_46311 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46311);


var G__46312 = seq__46186;
var G__46313 = chunk__46187;
var G__46314 = count__46188;
var G__46315 = (i__46189 + (1));
seq__46186 = G__46312;
chunk__46187 = G__46313;
count__46188 = G__46314;
i__46189 = G__46315;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46186);
if(temp__5753__auto__){
var seq__46186__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46186__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46186__$1);
var G__46316 = cljs.core.chunk_rest(seq__46186__$1);
var G__46317 = c__4649__auto__;
var G__46318 = cljs.core.count(c__4649__auto__);
var G__46319 = (0);
seq__46186 = G__46316;
chunk__46187 = G__46317;
count__46188 = G__46318;
i__46189 = G__46319;
continue;
} else {
var js_ns = cljs.core.first(seq__46186__$1);
var require_str_46320 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46320);


var G__46321 = cljs.core.next(seq__46186__$1);
var G__46322 = null;
var G__46323 = (0);
var G__46324 = (0);
seq__46186 = G__46321;
chunk__46187 = G__46322;
count__46188 = G__46323;
i__46189 = G__46324;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46191){
var map__46192 = p__46191;
var map__46192__$1 = cljs.core.__destructure_map(map__46192);
var msg = map__46192__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46192__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46192__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46193(s__46194){
return (new cljs.core.LazySeq(null,(function (){
var s__46194__$1 = s__46194;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__46194__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__46199 = cljs.core.first(xs__6308__auto__);
var map__46199__$1 = cljs.core.__destructure_map(map__46199);
var src = map__46199__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46199__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46199__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__46194__$1,map__46199,map__46199__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46192,map__46192__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46193_$_iter__46195(s__46196){
return (new cljs.core.LazySeq(null,((function (s__46194__$1,map__46199,map__46199__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46192,map__46192__$1,msg,info,reload_info){
return (function (){
var s__46196__$1 = s__46196;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__46196__$1);
if(temp__5753__auto____$1){
var s__46196__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46196__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__46196__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__46198 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__46197 = (0);
while(true){
if((i__46197 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__46197);
cljs.core.chunk_append(b__46198,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46325 = (i__46197 + (1));
i__46197 = G__46325;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46198),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46193_$_iter__46195(cljs.core.chunk_rest(s__46196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46198),null);
}
} else {
var warning = cljs.core.first(s__46196__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46193_$_iter__46195(cljs.core.rest(s__46196__$2)));
}
} else {
return null;
}
break;
}
});})(s__46194__$1,map__46199,map__46199__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46192,map__46192__$1,msg,info,reload_info))
,null,null));
});})(s__46194__$1,map__46199,map__46199__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__46192,map__46192__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46193(cljs.core.rest(s__46194__$1)));
} else {
var G__46326 = cljs.core.rest(s__46194__$1);
s__46194__$1 = G__46326;
continue;
}
} else {
var G__46327 = cljs.core.rest(s__46194__$1);
s__46194__$1 = G__46327;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__46200_46328 = cljs.core.seq(warnings);
var chunk__46201_46329 = null;
var count__46202_46330 = (0);
var i__46203_46331 = (0);
while(true){
if((i__46203_46331 < count__46202_46330)){
var map__46206_46332 = chunk__46201_46329.cljs$core$IIndexed$_nth$arity$2(null,i__46203_46331);
var map__46206_46333__$1 = cljs.core.__destructure_map(map__46206_46332);
var w_46334 = map__46206_46333__$1;
var msg_46335__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206_46333__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206_46333__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206_46333__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46206_46333__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46338)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46336),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46337),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46335__$1)].join(''));


var G__46339 = seq__46200_46328;
var G__46340 = chunk__46201_46329;
var G__46341 = count__46202_46330;
var G__46342 = (i__46203_46331 + (1));
seq__46200_46328 = G__46339;
chunk__46201_46329 = G__46340;
count__46202_46330 = G__46341;
i__46203_46331 = G__46342;
continue;
} else {
var temp__5753__auto___46343 = cljs.core.seq(seq__46200_46328);
if(temp__5753__auto___46343){
var seq__46200_46344__$1 = temp__5753__auto___46343;
if(cljs.core.chunked_seq_QMARK_(seq__46200_46344__$1)){
var c__4649__auto___46345 = cljs.core.chunk_first(seq__46200_46344__$1);
var G__46346 = cljs.core.chunk_rest(seq__46200_46344__$1);
var G__46347 = c__4649__auto___46345;
var G__46348 = cljs.core.count(c__4649__auto___46345);
var G__46349 = (0);
seq__46200_46328 = G__46346;
chunk__46201_46329 = G__46347;
count__46202_46330 = G__46348;
i__46203_46331 = G__46349;
continue;
} else {
var map__46207_46350 = cljs.core.first(seq__46200_46344__$1);
var map__46207_46351__$1 = cljs.core.__destructure_map(map__46207_46350);
var w_46352 = map__46207_46351__$1;
var msg_46353__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46207_46351__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46207_46351__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46355 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46207_46351__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46207_46351__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46356)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46354),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46355),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46353__$1)].join(''));


var G__46357 = cljs.core.next(seq__46200_46344__$1);
var G__46358 = null;
var G__46359 = (0);
var G__46360 = (0);
seq__46200_46328 = G__46357;
chunk__46201_46329 = G__46358;
count__46202_46330 = G__46359;
i__46203_46331 = G__46360;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46190_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46190_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__46208){
var map__46209 = p__46208;
var map__46209__$1 = cljs.core.__destructure_map(map__46209);
var msg = map__46209__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46209__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46210 = cljs.core.seq(updates);
var chunk__46212 = null;
var count__46213 = (0);
var i__46214 = (0);
while(true){
if((i__46214 < count__46213)){
var path = chunk__46212.cljs$core$IIndexed$_nth$arity$2(null,i__46214);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46244_46361 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46248_46362 = null;
var count__46249_46363 = (0);
var i__46250_46364 = (0);
while(true){
if((i__46250_46364 < count__46249_46363)){
var node_46365 = chunk__46248_46362.cljs$core$IIndexed$_nth$arity$2(null,i__46250_46364);
if(cljs.core.not(node_46365.shadow$old)){
var path_match_46366 = shadow.cljs.devtools.client.browser.match_paths(node_46365.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46366)){
var new_link_46367 = (function (){var G__46256 = node_46365.cloneNode(true);
G__46256.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46366),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46256;
})();
(node_46365.shadow$old = true);

(new_link_46367.onload = ((function (seq__46244_46361,chunk__46248_46362,count__46249_46363,i__46250_46364,seq__46210,chunk__46212,count__46213,i__46214,new_link_46367,path_match_46366,node_46365,path,map__46209,map__46209__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46365);
});})(seq__46244_46361,chunk__46248_46362,count__46249_46363,i__46250_46364,seq__46210,chunk__46212,count__46213,i__46214,new_link_46367,path_match_46366,node_46365,path,map__46209,map__46209__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46366], 0));

goog.dom.insertSiblingAfter(new_link_46367,node_46365);


var G__46368 = seq__46244_46361;
var G__46369 = chunk__46248_46362;
var G__46370 = count__46249_46363;
var G__46371 = (i__46250_46364 + (1));
seq__46244_46361 = G__46368;
chunk__46248_46362 = G__46369;
count__46249_46363 = G__46370;
i__46250_46364 = G__46371;
continue;
} else {
var G__46372 = seq__46244_46361;
var G__46373 = chunk__46248_46362;
var G__46374 = count__46249_46363;
var G__46375 = (i__46250_46364 + (1));
seq__46244_46361 = G__46372;
chunk__46248_46362 = G__46373;
count__46249_46363 = G__46374;
i__46250_46364 = G__46375;
continue;
}
} else {
var G__46376 = seq__46244_46361;
var G__46377 = chunk__46248_46362;
var G__46378 = count__46249_46363;
var G__46379 = (i__46250_46364 + (1));
seq__46244_46361 = G__46376;
chunk__46248_46362 = G__46377;
count__46249_46363 = G__46378;
i__46250_46364 = G__46379;
continue;
}
} else {
var temp__5753__auto___46380 = cljs.core.seq(seq__46244_46361);
if(temp__5753__auto___46380){
var seq__46244_46381__$1 = temp__5753__auto___46380;
if(cljs.core.chunked_seq_QMARK_(seq__46244_46381__$1)){
var c__4649__auto___46382 = cljs.core.chunk_first(seq__46244_46381__$1);
var G__46383 = cljs.core.chunk_rest(seq__46244_46381__$1);
var G__46384 = c__4649__auto___46382;
var G__46385 = cljs.core.count(c__4649__auto___46382);
var G__46386 = (0);
seq__46244_46361 = G__46383;
chunk__46248_46362 = G__46384;
count__46249_46363 = G__46385;
i__46250_46364 = G__46386;
continue;
} else {
var node_46387 = cljs.core.first(seq__46244_46381__$1);
if(cljs.core.not(node_46387.shadow$old)){
var path_match_46388 = shadow.cljs.devtools.client.browser.match_paths(node_46387.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46388)){
var new_link_46389 = (function (){var G__46257 = node_46387.cloneNode(true);
G__46257.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46388),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46257;
})();
(node_46387.shadow$old = true);

(new_link_46389.onload = ((function (seq__46244_46361,chunk__46248_46362,count__46249_46363,i__46250_46364,seq__46210,chunk__46212,count__46213,i__46214,new_link_46389,path_match_46388,node_46387,seq__46244_46381__$1,temp__5753__auto___46380,path,map__46209,map__46209__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46387);
});})(seq__46244_46361,chunk__46248_46362,count__46249_46363,i__46250_46364,seq__46210,chunk__46212,count__46213,i__46214,new_link_46389,path_match_46388,node_46387,seq__46244_46381__$1,temp__5753__auto___46380,path,map__46209,map__46209__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46388], 0));

goog.dom.insertSiblingAfter(new_link_46389,node_46387);


var G__46390 = cljs.core.next(seq__46244_46381__$1);
var G__46391 = null;
var G__46392 = (0);
var G__46393 = (0);
seq__46244_46361 = G__46390;
chunk__46248_46362 = G__46391;
count__46249_46363 = G__46392;
i__46250_46364 = G__46393;
continue;
} else {
var G__46394 = cljs.core.next(seq__46244_46381__$1);
var G__46395 = null;
var G__46396 = (0);
var G__46397 = (0);
seq__46244_46361 = G__46394;
chunk__46248_46362 = G__46395;
count__46249_46363 = G__46396;
i__46250_46364 = G__46397;
continue;
}
} else {
var G__46398 = cljs.core.next(seq__46244_46381__$1);
var G__46399 = null;
var G__46400 = (0);
var G__46401 = (0);
seq__46244_46361 = G__46398;
chunk__46248_46362 = G__46399;
count__46249_46363 = G__46400;
i__46250_46364 = G__46401;
continue;
}
}
} else {
}
}
break;
}


var G__46402 = seq__46210;
var G__46403 = chunk__46212;
var G__46404 = count__46213;
var G__46405 = (i__46214 + (1));
seq__46210 = G__46402;
chunk__46212 = G__46403;
count__46213 = G__46404;
i__46214 = G__46405;
continue;
} else {
var G__46406 = seq__46210;
var G__46407 = chunk__46212;
var G__46408 = count__46213;
var G__46409 = (i__46214 + (1));
seq__46210 = G__46406;
chunk__46212 = G__46407;
count__46213 = G__46408;
i__46214 = G__46409;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46210);
if(temp__5753__auto__){
var seq__46210__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46210__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46210__$1);
var G__46410 = cljs.core.chunk_rest(seq__46210__$1);
var G__46411 = c__4649__auto__;
var G__46412 = cljs.core.count(c__4649__auto__);
var G__46413 = (0);
seq__46210 = G__46410;
chunk__46212 = G__46411;
count__46213 = G__46412;
i__46214 = G__46413;
continue;
} else {
var path = cljs.core.first(seq__46210__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46258_46414 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46262_46415 = null;
var count__46263_46416 = (0);
var i__46264_46417 = (0);
while(true){
if((i__46264_46417 < count__46263_46416)){
var node_46418 = chunk__46262_46415.cljs$core$IIndexed$_nth$arity$2(null,i__46264_46417);
if(cljs.core.not(node_46418.shadow$old)){
var path_match_46419 = shadow.cljs.devtools.client.browser.match_paths(node_46418.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46419)){
var new_link_46420 = (function (){var G__46270 = node_46418.cloneNode(true);
G__46270.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46419),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46270;
})();
(node_46418.shadow$old = true);

(new_link_46420.onload = ((function (seq__46258_46414,chunk__46262_46415,count__46263_46416,i__46264_46417,seq__46210,chunk__46212,count__46213,i__46214,new_link_46420,path_match_46419,node_46418,path,seq__46210__$1,temp__5753__auto__,map__46209,map__46209__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46418);
});})(seq__46258_46414,chunk__46262_46415,count__46263_46416,i__46264_46417,seq__46210,chunk__46212,count__46213,i__46214,new_link_46420,path_match_46419,node_46418,path,seq__46210__$1,temp__5753__auto__,map__46209,map__46209__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46419], 0));

goog.dom.insertSiblingAfter(new_link_46420,node_46418);


var G__46421 = seq__46258_46414;
var G__46422 = chunk__46262_46415;
var G__46423 = count__46263_46416;
var G__46424 = (i__46264_46417 + (1));
seq__46258_46414 = G__46421;
chunk__46262_46415 = G__46422;
count__46263_46416 = G__46423;
i__46264_46417 = G__46424;
continue;
} else {
var G__46425 = seq__46258_46414;
var G__46426 = chunk__46262_46415;
var G__46427 = count__46263_46416;
var G__46428 = (i__46264_46417 + (1));
seq__46258_46414 = G__46425;
chunk__46262_46415 = G__46426;
count__46263_46416 = G__46427;
i__46264_46417 = G__46428;
continue;
}
} else {
var G__46429 = seq__46258_46414;
var G__46430 = chunk__46262_46415;
var G__46431 = count__46263_46416;
var G__46432 = (i__46264_46417 + (1));
seq__46258_46414 = G__46429;
chunk__46262_46415 = G__46430;
count__46263_46416 = G__46431;
i__46264_46417 = G__46432;
continue;
}
} else {
var temp__5753__auto___46433__$1 = cljs.core.seq(seq__46258_46414);
if(temp__5753__auto___46433__$1){
var seq__46258_46434__$1 = temp__5753__auto___46433__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46258_46434__$1)){
var c__4649__auto___46435 = cljs.core.chunk_first(seq__46258_46434__$1);
var G__46436 = cljs.core.chunk_rest(seq__46258_46434__$1);
var G__46437 = c__4649__auto___46435;
var G__46438 = cljs.core.count(c__4649__auto___46435);
var G__46439 = (0);
seq__46258_46414 = G__46436;
chunk__46262_46415 = G__46437;
count__46263_46416 = G__46438;
i__46264_46417 = G__46439;
continue;
} else {
var node_46440 = cljs.core.first(seq__46258_46434__$1);
if(cljs.core.not(node_46440.shadow$old)){
var path_match_46441 = shadow.cljs.devtools.client.browser.match_paths(node_46440.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46441)){
var new_link_46442 = (function (){var G__46271 = node_46440.cloneNode(true);
G__46271.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46441),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46271;
})();
(node_46440.shadow$old = true);

(new_link_46442.onload = ((function (seq__46258_46414,chunk__46262_46415,count__46263_46416,i__46264_46417,seq__46210,chunk__46212,count__46213,i__46214,new_link_46442,path_match_46441,node_46440,seq__46258_46434__$1,temp__5753__auto___46433__$1,path,seq__46210__$1,temp__5753__auto__,map__46209,map__46209__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_46440);
});})(seq__46258_46414,chunk__46262_46415,count__46263_46416,i__46264_46417,seq__46210,chunk__46212,count__46213,i__46214,new_link_46442,path_match_46441,node_46440,seq__46258_46434__$1,temp__5753__auto___46433__$1,path,seq__46210__$1,temp__5753__auto__,map__46209,map__46209__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46441], 0));

goog.dom.insertSiblingAfter(new_link_46442,node_46440);


var G__46443 = cljs.core.next(seq__46258_46434__$1);
var G__46444 = null;
var G__46445 = (0);
var G__46446 = (0);
seq__46258_46414 = G__46443;
chunk__46262_46415 = G__46444;
count__46263_46416 = G__46445;
i__46264_46417 = G__46446;
continue;
} else {
var G__46447 = cljs.core.next(seq__46258_46434__$1);
var G__46448 = null;
var G__46449 = (0);
var G__46450 = (0);
seq__46258_46414 = G__46447;
chunk__46262_46415 = G__46448;
count__46263_46416 = G__46449;
i__46264_46417 = G__46450;
continue;
}
} else {
var G__46451 = cljs.core.next(seq__46258_46434__$1);
var G__46452 = null;
var G__46453 = (0);
var G__46454 = (0);
seq__46258_46414 = G__46451;
chunk__46262_46415 = G__46452;
count__46263_46416 = G__46453;
i__46264_46417 = G__46454;
continue;
}
}
} else {
}
}
break;
}


var G__46455 = cljs.core.next(seq__46210__$1);
var G__46456 = null;
var G__46457 = (0);
var G__46458 = (0);
seq__46210 = G__46455;
chunk__46212 = G__46456;
count__46213 = G__46457;
i__46214 = G__46458;
continue;
} else {
var G__46459 = cljs.core.next(seq__46210__$1);
var G__46460 = null;
var G__46461 = (0);
var G__46462 = (0);
seq__46210 = G__46459;
chunk__46212 = G__46460;
count__46213 = G__46461;
i__46214 = G__46462;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__46272){
var map__46273 = p__46272;
var map__46273__$1 = cljs.core.__destructure_map(map__46273);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46273__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__46274){
var map__46275 = p__46274;
var map__46275__$1 = cljs.core.__destructure_map(map__46275);
var _ = map__46275__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46275__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__46276,done,error){
var map__46277 = p__46276;
var map__46277__$1 = cljs.core.__destructure_map(map__46277);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46277__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__46278,done,error){
var map__46279 = p__46278;
var map__46279__$1 = cljs.core.__destructure_map(map__46279);
var msg = map__46279__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46279__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46280){
var map__46281 = p__46280;
var map__46281__$1 = cljs.core.__destructure_map(map__46281);
var src = map__46281__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46281__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__46282 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__46282) : done.call(null,G__46282));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__46283){
var map__46284 = p__46283;
var map__46284__$1 = cljs.core.__destructure_map(map__46284);
var msg__$1 = map__46284__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46284__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e46285){var ex = e46285;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__46286){
var map__46287 = p__46286;
var map__46287__$1 = cljs.core.__destructure_map(map__46287);
var env = map__46287__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46287__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__46288){
var map__46289 = p__46288;
var map__46289__$1 = cljs.core.__destructure_map(map__46289);
var msg = map__46289__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46289__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__46290){
var map__46291 = p__46290;
var map__46291__$1 = cljs.core.__destructure_map(map__46291);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__46292){
var map__46293 = p__46292;
var map__46293__$1 = cljs.core.__destructure_map(map__46293);
var svc = map__46293__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46293__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
