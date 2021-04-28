goog.provide('day8.re_frame_10x.view.parts');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__4529__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__40210(s__40211){
return (new cljs.core.LazySeq(null,(function (){
var s__40211__$1 = s__40211;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40211__$1);
if(temp__5735__auto__){
var s__40211__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40211__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40211__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40213 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40212 = (0);
while(true){
if((i__40212 < size__4528__auto__)){
var vec__40216 = cljs.core._nth(c__4527__auto__,i__40212);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40216,(1),null);
cljs.core.chunk_append(b__40213,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__40349 = (i__40212 + (1));
i__40212 = G__40349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40213),day8$re_frame_10x$view$parts$render_registered_$_iter__40210(cljs.core.chunk_rest(s__40211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40213),null);
}
} else {
var vec__40223 = cljs.core.first(s__40211__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40223,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40223,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__40210(cljs.core.rest(s__40211__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__4529__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__40236(s__40237){
return (new cljs.core.LazySeq(null,(function (){
var s__40237__$1 = s__40237;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__40237__$1);
if(temp__5735__auto__){
var s__40237__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40237__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__40237__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__40239 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__40238 = (0);
while(true){
if((i__40238 < size__4528__auto__)){
var vec__40246 = cljs.core._nth(c__4527__auto__,i__40238);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40246,(1),null);
cljs.core.chunk_append(b__40239,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__40350 = (i__40238 + (1));
i__40238 = G__40350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40239),day8$re_frame_10x$view$parts$render_subs_$_iter__40236(cljs.core.chunk_rest(s__40237__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40239),null);
}
} else {
var vec__40255 = cljs.core.first(s__40237__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40255,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40255,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__40236(cljs.core.rest(s__40237__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs(re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.cofx.kind),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.parts.js.map
