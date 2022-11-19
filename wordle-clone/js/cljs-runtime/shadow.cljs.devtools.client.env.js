goog.provide('shadow.cljs.devtools.client.env');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.pprint');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
shadow.cljs.devtools.client.env.module_loaded = (function shadow$cljs$devtools$client$env$module_loaded(name){
return shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
shadow.cljs.devtools.client.env.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$env$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.env.active_modules_ref),module);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.runtime_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.runtime_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
}
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.enabled = goog.define("shadow.cljs.devtools.client.env.enabled",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.autoload = goog.define("shadow.cljs.devtools.client.env.autoload",true);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.module_format = goog.define("shadow.cljs.devtools.client.env.module_format","goog");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.reload_with_state = goog.define("shadow.cljs.devtools.client.env.reload_with_state",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.build_id = goog.define("shadow.cljs.devtools.client.env.build_id","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.proc_id = goog.define("shadow.cljs.devtools.client.env.proc_id","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.server_host = goog.define("shadow.cljs.devtools.client.env.server_host","");
/**
 * @define {number}
 */
shadow.cljs.devtools.client.env.server_port = goog.define("shadow.cljs.devtools.client.env.server_port",(8200));
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.repl_pprint = goog.define("shadow.cljs.devtools.client.env.repl_pprint",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.use_document_host = goog.define("shadow.cljs.devtools.client.env.use_document_host",true);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.devtools_url = goog.define("shadow.cljs.devtools.client.env.devtools_url","");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.reload_strategy = goog.define("shadow.cljs.devtools.client.env.reload_strategy","optimized");
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ssl = goog.define("shadow.cljs.devtools.client.env.ssl",false);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.env.ignore_warnings = goog.define("shadow.cljs.devtools.client.env.ignore_warnings",false);
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.log_style = goog.define("shadow.cljs.devtools.client.env.log_style","font-weight: bold;");
/**
 * @define {string}
 */
shadow.cljs.devtools.client.env.custom_notify_fn = goog.define("shadow.cljs.devtools.client.env.custom_notify_fn","");
shadow.cljs.devtools.client.env.devtools_info = (function shadow$cljs$devtools$client$env$devtools_info(){
return ({"server_port": shadow.cljs.devtools.client.env.server_port, "server_host": shadow.cljs.devtools.client.env.server_host, "build_id": shadow.cljs.devtools.client.env.build_id, "proc_id": shadow.cljs.devtools.client.env.proc_id, "runtime_id": shadow.cljs.devtools.client.env.runtime_id, "ssl": shadow.cljs.devtools.client.env.ssl});
});
shadow.cljs.devtools.client.env.get_server_host = (function shadow$cljs$devtools$client$env$get_server_host(){
if(cljs.core.truth_(((shadow.cljs.devtools.client.env.use_document_host)?(function (){var and__4115__auto__ = goog.global.document;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = goog.global.document.location;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.seq(goog.global.document.location.hostname);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})():false))){
return document.location.hostname;
} else {
if(cljs.core.seq(shadow.cljs.devtools.client.env.server_host)){
return shadow.cljs.devtools.client.env.server_host;
} else {
return "localhost";

}
}
});
shadow.cljs.devtools.client.env.get_url_base = (function shadow$cljs$devtools$client$env$get_url_base(){
if(cljs.core.seq(shadow.cljs.devtools.client.env.devtools_url)){
return shadow.cljs.devtools.client.env.devtools_url;
} else {
return ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_server_host()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port)].join('');
}
});
shadow.cljs.devtools.client.env.get_ws_url_base = (function shadow$cljs$devtools$client$env$get_ws_url_base(){
return clojure.string.replace(shadow.cljs.devtools.client.env.get_url_base(),/^http/,"ws");
});
shadow.cljs.devtools.client.env.ws_url = (function shadow$cljs$devtools$client$env$ws_url(runtime_type){
if((runtime_type instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? runtime-type)"));
}

return [shadow.cljs.devtools.client.env.get_ws_url_base(),"/ws/worker/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id,"/",cljs.core.name(runtime_type)].join('');
});
shadow.cljs.devtools.client.env.ws_listener_url = (function shadow$cljs$devtools$client$env$ws_listener_url(client_type){
return [shadow.cljs.devtools.client.env.get_ws_url_base(),"/ws/listener/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.files_url = (function shadow$cljs$devtools$client$env$files_url(){
return [shadow.cljs.devtools.client.env.get_url_base(),"/worker/files/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/",shadow.cljs.devtools.client.env.runtime_id].join('');
});
shadow.cljs.devtools.client.env.repl_print_fn = (((!(shadow.cljs.devtools.client.env.repl_pprint)))?cljs.core.pr_str:(function shadow$cljs$devtools$client$env$repl_pprint(obj){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40452_40794 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40453_40795 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40454_40796 = true;
var _STAR_print_fn_STAR__temp_val__40455_40797 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40454_40796);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40455_40797);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(obj);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40453_40795);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40452_40794);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
}));
shadow.cljs.devtools.client.env.repl_error = (function shadow$cljs$devtools$client$env$repl_error(e){
var G__40459 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","invoke-error","repl/invoke-error",839951858),new cljs.core.Keyword(null,"error","error",-978969032),e.message], null);
if(cljs.core.truth_(e.hasOwnProperty("stack"))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40459,new cljs.core.Keyword(null,"stack","stack",-793405930),e.stack);
} else {
return G__40459;
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.repl_results_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.repl_results_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.repl_call = (function shadow$cljs$devtools$client$env$repl_call(repl_expr,repl_error){
try{var result_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var result = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","result","repl/result",1421065572),new cljs.core.Keyword(null,"result-id","result-id",-2004530966),result_id], null);
var start = Date.now();
var ret = (repl_expr.cljs$core$IFn$_invoke$arity$0 ? repl_expr.cljs$core$IFn$_invoke$arity$0() : repl_expr.call(null));
var runtime = (Date.now() - start);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc,result_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timestamp","timestamp",579478971),Date.now(),new cljs.core.Keyword(null,"result","result",1415092211),ret], null));

(cljs.core._STAR_3 = cljs.core._STAR_2);

(cljs.core._STAR_2 = cljs.core._STAR_1);

(cljs.core._STAR_1 = ret);

try{var printed = (shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1 ? shadow.cljs.devtools.client.env.repl_print_fn.cljs$core$IFn$_invoke$arity$1(ret) : shadow.cljs.devtools.client.env.repl_print_fn.call(null,ret));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.repl_results_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result_id,new cljs.core.Keyword(null,"printed","printed",1871492381)], null),printed);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"value","value",305978217),printed,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ms","ms",-1152709733),runtime], 0));
}catch (e40484){var e = e40484;
console.log("encoding of result failed",e,ret);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"error","error",-978969032),"ENCODING FAILED, check host console");
}}catch (e40465){var e = e40465;
(cljs.core._STAR_e = e);

return (repl_error.cljs$core$IFn$_invoke$arity$1 ? repl_error.cljs$core$IFn$_invoke$arity$1(e) : repl_error.call(null,e));
}});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.reset_print_fn_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.reset_print_fn_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.env.set_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$set_print_fns_BANG_(msg_fn){
var original_print_fn = cljs.core._STAR_print_fn_STAR_;
var original_print_err_fn = cljs.core._STAR_print_err_fn_STAR_;
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,(function shadow$cljs$devtools$client$env$set_print_fns_BANG__$_reset_print_fns_BANG_(){
cljs.core.set_print_fn_BANG_(original_print_fn);

return cljs.core.set_print_err_fn_BANG_(original_print_err_fn);
}));

