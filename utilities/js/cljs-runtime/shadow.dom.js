goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_31012 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_31012(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_31013 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_31013(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30199 = coll;
var G__30200 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30199,G__30200) : shadow.dom.lazy_native_coll_seq.call(null,G__30199,G__30200));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__30240 = arguments.length;
switch (G__30240) {
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
var G__30243 = arguments.length;
switch (G__30243) {
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
var G__30305 = arguments.length;
switch (G__30305) {
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
var G__30318 = arguments.length;
switch (G__30318) {
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
var G__30331 = arguments.length;
switch (G__30331) {
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
var G__30349 = arguments.length;
switch (G__30349) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30365){if((e30365 instanceof Object)){
var e = e30365;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30365;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30379 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30380 = null;
var count__30381 = (0);
var i__30382 = (0);
while(true){
if((i__30382 < count__30381)){
var el = chunk__30380.cljs$core$IIndexed$_nth$arity$2(null,i__30382);
var handler_31020__$1 = ((function (seq__30379,chunk__30380,count__30381,i__30382,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30379,chunk__30380,count__30381,i__30382,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31020__$1);


var G__31021 = seq__30379;
var G__31022 = chunk__30380;
var G__31023 = count__30381;
var G__31024 = (i__30382 + (1));
seq__30379 = G__31021;
chunk__30380 = G__31022;
count__30381 = G__31023;
i__30382 = G__31024;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30379);
if(temp__5804__auto__){
var seq__30379__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30379__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30379__$1);
var G__31025 = cljs.core.chunk_rest(seq__30379__$1);
var G__31026 = c__5568__auto__;
var G__31027 = cljs.core.count(c__5568__auto__);
var G__31028 = (0);
seq__30379 = G__31025;
chunk__30380 = G__31026;
count__30381 = G__31027;
i__30382 = G__31028;
continue;
} else {
var el = cljs.core.first(seq__30379__$1);
var handler_31029__$1 = ((function (seq__30379,chunk__30380,count__30381,i__30382,el,seq__30379__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30379,chunk__30380,count__30381,i__30382,el,seq__30379__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_31029__$1);


var G__31030 = cljs.core.next(seq__30379__$1);
var G__31031 = null;
var G__31032 = (0);
var G__31033 = (0);
seq__30379 = G__31030;
chunk__30380 = G__31031;
count__30381 = G__31032;
i__30382 = G__31033;
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
var G__30420 = arguments.length;
switch (G__30420) {
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
var seq__30425 = cljs.core.seq(events);
var chunk__30426 = null;
var count__30427 = (0);
var i__30428 = (0);
while(true){
if((i__30428 < count__30427)){
var vec__30438 = chunk__30426.cljs$core$IIndexed$_nth$arity$2(null,i__30428);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30438,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31035 = seq__30425;
var G__31036 = chunk__30426;
var G__31037 = count__30427;
var G__31038 = (i__30428 + (1));
seq__30425 = G__31035;
chunk__30426 = G__31036;
count__30427 = G__31037;
i__30428 = G__31038;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30425);
if(temp__5804__auto__){
var seq__30425__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30425__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30425__$1);
var G__31039 = cljs.core.chunk_rest(seq__30425__$1);
var G__31040 = c__5568__auto__;
var G__31041 = cljs.core.count(c__5568__auto__);
var G__31042 = (0);
seq__30425 = G__31039;
chunk__30426 = G__31040;
count__30427 = G__31041;
i__30428 = G__31042;
continue;
} else {
var vec__30443 = cljs.core.first(seq__30425__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30443,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__31045 = cljs.core.next(seq__30425__$1);
var G__31046 = null;
var G__31047 = (0);
var G__31048 = (0);
seq__30425 = G__31045;
chunk__30426 = G__31046;
count__30427 = G__31047;
i__30428 = G__31048;
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
var seq__30452 = cljs.core.seq(styles);
var chunk__30453 = null;
var count__30454 = (0);
var i__30455 = (0);
while(true){
if((i__30455 < count__30454)){
var vec__30465 = chunk__30453.cljs$core$IIndexed$_nth$arity$2(null,i__30455);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31049 = seq__30452;
var G__31050 = chunk__30453;
var G__31051 = count__30454;
var G__31052 = (i__30455 + (1));
seq__30452 = G__31049;
chunk__30453 = G__31050;
count__30454 = G__31051;
i__30455 = G__31052;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30452);
if(temp__5804__auto__){
var seq__30452__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30452__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30452__$1);
var G__31053 = cljs.core.chunk_rest(seq__30452__$1);
var G__31054 = c__5568__auto__;
var G__31055 = cljs.core.count(c__5568__auto__);
var G__31056 = (0);
seq__30452 = G__31053;
chunk__30453 = G__31054;
count__30454 = G__31055;
i__30455 = G__31056;
continue;
} else {
var vec__30468 = cljs.core.first(seq__30452__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30468,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__31057 = cljs.core.next(seq__30452__$1);
var G__31058 = null;
var G__31059 = (0);
var G__31060 = (0);
seq__30452 = G__31057;
chunk__30453 = G__31058;
count__30454 = G__31059;
i__30455 = G__31060;
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
var G__30472_31061 = key;
var G__30472_31062__$1 = (((G__30472_31061 instanceof cljs.core.Keyword))?G__30472_31061.fqn:null);
switch (G__30472_31062__$1) {
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
var ks_31064 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_31064,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_31064,"aria-");
}
})())){
el.setAttribute(ks_31064,value);
} else {
(el[ks_31064] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30517){
var map__30518 = p__30517;
var map__30518__$1 = cljs.core.__destructure_map(map__30518);
var props = map__30518__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30518__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30522 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30522,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30522,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30522,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30526 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30526,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30526;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30531 = arguments.length;
switch (G__30531) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30535){
var vec__30536 = p__30535;
var seq__30537 = cljs.core.seq(vec__30536);
var first__30538 = cljs.core.first(seq__30537);
var seq__30537__$1 = cljs.core.next(seq__30537);
var nn = first__30538;
var first__30538__$1 = cljs.core.first(seq__30537__$1);
var seq__30537__$2 = cljs.core.next(seq__30537__$1);
var np = first__30538__$1;
var nc = seq__30537__$2;
var node = vec__30536;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30542 = nn;
var G__30543 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30542,G__30543) : create_fn.call(null,G__30542,G__30543));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30545 = nn;
var G__30546 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30545,G__30546) : create_fn.call(null,G__30545,G__30546));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30553 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30553,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30553,(1),null);
var seq__30556_31069 = cljs.core.seq(node_children);
var chunk__30557_31070 = null;
var count__30558_31071 = (0);
var i__30559_31072 = (0);
while(true){
if((i__30559_31072 < count__30558_31071)){
var child_struct_31073 = chunk__30557_31070.cljs$core$IIndexed$_nth$arity$2(null,i__30559_31072);
var children_31074 = shadow.dom.dom_node(child_struct_31073);
if(cljs.core.seq_QMARK_(children_31074)){
var seq__30629_31075 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31074));
var chunk__30632_31076 = null;
var count__30633_31077 = (0);
var i__30634_31078 = (0);
while(true){
if((i__30634_31078 < count__30633_31077)){
var child_31079 = chunk__30632_31076.cljs$core$IIndexed$_nth$arity$2(null,i__30634_31078);
if(cljs.core.truth_(child_31079)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31079);


var G__31080 = seq__30629_31075;
var G__31081 = chunk__30632_31076;
var G__31082 = count__30633_31077;
var G__31083 = (i__30634_31078 + (1));
seq__30629_31075 = G__31080;
chunk__30632_31076 = G__31081;
count__30633_31077 = G__31082;
i__30634_31078 = G__31083;
continue;
} else {
var G__31084 = seq__30629_31075;
var G__31085 = chunk__30632_31076;
var G__31086 = count__30633_31077;
var G__31087 = (i__30634_31078 + (1));
seq__30629_31075 = G__31084;
chunk__30632_31076 = G__31085;
count__30633_31077 = G__31086;
i__30634_31078 = G__31087;
continue;
}
} else {
var temp__5804__auto___31088 = cljs.core.seq(seq__30629_31075);
if(temp__5804__auto___31088){
var seq__30629_31089__$1 = temp__5804__auto___31088;
if(cljs.core.chunked_seq_QMARK_(seq__30629_31089__$1)){
var c__5568__auto___31090 = cljs.core.chunk_first(seq__30629_31089__$1);
var G__31091 = cljs.core.chunk_rest(seq__30629_31089__$1);
var G__31092 = c__5568__auto___31090;
var G__31093 = cljs.core.count(c__5568__auto___31090);
var G__31094 = (0);
seq__30629_31075 = G__31091;
chunk__30632_31076 = G__31092;
count__30633_31077 = G__31093;
i__30634_31078 = G__31094;
continue;
} else {
var child_31095 = cljs.core.first(seq__30629_31089__$1);
if(cljs.core.truth_(child_31095)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31095);


var G__31096 = cljs.core.next(seq__30629_31089__$1);
var G__31097 = null;
var G__31098 = (0);
var G__31099 = (0);
seq__30629_31075 = G__31096;
chunk__30632_31076 = G__31097;
count__30633_31077 = G__31098;
i__30634_31078 = G__31099;
continue;
} else {
var G__31100 = cljs.core.next(seq__30629_31089__$1);
var G__31101 = null;
var G__31102 = (0);
var G__31103 = (0);
seq__30629_31075 = G__31100;
chunk__30632_31076 = G__31101;
count__30633_31077 = G__31102;
i__30634_31078 = G__31103;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31074);
}


var G__31105 = seq__30556_31069;
var G__31106 = chunk__30557_31070;
var G__31107 = count__30558_31071;
var G__31108 = (i__30559_31072 + (1));
seq__30556_31069 = G__31105;
chunk__30557_31070 = G__31106;
count__30558_31071 = G__31107;
i__30559_31072 = G__31108;
continue;
} else {
var temp__5804__auto___31110 = cljs.core.seq(seq__30556_31069);
if(temp__5804__auto___31110){
var seq__30556_31111__$1 = temp__5804__auto___31110;
if(cljs.core.chunked_seq_QMARK_(seq__30556_31111__$1)){
var c__5568__auto___31112 = cljs.core.chunk_first(seq__30556_31111__$1);
var G__31113 = cljs.core.chunk_rest(seq__30556_31111__$1);
var G__31114 = c__5568__auto___31112;
var G__31115 = cljs.core.count(c__5568__auto___31112);
var G__31116 = (0);
seq__30556_31069 = G__31113;
chunk__30557_31070 = G__31114;
count__30558_31071 = G__31115;
i__30559_31072 = G__31116;
continue;
} else {
var child_struct_31117 = cljs.core.first(seq__30556_31111__$1);
var children_31118 = shadow.dom.dom_node(child_struct_31117);
if(cljs.core.seq_QMARK_(children_31118)){
var seq__30663_31119 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_31118));
var chunk__30665_31120 = null;
var count__30666_31121 = (0);
var i__30667_31122 = (0);
while(true){
if((i__30667_31122 < count__30666_31121)){
var child_31123 = chunk__30665_31120.cljs$core$IIndexed$_nth$arity$2(null,i__30667_31122);
if(cljs.core.truth_(child_31123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31123);


var G__31124 = seq__30663_31119;
var G__31125 = chunk__30665_31120;
var G__31126 = count__30666_31121;
var G__31127 = (i__30667_31122 + (1));
seq__30663_31119 = G__31124;
chunk__30665_31120 = G__31125;
count__30666_31121 = G__31126;
i__30667_31122 = G__31127;
continue;
} else {
var G__31128 = seq__30663_31119;
var G__31129 = chunk__30665_31120;
var G__31130 = count__30666_31121;
var G__31131 = (i__30667_31122 + (1));
seq__30663_31119 = G__31128;
chunk__30665_31120 = G__31129;
count__30666_31121 = G__31130;
i__30667_31122 = G__31131;
continue;
}
} else {
var temp__5804__auto___31132__$1 = cljs.core.seq(seq__30663_31119);
if(temp__5804__auto___31132__$1){
var seq__30663_31133__$1 = temp__5804__auto___31132__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30663_31133__$1)){
var c__5568__auto___31134 = cljs.core.chunk_first(seq__30663_31133__$1);
var G__31135 = cljs.core.chunk_rest(seq__30663_31133__$1);
var G__31136 = c__5568__auto___31134;
var G__31137 = cljs.core.count(c__5568__auto___31134);
var G__31138 = (0);
seq__30663_31119 = G__31135;
chunk__30665_31120 = G__31136;
count__30666_31121 = G__31137;
i__30667_31122 = G__31138;
continue;
} else {
var child_31139 = cljs.core.first(seq__30663_31133__$1);
if(cljs.core.truth_(child_31139)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_31139);


var G__31140 = cljs.core.next(seq__30663_31133__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__30663_31119 = G__31140;
chunk__30665_31120 = G__31141;
count__30666_31121 = G__31142;
i__30667_31122 = G__31143;
continue;
} else {
var G__31144 = cljs.core.next(seq__30663_31133__$1);
var G__31145 = null;
var G__31146 = (0);
var G__31147 = (0);
seq__30663_31119 = G__31144;
chunk__30665_31120 = G__31145;
count__30666_31121 = G__31146;
i__30667_31122 = G__31147;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_31118);
}


var G__31148 = cljs.core.next(seq__30556_31111__$1);
var G__31149 = null;
var G__31150 = (0);
var G__31151 = (0);
seq__30556_31069 = G__31148;
chunk__30557_31070 = G__31149;
count__30558_31071 = G__31150;
i__30559_31072 = G__31151;
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
var seq__30691 = cljs.core.seq(node);
var chunk__30692 = null;
var count__30693 = (0);
var i__30694 = (0);
while(true){
if((i__30694 < count__30693)){
var n = chunk__30692.cljs$core$IIndexed$_nth$arity$2(null,i__30694);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31153 = seq__30691;
var G__31154 = chunk__30692;
var G__31155 = count__30693;
var G__31156 = (i__30694 + (1));
seq__30691 = G__31153;
chunk__30692 = G__31154;
count__30693 = G__31155;
i__30694 = G__31156;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30691);
if(temp__5804__auto__){
var seq__30691__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30691__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30691__$1);
var G__31157 = cljs.core.chunk_rest(seq__30691__$1);
var G__31158 = c__5568__auto__;
var G__31159 = cljs.core.count(c__5568__auto__);
var G__31160 = (0);
seq__30691 = G__31157;
chunk__30692 = G__31158;
count__30693 = G__31159;
i__30694 = G__31160;
continue;
} else {
var n = cljs.core.first(seq__30691__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31161 = cljs.core.next(seq__30691__$1);
var G__31162 = null;
var G__31163 = (0);
var G__31164 = (0);
seq__30691 = G__31161;
chunk__30692 = G__31162;
count__30693 = G__31163;
i__30694 = G__31164;
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
var G__30713 = arguments.length;
switch (G__30713) {
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
var G__30721 = arguments.length;
switch (G__30721) {
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
var G__30732 = arguments.length;
switch (G__30732) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___31168 = arguments.length;
var i__5770__auto___31169 = (0);
while(true){
if((i__5770__auto___31169 < len__5769__auto___31168)){
args__5775__auto__.push((arguments[i__5770__auto___31169]));

var G__31170 = (i__5770__auto___31169 + (1));
i__5770__auto___31169 = G__31170;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__30754_31171 = cljs.core.seq(nodes);
var chunk__30755_31172 = null;
var count__30756_31173 = (0);
var i__30757_31174 = (0);
while(true){
if((i__30757_31174 < count__30756_31173)){
var node_31175 = chunk__30755_31172.cljs$core$IIndexed$_nth$arity$2(null,i__30757_31174);
fragment.appendChild(shadow.dom._to_dom(node_31175));


var G__31176 = seq__30754_31171;
var G__31177 = chunk__30755_31172;
var G__31178 = count__30756_31173;
var G__31179 = (i__30757_31174 + (1));
seq__30754_31171 = G__31176;
chunk__30755_31172 = G__31177;
count__30756_31173 = G__31178;
i__30757_31174 = G__31179;
continue;
} else {
var temp__5804__auto___31180 = cljs.core.seq(seq__30754_31171);
if(temp__5804__auto___31180){
var seq__30754_31181__$1 = temp__5804__auto___31180;
if(cljs.core.chunked_seq_QMARK_(seq__30754_31181__$1)){
var c__5568__auto___31182 = cljs.core.chunk_first(seq__30754_31181__$1);
var G__31183 = cljs.core.chunk_rest(seq__30754_31181__$1);
var G__31184 = c__5568__auto___31182;
var G__31185 = cljs.core.count(c__5568__auto___31182);
var G__31186 = (0);
seq__30754_31171 = G__31183;
chunk__30755_31172 = G__31184;
count__30756_31173 = G__31185;
i__30757_31174 = G__31186;
continue;
} else {
var node_31187 = cljs.core.first(seq__30754_31181__$1);
fragment.appendChild(shadow.dom._to_dom(node_31187));


var G__31188 = cljs.core.next(seq__30754_31181__$1);
var G__31189 = null;
var G__31190 = (0);
var G__31191 = (0);
seq__30754_31171 = G__31188;
chunk__30755_31172 = G__31189;
count__30756_31173 = G__31190;
i__30757_31174 = G__31191;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq30750){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30750));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30772_31192 = cljs.core.seq(scripts);
var chunk__30773_31193 = null;
var count__30774_31194 = (0);
var i__30775_31195 = (0);
while(true){
if((i__30775_31195 < count__30774_31194)){
var vec__30787_31196 = chunk__30773_31193.cljs$core$IIndexed$_nth$arity$2(null,i__30775_31195);
var script_tag_31197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30787_31196,(0),null);
var script_body_31198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30787_31196,(1),null);
eval(script_body_31198);


var G__31199 = seq__30772_31192;
var G__31200 = chunk__30773_31193;
var G__31201 = count__30774_31194;
var G__31202 = (i__30775_31195 + (1));
seq__30772_31192 = G__31199;
chunk__30773_31193 = G__31200;
count__30774_31194 = G__31201;
i__30775_31195 = G__31202;
continue;
} else {
var temp__5804__auto___31203 = cljs.core.seq(seq__30772_31192);
if(temp__5804__auto___31203){
var seq__30772_31204__$1 = temp__5804__auto___31203;
if(cljs.core.chunked_seq_QMARK_(seq__30772_31204__$1)){
var c__5568__auto___31205 = cljs.core.chunk_first(seq__30772_31204__$1);
var G__31206 = cljs.core.chunk_rest(seq__30772_31204__$1);
var G__31207 = c__5568__auto___31205;
var G__31208 = cljs.core.count(c__5568__auto___31205);
var G__31209 = (0);
seq__30772_31192 = G__31206;
chunk__30773_31193 = G__31207;
count__30774_31194 = G__31208;
i__30775_31195 = G__31209;
continue;
} else {
var vec__30794_31211 = cljs.core.first(seq__30772_31204__$1);
var script_tag_31212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794_31211,(0),null);
var script_body_31213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30794_31211,(1),null);
eval(script_body_31213);


var G__31214 = cljs.core.next(seq__30772_31204__$1);
var G__31215 = null;
var G__31216 = (0);
var G__31217 = (0);
seq__30772_31192 = G__31214;
chunk__30773_31193 = G__31215;
count__30774_31194 = G__31216;
i__30775_31195 = G__31217;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__30798){
var vec__30799 = p__30798;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(1),null);
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
var G__30813 = arguments.length;
switch (G__30813) {
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
var seq__30831 = cljs.core.seq(style_keys);
var chunk__30832 = null;
var count__30833 = (0);
var i__30834 = (0);
while(true){
if((i__30834 < count__30833)){
var it = chunk__30832.cljs$core$IIndexed$_nth$arity$2(null,i__30834);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31220 = seq__30831;
var G__31221 = chunk__30832;
var G__31222 = count__30833;
var G__31223 = (i__30834 + (1));
seq__30831 = G__31220;
chunk__30832 = G__31221;
count__30833 = G__31222;
i__30834 = G__31223;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30831);
if(temp__5804__auto__){
var seq__30831__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30831__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__30831__$1);
var G__31224 = cljs.core.chunk_rest(seq__30831__$1);
var G__31225 = c__5568__auto__;
var G__31226 = cljs.core.count(c__5568__auto__);
var G__31227 = (0);
seq__30831 = G__31224;
chunk__30832 = G__31225;
count__30833 = G__31226;
i__30834 = G__31227;
continue;
} else {
var it = cljs.core.first(seq__30831__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31228 = cljs.core.next(seq__30831__$1);
var G__31229 = null;
var G__31230 = (0);
var G__31231 = (0);
seq__30831 = G__31228;
chunk__30832 = G__31229;
count__30833 = G__31230;
i__30834 = G__31231;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30847,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30865 = k30847;
var G__30865__$1 = (((G__30865 instanceof cljs.core.Keyword))?G__30865.fqn:null);
switch (G__30865__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30847,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30867){
var vec__30868 = p__30867;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30868,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30868,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30846){
var self__ = this;
var G__30846__$1 = this;
return (new cljs.core.RecordIter((0),G__30846__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30848,other30849){
var self__ = this;
var this30848__$1 = this;
return (((!((other30849 == null)))) && ((((this30848__$1.constructor === other30849.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30848__$1.x,other30849.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30848__$1.y,other30849.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30848__$1.__extmap,other30849.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30847){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30873 = k30847;
var G__30873__$1 = (((G__30873 instanceof cljs.core.Keyword))?G__30873.fqn:null);
switch (G__30873__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30847);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30846){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30875 = cljs.core.keyword_identical_QMARK_;
var expr__30876 = k__5352__auto__;
if(cljs.core.truth_((pred__30875.cljs$core$IFn$_invoke$arity$2 ? pred__30875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30876) : pred__30875.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30876)))){
return (new shadow.dom.Coordinate(G__30846,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30875.cljs$core$IFn$_invoke$arity$2 ? pred__30875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30876) : pred__30875.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30876)))){
return (new shadow.dom.Coordinate(self__.x,G__30846,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30846),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30846){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30846,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30852){
var extmap__5385__auto__ = (function (){var G__30879 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30852,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30879);
} else {
return G__30879;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30852),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30852),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k30881,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__30885 = k30881;
var G__30885__$1 = (((G__30885 instanceof cljs.core.Keyword))?G__30885.fqn:null);
switch (G__30885__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30881,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__30886){
var vec__30887 = p__30886;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30887,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30887,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30880){
var self__ = this;
var G__30880__$1 = this;
return (new cljs.core.RecordIter((0),G__30880__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30882,other30883){
var self__ = this;
var this30882__$1 = this;
return (((!((other30883 == null)))) && ((((this30882__$1.constructor === other30883.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30882__$1.w,other30883.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30882__$1.h,other30883.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30882__$1.__extmap,other30883.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k30881){
var self__ = this;
var this__5350__auto____$1 = this;
var G__30890 = k30881;
var G__30890__$1 = (((G__30890 instanceof cljs.core.Keyword))?G__30890.fqn:null);
switch (G__30890__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30881);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__30880){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__30891 = cljs.core.keyword_identical_QMARK_;
var expr__30892 = k__5352__auto__;
if(cljs.core.truth_((pred__30891.cljs$core$IFn$_invoke$arity$2 ? pred__30891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30892) : pred__30891.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30892)))){
return (new shadow.dom.Size(G__30880,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30891.cljs$core$IFn$_invoke$arity$2 ? pred__30891.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30892) : pred__30891.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30892)))){
return (new shadow.dom.Size(self__.w,G__30880,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__30880),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__30880){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30880,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30884){
var extmap__5385__auto__ = (function (){var G__30894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30884,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30884)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30894);
} else {
return G__30894;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30884),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30884),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__31243 = (i + (1));
var G__31244 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31243;
ret = G__31244;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30907){
var vec__30908 = p__30907;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30908,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30912 = arguments.length;
switch (G__30912) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__31247 = ps;
var G__31248 = (i + (1));
el__$1 = G__31247;
i = G__31248;
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
var vec__30925 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30925,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30925,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30925,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30930_31250 = cljs.core.seq(props);
var chunk__30931_31251 = null;
var count__30932_31252 = (0);
var i__30933_31253 = (0);
while(true){
if((i__30933_31253 < count__30932_31252)){
var vec__30944_31255 = chunk__30931_31251.cljs$core$IIndexed$_nth$arity$2(null,i__30933_31253);
var k_31256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30944_31255,(0),null);
var v_31257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30944_31255,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_31256);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31256),v_31257);


var G__31258 = seq__30930_31250;
var G__31259 = chunk__30931_31251;
var G__31260 = count__30932_31252;
var G__31261 = (i__30933_31253 + (1));
seq__30930_31250 = G__31258;
chunk__30931_31251 = G__31259;
count__30932_31252 = G__31260;
i__30933_31253 = G__31261;
continue;
} else {
var temp__5804__auto___31262 = cljs.core.seq(seq__30930_31250);
if(temp__5804__auto___31262){
var seq__30930_31263__$1 = temp__5804__auto___31262;
if(cljs.core.chunked_seq_QMARK_(seq__30930_31263__$1)){
var c__5568__auto___31264 = cljs.core.chunk_first(seq__30930_31263__$1);
var G__31265 = cljs.core.chunk_rest(seq__30930_31263__$1);
var G__31266 = c__5568__auto___31264;
var G__31267 = cljs.core.count(c__5568__auto___31264);
var G__31268 = (0);
seq__30930_31250 = G__31265;
chunk__30931_31251 = G__31266;
count__30932_31252 = G__31267;
i__30933_31253 = G__31268;
continue;
} else {
var vec__30947_31269 = cljs.core.first(seq__30930_31263__$1);
var k_31270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947_31269,(0),null);
var v_31271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30947_31269,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_31270);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31270),v_31271);


var G__31274 = cljs.core.next(seq__30930_31263__$1);
var G__31275 = null;
var G__31276 = (0);
var G__31277 = (0);
seq__30930_31250 = G__31274;
chunk__30931_31251 = G__31275;
count__30932_31252 = G__31276;
i__30933_31253 = G__31277;
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
var vec__30954 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30954,(1),null);
var seq__30958_31278 = cljs.core.seq(node_children);
var chunk__30960_31279 = null;
var count__30961_31280 = (0);
var i__30962_31281 = (0);
while(true){
if((i__30962_31281 < count__30961_31280)){
var child_struct_31282 = chunk__30960_31279.cljs$core$IIndexed$_nth$arity$2(null,i__30962_31281);
if((!((child_struct_31282 == null)))){
if(typeof child_struct_31282 === 'string'){
var text_31283 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31283),child_struct_31282].join(''));
} else {
var children_31284 = shadow.dom.svg_node(child_struct_31282);
if(cljs.core.seq_QMARK_(children_31284)){
var seq__30978_31285 = cljs.core.seq(children_31284);
var chunk__30980_31286 = null;
var count__30981_31287 = (0);
var i__30982_31288 = (0);
while(true){
if((i__30982_31288 < count__30981_31287)){
var child_31289 = chunk__30980_31286.cljs$core$IIndexed$_nth$arity$2(null,i__30982_31288);
if(cljs.core.truth_(child_31289)){
node.appendChild(child_31289);


var G__31290 = seq__30978_31285;
var G__31291 = chunk__30980_31286;
var G__31292 = count__30981_31287;
var G__31293 = (i__30982_31288 + (1));
seq__30978_31285 = G__31290;
chunk__30980_31286 = G__31291;
count__30981_31287 = G__31292;
i__30982_31288 = G__31293;
continue;
} else {
var G__31300 = seq__30978_31285;
var G__31301 = chunk__30980_31286;
var G__31302 = count__30981_31287;
var G__31303 = (i__30982_31288 + (1));
seq__30978_31285 = G__31300;
chunk__30980_31286 = G__31301;
count__30981_31287 = G__31302;
i__30982_31288 = G__31303;
continue;
}
} else {
var temp__5804__auto___31304 = cljs.core.seq(seq__30978_31285);
if(temp__5804__auto___31304){
var seq__30978_31305__$1 = temp__5804__auto___31304;
if(cljs.core.chunked_seq_QMARK_(seq__30978_31305__$1)){
var c__5568__auto___31307 = cljs.core.chunk_first(seq__30978_31305__$1);
var G__31308 = cljs.core.chunk_rest(seq__30978_31305__$1);
var G__31309 = c__5568__auto___31307;
var G__31310 = cljs.core.count(c__5568__auto___31307);
var G__31311 = (0);
seq__30978_31285 = G__31308;
chunk__30980_31286 = G__31309;
count__30981_31287 = G__31310;
i__30982_31288 = G__31311;
continue;
} else {
var child_31312 = cljs.core.first(seq__30978_31305__$1);
if(cljs.core.truth_(child_31312)){
node.appendChild(child_31312);


var G__31313 = cljs.core.next(seq__30978_31305__$1);
var G__31314 = null;
var G__31315 = (0);
var G__31316 = (0);
seq__30978_31285 = G__31313;
chunk__30980_31286 = G__31314;
count__30981_31287 = G__31315;
i__30982_31288 = G__31316;
continue;
} else {
var G__31317 = cljs.core.next(seq__30978_31305__$1);
var G__31318 = null;
var G__31319 = (0);
var G__31320 = (0);
seq__30978_31285 = G__31317;
chunk__30980_31286 = G__31318;
count__30981_31287 = G__31319;
i__30982_31288 = G__31320;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31284);
}
}


var G__31321 = seq__30958_31278;
var G__31322 = chunk__30960_31279;
var G__31323 = count__30961_31280;
var G__31324 = (i__30962_31281 + (1));
seq__30958_31278 = G__31321;
chunk__30960_31279 = G__31322;
count__30961_31280 = G__31323;
i__30962_31281 = G__31324;
continue;
} else {
var G__31326 = seq__30958_31278;
var G__31327 = chunk__30960_31279;
var G__31328 = count__30961_31280;
var G__31329 = (i__30962_31281 + (1));
seq__30958_31278 = G__31326;
chunk__30960_31279 = G__31327;
count__30961_31280 = G__31328;
i__30962_31281 = G__31329;
continue;
}
} else {
var temp__5804__auto___31330 = cljs.core.seq(seq__30958_31278);
if(temp__5804__auto___31330){
var seq__30958_31331__$1 = temp__5804__auto___31330;
if(cljs.core.chunked_seq_QMARK_(seq__30958_31331__$1)){
var c__5568__auto___31332 = cljs.core.chunk_first(seq__30958_31331__$1);
var G__31333 = cljs.core.chunk_rest(seq__30958_31331__$1);
var G__31334 = c__5568__auto___31332;
var G__31335 = cljs.core.count(c__5568__auto___31332);
var G__31336 = (0);
seq__30958_31278 = G__31333;
chunk__30960_31279 = G__31334;
count__30961_31280 = G__31335;
i__30962_31281 = G__31336;
continue;
} else {
var child_struct_31337 = cljs.core.first(seq__30958_31331__$1);
if((!((child_struct_31337 == null)))){
if(typeof child_struct_31337 === 'string'){
var text_31339 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31339),child_struct_31337].join(''));
} else {
var children_31341 = shadow.dom.svg_node(child_struct_31337);
if(cljs.core.seq_QMARK_(children_31341)){
var seq__30984_31342 = cljs.core.seq(children_31341);
var chunk__30986_31343 = null;
var count__30987_31344 = (0);
var i__30988_31345 = (0);
while(true){
if((i__30988_31345 < count__30987_31344)){
var child_31346 = chunk__30986_31343.cljs$core$IIndexed$_nth$arity$2(null,i__30988_31345);
if(cljs.core.truth_(child_31346)){
node.appendChild(child_31346);


var G__31347 = seq__30984_31342;
var G__31348 = chunk__30986_31343;
var G__31349 = count__30987_31344;
var G__31350 = (i__30988_31345 + (1));
seq__30984_31342 = G__31347;
chunk__30986_31343 = G__31348;
count__30987_31344 = G__31349;
i__30988_31345 = G__31350;
continue;
} else {
var G__31351 = seq__30984_31342;
var G__31352 = chunk__30986_31343;
var G__31353 = count__30987_31344;
var G__31354 = (i__30988_31345 + (1));
seq__30984_31342 = G__31351;
chunk__30986_31343 = G__31352;
count__30987_31344 = G__31353;
i__30988_31345 = G__31354;
continue;
}
} else {
var temp__5804__auto___31355__$1 = cljs.core.seq(seq__30984_31342);
if(temp__5804__auto___31355__$1){
var seq__30984_31356__$1 = temp__5804__auto___31355__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30984_31356__$1)){
var c__5568__auto___31358 = cljs.core.chunk_first(seq__30984_31356__$1);
var G__31359 = cljs.core.chunk_rest(seq__30984_31356__$1);
var G__31360 = c__5568__auto___31358;
var G__31361 = cljs.core.count(c__5568__auto___31358);
var G__31362 = (0);
seq__30984_31342 = G__31359;
chunk__30986_31343 = G__31360;
count__30987_31344 = G__31361;
i__30988_31345 = G__31362;
continue;
} else {
var child_31363 = cljs.core.first(seq__30984_31356__$1);
if(cljs.core.truth_(child_31363)){
node.appendChild(child_31363);


var G__31365 = cljs.core.next(seq__30984_31356__$1);
var G__31366 = null;
var G__31367 = (0);
var G__31368 = (0);
seq__30984_31342 = G__31365;
chunk__30986_31343 = G__31366;
count__30987_31344 = G__31367;
i__30988_31345 = G__31368;
continue;
} else {
var G__31369 = cljs.core.next(seq__30984_31356__$1);
var G__31370 = null;
var G__31371 = (0);
var G__31372 = (0);
seq__30984_31342 = G__31369;
chunk__30986_31343 = G__31370;
count__30987_31344 = G__31371;
i__30988_31345 = G__31372;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31341);
}
}


var G__31373 = cljs.core.next(seq__30958_31331__$1);
var G__31374 = null;
var G__31375 = (0);
var G__31376 = (0);
seq__30958_31278 = G__31373;
chunk__30960_31279 = G__31374;
count__30961_31280 = G__31375;
i__30962_31281 = G__31376;
continue;
} else {
var G__31377 = cljs.core.next(seq__30958_31331__$1);
var G__31378 = null;
var G__31379 = (0);
var G__31380 = (0);
seq__30958_31278 = G__31377;
chunk__30960_31279 = G__31378;
count__30961_31280 = G__31379;
i__30962_31281 = G__31380;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31393 = arguments.length;
var i__5770__auto___31394 = (0);
while(true){
if((i__5770__auto___31394 < len__5769__auto___31393)){
args__5775__auto__.push((arguments[i__5770__auto___31394]));

var G__31399 = (i__5770__auto___31394 + (1));
i__5770__auto___31394 = G__31399;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30990){
var G__30991 = cljs.core.first(seq30990);
var seq30990__$1 = cljs.core.next(seq30990);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30991,seq30990__$1);
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
var G__30995 = arguments.length;
switch (G__30995) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__27763__auto___31411 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_31004){
var state_val_31005 = (state_31004[(1)]);
if((state_val_31005 === (1))){
var state_31004__$1 = state_31004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31004__$1,(2),once_or_cleanup);
} else {
if((state_val_31005 === (2))){
var inst_31001 = (state_31004[(2)]);
var inst_31002 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31004__$1 = (function (){var statearr_31006 = state_31004;
(statearr_31006[(7)] = inst_31001);

return statearr_31006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31004__$1,inst_31002);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27623__auto__ = null;
var shadow$dom$state_machine__27623__auto____0 = (function (){
var statearr_31007 = [null,null,null,null,null,null,null,null];
(statearr_31007[(0)] = shadow$dom$state_machine__27623__auto__);

(statearr_31007[(1)] = (1));

return statearr_31007;
});
var shadow$dom$state_machine__27623__auto____1 = (function (state_31004){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_31004);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e31008){var ex__27626__auto__ = e31008;
var statearr_31009_31416 = state_31004;
(statearr_31009_31416[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_31004[(4)]))){
var statearr_31010_31418 = state_31004;
(statearr_31010_31418[(1)] = cljs.core.first((state_31004[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31420 = state_31004;
state_31004 = G__31420;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
shadow$dom$state_machine__27623__auto__ = function(state_31004){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27623__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27623__auto____1.call(this,state_31004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27623__auto____0;
shadow$dom$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27623__auto____1;
return shadow$dom$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_31011 = f__27764__auto__();
(statearr_31011[(6)] = c__27763__auto___31411);

return statearr_31011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
