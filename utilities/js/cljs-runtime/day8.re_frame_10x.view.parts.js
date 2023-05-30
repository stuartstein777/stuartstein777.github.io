goog.provide('day8.re_frame_10x.view.parts');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__5523__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__25235(s__25236){
return (new cljs.core.LazySeq(null,(function (){
var s__25236__$1 = s__25236;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25236__$1);
if(temp__5804__auto__){
var s__25236__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25236__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25236__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25238 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25237 = (0);
while(true){
if((i__25237 < size__5522__auto__)){
var vec__25249 = cljs.core._nth(c__5521__auto__,i__25237);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25249,(1),null);
cljs.core.chunk_append(b__25238,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__25295 = (i__25237 + (1));
i__25237 = G__25295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25238),day8$re_frame_10x$view$parts$render_registered_$_iter__25235(cljs.core.chunk_rest(s__25236__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25238),null);
}
} else {
var vec__25260 = cljs.core.first(s__25236__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25260,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__25235(cljs.core.rest(s__25236__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__5523__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__25280(s__25281){
return (new cljs.core.LazySeq(null,(function (){
var s__25281__$1 = s__25281;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25281__$1);
if(temp__5804__auto__){
var s__25281__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25281__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25281__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25283 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25282 = (0);
while(true){
if((i__25282 < size__5522__auto__)){
var vec__25284 = cljs.core._nth(c__5521__auto__,i__25282);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25284,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25284,(1),null);
cljs.core.chunk_append(b__25283,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__25296 = (i__25282 + (1));
i__25282 = G__25296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25283),day8$re_frame_10x$view$parts$render_subs_$_iter__25280(cljs.core.chunk_rest(s__25281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25283),null);
}
} else {
var vec__25292 = cljs.core.first(s__25281__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__25280(cljs.core.rest(s__25281__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs(re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.cofx.kind),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.parts.js.map
