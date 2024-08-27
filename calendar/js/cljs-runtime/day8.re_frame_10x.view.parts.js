goog.provide('day8.re_frame_10x.view.parts');
day8.re_frame_10x.view.parts.render_registered = (function day8$re_frame_10x$view$parts$render_registered(kind){
var iter__4622__auto__ = (function day8$re_frame_10x$view$parts$render_registered_$_iter__39681(s__39682){
return (new cljs.core.LazySeq(null,(function (){
var s__39682__$1 = s__39682;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39682__$1);
if(temp__5753__auto__){
var s__39682__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39682__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39682__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39684 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39683 = (0);
while(true){
if((i__39683 < size__4621__auto__)){
var vec__39685 = cljs.core._nth(c__4620__auto__,i__39683);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39685,(1),null);
cljs.core.chunk_append(b__39684,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__39728 = (i__39683 + (1));
i__39683 = G__39728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39684),day8$re_frame_10x$view$parts$render_registered_$_iter__39681(cljs.core.chunk_rest(s__39682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39684),null);
}
} else {
var vec__39698 = cljs.core.first(s__39682__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39698,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39698,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_registered_$_iter__39681(cljs.core.rest(s__39682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render_subs = (function day8$re_frame_10x$view$parts$render_subs(kind){
var iter__4622__auto__ = (function day8$re_frame_10x$view$parts$render_subs_$_iter__39701(s__39702){
return (new cljs.core.LazySeq(null,(function (){
var s__39702__$1 = s__39702;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__39702__$1);
if(temp__5753__auto__){
var s__39702__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39702__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__39702__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__39704 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__39703 = (0);
while(true){
if((i__39703 < size__4621__auto__)){
var vec__39705 = cljs.core._nth(c__4620__auto__,i__39703);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39705,(1),null);
cljs.core.chunk_append(b__39704,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)));

var G__39740 = (i__39703 + (1));
i__39703 = G__39740;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39704),day8$re_frame_10x$view$parts$render_subs_$_iter__39701(cljs.core.chunk_rest(s__39702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39704),null);
}
} else {
var vec__39708 = cljs.core.first(s__39702__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39708,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black solid",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"10px"], null)], null),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kind),"|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')], null)),day8$re_frame_10x$view$parts$render_subs_$_iter__39701(cljs.core.rest(s__39702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler),kind)));
});
day8.re_frame_10x.view.parts.render = (function day8$re_frame_10x$view$parts$render(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Events"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.events.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Subscriptions"], null),day8.re_frame_10x.view.parts.render_subs(re_frame.subs.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"FX"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.fx.kind),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"co-fx"], null),day8.re_frame_10x.view.parts.render_registered(re_frame.cofx.kind),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.parts.js.map
