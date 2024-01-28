goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45349 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45349(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45350 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45350(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44652 = coll;
var G__44653 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44652,G__44653) : shadow.dom.lazy_native_coll_seq.call(null,G__44652,G__44653));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__44678 = arguments.length;
switch (G__44678) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__44686 = arguments.length;
switch (G__44686) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__44693 = arguments.length;
switch (G__44693) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__44700 = arguments.length;
switch (G__44700) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__44711 = arguments.length;
switch (G__44711) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__44724 = arguments.length;
switch (G__44724) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44733){if((e44733 instanceof Object)){
var e = e44733;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44733;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44743 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44744 = null;
var count__44745 = (0);
var i__44746 = (0);
while(true){
if((i__44746 < count__44745)){
var el = chunk__44744.cljs$core$IIndexed$_nth$arity$2(null,i__44746);
var handler_45357__$1 = ((function (seq__44743,chunk__44744,count__44745,i__44746,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44743,chunk__44744,count__44745,i__44746,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45357__$1);


var G__45358 = seq__44743;
var G__45359 = chunk__44744;
var G__45360 = count__44745;
var G__45361 = (i__44746 + (1));
seq__44743 = G__45358;
chunk__44744 = G__45359;
count__44745 = G__45360;
i__44746 = G__45361;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44743);
if(temp__5735__auto__){
var seq__44743__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44743__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44743__$1);
var G__45362 = cljs.core.chunk_rest(seq__44743__$1);
var G__45363 = c__4556__auto__;
var G__45364 = cljs.core.count(c__4556__auto__);
var G__45365 = (0);
seq__44743 = G__45362;
chunk__44744 = G__45363;
count__44745 = G__45364;
i__44746 = G__45365;
continue;
} else {
var el = cljs.core.first(seq__44743__$1);
var handler_45366__$1 = ((function (seq__44743,chunk__44744,count__44745,i__44746,el,seq__44743__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44743,chunk__44744,count__44745,i__44746,el,seq__44743__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45366__$1);


var G__45367 = cljs.core.next(seq__44743__$1);
var G__45368 = null;
var G__45369 = (0);
var G__45370 = (0);
seq__44743 = G__45367;
chunk__44744 = G__45368;
count__44745 = G__45369;
i__44746 = G__45370;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__44756 = arguments.length;
switch (G__44756) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__44764 = cljs.core.seq(events);
var chunk__44765 = null;
var count__44766 = (0);
var i__44767 = (0);
while(true){
if((i__44767 < count__44766)){
var vec__44780 = chunk__44765.cljs$core$IIndexed$_nth$arity$2(null,i__44767);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44780,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45372 = seq__44764;
var G__45373 = chunk__44765;
var G__45374 = count__44766;
var G__45375 = (i__44767 + (1));
seq__44764 = G__45372;
chunk__44765 = G__45373;
count__44766 = G__45374;
i__44767 = G__45375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44764);
if(temp__5735__auto__){
var seq__44764__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44764__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44764__$1);
var G__45376 = cljs.core.chunk_rest(seq__44764__$1);
var G__45377 = c__4556__auto__;
var G__45378 = cljs.core.count(c__4556__auto__);
var G__45379 = (0);
seq__44764 = G__45376;
chunk__44765 = G__45377;
count__44766 = G__45378;
i__44767 = G__45379;
continue;
} else {
var vec__44784 = cljs.core.first(seq__44764__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44784,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45380 = cljs.core.next(seq__44764__$1);
var G__45381 = null;
var G__45382 = (0);
var G__45383 = (0);
seq__44764 = G__45380;
chunk__44765 = G__45381;
count__44766 = G__45382;
i__44767 = G__45383;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__44791 = cljs.core.seq(styles);
var chunk__44792 = null;
var count__44793 = (0);
var i__44794 = (0);
while(true){
if((i__44794 < count__44793)){
var vec__44808 = chunk__44792.cljs$core$IIndexed$_nth$arity$2(null,i__44794);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44808,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45384 = seq__44791;
var G__45385 = chunk__44792;
var G__45386 = count__44793;
var G__45387 = (i__44794 + (1));
seq__44791 = G__45384;
chunk__44792 = G__45385;
count__44793 = G__45386;
i__44794 = G__45387;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44791);
if(temp__5735__auto__){
var seq__44791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44791__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44791__$1);
var G__45388 = cljs.core.chunk_rest(seq__44791__$1);
var G__45389 = c__4556__auto__;
var G__45390 = cljs.core.count(c__4556__auto__);
var G__45391 = (0);
seq__44791 = G__45388;
chunk__44792 = G__45389;
count__44793 = G__45390;
i__44794 = G__45391;
continue;
} else {
var vec__44812 = cljs.core.first(seq__44791__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44812,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45392 = cljs.core.next(seq__44791__$1);
var G__45393 = null;
var G__45394 = (0);
var G__45395 = (0);
seq__44791 = G__45392;
chunk__44792 = G__45393;
count__44793 = G__45394;
i__44794 = G__45395;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__44818_45396 = key;
var G__44818_45397__$1 = (((G__44818_45396 instanceof cljs.core.Keyword))?G__44818_45396.fqn:null);
switch (G__44818_45397__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45399 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_45399,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_45399,"aria-");
}
})())){
el.setAttribute(ks_45399,value);
} else {
(el[ks_45399] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44839){
var map__44840 = p__44839;
var map__44840__$1 = (((((!((map__44840 == null))))?(((((map__44840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44840):map__44840);
var props = map__44840__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44840__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44843 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44843,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44847 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44847,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44847;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44850 = arguments.length;
switch (G__44850) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44852){
var vec__44853 = p__44852;
var seq__44854 = cljs.core.seq(vec__44853);
var first__44855 = cljs.core.first(seq__44854);
var seq__44854__$1 = cljs.core.next(seq__44854);
var nn = first__44855;
var first__44855__$1 = cljs.core.first(seq__44854__$1);
var seq__44854__$2 = cljs.core.next(seq__44854__$1);
var np = first__44855__$1;
var nc = seq__44854__$2;
var node = vec__44853;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44859 = nn;
var G__44860 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44859,G__44860) : create_fn.call(null,G__44859,G__44860));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44861 = nn;
var G__44862 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44861,G__44862) : create_fn.call(null,G__44861,G__44862));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44866 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44866,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44866,(1),null);
var seq__44871_45406 = cljs.core.seq(node_children);
var chunk__44872_45407 = null;
var count__44873_45408 = (0);
var i__44874_45409 = (0);
while(true){
if((i__44874_45409 < count__44873_45408)){
var child_struct_45410 = chunk__44872_45407.cljs$core$IIndexed$_nth$arity$2(null,i__44874_45409);
var children_45411 = shadow.dom.dom_node(child_struct_45410);
if(cljs.core.seq_QMARK_(children_45411)){
var seq__44904_45412 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45411));
var chunk__44906_45413 = null;
var count__44907_45414 = (0);
var i__44908_45415 = (0);
while(true){
if((i__44908_45415 < count__44907_45414)){
var child_45417 = chunk__44906_45413.cljs$core$IIndexed$_nth$arity$2(null,i__44908_45415);
if(cljs.core.truth_(child_45417)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45417);


var G__45418 = seq__44904_45412;
var G__45419 = chunk__44906_45413;
var G__45420 = count__44907_45414;
var G__45421 = (i__44908_45415 + (1));
seq__44904_45412 = G__45418;
chunk__44906_45413 = G__45419;
count__44907_45414 = G__45420;
i__44908_45415 = G__45421;
continue;
} else {
var G__45422 = seq__44904_45412;
var G__45423 = chunk__44906_45413;
var G__45424 = count__44907_45414;
var G__45425 = (i__44908_45415 + (1));
seq__44904_45412 = G__45422;
chunk__44906_45413 = G__45423;
count__44907_45414 = G__45424;
i__44908_45415 = G__45425;
continue;
}
} else {
var temp__5735__auto___45426 = cljs.core.seq(seq__44904_45412);
if(temp__5735__auto___45426){
var seq__44904_45427__$1 = temp__5735__auto___45426;
if(cljs.core.chunked_seq_QMARK_(seq__44904_45427__$1)){
var c__4556__auto___45428 = cljs.core.chunk_first(seq__44904_45427__$1);
var G__45429 = cljs.core.chunk_rest(seq__44904_45427__$1);
var G__45430 = c__4556__auto___45428;
var G__45431 = cljs.core.count(c__4556__auto___45428);
var G__45432 = (0);
seq__44904_45412 = G__45429;
chunk__44906_45413 = G__45430;
count__44907_45414 = G__45431;
i__44908_45415 = G__45432;
continue;
} else {
var child_45433 = cljs.core.first(seq__44904_45427__$1);
if(cljs.core.truth_(child_45433)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45433);


var G__45434 = cljs.core.next(seq__44904_45427__$1);
var G__45435 = null;
var G__45436 = (0);
var G__45437 = (0);
seq__44904_45412 = G__45434;
chunk__44906_45413 = G__45435;
count__44907_45414 = G__45436;
i__44908_45415 = G__45437;
continue;
} else {
var G__45438 = cljs.core.next(seq__44904_45427__$1);
var G__45439 = null;
var G__45440 = (0);
var G__45441 = (0);
seq__44904_45412 = G__45438;
chunk__44906_45413 = G__45439;
count__44907_45414 = G__45440;
i__44908_45415 = G__45441;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45411);
}


var G__45442 = seq__44871_45406;
var G__45443 = chunk__44872_45407;
var G__45444 = count__44873_45408;
var G__45445 = (i__44874_45409 + (1));
seq__44871_45406 = G__45442;
chunk__44872_45407 = G__45443;
count__44873_45408 = G__45444;
i__44874_45409 = G__45445;
continue;
} else {
var temp__5735__auto___45446 = cljs.core.seq(seq__44871_45406);
if(temp__5735__auto___45446){
var seq__44871_45447__$1 = temp__5735__auto___45446;
if(cljs.core.chunked_seq_QMARK_(seq__44871_45447__$1)){
var c__4556__auto___45448 = cljs.core.chunk_first(seq__44871_45447__$1);
var G__45449 = cljs.core.chunk_rest(seq__44871_45447__$1);
var G__45450 = c__4556__auto___45448;
var G__45451 = cljs.core.count(c__4556__auto___45448);
var G__45452 = (0);
seq__44871_45406 = G__45449;
chunk__44872_45407 = G__45450;
count__44873_45408 = G__45451;
i__44874_45409 = G__45452;
continue;
} else {
var child_struct_45453 = cljs.core.first(seq__44871_45447__$1);
var children_45454 = shadow.dom.dom_node(child_struct_45453);
if(cljs.core.seq_QMARK_(children_45454)){
var seq__44923_45455 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45454));
var chunk__44925_45456 = null;
var count__44926_45457 = (0);
var i__44927_45458 = (0);
while(true){
if((i__44927_45458 < count__44926_45457)){
var child_45459 = chunk__44925_45456.cljs$core$IIndexed$_nth$arity$2(null,i__44927_45458);
if(cljs.core.truth_(child_45459)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45459);


var G__45460 = seq__44923_45455;
var G__45461 = chunk__44925_45456;
var G__45462 = count__44926_45457;
var G__45463 = (i__44927_45458 + (1));
seq__44923_45455 = G__45460;
chunk__44925_45456 = G__45461;
count__44926_45457 = G__45462;
i__44927_45458 = G__45463;
continue;
} else {
var G__45464 = seq__44923_45455;
var G__45465 = chunk__44925_45456;
var G__45466 = count__44926_45457;
var G__45467 = (i__44927_45458 + (1));
seq__44923_45455 = G__45464;
chunk__44925_45456 = G__45465;
count__44926_45457 = G__45466;
i__44927_45458 = G__45467;
continue;
}
} else {
var temp__5735__auto___45468__$1 = cljs.core.seq(seq__44923_45455);
if(temp__5735__auto___45468__$1){
var seq__44923_45470__$1 = temp__5735__auto___45468__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44923_45470__$1)){
var c__4556__auto___45471 = cljs.core.chunk_first(seq__44923_45470__$1);
var G__45472 = cljs.core.chunk_rest(seq__44923_45470__$1);
var G__45473 = c__4556__auto___45471;
var G__45474 = cljs.core.count(c__4556__auto___45471);
var G__45475 = (0);
seq__44923_45455 = G__45472;
chunk__44925_45456 = G__45473;
count__44926_45457 = G__45474;
i__44927_45458 = G__45475;
continue;
} else {
var child_45476 = cljs.core.first(seq__44923_45470__$1);
if(cljs.core.truth_(child_45476)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45476);


var G__45477 = cljs.core.next(seq__44923_45470__$1);
var G__45478 = null;
var G__45479 = (0);
var G__45480 = (0);
seq__44923_45455 = G__45477;
chunk__44925_45456 = G__45478;
count__44926_45457 = G__45479;
i__44927_45458 = G__45480;
continue;
} else {
var G__45481 = cljs.core.next(seq__44923_45470__$1);
var G__45482 = null;
var G__45483 = (0);
var G__45484 = (0);
seq__44923_45455 = G__45481;
chunk__44925_45456 = G__45482;
count__44926_45457 = G__45483;
i__44927_45458 = G__45484;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45454);
}


var G__45485 = cljs.core.next(seq__44871_45447__$1);
var G__45486 = null;
var G__45487 = (0);
var G__45488 = (0);
seq__44871_45406 = G__45485;
chunk__44872_45407 = G__45486;
count__44873_45408 = G__45487;
i__44874_45409 = G__45488;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44953 = cljs.core.seq(node);
var chunk__44954 = null;
var count__44955 = (0);
var i__44956 = (0);
while(true){
if((i__44956 < count__44955)){
var n = chunk__44954.cljs$core$IIndexed$_nth$arity$2(null,i__44956);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45491 = seq__44953;
var G__45492 = chunk__44954;
var G__45493 = count__44955;
var G__45494 = (i__44956 + (1));
seq__44953 = G__45491;
chunk__44954 = G__45492;
count__44955 = G__45493;
i__44956 = G__45494;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44953);
if(temp__5735__auto__){
var seq__44953__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44953__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44953__$1);
var G__45495 = cljs.core.chunk_rest(seq__44953__$1);
var G__45496 = c__4556__auto__;
var G__45497 = cljs.core.count(c__4556__auto__);
var G__45498 = (0);
seq__44953 = G__45495;
chunk__44954 = G__45496;
count__44955 = G__45497;
i__44956 = G__45498;
continue;
} else {
var n = cljs.core.first(seq__44953__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45499 = cljs.core.next(seq__44953__$1);
var G__45500 = null;
var G__45501 = (0);
var G__45502 = (0);
seq__44953 = G__45499;
chunk__44954 = G__45500;
count__44955 = G__45501;
i__44956 = G__45502;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44966 = arguments.length;
switch (G__44966) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44968 = arguments.length;
switch (G__44968) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44972 = arguments.length;
switch (G__44972) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45510 = arguments.length;
var i__4737__auto___45511 = (0);
while(true){
if((i__4737__auto___45511 < len__4736__auto___45510)){
args__4742__auto__.push((arguments[i__4737__auto___45511]));

var G__45512 = (i__4737__auto___45511 + (1));
i__4737__auto___45511 = G__45512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44995_45515 = cljs.core.seq(nodes);
var chunk__44996_45516 = null;
var count__44997_45517 = (0);
var i__44998_45518 = (0);
while(true){
if((i__44998_45518 < count__44997_45517)){
var node_45519 = chunk__44996_45516.cljs$core$IIndexed$_nth$arity$2(null,i__44998_45518);
fragment.appendChild(shadow.dom._to_dom(node_45519));


var G__45521 = seq__44995_45515;
var G__45522 = chunk__44996_45516;
var G__45523 = count__44997_45517;
var G__45524 = (i__44998_45518 + (1));
seq__44995_45515 = G__45521;
chunk__44996_45516 = G__45522;
count__44997_45517 = G__45523;
i__44998_45518 = G__45524;
continue;
} else {
var temp__5735__auto___45525 = cljs.core.seq(seq__44995_45515);
if(temp__5735__auto___45525){
var seq__44995_45526__$1 = temp__5735__auto___45525;
if(cljs.core.chunked_seq_QMARK_(seq__44995_45526__$1)){
var c__4556__auto___45527 = cljs.core.chunk_first(seq__44995_45526__$1);
var G__45528 = cljs.core.chunk_rest(seq__44995_45526__$1);
var G__45529 = c__4556__auto___45527;
var G__45530 = cljs.core.count(c__4556__auto___45527);
var G__45531 = (0);
seq__44995_45515 = G__45528;
chunk__44996_45516 = G__45529;
count__44997_45517 = G__45530;
i__44998_45518 = G__45531;
continue;
} else {
var node_45532 = cljs.core.first(seq__44995_45526__$1);
fragment.appendChild(shadow.dom._to_dom(node_45532));


var G__45533 = cljs.core.next(seq__44995_45526__$1);
var G__45534 = null;
var G__45535 = (0);
var G__45536 = (0);
seq__44995_45515 = G__45533;
chunk__44996_45516 = G__45534;
count__44997_45517 = G__45535;
i__44998_45518 = G__45536;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44989));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45019_45537 = cljs.core.seq(scripts);
var chunk__45020_45538 = null;
var count__45021_45539 = (0);
var i__45022_45540 = (0);
while(true){
if((i__45022_45540 < count__45021_45539)){
var vec__45036_45541 = chunk__45020_45538.cljs$core$IIndexed$_nth$arity$2(null,i__45022_45540);
var script_tag_45542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45036_45541,(0),null);
var script_body_45543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45036_45541,(1),null);
eval(script_body_45543);


var G__45544 = seq__45019_45537;
var G__45545 = chunk__45020_45538;
var G__45546 = count__45021_45539;
var G__45547 = (i__45022_45540 + (1));
seq__45019_45537 = G__45544;
chunk__45020_45538 = G__45545;
count__45021_45539 = G__45546;
i__45022_45540 = G__45547;
continue;
} else {
var temp__5735__auto___45548 = cljs.core.seq(seq__45019_45537);
if(temp__5735__auto___45548){
var seq__45019_45549__$1 = temp__5735__auto___45548;
if(cljs.core.chunked_seq_QMARK_(seq__45019_45549__$1)){
var c__4556__auto___45550 = cljs.core.chunk_first(seq__45019_45549__$1);
var G__45551 = cljs.core.chunk_rest(seq__45019_45549__$1);
var G__45552 = c__4556__auto___45550;
var G__45553 = cljs.core.count(c__4556__auto___45550);
var G__45554 = (0);
seq__45019_45537 = G__45551;
chunk__45020_45538 = G__45552;
count__45021_45539 = G__45553;
i__45022_45540 = G__45554;
continue;
} else {
var vec__45040_45555 = cljs.core.first(seq__45019_45549__$1);
var script_tag_45556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040_45555,(0),null);
var script_body_45557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040_45555,(1),null);
eval(script_body_45557);


var G__45558 = cljs.core.next(seq__45019_45549__$1);
var G__45559 = null;
var G__45560 = (0);
var G__45561 = (0);
seq__45019_45537 = G__45558;
chunk__45020_45538 = G__45559;
count__45021_45539 = G__45560;
i__45022_45540 = G__45561;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45043){
var vec__45044 = p__45043;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45044,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45044,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__45052 = arguments.length;
switch (G__45052) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__45059 = cljs.core.seq(style_keys);
var chunk__45060 = null;
var count__45061 = (0);
var i__45062 = (0);
while(true){
if((i__45062 < count__45061)){
var it = chunk__45060.cljs$core$IIndexed$_nth$arity$2(null,i__45062);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45570 = seq__45059;
var G__45571 = chunk__45060;
var G__45572 = count__45061;
var G__45573 = (i__45062 + (1));
seq__45059 = G__45570;
chunk__45060 = G__45571;
count__45061 = G__45572;
i__45062 = G__45573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45059);
if(temp__5735__auto__){
var seq__45059__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45059__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45059__$1);
var G__45574 = cljs.core.chunk_rest(seq__45059__$1);
var G__45575 = c__4556__auto__;
var G__45576 = cljs.core.count(c__4556__auto__);
var G__45577 = (0);
seq__45059 = G__45574;
chunk__45060 = G__45575;
count__45061 = G__45576;
i__45062 = G__45577;
continue;
} else {
var it = cljs.core.first(seq__45059__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45578 = cljs.core.next(seq__45059__$1);
var G__45579 = null;
var G__45580 = (0);
var G__45581 = (0);
seq__45059 = G__45578;
chunk__45060 = G__45579;
count__45061 = G__45580;
i__45062 = G__45581;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45075,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45084 = k45075;
var G__45084__$1 = (((G__45084 instanceof cljs.core.Keyword))?G__45084.fqn:null);
switch (G__45084__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45075,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45088){
var vec__45089 = p__45088;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45089,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45089,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45074){
var self__ = this;
var G__45074__$1 = this;
return (new cljs.core.RecordIter((0),G__45074__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45076,other45077){
var self__ = this;
var this45076__$1 = this;
return (((!((other45077 == null)))) && ((this45076__$1.constructor === other45077.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45076__$1.x,other45077.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45076__$1.y,other45077.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45076__$1.__extmap,other45077.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45074){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45103 = cljs.core.keyword_identical_QMARK_;
var expr__45104 = k__4388__auto__;
if(cljs.core.truth_((pred__45103.cljs$core$IFn$_invoke$arity$2 ? pred__45103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45104) : pred__45103.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45104)))){
return (new shadow.dom.Coordinate(G__45074,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45103.cljs$core$IFn$_invoke$arity$2 ? pred__45103.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45104) : pred__45103.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45104)))){
return (new shadow.dom.Coordinate(self__.x,G__45074,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45074),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45074){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45074,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45079){
var extmap__4419__auto__ = (function (){var G__45117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45079,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45079)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45117);
} else {
return G__45117;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45079),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45079),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45124,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45134 = k45124;
var G__45134__$1 = (((G__45134 instanceof cljs.core.Keyword))?G__45134.fqn:null);
switch (G__45134__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45124,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45136){
var vec__45137 = p__45136;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45123){
var self__ = this;
var G__45123__$1 = this;
return (new cljs.core.RecordIter((0),G__45123__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45125,other45126){
var self__ = this;
var this45125__$1 = this;
return (((!((other45126 == null)))) && ((this45125__$1.constructor === other45126.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45125__$1.w,other45126.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45125__$1.h,other45126.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45125__$1.__extmap,other45126.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45123){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45154 = cljs.core.keyword_identical_QMARK_;
var expr__45155 = k__4388__auto__;
if(cljs.core.truth_((pred__45154.cljs$core$IFn$_invoke$arity$2 ? pred__45154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45155) : pred__45154.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45155)))){
return (new shadow.dom.Size(G__45123,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45154.cljs$core$IFn$_invoke$arity$2 ? pred__45154.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45155) : pred__45154.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45155)))){
return (new shadow.dom.Size(self__.w,G__45123,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45123),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45123){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45123,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45129){
var extmap__4419__auto__ = (function (){var G__45168 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45129,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45168);
} else {
return G__45168;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45129),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45129),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__45601 = (i + (1));
var G__45602 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45601;
ret = G__45602;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45176){
var vec__45177 = p__45176;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45177,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45181 = arguments.length;
switch (G__45181) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45611 = ps;
var G__45612 = (i + (1));
el__$1 = G__45611;
i = G__45612;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__45208 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45208,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45208,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45208,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45212_45619 = cljs.core.seq(props);
var chunk__45213_45620 = null;
var count__45214_45621 = (0);
var i__45215_45622 = (0);
while(true){
if((i__45215_45622 < count__45214_45621)){
var vec__45233_45623 = chunk__45213_45620.cljs$core$IIndexed$_nth$arity$2(null,i__45215_45622);
var k_45624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233_45623,(0),null);
var v_45625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45233_45623,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_45624);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45624),v_45625);


var G__45626 = seq__45212_45619;
var G__45627 = chunk__45213_45620;
var G__45628 = count__45214_45621;
var G__45629 = (i__45215_45622 + (1));
seq__45212_45619 = G__45626;
chunk__45213_45620 = G__45627;
count__45214_45621 = G__45628;
i__45215_45622 = G__45629;
continue;
} else {
var temp__5735__auto___45630 = cljs.core.seq(seq__45212_45619);
if(temp__5735__auto___45630){
var seq__45212_45631__$1 = temp__5735__auto___45630;
if(cljs.core.chunked_seq_QMARK_(seq__45212_45631__$1)){
var c__4556__auto___45632 = cljs.core.chunk_first(seq__45212_45631__$1);
var G__45633 = cljs.core.chunk_rest(seq__45212_45631__$1);
var G__45634 = c__4556__auto___45632;
var G__45635 = cljs.core.count(c__4556__auto___45632);
var G__45636 = (0);
seq__45212_45619 = G__45633;
chunk__45213_45620 = G__45634;
count__45214_45621 = G__45635;
i__45215_45622 = G__45636;
continue;
} else {
var vec__45238_45637 = cljs.core.first(seq__45212_45631__$1);
var k_45638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45238_45637,(0),null);
var v_45639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45238_45637,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_45638);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45638),v_45639);


var G__45640 = cljs.core.next(seq__45212_45631__$1);
var G__45641 = null;
var G__45642 = (0);
var G__45643 = (0);
seq__45212_45619 = G__45640;
chunk__45213_45620 = G__45641;
count__45214_45621 = G__45642;
i__45215_45622 = G__45643;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__45247 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45247,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45247,(1),null);
var seq__45251_45647 = cljs.core.seq(node_children);
var chunk__45253_45648 = null;
var count__45254_45649 = (0);
var i__45255_45650 = (0);
while(true){
if((i__45255_45650 < count__45254_45649)){
var child_struct_45651 = chunk__45253_45648.cljs$core$IIndexed$_nth$arity$2(null,i__45255_45650);
if((!((child_struct_45651 == null)))){
if(typeof child_struct_45651 === 'string'){
var text_45652 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45652),child_struct_45651].join(''));
} else {
var children_45653 = shadow.dom.svg_node(child_struct_45651);
if(cljs.core.seq_QMARK_(children_45653)){
var seq__45293_45654 = cljs.core.seq(children_45653);
var chunk__45295_45655 = null;
var count__45296_45656 = (0);
var i__45297_45657 = (0);
while(true){
if((i__45297_45657 < count__45296_45656)){
var child_45658 = chunk__45295_45655.cljs$core$IIndexed$_nth$arity$2(null,i__45297_45657);
if(cljs.core.truth_(child_45658)){
node.appendChild(child_45658);


var G__45659 = seq__45293_45654;
var G__45660 = chunk__45295_45655;
var G__45661 = count__45296_45656;
var G__45662 = (i__45297_45657 + (1));
seq__45293_45654 = G__45659;
chunk__45295_45655 = G__45660;
count__45296_45656 = G__45661;
i__45297_45657 = G__45662;
continue;
} else {
var G__45663 = seq__45293_45654;
var G__45664 = chunk__45295_45655;
var G__45665 = count__45296_45656;
var G__45666 = (i__45297_45657 + (1));
seq__45293_45654 = G__45663;
chunk__45295_45655 = G__45664;
count__45296_45656 = G__45665;
i__45297_45657 = G__45666;
continue;
}
} else {
var temp__5735__auto___45667 = cljs.core.seq(seq__45293_45654);
if(temp__5735__auto___45667){
var seq__45293_45668__$1 = temp__5735__auto___45667;
if(cljs.core.chunked_seq_QMARK_(seq__45293_45668__$1)){
var c__4556__auto___45669 = cljs.core.chunk_first(seq__45293_45668__$1);
var G__45670 = cljs.core.chunk_rest(seq__45293_45668__$1);
var G__45671 = c__4556__auto___45669;
var G__45672 = cljs.core.count(c__4556__auto___45669);
var G__45673 = (0);
seq__45293_45654 = G__45670;
chunk__45295_45655 = G__45671;
count__45296_45656 = G__45672;
i__45297_45657 = G__45673;
continue;
} else {
var child_45674 = cljs.core.first(seq__45293_45668__$1);
if(cljs.core.truth_(child_45674)){
node.appendChild(child_45674);


var G__45675 = cljs.core.next(seq__45293_45668__$1);
var G__45676 = null;
var G__45677 = (0);
var G__45678 = (0);
seq__45293_45654 = G__45675;
chunk__45295_45655 = G__45676;
count__45296_45656 = G__45677;
i__45297_45657 = G__45678;
continue;
} else {
var G__45679 = cljs.core.next(seq__45293_45668__$1);
var G__45680 = null;
var G__45681 = (0);
var G__45682 = (0);
seq__45293_45654 = G__45679;
chunk__45295_45655 = G__45680;
count__45296_45656 = G__45681;
i__45297_45657 = G__45682;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45653);
}
}


var G__45683 = seq__45251_45647;
var G__45684 = chunk__45253_45648;
var G__45685 = count__45254_45649;
var G__45686 = (i__45255_45650 + (1));
seq__45251_45647 = G__45683;
chunk__45253_45648 = G__45684;
count__45254_45649 = G__45685;
i__45255_45650 = G__45686;
continue;
} else {
var G__45687 = seq__45251_45647;
var G__45688 = chunk__45253_45648;
var G__45689 = count__45254_45649;
var G__45690 = (i__45255_45650 + (1));
seq__45251_45647 = G__45687;
chunk__45253_45648 = G__45688;
count__45254_45649 = G__45689;
i__45255_45650 = G__45690;
continue;
}
} else {
var temp__5735__auto___45691 = cljs.core.seq(seq__45251_45647);
if(temp__5735__auto___45691){
var seq__45251_45692__$1 = temp__5735__auto___45691;
if(cljs.core.chunked_seq_QMARK_(seq__45251_45692__$1)){
var c__4556__auto___45693 = cljs.core.chunk_first(seq__45251_45692__$1);
var G__45694 = cljs.core.chunk_rest(seq__45251_45692__$1);
var G__45695 = c__4556__auto___45693;
var G__45696 = cljs.core.count(c__4556__auto___45693);
var G__45697 = (0);
seq__45251_45647 = G__45694;
chunk__45253_45648 = G__45695;
count__45254_45649 = G__45696;
i__45255_45650 = G__45697;
continue;
} else {
var child_struct_45698 = cljs.core.first(seq__45251_45692__$1);
if((!((child_struct_45698 == null)))){
if(typeof child_struct_45698 === 'string'){
var text_45699 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45699),child_struct_45698].join(''));
} else {
var children_45700 = shadow.dom.svg_node(child_struct_45698);
if(cljs.core.seq_QMARK_(children_45700)){
var seq__45308_45701 = cljs.core.seq(children_45700);
var chunk__45310_45702 = null;
var count__45311_45703 = (0);
var i__45312_45704 = (0);
while(true){
if((i__45312_45704 < count__45311_45703)){
var child_45705 = chunk__45310_45702.cljs$core$IIndexed$_nth$arity$2(null,i__45312_45704);
if(cljs.core.truth_(child_45705)){
node.appendChild(child_45705);


var G__45707 = seq__45308_45701;
var G__45708 = chunk__45310_45702;
var G__45709 = count__45311_45703;
var G__45710 = (i__45312_45704 + (1));
seq__45308_45701 = G__45707;
chunk__45310_45702 = G__45708;
count__45311_45703 = G__45709;
i__45312_45704 = G__45710;
continue;
} else {
var G__45711 = seq__45308_45701;
var G__45712 = chunk__45310_45702;
var G__45713 = count__45311_45703;
var G__45714 = (i__45312_45704 + (1));
seq__45308_45701 = G__45711;
chunk__45310_45702 = G__45712;
count__45311_45703 = G__45713;
i__45312_45704 = G__45714;
continue;
}
} else {
var temp__5735__auto___45718__$1 = cljs.core.seq(seq__45308_45701);
if(temp__5735__auto___45718__$1){
var seq__45308_45719__$1 = temp__5735__auto___45718__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45308_45719__$1)){
var c__4556__auto___45720 = cljs.core.chunk_first(seq__45308_45719__$1);
var G__45721 = cljs.core.chunk_rest(seq__45308_45719__$1);
var G__45722 = c__4556__auto___45720;
var G__45723 = cljs.core.count(c__4556__auto___45720);
var G__45724 = (0);
seq__45308_45701 = G__45721;
chunk__45310_45702 = G__45722;
count__45311_45703 = G__45723;
i__45312_45704 = G__45724;
continue;
} else {
var child_45725 = cljs.core.first(seq__45308_45719__$1);
if(cljs.core.truth_(child_45725)){
node.appendChild(child_45725);


var G__45726 = cljs.core.next(seq__45308_45719__$1);
var G__45727 = null;
var G__45728 = (0);
var G__45729 = (0);
seq__45308_45701 = G__45726;
chunk__45310_45702 = G__45727;
count__45311_45703 = G__45728;
i__45312_45704 = G__45729;
continue;
} else {
var G__45730 = cljs.core.next(seq__45308_45719__$1);
var G__45731 = null;
var G__45732 = (0);
var G__45733 = (0);
seq__45308_45701 = G__45730;
chunk__45310_45702 = G__45731;
count__45311_45703 = G__45732;
i__45312_45704 = G__45733;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45700);
}
}


var G__45734 = cljs.core.next(seq__45251_45692__$1);
var G__45735 = null;
var G__45736 = (0);
var G__45737 = (0);
seq__45251_45647 = G__45734;
chunk__45253_45648 = G__45735;
count__45254_45649 = G__45736;
i__45255_45650 = G__45737;
continue;
} else {
var G__45738 = cljs.core.next(seq__45251_45692__$1);
var G__45739 = null;
var G__45740 = (0);
var G__45741 = (0);
seq__45251_45647 = G__45738;
chunk__45253_45648 = G__45739;
count__45254_45649 = G__45740;
i__45255_45650 = G__45741;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45742 = arguments.length;
var i__4737__auto___45743 = (0);
while(true){
if((i__4737__auto___45743 < len__4736__auto___45742)){
args__4742__auto__.push((arguments[i__4737__auto___45743]));

var G__45744 = (i__4737__auto___45743 + (1));
i__4737__auto___45743 = G__45744;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45328){
var G__45329 = cljs.core.first(seq45328);
var seq45328__$1 = cljs.core.next(seq45328);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45329,seq45328__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__45336 = arguments.length;
switch (G__45336) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__42849__auto___45746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_45341){
var state_val_45342 = (state_45341[(1)]);
if((state_val_45342 === (1))){
var state_45341__$1 = state_45341;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45341__$1,(2),once_or_cleanup);
} else {
if((state_val_45342 === (2))){
var inst_45338 = (state_45341[(2)]);
var inst_45339 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45341__$1 = (function (){var statearr_45343 = state_45341;
(statearr_45343[(7)] = inst_45338);

return statearr_45343;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45341__$1,inst_45339);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42711__auto__ = null;
var shadow$dom$state_machine__42711__auto____0 = (function (){
var statearr_45344 = [null,null,null,null,null,null,null,null];
(statearr_45344[(0)] = shadow$dom$state_machine__42711__auto__);

(statearr_45344[(1)] = (1));

return statearr_45344;
});
var shadow$dom$state_machine__42711__auto____1 = (function (state_45341){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45341);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45345){var ex__42714__auto__ = e45345;
var statearr_45346_45747 = state_45341;
(statearr_45346_45747[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45341[(4)]))){
var statearr_45347_45748 = state_45341;
(statearr_45347_45748[(1)] = cljs.core.first((state_45341[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45749 = state_45341;
state_45341 = G__45749;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
shadow$dom$state_machine__42711__auto__ = function(state_45341){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42711__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42711__auto____1.call(this,state_45341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42711__auto____0;
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42711__auto____1;
return shadow$dom$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_45348 = f__42850__auto__();
(statearr_45348[(6)] = c__42849__auto___45746);

return statearr_45348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
