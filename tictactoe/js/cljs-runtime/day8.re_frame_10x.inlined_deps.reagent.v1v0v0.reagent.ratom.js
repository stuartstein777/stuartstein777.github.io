goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching');
goog.require('clojure.set');
goog.require('goog.object');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$reactive_QMARK_(){
return (!((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$running(){
return (cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(x);
if((len === day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(y))){
var i = (0);
while(true){
var or__4126__auto__ = (i === len);
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__31025 = (i + (1));
i = G__31025;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__30754 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__30755 = obj;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__30755);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__30754);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation + (1))));


var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5739__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto__ == null)){
return null;
} else {
var r = temp__5739__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv((function (p1__30772_SHARP_,p2__30773_SHARP_,p3__30774_SHARP_){
var G__30777 = p1__30772_SHARP_;
G__30777.push(p2__30773_SHARP_);

G__30777.push(p3__30774_SHARP_);

return G__30777;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_31028 = (a[i]);
var f_31029 = (a[(i + (1))]);
(f_31029.cljs$core$IFn$_invoke$arity$4 ? f_31029.cljs$core$IFn$_invoke$arity$4(k_31028,this$,old,new$) : f_31029.call(null,k_31028,this$,old,new$));

var G__31030 = ((2) + i);
i = G__31030;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write(writer,["#object[day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__30781 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__30782 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__30782);

try{return v;
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__30781);
}})(),writer,opts);

return cljs.core._write(writer,"]");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue == null)){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = []);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.schedule();
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue.push(r);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$atom(var_args){
var G__30813 = arguments.length;
switch (G__30813) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___31055 = arguments.length;
var i__4737__auto___31056 = (0);
while(true){
if((i__4737__auto___31056 < len__4736__auto___31055)){
args_arr__4757__auto__.push((arguments[i__4737__auto___31056]));

var G__31057 = (i__4737__auto___31056 + (1));
i__4737__auto___31056 = G__31057;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,null,null,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__30814){
var map__30815 = p__30814;
var map__30815__$1 = (((((!((map__30815 == null))))?(((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30815):map__30815);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30815__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq30811){
var G__30812 = cljs.core.first(seq30811);
var seq30811__$1 = cljs.core.next(seq30811);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30812,seq30811__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__30820 = f;
var G__30821 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__30822 = (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __31064 = o.reagReactionCache;
var __31065__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__31064,k);
(o.reagReactionCache = __31065__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});
return (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__30820,G__30821,G__30822) : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__30820,G__30821,G__30822));
})();
var v = cljs.core._deref(r__$1);
(o.reagReactionCache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"f","f",-1597136552),self__.f], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__30825 = (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});
var G__30826 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__30827 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__30825,G__30826,G__30827) : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__30825,G__30826,G__30827));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31081 = arguments.length;
var i__4737__auto___31082 = (0);
while(true){
if((i__4737__auto___31082 < len__4736__auto___31081)){
args__4742__auto__.push((arguments[i__4737__auto___31082]));

var G__31083 = (i__4737__auto___31082 + (1));
i__4737__auto___31082 = G__31083;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq30828){
var G__30829 = cljs.core.first(seq30828);
var seq30828__$1 = cljs.core.next(seq30828);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30829,seq30828__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$track_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31086 = arguments.length;
var i__4737__auto___31087 = (0);
while(true){
if((i__4737__auto___31087 < len__4736__auto___31086)){
args__4742__auto__.push((arguments[i__4737__auto___31087]));

var G__31088 = (i__4737__auto___31087 + (1));
i__4737__auto___31087 = G__31088;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq30830){
var G__30831 = cljs.core.first(seq30830);
var seq30830__$1 = cljs.core.next(seq30830);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30831,seq30830__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__30842 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__30843 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__30843);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__30842);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30848 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__30848) : f.call(null,G__30848));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30849 = a__$1._peek();
var G__30850 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__30849,G__30850) : f.call(null,G__30849,G__30850));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30851 = a__$1._peek();
var G__30852 = x;
var G__30853 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__30851,G__30852,G__30853) : f.call(null,G__30851,G__30852,G__30853));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
}):(function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
}));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$cursor(src,path){
if((function (){var or__4126__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))," while attempting to get path: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_destroy(v){
var temp__5739__auto__ = v.destroy;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_values(key){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5737__auto__ == null)){
return [];
} else {
var c = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_31118 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_31118(this$);
}
});

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_31119 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_31119(this$,f);
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_31123 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_31123(this$);
}
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__30888 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__30889 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__30889);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__30888);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
(self__.watching = derefed);

