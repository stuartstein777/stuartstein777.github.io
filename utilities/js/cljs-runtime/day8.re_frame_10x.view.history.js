goog.provide('day8.re_frame_10x.view.history');
day8.re_frame_10x.view.history.history_styles = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".history-list",".history-list",-139846241),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.history_background_color,new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"scroll",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"resize","resize",297367086),"vertical"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".history-item",".history-item",-1708334371),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"margin","margin",-995903681)],["ellipsis",day8.re_frame_10x.common_styles.history_item_text_color,"nowrap","600","hidden",day8.re_frame_10x.common_styles.history_item_background_color,"pointer",(0),"5px","2px"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.history_item_hover_color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".history-item.active",".history-item.active",452166463),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.history_item_active_color,new cljs.core.Keyword(null,"cursor","cursor",1011937484),"default"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".history-item.inactive",".history-item.inactive",-199952024),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.history_item_inactive_color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.history_item_hover_color], null)], null)], null)], null)], null);
day8.re_frame_10x.view.history.history_item = (function day8$re_frame_10x$view$history$history_item(event,id,current_id){
var event_str = day8.re_frame_10x.utils.pretty_print_condensed.truncate((400),new cljs.core.Keyword(null,"end","end",-268185958),event);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current_id);
var inactive_QMARK_ = (id > current_id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["history-item",((active_QMARK_)?" active":null),((inactive_QMARK_)?" inactive":null)].join('')], null),((active_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","load-epoch","epochs/load-epoch",166872985),id], null));
}),new cljs.core.Keyword(null,"title","title",636505583),"Jump to this epoch"], null))], 0)),event_str], null);
});
day8.re_frame_10x.view.history.render = (function day8$re_frame_10x$view$history$render(){
var all_events = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812)], null)));
var current_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"history-list",new cljs.core.Keyword(null,"height","height",1025178622),"20%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__5523__auto__ = (function day8$re_frame_10x$view$history$render_$_iter__25346(s__25347){
return (new cljs.core.LazySeq(null,(function (){
var s__25347__$1 = s__25347;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__25347__$1);
if(temp__5804__auto__){
var s__25347__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25347__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__25347__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__25349 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__25348 = (0);
while(true){
if((i__25348 < size__5522__auto__)){
var vec__25350 = cljs.core._nth(c__5521__auto__,i__25348);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25350,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25350,(1),null);
if(cljs.core.truth_(cljs.core.not_empty(event))){
cljs.core.chunk_append(b__25349,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.history.history_item,event,id,current_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__25360 = (i__25348 + (1));
i__25348 = G__25360;
continue;
} else {
var G__25361 = (i__25348 + (1));
i__25348 = G__25361;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25349),day8$re_frame_10x$view$history$render_$_iter__25346(cljs.core.chunk_rest(s__25347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25349),null);
}
} else {
var vec__25357 = cljs.core.first(s__25347__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25357,(1),null);
if(cljs.core.truth_(cljs.core.not_empty(event))){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.history.history_item,event,id,current_id], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$history$render_$_iter__25346(cljs.core.rest(s__25347__$2)));
} else {
var G__25362 = cljs.core.rest(s__25347__$2);
s__25347__$1 = G__25362;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(all_events);
})()], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.history.js.map