cljs.core.set_print_fn_BANG_((function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate = function (args){
var G__40490_40801 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","out","repl/out",-905715102),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__40490_40801) : msg_fn.call(null,G__40490_40801));

if(cljs.core.truth_(original_print_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40802__i = 0, G__40802__a = new Array(arguments.length -  0);
while (G__40802__i < G__40802__a.length) {G__40802__a[G__40802__i] = arguments[G__40802__i + 0]; ++G__40802__i;}
  args = new cljs.core.IndexedSeq(G__40802__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$lang$applyTo = (function (arglist__40803){
var args = cljs.core.seq(arglist__40803);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_fn;
})()
);

return cljs.core.set_print_err_fn_BANG_((function() { 
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate = function (args){
var G__40491_40804 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","err","repl/err",-2086562244),new cljs.core.Keyword(null,"text","text",-1790561697),clojure.string.join.cljs$core$IFn$_invoke$arity$2("",args)], null);
(msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(G__40491_40804) : msg_fn.call(null,G__40491_40804));

if(cljs.core.truth_(original_print_err_fn)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(original_print_err_fn,args);
} else {
return null;
}
};
var shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40808__i = 0, G__40808__a = new Array(arguments.length -  0);
while (G__40808__i < G__40808__a.length) {G__40808__a[G__40808__i] = arguments[G__40808__i + 0]; ++G__40808__i;}
  args = new cljs.core.IndexedSeq(G__40808__a,0,null);
} 
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate.call(this,args);};
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$maxFixedArity = 0;
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$lang$applyTo = (function (arglist__40809){
var args = cljs.core.seq(arglist__40809);
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate(args);
});
shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn.cljs$core$IFn$_invoke$arity$variadic = shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn__delegate;
return shadow$cljs$devtools$client$env$set_print_fns_BANG__$_repl_print_err_fn;
})()
);
});
shadow.cljs.devtools.client.env.reset_print_fns_BANG_ = (function shadow$cljs$devtools$client$env$reset_print_fns_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.env.reset_print_fn_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
(x.cljs$core$IFn$_invoke$arity$0 ? x.cljs$core$IFn$_invoke$arity$0() : x.call(null));

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.reset_print_fn_ref,null);
} else {
return null;
}
});
shadow.cljs.devtools.client.env.async_ops = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("repl","session-start","repl/session-start",-1824978454),null,new cljs.core.Keyword("repl","init","repl/init",-1883779019),null,new cljs.core.Keyword("repl","require","repl/require",-497010086),null], null), null);
shadow.cljs.devtools.client.env.repl_queue_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.repl_queue_arr !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.repl_queue_arr = [];
}
shadow.cljs.devtools.client.env.process_next_BANG_ = (function shadow$cljs$devtools$client$env$process_next_BANG_(){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.env.repl_queue_ref))){
return null;
} else {
var temp__5739__auto__ = shadow.cljs.devtools.client.env.repl_queue_arr.shift();
if((temp__5739__auto__ == null)){
return null;
} else {
var task = temp__5739__auto__;
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.repl_queue_ref,true);

return (task.cljs$core$IFn$_invoke$arity$0 ? task.cljs$core$IFn$_invoke$arity$0() : task.call(null));
}
}
});
shadow.cljs.devtools.client.env.done_BANG_ = (function shadow$cljs$devtools$client$env$done_BANG_(){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.env.repl_queue_ref,false);

return shadow.cljs.devtools.client.env.process_next_BANG_();
});
shadow.cljs.devtools.client.env.preprocess_ws_msg = (function shadow$cljs$devtools$client$env$preprocess_ws_msg(p__40509){
var map__40510 = p__40509;
var map__40510__$1 = (((((!((map__40510 == null))))?(((((map__40510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40510):map__40510);
var msg = map__40510__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__40523 = type;
var G__40523__$1 = (((G__40523 instanceof cljs.core.Keyword))?G__40523.fqn:null);
switch (G__40523__$1) {
case "build-completed":
var map__40524 = msg;
var map__40524__$1 = (((((!((map__40524 == null))))?(((((map__40524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40524):map__40524);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40524__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$env$preprocess_ws_msg_$_iter__40526(s__40527){
return (new cljs.core.LazySeq(null,(function (){
var s__40527__$1 = s__40527;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40527__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__40533 = cljs.core.first(xs__6292__auto__);
var map__40533__$1 = (((((!((map__40533 == null))))?(((((map__40533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40533):map__40533);
var src = map__40533__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40533__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__40527__$1,map__40533,map__40533__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40524,map__40524__$1,info,G__40523,G__40523__$1,map__40510,map__40510__$1,msg,type){
return (function shadow$cljs$devtools$client$env$preprocess_ws_msg_$_iter__40526_$_iter__40528(s__40529){
return (new cljs.core.LazySeq(null,((function (s__40527__$1,map__40533,map__40533__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40524,map__40524__$1,info,G__40523,G__40523__$1,map__40510,map__40510__$1,msg,type){
return (function (){
var s__40529__$1 = s__40529;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__40529__$1);
if(temp__5735__auto____$1){
var s__40529__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__40529__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40529__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40531 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40530 = (0);
while(true){
if((i__40530 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__40530);
cljs.core.chunk_append(b__40531,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__40821 = (i__40530 + (1));
i__40530 = G__40821;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40531),shadow$cljs$devtools$client$env$preprocess_ws_msg_$_iter__40526_$_iter__40528(cljs.core.chunk_rest(s__40529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40531),null);
}
} else {
var warning = cljs.core.first(s__40529__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$env$preprocess_ws_msg_$_iter__40526_$_iter__40528(cljs.core.rest(s__40529__$2)));
}
} else {
return null;
}
break;
}
});})(s__40527__$1,map__40533,map__40533__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40524,map__40524__$1,info,G__40523,G__40523__$1,map__40510,map__40510__$1,msg,type))
,null,null));
});})(s__40527__$1,map__40533,map__40533__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__40524,map__40524__$1,info,G__40523,G__40523__$1,map__40510,map__40510__$1,msg,type))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$env$preprocess_ws_msg_$_iter__40526(cljs.core.rest(s__40527__$1)));
} else {
var G__40822 = cljs.core.rest(s__40527__$1);
s__40527__$1 = G__40822;
continue;
}
} else {
var G__40823 = cljs.core.rest(s__40527__$1);
s__40527__$1 = G__40823;
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
return cljs.core.assoc_in(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),warnings);

break;
default:
return msg;

}
});
shadow.cljs.devtools.client.env.custom_notify_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"build-complete","build-complete",-501868472),null,new cljs.core.Keyword(null,"build-init","build-init",-1115755563),null,new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466),null,new cljs.core.Keyword(null,"build-start","build-start",-959649480),null], null), null);
shadow.cljs.devtools.client.env.run_custom_notify_BANG_ = (function shadow$cljs$devtools$client$env$run_custom_notify_BANG_(msg){
if(cljs.core.seq(shadow.cljs.devtools.client.env.custom_notify_fn)){
var fn_40828 = goog.getObjectByName(shadow.cljs.devtools.client.env.custom_notify_fn,$CLJS);
if((!(cljs.core.fn_QMARK_(fn_40828)))){
console.warn("couldn't find custom :build-notify",shadow.cljs.devtools.client.env.custom_notify_fn);
} else {
try{fn_40828(msg);
}catch (e40564){var e_40829 = e40564;
console.error("Failed to run custom :build-notify",shadow.cljs.devtools.client.env.custom_notify_fn);

console.error(e_40829);
}}
} else {
}

return shadow.cljs.devtools.client.env.done_BANG_();
});
shadow.cljs.devtools.client.env.process_ws_msg = (function shadow$cljs$devtools$client$env$process_ws_msg(text,handler){
var _STAR_default_data_reader_fn_STAR__orig_val__40584 = cljs.tools.reader._STAR_default_data_reader_fn_STAR_;
var _STAR_default_data_reader_fn_STAR__temp_val__40585 = (function (tag,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tagged-literal","tagged-literal",1758013066),tag,value], null);
});
(cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__temp_val__40585);

try{try{var msg_40834 = shadow.cljs.devtools.client.env.preprocess_ws_msg(cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$1(text));
shadow.cljs.devtools.client.env.repl_queue_arr.push((function (){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(msg_40834,shadow.cljs.devtools.client.env.done_BANG_) : handler.call(null,msg_40834,shadow.cljs.devtools.client.env.done_BANG_));
}));

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.custom_notify_types,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg_40834))){
shadow.cljs.devtools.client.env.repl_queue_arr.push((function (){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(msg_40834);
}));
} else {
}

return shadow.cljs.devtools.client.env.process_next_BANG_();
}catch (e40596){var e = e40596;
console.warn("failed to parse websocket message",text,e);

throw e;
}}finally {(cljs.tools.reader._STAR_default_data_reader_fn_STAR_ = _STAR_default_data_reader_fn_STAR__orig_val__40584);
}});
shadow.cljs.devtools.client.env.make_task_fn = (function shadow$cljs$devtools$client$env$make_task_fn(p__40604,p__40605){
var map__40606 = p__40604;
var map__40606__$1 = (((((!((map__40606 == null))))?(((((map__40606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40606):map__40606);
var log_missing_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765));
var log_call_async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192));
var log_call = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40606__$1,new cljs.core.Keyword(null,"log-call","log-call",412404391));
var map__40608 = p__40605;
var map__40608__$1 = (((((!((map__40608 == null))))?(((((map__40608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40608):map__40608);
var fn_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40608__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40608__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var async = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40608__$1,new cljs.core.Keyword(null,"async","async",1050769601));
return (function (next){
try{var fn_obj = goog.getObjectByName(fn_str,$CLJS);
if((fn_obj == null)){
if(cljs.core.truth_(log_missing_fn)){
(log_missing_fn.cljs$core$IFn$_invoke$arity$1 ? log_missing_fn.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_missing_fn.call(null,fn_sym));
} else {
}

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
} else {
if(cljs.core.truth_(async)){
if(cljs.core.truth_(log_call_async)){
(log_call_async.cljs$core$IFn$_invoke$arity$1 ? log_call_async.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call_async.call(null,fn_sym));
} else {
}

return fn_obj(next);
} else {
if(cljs.core.truth_(log_call)){
(log_call.cljs$core$IFn$_invoke$arity$1 ? log_call.cljs$core$IFn$_invoke$arity$1(fn_sym) : log_call.call(null,fn_sym));
} else {
}

fn_obj();

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));

}
}
}catch (e40618){var ex = e40618;
console.warn("error when calling lifecycle function",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym),ex);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}});
});
shadow.cljs.devtools.client.env.do_js_reload_STAR_ = (function shadow$cljs$devtools$client$env$do_js_reload_STAR_(failure_fn,p__40619){
var vec__40621 = p__40619;
var seq__40622 = cljs.core.seq(vec__40621);
var first__40623 = cljs.core.first(seq__40622);
var seq__40622__$1 = cljs.core.next(seq__40622);
var task = first__40623;
var remaining_tasks = seq__40622__$1;
if(cljs.core.truth_(task)){
try{var G__40629 = (function (){
return (shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2 ? shadow.cljs.devtools.client.env.do_js_reload_STAR_.cljs$core$IFn$_invoke$arity$2(failure_fn,remaining_tasks) : shadow.cljs.devtools.client.env.do_js_reload_STAR_.call(null,failure_fn,remaining_tasks));
});
return (task.cljs$core$IFn$_invoke$arity$1 ? task.cljs$core$IFn$_invoke$arity$1(G__40629) : task.call(null,G__40629));
}catch (e40628){var e = e40628;
return (failure_fn.cljs$core$IFn$_invoke$arity$3 ? failure_fn.cljs$core$IFn$_invoke$arity$3(e,task,remaining_tasks) : failure_fn.call(null,e,task,remaining_tasks));
}} else {
return null;
}
});
/**
 * should pass the :build-complete message and an additional callback
 * which performs the actual loading of the code (sync)
 * will call all before/after callbacks in order
 */
shadow.cljs.devtools.client.env.do_js_reload = (function shadow$cljs$devtools$client$env$do_js_reload(var_args){
var G__40637 = arguments.length;
switch (G__40637) {
case 2:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2 = (function (msg,load_code_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(msg,load_code_fn,(function (){
return null;
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3 = (function (msg,load_code_fn,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(msg,load_code_fn,complete_fn,(function (error,task,remaining){
return console.warn("JS reload failed",error);
}));
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4 = (function (p__40639,load_code_fn,complete_fn,failure_fn){
var map__40640 = p__40639;
var map__40640__$1 = (((((!((map__40640 == null))))?(((((map__40640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40640):map__40640);
var msg = map__40640__$1;
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40640__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var load_tasks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40630_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__40630_SHARP_);
}),new cljs.core.Keyword(null,"before-load","before-load",-2060117064).cljs$core$IFn$_invoke$arity$1(reload_info)))),(function (next){
(load_code_fn.cljs$core$IFn$_invoke$arity$0 ? load_code_fn.cljs$core$IFn$_invoke$arity$0() : load_code_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__40631_SHARP_){
return shadow.cljs.devtools.client.env.make_task_fn(msg,p1__40631_SHARP_);
})),new cljs.core.Keyword(null,"after-load","after-load",-1278503285).cljs$core$IFn$_invoke$arity$1(reload_info)),(function (next){
(complete_fn.cljs$core$IFn$_invoke$arity$0 ? complete_fn.cljs$core$IFn$_invoke$arity$0() : complete_fn.call(null));

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}));
return shadow.cljs.devtools.client.env.do_js_reload_STAR_(failure_fn,load_tasks);
}));

(shadow.cljs.devtools.client.env.do_js_reload.cljs$lang$maxFixedArity = 4);

shadow.cljs.devtools.client.env.before_load_src = (function shadow$cljs$devtools$client$env$before_load_src(p__40642){
var map__40643 = p__40642;
var map__40643__$1 = (((((!((map__40643 == null))))?(((((map__40643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40643):map__40643);
var src = map__40643__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40643__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40643__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cljs","cljs",1492417629),type)){
var seq__40645 = cljs.core.seq(goog.global.SHADOW_NS_RESET);
var chunk__40646 = null;
var count__40647 = (0);
var i__40648 = (0);
while(true){
if((i__40648 < count__40647)){
var x = chunk__40646.cljs$core$IIndexed$_nth$arity$2(null,i__40648);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__40876 = seq__40645;
var G__40877 = chunk__40646;
var G__40878 = count__40647;
var G__40879 = (i__40648 + (1));
seq__40645 = G__40876;
chunk__40646 = G__40877;
count__40647 = G__40878;
i__40648 = G__40879;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40645);
if(temp__5735__auto__){
var seq__40645__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40645__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40645__$1);
var G__40880 = cljs.core.chunk_rest(seq__40645__$1);
var G__40881 = c__4556__auto__;
var G__40882 = cljs.core.count(c__4556__auto__);
var G__40883 = (0);
seq__40645 = G__40880;
chunk__40646 = G__40881;
count__40647 = G__40882;
i__40648 = G__40883;
continue;
} else {
var x = cljs.core.first(seq__40645__$1);
(x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(ns) : x.call(null,ns));


var G__40884 = cljs.core.next(seq__40645__$1);
var G__40885 = null;
var G__40886 = (0);
var G__40887 = (0);
seq__40645 = G__40884;
chunk__40646 = G__40885;
count__40647 = G__40886;
i__40648 = G__40887;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.env !== 'undefined') && (typeof shadow.cljs.devtools.client.env.custom_msg_subscribers_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.env.custom_msg_subscribers_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
shadow.cljs.devtools.client.env.subscribe_BANG_ = (function shadow$cljs$devtools$client$env$subscribe_BANG_(sub_id,callback){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref,cljs.core.assoc,sub_id,callback);
});
shadow.cljs.devtools.client.env.publish_BANG_ = (function shadow$cljs$devtools$client$env$publish_BANG_(msg){
var seq__40651 = cljs.core.seq(cljs.core.deref(shadow.cljs.devtools.client.env.custom_msg_subscribers_ref));
var chunk__40652 = null;
var count__40653 = (0);
var i__40654 = (0);
while(true){
if((i__40654 < count__40653)){
var vec__40672 = chunk__40652.cljs$core$IIndexed$_nth$arity$2(null,i__40654);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40672,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e40675){var e_40888 = e40675;
console.warn("failed to handle custom msg",id,msg);
}

var G__40889 = seq__40651;
var G__40890 = chunk__40652;
var G__40891 = count__40653;
var G__40892 = (i__40654 + (1));
seq__40651 = G__40889;
chunk__40652 = G__40890;
count__40653 = G__40891;
i__40654 = G__40892;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40651);
if(temp__5735__auto__){
var seq__40651__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40651__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40651__$1);
var G__40893 = cljs.core.chunk_rest(seq__40651__$1);
var G__40894 = c__4556__auto__;
var G__40895 = cljs.core.count(c__4556__auto__);
var G__40896 = (0);
seq__40651 = G__40893;
chunk__40652 = G__40894;
count__40653 = G__40895;
i__40654 = G__40896;
continue;
} else {
var vec__40676 = cljs.core.first(seq__40651__$1);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40676,(1),null);
try{(callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(msg) : callback.call(null,msg));
}catch (e40679){var e_40897 = e40679;
console.warn("failed to handle custom msg",id,msg);
}

var G__40898 = cljs.core.next(seq__40651__$1);
var G__40899 = null;
var G__40900 = (0);
var G__40901 = (0);
seq__40651 = G__40898;
chunk__40652 = G__40899;
count__40653 = G__40900;
i__40654 = G__40901;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.env.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$env$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.env.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.env.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$env$src_is_loaded_QMARK_(p__40685){
var map__40686 = p__40685;
var map__40686__$1 = (((((!((map__40686 == null))))?(((((map__40686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40686):map__40686);
var src = map__40686__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40686__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.goog_base_rc,resource_id);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return shadow.cljs.devtools.client.env.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.env.prefilter_sources = (function shadow$cljs$devtools$client$env$prefilter_sources(reload_info,sources){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__40696){
var map__40698 = p__40696;
var map__40698__$1 = (((((!((map__40698 == null))))?(((((map__40698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40698):map__40698);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40698__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40705){
var map__40706 = p__40705;
var map__40706__$1 = (((((!((map__40706 == null))))?(((((map__40706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40706):map__40706);
var rc = map__40706__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40706__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources));
});
shadow.cljs.devtools.client.env.filter_sources_to_get_optimized = (function shadow$cljs$devtools$client$env$filter_sources_to_get_optimized(p__40712,reload_info){
var map__40713 = p__40712;
var map__40713__$1 = (((((!((map__40713 == null))))?(((((map__40713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40713):map__40713);
var info = map__40713__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40713__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__40715){
var map__40716 = p__40715;
var map__40716__$1 = (((((!((map__40716 == null))))?(((((map__40716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40716):map__40716);
var src = map__40716__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40716__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),shadow.cljs.devtools.client.env.prefilter_sources(reload_info,sources)));
});
shadow.cljs.devtools.client.env.filter_sources_to_get_full = (function shadow$cljs$devtools$client$env$filter_sources_to_get_full(p__40728,reload_info){
var map__40729 = p__40728;
var map__40729__$1 = (((((!((map__40729 == null))))?(((((map__40729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40729):map__40729);
var info = map__40729__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40729__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var affected = cljs.core.PersistentHashSet.EMPTY;
var sources_to_get = cljs.core.PersistentVector.EMPTY;
var G__40738 = shadow.cljs.devtools.client.env.prefilter_sources(reload_info,sources);
var vec__40739 = G__40738;
var seq__40740 = cljs.core.seq(vec__40739);
var first__40741 = cljs.core.first(seq__40740);
var seq__40740__$1 = cljs.core.next(seq__40740);
var src = first__40741;
var more = seq__40740__$1;
var affected__$1 = affected;
var sources_to_get__$1 = sources_to_get;
var G__40738__$1 = G__40738;
while(true){
var affected__$2 = affected__$1;
var sources_to_get__$2 = sources_to_get__$1;
var vec__40773 = G__40738__$1;
var seq__40774 = cljs.core.seq(vec__40773);
var first__40775 = cljs.core.first(seq__40774);
var seq__40774__$1 = cljs.core.next(seq__40774);
var src__$1 = first__40775;
var more__$1 = seq__40774__$1;
if(cljs.core.not(src__$1)){
return sources_to_get__$2;
} else {
var map__40776 = src__$1;
var map__40776__$1 = (((((!((map__40776 == null))))?(((((map__40776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40776):map__40776);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40776__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var should_reload_QMARK_ = (function (){var or__4126__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.not(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src__$1));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = (function (){var or__4126__auto____$2 = cljs.core.contains_QMARK_(compiled,resource_id);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
return cljs.core.some(affected__$2,deps);
}
})();
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src__$1));
} else {
return and__4115__auto__;
}
}
}
})();
if(cljs.core.not(should_reload_QMARK_)){
var G__40911 = affected__$2;
var G__40912 = sources_to_get__$2;
var G__40913 = more__$1;
affected__$1 = G__40911;
sources_to_get__$1 = G__40912;
G__40738__$1 = G__40913;
continue;
} else {
var G__40914 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(affected__$2,provides);
var G__40915 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sources_to_get__$2,src__$1);
var G__40916 = more__$1;
affected__$1 = G__40914;
sources_to_get__$1 = G__40915;
G__40738__$1 = G__40916;
continue;
}
}
break;
}
});
shadow.cljs.devtools.client.env.filter_reload_sources = (function shadow$cljs$devtools$client$env$filter_reload_sources(info,reload_info){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("full",shadow.cljs.devtools.client.env.reload_strategy)){
return shadow.cljs.devtools.client.env.filter_sources_to_get_full(info,reload_info);
} else {
return shadow.cljs.devtools.client.env.filter_sources_to_get_optimized(info,reload_info);
}
});

//# sourceMappingURL=shadow.cljs.devtools.client.env.js.map
