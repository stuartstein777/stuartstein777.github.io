goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45193 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45193(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45194 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45194(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44419 = coll;
var G__44420 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44419,G__44420) : shadow.dom.lazy_native_coll_seq.call(null,G__44419,G__44420));
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
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
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
var G__44489 = arguments.length;
switch (G__44489) {
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
var G__44499 = arguments.length;
switch (G__44499) {
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
var G__44515 = arguments.length;
switch (G__44515) {
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
var G__44523 = arguments.length;
switch (G__44523) {
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
var G__44539 = arguments.length;
switch (G__44539) {
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
var G__44560 = arguments.length;
switch (G__44560) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e44576){if((e44576 instanceof Object)){
var e = e44576;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44576;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__44594 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44595 = null;
var count__44596 = (0);
var i__44597 = (0);
while(true){
if((i__44597 < count__44596)){
var el = chunk__44595.cljs$core$IIndexed$_nth$arity$2(null,i__44597);
var handler_45201__$1 = ((function (seq__44594,chunk__44595,count__44596,i__44597,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44594,chunk__44595,count__44596,i__44597,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45201__$1);


var G__45202 = seq__44594;
var G__45203 = chunk__44595;
var G__45204 = count__44596;
var G__45205 = (i__44597 + (1));
seq__44594 = G__45202;
chunk__44595 = G__45203;
count__44596 = G__45204;
i__44597 = G__45205;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44594);
if(temp__5753__auto__){
var seq__44594__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44594__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44594__$1);
var G__45206 = cljs.core.chunk_rest(seq__44594__$1);
var G__45207 = c__4649__auto__;
var G__45208 = cljs.core.count(c__4649__auto__);
var G__45209 = (0);
seq__44594 = G__45206;
chunk__44595 = G__45207;
count__44596 = G__45208;
i__44597 = G__45209;
continue;
} else {
var el = cljs.core.first(seq__44594__$1);
var handler_45210__$1 = ((function (seq__44594,chunk__44595,count__44596,i__44597,el,seq__44594__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44594,chunk__44595,count__44596,i__44597,el,seq__44594__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45210__$1);


var G__45211 = cljs.core.next(seq__44594__$1);
var G__45212 = null;
var G__45213 = (0);
var G__45214 = (0);
seq__44594 = G__45211;
chunk__44595 = G__45212;
count__44596 = G__45213;
i__44597 = G__45214;
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
var G__44655 = arguments.length;
switch (G__44655) {
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
var seq__44682 = cljs.core.seq(events);
var chunk__44683 = null;
var count__44684 = (0);
var i__44685 = (0);
while(true){
if((i__44685 < count__44684)){
var vec__44725 = chunk__44683.cljs$core$IIndexed$_nth$arity$2(null,i__44685);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44725,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45216 = seq__44682;
var G__45217 = chunk__44683;
var G__45218 = count__44684;
var G__45219 = (i__44685 + (1));
seq__44682 = G__45216;
chunk__44683 = G__45217;
count__44684 = G__45218;
i__44685 = G__45219;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44682);
if(temp__5753__auto__){
var seq__44682__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44682__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44682__$1);
var G__45220 = cljs.core.chunk_rest(seq__44682__$1);
var G__45221 = c__4649__auto__;
var G__45222 = cljs.core.count(c__4649__auto__);
var G__45223 = (0);
seq__44682 = G__45220;
chunk__44683 = G__45221;
count__44684 = G__45222;
i__44685 = G__45223;
continue;
} else {
var vec__44731 = cljs.core.first(seq__44682__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44731,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44731,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45224 = cljs.core.next(seq__44682__$1);
var G__45225 = null;
var G__45226 = (0);
var G__45227 = (0);
seq__44682 = G__45224;
chunk__44683 = G__45225;
count__44684 = G__45226;
i__44685 = G__45227;
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
var seq__44743 = cljs.core.seq(styles);
var chunk__44744 = null;
var count__44745 = (0);
var i__44746 = (0);
while(true){
if((i__44746 < count__44745)){
var vec__44760 = chunk__44744.cljs$core$IIndexed$_nth$arity$2(null,i__44746);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45228 = seq__44743;
var G__45229 = chunk__44744;
var G__45230 = count__44745;
var G__45231 = (i__44746 + (1));
seq__44743 = G__45228;
chunk__44744 = G__45229;
count__44745 = G__45230;
i__44746 = G__45231;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44743);
if(temp__5753__auto__){
var seq__44743__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44743__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44743__$1);
var G__45232 = cljs.core.chunk_rest(seq__44743__$1);
var G__45233 = c__4649__auto__;
var G__45234 = cljs.core.count(c__4649__auto__);
var G__45235 = (0);
seq__44743 = G__45232;
chunk__44744 = G__45233;
count__44745 = G__45234;
i__44746 = G__45235;
continue;
} else {
var vec__44763 = cljs.core.first(seq__44743__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44763,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45236 = cljs.core.next(seq__44743__$1);
var G__45237 = null;
var G__45238 = (0);
var G__45239 = (0);
seq__44743 = G__45236;
chunk__44744 = G__45237;
count__44745 = G__45238;
i__44746 = G__45239;
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
var G__44776_45240 = key;
var G__44776_45241__$1 = (((G__44776_45240 instanceof cljs.core.Keyword))?G__44776_45240.fqn:null);
switch (G__44776_45241__$1) {
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
var ks_45243 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_45243,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_45243,"aria-");
}
})())){
el.setAttribute(ks_45243,value);
} else {
(el[ks_45243] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44803){
var map__44806 = p__44803;
var map__44806__$1 = cljs.core.__destructure_map(map__44806);
var props = map__44806__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44806__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44807 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44807,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44807,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44807,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44811 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44811,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44811;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44814 = arguments.length;
switch (G__44814) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44822){
var vec__44824 = p__44822;
var seq__44825 = cljs.core.seq(vec__44824);
var first__44826 = cljs.core.first(seq__44825);
var seq__44825__$1 = cljs.core.next(seq__44825);
var nn = first__44826;
var first__44826__$1 = cljs.core.first(seq__44825__$1);
var seq__44825__$2 = cljs.core.next(seq__44825__$1);
var np = first__44826__$1;
var nc = seq__44825__$2;
var node = vec__44824;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44835 = nn;
var G__44836 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44835,G__44836) : create_fn.call(null,G__44835,G__44836));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44837 = nn;
var G__44838 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44837,G__44838) : create_fn.call(null,G__44837,G__44838));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44842 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44842,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44842,(1),null);
var seq__44846_45245 = cljs.core.seq(node_children);
var chunk__44847_45246 = null;
var count__44848_45247 = (0);
var i__44849_45248 = (0);
while(true){
if((i__44849_45248 < count__44848_45247)){
var child_struct_45249 = chunk__44847_45246.cljs$core$IIndexed$_nth$arity$2(null,i__44849_45248);
var children_45250 = shadow.dom.dom_node(child_struct_45249);
if(cljs.core.seq_QMARK_(children_45250)){
var seq__44890_45251 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45250));
var chunk__44892_45252 = null;
var count__44893_45253 = (0);
var i__44894_45254 = (0);
while(true){
if((i__44894_45254 < count__44893_45253)){
var child_45255 = chunk__44892_45252.cljs$core$IIndexed$_nth$arity$2(null,i__44894_45254);
if(cljs.core.truth_(child_45255)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45255);


var G__45256 = seq__44890_45251;
var G__45257 = chunk__44892_45252;
var G__45258 = count__44893_45253;
var G__45259 = (i__44894_45254 + (1));
seq__44890_45251 = G__45256;
chunk__44892_45252 = G__45257;
count__44893_45253 = G__45258;
i__44894_45254 = G__45259;
continue;
} else {
var G__45260 = seq__44890_45251;
var G__45261 = chunk__44892_45252;
var G__45262 = count__44893_45253;
var G__45263 = (i__44894_45254 + (1));
seq__44890_45251 = G__45260;
chunk__44892_45252 = G__45261;
count__44893_45253 = G__45262;
i__44894_45254 = G__45263;
continue;
}
} else {
var temp__5753__auto___45264 = cljs.core.seq(seq__44890_45251);
if(temp__5753__auto___45264){
var seq__44890_45265__$1 = temp__5753__auto___45264;
if(cljs.core.chunked_seq_QMARK_(seq__44890_45265__$1)){
var c__4649__auto___45266 = cljs.core.chunk_first(seq__44890_45265__$1);
var G__45267 = cljs.core.chunk_rest(seq__44890_45265__$1);
var G__45268 = c__4649__auto___45266;
var G__45269 = cljs.core.count(c__4649__auto___45266);
var G__45270 = (0);
seq__44890_45251 = G__45267;
chunk__44892_45252 = G__45268;
count__44893_45253 = G__45269;
i__44894_45254 = G__45270;
continue;
} else {
var child_45271 = cljs.core.first(seq__44890_45265__$1);
if(cljs.core.truth_(child_45271)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45271);


var G__45272 = cljs.core.next(seq__44890_45265__$1);
var G__45273 = null;
var G__45274 = (0);
var G__45275 = (0);
seq__44890_45251 = G__45272;
chunk__44892_45252 = G__45273;
count__44893_45253 = G__45274;
i__44894_45254 = G__45275;
continue;
} else {
var G__45276 = cljs.core.next(seq__44890_45265__$1);
var G__45277 = null;
var G__45278 = (0);
var G__45279 = (0);
seq__44890_45251 = G__45276;
chunk__44892_45252 = G__45277;
count__44893_45253 = G__45278;
i__44894_45254 = G__45279;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45250);
}


var G__45280 = seq__44846_45245;
var G__45281 = chunk__44847_45246;
var G__45282 = count__44848_45247;
var G__45283 = (i__44849_45248 + (1));
seq__44846_45245 = G__45280;
chunk__44847_45246 = G__45281;
count__44848_45247 = G__45282;
i__44849_45248 = G__45283;
continue;
} else {
var temp__5753__auto___45284 = cljs.core.seq(seq__44846_45245);
if(temp__5753__auto___45284){
var seq__44846_45285__$1 = temp__5753__auto___45284;
if(cljs.core.chunked_seq_QMARK_(seq__44846_45285__$1)){
var c__4649__auto___45286 = cljs.core.chunk_first(seq__44846_45285__$1);
var G__45287 = cljs.core.chunk_rest(seq__44846_45285__$1);
var G__45288 = c__4649__auto___45286;
var G__45289 = cljs.core.count(c__4649__auto___45286);
var G__45290 = (0);
seq__44846_45245 = G__45287;
chunk__44847_45246 = G__45288;
count__44848_45247 = G__45289;
i__44849_45248 = G__45290;
continue;
} else {
var child_struct_45291 = cljs.core.first(seq__44846_45285__$1);
var children_45292 = shadow.dom.dom_node(child_struct_45291);
if(cljs.core.seq_QMARK_(children_45292)){
var seq__44912_45293 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45292));
var chunk__44915_45294 = null;
var count__44916_45295 = (0);
var i__44917_45296 = (0);
while(true){
if((i__44917_45296 < count__44916_45295)){
var child_45297 = chunk__44915_45294.cljs$core$IIndexed$_nth$arity$2(null,i__44917_45296);
if(cljs.core.truth_(child_45297)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45297);


var G__45298 = seq__44912_45293;
var G__45299 = chunk__44915_45294;
var G__45300 = count__44916_45295;
var G__45301 = (i__44917_45296 + (1));
seq__44912_45293 = G__45298;
chunk__44915_45294 = G__45299;
count__44916_45295 = G__45300;
i__44917_45296 = G__45301;
continue;
} else {
var G__45302 = seq__44912_45293;
var G__45303 = chunk__44915_45294;
var G__45304 = count__44916_45295;
var G__45305 = (i__44917_45296 + (1));
seq__44912_45293 = G__45302;
chunk__44915_45294 = G__45303;
count__44916_45295 = G__45304;
i__44917_45296 = G__45305;
continue;
}
} else {
var temp__5753__auto___45306__$1 = cljs.core.seq(seq__44912_45293);
if(temp__5753__auto___45306__$1){
var seq__44912_45307__$1 = temp__5753__auto___45306__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44912_45307__$1)){
var c__4649__auto___45308 = cljs.core.chunk_first(seq__44912_45307__$1);
var G__45309 = cljs.core.chunk_rest(seq__44912_45307__$1);
var G__45310 = c__4649__auto___45308;
var G__45311 = cljs.core.count(c__4649__auto___45308);
var G__45312 = (0);
seq__44912_45293 = G__45309;
chunk__44915_45294 = G__45310;
count__44916_45295 = G__45311;
i__44917_45296 = G__45312;
continue;
} else {
var child_45313 = cljs.core.first(seq__44912_45307__$1);
if(cljs.core.truth_(child_45313)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45313);


var G__45314 = cljs.core.next(seq__44912_45307__$1);
var G__45315 = null;
var G__45316 = (0);
var G__45317 = (0);
seq__44912_45293 = G__45314;
chunk__44915_45294 = G__45315;
count__44916_45295 = G__45316;
i__44917_45296 = G__45317;
continue;
} else {
var G__45318 = cljs.core.next(seq__44912_45307__$1);
var G__45319 = null;
var G__45320 = (0);
var G__45321 = (0);
seq__44912_45293 = G__45318;
chunk__44915_45294 = G__45319;
count__44916_45295 = G__45320;
i__44917_45296 = G__45321;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45292);
}


var G__45322 = cljs.core.next(seq__44846_45285__$1);
var G__45323 = null;
var G__45324 = (0);
var G__45325 = (0);
seq__44846_45245 = G__45322;
chunk__44847_45246 = G__45323;
count__44848_45247 = G__45324;
i__44849_45248 = G__45325;
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
var seq__44941 = cljs.core.seq(node);
var chunk__44942 = null;
var count__44943 = (0);
var i__44944 = (0);
while(true){
if((i__44944 < count__44943)){
var n = chunk__44942.cljs$core$IIndexed$_nth$arity$2(null,i__44944);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45326 = seq__44941;
var G__45327 = chunk__44942;
var G__45328 = count__44943;
var G__45329 = (i__44944 + (1));
seq__44941 = G__45326;
chunk__44942 = G__45327;
count__44943 = G__45328;
i__44944 = G__45329;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44941);
if(temp__5753__auto__){
var seq__44941__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44941__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44941__$1);
var G__45330 = cljs.core.chunk_rest(seq__44941__$1);
var G__45331 = c__4649__auto__;
var G__45332 = cljs.core.count(c__4649__auto__);
var G__45333 = (0);
seq__44941 = G__45330;
chunk__44942 = G__45331;
count__44943 = G__45332;
i__44944 = G__45333;
continue;
} else {
var n = cljs.core.first(seq__44941__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45334 = cljs.core.next(seq__44941__$1);
var G__45335 = null;
var G__45336 = (0);
var G__45337 = (0);
seq__44941 = G__45334;
chunk__44942 = G__45335;
count__44943 = G__45336;
i__44944 = G__45337;
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
var G__44952 = arguments.length;
switch (G__44952) {
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
var G__44961 = arguments.length;
switch (G__44961) {
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
var G__44975 = arguments.length;
switch (G__44975) {
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
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___45341 = arguments.length;
var i__4830__auto___45342 = (0);
while(true){
if((i__4830__auto___45342 < len__4829__auto___45341)){
args__4835__auto__.push((arguments[i__4830__auto___45342]));

var G__45343 = (i__4830__auto___45342 + (1));
i__4830__auto___45342 = G__45343;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__45004_45344 = cljs.core.seq(nodes);
var chunk__45005_45345 = null;
var count__45006_45346 = (0);
var i__45007_45347 = (0);
while(true){
if((i__45007_45347 < count__45006_45346)){
var node_45348 = chunk__45005_45345.cljs$core$IIndexed$_nth$arity$2(null,i__45007_45347);
fragment.appendChild(shadow.dom._to_dom(node_45348));


var G__45349 = seq__45004_45344;
var G__45350 = chunk__45005_45345;
var G__45351 = count__45006_45346;
var G__45352 = (i__45007_45347 + (1));
seq__45004_45344 = G__45349;
chunk__45005_45345 = G__45350;
count__45006_45346 = G__45351;
i__45007_45347 = G__45352;
continue;
} else {
var temp__5753__auto___45353 = cljs.core.seq(seq__45004_45344);
if(temp__5753__auto___45353){
var seq__45004_45354__$1 = temp__5753__auto___45353;
if(cljs.core.chunked_seq_QMARK_(seq__45004_45354__$1)){
var c__4649__auto___45355 = cljs.core.chunk_first(seq__45004_45354__$1);
var G__45356 = cljs.core.chunk_rest(seq__45004_45354__$1);
var G__45357 = c__4649__auto___45355;
var G__45358 = cljs.core.count(c__4649__auto___45355);
var G__45359 = (0);
seq__45004_45344 = G__45356;
chunk__45005_45345 = G__45357;
count__45006_45346 = G__45358;
i__45007_45347 = G__45359;
continue;
} else {
var node_45360 = cljs.core.first(seq__45004_45354__$1);
fragment.appendChild(shadow.dom._to_dom(node_45360));


var G__45361 = cljs.core.next(seq__45004_45354__$1);
var G__45362 = null;
var G__45363 = (0);
var G__45364 = (0);
seq__45004_45344 = G__45361;
chunk__45005_45345 = G__45362;
count__45006_45346 = G__45363;
i__45007_45347 = G__45364;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44998){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44998));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45020_45365 = cljs.core.seq(scripts);
var chunk__45021_45366 = null;
var count__45022_45367 = (0);
var i__45023_45368 = (0);
while(true){
if((i__45023_45368 < count__45022_45367)){
var vec__45040_45369 = chunk__45021_45366.cljs$core$IIndexed$_nth$arity$2(null,i__45023_45368);
var script_tag_45370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040_45369,(0),null);
var script_body_45371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040_45369,(1),null);
eval(script_body_45371);


var G__45372 = seq__45020_45365;
var G__45373 = chunk__45021_45366;
var G__45374 = count__45022_45367;
var G__45375 = (i__45023_45368 + (1));
seq__45020_45365 = G__45372;
chunk__45021_45366 = G__45373;
count__45022_45367 = G__45374;
i__45023_45368 = G__45375;
continue;
} else {
var temp__5753__auto___45376 = cljs.core.seq(seq__45020_45365);
if(temp__5753__auto___45376){
var seq__45020_45377__$1 = temp__5753__auto___45376;
if(cljs.core.chunked_seq_QMARK_(seq__45020_45377__$1)){
var c__4649__auto___45378 = cljs.core.chunk_first(seq__45020_45377__$1);
var G__45379 = cljs.core.chunk_rest(seq__45020_45377__$1);
var G__45380 = c__4649__auto___45378;
var G__45381 = cljs.core.count(c__4649__auto___45378);
var G__45382 = (0);
seq__45020_45365 = G__45379;
chunk__45021_45366 = G__45380;
count__45022_45367 = G__45381;
i__45023_45368 = G__45382;
continue;
} else {
var vec__45045_45383 = cljs.core.first(seq__45020_45377__$1);
var script_tag_45384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45045_45383,(0),null);
var script_body_45385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45045_45383,(1),null);
eval(script_body_45385);


var G__45386 = cljs.core.next(seq__45020_45377__$1);
var G__45387 = null;
var G__45388 = (0);
var G__45389 = (0);
seq__45020_45365 = G__45386;
chunk__45021_45366 = G__45387;
count__45022_45367 = G__45388;
i__45023_45368 = G__45389;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45051){
var vec__45052 = p__45051;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45052,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45052,(1),null);
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
var G__45066 = arguments.length;
switch (G__45066) {
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
var seq__45080 = cljs.core.seq(style_keys);
var chunk__45081 = null;
var count__45082 = (0);
var i__45083 = (0);
while(true){
if((i__45083 < count__45082)){
var it = chunk__45081.cljs$core$IIndexed$_nth$arity$2(null,i__45083);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45391 = seq__45080;
var G__45392 = chunk__45081;
var G__45393 = count__45082;
var G__45394 = (i__45083 + (1));
seq__45080 = G__45391;
chunk__45081 = G__45392;
count__45082 = G__45393;
i__45083 = G__45394;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45080);
if(temp__5753__auto__){
var seq__45080__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45080__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45080__$1);
var G__45395 = cljs.core.chunk_rest(seq__45080__$1);
var G__45396 = c__4649__auto__;
var G__45397 = cljs.core.count(c__4649__auto__);
var G__45398 = (0);
seq__45080 = G__45395;
chunk__45081 = G__45396;
count__45082 = G__45397;
i__45083 = G__45398;
continue;
} else {
var it = cljs.core.first(seq__45080__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45399 = cljs.core.next(seq__45080__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__45080 = G__45399;
chunk__45081 = G__45400;
count__45082 = G__45401;
i__45083 = G__45402;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k45085,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__45089 = k45085;
var G__45089__$1 = (((G__45089 instanceof cljs.core.Keyword))?G__45089.fqn:null);
switch (G__45089__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45085,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__45090){
var vec__45091 = p__45090;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45091,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45091,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45084){
var self__ = this;
var G__45084__$1 = this;
return (new cljs.core.RecordIter((0),G__45084__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45086,other45087){
var self__ = this;
var this45086__$1 = this;
return (((!((other45087 == null)))) && ((((this45086__$1.constructor === other45087.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45086__$1.x,other45087.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45086__$1.y,other45087.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45086__$1.__extmap,other45087.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k45085){
var self__ = this;
var this__4479__auto____$1 = this;
var G__45094 = k45085;
var G__45094__$1 = (((G__45094 instanceof cljs.core.Keyword))?G__45094.fqn:null);
switch (G__45094__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45085);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__45084){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__45095 = cljs.core.keyword_identical_QMARK_;
var expr__45096 = k__4481__auto__;
if(cljs.core.truth_((pred__45095.cljs$core$IFn$_invoke$arity$2 ? pred__45095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45096) : pred__45095.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45096)))){
return (new shadow.dom.Coordinate(G__45084,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45095.cljs$core$IFn$_invoke$arity$2 ? pred__45095.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45096) : pred__45095.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45096)))){
return (new shadow.dom.Coordinate(self__.x,G__45084,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__45084),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__45084){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45084,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45088){
var extmap__4512__auto__ = (function (){var G__45098 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45088,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45088)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45098);
} else {
return G__45098;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45088),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45088),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k45100,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__45104 = k45100;
var G__45104__$1 = (((G__45104 instanceof cljs.core.Keyword))?G__45104.fqn:null);
switch (G__45104__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45100,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__45105){
var vec__45106 = p__45105;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45106,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45106,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45099){
var self__ = this;
var G__45099__$1 = this;
return (new cljs.core.RecordIter((0),G__45099__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45101,other45102){
var self__ = this;
var this45101__$1 = this;
return (((!((other45102 == null)))) && ((((this45101__$1.constructor === other45102.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45101__$1.w,other45102.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45101__$1.h,other45102.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45101__$1.__extmap,other45102.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k45100){
var self__ = this;
var this__4479__auto____$1 = this;
var G__45109 = k45100;
var G__45109__$1 = (((G__45109 instanceof cljs.core.Keyword))?G__45109.fqn:null);
switch (G__45109__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45100);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__45099){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__45110 = cljs.core.keyword_identical_QMARK_;
var expr__45111 = k__4481__auto__;
if(cljs.core.truth_((pred__45110.cljs$core$IFn$_invoke$arity$2 ? pred__45110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45111) : pred__45110.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45111)))){
return (new shadow.dom.Size(G__45099,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45110.cljs$core$IFn$_invoke$arity$2 ? pred__45110.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45111) : pred__45110.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45111)))){
return (new shadow.dom.Size(self__.w,G__45099,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__45099),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__45099){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45099,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45103){
var extmap__4512__auto__ = (function (){var G__45113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45103,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45103)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45113);
} else {
return G__45113;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45103),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45103),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__45410 = (i + (1));
var G__45411 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45410;
ret = G__45411;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45118){
var vec__45119 = p__45118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45119,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45123 = arguments.length;
switch (G__45123) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__45415 = ps;
var G__45416 = (i + (1));
el__$1 = G__45415;
i = G__45416;
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
var vec__45124 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45124,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45127_45417 = cljs.core.seq(props);
var chunk__45128_45418 = null;
var count__45129_45419 = (0);
var i__45130_45420 = (0);
while(true){
if((i__45130_45420 < count__45129_45419)){
var vec__45137_45421 = chunk__45128_45418.cljs$core$IIndexed$_nth$arity$2(null,i__45130_45420);
var k_45422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45421,(0),null);
var v_45423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45137_45421,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_45422);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45422),v_45423);


var G__45425 = seq__45127_45417;
var G__45426 = chunk__45128_45418;
var G__45427 = count__45129_45419;
var G__45428 = (i__45130_45420 + (1));
seq__45127_45417 = G__45425;
chunk__45128_45418 = G__45426;
count__45129_45419 = G__45427;
i__45130_45420 = G__45428;
continue;
} else {
var temp__5753__auto___45429 = cljs.core.seq(seq__45127_45417);
if(temp__5753__auto___45429){
var seq__45127_45430__$1 = temp__5753__auto___45429;
if(cljs.core.chunked_seq_QMARK_(seq__45127_45430__$1)){
var c__4649__auto___45431 = cljs.core.chunk_first(seq__45127_45430__$1);
var G__45432 = cljs.core.chunk_rest(seq__45127_45430__$1);
var G__45433 = c__4649__auto___45431;
var G__45434 = cljs.core.count(c__4649__auto___45431);
var G__45435 = (0);
seq__45127_45417 = G__45432;
chunk__45128_45418 = G__45433;
count__45129_45419 = G__45434;
i__45130_45420 = G__45435;
continue;
} else {
var vec__45140_45436 = cljs.core.first(seq__45127_45430__$1);
var k_45437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45140_45436,(0),null);
var v_45438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45140_45436,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_45437);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45437),v_45438);


var G__45440 = cljs.core.next(seq__45127_45430__$1);
var G__45441 = null;
var G__45442 = (0);
var G__45443 = (0);
seq__45127_45417 = G__45440;
chunk__45128_45418 = G__45441;
count__45129_45419 = G__45442;
i__45130_45420 = G__45443;
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
var vec__45144 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45144,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45144,(1),null);
var seq__45147_45445 = cljs.core.seq(node_children);
var chunk__45149_45446 = null;
var count__45150_45447 = (0);
var i__45151_45448 = (0);
while(true){
if((i__45151_45448 < count__45150_45447)){
var child_struct_45449 = chunk__45149_45446.cljs$core$IIndexed$_nth$arity$2(null,i__45151_45448);
if((!((child_struct_45449 == null)))){
if(typeof child_struct_45449 === 'string'){
var text_45450 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45450),child_struct_45449].join(''));
} else {
var children_45451 = shadow.dom.svg_node(child_struct_45449);
if(cljs.core.seq_QMARK_(children_45451)){
var seq__45165_45452 = cljs.core.seq(children_45451);
var chunk__45167_45453 = null;
var count__45168_45454 = (0);
var i__45169_45455 = (0);
while(true){
if((i__45169_45455 < count__45168_45454)){
var child_45456 = chunk__45167_45453.cljs$core$IIndexed$_nth$arity$2(null,i__45169_45455);
if(cljs.core.truth_(child_45456)){
node.appendChild(child_45456);


var G__45457 = seq__45165_45452;
var G__45458 = chunk__45167_45453;
var G__45459 = count__45168_45454;
var G__45460 = (i__45169_45455 + (1));
seq__45165_45452 = G__45457;
chunk__45167_45453 = G__45458;
count__45168_45454 = G__45459;
i__45169_45455 = G__45460;
continue;
} else {
var G__45462 = seq__45165_45452;
var G__45463 = chunk__45167_45453;
var G__45464 = count__45168_45454;
var G__45465 = (i__45169_45455 + (1));
seq__45165_45452 = G__45462;
chunk__45167_45453 = G__45463;
count__45168_45454 = G__45464;
i__45169_45455 = G__45465;
continue;
}
} else {
var temp__5753__auto___45466 = cljs.core.seq(seq__45165_45452);
if(temp__5753__auto___45466){
var seq__45165_45467__$1 = temp__5753__auto___45466;
if(cljs.core.chunked_seq_QMARK_(seq__45165_45467__$1)){
var c__4649__auto___45468 = cljs.core.chunk_first(seq__45165_45467__$1);
var G__45469 = cljs.core.chunk_rest(seq__45165_45467__$1);
var G__45470 = c__4649__auto___45468;
var G__45471 = cljs.core.count(c__4649__auto___45468);
var G__45472 = (0);
seq__45165_45452 = G__45469;
chunk__45167_45453 = G__45470;
count__45168_45454 = G__45471;
i__45169_45455 = G__45472;
continue;
} else {
var child_45473 = cljs.core.first(seq__45165_45467__$1);
if(cljs.core.truth_(child_45473)){
node.appendChild(child_45473);


var G__45474 = cljs.core.next(seq__45165_45467__$1);
var G__45475 = null;
var G__45476 = (0);
var G__45477 = (0);
seq__45165_45452 = G__45474;
chunk__45167_45453 = G__45475;
count__45168_45454 = G__45476;
i__45169_45455 = G__45477;
continue;
} else {
var G__45478 = cljs.core.next(seq__45165_45467__$1);
var G__45479 = null;
var G__45480 = (0);
var G__45481 = (0);
seq__45165_45452 = G__45478;
chunk__45167_45453 = G__45479;
count__45168_45454 = G__45480;
i__45169_45455 = G__45481;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45451);
}
}


var G__45482 = seq__45147_45445;
var G__45483 = chunk__45149_45446;
var G__45484 = count__45150_45447;
var G__45485 = (i__45151_45448 + (1));
seq__45147_45445 = G__45482;
chunk__45149_45446 = G__45483;
count__45150_45447 = G__45484;
i__45151_45448 = G__45485;
continue;
} else {
var G__45487 = seq__45147_45445;
var G__45488 = chunk__45149_45446;
var G__45489 = count__45150_45447;
var G__45490 = (i__45151_45448 + (1));
seq__45147_45445 = G__45487;
chunk__45149_45446 = G__45488;
count__45150_45447 = G__45489;
i__45151_45448 = G__45490;
continue;
}
} else {
var temp__5753__auto___45492 = cljs.core.seq(seq__45147_45445);
if(temp__5753__auto___45492){
var seq__45147_45493__$1 = temp__5753__auto___45492;
if(cljs.core.chunked_seq_QMARK_(seq__45147_45493__$1)){
var c__4649__auto___45494 = cljs.core.chunk_first(seq__45147_45493__$1);
var G__45495 = cljs.core.chunk_rest(seq__45147_45493__$1);
var G__45496 = c__4649__auto___45494;
var G__45497 = cljs.core.count(c__4649__auto___45494);
var G__45498 = (0);
seq__45147_45445 = G__45495;
chunk__45149_45446 = G__45496;
count__45150_45447 = G__45497;
i__45151_45448 = G__45498;
continue;
} else {
var child_struct_45499 = cljs.core.first(seq__45147_45493__$1);
if((!((child_struct_45499 == null)))){
if(typeof child_struct_45499 === 'string'){
var text_45501 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45501),child_struct_45499].join(''));
} else {
var children_45503 = shadow.dom.svg_node(child_struct_45499);
if(cljs.core.seq_QMARK_(children_45503)){
var seq__45171_45505 = cljs.core.seq(children_45503);
var chunk__45173_45506 = null;
var count__45174_45507 = (0);
var i__45175_45508 = (0);
while(true){
if((i__45175_45508 < count__45174_45507)){
var child_45509 = chunk__45173_45506.cljs$core$IIndexed$_nth$arity$2(null,i__45175_45508);
if(cljs.core.truth_(child_45509)){
node.appendChild(child_45509);


var G__45510 = seq__45171_45505;
var G__45511 = chunk__45173_45506;
var G__45512 = count__45174_45507;
var G__45513 = (i__45175_45508 + (1));
seq__45171_45505 = G__45510;
chunk__45173_45506 = G__45511;
count__45174_45507 = G__45512;
i__45175_45508 = G__45513;
continue;
} else {
var G__45514 = seq__45171_45505;
var G__45515 = chunk__45173_45506;
var G__45516 = count__45174_45507;
var G__45517 = (i__45175_45508 + (1));
seq__45171_45505 = G__45514;
chunk__45173_45506 = G__45515;
count__45174_45507 = G__45516;
i__45175_45508 = G__45517;
continue;
}
} else {
var temp__5753__auto___45518__$1 = cljs.core.seq(seq__45171_45505);
if(temp__5753__auto___45518__$1){
var seq__45171_45519__$1 = temp__5753__auto___45518__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45171_45519__$1)){
var c__4649__auto___45520 = cljs.core.chunk_first(seq__45171_45519__$1);
var G__45521 = cljs.core.chunk_rest(seq__45171_45519__$1);
var G__45522 = c__4649__auto___45520;
var G__45523 = cljs.core.count(c__4649__auto___45520);
var G__45524 = (0);
seq__45171_45505 = G__45521;
chunk__45173_45506 = G__45522;
count__45174_45507 = G__45523;
i__45175_45508 = G__45524;
continue;
} else {
var child_45525 = cljs.core.first(seq__45171_45519__$1);
if(cljs.core.truth_(child_45525)){
node.appendChild(child_45525);


var G__45526 = cljs.core.next(seq__45171_45519__$1);
var G__45527 = null;
var G__45528 = (0);
var G__45529 = (0);
seq__45171_45505 = G__45526;
chunk__45173_45506 = G__45527;
count__45174_45507 = G__45528;
i__45175_45508 = G__45529;
continue;
} else {
var G__45530 = cljs.core.next(seq__45171_45519__$1);
var G__45531 = null;
var G__45532 = (0);
var G__45533 = (0);
seq__45171_45505 = G__45530;
chunk__45173_45506 = G__45531;
count__45174_45507 = G__45532;
i__45175_45508 = G__45533;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45503);
}
}


var G__45534 = cljs.core.next(seq__45147_45493__$1);
var G__45535 = null;
var G__45536 = (0);
var G__45537 = (0);
seq__45147_45445 = G__45534;
chunk__45149_45446 = G__45535;
count__45150_45447 = G__45536;
i__45151_45448 = G__45537;
continue;
} else {
var G__45538 = cljs.core.next(seq__45147_45493__$1);
var G__45539 = null;
var G__45540 = (0);
var G__45541 = (0);
seq__45147_45445 = G__45538;
chunk__45149_45446 = G__45539;
count__45150_45447 = G__45540;
i__45151_45448 = G__45541;
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
var args__4835__auto__ = [];
var len__4829__auto___45545 = arguments.length;
var i__4830__auto___45546 = (0);
while(true){
if((i__4830__auto___45546 < len__4829__auto___45545)){
args__4835__auto__.push((arguments[i__4830__auto___45546]));

var G__45547 = (i__4830__auto___45546 + (1));
i__4830__auto___45546 = G__45547;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45177){
var G__45178 = cljs.core.first(seq45177);
var seq45177__$1 = cljs.core.next(seq45177);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45178,seq45177__$1);
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
var G__45180 = arguments.length;
switch (G__45180) {
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

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__42184__auto___45553 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_45185){
var state_val_45186 = (state_45185[(1)]);
if((state_val_45186 === (1))){
var state_45185__$1 = state_45185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45185__$1,(2),once_or_cleanup);
} else {
if((state_val_45186 === (2))){
var inst_45182 = (state_45185[(2)]);
var inst_45183 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45185__$1 = (function (){var statearr_45187 = state_45185;
(statearr_45187[(7)] = inst_45182);

return statearr_45187;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45185__$1,inst_45183);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41967__auto__ = null;
var shadow$dom$state_machine__41967__auto____0 = (function (){
var statearr_45188 = [null,null,null,null,null,null,null,null];
(statearr_45188[(0)] = shadow$dom$state_machine__41967__auto__);

(statearr_45188[(1)] = (1));

return statearr_45188;
});
var shadow$dom$state_machine__41967__auto____1 = (function (state_45185){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_45185);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e45189){var ex__41970__auto__ = e45189;
var statearr_45190_45554 = state_45185;
(statearr_45190_45554[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_45185[(4)]))){
var statearr_45191_45555 = state_45185;
(statearr_45191_45555[(1)] = cljs.core.first((state_45185[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45560 = state_45185;
state_45185 = G__45560;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
shadow$dom$state_machine__41967__auto__ = function(state_45185){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41967__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41967__auto____1.call(this,state_45185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41967__auto____0;
shadow$dom$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41967__auto____1;
return shadow$dom$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_45192 = f__42185__auto__();
(statearr_45192[(6)] = c__42184__auto___45553);

return statearr_45192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
