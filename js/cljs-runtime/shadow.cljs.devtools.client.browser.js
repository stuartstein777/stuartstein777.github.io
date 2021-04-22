goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___47112 = arguments.length;
var i__4737__auto___47113 = (0);
while(true){
if((i__4737__auto___47113 < len__4736__auto___47112)){
args__4742__auto__.push((arguments[i__4737__auto___47113]));

var G__47114 = (i__4737__auto___47113 + (1));
i__4737__auto___47113 = G__47114;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46958){
var G__46959 = cljs.core.first(seq46958);
var seq46958__$1 = cljs.core.next(seq46958);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46959,seq46958__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46960 = cljs.core.seq(sources);
var chunk__46961 = null;
var count__46962 = (0);
var i__46963 = (0);
while(true){
if((i__46963 < count__46962)){
var map__46976 = chunk__46961.cljs$core$IIndexed$_nth$arity$2(null,i__46963);
var map__46976__$1 = (((((!((map__46976 == null))))?(((((map__46976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46976):map__46976);
var src = map__46976__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46976__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46978){var e_47115 = e46978;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47115);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47115.message)].join('')));
}

var G__47116 = seq__46960;
var G__47117 = chunk__46961;
var G__47118 = count__46962;
var G__47119 = (i__46963 + (1));
seq__46960 = G__47116;
chunk__46961 = G__47117;
count__46962 = G__47118;
i__46963 = G__47119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46960);
if(temp__5735__auto__){
var seq__46960__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46960__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46960__$1);
var G__47120 = cljs.core.chunk_rest(seq__46960__$1);
var G__47121 = c__4556__auto__;
var G__47122 = cljs.core.count(c__4556__auto__);
var G__47123 = (0);
seq__46960 = G__47120;
chunk__46961 = G__47121;
count__46962 = G__47122;
i__46963 = G__47123;
continue;
} else {
var map__46980 = cljs.core.first(seq__46960__$1);
var map__46980__$1 = (((((!((map__46980 == null))))?(((((map__46980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46980):map__46980);
var src = map__46980__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46980__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46980__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46980__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46980__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e46983){var e_47124 = e46983;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47124);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47124.message)].join('')));
}

var G__47125 = cljs.core.next(seq__46960__$1);
var G__47126 = null;
var G__47127 = (0);
var G__47128 = (0);
seq__46960 = G__47125;
chunk__46961 = G__47126;
count__46962 = G__47127;
i__46963 = G__47128;
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
var seq__46985 = cljs.core.seq(js_requires);
var chunk__46986 = null;
var count__46987 = (0);
var i__46988 = (0);
while(true){
if((i__46988 < count__46987)){
var js_ns = chunk__46986.cljs$core$IIndexed$_nth$arity$2(null,i__46988);
var require_str_47129 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47129);


var G__47130 = seq__46985;
var G__47131 = chunk__46986;
var G__47132 = count__46987;
var G__47133 = (i__46988 + (1));
seq__46985 = G__47130;
chunk__46986 = G__47131;
count__46987 = G__47132;
i__46988 = G__47133;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46985);
if(temp__5735__auto__){
var seq__46985__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46985__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46985__$1);
var G__47134 = cljs.core.chunk_rest(seq__46985__$1);
var G__47135 = c__4556__auto__;
var G__47136 = cljs.core.count(c__4556__auto__);
var G__47137 = (0);
seq__46985 = G__47134;
chunk__46986 = G__47135;
count__46987 = G__47136;
i__46988 = G__47137;
continue;
} else {
var js_ns = cljs.core.first(seq__46985__$1);
var require_str_47138 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47138);


var G__47139 = cljs.core.next(seq__46985__$1);
var G__47140 = null;
var G__47141 = (0);
var G__47142 = (0);
seq__46985 = G__47139;
chunk__46986 = G__47140;
count__46987 = G__47141;
i__46988 = G__47142;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__46990){
var map__46991 = p__46990;
var map__46991__$1 = (((((!((map__46991 == null))))?(((((map__46991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46991):map__46991);
var msg = map__46991__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46993(s__46994){
return (new cljs.core.LazySeq(null,(function (){
var s__46994__$1 = s__46994;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46994__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46999 = cljs.core.first(xs__6292__auto__);
var map__46999__$1 = (((((!((map__46999 == null))))?(((((map__46999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46999):map__46999);
var src = map__46999__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46999__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46999__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46994__$1,map__46999,map__46999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46991,map__46991__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46993_$_iter__46995(s__46996){
return (new cljs.core.LazySeq(null,((function (s__46994__$1,map__46999,map__46999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46991,map__46991__$1,msg,info,reload_info){
return (function (){
var s__46996__$1 = s__46996;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46996__$1);
if(temp__5735__auto____$1){
var s__46996__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46996__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46996__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46998 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46997 = (0);
while(true){
if((i__46997 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46997);
cljs.core.chunk_append(b__46998,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47143 = (i__46997 + (1));
i__46997 = G__47143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46993_$_iter__46995(cljs.core.chunk_rest(s__46996__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46998),null);
}
} else {
var warning = cljs.core.first(s__46996__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46993_$_iter__46995(cljs.core.rest(s__46996__$2)));
}
} else {
return null;
}
break;
}
});})(s__46994__$1,map__46999,map__46999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46991,map__46991__$1,msg,info,reload_info))
,null,null));
});})(s__46994__$1,map__46999,map__46999__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46991,map__46991__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46993(cljs.core.rest(s__46994__$1)));
} else {
var G__47144 = cljs.core.rest(s__46994__$1);
s__46994__$1 = G__47144;
continue;
}
} else {
var G__47145 = cljs.core.rest(s__46994__$1);
s__46994__$1 = G__47145;
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
var seq__47003_47146 = cljs.core.seq(warnings);
var chunk__47004_47147 = null;
var count__47005_47148 = (0);
var i__47006_47149 = (0);
while(true){
if((i__47006_47149 < count__47005_47148)){
var map__47011_47150 = chunk__47004_47147.cljs$core$IIndexed$_nth$arity$2(null,i__47006_47149);
var map__47011_47151__$1 = (((((!((map__47011_47150 == null))))?(((((map__47011_47150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47011_47150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47011_47150):map__47011_47150);
var w_47152 = map__47011_47151__$1;
var msg_47153__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011_47151__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011_47151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011_47151__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47011_47151__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47156)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47154),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47155),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47153__$1)].join(''));


var G__47157 = seq__47003_47146;
var G__47158 = chunk__47004_47147;
var G__47159 = count__47005_47148;
var G__47160 = (i__47006_47149 + (1));
seq__47003_47146 = G__47157;
chunk__47004_47147 = G__47158;
count__47005_47148 = G__47159;
i__47006_47149 = G__47160;
continue;
} else {
var temp__5735__auto___47161 = cljs.core.seq(seq__47003_47146);
if(temp__5735__auto___47161){
var seq__47003_47162__$1 = temp__5735__auto___47161;
if(cljs.core.chunked_seq_QMARK_(seq__47003_47162__$1)){
var c__4556__auto___47163 = cljs.core.chunk_first(seq__47003_47162__$1);
var G__47164 = cljs.core.chunk_rest(seq__47003_47162__$1);
var G__47165 = c__4556__auto___47163;
var G__47166 = cljs.core.count(c__4556__auto___47163);
var G__47167 = (0);
seq__47003_47146 = G__47164;
chunk__47004_47147 = G__47165;
count__47005_47148 = G__47166;
i__47006_47149 = G__47167;
continue;
} else {
var map__47013_47168 = cljs.core.first(seq__47003_47162__$1);
var map__47013_47169__$1 = (((((!((map__47013_47168 == null))))?(((((map__47013_47168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47013_47168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47013_47168):map__47013_47168);
var w_47170 = map__47013_47169__$1;
var msg_47171__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013_47169__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013_47169__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013_47169__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47013_47169__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47174)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47172),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47173),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47171__$1)].join(''));


var G__47175 = cljs.core.next(seq__47003_47162__$1);
var G__47176 = null;
var G__47177 = (0);
var G__47178 = (0);
seq__47003_47146 = G__47175;
chunk__47004_47147 = G__47176;
count__47005_47148 = G__47177;
i__47006_47149 = G__47178;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__46989_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46989_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47015){
var map__47016 = p__47015;
var map__47016__$1 = (((((!((map__47016 == null))))?(((((map__47016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47016):map__47016);
var msg = map__47016__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47016__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__47018 = cljs.core.seq(updates);
var chunk__47020 = null;
var count__47021 = (0);
var i__47022 = (0);
while(true){
if((i__47022 < count__47021)){
var path = chunk__47020.cljs$core$IIndexed$_nth$arity$2(null,i__47022);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47052_47179 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47056_47180 = null;
var count__47057_47181 = (0);
var i__47058_47182 = (0);
while(true){
if((i__47058_47182 < count__47057_47181)){
var node_47183 = chunk__47056_47180.cljs$core$IIndexed$_nth$arity$2(null,i__47058_47182);
if(cljs.core.not(node_47183.shadow$old)){
var path_match_47184 = shadow.cljs.devtools.client.browser.match_paths(node_47183.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47184)){
var new_link_47185 = (function (){var G__47064 = node_47183.cloneNode(true);
G__47064.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47184),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47064;
})();
(node_47183.shadow$old = true);

(new_link_47185.onload = ((function (seq__47052_47179,chunk__47056_47180,count__47057_47181,i__47058_47182,seq__47018,chunk__47020,count__47021,i__47022,new_link_47185,path_match_47184,node_47183,path,map__47016,map__47016__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47183);
});})(seq__47052_47179,chunk__47056_47180,count__47057_47181,i__47058_47182,seq__47018,chunk__47020,count__47021,i__47022,new_link_47185,path_match_47184,node_47183,path,map__47016,map__47016__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47184], 0));

goog.dom.insertSiblingAfter(new_link_47185,node_47183);


var G__47186 = seq__47052_47179;
var G__47187 = chunk__47056_47180;
var G__47188 = count__47057_47181;
var G__47189 = (i__47058_47182 + (1));
seq__47052_47179 = G__47186;
chunk__47056_47180 = G__47187;
count__47057_47181 = G__47188;
i__47058_47182 = G__47189;
continue;
} else {
var G__47190 = seq__47052_47179;
var G__47191 = chunk__47056_47180;
var G__47192 = count__47057_47181;
var G__47193 = (i__47058_47182 + (1));
seq__47052_47179 = G__47190;
chunk__47056_47180 = G__47191;
count__47057_47181 = G__47192;
i__47058_47182 = G__47193;
continue;
}
} else {
var G__47194 = seq__47052_47179;
var G__47195 = chunk__47056_47180;
var G__47196 = count__47057_47181;
var G__47197 = (i__47058_47182 + (1));
seq__47052_47179 = G__47194;
chunk__47056_47180 = G__47195;
count__47057_47181 = G__47196;
i__47058_47182 = G__47197;
continue;
}
} else {
var temp__5735__auto___47198 = cljs.core.seq(seq__47052_47179);
if(temp__5735__auto___47198){
var seq__47052_47199__$1 = temp__5735__auto___47198;
if(cljs.core.chunked_seq_QMARK_(seq__47052_47199__$1)){
var c__4556__auto___47200 = cljs.core.chunk_first(seq__47052_47199__$1);
var G__47201 = cljs.core.chunk_rest(seq__47052_47199__$1);
var G__47202 = c__4556__auto___47200;
var G__47203 = cljs.core.count(c__4556__auto___47200);
var G__47204 = (0);
seq__47052_47179 = G__47201;
chunk__47056_47180 = G__47202;
count__47057_47181 = G__47203;
i__47058_47182 = G__47204;
continue;
} else {
var node_47205 = cljs.core.first(seq__47052_47199__$1);
if(cljs.core.not(node_47205.shadow$old)){
var path_match_47206 = shadow.cljs.devtools.client.browser.match_paths(node_47205.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47206)){
var new_link_47207 = (function (){var G__47065 = node_47205.cloneNode(true);
G__47065.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47206),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47065;
})();
(node_47205.shadow$old = true);

(new_link_47207.onload = ((function (seq__47052_47179,chunk__47056_47180,count__47057_47181,i__47058_47182,seq__47018,chunk__47020,count__47021,i__47022,new_link_47207,path_match_47206,node_47205,seq__47052_47199__$1,temp__5735__auto___47198,path,map__47016,map__47016__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47205);
});})(seq__47052_47179,chunk__47056_47180,count__47057_47181,i__47058_47182,seq__47018,chunk__47020,count__47021,i__47022,new_link_47207,path_match_47206,node_47205,seq__47052_47199__$1,temp__5735__auto___47198,path,map__47016,map__47016__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47206], 0));

goog.dom.insertSiblingAfter(new_link_47207,node_47205);


var G__47208 = cljs.core.next(seq__47052_47199__$1);
var G__47209 = null;
var G__47210 = (0);
var G__47211 = (0);
seq__47052_47179 = G__47208;
chunk__47056_47180 = G__47209;
count__47057_47181 = G__47210;
i__47058_47182 = G__47211;
continue;
} else {
var G__47212 = cljs.core.next(seq__47052_47199__$1);
var G__47213 = null;
var G__47214 = (0);
var G__47215 = (0);
seq__47052_47179 = G__47212;
chunk__47056_47180 = G__47213;
count__47057_47181 = G__47214;
i__47058_47182 = G__47215;
continue;
}
} else {
var G__47216 = cljs.core.next(seq__47052_47199__$1);
var G__47217 = null;
var G__47218 = (0);
var G__47219 = (0);
seq__47052_47179 = G__47216;
chunk__47056_47180 = G__47217;
count__47057_47181 = G__47218;
i__47058_47182 = G__47219;
continue;
}
}
} else {
}
}
break;
}


var G__47220 = seq__47018;
var G__47221 = chunk__47020;
var G__47222 = count__47021;
var G__47223 = (i__47022 + (1));
seq__47018 = G__47220;
chunk__47020 = G__47221;
count__47021 = G__47222;
i__47022 = G__47223;
continue;
} else {
var G__47224 = seq__47018;
var G__47225 = chunk__47020;
var G__47226 = count__47021;
var G__47227 = (i__47022 + (1));
seq__47018 = G__47224;
chunk__47020 = G__47225;
count__47021 = G__47226;
i__47022 = G__47227;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47018);
if(temp__5735__auto__){
var seq__47018__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47018__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47018__$1);
var G__47228 = cljs.core.chunk_rest(seq__47018__$1);
var G__47229 = c__4556__auto__;
var G__47230 = cljs.core.count(c__4556__auto__);
var G__47231 = (0);
seq__47018 = G__47228;
chunk__47020 = G__47229;
count__47021 = G__47230;
i__47022 = G__47231;
continue;
} else {
var path = cljs.core.first(seq__47018__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47066_47232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47070_47233 = null;
var count__47071_47234 = (0);
var i__47072_47235 = (0);
while(true){
if((i__47072_47235 < count__47071_47234)){
var node_47236 = chunk__47070_47233.cljs$core$IIndexed$_nth$arity$2(null,i__47072_47235);
if(cljs.core.not(node_47236.shadow$old)){
var path_match_47237 = shadow.cljs.devtools.client.browser.match_paths(node_47236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47237)){
var new_link_47238 = (function (){var G__47078 = node_47236.cloneNode(true);
G__47078.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47078;
})();
(node_47236.shadow$old = true);

(new_link_47238.onload = ((function (seq__47066_47232,chunk__47070_47233,count__47071_47234,i__47072_47235,seq__47018,chunk__47020,count__47021,i__47022,new_link_47238,path_match_47237,node_47236,path,seq__47018__$1,temp__5735__auto__,map__47016,map__47016__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47236);
});})(seq__47066_47232,chunk__47070_47233,count__47071_47234,i__47072_47235,seq__47018,chunk__47020,count__47021,i__47022,new_link_47238,path_match_47237,node_47236,path,seq__47018__$1,temp__5735__auto__,map__47016,map__47016__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47237], 0));

goog.dom.insertSiblingAfter(new_link_47238,node_47236);


var G__47239 = seq__47066_47232;
var G__47240 = chunk__47070_47233;
var G__47241 = count__47071_47234;
var G__47242 = (i__47072_47235 + (1));
seq__47066_47232 = G__47239;
chunk__47070_47233 = G__47240;
count__47071_47234 = G__47241;
i__47072_47235 = G__47242;
continue;
} else {
var G__47243 = seq__47066_47232;
var G__47244 = chunk__47070_47233;
var G__47245 = count__47071_47234;
var G__47246 = (i__47072_47235 + (1));
seq__47066_47232 = G__47243;
chunk__47070_47233 = G__47244;
count__47071_47234 = G__47245;
i__47072_47235 = G__47246;
continue;
}
} else {
var G__47247 = seq__47066_47232;
var G__47248 = chunk__47070_47233;
var G__47249 = count__47071_47234;
var G__47250 = (i__47072_47235 + (1));
seq__47066_47232 = G__47247;
chunk__47070_47233 = G__47248;
count__47071_47234 = G__47249;
i__47072_47235 = G__47250;
continue;
}
} else {
var temp__5735__auto___47251__$1 = cljs.core.seq(seq__47066_47232);
if(temp__5735__auto___47251__$1){
var seq__47066_47252__$1 = temp__5735__auto___47251__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47066_47252__$1)){
var c__4556__auto___47253 = cljs.core.chunk_first(seq__47066_47252__$1);
var G__47254 = cljs.core.chunk_rest(seq__47066_47252__$1);
var G__47255 = c__4556__auto___47253;
var G__47256 = cljs.core.count(c__4556__auto___47253);
var G__47257 = (0);
seq__47066_47232 = G__47254;
chunk__47070_47233 = G__47255;
count__47071_47234 = G__47256;
i__47072_47235 = G__47257;
continue;
} else {
var node_47258 = cljs.core.first(seq__47066_47252__$1);
if(cljs.core.not(node_47258.shadow$old)){
var path_match_47259 = shadow.cljs.devtools.client.browser.match_paths(node_47258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47259)){
var new_link_47260 = (function (){var G__47079 = node_47258.cloneNode(true);
G__47079.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47079;
})();
(node_47258.shadow$old = true);

(new_link_47260.onload = ((function (seq__47066_47232,chunk__47070_47233,count__47071_47234,i__47072_47235,seq__47018,chunk__47020,count__47021,i__47022,new_link_47260,path_match_47259,node_47258,seq__47066_47252__$1,temp__5735__auto___47251__$1,path,seq__47018__$1,temp__5735__auto__,map__47016,map__47016__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_47258);
});})(seq__47066_47232,chunk__47070_47233,count__47071_47234,i__47072_47235,seq__47018,chunk__47020,count__47021,i__47022,new_link_47260,path_match_47259,node_47258,seq__47066_47252__$1,temp__5735__auto___47251__$1,path,seq__47018__$1,temp__5735__auto__,map__47016,map__47016__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47259], 0));

goog.dom.insertSiblingAfter(new_link_47260,node_47258);


var G__47261 = cljs.core.next(seq__47066_47252__$1);
var G__47262 = null;
var G__47263 = (0);
var G__47264 = (0);
seq__47066_47232 = G__47261;
chunk__47070_47233 = G__47262;
count__47071_47234 = G__47263;
i__47072_47235 = G__47264;
continue;
} else {
var G__47265 = cljs.core.next(seq__47066_47252__$1);
var G__47266 = null;
var G__47267 = (0);
var G__47268 = (0);
seq__47066_47232 = G__47265;
chunk__47070_47233 = G__47266;
count__47071_47234 = G__47267;
i__47072_47235 = G__47268;
continue;
}
} else {
var G__47269 = cljs.core.next(seq__47066_47252__$1);
var G__47270 = null;
var G__47271 = (0);
var G__47272 = (0);
seq__47066_47232 = G__47269;
chunk__47070_47233 = G__47270;
count__47071_47234 = G__47271;
i__47072_47235 = G__47272;
continue;
}
}
} else {
}
}
break;
}


var G__47273 = cljs.core.next(seq__47018__$1);
var G__47274 = null;
var G__47275 = (0);
var G__47276 = (0);
seq__47018 = G__47273;
chunk__47020 = G__47274;
count__47021 = G__47275;
i__47022 = G__47276;
continue;
} else {
var G__47277 = cljs.core.next(seq__47018__$1);
var G__47278 = null;
var G__47279 = (0);
var G__47280 = (0);
seq__47018 = G__47277;
chunk__47020 = G__47278;
count__47021 = G__47279;
i__47022 = G__47280;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__47080){
var map__47081 = p__47080;
var map__47081__$1 = (((((!((map__47081 == null))))?(((((map__47081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47081):map__47081);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47081__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__47083){
var map__47084 = p__47083;
var map__47084__$1 = (((((!((map__47084 == null))))?(((((map__47084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47084):map__47084);
var _ = map__47084__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47084__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47086,done,error){
var map__47087 = p__47086;
var map__47087__$1 = (((((!((map__47087 == null))))?(((((map__47087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47087):map__47087);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47087__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47089,done,error){
var map__47090 = p__47089;
var map__47090__$1 = (((((!((map__47090 == null))))?(((((map__47090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47090):map__47090);
var msg = map__47090__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47090__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47090__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47090__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47092){
var map__47093 = p__47092;
var map__47093__$1 = (((((!((map__47093 == null))))?(((((map__47093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47093):map__47093);
var src = map__47093__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47095 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47095) : done.call(null,G__47095));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47096){
var map__47097 = p__47096;
var map__47097__$1 = (((((!((map__47097 == null))))?(((((map__47097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47097):map__47097);
var msg__$1 = map__47097__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47097__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47099){var ex = e47099;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47100){
var map__47101 = p__47100;
var map__47101__$1 = (((((!((map__47101 == null))))?(((((map__47101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47101):map__47101);
var env = map__47101__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47101__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__47103){
var map__47104 = p__47103;
var map__47104__$1 = (((((!((map__47104 == null))))?(((((map__47104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47104):map__47104);
var msg = map__47104__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47104__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47106){
var map__47107 = p__47106;
var map__47107__$1 = (((((!((map__47107 == null))))?(((((map__47107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47107):map__47107);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47107__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47107__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__47109){
var map__47110 = p__47109;
var map__47110__$1 = (((((!((map__47110 == null))))?(((((map__47110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47110):map__47110);
var svc = map__47110__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47110__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
