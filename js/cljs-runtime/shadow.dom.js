goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45975 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45975(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45979 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45979(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45345 = coll;
var G__45346 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45345,G__45346) : shadow.dom.lazy_native_coll_seq.call(null,G__45345,G__45346));
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
var G__45361 = arguments.length;
switch (G__45361) {
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
var G__45375 = arguments.length;
switch (G__45375) {
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
var G__45382 = arguments.length;
switch (G__45382) {
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
var G__45387 = arguments.length;
switch (G__45387) {
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
var G__45398 = arguments.length;
switch (G__45398) {
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
var G__45405 = arguments.length;
switch (G__45405) {
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
}catch (e45411){if((e45411 instanceof Object)){
var e = e45411;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45411;

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
var seq__45421 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45422 = null;
var count__45423 = (0);
var i__45424 = (0);
while(true){
if((i__45424 < count__45423)){
var el = chunk__45422.cljs$core$IIndexed$_nth$arity$2(null,i__45424);
var handler_46008__$1 = ((function (seq__45421,chunk__45422,count__45423,i__45424,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45421,chunk__45422,count__45423,i__45424,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46008__$1);


var G__46010 = seq__45421;
var G__46011 = chunk__45422;
var G__46012 = count__45423;
var G__46013 = (i__45424 + (1));
seq__45421 = G__46010;
chunk__45422 = G__46011;
count__45423 = G__46012;
i__45424 = G__46013;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45421);
if(temp__5735__auto__){
var seq__45421__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45421__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45421__$1);
var G__46014 = cljs.core.chunk_rest(seq__45421__$1);
var G__46015 = c__4556__auto__;
var G__46016 = cljs.core.count(c__4556__auto__);
var G__46017 = (0);
seq__45421 = G__46014;
chunk__45422 = G__46015;
count__45423 = G__46016;
i__45424 = G__46017;
continue;
} else {
var el = cljs.core.first(seq__45421__$1);
var handler_46018__$1 = ((function (seq__45421,chunk__45422,count__45423,i__45424,el,seq__45421__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45421,chunk__45422,count__45423,i__45424,el,seq__45421__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46018__$1);


var G__46021 = cljs.core.next(seq__45421__$1);
var G__46022 = null;
var G__46023 = (0);
var G__46024 = (0);
seq__45421 = G__46021;
chunk__45422 = G__46022;
count__45423 = G__46023;
i__45424 = G__46024;
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
var G__45433 = arguments.length;
switch (G__45433) {
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
var seq__45438 = cljs.core.seq(events);
var chunk__45439 = null;
var count__45440 = (0);
var i__45441 = (0);
while(true){
if((i__45441 < count__45440)){
var vec__45453 = chunk__45439.cljs$core$IIndexed$_nth$arity$2(null,i__45441);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45453,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45453,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46032 = seq__45438;
var G__46033 = chunk__45439;
var G__46034 = count__45440;
var G__46035 = (i__45441 + (1));
seq__45438 = G__46032;
chunk__45439 = G__46033;
count__45440 = G__46034;
i__45441 = G__46035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45438);
if(temp__5735__auto__){
var seq__45438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45438__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45438__$1);
var G__46037 = cljs.core.chunk_rest(seq__45438__$1);
var G__46038 = c__4556__auto__;
var G__46039 = cljs.core.count(c__4556__auto__);
var G__46040 = (0);
seq__45438 = G__46037;
chunk__45439 = G__46038;
count__45440 = G__46039;
i__45441 = G__46040;
continue;
} else {
var vec__45457 = cljs.core.first(seq__45438__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45457,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45457,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46041 = cljs.core.next(seq__45438__$1);
var G__46042 = null;
var G__46043 = (0);
var G__46044 = (0);
seq__45438 = G__46041;
chunk__45439 = G__46042;
count__45440 = G__46043;
i__45441 = G__46044;
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
var seq__45464 = cljs.core.seq(styles);
var chunk__45465 = null;
var count__45466 = (0);
var i__45467 = (0);
while(true){
if((i__45467 < count__45466)){
var vec__45483 = chunk__45465.cljs$core$IIndexed$_nth$arity$2(null,i__45467);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45483,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45483,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46047 = seq__45464;
var G__46048 = chunk__45465;
var G__46049 = count__45466;
var G__46050 = (i__45467 + (1));
seq__45464 = G__46047;
chunk__45465 = G__46048;
count__45466 = G__46049;
i__45467 = G__46050;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45464);
if(temp__5735__auto__){
var seq__45464__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45464__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45464__$1);
var G__46052 = cljs.core.chunk_rest(seq__45464__$1);
var G__46053 = c__4556__auto__;
var G__46054 = cljs.core.count(c__4556__auto__);
var G__46055 = (0);
seq__45464 = G__46052;
chunk__45465 = G__46053;
count__45466 = G__46054;
i__45467 = G__46055;
continue;
} else {
var vec__45488 = cljs.core.first(seq__45464__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45488,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46057 = cljs.core.next(seq__45464__$1);
var G__46058 = null;
var G__46059 = (0);
var G__46060 = (0);
seq__45464 = G__46057;
chunk__45465 = G__46058;
count__45466 = G__46059;
i__45467 = G__46060;
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
var G__45494_46062 = key;
var G__45494_46063__$1 = (((G__45494_46062 instanceof cljs.core.Keyword))?G__45494_46062.fqn:null);
switch (G__45494_46063__$1) {
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
var ks_46070 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_46070,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_46070,"aria-");
}
})())){
el.setAttribute(ks_46070,value);
} else {
(el[ks_46070] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45516){
var map__45517 = p__45516;
var map__45517__$1 = (((((!((map__45517 == null))))?(((((map__45517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45517):map__45517);
var props = map__45517__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45521 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45521,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45521,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45521,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45525 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45525,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45525;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45530 = arguments.length;
switch (G__45530) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45537){
var vec__45538 = p__45537;
var seq__45539 = cljs.core.seq(vec__45538);
var first__45540 = cljs.core.first(seq__45539);
var seq__45539__$1 = cljs.core.next(seq__45539);
var nn = first__45540;
var first__45540__$1 = cljs.core.first(seq__45539__$1);
var seq__45539__$2 = cljs.core.next(seq__45539__$1);
var np = first__45540__$1;
var nc = seq__45539__$2;
var node = vec__45538;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45541 = nn;
var G__45542 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45541,G__45542) : create_fn.call(null,G__45541,G__45542));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45543 = nn;
var G__45544 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45543,G__45544) : create_fn.call(null,G__45543,G__45544));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45548 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45548,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45548,(1),null);
var seq__45552_46086 = cljs.core.seq(node_children);
var chunk__45553_46087 = null;
var count__45554_46088 = (0);
var i__45555_46089 = (0);
while(true){
if((i__45555_46089 < count__45554_46088)){
var child_struct_46090 = chunk__45553_46087.cljs$core$IIndexed$_nth$arity$2(null,i__45555_46089);
var children_46091 = shadow.dom.dom_node(child_struct_46090);
if(cljs.core.seq_QMARK_(children_46091)){
var seq__45588_46095 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46091));
var chunk__45590_46096 = null;
var count__45591_46097 = (0);
var i__45592_46098 = (0);
while(true){
if((i__45592_46098 < count__45591_46097)){
var child_46101 = chunk__45590_46096.cljs$core$IIndexed$_nth$arity$2(null,i__45592_46098);
if(cljs.core.truth_(child_46101)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46101);


var G__46102 = seq__45588_46095;
var G__46103 = chunk__45590_46096;
var G__46104 = count__45591_46097;
var G__46105 = (i__45592_46098 + (1));
seq__45588_46095 = G__46102;
chunk__45590_46096 = G__46103;
count__45591_46097 = G__46104;
i__45592_46098 = G__46105;
continue;
} else {
var G__46107 = seq__45588_46095;
var G__46108 = chunk__45590_46096;
var G__46109 = count__45591_46097;
var G__46110 = (i__45592_46098 + (1));
seq__45588_46095 = G__46107;
chunk__45590_46096 = G__46108;
count__45591_46097 = G__46109;
i__45592_46098 = G__46110;
continue;
}
} else {
var temp__5735__auto___46111 = cljs.core.seq(seq__45588_46095);
if(temp__5735__auto___46111){
var seq__45588_46112__$1 = temp__5735__auto___46111;
if(cljs.core.chunked_seq_QMARK_(seq__45588_46112__$1)){
var c__4556__auto___46113 = cljs.core.chunk_first(seq__45588_46112__$1);
var G__46115 = cljs.core.chunk_rest(seq__45588_46112__$1);
var G__46116 = c__4556__auto___46113;
var G__46117 = cljs.core.count(c__4556__auto___46113);
var G__46118 = (0);
seq__45588_46095 = G__46115;
chunk__45590_46096 = G__46116;
count__45591_46097 = G__46117;
i__45592_46098 = G__46118;
continue;
} else {
var child_46120 = cljs.core.first(seq__45588_46112__$1);
if(cljs.core.truth_(child_46120)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46120);


var G__46121 = cljs.core.next(seq__45588_46112__$1);
var G__46122 = null;
var G__46123 = (0);
var G__46124 = (0);
seq__45588_46095 = G__46121;
chunk__45590_46096 = G__46122;
count__45591_46097 = G__46123;
i__45592_46098 = G__46124;
continue;
} else {
var G__46126 = cljs.core.next(seq__45588_46112__$1);
var G__46127 = null;
var G__46128 = (0);
var G__46129 = (0);
seq__45588_46095 = G__46126;
chunk__45590_46096 = G__46127;
count__45591_46097 = G__46128;
i__45592_46098 = G__46129;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46091);
}


var G__46130 = seq__45552_46086;
var G__46131 = chunk__45553_46087;
var G__46132 = count__45554_46088;
var G__46133 = (i__45555_46089 + (1));
seq__45552_46086 = G__46130;
chunk__45553_46087 = G__46131;
count__45554_46088 = G__46132;
i__45555_46089 = G__46133;
continue;
} else {
var temp__5735__auto___46134 = cljs.core.seq(seq__45552_46086);
if(temp__5735__auto___46134){
var seq__45552_46135__$1 = temp__5735__auto___46134;
if(cljs.core.chunked_seq_QMARK_(seq__45552_46135__$1)){
var c__4556__auto___46137 = cljs.core.chunk_first(seq__45552_46135__$1);
var G__46138 = cljs.core.chunk_rest(seq__45552_46135__$1);
var G__46139 = c__4556__auto___46137;
var G__46140 = cljs.core.count(c__4556__auto___46137);
var G__46141 = (0);
seq__45552_46086 = G__46138;
chunk__45553_46087 = G__46139;
count__45554_46088 = G__46140;
i__45555_46089 = G__46141;
continue;
} else {
var child_struct_46142 = cljs.core.first(seq__45552_46135__$1);
var children_46143 = shadow.dom.dom_node(child_struct_46142);
if(cljs.core.seq_QMARK_(children_46143)){
var seq__45596_46144 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46143));
var chunk__45598_46145 = null;
var count__45599_46146 = (0);
var i__45600_46147 = (0);
while(true){
if((i__45600_46147 < count__45599_46146)){
var child_46150 = chunk__45598_46145.cljs$core$IIndexed$_nth$arity$2(null,i__45600_46147);
if(cljs.core.truth_(child_46150)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46150);


var G__46152 = seq__45596_46144;
var G__46153 = chunk__45598_46145;
var G__46154 = count__45599_46146;
var G__46155 = (i__45600_46147 + (1));
seq__45596_46144 = G__46152;
chunk__45598_46145 = G__46153;
count__45599_46146 = G__46154;
i__45600_46147 = G__46155;
continue;
} else {
var G__46158 = seq__45596_46144;
var G__46159 = chunk__45598_46145;
var G__46160 = count__45599_46146;
var G__46162 = (i__45600_46147 + (1));
seq__45596_46144 = G__46158;
chunk__45598_46145 = G__46159;
count__45599_46146 = G__46160;
i__45600_46147 = G__46162;
continue;
}
} else {
var temp__5735__auto___46163__$1 = cljs.core.seq(seq__45596_46144);
if(temp__5735__auto___46163__$1){
var seq__45596_46165__$1 = temp__5735__auto___46163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45596_46165__$1)){
var c__4556__auto___46166 = cljs.core.chunk_first(seq__45596_46165__$1);
var G__46167 = cljs.core.chunk_rest(seq__45596_46165__$1);
var G__46168 = c__4556__auto___46166;
var G__46169 = cljs.core.count(c__4556__auto___46166);
var G__46170 = (0);
seq__45596_46144 = G__46167;
chunk__45598_46145 = G__46168;
count__45599_46146 = G__46169;
i__45600_46147 = G__46170;
continue;
} else {
var child_46172 = cljs.core.first(seq__45596_46165__$1);
if(cljs.core.truth_(child_46172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46172);


var G__46173 = cljs.core.next(seq__45596_46165__$1);
var G__46174 = null;
var G__46175 = (0);
var G__46176 = (0);
seq__45596_46144 = G__46173;
chunk__45598_46145 = G__46174;
count__45599_46146 = G__46175;
i__45600_46147 = G__46176;
continue;
} else {
var G__46178 = cljs.core.next(seq__45596_46165__$1);
var G__46179 = null;
var G__46180 = (0);
var G__46181 = (0);
seq__45596_46144 = G__46178;
chunk__45598_46145 = G__46179;
count__45599_46146 = G__46180;
i__45600_46147 = G__46181;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46143);
}


var G__46184 = cljs.core.next(seq__45552_46135__$1);
var G__46185 = null;
var G__46186 = (0);
var G__46187 = (0);
seq__45552_46086 = G__46184;
chunk__45553_46087 = G__46185;
count__45554_46088 = G__46186;
i__45555_46089 = G__46187;
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
var seq__45616 = cljs.core.seq(node);
var chunk__45617 = null;
var count__45618 = (0);
var i__45619 = (0);
while(true){
if((i__45619 < count__45618)){
var n = chunk__45617.cljs$core$IIndexed$_nth$arity$2(null,i__45619);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46196 = seq__45616;
var G__46197 = chunk__45617;
var G__46198 = count__45618;
var G__46199 = (i__45619 + (1));
seq__45616 = G__46196;
chunk__45617 = G__46197;
count__45618 = G__46198;
i__45619 = G__46199;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45616);
if(temp__5735__auto__){
var seq__45616__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45616__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45616__$1);
var G__46203 = cljs.core.chunk_rest(seq__45616__$1);
var G__46204 = c__4556__auto__;
var G__46205 = cljs.core.count(c__4556__auto__);
var G__46206 = (0);
seq__45616 = G__46203;
chunk__45617 = G__46204;
count__45618 = G__46205;
i__45619 = G__46206;
continue;
} else {
var n = cljs.core.first(seq__45616__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46208 = cljs.core.next(seq__45616__$1);
var G__46209 = null;
var G__46210 = (0);
var G__46211 = (0);
seq__45616 = G__46208;
chunk__45617 = G__46209;
count__45618 = G__46210;
i__45619 = G__46211;
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
var G__45628 = arguments.length;
switch (G__45628) {
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
var G__45634 = arguments.length;
switch (G__45634) {
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
var G__45647 = arguments.length;
switch (G__45647) {
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
var len__4736__auto___46229 = arguments.length;
var i__4737__auto___46230 = (0);
while(true){
if((i__4737__auto___46230 < len__4736__auto___46229)){
args__4742__auto__.push((arguments[i__4737__auto___46230]));

var G__46231 = (i__4737__auto___46230 + (1));
i__4737__auto___46230 = G__46231;
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
var seq__45669_46234 = cljs.core.seq(nodes);
var chunk__45670_46235 = null;
var count__45671_46236 = (0);
var i__45672_46237 = (0);
while(true){
if((i__45672_46237 < count__45671_46236)){
var node_46239 = chunk__45670_46235.cljs$core$IIndexed$_nth$arity$2(null,i__45672_46237);
fragment.appendChild(shadow.dom._to_dom(node_46239));


var G__46240 = seq__45669_46234;
var G__46241 = chunk__45670_46235;
var G__46242 = count__45671_46236;
var G__46243 = (i__45672_46237 + (1));
seq__45669_46234 = G__46240;
chunk__45670_46235 = G__46241;
count__45671_46236 = G__46242;
i__45672_46237 = G__46243;
continue;
} else {
var temp__5735__auto___46244 = cljs.core.seq(seq__45669_46234);
if(temp__5735__auto___46244){
var seq__45669_46245__$1 = temp__5735__auto___46244;
if(cljs.core.chunked_seq_QMARK_(seq__45669_46245__$1)){
var c__4556__auto___46246 = cljs.core.chunk_first(seq__45669_46245__$1);
var G__46247 = cljs.core.chunk_rest(seq__45669_46245__$1);
var G__46248 = c__4556__auto___46246;
var G__46249 = cljs.core.count(c__4556__auto___46246);
var G__46250 = (0);
seq__45669_46234 = G__46247;
chunk__45670_46235 = G__46248;
count__45671_46236 = G__46249;
i__45672_46237 = G__46250;
continue;
} else {
var node_46251 = cljs.core.first(seq__45669_46245__$1);
fragment.appendChild(shadow.dom._to_dom(node_46251));


var G__46252 = cljs.core.next(seq__45669_46245__$1);
var G__46253 = null;
var G__46254 = (0);
var G__46255 = (0);
seq__45669_46234 = G__46252;
chunk__45670_46235 = G__46253;
count__45671_46236 = G__46254;
i__45672_46237 = G__46255;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45664){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45664));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45679_46256 = cljs.core.seq(scripts);
var chunk__45680_46257 = null;
var count__45681_46258 = (0);
var i__45682_46259 = (0);
while(true){
if((i__45682_46259 < count__45681_46258)){
var vec__45691_46264 = chunk__45680_46257.cljs$core$IIndexed$_nth$arity$2(null,i__45682_46259);
var script_tag_46265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45691_46264,(0),null);
var script_body_46266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45691_46264,(1),null);
eval(script_body_46266);


var G__46267 = seq__45679_46256;
var G__46268 = chunk__45680_46257;
var G__46269 = count__45681_46258;
var G__46270 = (i__45682_46259 + (1));
seq__45679_46256 = G__46267;
chunk__45680_46257 = G__46268;
count__45681_46258 = G__46269;
i__45682_46259 = G__46270;
continue;
} else {
var temp__5735__auto___46271 = cljs.core.seq(seq__45679_46256);
if(temp__5735__auto___46271){
var seq__45679_46272__$1 = temp__5735__auto___46271;
if(cljs.core.chunked_seq_QMARK_(seq__45679_46272__$1)){
var c__4556__auto___46273 = cljs.core.chunk_first(seq__45679_46272__$1);
var G__46274 = cljs.core.chunk_rest(seq__45679_46272__$1);
var G__46275 = c__4556__auto___46273;
var G__46276 = cljs.core.count(c__4556__auto___46273);
var G__46277 = (0);
seq__45679_46256 = G__46274;
chunk__45680_46257 = G__46275;
count__45681_46258 = G__46276;
i__45682_46259 = G__46277;
continue;
} else {
var vec__45695_46278 = cljs.core.first(seq__45679_46272__$1);
var script_tag_46279 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45695_46278,(0),null);
var script_body_46280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45695_46278,(1),null);
eval(script_body_46280);


var G__46281 = cljs.core.next(seq__45679_46272__$1);
var G__46282 = null;
var G__46283 = (0);
var G__46284 = (0);
seq__45679_46256 = G__46281;
chunk__45680_46257 = G__46282;
count__45681_46258 = G__46283;
i__45682_46259 = G__46284;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45701){
var vec__45702 = p__45701;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45702,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45702,(1),null);
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
var G__45709 = arguments.length;
switch (G__45709) {
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
var seq__45712 = cljs.core.seq(style_keys);
var chunk__45713 = null;
var count__45714 = (0);
var i__45715 = (0);
while(true){
if((i__45715 < count__45714)){
var it = chunk__45713.cljs$core$IIndexed$_nth$arity$2(null,i__45715);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46289 = seq__45712;
var G__46290 = chunk__45713;
var G__46291 = count__45714;
var G__46292 = (i__45715 + (1));
seq__45712 = G__46289;
chunk__45713 = G__46290;
count__45714 = G__46291;
i__45715 = G__46292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45712);
if(temp__5735__auto__){
var seq__45712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45712__$1);
var G__46293 = cljs.core.chunk_rest(seq__45712__$1);
var G__46294 = c__4556__auto__;
var G__46295 = cljs.core.count(c__4556__auto__);
var G__46296 = (0);
seq__45712 = G__46293;
chunk__45713 = G__46294;
count__45714 = G__46295;
i__45715 = G__46296;
continue;
} else {
var it = cljs.core.first(seq__45712__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46297 = cljs.core.next(seq__45712__$1);
var G__46298 = null;
var G__46299 = (0);
var G__46300 = (0);
seq__45712 = G__46297;
chunk__45713 = G__46298;
count__45714 = G__46299;
i__45715 = G__46300;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45725,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45733 = k45725;
var G__45733__$1 = (((G__45733 instanceof cljs.core.Keyword))?G__45733.fqn:null);
switch (G__45733__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45725,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45737){
var vec__45738 = p__45737;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45738,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45724){
var self__ = this;
var G__45724__$1 = this;
return (new cljs.core.RecordIter((0),G__45724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45726,other45727){
var self__ = this;
var this45726__$1 = this;
return (((!((other45727 == null)))) && ((this45726__$1.constructor === other45727.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45726__$1.x,other45727.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45726__$1.y,other45727.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45726__$1.__extmap,other45727.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45724){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45755 = cljs.core.keyword_identical_QMARK_;
var expr__45756 = k__4388__auto__;
if(cljs.core.truth_((pred__45755.cljs$core$IFn$_invoke$arity$2 ? pred__45755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45756) : pred__45755.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45756)))){
return (new shadow.dom.Coordinate(G__45724,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45755.cljs$core$IFn$_invoke$arity$2 ? pred__45755.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45756) : pred__45755.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45756)))){
return (new shadow.dom.Coordinate(self__.x,G__45724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45724),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45724){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45724,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45730){
var extmap__4419__auto__ = (function (){var G__45770 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45730,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45730)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45770);
} else {
return G__45770;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45730),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45730),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45778,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45784 = k45778;
var G__45784__$1 = (((G__45784 instanceof cljs.core.Keyword))?G__45784.fqn:null);
switch (G__45784__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45778,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45786){
var vec__45787 = p__45786;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45787,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45777){
var self__ = this;
var G__45777__$1 = this;
return (new cljs.core.RecordIter((0),G__45777__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45779,other45780){
var self__ = this;
var this45779__$1 = this;
return (((!((other45780 == null)))) && ((this45779__$1.constructor === other45780.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45779__$1.w,other45780.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45779__$1.h,other45780.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45779__$1.__extmap,other45780.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45777){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45794 = cljs.core.keyword_identical_QMARK_;
var expr__45795 = k__4388__auto__;
if(cljs.core.truth_((pred__45794.cljs$core$IFn$_invoke$arity$2 ? pred__45794.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45795) : pred__45794.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45795)))){
return (new shadow.dom.Size(G__45777,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45794.cljs$core$IFn$_invoke$arity$2 ? pred__45794.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45795) : pred__45794.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45795)))){
return (new shadow.dom.Size(self__.w,G__45777,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45777),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45777){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45777,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45782){
var extmap__4419__auto__ = (function (){var G__45805 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45782,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45782)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45805);
} else {
return G__45805;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45782),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45782),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__46329 = (i + (1));
var G__46330 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46329;
ret = G__46330;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45827){
var vec__45828 = p__45827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45828,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45834 = arguments.length;
switch (G__45834) {
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
var G__46336 = ps;
var G__46337 = (i + (1));
el__$1 = G__46336;
i = G__46337;
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
var vec__45854 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45854,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45858_46338 = cljs.core.seq(props);
var chunk__45860_46339 = null;
var count__45861_46340 = (0);
var i__45862_46341 = (0);
while(true){
if((i__45862_46341 < count__45861_46340)){
var vec__45872_46342 = chunk__45860_46339.cljs$core$IIndexed$_nth$arity$2(null,i__45862_46341);
var k_46343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872_46342,(0),null);
var v_46344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45872_46342,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_46343);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46343),v_46344);


var G__46345 = seq__45858_46338;
var G__46346 = chunk__45860_46339;
var G__46347 = count__45861_46340;
var G__46348 = (i__45862_46341 + (1));
seq__45858_46338 = G__46345;
chunk__45860_46339 = G__46346;
count__45861_46340 = G__46347;
i__45862_46341 = G__46348;
continue;
} else {
var temp__5735__auto___46349 = cljs.core.seq(seq__45858_46338);
if(temp__5735__auto___46349){
var seq__45858_46350__$1 = temp__5735__auto___46349;
if(cljs.core.chunked_seq_QMARK_(seq__45858_46350__$1)){
var c__4556__auto___46351 = cljs.core.chunk_first(seq__45858_46350__$1);
var G__46352 = cljs.core.chunk_rest(seq__45858_46350__$1);
var G__46353 = c__4556__auto___46351;
var G__46354 = cljs.core.count(c__4556__auto___46351);
var G__46355 = (0);
seq__45858_46338 = G__46352;
chunk__45860_46339 = G__46353;
count__45861_46340 = G__46354;
i__45862_46341 = G__46355;
continue;
} else {
var vec__45877_46356 = cljs.core.first(seq__45858_46350__$1);
var k_46357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45877_46356,(0),null);
var v_46358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45877_46356,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_46357);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46357),v_46358);


var G__46359 = cljs.core.next(seq__45858_46350__$1);
var G__46360 = null;
var G__46361 = (0);
var G__46362 = (0);
seq__45858_46338 = G__46359;
chunk__45860_46339 = G__46360;
count__45861_46340 = G__46361;
i__45862_46341 = G__46362;
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
var vec__45885 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45885,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45885,(1),null);
var seq__45889_46365 = cljs.core.seq(node_children);
var chunk__45891_46366 = null;
var count__45892_46367 = (0);
var i__45893_46368 = (0);
while(true){
if((i__45893_46368 < count__45892_46367)){
var child_struct_46369 = chunk__45891_46366.cljs$core$IIndexed$_nth$arity$2(null,i__45893_46368);
if((!((child_struct_46369 == null)))){
if(typeof child_struct_46369 === 'string'){
var text_46370 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46370),child_struct_46369].join(''));
} else {
var children_46371 = shadow.dom.svg_node(child_struct_46369);
if(cljs.core.seq_QMARK_(children_46371)){
var seq__45922_46372 = cljs.core.seq(children_46371);
var chunk__45924_46373 = null;
var count__45925_46374 = (0);
var i__45926_46375 = (0);
while(true){
if((i__45926_46375 < count__45925_46374)){
var child_46376 = chunk__45924_46373.cljs$core$IIndexed$_nth$arity$2(null,i__45926_46375);
if(cljs.core.truth_(child_46376)){
node.appendChild(child_46376);


var G__46378 = seq__45922_46372;
var G__46379 = chunk__45924_46373;
var G__46380 = count__45925_46374;
var G__46381 = (i__45926_46375 + (1));
seq__45922_46372 = G__46378;
chunk__45924_46373 = G__46379;
count__45925_46374 = G__46380;
i__45926_46375 = G__46381;
continue;
} else {
var G__46382 = seq__45922_46372;
var G__46383 = chunk__45924_46373;
var G__46384 = count__45925_46374;
var G__46385 = (i__45926_46375 + (1));
seq__45922_46372 = G__46382;
chunk__45924_46373 = G__46383;
count__45925_46374 = G__46384;
i__45926_46375 = G__46385;
continue;
}
} else {
var temp__5735__auto___46386 = cljs.core.seq(seq__45922_46372);
if(temp__5735__auto___46386){
var seq__45922_46387__$1 = temp__5735__auto___46386;
if(cljs.core.chunked_seq_QMARK_(seq__45922_46387__$1)){
var c__4556__auto___46388 = cljs.core.chunk_first(seq__45922_46387__$1);
var G__46389 = cljs.core.chunk_rest(seq__45922_46387__$1);
var G__46390 = c__4556__auto___46388;
var G__46391 = cljs.core.count(c__4556__auto___46388);
var G__46392 = (0);
seq__45922_46372 = G__46389;
chunk__45924_46373 = G__46390;
count__45925_46374 = G__46391;
i__45926_46375 = G__46392;
continue;
} else {
var child_46393 = cljs.core.first(seq__45922_46387__$1);
if(cljs.core.truth_(child_46393)){
node.appendChild(child_46393);


var G__46394 = cljs.core.next(seq__45922_46387__$1);
var G__46395 = null;
var G__46396 = (0);
var G__46397 = (0);
seq__45922_46372 = G__46394;
chunk__45924_46373 = G__46395;
count__45925_46374 = G__46396;
i__45926_46375 = G__46397;
continue;
} else {
var G__46398 = cljs.core.next(seq__45922_46387__$1);
var G__46399 = null;
var G__46400 = (0);
var G__46401 = (0);
seq__45922_46372 = G__46398;
chunk__45924_46373 = G__46399;
count__45925_46374 = G__46400;
i__45926_46375 = G__46401;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46371);
}
}


var G__46402 = seq__45889_46365;
var G__46403 = chunk__45891_46366;
var G__46404 = count__45892_46367;
var G__46405 = (i__45893_46368 + (1));
seq__45889_46365 = G__46402;
chunk__45891_46366 = G__46403;
count__45892_46367 = G__46404;
i__45893_46368 = G__46405;
continue;
} else {
var G__46406 = seq__45889_46365;
var G__46407 = chunk__45891_46366;
var G__46408 = count__45892_46367;
var G__46409 = (i__45893_46368 + (1));
seq__45889_46365 = G__46406;
chunk__45891_46366 = G__46407;
count__45892_46367 = G__46408;
i__45893_46368 = G__46409;
continue;
}
} else {
var temp__5735__auto___46410 = cljs.core.seq(seq__45889_46365);
if(temp__5735__auto___46410){
var seq__45889_46411__$1 = temp__5735__auto___46410;
if(cljs.core.chunked_seq_QMARK_(seq__45889_46411__$1)){
var c__4556__auto___46412 = cljs.core.chunk_first(seq__45889_46411__$1);
var G__46413 = cljs.core.chunk_rest(seq__45889_46411__$1);
var G__46414 = c__4556__auto___46412;
var G__46415 = cljs.core.count(c__4556__auto___46412);
var G__46416 = (0);
seq__45889_46365 = G__46413;
chunk__45891_46366 = G__46414;
count__45892_46367 = G__46415;
i__45893_46368 = G__46416;
continue;
} else {
var child_struct_46417 = cljs.core.first(seq__45889_46411__$1);
if((!((child_struct_46417 == null)))){
if(typeof child_struct_46417 === 'string'){
var text_46418 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46418),child_struct_46417].join(''));
} else {
var children_46419 = shadow.dom.svg_node(child_struct_46417);
if(cljs.core.seq_QMARK_(children_46419)){
var seq__45934_46420 = cljs.core.seq(children_46419);
var chunk__45936_46421 = null;
var count__45937_46422 = (0);
var i__45938_46423 = (0);
while(true){
if((i__45938_46423 < count__45937_46422)){
var child_46424 = chunk__45936_46421.cljs$core$IIndexed$_nth$arity$2(null,i__45938_46423);
if(cljs.core.truth_(child_46424)){
node.appendChild(child_46424);


var G__46425 = seq__45934_46420;
var G__46426 = chunk__45936_46421;
var G__46427 = count__45937_46422;
var G__46428 = (i__45938_46423 + (1));
seq__45934_46420 = G__46425;
chunk__45936_46421 = G__46426;
count__45937_46422 = G__46427;
i__45938_46423 = G__46428;
continue;
} else {
var G__46429 = seq__45934_46420;
var G__46430 = chunk__45936_46421;
var G__46431 = count__45937_46422;
var G__46432 = (i__45938_46423 + (1));
seq__45934_46420 = G__46429;
chunk__45936_46421 = G__46430;
count__45937_46422 = G__46431;
i__45938_46423 = G__46432;
continue;
}
} else {
var temp__5735__auto___46433__$1 = cljs.core.seq(seq__45934_46420);
if(temp__5735__auto___46433__$1){
var seq__45934_46434__$1 = temp__5735__auto___46433__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45934_46434__$1)){
var c__4556__auto___46435 = cljs.core.chunk_first(seq__45934_46434__$1);
var G__46436 = cljs.core.chunk_rest(seq__45934_46434__$1);
var G__46437 = c__4556__auto___46435;
var G__46438 = cljs.core.count(c__4556__auto___46435);
var G__46439 = (0);
seq__45934_46420 = G__46436;
chunk__45936_46421 = G__46437;
count__45937_46422 = G__46438;
i__45938_46423 = G__46439;
continue;
} else {
var child_46440 = cljs.core.first(seq__45934_46434__$1);
if(cljs.core.truth_(child_46440)){
node.appendChild(child_46440);


var G__46441 = cljs.core.next(seq__45934_46434__$1);
var G__46442 = null;
var G__46443 = (0);
var G__46444 = (0);
seq__45934_46420 = G__46441;
chunk__45936_46421 = G__46442;
count__45937_46422 = G__46443;
i__45938_46423 = G__46444;
continue;
} else {
var G__46446 = cljs.core.next(seq__45934_46434__$1);
var G__46447 = null;
var G__46448 = (0);
var G__46449 = (0);
seq__45934_46420 = G__46446;
chunk__45936_46421 = G__46447;
count__45937_46422 = G__46448;
i__45938_46423 = G__46449;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46419);
}
}


var G__46450 = cljs.core.next(seq__45889_46411__$1);
var G__46451 = null;
var G__46452 = (0);
var G__46453 = (0);
seq__45889_46365 = G__46450;
chunk__45891_46366 = G__46451;
count__45892_46367 = G__46452;
i__45893_46368 = G__46453;
continue;
} else {
var G__46455 = cljs.core.next(seq__45889_46411__$1);
var G__46456 = null;
var G__46457 = (0);
var G__46458 = (0);
seq__45889_46365 = G__46455;
chunk__45891_46366 = G__46456;
count__45892_46367 = G__46457;
i__45893_46368 = G__46458;
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
var len__4736__auto___46459 = arguments.length;
var i__4737__auto___46460 = (0);
while(true){
if((i__4737__auto___46460 < len__4736__auto___46459)){
args__4742__auto__.push((arguments[i__4737__auto___46460]));

var G__46462 = (i__4737__auto___46460 + (1));
i__4737__auto___46460 = G__46462;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45947){
var G__45948 = cljs.core.first(seq45947);
var seq45947__$1 = cljs.core.next(seq45947);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45948,seq45947__$1);
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
var G__45950 = arguments.length;
switch (G__45950) {
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
var c__42862__auto___46469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_45955){
var state_val_45956 = (state_45955[(1)]);
if((state_val_45956 === (1))){
var state_45955__$1 = state_45955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45955__$1,(2),once_or_cleanup);
} else {
if((state_val_45956 === (2))){
var inst_45952 = (state_45955[(2)]);
var inst_45953 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45955__$1 = (function (){var statearr_45957 = state_45955;
(statearr_45957[(7)] = inst_45952);

return statearr_45957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45955__$1,inst_45953);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42711__auto__ = null;
var shadow$dom$state_machine__42711__auto____0 = (function (){
var statearr_45958 = [null,null,null,null,null,null,null,null];
(statearr_45958[(0)] = shadow$dom$state_machine__42711__auto__);

(statearr_45958[(1)] = (1));

return statearr_45958;
});
var shadow$dom$state_machine__42711__auto____1 = (function (state_45955){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45955);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45960){var ex__42714__auto__ = e45960;
var statearr_45962_46475 = state_45955;
(statearr_45962_46475[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45955[(4)]))){
var statearr_45963_46476 = state_45955;
(statearr_45963_46476[(1)] = cljs.core.first((state_45955[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46477 = state_45955;
state_45955 = G__46477;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
shadow$dom$state_machine__42711__auto__ = function(state_45955){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42711__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42711__auto____1.call(this,state_45955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42711__auto____0;
shadow$dom$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42711__auto____1;
return shadow$dom$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_45966 = f__42863__auto__();
(statearr_45966[(6)] = c__42862__auto___46469);

return statearr_45966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