var seq__30891_31131 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__30892_31132 = null;
var count__30893_31133 = (0);
var i__30894_31134 = (0);
while(true){
if((i__30894_31134 < count__30893_31133)){
var w_31135 = chunk__30892_31132.cljs$core$IIndexed$_nth$arity$2(null,i__30894_31134);
cljs.core._add_watch(w_31135,this$,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__31136 = seq__30891_31131;
var G__31137 = chunk__30892_31132;
var G__31138 = count__30893_31133;
var G__31139 = (i__30894_31134 + (1));
seq__30891_31131 = G__31136;
chunk__30892_31132 = G__31137;
count__30893_31133 = G__31138;
i__30894_31134 = G__31139;
continue;
} else {
var temp__5735__auto___31140 = cljs.core.seq(seq__30891_31131);
if(temp__5735__auto___31140){
var seq__30891_31141__$1 = temp__5735__auto___31140;
if(cljs.core.chunked_seq_QMARK_(seq__30891_31141__$1)){
var c__4556__auto___31142 = cljs.core.chunk_first(seq__30891_31141__$1);
var G__31143 = cljs.core.chunk_rest(seq__30891_31141__$1);
var G__31144 = c__4556__auto___31142;
var G__31145 = cljs.core.count(c__4556__auto___31142);
var G__31146 = (0);
seq__30891_31131 = G__31143;
chunk__30892_31132 = G__31144;
count__30893_31133 = G__31145;
i__30894_31134 = G__31146;
continue;
} else {
var w_31147 = cljs.core.first(seq__30891_31141__$1);
cljs.core._add_watch(w_31147,this$,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__31148 = cljs.core.next(seq__30891_31141__$1);
var G__31149 = null;
var G__31150 = (0);
var G__31151 = (0);
seq__30891_31131 = G__31148;
chunk__30892_31132 = G__31149;
count__30893_31133 = G__31150;
i__30894_31134 = G__31151;
continue;
}
} else {
}
}
break;
}

var seq__30895 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__30896 = null;
var count__30897 = (0);
var i__30898 = (0);
while(true){
if((i__30898 < count__30897)){
var w = chunk__30896.cljs$core$IIndexed$_nth$arity$2(null,i__30898);
cljs.core._remove_watch(w,this$);


var G__31160 = seq__30895;
var G__31161 = chunk__30896;
var G__31162 = count__30897;
var G__31163 = (i__30898 + (1));
seq__30895 = G__31160;
chunk__30896 = G__31161;
count__30897 = G__31162;
i__30898 = G__31163;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30895);
if(temp__5735__auto__){
var seq__30895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30895__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30895__$1);
var G__31164 = cljs.core.chunk_rest(seq__30895__$1);
var G__31165 = c__4556__auto__;
var G__31166 = cljs.core.count(c__4556__auto__);
var G__31167 = (0);
seq__30895 = G__31164;
chunk__30896 = G__31165;
count__30897 = G__31166;
i__30898 = G__31167;
continue;
} else {
var w = cljs.core.first(seq__30895__$1);
cljs.core._remove_watch(w,this$);


var G__31168 = cljs.core.next(seq__30895__$1);
var G__31169 = null;
var G__31170 = (0);
var G__31171 = (0);
seq__30895 = G__31168;
chunk__30896 = G__31169;
count__30897 = G__31170;
i__30898 = G__31171;
continue;
}
} else {
return null;
}
}
break;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e30902){var e = e30902;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__30903){
var self__ = this;
var map__30904 = p__30903;
var map__30904__$1 = (((((!((map__30904 == null))))?(((((map__30904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30904):map__30904);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30904__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__30906_31178 = cljs.core.seq(cljs.core.set(wg));
var chunk__30907_31179 = null;
var count__30908_31180 = (0);
var i__30909_31181 = (0);
while(true){
if((i__30909_31181 < count__30908_31180)){
var w_31185 = chunk__30907_31179.cljs$core$IIndexed$_nth$arity$2(null,i__30909_31181);
cljs.core._remove_watch(w_31185,this$__$1);


var G__31186 = seq__30906_31178;
var G__31187 = chunk__30907_31179;
var G__31188 = count__30908_31180;
var G__31189 = (i__30909_31181 + (1));
seq__30906_31178 = G__31186;
chunk__30907_31179 = G__31187;
count__30908_31180 = G__31188;
i__30909_31181 = G__31189;
continue;
} else {
var temp__5735__auto___31191 = cljs.core.seq(seq__30906_31178);
if(temp__5735__auto___31191){
var seq__30906_31192__$1 = temp__5735__auto___31191;
if(cljs.core.chunked_seq_QMARK_(seq__30906_31192__$1)){
var c__4556__auto___31195 = cljs.core.chunk_first(seq__30906_31192__$1);
var G__31196 = cljs.core.chunk_rest(seq__30906_31192__$1);
var G__31197 = c__4556__auto___31195;
var G__31198 = cljs.core.count(c__4556__auto___31195);
var G__31199 = (0);
seq__30906_31178 = G__31196;
chunk__30907_31179 = G__31197;
count__30908_31180 = G__31198;
i__30909_31181 = G__31199;
continue;
} else {
var w_31201 = cljs.core.first(seq__30906_31192__$1);
cljs.core._remove_watch(w_31201,this$__$1);


var G__31202 = cljs.core.next(seq__30906_31192__$1);
var G__31203 = null;
var G__31204 = (0);
var G__31205 = (0);
seq__30906_31178 = G__31202;
chunk__30907_31179 = G__31203;
count__30908_31180 = G__31204;
i__30909_31181 = G__31205;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5739__auto__ = this$__$1.on_dispose_arr;
if((temp__5739__auto__ == null)){
return null;
} else {
var a = temp__5739__auto__;
var n__4613__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4613__auto__)){
var fexpr__30913_31210 = (a[i]);
(fexpr__30913_31210.cljs$core$IFn$_invoke$arity$1 ? fexpr__30913_31210.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__30913_31210.call(null,this$__$1));

var G__31212 = (i + (1));
i = G__31212;
continue;
} else {
return null;
}
break;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = this$__$1.on_dispose_arr;
if((temp__5737__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5737__auto__;
return a.push(f__$1);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30914 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__30914) : f__$1.call(null,G__30914));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30915 = a__$1._peek_at();
var G__30916 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__30915,G__30916) : f__$1.call(null,G__30915,G__30916));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__30917 = a__$1._peek_at();
var G__30918 = x;
var G__30919 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__30917,G__30918,G__30919) : f__$1.call(null,G__30917,G__30918,G__30919));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));

return this$__$1._run(false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5739__auto___31222 = self__.caught;
if((temp__5739__auto___31222 == null)){
} else {
var e_31224 = temp__5739__auto___31222;
throw e_31224;
}

var non_reactive_31225 = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_31225){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));
} else {
}

if(((non_reactive_31225) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_31228 = self__.state;
(self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_31228,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldstate_31228,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null);

var n__4613__auto___31235 = q.length;
var i_31236 = (0);
while(true){
if((i_31236 < n__4613__auto___31235)){
var r_31237 = (q[i_31236]);
r_31237._queued_run();

var G__31238 = (i_31236 + (1));
i_31236 = G__31238;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_reaction(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31239 = arguments.length;
var i__4737__auto___31240 = (0);
while(true){
if((i__4737__auto___31240 < len__4736__auto___31239)){
args__4742__auto__.push((arguments[i__4737__auto___31240]));

var G__31241 = (i__4737__auto___31240 + (1));
i__4737__auto___31240 = G__31241;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__30937){
var map__30938 = p__30937;
var map__30938__$1 = (((((!((map__30938 == null))))?(((((map__30938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30938):map__30938);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30938__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq30926){
var G__30927 = cljs.core.first(seq30926);
var seq30926__$1 = cljs.core.next(seq30926);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30927,seq30926__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
}));

goog.object.set(obj,key,r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper(value,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.js.map
