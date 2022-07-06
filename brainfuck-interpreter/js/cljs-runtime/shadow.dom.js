goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_44881 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_44881(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_44882 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_44882(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44113 = coll;
var G__44114 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44113,G__44114) : shadow.dom.lazy_native_coll_seq.call(null,G__44113,G__44114));
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
var G__44146 = arguments.length;
switch (G__44146) {
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
var G__44159 = arguments.length;
switch (G__44159) {
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
var G__44164 = arguments.length;
switch (G__44164) {
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
var G__44169 = arguments.length;
switch (G__44169) {
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
var G__44184 = arguments.length;
switch (G__44184) {
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
var G__44196 = arguments.length;
switch (G__44196) {
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
}catch (e44203){if((e44203 instanceof Object)){
var e = e44203;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44203;

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
var seq__44207 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44208 = null;
var count__44209 = (0);
var i__44210 = (0);
while(true){
if((i__44210 < count__44209)){
var el = chunk__44208.cljs$core$IIndexed$_nth$arity$2(null,i__44210);
var handler_44889__$1 = ((function (seq__44207,chunk__44208,count__44209,i__44210,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44207,chunk__44208,count__44209,i__44210,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44889__$1);


var G__44890 = seq__44207;
var G__44891 = chunk__44208;
var G__44892 = count__44209;
var G__44893 = (i__44210 + (1));
seq__44207 = G__44890;
chunk__44208 = G__44891;
count__44209 = G__44892;
i__44210 = G__44893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44207);
if(temp__5735__auto__){
var seq__44207__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44207__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44207__$1);
var G__44894 = cljs.core.chunk_rest(seq__44207__$1);
var G__44895 = c__4556__auto__;
var G__44896 = cljs.core.count(c__4556__auto__);
var G__44897 = (0);
seq__44207 = G__44894;
chunk__44208 = G__44895;
count__44209 = G__44896;
i__44210 = G__44897;
continue;
} else {
var el = cljs.core.first(seq__44207__$1);
var handler_44898__$1 = ((function (seq__44207,chunk__44208,count__44209,i__44210,el,seq__44207__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44207,chunk__44208,count__44209,i__44210,el,seq__44207__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_44898__$1);


var G__44899 = cljs.core.next(seq__44207__$1);
var G__44900 = null;
var G__44901 = (0);
var G__44902 = (0);
seq__44207 = G__44899;
chunk__44208 = G__44900;
count__44209 = G__44901;
i__44210 = G__44902;
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
var G__44218 = arguments.length;
switch (G__44218) {
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
var seq__44230 = cljs.core.seq(events);
var chunk__44231 = null;
var count__44232 = (0);
var i__44233 = (0);
while(true){
if((i__44233 < count__44232)){
var vec__44247 = chunk__44231.cljs$core$IIndexed$_nth$arity$2(null,i__44233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44247,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44904 = seq__44230;
var G__44905 = chunk__44231;
var G__44906 = count__44232;
var G__44907 = (i__44233 + (1));
seq__44230 = G__44904;
chunk__44231 = G__44905;
count__44232 = G__44906;
i__44233 = G__44907;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44230);
if(temp__5735__auto__){
var seq__44230__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44230__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44230__$1);
var G__44908 = cljs.core.chunk_rest(seq__44230__$1);
var G__44909 = c__4556__auto__;
var G__44910 = cljs.core.count(c__4556__auto__);
var G__44911 = (0);
seq__44230 = G__44908;
chunk__44231 = G__44909;
count__44232 = G__44910;
i__44233 = G__44911;
continue;
} else {
var vec__44253 = cljs.core.first(seq__44230__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44253,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44253,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__44912 = cljs.core.next(seq__44230__$1);
var G__44913 = null;
var G__44914 = (0);
var G__44915 = (0);
seq__44230 = G__44912;
chunk__44231 = G__44913;
count__44232 = G__44914;
i__44233 = G__44915;
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
var seq__44259 = cljs.core.seq(styles);
var chunk__44260 = null;
var count__44261 = (0);
var i__44262 = (0);
while(true){
if((i__44262 < count__44261)){
var vec__44277 = chunk__44260.cljs$core$IIndexed$_nth$arity$2(null,i__44262);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44277,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44916 = seq__44259;
var G__44917 = chunk__44260;
var G__44918 = count__44261;
var G__44919 = (i__44262 + (1));
seq__44259 = G__44916;
chunk__44260 = G__44917;
count__44261 = G__44918;
i__44262 = G__44919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44259);
if(temp__5735__auto__){
var seq__44259__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44259__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44259__$1);
var G__44920 = cljs.core.chunk_rest(seq__44259__$1);
var G__44921 = c__4556__auto__;
var G__44922 = cljs.core.count(c__4556__auto__);
var G__44923 = (0);
seq__44259 = G__44920;
chunk__44260 = G__44921;
count__44261 = G__44922;
i__44262 = G__44923;
continue;
} else {
var vec__44287 = cljs.core.first(seq__44259__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44287,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44287,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__44924 = cljs.core.next(seq__44259__$1);
var G__44925 = null;
var G__44926 = (0);
var G__44927 = (0);
seq__44259 = G__44924;
chunk__44260 = G__44925;
count__44261 = G__44926;
i__44262 = G__44927;
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
var G__44295_44928 = key;
var G__44295_44929__$1 = (((G__44295_44928 instanceof cljs.core.Keyword))?G__44295_44928.fqn:null);
switch (G__44295_44929__$1) {
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
var ks_44931 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_44931,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_44931,"aria-");
}
})())){
el.setAttribute(ks_44931,value);
} else {
(el[ks_44931] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44330){
var map__44332 = p__44330;
var map__44332__$1 = (((((!((map__44332 == null))))?(((((map__44332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44332):map__44332);
var props = map__44332__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44332__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44337 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44337,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44341 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44341,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44341;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44347 = arguments.length;
switch (G__44347) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44355){
var vec__44357 = p__44355;
var seq__44358 = cljs.core.seq(vec__44357);
var first__44359 = cljs.core.first(seq__44358);
var seq__44358__$1 = cljs.core.next(seq__44358);
var nn = first__44359;
var first__44359__$1 = cljs.core.first(seq__44358__$1);
var seq__44358__$2 = cljs.core.next(seq__44358__$1);
var np = first__44359__$1;
var nc = seq__44358__$2;
var node = vec__44357;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44361 = nn;
var G__44362 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44361,G__44362) : create_fn.call(null,G__44361,G__44362));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44363 = nn;
var G__44364 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44363,G__44364) : create_fn.call(null,G__44363,G__44364));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44368 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44368,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44368,(1),null);
var seq__44373_44933 = cljs.core.seq(node_children);
var chunk__44374_44934 = null;
var count__44375_44935 = (0);
var i__44376_44936 = (0);
while(true){
if((i__44376_44936 < count__44375_44935)){
var child_struct_44937 = chunk__44374_44934.cljs$core$IIndexed$_nth$arity$2(null,i__44376_44936);
var children_44938 = shadow.dom.dom_node(child_struct_44937);
if(cljs.core.seq_QMARK_(children_44938)){
var seq__44410_44939 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44938));
var chunk__44412_44940 = null;
var count__44413_44941 = (0);
var i__44414_44942 = (0);
while(true){
if((i__44414_44942 < count__44413_44941)){
var child_44943 = chunk__44412_44940.cljs$core$IIndexed$_nth$arity$2(null,i__44414_44942);
if(cljs.core.truth_(child_44943)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44943);


var G__44944 = seq__44410_44939;
var G__44945 = chunk__44412_44940;
var G__44946 = count__44413_44941;
var G__44947 = (i__44414_44942 + (1));
seq__44410_44939 = G__44944;
chunk__44412_44940 = G__44945;
count__44413_44941 = G__44946;
i__44414_44942 = G__44947;
continue;
} else {
var G__44948 = seq__44410_44939;
var G__44949 = chunk__44412_44940;
var G__44950 = count__44413_44941;
var G__44951 = (i__44414_44942 + (1));
seq__44410_44939 = G__44948;
chunk__44412_44940 = G__44949;
count__44413_44941 = G__44950;
i__44414_44942 = G__44951;
continue;
}
} else {
var temp__5735__auto___44952 = cljs.core.seq(seq__44410_44939);
if(temp__5735__auto___44952){
var seq__44410_44953__$1 = temp__5735__auto___44952;
if(cljs.core.chunked_seq_QMARK_(seq__44410_44953__$1)){
var c__4556__auto___44954 = cljs.core.chunk_first(seq__44410_44953__$1);
var G__44955 = cljs.core.chunk_rest(seq__44410_44953__$1);
var G__44956 = c__4556__auto___44954;
var G__44957 = cljs.core.count(c__4556__auto___44954);
var G__44958 = (0);
seq__44410_44939 = G__44955;
chunk__44412_44940 = G__44956;
count__44413_44941 = G__44957;
i__44414_44942 = G__44958;
continue;
} else {
var child_44959 = cljs.core.first(seq__44410_44953__$1);
if(cljs.core.truth_(child_44959)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44959);


var G__44960 = cljs.core.next(seq__44410_44953__$1);
var G__44961 = null;
var G__44962 = (0);
var G__44963 = (0);
seq__44410_44939 = G__44960;
chunk__44412_44940 = G__44961;
count__44413_44941 = G__44962;
i__44414_44942 = G__44963;
continue;
} else {
var G__44964 = cljs.core.next(seq__44410_44953__$1);
var G__44965 = null;
var G__44966 = (0);
var G__44967 = (0);
seq__44410_44939 = G__44964;
chunk__44412_44940 = G__44965;
count__44413_44941 = G__44966;
i__44414_44942 = G__44967;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44938);
}


var G__44968 = seq__44373_44933;
var G__44969 = chunk__44374_44934;
var G__44970 = count__44375_44935;
var G__44971 = (i__44376_44936 + (1));
seq__44373_44933 = G__44968;
chunk__44374_44934 = G__44969;
count__44375_44935 = G__44970;
i__44376_44936 = G__44971;
continue;
} else {
var temp__5735__auto___44972 = cljs.core.seq(seq__44373_44933);
if(temp__5735__auto___44972){
var seq__44373_44973__$1 = temp__5735__auto___44972;
if(cljs.core.chunked_seq_QMARK_(seq__44373_44973__$1)){
var c__4556__auto___44974 = cljs.core.chunk_first(seq__44373_44973__$1);
var G__44975 = cljs.core.chunk_rest(seq__44373_44973__$1);
var G__44976 = c__4556__auto___44974;
var G__44977 = cljs.core.count(c__4556__auto___44974);
var G__44978 = (0);
seq__44373_44933 = G__44975;
chunk__44374_44934 = G__44976;
count__44375_44935 = G__44977;
i__44376_44936 = G__44978;
continue;
} else {
var child_struct_44979 = cljs.core.first(seq__44373_44973__$1);
var children_44980 = shadow.dom.dom_node(child_struct_44979);
if(cljs.core.seq_QMARK_(children_44980)){
var seq__44434_44981 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_44980));
var chunk__44436_44982 = null;
var count__44437_44983 = (0);
var i__44438_44984 = (0);
while(true){
if((i__44438_44984 < count__44437_44983)){
var child_44985 = chunk__44436_44982.cljs$core$IIndexed$_nth$arity$2(null,i__44438_44984);
if(cljs.core.truth_(child_44985)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_44985);


var G__44986 = seq__44434_44981;
var G__44987 = chunk__44436_44982;
var G__44988 = count__44437_44983;
var G__44989 = (i__44438_44984 + (1));
seq__44434_44981 = G__44986;
chunk__44436_44982 = G__44987;
count__44437_44983 = G__44988;
i__44438_44984 = G__44989;
continue;
} else {
var G__44990 = seq__44434_44981;
var G__44991 = chunk__44436_44982;
var G__44992 = count__44437_44983;
var G__44993 = (i__44438_44984 + (1));
seq__44434_44981 = G__44990;
chunk__44436_44982 = G__44991;
count__44437_44983 = G__44992;
i__44438_44984 = G__44993;
continue;
}
} else {
var temp__5735__auto___44994__$1 = cljs.core.seq(seq__44434_44981);
if(temp__5735__auto___44994__$1){
var seq__44434_44995__$1 = temp__5735__auto___44994__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44434_44995__$1)){
var c__4556__auto___44996 = cljs.core.chunk_first(seq__44434_44995__$1);
var G__44997 = cljs.core.chunk_rest(seq__44434_44995__$1);
var G__44998 = c__4556__auto___44996;
var G__44999 = cljs.core.count(c__4556__auto___44996);
var G__45000 = (0);
seq__44434_44981 = G__44997;
chunk__44436_44982 = G__44998;
count__44437_44983 = G__44999;
i__44438_44984 = G__45000;
continue;
} else {
var child_45001 = cljs.core.first(seq__44434_44995__$1);
if(cljs.core.truth_(child_45001)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45001);


var G__45002 = cljs.core.next(seq__44434_44995__$1);
var G__45003 = null;
var G__45004 = (0);
var G__45005 = (0);
seq__44434_44981 = G__45002;
chunk__44436_44982 = G__45003;
count__44437_44983 = G__45004;
i__44438_44984 = G__45005;
continue;
} else {
var G__45006 = cljs.core.next(seq__44434_44995__$1);
var G__45007 = null;
var G__45008 = (0);
var G__45009 = (0);
seq__44434_44981 = G__45006;
chunk__44436_44982 = G__45007;
count__44437_44983 = G__45008;
i__44438_44984 = G__45009;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_44980);
}


var G__45010 = cljs.core.next(seq__44373_44973__$1);
var G__45011 = null;
var G__45012 = (0);
var G__45013 = (0);
seq__44373_44933 = G__45010;
chunk__44374_44934 = G__45011;
count__44375_44935 = G__45012;
i__44376_44936 = G__45013;
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
var seq__44477 = cljs.core.seq(node);
var chunk__44478 = null;
var count__44479 = (0);
var i__44480 = (0);
while(true){
if((i__44480 < count__44479)){
var n = chunk__44478.cljs$core$IIndexed$_nth$arity$2(null,i__44480);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45014 = seq__44477;
var G__45015 = chunk__44478;
var G__45016 = count__44479;
var G__45017 = (i__44480 + (1));
seq__44477 = G__45014;
chunk__44478 = G__45015;
count__44479 = G__45016;
i__44480 = G__45017;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44477);
if(temp__5735__auto__){
var seq__44477__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44477__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44477__$1);
var G__45018 = cljs.core.chunk_rest(seq__44477__$1);
var G__45019 = c__4556__auto__;
var G__45020 = cljs.core.count(c__4556__auto__);
var G__45021 = (0);
seq__44477 = G__45018;
chunk__44478 = G__45019;
count__44479 = G__45020;
i__44480 = G__45021;
continue;
} else {
var n = cljs.core.first(seq__44477__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45022 = cljs.core.next(seq__44477__$1);
var G__45023 = null;
var G__45024 = (0);
var G__45025 = (0);
seq__44477 = G__45022;
chunk__44478 = G__45023;
count__44479 = G__45024;
i__44480 = G__45025;
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
var G__44490 = arguments.length;
switch (G__44490) {
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
var G__44494 = arguments.length;
switch (G__44494) {
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
var G__44514 = arguments.length;
switch (G__44514) {
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
var len__4736__auto___45031 = arguments.length;
var i__4737__auto___45032 = (0);
while(true){
if((i__4737__auto___45032 < len__4736__auto___45031)){
args__4742__auto__.push((arguments[i__4737__auto___45032]));

var G__45033 = (i__4737__auto___45032 + (1));
i__4737__auto___45032 = G__45033;
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
var seq__44531_45034 = cljs.core.seq(nodes);
var chunk__44532_45035 = null;
var count__44533_45036 = (0);
var i__44534_45037 = (0);
while(true){
if((i__44534_45037 < count__44533_45036)){
var node_45038 = chunk__44532_45035.cljs$core$IIndexed$_nth$arity$2(null,i__44534_45037);
fragment.appendChild(shadow.dom._to_dom(node_45038));


var G__45039 = seq__44531_45034;
var G__45040 = chunk__44532_45035;
var G__45041 = count__44533_45036;
var G__45042 = (i__44534_45037 + (1));
seq__44531_45034 = G__45039;
chunk__44532_45035 = G__45040;
count__44533_45036 = G__45041;
i__44534_45037 = G__45042;
continue;
} else {
var temp__5735__auto___45043 = cljs.core.seq(seq__44531_45034);
if(temp__5735__auto___45043){
var seq__44531_45044__$1 = temp__5735__auto___45043;
if(cljs.core.chunked_seq_QMARK_(seq__44531_45044__$1)){
var c__4556__auto___45045 = cljs.core.chunk_first(seq__44531_45044__$1);
var G__45046 = cljs.core.chunk_rest(seq__44531_45044__$1);
var G__45047 = c__4556__auto___45045;
var G__45048 = cljs.core.count(c__4556__auto___45045);
var G__45049 = (0);
seq__44531_45034 = G__45046;
chunk__44532_45035 = G__45047;
count__44533_45036 = G__45048;
i__44534_45037 = G__45049;
continue;
} else {
var node_45050 = cljs.core.first(seq__44531_45044__$1);
fragment.appendChild(shadow.dom._to_dom(node_45050));


var G__45051 = cljs.core.next(seq__44531_45044__$1);
var G__45052 = null;
var G__45053 = (0);
var G__45054 = (0);
seq__44531_45034 = G__45051;
chunk__44532_45035 = G__45052;
count__44533_45036 = G__45053;
i__44534_45037 = G__45054;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44527){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44527));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44549_45055 = cljs.core.seq(scripts);
var chunk__44550_45056 = null;
var count__44551_45057 = (0);
var i__44552_45058 = (0);
while(true){
if((i__44552_45058 < count__44551_45057)){
var vec__44562_45059 = chunk__44550_45056.cljs$core$IIndexed$_nth$arity$2(null,i__44552_45058);
var script_tag_45060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562_45059,(0),null);
var script_body_45061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44562_45059,(1),null);
eval(script_body_45061);


var G__45062 = seq__44549_45055;
var G__45063 = chunk__44550_45056;
var G__45064 = count__44551_45057;
var G__45065 = (i__44552_45058 + (1));
seq__44549_45055 = G__45062;
chunk__44550_45056 = G__45063;
count__44551_45057 = G__45064;
i__44552_45058 = G__45065;
continue;
} else {
var temp__5735__auto___45066 = cljs.core.seq(seq__44549_45055);
if(temp__5735__auto___45066){
var seq__44549_45067__$1 = temp__5735__auto___45066;
if(cljs.core.chunked_seq_QMARK_(seq__44549_45067__$1)){
var c__4556__auto___45068 = cljs.core.chunk_first(seq__44549_45067__$1);
var G__45069 = cljs.core.chunk_rest(seq__44549_45067__$1);
var G__45070 = c__4556__auto___45068;
var G__45071 = cljs.core.count(c__4556__auto___45068);
var G__45072 = (0);
seq__44549_45055 = G__45069;
chunk__44550_45056 = G__45070;
count__44551_45057 = G__45071;
i__44552_45058 = G__45072;
continue;
} else {
var vec__44567_45073 = cljs.core.first(seq__44549_45067__$1);
var script_tag_45074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44567_45073,(0),null);
var script_body_45075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44567_45073,(1),null);
eval(script_body_45075);


var G__45076 = cljs.core.next(seq__44549_45067__$1);
var G__45077 = null;
var G__45078 = (0);
var G__45079 = (0);
seq__44549_45055 = G__45076;
chunk__44550_45056 = G__45077;
count__44551_45057 = G__45078;
i__44552_45058 = G__45079;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44571){
var vec__44572 = p__44571;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44572,(1),null);
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
var G__44580 = arguments.length;
switch (G__44580) {
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
var seq__44585 = cljs.core.seq(style_keys);
var chunk__44586 = null;
var count__44587 = (0);
var i__44588 = (0);
while(true){
if((i__44588 < count__44587)){
var it = chunk__44586.cljs$core$IIndexed$_nth$arity$2(null,i__44588);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45083 = seq__44585;
var G__45084 = chunk__44586;
var G__45085 = count__44587;
var G__45086 = (i__44588 + (1));
seq__44585 = G__45083;
chunk__44586 = G__45084;
count__44587 = G__45085;
i__44588 = G__45086;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44585);
if(temp__5735__auto__){
var seq__44585__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44585__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44585__$1);
var G__45088 = cljs.core.chunk_rest(seq__44585__$1);
var G__45089 = c__4556__auto__;
var G__45090 = cljs.core.count(c__4556__auto__);
var G__45091 = (0);
seq__44585 = G__45088;
chunk__44586 = G__45089;
count__44587 = G__45090;
i__44588 = G__45091;
continue;
} else {
var it = cljs.core.first(seq__44585__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45092 = cljs.core.next(seq__44585__$1);
var G__45093 = null;
var G__45094 = (0);
var G__45095 = (0);
seq__44585 = G__45092;
chunk__44586 = G__45093;
count__44587 = G__45094;
i__44588 = G__45095;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44591,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44595 = k44591;
var G__44595__$1 = (((G__44595 instanceof cljs.core.Keyword))?G__44595.fqn:null);
switch (G__44595__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44591,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44597){
var vec__44598 = p__44597;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44598,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44598,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44590){
var self__ = this;
var G__44590__$1 = this;
return (new cljs.core.RecordIter((0),G__44590__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44592,other44593){
var self__ = this;
var this44592__$1 = this;
return (((!((other44593 == null)))) && ((this44592__$1.constructor === other44593.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44592__$1.x,other44593.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44592__$1.y,other44593.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44592__$1.__extmap,other44593.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44590){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44616 = cljs.core.keyword_identical_QMARK_;
var expr__44617 = k__4388__auto__;
if(cljs.core.truth_((pred__44616.cljs$core$IFn$_invoke$arity$2 ? pred__44616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44617) : pred__44616.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44617)))){
return (new shadow.dom.Coordinate(G__44590,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44616.cljs$core$IFn$_invoke$arity$2 ? pred__44616.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44617) : pred__44616.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44617)))){
return (new shadow.dom.Coordinate(self__.x,G__44590,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44590),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44590){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44590,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44594){
var extmap__4419__auto__ = (function (){var G__44625 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44594,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44594)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44625);
} else {
return G__44625;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44594),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44594),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k44630,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__44638 = k44630;
var G__44638__$1 = (((G__44638 instanceof cljs.core.Keyword))?G__44638.fqn:null);
switch (G__44638__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44630,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__44642){
var vec__44643 = p__44642;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44643,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44643,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44629){
var self__ = this;
var G__44629__$1 = this;
return (new cljs.core.RecordIter((0),G__44629__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44631,other44632){
var self__ = this;
var this44631__$1 = this;
return (((!((other44632 == null)))) && ((this44631__$1.constructor === other44632.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44631__$1.w,other44632.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44631__$1.h,other44632.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44631__$1.__extmap,other44632.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__44629){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__44656 = cljs.core.keyword_identical_QMARK_;
var expr__44657 = k__4388__auto__;
if(cljs.core.truth_((pred__44656.cljs$core$IFn$_invoke$arity$2 ? pred__44656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44657) : pred__44656.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44657)))){
return (new shadow.dom.Size(G__44629,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44656.cljs$core$IFn$_invoke$arity$2 ? pred__44656.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44657) : pred__44656.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44657)))){
return (new shadow.dom.Size(self__.w,G__44629,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__44629),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__44629){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44629,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44634){
var extmap__4419__auto__ = (function (){var G__44665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44634,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44665);
} else {
return G__44665;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44634),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44634),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__45109 = (i + (1));
var G__45110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45109;
ret = G__45110;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44686){
var vec__44687 = p__44686;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44687,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44687,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44694 = arguments.length;
switch (G__44694) {
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
var G__45112 = ps;
var G__45113 = (i + (1));
el__$1 = G__45112;
i = G__45113;
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
var vec__44714 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44717_45114 = cljs.core.seq(props);
var chunk__44718_45115 = null;
var count__44719_45116 = (0);
var i__44720_45117 = (0);
while(true){
if((i__44720_45117 < count__44719_45116)){
var vec__44735_45118 = chunk__44718_45115.cljs$core$IIndexed$_nth$arity$2(null,i__44720_45117);
var k_45119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44735_45118,(0),null);
var v_45120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44735_45118,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_45119);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45119),v_45120);


var G__45121 = seq__44717_45114;
var G__45122 = chunk__44718_45115;
var G__45123 = count__44719_45116;
var G__45124 = (i__44720_45117 + (1));
seq__44717_45114 = G__45121;
chunk__44718_45115 = G__45122;
count__44719_45116 = G__45123;
i__44720_45117 = G__45124;
continue;
} else {
var temp__5735__auto___45125 = cljs.core.seq(seq__44717_45114);
if(temp__5735__auto___45125){
var seq__44717_45126__$1 = temp__5735__auto___45125;
if(cljs.core.chunked_seq_QMARK_(seq__44717_45126__$1)){
var c__4556__auto___45127 = cljs.core.chunk_first(seq__44717_45126__$1);
var G__45128 = cljs.core.chunk_rest(seq__44717_45126__$1);
var G__45129 = c__4556__auto___45127;
var G__45130 = cljs.core.count(c__4556__auto___45127);
var G__45131 = (0);
seq__44717_45114 = G__45128;
chunk__44718_45115 = G__45129;
count__44719_45116 = G__45130;
i__44720_45117 = G__45131;
continue;
} else {
var vec__44741_45132 = cljs.core.first(seq__44717_45126__$1);
var k_45133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741_45132,(0),null);
var v_45134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44741_45132,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_45133);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45133),v_45134);


var G__45135 = cljs.core.next(seq__44717_45126__$1);
var G__45136 = null;
var G__45137 = (0);
var G__45138 = (0);
seq__44717_45114 = G__45135;
chunk__44718_45115 = G__45136;
count__44719_45116 = G__45137;
i__44720_45117 = G__45138;
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
var vec__44749 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(1),null);
var seq__44753_45139 = cljs.core.seq(node_children);
var chunk__44755_45140 = null;
var count__44756_45141 = (0);
var i__44757_45142 = (0);
while(true){
if((i__44757_45142 < count__44756_45141)){
var child_struct_45143 = chunk__44755_45140.cljs$core$IIndexed$_nth$arity$2(null,i__44757_45142);
if((!((child_struct_45143 == null)))){
if(typeof child_struct_45143 === 'string'){
var text_45144 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45144),child_struct_45143].join(''));
} else {
var children_45146 = shadow.dom.svg_node(child_struct_45143);
if(cljs.core.seq_QMARK_(children_45146)){
var seq__44795_45149 = cljs.core.seq(children_45146);
var chunk__44797_45150 = null;
var count__44798_45151 = (0);
var i__44799_45152 = (0);
while(true){
if((i__44799_45152 < count__44798_45151)){
var child_45153 = chunk__44797_45150.cljs$core$IIndexed$_nth$arity$2(null,i__44799_45152);
if(cljs.core.truth_(child_45153)){
node.appendChild(child_45153);


var G__45154 = seq__44795_45149;
var G__45155 = chunk__44797_45150;
var G__45156 = count__44798_45151;
var G__45157 = (i__44799_45152 + (1));
seq__44795_45149 = G__45154;
chunk__44797_45150 = G__45155;
count__44798_45151 = G__45156;
i__44799_45152 = G__45157;
continue;
} else {
var G__45158 = seq__44795_45149;
var G__45159 = chunk__44797_45150;
var G__45160 = count__44798_45151;
var G__45161 = (i__44799_45152 + (1));
seq__44795_45149 = G__45158;
chunk__44797_45150 = G__45159;
count__44798_45151 = G__45160;
i__44799_45152 = G__45161;
continue;
}
} else {
var temp__5735__auto___45162 = cljs.core.seq(seq__44795_45149);
if(temp__5735__auto___45162){
var seq__44795_45163__$1 = temp__5735__auto___45162;
if(cljs.core.chunked_seq_QMARK_(seq__44795_45163__$1)){
var c__4556__auto___45164 = cljs.core.chunk_first(seq__44795_45163__$1);
var G__45165 = cljs.core.chunk_rest(seq__44795_45163__$1);
var G__45166 = c__4556__auto___45164;
var G__45167 = cljs.core.count(c__4556__auto___45164);
var G__45168 = (0);
seq__44795_45149 = G__45165;
chunk__44797_45150 = G__45166;
count__44798_45151 = G__45167;
i__44799_45152 = G__45168;
continue;
} else {
var child_45169 = cljs.core.first(seq__44795_45163__$1);
if(cljs.core.truth_(child_45169)){
node.appendChild(child_45169);


var G__45170 = cljs.core.next(seq__44795_45163__$1);
var G__45171 = null;
var G__45172 = (0);
var G__45173 = (0);
seq__44795_45149 = G__45170;
chunk__44797_45150 = G__45171;
count__44798_45151 = G__45172;
i__44799_45152 = G__45173;
continue;
} else {
var G__45174 = cljs.core.next(seq__44795_45163__$1);
var G__45175 = null;
var G__45176 = (0);
var G__45177 = (0);
seq__44795_45149 = G__45174;
chunk__44797_45150 = G__45175;
count__44798_45151 = G__45176;
i__44799_45152 = G__45177;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45146);
}
}


var G__45178 = seq__44753_45139;
var G__45179 = chunk__44755_45140;
var G__45180 = count__44756_45141;
var G__45181 = (i__44757_45142 + (1));
seq__44753_45139 = G__45178;
chunk__44755_45140 = G__45179;
count__44756_45141 = G__45180;
i__44757_45142 = G__45181;
continue;
} else {
var G__45182 = seq__44753_45139;
var G__45183 = chunk__44755_45140;
var G__45184 = count__44756_45141;
var G__45185 = (i__44757_45142 + (1));
seq__44753_45139 = G__45182;
chunk__44755_45140 = G__45183;
count__44756_45141 = G__45184;
i__44757_45142 = G__45185;
continue;
}
} else {
var temp__5735__auto___45186 = cljs.core.seq(seq__44753_45139);
if(temp__5735__auto___45186){
var seq__44753_45187__$1 = temp__5735__auto___45186;
if(cljs.core.chunked_seq_QMARK_(seq__44753_45187__$1)){
var c__4556__auto___45188 = cljs.core.chunk_first(seq__44753_45187__$1);
var G__45189 = cljs.core.chunk_rest(seq__44753_45187__$1);
var G__45190 = c__4556__auto___45188;
var G__45191 = cljs.core.count(c__4556__auto___45188);
var G__45192 = (0);
seq__44753_45139 = G__45189;
chunk__44755_45140 = G__45190;
count__44756_45141 = G__45191;
i__44757_45142 = G__45192;
continue;
} else {
var child_struct_45193 = cljs.core.first(seq__44753_45187__$1);
if((!((child_struct_45193 == null)))){
if(typeof child_struct_45193 === 'string'){
var text_45194 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45194),child_struct_45193].join(''));
} else {
var children_45195 = shadow.dom.svg_node(child_struct_45193);
if(cljs.core.seq_QMARK_(children_45195)){
var seq__44808_45200 = cljs.core.seq(children_45195);
var chunk__44810_45201 = null;
var count__44811_45202 = (0);
var i__44812_45203 = (0);
while(true){
if((i__44812_45203 < count__44811_45202)){
var child_45204 = chunk__44810_45201.cljs$core$IIndexed$_nth$arity$2(null,i__44812_45203);
if(cljs.core.truth_(child_45204)){
node.appendChild(child_45204);


var G__45205 = seq__44808_45200;
var G__45206 = chunk__44810_45201;
var G__45207 = count__44811_45202;
var G__45208 = (i__44812_45203 + (1));
seq__44808_45200 = G__45205;
chunk__44810_45201 = G__45206;
count__44811_45202 = G__45207;
i__44812_45203 = G__45208;
continue;
} else {
var G__45209 = seq__44808_45200;
var G__45210 = chunk__44810_45201;
var G__45211 = count__44811_45202;
var G__45212 = (i__44812_45203 + (1));
seq__44808_45200 = G__45209;
chunk__44810_45201 = G__45210;
count__44811_45202 = G__45211;
i__44812_45203 = G__45212;
continue;
}
} else {
var temp__5735__auto___45213__$1 = cljs.core.seq(seq__44808_45200);
if(temp__5735__auto___45213__$1){
var seq__44808_45214__$1 = temp__5735__auto___45213__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44808_45214__$1)){
var c__4556__auto___45215 = cljs.core.chunk_first(seq__44808_45214__$1);
var G__45216 = cljs.core.chunk_rest(seq__44808_45214__$1);
var G__45217 = c__4556__auto___45215;
var G__45218 = cljs.core.count(c__4556__auto___45215);
var G__45219 = (0);
seq__44808_45200 = G__45216;
chunk__44810_45201 = G__45217;
count__44811_45202 = G__45218;
i__44812_45203 = G__45219;
continue;
} else {
var child_45220 = cljs.core.first(seq__44808_45214__$1);
if(cljs.core.truth_(child_45220)){
node.appendChild(child_45220);


var G__45221 = cljs.core.next(seq__44808_45214__$1);
var G__45222 = null;
var G__45223 = (0);
var G__45224 = (0);
seq__44808_45200 = G__45221;
chunk__44810_45201 = G__45222;
count__44811_45202 = G__45223;
i__44812_45203 = G__45224;
continue;
} else {
var G__45225 = cljs.core.next(seq__44808_45214__$1);
var G__45226 = null;
var G__45227 = (0);
var G__45228 = (0);
seq__44808_45200 = G__45225;
chunk__44810_45201 = G__45226;
count__44811_45202 = G__45227;
i__44812_45203 = G__45228;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45195);
}
}


var G__45229 = cljs.core.next(seq__44753_45187__$1);
var G__45230 = null;
var G__45231 = (0);
var G__45232 = (0);
seq__44753_45139 = G__45229;
chunk__44755_45140 = G__45230;
count__44756_45141 = G__45231;
i__44757_45142 = G__45232;
continue;
} else {
var G__45233 = cljs.core.next(seq__44753_45187__$1);
var G__45234 = null;
var G__45235 = (0);
var G__45236 = (0);
seq__44753_45139 = G__45233;
chunk__44755_45140 = G__45234;
count__44756_45141 = G__45235;
i__44757_45142 = G__45236;
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
var len__4736__auto___45237 = arguments.length;
var i__4737__auto___45238 = (0);
while(true){
if((i__4737__auto___45238 < len__4736__auto___45237)){
args__4742__auto__.push((arguments[i__4737__auto___45238]));

var G__45239 = (i__4737__auto___45238 + (1));
i__4737__auto___45238 = G__45239;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44830){
var G__44831 = cljs.core.first(seq44830);
var seq44830__$1 = cljs.core.next(seq44830);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44831,seq44830__$1);
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
var G__44848 = arguments.length;
switch (G__44848) {
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
var c__42439__auto___45241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_44865){
var state_val_44866 = (state_44865[(1)]);
if((state_val_44866 === (1))){
var state_44865__$1 = state_44865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44865__$1,(2),once_or_cleanup);
} else {
if((state_val_44866 === (2))){
var inst_44862 = (state_44865[(2)]);
var inst_44863 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_44865__$1 = (function (){var statearr_44871 = state_44865;
(statearr_44871[(7)] = inst_44862);

return statearr_44871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44865__$1,inst_44863);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42367__auto__ = null;
var shadow$dom$state_machine__42367__auto____0 = (function (){
var statearr_44873 = [null,null,null,null,null,null,null,null];
(statearr_44873[(0)] = shadow$dom$state_machine__42367__auto__);

(statearr_44873[(1)] = (1));

return statearr_44873;
});
var shadow$dom$state_machine__42367__auto____1 = (function (state_44865){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_44865);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e44877){var ex__42370__auto__ = e44877;
var statearr_44878_45246 = state_44865;
(statearr_44878_45246[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_44865[(4)]))){
var statearr_44879_45247 = state_44865;
(statearr_44879_45247[(1)] = cljs.core.first((state_44865[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45248 = state_44865;
state_44865 = G__45248;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
shadow$dom$state_machine__42367__auto__ = function(state_44865){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42367__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42367__auto____1.call(this,state_44865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42367__auto____0;
shadow$dom$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42367__auto____1;
return shadow$dom$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_44880 = f__42440__auto__();
(statearr_44880[(6)] = c__42439__auto___45241);

return statearr_44880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
