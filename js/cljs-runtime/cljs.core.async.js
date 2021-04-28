goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42934 = arguments.length;
switch (G__42934) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42935 = (function (f,blockable,meta42936){
this.f = f;
this.blockable = blockable;
this.meta42936 = meta42936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42937,meta42936__$1){
var self__ = this;
var _42937__$1 = this;
return (new cljs.core.async.t_cljs$core$async42935(self__.f,self__.blockable,meta42936__$1));
}));

(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42937){
var self__ = this;
var _42937__$1 = this;
return self__.meta42936;
}));

(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42936","meta42936",-1448163087,null)], null);
}));

(cljs.core.async.t_cljs$core$async42935.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42935");

(cljs.core.async.t_cljs$core$async42935.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42935");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42935.
 */
cljs.core.async.__GT_t_cljs$core$async42935 = (function cljs$core$async$__GT_t_cljs$core$async42935(f__$1,blockable__$1,meta42936){
return (new cljs.core.async.t_cljs$core$async42935(f__$1,blockable__$1,meta42936));
});

}

return (new cljs.core.async.t_cljs$core$async42935(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42962 = arguments.length;
switch (G__42962) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42966 = arguments.length;
switch (G__42966) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42971 = arguments.length;
switch (G__42971) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_45324 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45324) : fn1.call(null,val_45324));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45324) : fn1.call(null,val_45324));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42974 = arguments.length;
switch (G__42974) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___45342 = n;
var x_45343 = (0);
while(true){
if((x_45343 < n__4613__auto___45342)){
(a[x_45343] = x_45343);

var G__45344 = (x_45343 + (1));
x_45343 = G__45344;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42975 = (function (flag,meta42976){
this.flag = flag;
this.meta42976 = meta42976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42977,meta42976__$1){
var self__ = this;
var _42977__$1 = this;
return (new cljs.core.async.t_cljs$core$async42975(self__.flag,meta42976__$1));
}));

(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42977){
var self__ = this;
var _42977__$1 = this;
return self__.meta42976;
}));

(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42976","meta42976",262896432,null)], null);
}));

(cljs.core.async.t_cljs$core$async42975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42975");

(cljs.core.async.t_cljs$core$async42975.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42975.
 */
cljs.core.async.__GT_t_cljs$core$async42975 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42975(flag__$1,meta42976){
return (new cljs.core.async.t_cljs$core$async42975(flag__$1,meta42976));
});

}

return (new cljs.core.async.t_cljs$core$async42975(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42980 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42980 = (function (flag,cb,meta42981){
this.flag = flag;
this.cb = cb;
this.meta42981 = meta42981;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42982,meta42981__$1){
var self__ = this;
var _42982__$1 = this;
return (new cljs.core.async.t_cljs$core$async42980(self__.flag,self__.cb,meta42981__$1));
}));

(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42982){
var self__ = this;
var _42982__$1 = this;
return self__.meta42981;
}));

(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42980.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42980.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42981","meta42981",168212848,null)], null);
}));

(cljs.core.async.t_cljs$core$async42980.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42980.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42980");

(cljs.core.async.t_cljs$core$async42980.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42980");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42980.
 */
cljs.core.async.__GT_t_cljs$core$async42980 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42980(flag__$1,cb__$1,meta42981){
return (new cljs.core.async.t_cljs$core$async42980(flag__$1,cb__$1,meta42981));
});

}

