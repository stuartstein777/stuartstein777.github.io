goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45893 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45893(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45895 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45895(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45273 = coll;
var G__45274 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45273,G__45274) : shadow.dom.lazy_native_coll_seq.call(null,G__45273,G__45274));
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
var G__45287 = arguments.length;
switch (G__45287) {
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
var G__45293 = arguments.length;
switch (G__45293) {
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
var G__45299 = arguments.length;
switch (G__45299) {
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
var G__45304 = arguments.length;
switch (G__45304) {
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
var G__45308 = arguments.length;
switch (G__45308) {
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
var G__45319 = arguments.length;
switch (G__45319) {
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
}catch (e45324){if((e45324 instanceof Object)){
var e = e45324;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45324;

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
var seq__45331 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45332 = null;
var count__45333 = (0);
var i__45334 = (0);
while(true){
if((i__45334 < count__45333)){
var el = chunk__45332.cljs$core$IIndexed$_nth$arity$2(null,i__45334);
var handler_45927__$1 = ((function (seq__45331,chunk__45332,count__45333,i__45334,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45331,chunk__45332,count__45333,i__45334,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45927__$1);


var G__45929 = seq__45331;
var G__45930 = chunk__45332;
var G__45931 = count__45333;
var G__45932 = (i__45334 + (1));
seq__45331 = G__45929;
chunk__45332 = G__45930;
count__45333 = G__45931;
i__45334 = G__45932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45331);
if(temp__5735__auto__){
var seq__45331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45331__$1);
var G__45933 = cljs.core.chunk_rest(seq__45331__$1);
var G__45934 = c__4556__auto__;
var G__45935 = cljs.core.count(c__4556__auto__);
var G__45936 = (0);
seq__45331 = G__45933;
chunk__45332 = G__45934;
count__45333 = G__45935;
i__45334 = G__45936;
continue;
} else {
var el = cljs.core.first(seq__45331__$1);
var handler_45938__$1 = ((function (seq__45331,chunk__45332,count__45333,i__45334,el,seq__45331__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45331,chunk__45332,count__45333,i__45334,el,seq__45331__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45938__$1);


var G__45942 = cljs.core.next(seq__45331__$1);
var G__45943 = null;
var G__45944 = (0);
var G__45945 = (0);
seq__45331 = G__45942;
chunk__45332 = G__45943;
count__45333 = G__45944;
i__45334 = G__45945;
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
var G__45349 = arguments.length;
switch (G__45349) {
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
var seq__45356 = cljs.core.seq(events);
var chunk__45357 = null;
var count__45358 = (0);
var i__45359 = (0);
while(true){
if((i__45359 < count__45358)){
var vec__45370 = chunk__45357.cljs$core$IIndexed$_nth$arity$2(null,i__45359);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45370,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45952 = seq__45356;
var G__45953 = chunk__45357;
var G__45954 = count__45358;
var G__45955 = (i__45359 + (1));
seq__45356 = G__45952;
chunk__45357 = G__45953;
count__45358 = G__45954;
i__45359 = G__45955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45356);
if(temp__5735__auto__){
var seq__45356__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45356__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45356__$1);
var G__45957 = cljs.core.chunk_rest(seq__45356__$1);
var G__45958 = c__4556__auto__;
var G__45959 = cljs.core.count(c__4556__auto__);
var G__45960 = (0);
seq__45356 = G__45957;
chunk__45357 = G__45958;
count__45358 = G__45959;
i__45359 = G__45960;
continue;
} else {
var vec__45375 = cljs.core.first(seq__45356__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45375,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45961 = cljs.core.next(seq__45356__$1);
var G__45962 = null;
var G__45963 = (0);
var G__45964 = (0);
seq__45356 = G__45961;
chunk__45357 = G__45962;
count__45358 = G__45963;
i__45359 = G__45964;
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
var seq__45382 = cljs.core.seq(styles);
var chunk__45383 = null;
var count__45384 = (0);
var i__45385 = (0);
while(true){
if((i__45385 < count__45384)){
var vec__45394 = chunk__45383.cljs$core$IIndexed$_nth$arity$2(null,i__45385);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45394,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45968 = seq__45382;
var G__45969 = chunk__45383;
var G__45970 = count__45384;
var G__45971 = (i__45385 + (1));
seq__45382 = G__45968;
chunk__45383 = G__45969;
count__45384 = G__45970;
i__45385 = G__45971;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45382);
if(temp__5735__auto__){
var seq__45382__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45382__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45382__$1);
var G__45975 = cljs.core.chunk_rest(seq__45382__$1);
var G__45976 = c__4556__auto__;
var G__45977 = cljs.core.count(c__4556__auto__);
var G__45978 = (0);
seq__45382 = G__45975;
chunk__45383 = G__45976;
count__45384 = G__45977;
i__45385 = G__45978;
continue;
} else {
var vec__45400 = cljs.core.first(seq__45382__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45400,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45400,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45981 = cljs.core.next(seq__45382__$1);
var G__45982 = null;
var G__45983 = (0);
var G__45984 = (0);
seq__45382 = G__45981;
chunk__45383 = G__45982;
count__45384 = G__45983;
i__45385 = G__45984;
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
var G__45407_45985 = key;
var G__45407_45986__$1 = (((G__45407_45985 instanceof cljs.core.Keyword))?G__45407_45985.fqn:null);
switch (G__45407_45986__$1) {
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
var ks_45995 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_45995,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_45995,"aria-");
}
})())){
el.setAttribute(ks_45995,value);
} else {
(el[ks_45995] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45421){
var map__45422 = p__45421;
var map__45422__$1 = (((((!((map__45422 == null))))?(((((map__45422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45422):map__45422);
var props = map__45422__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45422__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45427 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45427,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45431 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45431,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45431;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45436 = arguments.length;
switch (G__45436) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45447){
var vec__45448 = p__45447;
var seq__45449 = cljs.core.seq(vec__45448);
var first__45450 = cljs.core.first(seq__45449);
var seq__45449__$1 = cljs.core.next(seq__45449);
var nn = first__45450;
var first__45450__$1 = cljs.core.first(seq__45449__$1);
var seq__45449__$2 = cljs.core.next(seq__45449__$1);
var np = first__45450__$1;
var nc = seq__45449__$2;
var node = vec__45448;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45454 = nn;
var G__45455 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45454,G__45455) : create_fn.call(null,G__45454,G__45455));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45457 = nn;
var G__45458 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45457,G__45458) : create_fn.call(null,G__45457,G__45458));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45461 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45461,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45461,(1),null);
var seq__45465_46020 = cljs.core.seq(node_children);
var chunk__45466_46021 = null;
var count__45467_46022 = (0);
var i__45469_46023 = (0);
while(true){
if((i__45469_46023 < count__45467_46022)){
var child_struct_46026 = chunk__45466_46021.cljs$core$IIndexed$_nth$arity$2(null,i__45469_46023);
var children_46027 = shadow.dom.dom_node(child_struct_46026);
if(cljs.core.seq_QMARK_(children_46027)){
var seq__45499_46030 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46027));
var chunk__45501_46031 = null;
var count__45502_46032 = (0);
var i__45503_46033 = (0);
while(true){
if((i__45503_46033 < count__45502_46032)){
var child_46036 = chunk__45501_46031.cljs$core$IIndexed$_nth$arity$2(null,i__45503_46033);
if(cljs.core.truth_(child_46036)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46036);


var G__46037 = seq__45499_46030;
var G__46038 = chunk__45501_46031;
var G__46039 = count__45502_46032;
var G__46040 = (i__45503_46033 + (1));
seq__45499_46030 = G__46037;
chunk__45501_46031 = G__46038;
count__45502_46032 = G__46039;
i__45503_46033 = G__46040;
continue;
} else {
var G__46041 = seq__45499_46030;
var G__46042 = chunk__45501_46031;
var G__46043 = count__45502_46032;
var G__46044 = (i__45503_46033 + (1));
seq__45499_46030 = G__46041;
chunk__45501_46031 = G__46042;
count__45502_46032 = G__46043;
i__45503_46033 = G__46044;
continue;
}
} else {
var temp__5735__auto___46047 = cljs.core.seq(seq__45499_46030);
if(temp__5735__auto___46047){
var seq__45499_46049__$1 = temp__5735__auto___46047;
if(cljs.core.chunked_seq_QMARK_(seq__45499_46049__$1)){
var c__4556__auto___46050 = cljs.core.chunk_first(seq__45499_46049__$1);
var G__46051 = cljs.core.chunk_rest(seq__45499_46049__$1);
var G__46052 = c__4556__auto___46050;
var G__46053 = cljs.core.count(c__4556__auto___46050);
var G__46054 = (0);
seq__45499_46030 = G__46051;
chunk__45501_46031 = G__46052;
count__45502_46032 = G__46053;
i__45503_46033 = G__46054;
continue;
} else {
var child_46056 = cljs.core.first(seq__45499_46049__$1);
if(cljs.core.truth_(child_46056)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46056);


var G__46057 = cljs.core.next(seq__45499_46049__$1);
var G__46058 = null;
var G__46059 = (0);
var G__46060 = (0);
seq__45499_46030 = G__46057;
chunk__45501_46031 = G__46058;
count__45502_46032 = G__46059;
i__45503_46033 = G__46060;
continue;
} else {
var G__46061 = cljs.core.next(seq__45499_46049__$1);
var G__46062 = null;
var G__46063 = (0);
var G__46064 = (0);
seq__45499_46030 = G__46061;
chunk__45501_46031 = G__46062;
count__45502_46032 = G__46063;
i__45503_46033 = G__46064;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46027);
}


var G__46066 = seq__45465_46020;
var G__46067 = chunk__45466_46021;
var G__46068 = count__45467_46022;
var G__46069 = (i__45469_46023 + (1));
seq__45465_46020 = G__46066;
chunk__45466_46021 = G__46067;
count__45467_46022 = G__46068;
i__45469_46023 = G__46069;
continue;
} else {
var temp__5735__auto___46071 = cljs.core.seq(seq__45465_46020);
if(temp__5735__auto___46071){
var seq__45465_46072__$1 = temp__5735__auto___46071;
if(cljs.core.chunked_seq_QMARK_(seq__45465_46072__$1)){
var c__4556__auto___46073 = cljs.core.chunk_first(seq__45465_46072__$1);
var G__46074 = cljs.core.chunk_rest(seq__45465_46072__$1);
var G__46075 = c__4556__auto___46073;
var G__46076 = cljs.core.count(c__4556__auto___46073);
var G__46077 = (0);
seq__45465_46020 = G__46074;
chunk__45466_46021 = G__46075;
count__45467_46022 = G__46076;
i__45469_46023 = G__46077;
continue;
} else {
var child_struct_46079 = cljs.core.first(seq__45465_46072__$1);
var children_46080 = shadow.dom.dom_node(child_struct_46079);
if(cljs.core.seq_QMARK_(children_46080)){
var seq__45511_46081 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46080));
var chunk__45513_46082 = null;
var count__45514_46083 = (0);
var i__45515_46084 = (0);
while(true){
if((i__45515_46084 < count__45514_46083)){
var child_46085 = chunk__45513_46082.cljs$core$IIndexed$_nth$arity$2(null,i__45515_46084);
if(cljs.core.truth_(child_46085)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46085);


var G__46087 = seq__45511_46081;
var G__46088 = chunk__45513_46082;
var G__46089 = count__45514_46083;
var G__46090 = (i__45515_46084 + (1));
seq__45511_46081 = G__46087;
chunk__45513_46082 = G__46088;
count__45514_46083 = G__46089;
i__45515_46084 = G__46090;
continue;
} else {
var G__46092 = seq__45511_46081;
var G__46093 = chunk__45513_46082;
var G__46094 = count__45514_46083;
var G__46095 = (i__45515_46084 + (1));
seq__45511_46081 = G__46092;
chunk__45513_46082 = G__46093;
count__45514_46083 = G__46094;
i__45515_46084 = G__46095;
continue;
}
} else {
var temp__5735__auto___46096__$1 = cljs.core.seq(seq__45511_46081);
if(temp__5735__auto___46096__$1){
var seq__45511_46098__$1 = temp__5735__auto___46096__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45511_46098__$1)){
var c__4556__auto___46099 = cljs.core.chunk_first(seq__45511_46098__$1);
var G__46100 = cljs.core.chunk_rest(seq__45511_46098__$1);
var G__46101 = c__4556__auto___46099;
var G__46102 = cljs.core.count(c__4556__auto___46099);
var G__46103 = (0);
seq__45511_46081 = G__46100;
chunk__45513_46082 = G__46101;
count__45514_46083 = G__46102;
i__45515_46084 = G__46103;
continue;
} else {
var child_46108 = cljs.core.first(seq__45511_46098__$1);
if(cljs.core.truth_(child_46108)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46108);


var G__46109 = cljs.core.next(seq__45511_46098__$1);
var G__46110 = null;
var G__46111 = (0);
var G__46112 = (0);
seq__45511_46081 = G__46109;
chunk__45513_46082 = G__46110;
count__45514_46083 = G__46111;
i__45515_46084 = G__46112;
continue;
} else {
var G__46114 = cljs.core.next(seq__45511_46098__$1);
var G__46115 = null;
var G__46116 = (0);
var G__46117 = (0);
seq__45511_46081 = G__46114;
chunk__45513_46082 = G__46115;
count__45514_46083 = G__46116;
i__45515_46084 = G__46117;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46080);
}


var G__46119 = cljs.core.next(seq__45465_46072__$1);
var G__46120 = null;
var G__46121 = (0);
var G__46122 = (0);
seq__45465_46020 = G__46119;
chunk__45466_46021 = G__46120;
count__45467_46022 = G__46121;
i__45469_46023 = G__46122;
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
var seq__45529 = cljs.core.seq(node);
var chunk__45530 = null;
var count__45531 = (0);
var i__45532 = (0);
while(true){
if((i__45532 < count__45531)){
var n = chunk__45530.cljs$core$IIndexed$_nth$arity$2(null,i__45532);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46128 = seq__45529;
var G__46129 = chunk__45530;
var G__46130 = count__45531;
var G__46131 = (i__45532 + (1));
seq__45529 = G__46128;
chunk__45530 = G__46129;
count__45531 = G__46130;
i__45532 = G__46131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45529);
if(temp__5735__auto__){
var seq__45529__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45529__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45529__$1);
var G__46132 = cljs.core.chunk_rest(seq__45529__$1);
var G__46133 = c__4556__auto__;
var G__46134 = cljs.core.count(c__4556__auto__);
var G__46135 = (0);
seq__45529 = G__46132;
chunk__45530 = G__46133;
count__45531 = G__46134;
i__45532 = G__46135;
continue;
} else {
var n = cljs.core.first(seq__45529__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46138 = cljs.core.next(seq__45529__$1);
var G__46139 = null;
var G__46140 = (0);
var G__46141 = (0);
seq__45529 = G__46138;
chunk__45530 = G__46139;
count__45531 = G__46140;
i__45532 = G__46141;
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
var G__45541 = arguments.length;
switch (G__45541) {
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
var G__45548 = arguments.length;
switch (G__45548) {
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
var G__45558 = arguments.length;
switch (G__45558) {
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
var len__4736__auto___46155 = arguments.length;
var i__4737__auto___46156 = (0);
while(true){
if((i__4737__auto___46156 < len__4736__auto___46155)){
args__4742__auto__.push((arguments[i__4737__auto___46156]));

var G__46157 = (i__4737__auto___46156 + (1));
i__4737__auto___46156 = G__46157;
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
var seq__45581_46158 = cljs.core.seq(nodes);
var chunk__45582_46159 = null;
var count__45583_46160 = (0);
var i__45584_46161 = (0);
while(true){
if((i__45584_46161 < count__45583_46160)){
var node_46162 = chunk__45582_46159.cljs$core$IIndexed$_nth$arity$2(null,i__45584_46161);
fragment.appendChild(shadow.dom._to_dom(node_46162));


var G__46163 = seq__45581_46158;
var G__46164 = chunk__45582_46159;
var G__46165 = count__45583_46160;
var G__46166 = (i__45584_46161 + (1));
seq__45581_46158 = G__46163;
chunk__45582_46159 = G__46164;
count__45583_46160 = G__46165;
i__45584_46161 = G__46166;
continue;
} else {
var temp__5735__auto___46167 = cljs.core.seq(seq__45581_46158);
if(temp__5735__auto___46167){
var seq__45581_46168__$1 = temp__5735__auto___46167;
if(cljs.core.chunked_seq_QMARK_(seq__45581_46168__$1)){
var c__4556__auto___46169 = cljs.core.chunk_first(seq__45581_46168__$1);
var G__46173 = cljs.core.chunk_rest(seq__45581_46168__$1);
var G__46174 = c__4556__auto___46169;
var G__46175 = cljs.core.count(c__4556__auto___46169);
var G__46176 = (0);
seq__45581_46158 = G__46173;
chunk__45582_46159 = G__46174;
count__45583_46160 = G__46175;
i__45584_46161 = G__46176;
continue;
} else {
var node_46177 = cljs.core.first(seq__45581_46168__$1);
fragment.appendChild(shadow.dom._to_dom(node_46177));


var G__46178 = cljs.core.next(seq__45581_46168__$1);
var G__46179 = null;
var G__46180 = (0);
var G__46181 = (0);
seq__45581_46158 = G__46178;
chunk__45582_46159 = G__46179;
count__45583_46160 = G__46180;
i__45584_46161 = G__46181;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45574){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45574));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45594_46182 = cljs.core.seq(scripts);
var chunk__45595_46183 = null;
var count__45596_46184 = (0);
var i__45597_46185 = (0);
while(true){
if((i__45597_46185 < count__45596_46184)){
var vec__45607_46186 = chunk__45595_46183.cljs$core$IIndexed$_nth$arity$2(null,i__45597_46185);
var script_tag_46187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45607_46186,(0),null);
var script_body_46188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45607_46186,(1),null);
eval(script_body_46188);


var G__46189 = seq__45594_46182;
var G__46190 = chunk__45595_46183;
var G__46191 = count__45596_46184;
var G__46192 = (i__45597_46185 + (1));
seq__45594_46182 = G__46189;
chunk__45595_46183 = G__46190;
count__45596_46184 = G__46191;
i__45597_46185 = G__46192;
continue;
} else {
var temp__5735__auto___46193 = cljs.core.seq(seq__45594_46182);
if(temp__5735__auto___46193){
var seq__45594_46194__$1 = temp__5735__auto___46193;
if(cljs.core.chunked_seq_QMARK_(seq__45594_46194__$1)){
var c__4556__auto___46195 = cljs.core.chunk_first(seq__45594_46194__$1);
var G__46196 = cljs.core.chunk_rest(seq__45594_46194__$1);
var G__46197 = c__4556__auto___46195;
var G__46198 = cljs.core.count(c__4556__auto___46195);
var G__46199 = (0);
seq__45594_46182 = G__46196;
chunk__45595_46183 = G__46197;
count__45596_46184 = G__46198;
i__45597_46185 = G__46199;
continue;
} else {
var vec__45611_46200 = cljs.core.first(seq__45594_46194__$1);
var script_tag_46201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611_46200,(0),null);
var script_body_46202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45611_46200,(1),null);
eval(script_body_46202);


var G__46203 = cljs.core.next(seq__45594_46194__$1);
var G__46204 = null;
var G__46205 = (0);
var G__46206 = (0);
seq__45594_46182 = G__46203;
chunk__45595_46183 = G__46204;
count__45596_46184 = G__46205;
i__45597_46185 = G__46206;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45614){
var vec__45615 = p__45614;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45615,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45615,(1),null);
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
var G__45622 = arguments.length;
switch (G__45622) {
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
var seq__45629 = cljs.core.seq(style_keys);
var chunk__45630 = null;
var count__45631 = (0);
var i__45632 = (0);
while(true){
if((i__45632 < count__45631)){
var it = chunk__45630.cljs$core$IIndexed$_nth$arity$2(null,i__45632);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46211 = seq__45629;
var G__46212 = chunk__45630;
var G__46213 = count__45631;
var G__46214 = (i__45632 + (1));
seq__45629 = G__46211;
chunk__45630 = G__46212;
count__45631 = G__46213;
i__45632 = G__46214;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45629);
if(temp__5735__auto__){
var seq__45629__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45629__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45629__$1);
var G__46218 = cljs.core.chunk_rest(seq__45629__$1);
var G__46219 = c__4556__auto__;
var G__46220 = cljs.core.count(c__4556__auto__);
var G__46221 = (0);
seq__45629 = G__46218;
chunk__45630 = G__46219;
count__45631 = G__46220;
i__45632 = G__46221;
continue;
} else {
var it = cljs.core.first(seq__45629__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46222 = cljs.core.next(seq__45629__$1);
var G__46223 = null;
var G__46224 = (0);
var G__46225 = (0);
seq__45629 = G__46222;
chunk__45630 = G__46223;
count__45631 = G__46224;
i__45632 = G__46225;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45634,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45644 = k45634;
var G__45644__$1 = (((G__45644 instanceof cljs.core.Keyword))?G__45644.fqn:null);
switch (G__45644__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45634,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45649){
var vec__45650 = p__45649;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45650,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45650,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45633){
var self__ = this;
var G__45633__$1 = this;
return (new cljs.core.RecordIter((0),G__45633__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45635,other45636){
var self__ = this;
var this45635__$1 = this;
return (((!((other45636 == null)))) && ((this45635__$1.constructor === other45636.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45635__$1.x,other45636.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45635__$1.y,other45636.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45635__$1.__extmap,other45636.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45633){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45668 = cljs.core.keyword_identical_QMARK_;
var expr__45669 = k__4388__auto__;
if(cljs.core.truth_((pred__45668.cljs$core$IFn$_invoke$arity$2 ? pred__45668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45669) : pred__45668.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45669)))){
return (new shadow.dom.Coordinate(G__45633,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45668.cljs$core$IFn$_invoke$arity$2 ? pred__45668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45669) : pred__45668.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45669)))){
return (new shadow.dom.Coordinate(self__.x,G__45633,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45633),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45633){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45633,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45638){
var extmap__4419__auto__ = (function (){var G__45683 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45638,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45638)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45683);
} else {
return G__45683;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45638),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45638),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45691,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45699 = k45691;
var G__45699__$1 = (((G__45699 instanceof cljs.core.Keyword))?G__45699.fqn:null);
switch (G__45699__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45691,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45703){
var vec__45704 = p__45703;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45690){
var self__ = this;
var G__45690__$1 = this;
return (new cljs.core.RecordIter((0),G__45690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45692,other45693){
var self__ = this;
var this45692__$1 = this;
return (((!((other45693 == null)))) && ((this45692__$1.constructor === other45693.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45692__$1.w,other45693.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45692__$1.h,other45693.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45692__$1.__extmap,other45693.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45690){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45712 = cljs.core.keyword_identical_QMARK_;
var expr__45713 = k__4388__auto__;
if(cljs.core.truth_((pred__45712.cljs$core$IFn$_invoke$arity$2 ? pred__45712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45713) : pred__45712.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45713)))){
return (new shadow.dom.Size(G__45690,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45712.cljs$core$IFn$_invoke$arity$2 ? pred__45712.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45713) : pred__45712.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45713)))){
return (new shadow.dom.Size(self__.w,G__45690,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45690),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45690){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45690,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45695){
var extmap__4419__auto__ = (function (){var G__45716 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45695,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45695)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45716);
} else {
return G__45716;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45695),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45695),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__46252 = (i + (1));
var G__46253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46252;
ret = G__46253;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45738){
var vec__45740 = p__45738;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45740,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45745 = arguments.length;
switch (G__45745) {
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
var G__46255 = ps;
var G__46256 = (i + (1));
el__$1 = G__46255;
i = G__46256;
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
var vec__45765 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45765,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45765,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45765,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45770_46259 = cljs.core.seq(props);
var chunk__45771_46260 = null;
var count__45772_46261 = (0);
var i__45773_46262 = (0);
while(true){
if((i__45773_46262 < count__45772_46261)){
var vec__45786_46263 = chunk__45771_46260.cljs$core$IIndexed$_nth$arity$2(null,i__45773_46262);
var k_46264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45786_46263,(0),null);
var v_46265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45786_46263,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_46264);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46264),v_46265);


var G__46266 = seq__45770_46259;
var G__46267 = chunk__45771_46260;
var G__46268 = count__45772_46261;
var G__46269 = (i__45773_46262 + (1));
seq__45770_46259 = G__46266;
chunk__45771_46260 = G__46267;
count__45772_46261 = G__46268;
i__45773_46262 = G__46269;
continue;
} else {
var temp__5735__auto___46270 = cljs.core.seq(seq__45770_46259);
if(temp__5735__auto___46270){
var seq__45770_46271__$1 = temp__5735__auto___46270;
if(cljs.core.chunked_seq_QMARK_(seq__45770_46271__$1)){
var c__4556__auto___46272 = cljs.core.chunk_first(seq__45770_46271__$1);
var G__46273 = cljs.core.chunk_rest(seq__45770_46271__$1);
var G__46274 = c__4556__auto___46272;
var G__46275 = cljs.core.count(c__4556__auto___46272);
var G__46276 = (0);
seq__45770_46259 = G__46273;
chunk__45771_46260 = G__46274;
count__45772_46261 = G__46275;
i__45773_46262 = G__46276;
continue;
} else {
var vec__45791_46277 = cljs.core.first(seq__45770_46271__$1);
var k_46278 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45791_46277,(0),null);
var v_46279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45791_46277,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_46278);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46278),v_46279);


var G__46280 = cljs.core.next(seq__45770_46271__$1);
var G__46281 = null;
var G__46282 = (0);
var G__46283 = (0);
seq__45770_46259 = G__46280;
chunk__45771_46260 = G__46281;
count__45772_46261 = G__46282;
i__45773_46262 = G__46283;
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
var vec__45800 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45800,(1),null);
var seq__45804_46285 = cljs.core.seq(node_children);
var chunk__45806_46286 = null;
var count__45807_46287 = (0);
var i__45808_46288 = (0);
while(true){
if((i__45808_46288 < count__45807_46287)){
var child_struct_46289 = chunk__45806_46286.cljs$core$IIndexed$_nth$arity$2(null,i__45808_46288);
if((!((child_struct_46289 == null)))){
if(typeof child_struct_46289 === 'string'){
var text_46290 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46290),child_struct_46289].join(''));
} else {
var children_46291 = shadow.dom.svg_node(child_struct_46289);
if(cljs.core.seq_QMARK_(children_46291)){
var seq__45839_46292 = cljs.core.seq(children_46291);
var chunk__45841_46293 = null;
var count__45842_46294 = (0);
var i__45843_46295 = (0);
while(true){
if((i__45843_46295 < count__45842_46294)){
var child_46296 = chunk__45841_46293.cljs$core$IIndexed$_nth$arity$2(null,i__45843_46295);
if(cljs.core.truth_(child_46296)){
node.appendChild(child_46296);


var G__46297 = seq__45839_46292;
var G__46298 = chunk__45841_46293;
var G__46299 = count__45842_46294;
var G__46300 = (i__45843_46295 + (1));
seq__45839_46292 = G__46297;
chunk__45841_46293 = G__46298;
count__45842_46294 = G__46299;
i__45843_46295 = G__46300;
continue;
} else {
var G__46301 = seq__45839_46292;
var G__46302 = chunk__45841_46293;
var G__46303 = count__45842_46294;
var G__46304 = (i__45843_46295 + (1));
seq__45839_46292 = G__46301;
chunk__45841_46293 = G__46302;
count__45842_46294 = G__46303;
i__45843_46295 = G__46304;
continue;
}
} else {
var temp__5735__auto___46305 = cljs.core.seq(seq__45839_46292);
if(temp__5735__auto___46305){
var seq__45839_46306__$1 = temp__5735__auto___46305;
if(cljs.core.chunked_seq_QMARK_(seq__45839_46306__$1)){
var c__4556__auto___46307 = cljs.core.chunk_first(seq__45839_46306__$1);
var G__46308 = cljs.core.chunk_rest(seq__45839_46306__$1);
var G__46309 = c__4556__auto___46307;
var G__46310 = cljs.core.count(c__4556__auto___46307);
var G__46311 = (0);
seq__45839_46292 = G__46308;
chunk__45841_46293 = G__46309;
count__45842_46294 = G__46310;
i__45843_46295 = G__46311;
continue;
} else {
var child_46312 = cljs.core.first(seq__45839_46306__$1);
if(cljs.core.truth_(child_46312)){
node.appendChild(child_46312);


var G__46313 = cljs.core.next(seq__45839_46306__$1);
var G__46314 = null;
var G__46315 = (0);
var G__46316 = (0);
seq__45839_46292 = G__46313;
chunk__45841_46293 = G__46314;
count__45842_46294 = G__46315;
i__45843_46295 = G__46316;
continue;
} else {
var G__46317 = cljs.core.next(seq__45839_46306__$1);
var G__46318 = null;
var G__46319 = (0);
var G__46320 = (0);
seq__45839_46292 = G__46317;
chunk__45841_46293 = G__46318;
count__45842_46294 = G__46319;
i__45843_46295 = G__46320;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46291);
}
}


var G__46321 = seq__45804_46285;
var G__46322 = chunk__45806_46286;
var G__46323 = count__45807_46287;
var G__46324 = (i__45808_46288 + (1));
seq__45804_46285 = G__46321;
chunk__45806_46286 = G__46322;
count__45807_46287 = G__46323;
i__45808_46288 = G__46324;
continue;
} else {
var G__46325 = seq__45804_46285;
var G__46326 = chunk__45806_46286;
var G__46327 = count__45807_46287;
var G__46328 = (i__45808_46288 + (1));
seq__45804_46285 = G__46325;
chunk__45806_46286 = G__46326;
count__45807_46287 = G__46327;
i__45808_46288 = G__46328;
continue;
}
} else {
var temp__5735__auto___46329 = cljs.core.seq(seq__45804_46285);
if(temp__5735__auto___46329){
var seq__45804_46330__$1 = temp__5735__auto___46329;
if(cljs.core.chunked_seq_QMARK_(seq__45804_46330__$1)){
var c__4556__auto___46331 = cljs.core.chunk_first(seq__45804_46330__$1);
var G__46332 = cljs.core.chunk_rest(seq__45804_46330__$1);
var G__46333 = c__4556__auto___46331;
var G__46334 = cljs.core.count(c__4556__auto___46331);
var G__46335 = (0);
seq__45804_46285 = G__46332;
chunk__45806_46286 = G__46333;
count__45807_46287 = G__46334;
i__45808_46288 = G__46335;
continue;
} else {
var child_struct_46336 = cljs.core.first(seq__45804_46330__$1);
if((!((child_struct_46336 == null)))){
if(typeof child_struct_46336 === 'string'){
var text_46337 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46337),child_struct_46336].join(''));
} else {
var children_46339 = shadow.dom.svg_node(child_struct_46336);
if(cljs.core.seq_QMARK_(children_46339)){
var seq__45853_46340 = cljs.core.seq(children_46339);
var chunk__45855_46341 = null;
var count__45856_46342 = (0);
var i__45857_46343 = (0);
while(true){
if((i__45857_46343 < count__45856_46342)){
var child_46345 = chunk__45855_46341.cljs$core$IIndexed$_nth$arity$2(null,i__45857_46343);
if(cljs.core.truth_(child_46345)){
node.appendChild(child_46345);


var G__46346 = seq__45853_46340;
var G__46347 = chunk__45855_46341;
var G__46348 = count__45856_46342;
var G__46349 = (i__45857_46343 + (1));
seq__45853_46340 = G__46346;
chunk__45855_46341 = G__46347;
count__45856_46342 = G__46348;
i__45857_46343 = G__46349;
continue;
} else {
var G__46350 = seq__45853_46340;
var G__46351 = chunk__45855_46341;
var G__46352 = count__45856_46342;
var G__46353 = (i__45857_46343 + (1));
seq__45853_46340 = G__46350;
chunk__45855_46341 = G__46351;
count__45856_46342 = G__46352;
i__45857_46343 = G__46353;
continue;
}
} else {
var temp__5735__auto___46354__$1 = cljs.core.seq(seq__45853_46340);
if(temp__5735__auto___46354__$1){
var seq__45853_46355__$1 = temp__5735__auto___46354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45853_46355__$1)){
var c__4556__auto___46356 = cljs.core.chunk_first(seq__45853_46355__$1);
var G__46357 = cljs.core.chunk_rest(seq__45853_46355__$1);
var G__46358 = c__4556__auto___46356;
var G__46359 = cljs.core.count(c__4556__auto___46356);
var G__46360 = (0);
seq__45853_46340 = G__46357;
chunk__45855_46341 = G__46358;
count__45856_46342 = G__46359;
i__45857_46343 = G__46360;
continue;
} else {
var child_46361 = cljs.core.first(seq__45853_46355__$1);
if(cljs.core.truth_(child_46361)){
node.appendChild(child_46361);


var G__46362 = cljs.core.next(seq__45853_46355__$1);
var G__46363 = null;
var G__46364 = (0);
var G__46365 = (0);
seq__45853_46340 = G__46362;
chunk__45855_46341 = G__46363;
count__45856_46342 = G__46364;
i__45857_46343 = G__46365;
continue;
} else {
var G__46366 = cljs.core.next(seq__45853_46355__$1);
var G__46367 = null;
var G__46368 = (0);
var G__46369 = (0);
seq__45853_46340 = G__46366;
chunk__45855_46341 = G__46367;
count__45856_46342 = G__46368;
i__45857_46343 = G__46369;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46339);
}
}


var G__46370 = cljs.core.next(seq__45804_46330__$1);
var G__46371 = null;
var G__46372 = (0);
var G__46373 = (0);
seq__45804_46285 = G__46370;
chunk__45806_46286 = G__46371;
count__45807_46287 = G__46372;
i__45808_46288 = G__46373;
continue;
} else {
var G__46374 = cljs.core.next(seq__45804_46330__$1);
var G__46375 = null;
var G__46376 = (0);
var G__46377 = (0);
seq__45804_46285 = G__46374;
chunk__45806_46286 = G__46375;
count__45807_46287 = G__46376;
i__45808_46288 = G__46377;
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
var len__4736__auto___46383 = arguments.length;
var i__4737__auto___46385 = (0);
while(true){
if((i__4737__auto___46385 < len__4736__auto___46383)){
args__4742__auto__.push((arguments[i__4737__auto___46385]));

var G__46386 = (i__4737__auto___46385 + (1));
i__4737__auto___46385 = G__46386;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45866){
var G__45867 = cljs.core.first(seq45866);
var seq45866__$1 = cljs.core.next(seq45866);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45867,seq45866__$1);
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
var G__45869 = arguments.length;
switch (G__45869) {
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
var c__42850__auto___46393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_45874){
var state_val_45875 = (state_45874[(1)]);
if((state_val_45875 === (1))){
var state_45874__$1 = state_45874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45874__$1,(2),once_or_cleanup);
} else {
if((state_val_45875 === (2))){
var inst_45871 = (state_45874[(2)]);
var inst_45872 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45874__$1 = (function (){var statearr_45876 = state_45874;
(statearr_45876[(7)] = inst_45871);

return statearr_45876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45874__$1,inst_45872);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42711__auto__ = null;
var shadow$dom$state_machine__42711__auto____0 = (function (){
var statearr_45877 = [null,null,null,null,null,null,null,null];
(statearr_45877[(0)] = shadow$dom$state_machine__42711__auto__);

(statearr_45877[(1)] = (1));

return statearr_45877;
});
var shadow$dom$state_machine__42711__auto____1 = (function (state_45874){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45874);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45878){var ex__42714__auto__ = e45878;
var statearr_45879_46394 = state_45874;
(statearr_45879_46394[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45874[(4)]))){
var statearr_45880_46395 = state_45874;
(statearr_45880_46395[(1)] = cljs.core.first((state_45874[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46396 = state_45874;
state_45874 = G__46396;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
shadow$dom$state_machine__42711__auto__ = function(state_45874){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42711__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42711__auto____1.call(this,state_45874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42711__auto____0;
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42711__auto____1;
return shadow$dom$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_45882 = f__42851__auto__();
(statearr_45882[(6)] = c__42850__auto___46393);

return statearr_45882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
