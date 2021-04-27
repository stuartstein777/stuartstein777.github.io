goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40206 = arguments.length;
var i__4737__auto___40207 = (0);
while(true){
if((i__4737__auto___40207 < len__4736__auto___40206)){
args__4742__auto__.push((arguments[i__4737__auto___40207]));

var G__40208 = (i__4737__auto___40207 + (1));
i__4737__auto___40207 = G__40208;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39999){
var G__40000 = cljs.core.first(seq39999);
var seq39999__$1 = cljs.core.next(seq39999);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40000,seq39999__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__40002 = cljs.core.seq(sources);
var chunk__40003 = null;
var count__40004 = (0);
var i__40005 = (0);
while(true){
if((i__40005 < count__40004)){
var map__40018 = chunk__40003.cljs$core$IIndexed$_nth$arity$2(null,i__40005);
var map__40018__$1 = (((((!((map__40018 == null))))?(((((map__40018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40018):map__40018);
var src = map__40018__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40023){var e_40209 = e40023;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40209);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40209.message)].join('')));
}

var G__40210 = seq__40002;
var G__40211 = chunk__40003;
var G__40212 = count__40004;
var G__40213 = (i__40005 + (1));
seq__40002 = G__40210;
chunk__40003 = G__40211;
count__40004 = G__40212;
i__40005 = G__40213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40002);
if(temp__5735__auto__){
var seq__40002__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40002__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40002__$1);
var G__40214 = cljs.core.chunk_rest(seq__40002__$1);
var G__40215 = c__4556__auto__;
var G__40216 = cljs.core.count(c__4556__auto__);
var G__40217 = (0);
seq__40002 = G__40214;
chunk__40003 = G__40215;
count__40004 = G__40216;
i__40005 = G__40217;
continue;
} else {
var map__40024 = cljs.core.first(seq__40002__$1);
var map__40024__$1 = (((((!((map__40024 == null))))?(((((map__40024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40024):map__40024);
var src = map__40024__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40024__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e40026){var e_40218 = e40026;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_40218);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_40218.message)].join('')));
}

var G__40219 = cljs.core.next(seq__40002__$1);
var G__40220 = null;
var G__40221 = (0);
var G__40222 = (0);
seq__40002 = G__40219;
chunk__40003 = G__40220;
count__40004 = G__40221;
i__40005 = G__40222;
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
var seq__40030 = cljs.core.seq(js_requires);
var chunk__40031 = null;
var count__40032 = (0);
var i__40033 = (0);
while(true){
if((i__40033 < count__40032)){
var js_ns = chunk__40031.cljs$core$IIndexed$_nth$arity$2(null,i__40033);
var require_str_40223 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40223);


var G__40224 = seq__40030;
var G__40225 = chunk__40031;
var G__40226 = count__40032;
var G__40227 = (i__40033 + (1));
seq__40030 = G__40224;
chunk__40031 = G__40225;
count__40032 = G__40226;
i__40033 = G__40227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40030);
if(temp__5735__auto__){
var seq__40030__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40030__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40030__$1);
var G__40228 = cljs.core.chunk_rest(seq__40030__$1);
var G__40229 = c__4556__auto__;
var G__40230 = cljs.core.count(c__4556__auto__);
var G__40231 = (0);
seq__40030 = G__40228;
chunk__40031 = G__40229;
count__40032 = G__40230;
i__40033 = G__40231;
continue;
} else {
var js_ns = cljs.core.first(seq__40030__$1);
var require_str_40232 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_40232);


var G__40233 = cljs.core.next(seq__40030__$1);
var G__40234 = null;
var G__40235 = (0);
var G__40236 = (0);
seq__40030 = G__40233;
chunk__40031 = G__40234;
count__40032 = G__40235;
i__40033 = G__40236;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__40035){
var map__40036 = p__40035;
var map__40036__$1 = (((((!((map__40036 == null))))?(((((map__40036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40036):map__40036);
var msg = map__40036__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40038(s__40039){
return (new cljs.core.LazySeq(null,(function (){
var s__40039__$1 = s__40039;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40039__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40044 = cljs.core.first(xs__6292__auto__);
var map__40044__$1 = (((((!((map__40044 == null))))?(((((map__40044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40044):map__40044);
var src = map__40044__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__40039__$1,map__40044,map__40044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40036,map__40036__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40038_$_iter__40040(s__40041){
return (new cljs.core.LazySeq(null,((function (s__40039__$1,map__40044,map__40044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40036,map__40036__$1,msg,info,reload_info){
return (function (){
var s__40041__$1 = s__40041;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40041__$1);
if(temp__5735__auto____$1){
var s__40041__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40041__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40041__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40043 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40042 = (0);
while(true){
if((i__40042 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__40042);
cljs.core.chunk_append(b__40043,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40238 = (i__40042 + (1));
i__40042 = G__40238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40043),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40038_$_iter__40040(cljs.core.chunk_rest(s__40041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40043),null);
}
} else {
var warning = cljs.core.first(s__40041__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40038_$_iter__40040(cljs.core.rest(s__40041__$2)));
}
} else {
return null;
}
break;
}
});})(s__40039__$1,map__40044,map__40044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40036,map__40036__$1,msg,info,reload_info))
,null,null));
});})(s__40039__$1,map__40044,map__40044__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40036,map__40036__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__40038(cljs.core.rest(s__40039__$1)));
} else {
var G__40239 = cljs.core.rest(s__40039__$1);
s__40039__$1 = G__40239;
continue;
}
} else {
var G__40240 = cljs.core.rest(s__40039__$1);
s__40039__$1 = G__40240;
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
var seq__40051_40244 = cljs.core.seq(warnings);
var chunk__40052_40245 = null;
var count__40053_40246 = (0);
var i__40054_40247 = (0);
while(true){
if((i__40054_40247 < count__40053_40246)){
var map__40061_40248 = chunk__40052_40245.cljs$core$IIndexed$_nth$arity$2(null,i__40054_40247);
var map__40061_40249__$1 = (((((!((map__40061_40248 == null))))?(((((map__40061_40248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40061_40248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40061_40248):map__40061_40248);
var w_40250 = map__40061_40249__$1;
var msg_40251__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40061_40249__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40061_40249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40061_40249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40061_40249__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40254)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40252),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40253),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40251__$1)].join(''));


var G__40255 = seq__40051_40244;
var G__40256 = chunk__40052_40245;
var G__40257 = count__40053_40246;
var G__40258 = (i__40054_40247 + (1));
seq__40051_40244 = G__40255;
chunk__40052_40245 = G__40256;
count__40053_40246 = G__40257;
i__40054_40247 = G__40258;
continue;
} else {
var temp__5735__auto___40259 = cljs.core.seq(seq__40051_40244);
if(temp__5735__auto___40259){
var seq__40051_40260__$1 = temp__5735__auto___40259;
if(cljs.core.chunked_seq_QMARK_(seq__40051_40260__$1)){
var c__4556__auto___40261 = cljs.core.chunk_first(seq__40051_40260__$1);
var G__40262 = cljs.core.chunk_rest(seq__40051_40260__$1);
var G__40263 = c__4556__auto___40261;
var G__40264 = cljs.core.count(c__4556__auto___40261);
var G__40265 = (0);
seq__40051_40244 = G__40262;
chunk__40052_40245 = G__40263;
count__40053_40246 = G__40264;
i__40054_40247 = G__40265;
continue;
} else {
var map__40063_40266 = cljs.core.first(seq__40051_40260__$1);
var map__40063_40267__$1 = (((((!((map__40063_40266 == null))))?(((((map__40063_40266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40063_40266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40063_40266):map__40063_40266);
var w_40268 = map__40063_40267__$1;
var msg_40269__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40063_40267__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_40270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40063_40267__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_40271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40063_40267__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_40272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40063_40267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_40272)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_40270),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_40271),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_40269__$1)].join(''));


var G__40273 = cljs.core.next(seq__40051_40260__$1);
var G__40274 = null;
var G__40275 = (0);
var G__40276 = (0);
seq__40051_40244 = G__40273;
chunk__40052_40245 = G__40274;
count__40053_40246 = G__40275;
i__40054_40247 = G__40276;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__40034_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__40034_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__40067){
var map__40069 = p__40067;
var map__40069__$1 = (((((!((map__40069 == null))))?(((((map__40069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40069):map__40069);
var msg = map__40069__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40069__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__40071 = cljs.core.seq(updates);
var chunk__40073 = null;
var count__40074 = (0);
var i__40075 = (0);
while(true){
if((i__40075 < count__40074)){
var path = chunk__40073.cljs$core$IIndexed$_nth$arity$2(null,i__40075);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40114_40277 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40118_40278 = null;
var count__40119_40279 = (0);
var i__40120_40280 = (0);
while(true){
if((i__40120_40280 < count__40119_40279)){
var node_40281 = chunk__40118_40278.cljs$core$IIndexed$_nth$arity$2(null,i__40120_40280);
if(cljs.core.not(node_40281.shadow$old)){
var path_match_40282 = shadow.cljs.devtools.client.browser.match_paths(node_40281.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40282)){
var new_link_40283 = (function (){var G__40132 = node_40281.cloneNode(true);
G__40132.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40282),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40132;
})();
(node_40281.shadow$old = true);

(new_link_40283.onload = ((function (seq__40114_40277,chunk__40118_40278,count__40119_40279,i__40120_40280,seq__40071,chunk__40073,count__40074,i__40075,new_link_40283,path_match_40282,node_40281,path,map__40069,map__40069__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40281);
});})(seq__40114_40277,chunk__40118_40278,count__40119_40279,i__40120_40280,seq__40071,chunk__40073,count__40074,i__40075,new_link_40283,path_match_40282,node_40281,path,map__40069,map__40069__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40282], 0));

goog.dom.insertSiblingAfter(new_link_40283,node_40281);


var G__40284 = seq__40114_40277;
var G__40285 = chunk__40118_40278;
var G__40286 = count__40119_40279;
var G__40287 = (i__40120_40280 + (1));
seq__40114_40277 = G__40284;
chunk__40118_40278 = G__40285;
count__40119_40279 = G__40286;
i__40120_40280 = G__40287;
continue;
} else {
var G__40288 = seq__40114_40277;
var G__40289 = chunk__40118_40278;
var G__40290 = count__40119_40279;
var G__40291 = (i__40120_40280 + (1));
seq__40114_40277 = G__40288;
chunk__40118_40278 = G__40289;
count__40119_40279 = G__40290;
i__40120_40280 = G__40291;
continue;
}
} else {
var G__40292 = seq__40114_40277;
var G__40293 = chunk__40118_40278;
var G__40294 = count__40119_40279;
var G__40295 = (i__40120_40280 + (1));
seq__40114_40277 = G__40292;
chunk__40118_40278 = G__40293;
count__40119_40279 = G__40294;
i__40120_40280 = G__40295;
continue;
}
} else {
var temp__5735__auto___40296 = cljs.core.seq(seq__40114_40277);
if(temp__5735__auto___40296){
var seq__40114_40298__$1 = temp__5735__auto___40296;
if(cljs.core.chunked_seq_QMARK_(seq__40114_40298__$1)){
var c__4556__auto___40301 = cljs.core.chunk_first(seq__40114_40298__$1);
var G__40302 = cljs.core.chunk_rest(seq__40114_40298__$1);
var G__40303 = c__4556__auto___40301;
var G__40304 = cljs.core.count(c__4556__auto___40301);
var G__40305 = (0);
seq__40114_40277 = G__40302;
chunk__40118_40278 = G__40303;
count__40119_40279 = G__40304;
i__40120_40280 = G__40305;
continue;
} else {
var node_40307 = cljs.core.first(seq__40114_40298__$1);
if(cljs.core.not(node_40307.shadow$old)){
var path_match_40308 = shadow.cljs.devtools.client.browser.match_paths(node_40307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40308)){
var new_link_40309 = (function (){var G__40133 = node_40307.cloneNode(true);
G__40133.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40308),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40133;
})();
(node_40307.shadow$old = true);

(new_link_40309.onload = ((function (seq__40114_40277,chunk__40118_40278,count__40119_40279,i__40120_40280,seq__40071,chunk__40073,count__40074,i__40075,new_link_40309,path_match_40308,node_40307,seq__40114_40298__$1,temp__5735__auto___40296,path,map__40069,map__40069__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40307);
});})(seq__40114_40277,chunk__40118_40278,count__40119_40279,i__40120_40280,seq__40071,chunk__40073,count__40074,i__40075,new_link_40309,path_match_40308,node_40307,seq__40114_40298__$1,temp__5735__auto___40296,path,map__40069,map__40069__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40308], 0));

goog.dom.insertSiblingAfter(new_link_40309,node_40307);


var G__40310 = cljs.core.next(seq__40114_40298__$1);
var G__40311 = null;
var G__40312 = (0);
var G__40313 = (0);
seq__40114_40277 = G__40310;
chunk__40118_40278 = G__40311;
count__40119_40279 = G__40312;
i__40120_40280 = G__40313;
continue;
} else {
var G__40314 = cljs.core.next(seq__40114_40298__$1);
var G__40315 = null;
var G__40316 = (0);
var G__40317 = (0);
seq__40114_40277 = G__40314;
chunk__40118_40278 = G__40315;
count__40119_40279 = G__40316;
i__40120_40280 = G__40317;
continue;
}
} else {
var G__40318 = cljs.core.next(seq__40114_40298__$1);
var G__40319 = null;
var G__40320 = (0);
var G__40321 = (0);
seq__40114_40277 = G__40318;
chunk__40118_40278 = G__40319;
count__40119_40279 = G__40320;
i__40120_40280 = G__40321;
continue;
}
}
} else {
}
}
break;
}


var G__40322 = seq__40071;
var G__40323 = chunk__40073;
var G__40324 = count__40074;
var G__40325 = (i__40075 + (1));
seq__40071 = G__40322;
chunk__40073 = G__40323;
count__40074 = G__40324;
i__40075 = G__40325;
continue;
} else {
var G__40326 = seq__40071;
var G__40327 = chunk__40073;
var G__40328 = count__40074;
var G__40329 = (i__40075 + (1));
seq__40071 = G__40326;
chunk__40073 = G__40327;
count__40074 = G__40328;
i__40075 = G__40329;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40071);
if(temp__5735__auto__){
var seq__40071__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40071__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40071__$1);
var G__40330 = cljs.core.chunk_rest(seq__40071__$1);
var G__40331 = c__4556__auto__;
var G__40332 = cljs.core.count(c__4556__auto__);
var G__40333 = (0);
seq__40071 = G__40330;
chunk__40073 = G__40331;
count__40074 = G__40332;
i__40075 = G__40333;
continue;
} else {
var path = cljs.core.first(seq__40071__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__40138_40334 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__40142_40335 = null;
var count__40143_40336 = (0);
var i__40144_40337 = (0);
while(true){
if((i__40144_40337 < count__40143_40336)){
var node_40338 = chunk__40142_40335.cljs$core$IIndexed$_nth$arity$2(null,i__40144_40337);
if(cljs.core.not(node_40338.shadow$old)){
var path_match_40339 = shadow.cljs.devtools.client.browser.match_paths(node_40338.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40339)){
var new_link_40340 = (function (){var G__40154 = node_40338.cloneNode(true);
G__40154.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40339),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40154;
})();
(node_40338.shadow$old = true);

(new_link_40340.onload = ((function (seq__40138_40334,chunk__40142_40335,count__40143_40336,i__40144_40337,seq__40071,chunk__40073,count__40074,i__40075,new_link_40340,path_match_40339,node_40338,path,seq__40071__$1,temp__5735__auto__,map__40069,map__40069__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40338);
});})(seq__40138_40334,chunk__40142_40335,count__40143_40336,i__40144_40337,seq__40071,chunk__40073,count__40074,i__40075,new_link_40340,path_match_40339,node_40338,path,seq__40071__$1,temp__5735__auto__,map__40069,map__40069__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40339], 0));

goog.dom.insertSiblingAfter(new_link_40340,node_40338);


var G__40341 = seq__40138_40334;
var G__40342 = chunk__40142_40335;
var G__40343 = count__40143_40336;
var G__40344 = (i__40144_40337 + (1));
seq__40138_40334 = G__40341;
chunk__40142_40335 = G__40342;
count__40143_40336 = G__40343;
i__40144_40337 = G__40344;
continue;
} else {
var G__40345 = seq__40138_40334;
var G__40346 = chunk__40142_40335;
var G__40347 = count__40143_40336;
var G__40348 = (i__40144_40337 + (1));
seq__40138_40334 = G__40345;
chunk__40142_40335 = G__40346;
count__40143_40336 = G__40347;
i__40144_40337 = G__40348;
continue;
}
} else {
var G__40349 = seq__40138_40334;
var G__40350 = chunk__40142_40335;
var G__40351 = count__40143_40336;
var G__40352 = (i__40144_40337 + (1));
seq__40138_40334 = G__40349;
chunk__40142_40335 = G__40350;
count__40143_40336 = G__40351;
i__40144_40337 = G__40352;
continue;
}
} else {
var temp__5735__auto___40353__$1 = cljs.core.seq(seq__40138_40334);
if(temp__5735__auto___40353__$1){
var seq__40138_40354__$1 = temp__5735__auto___40353__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40138_40354__$1)){
var c__4556__auto___40357 = cljs.core.chunk_first(seq__40138_40354__$1);
var G__40358 = cljs.core.chunk_rest(seq__40138_40354__$1);
var G__40359 = c__4556__auto___40357;
var G__40360 = cljs.core.count(c__4556__auto___40357);
var G__40361 = (0);
seq__40138_40334 = G__40358;
chunk__40142_40335 = G__40359;
count__40143_40336 = G__40360;
i__40144_40337 = G__40361;
continue;
} else {
var node_40363 = cljs.core.first(seq__40138_40354__$1);
if(cljs.core.not(node_40363.shadow$old)){
var path_match_40364 = shadow.cljs.devtools.client.browser.match_paths(node_40363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_40364)){
var new_link_40365 = (function (){var G__40155 = node_40363.cloneNode(true);
G__40155.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_40364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__40155;
})();
(node_40363.shadow$old = true);

(new_link_40365.onload = ((function (seq__40138_40334,chunk__40142_40335,count__40143_40336,i__40144_40337,seq__40071,chunk__40073,count__40074,i__40075,new_link_40365,path_match_40364,node_40363,seq__40138_40354__$1,temp__5735__auto___40353__$1,path,seq__40071__$1,temp__5735__auto__,map__40069,map__40069__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_40363);
});})(seq__40138_40334,chunk__40142_40335,count__40143_40336,i__40144_40337,seq__40071,chunk__40073,count__40074,i__40075,new_link_40365,path_match_40364,node_40363,seq__40138_40354__$1,temp__5735__auto___40353__$1,path,seq__40071__$1,temp__5735__auto__,map__40069,map__40069__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_40364], 0));

goog.dom.insertSiblingAfter(new_link_40365,node_40363);


var G__40367 = cljs.core.next(seq__40138_40354__$1);
var G__40368 = null;
var G__40369 = (0);
var G__40370 = (0);
seq__40138_40334 = G__40367;
chunk__40142_40335 = G__40368;
count__40143_40336 = G__40369;
i__40144_40337 = G__40370;
continue;
} else {
var G__40371 = cljs.core.next(seq__40138_40354__$1);
var G__40372 = null;
var G__40373 = (0);
var G__40374 = (0);
seq__40138_40334 = G__40371;
chunk__40142_40335 = G__40372;
count__40143_40336 = G__40373;
i__40144_40337 = G__40374;
continue;
}
} else {
var G__40375 = cljs.core.next(seq__40138_40354__$1);
var G__40376 = null;
var G__40377 = (0);
var G__40378 = (0);
seq__40138_40334 = G__40375;
chunk__40142_40335 = G__40376;
count__40143_40336 = G__40377;
i__40144_40337 = G__40378;
continue;
}
}
} else {
}
}
break;
}


var G__40379 = cljs.core.next(seq__40071__$1);
var G__40380 = null;
var G__40381 = (0);
var G__40382 = (0);
seq__40071 = G__40379;
chunk__40073 = G__40380;
count__40074 = G__40381;
i__40075 = G__40382;
continue;
} else {
var G__40383 = cljs.core.next(seq__40071__$1);
var G__40384 = null;
var G__40385 = (0);
var G__40386 = (0);
seq__40071 = G__40383;
chunk__40073 = G__40384;
count__40074 = G__40385;
i__40075 = G__40386;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__40160){
var map__40161 = p__40160;
var map__40161__$1 = (((((!((map__40161 == null))))?(((((map__40161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40161):map__40161);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40161__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__40170){
var map__40171 = p__40170;
var map__40171__$1 = (((((!((map__40171 == null))))?(((((map__40171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40171):map__40171);
var _ = map__40171__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40171__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__40173,done,error){
var map__40174 = p__40173;
var map__40174__$1 = (((((!((map__40174 == null))))?(((((map__40174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40174):map__40174);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40174__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__40176,done,error){
var map__40177 = p__40176;
var map__40177__$1 = (((((!((map__40177 == null))))?(((((map__40177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40177):map__40177);
var msg = map__40177__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40177__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40179){
var map__40180 = p__40179;
var map__40180__$1 = (((((!((map__40180 == null))))?(((((map__40180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40180):map__40180);
var src = map__40180__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__40182 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__40182) : done.call(null,G__40182));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__40183){
var map__40184 = p__40183;
var map__40184__$1 = (((((!((map__40184 == null))))?(((((map__40184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40184):map__40184);
var msg__$1 = map__40184__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40184__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e40186){var ex = e40186;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__40187){
var map__40188 = p__40187;
var map__40188__$1 = (((((!((map__40188 == null))))?(((((map__40188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40188):map__40188);
var env = map__40188__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40188__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__40195){
var map__40196 = p__40195;
var map__40196__$1 = (((((!((map__40196 == null))))?(((((map__40196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40196):map__40196);
var msg = map__40196__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40196__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__40198){
var map__40199 = p__40198;
var map__40199__$1 = (((((!((map__40199 == null))))?(((((map__40199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40199):map__40199);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40199__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40199__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__40203){
var map__40204 = p__40203;
var map__40204__$1 = (((((!((map__40204 == null))))?(((((map__40204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40204):map__40204);
var svc = map__40204__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40204__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
