goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47193 = arguments.length;
var i__4737__auto___47194 = (0);
while(true){
if((i__4737__auto___47194 < len__4736__auto___47193)){
args__4742__auto__.push((arguments[i__4737__auto___47194]));

var G__47195 = (i__4737__auto___47194 + (1));
i__4737__auto___47194 = G__47195;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47028){
var G__47029 = cljs.core.first(seq47028);
var seq47028__$1 = cljs.core.next(seq47028);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47029,seq47028__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47041 = cljs.core.seq(sources);
var chunk__47042 = null;
var count__47043 = (0);
var i__47044 = (0);
while(true){
if((i__47044 < count__47043)){
var map__47054 = chunk__47042.cljs$core$IIndexed$_nth$arity$2(null,i__47044);
var map__47054__$1 = (((((!((map__47054 == null))))?(((((map__47054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47054):map__47054);
var src = map__47054__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47054__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47054__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47054__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47054__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47059){var e_47196 = e47059;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47196);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47196.message)].join('')));
}

var G__47197 = seq__47041;
var G__47198 = chunk__47042;
var G__47199 = count__47043;
var G__47200 = (i__47044 + (1));
seq__47041 = G__47197;
chunk__47042 = G__47198;
count__47043 = G__47199;
i__47044 = G__47200;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47041);
if(temp__5735__auto__){
var seq__47041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47041__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47041__$1);
var G__47201 = cljs.core.chunk_rest(seq__47041__$1);
var G__47202 = c__4556__auto__;
var G__47203 = cljs.core.count(c__4556__auto__);
var G__47204 = (0);
seq__47041 = G__47201;
chunk__47042 = G__47202;
count__47043 = G__47203;
i__47044 = G__47204;
continue;
} else {
var map__47062 = cljs.core.first(seq__47041__$1);
var map__47062__$1 = (((((!((map__47062 == null))))?(((((map__47062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47062):map__47062);
var src = map__47062__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47062__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47064){var e_47205 = e47064;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47205);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47205.message)].join('')));
}

var G__47206 = cljs.core.next(seq__47041__$1);
var G__47207 = null;
var G__47208 = (0);
var G__47209 = (0);
seq__47041 = G__47206;
chunk__47042 = G__47207;
count__47043 = G__47208;
i__47044 = G__47209;
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
var seq__47066 = cljs.core.seq(js_requires);
var chunk__47067 = null;
var count__47068 = (0);
var i__47069 = (0);
while(true){
if((i__47069 < count__47068)){
var js_ns = chunk__47067.cljs$core$IIndexed$_nth$arity$2(null,i__47069);
var require_str_47210 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47210);


var G__47211 = seq__47066;
var G__47212 = chunk__47067;
var G__47213 = count__47068;
var G__47214 = (i__47069 + (1));
seq__47066 = G__47211;
chunk__47067 = G__47212;
count__47068 = G__47213;
i__47069 = G__47214;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47066);
if(temp__5735__auto__){
var seq__47066__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47066__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47066__$1);
var G__47215 = cljs.core.chunk_rest(seq__47066__$1);
var G__47216 = c__4556__auto__;
var G__47217 = cljs.core.count(c__4556__auto__);
var G__47218 = (0);
seq__47066 = G__47215;
chunk__47067 = G__47216;
count__47068 = G__47217;
i__47069 = G__47218;
continue;
} else {
var js_ns = cljs.core.first(seq__47066__$1);
var require_str_47219 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47219);


var G__47220 = cljs.core.next(seq__47066__$1);
var G__47221 = null;
var G__47222 = (0);
var G__47223 = (0);
seq__47066 = G__47220;
chunk__47067 = G__47221;
count__47068 = G__47222;
i__47069 = G__47223;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47071){
var map__47072 = p__47071;
var map__47072__$1 = (((((!((map__47072 == null))))?(((((map__47072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47072):map__47072);
var msg = map__47072__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47072__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47072__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47074(s__47075){
return (new cljs.core.LazySeq(null,(function (){
var s__47075__$1 = s__47075;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47075__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__47080 = cljs.core.first(xs__6292__auto__);
var map__47080__$1 = (((((!((map__47080 == null))))?(((((map__47080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47080):map__47080);
var src = map__47080__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47080__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47080__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__47075__$1,map__47080,map__47080__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47072,map__47072__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47074_$_iter__47076(s__47077){
return (new cljs.core.LazySeq(null,((function (s__47075__$1,map__47080,map__47080__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47072,map__47072__$1,msg,info,reload_info){
return (function (){
var s__47077__$1 = s__47077;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47077__$1);
if(temp__5735__auto____$1){
var s__47077__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47077__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47077__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47079 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47078 = (0);
while(true){
if((i__47078 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__47078);
cljs.core.chunk_append(b__47079,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47224 = (i__47078 + (1));
i__47078 = G__47224;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47079),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47074_$_iter__47076(cljs.core.chunk_rest(s__47077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47079),null);
}
} else {
var warning = cljs.core.first(s__47077__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47074_$_iter__47076(cljs.core.rest(s__47077__$2)));
}
} else {
return null;
}
break;
}
});})(s__47075__$1,map__47080,map__47080__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47072,map__47072__$1,msg,info,reload_info))
,null,null));
});})(s__47075__$1,map__47080,map__47080__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47072,map__47072__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47074(cljs.core.rest(s__47075__$1)));
} else {
var G__47225 = cljs.core.rest(s__47075__$1);
s__47075__$1 = G__47225;
continue;
}
} else {
var G__47226 = cljs.core.rest(s__47075__$1);
s__47075__$1 = G__47226;
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
var seq__47083_47227 = cljs.core.seq(warnings);
var chunk__47084_47228 = null;
var count__47085_47229 = (0);
var i__47086_47230 = (0);
while(true){
if((i__47086_47230 < count__47085_47229)){
var map__47092_47231 = chunk__47084_47228.cljs$core$IIndexed$_nth$arity$2(null,i__47086_47230);
var map__47092_47232__$1 = (((((!((map__47092_47231 == null))))?(((((map__47092_47231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47092_47231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47092_47231):map__47092_47231);
var w_47233 = map__47092_47232__$1;
var msg_47234__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092_47232__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092_47232__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092_47232__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47092_47232__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47237)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47235),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47236),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47234__$1)].join(''));


var G__47238 = seq__47083_47227;
var G__47239 = chunk__47084_47228;
var G__47240 = count__47085_47229;
var G__47241 = (i__47086_47230 + (1));
seq__47083_47227 = G__47238;
chunk__47084_47228 = G__47239;
count__47085_47229 = G__47240;
i__47086_47230 = G__47241;
continue;
} else {
var temp__5735__auto___47242 = cljs.core.seq(seq__47083_47227);
if(temp__5735__auto___47242){
var seq__47083_47243__$1 = temp__5735__auto___47242;
if(cljs.core.chunked_seq_QMARK_(seq__47083_47243__$1)){
var c__4556__auto___47244 = cljs.core.chunk_first(seq__47083_47243__$1);
var G__47245 = cljs.core.chunk_rest(seq__47083_47243__$1);
var G__47246 = c__4556__auto___47244;
var G__47247 = cljs.core.count(c__4556__auto___47244);
var G__47248 = (0);
seq__47083_47227 = G__47245;
chunk__47084_47228 = G__47246;
count__47085_47229 = G__47247;
i__47086_47230 = G__47248;
continue;
} else {
var map__47094_47249 = cljs.core.first(seq__47083_47243__$1);
var map__47094_47250__$1 = (((((!((map__47094_47249 == null))))?(((((map__47094_47249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47094_47249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47094_47249):map__47094_47249);
var w_47251 = map__47094_47250__$1;
var msg_47252__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094_47250__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094_47250__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094_47250__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47094_47250__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47255)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47253),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47254),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47252__$1)].join(''));


var G__47256 = cljs.core.next(seq__47083_47243__$1);
var G__47257 = null;
var G__47258 = (0);
var G__47259 = (0);
seq__47083_47227 = G__47256;
chunk__47084_47228 = G__47257;
count__47085_47229 = G__47258;
i__47086_47230 = G__47259;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47070_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47070_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47096){
var map__47097 = p__47096;
var map__47097__$1 = (((((!((map__47097 == null))))?(((((map__47097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47097):map__47097);
var msg = map__47097__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47097__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__47099 = cljs.core.seq(updates);
var chunk__47101 = null;
var count__47102 = (0);
var i__47103 = (0);
while(true){
if((i__47103 < count__47102)){
var path = chunk__47101.cljs$core$IIndexed$_nth$arity$2(null,i__47103);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47133_47260 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47137_47261 = null;
var count__47138_47262 = (0);
var i__47139_47263 = (0);
while(true){
if((i__47139_47263 < count__47138_47262)){
var node_47264 = chunk__47137_47261.cljs$core$IIndexed$_nth$arity$2(null,i__47139_47263);
if(cljs.core.not(node_47264.shadow$old)){
var path_match_47265 = shadow.cljs.devtools.client.browser.match_paths(node_47264.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47265)){
var new_link_47266 = (function (){var G__47145 = node_47264.cloneNode(true);
G__47145.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47265),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47145;
})();
(node_47264.shadow$old = true);

(new_link_47266.onload = ((function (seq__47133_47260,chunk__47137_47261,count__47138_47262,i__47139_47263,seq__47099,chunk__47101,count__47102,i__47103,new_link_47266,path_match_47265,node_47264,path,map__47097,map__47097__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47264);
});})(seq__47133_47260,chunk__47137_47261,count__47138_47262,i__47139_47263,seq__47099,chunk__47101,count__47102,i__47103,new_link_47266,path_match_47265,node_47264,path,map__47097,map__47097__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47265], 0));

goog.dom.insertSiblingAfter(new_link_47266,node_47264);


var G__47267 = seq__47133_47260;
var G__47268 = chunk__47137_47261;
var G__47269 = count__47138_47262;
var G__47270 = (i__47139_47263 + (1));
seq__47133_47260 = G__47267;
chunk__47137_47261 = G__47268;
count__47138_47262 = G__47269;
i__47139_47263 = G__47270;
continue;
} else {
var G__47271 = seq__47133_47260;
var G__47272 = chunk__47137_47261;
var G__47273 = count__47138_47262;
var G__47274 = (i__47139_47263 + (1));
seq__47133_47260 = G__47271;
chunk__47137_47261 = G__47272;
count__47138_47262 = G__47273;
i__47139_47263 = G__47274;
continue;
}
} else {
var G__47275 = seq__47133_47260;
var G__47276 = chunk__47137_47261;
var G__47277 = count__47138_47262;
var G__47278 = (i__47139_47263 + (1));
seq__47133_47260 = G__47275;
chunk__47137_47261 = G__47276;
count__47138_47262 = G__47277;
i__47139_47263 = G__47278;
continue;
}
} else {
var temp__5735__auto___47279 = cljs.core.seq(seq__47133_47260);
if(temp__5735__auto___47279){
var seq__47133_47280__$1 = temp__5735__auto___47279;
if(cljs.core.chunked_seq_QMARK_(seq__47133_47280__$1)){
var c__4556__auto___47281 = cljs.core.chunk_first(seq__47133_47280__$1);
var G__47282 = cljs.core.chunk_rest(seq__47133_47280__$1);
var G__47283 = c__4556__auto___47281;
var G__47284 = cljs.core.count(c__4556__auto___47281);
var G__47285 = (0);
seq__47133_47260 = G__47282;
chunk__47137_47261 = G__47283;
count__47138_47262 = G__47284;
i__47139_47263 = G__47285;
continue;
} else {
var node_47286 = cljs.core.first(seq__47133_47280__$1);
if(cljs.core.not(node_47286.shadow$old)){
var path_match_47287 = shadow.cljs.devtools.client.browser.match_paths(node_47286.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47287)){
var new_link_47288 = (function (){var G__47146 = node_47286.cloneNode(true);
G__47146.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47287),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47146;
})();
(node_47286.shadow$old = true);

(new_link_47288.onload = ((function (seq__47133_47260,chunk__47137_47261,count__47138_47262,i__47139_47263,seq__47099,chunk__47101,count__47102,i__47103,new_link_47288,path_match_47287,node_47286,seq__47133_47280__$1,temp__5735__auto___47279,path,map__47097,map__47097__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47286);
});})(seq__47133_47260,chunk__47137_47261,count__47138_47262,i__47139_47263,seq__47099,chunk__47101,count__47102,i__47103,new_link_47288,path_match_47287,node_47286,seq__47133_47280__$1,temp__5735__auto___47279,path,map__47097,map__47097__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47287], 0));

goog.dom.insertSiblingAfter(new_link_47288,node_47286);


var G__47289 = cljs.core.next(seq__47133_47280__$1);
var G__47290 = null;
var G__47291 = (0);
var G__47292 = (0);
seq__47133_47260 = G__47289;
chunk__47137_47261 = G__47290;
count__47138_47262 = G__47291;
i__47139_47263 = G__47292;
continue;
} else {
var G__47293 = cljs.core.next(seq__47133_47280__$1);
var G__47294 = null;
var G__47295 = (0);
var G__47296 = (0);
seq__47133_47260 = G__47293;
chunk__47137_47261 = G__47294;
count__47138_47262 = G__47295;
i__47139_47263 = G__47296;
continue;
}
} else {
var G__47297 = cljs.core.next(seq__47133_47280__$1);
var G__47298 = null;
var G__47299 = (0);
var G__47300 = (0);
seq__47133_47260 = G__47297;
chunk__47137_47261 = G__47298;
count__47138_47262 = G__47299;
i__47139_47263 = G__47300;
continue;
}
}
} else {
}
}
break;
}


var G__47301 = seq__47099;
var G__47302 = chunk__47101;
var G__47303 = count__47102;
var G__47304 = (i__47103 + (1));
seq__47099 = G__47301;
chunk__47101 = G__47302;
count__47102 = G__47303;
i__47103 = G__47304;
continue;
} else {
var G__47305 = seq__47099;
var G__47306 = chunk__47101;
var G__47307 = count__47102;
var G__47308 = (i__47103 + (1));
seq__47099 = G__47305;
chunk__47101 = G__47306;
count__47102 = G__47307;
i__47103 = G__47308;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47099);
if(temp__5735__auto__){
var seq__47099__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47099__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47099__$1);
var G__47309 = cljs.core.chunk_rest(seq__47099__$1);
var G__47310 = c__4556__auto__;
var G__47311 = cljs.core.count(c__4556__auto__);
var G__47312 = (0);
seq__47099 = G__47309;
chunk__47101 = G__47310;
count__47102 = G__47311;
i__47103 = G__47312;
continue;
} else {
var path = cljs.core.first(seq__47099__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47147_47313 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47151_47314 = null;
var count__47152_47315 = (0);
var i__47153_47316 = (0);
while(true){
if((i__47153_47316 < count__47152_47315)){
var node_47317 = chunk__47151_47314.cljs$core$IIndexed$_nth$arity$2(null,i__47153_47316);
if(cljs.core.not(node_47317.shadow$old)){
var path_match_47318 = shadow.cljs.devtools.client.browser.match_paths(node_47317.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47318)){
var new_link_47319 = (function (){var G__47159 = node_47317.cloneNode(true);
G__47159.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47318),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47159;
})();
(node_47317.shadow$old = true);

(new_link_47319.onload = ((function (seq__47147_47313,chunk__47151_47314,count__47152_47315,i__47153_47316,seq__47099,chunk__47101,count__47102,i__47103,new_link_47319,path_match_47318,node_47317,path,seq__47099__$1,temp__5735__auto__,map__47097,map__47097__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47317);
});})(seq__47147_47313,chunk__47151_47314,count__47152_47315,i__47153_47316,seq__47099,chunk__47101,count__47102,i__47103,new_link_47319,path_match_47318,node_47317,path,seq__47099__$1,temp__5735__auto__,map__47097,map__47097__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47318], 0));

goog.dom.insertSiblingAfter(new_link_47319,node_47317);


var G__47320 = seq__47147_47313;
var G__47321 = chunk__47151_47314;
var G__47322 = count__47152_47315;
var G__47323 = (i__47153_47316 + (1));
seq__47147_47313 = G__47320;
chunk__47151_47314 = G__47321;
count__47152_47315 = G__47322;
i__47153_47316 = G__47323;
continue;
} else {
var G__47324 = seq__47147_47313;
var G__47325 = chunk__47151_47314;
var G__47326 = count__47152_47315;
var G__47327 = (i__47153_47316 + (1));
seq__47147_47313 = G__47324;
chunk__47151_47314 = G__47325;
count__47152_47315 = G__47326;
i__47153_47316 = G__47327;
continue;
}
} else {
var G__47328 = seq__47147_47313;
var G__47329 = chunk__47151_47314;
var G__47330 = count__47152_47315;
var G__47331 = (i__47153_47316 + (1));
seq__47147_47313 = G__47328;
chunk__47151_47314 = G__47329;
count__47152_47315 = G__47330;
i__47153_47316 = G__47331;
continue;
}
} else {
var temp__5735__auto___47332__$1 = cljs.core.seq(seq__47147_47313);
if(temp__5735__auto___47332__$1){
var seq__47147_47333__$1 = temp__5735__auto___47332__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47147_47333__$1)){
var c__4556__auto___47334 = cljs.core.chunk_first(seq__47147_47333__$1);
var G__47335 = cljs.core.chunk_rest(seq__47147_47333__$1);
var G__47336 = c__4556__auto___47334;
var G__47337 = cljs.core.count(c__4556__auto___47334);
var G__47338 = (0);
seq__47147_47313 = G__47335;
chunk__47151_47314 = G__47336;
count__47152_47315 = G__47337;
i__47153_47316 = G__47338;
continue;
} else {
var node_47339 = cljs.core.first(seq__47147_47333__$1);
if(cljs.core.not(node_47339.shadow$old)){
var path_match_47340 = shadow.cljs.devtools.client.browser.match_paths(node_47339.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47340)){
var new_link_47341 = (function (){var G__47160 = node_47339.cloneNode(true);
G__47160.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47340),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47160;
})();
(node_47339.shadow$old = true);

(new_link_47341.onload = ((function (seq__47147_47313,chunk__47151_47314,count__47152_47315,i__47153_47316,seq__47099,chunk__47101,count__47102,i__47103,new_link_47341,path_match_47340,node_47339,seq__47147_47333__$1,temp__5735__auto___47332__$1,path,seq__47099__$1,temp__5735__auto__,map__47097,map__47097__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47339);
});})(seq__47147_47313,chunk__47151_47314,count__47152_47315,i__47153_47316,seq__47099,chunk__47101,count__47102,i__47103,new_link_47341,path_match_47340,node_47339,seq__47147_47333__$1,temp__5735__auto___47332__$1,path,seq__47099__$1,temp__5735__auto__,map__47097,map__47097__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47340], 0));

goog.dom.insertSiblingAfter(new_link_47341,node_47339);


var G__47342 = cljs.core.next(seq__47147_47333__$1);
var G__47343 = null;
var G__47344 = (0);
var G__47345 = (0);
seq__47147_47313 = G__47342;
chunk__47151_47314 = G__47343;
count__47152_47315 = G__47344;
i__47153_47316 = G__47345;
continue;
} else {
var G__47346 = cljs.core.next(seq__47147_47333__$1);
var G__47347 = null;
var G__47348 = (0);
var G__47349 = (0);
seq__47147_47313 = G__47346;
chunk__47151_47314 = G__47347;
count__47152_47315 = G__47348;
i__47153_47316 = G__47349;
continue;
}
} else {
var G__47350 = cljs.core.next(seq__47147_47333__$1);
var G__47351 = null;
var G__47352 = (0);
var G__47353 = (0);
seq__47147_47313 = G__47350;
chunk__47151_47314 = G__47351;
count__47152_47315 = G__47352;
i__47153_47316 = G__47353;
continue;
}
}
} else {
}
}
break;
}


var G__47354 = cljs.core.next(seq__47099__$1);
var G__47355 = null;
var G__47356 = (0);
var G__47357 = (0);
seq__47099 = G__47354;
chunk__47101 = G__47355;
count__47102 = G__47356;
i__47103 = G__47357;
continue;
} else {
var G__47358 = cljs.core.next(seq__47099__$1);
var G__47359 = null;
var G__47360 = (0);
var G__47361 = (0);
seq__47099 = G__47358;
chunk__47101 = G__47359;
count__47102 = G__47360;
i__47103 = G__47361;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47161){
var map__47162 = p__47161;
var map__47162__$1 = (((((!((map__47162 == null))))?(((((map__47162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47162):map__47162);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47162__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47164){
var map__47165 = p__47164;
var map__47165__$1 = (((((!((map__47165 == null))))?(((((map__47165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47165):map__47165);
var _ = map__47165__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47165__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47167,done,error){
var map__47168 = p__47167;
var map__47168__$1 = (((((!((map__47168 == null))))?(((((map__47168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47168):map__47168);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47170,done,error){
var map__47171 = p__47170;
var map__47171__$1 = (((((!((map__47171 == null))))?(((((map__47171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47171):map__47171);
var msg = map__47171__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47171__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47173){
var map__47174 = p__47173;
var map__47174__$1 = (((((!((map__47174 == null))))?(((((map__47174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47174):map__47174);
var src = map__47174__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47174__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47176 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47176) : done.call(null,G__47176));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47177){
var map__47178 = p__47177;
var map__47178__$1 = (((((!((map__47178 == null))))?(((((map__47178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47178):map__47178);
var msg__$1 = map__47178__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47178__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47180){var ex = e47180;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47181){
var map__47182 = p__47181;
var map__47182__$1 = (((((!((map__47182 == null))))?(((((map__47182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47182):map__47182);
var env = map__47182__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__47184){
var map__47185 = p__47184;
var map__47185__$1 = (((((!((map__47185 == null))))?(((((map__47185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47185):map__47185);
var msg = map__47185__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47185__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47187){
var map__47188 = p__47187;
var map__47188__$1 = (((((!((map__47188 == null))))?(((((map__47188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47188):map__47188);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__47190){
var map__47191 = p__47190;
var map__47191__$1 = (((((!((map__47191 == null))))?(((((map__47191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47191):map__47191);
var svc = map__47191__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47191__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
