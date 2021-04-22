goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42936 = arguments.length;
switch (G__42936) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42943 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42943 = (function (f,blockable,meta42944){
this.f = f;
this.blockable = blockable;
this.meta42944 = meta42944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42945,meta42944__$1){
var self__ = this;
var _42945__$1 = this;
return (new cljs.core.async.t_cljs$core$async42943(self__.f,self__.blockable,meta42944__$1));
}));

(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42945){
var self__ = this;
var _42945__$1 = this;
return self__.meta42944;
}));

(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42943.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42944","meta42944",-890825128,null)], null);
}));

(cljs.core.async.t_cljs$core$async42943.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42943.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42943");

(cljs.core.async.t_cljs$core$async42943.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42943");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42943.
 */
cljs.core.async.__GT_t_cljs$core$async42943 = (function cljs$core$async$__GT_t_cljs$core$async42943(f__$1,blockable__$1,meta42944){
return (new cljs.core.async.t_cljs$core$async42943(f__$1,blockable__$1,meta42944));
});

}

return (new cljs.core.async.t_cljs$core$async42943(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42958 = arguments.length;
switch (G__42958) {
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
var G__42963 = arguments.length;
switch (G__42963) {
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
var G__42967 = arguments.length;
switch (G__42967) {
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
var val_45254 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45254) : fn1.call(null,val_45254));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45254) : fn1.call(null,val_45254));
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
var n__4613__auto___45263 = n;
var x_45264 = (0);
while(true){
if((x_45264 < n__4613__auto___45263)){
(a[x_45264] = x_45264);

var G__45265 = (x_45264 + (1));
x_45264 = G__45265;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42976 = (function (flag,meta42977){
this.flag = flag;
this.meta42977 = meta42977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42978,meta42977__$1){
var self__ = this;
var _42978__$1 = this;
return (new cljs.core.async.t_cljs$core$async42976(self__.flag,meta42977__$1));
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42978){
var self__ = this;
var _42978__$1 = this;
return self__.meta42977;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42977","meta42977",-687508916,null)], null);
}));

(cljs.core.async.t_cljs$core$async42976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42976");

(cljs.core.async.t_cljs$core$async42976.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42976.
 */
cljs.core.async.__GT_t_cljs$core$async42976 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42976(flag__$1,meta42977){
return (new cljs.core.async.t_cljs$core$async42976(flag__$1,meta42977));
});

}

return (new cljs.core.async.t_cljs$core$async42976(flag,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43007_SHARP_){
var G__43011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43007_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43011) : fret.call(null,G__43011));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43008_SHARP_){
var G__43012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43008_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43012) : fret.call(null,G__43012));
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
var G__45272 = (i + (1));
i = G__45272;
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
var len__4736__auto___45275 = arguments.length;
var i__4737__auto___45276 = (0);
while(true){
if((i__4737__auto___45276 < len__4736__auto___45275)){
args__4742__auto__.push((arguments[i__4737__auto___45276]));

var G__45277 = (i__4737__auto___45276 + (1));
i__4737__auto___45276 = G__45277;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43024){
var map__43026 = p__43024;
var map__43026__$1 = (((((!((map__43026 == null))))?(((((map__43026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43026):map__43026);
var opts = map__43026__$1;
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
var G__43057 = arguments.length;
switch (G__43057) {
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
var c__42850__auto___45279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43146){
var state_val_43147 = (state_43146[(1)]);
if((state_val_43147 === (7))){
var inst_43126 = (state_43146[(2)]);
var state_43146__$1 = state_43146;
var statearr_43161_45280 = state_43146__$1;
(statearr_43161_45280[(2)] = inst_43126);

(statearr_43161_45280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (1))){
var state_43146__$1 = state_43146;
var statearr_43163_45281 = state_43146__$1;
(statearr_43163_45281[(2)] = null);

(statearr_43163_45281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (4))){
var inst_43099 = (state_43146[(7)]);
var inst_43099__$1 = (state_43146[(2)]);
var inst_43103 = (inst_43099__$1 == null);
var state_43146__$1 = (function (){var statearr_43169 = state_43146;
(statearr_43169[(7)] = inst_43099__$1);

return statearr_43169;
})();
if(cljs.core.truth_(inst_43103)){
var statearr_43170_45283 = state_43146__$1;
(statearr_43170_45283[(1)] = (5));

} else {
var statearr_43175_45284 = state_43146__$1;
(statearr_43175_45284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (13))){
var state_43146__$1 = state_43146;
var statearr_43180_45286 = state_43146__$1;
(statearr_43180_45286[(2)] = null);

(statearr_43180_45286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (6))){
var inst_43099 = (state_43146[(7)]);
var state_43146__$1 = state_43146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43146__$1,(11),to,inst_43099);
} else {
if((state_val_43147 === (3))){
var inst_43140 = (state_43146[(2)]);
var state_43146__$1 = state_43146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43146__$1,inst_43140);
} else {
if((state_val_43147 === (12))){
var state_43146__$1 = state_43146;
var statearr_43186_45288 = state_43146__$1;
(statearr_43186_45288[(2)] = null);

(statearr_43186_45288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (2))){
var state_43146__$1 = state_43146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43146__$1,(4),from);
} else {
if((state_val_43147 === (11))){
var inst_43113 = (state_43146[(2)]);
var state_43146__$1 = state_43146;
if(cljs.core.truth_(inst_43113)){
var statearr_43194_45289 = state_43146__$1;
(statearr_43194_45289[(1)] = (12));

} else {
var statearr_43195_45291 = state_43146__$1;
(statearr_43195_45291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (9))){
var state_43146__$1 = state_43146;
var statearr_43197_45292 = state_43146__$1;
(statearr_43197_45292[(2)] = null);

(statearr_43197_45292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (5))){
var state_43146__$1 = state_43146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43198_45294 = state_43146__$1;
(statearr_43198_45294[(1)] = (8));

} else {
var statearr_43199_45295 = state_43146__$1;
(statearr_43199_45295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (14))){
var inst_43124 = (state_43146[(2)]);
var state_43146__$1 = state_43146;
var statearr_43203_45296 = state_43146__$1;
(statearr_43203_45296[(2)] = inst_43124);

(statearr_43203_45296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (10))){
var inst_43109 = (state_43146[(2)]);
var state_43146__$1 = state_43146;
var statearr_43208_45297 = state_43146__$1;
(statearr_43208_45297[(2)] = inst_43109);

(statearr_43208_45297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43147 === (8))){
var inst_43106 = cljs.core.async.close_BANG_(to);
var state_43146__$1 = state_43146;
var statearr_43209_45300 = state_43146__$1;
(statearr_43209_45300[(2)] = inst_43106);

(statearr_43209_45300[(1)] = (10));


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
var statearr_43210 = [null,null,null,null,null,null,null,null];
(statearr_43210[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43210[(1)] = (1));

return statearr_43210;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43146){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43146);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43211){var ex__42714__auto__ = e43211;
var statearr_43212_45301 = state_43146;
(statearr_43212_45301[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43146[(4)]))){
var statearr_43213_45302 = state_43146;
(statearr_43213_45302[(1)] = cljs.core.first((state_43146[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45305 = state_43146;
state_43146 = G__45305;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43216 = f__42851__auto__();
(statearr_43216[(6)] = c__42850__auto___45279);

return statearr_43216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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
var process = (function (p__43227){
var vec__43230 = p__43227;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43230,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43230,(1),null);
var job = vec__43230;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42850__auto___45306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43237){
var state_val_43238 = (state_43237[(1)]);
if((state_val_43238 === (1))){
var state_43237__$1 = state_43237;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43237__$1,(2),res,v);
} else {
if((state_val_43238 === (2))){
var inst_43234 = (state_43237[(2)]);
var inst_43235 = cljs.core.async.close_BANG_(res);
var state_43237__$1 = (function (){var statearr_43239 = state_43237;
(statearr_43239[(7)] = inst_43234);

return statearr_43239;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43237__$1,inst_43235);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43240 = [null,null,null,null,null,null,null,null];
(statearr_43240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43240[(1)] = (1));

return statearr_43240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43237){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43237);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43242){var ex__42714__auto__ = e43242;
var statearr_43244_45309 = state_43237;
(statearr_43244_45309[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43237[(4)]))){
var statearr_43246_45310 = state_43237;
(statearr_43246_45310[(1)] = cljs.core.first((state_43237[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45311 = state_43237;
state_43237 = G__45311;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43237){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43250 = f__42851__auto__();
(statearr_43250[(6)] = c__42850__auto___45306);

return statearr_43250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43255){
var vec__43256 = p__43255;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43256,(1),null);
var job = vec__43256;
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
var n__4613__auto___45312 = n;
var __45313 = (0);
while(true){
if((__45313 < n__4613__auto___45312)){
var G__43262_45314 = type;
var G__43262_45315__$1 = (((G__43262_45314 instanceof cljs.core.Keyword))?G__43262_45314.fqn:null);
switch (G__43262_45315__$1) {
case "compute":
var c__42850__auto___45318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45313,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = ((function (__45313,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function (state_43278){
var state_val_43279 = (state_43278[(1)]);
if((state_val_43279 === (1))){
var state_43278__$1 = state_43278;
var statearr_43281_45320 = state_43278__$1;
(statearr_43281_45320[(2)] = null);

(statearr_43281_45320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43279 === (2))){
var state_43278__$1 = state_43278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43278__$1,(4),jobs);
} else {
if((state_val_43279 === (3))){
var inst_43275 = (state_43278[(2)]);
var state_43278__$1 = state_43278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43278__$1,inst_43275);
} else {
if((state_val_43279 === (4))){
var inst_43267 = (state_43278[(2)]);
var inst_43268 = process(inst_43267);
var state_43278__$1 = state_43278;
if(cljs.core.truth_(inst_43268)){
var statearr_43289_45321 = state_43278__$1;
(statearr_43289_45321[(1)] = (5));

} else {
var statearr_43291_45322 = state_43278__$1;
(statearr_43291_45322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43279 === (5))){
var state_43278__$1 = state_43278;
var statearr_43294_45323 = state_43278__$1;
(statearr_43294_45323[(2)] = null);

(statearr_43294_45323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43279 === (6))){
var state_43278__$1 = state_43278;
var statearr_43295_45325 = state_43278__$1;
(statearr_43295_45325[(2)] = null);

(statearr_43295_45325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43279 === (7))){
var inst_43273 = (state_43278[(2)]);
var state_43278__$1 = state_43278;
var statearr_43297_45326 = state_43278__$1;
(statearr_43297_45326[(2)] = inst_43273);

(statearr_43297_45326[(1)] = (3));


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
});})(__45313,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
;
return ((function (__45313,switch__42710__auto__,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43299 = [null,null,null,null,null,null,null];
(statearr_43299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43299[(1)] = (1));

return statearr_43299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43278){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43278);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43303){var ex__42714__auto__ = e43303;
var statearr_43304_45327 = state_43278;
(statearr_43304_45327[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43278[(4)]))){
var statearr_43306_45328 = state_43278;
(statearr_43306_45328[(1)] = cljs.core.first((state_43278[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45329 = state_43278;
state_43278 = G__45329;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__45313,switch__42710__auto__,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
})();
var state__42852__auto__ = (function (){var statearr_43313 = f__42851__auto__();
(statearr_43313[(6)] = c__42850__auto___45318);

return statearr_43313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
});})(__45313,c__42850__auto___45318,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
);


break;
case "async":
var c__42850__auto___45330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45313,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = ((function (__45313,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function (state_43328){
var state_val_43329 = (state_43328[(1)]);
if((state_val_43329 === (1))){
var state_43328__$1 = state_43328;
var statearr_43334_45335 = state_43328__$1;
(statearr_43334_45335[(2)] = null);

(statearr_43334_45335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (2))){
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43328__$1,(4),jobs);
} else {
if((state_val_43329 === (3))){
var inst_43326 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43328__$1,inst_43326);
} else {
if((state_val_43329 === (4))){
var inst_43318 = (state_43328[(2)]);
var inst_43319 = async(inst_43318);
var state_43328__$1 = state_43328;
if(cljs.core.truth_(inst_43319)){
var statearr_43339_45336 = state_43328__$1;
(statearr_43339_45336[(1)] = (5));

} else {
var statearr_43340_45337 = state_43328__$1;
(statearr_43340_45337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (5))){
var state_43328__$1 = state_43328;
var statearr_43343_45338 = state_43328__$1;
(statearr_43343_45338[(2)] = null);

(statearr_43343_45338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (6))){
var state_43328__$1 = state_43328;
var statearr_43344_45339 = state_43328__$1;
(statearr_43344_45339[(2)] = null);

(statearr_43344_45339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43329 === (7))){
var inst_43324 = (state_43328[(2)]);
var state_43328__$1 = state_43328;
var statearr_43346_45340 = state_43328__$1;
(statearr_43346_45340[(2)] = inst_43324);

(statearr_43346_45340[(1)] = (3));


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
});})(__45313,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
;
return ((function (__45313,switch__42710__auto__,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43351 = [null,null,null,null,null,null,null];
(statearr_43351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43351[(1)] = (1));

return statearr_43351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43328){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43328);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43354){var ex__42714__auto__ = e43354;
var statearr_43355_45341 = state_43328;
(statearr_43355_45341[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43328[(4)]))){
var statearr_43356_45342 = state_43328;
(statearr_43356_45342[(1)] = cljs.core.first((state_43328[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45343 = state_43328;
state_43328 = G__45343;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43328){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__45313,switch__42710__auto__,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
})();
var state__42852__auto__ = (function (){var statearr_43357 = f__42851__auto__();
(statearr_43357[(6)] = c__42850__auto___45330);

return statearr_43357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
});})(__45313,c__42850__auto___45330,G__43262_45314,G__43262_45315__$1,n__4613__auto___45312,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43262_45315__$1)].join('')));

}

var G__45344 = (__45313 + (1));
__45313 = G__45344;
continue;
} else {
}
break;
}

var c__42850__auto___45345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43394){
var state_val_43395 = (state_43394[(1)]);
if((state_val_43395 === (7))){
var inst_43385 = (state_43394[(2)]);
var state_43394__$1 = state_43394;
var statearr_43417_45346 = state_43394__$1;
(statearr_43417_45346[(2)] = inst_43385);

(statearr_43417_45346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43395 === (1))){
var state_43394__$1 = state_43394;
var statearr_43418_45347 = state_43394__$1;
(statearr_43418_45347[(2)] = null);

(statearr_43418_45347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43395 === (4))){
var inst_43365 = (state_43394[(7)]);
var inst_43365__$1 = (state_43394[(2)]);
var inst_43367 = (inst_43365__$1 == null);
var state_43394__$1 = (function (){var statearr_43424 = state_43394;
(statearr_43424[(7)] = inst_43365__$1);

return statearr_43424;
})();
if(cljs.core.truth_(inst_43367)){
var statearr_43425_45350 = state_43394__$1;
(statearr_43425_45350[(1)] = (5));

} else {
var statearr_43430_45351 = state_43394__$1;
(statearr_43430_45351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43395 === (6))){
var inst_43365 = (state_43394[(7)]);
var inst_43375 = (state_43394[(8)]);
var inst_43375__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43376 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43377 = [inst_43365,inst_43375__$1];
var inst_43378 = (new cljs.core.PersistentVector(null,2,(5),inst_43376,inst_43377,null));
var state_43394__$1 = (function (){var statearr_43435 = state_43394;
(statearr_43435[(8)] = inst_43375__$1);

return statearr_43435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43394__$1,(8),jobs,inst_43378);
} else {
if((state_val_43395 === (3))){
var inst_43392 = (state_43394[(2)]);
var state_43394__$1 = state_43394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43394__$1,inst_43392);
} else {
if((state_val_43395 === (2))){
var state_43394__$1 = state_43394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43394__$1,(4),from);
} else {
if((state_val_43395 === (9))){
var inst_43382 = (state_43394[(2)]);
var state_43394__$1 = (function (){var statearr_43444 = state_43394;
(statearr_43444[(9)] = inst_43382);

return statearr_43444;
})();
var statearr_43445_45352 = state_43394__$1;
(statearr_43445_45352[(2)] = null);

(statearr_43445_45352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43395 === (5))){
var inst_43373 = cljs.core.async.close_BANG_(jobs);
var state_43394__$1 = state_43394;
var statearr_43450_45353 = state_43394__$1;
(statearr_43450_45353[(2)] = inst_43373);

(statearr_43450_45353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43395 === (8))){
var inst_43375 = (state_43394[(8)]);
var inst_43380 = (state_43394[(2)]);
var state_43394__$1 = (function (){var statearr_43451 = state_43394;
(statearr_43451[(10)] = inst_43380);

return statearr_43451;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43394__$1,(9),results,inst_43375);
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
var statearr_43452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43452[(1)] = (1));

return statearr_43452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43394){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43394);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43453){var ex__42714__auto__ = e43453;
var statearr_43454_45354 = state_43394;
(statearr_43454_45354[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43394[(4)]))){
var statearr_43459_45355 = state_43394;
(statearr_43459_45355[(1)] = cljs.core.first((state_43394[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45360 = state_43394;
state_43394 = G__45360;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43465 = f__42851__auto__();
(statearr_43465[(6)] = c__42850__auto___45345);

return statearr_43465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


var c__42850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43522){
var state_val_43523 = (state_43522[(1)]);
if((state_val_43523 === (7))){
var inst_43517 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
var statearr_43538_45367 = state_43522__$1;
(statearr_43538_45367[(2)] = inst_43517);

(statearr_43538_45367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (20))){
var state_43522__$1 = state_43522;
var statearr_43543_45368 = state_43522__$1;
(statearr_43543_45368[(2)] = null);

(statearr_43543_45368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (1))){
var state_43522__$1 = state_43522;
var statearr_43547_45369 = state_43522__$1;
(statearr_43547_45369[(2)] = null);

(statearr_43547_45369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (4))){
var inst_43479 = (state_43522[(7)]);
var inst_43479__$1 = (state_43522[(2)]);
var inst_43480 = (inst_43479__$1 == null);
var state_43522__$1 = (function (){var statearr_43558 = state_43522;
(statearr_43558[(7)] = inst_43479__$1);

return statearr_43558;
})();
if(cljs.core.truth_(inst_43480)){
var statearr_43559_45373 = state_43522__$1;
(statearr_43559_45373[(1)] = (5));

} else {
var statearr_43560_45374 = state_43522__$1;
(statearr_43560_45374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (15))){
var inst_43499 = (state_43522[(8)]);
var state_43522__$1 = state_43522;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43522__$1,(18),to,inst_43499);
} else {
if((state_val_43523 === (21))){
var inst_43512 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
var statearr_43565_45378 = state_43522__$1;
(statearr_43565_45378[(2)] = inst_43512);

(statearr_43565_45378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (13))){
var inst_43514 = (state_43522[(2)]);
var state_43522__$1 = (function (){var statearr_43572 = state_43522;
(statearr_43572[(9)] = inst_43514);

return statearr_43572;
})();
var statearr_43573_45379 = state_43522__$1;
(statearr_43573_45379[(2)] = null);

(statearr_43573_45379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (6))){
var inst_43479 = (state_43522[(7)]);
var state_43522__$1 = state_43522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43522__$1,(11),inst_43479);
} else {
if((state_val_43523 === (17))){
var inst_43507 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
if(cljs.core.truth_(inst_43507)){
var statearr_43584_45380 = state_43522__$1;
(statearr_43584_45380[(1)] = (19));

} else {
var statearr_43585_45381 = state_43522__$1;
(statearr_43585_45381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (3))){
var inst_43519 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43522__$1,inst_43519);
} else {
if((state_val_43523 === (12))){
var inst_43495 = (state_43522[(10)]);
var state_43522__$1 = state_43522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43522__$1,(14),inst_43495);
} else {
if((state_val_43523 === (2))){
var state_43522__$1 = state_43522;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43522__$1,(4),results);
} else {
if((state_val_43523 === (19))){
var state_43522__$1 = state_43522;
var statearr_43586_45389 = state_43522__$1;
(statearr_43586_45389[(2)] = null);

(statearr_43586_45389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (11))){
var inst_43495 = (state_43522[(2)]);
var state_43522__$1 = (function (){var statearr_43589 = state_43522;
(statearr_43589[(10)] = inst_43495);

return statearr_43589;
})();
var statearr_43590_45393 = state_43522__$1;
(statearr_43590_45393[(2)] = null);

(statearr_43590_45393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (9))){
var state_43522__$1 = state_43522;
var statearr_43591_45397 = state_43522__$1;
(statearr_43591_45397[(2)] = null);

(statearr_43591_45397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (5))){
var state_43522__$1 = state_43522;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43595_45398 = state_43522__$1;
(statearr_43595_45398[(1)] = (8));

} else {
var statearr_43596_45399 = state_43522__$1;
(statearr_43596_45399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (14))){
var inst_43499 = (state_43522[(8)]);
var inst_43499__$1 = (state_43522[(2)]);
var inst_43500 = (inst_43499__$1 == null);
var inst_43501 = cljs.core.not(inst_43500);
var state_43522__$1 = (function (){var statearr_43597 = state_43522;
(statearr_43597[(8)] = inst_43499__$1);

return statearr_43597;
})();
if(inst_43501){
var statearr_43598_45403 = state_43522__$1;
(statearr_43598_45403[(1)] = (15));

} else {
var statearr_43599_45404 = state_43522__$1;
(statearr_43599_45404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (16))){
var state_43522__$1 = state_43522;
var statearr_43600_45405 = state_43522__$1;
(statearr_43600_45405[(2)] = false);

(statearr_43600_45405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (10))){
var inst_43488 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
var statearr_43601_45406 = state_43522__$1;
(statearr_43601_45406[(2)] = inst_43488);

(statearr_43601_45406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (18))){
var inst_43504 = (state_43522[(2)]);
var state_43522__$1 = state_43522;
var statearr_43611_45408 = state_43522__$1;
(statearr_43611_45408[(2)] = inst_43504);

(statearr_43611_45408[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43523 === (8))){
var inst_43485 = cljs.core.async.close_BANG_(to);
var state_43522__$1 = state_43522;
var statearr_43616_45409 = state_43522__$1;
(statearr_43616_45409[(2)] = inst_43485);

(statearr_43616_45409[(1)] = (10));


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
var statearr_43625 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43625[(1)] = (1));

return statearr_43625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43522){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43522);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43626){var ex__42714__auto__ = e43626;
var statearr_43627_45410 = state_43522;
(statearr_43627_45410[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43522[(4)]))){
var statearr_43628_45411 = state_43522;
(statearr_43628_45411[(1)] = cljs.core.first((state_43522[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45412 = state_43522;
state_43522 = G__45412;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43522){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43630 = f__42851__auto__();
(statearr_43630[(6)] = c__42850__auto__);

return statearr_43630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

return c__42850__auto__;
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
var G__43632 = arguments.length;
switch (G__43632) {
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
var G__43634 = arguments.length;
switch (G__43634) {
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
var G__43637 = arguments.length;
switch (G__43637) {
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
var c__42850__auto___45416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43672){
var state_val_43673 = (state_43672[(1)]);
if((state_val_43673 === (7))){
var inst_43667 = (state_43672[(2)]);
var state_43672__$1 = state_43672;
var statearr_43676_45417 = state_43672__$1;
(statearr_43676_45417[(2)] = inst_43667);

(statearr_43676_45417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (1))){
var state_43672__$1 = state_43672;
var statearr_43677_45418 = state_43672__$1;
(statearr_43677_45418[(2)] = null);

(statearr_43677_45418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (4))){
var inst_43648 = (state_43672[(7)]);
var inst_43648__$1 = (state_43672[(2)]);
var inst_43649 = (inst_43648__$1 == null);
var state_43672__$1 = (function (){var statearr_43682 = state_43672;
(statearr_43682[(7)] = inst_43648__$1);

return statearr_43682;
})();
if(cljs.core.truth_(inst_43649)){
var statearr_43683_45419 = state_43672__$1;
(statearr_43683_45419[(1)] = (5));

} else {
var statearr_43686_45420 = state_43672__$1;
(statearr_43686_45420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (13))){
var state_43672__$1 = state_43672;
var statearr_43688_45423 = state_43672__$1;
(statearr_43688_45423[(2)] = null);

(statearr_43688_45423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (6))){
var inst_43648 = (state_43672[(7)]);
var inst_43654 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43648) : p.call(null,inst_43648));
var state_43672__$1 = state_43672;
if(cljs.core.truth_(inst_43654)){
var statearr_43689_45425 = state_43672__$1;
(statearr_43689_45425[(1)] = (9));

} else {
var statearr_43690_45426 = state_43672__$1;
(statearr_43690_45426[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (3))){
var inst_43669 = (state_43672[(2)]);
var state_43672__$1 = state_43672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43672__$1,inst_43669);
} else {
if((state_val_43673 === (12))){
var state_43672__$1 = state_43672;
var statearr_43694_45430 = state_43672__$1;
(statearr_43694_45430[(2)] = null);

(statearr_43694_45430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (2))){
var state_43672__$1 = state_43672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43672__$1,(4),ch);
} else {
if((state_val_43673 === (11))){
var inst_43648 = (state_43672[(7)]);
var inst_43658 = (state_43672[(2)]);
var state_43672__$1 = state_43672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43672__$1,(8),inst_43658,inst_43648);
} else {
if((state_val_43673 === (9))){
var state_43672__$1 = state_43672;
var statearr_43695_45432 = state_43672__$1;
(statearr_43695_45432[(2)] = tc);

(statearr_43695_45432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (5))){
var inst_43651 = cljs.core.async.close_BANG_(tc);
var inst_43652 = cljs.core.async.close_BANG_(fc);
var state_43672__$1 = (function (){var statearr_43696 = state_43672;
(statearr_43696[(8)] = inst_43651);

return statearr_43696;
})();
var statearr_43697_45433 = state_43672__$1;
(statearr_43697_45433[(2)] = inst_43652);

(statearr_43697_45433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (14))){
var inst_43665 = (state_43672[(2)]);
var state_43672__$1 = state_43672;
var statearr_43698_45435 = state_43672__$1;
(statearr_43698_45435[(2)] = inst_43665);

(statearr_43698_45435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (10))){
var state_43672__$1 = state_43672;
var statearr_43699_45437 = state_43672__$1;
(statearr_43699_45437[(2)] = fc);

(statearr_43699_45437[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43673 === (8))){
var inst_43660 = (state_43672[(2)]);
var state_43672__$1 = state_43672;
if(cljs.core.truth_(inst_43660)){
var statearr_43700_45438 = state_43672__$1;
(statearr_43700_45438[(1)] = (12));

} else {
var statearr_43701_45439 = state_43672__$1;
(statearr_43701_45439[(1)] = (13));

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
var statearr_43702 = [null,null,null,null,null,null,null,null,null];
(statearr_43702[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43702[(1)] = (1));

return statearr_43702;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43672){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43672);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43704){var ex__42714__auto__ = e43704;
var statearr_43705_45440 = state_43672;
(statearr_43705_45440[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43672[(4)]))){
var statearr_43706_45441 = state_43672;
(statearr_43706_45441[(1)] = cljs.core.first((state_43672[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45442 = state_43672;
state_43672 = G__45442;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43707 = f__42851__auto__();
(statearr_43707[(6)] = c__42850__auto___45416);

return statearr_43707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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
var c__42850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43735){
var state_val_43736 = (state_43735[(1)]);
if((state_val_43736 === (7))){
var inst_43731 = (state_43735[(2)]);
var state_43735__$1 = state_43735;
var statearr_43740_45443 = state_43735__$1;
(statearr_43740_45443[(2)] = inst_43731);

(statearr_43740_45443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (1))){
var inst_43711 = init;
var inst_43712 = inst_43711;
var state_43735__$1 = (function (){var statearr_43741 = state_43735;
(statearr_43741[(7)] = inst_43712);

return statearr_43741;
})();
var statearr_43742_45444 = state_43735__$1;
(statearr_43742_45444[(2)] = null);

(statearr_43742_45444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (4))){
var inst_43718 = (state_43735[(8)]);
var inst_43718__$1 = (state_43735[(2)]);
var inst_43719 = (inst_43718__$1 == null);
var state_43735__$1 = (function (){var statearr_43743 = state_43735;
(statearr_43743[(8)] = inst_43718__$1);

return statearr_43743;
})();
if(cljs.core.truth_(inst_43719)){
var statearr_43744_45445 = state_43735__$1;
(statearr_43744_45445[(1)] = (5));

} else {
var statearr_43746_45446 = state_43735__$1;
(statearr_43746_45446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (6))){
var inst_43722 = (state_43735[(9)]);
var inst_43712 = (state_43735[(7)]);
var inst_43718 = (state_43735[(8)]);
var inst_43722__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43712,inst_43718) : f.call(null,inst_43712,inst_43718));
var inst_43723 = cljs.core.reduced_QMARK_(inst_43722__$1);
var state_43735__$1 = (function (){var statearr_43748 = state_43735;
(statearr_43748[(9)] = inst_43722__$1);

return statearr_43748;
})();
if(inst_43723){
var statearr_43749_45451 = state_43735__$1;
(statearr_43749_45451[(1)] = (8));

} else {
var statearr_43750_45452 = state_43735__$1;
(statearr_43750_45452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (3))){
var inst_43733 = (state_43735[(2)]);
var state_43735__$1 = state_43735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43735__$1,inst_43733);
} else {
if((state_val_43736 === (2))){
var state_43735__$1 = state_43735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43735__$1,(4),ch);
} else {
if((state_val_43736 === (9))){
var inst_43722 = (state_43735[(9)]);
var inst_43712 = inst_43722;
var state_43735__$1 = (function (){var statearr_43754 = state_43735;
(statearr_43754[(7)] = inst_43712);

return statearr_43754;
})();
var statearr_43755_45453 = state_43735__$1;
(statearr_43755_45453[(2)] = null);

(statearr_43755_45453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (5))){
var inst_43712 = (state_43735[(7)]);
var state_43735__$1 = state_43735;
var statearr_43756_45456 = state_43735__$1;
(statearr_43756_45456[(2)] = inst_43712);

(statearr_43756_45456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (10))){
var inst_43729 = (state_43735[(2)]);
var state_43735__$1 = state_43735;
var statearr_43760_45459 = state_43735__$1;
(statearr_43760_45459[(2)] = inst_43729);

(statearr_43760_45459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43736 === (8))){
var inst_43722 = (state_43735[(9)]);
var inst_43725 = cljs.core.deref(inst_43722);
var state_43735__$1 = state_43735;
var statearr_43761_45460 = state_43735__$1;
(statearr_43761_45460[(2)] = inst_43725);

(statearr_43761_45460[(1)] = (10));


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
var statearr_43765 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43765[(0)] = cljs$core$async$reduce_$_state_machine__42711__auto__);

(statearr_43765[(1)] = (1));

return statearr_43765;
});
var cljs$core$async$reduce_$_state_machine__42711__auto____1 = (function (state_43735){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43735);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43766){var ex__42714__auto__ = e43766;
var statearr_43767_45464 = state_43735;
(statearr_43767_45464[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43735[(4)]))){
var statearr_43768_45468 = state_43735;
(statearr_43768_45468[(1)] = cljs.core.first((state_43735[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45470 = state_43735;
state_43735 = G__45470;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42711__auto__ = function(state_43735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42711__auto____1.call(this,state_43735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42711__auto____0;
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42711__auto____1;
return cljs$core$async$reduce_$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43769 = f__42851__auto__();
(statearr_43769[(6)] = c__42850__auto__);

return statearr_43769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

return c__42850__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43778){
var state_val_43779 = (state_43778[(1)]);
if((state_val_43779 === (1))){
var inst_43773 = cljs.core.async.reduce(f__$1,init,ch);
var state_43778__$1 = state_43778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43778__$1,(2),inst_43773);
} else {
if((state_val_43779 === (2))){
var inst_43775 = (state_43778[(2)]);
var inst_43776 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43775) : f__$1.call(null,inst_43775));
var state_43778__$1 = state_43778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43778__$1,inst_43776);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42711__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42711__auto____0 = (function (){
var statearr_43786 = [null,null,null,null,null,null,null];
(statearr_43786[(0)] = cljs$core$async$transduce_$_state_machine__42711__auto__);

(statearr_43786[(1)] = (1));

return statearr_43786;
});
var cljs$core$async$transduce_$_state_machine__42711__auto____1 = (function (state_43778){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43778);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43787){var ex__42714__auto__ = e43787;
var statearr_43788_45477 = state_43778;
(statearr_43788_45477[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43778[(4)]))){
var statearr_43789_45478 = state_43778;
(statearr_43789_45478[(1)] = cljs.core.first((state_43778[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45479 = state_43778;
state_43778 = G__45479;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42711__auto__ = function(state_43778){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42711__auto____1.call(this,state_43778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42711__auto____0;
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42711__auto____1;
return cljs$core$async$transduce_$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43790 = f__42851__auto__();
(statearr_43790[(6)] = c__42850__auto__);

return statearr_43790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

return c__42850__auto__;
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
var G__43796 = arguments.length;
switch (G__43796) {
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
var c__42850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_43826){
var state_val_43827 = (state_43826[(1)]);
if((state_val_43827 === (7))){
var inst_43808 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43833_45481 = state_43826__$1;
(statearr_43833_45481[(2)] = inst_43808);

(statearr_43833_45481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (1))){
var inst_43801 = cljs.core.seq(coll);
var inst_43803 = inst_43801;
var state_43826__$1 = (function (){var statearr_43834 = state_43826;
(statearr_43834[(7)] = inst_43803);

return statearr_43834;
})();
var statearr_43835_45488 = state_43826__$1;
(statearr_43835_45488[(2)] = null);

(statearr_43835_45488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (4))){
var inst_43803 = (state_43826[(7)]);
var inst_43806 = cljs.core.first(inst_43803);
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43826__$1,(7),ch,inst_43806);
} else {
if((state_val_43827 === (13))){
var inst_43820 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43836_45489 = state_43826__$1;
(statearr_43836_45489[(2)] = inst_43820);

(statearr_43836_45489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (6))){
var inst_43811 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
if(cljs.core.truth_(inst_43811)){
var statearr_43837_45490 = state_43826__$1;
(statearr_43837_45490[(1)] = (8));

} else {
var statearr_43838_45491 = state_43826__$1;
(statearr_43838_45491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (3))){
var inst_43824 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43826__$1,inst_43824);
} else {
if((state_val_43827 === (12))){
var state_43826__$1 = state_43826;
var statearr_43839_45492 = state_43826__$1;
(statearr_43839_45492[(2)] = null);

(statearr_43839_45492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (2))){
var inst_43803 = (state_43826[(7)]);
var state_43826__$1 = state_43826;
if(cljs.core.truth_(inst_43803)){
var statearr_43840_45493 = state_43826__$1;
(statearr_43840_45493[(1)] = (4));

} else {
var statearr_43841_45494 = state_43826__$1;
(statearr_43841_45494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (11))){
var inst_43817 = cljs.core.async.close_BANG_(ch);
var state_43826__$1 = state_43826;
var statearr_43842_45495 = state_43826__$1;
(statearr_43842_45495[(2)] = inst_43817);

(statearr_43842_45495[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (9))){
var state_43826__$1 = state_43826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43843_45496 = state_43826__$1;
(statearr_43843_45496[(1)] = (11));

} else {
var statearr_43844_45497 = state_43826__$1;
(statearr_43844_45497[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (5))){
var inst_43803 = (state_43826[(7)]);
var state_43826__$1 = state_43826;
var statearr_43847_45498 = state_43826__$1;
(statearr_43847_45498[(2)] = inst_43803);

(statearr_43847_45498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (10))){
var inst_43822 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43849_45505 = state_43826__$1;
(statearr_43849_45505[(2)] = inst_43822);

(statearr_43849_45505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (8))){
var inst_43803 = (state_43826[(7)]);
var inst_43813 = cljs.core.next(inst_43803);
var inst_43803__$1 = inst_43813;
var state_43826__$1 = (function (){var statearr_43850 = state_43826;
(statearr_43850[(7)] = inst_43803__$1);

return statearr_43850;
})();
var statearr_43851_45506 = state_43826__$1;
(statearr_43851_45506[(2)] = null);

(statearr_43851_45506[(1)] = (2));


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
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43826){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43826);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43853){var ex__42714__auto__ = e43853;
var statearr_43854_45507 = state_43826;
(statearr_43854_45507[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43826[(4)]))){
var statearr_43855_45508 = state_43826;
(statearr_43855_45508[(1)] = cljs.core.first((state_43826[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45509 = state_43826;
state_43826 = G__45509;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_43856 = f__42851__auto__();
(statearr_43856[(6)] = c__42850__auto__);

return statearr_43856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

return c__42850__auto__;
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
var G__43858 = arguments.length;
switch (G__43858) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_45517 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_45517(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45518 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_45518(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45519 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_45519(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45520 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_45520(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43879 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43879 = (function (ch,cs,meta43880){
this.ch = ch;
this.cs = cs;
this.meta43880 = meta43880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43881,meta43880__$1){
var self__ = this;
var _43881__$1 = this;
return (new cljs.core.async.t_cljs$core$async43879(self__.ch,self__.cs,meta43880__$1));
}));

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43881){
var self__ = this;
var _43881__$1 = this;
return self__.meta43880;
}));

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43879.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43880","meta43880",-629309221,null)], null);
}));

(cljs.core.async.t_cljs$core$async43879.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43879");

(cljs.core.async.t_cljs$core$async43879.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43879");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43879.
 */
cljs.core.async.__GT_t_cljs$core$async43879 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43879(ch__$1,cs__$1,meta43880){
return (new cljs.core.async.t_cljs$core$async43879(ch__$1,cs__$1,meta43880));
});

}

return (new cljs.core.async.t_cljs$core$async43879(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42850__auto___45521 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44040){
var state_val_44041 = (state_44040[(1)]);
if((state_val_44041 === (7))){
var inst_44035 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44042_45522 = state_44040__$1;
(statearr_44042_45522[(2)] = inst_44035);

(statearr_44042_45522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (20))){
var inst_43930 = (state_44040[(7)]);
var inst_43942 = cljs.core.first(inst_43930);
var inst_43943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43942,(0),null);
var inst_43944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43942,(1),null);
var state_44040__$1 = (function (){var statearr_44046 = state_44040;
(statearr_44046[(8)] = inst_43943);

return statearr_44046;
})();
if(cljs.core.truth_(inst_43944)){
var statearr_44047_45523 = state_44040__$1;
(statearr_44047_45523[(1)] = (22));

} else {
var statearr_44048_45524 = state_44040__$1;
(statearr_44048_45524[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (27))){
var inst_43893 = (state_44040[(9)]);
var inst_43978 = (state_44040[(10)]);
var inst_43976 = (state_44040[(11)]);
var inst_43983 = (state_44040[(12)]);
var inst_43983__$1 = cljs.core._nth(inst_43976,inst_43978);
var inst_43984 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43983__$1,inst_43893,done);
var state_44040__$1 = (function (){var statearr_44049 = state_44040;
(statearr_44049[(12)] = inst_43983__$1);

return statearr_44049;
})();
if(cljs.core.truth_(inst_43984)){
var statearr_44050_45525 = state_44040__$1;
(statearr_44050_45525[(1)] = (30));

} else {
var statearr_44051_45527 = state_44040__$1;
(statearr_44051_45527[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (1))){
var state_44040__$1 = state_44040;
var statearr_44052_45528 = state_44040__$1;
(statearr_44052_45528[(2)] = null);

(statearr_44052_45528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (24))){
var inst_43930 = (state_44040[(7)]);
var inst_43950 = (state_44040[(2)]);
var inst_43954 = cljs.core.next(inst_43930);
var inst_43907 = inst_43954;
var inst_43908 = null;
var inst_43909 = (0);
var inst_43910 = (0);
var state_44040__$1 = (function (){var statearr_44053 = state_44040;
(statearr_44053[(13)] = inst_43910);

(statearr_44053[(14)] = inst_43950);

(statearr_44053[(15)] = inst_43907);

(statearr_44053[(16)] = inst_43909);

(statearr_44053[(17)] = inst_43908);

return statearr_44053;
})();
var statearr_44058_45533 = state_44040__$1;
(statearr_44058_45533[(2)] = null);

(statearr_44058_45533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (39))){
var state_44040__$1 = state_44040;
var statearr_44062_45534 = state_44040__$1;
(statearr_44062_45534[(2)] = null);

(statearr_44062_45534[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (4))){
var inst_43893 = (state_44040[(9)]);
var inst_43893__$1 = (state_44040[(2)]);
var inst_43896 = (inst_43893__$1 == null);
var state_44040__$1 = (function (){var statearr_44063 = state_44040;
(statearr_44063[(9)] = inst_43893__$1);

return statearr_44063;
})();
if(cljs.core.truth_(inst_43896)){
var statearr_44064_45535 = state_44040__$1;
(statearr_44064_45535[(1)] = (5));

} else {
var statearr_44065_45536 = state_44040__$1;
(statearr_44065_45536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (15))){
var inst_43910 = (state_44040[(13)]);
var inst_43907 = (state_44040[(15)]);
var inst_43909 = (state_44040[(16)]);
var inst_43908 = (state_44040[(17)]);
var inst_43926 = (state_44040[(2)]);
var inst_43927 = (inst_43910 + (1));
var tmp44059 = inst_43907;
var tmp44060 = inst_43909;
var tmp44061 = inst_43908;
var inst_43907__$1 = tmp44059;
var inst_43908__$1 = tmp44061;
var inst_43909__$1 = tmp44060;
var inst_43910__$1 = inst_43927;
var state_44040__$1 = (function (){var statearr_44066 = state_44040;
(statearr_44066[(13)] = inst_43910__$1);

(statearr_44066[(15)] = inst_43907__$1);

(statearr_44066[(16)] = inst_43909__$1);

(statearr_44066[(18)] = inst_43926);

(statearr_44066[(17)] = inst_43908__$1);

return statearr_44066;
})();
var statearr_44069_45537 = state_44040__$1;
(statearr_44069_45537[(2)] = null);

(statearr_44069_45537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (21))){
var inst_43957 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44074_45538 = state_44040__$1;
(statearr_44074_45538[(2)] = inst_43957);

(statearr_44074_45538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (31))){
var inst_43983 = (state_44040[(12)]);
var inst_43988 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43983);
var state_44040__$1 = state_44040;
var statearr_44075_45539 = state_44040__$1;
(statearr_44075_45539[(2)] = inst_43988);

(statearr_44075_45539[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (32))){
var inst_43977 = (state_44040[(19)]);
var inst_43978 = (state_44040[(10)]);
var inst_43976 = (state_44040[(11)]);
var inst_43975 = (state_44040[(20)]);
var inst_43990 = (state_44040[(2)]);
var inst_43991 = (inst_43978 + (1));
var tmp44071 = inst_43977;
var tmp44072 = inst_43976;
var tmp44073 = inst_43975;
var inst_43975__$1 = tmp44073;
var inst_43976__$1 = tmp44072;
var inst_43977__$1 = tmp44071;
var inst_43978__$1 = inst_43991;
var state_44040__$1 = (function (){var statearr_44076 = state_44040;
(statearr_44076[(19)] = inst_43977__$1);

(statearr_44076[(10)] = inst_43978__$1);

(statearr_44076[(11)] = inst_43976__$1);

(statearr_44076[(20)] = inst_43975__$1);

(statearr_44076[(21)] = inst_43990);

return statearr_44076;
})();
var statearr_44078_45542 = state_44040__$1;
(statearr_44078_45542[(2)] = null);

(statearr_44078_45542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (40))){
var inst_44003 = (state_44040[(22)]);
var inst_44007 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44003);
var state_44040__$1 = state_44040;
var statearr_44081_45543 = state_44040__$1;
(statearr_44081_45543[(2)] = inst_44007);

(statearr_44081_45543[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (33))){
var inst_43994 = (state_44040[(23)]);
var inst_43996 = cljs.core.chunked_seq_QMARK_(inst_43994);
var state_44040__$1 = state_44040;
if(inst_43996){
var statearr_44082_45544 = state_44040__$1;
(statearr_44082_45544[(1)] = (36));

} else {
var statearr_44083_45545 = state_44040__$1;
(statearr_44083_45545[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (13))){
var inst_43920 = (state_44040[(24)]);
var inst_43923 = cljs.core.async.close_BANG_(inst_43920);
var state_44040__$1 = state_44040;
var statearr_44087_45546 = state_44040__$1;
(statearr_44087_45546[(2)] = inst_43923);

(statearr_44087_45546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (22))){
var inst_43943 = (state_44040[(8)]);
var inst_43947 = cljs.core.async.close_BANG_(inst_43943);
var state_44040__$1 = state_44040;
var statearr_44088_45549 = state_44040__$1;
(statearr_44088_45549[(2)] = inst_43947);

(statearr_44088_45549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (36))){
var inst_43994 = (state_44040[(23)]);
var inst_43998 = cljs.core.chunk_first(inst_43994);
var inst_43999 = cljs.core.chunk_rest(inst_43994);
var inst_44000 = cljs.core.count(inst_43998);
var inst_43975 = inst_43999;
var inst_43976 = inst_43998;
var inst_43977 = inst_44000;
var inst_43978 = (0);
var state_44040__$1 = (function (){var statearr_44089 = state_44040;
(statearr_44089[(19)] = inst_43977);

(statearr_44089[(10)] = inst_43978);

(statearr_44089[(11)] = inst_43976);

(statearr_44089[(20)] = inst_43975);

return statearr_44089;
})();
var statearr_44090_45550 = state_44040__$1;
(statearr_44090_45550[(2)] = null);

(statearr_44090_45550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (41))){
var inst_43994 = (state_44040[(23)]);
var inst_44011 = (state_44040[(2)]);
var inst_44012 = cljs.core.next(inst_43994);
var inst_43975 = inst_44012;
var inst_43976 = null;
var inst_43977 = (0);
var inst_43978 = (0);
var state_44040__$1 = (function (){var statearr_44091 = state_44040;
(statearr_44091[(19)] = inst_43977);

(statearr_44091[(10)] = inst_43978);

(statearr_44091[(11)] = inst_43976);

(statearr_44091[(20)] = inst_43975);

(statearr_44091[(25)] = inst_44011);

return statearr_44091;
})();
var statearr_44092_45551 = state_44040__$1;
(statearr_44092_45551[(2)] = null);

(statearr_44092_45551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (43))){
var state_44040__$1 = state_44040;
var statearr_44093_45552 = state_44040__$1;
(statearr_44093_45552[(2)] = null);

(statearr_44093_45552[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (29))){
var inst_44022 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44095_45553 = state_44040__$1;
(statearr_44095_45553[(2)] = inst_44022);

(statearr_44095_45553[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (44))){
var inst_44032 = (state_44040[(2)]);
var state_44040__$1 = (function (){var statearr_44096 = state_44040;
(statearr_44096[(26)] = inst_44032);

return statearr_44096;
})();
var statearr_44097_45554 = state_44040__$1;
(statearr_44097_45554[(2)] = null);

(statearr_44097_45554[(1)] = (2));


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

(statearr_44098[(10)] = inst_43978);

(statearr_44098[(11)] = inst_43976);

(statearr_44098[(20)] = inst_43975);

(statearr_44098[(27)] = inst_43967__$1);

return statearr_44098;
})();
var statearr_44103_45555 = state_44040__$1;
(statearr_44103_45555[(2)] = null);

(statearr_44103_45555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (28))){
var inst_43994 = (state_44040[(23)]);
var inst_43975 = (state_44040[(20)]);
var inst_43994__$1 = cljs.core.seq(inst_43975);
var state_44040__$1 = (function (){var statearr_44105 = state_44040;
(statearr_44105[(23)] = inst_43994__$1);

return statearr_44105;
})();
if(inst_43994__$1){
var statearr_44106_45557 = state_44040__$1;
(statearr_44106_45557[(1)] = (33));

} else {
var statearr_44107_45559 = state_44040__$1;
(statearr_44107_45559[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (25))){
var inst_43977 = (state_44040[(19)]);
var inst_43978 = (state_44040[(10)]);
var inst_43980 = (inst_43978 < inst_43977);
var inst_43981 = inst_43980;
var state_44040__$1 = state_44040;
if(cljs.core.truth_(inst_43981)){
var statearr_44109_45560 = state_44040__$1;
(statearr_44109_45560[(1)] = (27));

} else {
var statearr_44112_45561 = state_44040__$1;
(statearr_44112_45561[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (34))){
var state_44040__$1 = state_44040;
var statearr_44116_45562 = state_44040__$1;
(statearr_44116_45562[(2)] = null);

(statearr_44116_45562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (17))){
var state_44040__$1 = state_44040;
var statearr_44117_45563 = state_44040__$1;
(statearr_44117_45563[(2)] = null);

(statearr_44117_45563[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (3))){
var inst_44037 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44040__$1,inst_44037);
} else {
if((state_val_44041 === (12))){
var inst_43962 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44119_45564 = state_44040__$1;
(statearr_44119_45564[(2)] = inst_43962);

(statearr_44119_45564[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (2))){
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44040__$1,(4),ch);
} else {
if((state_val_44041 === (23))){
var state_44040__$1 = state_44040;
var statearr_44125_45565 = state_44040__$1;
(statearr_44125_45565[(2)] = null);

(statearr_44125_45565[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (35))){
var inst_44019 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44130_45566 = state_44040__$1;
(statearr_44130_45566[(2)] = inst_44019);

(statearr_44130_45566[(1)] = (29));


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
var state_44040__$1 = (function (){var statearr_44134 = state_44040;
(statearr_44134[(13)] = inst_43910);

(statearr_44134[(15)] = inst_43907);

(statearr_44134[(16)] = inst_43909);

(statearr_44134[(17)] = inst_43908);

return statearr_44134;
})();
var statearr_44136_45567 = state_44040__$1;
(statearr_44136_45567[(2)] = null);

(statearr_44136_45567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (11))){
var inst_43930 = (state_44040[(7)]);
var inst_43907 = (state_44040[(15)]);
var inst_43930__$1 = cljs.core.seq(inst_43907);
var state_44040__$1 = (function (){var statearr_44138 = state_44040;
(statearr_44138[(7)] = inst_43930__$1);

return statearr_44138;
})();
if(inst_43930__$1){
var statearr_44139_45568 = state_44040__$1;
(statearr_44139_45568[(1)] = (16));

} else {
var statearr_44141_45569 = state_44040__$1;
(statearr_44141_45569[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (9))){
var inst_43964 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44148_45570 = state_44040__$1;
(statearr_44148_45570[(2)] = inst_43964);

(statearr_44148_45570[(1)] = (7));


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

(statearr_44151[(15)] = inst_43907);

(statearr_44151[(16)] = inst_43909);

(statearr_44151[(17)] = inst_43908);

return statearr_44151;
})();
var statearr_44153_45571 = state_44040__$1;
(statearr_44153_45571[(2)] = null);

(statearr_44153_45571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (14))){
var state_44040__$1 = state_44040;
var statearr_44154_45572 = state_44040__$1;
(statearr_44154_45572[(2)] = null);

(statearr_44154_45572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (45))){
var inst_44029 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44155_45573 = state_44040__$1;
(statearr_44155_45573[(2)] = inst_44029);

(statearr_44155_45573[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (26))){
var inst_43967 = (state_44040[(27)]);
var inst_44024 = (state_44040[(2)]);
var inst_44026 = cljs.core.seq(inst_43967);
var state_44040__$1 = (function (){var statearr_44160 = state_44040;
(statearr_44160[(29)] = inst_44024);

return statearr_44160;
})();
if(inst_44026){
var statearr_44165_45575 = state_44040__$1;
(statearr_44165_45575[(1)] = (42));

} else {
var statearr_44166_45576 = state_44040__$1;
(statearr_44166_45576[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (16))){
var inst_43930 = (state_44040[(7)]);
var inst_43932 = cljs.core.chunked_seq_QMARK_(inst_43930);
var state_44040__$1 = state_44040;
if(inst_43932){
var statearr_44168_45577 = state_44040__$1;
(statearr_44168_45577[(1)] = (19));

} else {
var statearr_44169_45578 = state_44040__$1;
(statearr_44169_45578[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (38))){
var inst_44015 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44175_45579 = state_44040__$1;
(statearr_44175_45579[(2)] = inst_44015);

(statearr_44175_45579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (30))){
var state_44040__$1 = state_44040;
var statearr_44176_45580 = state_44040__$1;
(statearr_44176_45580[(2)] = null);

(statearr_44176_45580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (10))){
var inst_43910 = (state_44040[(13)]);
var inst_43908 = (state_44040[(17)]);
var inst_43918 = cljs.core._nth(inst_43908,inst_43910);
var inst_43920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43918,(0),null);
var inst_43921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43918,(1),null);
var state_44040__$1 = (function (){var statearr_44183 = state_44040;
(statearr_44183[(24)] = inst_43920);

return statearr_44183;
})();
if(cljs.core.truth_(inst_43921)){
var statearr_44187_45585 = state_44040__$1;
(statearr_44187_45585[(1)] = (13));

} else {
var statearr_44188_45586 = state_44040__$1;
(statearr_44188_45586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (18))){
var inst_43960 = (state_44040[(2)]);
var state_44040__$1 = state_44040;
var statearr_44190_45587 = state_44040__$1;
(statearr_44190_45587[(2)] = inst_43960);

(statearr_44190_45587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (42))){
var state_44040__$1 = state_44040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44040__$1,(45),dchan);
} else {
if((state_val_44041 === (37))){
var inst_43994 = (state_44040[(23)]);
var inst_43893 = (state_44040[(9)]);
var inst_44003 = (state_44040[(22)]);
var inst_44003__$1 = cljs.core.first(inst_43994);
var inst_44004 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44003__$1,inst_43893,done);
var state_44040__$1 = (function (){var statearr_44199 = state_44040;
(statearr_44199[(22)] = inst_44003__$1);

return statearr_44199;
})();
if(cljs.core.truth_(inst_44004)){
var statearr_44200_45588 = state_44040__$1;
(statearr_44200_45588[(1)] = (39));

} else {
var statearr_44201_45589 = state_44040__$1;
(statearr_44201_45589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44041 === (8))){
var inst_43910 = (state_44040[(13)]);
var inst_43909 = (state_44040[(16)]);
var inst_43912 = (inst_43910 < inst_43909);
var inst_43913 = inst_43912;
var state_44040__$1 = state_44040;
if(cljs.core.truth_(inst_43913)){
var statearr_44205_45590 = state_44040__$1;
(statearr_44205_45590[(1)] = (10));

} else {
var statearr_44206_45591 = state_44040__$1;
(statearr_44206_45591[(1)] = (11));

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
}catch (e44212){var ex__42714__auto__ = e44212;
var statearr_44213_45592 = state_44040;
(statearr_44213_45592[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44040[(4)]))){
var statearr_44214_45593 = state_44040;
(statearr_44214_45593[(1)] = cljs.core.first((state_44040[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45598 = state_44040;
state_44040 = G__45598;
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
var state__42852__auto__ = (function (){var statearr_44215 = f__42851__auto__();
(statearr_44215[(6)] = c__42850__auto___45521);

return statearr_44215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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

var cljs$core$async$Mix$admix_STAR_$dyn_45606 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_45606(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45610 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_45610(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45618 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45618(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45619 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_45619(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45620 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45620(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45623 = arguments.length;
var i__4737__auto___45624 = (0);
while(true){
if((i__4737__auto___45624 < len__4736__auto___45623)){
args__4742__auto__.push((arguments[i__4737__auto___45624]));

var G__45625 = (i__4737__auto___45624 + (1));
i__4737__auto___45624 = G__45625;
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
var statearr_44240_45626 = state;
(statearr_44240_45626[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_44241_45627 = state;
(statearr_44241_45627[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44242_45628 = state;
(statearr_44242_45628[(2)] = cljs.core.deref(cb));


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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44249 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44250){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44250 = meta44250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44251,meta44250__$1){
var self__ = this;
var _44251__$1 = this;
return (new cljs.core.async.t_cljs$core$async44249(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44250__$1));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44251){
var self__ = this;
var _44251__$1 = this;
return self__.meta44250;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async44249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44250","meta44250",825774025,null)], null);
}));

(cljs.core.async.t_cljs$core$async44249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44249");

(cljs.core.async.t_cljs$core$async44249.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44249.
 */
cljs.core.async.__GT_t_cljs$core$async44249 = (function cljs$core$async$mix_$___GT_t_cljs$core$async44249(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44250){
return (new cljs.core.async.t_cljs$core$async44249(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44250));
});

}

return (new cljs.core.async.t_cljs$core$async44249(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42850__auto___45637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44362){
var state_val_44363 = (state_44362[(1)]);
if((state_val_44363 === (7))){
var inst_44274 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
var statearr_44365_45639 = state_44362__$1;
(statearr_44365_45639[(2)] = inst_44274);

(statearr_44365_45639[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (20))){
var inst_44286 = (state_44362[(7)]);
var state_44362__$1 = state_44362;
var statearr_44366_45640 = state_44362__$1;
(statearr_44366_45640[(2)] = inst_44286);

(statearr_44366_45640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (27))){
var state_44362__$1 = state_44362;
var statearr_44367_45641 = state_44362__$1;
(statearr_44367_45641[(2)] = null);

(statearr_44367_45641[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (1))){
var inst_44259 = (state_44362[(8)]);
var inst_44259__$1 = calc_state();
var inst_44262 = (inst_44259__$1 == null);
var inst_44263 = cljs.core.not(inst_44262);
var state_44362__$1 = (function (){var statearr_44368 = state_44362;
(statearr_44368[(8)] = inst_44259__$1);

return statearr_44368;
})();
if(inst_44263){
var statearr_44369_45642 = state_44362__$1;
(statearr_44369_45642[(1)] = (2));

} else {
var statearr_44370_45643 = state_44362__$1;
(statearr_44370_45643[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (24))){
var inst_44319 = (state_44362[(9)]);
var inst_44310 = (state_44362[(10)]);
var inst_44333 = (state_44362[(11)]);
var inst_44333__$1 = (inst_44310.cljs$core$IFn$_invoke$arity$1 ? inst_44310.cljs$core$IFn$_invoke$arity$1(inst_44319) : inst_44310.call(null,inst_44319));
var state_44362__$1 = (function (){var statearr_44372 = state_44362;
(statearr_44372[(11)] = inst_44333__$1);

return statearr_44372;
})();
if(cljs.core.truth_(inst_44333__$1)){
var statearr_44373_45645 = state_44362__$1;
(statearr_44373_45645[(1)] = (29));

} else {
var statearr_44374_45646 = state_44362__$1;
(statearr_44374_45646[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (4))){
var inst_44277 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44277)){
var statearr_44375_45647 = state_44362__$1;
(statearr_44375_45647[(1)] = (8));

} else {
var statearr_44376_45648 = state_44362__$1;
(statearr_44376_45648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (15))){
var inst_44304 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44304)){
var statearr_44377_45653 = state_44362__$1;
(statearr_44377_45653[(1)] = (19));

} else {
var statearr_44378_45654 = state_44362__$1;
(statearr_44378_45654[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (21))){
var inst_44309 = (state_44362[(12)]);
var inst_44309__$1 = (state_44362[(2)]);
var inst_44310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44309__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44309__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44309__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44362__$1 = (function (){var statearr_44379 = state_44362;
(statearr_44379[(13)] = inst_44311);

(statearr_44379[(12)] = inst_44309__$1);

(statearr_44379[(10)] = inst_44310);

return statearr_44379;
})();
return cljs.core.async.ioc_alts_BANG_(state_44362__$1,(22),inst_44312);
} else {
if((state_val_44363 === (31))){
var inst_44341 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44341)){
var statearr_44384_45655 = state_44362__$1;
(statearr_44384_45655[(1)] = (32));

} else {
var statearr_44386_45656 = state_44362__$1;
(statearr_44386_45656[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (32))){
var inst_44318 = (state_44362[(14)]);
var state_44362__$1 = state_44362;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44362__$1,(35),out,inst_44318);
} else {
if((state_val_44363 === (33))){
var inst_44309 = (state_44362[(12)]);
var inst_44286 = inst_44309;
var state_44362__$1 = (function (){var statearr_44388 = state_44362;
(statearr_44388[(7)] = inst_44286);

return statearr_44388;
})();
var statearr_44389_45657 = state_44362__$1;
(statearr_44389_45657[(2)] = null);

(statearr_44389_45657[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (13))){
var inst_44286 = (state_44362[(7)]);
var inst_44293 = inst_44286.cljs$lang$protocol_mask$partition0$;
var inst_44294 = (inst_44293 & (64));
var inst_44295 = inst_44286.cljs$core$ISeq$;
var inst_44296 = (cljs.core.PROTOCOL_SENTINEL === inst_44295);
var inst_44297 = ((inst_44294) || (inst_44296));
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44297)){
var statearr_44391_45658 = state_44362__$1;
(statearr_44391_45658[(1)] = (16));

} else {
var statearr_44392_45659 = state_44362__$1;
(statearr_44392_45659[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (22))){
var inst_44319 = (state_44362[(9)]);
var inst_44318 = (state_44362[(14)]);
var inst_44317 = (state_44362[(2)]);
var inst_44318__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44317,(0),null);
var inst_44319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44317,(1),null);
var inst_44320 = (inst_44318__$1 == null);
var inst_44321 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44319__$1,change);
var inst_44322 = ((inst_44320) || (inst_44321));
var state_44362__$1 = (function (){var statearr_44395 = state_44362;
(statearr_44395[(9)] = inst_44319__$1);

(statearr_44395[(14)] = inst_44318__$1);

return statearr_44395;
})();
if(cljs.core.truth_(inst_44322)){
var statearr_44396_45660 = state_44362__$1;
(statearr_44396_45660[(1)] = (23));

} else {
var statearr_44397_45661 = state_44362__$1;
(statearr_44397_45661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (36))){
var inst_44309 = (state_44362[(12)]);
var inst_44286 = inst_44309;
var state_44362__$1 = (function (){var statearr_44400 = state_44362;
(statearr_44400[(7)] = inst_44286);

return statearr_44400;
})();
var statearr_44401_45662 = state_44362__$1;
(statearr_44401_45662[(2)] = null);

(statearr_44401_45662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (29))){
var inst_44333 = (state_44362[(11)]);
var state_44362__$1 = state_44362;
var statearr_44402_45663 = state_44362__$1;
(statearr_44402_45663[(2)] = inst_44333);

(statearr_44402_45663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (6))){
var state_44362__$1 = state_44362;
var statearr_44404_45664 = state_44362__$1;
(statearr_44404_45664[(2)] = false);

(statearr_44404_45664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (28))){
var inst_44329 = (state_44362[(2)]);
var inst_44330 = calc_state();
var inst_44286 = inst_44330;
var state_44362__$1 = (function (){var statearr_44405 = state_44362;
(statearr_44405[(7)] = inst_44286);

(statearr_44405[(15)] = inst_44329);

return statearr_44405;
})();
var statearr_44406_45665 = state_44362__$1;
(statearr_44406_45665[(2)] = null);

(statearr_44406_45665[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (25))){
var inst_44355 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
var statearr_44408_45666 = state_44362__$1;
(statearr_44408_45666[(2)] = inst_44355);

(statearr_44408_45666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (34))){
var inst_44353 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
var statearr_44410_45667 = state_44362__$1;
(statearr_44410_45667[(2)] = inst_44353);

(statearr_44410_45667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (17))){
var state_44362__$1 = state_44362;
var statearr_44411_45671 = state_44362__$1;
(statearr_44411_45671[(2)] = false);

(statearr_44411_45671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (3))){
var state_44362__$1 = state_44362;
var statearr_44412_45672 = state_44362__$1;
(statearr_44412_45672[(2)] = false);

(statearr_44412_45672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (12))){
var inst_44357 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44362__$1,inst_44357);
} else {
if((state_val_44363 === (2))){
var inst_44259 = (state_44362[(8)]);
var inst_44266 = inst_44259.cljs$lang$protocol_mask$partition0$;
var inst_44267 = (inst_44266 & (64));
var inst_44268 = inst_44259.cljs$core$ISeq$;
var inst_44269 = (cljs.core.PROTOCOL_SENTINEL === inst_44268);
var inst_44270 = ((inst_44267) || (inst_44269));
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44270)){
var statearr_44416_45673 = state_44362__$1;
(statearr_44416_45673[(1)] = (5));

} else {
var statearr_44417_45674 = state_44362__$1;
(statearr_44417_45674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (23))){
var inst_44318 = (state_44362[(14)]);
var inst_44324 = (inst_44318 == null);
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44324)){
var statearr_44418_45675 = state_44362__$1;
(statearr_44418_45675[(1)] = (26));

} else {
var statearr_44421_45676 = state_44362__$1;
(statearr_44421_45676[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (35))){
var inst_44344 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
if(cljs.core.truth_(inst_44344)){
var statearr_44422_45677 = state_44362__$1;
(statearr_44422_45677[(1)] = (36));

} else {
var statearr_44424_45678 = state_44362__$1;
(statearr_44424_45678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (19))){
var inst_44286 = (state_44362[(7)]);
var inst_44306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44286);
var state_44362__$1 = state_44362;
var statearr_44425_45679 = state_44362__$1;
(statearr_44425_45679[(2)] = inst_44306);

(statearr_44425_45679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (11))){
var inst_44286 = (state_44362[(7)]);
var inst_44290 = (inst_44286 == null);
var inst_44291 = cljs.core.not(inst_44290);
var state_44362__$1 = state_44362;
if(inst_44291){
var statearr_44428_45680 = state_44362__$1;
(statearr_44428_45680[(1)] = (13));

} else {
var statearr_44429_45681 = state_44362__$1;
(statearr_44429_45681[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (9))){
var inst_44259 = (state_44362[(8)]);
var state_44362__$1 = state_44362;
var statearr_44431_45682 = state_44362__$1;
(statearr_44431_45682[(2)] = inst_44259);

(statearr_44431_45682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (5))){
var state_44362__$1 = state_44362;
var statearr_44432_45684 = state_44362__$1;
(statearr_44432_45684[(2)] = true);

(statearr_44432_45684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (14))){
var state_44362__$1 = state_44362;
var statearr_44433_45685 = state_44362__$1;
(statearr_44433_45685[(2)] = false);

(statearr_44433_45685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (26))){
var inst_44319 = (state_44362[(9)]);
var inst_44326 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44319);
var state_44362__$1 = state_44362;
var statearr_44436_45686 = state_44362__$1;
(statearr_44436_45686[(2)] = inst_44326);

(statearr_44436_45686[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (16))){
var state_44362__$1 = state_44362;
var statearr_44438_45687 = state_44362__$1;
(statearr_44438_45687[(2)] = true);

(statearr_44438_45687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (38))){
var inst_44349 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
var statearr_44439_45688 = state_44362__$1;
(statearr_44439_45688[(2)] = inst_44349);

(statearr_44439_45688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (30))){
var inst_44319 = (state_44362[(9)]);
var inst_44311 = (state_44362[(13)]);
var inst_44310 = (state_44362[(10)]);
var inst_44336 = cljs.core.empty_QMARK_(inst_44310);
var inst_44337 = (inst_44311.cljs$core$IFn$_invoke$arity$1 ? inst_44311.cljs$core$IFn$_invoke$arity$1(inst_44319) : inst_44311.call(null,inst_44319));
var inst_44338 = cljs.core.not(inst_44337);
var inst_44339 = ((inst_44336) && (inst_44338));
var state_44362__$1 = state_44362;
var statearr_44440_45689 = state_44362__$1;
(statearr_44440_45689[(2)] = inst_44339);

(statearr_44440_45689[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (10))){
var inst_44259 = (state_44362[(8)]);
var inst_44282 = (state_44362[(2)]);
var inst_44283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44282,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44282,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44282,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44286 = inst_44259;
var state_44362__$1 = (function (){var statearr_44441 = state_44362;
(statearr_44441[(16)] = inst_44285);

(statearr_44441[(7)] = inst_44286);

(statearr_44441[(17)] = inst_44284);

(statearr_44441[(18)] = inst_44283);

return statearr_44441;
})();
var statearr_44446_45694 = state_44362__$1;
(statearr_44446_45694[(2)] = null);

(statearr_44446_45694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (18))){
var inst_44301 = (state_44362[(2)]);
var state_44362__$1 = state_44362;
var statearr_44447_45696 = state_44362__$1;
(statearr_44447_45696[(2)] = inst_44301);

(statearr_44447_45696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (37))){
var state_44362__$1 = state_44362;
var statearr_44449_45697 = state_44362__$1;
(statearr_44449_45697[(2)] = null);

(statearr_44449_45697[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44363 === (8))){
var inst_44259 = (state_44362[(8)]);
var inst_44279 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44259);
var state_44362__$1 = state_44362;
var statearr_44450_45698 = state_44362__$1;
(statearr_44450_45698[(2)] = inst_44279);

(statearr_44450_45698[(1)] = (10));


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
var statearr_44451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44451[(0)] = cljs$core$async$mix_$_state_machine__42711__auto__);

(statearr_44451[(1)] = (1));

return statearr_44451;
});
var cljs$core$async$mix_$_state_machine__42711__auto____1 = (function (state_44362){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44362);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44452){var ex__42714__auto__ = e44452;
var statearr_44454_45700 = state_44362;
(statearr_44454_45700[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44362[(4)]))){
var statearr_44456_45701 = state_44362;
(statearr_44456_45701[(1)] = cljs.core.first((state_44362[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45702 = state_44362;
state_44362 = G__45702;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42711__auto__ = function(state_44362){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42711__auto____1.call(this,state_44362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42711__auto____0;
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42711__auto____1;
return cljs$core$async$mix_$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_44457 = f__42851__auto__();
(statearr_44457[(6)] = c__42850__auto___45637);

return statearr_44457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_45707 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45707(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45708 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45708(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45709 = (function() {
var G__45710 = null;
var G__45710__1 = (function (p){
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
var G__45710__2 = (function (p,v){
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
G__45710 = function(p,v){
switch(arguments.length){
case 1:
return G__45710__1.call(this,p);
case 2:
return G__45710__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45710.cljs$core$IFn$_invoke$arity$1 = G__45710__1;
G__45710.cljs$core$IFn$_invoke$arity$2 = G__45710__2;
return G__45710;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44466 = arguments.length;
switch (G__44466) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45709(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45709(p,v);
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
var G__44474 = arguments.length;
switch (G__44474) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__44472_SHARP_){
if(cljs.core.truth_((p1__44472_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44472_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44472_SHARP_.call(null,topic)))){
return p1__44472_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44472_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44478 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44479){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44479 = meta44479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44480,meta44479__$1){
var self__ = this;
var _44480__$1 = this;
return (new cljs.core.async.t_cljs$core$async44478(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44479__$1));
}));

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44480){
var self__ = this;
var _44480__$1 = this;
return self__.meta44479;
}));

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44478.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44479","meta44479",1113084524,null)], null);
}));

(cljs.core.async.t_cljs$core$async44478.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44478.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44478");

(cljs.core.async.t_cljs$core$async44478.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44478");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44478.
 */
cljs.core.async.__GT_t_cljs$core$async44478 = (function cljs$core$async$__GT_t_cljs$core$async44478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44479){
return (new cljs.core.async.t_cljs$core$async44478(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44479));
});

}

return (new cljs.core.async.t_cljs$core$async44478(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42850__auto___45717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44559){
var state_val_44560 = (state_44559[(1)]);
if((state_val_44560 === (7))){
var inst_44554 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44563_45718 = state_44559__$1;
(statearr_44563_45718[(2)] = inst_44554);

(statearr_44563_45718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (20))){
var state_44559__$1 = state_44559;
var statearr_44564_45719 = state_44559__$1;
(statearr_44564_45719[(2)] = null);

(statearr_44564_45719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (1))){
var state_44559__$1 = state_44559;
var statearr_44565_45720 = state_44559__$1;
(statearr_44565_45720[(2)] = null);

(statearr_44565_45720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (24))){
var inst_44535 = (state_44559[(7)]);
var inst_44545 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44535);
var state_44559__$1 = state_44559;
var statearr_44567_45721 = state_44559__$1;
(statearr_44567_45721[(2)] = inst_44545);

(statearr_44567_45721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (4))){
var inst_44486 = (state_44559[(8)]);
var inst_44486__$1 = (state_44559[(2)]);
var inst_44487 = (inst_44486__$1 == null);
var state_44559__$1 = (function (){var statearr_44569 = state_44559;
(statearr_44569[(8)] = inst_44486__$1);

return statearr_44569;
})();
if(cljs.core.truth_(inst_44487)){
var statearr_44570_45722 = state_44559__$1;
(statearr_44570_45722[(1)] = (5));

} else {
var statearr_44571_45723 = state_44559__$1;
(statearr_44571_45723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (15))){
var inst_44529 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44572_45724 = state_44559__$1;
(statearr_44572_45724[(2)] = inst_44529);

(statearr_44572_45724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (21))){
var inst_44550 = (state_44559[(2)]);
var state_44559__$1 = (function (){var statearr_44574 = state_44559;
(statearr_44574[(9)] = inst_44550);

return statearr_44574;
})();
var statearr_44575_45725 = state_44559__$1;
(statearr_44575_45725[(2)] = null);

(statearr_44575_45725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (13))){
var inst_44511 = (state_44559[(10)]);
var inst_44513 = cljs.core.chunked_seq_QMARK_(inst_44511);
var state_44559__$1 = state_44559;
if(inst_44513){
var statearr_44576_45726 = state_44559__$1;
(statearr_44576_45726[(1)] = (16));

} else {
var statearr_44577_45727 = state_44559__$1;
(statearr_44577_45727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (22))){
var inst_44541 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44541)){
var statearr_44578_45728 = state_44559__$1;
(statearr_44578_45728[(1)] = (23));

} else {
var statearr_44579_45729 = state_44559__$1;
(statearr_44579_45729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (6))){
var inst_44535 = (state_44559[(7)]);
var inst_44486 = (state_44559[(8)]);
var inst_44537 = (state_44559[(11)]);
var inst_44535__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44486) : topic_fn.call(null,inst_44486));
var inst_44536 = cljs.core.deref(mults);
var inst_44537__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44536,inst_44535__$1);
var state_44559__$1 = (function (){var statearr_44583 = state_44559;
(statearr_44583[(7)] = inst_44535__$1);

(statearr_44583[(11)] = inst_44537__$1);

return statearr_44583;
})();
if(cljs.core.truth_(inst_44537__$1)){
var statearr_44584_45730 = state_44559__$1;
(statearr_44584_45730[(1)] = (19));

} else {
var statearr_44585_45731 = state_44559__$1;
(statearr_44585_45731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (25))){
var inst_44547 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44586_45732 = state_44559__$1;
(statearr_44586_45732[(2)] = inst_44547);

(statearr_44586_45732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (17))){
var inst_44511 = (state_44559[(10)]);
var inst_44520 = cljs.core.first(inst_44511);
var inst_44521 = cljs.core.async.muxch_STAR_(inst_44520);
var inst_44522 = cljs.core.async.close_BANG_(inst_44521);
var inst_44523 = cljs.core.next(inst_44511);
var inst_44496 = inst_44523;
var inst_44497 = null;
var inst_44498 = (0);
var inst_44499 = (0);
var state_44559__$1 = (function (){var statearr_44590 = state_44559;
(statearr_44590[(12)] = inst_44498);

(statearr_44590[(13)] = inst_44522);

(statearr_44590[(14)] = inst_44499);

(statearr_44590[(15)] = inst_44497);

(statearr_44590[(16)] = inst_44496);

return statearr_44590;
})();
var statearr_44591_45737 = state_44559__$1;
(statearr_44591_45737[(2)] = null);

(statearr_44591_45737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (3))){
var inst_44556 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44559__$1,inst_44556);
} else {
if((state_val_44560 === (12))){
var inst_44531 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44593_45739 = state_44559__$1;
(statearr_44593_45739[(2)] = inst_44531);

(statearr_44593_45739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (2))){
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44559__$1,(4),ch);
} else {
if((state_val_44560 === (23))){
var state_44559__$1 = state_44559;
var statearr_44596_45743 = state_44559__$1;
(statearr_44596_45743[(2)] = null);

(statearr_44596_45743[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (19))){
var inst_44486 = (state_44559[(8)]);
var inst_44537 = (state_44559[(11)]);
var inst_44539 = cljs.core.async.muxch_STAR_(inst_44537);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44559__$1,(22),inst_44539,inst_44486);
} else {
if((state_val_44560 === (11))){
var inst_44511 = (state_44559[(10)]);
var inst_44496 = (state_44559[(16)]);
var inst_44511__$1 = cljs.core.seq(inst_44496);
var state_44559__$1 = (function (){var statearr_44597 = state_44559;
(statearr_44597[(10)] = inst_44511__$1);

return statearr_44597;
})();
if(inst_44511__$1){
var statearr_44598_45746 = state_44559__$1;
(statearr_44598_45746[(1)] = (13));

} else {
var statearr_44599_45747 = state_44559__$1;
(statearr_44599_45747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (9))){
var inst_44533 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44600_45748 = state_44559__$1;
(statearr_44600_45748[(2)] = inst_44533);

(statearr_44600_45748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (5))){
var inst_44493 = cljs.core.deref(mults);
var inst_44494 = cljs.core.vals(inst_44493);
var inst_44495 = cljs.core.seq(inst_44494);
var inst_44496 = inst_44495;
var inst_44497 = null;
var inst_44498 = (0);
var inst_44499 = (0);
var state_44559__$1 = (function (){var statearr_44601 = state_44559;
(statearr_44601[(12)] = inst_44498);

(statearr_44601[(14)] = inst_44499);

(statearr_44601[(15)] = inst_44497);

(statearr_44601[(16)] = inst_44496);

return statearr_44601;
})();
var statearr_44602_45749 = state_44559__$1;
(statearr_44602_45749[(2)] = null);

(statearr_44602_45749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (14))){
var state_44559__$1 = state_44559;
var statearr_44606_45750 = state_44559__$1;
(statearr_44606_45750[(2)] = null);

(statearr_44606_45750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (16))){
var inst_44511 = (state_44559[(10)]);
var inst_44515 = cljs.core.chunk_first(inst_44511);
var inst_44516 = cljs.core.chunk_rest(inst_44511);
var inst_44517 = cljs.core.count(inst_44515);
var inst_44496 = inst_44516;
var inst_44497 = inst_44515;
var inst_44498 = inst_44517;
var inst_44499 = (0);
var state_44559__$1 = (function (){var statearr_44607 = state_44559;
(statearr_44607[(12)] = inst_44498);

(statearr_44607[(14)] = inst_44499);

(statearr_44607[(15)] = inst_44497);

(statearr_44607[(16)] = inst_44496);

return statearr_44607;
})();
var statearr_44608_45751 = state_44559__$1;
(statearr_44608_45751[(2)] = null);

(statearr_44608_45751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (10))){
var inst_44498 = (state_44559[(12)]);
var inst_44499 = (state_44559[(14)]);
var inst_44497 = (state_44559[(15)]);
var inst_44496 = (state_44559[(16)]);
var inst_44505 = cljs.core._nth(inst_44497,inst_44499);
var inst_44506 = cljs.core.async.muxch_STAR_(inst_44505);
var inst_44507 = cljs.core.async.close_BANG_(inst_44506);
var inst_44508 = (inst_44499 + (1));
var tmp44603 = inst_44498;
var tmp44604 = inst_44497;
var tmp44605 = inst_44496;
var inst_44496__$1 = tmp44605;
var inst_44497__$1 = tmp44604;
var inst_44498__$1 = tmp44603;
var inst_44499__$1 = inst_44508;
var state_44559__$1 = (function (){var statearr_44612 = state_44559;
(statearr_44612[(17)] = inst_44507);

(statearr_44612[(12)] = inst_44498__$1);

(statearr_44612[(14)] = inst_44499__$1);

(statearr_44612[(15)] = inst_44497__$1);

(statearr_44612[(16)] = inst_44496__$1);

return statearr_44612;
})();
var statearr_44614_45752 = state_44559__$1;
(statearr_44614_45752[(2)] = null);

(statearr_44614_45752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (18))){
var inst_44526 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44616_45753 = state_44559__$1;
(statearr_44616_45753[(2)] = inst_44526);

(statearr_44616_45753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44560 === (8))){
var inst_44498 = (state_44559[(12)]);
var inst_44499 = (state_44559[(14)]);
var inst_44502 = (inst_44499 < inst_44498);
var inst_44503 = inst_44502;
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44503)){
var statearr_44619_45754 = state_44559__$1;
(statearr_44619_45754[(1)] = (10));

} else {
var statearr_44620_45755 = state_44559__$1;
(statearr_44620_45755[(1)] = (11));

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
var statearr_44621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44621[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44621[(1)] = (1));

return statearr_44621;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44559){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44559);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44624){var ex__42714__auto__ = e44624;
var statearr_44626_45756 = state_44559;
(statearr_44626_45756[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44559[(4)]))){
var statearr_44627_45757 = state_44559;
(statearr_44627_45757[(1)] = cljs.core.first((state_44559[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45758 = state_44559;
state_44559 = G__45758;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_44629 = f__42851__auto__();
(statearr_44629[(6)] = c__42850__auto___45717);

return statearr_44629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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
var G__44636 = arguments.length;
switch (G__44636) {
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
var G__44638 = arguments.length;
switch (G__44638) {
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
var G__44642 = arguments.length;
switch (G__44642) {
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
var c__42850__auto___45762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44690){
var state_val_44691 = (state_44690[(1)]);
if((state_val_44691 === (7))){
var state_44690__$1 = state_44690;
var statearr_44692_45763 = state_44690__$1;
(statearr_44692_45763[(2)] = null);

(statearr_44692_45763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (1))){
var state_44690__$1 = state_44690;
var statearr_44693_45764 = state_44690__$1;
(statearr_44693_45764[(2)] = null);

(statearr_44693_45764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (4))){
var inst_44649 = (state_44690[(7)]);
var inst_44648 = (state_44690[(8)]);
var inst_44651 = (inst_44649 < inst_44648);
var state_44690__$1 = state_44690;
if(cljs.core.truth_(inst_44651)){
var statearr_44695_45768 = state_44690__$1;
(statearr_44695_45768[(1)] = (6));

} else {
var statearr_44696_45769 = state_44690__$1;
(statearr_44696_45769[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (15))){
var inst_44676 = (state_44690[(9)]);
var inst_44681 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44676);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44690__$1,(17),out,inst_44681);
} else {
if((state_val_44691 === (13))){
var inst_44676 = (state_44690[(9)]);
var inst_44676__$1 = (state_44690[(2)]);
var inst_44677 = cljs.core.some(cljs.core.nil_QMARK_,inst_44676__$1);
var state_44690__$1 = (function (){var statearr_44697 = state_44690;
(statearr_44697[(9)] = inst_44676__$1);

return statearr_44697;
})();
if(cljs.core.truth_(inst_44677)){
var statearr_44698_45777 = state_44690__$1;
(statearr_44698_45777[(1)] = (14));

} else {
var statearr_44699_45778 = state_44690__$1;
(statearr_44699_45778[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (6))){
var state_44690__$1 = state_44690;
var statearr_44701_45779 = state_44690__$1;
(statearr_44701_45779[(2)] = null);

(statearr_44701_45779[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (17))){
var inst_44683 = (state_44690[(2)]);
var state_44690__$1 = (function (){var statearr_44710 = state_44690;
(statearr_44710[(10)] = inst_44683);

return statearr_44710;
})();
var statearr_44711_45780 = state_44690__$1;
(statearr_44711_45780[(2)] = null);

(statearr_44711_45780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (3))){
var inst_44688 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44690__$1,inst_44688);
} else {
if((state_val_44691 === (12))){
var _ = (function (){var statearr_44712 = state_44690;
(statearr_44712[(4)] = cljs.core.rest((state_44690[(4)])));

return statearr_44712;
})();
var state_44690__$1 = state_44690;
var ex44709 = (state_44690__$1[(2)]);
var statearr_44713_45784 = state_44690__$1;
(statearr_44713_45784[(5)] = ex44709);


if((ex44709 instanceof Object)){
var statearr_44714_45785 = state_44690__$1;
(statearr_44714_45785[(1)] = (11));

(statearr_44714_45785[(5)] = null);

} else {
throw ex44709;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (2))){
var inst_44647 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44648 = cnt;
var inst_44649 = (0);
var state_44690__$1 = (function (){var statearr_44716 = state_44690;
(statearr_44716[(7)] = inst_44649);

(statearr_44716[(11)] = inst_44647);

(statearr_44716[(8)] = inst_44648);

return statearr_44716;
})();
var statearr_44717_45789 = state_44690__$1;
(statearr_44717_45789[(2)] = null);

(statearr_44717_45789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (11))){
var inst_44654 = (state_44690[(2)]);
var inst_44655 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44690__$1 = (function (){var statearr_44718 = state_44690;
(statearr_44718[(12)] = inst_44654);

return statearr_44718;
})();
var statearr_44719_45790 = state_44690__$1;
(statearr_44719_45790[(2)] = inst_44655);

(statearr_44719_45790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (9))){
var inst_44649 = (state_44690[(7)]);
var _ = (function (){var statearr_44720 = state_44690;
(statearr_44720[(4)] = cljs.core.cons((12),(state_44690[(4)])));

return statearr_44720;
})();
var inst_44662 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44649) : chs__$1.call(null,inst_44649));
var inst_44663 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44649) : done.call(null,inst_44649));
var inst_44664 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44662,inst_44663);
var ___$1 = (function (){var statearr_44721 = state_44690;
(statearr_44721[(4)] = cljs.core.rest((state_44690[(4)])));

return statearr_44721;
})();
var state_44690__$1 = state_44690;
var statearr_44722_45794 = state_44690__$1;
(statearr_44722_45794[(2)] = inst_44664);

(statearr_44722_45794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (5))){
var inst_44674 = (state_44690[(2)]);
var state_44690__$1 = (function (){var statearr_44723 = state_44690;
(statearr_44723[(13)] = inst_44674);

return statearr_44723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44690__$1,(13),dchan);
} else {
if((state_val_44691 === (14))){
var inst_44679 = cljs.core.async.close_BANG_(out);
var state_44690__$1 = state_44690;
var statearr_44724_45795 = state_44690__$1;
(statearr_44724_45795[(2)] = inst_44679);

(statearr_44724_45795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (16))){
var inst_44686 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44725_45796 = state_44690__$1;
(statearr_44725_45796[(2)] = inst_44686);

(statearr_44725_45796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (10))){
var inst_44649 = (state_44690[(7)]);
var inst_44667 = (state_44690[(2)]);
var inst_44668 = (inst_44649 + (1));
var inst_44649__$1 = inst_44668;
var state_44690__$1 = (function (){var statearr_44726 = state_44690;
(statearr_44726[(7)] = inst_44649__$1);

(statearr_44726[(14)] = inst_44667);

return statearr_44726;
})();
var statearr_44727_45798 = state_44690__$1;
(statearr_44727_45798[(2)] = null);

(statearr_44727_45798[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44691 === (8))){
var inst_44672 = (state_44690[(2)]);
var state_44690__$1 = state_44690;
var statearr_44728_45799 = state_44690__$1;
(statearr_44728_45799[(2)] = inst_44672);

(statearr_44728_45799[(1)] = (5));


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
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44690){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44690);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44730){var ex__42714__auto__ = e44730;
var statearr_44731_45803 = state_44690;
(statearr_44731_45803[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44690[(4)]))){
var statearr_44732_45810 = state_44690;
(statearr_44732_45810[(1)] = cljs.core.first((state_44690[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45811 = state_44690;
state_44690 = G__45811;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_44733 = f__42851__auto__();
(statearr_44733[(6)] = c__42850__auto___45762);

return statearr_44733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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
var G__44736 = arguments.length;
switch (G__44736) {
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
var c__42850__auto___45819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44768){
var state_val_44769 = (state_44768[(1)]);
if((state_val_44769 === (7))){
var inst_44747 = (state_44768[(7)]);
var inst_44748 = (state_44768[(8)]);
var inst_44747__$1 = (state_44768[(2)]);
var inst_44748__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44747__$1,(0),null);
var inst_44749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44747__$1,(1),null);
var inst_44750 = (inst_44748__$1 == null);
var state_44768__$1 = (function (){var statearr_44771 = state_44768;
(statearr_44771[(7)] = inst_44747__$1);

(statearr_44771[(9)] = inst_44749);

(statearr_44771[(8)] = inst_44748__$1);

return statearr_44771;
})();
if(cljs.core.truth_(inst_44750)){
var statearr_44772_45820 = state_44768__$1;
(statearr_44772_45820[(1)] = (8));

} else {
var statearr_44773_45821 = state_44768__$1;
(statearr_44773_45821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (1))){
var inst_44737 = cljs.core.vec(chs);
var inst_44738 = inst_44737;
var state_44768__$1 = (function (){var statearr_44774 = state_44768;
(statearr_44774[(10)] = inst_44738);

return statearr_44774;
})();
var statearr_44775_45822 = state_44768__$1;
(statearr_44775_45822[(2)] = null);

(statearr_44775_45822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (4))){
var inst_44738 = (state_44768[(10)]);
var state_44768__$1 = state_44768;
return cljs.core.async.ioc_alts_BANG_(state_44768__$1,(7),inst_44738);
} else {
if((state_val_44769 === (6))){
var inst_44764 = (state_44768[(2)]);
var state_44768__$1 = state_44768;
var statearr_44776_45823 = state_44768__$1;
(statearr_44776_45823[(2)] = inst_44764);

(statearr_44776_45823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (3))){
var inst_44766 = (state_44768[(2)]);
var state_44768__$1 = state_44768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44768__$1,inst_44766);
} else {
if((state_val_44769 === (2))){
var inst_44738 = (state_44768[(10)]);
var inst_44740 = cljs.core.count(inst_44738);
var inst_44741 = (inst_44740 > (0));
var state_44768__$1 = state_44768;
if(cljs.core.truth_(inst_44741)){
var statearr_44778_45824 = state_44768__$1;
(statearr_44778_45824[(1)] = (4));

} else {
var statearr_44779_45825 = state_44768__$1;
(statearr_44779_45825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (11))){
var inst_44738 = (state_44768[(10)]);
var inst_44757 = (state_44768[(2)]);
var tmp44777 = inst_44738;
var inst_44738__$1 = tmp44777;
var state_44768__$1 = (function (){var statearr_44780 = state_44768;
(statearr_44780[(10)] = inst_44738__$1);

(statearr_44780[(11)] = inst_44757);

return statearr_44780;
})();
var statearr_44781_45826 = state_44768__$1;
(statearr_44781_45826[(2)] = null);

(statearr_44781_45826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (9))){
var inst_44748 = (state_44768[(8)]);
var state_44768__$1 = state_44768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44768__$1,(11),out,inst_44748);
} else {
if((state_val_44769 === (5))){
var inst_44762 = cljs.core.async.close_BANG_(out);
var state_44768__$1 = state_44768;
var statearr_44786_45833 = state_44768__$1;
(statearr_44786_45833[(2)] = inst_44762);

(statearr_44786_45833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (10))){
var inst_44760 = (state_44768[(2)]);
var state_44768__$1 = state_44768;
var statearr_44787_45834 = state_44768__$1;
(statearr_44787_45834[(2)] = inst_44760);

(statearr_44787_45834[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44769 === (8))){
var inst_44747 = (state_44768[(7)]);
var inst_44749 = (state_44768[(9)]);
var inst_44748 = (state_44768[(8)]);
var inst_44738 = (state_44768[(10)]);
var inst_44752 = (function (){var cs = inst_44738;
var vec__44743 = inst_44747;
var v = inst_44748;
var c = inst_44749;
return (function (p1__44734_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44734_SHARP_);
});
})();
var inst_44753 = cljs.core.filterv(inst_44752,inst_44738);
var inst_44738__$1 = inst_44753;
var state_44768__$1 = (function (){var statearr_44788 = state_44768;
(statearr_44788[(10)] = inst_44738__$1);

return statearr_44788;
})();
var statearr_44789_45835 = state_44768__$1;
(statearr_44789_45835[(2)] = null);

(statearr_44789_45835[(1)] = (2));


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
var statearr_44792 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44792[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44792[(1)] = (1));

return statearr_44792;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44768){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44768);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44793){var ex__42714__auto__ = e44793;
var statearr_44794_45836 = state_44768;
(statearr_44794_45836[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44768[(4)]))){
var statearr_44795_45837 = state_44768;
(statearr_44795_45837[(1)] = cljs.core.first((state_44768[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45838 = state_44768;
state_44768 = G__45838;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_44799 = f__42851__auto__();
(statearr_44799[(6)] = c__42850__auto___45819);

return statearr_44799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
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
var G__44801 = arguments.length;
switch (G__44801) {
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
var c__42850__auto___45846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44838){
var state_val_44839 = (state_44838[(1)]);
if((state_val_44839 === (7))){
var inst_44817 = (state_44838[(7)]);
var inst_44817__$1 = (state_44838[(2)]);
var inst_44821 = (inst_44817__$1 == null);
var inst_44822 = cljs.core.not(inst_44821);
var state_44838__$1 = (function (){var statearr_44843 = state_44838;
(statearr_44843[(7)] = inst_44817__$1);

return statearr_44843;
})();
if(inst_44822){
var statearr_44844_45847 = state_44838__$1;
(statearr_44844_45847[(1)] = (8));

} else {
var statearr_44846_45848 = state_44838__$1;
(statearr_44846_45848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (1))){
var inst_44812 = (0);
var state_44838__$1 = (function (){var statearr_44848 = state_44838;
(statearr_44848[(8)] = inst_44812);

return statearr_44848;
})();
var statearr_44849_45849 = state_44838__$1;
(statearr_44849_45849[(2)] = null);

(statearr_44849_45849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (4))){
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44838__$1,(7),ch);
} else {
if((state_val_44839 === (6))){
var inst_44833 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
var statearr_44850_45850 = state_44838__$1;
(statearr_44850_45850[(2)] = inst_44833);

(statearr_44850_45850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (3))){
var inst_44835 = (state_44838[(2)]);
var inst_44836 = cljs.core.async.close_BANG_(out);
var state_44838__$1 = (function (){var statearr_44852 = state_44838;
(statearr_44852[(9)] = inst_44835);

return statearr_44852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44838__$1,inst_44836);
} else {
if((state_val_44839 === (2))){
var inst_44812 = (state_44838[(8)]);
var inst_44814 = (inst_44812 < n);
var state_44838__$1 = state_44838;
if(cljs.core.truth_(inst_44814)){
var statearr_44853_45851 = state_44838__$1;
(statearr_44853_45851[(1)] = (4));

} else {
var statearr_44854_45852 = state_44838__$1;
(statearr_44854_45852[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (11))){
var inst_44812 = (state_44838[(8)]);
var inst_44825 = (state_44838[(2)]);
var inst_44826 = (inst_44812 + (1));
var inst_44812__$1 = inst_44826;
var state_44838__$1 = (function (){var statearr_44855 = state_44838;
(statearr_44855[(8)] = inst_44812__$1);

(statearr_44855[(10)] = inst_44825);

return statearr_44855;
})();
var statearr_44856_45859 = state_44838__$1;
(statearr_44856_45859[(2)] = null);

(statearr_44856_45859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (9))){
var state_44838__$1 = state_44838;
var statearr_44861_45860 = state_44838__$1;
(statearr_44861_45860[(2)] = null);

(statearr_44861_45860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (5))){
var state_44838__$1 = state_44838;
var statearr_44869_45861 = state_44838__$1;
(statearr_44869_45861[(2)] = null);

(statearr_44869_45861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (10))){
var inst_44830 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
var statearr_44880_45862 = state_44838__$1;
(statearr_44880_45862[(2)] = inst_44830);

(statearr_44880_45862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (8))){
var inst_44817 = (state_44838[(7)]);
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44838__$1,(11),out,inst_44817);
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
var statearr_44885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44885[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44885[(1)] = (1));

return statearr_44885;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44838){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44838);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44886){var ex__42714__auto__ = e44886;
var statearr_44887_45863 = state_44838;
(statearr_44887_45863[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44838[(4)]))){
var statearr_44888_45864 = state_44838;
(statearr_44888_45864[(1)] = cljs.core.first((state_44838[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45865 = state_44838;
state_44838 = G__45865;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_44889 = f__42851__auto__();
(statearr_44889[(6)] = c__42850__auto___45846);

return statearr_44889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44891 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44891 = (function (f,ch,meta44892){
this.f = f;
this.ch = ch;
this.meta44892 = meta44892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44893,meta44892__$1){
var self__ = this;
var _44893__$1 = this;
return (new cljs.core.async.t_cljs$core$async44891(self__.f,self__.ch,meta44892__$1));
}));

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44893){
var self__ = this;
var _44893__$1 = this;
return self__.meta44892;
}));

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
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
cljs.core.async.t_cljs$core$async44894 = (function (f,ch,meta44892,_,fn1,meta44895){
this.f = f;
this.ch = ch;
this.meta44892 = meta44892;
this._ = _;
this.fn1 = fn1;
this.meta44895 = meta44895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44896,meta44895__$1){
var self__ = this;
var _44896__$1 = this;
return (new cljs.core.async.t_cljs$core$async44894(self__.f,self__.ch,self__.meta44892,self__._,self__.fn1,meta44895__$1));
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
return (function (p1__44890_SHARP_){
var G__44897 = (((p1__44890_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44890_SHARP_) : self__.f.call(null,p1__44890_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44897) : f1.call(null,G__44897));
});
}));

(cljs.core.async.t_cljs$core$async44894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44892","meta44892",54345847,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44891","cljs.core.async/t_cljs$core$async44891",1846540642,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44895","meta44895",-1600714130,null)], null);
}));

(cljs.core.async.t_cljs$core$async44894.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44894");

(cljs.core.async.t_cljs$core$async44894.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44894");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44894.
 */
cljs.core.async.__GT_t_cljs$core$async44894 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44894(f__$1,ch__$1,meta44892__$1,___$2,fn1__$1,meta44895){
return (new cljs.core.async.t_cljs$core$async44894(f__$1,ch__$1,meta44892__$1,___$2,fn1__$1,meta44895));
});

}

return (new cljs.core.async.t_cljs$core$async44894(self__.f,self__.ch,self__.meta44892,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44892","meta44892",54345847,null)], null);
}));

(cljs.core.async.t_cljs$core$async44891.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44891");

(cljs.core.async.t_cljs$core$async44891.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44891");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44891.
 */
cljs.core.async.__GT_t_cljs$core$async44891 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44891(f__$1,ch__$1,meta44892){
return (new cljs.core.async.t_cljs$core$async44891(f__$1,ch__$1,meta44892));
});

}

return (new cljs.core.async.t_cljs$core$async44891(f,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42850__auto___45883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_44927){
var state_val_44928 = (state_44927[(1)]);
if((state_val_44928 === (7))){
var inst_44923 = (state_44927[(2)]);
var state_44927__$1 = state_44927;
var statearr_44929_45884 = state_44927__$1;
(statearr_44929_45884[(2)] = inst_44923);

(statearr_44929_45884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (1))){
var state_44927__$1 = state_44927;
var statearr_44930_45885 = state_44927__$1;
(statearr_44930_45885[(2)] = null);

(statearr_44930_45885[(1)] = (2));


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
var statearr_44932_45886 = state_44927__$1;
(statearr_44932_45886[(1)] = (5));

} else {
var statearr_44933_45887 = state_44927__$1;
(statearr_44933_45887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (6))){
var inst_44909 = (state_44927[(7)]);
var inst_44914 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44909) : p.call(null,inst_44909));
var state_44927__$1 = state_44927;
if(cljs.core.truth_(inst_44914)){
var statearr_44934_45888 = state_44927__$1;
(statearr_44934_45888[(1)] = (8));

} else {
var statearr_44935_45889 = state_44927__$1;
(statearr_44935_45889[(1)] = (9));

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
var statearr_44936_45890 = state_44927__$1;
(statearr_44936_45890[(2)] = inst_44917);

(statearr_44936_45890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (9))){
var state_44927__$1 = state_44927;
var statearr_44937_45891 = state_44927__$1;
(statearr_44937_45891[(2)] = null);

(statearr_44937_45891[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (5))){
var inst_44912 = cljs.core.async.close_BANG_(out);
var state_44927__$1 = state_44927;
var statearr_44938_45892 = state_44927__$1;
(statearr_44938_45892[(2)] = inst_44912);

(statearr_44938_45892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44928 === (10))){
var inst_44920 = (state_44927[(2)]);
var state_44927__$1 = (function (){var statearr_44939 = state_44927;
(statearr_44939[(8)] = inst_44920);

return statearr_44939;
})();
var statearr_44940_45894 = state_44927__$1;
(statearr_44940_45894[(2)] = null);

(statearr_44940_45894[(1)] = (2));


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
}catch (e44946){var ex__42714__auto__ = e44946;
var statearr_44947_45896 = state_44927;
(statearr_44947_45896[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44927[(4)]))){
var statearr_44948_45897 = state_44927;
(statearr_44948_45897[(1)] = cljs.core.first((state_44927[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45898 = state_44927;
state_44927 = G__45898;
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
var state__42852__auto__ = (function (){var statearr_44949 = f__42851__auto__();
(statearr_44949[(6)] = c__42850__auto___45883);

return statearr_44949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44951 = arguments.length;
switch (G__44951) {
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
var c__42850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_45013){
var state_val_45014 = (state_45013[(1)]);
if((state_val_45014 === (7))){
var inst_45009 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45015_45900 = state_45013__$1;
(statearr_45015_45900[(2)] = inst_45009);

(statearr_45015_45900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (20))){
var inst_44979 = (state_45013[(7)]);
var inst_44990 = (state_45013[(2)]);
var inst_44991 = cljs.core.next(inst_44979);
var inst_44965 = inst_44991;
var inst_44966 = null;
var inst_44967 = (0);
var inst_44968 = (0);
var state_45013__$1 = (function (){var statearr_45016 = state_45013;
(statearr_45016[(8)] = inst_44968);

(statearr_45016[(9)] = inst_44966);

(statearr_45016[(10)] = inst_44965);

(statearr_45016[(11)] = inst_44967);

(statearr_45016[(12)] = inst_44990);

return statearr_45016;
})();
var statearr_45017_45901 = state_45013__$1;
(statearr_45017_45901[(2)] = null);

(statearr_45017_45901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (1))){
var state_45013__$1 = state_45013;
var statearr_45018_45902 = state_45013__$1;
(statearr_45018_45902[(2)] = null);

(statearr_45018_45902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (4))){
var inst_44954 = (state_45013[(13)]);
var inst_44954__$1 = (state_45013[(2)]);
var inst_44955 = (inst_44954__$1 == null);
var state_45013__$1 = (function (){var statearr_45019 = state_45013;
(statearr_45019[(13)] = inst_44954__$1);

return statearr_45019;
})();
if(cljs.core.truth_(inst_44955)){
var statearr_45020_45904 = state_45013__$1;
(statearr_45020_45904[(1)] = (5));

} else {
var statearr_45021_45905 = state_45013__$1;
(statearr_45021_45905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (15))){
var state_45013__$1 = state_45013;
var statearr_45025_45906 = state_45013__$1;
(statearr_45025_45906[(2)] = null);

(statearr_45025_45906[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (21))){
var state_45013__$1 = state_45013;
var statearr_45026_45907 = state_45013__$1;
(statearr_45026_45907[(2)] = null);

(statearr_45026_45907[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (13))){
var inst_44968 = (state_45013[(8)]);
var inst_44966 = (state_45013[(9)]);
var inst_44965 = (state_45013[(10)]);
var inst_44967 = (state_45013[(11)]);
var inst_44975 = (state_45013[(2)]);
var inst_44976 = (inst_44968 + (1));
var tmp45022 = inst_44966;
var tmp45023 = inst_44965;
var tmp45024 = inst_44967;
var inst_44965__$1 = tmp45023;
var inst_44966__$1 = tmp45022;
var inst_44967__$1 = tmp45024;
var inst_44968__$1 = inst_44976;
var state_45013__$1 = (function (){var statearr_45027 = state_45013;
(statearr_45027[(8)] = inst_44968__$1);

(statearr_45027[(14)] = inst_44975);

(statearr_45027[(9)] = inst_44966__$1);

(statearr_45027[(10)] = inst_44965__$1);

(statearr_45027[(11)] = inst_44967__$1);

return statearr_45027;
})();
var statearr_45028_45910 = state_45013__$1;
(statearr_45028_45910[(2)] = null);

(statearr_45028_45910[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (22))){
var state_45013__$1 = state_45013;
var statearr_45029_45911 = state_45013__$1;
(statearr_45029_45911[(2)] = null);

(statearr_45029_45911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (6))){
var inst_44954 = (state_45013[(13)]);
var inst_44963 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44954) : f.call(null,inst_44954));
var inst_44964 = cljs.core.seq(inst_44963);
var inst_44965 = inst_44964;
var inst_44966 = null;
var inst_44967 = (0);
var inst_44968 = (0);
var state_45013__$1 = (function (){var statearr_45030 = state_45013;
(statearr_45030[(8)] = inst_44968);

(statearr_45030[(9)] = inst_44966);

(statearr_45030[(10)] = inst_44965);

(statearr_45030[(11)] = inst_44967);

return statearr_45030;
})();
var statearr_45031_45913 = state_45013__$1;
(statearr_45031_45913[(2)] = null);

(statearr_45031_45913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (17))){
var inst_44979 = (state_45013[(7)]);
var inst_44983 = cljs.core.chunk_first(inst_44979);
var inst_44984 = cljs.core.chunk_rest(inst_44979);
var inst_44985 = cljs.core.count(inst_44983);
var inst_44965 = inst_44984;
var inst_44966 = inst_44983;
var inst_44967 = inst_44985;
var inst_44968 = (0);
var state_45013__$1 = (function (){var statearr_45032 = state_45013;
(statearr_45032[(8)] = inst_44968);

(statearr_45032[(9)] = inst_44966);

(statearr_45032[(10)] = inst_44965);

(statearr_45032[(11)] = inst_44967);

return statearr_45032;
})();
var statearr_45033_45914 = state_45013__$1;
(statearr_45033_45914[(2)] = null);

(statearr_45033_45914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (3))){
var inst_45011 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45013__$1,inst_45011);
} else {
if((state_val_45014 === (12))){
var inst_44999 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45034_45916 = state_45013__$1;
(statearr_45034_45916[(2)] = inst_44999);

(statearr_45034_45916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (2))){
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45013__$1,(4),in$);
} else {
if((state_val_45014 === (23))){
var inst_45007 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45035_45917 = state_45013__$1;
(statearr_45035_45917[(2)] = inst_45007);

(statearr_45035_45917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (19))){
var inst_44994 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45036_45919 = state_45013__$1;
(statearr_45036_45919[(2)] = inst_44994);

(statearr_45036_45919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (11))){
var inst_44965 = (state_45013[(10)]);
var inst_44979 = (state_45013[(7)]);
var inst_44979__$1 = cljs.core.seq(inst_44965);
var state_45013__$1 = (function (){var statearr_45037 = state_45013;
(statearr_45037[(7)] = inst_44979__$1);

return statearr_45037;
})();
if(inst_44979__$1){
var statearr_45038_45920 = state_45013__$1;
(statearr_45038_45920[(1)] = (14));

} else {
var statearr_45039_45921 = state_45013__$1;
(statearr_45039_45921[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (9))){
var inst_45001 = (state_45013[(2)]);
var inst_45002 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45013__$1 = (function (){var statearr_45040 = state_45013;
(statearr_45040[(15)] = inst_45001);

return statearr_45040;
})();
if(cljs.core.truth_(inst_45002)){
var statearr_45041_45922 = state_45013__$1;
(statearr_45041_45922[(1)] = (21));

} else {
var statearr_45042_45923 = state_45013__$1;
(statearr_45042_45923[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (5))){
var inst_44957 = cljs.core.async.close_BANG_(out);
var state_45013__$1 = state_45013;
var statearr_45043_45924 = state_45013__$1;
(statearr_45043_45924[(2)] = inst_44957);

(statearr_45043_45924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (14))){
var inst_44979 = (state_45013[(7)]);
var inst_44981 = cljs.core.chunked_seq_QMARK_(inst_44979);
var state_45013__$1 = state_45013;
if(inst_44981){
var statearr_45044_45925 = state_45013__$1;
(statearr_45044_45925[(1)] = (17));

} else {
var statearr_45045_45926 = state_45013__$1;
(statearr_45045_45926[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (16))){
var inst_44997 = (state_45013[(2)]);
var state_45013__$1 = state_45013;
var statearr_45046_45928 = state_45013__$1;
(statearr_45046_45928[(2)] = inst_44997);

(statearr_45046_45928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45014 === (10))){
var inst_44968 = (state_45013[(8)]);
var inst_44966 = (state_45013[(9)]);
var inst_44973 = cljs.core._nth(inst_44966,inst_44968);
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45013__$1,(13),out,inst_44973);
} else {
if((state_val_45014 === (18))){
var inst_44979 = (state_45013[(7)]);
var inst_44988 = cljs.core.first(inst_44979);
var state_45013__$1 = state_45013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45013__$1,(20),out,inst_44988);
} else {
if((state_val_45014 === (8))){
var inst_44968 = (state_45013[(8)]);
var inst_44967 = (state_45013[(11)]);
var inst_44970 = (inst_44968 < inst_44967);
var inst_44971 = inst_44970;
var state_45013__$1 = state_45013;
if(cljs.core.truth_(inst_44971)){
var statearr_45047_45940 = state_45013__$1;
(statearr_45047_45940[(1)] = (10));

} else {
var statearr_45048_45941 = state_45013__$1;
(statearr_45048_45941[(1)] = (11));

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
var statearr_45049 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45049[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__);

(statearr_45049[(1)] = (1));

return statearr_45049;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1 = (function (state_45013){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45013);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45050){var ex__42714__auto__ = e45050;
var statearr_45051_45947 = state_45013;
(statearr_45051_45947[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45013[(4)]))){
var statearr_45052_45948 = state_45013;
(statearr_45052_45948[(1)] = cljs.core.first((state_45013[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45949 = state_45013;
state_45013 = G__45949;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__ = function(state_45013){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1.call(this,state_45013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_45053 = f__42851__auto__();
(statearr_45053[(6)] = c__42850__auto__);

return statearr_45053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));

return c__42850__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45055 = arguments.length;
switch (G__45055) {
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
var G__45057 = arguments.length;
switch (G__45057) {
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
var G__45059 = arguments.length;
switch (G__45059) {
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
var c__42850__auto___45965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_45083){
var state_val_45084 = (state_45083[(1)]);
if((state_val_45084 === (7))){
var inst_45078 = (state_45083[(2)]);
var state_45083__$1 = state_45083;
var statearr_45085_45966 = state_45083__$1;
(statearr_45085_45966[(2)] = inst_45078);

(statearr_45085_45966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (1))){
var inst_45060 = null;
var state_45083__$1 = (function (){var statearr_45086 = state_45083;
(statearr_45086[(7)] = inst_45060);

return statearr_45086;
})();
var statearr_45087_45967 = state_45083__$1;
(statearr_45087_45967[(2)] = null);

(statearr_45087_45967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (4))){
var inst_45063 = (state_45083[(8)]);
var inst_45063__$1 = (state_45083[(2)]);
var inst_45064 = (inst_45063__$1 == null);
var inst_45065 = cljs.core.not(inst_45064);
var state_45083__$1 = (function (){var statearr_45088 = state_45083;
(statearr_45088[(8)] = inst_45063__$1);

return statearr_45088;
})();
if(inst_45065){
var statearr_45089_45973 = state_45083__$1;
(statearr_45089_45973[(1)] = (5));

} else {
var statearr_45090_45974 = state_45083__$1;
(statearr_45090_45974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (6))){
var state_45083__$1 = state_45083;
var statearr_45091_45979 = state_45083__$1;
(statearr_45091_45979[(2)] = null);

(statearr_45091_45979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (3))){
var inst_45080 = (state_45083[(2)]);
var inst_45081 = cljs.core.async.close_BANG_(out);
var state_45083__$1 = (function (){var statearr_45092 = state_45083;
(statearr_45092[(9)] = inst_45080);

return statearr_45092;
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
var inst_45060 = inst_45063;
var state_45083__$1 = (function (){var statearr_45093 = state_45083;
(statearr_45093[(7)] = inst_45060);

(statearr_45093[(10)] = inst_45072);

return statearr_45093;
})();
var statearr_45094_45987 = state_45083__$1;
(statearr_45094_45987[(2)] = null);

(statearr_45094_45987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (9))){
var inst_45063 = (state_45083[(8)]);
var state_45083__$1 = state_45083;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45083__$1,(11),out,inst_45063);
} else {
if((state_val_45084 === (5))){
var inst_45060 = (state_45083[(7)]);
var inst_45063 = (state_45083[(8)]);
var inst_45067 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45063,inst_45060);
var state_45083__$1 = state_45083;
if(inst_45067){
var statearr_45096_45989 = state_45083__$1;
(statearr_45096_45989[(1)] = (8));

} else {
var statearr_45097_45991 = state_45083__$1;
(statearr_45097_45991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (10))){
var inst_45075 = (state_45083[(2)]);
var state_45083__$1 = state_45083;
var statearr_45098_45992 = state_45083__$1;
(statearr_45098_45992[(2)] = inst_45075);

(statearr_45098_45992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45084 === (8))){
var inst_45060 = (state_45083[(7)]);
var tmp45095 = inst_45060;
var inst_45060__$1 = tmp45095;
var state_45083__$1 = (function (){var statearr_45099 = state_45083;
(statearr_45099[(7)] = inst_45060__$1);

return statearr_45099;
})();
var statearr_45100_45993 = state_45083__$1;
(statearr_45100_45993[(2)] = null);

(statearr_45100_45993[(1)] = (2));


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
var statearr_45101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45101[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45101[(1)] = (1));

return statearr_45101;
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
}catch (e45102){var ex__42714__auto__ = e45102;
var statearr_45103_45996 = state_45083;
(statearr_45103_45996[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45083[(4)]))){
var statearr_45104_45997 = state_45083;
(statearr_45104_45997[(1)] = cljs.core.first((state_45083[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45998 = state_45083;
state_45083 = G__45998;
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
var state__42852__auto__ = (function (){var statearr_45105 = f__42851__auto__();
(statearr_45105[(6)] = c__42850__auto___45965);

return statearr_45105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45107 = arguments.length;
switch (G__45107) {
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
var c__42850__auto___46000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var inst_45141 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45147_46002 = state_45145__$1;
(statearr_45147_46002[(2)] = inst_45141);

(statearr_45147_46002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (1))){
var inst_45108 = (new Array(n));
var inst_45109 = inst_45108;
var inst_45110 = (0);
var state_45145__$1 = (function (){var statearr_45148 = state_45145;
(statearr_45148[(7)] = inst_45110);

(statearr_45148[(8)] = inst_45109);

return statearr_45148;
})();
var statearr_45149_46003 = state_45145__$1;
(statearr_45149_46003[(2)] = null);

(statearr_45149_46003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (4))){
var inst_45113 = (state_45145[(9)]);
var inst_45113__$1 = (state_45145[(2)]);
var inst_45114 = (inst_45113__$1 == null);
var inst_45115 = cljs.core.not(inst_45114);
var state_45145__$1 = (function (){var statearr_45150 = state_45145;
(statearr_45150[(9)] = inst_45113__$1);

return statearr_45150;
})();
if(inst_45115){
var statearr_45151_46004 = state_45145__$1;
(statearr_45151_46004[(1)] = (5));

} else {
var statearr_45152_46005 = state_45145__$1;
(statearr_45152_46005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (15))){
var inst_45135 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45153_46007 = state_45145__$1;
(statearr_45153_46007[(2)] = inst_45135);

(statearr_45153_46007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (13))){
var state_45145__$1 = state_45145;
var statearr_45154_46010 = state_45145__$1;
(statearr_45154_46010[(2)] = null);

(statearr_45154_46010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (6))){
var inst_45110 = (state_45145[(7)]);
var inst_45131 = (inst_45110 > (0));
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45131)){
var statearr_45155_46011 = state_45145__$1;
(statearr_45155_46011[(1)] = (12));

} else {
var statearr_45156_46012 = state_45145__$1;
(statearr_45156_46012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (3))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (12))){
var inst_45109 = (state_45145[(8)]);
var inst_45133 = cljs.core.vec(inst_45109);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45145__$1,(15),out,inst_45133);
} else {
if((state_val_45146 === (2))){
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45145__$1,(4),ch);
} else {
if((state_val_45146 === (11))){
var inst_45125 = (state_45145[(2)]);
var inst_45126 = (new Array(n));
var inst_45109 = inst_45126;
var inst_45110 = (0);
var state_45145__$1 = (function (){var statearr_45157 = state_45145;
(statearr_45157[(10)] = inst_45125);

(statearr_45157[(7)] = inst_45110);

(statearr_45157[(8)] = inst_45109);

return statearr_45157;
})();
var statearr_45158_46014 = state_45145__$1;
(statearr_45158_46014[(2)] = null);

(statearr_45158_46014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (9))){
var inst_45109 = (state_45145[(8)]);
var inst_45123 = cljs.core.vec(inst_45109);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45145__$1,(11),out,inst_45123);
} else {
if((state_val_45146 === (5))){
var inst_45110 = (state_45145[(7)]);
var inst_45113 = (state_45145[(9)]);
var inst_45118 = (state_45145[(11)]);
var inst_45109 = (state_45145[(8)]);
var inst_45117 = (inst_45109[inst_45110] = inst_45113);
var inst_45118__$1 = (inst_45110 + (1));
var inst_45119 = (inst_45118__$1 < n);
var state_45145__$1 = (function (){var statearr_45159 = state_45145;
(statearr_45159[(12)] = inst_45117);

(statearr_45159[(11)] = inst_45118__$1);

return statearr_45159;
})();
if(cljs.core.truth_(inst_45119)){
var statearr_45160_46018 = state_45145__$1;
(statearr_45160_46018[(1)] = (8));

} else {
var statearr_45161_46019 = state_45145__$1;
(statearr_45161_46019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (14))){
var inst_45138 = (state_45145[(2)]);
var inst_45139 = cljs.core.async.close_BANG_(out);
var state_45145__$1 = (function (){var statearr_45163 = state_45145;
(statearr_45163[(13)] = inst_45138);

return statearr_45163;
})();
var statearr_45164_46025 = state_45145__$1;
(statearr_45164_46025[(2)] = inst_45139);

(statearr_45164_46025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (10))){
var inst_45129 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45165_46029 = state_45145__$1;
(statearr_45165_46029[(2)] = inst_45129);

(statearr_45165_46029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45146 === (8))){
var inst_45118 = (state_45145[(11)]);
var inst_45109 = (state_45145[(8)]);
var tmp45162 = inst_45109;
var inst_45109__$1 = tmp45162;
var inst_45110 = inst_45118;
var state_45145__$1 = (function (){var statearr_45166 = state_45145;
(statearr_45166[(7)] = inst_45110);

(statearr_45166[(8)] = inst_45109__$1);

return statearr_45166;
})();
var statearr_45167_46035 = state_45145__$1;
(statearr_45167_46035[(2)] = null);

(statearr_45167_46035[(1)] = (2));


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
var statearr_45168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45168[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45168[(1)] = (1));

return statearr_45168;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_45145){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45145);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45169){var ex__42714__auto__ = e45169;
var statearr_45170_46045 = state_45145;
(statearr_45170_46045[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45145[(4)]))){
var statearr_45171_46046 = state_45145;
(statearr_45171_46046[(1)] = cljs.core.first((state_45145[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46048 = state_45145;
state_45145 = G__46048;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_45172 = f__42851__auto__();
(statearr_45172[(6)] = c__42850__auto___46000);

return statearr_45172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45174 = arguments.length;
switch (G__45174) {
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
var c__42850__auto___46065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42851__auto__ = (function (){var switch__42710__auto__ = (function (state_45216){
var state_val_45217 = (state_45216[(1)]);
if((state_val_45217 === (7))){
var inst_45212 = (state_45216[(2)]);
var state_45216__$1 = state_45216;
var statearr_45218_46070 = state_45216__$1;
(statearr_45218_46070[(2)] = inst_45212);

(statearr_45218_46070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (1))){
var inst_45175 = [];
var inst_45176 = inst_45175;
var inst_45177 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45216__$1 = (function (){var statearr_45219 = state_45216;
(statearr_45219[(7)] = inst_45177);

(statearr_45219[(8)] = inst_45176);

return statearr_45219;
})();
var statearr_45220_46078 = state_45216__$1;
(statearr_45220_46078[(2)] = null);

(statearr_45220_46078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (4))){
var inst_45180 = (state_45216[(9)]);
var inst_45180__$1 = (state_45216[(2)]);
var inst_45181 = (inst_45180__$1 == null);
var inst_45182 = cljs.core.not(inst_45181);
var state_45216__$1 = (function (){var statearr_45221 = state_45216;
(statearr_45221[(9)] = inst_45180__$1);

return statearr_45221;
})();
if(inst_45182){
var statearr_45222_46086 = state_45216__$1;
(statearr_45222_46086[(1)] = (5));

} else {
var statearr_45223_46091 = state_45216__$1;
(statearr_45223_46091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (15))){
var inst_45206 = (state_45216[(2)]);
var state_45216__$1 = state_45216;
var statearr_45224_46097 = state_45216__$1;
(statearr_45224_46097[(2)] = inst_45206);

(statearr_45224_46097[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (13))){
var state_45216__$1 = state_45216;
var statearr_45225_46104 = state_45216__$1;
(statearr_45225_46104[(2)] = null);

(statearr_45225_46104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (6))){
var inst_45176 = (state_45216[(8)]);
var inst_45201 = inst_45176.length;
var inst_45202 = (inst_45201 > (0));
var state_45216__$1 = state_45216;
if(cljs.core.truth_(inst_45202)){
var statearr_45226_46113 = state_45216__$1;
(statearr_45226_46113[(1)] = (12));

} else {
var statearr_45227_46118 = state_45216__$1;
(statearr_45227_46118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (3))){
var inst_45214 = (state_45216[(2)]);
var state_45216__$1 = state_45216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45216__$1,inst_45214);
} else {
if((state_val_45217 === (12))){
var inst_45176 = (state_45216[(8)]);
var inst_45204 = cljs.core.vec(inst_45176);
var state_45216__$1 = state_45216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45216__$1,(15),out,inst_45204);
} else {
if((state_val_45217 === (2))){
var state_45216__$1 = state_45216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45216__$1,(4),ch);
} else {
if((state_val_45217 === (11))){
var inst_45184 = (state_45216[(10)]);
var inst_45180 = (state_45216[(9)]);
var inst_45194 = (state_45216[(2)]);
var inst_45195 = [];
var inst_45196 = inst_45195.push(inst_45180);
var inst_45176 = inst_45195;
var inst_45177 = inst_45184;
var state_45216__$1 = (function (){var statearr_45228 = state_45216;
(statearr_45228[(7)] = inst_45177);

(statearr_45228[(11)] = inst_45196);

(statearr_45228[(12)] = inst_45194);

(statearr_45228[(8)] = inst_45176);

return statearr_45228;
})();
var statearr_45229_46127 = state_45216__$1;
(statearr_45229_46127[(2)] = null);

(statearr_45229_46127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (9))){
var inst_45176 = (state_45216[(8)]);
var inst_45192 = cljs.core.vec(inst_45176);
var state_45216__$1 = state_45216;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45216__$1,(11),out,inst_45192);
} else {
if((state_val_45217 === (5))){
var inst_45184 = (state_45216[(10)]);
var inst_45180 = (state_45216[(9)]);
var inst_45177 = (state_45216[(7)]);
var inst_45184__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45180) : f.call(null,inst_45180));
var inst_45185 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45184__$1,inst_45177);
var inst_45186 = cljs.core.keyword_identical_QMARK_(inst_45177,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45187 = ((inst_45185) || (inst_45186));
var state_45216__$1 = (function (){var statearr_45230 = state_45216;
(statearr_45230[(10)] = inst_45184__$1);

return statearr_45230;
})();
if(cljs.core.truth_(inst_45187)){
var statearr_45231_46136 = state_45216__$1;
(statearr_45231_46136[(1)] = (8));

} else {
var statearr_45232_46137 = state_45216__$1;
(statearr_45232_46137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (14))){
var inst_45209 = (state_45216[(2)]);
var inst_45210 = cljs.core.async.close_BANG_(out);
var state_45216__$1 = (function (){var statearr_45234 = state_45216;
(statearr_45234[(13)] = inst_45209);

return statearr_45234;
})();
var statearr_45235_46142 = state_45216__$1;
(statearr_45235_46142[(2)] = inst_45210);

(statearr_45235_46142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (10))){
var inst_45199 = (state_45216[(2)]);
var state_45216__$1 = state_45216;
var statearr_45236_46144 = state_45216__$1;
(statearr_45236_46144[(2)] = inst_45199);

(statearr_45236_46144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45217 === (8))){
var inst_45184 = (state_45216[(10)]);
var inst_45180 = (state_45216[(9)]);
var inst_45176 = (state_45216[(8)]);
var inst_45189 = inst_45176.push(inst_45180);
var tmp45233 = inst_45176;
var inst_45176__$1 = tmp45233;
var inst_45177 = inst_45184;
var state_45216__$1 = (function (){var statearr_45237 = state_45216;
(statearr_45237[(14)] = inst_45189);

(statearr_45237[(7)] = inst_45177);

(statearr_45237[(8)] = inst_45176__$1);

return statearr_45237;
})();
var statearr_45238_46146 = state_45216__$1;
(statearr_45238_46146[(2)] = null);

(statearr_45238_46146[(1)] = (2));


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
var statearr_45239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45239[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_45239[(1)] = (1));

return statearr_45239;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_45216){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_45216);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e45240){var ex__42714__auto__ = e45240;
var statearr_45241_46147 = state_45216;
(statearr_45241_46147[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_45216[(4)]))){
var statearr_45242_46148 = state_45216;
(statearr_45242_46148[(1)] = cljs.core.first((state_45216[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46150 = state_45216;
state_45216 = G__46150;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_45216){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_45216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42852__auto__ = (function (){var statearr_45243 = f__42851__auto__();
(statearr_45243[(6)] = c__42850__auto___46065);

return statearr_45243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42852__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
