goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_38195 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_38195(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_38196 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_38196(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__37153 = coll;
var G__37154 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__37153,G__37154) : shadow.dom.lazy_native_coll_seq.call(null,G__37153,G__37154));
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
var G__37180 = arguments.length;
switch (G__37180) {
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
var G__37189 = arguments.length;
switch (G__37189) {
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
var G__37201 = arguments.length;
switch (G__37201) {
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
var G__37217 = arguments.length;
switch (G__37217) {
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
var G__37225 = arguments.length;
switch (G__37225) {
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
var G__37241 = arguments.length;
switch (G__37241) {
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
}catch (e37256){if((e37256 instanceof Object)){
var e = e37256;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37256;

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
var seq__37264 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37265 = null;
var count__37266 = (0);
var i__37267 = (0);
while(true){
if((i__37267 < count__37266)){
var el = chunk__37265.cljs$core$IIndexed$_nth$arity$2(null,i__37267);
var handler_38211__$1 = ((function (seq__37264,chunk__37265,count__37266,i__37267,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37264,chunk__37265,count__37266,i__37267,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38211__$1);


var G__38212 = seq__37264;
var G__38213 = chunk__37265;
var G__38214 = count__37266;
var G__38215 = (i__37267 + (1));
seq__37264 = G__38212;
chunk__37265 = G__38213;
count__37266 = G__38214;
i__37267 = G__38215;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37264);
if(temp__5735__auto__){
var seq__37264__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37264__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37264__$1);
var G__38220 = cljs.core.chunk_rest(seq__37264__$1);
var G__38221 = c__4556__auto__;
var G__38222 = cljs.core.count(c__4556__auto__);
var G__38223 = (0);
seq__37264 = G__38220;
chunk__37265 = G__38221;
count__37266 = G__38222;
i__37267 = G__38223;
continue;
} else {
var el = cljs.core.first(seq__37264__$1);
var handler_38224__$1 = ((function (seq__37264,chunk__37265,count__37266,i__37267,el,seq__37264__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37264,chunk__37265,count__37266,i__37267,el,seq__37264__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_38224__$1);


var G__38225 = cljs.core.next(seq__37264__$1);
var G__38226 = null;
var G__38227 = (0);
var G__38228 = (0);
seq__37264 = G__38225;
chunk__37265 = G__38226;
count__37266 = G__38227;
i__37267 = G__38228;
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
var G__37296 = arguments.length;
switch (G__37296) {
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
var seq__37306 = cljs.core.seq(events);
var chunk__37307 = null;
var count__37308 = (0);
var i__37309 = (0);
while(true){
if((i__37309 < count__37308)){
var vec__37323 = chunk__37307.cljs$core$IIndexed$_nth$arity$2(null,i__37309);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37323,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38234 = seq__37306;
var G__38235 = chunk__37307;
var G__38236 = count__37308;
var G__38237 = (i__37309 + (1));
seq__37306 = G__38234;
chunk__37307 = G__38235;
count__37308 = G__38236;
i__37309 = G__38237;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37306);
if(temp__5735__auto__){
var seq__37306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37306__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37306__$1);
var G__38238 = cljs.core.chunk_rest(seq__37306__$1);
var G__38239 = c__4556__auto__;
var G__38240 = cljs.core.count(c__4556__auto__);
var G__38241 = (0);
seq__37306 = G__38238;
chunk__37307 = G__38239;
count__37308 = G__38240;
i__37309 = G__38241;
continue;
} else {
var vec__37329 = cljs.core.first(seq__37306__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37329,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38242 = cljs.core.next(seq__37306__$1);
var G__38243 = null;
var G__38244 = (0);
var G__38245 = (0);
seq__37306 = G__38242;
chunk__37307 = G__38243;
count__37308 = G__38244;
i__37309 = G__38245;
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
var seq__37335 = cljs.core.seq(styles);
var chunk__37336 = null;
var count__37337 = (0);
var i__37338 = (0);
while(true){
if((i__37338 < count__37337)){
var vec__37353 = chunk__37336.cljs$core$IIndexed$_nth$arity$2(null,i__37338);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38246 = seq__37335;
var G__38247 = chunk__37336;
var G__38248 = count__37337;
var G__38249 = (i__37338 + (1));
seq__37335 = G__38246;
chunk__37336 = G__38247;
count__37337 = G__38248;
i__37338 = G__38249;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37335);
if(temp__5735__auto__){
var seq__37335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37335__$1);
var G__38252 = cljs.core.chunk_rest(seq__37335__$1);
var G__38253 = c__4556__auto__;
var G__38254 = cljs.core.count(c__4556__auto__);
var G__38255 = (0);
seq__37335 = G__38252;
chunk__37336 = G__38253;
count__37337 = G__38254;
i__37338 = G__38255;
continue;
} else {
var vec__37362 = cljs.core.first(seq__37335__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__38256 = cljs.core.next(seq__37335__$1);
var G__38257 = null;
var G__38258 = (0);
var G__38259 = (0);
seq__37335 = G__38256;
chunk__37336 = G__38257;
count__37337 = G__38258;
i__37338 = G__38259;
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
var G__37369_38260 = key;
var G__37369_38261__$1 = (((G__37369_38260 instanceof cljs.core.Keyword))?G__37369_38260.fqn:null);
switch (G__37369_38261__$1) {
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
var ks_38264 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_38264,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_38264,"aria-");
}
})())){
el.setAttribute(ks_38264,value);
} else {
(el[ks_38264] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37409){
var map__37410 = p__37409;
var map__37410__$1 = (((((!((map__37410 == null))))?(((((map__37410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37410):map__37410);
var props = map__37410__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37410__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37418 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37418,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37418,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37418,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37422 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37422,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37422;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37438 = arguments.length;
switch (G__37438) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37451){
var vec__37452 = p__37451;
var seq__37453 = cljs.core.seq(vec__37452);
var first__37454 = cljs.core.first(seq__37453);
var seq__37453__$1 = cljs.core.next(seq__37453);
var nn = first__37454;
var first__37454__$1 = cljs.core.first(seq__37453__$1);
var seq__37453__$2 = cljs.core.next(seq__37453__$1);
var np = first__37454__$1;
var nc = seq__37453__$2;
var node = vec__37452;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37459 = nn;
var G__37460 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37459,G__37460) : create_fn.call(null,G__37459,G__37460));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37461 = nn;
var G__37462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37461,G__37462) : create_fn.call(null,G__37461,G__37462));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37465 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37465,(1),null);
var seq__37469_38269 = cljs.core.seq(node_children);
var chunk__37473_38270 = null;
var count__37474_38271 = (0);
var i__37475_38272 = (0);
while(true){
if((i__37475_38272 < count__37474_38271)){
var child_struct_38273 = chunk__37473_38270.cljs$core$IIndexed$_nth$arity$2(null,i__37475_38272);
var children_38274 = shadow.dom.dom_node(child_struct_38273);
if(cljs.core.seq_QMARK_(children_38274)){
var seq__37517_38275 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38274));
var chunk__37519_38276 = null;
var count__37520_38277 = (0);
var i__37521_38278 = (0);
while(true){
if((i__37521_38278 < count__37520_38277)){
var child_38279 = chunk__37519_38276.cljs$core$IIndexed$_nth$arity$2(null,i__37521_38278);
if(cljs.core.truth_(child_38279)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38279);


var G__38281 = seq__37517_38275;
var G__38282 = chunk__37519_38276;
var G__38283 = count__37520_38277;
var G__38284 = (i__37521_38278 + (1));
seq__37517_38275 = G__38281;
chunk__37519_38276 = G__38282;
count__37520_38277 = G__38283;
i__37521_38278 = G__38284;
continue;
} else {
var G__38285 = seq__37517_38275;
var G__38286 = chunk__37519_38276;
var G__38287 = count__37520_38277;
var G__38288 = (i__37521_38278 + (1));
seq__37517_38275 = G__38285;
chunk__37519_38276 = G__38286;
count__37520_38277 = G__38287;
i__37521_38278 = G__38288;
continue;
}
} else {
var temp__5735__auto___38289 = cljs.core.seq(seq__37517_38275);
if(temp__5735__auto___38289){
var seq__37517_38290__$1 = temp__5735__auto___38289;
if(cljs.core.chunked_seq_QMARK_(seq__37517_38290__$1)){
var c__4556__auto___38291 = cljs.core.chunk_first(seq__37517_38290__$1);
var G__38292 = cljs.core.chunk_rest(seq__37517_38290__$1);
var G__38293 = c__4556__auto___38291;
var G__38294 = cljs.core.count(c__4556__auto___38291);
var G__38295 = (0);
seq__37517_38275 = G__38292;
chunk__37519_38276 = G__38293;
count__37520_38277 = G__38294;
i__37521_38278 = G__38295;
continue;
} else {
var child_38297 = cljs.core.first(seq__37517_38290__$1);
if(cljs.core.truth_(child_38297)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38297);


var G__38298 = cljs.core.next(seq__37517_38290__$1);
var G__38299 = null;
var G__38300 = (0);
var G__38301 = (0);
seq__37517_38275 = G__38298;
chunk__37519_38276 = G__38299;
count__37520_38277 = G__38300;
i__37521_38278 = G__38301;
continue;
} else {
var G__38302 = cljs.core.next(seq__37517_38290__$1);
var G__38303 = null;
var G__38304 = (0);
var G__38305 = (0);
seq__37517_38275 = G__38302;
chunk__37519_38276 = G__38303;
count__37520_38277 = G__38304;
i__37521_38278 = G__38305;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38274);
}


var G__38306 = seq__37469_38269;
var G__38307 = chunk__37473_38270;
var G__38308 = count__37474_38271;
var G__38309 = (i__37475_38272 + (1));
seq__37469_38269 = G__38306;
chunk__37473_38270 = G__38307;
count__37474_38271 = G__38308;
i__37475_38272 = G__38309;
continue;
} else {
var temp__5735__auto___38310 = cljs.core.seq(seq__37469_38269);
if(temp__5735__auto___38310){
var seq__37469_38311__$1 = temp__5735__auto___38310;
if(cljs.core.chunked_seq_QMARK_(seq__37469_38311__$1)){
var c__4556__auto___38312 = cljs.core.chunk_first(seq__37469_38311__$1);
var G__38313 = cljs.core.chunk_rest(seq__37469_38311__$1);
var G__38314 = c__4556__auto___38312;
var G__38315 = cljs.core.count(c__4556__auto___38312);
var G__38316 = (0);
seq__37469_38269 = G__38313;
chunk__37473_38270 = G__38314;
count__37474_38271 = G__38315;
i__37475_38272 = G__38316;
continue;
} else {
var child_struct_38317 = cljs.core.first(seq__37469_38311__$1);
var children_38318 = shadow.dom.dom_node(child_struct_38317);
if(cljs.core.seq_QMARK_(children_38318)){
var seq__37539_38319 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38318));
var chunk__37541_38320 = null;
var count__37542_38321 = (0);
var i__37543_38322 = (0);
while(true){
if((i__37543_38322 < count__37542_38321)){
var child_38323 = chunk__37541_38320.cljs$core$IIndexed$_nth$arity$2(null,i__37543_38322);
if(cljs.core.truth_(child_38323)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38323);


var G__38324 = seq__37539_38319;
var G__38325 = chunk__37541_38320;
var G__38326 = count__37542_38321;
var G__38327 = (i__37543_38322 + (1));
seq__37539_38319 = G__38324;
chunk__37541_38320 = G__38325;
count__37542_38321 = G__38326;
i__37543_38322 = G__38327;
continue;
} else {
var G__38328 = seq__37539_38319;
var G__38329 = chunk__37541_38320;
var G__38330 = count__37542_38321;
var G__38331 = (i__37543_38322 + (1));
seq__37539_38319 = G__38328;
chunk__37541_38320 = G__38329;
count__37542_38321 = G__38330;
i__37543_38322 = G__38331;
continue;
}
} else {
var temp__5735__auto___38332__$1 = cljs.core.seq(seq__37539_38319);
if(temp__5735__auto___38332__$1){
var seq__37539_38333__$1 = temp__5735__auto___38332__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37539_38333__$1)){
var c__4556__auto___38334 = cljs.core.chunk_first(seq__37539_38333__$1);
var G__38335 = cljs.core.chunk_rest(seq__37539_38333__$1);
var G__38336 = c__4556__auto___38334;
var G__38337 = cljs.core.count(c__4556__auto___38334);
var G__38338 = (0);
seq__37539_38319 = G__38335;
chunk__37541_38320 = G__38336;
count__37542_38321 = G__38337;
i__37543_38322 = G__38338;
continue;
} else {
var child_38339 = cljs.core.first(seq__37539_38333__$1);
if(cljs.core.truth_(child_38339)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38339);


var G__38340 = cljs.core.next(seq__37539_38333__$1);
var G__38341 = null;
var G__38342 = (0);
var G__38343 = (0);
seq__37539_38319 = G__38340;
chunk__37541_38320 = G__38341;
count__37542_38321 = G__38342;
i__37543_38322 = G__38343;
continue;
} else {
var G__38344 = cljs.core.next(seq__37539_38333__$1);
var G__38345 = null;
var G__38346 = (0);
var G__38347 = (0);
seq__37539_38319 = G__38344;
chunk__37541_38320 = G__38345;
count__37542_38321 = G__38346;
i__37543_38322 = G__38347;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38318);
}


var G__38348 = cljs.core.next(seq__37469_38311__$1);
var G__38349 = null;
var G__38350 = (0);
var G__38351 = (0);
seq__37469_38269 = G__38348;
chunk__37473_38270 = G__38349;
count__37474_38271 = G__38350;
i__37475_38272 = G__38351;
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
var seq__37572 = cljs.core.seq(node);
var chunk__37573 = null;
var count__37574 = (0);
var i__37575 = (0);
while(true){
if((i__37575 < count__37574)){
var n = chunk__37573.cljs$core$IIndexed$_nth$arity$2(null,i__37575);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38362 = seq__37572;
var G__38363 = chunk__37573;
var G__38364 = count__37574;
var G__38365 = (i__37575 + (1));
seq__37572 = G__38362;
chunk__37573 = G__38363;
count__37574 = G__38364;
i__37575 = G__38365;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37572);
if(temp__5735__auto__){
var seq__37572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37572__$1);
var G__38366 = cljs.core.chunk_rest(seq__37572__$1);
var G__38367 = c__4556__auto__;
var G__38368 = cljs.core.count(c__4556__auto__);
var G__38369 = (0);
seq__37572 = G__38366;
chunk__37573 = G__38367;
count__37574 = G__38368;
i__37575 = G__38369;
continue;
} else {
var n = cljs.core.first(seq__37572__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38370 = cljs.core.next(seq__37572__$1);
var G__38371 = null;
var G__38372 = (0);
var G__38373 = (0);
seq__37572 = G__38370;
chunk__37573 = G__38371;
count__37574 = G__38372;
i__37575 = G__38373;
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
var G__37581 = arguments.length;
switch (G__37581) {
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
var G__37595 = arguments.length;
switch (G__37595) {
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
var G__37613 = arguments.length;
switch (G__37613) {
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
var len__4736__auto___38385 = arguments.length;
var i__4737__auto___38386 = (0);
while(true){
if((i__4737__auto___38386 < len__4736__auto___38385)){
args__4742__auto__.push((arguments[i__4737__auto___38386]));

var G__38387 = (i__4737__auto___38386 + (1));
i__4737__auto___38386 = G__38387;
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
var seq__37639_38388 = cljs.core.seq(nodes);
var chunk__37640_38389 = null;
var count__37641_38390 = (0);
var i__37642_38391 = (0);
while(true){
if((i__37642_38391 < count__37641_38390)){
var node_38392 = chunk__37640_38389.cljs$core$IIndexed$_nth$arity$2(null,i__37642_38391);
fragment.appendChild(shadow.dom._to_dom(node_38392));


var G__38393 = seq__37639_38388;
var G__38394 = chunk__37640_38389;
var G__38395 = count__37641_38390;
var G__38396 = (i__37642_38391 + (1));
seq__37639_38388 = G__38393;
chunk__37640_38389 = G__38394;
count__37641_38390 = G__38395;
i__37642_38391 = G__38396;
continue;
} else {
var temp__5735__auto___38397 = cljs.core.seq(seq__37639_38388);
if(temp__5735__auto___38397){
var seq__37639_38398__$1 = temp__5735__auto___38397;
if(cljs.core.chunked_seq_QMARK_(seq__37639_38398__$1)){
var c__4556__auto___38399 = cljs.core.chunk_first(seq__37639_38398__$1);
var G__38400 = cljs.core.chunk_rest(seq__37639_38398__$1);
var G__38401 = c__4556__auto___38399;
var G__38402 = cljs.core.count(c__4556__auto___38399);
var G__38403 = (0);
seq__37639_38388 = G__38400;
chunk__37640_38389 = G__38401;
count__37641_38390 = G__38402;
i__37642_38391 = G__38403;
continue;
} else {
var node_38404 = cljs.core.first(seq__37639_38398__$1);
fragment.appendChild(shadow.dom._to_dom(node_38404));


var G__38405 = cljs.core.next(seq__37639_38398__$1);
var G__38406 = null;
var G__38407 = (0);
var G__38408 = (0);
seq__37639_38388 = G__38405;
chunk__37640_38389 = G__38406;
count__37641_38390 = G__38407;
i__37642_38391 = G__38408;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37636){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37636));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37673_38412 = cljs.core.seq(scripts);
var chunk__37674_38413 = null;
var count__37675_38414 = (0);
var i__37676_38415 = (0);
while(true){
if((i__37676_38415 < count__37675_38414)){
var vec__37703_38416 = chunk__37674_38413.cljs$core$IIndexed$_nth$arity$2(null,i__37676_38415);
var script_tag_38417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703_38416,(0),null);
var script_body_38418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703_38416,(1),null);
eval(script_body_38418);


var G__38419 = seq__37673_38412;
var G__38420 = chunk__37674_38413;
var G__38421 = count__37675_38414;
var G__38422 = (i__37676_38415 + (1));
seq__37673_38412 = G__38419;
chunk__37674_38413 = G__38420;
count__37675_38414 = G__38421;
i__37676_38415 = G__38422;
continue;
} else {
var temp__5735__auto___38423 = cljs.core.seq(seq__37673_38412);
if(temp__5735__auto___38423){
var seq__37673_38424__$1 = temp__5735__auto___38423;
if(cljs.core.chunked_seq_QMARK_(seq__37673_38424__$1)){
var c__4556__auto___38425 = cljs.core.chunk_first(seq__37673_38424__$1);
var G__38426 = cljs.core.chunk_rest(seq__37673_38424__$1);
var G__38427 = c__4556__auto___38425;
var G__38428 = cljs.core.count(c__4556__auto___38425);
var G__38429 = (0);
seq__37673_38412 = G__38426;
chunk__37674_38413 = G__38427;
count__37675_38414 = G__38428;
i__37676_38415 = G__38429;
continue;
} else {
var vec__37706_38430 = cljs.core.first(seq__37673_38424__$1);
var script_tag_38431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706_38430,(0),null);
var script_body_38432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37706_38430,(1),null);
eval(script_body_38432);


var G__38433 = cljs.core.next(seq__37673_38424__$1);
var G__38434 = null;
var G__38435 = (0);
var G__38436 = (0);
seq__37673_38412 = G__38433;
chunk__37674_38413 = G__38434;
count__37675_38414 = G__38435;
i__37676_38415 = G__38436;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37712){
var vec__37713 = p__37712;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37713,(1),null);
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
var G__37718 = arguments.length;
switch (G__37718) {
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
var seq__37735 = cljs.core.seq(style_keys);
var chunk__37736 = null;
var count__37737 = (0);
var i__37738 = (0);
while(true){
if((i__37738 < count__37737)){
var it = chunk__37736.cljs$core$IIndexed$_nth$arity$2(null,i__37738);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38445 = seq__37735;
var G__38446 = chunk__37736;
var G__38447 = count__37737;
var G__38448 = (i__37738 + (1));
seq__37735 = G__38445;
chunk__37736 = G__38446;
count__37737 = G__38447;
i__37738 = G__38448;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37735);
if(temp__5735__auto__){
var seq__37735__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37735__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37735__$1);
var G__38449 = cljs.core.chunk_rest(seq__37735__$1);
var G__38450 = c__4556__auto__;
var G__38451 = cljs.core.count(c__4556__auto__);
var G__38452 = (0);
seq__37735 = G__38449;
chunk__37736 = G__38450;
count__37737 = G__38451;
i__37738 = G__38452;
continue;
} else {
var it = cljs.core.first(seq__37735__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38453 = cljs.core.next(seq__37735__$1);
var G__38454 = null;
var G__38455 = (0);
var G__38456 = (0);
seq__37735 = G__38453;
chunk__37736 = G__38454;
count__37737 = G__38455;
i__37738 = G__38456;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37750,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37768 = k37750;
var G__37768__$1 = (((G__37768 instanceof cljs.core.Keyword))?G__37768.fqn:null);
switch (G__37768__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37750,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37772){
var vec__37774 = p__37772;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37774,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37749){
var self__ = this;
var G__37749__$1 = this;
return (new cljs.core.RecordIter((0),G__37749__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37751,other37752){
var self__ = this;
var this37751__$1 = this;
return (((!((other37752 == null)))) && ((this37751__$1.constructor === other37752.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37751__$1.x,other37752.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37751__$1.y,other37752.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37751__$1.__extmap,other37752.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37749){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37791 = cljs.core.keyword_identical_QMARK_;
var expr__37792 = k__4388__auto__;
if(cljs.core.truth_((pred__37791.cljs$core$IFn$_invoke$arity$2 ? pred__37791.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37792) : pred__37791.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37792)))){
return (new shadow.dom.Coordinate(G__37749,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37791.cljs$core$IFn$_invoke$arity$2 ? pred__37791.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37792) : pred__37791.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37792)))){
return (new shadow.dom.Coordinate(self__.x,G__37749,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37749),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37749){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37749,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37764){
var extmap__4419__auto__ = (function (){var G__37804 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37764,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37804);
} else {
return G__37804;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37764),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37764),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k37824,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__37834 = k37824;
var G__37834__$1 = (((G__37834 instanceof cljs.core.Keyword))?G__37834.fqn:null);
switch (G__37834__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37824,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__37838){
var vec__37839 = p__37838;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37823){
var self__ = this;
var G__37823__$1 = this;
return (new cljs.core.RecordIter((0),G__37823__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37825,other37826){
var self__ = this;
var this37825__$1 = this;
return (((!((other37826 == null)))) && ((this37825__$1.constructor === other37826.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37825__$1.w,other37826.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37825__$1.h,other37826.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37825__$1.__extmap,other37826.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__37823){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__37880 = cljs.core.keyword_identical_QMARK_;
var expr__37881 = k__4388__auto__;
if(cljs.core.truth_((pred__37880.cljs$core$IFn$_invoke$arity$2 ? pred__37880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37881) : pred__37880.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37881)))){
return (new shadow.dom.Size(G__37823,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37880.cljs$core$IFn$_invoke$arity$2 ? pred__37880.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37881) : pred__37880.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37881)))){
return (new shadow.dom.Size(self__.w,G__37823,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__37823),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__37823){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37823,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37829){
var extmap__4419__auto__ = (function (){var G__37895 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37829,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37829)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37895);
} else {
return G__37895;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37829),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37829),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__38487 = (i + (1));
var G__38488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38487;
ret = G__38488;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37933){
var vec__37936 = p__37933;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37936,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37949 = arguments.length;
switch (G__37949) {
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
var G__38502 = ps;
var G__38503 = (i + (1));
el__$1 = G__38502;
i = G__38503;
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
var vec__37996 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37996,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__38004_38512 = cljs.core.seq(props);
var chunk__38005_38513 = null;
var count__38006_38514 = (0);
var i__38007_38515 = (0);
while(true){
if((i__38007_38515 < count__38006_38514)){
var vec__38021_38520 = chunk__38005_38513.cljs$core$IIndexed$_nth$arity$2(null,i__38007_38515);
var k_38521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_38520,(0),null);
var v_38522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021_38520,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_38521);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38521),v_38522);


var G__38523 = seq__38004_38512;
var G__38524 = chunk__38005_38513;
var G__38525 = count__38006_38514;
var G__38526 = (i__38007_38515 + (1));
seq__38004_38512 = G__38523;
chunk__38005_38513 = G__38524;
count__38006_38514 = G__38525;
i__38007_38515 = G__38526;
continue;
} else {
var temp__5735__auto___38527 = cljs.core.seq(seq__38004_38512);
if(temp__5735__auto___38527){
var seq__38004_38528__$1 = temp__5735__auto___38527;
if(cljs.core.chunked_seq_QMARK_(seq__38004_38528__$1)){
var c__4556__auto___38529 = cljs.core.chunk_first(seq__38004_38528__$1);
var G__38531 = cljs.core.chunk_rest(seq__38004_38528__$1);
var G__38532 = c__4556__auto___38529;
var G__38533 = cljs.core.count(c__4556__auto___38529);
var G__38534 = (0);
seq__38004_38512 = G__38531;
chunk__38005_38513 = G__38532;
count__38006_38514 = G__38533;
i__38007_38515 = G__38534;
continue;
} else {
var vec__38030_38535 = cljs.core.first(seq__38004_38528__$1);
var k_38536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38030_38535,(0),null);
var v_38537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38030_38535,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_38536);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38536),v_38537);


var G__38541 = cljs.core.next(seq__38004_38528__$1);
var G__38542 = null;
var G__38543 = (0);
var G__38544 = (0);
seq__38004_38512 = G__38541;
chunk__38005_38513 = G__38542;
count__38006_38514 = G__38543;
i__38007_38515 = G__38544;
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
var vec__38048 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38048,(1),null);
var seq__38052_38546 = cljs.core.seq(node_children);
var chunk__38054_38547 = null;
var count__38055_38548 = (0);
var i__38056_38549 = (0);
while(true){
if((i__38056_38549 < count__38055_38548)){
var child_struct_38550 = chunk__38054_38547.cljs$core$IIndexed$_nth$arity$2(null,i__38056_38549);
if((!((child_struct_38550 == null)))){
if(typeof child_struct_38550 === 'string'){
var text_38551 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38551),child_struct_38550].join(''));
} else {
var children_38552 = shadow.dom.svg_node(child_struct_38550);
if(cljs.core.seq_QMARK_(children_38552)){
var seq__38124_38554 = cljs.core.seq(children_38552);
var chunk__38126_38555 = null;
var count__38127_38556 = (0);
var i__38128_38557 = (0);
while(true){
if((i__38128_38557 < count__38127_38556)){
var child_38558 = chunk__38126_38555.cljs$core$IIndexed$_nth$arity$2(null,i__38128_38557);
if(cljs.core.truth_(child_38558)){
node.appendChild(child_38558);


var G__38559 = seq__38124_38554;
var G__38560 = chunk__38126_38555;
var G__38561 = count__38127_38556;
var G__38562 = (i__38128_38557 + (1));
seq__38124_38554 = G__38559;
chunk__38126_38555 = G__38560;
count__38127_38556 = G__38561;
i__38128_38557 = G__38562;
continue;
} else {
var G__38563 = seq__38124_38554;
var G__38564 = chunk__38126_38555;
var G__38565 = count__38127_38556;
var G__38566 = (i__38128_38557 + (1));
seq__38124_38554 = G__38563;
chunk__38126_38555 = G__38564;
count__38127_38556 = G__38565;
i__38128_38557 = G__38566;
continue;
}
} else {
var temp__5735__auto___38567 = cljs.core.seq(seq__38124_38554);
if(temp__5735__auto___38567){
var seq__38124_38568__$1 = temp__5735__auto___38567;
if(cljs.core.chunked_seq_QMARK_(seq__38124_38568__$1)){
var c__4556__auto___38569 = cljs.core.chunk_first(seq__38124_38568__$1);
var G__38570 = cljs.core.chunk_rest(seq__38124_38568__$1);
var G__38571 = c__4556__auto___38569;
var G__38572 = cljs.core.count(c__4556__auto___38569);
var G__38573 = (0);
seq__38124_38554 = G__38570;
chunk__38126_38555 = G__38571;
count__38127_38556 = G__38572;
i__38128_38557 = G__38573;
continue;
} else {
var child_38575 = cljs.core.first(seq__38124_38568__$1);
if(cljs.core.truth_(child_38575)){
node.appendChild(child_38575);


var G__38576 = cljs.core.next(seq__38124_38568__$1);
var G__38577 = null;
var G__38578 = (0);
var G__38579 = (0);
seq__38124_38554 = G__38576;
chunk__38126_38555 = G__38577;
count__38127_38556 = G__38578;
i__38128_38557 = G__38579;
continue;
} else {
var G__38583 = cljs.core.next(seq__38124_38568__$1);
var G__38584 = null;
var G__38585 = (0);
var G__38586 = (0);
seq__38124_38554 = G__38583;
chunk__38126_38555 = G__38584;
count__38127_38556 = G__38585;
i__38128_38557 = G__38586;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38552);
}
}


var G__38587 = seq__38052_38546;
var G__38588 = chunk__38054_38547;
var G__38589 = count__38055_38548;
var G__38590 = (i__38056_38549 + (1));
seq__38052_38546 = G__38587;
chunk__38054_38547 = G__38588;
count__38055_38548 = G__38589;
i__38056_38549 = G__38590;
continue;
} else {
var G__38591 = seq__38052_38546;
var G__38592 = chunk__38054_38547;
var G__38593 = count__38055_38548;
var G__38594 = (i__38056_38549 + (1));
seq__38052_38546 = G__38591;
chunk__38054_38547 = G__38592;
count__38055_38548 = G__38593;
i__38056_38549 = G__38594;
continue;
}
} else {
var temp__5735__auto___38595 = cljs.core.seq(seq__38052_38546);
if(temp__5735__auto___38595){
var seq__38052_38597__$1 = temp__5735__auto___38595;
if(cljs.core.chunked_seq_QMARK_(seq__38052_38597__$1)){
var c__4556__auto___38601 = cljs.core.chunk_first(seq__38052_38597__$1);
var G__38602 = cljs.core.chunk_rest(seq__38052_38597__$1);
var G__38603 = c__4556__auto___38601;
var G__38604 = cljs.core.count(c__4556__auto___38601);
var G__38605 = (0);
seq__38052_38546 = G__38602;
chunk__38054_38547 = G__38603;
count__38055_38548 = G__38604;
i__38056_38549 = G__38605;
continue;
} else {
var child_struct_38610 = cljs.core.first(seq__38052_38597__$1);
if((!((child_struct_38610 == null)))){
if(typeof child_struct_38610 === 'string'){
var text_38612 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38612),child_struct_38610].join(''));
} else {
var children_38613 = shadow.dom.svg_node(child_struct_38610);
if(cljs.core.seq_QMARK_(children_38613)){
var seq__38149_38614 = cljs.core.seq(children_38613);
var chunk__38151_38615 = null;
var count__38152_38616 = (0);
var i__38153_38617 = (0);
while(true){
if((i__38153_38617 < count__38152_38616)){
var child_38618 = chunk__38151_38615.cljs$core$IIndexed$_nth$arity$2(null,i__38153_38617);
if(cljs.core.truth_(child_38618)){
node.appendChild(child_38618);


var G__38619 = seq__38149_38614;
var G__38620 = chunk__38151_38615;
var G__38621 = count__38152_38616;
var G__38622 = (i__38153_38617 + (1));
seq__38149_38614 = G__38619;
chunk__38151_38615 = G__38620;
count__38152_38616 = G__38621;
i__38153_38617 = G__38622;
continue;
} else {
var G__38623 = seq__38149_38614;
var G__38624 = chunk__38151_38615;
var G__38625 = count__38152_38616;
var G__38626 = (i__38153_38617 + (1));
seq__38149_38614 = G__38623;
chunk__38151_38615 = G__38624;
count__38152_38616 = G__38625;
i__38153_38617 = G__38626;
continue;
}
} else {
var temp__5735__auto___38627__$1 = cljs.core.seq(seq__38149_38614);
if(temp__5735__auto___38627__$1){
var seq__38149_38628__$1 = temp__5735__auto___38627__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38149_38628__$1)){
var c__4556__auto___38629 = cljs.core.chunk_first(seq__38149_38628__$1);
var G__38634 = cljs.core.chunk_rest(seq__38149_38628__$1);
var G__38635 = c__4556__auto___38629;
var G__38636 = cljs.core.count(c__4556__auto___38629);
var G__38637 = (0);
seq__38149_38614 = G__38634;
chunk__38151_38615 = G__38635;
count__38152_38616 = G__38636;
i__38153_38617 = G__38637;
continue;
} else {
var child_38639 = cljs.core.first(seq__38149_38628__$1);
if(cljs.core.truth_(child_38639)){
node.appendChild(child_38639);


var G__38640 = cljs.core.next(seq__38149_38628__$1);
var G__38641 = null;
var G__38642 = (0);
var G__38643 = (0);
seq__38149_38614 = G__38640;
chunk__38151_38615 = G__38641;
count__38152_38616 = G__38642;
i__38153_38617 = G__38643;
continue;
} else {
var G__38644 = cljs.core.next(seq__38149_38628__$1);
var G__38645 = null;
var G__38646 = (0);
var G__38647 = (0);
seq__38149_38614 = G__38644;
chunk__38151_38615 = G__38645;
count__38152_38616 = G__38646;
i__38153_38617 = G__38647;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38613);
}
}


var G__38650 = cljs.core.next(seq__38052_38597__$1);
var G__38651 = null;
var G__38652 = (0);
var G__38653 = (0);
seq__38052_38546 = G__38650;
chunk__38054_38547 = G__38651;
count__38055_38548 = G__38652;
i__38056_38549 = G__38653;
continue;
} else {
var G__38654 = cljs.core.next(seq__38052_38597__$1);
var G__38655 = null;
var G__38656 = (0);
var G__38657 = (0);
seq__38052_38546 = G__38654;
chunk__38054_38547 = G__38655;
count__38055_38548 = G__38656;
i__38056_38549 = G__38657;
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
var len__4736__auto___38664 = arguments.length;
var i__4737__auto___38665 = (0);
while(true){
if((i__4737__auto___38665 < len__4736__auto___38664)){
args__4742__auto__.push((arguments[i__4737__auto___38665]));

var G__38666 = (i__4737__auto___38665 + (1));
i__4737__auto___38665 = G__38666;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq38166){
var G__38167 = cljs.core.first(seq38166);
var seq38166__$1 = cljs.core.next(seq38166);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38167,seq38166__$1);
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
var G__38179 = arguments.length;
switch (G__38179) {
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
var c__27543__auto___38681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_38187){
var state_val_38188 = (state_38187[(1)]);
if((state_val_38188 === (1))){
var state_38187__$1 = state_38187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38187__$1,(2),once_or_cleanup);
} else {
if((state_val_38188 === (2))){
var inst_38184 = (state_38187[(2)]);
var inst_38185 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38187__$1 = (function (){var statearr_38189 = state_38187;
(statearr_38189[(7)] = inst_38184);

return statearr_38189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38187__$1,inst_38185);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__27459__auto__ = null;
var shadow$dom$state_machine__27459__auto____0 = (function (){
var statearr_38190 = [null,null,null,null,null,null,null,null];
(statearr_38190[(0)] = shadow$dom$state_machine__27459__auto__);

(statearr_38190[(1)] = (1));

return statearr_38190;
});
var shadow$dom$state_machine__27459__auto____1 = (function (state_38187){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_38187);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e38191){var ex__27462__auto__ = e38191;
var statearr_38192_38683 = state_38187;
(statearr_38192_38683[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_38187[(4)]))){
var statearr_38193_38684 = state_38187;
(statearr_38193_38684[(1)] = cljs.core.first((state_38187[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38685 = state_38187;
state_38187 = G__38685;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
shadow$dom$state_machine__27459__auto__ = function(state_38187){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__27459__auto____0.call(this);
case 1:
return shadow$dom$state_machine__27459__auto____1.call(this,state_38187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__27459__auto____0;
shadow$dom$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__27459__auto____1;
return shadow$dom$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_38194 = f__27544__auto__();
(statearr_38194[(6)] = c__27543__auto___38681);

return statearr_38194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
