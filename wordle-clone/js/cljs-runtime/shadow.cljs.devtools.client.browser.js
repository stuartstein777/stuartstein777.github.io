goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___46206 = arguments.length;
var i__4737__auto___46207 = (0);
while(true){
if((i__4737__auto___46207 < len__4736__auto___46206)){
args__4742__auto__.push((arguments[i__4737__auto___46207]));

var G__46208 = (i__4737__auto___46207 + (1));
i__4737__auto___46207 = G__46208;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq46061){
var G__46062 = cljs.core.first(seq46061);
var seq46061__$1 = cljs.core.next(seq46061);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46062,seq46061__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__46075 = cljs.core.seq(sources);
var chunk__46076 = null;
var count__46077 = (0);
var i__46078 = (0);
while(true){
if((i__46078 < count__46077)){
var map__46085 = chunk__46076.cljs$core$IIndexed$_nth$arity$2(null,i__46078);
var map__46085__$1 = (((((!((map__46085 == null))))?(((((map__46085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46085):map__46085);
var src = map__46085__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46085__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46085__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46085__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46085__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46087){var e_46209 = e46087;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46209);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46209.message)].join('')));
}

var G__46210 = seq__46075;
var G__46211 = chunk__46076;
var G__46212 = count__46077;
var G__46213 = (i__46078 + (1));
seq__46075 = G__46210;
chunk__46076 = G__46211;
count__46077 = G__46212;
i__46078 = G__46213;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46075);
if(temp__5735__auto__){
var seq__46075__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46075__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46075__$1);
var G__46214 = cljs.core.chunk_rest(seq__46075__$1);
var G__46215 = c__4556__auto__;
var G__46216 = cljs.core.count(c__4556__auto__);
var G__46217 = (0);
seq__46075 = G__46214;
chunk__46076 = G__46215;
count__46077 = G__46216;
i__46078 = G__46217;
continue;
} else {
var map__46088 = cljs.core.first(seq__46075__$1);
var map__46088__$1 = (((((!((map__46088 == null))))?(((((map__46088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46088):map__46088);
var src = map__46088__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46088__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e46092){var e_46218 = e46092;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_46218);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_46218.message)].join('')));
}

var G__46219 = cljs.core.next(seq__46075__$1);
var G__46220 = null;
var G__46221 = (0);
var G__46222 = (0);
seq__46075 = G__46219;
chunk__46076 = G__46220;
count__46077 = G__46221;
i__46078 = G__46222;
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
var seq__46094 = cljs.core.seq(js_requires);
var chunk__46095 = null;
var count__46096 = (0);
var i__46097 = (0);
while(true){
if((i__46097 < count__46096)){
var js_ns = chunk__46095.cljs$core$IIndexed$_nth$arity$2(null,i__46097);
var require_str_46223 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46223);


var G__46224 = seq__46094;
var G__46225 = chunk__46095;
var G__46226 = count__46096;
var G__46227 = (i__46097 + (1));
seq__46094 = G__46224;
chunk__46095 = G__46225;
count__46096 = G__46226;
i__46097 = G__46227;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46094);
if(temp__5735__auto__){
var seq__46094__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46094__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46094__$1);
var G__46228 = cljs.core.chunk_rest(seq__46094__$1);
var G__46229 = c__4556__auto__;
var G__46230 = cljs.core.count(c__4556__auto__);
var G__46231 = (0);
seq__46094 = G__46228;
chunk__46095 = G__46229;
count__46096 = G__46230;
i__46097 = G__46231;
continue;
} else {
var js_ns = cljs.core.first(seq__46094__$1);
var require_str_46232 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_46232);


var G__46233 = cljs.core.next(seq__46094__$1);
var G__46234 = null;
var G__46235 = (0);
var G__46236 = (0);
seq__46094 = G__46233;
chunk__46095 = G__46234;
count__46096 = G__46235;
i__46097 = G__46236;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__46100 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__46100) : callback.call(null,G__46100));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__46102){
var map__46103 = p__46102;
var map__46103__$1 = (((((!((map__46103 == null))))?(((((map__46103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46103):map__46103);
var msg = map__46103__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46103__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46105(s__46106){
return (new cljs.core.LazySeq(null,(function (){
var s__46106__$1 = s__46106;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__46106__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__46111 = cljs.core.first(xs__6292__auto__);
var map__46111__$1 = (((((!((map__46111 == null))))?(((((map__46111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46111):map__46111);
var src = map__46111__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46111__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46111__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__46106__$1,map__46111,map__46111__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46103,map__46103__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46105_$_iter__46107(s__46108){
return (new cljs.core.LazySeq(null,((function (s__46106__$1,map__46111,map__46111__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46103,map__46103__$1,msg,info,reload_info){
return (function (){
var s__46108__$1 = s__46108;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__46108__$1);
if(temp__5735__auto____$1){
var s__46108__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__46108__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__46108__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__46110 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__46109 = (0);
while(true){
if((i__46109 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__46109);
cljs.core.chunk_append(b__46110,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__46237 = (i__46109 + (1));
i__46109 = G__46237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46110),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46105_$_iter__46107(cljs.core.chunk_rest(s__46108__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46110),null);
}
} else {
var warning = cljs.core.first(s__46108__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46105_$_iter__46107(cljs.core.rest(s__46108__$2)));
}
} else {
return null;
}
break;
}
});})(s__46106__$1,map__46111,map__46111__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46103,map__46103__$1,msg,info,reload_info))
,null,null));
});})(s__46106__$1,map__46111,map__46111__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__46103,map__46103__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__46105(cljs.core.rest(s__46106__$1)));
} else {
var G__46238 = cljs.core.rest(s__46106__$1);
s__46106__$1 = G__46238;
continue;
}
} else {
var G__46239 = cljs.core.rest(s__46106__$1);
s__46106__$1 = G__46239;
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
var seq__46113_46240 = cljs.core.seq(warnings);
var chunk__46114_46241 = null;
var count__46115_46242 = (0);
var i__46116_46243 = (0);
while(true){
if((i__46116_46243 < count__46115_46242)){
var map__46122_46244 = chunk__46114_46241.cljs$core$IIndexed$_nth$arity$2(null,i__46116_46243);
var map__46122_46245__$1 = (((((!((map__46122_46244 == null))))?(((((map__46122_46244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46122_46244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46122_46244):map__46122_46244);
var w_46246 = map__46122_46245__$1;
var msg_46247__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122_46245__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122_46245__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122_46245__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46122_46245__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46250)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46248),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46249),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46247__$1)].join(''));


var G__46251 = seq__46113_46240;
var G__46252 = chunk__46114_46241;
var G__46253 = count__46115_46242;
var G__46254 = (i__46116_46243 + (1));
seq__46113_46240 = G__46251;
chunk__46114_46241 = G__46252;
count__46115_46242 = G__46253;
i__46116_46243 = G__46254;
continue;
} else {
var temp__5735__auto___46255 = cljs.core.seq(seq__46113_46240);
if(temp__5735__auto___46255){
var seq__46113_46256__$1 = temp__5735__auto___46255;
if(cljs.core.chunked_seq_QMARK_(seq__46113_46256__$1)){
var c__4556__auto___46257 = cljs.core.chunk_first(seq__46113_46256__$1);
var G__46258 = cljs.core.chunk_rest(seq__46113_46256__$1);
var G__46259 = c__4556__auto___46257;
var G__46260 = cljs.core.count(c__4556__auto___46257);
var G__46261 = (0);
seq__46113_46240 = G__46258;
chunk__46114_46241 = G__46259;
count__46115_46242 = G__46260;
i__46116_46243 = G__46261;
continue;
} else {
var map__46125_46262 = cljs.core.first(seq__46113_46256__$1);
var map__46125_46263__$1 = (((((!((map__46125_46262 == null))))?(((((map__46125_46262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46125_46262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46125_46262):map__46125_46262);
var w_46264 = map__46125_46263__$1;
var msg_46265__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46125_46263__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_46266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46125_46263__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_46267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46125_46263__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_46268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46125_46263__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_46268)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_46266),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_46267),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_46265__$1)].join(''));


var G__46269 = cljs.core.next(seq__46113_46256__$1);
var G__46270 = null;
var G__46271 = (0);
var G__46272 = (0);
seq__46113_46240 = G__46269;
chunk__46114_46241 = G__46270;
count__46115_46242 = G__46271;
i__46116_46243 = G__46272;
continue;
}
} else {
}
}
break;
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

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__46101_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__46101_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__46127){
var map__46128 = p__46127;
var map__46128__$1 = (((((!((map__46128 == null))))?(((((map__46128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46128):map__46128);
var msg = map__46128__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46128__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__46130 = cljs.core.seq(updates);
var chunk__46132 = null;
var count__46133 = (0);
var i__46134 = (0);
while(true){
if((i__46134 < count__46133)){
var path = chunk__46132.cljs$core$IIndexed$_nth$arity$2(null,i__46134);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46160_46273 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46163_46274 = null;
var count__46164_46275 = (0);
var i__46165_46276 = (0);
while(true){
if((i__46165_46276 < count__46164_46275)){
var node_46277 = chunk__46163_46274.cljs$core$IIndexed$_nth$arity$2(null,i__46165_46276);
var path_match_46278 = shadow.cljs.devtools.client.browser.match_paths(node_46277.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46278)){
var new_link_46279 = (function (){var G__46170 = node_46277.cloneNode(true);
G__46170.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46278),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46170;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46278], 0));

goog.dom.insertSiblingAfter(new_link_46279,node_46277);

goog.dom.removeNode(node_46277);


var G__46280 = seq__46160_46273;
var G__46281 = chunk__46163_46274;
var G__46282 = count__46164_46275;
var G__46283 = (i__46165_46276 + (1));
seq__46160_46273 = G__46280;
chunk__46163_46274 = G__46281;
count__46164_46275 = G__46282;
i__46165_46276 = G__46283;
continue;
} else {
var G__46284 = seq__46160_46273;
var G__46285 = chunk__46163_46274;
var G__46286 = count__46164_46275;
var G__46287 = (i__46165_46276 + (1));
seq__46160_46273 = G__46284;
chunk__46163_46274 = G__46285;
count__46164_46275 = G__46286;
i__46165_46276 = G__46287;
continue;
}
} else {
var temp__5735__auto___46288 = cljs.core.seq(seq__46160_46273);
if(temp__5735__auto___46288){
var seq__46160_46289__$1 = temp__5735__auto___46288;
if(cljs.core.chunked_seq_QMARK_(seq__46160_46289__$1)){
var c__4556__auto___46290 = cljs.core.chunk_first(seq__46160_46289__$1);
var G__46291 = cljs.core.chunk_rest(seq__46160_46289__$1);
var G__46292 = c__4556__auto___46290;
var G__46293 = cljs.core.count(c__4556__auto___46290);
var G__46294 = (0);
seq__46160_46273 = G__46291;
chunk__46163_46274 = G__46292;
count__46164_46275 = G__46293;
i__46165_46276 = G__46294;
continue;
} else {
var node_46295 = cljs.core.first(seq__46160_46289__$1);
var path_match_46296 = shadow.cljs.devtools.client.browser.match_paths(node_46295.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46296)){
var new_link_46297 = (function (){var G__46171 = node_46295.cloneNode(true);
G__46171.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46296),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46171;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46296], 0));

goog.dom.insertSiblingAfter(new_link_46297,node_46295);

goog.dom.removeNode(node_46295);


var G__46298 = cljs.core.next(seq__46160_46289__$1);
var G__46299 = null;
var G__46300 = (0);
var G__46301 = (0);
seq__46160_46273 = G__46298;
chunk__46163_46274 = G__46299;
count__46164_46275 = G__46300;
i__46165_46276 = G__46301;
continue;
} else {
var G__46302 = cljs.core.next(seq__46160_46289__$1);
var G__46303 = null;
var G__46304 = (0);
var G__46305 = (0);
seq__46160_46273 = G__46302;
chunk__46163_46274 = G__46303;
count__46164_46275 = G__46304;
i__46165_46276 = G__46305;
continue;
}
}
} else {
}
}
break;
}


var G__46306 = seq__46130;
var G__46307 = chunk__46132;
var G__46308 = count__46133;
var G__46309 = (i__46134 + (1));
seq__46130 = G__46306;
chunk__46132 = G__46307;
count__46133 = G__46308;
i__46134 = G__46309;
continue;
} else {
var G__46310 = seq__46130;
var G__46311 = chunk__46132;
var G__46312 = count__46133;
var G__46313 = (i__46134 + (1));
seq__46130 = G__46310;
chunk__46132 = G__46311;
count__46133 = G__46312;
i__46134 = G__46313;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46130);
if(temp__5735__auto__){
var seq__46130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46130__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__46130__$1);
var G__46314 = cljs.core.chunk_rest(seq__46130__$1);
var G__46315 = c__4556__auto__;
var G__46316 = cljs.core.count(c__4556__auto__);
var G__46317 = (0);
seq__46130 = G__46314;
chunk__46132 = G__46315;
count__46133 = G__46316;
i__46134 = G__46317;
continue;
} else {
var path = cljs.core.first(seq__46130__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__46172_46318 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__46175_46319 = null;
var count__46176_46320 = (0);
var i__46177_46321 = (0);
while(true){
if((i__46177_46321 < count__46176_46320)){
var node_46322 = chunk__46175_46319.cljs$core$IIndexed$_nth$arity$2(null,i__46177_46321);
var path_match_46323 = shadow.cljs.devtools.client.browser.match_paths(node_46322.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46323)){
var new_link_46324 = (function (){var G__46182 = node_46322.cloneNode(true);
G__46182.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46323),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46182;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46323], 0));

goog.dom.insertSiblingAfter(new_link_46324,node_46322);

goog.dom.removeNode(node_46322);


var G__46325 = seq__46172_46318;
var G__46326 = chunk__46175_46319;
var G__46327 = count__46176_46320;
var G__46328 = (i__46177_46321 + (1));
seq__46172_46318 = G__46325;
chunk__46175_46319 = G__46326;
count__46176_46320 = G__46327;
i__46177_46321 = G__46328;
continue;
} else {
var G__46329 = seq__46172_46318;
var G__46330 = chunk__46175_46319;
var G__46331 = count__46176_46320;
var G__46332 = (i__46177_46321 + (1));
seq__46172_46318 = G__46329;
chunk__46175_46319 = G__46330;
count__46176_46320 = G__46331;
i__46177_46321 = G__46332;
continue;
}
} else {
var temp__5735__auto___46333__$1 = cljs.core.seq(seq__46172_46318);
if(temp__5735__auto___46333__$1){
var seq__46172_46334__$1 = temp__5735__auto___46333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46172_46334__$1)){
var c__4556__auto___46335 = cljs.core.chunk_first(seq__46172_46334__$1);
var G__46336 = cljs.core.chunk_rest(seq__46172_46334__$1);
var G__46337 = c__4556__auto___46335;
var G__46338 = cljs.core.count(c__4556__auto___46335);
var G__46339 = (0);
seq__46172_46318 = G__46336;
chunk__46175_46319 = G__46337;
count__46176_46320 = G__46338;
i__46177_46321 = G__46339;
continue;
} else {
var node_46340 = cljs.core.first(seq__46172_46334__$1);
var path_match_46341 = shadow.cljs.devtools.client.browser.match_paths(node_46340.getAttribute("href"),path);
if(cljs.core.truth_(path_match_46341)){
var new_link_46342 = (function (){var G__46183 = node_46340.cloneNode(true);
G__46183.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_46341),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__46183;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_46341], 0));

goog.dom.insertSiblingAfter(new_link_46342,node_46340);

goog.dom.removeNode(node_46340);


var G__46343 = cljs.core.next(seq__46172_46334__$1);
var G__46344 = null;
var G__46345 = (0);
var G__46346 = (0);
seq__46172_46318 = G__46343;
chunk__46175_46319 = G__46344;
count__46176_46320 = G__46345;
i__46177_46321 = G__46346;
continue;
} else {
var G__46347 = cljs.core.next(seq__46172_46334__$1);
var G__46348 = null;
var G__46349 = (0);
var G__46350 = (0);
seq__46172_46318 = G__46347;
chunk__46175_46319 = G__46348;
count__46176_46320 = G__46349;
i__46177_46321 = G__46350;
continue;
}
}
} else {
}
}
break;
}


var G__46351 = cljs.core.next(seq__46130__$1);
var G__46352 = null;
var G__46353 = (0);
var G__46354 = (0);
seq__46130 = G__46351;
chunk__46132 = G__46352;
count__46133 = G__46353;
i__46134 = G__46354;
continue;
} else {
var G__46355 = cljs.core.next(seq__46130__$1);
var G__46356 = null;
var G__46357 = (0);
var G__46358 = (0);
seq__46130 = G__46355;
chunk__46132 = G__46356;
count__46133 = G__46357;
i__46134 = G__46358;
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
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__46184){
var map__46185 = p__46184;
var map__46185__$1 = (((((!((map__46185 == null))))?(((((map__46185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46185):map__46185);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__46187,done){
var map__46188 = p__46187;
var map__46188__$1 = (((((!((map__46188 == null))))?(((((map__46188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46188):map__46188);
var msg = map__46188__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46188__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__46190){
var map__46191 = p__46190;
var map__46191__$1 = (((((!((map__46191 == null))))?(((((map__46191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46191):map__46191);
var src = map__46191__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46191__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e46193){var e = e46193;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__46194,done){
var map__46195 = p__46194;
var map__46195__$1 = (((((!((map__46195 == null))))?(((((map__46195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46195):map__46195);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46195__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46195__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__46197){
var map__46198 = p__46197;
var map__46198__$1 = (((((!((map__46198 == null))))?(((((map__46198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46198):map__46198);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46198__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__46200,done){
var map__46201 = p__46200;
var map__46201__$1 = (((((!((map__46201 == null))))?(((((map__46201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46201):map__46201);
var msg = map__46201__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46201__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__46203_46359 = type;
var G__46203_46360__$1 = (((G__46203_46359 instanceof cljs.core.Keyword))?G__46203_46359.fqn:null);
switch (G__46203_46360__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__46204 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__46204.cljs$core$IFn$_invoke$arity$1 ? fexpr__46204.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__46204.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4126__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e46205){var e = e46205;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___46362 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___46362)){
var s_46363 = temp__5735__auto___46362;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_46363.onclose = (function (e){
return null;
}));

s_46363.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4115__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