return (new cljs.core.async.t_cljs$core$async42980(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43006_SHARP_){
var G__43008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43006_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43008) : fret.call(null,G__43008));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43007_SHARP_){
var G__43009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43007_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43009) : fret.call(null,G__43009));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__45351 = (i + (1));
i = G__45351;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45352 = arguments.length;
var i__4737__auto___45353 = (0);
while(true){
if((i__4737__auto___45353 < len__4736__auto___45352)){
args__4742__auto__.push((arguments[i__4737__auto___45353]));

var G__45354 = (i__4737__auto___45353 + (1));
i__4737__auto___45353 = G__45354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43015){
var map__43016 = p__43015;
var map__43016__$1 = (((((!((map__43016 == null))))?(((((map__43016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43016):map__43016);
var opts = map__43016__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43013){
var G__43014 = cljs.core.first(seq43013);
var seq43013__$1 = cljs.core.next(seq43013);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43014,seq43013__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43046 = arguments.length;
switch (G__43046) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42862__auto___45357 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43130){
var state_val_43131 = (state_43130[(1)]);
if((state_val_43131 === (7))){
var inst_43105 = (state_43130[(2)]);
var state_43130__$1 = state_43130;
var statearr_43136_45358 = state_43130__$1;
(statearr_43136_45358[(2)] = inst_43105);

(statearr_43136_45358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (1))){
var state_43130__$1 = state_43130;
var statearr_43138_45359 = state_43130__$1;
(statearr_43138_45359[(2)] = null);

(statearr_43138_45359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (4))){
var inst_43060 = (state_43130[(7)]);
var inst_43060__$1 = (state_43130[(2)]);
var inst_43073 = (inst_43060__$1 == null);
var state_43130__$1 = (function (){var statearr_43141 = state_43130;
(statearr_43141[(7)] = inst_43060__$1);

return statearr_43141;
})();
if(cljs.core.truth_(inst_43073)){
var statearr_43143_45362 = state_43130__$1;
(statearr_43143_45362[(1)] = (5));

} else {
var statearr_43144_45363 = state_43130__$1;
(statearr_43144_45363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (13))){
var state_43130__$1 = state_43130;
var statearr_43145_45364 = state_43130__$1;
(statearr_43145_45364[(2)] = null);

(statearr_43145_45364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (6))){
var inst_43060 = (state_43130[(7)]);
var state_43130__$1 = state_43130;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43130__$1,(11),to,inst_43060);
} else {
if((state_val_43131 === (3))){
var inst_43112 = (state_43130[(2)]);
var state_43130__$1 = state_43130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43130__$1,inst_43112);
} else {
if((state_val_43131 === (12))){
var state_43130__$1 = state_43130;
var statearr_43152_45365 = state_43130__$1;
(statearr_43152_45365[(2)] = null);

(statearr_43152_45365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (2))){
var state_43130__$1 = state_43130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43130__$1,(4),from);
} else {
if((state_val_43131 === (11))){
var inst_43090 = (state_43130[(2)]);
var state_43130__$1 = state_43130;
if(cljs.core.truth_(inst_43090)){
var statearr_43153_45366 = state_43130__$1;
(statearr_43153_45366[(1)] = (12));

} else {
var statearr_43155_45367 = state_43130__$1;
(statearr_43155_45367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (9))){
var state_43130__$1 = state_43130;
var statearr_43157_45368 = state_43130__$1;
(statearr_43157_45368[(2)] = null);

(statearr_43157_45368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (5))){
var state_43130__$1 = state_43130;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43160_45369 = state_43130__$1;
(statearr_43160_45369[(1)] = (8));

} else {
var statearr_43161_45370 = state_43130__$1;
(statearr_43161_45370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (14))){
var inst_43103 = (state_43130[(2)]);
var state_43130__$1 = state_43130;
var statearr_43166_45371 = state_43130__$1;
(statearr_43166_45371[(2)] = inst_43103);

(statearr_43166_45371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (10))){
var inst_43087 = (state_43130[(2)]);
var state_43130__$1 = state_43130;
var statearr_43167_45372 = state_43130__$1;
(statearr_43167_45372[(2)] = inst_43087);

(statearr_43167_45372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43131 === (8))){
var inst_43084 = cljs.core.async.close_BANG_(to);
var state_43130__$1 = state_43130;
var statearr_43168_45373 = state_43130__$1;
(statearr_43168_45373[(2)] = inst_43084);

(statearr_43168_45373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_43169 = [null,null,null,null,null,null,null,null];
(statearr_43169[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43169[(1)] = (1));

return statearr_43169;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43130){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43130);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43170){var ex__42714__auto__ = e43170;
var statearr_43171_45376 = state_43130;
(statearr_43171_45376[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43130[(4)]))){
var statearr_43172_45377 = state_43130;
(statearr_43172_45377[(1)] = cljs.core.first((state_43130[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45378 = state_43130;
state_43130 = G__45378;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43130){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43173 = f__42863__auto__();
(statearr_43173[(6)] = c__42862__auto___45357);

return statearr_43173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43206){
var vec__43208 = p__43206;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43208,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43208,(1),null);
var job = vec__43208;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42862__auto___45380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43215){
var state_val_43216 = (state_43215[(1)]);
if((state_val_43216 === (1))){
var state_43215__$1 = state_43215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43215__$1,(2),res,v);
} else {
if((state_val_43216 === (2))){
var inst_43212 = (state_43215[(2)]);
var inst_43213 = cljs.core.async.close_BANG_(res);
var state_43215__$1 = (function (){var statearr_43225 = state_43215;
(statearr_43225[(7)] = inst_43212);

return statearr_43225;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43215__$1,inst_43213);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43226 = [null,null,null,null,null,null,null,null];
(statearr_43226[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43226[(1)] = (1));

return statearr_43226;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43215){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43215);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43227){var ex__42714__auto__ = e43227;
var statearr_43232_45384 = state_43215;
(statearr_43232_45384[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43215[(4)]))){
var statearr_43239_45385 = state_43215;
(statearr_43239_45385[(1)] = cljs.core.first((state_43215[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45388 = state_43215;
state_43215 = G__45388;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43240 = f__42863__auto__();
(statearr_43240[(6)] = c__42862__auto___45380);

return statearr_43240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43241){
var vec__43246 = p__43241;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43246,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43246,(1),null);
var job = vec__43246;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___45389 = n;
var __45390 = (0);
while(true){
if((__45390 < n__4613__auto___45389)){
var G__43249_45391 = type;
var G__43249_45392__$1 = (((G__43249_45391 instanceof cljs.core.Keyword))?G__43249_45391.fqn:null);
switch (G__43249_45392__$1) {
case "compute":
var c__42862__auto___45394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45390,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = ((function (__45390,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function (state_43262){
var state_val_43263 = (state_43262[(1)]);
if((state_val_43263 === (1))){
var state_43262__$1 = state_43262;
var statearr_43267_45397 = state_43262__$1;
(statearr_43267_45397[(2)] = null);

(statearr_43267_45397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43263 === (2))){
var state_43262__$1 = state_43262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43262__$1,(4),jobs);
} else {
if((state_val_43263 === (3))){
var inst_43260 = (state_43262[(2)]);
var state_43262__$1 = state_43262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43262__$1,inst_43260);
} else {
if((state_val_43263 === (4))){
var inst_43252 = (state_43262[(2)]);
var inst_43253 = process(inst_43252);
var state_43262__$1 = state_43262;
if(cljs.core.truth_(inst_43253)){
var statearr_43268_45399 = state_43262__$1;
(statearr_43268_45399[(1)] = (5));

} else {
var statearr_43269_45400 = state_43262__$1;
(statearr_43269_45400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43263 === (5))){
var state_43262__$1 = state_43262;
var statearr_43270_45401 = state_43262__$1;
(statearr_43270_45401[(2)] = null);

(statearr_43270_45401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43263 === (6))){
var state_43262__$1 = state_43262;
var statearr_43274_45402 = state_43262__$1;
(statearr_43274_45402[(2)] = null);

(statearr_43274_45402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43263 === (7))){
var inst_43258 = (state_43262[(2)]);
var state_43262__$1 = state_43262;
var statearr_43275_45403 = state_43262__$1;
(statearr_43275_45403[(2)] = inst_43258);

(statearr_43275_45403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45390,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
;
return ((function (__45390,switch__42710__auto__,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43278 = [null,null,null,null,null,null,null];
(statearr_43278[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43278[(1)] = (1));

return statearr_43278;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43262){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43262);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43282){var ex__42714__auto__ = e43282;
var statearr_43283_45406 = state_43262;
(statearr_43283_45406[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43262[(4)]))){
var statearr_43285_45407 = state_43262;
(statearr_43285_45407[(1)] = cljs.core.first((state_43262[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45408 = state_43262;
state_43262 = G__45408;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__45390,switch__42710__auto__,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
})();
var state__42864__auto__ = (function (){var statearr_43286 = f__42863__auto__();
(statearr_43286[(6)] = c__42862__auto___45394);

return statearr_43286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
});})(__45390,c__42862__auto___45394,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
);


break;
case "async":
var c__42862__auto___45409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45390,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = ((function (__45390,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function (state_43299){
var state_val_43300 = (state_43299[(1)]);
if((state_val_43300 === (1))){
var state_43299__$1 = state_43299;
var statearr_43313_45412 = state_43299__$1;
(statearr_43313_45412[(2)] = null);

(statearr_43313_45412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43300 === (2))){
var state_43299__$1 = state_43299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43299__$1,(4),jobs);
} else {
if((state_val_43300 === (3))){
var inst_43297 = (state_43299[(2)]);
var state_43299__$1 = state_43299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43299__$1,inst_43297);
} else {
if((state_val_43300 === (4))){
var inst_43289 = (state_43299[(2)]);
var inst_43290 = async(inst_43289);
var state_43299__$1 = state_43299;
if(cljs.core.truth_(inst_43290)){
var statearr_43317_45413 = state_43299__$1;
(statearr_43317_45413[(1)] = (5));

} else {
var statearr_43318_45414 = state_43299__$1;
(statearr_43318_45414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43300 === (5))){
var state_43299__$1 = state_43299;
var statearr_43320_45415 = state_43299__$1;
(statearr_43320_45415[(2)] = null);

(statearr_43320_45415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43300 === (6))){
var state_43299__$1 = state_43299;
var statearr_43322_45416 = state_43299__$1;
(statearr_43322_45416[(2)] = null);

(statearr_43322_45416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43300 === (7))){
var inst_43295 = (state_43299[(2)]);
var state_43299__$1 = state_43299;
var statearr_43325_45417 = state_43299__$1;
(statearr_43325_45417[(2)] = inst_43295);

(statearr_43325_45417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__45390,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
;
return ((function (__45390,switch__42710__auto__,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43328 = [null,null,null,null,null,null,null];
(statearr_43328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43328[(1)] = (1));

return statearr_43328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43299){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43299);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43331){var ex__42714__auto__ = e43331;
var statearr_43332_45418 = state_43299;
(statearr_43332_45418[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43299[(4)]))){
var statearr_43335_45419 = state_43299;
(statearr_43335_45419[(1)] = cljs.core.first((state_43299[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45420 = state_43299;
state_43299 = G__45420;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__45390,switch__42710__auto__,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
})();
var state__42864__auto__ = (function (){var statearr_43340 = f__42863__auto__();
(statearr_43340[(6)] = c__42862__auto___45409);

return statearr_43340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
});})(__45390,c__42862__auto___45409,G__43249_45391,G__43249_45392__$1,n__4613__auto___45389,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43249_45392__$1)].join('')));

}

var G__45425 = (__45390 + (1));
__45390 = G__45425;
continue;
} else {
}
break;
}

var c__42862__auto___45426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43368){
var state_val_43369 = (state_43368[(1)]);
if((state_val_43369 === (7))){
var inst_43364 = (state_43368[(2)]);
var state_43368__$1 = state_43368;
var statearr_43377_45427 = state_43368__$1;
(statearr_43377_45427[(2)] = inst_43364);

(statearr_43377_45427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (1))){
var state_43368__$1 = state_43368;
var statearr_43378_45428 = state_43368__$1;
(statearr_43378_45428[(2)] = null);

(statearr_43378_45428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (4))){
var inst_43348 = (state_43368[(7)]);
var inst_43348__$1 = (state_43368[(2)]);
var inst_43349 = (inst_43348__$1 == null);
var state_43368__$1 = (function (){var statearr_43379 = state_43368;
(statearr_43379[(7)] = inst_43348__$1);

return statearr_43379;
})();
if(cljs.core.truth_(inst_43349)){
var statearr_43380_45429 = state_43368__$1;
(statearr_43380_45429[(1)] = (5));

} else {
var statearr_43382_45430 = state_43368__$1;
(statearr_43382_45430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (6))){
var inst_43354 = (state_43368[(8)]);
var inst_43348 = (state_43368[(7)]);
var inst_43354__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43355 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43356 = [inst_43348,inst_43354__$1];
var inst_43357 = (new cljs.core.PersistentVector(null,2,(5),inst_43355,inst_43356,null));
var state_43368__$1 = (function (){var statearr_43390 = state_43368;
(statearr_43390[(8)] = inst_43354__$1);

return statearr_43390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43368__$1,(8),jobs,inst_43357);
} else {
if((state_val_43369 === (3))){
var inst_43366 = (state_43368[(2)]);
var state_43368__$1 = state_43368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43368__$1,inst_43366);
} else {
if((state_val_43369 === (2))){
var state_43368__$1 = state_43368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43368__$1,(4),from);
} else {
if((state_val_43369 === (9))){
var inst_43361 = (state_43368[(2)]);
var state_43368__$1 = (function (){var statearr_43399 = state_43368;
(statearr_43399[(9)] = inst_43361);

return statearr_43399;
})();
var statearr_43400_45431 = state_43368__$1;
(statearr_43400_45431[(2)] = null);

(statearr_43400_45431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (5))){
var inst_43352 = cljs.core.async.close_BANG_(jobs);
var state_43368__$1 = state_43368;
var statearr_43405_45434 = state_43368__$1;
(statearr_43405_45434[(2)] = inst_43352);

(statearr_43405_45434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43369 === (8))){
var inst_43354 = (state_43368[(8)]);
var inst_43359 = (state_43368[(2)]);
var state_43368__$1 = (function (){var statearr_43415 = state_43368;
(statearr_43415[(10)] = inst_43359);

return statearr_43415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43368__$1,(9),results,inst_43354);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43420 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43420[(1)] = (1));

return statearr_43420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43368){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43368);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43425){var ex__42714__auto__ = e43425;
var statearr_43426_45435 = state_43368;
(statearr_43426_45435[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43368[(4)]))){
var statearr_43427_45436 = state_43368;
(statearr_43427_45436[(1)] = cljs.core.first((state_43368[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45437 = state_43368;
state_43368 = G__45437;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43368){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43433 = f__42863__auto__();
(statearr_43433[(6)] = c__42862__auto___45426);

return statearr_43433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


var c__42862__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43494){
var state_val_43495 = (state_43494[(1)]);
if((state_val_43495 === (7))){
var inst_43485 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43496_45442 = state_43494__$1;
(statearr_43496_45442[(2)] = inst_43485);

(statearr_43496_45442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (20))){
var state_43494__$1 = state_43494;
var statearr_43497_45446 = state_43494__$1;
(statearr_43497_45446[(2)] = null);

(statearr_43497_45446[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (1))){
var state_43494__$1 = state_43494;
var statearr_43498_45447 = state_43494__$1;
(statearr_43498_45447[(2)] = null);

(statearr_43498_45447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (4))){
var inst_43446 = (state_43494[(7)]);
var inst_43446__$1 = (state_43494[(2)]);
var inst_43447 = (inst_43446__$1 == null);
var state_43494__$1 = (function (){var statearr_43499 = state_43494;
(statearr_43499[(7)] = inst_43446__$1);

return statearr_43499;
})();
if(cljs.core.truth_(inst_43447)){
var statearr_43500_45451 = state_43494__$1;
(statearr_43500_45451[(1)] = (5));

} else {
var statearr_43505_45452 = state_43494__$1;
(statearr_43505_45452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (15))){
var inst_43467 = (state_43494[(8)]);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43494__$1,(18),to,inst_43467);
} else {
if((state_val_43495 === (21))){
var inst_43480 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43518_45456 = state_43494__$1;
(statearr_43518_45456[(2)] = inst_43480);

(statearr_43518_45456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (13))){
var inst_43482 = (state_43494[(2)]);
var state_43494__$1 = (function (){var statearr_43524 = state_43494;
(statearr_43524[(9)] = inst_43482);

return statearr_43524;
})();
var statearr_43530_45460 = state_43494__$1;
(statearr_43530_45460[(2)] = null);

(statearr_43530_45460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (6))){
var inst_43446 = (state_43494[(7)]);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43494__$1,(11),inst_43446);
} else {
if((state_val_43495 === (17))){
var inst_43475 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
if(cljs.core.truth_(inst_43475)){
var statearr_43532_45461 = state_43494__$1;
(statearr_43532_45461[(1)] = (19));

} else {
var statearr_43533_45462 = state_43494__$1;
(statearr_43533_45462[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (3))){
var inst_43487 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43494__$1,inst_43487);
} else {
if((state_val_43495 === (12))){
var inst_43460 = (state_43494[(10)]);
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43494__$1,(14),inst_43460);
} else {
if((state_val_43495 === (2))){
var state_43494__$1 = state_43494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43494__$1,(4),results);
} else {
if((state_val_43495 === (19))){
var state_43494__$1 = state_43494;
var statearr_43538_45463 = state_43494__$1;
(statearr_43538_45463[(2)] = null);

(statearr_43538_45463[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (11))){
var inst_43460 = (state_43494[(2)]);
var state_43494__$1 = (function (){var statearr_43546 = state_43494;
(statearr_43546[(10)] = inst_43460);

return statearr_43546;
})();
var statearr_43547_45468 = state_43494__$1;
(statearr_43547_45468[(2)] = null);

(statearr_43547_45468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (9))){
var state_43494__$1 = state_43494;
var statearr_43552_45472 = state_43494__$1;
(statearr_43552_45472[(2)] = null);

(statearr_43552_45472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (5))){
var state_43494__$1 = state_43494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43564_45473 = state_43494__$1;
(statearr_43564_45473[(1)] = (8));

} else {
var statearr_43571_45474 = state_43494__$1;
(statearr_43571_45474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (14))){
var inst_43467 = (state_43494[(8)]);
var inst_43467__$1 = (state_43494[(2)]);
var inst_43468 = (inst_43467__$1 == null);
var inst_43469 = cljs.core.not(inst_43468);
var state_43494__$1 = (function (){var statearr_43572 = state_43494;
(statearr_43572[(8)] = inst_43467__$1);

return statearr_43572;
})();
if(inst_43469){
var statearr_43577_45475 = state_43494__$1;
(statearr_43577_45475[(1)] = (15));

} else {
var statearr_43578_45476 = state_43494__$1;
(statearr_43578_45476[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (16))){
var state_43494__$1 = state_43494;
var statearr_43579_45477 = state_43494__$1;
(statearr_43579_45477[(2)] = false);

(statearr_43579_45477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (10))){
var inst_43457 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43582_45481 = state_43494__$1;
(statearr_43582_45481[(2)] = inst_43457);

(statearr_43582_45481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (18))){
var inst_43472 = (state_43494[(2)]);
var state_43494__$1 = state_43494;
var statearr_43587_45482 = state_43494__$1;
(statearr_43587_45482[(2)] = inst_43472);

(statearr_43587_45482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43495 === (8))){
var inst_43454 = cljs.core.async.close_BANG_(to);
var state_43494__$1 = state_43494;
var statearr_43592_45486 = state_43494__$1;
(statearr_43592_45486[(2)] = inst_43454);

(statearr_43592_45486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43603[(1)] = (1));

return statearr_43603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43494){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43494);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43608){var ex__42714__auto__ = e43608;
var statearr_43609_45487 = state_43494;
(statearr_43609_45487[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43494[(4)]))){
var statearr_43610_45491 = state_43494;
(statearr_43610_45491[(1)] = cljs.core.first((state_43494[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45492 = state_43494;
state_43494 = G__45492;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43494){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43617 = f__42863__auto__();
(statearr_43617[(6)] = c__42862__auto__);

return statearr_43617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

return c__42862__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__43630 = arguments.length;
switch (G__43630) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__43633 = arguments.length;
switch (G__43633) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__43636 = arguments.length;
switch (G__43636) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42862__auto___45497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43666){
var state_val_43667 = (state_43666[(1)]);
if((state_val_43667 === (7))){
var inst_43660 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43669_45498 = state_43666__$1;
(statearr_43669_45498[(2)] = inst_43660);

(statearr_43669_45498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (1))){
var state_43666__$1 = state_43666;
var statearr_43672_45499 = state_43666__$1;
(statearr_43672_45499[(2)] = null);

(statearr_43672_45499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (4))){
var inst_43639 = (state_43666[(7)]);
var inst_43639__$1 = (state_43666[(2)]);
var inst_43640 = (inst_43639__$1 == null);
var state_43666__$1 = (function (){var statearr_43673 = state_43666;
(statearr_43673[(7)] = inst_43639__$1);

return statearr_43673;
})();
if(cljs.core.truth_(inst_43640)){
var statearr_43674_45500 = state_43666__$1;
(statearr_43674_45500[(1)] = (5));

} else {
var statearr_43675_45501 = state_43666__$1;
(statearr_43675_45501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (13))){
var state_43666__$1 = state_43666;
var statearr_43679_45502 = state_43666__$1;
(statearr_43679_45502[(2)] = null);

(statearr_43679_45502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (6))){
var inst_43639 = (state_43666[(7)]);
var inst_43646 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43639) : p.call(null,inst_43639));
var state_43666__$1 = state_43666;
if(cljs.core.truth_(inst_43646)){
var statearr_43680_45503 = state_43666__$1;
(statearr_43680_45503[(1)] = (9));

} else {
var statearr_43681_45504 = state_43666__$1;
(statearr_43681_45504[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (3))){
var inst_43662 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43666__$1,inst_43662);
} else {
if((state_val_43667 === (12))){
var state_43666__$1 = state_43666;
var statearr_43686_45505 = state_43666__$1;
(statearr_43686_45505[(2)] = null);

(statearr_43686_45505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (2))){
var state_43666__$1 = state_43666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43666__$1,(4),ch);
} else {
if((state_val_43667 === (11))){
var inst_43639 = (state_43666[(7)]);
var inst_43650 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43666__$1,(8),inst_43650,inst_43639);
} else {
if((state_val_43667 === (9))){
var state_43666__$1 = state_43666;
var statearr_43691_45506 = state_43666__$1;
(statearr_43691_45506[(2)] = tc);

(statearr_43691_45506[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (5))){
var inst_43642 = cljs.core.async.close_BANG_(tc);
var inst_43643 = cljs.core.async.close_BANG_(fc);
var state_43666__$1 = (function (){var statearr_43692 = state_43666;
(statearr_43692[(8)] = inst_43642);

return statearr_43692;
})();
var statearr_43693_45507 = state_43666__$1;
(statearr_43693_45507[(2)] = inst_43643);

(statearr_43693_45507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (14))){
var inst_43657 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
var statearr_43695_45508 = state_43666__$1;
(statearr_43695_45508[(2)] = inst_43657);

(statearr_43695_45508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (10))){
var state_43666__$1 = state_43666;
var statearr_43696_45509 = state_43666__$1;
(statearr_43696_45509[(2)] = fc);

(statearr_43696_45509[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43667 === (8))){
var inst_43652 = (state_43666[(2)]);
var state_43666__$1 = state_43666;
if(cljs.core.truth_(inst_43652)){
var statearr_43697_45510 = state_43666__$1;
(statearr_43697_45510[(1)] = (12));

} else {
var statearr_43700_45511 = state_43666__$1;
(statearr_43700_45511[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_43706 = [null,null,null,null,null,null,null,null,null];
(statearr_43706[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43706[(1)] = (1));

return statearr_43706;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43666){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43666);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43710){var ex__42714__auto__ = e43710;
var statearr_43711_45512 = state_43666;
(statearr_43711_45512[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43666[(4)]))){
var statearr_43712_45513 = state_43666;
(statearr_43712_45513[(1)] = cljs.core.first((state_43666[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45514 = state_43666;
state_43666 = G__45514;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43713 = f__42863__auto__();
(statearr_43713[(6)] = c__42862__auto___45497);

return statearr_43713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42862__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43738){
var state_val_43739 = (state_43738[(1)]);
if((state_val_43739 === (7))){
var inst_43734 = (state_43738[(2)]);
var state_43738__$1 = state_43738;
var statearr_43742_45515 = state_43738__$1;
(statearr_43742_45515[(2)] = inst_43734);

(statearr_43742_45515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (1))){
var inst_43717 = init;
var inst_43718 = inst_43717;
var state_43738__$1 = (function (){var statearr_43744 = state_43738;
(statearr_43744[(7)] = inst_43718);

return statearr_43744;
})();
var statearr_43747_45519 = state_43738__$1;
(statearr_43747_45519[(2)] = null);

(statearr_43747_45519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (4))){
var inst_43721 = (state_43738[(8)]);
var inst_43721__$1 = (state_43738[(2)]);
var inst_43722 = (inst_43721__$1 == null);
var state_43738__$1 = (function (){var statearr_43748 = state_43738;
(statearr_43748[(8)] = inst_43721__$1);

return statearr_43748;
})();
if(cljs.core.truth_(inst_43722)){
var statearr_43749_45520 = state_43738__$1;
(statearr_43749_45520[(1)] = (5));

} else {
var statearr_43752_45524 = state_43738__$1;
(statearr_43752_45524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (6))){
var inst_43718 = (state_43738[(7)]);
var inst_43721 = (state_43738[(8)]);
var inst_43725 = (state_43738[(9)]);
var inst_43725__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43718,inst_43721) : f.call(null,inst_43718,inst_43721));
var inst_43726 = cljs.core.reduced_QMARK_(inst_43725__$1);
var state_43738__$1 = (function (){var statearr_43754 = state_43738;
(statearr_43754[(9)] = inst_43725__$1);

return statearr_43754;
})();
if(inst_43726){
var statearr_43755_45526 = state_43738__$1;
(statearr_43755_45526[(1)] = (8));

} else {
var statearr_43758_45527 = state_43738__$1;
(statearr_43758_45527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (3))){
var inst_43736 = (state_43738[(2)]);
var state_43738__$1 = state_43738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43738__$1,inst_43736);
} else {
if((state_val_43739 === (2))){
var state_43738__$1 = state_43738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43738__$1,(4),ch);
} else {
if((state_val_43739 === (9))){
var inst_43725 = (state_43738[(9)]);
var inst_43718 = inst_43725;
var state_43738__$1 = (function (){var statearr_43760 = state_43738;
(statearr_43760[(7)] = inst_43718);

return statearr_43760;
})();
var statearr_43761_45529 = state_43738__$1;
(statearr_43761_45529[(2)] = null);

(statearr_43761_45529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (5))){
var inst_43718 = (state_43738[(7)]);
var state_43738__$1 = state_43738;
var statearr_43762_45531 = state_43738__$1;
(statearr_43762_45531[(2)] = inst_43718);

(statearr_43762_45531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (10))){
var inst_43732 = (state_43738[(2)]);
var state_43738__$1 = state_43738;
var statearr_43763_45532 = state_43738__$1;
(statearr_43763_45532[(2)] = inst_43732);

(statearr_43763_45532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43739 === (8))){
var inst_43725 = (state_43738[(9)]);
var inst_43728 = cljs.core.deref(inst_43725);
var state_43738__$1 = state_43738;
var statearr_43764_45533 = state_43738__$1;
(statearr_43764_45533[(2)] = inst_43728);

(statearr_43764_45533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42711__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42711__auto____0 = (function (){
var statearr_43768 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43768[(0)] = cljs$core$async$reduce_$_state_machine__42711__auto__);

(statearr_43768[(1)] = (1));

return statearr_43768;
});
var cljs$core$async$reduce_$_state_machine__42711__auto____1 = (function (state_43738){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43738);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43771){var ex__42714__auto__ = e43771;
var statearr_43773_45534 = state_43738;
(statearr_43773_45534[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43738[(4)]))){
var statearr_43774_45535 = state_43738;
(statearr_43774_45535[(1)] = cljs.core.first((state_43738[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45536 = state_43738;
state_43738 = G__45536;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42711__auto__ = function(state_43738){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42711__auto____1.call(this,state_43738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42711__auto____0;
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42711__auto____1;
return cljs$core$async$reduce_$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43775 = f__42863__auto__();
(statearr_43775[(6)] = c__42862__auto__);

return statearr_43775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

return c__42862__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42862__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43784){
var state_val_43785 = (state_43784[(1)]);
if((state_val_43785 === (1))){
var inst_43779 = cljs.core.async.reduce(f__$1,init,ch);
var state_43784__$1 = state_43784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43784__$1,(2),inst_43779);
} else {
if((state_val_43785 === (2))){
var inst_43781 = (state_43784[(2)]);
var inst_43782 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43781) : f__$1.call(null,inst_43781));
var state_43784__$1 = state_43784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43784__$1,inst_43782);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42711__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42711__auto____0 = (function (){
var statearr_43789 = [null,null,null,null,null,null,null];
(statearr_43789[(0)] = cljs$core$async$transduce_$_state_machine__42711__auto__);

(statearr_43789[(1)] = (1));

return statearr_43789;
});
var cljs$core$async$transduce_$_state_machine__42711__auto____1 = (function (state_43784){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43784);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43790){var ex__42714__auto__ = e43790;
var statearr_43791_45545 = state_43784;
(statearr_43791_45545[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43784[(4)]))){
var statearr_43792_45546 = state_43784;
(statearr_43792_45546[(1)] = cljs.core.first((state_43784[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45547 = state_43784;
state_43784 = G__45547;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42711__auto__ = function(state_43784){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42711__auto____1.call(this,state_43784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42711__auto____0;
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42711__auto____1;
return cljs$core$async$transduce_$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43796 = f__42863__auto__();
(statearr_43796[(6)] = c__42862__auto__);

return statearr_43796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

return c__42862__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43801 = arguments.length;
switch (G__43801) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42862__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_43831){
var state_val_43832 = (state_43831[(1)]);
if((state_val_43832 === (7))){
var inst_43813 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43833_45556 = state_43831__$1;
(statearr_43833_45556[(2)] = inst_43813);

(statearr_43833_45556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (1))){
var inst_43807 = cljs.core.seq(coll);
var inst_43808 = inst_43807;
var state_43831__$1 = (function (){var statearr_43834 = state_43831;
(statearr_43834[(7)] = inst_43808);

return statearr_43834;
})();
var statearr_43835_45557 = state_43831__$1;
(statearr_43835_45557[(2)] = null);

(statearr_43835_45557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (4))){
var inst_43808 = (state_43831[(7)]);
var inst_43811 = cljs.core.first(inst_43808);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43831__$1,(7),ch,inst_43811);
} else {
if((state_val_43832 === (13))){
var inst_43825 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43836_45558 = state_43831__$1;
(statearr_43836_45558[(2)] = inst_43825);

(statearr_43836_45558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (6))){
var inst_43816 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
if(cljs.core.truth_(inst_43816)){
var statearr_43837_45565 = state_43831__$1;
(statearr_43837_45565[(1)] = (8));

} else {
var statearr_43838_45566 = state_43831__$1;
(statearr_43838_45566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (3))){
var inst_43829 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43831__$1,inst_43829);
} else {
if((state_val_43832 === (12))){
var state_43831__$1 = state_43831;
var statearr_43839_45567 = state_43831__$1;
(statearr_43839_45567[(2)] = null);

(statearr_43839_45567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (2))){
var inst_43808 = (state_43831[(7)]);
var state_43831__$1 = state_43831;
if(cljs.core.truth_(inst_43808)){
var statearr_43842_45568 = state_43831__$1;
(statearr_43842_45568[(1)] = (4));

} else {
var statearr_43844_45569 = state_43831__$1;
(statearr_43844_45569[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (11))){
var inst_43822 = cljs.core.async.close_BANG_(ch);
var state_43831__$1 = state_43831;
var statearr_43845_45570 = state_43831__$1;
(statearr_43845_45570[(2)] = inst_43822);

(statearr_43845_45570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (9))){
var state_43831__$1 = state_43831;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43846_45571 = state_43831__$1;
(statearr_43846_45571[(1)] = (11));

} else {
var statearr_43847_45572 = state_43831__$1;
(statearr_43847_45572[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (5))){
var inst_43808 = (state_43831[(7)]);
var state_43831__$1 = state_43831;
var statearr_43848_45573 = state_43831__$1;
(statearr_43848_45573[(2)] = inst_43808);

(statearr_43848_45573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (10))){
var inst_43827 = (state_43831[(2)]);
var state_43831__$1 = state_43831;
var statearr_43849_45574 = state_43831__$1;
(statearr_43849_45574[(2)] = inst_43827);

(statearr_43849_45574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43832 === (8))){
var inst_43808 = (state_43831[(7)]);
var inst_43818 = cljs.core.next(inst_43808);
var inst_43808__$1 = inst_43818;
var state_43831__$1 = (function (){var statearr_43850 = state_43831;
(statearr_43850[(7)] = inst_43808__$1);

return statearr_43850;
})();
var statearr_43851_45575 = state_43831__$1;
(statearr_43851_45575[(2)] = null);

(statearr_43851_45575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_43852 = [null,null,null,null,null,null,null,null];
(statearr_43852[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43852[(1)] = (1));

return statearr_43852;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43831){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43831);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43853){var ex__42714__auto__ = e43853;
var statearr_43854_45576 = state_43831;
(statearr_43854_45576[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43831[(4)]))){
var statearr_43855_45577 = state_43831;
(statearr_43855_45577[(1)] = cljs.core.first((state_43831[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45584 = state_43831;
state_43831 = G__45584;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_43856 = f__42863__auto__();
(statearr_43856[(6)] = c__42862__auto__);

return statearr_43856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

return c__42862__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43859 = arguments.length;
switch (G__43859) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45586 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45586(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45587 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45587(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45594 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45594(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45595 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45595(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43880 = (function (ch,cs,meta43881){
this.ch = ch;
this.cs = cs;
this.meta43881 = meta43881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43882,meta43881__$1){
var self__ = this;
var _43882__$1 = this;
return (new cljs.core.async.t_cljs$core$async43880(self__.ch,self__.cs,meta43881__$1));
}));

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43882){
var self__ = this;
var _43882__$1 = this;
return self__.meta43881;
}));

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43880.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43881","meta43881",1847724988,null)], null);
}));

(cljs.core.async.t_cljs$core$async43880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43880");

(cljs.core.async.t_cljs$core$async43880.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43880.
 */
cljs.core.async.__GT_t_cljs$core$async43880 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43880(ch__$1,cs__$1,meta43881){
return (new cljs.core.async.t_cljs$core$async43880(ch__$1,cs__$1,meta43881));
});

}

return (new cljs.core.async.t_cljs$core$async43880(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42862__auto___45602 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44040){
var state_val_44041 = (state_44040[(1)]);
if((state_val_44041 === (7))){
var inst_44036 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44045_45603 = state_44040__$1;
(statearr_44045_45603[(2)] = inst_44036);

(statearr_44045_45603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (20))){
var inst_43930 = (state_44040[(7)]);
var inst_43943 = cljs.core.first(inst_43930);
var inst_43944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43943,(0),null);
var inst_43945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43943,(1),null);
var state_44040__$1 = (function (){var statearr_44046 = state_44040;
(statearr_44046[(8)] = inst_43944);

return statearr_44046;
})();
if(cljs.core.truth_(inst_43945)){
var statearr_44047_45604 = state_44040__$1;
(statearr_44047_45604[(1)] = (22));

} else {
var statearr_44048_45605 = state_44040__$1;
(statearr_44048_45605[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (27))){
var inst_43895 = (state_44040[(9)]);
var inst_43984 = (state_44040[(10)]);
var inst_43978 = (state_44040[(11)]);
var inst_43976 = (state_44040[(12)]);
var inst_43984__$1 = cljs.core._nth(inst_43976,inst_43978);
var inst_43985 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43984__$1,inst_43895,done);
var state_44040__$1 = (function (){var statearr_44053 = state_44040;
(statearr_44053[(10)] = inst_43984__$1);

return statearr_44053;
})();
if(cljs.core.truth_(inst_43985)){
var statearr_44054_45606 = state_44040__$1;
(statearr_44054_45606[(1)] = (30));

} else {
var statearr_44055_45607 = state_44040__$1;
(statearr_44055_45607[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (1))){
var state_44040__$1 = state_44040;
var statearr_44056_45608 = state_44040__$1;
(statearr_44056_45608[(2)] = null);

(statearr_44056_45608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (24))){
var inst_43930 = (state_44040[(7)]);
var inst_43953 = (state_44040[(2)]);
var inst_43954 = cljs.core.next(inst_43930);
var inst_43907 = inst_43954;
var inst_43908 = null;
var inst_43909 = (0);
var inst_43910 = (0);
var state_44040__$1 = (function (){var statearr_44057 = state_44040;
(statearr_44057[(13)] = inst_43910);

(statearr_44057[(14)] = inst_43907);

(statearr_44057[(15)] = inst_43909);

(statearr_44057[(16)] = inst_43953);

(statearr_44057[(17)] = inst_43908);

return statearr_44057;
})();
var statearr_44058_45609 = state_44040__$1;
(statearr_44058_45609[(2)] = null);

(statearr_44058_45609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (39))){
var state_44040__$1 = state_44040;
var statearr_44065_45610 = state_44040__$1;
(statearr_44065_45610[(2)] = null);

(statearr_44065_45610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (4))){
var inst_43895 = (state_44040[(9)]);
var inst_43895__$1 = (state_44040[(2)]);
var inst_43898 = (inst_43895__$1 == null);
var state_44040__$1 = (function (){var statearr_44066 = state_44040;
(statearr_44066[(9)] = inst_43895__$1);

return statearr_44066;
})();
if(cljs.core.truth_(inst_43898)){
var statearr_44067_45611 = state_44040__$1;
(statearr_44067_45611[(1)] = (5));

} else {
var statearr_44068_45612 = state_44040__$1;
(statearr_44068_45612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (15))){
var inst_43910 = (state_44040[(13)]);
var inst_43907 = (state_44040[(14)]);
var inst_43909 = (state_44040[(15)]);
var inst_43908 = (state_44040[(17)]);
var inst_43926 = (state_44040[(2)]);
var inst_43927 = (inst_43910 + (1));
var tmp44059 = inst_43907;
var tmp44061 = inst_43909;
var tmp44062 = inst_43908;
var inst_43907__$1 = tmp44059;
var inst_43908__$1 = tmp44062;
var inst_43909__$1 = tmp44061;
var inst_43910__$1 = inst_43927;
var state_44040__$1 = (function (){var statearr_44069 = state_44040;
(statearr_44069[(13)] = inst_43910__$1);

(statearr_44069[(14)] = inst_43907__$1);

(statearr_44069[(15)] = inst_43909__$1);

(statearr_44069[(18)] = inst_43926);

(statearr_44069[(17)] = inst_43908__$1);

return statearr_44069;
})();
var statearr_44071_45613 = state_44040__$1;
(statearr_44071_45613[(2)] = null);

(statearr_44071_45613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (21))){
var inst_43957 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44077_45615 = state_44040__$1;
(statearr_44077_45615[(2)] = inst_43957);

(statearr_44077_45615[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (31))){
var inst_43984 = (state_44040[(10)]);
var inst_43988 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43984);
var state_44040__$1 = state_44040;
var statearr_44078_45620 = state_44040__$1;
(statearr_44078_45620[(2)] = inst_43988);

(statearr_44078_45620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (32))){
var inst_43977 = (state_44040[(19)]);
var inst_43978 = (state_44040[(11)]);
var inst_43976 = (state_44040[(12)]);
var inst_43975 = (state_44040[(20)]);
var inst_43990 = (state_44040[(2)]);
var inst_43991 = (inst_43978 + (1));
var tmp44074 = inst_43977;
var tmp44075 = inst_43976;
var tmp44076 = inst_43975;
var inst_43975__$1 = tmp44076;
var inst_43976__$1 = tmp44075;
var inst_43977__$1 = tmp44074;
var inst_43978__$1 = inst_43991;
var state_44040__$1 = (function (){var statearr_44079 = state_44040;
(statearr_44079[(19)] = inst_43977__$1);

(statearr_44079[(11)] = inst_43978__$1);

(statearr_44079[(12)] = inst_43976__$1);

(statearr_44079[(20)] = inst_43975__$1);

(statearr_44079[(21)] = inst_43990);

return statearr_44079;
})();
var statearr_44082_45621 = state_44040__$1;
(statearr_44082_45621[(2)] = null);

(statearr_44082_45621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (40))){
var inst_44008 = (state_44040[(22)]);
var inst_44012 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44008);
var state_44040__$1 = state_44040;
var statearr_44084_45622 = state_44040__$1;
(statearr_44084_45622[(2)] = inst_44012);

(statearr_44084_45622[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (33))){
var inst_43994 = (state_44040[(23)]);
var inst_43996 = cljs.core.chunked_seq_QMARK_(inst_43994);
var state_44040__$1 = state_44040;
if(inst_43996){
var statearr_44085_45623 = state_44040__$1;
(statearr_44085_45623[(1)] = (36));

} else {
var statearr_44086_45624 = state_44040__$1;
(statearr_44086_45624[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (13))){
var inst_43920 = (state_44040[(24)]);
var inst_43923 = cljs.core.async.close_BANG_(inst_43920);
var state_44040__$1 = state_44040;
var statearr_44087_45625 = state_44040__$1;
(statearr_44087_45625[(2)] = inst_43923);

(statearr_44087_45625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (22))){
var inst_43944 = (state_44040[(8)]);
var inst_43950 = cljs.core.async.close_BANG_(inst_43944);
var state_44040__$1 = state_44040;
var statearr_44088_45626 = state_44040__$1;
(statearr_44088_45626[(2)] = inst_43950);

(statearr_44088_45626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (36))){
var inst_43994 = (state_44040[(23)]);
var inst_44001 = cljs.core.chunk_first(inst_43994);
var inst_44004 = cljs.core.chunk_rest(inst_43994);
var inst_44005 = cljs.core.count(inst_44001);
var inst_43975 = inst_44004;
var inst_43976 = inst_44001;
var inst_43977 = inst_44005;
var inst_43978 = (0);
var state_44040__$1 = (function (){var statearr_44089 = state_44040;
(statearr_44089[(19)] = inst_43977);

(statearr_44089[(11)] = inst_43978);

(statearr_44089[(12)] = inst_43976);

(statearr_44089[(20)] = inst_43975);

return statearr_44089;
})();
var statearr_44090_45629 = state_44040__$1;
(statearr_44090_45629[(2)] = null);

(statearr_44090_45629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (41))){
var inst_43994 = (state_44040[(23)]);
var inst_44014 = (state_44040[(2)]);
var inst_44015 = cljs.core.next(inst_43994);
var inst_43975 = inst_44015;
var inst_43976 = null;
var inst_43977 = (0);
var inst_43978 = (0);
var state_44040__$1 = (function (){var statearr_44091 = state_44040;
(statearr_44091[(19)] = inst_43977);

(statearr_44091[(11)] = inst_43978);

(statearr_44091[(12)] = inst_43976);

(statearr_44091[(20)] = inst_43975);

(statearr_44091[(25)] = inst_44014);

return statearr_44091;
})();
var statearr_44092_45630 = state_44040__$1;
(statearr_44092_45630[(2)] = null);

(statearr_44092_45630[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (43))){
var state_44040__$1 = state_44040;
var statearr_44094_45631 = state_44040__$1;
(statearr_44094_45631[(2)] = null);

(statearr_44094_45631[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (29))){
var inst_44024 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44095_45632 = state_44040__$1;
(statearr_44095_45632[(2)] = inst_44024);

(statearr_44095_45632[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (44))){
var inst_44033 = (state_44040[(2)]);
var state_44040__$1 = (function (){var statearr_44096 = state_44040;
(statearr_44096[(26)] = inst_44033);

return statearr_44096;
})();
var statearr_44097_45635 = state_44040__$1;
(statearr_44097_45635[(2)] = null);

(statearr_44097_45635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (6))){
var inst_43967 = (state_44040[(27)]);
var inst_43966 = cljs.core.deref(cs);
var inst_43967__$1 = cljs.core.keys(inst_43966);
var inst_43968 = cljs.core.count(inst_43967__$1);
var inst_43969 = cljs.core.reset_BANG_(dctr,inst_43968);
var inst_43974 = cljs.core.seq(inst_43967__$1);
var inst_43975 = inst_43974;
var inst_43976 = null;
var inst_43977 = (0);
var inst_43978 = (0);
var state_44040__$1 = (function (){var statearr_44098 = state_44040;
(statearr_44098[(19)] = inst_43977);

(statearr_44098[(28)] = inst_43969);

(statearr_44098[(11)] = inst_43978);

(statearr_44098[(12)] = inst_43976);

(statearr_44098[(20)] = inst_43975);

(statearr_44098[(27)] = inst_43967__$1);

return statearr_44098;
})();
var statearr_44099_45636 = state_44040__$1;
(statearr_44099_45636[(2)] = null);

(statearr_44099_45636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (28))){
var inst_43994 = (state_44040[(23)]);
var inst_43975 = (state_44040[(20)]);
var inst_43994__$1 = cljs.core.seq(inst_43975);
var state_44040__$1 = (function (){var statearr_44100 = state_44040;
(statearr_44100[(23)] = inst_43994__$1);

return statearr_44100;
})();
if(inst_43994__$1){
var statearr_44101_45637 = state_44040__$1;
(statearr_44101_45637[(1)] = (33));

} else {
var statearr_44102_45638 = state_44040__$1;
(statearr_44102_45638[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (25))){
var inst_43977 = (state_44040[(19)]);
var inst_43978 = (state_44040[(11)]);
var inst_43981 = (inst_43978 < inst_43977);
var inst_43982 = inst_43981;
var state_44040__$1 = state_44040;
if(cljs.core.truth_(inst_43982)){
var statearr_44108_45639 = state_44040__$1;
(statearr_44108_45639[(1)] = (27));

} else {
var statearr_44109_45640 = state_44040__$1;
(statearr_44109_45640[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (34))){
var state_44040__$1 = state_44040;
var statearr_44115_45641 = state_44040__$1;
(statearr_44115_45641[(2)] = null);

(statearr_44115_45641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (17))){
var state_44040__$1 = state_44040;
var statearr_44118_45642 = state_44040__$1;
(statearr_44118_45642[(2)] = null);

(statearr_44118_45642[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (3))){
var inst_44038 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44040__$1,inst_44038);
} else {
if((state_val_44041 === (12))){
var inst_43962 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44120_45643 = state_44040__$1;
(statearr_44120_45643[(2)] = inst_43962);

(statearr_44120_45643[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (2))){
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44040__$1,(4),ch);
} else {
if((state_val_44041 === (23))){
var state_44040__$1 = state_44040;
var statearr_44124_45644 = state_44040__$1;
(statearr_44124_45644[(2)] = null);

(statearr_44124_45644[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (35))){
var inst_44021 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44127_45645 = state_44040__$1;
(statearr_44127_45645[(2)] = inst_44021);

(statearr_44127_45645[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (19))){
var inst_43930 = (state_44040[(7)]);
var inst_43934 = cljs.core.chunk_first(inst_43930);
var inst_43935 = cljs.core.chunk_rest(inst_43930);
var inst_43936 = cljs.core.count(inst_43934);
var inst_43907 = inst_43935;
var inst_43908 = inst_43934;
var inst_43909 = inst_43936;
var inst_43910 = (0);
var state_44040__$1 = (function (){var statearr_44135 = state_44040;
(statearr_44135[(13)] = inst_43910);

(statearr_44135[(14)] = inst_43907);

(statearr_44135[(15)] = inst_43909);

(statearr_44135[(17)] = inst_43908);

return statearr_44135;
})();
var statearr_44137_45648 = state_44040__$1;
(statearr_44137_45648[(2)] = null);

(statearr_44137_45648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (11))){
var inst_43930 = (state_44040[(7)]);
var inst_43907 = (state_44040[(14)]);
var inst_43930__$1 = cljs.core.seq(inst_43907);
var state_44040__$1 = (function (){var statearr_44140 = state_44040;
(statearr_44140[(7)] = inst_43930__$1);

return statearr_44140;
})();
if(inst_43930__$1){
var statearr_44141_45649 = state_44040__$1;
(statearr_44141_45649[(1)] = (16));

} else {
var statearr_44142_45650 = state_44040__$1;
(statearr_44142_45650[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (9))){
var inst_43964 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44147_45651 = state_44040__$1;
(statearr_44147_45651[(2)] = inst_43964);

(statearr_44147_45651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (5))){
var inst_43905 = cljs.core.deref(cs);
var inst_43906 = cljs.core.seq(inst_43905);
var inst_43907 = inst_43906;
var inst_43908 = null;
var inst_43909 = (0);
var inst_43910 = (0);
var state_44040__$1 = (function (){var statearr_44151 = state_44040;
(statearr_44151[(13)] = inst_43910);

(statearr_44151[(14)] = inst_43907);

(statearr_44151[(15)] = inst_43909);

(statearr_44151[(17)] = inst_43908);

return statearr_44151;
})();
var statearr_44152_45652 = state_44040__$1;
(statearr_44152_45652[(2)] = null);

(statearr_44152_45652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (14))){
var state_44040__$1 = state_44040;
var statearr_44154_45653 = state_44040__$1;
(statearr_44154_45653[(2)] = null);

(statearr_44154_45653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (45))){
var inst_44030 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44155_45654 = state_44040__$1;
(statearr_44155_45654[(2)] = inst_44030);

(statearr_44155_45654[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (26))){
var inst_43967 = (state_44040[(27)]);
var inst_44026 = (state_44040[(2)]);
var inst_44027 = cljs.core.seq(inst_43967);
var state_44040__$1 = (function (){var statearr_44161 = state_44040;
(statearr_44161[(29)] = inst_44026);

return statearr_44161;
})();
if(inst_44027){
var statearr_44162_45655 = state_44040__$1;
(statearr_44162_45655[(1)] = (42));

} else {
var statearr_44164_45656 = state_44040__$1;
(statearr_44164_45656[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (16))){
var inst_43930 = (state_44040[(7)]);
var inst_43932 = cljs.core.chunked_seq_QMARK_(inst_43930);
var state_44040__$1 = state_44040;
if(inst_43932){
var statearr_44168_45657 = state_44040__$1;
(statearr_44168_45657[(1)] = (19));

} else {
var statearr_44170_45658 = state_44040__$1;
(statearr_44170_45658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (38))){
var inst_44018 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44175_45659 = state_44040__$1;
(statearr_44175_45659[(2)] = inst_44018);

(statearr_44175_45659[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (30))){
var state_44040__$1 = state_44040;
var statearr_44178_45660 = state_44040__$1;
(statearr_44178_45660[(2)] = null);

(statearr_44178_45660[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (10))){
var inst_43910 = (state_44040[(13)]);
var inst_43908 = (state_44040[(17)]);
var inst_43919 = cljs.core._nth(inst_43908,inst_43910);
var inst_43920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43919,(0),null);
var inst_43921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43919,(1),null);
var state_44040__$1 = (function (){var statearr_44179 = state_44040;
(statearr_44179[(24)] = inst_43920);

return statearr_44179;
})();
if(cljs.core.truth_(inst_43921)){
var statearr_44180_45661 = state_44040__$1;
(statearr_44180_45661[(1)] = (13));

} else {
var statearr_44185_45662 = state_44040__$1;
(statearr_44185_45662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (18))){
var inst_43960 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44192_45663 = state_44040__$1;
(statearr_44192_45663[(2)] = inst_43960);

(statearr_44192_45663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (42))){
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44040__$1,(45),dchan);
} else {
if((state_val_44041 === (37))){
var inst_43895 = (state_44040[(9)]);
var inst_44008 = (state_44040[(22)]);
var inst_43994 = (state_44040[(23)]);
var inst_44008__$1 = cljs.core.first(inst_43994);
var inst_44009 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44008__$1,inst_43895,done);
var state_44040__$1 = (function (){var statearr_44196 = state_44040;
(statearr_44196[(22)] = inst_44008__$1);

return statearr_44196;
})();
if(cljs.core.truth_(inst_44009)){
var statearr_44197_45665 = state_44040__$1;
(statearr_44197_45665[(1)] = (39));

} else {
var statearr_44198_45666 = state_44040__$1;
(statearr_44198_45666[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (8))){
var inst_43910 = (state_44040[(13)]);
var inst_43909 = (state_44040[(15)]);
var inst_43912 = (inst_43910 < inst_43909);
var inst_43913 = inst_43912;
var state_44040__$1 = state_44040;
if(cljs.core.truth_(inst_43913)){
var statearr_44202_45667 = state_44040__$1;
(statearr_44202_45667[(1)] = (10));

} else {
var statearr_44203_45668 = state_44040__$1;
(statearr_44203_45668[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42711__auto__ = null;
var cljs$core$async$mult_$_state_machine__42711__auto____0 = (function (){
var statearr_44207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44207[(0)] = cljs$core$async$mult_$_state_machine__42711__auto__);

(statearr_44207[(1)] = (1));

return statearr_44207;
});
var cljs$core$async$mult_$_state_machine__42711__auto____1 = (function (state_44040){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44040);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44209){var ex__42714__auto__ = e44209;
var statearr_44211_45673 = state_44040;
(statearr_44211_45673[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44040[(4)]))){
var statearr_44214_45674 = state_44040;
(statearr_44214_45674[(1)] = cljs.core.first((state_44040[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45675 = state_44040;
state_44040 = G__45675;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42711__auto__ = function(state_44040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42711__auto____1.call(this,state_44040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42711__auto____0;
cljs$core$async$mult_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42711__auto____1;
return cljs$core$async$mult_$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44215 = f__42863__auto__();
(statearr_44215[(6)] = c__42862__auto___45602);

return statearr_44215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__44217 = arguments.length;
switch (G__44217) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45677 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45677(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45678 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45678(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45686 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45686(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45690 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45690(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45694 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45694(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45698 = arguments.length;
var i__4737__auto___45699 = (0);
while(true){
if((i__4737__auto___45699 < len__4736__auto___45698)){
args__4742__auto__.push((arguments[i__4737__auto___45699]));

var G__45700 = (i__4737__auto___45699 + (1));
i__4737__auto___45699 = G__45700;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44237){
var map__44238 = p__44237;
var map__44238__$1 = (((((!((map__44238 == null))))?(((((map__44238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44238):map__44238);
var opts = map__44238__$1;
var statearr_44240_45705 = state;
(statearr_44240_45705[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44241_45706 = state;
(statearr_44241_45706[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44242_45707 = state;
(statearr_44242_45707[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44233){
var G__44234 = cljs.core.first(seq44233);
var seq44233__$1 = cljs.core.next(seq44233);
var G__44235 = cljs.core.first(seq44233__$1);
var seq44233__$2 = cljs.core.next(seq44233__$1);
var G__44236 = cljs.core.first(seq44233__$2);
var seq44233__$3 = cljs.core.next(seq44233__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44234,G__44235,G__44236,seq44233__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44246 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44246 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44247){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44247 = meta44247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44248,meta44247__$1){
var self__ = this;
var _44248__$1 = this;
return (new cljs.core.async.t_cljs$core$async44246(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44247__$1));
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44248){
var self__ = this;
var _44248__$1 = this;
return self__.meta44247;
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44246.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44247","meta44247",1696553131,null)], null);
}));

(cljs.core.async.t_cljs$core$async44246.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44246");

(cljs.core.async.t_cljs$core$async44246.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44246");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44246.
 */
cljs.core.async.__GT_t_cljs$core$async44246 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44246(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44247){
return (new cljs.core.async.t_cljs$core$async44246(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44247));
});

}

return (new cljs.core.async.t_cljs$core$async44246(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42862__auto___45710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44359){
var state_val_44360 = (state_44359[(1)]);
if((state_val_44360 === (7))){
var inst_44272 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
var statearr_44361_45711 = state_44359__$1;
(statearr_44361_45711[(2)] = inst_44272);

(statearr_44361_45711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (20))){
var inst_44284 = (state_44359[(7)]);
var state_44359__$1 = state_44359;
var statearr_44362_45716 = state_44359__$1;
(statearr_44362_45716[(2)] = inst_44284);

(statearr_44362_45716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (27))){
var state_44359__$1 = state_44359;
var statearr_44363_45717 = state_44359__$1;
(statearr_44363_45717[(2)] = null);

(statearr_44363_45717[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (1))){
var inst_44259 = (state_44359[(8)]);
var inst_44259__$1 = calc_state();
var inst_44261 = (inst_44259__$1 == null);
var inst_44262 = cljs.core.not(inst_44261);
var state_44359__$1 = (function (){var statearr_44367 = state_44359;
(statearr_44367[(8)] = inst_44259__$1);

return statearr_44367;
})();
if(inst_44262){
var statearr_44368_45718 = state_44359__$1;
(statearr_44368_45718[(1)] = (2));

} else {
var statearr_44369_45719 = state_44359__$1;
(statearr_44369_45719[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (24))){
var inst_44319 = (state_44359[(9)]);
var inst_44309 = (state_44359[(10)]);
var inst_44333 = (state_44359[(11)]);
var inst_44333__$1 = (inst_44309.cljs$core$IFn$_invoke$arity$1 ? inst_44309.cljs$core$IFn$_invoke$arity$1(inst_44319) : inst_44309.call(null,inst_44319));
var state_44359__$1 = (function (){var statearr_44371 = state_44359;
(statearr_44371[(11)] = inst_44333__$1);

return statearr_44371;
})();
if(cljs.core.truth_(inst_44333__$1)){
var statearr_44372_45720 = state_44359__$1;
(statearr_44372_45720[(1)] = (29));

} else {
var statearr_44373_45721 = state_44359__$1;
(statearr_44373_45721[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (4))){
var inst_44275 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44275)){
var statearr_44374_45722 = state_44359__$1;
(statearr_44374_45722[(1)] = (8));

} else {
var statearr_44375_45723 = state_44359__$1;
(statearr_44375_45723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (15))){
var inst_44302 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44302)){
var statearr_44376_45728 = state_44359__$1;
(statearr_44376_45728[(1)] = (19));

} else {
var statearr_44378_45729 = state_44359__$1;
(statearr_44378_45729[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (21))){
var inst_44308 = (state_44359[(12)]);
var inst_44308__$1 = (state_44359[(2)]);
var inst_44309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44308__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44308__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44308__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44359__$1 = (function (){var statearr_44379 = state_44359;
(statearr_44379[(10)] = inst_44309);

(statearr_44379[(13)] = inst_44310);

(statearr_44379[(12)] = inst_44308__$1);

return statearr_44379;
})();
return cljs.core.async.ioc_alts_BANG_(state_44359__$1,(22),inst_44311);
} else {
if((state_val_44360 === (31))){
var inst_44341 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44341)){
var statearr_44385_45731 = state_44359__$1;
(statearr_44385_45731[(1)] = (32));

} else {
var statearr_44386_45732 = state_44359__$1;
(statearr_44386_45732[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (32))){
var inst_44318 = (state_44359[(14)]);
var state_44359__$1 = state_44359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44359__$1,(35),out,inst_44318);
} else {
if((state_val_44360 === (33))){
var inst_44308 = (state_44359[(12)]);
var inst_44284 = inst_44308;
var state_44359__$1 = (function (){var statearr_44389 = state_44359;
(statearr_44389[(7)] = inst_44284);

return statearr_44389;
})();
var statearr_44390_45734 = state_44359__$1;
(statearr_44390_45734[(2)] = null);

(statearr_44390_45734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (13))){
var inst_44284 = (state_44359[(7)]);
var inst_44291 = inst_44284.cljs$lang$protocol_mask$partition0$;
var inst_44292 = (inst_44291 & (64));
var inst_44293 = inst_44284.cljs$core$ISeq$;
var inst_44294 = (cljs.core.PROTOCOL_SENTINEL === inst_44293);
var inst_44295 = ((inst_44292) || (inst_44294));
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44295)){
var statearr_44393_45735 = state_44359__$1;
(statearr_44393_45735[(1)] = (16));

} else {
var statearr_44396_45736 = state_44359__$1;
(statearr_44396_45736[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (22))){
var inst_44319 = (state_44359[(9)]);
var inst_44318 = (state_44359[(14)]);
var inst_44317 = (state_44359[(2)]);
var inst_44318__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44317,(0),null);
var inst_44319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44317,(1),null);
var inst_44320 = (inst_44318__$1 == null);
var inst_44321 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44319__$1,change);
var inst_44322 = ((inst_44320) || (inst_44321));
var state_44359__$1 = (function (){var statearr_44398 = state_44359;
(statearr_44398[(9)] = inst_44319__$1);

(statearr_44398[(14)] = inst_44318__$1);

return statearr_44398;
})();
if(cljs.core.truth_(inst_44322)){
var statearr_44400_45741 = state_44359__$1;
(statearr_44400_45741[(1)] = (23));

} else {
var statearr_44401_45742 = state_44359__$1;
(statearr_44401_45742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (36))){
var inst_44308 = (state_44359[(12)]);
var inst_44284 = inst_44308;
var state_44359__$1 = (function (){var statearr_44403 = state_44359;
(statearr_44403[(7)] = inst_44284);

return statearr_44403;
})();
var statearr_44404_45743 = state_44359__$1;
(statearr_44404_45743[(2)] = null);

(statearr_44404_45743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (29))){
var inst_44333 = (state_44359[(11)]);
var state_44359__$1 = state_44359;
var statearr_44406_45744 = state_44359__$1;
(statearr_44406_45744[(2)] = inst_44333);

(statearr_44406_45744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (6))){
var state_44359__$1 = state_44359;
var statearr_44409_45745 = state_44359__$1;
(statearr_44409_45745[(2)] = false);

(statearr_44409_45745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (28))){
var inst_44329 = (state_44359[(2)]);
var inst_44330 = calc_state();
var inst_44284 = inst_44330;
var state_44359__$1 = (function (){var statearr_44412 = state_44359;
(statearr_44412[(15)] = inst_44329);

(statearr_44412[(7)] = inst_44284);

return statearr_44412;
})();
var statearr_44414_45746 = state_44359__$1;
(statearr_44414_45746[(2)] = null);

(statearr_44414_45746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (25))){
var inst_44355 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
var statearr_44415_45747 = state_44359__$1;
(statearr_44415_45747[(2)] = inst_44355);

(statearr_44415_45747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (34))){
var inst_44353 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
var statearr_44418_45748 = state_44359__$1;
(statearr_44418_45748[(2)] = inst_44353);

(statearr_44418_45748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (17))){
var state_44359__$1 = state_44359;
var statearr_44420_45749 = state_44359__$1;
(statearr_44420_45749[(2)] = false);

(statearr_44420_45749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (3))){
var state_44359__$1 = state_44359;
var statearr_44421_45750 = state_44359__$1;
(statearr_44421_45750[(2)] = false);

(statearr_44421_45750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (12))){
var inst_44357 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44359__$1,inst_44357);
} else {
if((state_val_44360 === (2))){
var inst_44259 = (state_44359[(8)]);
var inst_44264 = inst_44259.cljs$lang$protocol_mask$partition0$;
var inst_44265 = (inst_44264 & (64));
var inst_44266 = inst_44259.cljs$core$ISeq$;
var inst_44267 = (cljs.core.PROTOCOL_SENTINEL === inst_44266);
var inst_44268 = ((inst_44265) || (inst_44267));
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44268)){
var statearr_44425_45751 = state_44359__$1;
(statearr_44425_45751[(1)] = (5));

} else {
var statearr_44426_45752 = state_44359__$1;
(statearr_44426_45752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (23))){
var inst_44318 = (state_44359[(14)]);
var inst_44324 = (inst_44318 == null);
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44324)){
var statearr_44427_45753 = state_44359__$1;
(statearr_44427_45753[(1)] = (26));

} else {
var statearr_44428_45754 = state_44359__$1;
(statearr_44428_45754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (35))){
var inst_44344 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
if(cljs.core.truth_(inst_44344)){
var statearr_44429_45758 = state_44359__$1;
(statearr_44429_45758[(1)] = (36));

} else {
var statearr_44430_45759 = state_44359__$1;
(statearr_44430_45759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (19))){
var inst_44284 = (state_44359[(7)]);
var inst_44305 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44284);
var state_44359__$1 = state_44359;
var statearr_44431_45760 = state_44359__$1;
(statearr_44431_45760[(2)] = inst_44305);

(statearr_44431_45760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (11))){
var inst_44284 = (state_44359[(7)]);
var inst_44288 = (inst_44284 == null);
var inst_44289 = cljs.core.not(inst_44288);
var state_44359__$1 = state_44359;
if(inst_44289){
var statearr_44436_45761 = state_44359__$1;
(statearr_44436_45761[(1)] = (13));

} else {
var statearr_44437_45762 = state_44359__$1;
(statearr_44437_45762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (9))){
var inst_44259 = (state_44359[(8)]);
var state_44359__$1 = state_44359;
var statearr_44439_45763 = state_44359__$1;
(statearr_44439_45763[(2)] = inst_44259);

(statearr_44439_45763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (5))){
var state_44359__$1 = state_44359;
var statearr_44440_45764 = state_44359__$1;
(statearr_44440_45764[(2)] = true);

(statearr_44440_45764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (14))){
var state_44359__$1 = state_44359;
var statearr_44441_45765 = state_44359__$1;
(statearr_44441_45765[(2)] = false);

(statearr_44441_45765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (26))){
var inst_44319 = (state_44359[(9)]);
var inst_44326 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44319);
var state_44359__$1 = state_44359;
var statearr_44444_45766 = state_44359__$1;
(statearr_44444_45766[(2)] = inst_44326);

(statearr_44444_45766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (16))){
var state_44359__$1 = state_44359;
var statearr_44445_45767 = state_44359__$1;
(statearr_44445_45767[(2)] = true);

(statearr_44445_45767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (38))){
var inst_44349 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
var statearr_44446_45768 = state_44359__$1;
(statearr_44446_45768[(2)] = inst_44349);

(statearr_44446_45768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (30))){
var inst_44319 = (state_44359[(9)]);
var inst_44309 = (state_44359[(10)]);
var inst_44310 = (state_44359[(13)]);
var inst_44336 = cljs.core.empty_QMARK_(inst_44309);
var inst_44337 = (inst_44310.cljs$core$IFn$_invoke$arity$1 ? inst_44310.cljs$core$IFn$_invoke$arity$1(inst_44319) : inst_44310.call(null,inst_44319));
var inst_44338 = cljs.core.not(inst_44337);
var inst_44339 = ((inst_44336) && (inst_44338));
var state_44359__$1 = state_44359;
var statearr_44447_45769 = state_44359__$1;
(statearr_44447_45769[(2)] = inst_44339);

(statearr_44447_45769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (10))){
var inst_44259 = (state_44359[(8)]);
var inst_44280 = (state_44359[(2)]);
var inst_44281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44280,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44280,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44280,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44284 = inst_44259;
var state_44359__$1 = (function (){var statearr_44450 = state_44359;
(statearr_44450[(16)] = inst_44281);

(statearr_44450[(17)] = inst_44282);

(statearr_44450[(7)] = inst_44284);

(statearr_44450[(18)] = inst_44283);

return statearr_44450;
})();
var statearr_44451_45771 = state_44359__$1;
(statearr_44451_45771[(2)] = null);

(statearr_44451_45771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (18))){
var inst_44299 = (state_44359[(2)]);
var state_44359__$1 = state_44359;
var statearr_44452_45772 = state_44359__$1;
(statearr_44452_45772[(2)] = inst_44299);

(statearr_44452_45772[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (37))){
var state_44359__$1 = state_44359;
var statearr_44453_45773 = state_44359__$1;
(statearr_44453_45773[(2)] = null);

(statearr_44453_45773[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44360 === (8))){
var inst_44259 = (state_44359[(8)]);
var inst_44277 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44259);
var state_44359__$1 = state_44359;
var statearr_44454_45774 = state_44359__$1;
(statearr_44454_45774[(2)] = inst_44277);

(statearr_44454_45774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42711__auto__ = null;
var cljs$core$async$mix_$_state_machine__42711__auto____0 = (function (){
var statearr_44457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44457[(0)] = cljs$core$async$mix_$_state_machine__42711__auto__);

(statearr_44457[(1)] = (1));

return statearr_44457;
});
var cljs$core$async$mix_$_state_machine__42711__auto____1 = (function (state_44359){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44359);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44461){var ex__42714__auto__ = e44461;
var statearr_44462_45775 = state_44359;
(statearr_44462_45775[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44359[(4)]))){
var statearr_44463_45776 = state_44359;
(statearr_44463_45776[(1)] = cljs.core.first((state_44359[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45781 = state_44359;
state_44359 = G__45781;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42711__auto__ = function(state_44359){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42711__auto____1.call(this,state_44359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42711__auto____0;
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42711__auto____1;
return cljs$core$async$mix_$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44464 = f__42863__auto__();
(statearr_44464[(6)] = c__42862__auto___45710);

return statearr_44464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45783 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45783(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45785 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45785(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45790 = (function() {
var G__45791 = null;
var G__45791__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45791__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45791 = function(p,v){
switch(arguments.length){
case 1:
return G__45791__1.call(this,p);
case 2:
return G__45791__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45791.cljs$core$IFn$_invoke$arity$1 = G__45791__1;
G__45791.cljs$core$IFn$_invoke$arity$2 = G__45791__2;
return G__45791;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44474 = arguments.length;
switch (G__44474) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45790(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45790(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__44480 = arguments.length;
switch (G__44480) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44478_SHARP_){
if(cljs.core.truth_((p1__44478_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44478_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44478_SHARP_.call(null,topic)))){
return p1__44478_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44478_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44482 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44483){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44483 = meta44483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44484,meta44483__$1){
var self__ = this;
var _44484__$1 = this;
return (new cljs.core.async.t_cljs$core$async44482(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44483__$1));
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44484){
var self__ = this;
var _44484__$1 = this;
return self__.meta44483;
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44482.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44483","meta44483",1157485471,null)], null);
}));

(cljs.core.async.t_cljs$core$async44482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44482");

(cljs.core.async.t_cljs$core$async44482.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44482.
 */
cljs.core.async.__GT_t_cljs$core$async44482 = (function cljs$core$async$__GT_t_cljs$core$async44482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44483){
return (new cljs.core.async.t_cljs$core$async44482(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44483));
});

}

return (new cljs.core.async.t_cljs$core$async44482(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42862__auto___45797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44568){
var state_val_44570 = (state_44568[(1)]);
if((state_val_44570 === (7))){
var inst_44563 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44572_45798 = state_44568__$1;
(statearr_44572_45798[(2)] = inst_44563);

(statearr_44572_45798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (20))){
var state_44568__$1 = state_44568;
var statearr_44573_45799 = state_44568__$1;
(statearr_44573_45799[(2)] = null);

(statearr_44573_45799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (1))){
var state_44568__$1 = state_44568;
var statearr_44575_45800 = state_44568__$1;
(statearr_44575_45800[(2)] = null);

(statearr_44575_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (24))){
var inst_44546 = (state_44568[(7)]);
var inst_44555 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44546);
var state_44568__$1 = state_44568;
var statearr_44578_45801 = state_44568__$1;
(statearr_44578_45801[(2)] = inst_44555);

(statearr_44578_45801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (4))){
var inst_44495 = (state_44568[(8)]);
var inst_44495__$1 = (state_44568[(2)]);
var inst_44496 = (inst_44495__$1 == null);
var state_44568__$1 = (function (){var statearr_44579 = state_44568;
(statearr_44579[(8)] = inst_44495__$1);

return statearr_44579;
})();
if(cljs.core.truth_(inst_44496)){
var statearr_44580_45802 = state_44568__$1;
(statearr_44580_45802[(1)] = (5));

} else {
var statearr_44581_45803 = state_44568__$1;
(statearr_44581_45803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (15))){
var inst_44538 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44582_45804 = state_44568__$1;
(statearr_44582_45804[(2)] = inst_44538);

(statearr_44582_45804[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (21))){
var inst_44560 = (state_44568[(2)]);
var state_44568__$1 = (function (){var statearr_44583 = state_44568;
(statearr_44583[(9)] = inst_44560);

return statearr_44583;
})();
var statearr_44584_45806 = state_44568__$1;
(statearr_44584_45806[(2)] = null);

(statearr_44584_45806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (13))){
var inst_44519 = (state_44568[(10)]);
var inst_44521 = cljs.core.chunked_seq_QMARK_(inst_44519);
var state_44568__$1 = state_44568;
if(inst_44521){
var statearr_44585_45807 = state_44568__$1;
(statearr_44585_45807[(1)] = (16));

} else {
var statearr_44586_45808 = state_44568__$1;
(statearr_44586_45808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (22))){
var inst_44552 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
if(cljs.core.truth_(inst_44552)){
var statearr_44587_45809 = state_44568__$1;
(statearr_44587_45809[(1)] = (23));

} else {
var statearr_44588_45810 = state_44568__$1;
(statearr_44588_45810[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (6))){
var inst_44546 = (state_44568[(7)]);
var inst_44548 = (state_44568[(11)]);
var inst_44495 = (state_44568[(8)]);
var inst_44546__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44495) : topic_fn.call(null,inst_44495));
var inst_44547 = cljs.core.deref(mults);
var inst_44548__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44547,inst_44546__$1);
var state_44568__$1 = (function (){var statearr_44592 = state_44568;
(statearr_44592[(7)] = inst_44546__$1);

(statearr_44592[(11)] = inst_44548__$1);

return statearr_44592;
})();
if(cljs.core.truth_(inst_44548__$1)){
var statearr_44593_45811 = state_44568__$1;
(statearr_44593_45811[(1)] = (19));

} else {
var statearr_44594_45812 = state_44568__$1;
(statearr_44594_45812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (25))){
var inst_44557 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44595_45813 = state_44568__$1;
(statearr_44595_45813[(2)] = inst_44557);

(statearr_44595_45813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (17))){
var inst_44519 = (state_44568[(10)]);
var inst_44528 = cljs.core.first(inst_44519);
var inst_44529 = cljs.core.async.muxch_STAR_(inst_44528);
var inst_44530 = cljs.core.async.close_BANG_(inst_44529);
var inst_44531 = cljs.core.next(inst_44519);
var inst_44505 = inst_44531;
var inst_44506 = null;
var inst_44507 = (0);
var inst_44508 = (0);
var state_44568__$1 = (function (){var statearr_44597 = state_44568;
(statearr_44597[(12)] = inst_44507);

(statearr_44597[(13)] = inst_44530);

(statearr_44597[(14)] = inst_44506);

(statearr_44597[(15)] = inst_44508);

(statearr_44597[(16)] = inst_44505);

return statearr_44597;
})();
var statearr_44599_45814 = state_44568__$1;
(statearr_44599_45814[(2)] = null);

(statearr_44599_45814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (3))){
var inst_44565 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44568__$1,inst_44565);
} else {
if((state_val_44570 === (12))){
var inst_44541 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44602_45815 = state_44568__$1;
(statearr_44602_45815[(2)] = inst_44541);

(statearr_44602_45815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (2))){
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44568__$1,(4),ch);
} else {
if((state_val_44570 === (23))){
var state_44568__$1 = state_44568;
var statearr_44603_45816 = state_44568__$1;
(statearr_44603_45816[(2)] = null);

(statearr_44603_45816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (19))){
var inst_44548 = (state_44568[(11)]);
var inst_44495 = (state_44568[(8)]);
var inst_44550 = cljs.core.async.muxch_STAR_(inst_44548);
var state_44568__$1 = state_44568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44568__$1,(22),inst_44550,inst_44495);
} else {
if((state_val_44570 === (11))){
var inst_44519 = (state_44568[(10)]);
var inst_44505 = (state_44568[(16)]);
var inst_44519__$1 = cljs.core.seq(inst_44505);
var state_44568__$1 = (function (){var statearr_44607 = state_44568;
(statearr_44607[(10)] = inst_44519__$1);

return statearr_44607;
})();
if(inst_44519__$1){
var statearr_44608_45817 = state_44568__$1;
(statearr_44608_45817[(1)] = (13));

} else {
var statearr_44609_45818 = state_44568__$1;
(statearr_44609_45818[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (9))){
var inst_44543 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44610_45819 = state_44568__$1;
(statearr_44610_45819[(2)] = inst_44543);

(statearr_44610_45819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (5))){
var inst_44502 = cljs.core.deref(mults);
var inst_44503 = cljs.core.vals(inst_44502);
var inst_44504 = cljs.core.seq(inst_44503);
var inst_44505 = inst_44504;
var inst_44506 = null;
var inst_44507 = (0);
var inst_44508 = (0);
var state_44568__$1 = (function (){var statearr_44614 = state_44568;
(statearr_44614[(12)] = inst_44507);

(statearr_44614[(14)] = inst_44506);

(statearr_44614[(15)] = inst_44508);

(statearr_44614[(16)] = inst_44505);

return statearr_44614;
})();
var statearr_44615_45820 = state_44568__$1;
(statearr_44615_45820[(2)] = null);

(statearr_44615_45820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (14))){
var state_44568__$1 = state_44568;
var statearr_44619_45821 = state_44568__$1;
(statearr_44619_45821[(2)] = null);

(statearr_44619_45821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (16))){
var inst_44519 = (state_44568[(10)]);
var inst_44523 = cljs.core.chunk_first(inst_44519);
var inst_44524 = cljs.core.chunk_rest(inst_44519);
var inst_44525 = cljs.core.count(inst_44523);
var inst_44505 = inst_44524;
var inst_44506 = inst_44523;
var inst_44507 = inst_44525;
var inst_44508 = (0);
var state_44568__$1 = (function (){var statearr_44621 = state_44568;
(statearr_44621[(12)] = inst_44507);

(statearr_44621[(14)] = inst_44506);

(statearr_44621[(15)] = inst_44508);

(statearr_44621[(16)] = inst_44505);

return statearr_44621;
})();
var statearr_44624_45826 = state_44568__$1;
(statearr_44624_45826[(2)] = null);

(statearr_44624_45826[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (10))){
var inst_44507 = (state_44568[(12)]);
var inst_44506 = (state_44568[(14)]);
var inst_44508 = (state_44568[(15)]);
var inst_44505 = (state_44568[(16)]);
var inst_44513 = cljs.core._nth(inst_44506,inst_44508);
var inst_44514 = cljs.core.async.muxch_STAR_(inst_44513);
var inst_44515 = cljs.core.async.close_BANG_(inst_44514);
var inst_44516 = (inst_44508 + (1));
var tmp44616 = inst_44507;
var tmp44617 = inst_44506;
var tmp44618 = inst_44505;
var inst_44505__$1 = tmp44618;
var inst_44506__$1 = tmp44617;
var inst_44507__$1 = tmp44616;
var inst_44508__$1 = inst_44516;
var state_44568__$1 = (function (){var statearr_44625 = state_44568;
(statearr_44625[(12)] = inst_44507__$1);

(statearr_44625[(14)] = inst_44506__$1);

(statearr_44625[(17)] = inst_44515);

(statearr_44625[(15)] = inst_44508__$1);

(statearr_44625[(16)] = inst_44505__$1);

return statearr_44625;
})();
var statearr_44626_45831 = state_44568__$1;
(statearr_44626_45831[(2)] = null);

(statearr_44626_45831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (18))){
var inst_44535 = (state_44568[(2)]);
var state_44568__$1 = state_44568;
var statearr_44627_45833 = state_44568__$1;
(statearr_44627_45833[(2)] = inst_44535);

(statearr_44627_45833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44570 === (8))){
var inst_44507 = (state_44568[(12)]);
var inst_44508 = (state_44568[(15)]);
var inst_44510 = (inst_44508 < inst_44507);
var inst_44511 = inst_44510;
var state_44568__$1 = state_44568;
if(cljs.core.truth_(inst_44511)){
var statearr_44628_45835 = state_44568__$1;
(statearr_44628_45835[(1)] = (10));

} else {
var statearr_44629_45836 = state_44568__$1;
(statearr_44629_45836[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_44630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44630[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44630[(1)] = (1));

return statearr_44630;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44568){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44568);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44631){var ex__42714__auto__ = e44631;
var statearr_44632_45837 = state_44568;
(statearr_44632_45837[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44568[(4)]))){
var statearr_44633_45838 = state_44568;
(statearr_44633_45838[(1)] = cljs.core.first((state_44568[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45839 = state_44568;
state_44568 = G__45839;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44635 = f__42863__auto__();
(statearr_44635[(6)] = c__42862__auto___45797);

return statearr_44635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44638 = arguments.length;
switch (G__44638) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44643 = arguments.length;
switch (G__44643) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44646 = arguments.length;
switch (G__44646) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42862__auto___45843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44694){
var state_val_44695 = (state_44694[(1)]);
if((state_val_44695 === (7))){
var state_44694__$1 = state_44694;
var statearr_44701_45844 = state_44694__$1;
(statearr_44701_45844[(2)] = null);

(statearr_44701_45844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (1))){
var state_44694__$1 = state_44694;
var statearr_44702_45845 = state_44694__$1;
(statearr_44702_45845[(2)] = null);

(statearr_44702_45845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (4))){
var inst_44651 = (state_44694[(7)]);
var inst_44650 = (state_44694[(8)]);
var inst_44653 = (inst_44651 < inst_44650);
var state_44694__$1 = state_44694;
if(cljs.core.truth_(inst_44653)){
var statearr_44703_45846 = state_44694__$1;
(statearr_44703_45846[(1)] = (6));

} else {
var statearr_44704_45847 = state_44694__$1;
(statearr_44704_45847[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (15))){
var inst_44677 = (state_44694[(9)]);
var inst_44682 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44677);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44694__$1,(17),out,inst_44682);
} else {
if((state_val_44695 === (13))){
var inst_44677 = (state_44694[(9)]);
var inst_44677__$1 = (state_44694[(2)]);
var inst_44678 = cljs.core.some(cljs.core.nil_QMARK_,inst_44677__$1);
var state_44694__$1 = (function (){var statearr_44705 = state_44694;
(statearr_44705[(9)] = inst_44677__$1);

return statearr_44705;
})();
if(cljs.core.truth_(inst_44678)){
var statearr_44706_45848 = state_44694__$1;
(statearr_44706_45848[(1)] = (14));

} else {
var statearr_44707_45849 = state_44694__$1;
(statearr_44707_45849[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (6))){
var state_44694__$1 = state_44694;
var statearr_44708_45850 = state_44694__$1;
(statearr_44708_45850[(2)] = null);

(statearr_44708_45850[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (17))){
var inst_44684 = (state_44694[(2)]);
var state_44694__$1 = (function (){var statearr_44711 = state_44694;
(statearr_44711[(10)] = inst_44684);

return statearr_44711;
})();
var statearr_44712_45851 = state_44694__$1;
(statearr_44712_45851[(2)] = null);

(statearr_44712_45851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (3))){
var inst_44689 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44694__$1,inst_44689);
} else {
if((state_val_44695 === (12))){
var _ = (function (){var statearr_44713 = state_44694;
(statearr_44713[(4)] = cljs.core.rest((state_44694[(4)])));

return statearr_44713;
})();
var state_44694__$1 = state_44694;
var ex44710 = (state_44694__$1[(2)]);
var statearr_44714_45852 = state_44694__$1;
(statearr_44714_45852[(5)] = ex44710);


if((ex44710 instanceof Object)){
var statearr_44715_45853 = state_44694__$1;
(statearr_44715_45853[(1)] = (11));

(statearr_44715_45853[(5)] = null);

} else {
throw ex44710;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (2))){
var inst_44649 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44650 = cnt;
var inst_44651 = (0);
var state_44694__$1 = (function (){var statearr_44716 = state_44694;
(statearr_44716[(7)] = inst_44651);

(statearr_44716[(11)] = inst_44649);

(statearr_44716[(8)] = inst_44650);

return statearr_44716;
})();
var statearr_44717_45857 = state_44694__$1;
(statearr_44717_45857[(2)] = null);

(statearr_44717_45857[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (11))){
var inst_44656 = (state_44694[(2)]);
var inst_44657 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44694__$1 = (function (){var statearr_44718 = state_44694;
(statearr_44718[(12)] = inst_44656);

return statearr_44718;
})();
var statearr_44719_45859 = state_44694__$1;
(statearr_44719_45859[(2)] = inst_44657);

(statearr_44719_45859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (9))){
var inst_44651 = (state_44694[(7)]);
var _ = (function (){var statearr_44720 = state_44694;
(statearr_44720[(4)] = cljs.core.cons((12),(state_44694[(4)])));

return statearr_44720;
})();
var inst_44663 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44651) : chs__$1.call(null,inst_44651));
var inst_44664 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44651) : done.call(null,inst_44651));
var inst_44665 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44663,inst_44664);
var ___$1 = (function (){var statearr_44721 = state_44694;
(statearr_44721[(4)] = cljs.core.rest((state_44694[(4)])));

return statearr_44721;
})();
var state_44694__$1 = state_44694;
var statearr_44722_45866 = state_44694__$1;
(statearr_44722_45866[(2)] = inst_44665);

(statearr_44722_45866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (5))){
var inst_44675 = (state_44694[(2)]);
var state_44694__$1 = (function (){var statearr_44723 = state_44694;
(statearr_44723[(13)] = inst_44675);

return statearr_44723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44694__$1,(13),dchan);
} else {
if((state_val_44695 === (14))){
var inst_44680 = cljs.core.async.close_BANG_(out);
var state_44694__$1 = state_44694;
var statearr_44724_45870 = state_44694__$1;
(statearr_44724_45870[(2)] = inst_44680);

(statearr_44724_45870[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (16))){
var inst_44687 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44725_45871 = state_44694__$1;
(statearr_44725_45871[(2)] = inst_44687);

(statearr_44725_45871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (10))){
var inst_44651 = (state_44694[(7)]);
var inst_44668 = (state_44694[(2)]);
var inst_44669 = (inst_44651 + (1));
var inst_44651__$1 = inst_44669;
var state_44694__$1 = (function (){var statearr_44726 = state_44694;
(statearr_44726[(7)] = inst_44651__$1);

(statearr_44726[(14)] = inst_44668);

return statearr_44726;
})();
var statearr_44727_45875 = state_44694__$1;
(statearr_44727_45875[(2)] = null);

(statearr_44727_45875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44695 === (8))){
var inst_44673 = (state_44694[(2)]);
var state_44694__$1 = state_44694;
var statearr_44728_45876 = state_44694__$1;
(statearr_44728_45876[(2)] = inst_44673);

(statearr_44728_45876[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_44729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44729[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44729[(1)] = (1));

return statearr_44729;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44694){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44694);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44730){var ex__42714__auto__ = e44730;
var statearr_44731_45880 = state_44694;
(statearr_44731_45880[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44694[(4)]))){
var statearr_44732_45881 = state_44694;
(statearr_44732_45881[(1)] = cljs.core.first((state_44694[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45882 = state_44694;
state_44694 = G__45882;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44733 = f__42863__auto__();
(statearr_44733[(6)] = c__42862__auto___45843);

return statearr_44733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44737 = arguments.length;
switch (G__44737) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___45888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44769){
var state_val_44770 = (state_44769[(1)]);
if((state_val_44770 === (7))){
var inst_44749 = (state_44769[(7)]);
var inst_44748 = (state_44769[(8)]);
var inst_44748__$1 = (state_44769[(2)]);
var inst_44749__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44748__$1,(0),null);
var inst_44750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44748__$1,(1),null);
var inst_44751 = (inst_44749__$1 == null);
var state_44769__$1 = (function (){var statearr_44771 = state_44769;
(statearr_44771[(9)] = inst_44750);

(statearr_44771[(7)] = inst_44749__$1);

(statearr_44771[(8)] = inst_44748__$1);

return statearr_44771;
})();
if(cljs.core.truth_(inst_44751)){
var statearr_44772_45898 = state_44769__$1;
(statearr_44772_45898[(1)] = (8));

} else {
var statearr_44773_45902 = state_44769__$1;
(statearr_44773_45902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (1))){
var inst_44738 = cljs.core.vec(chs);
var inst_44739 = inst_44738;
var state_44769__$1 = (function (){var statearr_44774 = state_44769;
(statearr_44774[(10)] = inst_44739);

return statearr_44774;
})();
var statearr_44775_45903 = state_44769__$1;
(statearr_44775_45903[(2)] = null);

(statearr_44775_45903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (4))){
var inst_44739 = (state_44769[(10)]);
var state_44769__$1 = state_44769;
return cljs.core.async.ioc_alts_BANG_(state_44769__$1,(7),inst_44739);
} else {
if((state_val_44770 === (6))){
var inst_44765 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44776_45904 = state_44769__$1;
(statearr_44776_45904[(2)] = inst_44765);

(statearr_44776_45904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (3))){
var inst_44767 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44769__$1,inst_44767);
} else {
if((state_val_44770 === (2))){
var inst_44739 = (state_44769[(10)]);
var inst_44741 = cljs.core.count(inst_44739);
var inst_44742 = (inst_44741 > (0));
var state_44769__$1 = state_44769;
if(cljs.core.truth_(inst_44742)){
var statearr_44778_45905 = state_44769__$1;
(statearr_44778_45905[(1)] = (4));

} else {
var statearr_44779_45906 = state_44769__$1;
(statearr_44779_45906[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (11))){
var inst_44739 = (state_44769[(10)]);
var inst_44758 = (state_44769[(2)]);
var tmp44777 = inst_44739;
var inst_44739__$1 = tmp44777;
var state_44769__$1 = (function (){var statearr_44780 = state_44769;
(statearr_44780[(11)] = inst_44758);

(statearr_44780[(10)] = inst_44739__$1);

return statearr_44780;
})();
var statearr_44781_45907 = state_44769__$1;
(statearr_44781_45907[(2)] = null);

(statearr_44781_45907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (9))){
var inst_44749 = (state_44769[(7)]);
var state_44769__$1 = state_44769;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44769__$1,(11),out,inst_44749);
} else {
if((state_val_44770 === (5))){
var inst_44763 = cljs.core.async.close_BANG_(out);
var state_44769__$1 = state_44769;
var statearr_44782_45908 = state_44769__$1;
(statearr_44782_45908[(2)] = inst_44763);

(statearr_44782_45908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (10))){
var inst_44761 = (state_44769[(2)]);
var state_44769__$1 = state_44769;
var statearr_44783_45909 = state_44769__$1;
(statearr_44783_45909[(2)] = inst_44761);

(statearr_44783_45909[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44770 === (8))){
var inst_44750 = (state_44769[(9)]);
var inst_44749 = (state_44769[(7)]);
var inst_44748 = (state_44769[(8)]);
var inst_44739 = (state_44769[(10)]);
var inst_44753 = (function (){var cs = inst_44739;
var vec__44744 = inst_44748;
var v = inst_44749;
var c = inst_44750;
return (function (p1__44734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44734_SHARP_);
});
})();
var inst_44754 = cljs.core.filterv(inst_44753,inst_44739);
var inst_44739__$1 = inst_44754;
var state_44769__$1 = (function (){var statearr_44784 = state_44769;
(statearr_44784[(10)] = inst_44739__$1);

return statearr_44784;
})();
var statearr_44787_45916 = state_44769__$1;
(statearr_44787_45916[(2)] = null);

(statearr_44787_45916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_44790 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44790[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44790[(1)] = (1));

return statearr_44790;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44769){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44769);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44791){var ex__42714__auto__ = e44791;
var statearr_44792_45917 = state_44769;
(statearr_44792_45917[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44769[(4)]))){
var statearr_44793_45918 = state_44769;
(statearr_44793_45918[(1)] = cljs.core.first((state_44769[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45919 = state_44769;
state_44769 = G__45919;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44794 = f__42863__auto__();
(statearr_44794[(6)] = c__42862__auto___45888);

return statearr_44794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44798 = arguments.length;
switch (G__44798) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___45921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44825){
var state_val_44826 = (state_44825[(1)]);
if((state_val_44826 === (7))){
var inst_44807 = (state_44825[(7)]);
var inst_44807__$1 = (state_44825[(2)]);
var inst_44808 = (inst_44807__$1 == null);
var inst_44809 = cljs.core.not(inst_44808);
var state_44825__$1 = (function (){var statearr_44829 = state_44825;
(statearr_44829[(7)] = inst_44807__$1);

return statearr_44829;
})();
if(inst_44809){
var statearr_44830_45928 = state_44825__$1;
(statearr_44830_45928[(1)] = (8));

} else {
var statearr_44835_45929 = state_44825__$1;
(statearr_44835_45929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (1))){
var inst_44802 = (0);
var state_44825__$1 = (function (){var statearr_44839 = state_44825;
(statearr_44839[(8)] = inst_44802);

return statearr_44839;
})();
var statearr_44840_45930 = state_44825__$1;
(statearr_44840_45930[(2)] = null);

(statearr_44840_45930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (4))){
var state_44825__$1 = state_44825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44825__$1,(7),ch);
} else {
if((state_val_44826 === (6))){
var inst_44820 = (state_44825[(2)]);
var state_44825__$1 = state_44825;
var statearr_44841_45931 = state_44825__$1;
(statearr_44841_45931[(2)] = inst_44820);

(statearr_44841_45931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (3))){
var inst_44822 = (state_44825[(2)]);
var inst_44823 = cljs.core.async.close_BANG_(out);
var state_44825__$1 = (function (){var statearr_44845 = state_44825;
(statearr_44845[(9)] = inst_44822);

return statearr_44845;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44825__$1,inst_44823);
} else {
if((state_val_44826 === (2))){
var inst_44802 = (state_44825[(8)]);
var inst_44804 = (inst_44802 < n);
var state_44825__$1 = state_44825;
if(cljs.core.truth_(inst_44804)){
var statearr_44846_45932 = state_44825__$1;
(statearr_44846_45932[(1)] = (4));

} else {
var statearr_44847_45933 = state_44825__$1;
(statearr_44847_45933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (11))){
var inst_44802 = (state_44825[(8)]);
var inst_44812 = (state_44825[(2)]);
var inst_44813 = (inst_44802 + (1));
var inst_44802__$1 = inst_44813;
var state_44825__$1 = (function (){var statearr_44851 = state_44825;
(statearr_44851[(10)] = inst_44812);

(statearr_44851[(8)] = inst_44802__$1);

return statearr_44851;
})();
var statearr_44852_45940 = state_44825__$1;
(statearr_44852_45940[(2)] = null);

(statearr_44852_45940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (9))){
var state_44825__$1 = state_44825;
var statearr_44853_45941 = state_44825__$1;
(statearr_44853_45941[(2)] = null);

(statearr_44853_45941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (5))){
var state_44825__$1 = state_44825;
var statearr_44857_45942 = state_44825__$1;
(statearr_44857_45942[(2)] = null);

(statearr_44857_45942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (10))){
var inst_44817 = (state_44825[(2)]);
var state_44825__$1 = state_44825;
var statearr_44858_45943 = state_44825__$1;
(statearr_44858_45943[(2)] = inst_44817);

(statearr_44858_45943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44826 === (8))){
var inst_44807 = (state_44825[(7)]);
var state_44825__$1 = state_44825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44825__$1,(11),out,inst_44807);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_44859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44859[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44859[(1)] = (1));

return statearr_44859;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44825){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44825);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44860){var ex__42714__auto__ = e44860;
var statearr_44861_45944 = state_44825;
(statearr_44861_45944[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44825[(4)]))){
var statearr_44862_45945 = state_44825;
(statearr_44862_45945[(1)] = cljs.core.first((state_44825[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45946 = state_44825;
state_44825 = G__45946;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44863 = f__42863__auto__();
(statearr_44863[(6)] = c__42862__auto___45921);

return statearr_44863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44866 = (function (f,ch,meta44867){
this.f = f;
this.ch = ch;
this.meta44867 = meta44867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44868,meta44867__$1){
var self__ = this;
var _44868__$1 = this;
return (new cljs.core.async.t_cljs$core$async44866(self__.f,self__.ch,meta44867__$1));
}));

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44868){
var self__ = this;
var _44868__$1 = this;
return self__.meta44867;
}));

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44894 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44894 = (function (f,ch,meta44867,_,fn1,meta44895){
this.f = f;
this.ch = ch;
this.meta44867 = meta44867;
this._ = _;
this.fn1 = fn1;
this.meta44895 = meta44895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44896,meta44895__$1){
var self__ = this;
var _44896__$1 = this;
return (new cljs.core.async.t_cljs$core$async44894(self__.f,self__.ch,self__.meta44867,self__._,self__.fn1,meta44895__$1));
}));

(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44896){
var self__ = this;
var _44896__$1 = this;
return self__.meta44895;
}));

(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44865_SHARP_){
var G__44897 = (((p1__44865_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44865_SHARP_) : self__.f.call(null,p1__44865_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44897) : f1.call(null,G__44897));
});
}));

(cljs.core.async.t_cljs$core$async44894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44867","meta44867",-1395431468,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44866","cljs.core.async/t_cljs$core$async44866",-1064306877,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44895","meta44895",-1600714130,null)], null);
}));

(cljs.core.async.t_cljs$core$async44894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44894");

(cljs.core.async.t_cljs$core$async44894.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44894.
 */
cljs.core.async.__GT_t_cljs$core$async44894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44894(f__$1,ch__$1,meta44867__$1,___$2,fn1__$1,meta44895){
return (new cljs.core.async.t_cljs$core$async44894(f__$1,ch__$1,meta44867__$1,___$2,fn1__$1,meta44895));
});

}

return (new cljs.core.async.t_cljs$core$async44894(self__.f,self__.ch,self__.meta44867,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44898 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44898) : self__.f.call(null,G__44898));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44866.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44867","meta44867",-1395431468,null)], null);
}));

(cljs.core.async.t_cljs$core$async44866.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44866.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44866");

(cljs.core.async.t_cljs$core$async44866.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44866");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44866.
 */
cljs.core.async.__GT_t_cljs$core$async44866 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44866(f__$1,ch__$1,meta44867){
return (new cljs.core.async.t_cljs$core$async44866(f__$1,ch__$1,meta44867));
});

}

return (new cljs.core.async.t_cljs$core$async44866(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44899 = (function (f,ch,meta44900){
this.f = f;
this.ch = ch;
this.meta44900 = meta44900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44901,meta44900__$1){
var self__ = this;
var _44901__$1 = this;
return (new cljs.core.async.t_cljs$core$async44899(self__.f,self__.ch,meta44900__$1));
}));

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44901){
var self__ = this;
var _44901__$1 = this;
return self__.meta44900;
}));

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44899.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44900","meta44900",-656479218,null)], null);
}));

(cljs.core.async.t_cljs$core$async44899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44899");

(cljs.core.async.t_cljs$core$async44899.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44899.
 */
cljs.core.async.__GT_t_cljs$core$async44899 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44899(f__$1,ch__$1,meta44900){
return (new cljs.core.async.t_cljs$core$async44899(f__$1,ch__$1,meta44900));
});

}

return (new cljs.core.async.t_cljs$core$async44899(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44902 = (function (p,ch,meta44903){
this.p = p;
this.ch = ch;
this.meta44903 = meta44903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44904,meta44903__$1){
var self__ = this;
var _44904__$1 = this;
return (new cljs.core.async.t_cljs$core$async44902(self__.p,self__.ch,meta44903__$1));
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44904){
var self__ = this;
var _44904__$1 = this;
return self__.meta44903;
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44902.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44903","meta44903",1630548847,null)], null);
}));

(cljs.core.async.t_cljs$core$async44902.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44902");

(cljs.core.async.t_cljs$core$async44902.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44902");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44902.
 */
cljs.core.async.__GT_t_cljs$core$async44902 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44902(p__$1,ch__$1,meta44903){
return (new cljs.core.async.t_cljs$core$async44902(p__$1,ch__$1,meta44903));
});

}

return (new cljs.core.async.t_cljs$core$async44902(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44906 = arguments.length;
switch (G__44906) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___45961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_44927){
var state_val_44928 = (state_44927[(1)]);
if((state_val_44928 === (7))){
var inst_44923 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
var statearr_44929_45964 = state_44927__$1;
(statearr_44929_45964[(2)] = inst_44923);

(statearr_44929_45964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (1))){
var state_44927__$1 = state_44927;
var statearr_44930_45965 = state_44927__$1;
(statearr_44930_45965[(2)] = null);

(statearr_44930_45965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (4))){
var inst_44909 = (state_44927[(7)]);
var inst_44909__$1 = (state_44927[(2)]);
var inst_44910 = (inst_44909__$1 == null);
var state_44927__$1 = (function (){var statearr_44931 = state_44927;
(statearr_44931[(7)] = inst_44909__$1);

return statearr_44931;
})();
if(cljs.core.truth_(inst_44910)){
var statearr_44932_45967 = state_44927__$1;
(statearr_44932_45967[(1)] = (5));

} else {
var statearr_44933_45968 = state_44927__$1;
(statearr_44933_45968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (6))){
var inst_44909 = (state_44927[(7)]);
var inst_44914 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44909) : p.call(null,inst_44909));
var state_44927__$1 = state_44927;
if(cljs.core.truth_(inst_44914)){
var statearr_44934_45969 = state_44927__$1;
(statearr_44934_45969[(1)] = (8));

} else {
var statearr_44935_45970 = state_44927__$1;
(statearr_44935_45970[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (3))){
var inst_44925 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44927__$1,inst_44925);
} else {
if((state_val_44928 === (2))){
var state_44927__$1 = state_44927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44927__$1,(4),ch);
} else {
if((state_val_44928 === (11))){
var inst_44917 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
var statearr_44936_45971 = state_44927__$1;
(statearr_44936_45971[(2)] = inst_44917);

(statearr_44936_45971[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (9))){
var state_44927__$1 = state_44927;
var statearr_44937_45972 = state_44927__$1;
(statearr_44937_45972[(2)] = null);

(statearr_44937_45972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (5))){
var inst_44912 = cljs.core.async.close_BANG_(out);
var state_44927__$1 = state_44927;
var statearr_44938_45973 = state_44927__$1;
(statearr_44938_45973[(2)] = inst_44912);

(statearr_44938_45973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (10))){
var inst_44920 = (state_44927[(2)]);
var state_44927__$1 = (function (){var statearr_44939 = state_44927;
(statearr_44939[(8)] = inst_44920);

return statearr_44939;
})();
var statearr_44940_45974 = state_44927__$1;
(statearr_44940_45974[(2)] = null);

(statearr_44940_45974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (8))){
var inst_44909 = (state_44927[(7)]);
var state_44927__$1 = state_44927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44927__$1,(11),out,inst_44909);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_44941 = [null,null,null,null,null,null,null,null,null];
(statearr_44941[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44941[(1)] = (1));

return statearr_44941;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44927){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44927);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44942){var ex__42714__auto__ = e44942;
var statearr_44943_45976 = state_44927;
(statearr_44943_45976[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44927[(4)]))){
var statearr_44944_45977 = state_44927;
(statearr_44944_45977[(1)] = cljs.core.first((state_44927[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45978 = state_44927;
state_44927 = G__45978;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_44945 = f__42863__auto__();
(statearr_44945[(6)] = c__42862__auto___45961);

return statearr_44945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44947 = arguments.length;
switch (G__44947) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42862__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_45009){
var state_val_45010 = (state_45009[(1)]);
if((state_val_45010 === (7))){
var inst_45005 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45011_45981 = state_45009__$1;
(statearr_45011_45981[(2)] = inst_45005);

(statearr_45011_45981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (20))){
var inst_44975 = (state_45009[(7)]);
var inst_44986 = (state_45009[(2)]);
var inst_44987 = cljs.core.next(inst_44975);
var inst_44961 = inst_44987;
var inst_44962 = null;
var inst_44963 = (0);
var inst_44964 = (0);
var state_45009__$1 = (function (){var statearr_45012 = state_45009;
(statearr_45012[(8)] = inst_44962);

(statearr_45012[(9)] = inst_44986);

(statearr_45012[(10)] = inst_44961);

(statearr_45012[(11)] = inst_44964);

(statearr_45012[(12)] = inst_44963);

return statearr_45012;
})();
var statearr_45013_45982 = state_45009__$1;
(statearr_45013_45982[(2)] = null);

(statearr_45013_45982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (1))){
var state_45009__$1 = state_45009;
var statearr_45014_45983 = state_45009__$1;
(statearr_45014_45983[(2)] = null);

(statearr_45014_45983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (4))){
var inst_44950 = (state_45009[(13)]);
var inst_44950__$1 = (state_45009[(2)]);
var inst_44951 = (inst_44950__$1 == null);
var state_45009__$1 = (function (){var statearr_45015 = state_45009;
(statearr_45015[(13)] = inst_44950__$1);

return statearr_45015;
})();
if(cljs.core.truth_(inst_44951)){
var statearr_45016_45984 = state_45009__$1;
(statearr_45016_45984[(1)] = (5));

} else {
var statearr_45017_45985 = state_45009__$1;
(statearr_45017_45985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (15))){
var state_45009__$1 = state_45009;
var statearr_45021_45987 = state_45009__$1;
(statearr_45021_45987[(2)] = null);

(statearr_45021_45987[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (21))){
var state_45009__$1 = state_45009;
var statearr_45022_45988 = state_45009__$1;
(statearr_45022_45988[(2)] = null);

(statearr_45022_45988[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (13))){
var inst_44962 = (state_45009[(8)]);
var inst_44961 = (state_45009[(10)]);
var inst_44964 = (state_45009[(11)]);
var inst_44963 = (state_45009[(12)]);
var inst_44971 = (state_45009[(2)]);
var inst_44972 = (inst_44964 + (1));
var tmp45018 = inst_44962;
var tmp45019 = inst_44961;
var tmp45020 = inst_44963;
var inst_44961__$1 = tmp45019;
var inst_44962__$1 = tmp45018;
var inst_44963__$1 = tmp45020;
var inst_44964__$1 = inst_44972;
var state_45009__$1 = (function (){var statearr_45023 = state_45009;
(statearr_45023[(8)] = inst_44962__$1);

(statearr_45023[(10)] = inst_44961__$1);

(statearr_45023[(11)] = inst_44964__$1);

(statearr_45023[(14)] = inst_44971);

(statearr_45023[(12)] = inst_44963__$1);

return statearr_45023;
})();
var statearr_45024_45991 = state_45009__$1;
(statearr_45024_45991[(2)] = null);

(statearr_45024_45991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (22))){
var state_45009__$1 = state_45009;
var statearr_45025_45992 = state_45009__$1;
(statearr_45025_45992[(2)] = null);

(statearr_45025_45992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (6))){
var inst_44950 = (state_45009[(13)]);
var inst_44959 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44950) : f.call(null,inst_44950));
var inst_44960 = cljs.core.seq(inst_44959);
var inst_44961 = inst_44960;
var inst_44962 = null;
var inst_44963 = (0);
var inst_44964 = (0);
var state_45009__$1 = (function (){var statearr_45026 = state_45009;
(statearr_45026[(8)] = inst_44962);

(statearr_45026[(10)] = inst_44961);

(statearr_45026[(11)] = inst_44964);

(statearr_45026[(12)] = inst_44963);

return statearr_45026;
})();
var statearr_45027_45994 = state_45009__$1;
(statearr_45027_45994[(2)] = null);

(statearr_45027_45994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (17))){
var inst_44975 = (state_45009[(7)]);
var inst_44979 = cljs.core.chunk_first(inst_44975);
var inst_44980 = cljs.core.chunk_rest(inst_44975);
var inst_44981 = cljs.core.count(inst_44979);
var inst_44961 = inst_44980;
var inst_44962 = inst_44979;
var inst_44963 = inst_44981;
var inst_44964 = (0);
var state_45009__$1 = (function (){var statearr_45028 = state_45009;
(statearr_45028[(8)] = inst_44962);

(statearr_45028[(10)] = inst_44961);

(statearr_45028[(11)] = inst_44964);

(statearr_45028[(12)] = inst_44963);

return statearr_45028;
})();
var statearr_45029_45995 = state_45009__$1;
(statearr_45029_45995[(2)] = null);

(statearr_45029_45995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (3))){
var inst_45007 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45009__$1,inst_45007);
} else {
if((state_val_45010 === (12))){
var inst_44995 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45030_45997 = state_45009__$1;
(statearr_45030_45997[(2)] = inst_44995);

(statearr_45030_45997[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (2))){
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45009__$1,(4),in$);
} else {
if((state_val_45010 === (23))){
var inst_45003 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45031_45998 = state_45009__$1;
(statearr_45031_45998[(2)] = inst_45003);

(statearr_45031_45998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (19))){
var inst_44990 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45032_46000 = state_45009__$1;
(statearr_45032_46000[(2)] = inst_44990);

(statearr_45032_46000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (11))){
var inst_44975 = (state_45009[(7)]);
var inst_44961 = (state_45009[(10)]);
var inst_44975__$1 = cljs.core.seq(inst_44961);
var state_45009__$1 = (function (){var statearr_45033 = state_45009;
(statearr_45033[(7)] = inst_44975__$1);

return statearr_45033;
})();
if(inst_44975__$1){
var statearr_45034_46001 = state_45009__$1;
(statearr_45034_46001[(1)] = (14));

} else {
var statearr_45035_46002 = state_45009__$1;
(statearr_45035_46002[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (9))){
var inst_44997 = (state_45009[(2)]);
var inst_44998 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45009__$1 = (function (){var statearr_45036 = state_45009;
(statearr_45036[(15)] = inst_44997);

return statearr_45036;
})();
if(cljs.core.truth_(inst_44998)){
var statearr_45037_46003 = state_45009__$1;
(statearr_45037_46003[(1)] = (21));

} else {
var statearr_45038_46004 = state_45009__$1;
(statearr_45038_46004[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (5))){
var inst_44953 = cljs.core.async.close_BANG_(out);
var state_45009__$1 = state_45009;
var statearr_45039_46005 = state_45009__$1;
(statearr_45039_46005[(2)] = inst_44953);

(statearr_45039_46005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (14))){
var inst_44975 = (state_45009[(7)]);
var inst_44977 = cljs.core.chunked_seq_QMARK_(inst_44975);
var state_45009__$1 = state_45009;
if(inst_44977){
var statearr_45040_46006 = state_45009__$1;
(statearr_45040_46006[(1)] = (17));

} else {
var statearr_45041_46007 = state_45009__$1;
(statearr_45041_46007[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (16))){
var inst_44993 = (state_45009[(2)]);
var state_45009__$1 = state_45009;
var statearr_45042_46009 = state_45009__$1;
(statearr_45042_46009[(2)] = inst_44993);

(statearr_45042_46009[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45010 === (10))){
var inst_44962 = (state_45009[(8)]);
var inst_44964 = (state_45009[(11)]);
var inst_44969 = cljs.core._nth(inst_44962,inst_44964);
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45009__$1,(13),out,inst_44969);
} else {
if((state_val_45010 === (18))){
var inst_44975 = (state_45009[(7)]);
var inst_44984 = cljs.core.first(inst_44975);
var state_45009__$1 = state_45009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45009__$1,(20),out,inst_44984);
} else {
if((state_val_45010 === (8))){
var inst_44964 = (state_45009[(11)]);
var inst_44963 = (state_45009[(12)]);
var inst_44966 = (inst_44964 < inst_44963);
var inst_44967 = inst_44966;
var state_45009__$1 = state_45009;
if(cljs.core.truth_(inst_44967)){
var statearr_45043_46019 = state_45009__$1;
(statearr_45043_46019[(1)] = (10));

} else {
var statearr_45044_46020 = state_45009__$1;
(statearr_45044_46020[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_45045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45045[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__);

(statearr_45045[(1)] = (1));

return statearr_45045;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1 = (function (state_45009){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45009);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45046){var ex__42714__auto__ = e45046;
var statearr_45047_46026 = state_45009;
(statearr_45047_46026[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45009[(4)]))){
var statearr_45048_46027 = state_45009;
(statearr_45048_46027[(1)] = cljs.core.first((state_45009[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46028 = state_45009;
state_45009 = G__46028;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__ = function(state_45009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1.call(this,state_45009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_45049 = f__42863__auto__();
(statearr_45049[(6)] = c__42862__auto__);

return statearr_45049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));

return c__42862__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45051 = arguments.length;
switch (G__45051) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45053 = arguments.length;
switch (G__45053) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45055 = arguments.length;
switch (G__45055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___46046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_45083){
var state_val_45084 = (state_45083[(1)]);
if((state_val_45084 === (7))){
var inst_45078 = (state_45083[(2)]);
var state_45083__$1 = state_45083;
var statearr_45085_46051 = state_45083__$1;
(statearr_45085_46051[(2)] = inst_45078);

(statearr_45085_46051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (1))){
var inst_45059 = null;
var state_45083__$1 = (function (){var statearr_45089 = state_45083;
(statearr_45089[(7)] = inst_45059);

return statearr_45089;
})();
var statearr_45090_46056 = state_45083__$1;
(statearr_45090_46056[(2)] = null);

(statearr_45090_46056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (4))){
var inst_45063 = (state_45083[(8)]);
var inst_45063__$1 = (state_45083[(2)]);
var inst_45064 = (inst_45063__$1 == null);
var inst_45065 = cljs.core.not(inst_45064);
var state_45083__$1 = (function (){var statearr_45091 = state_45083;
(statearr_45091[(8)] = inst_45063__$1);

return statearr_45091;
})();
if(inst_45065){
var statearr_45092_46061 = state_45083__$1;
(statearr_45092_46061[(1)] = (5));

} else {
var statearr_45093_46064 = state_45083__$1;
(statearr_45093_46064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (6))){
var state_45083__$1 = state_45083;
var statearr_45094_46065 = state_45083__$1;
(statearr_45094_46065[(2)] = null);

(statearr_45094_46065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (3))){
var inst_45080 = (state_45083[(2)]);
var inst_45081 = cljs.core.async.close_BANG_(out);
var state_45083__$1 = (function (){var statearr_45095 = state_45083;
(statearr_45095[(9)] = inst_45080);

return statearr_45095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45083__$1,inst_45081);
} else {
if((state_val_45084 === (2))){
var state_45083__$1 = state_45083;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45083__$1,(4),ch);
} else {
if((state_val_45084 === (11))){
var inst_45063 = (state_45083[(8)]);
var inst_45072 = (state_45083[(2)]);
var inst_45059 = inst_45063;
var state_45083__$1 = (function (){var statearr_45104 = state_45083;
(statearr_45104[(7)] = inst_45059);

(statearr_45104[(10)] = inst_45072);

return statearr_45104;
})();
var statearr_45109_46068 = state_45083__$1;
(statearr_45109_46068[(2)] = null);

(statearr_45109_46068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (9))){
var inst_45063 = (state_45083[(8)]);
var state_45083__$1 = state_45083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45083__$1,(11),out,inst_45063);
} else {
if((state_val_45084 === (5))){
var inst_45059 = (state_45083[(7)]);
var inst_45063 = (state_45083[(8)]);
var inst_45067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45063,inst_45059);
var state_45083__$1 = state_45083;
if(inst_45067){
var statearr_45123_46071 = state_45083__$1;
(statearr_45123_46071[(1)] = (8));

} else {
var statearr_45124_46072 = state_45083__$1;
(statearr_45124_46072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (10))){
var inst_45075 = (state_45083[(2)]);
var state_45083__$1 = state_45083;
var statearr_45125_46073 = state_45083__$1;
(statearr_45125_46073[(2)] = inst_45075);

(statearr_45125_46073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (8))){
var inst_45059 = (state_45083[(7)]);
var tmp45118 = inst_45059;
var inst_45059__$1 = tmp45118;
var state_45083__$1 = (function (){var statearr_45129 = state_45083;
(statearr_45129[(7)] = inst_45059__$1);

return statearr_45129;
})();
var statearr_45130_46075 = state_45083__$1;
(statearr_45130_46075[(2)] = null);

(statearr_45130_46075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_45131 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45131[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45131[(1)] = (1));

return statearr_45131;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_45083){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45083);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45132){var ex__42714__auto__ = e45132;
var statearr_45133_46077 = state_45083;
(statearr_45133_46077[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45083[(4)]))){
var statearr_45134_46078 = state_45083;
(statearr_45134_46078[(1)] = cljs.core.first((state_45083[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46079 = state_45083;
state_45083 = G__46079;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_45083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_45083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_45142 = f__42863__auto__();
(statearr_45142[(6)] = c__42862__auto___46046);

return statearr_45142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45151 = arguments.length;
switch (G__45151) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___46082 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_45196){
var state_val_45197 = (state_45196[(1)]);
if((state_val_45197 === (7))){
var inst_45192 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45198_46084 = state_45196__$1;
(statearr_45198_46084[(2)] = inst_45192);

(statearr_45198_46084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (1))){
var inst_45159 = (new Array(n));
var inst_45160 = inst_45159;
var inst_45161 = (0);
var state_45196__$1 = (function (){var statearr_45199 = state_45196;
(statearr_45199[(7)] = inst_45161);

(statearr_45199[(8)] = inst_45160);

return statearr_45199;
})();
var statearr_45200_46085 = state_45196__$1;
(statearr_45200_46085[(2)] = null);

(statearr_45200_46085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (4))){
var inst_45164 = (state_45196[(9)]);
var inst_45164__$1 = (state_45196[(2)]);
var inst_45165 = (inst_45164__$1 == null);
var inst_45166 = cljs.core.not(inst_45165);
var state_45196__$1 = (function (){var statearr_45201 = state_45196;
(statearr_45201[(9)] = inst_45164__$1);

return statearr_45201;
})();
if(inst_45166){
var statearr_45202_46093 = state_45196__$1;
(statearr_45202_46093[(1)] = (5));

} else {
var statearr_45203_46094 = state_45196__$1;
(statearr_45203_46094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (15))){
var inst_45186 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45204_46100 = state_45196__$1;
(statearr_45204_46100[(2)] = inst_45186);

(statearr_45204_46100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (13))){
var state_45196__$1 = state_45196;
var statearr_45205_46106 = state_45196__$1;
(statearr_45205_46106[(2)] = null);

(statearr_45205_46106[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (6))){
var inst_45161 = (state_45196[(7)]);
var inst_45182 = (inst_45161 > (0));
var state_45196__$1 = state_45196;
if(cljs.core.truth_(inst_45182)){
var statearr_45206_46114 = state_45196__$1;
(statearr_45206_46114[(1)] = (12));

} else {
var statearr_45207_46119 = state_45196__$1;
(statearr_45207_46119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (3))){
var inst_45194 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45196__$1,inst_45194);
} else {
if((state_val_45197 === (12))){
var inst_45160 = (state_45196[(8)]);
var inst_45184 = cljs.core.vec(inst_45160);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45196__$1,(15),out,inst_45184);
} else {
if((state_val_45197 === (2))){
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45196__$1,(4),ch);
} else {
if((state_val_45197 === (11))){
var inst_45176 = (state_45196[(2)]);
var inst_45177 = (new Array(n));
var inst_45160 = inst_45177;
var inst_45161 = (0);
var state_45196__$1 = (function (){var statearr_45208 = state_45196;
(statearr_45208[(7)] = inst_45161);

(statearr_45208[(8)] = inst_45160);

(statearr_45208[(10)] = inst_45176);

return statearr_45208;
})();
var statearr_45209_46136 = state_45196__$1;
(statearr_45209_46136[(2)] = null);

(statearr_45209_46136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (9))){
var inst_45160 = (state_45196[(8)]);
var inst_45174 = cljs.core.vec(inst_45160);
var state_45196__$1 = state_45196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45196__$1,(11),out,inst_45174);
} else {
if((state_val_45197 === (5))){
var inst_45161 = (state_45196[(7)]);
var inst_45164 = (state_45196[(9)]);
var inst_45169 = (state_45196[(11)]);
var inst_45160 = (state_45196[(8)]);
var inst_45168 = (inst_45160[inst_45161] = inst_45164);
var inst_45169__$1 = (inst_45161 + (1));
var inst_45170 = (inst_45169__$1 < n);
var state_45196__$1 = (function (){var statearr_45210 = state_45196;
(statearr_45210[(11)] = inst_45169__$1);

(statearr_45210[(12)] = inst_45168);

return statearr_45210;
})();
if(cljs.core.truth_(inst_45170)){
var statearr_45211_46148 = state_45196__$1;
(statearr_45211_46148[(1)] = (8));

} else {
var statearr_45212_46149 = state_45196__$1;
(statearr_45212_46149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (14))){
var inst_45189 = (state_45196[(2)]);
var inst_45190 = cljs.core.async.close_BANG_(out);
var state_45196__$1 = (function (){var statearr_45214 = state_45196;
(statearr_45214[(13)] = inst_45189);

return statearr_45214;
})();
var statearr_45215_46161 = state_45196__$1;
(statearr_45215_46161[(2)] = inst_45190);

(statearr_45215_46161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (10))){
var inst_45180 = (state_45196[(2)]);
var state_45196__$1 = state_45196;
var statearr_45216_46164 = state_45196__$1;
(statearr_45216_46164[(2)] = inst_45180);

(statearr_45216_46164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45197 === (8))){
var inst_45169 = (state_45196[(11)]);
var inst_45160 = (state_45196[(8)]);
var tmp45213 = inst_45160;
var inst_45160__$1 = tmp45213;
var inst_45161 = inst_45169;
var state_45196__$1 = (function (){var statearr_45217 = state_45196;
(statearr_45217[(7)] = inst_45161);

(statearr_45217[(8)] = inst_45160__$1);

return statearr_45217;
})();
var statearr_45218_46171 = state_45196__$1;
(statearr_45218_46171[(2)] = null);

(statearr_45218_46171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_45219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45219[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45219[(1)] = (1));

return statearr_45219;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_45196){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45196);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45220){var ex__42714__auto__ = e45220;
var statearr_45221_46182 = state_45196;
(statearr_45221_46182[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45196[(4)]))){
var statearr_45222_46188 = state_45196;
(statearr_45222_46188[(1)] = cljs.core.first((state_45196[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46190 = state_45196;
state_45196 = G__46190;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_45196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_45196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_45223 = f__42863__auto__();
(statearr_45223[(6)] = c__42862__auto___46082);

return statearr_45223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45225 = arguments.length;
switch (G__45225) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42862__auto___46192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42863__auto__ = (function (){var switch__42710__auto__ = (function (state_45270){
var state_val_45271 = (state_45270[(1)]);
if((state_val_45271 === (7))){
var inst_45265 = (state_45270[(2)]);
var state_45270__$1 = state_45270;
var statearr_45272_46193 = state_45270__$1;
(statearr_45272_46193[(2)] = inst_45265);

(statearr_45272_46193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (1))){
var inst_45226 = [];
var inst_45227 = inst_45226;
var inst_45228 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45270__$1 = (function (){var statearr_45273 = state_45270;
(statearr_45273[(7)] = inst_45228);

(statearr_45273[(8)] = inst_45227);

return statearr_45273;
})();
var statearr_45274_46194 = state_45270__$1;
(statearr_45274_46194[(2)] = null);

(statearr_45274_46194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (4))){
var inst_45231 = (state_45270[(9)]);
var inst_45231__$1 = (state_45270[(2)]);
var inst_45232 = (inst_45231__$1 == null);
var inst_45233 = cljs.core.not(inst_45232);
var state_45270__$1 = (function (){var statearr_45275 = state_45270;
(statearr_45275[(9)] = inst_45231__$1);

return statearr_45275;
})();
if(inst_45233){
var statearr_45276_46195 = state_45270__$1;
(statearr_45276_46195[(1)] = (5));

} else {
var statearr_45277_46200 = state_45270__$1;
(statearr_45277_46200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (15))){
var inst_45258 = (state_45270[(2)]);
var state_45270__$1 = state_45270;
var statearr_45278_46201 = state_45270__$1;
(statearr_45278_46201[(2)] = inst_45258);

(statearr_45278_46201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (13))){
var state_45270__$1 = state_45270;
var statearr_45279_46202 = state_45270__$1;
(statearr_45279_46202[(2)] = null);

(statearr_45279_46202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (6))){
var inst_45227 = (state_45270[(8)]);
var inst_45252 = inst_45227.length;
var inst_45253 = (inst_45252 > (0));
var state_45270__$1 = state_45270;
if(cljs.core.truth_(inst_45253)){
var statearr_45280_46207 = state_45270__$1;
(statearr_45280_46207[(1)] = (12));

} else {
var statearr_45281_46212 = state_45270__$1;
(statearr_45281_46212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (3))){
var inst_45267 = (state_45270[(2)]);
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45270__$1,inst_45267);
} else {
if((state_val_45271 === (12))){
var inst_45227 = (state_45270[(8)]);
var inst_45256 = cljs.core.vec(inst_45227);
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45270__$1,(15),out,inst_45256);
} else {
if((state_val_45271 === (2))){
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45270__$1,(4),ch);
} else {
if((state_val_45271 === (11))){
var inst_45231 = (state_45270[(9)]);
var inst_45235 = (state_45270[(10)]);
var inst_45245 = (state_45270[(2)]);
var inst_45246 = [];
var inst_45247 = inst_45246.push(inst_45231);
var inst_45227 = inst_45246;
var inst_45228 = inst_45235;
var state_45270__$1 = (function (){var statearr_45282 = state_45270;
(statearr_45282[(11)] = inst_45247);

(statearr_45282[(7)] = inst_45228);

(statearr_45282[(8)] = inst_45227);

(statearr_45282[(12)] = inst_45245);

return statearr_45282;
})();
var statearr_45283_46218 = state_45270__$1;
(statearr_45283_46218[(2)] = null);

(statearr_45283_46218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (9))){
var inst_45227 = (state_45270[(8)]);
var inst_45243 = cljs.core.vec(inst_45227);
var state_45270__$1 = state_45270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45270__$1,(11),out,inst_45243);
} else {
if((state_val_45271 === (5))){
var inst_45228 = (state_45270[(7)]);
var inst_45231 = (state_45270[(9)]);
var inst_45235 = (state_45270[(10)]);
var inst_45235__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45231) : f.call(null,inst_45231));
var inst_45236 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45235__$1,inst_45228);
var inst_45237 = cljs.core.keyword_identical_QMARK_(inst_45228,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45238 = ((inst_45236) || (inst_45237));
var state_45270__$1 = (function (){var statearr_45284 = state_45270;
(statearr_45284[(10)] = inst_45235__$1);

return statearr_45284;
})();
if(cljs.core.truth_(inst_45238)){
var statearr_45285_46220 = state_45270__$1;
(statearr_45285_46220[(1)] = (8));

} else {
var statearr_45286_46221 = state_45270__$1;
(statearr_45286_46221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (14))){
var inst_45261 = (state_45270[(2)]);
var inst_45263 = cljs.core.async.close_BANG_(out);
var state_45270__$1 = (function (){var statearr_45288 = state_45270;
(statearr_45288[(13)] = inst_45261);

return statearr_45288;
})();
var statearr_45289_46222 = state_45270__$1;
(statearr_45289_46222[(2)] = inst_45263);

(statearr_45289_46222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (10))){
var inst_45250 = (state_45270[(2)]);
var state_45270__$1 = state_45270;
var statearr_45290_46224 = state_45270__$1;
(statearr_45290_46224[(2)] = inst_45250);

(statearr_45290_46224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45271 === (8))){
var inst_45227 = (state_45270[(8)]);
var inst_45231 = (state_45270[(9)]);
var inst_45235 = (state_45270[(10)]);
var inst_45240 = inst_45227.push(inst_45231);
var tmp45287 = inst_45227;
var inst_45227__$1 = tmp45287;
var inst_45228 = inst_45235;
var state_45270__$1 = (function (){var statearr_45291 = state_45270;
(statearr_45291[(7)] = inst_45228);

(statearr_45291[(14)] = inst_45240);

(statearr_45291[(8)] = inst_45227__$1);

return statearr_45291;
})();
var statearr_45292_46228 = state_45270__$1;
(statearr_45292_46228[(2)] = null);

(statearr_45292_46228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42711__auto__ = null;
var cljs$core$async$state_machine__42711__auto____0 = (function (){
var statearr_45293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45293[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45293[(1)] = (1));

return statearr_45293;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_45270){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45270);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45294){var ex__42714__auto__ = e45294;
var statearr_45295_46232 = state_45270;
(statearr_45295_46232[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45270[(4)]))){
var statearr_45296_46233 = state_45270;
(statearr_45296_46233[(1)] = cljs.core.first((state_45270[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46238 = state_45270;
state_45270 = G__46238;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_45270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_45270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42864__auto__ = (function (){var statearr_45297 = f__42863__auto__();
(statearr_45297[(6)] = c__42862__auto___46192);

return statearr_45297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42864__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
