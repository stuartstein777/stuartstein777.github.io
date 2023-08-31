goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42497 = arguments.length;
switch (G__42497) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42498 = (function (f,blockable,meta42499){
this.f = f;
this.blockable = blockable;
this.meta42499 = meta42499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42500,meta42499__$1){
var self__ = this;
var _42500__$1 = this;
return (new cljs.core.async.t_cljs$core$async42498(self__.f,self__.blockable,meta42499__$1));
}));

(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42500){
var self__ = this;
var _42500__$1 = this;
return self__.meta42499;
}));

(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42498.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42499","meta42499",164479244,null)], null);
}));

(cljs.core.async.t_cljs$core$async42498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42498");

(cljs.core.async.t_cljs$core$async42498.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42498.
 */
cljs.core.async.__GT_t_cljs$core$async42498 = (function cljs$core$async$__GT_t_cljs$core$async42498(f__$1,blockable__$1,meta42499){
return (new cljs.core.async.t_cljs$core$async42498(f__$1,blockable__$1,meta42499));
});

}

return (new cljs.core.async.t_cljs$core$async42498(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42503 = arguments.length;
switch (G__42503) {
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
var G__42505 = arguments.length;
switch (G__42505) {
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
var G__42507 = arguments.length;
switch (G__42507) {
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
var val_43977 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43977) : fn1.call(null,val_43977));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43977) : fn1.call(null,val_43977));
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
var G__42509 = arguments.length;
switch (G__42509) {
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
var n__4613__auto___43988 = n;
var x_43989 = (0);
while(true){
if((x_43989 < n__4613__auto___43988)){
(a[x_43989] = x_43989);

var G__43990 = (x_43989 + (1));
x_43989 = G__43990;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42510 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42510 = (function (flag,meta42511){
this.flag = flag;
this.meta42511 = meta42511;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42512,meta42511__$1){
var self__ = this;
var _42512__$1 = this;
return (new cljs.core.async.t_cljs$core$async42510(self__.flag,meta42511__$1));
}));

(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42512){
var self__ = this;
var _42512__$1 = this;
return self__.meta42511;
}));

(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42510.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42511","meta42511",1238031610,null)], null);
}));

(cljs.core.async.t_cljs$core$async42510.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42510.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42510");

(cljs.core.async.t_cljs$core$async42510.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42510");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42510.
 */
cljs.core.async.__GT_t_cljs$core$async42510 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42510(flag__$1,meta42511){
return (new cljs.core.async.t_cljs$core$async42510(flag__$1,meta42511));
});

}

return (new cljs.core.async.t_cljs$core$async42510(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42513 = (function (flag,cb,meta42514){
this.flag = flag;
this.cb = cb;
this.meta42514 = meta42514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42515,meta42514__$1){
var self__ = this;
var _42515__$1 = this;
return (new cljs.core.async.t_cljs$core$async42513(self__.flag,self__.cb,meta42514__$1));
}));

(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42515){
var self__ = this;
var _42515__$1 = this;
return self__.meta42514;
}));

(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42514","meta42514",-757035745,null)], null);
}));

(cljs.core.async.t_cljs$core$async42513.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42513");

(cljs.core.async.t_cljs$core$async42513.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42513");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42513.
 */
cljs.core.async.__GT_t_cljs$core$async42513 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42513(flag__$1,cb__$1,meta42514){
return (new cljs.core.async.t_cljs$core$async42513(flag__$1,cb__$1,meta42514));
});

}

return (new cljs.core.async.t_cljs$core$async42513(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42516_SHARP_){
var G__42518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42516_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42518) : fret.call(null,G__42518));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42517_SHARP_){
var G__42519 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42517_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42519) : fret.call(null,G__42519));
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
var G__44010 = (i + (1));
i = G__44010;
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
var len__4736__auto___44015 = arguments.length;
var i__4737__auto___44016 = (0);
while(true){
if((i__4737__auto___44016 < len__4736__auto___44015)){
args__4742__auto__.push((arguments[i__4737__auto___44016]));

var G__44017 = (i__4737__auto___44016 + (1));
i__4737__auto___44016 = G__44017;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42522){
var map__42523 = p__42522;
var map__42523__$1 = (((((!((map__42523 == null))))?(((((map__42523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42523):map__42523);
var opts = map__42523__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42520){
var G__42521 = cljs.core.first(seq42520);
var seq42520__$1 = cljs.core.next(seq42520);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42521,seq42520__$1);
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
var G__42526 = arguments.length;
switch (G__42526) {
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
var c__42439__auto___44022 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42550){
var state_val_42551 = (state_42550[(1)]);
if((state_val_42551 === (7))){
var inst_42546 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42552_44025 = state_42550__$1;
(statearr_42552_44025[(2)] = inst_42546);

(statearr_42552_44025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (1))){
var state_42550__$1 = state_42550;
var statearr_42553_44026 = state_42550__$1;
(statearr_42553_44026[(2)] = null);

(statearr_42553_44026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (4))){
var inst_42529 = (state_42550[(7)]);
var inst_42529__$1 = (state_42550[(2)]);
var inst_42530 = (inst_42529__$1 == null);
var state_42550__$1 = (function (){var statearr_42554 = state_42550;
(statearr_42554[(7)] = inst_42529__$1);

return statearr_42554;
})();
if(cljs.core.truth_(inst_42530)){
var statearr_42555_44030 = state_42550__$1;
(statearr_42555_44030[(1)] = (5));

} else {
var statearr_42556_44031 = state_42550__$1;
(statearr_42556_44031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (13))){
var state_42550__$1 = state_42550;
var statearr_42557_44032 = state_42550__$1;
(statearr_42557_44032[(2)] = null);

(statearr_42557_44032[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (6))){
var inst_42529 = (state_42550[(7)]);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42550__$1,(11),to,inst_42529);
} else {
if((state_val_42551 === (3))){
var inst_42548 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42550__$1,inst_42548);
} else {
if((state_val_42551 === (12))){
var state_42550__$1 = state_42550;
var statearr_42558_44034 = state_42550__$1;
(statearr_42558_44034[(2)] = null);

(statearr_42558_44034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (2))){
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42550__$1,(4),from);
} else {
if((state_val_42551 === (11))){
var inst_42539 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42539)){
var statearr_42559_44035 = state_42550__$1;
(statearr_42559_44035[(1)] = (12));

} else {
var statearr_42560_44036 = state_42550__$1;
(statearr_42560_44036[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (9))){
var state_42550__$1 = state_42550;
var statearr_42561_44037 = state_42550__$1;
(statearr_42561_44037[(2)] = null);

(statearr_42561_44037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (5))){
var state_42550__$1 = state_42550;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42562_44038 = state_42550__$1;
(statearr_42562_44038[(1)] = (8));

} else {
var statearr_42563_44039 = state_42550__$1;
(statearr_42563_44039[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (14))){
var inst_42544 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42564_44042 = state_42550__$1;
(statearr_42564_44042[(2)] = inst_42544);

(statearr_42564_44042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (10))){
var inst_42536 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42565_44044 = state_42550__$1;
(statearr_42565_44044[(2)] = inst_42536);

(statearr_42565_44044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (8))){
var inst_42533 = cljs.core.async.close_BANG_(to);
var state_42550__$1 = state_42550;
var statearr_42566_44046 = state_42550__$1;
(statearr_42566_44046[(2)] = inst_42533);

(statearr_42566_44046[(1)] = (10));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_42567 = [null,null,null,null,null,null,null,null];
(statearr_42567[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_42567[(1)] = (1));

return statearr_42567;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_42550){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42550);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42568){var ex__42370__auto__ = e42568;
var statearr_42569_44047 = state_42550;
(statearr_42569_44047[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42550[(4)]))){
var statearr_42570_44048 = state_42550;
(statearr_42570_44048[(1)] = cljs.core.first((state_42550[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44051 = state_42550;
state_42550 = G__44051;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_42550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_42550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42571 = f__42440__auto__();
(statearr_42571[(6)] = c__42439__auto___44022);

return statearr_42571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var process = (function (p__42572){
var vec__42573 = p__42572;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(1),null);
var job = vec__42573;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42439__auto___44058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42580){
var state_val_42581 = (state_42580[(1)]);
if((state_val_42581 === (1))){
var state_42580__$1 = state_42580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42580__$1,(2),res,v);
} else {
if((state_val_42581 === (2))){
var inst_42577 = (state_42580[(2)]);
var inst_42578 = cljs.core.async.close_BANG_(res);
var state_42580__$1 = (function (){var statearr_42582 = state_42580;
(statearr_42582[(7)] = inst_42577);

return statearr_42582;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42580__$1,inst_42578);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_42583 = [null,null,null,null,null,null,null,null];
(statearr_42583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__);

(statearr_42583[(1)] = (1));

return statearr_42583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1 = (function (state_42580){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42580);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42584){var ex__42370__auto__ = e42584;
var statearr_42585_44063 = state_42580;
(statearr_42585_44063[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42580[(4)]))){
var statearr_42586_44064 = state_42580;
(statearr_42586_44064[(1)] = cljs.core.first((state_42580[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44065 = state_42580;
state_42580 = G__44065;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = function(state_42580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1.call(this,state_42580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42587 = f__42440__auto__();
(statearr_42587[(6)] = c__42439__auto___44058);

return statearr_42587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42588){
var vec__42589 = p__42588;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42589,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42589,(1),null);
var job = vec__42589;
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
var n__4613__auto___44069 = n;
var __44070 = (0);
while(true){
if((__44070 < n__4613__auto___44069)){
var G__42592_44072 = type;
var G__42592_44073__$1 = (((G__42592_44072 instanceof cljs.core.Keyword))?G__42592_44072.fqn:null);
switch (G__42592_44073__$1) {
case "compute":
var c__42439__auto___44076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44070,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = ((function (__44070,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function (state_42605){
var state_val_42606 = (state_42605[(1)]);
if((state_val_42606 === (1))){
var state_42605__$1 = state_42605;
var statearr_42607_44084 = state_42605__$1;
(statearr_42607_44084[(2)] = null);

(statearr_42607_44084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42606 === (2))){
var state_42605__$1 = state_42605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42605__$1,(4),jobs);
} else {
if((state_val_42606 === (3))){
var inst_42603 = (state_42605[(2)]);
var state_42605__$1 = state_42605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42605__$1,inst_42603);
} else {
if((state_val_42606 === (4))){
var inst_42595 = (state_42605[(2)]);
var inst_42596 = process(inst_42595);
var state_42605__$1 = state_42605;
if(cljs.core.truth_(inst_42596)){
var statearr_42608_44091 = state_42605__$1;
(statearr_42608_44091[(1)] = (5));

} else {
var statearr_42609_44092 = state_42605__$1;
(statearr_42609_44092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42606 === (5))){
var state_42605__$1 = state_42605;
var statearr_42610_44093 = state_42605__$1;
(statearr_42610_44093[(2)] = null);

(statearr_42610_44093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42606 === (6))){
var state_42605__$1 = state_42605;
var statearr_42611_44094 = state_42605__$1;
(statearr_42611_44094[(2)] = null);

(statearr_42611_44094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42606 === (7))){
var inst_42601 = (state_42605[(2)]);
var state_42605__$1 = state_42605;
var statearr_42612_44095 = state_42605__$1;
(statearr_42612_44095[(2)] = inst_42601);

(statearr_42612_44095[(1)] = (3));


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
});})(__44070,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
;
return ((function (__44070,switch__42366__auto__,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_42613 = [null,null,null,null,null,null,null];
(statearr_42613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__);

(statearr_42613[(1)] = (1));

return statearr_42613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1 = (function (state_42605){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42605);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42614){var ex__42370__auto__ = e42614;
var statearr_42615_44096 = state_42605;
(statearr_42615_44096[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42605[(4)]))){
var statearr_42616_44097 = state_42605;
(statearr_42616_44097[(1)] = cljs.core.first((state_42605[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44098 = state_42605;
state_42605 = G__44098;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = function(state_42605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1.call(this,state_42605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__;
})()
;})(__44070,switch__42366__auto__,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
})();
var state__42441__auto__ = (function (){var statearr_42617 = f__42440__auto__();
(statearr_42617[(6)] = c__42439__auto___44076);

return statearr_42617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
});})(__44070,c__42439__auto___44076,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
);


break;
case "async":
var c__42439__auto___44099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44070,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = ((function (__44070,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function (state_42630){
var state_val_42631 = (state_42630[(1)]);
if((state_val_42631 === (1))){
var state_42630__$1 = state_42630;
var statearr_42632_44100 = state_42630__$1;
(statearr_42632_44100[(2)] = null);

(statearr_42632_44100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42631 === (2))){
var state_42630__$1 = state_42630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42630__$1,(4),jobs);
} else {
if((state_val_42631 === (3))){
var inst_42628 = (state_42630[(2)]);
var state_42630__$1 = state_42630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42630__$1,inst_42628);
} else {
if((state_val_42631 === (4))){
var inst_42620 = (state_42630[(2)]);
var inst_42621 = async(inst_42620);
var state_42630__$1 = state_42630;
if(cljs.core.truth_(inst_42621)){
var statearr_42633_44101 = state_42630__$1;
(statearr_42633_44101[(1)] = (5));

} else {
var statearr_42634_44102 = state_42630__$1;
(statearr_42634_44102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42631 === (5))){
var state_42630__$1 = state_42630;
var statearr_42635_44103 = state_42630__$1;
(statearr_42635_44103[(2)] = null);

(statearr_42635_44103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42631 === (6))){
var state_42630__$1 = state_42630;
var statearr_42636_44104 = state_42630__$1;
(statearr_42636_44104[(2)] = null);

(statearr_42636_44104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42631 === (7))){
var inst_42626 = (state_42630[(2)]);
var state_42630__$1 = state_42630;
var statearr_42637_44105 = state_42630__$1;
(statearr_42637_44105[(2)] = inst_42626);

(statearr_42637_44105[(1)] = (3));


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
});})(__44070,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
;
return ((function (__44070,switch__42366__auto__,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_42638 = [null,null,null,null,null,null,null];
(statearr_42638[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__);

(statearr_42638[(1)] = (1));

return statearr_42638;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1 = (function (state_42630){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42630);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42639){var ex__42370__auto__ = e42639;
var statearr_42640_44106 = state_42630;
(statearr_42640_44106[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42630[(4)]))){
var statearr_42641_44107 = state_42630;
(statearr_42641_44107[(1)] = cljs.core.first((state_42630[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44108 = state_42630;
state_42630 = G__44108;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = function(state_42630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1.call(this,state_42630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__;
})()
;})(__44070,switch__42366__auto__,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
})();
var state__42441__auto__ = (function (){var statearr_42642 = f__42440__auto__();
(statearr_42642[(6)] = c__42439__auto___44099);

return statearr_42642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
});})(__44070,c__42439__auto___44099,G__42592_44072,G__42592_44073__$1,n__4613__auto___44069,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42592_44073__$1)].join('')));

}

var G__44109 = (__44070 + (1));
__44070 = G__44109;
continue;
} else {
}
break;
}

var c__42439__auto___44110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42664){
var state_val_42665 = (state_42664[(1)]);
if((state_val_42665 === (7))){
var inst_42660 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
var statearr_42666_44111 = state_42664__$1;
(statearr_42666_44111[(2)] = inst_42660);

(statearr_42666_44111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (1))){
var state_42664__$1 = state_42664;
var statearr_42667_44112 = state_42664__$1;
(statearr_42667_44112[(2)] = null);

(statearr_42667_44112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (4))){
var inst_42645 = (state_42664[(7)]);
var inst_42645__$1 = (state_42664[(2)]);
var inst_42646 = (inst_42645__$1 == null);
var state_42664__$1 = (function (){var statearr_42668 = state_42664;
(statearr_42668[(7)] = inst_42645__$1);

return statearr_42668;
})();
if(cljs.core.truth_(inst_42646)){
var statearr_42669_44115 = state_42664__$1;
(statearr_42669_44115[(1)] = (5));

} else {
var statearr_42670_44116 = state_42664__$1;
(statearr_42670_44116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (6))){
var inst_42650 = (state_42664[(8)]);
var inst_42645 = (state_42664[(7)]);
var inst_42650__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42651 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42652 = [inst_42645,inst_42650__$1];
var inst_42653 = (new cljs.core.PersistentVector(null,2,(5),inst_42651,inst_42652,null));
var state_42664__$1 = (function (){var statearr_42671 = state_42664;
(statearr_42671[(8)] = inst_42650__$1);

return statearr_42671;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42664__$1,(8),jobs,inst_42653);
} else {
if((state_val_42665 === (3))){
var inst_42662 = (state_42664[(2)]);
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42664__$1,inst_42662);
} else {
if((state_val_42665 === (2))){
var state_42664__$1 = state_42664;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42664__$1,(4),from);
} else {
if((state_val_42665 === (9))){
var inst_42657 = (state_42664[(2)]);
var state_42664__$1 = (function (){var statearr_42672 = state_42664;
(statearr_42672[(9)] = inst_42657);

return statearr_42672;
})();
var statearr_42673_44117 = state_42664__$1;
(statearr_42673_44117[(2)] = null);

(statearr_42673_44117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (5))){
var inst_42648 = cljs.core.async.close_BANG_(jobs);
var state_42664__$1 = state_42664;
var statearr_42674_44118 = state_42664__$1;
(statearr_42674_44118[(2)] = inst_42648);

(statearr_42674_44118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42665 === (8))){
var inst_42650 = (state_42664[(8)]);
var inst_42655 = (state_42664[(2)]);
var state_42664__$1 = (function (){var statearr_42675 = state_42664;
(statearr_42675[(10)] = inst_42655);

return statearr_42675;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42664__$1,(9),results,inst_42650);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_42676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__);

(statearr_42676[(1)] = (1));

return statearr_42676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1 = (function (state_42664){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42664);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42677){var ex__42370__auto__ = e42677;
var statearr_42678_44120 = state_42664;
(statearr_42678_44120[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42664[(4)]))){
var statearr_42679_44124 = state_42664;
(statearr_42679_44124[(1)] = cljs.core.first((state_42664[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44125 = state_42664;
state_42664 = G__44125;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42680 = f__42440__auto__();
(statearr_42680[(6)] = c__42439__auto___44110);

return statearr_42680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


var c__42439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42718){
var state_val_42719 = (state_42718[(1)]);
if((state_val_42719 === (7))){
var inst_42714 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
var statearr_42720_44126 = state_42718__$1;
(statearr_42720_44126[(2)] = inst_42714);

(statearr_42720_44126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (20))){
var state_42718__$1 = state_42718;
var statearr_42721_44127 = state_42718__$1;
(statearr_42721_44127[(2)] = null);

(statearr_42721_44127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (1))){
var state_42718__$1 = state_42718;
var statearr_42722_44129 = state_42718__$1;
(statearr_42722_44129[(2)] = null);

(statearr_42722_44129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (4))){
var inst_42683 = (state_42718[(7)]);
var inst_42683__$1 = (state_42718[(2)]);
var inst_42684 = (inst_42683__$1 == null);
var state_42718__$1 = (function (){var statearr_42723 = state_42718;
(statearr_42723[(7)] = inst_42683__$1);

return statearr_42723;
})();
if(cljs.core.truth_(inst_42684)){
var statearr_42724_44130 = state_42718__$1;
(statearr_42724_44130[(1)] = (5));

} else {
var statearr_42725_44131 = state_42718__$1;
(statearr_42725_44131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (15))){
var inst_42696 = (state_42718[(8)]);
var state_42718__$1 = state_42718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42718__$1,(18),to,inst_42696);
} else {
if((state_val_42719 === (21))){
var inst_42709 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
var statearr_42726_44133 = state_42718__$1;
(statearr_42726_44133[(2)] = inst_42709);

(statearr_42726_44133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (13))){
var inst_42711 = (state_42718[(2)]);
var state_42718__$1 = (function (){var statearr_42727 = state_42718;
(statearr_42727[(9)] = inst_42711);

return statearr_42727;
})();
var statearr_42728_44134 = state_42718__$1;
(statearr_42728_44134[(2)] = null);

(statearr_42728_44134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (6))){
var inst_42683 = (state_42718[(7)]);
var state_42718__$1 = state_42718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42718__$1,(11),inst_42683);
} else {
if((state_val_42719 === (17))){
var inst_42704 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
if(cljs.core.truth_(inst_42704)){
var statearr_42729_44136 = state_42718__$1;
(statearr_42729_44136[(1)] = (19));

} else {
var statearr_42730_44137 = state_42718__$1;
(statearr_42730_44137[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (3))){
var inst_42716 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42718__$1,inst_42716);
} else {
if((state_val_42719 === (12))){
var inst_42693 = (state_42718[(10)]);
var state_42718__$1 = state_42718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42718__$1,(14),inst_42693);
} else {
if((state_val_42719 === (2))){
var state_42718__$1 = state_42718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42718__$1,(4),results);
} else {
if((state_val_42719 === (19))){
var state_42718__$1 = state_42718;
var statearr_42731_44139 = state_42718__$1;
(statearr_42731_44139[(2)] = null);

(statearr_42731_44139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (11))){
var inst_42693 = (state_42718[(2)]);
var state_42718__$1 = (function (){var statearr_42732 = state_42718;
(statearr_42732[(10)] = inst_42693);

return statearr_42732;
})();
var statearr_42733_44140 = state_42718__$1;
(statearr_42733_44140[(2)] = null);

(statearr_42733_44140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (9))){
var state_42718__$1 = state_42718;
var statearr_42734_44141 = state_42718__$1;
(statearr_42734_44141[(2)] = null);

(statearr_42734_44141[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (5))){
var state_42718__$1 = state_42718;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42735_44143 = state_42718__$1;
(statearr_42735_44143[(1)] = (8));

} else {
var statearr_42736_44147 = state_42718__$1;
(statearr_42736_44147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (14))){
var inst_42696 = (state_42718[(8)]);
var inst_42696__$1 = (state_42718[(2)]);
var inst_42697 = (inst_42696__$1 == null);
var inst_42698 = cljs.core.not(inst_42697);
var state_42718__$1 = (function (){var statearr_42737 = state_42718;
(statearr_42737[(8)] = inst_42696__$1);

return statearr_42737;
})();
if(inst_42698){
var statearr_42738_44149 = state_42718__$1;
(statearr_42738_44149[(1)] = (15));

} else {
var statearr_42739_44151 = state_42718__$1;
(statearr_42739_44151[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (16))){
var state_42718__$1 = state_42718;
var statearr_42740_44152 = state_42718__$1;
(statearr_42740_44152[(2)] = false);

(statearr_42740_44152[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (10))){
var inst_42690 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
var statearr_42741_44153 = state_42718__$1;
(statearr_42741_44153[(2)] = inst_42690);

(statearr_42741_44153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (18))){
var inst_42701 = (state_42718[(2)]);
var state_42718__$1 = state_42718;
var statearr_42742_44158 = state_42718__$1;
(statearr_42742_44158[(2)] = inst_42701);

(statearr_42742_44158[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42719 === (8))){
var inst_42687 = cljs.core.async.close_BANG_(to);
var state_42718__$1 = state_42718;
var statearr_42743_44160 = state_42718__$1;
(statearr_42743_44160[(2)] = inst_42687);

(statearr_42743_44160[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_42744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__);

(statearr_42744[(1)] = (1));

return statearr_42744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1 = (function (state_42718){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42718);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42745){var ex__42370__auto__ = e42745;
var statearr_42746_44161 = state_42718;
(statearr_42746_44161[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42718[(4)]))){
var statearr_42747_44163 = state_42718;
(statearr_42747_44163[(1)] = cljs.core.first((state_42718[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44165 = state_42718;
state_42718 = G__44165;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__ = function(state_42718){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1.call(this,state_42718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42748 = f__42440__auto__();
(statearr_42748[(6)] = c__42439__auto__);

return statearr_42748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

return c__42439__auto__;
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
var G__42750 = arguments.length;
switch (G__42750) {
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
var G__42752 = arguments.length;
switch (G__42752) {
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
var G__42754 = arguments.length;
switch (G__42754) {
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
var c__42439__auto___44171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42780){
var state_val_42781 = (state_42780[(1)]);
if((state_val_42781 === (7))){
var inst_42776 = (state_42780[(2)]);
var state_42780__$1 = state_42780;
var statearr_42782_44172 = state_42780__$1;
(statearr_42782_44172[(2)] = inst_42776);

(statearr_42782_44172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (1))){
var state_42780__$1 = state_42780;
var statearr_42783_44173 = state_42780__$1;
(statearr_42783_44173[(2)] = null);

(statearr_42783_44173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (4))){
var inst_42757 = (state_42780[(7)]);
var inst_42757__$1 = (state_42780[(2)]);
var inst_42758 = (inst_42757__$1 == null);
var state_42780__$1 = (function (){var statearr_42784 = state_42780;
(statearr_42784[(7)] = inst_42757__$1);

return statearr_42784;
})();
if(cljs.core.truth_(inst_42758)){
var statearr_42785_44174 = state_42780__$1;
(statearr_42785_44174[(1)] = (5));

} else {
var statearr_42786_44175 = state_42780__$1;
(statearr_42786_44175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (13))){
var state_42780__$1 = state_42780;
var statearr_42787_44176 = state_42780__$1;
(statearr_42787_44176[(2)] = null);

(statearr_42787_44176[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (6))){
var inst_42757 = (state_42780[(7)]);
var inst_42763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42757) : p.call(null,inst_42757));
var state_42780__$1 = state_42780;
if(cljs.core.truth_(inst_42763)){
var statearr_42788_44177 = state_42780__$1;
(statearr_42788_44177[(1)] = (9));

} else {
var statearr_42789_44178 = state_42780__$1;
(statearr_42789_44178[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (3))){
var inst_42778 = (state_42780[(2)]);
var state_42780__$1 = state_42780;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42780__$1,inst_42778);
} else {
if((state_val_42781 === (12))){
var state_42780__$1 = state_42780;
var statearr_42790_44179 = state_42780__$1;
(statearr_42790_44179[(2)] = null);

(statearr_42790_44179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (2))){
var state_42780__$1 = state_42780;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42780__$1,(4),ch);
} else {
if((state_val_42781 === (11))){
var inst_42757 = (state_42780[(7)]);
var inst_42767 = (state_42780[(2)]);
var state_42780__$1 = state_42780;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42780__$1,(8),inst_42767,inst_42757);
} else {
if((state_val_42781 === (9))){
var state_42780__$1 = state_42780;
var statearr_42791_44180 = state_42780__$1;
(statearr_42791_44180[(2)] = tc);

(statearr_42791_44180[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (5))){
var inst_42760 = cljs.core.async.close_BANG_(tc);
var inst_42761 = cljs.core.async.close_BANG_(fc);
var state_42780__$1 = (function (){var statearr_42792 = state_42780;
(statearr_42792[(8)] = inst_42760);

return statearr_42792;
})();
var statearr_42793_44182 = state_42780__$1;
(statearr_42793_44182[(2)] = inst_42761);

(statearr_42793_44182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (14))){
var inst_42774 = (state_42780[(2)]);
var state_42780__$1 = state_42780;
var statearr_42794_44183 = state_42780__$1;
(statearr_42794_44183[(2)] = inst_42774);

(statearr_42794_44183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (10))){
var state_42780__$1 = state_42780;
var statearr_42795_44185 = state_42780__$1;
(statearr_42795_44185[(2)] = fc);

(statearr_42795_44185[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42781 === (8))){
var inst_42769 = (state_42780[(2)]);
var state_42780__$1 = state_42780;
if(cljs.core.truth_(inst_42769)){
var statearr_42796_44186 = state_42780__$1;
(statearr_42796_44186[(1)] = (12));

} else {
var statearr_42797_44187 = state_42780__$1;
(statearr_42797_44187[(1)] = (13));

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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_42798 = [null,null,null,null,null,null,null,null,null];
(statearr_42798[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_42798[(1)] = (1));

return statearr_42798;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_42780){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42780);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42799){var ex__42370__auto__ = e42799;
var statearr_42800_44188 = state_42780;
(statearr_42800_44188[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42780[(4)]))){
var statearr_42801_44189 = state_42780;
(statearr_42801_44189[(1)] = cljs.core.first((state_42780[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44190 = state_42780;
state_42780 = G__44190;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_42780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_42780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42802 = f__42440__auto__();
(statearr_42802[(6)] = c__42439__auto___44171);

return statearr_42802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var c__42439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42824){
var state_val_42825 = (state_42824[(1)]);
if((state_val_42825 === (7))){
var inst_42820 = (state_42824[(2)]);
var state_42824__$1 = state_42824;
var statearr_42826_44191 = state_42824__$1;
(statearr_42826_44191[(2)] = inst_42820);

(statearr_42826_44191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (1))){
var inst_42803 = init;
var inst_42804 = inst_42803;
var state_42824__$1 = (function (){var statearr_42827 = state_42824;
(statearr_42827[(7)] = inst_42804);

return statearr_42827;
})();
var statearr_42828_44192 = state_42824__$1;
(statearr_42828_44192[(2)] = null);

(statearr_42828_44192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (4))){
var inst_42807 = (state_42824[(8)]);
var inst_42807__$1 = (state_42824[(2)]);
var inst_42808 = (inst_42807__$1 == null);
var state_42824__$1 = (function (){var statearr_42829 = state_42824;
(statearr_42829[(8)] = inst_42807__$1);

return statearr_42829;
})();
if(cljs.core.truth_(inst_42808)){
var statearr_42830_44193 = state_42824__$1;
(statearr_42830_44193[(1)] = (5));

} else {
var statearr_42831_44194 = state_42824__$1;
(statearr_42831_44194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (6))){
var inst_42807 = (state_42824[(8)]);
var inst_42811 = (state_42824[(9)]);
var inst_42804 = (state_42824[(7)]);
var inst_42811__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42804,inst_42807) : f.call(null,inst_42804,inst_42807));
var inst_42812 = cljs.core.reduced_QMARK_(inst_42811__$1);
var state_42824__$1 = (function (){var statearr_42832 = state_42824;
(statearr_42832[(9)] = inst_42811__$1);

return statearr_42832;
})();
if(inst_42812){
var statearr_42833_44197 = state_42824__$1;
(statearr_42833_44197[(1)] = (8));

} else {
var statearr_42834_44198 = state_42824__$1;
(statearr_42834_44198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (3))){
var inst_42822 = (state_42824[(2)]);
var state_42824__$1 = state_42824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42824__$1,inst_42822);
} else {
if((state_val_42825 === (2))){
var state_42824__$1 = state_42824;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42824__$1,(4),ch);
} else {
if((state_val_42825 === (9))){
var inst_42811 = (state_42824[(9)]);
var inst_42804 = inst_42811;
var state_42824__$1 = (function (){var statearr_42835 = state_42824;
(statearr_42835[(7)] = inst_42804);

return statearr_42835;
})();
var statearr_42836_44199 = state_42824__$1;
(statearr_42836_44199[(2)] = null);

(statearr_42836_44199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (5))){
var inst_42804 = (state_42824[(7)]);
var state_42824__$1 = state_42824;
var statearr_42837_44200 = state_42824__$1;
(statearr_42837_44200[(2)] = inst_42804);

(statearr_42837_44200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (10))){
var inst_42818 = (state_42824[(2)]);
var state_42824__$1 = state_42824;
var statearr_42838_44201 = state_42824__$1;
(statearr_42838_44201[(2)] = inst_42818);

(statearr_42838_44201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42825 === (8))){
var inst_42811 = (state_42824[(9)]);
var inst_42814 = cljs.core.deref(inst_42811);
var state_42824__$1 = state_42824;
var statearr_42839_44202 = state_42824__$1;
(statearr_42839_44202[(2)] = inst_42814);

(statearr_42839_44202[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42367__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42367__auto____0 = (function (){
var statearr_42840 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42840[(0)] = cljs$core$async$reduce_$_state_machine__42367__auto__);

(statearr_42840[(1)] = (1));

return statearr_42840;
});
var cljs$core$async$reduce_$_state_machine__42367__auto____1 = (function (state_42824){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42824);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42841){var ex__42370__auto__ = e42841;
var statearr_42842_44204 = state_42824;
(statearr_42842_44204[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42824[(4)]))){
var statearr_42843_44205 = state_42824;
(statearr_42843_44205[(1)] = cljs.core.first((state_42824[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44206 = state_42824;
state_42824 = G__44206;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42367__auto__ = function(state_42824){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42367__auto____1.call(this,state_42824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42367__auto____0;
cljs$core$async$reduce_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42367__auto____1;
return cljs$core$async$reduce_$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42844 = f__42440__auto__();
(statearr_42844[(6)] = c__42439__auto__);

return statearr_42844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

return c__42439__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42850){
var state_val_42851 = (state_42850[(1)]);
if((state_val_42851 === (1))){
var inst_42845 = cljs.core.async.reduce(f__$1,init,ch);
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42850__$1,(2),inst_42845);
} else {
if((state_val_42851 === (2))){
var inst_42847 = (state_42850[(2)]);
var inst_42848 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42847) : f__$1.call(null,inst_42847));
var state_42850__$1 = state_42850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42850__$1,inst_42848);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42367__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42367__auto____0 = (function (){
var statearr_42852 = [null,null,null,null,null,null,null];
(statearr_42852[(0)] = cljs$core$async$transduce_$_state_machine__42367__auto__);

(statearr_42852[(1)] = (1));

return statearr_42852;
});
var cljs$core$async$transduce_$_state_machine__42367__auto____1 = (function (state_42850){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42850);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42853){var ex__42370__auto__ = e42853;
var statearr_42854_44211 = state_42850;
(statearr_42854_44211[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42850[(4)]))){
var statearr_42855_44212 = state_42850;
(statearr_42855_44212[(1)] = cljs.core.first((state_42850[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44213 = state_42850;
state_42850 = G__44213;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42367__auto__ = function(state_42850){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42367__auto____1.call(this,state_42850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42367__auto____0;
cljs$core$async$transduce_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42367__auto____1;
return cljs$core$async$transduce_$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42856 = f__42440__auto__();
(statearr_42856[(6)] = c__42439__auto__);

return statearr_42856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

return c__42439__auto__;
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
var G__42858 = arguments.length;
switch (G__42858) {
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
var c__42439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_42883){
var state_val_42884 = (state_42883[(1)]);
if((state_val_42884 === (7))){
var inst_42865 = (state_42883[(2)]);
var state_42883__$1 = state_42883;
var statearr_42885_44215 = state_42883__$1;
(statearr_42885_44215[(2)] = inst_42865);

(statearr_42885_44215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (1))){
var inst_42859 = cljs.core.seq(coll);
var inst_42860 = inst_42859;
var state_42883__$1 = (function (){var statearr_42886 = state_42883;
(statearr_42886[(7)] = inst_42860);

return statearr_42886;
})();
var statearr_42887_44217 = state_42883__$1;
(statearr_42887_44217[(2)] = null);

(statearr_42887_44217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (4))){
var inst_42860 = (state_42883[(7)]);
var inst_42863 = cljs.core.first(inst_42860);
var state_42883__$1 = state_42883;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42883__$1,(7),ch,inst_42863);
} else {
if((state_val_42884 === (13))){
var inst_42877 = (state_42883[(2)]);
var state_42883__$1 = state_42883;
var statearr_42888_44219 = state_42883__$1;
(statearr_42888_44219[(2)] = inst_42877);

(statearr_42888_44219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (6))){
var inst_42868 = (state_42883[(2)]);
var state_42883__$1 = state_42883;
if(cljs.core.truth_(inst_42868)){
var statearr_42889_44220 = state_42883__$1;
(statearr_42889_44220[(1)] = (8));

} else {
var statearr_42890_44221 = state_42883__$1;
(statearr_42890_44221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (3))){
var inst_42881 = (state_42883[(2)]);
var state_42883__$1 = state_42883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42883__$1,inst_42881);
} else {
if((state_val_42884 === (12))){
var state_42883__$1 = state_42883;
var statearr_42891_44224 = state_42883__$1;
(statearr_42891_44224[(2)] = null);

(statearr_42891_44224[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (2))){
var inst_42860 = (state_42883[(7)]);
var state_42883__$1 = state_42883;
if(cljs.core.truth_(inst_42860)){
var statearr_42892_44227 = state_42883__$1;
(statearr_42892_44227[(1)] = (4));

} else {
var statearr_42893_44228 = state_42883__$1;
(statearr_42893_44228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (11))){
var inst_42874 = cljs.core.async.close_BANG_(ch);
var state_42883__$1 = state_42883;
var statearr_42894_44229 = state_42883__$1;
(statearr_42894_44229[(2)] = inst_42874);

(statearr_42894_44229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (9))){
var state_42883__$1 = state_42883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42895_44234 = state_42883__$1;
(statearr_42895_44234[(1)] = (11));

} else {
var statearr_42896_44238 = state_42883__$1;
(statearr_42896_44238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (5))){
var inst_42860 = (state_42883[(7)]);
var state_42883__$1 = state_42883;
var statearr_42897_44239 = state_42883__$1;
(statearr_42897_44239[(2)] = inst_42860);

(statearr_42897_44239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (10))){
var inst_42879 = (state_42883[(2)]);
var state_42883__$1 = state_42883;
var statearr_42898_44242 = state_42883__$1;
(statearr_42898_44242[(2)] = inst_42879);

(statearr_42898_44242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42884 === (8))){
var inst_42860 = (state_42883[(7)]);
var inst_42870 = cljs.core.next(inst_42860);
var inst_42860__$1 = inst_42870;
var state_42883__$1 = (function (){var statearr_42899 = state_42883;
(statearr_42899[(7)] = inst_42860__$1);

return statearr_42899;
})();
var statearr_42900_44246 = state_42883__$1;
(statearr_42900_44246[(2)] = null);

(statearr_42900_44246[(1)] = (2));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_42901 = [null,null,null,null,null,null,null,null];
(statearr_42901[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_42901[(1)] = (1));

return statearr_42901;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_42883){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_42883);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e42902){var ex__42370__auto__ = e42902;
var statearr_42903_44256 = state_42883;
(statearr_42903_44256[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_42883[(4)]))){
var statearr_42904_44257 = state_42883;
(statearr_42904_44257[(1)] = cljs.core.first((state_42883[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44258 = state_42883;
state_42883 = G__44258;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_42883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_42883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_42905 = f__42440__auto__();
(statearr_42905[(6)] = c__42439__auto__);

return statearr_42905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

return c__42439__auto__;
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
var G__42907 = arguments.length;
switch (G__42907) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44280 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_44280(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44290 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_44290(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44294 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_44294(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44296 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_44296(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42908 = (function (ch,cs,meta42909){
this.ch = ch;
this.cs = cs;
this.meta42909 = meta42909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42910,meta42909__$1){
var self__ = this;
var _42910__$1 = this;
return (new cljs.core.async.t_cljs$core$async42908(self__.ch,self__.cs,meta42909__$1));
}));

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42910){
var self__ = this;
var _42910__$1 = this;
return self__.meta42909;
}));

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42908.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42909","meta42909",-1312052892,null)], null);
}));

(cljs.core.async.t_cljs$core$async42908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42908");

(cljs.core.async.t_cljs$core$async42908.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42908.
 */
cljs.core.async.__GT_t_cljs$core$async42908 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42908(ch__$1,cs__$1,meta42909){
return (new cljs.core.async.t_cljs$core$async42908(ch__$1,cs__$1,meta42909));
});

}

return (new cljs.core.async.t_cljs$core$async42908(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42439__auto___44323 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43043){
var state_val_43044 = (state_43043[(1)]);
if((state_val_43044 === (7))){
var inst_43039 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43045_44324 = state_43043__$1;
(statearr_43045_44324[(2)] = inst_43039);

(statearr_43045_44324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (20))){
var inst_42944 = (state_43043[(7)]);
var inst_42956 = cljs.core.first(inst_42944);
var inst_42957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42956,(0),null);
var inst_42958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42956,(1),null);
var state_43043__$1 = (function (){var statearr_43046 = state_43043;
(statearr_43046[(8)] = inst_42957);

return statearr_43046;
})();
if(cljs.core.truth_(inst_42958)){
var statearr_43047_44325 = state_43043__$1;
(statearr_43047_44325[(1)] = (22));

} else {
var statearr_43048_44326 = state_43043__$1;
(statearr_43048_44326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (27))){
var inst_42993 = (state_43043[(9)]);
var inst_42986 = (state_43043[(10)]);
var inst_42988 = (state_43043[(11)]);
var inst_42913 = (state_43043[(12)]);
var inst_42993__$1 = cljs.core._nth(inst_42986,inst_42988);
var inst_42994 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42993__$1,inst_42913,done);
var state_43043__$1 = (function (){var statearr_43049 = state_43043;
(statearr_43049[(9)] = inst_42993__$1);

return statearr_43049;
})();
if(cljs.core.truth_(inst_42994)){
var statearr_43050_44327 = state_43043__$1;
(statearr_43050_44327[(1)] = (30));

} else {
var statearr_43051_44328 = state_43043__$1;
(statearr_43051_44328[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (1))){
var state_43043__$1 = state_43043;
var statearr_43052_44329 = state_43043__$1;
(statearr_43052_44329[(2)] = null);

(statearr_43052_44329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (24))){
var inst_42944 = (state_43043[(7)]);
var inst_42963 = (state_43043[(2)]);
var inst_42964 = cljs.core.next(inst_42944);
var inst_42922 = inst_42964;
var inst_42923 = null;
var inst_42924 = (0);
var inst_42925 = (0);
var state_43043__$1 = (function (){var statearr_43053 = state_43043;
(statearr_43053[(13)] = inst_42922);

(statearr_43053[(14)] = inst_42963);

(statearr_43053[(15)] = inst_42925);

(statearr_43053[(16)] = inst_42923);

(statearr_43053[(17)] = inst_42924);

return statearr_43053;
})();
var statearr_43054_44331 = state_43043__$1;
(statearr_43054_44331[(2)] = null);

(statearr_43054_44331[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (39))){
var state_43043__$1 = state_43043;
var statearr_43058_44334 = state_43043__$1;
(statearr_43058_44334[(2)] = null);

(statearr_43058_44334[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (4))){
var inst_42913 = (state_43043[(12)]);
var inst_42913__$1 = (state_43043[(2)]);
var inst_42914 = (inst_42913__$1 == null);
var state_43043__$1 = (function (){var statearr_43059 = state_43043;
(statearr_43059[(12)] = inst_42913__$1);

return statearr_43059;
})();
if(cljs.core.truth_(inst_42914)){
var statearr_43060_44335 = state_43043__$1;
(statearr_43060_44335[(1)] = (5));

} else {
var statearr_43061_44336 = state_43043__$1;
(statearr_43061_44336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (15))){
var inst_42922 = (state_43043[(13)]);
var inst_42925 = (state_43043[(15)]);
var inst_42923 = (state_43043[(16)]);
var inst_42924 = (state_43043[(17)]);
var inst_42940 = (state_43043[(2)]);
var inst_42941 = (inst_42925 + (1));
var tmp43055 = inst_42922;
var tmp43056 = inst_42923;
var tmp43057 = inst_42924;
var inst_42922__$1 = tmp43055;
var inst_42923__$1 = tmp43056;
var inst_42924__$1 = tmp43057;
var inst_42925__$1 = inst_42941;
var state_43043__$1 = (function (){var statearr_43062 = state_43043;
(statearr_43062[(13)] = inst_42922__$1);

(statearr_43062[(18)] = inst_42940);

(statearr_43062[(15)] = inst_42925__$1);

(statearr_43062[(16)] = inst_42923__$1);

(statearr_43062[(17)] = inst_42924__$1);

return statearr_43062;
})();
var statearr_43063_44340 = state_43043__$1;
(statearr_43063_44340[(2)] = null);

(statearr_43063_44340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (21))){
var inst_42967 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43067_44342 = state_43043__$1;
(statearr_43067_44342[(2)] = inst_42967);

(statearr_43067_44342[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (31))){
var inst_42993 = (state_43043[(9)]);
var inst_42997 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42993);
var state_43043__$1 = state_43043;
var statearr_43068_44343 = state_43043__$1;
(statearr_43068_44343[(2)] = inst_42997);

(statearr_43068_44343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (32))){
var inst_42985 = (state_43043[(19)]);
var inst_42987 = (state_43043[(20)]);
var inst_42986 = (state_43043[(10)]);
var inst_42988 = (state_43043[(11)]);
var inst_42999 = (state_43043[(2)]);
var inst_43000 = (inst_42988 + (1));
var tmp43064 = inst_42985;
var tmp43065 = inst_42987;
var tmp43066 = inst_42986;
var inst_42985__$1 = tmp43064;
var inst_42986__$1 = tmp43066;
var inst_42987__$1 = tmp43065;
var inst_42988__$1 = inst_43000;
var state_43043__$1 = (function (){var statearr_43069 = state_43043;
(statearr_43069[(21)] = inst_42999);

(statearr_43069[(19)] = inst_42985__$1);

(statearr_43069[(20)] = inst_42987__$1);

(statearr_43069[(10)] = inst_42986__$1);

(statearr_43069[(11)] = inst_42988__$1);

return statearr_43069;
})();
var statearr_43070_44344 = state_43043__$1;
(statearr_43070_44344[(2)] = null);

(statearr_43070_44344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (40))){
var inst_43012 = (state_43043[(22)]);
var inst_43016 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43012);
var state_43043__$1 = state_43043;
var statearr_43071_44346 = state_43043__$1;
(statearr_43071_44346[(2)] = inst_43016);

(statearr_43071_44346[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (33))){
var inst_43003 = (state_43043[(23)]);
var inst_43005 = cljs.core.chunked_seq_QMARK_(inst_43003);
var state_43043__$1 = state_43043;
if(inst_43005){
var statearr_43072_44348 = state_43043__$1;
(statearr_43072_44348[(1)] = (36));

} else {
var statearr_43073_44349 = state_43043__$1;
(statearr_43073_44349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (13))){
var inst_42934 = (state_43043[(24)]);
var inst_42937 = cljs.core.async.close_BANG_(inst_42934);
var state_43043__$1 = state_43043;
var statearr_43074_44350 = state_43043__$1;
(statearr_43074_44350[(2)] = inst_42937);

(statearr_43074_44350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (22))){
var inst_42957 = (state_43043[(8)]);
var inst_42960 = cljs.core.async.close_BANG_(inst_42957);
var state_43043__$1 = state_43043;
var statearr_43075_44351 = state_43043__$1;
(statearr_43075_44351[(2)] = inst_42960);

(statearr_43075_44351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (36))){
var inst_43003 = (state_43043[(23)]);
var inst_43007 = cljs.core.chunk_first(inst_43003);
var inst_43008 = cljs.core.chunk_rest(inst_43003);
var inst_43009 = cljs.core.count(inst_43007);
var inst_42985 = inst_43008;
var inst_42986 = inst_43007;
var inst_42987 = inst_43009;
var inst_42988 = (0);
var state_43043__$1 = (function (){var statearr_43076 = state_43043;
(statearr_43076[(19)] = inst_42985);

(statearr_43076[(20)] = inst_42987);

(statearr_43076[(10)] = inst_42986);

(statearr_43076[(11)] = inst_42988);

return statearr_43076;
})();
var statearr_43077_44352 = state_43043__$1;
(statearr_43077_44352[(2)] = null);

(statearr_43077_44352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (41))){
var inst_43003 = (state_43043[(23)]);
var inst_43018 = (state_43043[(2)]);
var inst_43019 = cljs.core.next(inst_43003);
var inst_42985 = inst_43019;
var inst_42986 = null;
var inst_42987 = (0);
var inst_42988 = (0);
var state_43043__$1 = (function (){var statearr_43078 = state_43043;
(statearr_43078[(19)] = inst_42985);

(statearr_43078[(25)] = inst_43018);

(statearr_43078[(20)] = inst_42987);

(statearr_43078[(10)] = inst_42986);

(statearr_43078[(11)] = inst_42988);

return statearr_43078;
})();
var statearr_43079_44353 = state_43043__$1;
(statearr_43079_44353[(2)] = null);

(statearr_43079_44353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (43))){
var state_43043__$1 = state_43043;
var statearr_43080_44354 = state_43043__$1;
(statearr_43080_44354[(2)] = null);

(statearr_43080_44354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (29))){
var inst_43027 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43081_44356 = state_43043__$1;
(statearr_43081_44356[(2)] = inst_43027);

(statearr_43081_44356[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (44))){
var inst_43036 = (state_43043[(2)]);
var state_43043__$1 = (function (){var statearr_43082 = state_43043;
(statearr_43082[(26)] = inst_43036);

return statearr_43082;
})();
var statearr_43083_44360 = state_43043__$1;
(statearr_43083_44360[(2)] = null);

(statearr_43083_44360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (6))){
var inst_42977 = (state_43043[(27)]);
var inst_42976 = cljs.core.deref(cs);
var inst_42977__$1 = cljs.core.keys(inst_42976);
var inst_42978 = cljs.core.count(inst_42977__$1);
var inst_42979 = cljs.core.reset_BANG_(dctr,inst_42978);
var inst_42984 = cljs.core.seq(inst_42977__$1);
var inst_42985 = inst_42984;
var inst_42986 = null;
var inst_42987 = (0);
var inst_42988 = (0);
var state_43043__$1 = (function (){var statearr_43084 = state_43043;
(statearr_43084[(19)] = inst_42985);

(statearr_43084[(27)] = inst_42977__$1);

(statearr_43084[(20)] = inst_42987);

(statearr_43084[(10)] = inst_42986);

(statearr_43084[(11)] = inst_42988);

(statearr_43084[(28)] = inst_42979);

return statearr_43084;
})();
var statearr_43085_44365 = state_43043__$1;
(statearr_43085_44365[(2)] = null);

(statearr_43085_44365[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (28))){
var inst_42985 = (state_43043[(19)]);
var inst_43003 = (state_43043[(23)]);
var inst_43003__$1 = cljs.core.seq(inst_42985);
var state_43043__$1 = (function (){var statearr_43086 = state_43043;
(statearr_43086[(23)] = inst_43003__$1);

return statearr_43086;
})();
if(inst_43003__$1){
var statearr_43087_44366 = state_43043__$1;
(statearr_43087_44366[(1)] = (33));

} else {
var statearr_43088_44367 = state_43043__$1;
(statearr_43088_44367[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (25))){
var inst_42987 = (state_43043[(20)]);
var inst_42988 = (state_43043[(11)]);
var inst_42990 = (inst_42988 < inst_42987);
var inst_42991 = inst_42990;
var state_43043__$1 = state_43043;
if(cljs.core.truth_(inst_42991)){
var statearr_43089_44371 = state_43043__$1;
(statearr_43089_44371[(1)] = (27));

} else {
var statearr_43090_44372 = state_43043__$1;
(statearr_43090_44372[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (34))){
var state_43043__$1 = state_43043;
var statearr_43091_44377 = state_43043__$1;
(statearr_43091_44377[(2)] = null);

(statearr_43091_44377[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (17))){
var state_43043__$1 = state_43043;
var statearr_43092_44378 = state_43043__$1;
(statearr_43092_44378[(2)] = null);

(statearr_43092_44378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (3))){
var inst_43041 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43043__$1,inst_43041);
} else {
if((state_val_43044 === (12))){
var inst_42972 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43093_44385 = state_43043__$1;
(statearr_43093_44385[(2)] = inst_42972);

(statearr_43093_44385[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (2))){
var state_43043__$1 = state_43043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43043__$1,(4),ch);
} else {
if((state_val_43044 === (23))){
var state_43043__$1 = state_43043;
var statearr_43094_44386 = state_43043__$1;
(statearr_43094_44386[(2)] = null);

(statearr_43094_44386[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (35))){
var inst_43025 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43095_44387 = state_43043__$1;
(statearr_43095_44387[(2)] = inst_43025);

(statearr_43095_44387[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (19))){
var inst_42944 = (state_43043[(7)]);
var inst_42948 = cljs.core.chunk_first(inst_42944);
var inst_42949 = cljs.core.chunk_rest(inst_42944);
var inst_42950 = cljs.core.count(inst_42948);
var inst_42922 = inst_42949;
var inst_42923 = inst_42948;
var inst_42924 = inst_42950;
var inst_42925 = (0);
var state_43043__$1 = (function (){var statearr_43096 = state_43043;
(statearr_43096[(13)] = inst_42922);

(statearr_43096[(15)] = inst_42925);

(statearr_43096[(16)] = inst_42923);

(statearr_43096[(17)] = inst_42924);

return statearr_43096;
})();
var statearr_43097_44388 = state_43043__$1;
(statearr_43097_44388[(2)] = null);

(statearr_43097_44388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (11))){
var inst_42922 = (state_43043[(13)]);
var inst_42944 = (state_43043[(7)]);
var inst_42944__$1 = cljs.core.seq(inst_42922);
var state_43043__$1 = (function (){var statearr_43098 = state_43043;
(statearr_43098[(7)] = inst_42944__$1);

return statearr_43098;
})();
if(inst_42944__$1){
var statearr_43099_44389 = state_43043__$1;
(statearr_43099_44389[(1)] = (16));

} else {
var statearr_43100_44390 = state_43043__$1;
(statearr_43100_44390[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (9))){
var inst_42974 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43101_44391 = state_43043__$1;
(statearr_43101_44391[(2)] = inst_42974);

(statearr_43101_44391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (5))){
var inst_42920 = cljs.core.deref(cs);
var inst_42921 = cljs.core.seq(inst_42920);
var inst_42922 = inst_42921;
var inst_42923 = null;
var inst_42924 = (0);
var inst_42925 = (0);
var state_43043__$1 = (function (){var statearr_43102 = state_43043;
(statearr_43102[(13)] = inst_42922);

(statearr_43102[(15)] = inst_42925);

(statearr_43102[(16)] = inst_42923);

(statearr_43102[(17)] = inst_42924);

return statearr_43102;
})();
var statearr_43103_44392 = state_43043__$1;
(statearr_43103_44392[(2)] = null);

(statearr_43103_44392[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (14))){
var state_43043__$1 = state_43043;
var statearr_43104_44399 = state_43043__$1;
(statearr_43104_44399[(2)] = null);

(statearr_43104_44399[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (45))){
var inst_43033 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43105_44400 = state_43043__$1;
(statearr_43105_44400[(2)] = inst_43033);

(statearr_43105_44400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (26))){
var inst_42977 = (state_43043[(27)]);
var inst_43029 = (state_43043[(2)]);
var inst_43030 = cljs.core.seq(inst_42977);
var state_43043__$1 = (function (){var statearr_43106 = state_43043;
(statearr_43106[(29)] = inst_43029);

return statearr_43106;
})();
if(inst_43030){
var statearr_43107_44401 = state_43043__$1;
(statearr_43107_44401[(1)] = (42));

} else {
var statearr_43108_44402 = state_43043__$1;
(statearr_43108_44402[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (16))){
var inst_42944 = (state_43043[(7)]);
var inst_42946 = cljs.core.chunked_seq_QMARK_(inst_42944);
var state_43043__$1 = state_43043;
if(inst_42946){
var statearr_43109_44403 = state_43043__$1;
(statearr_43109_44403[(1)] = (19));

} else {
var statearr_43110_44404 = state_43043__$1;
(statearr_43110_44404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (38))){
var inst_43022 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43111_44405 = state_43043__$1;
(statearr_43111_44405[(2)] = inst_43022);

(statearr_43111_44405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (30))){
var state_43043__$1 = state_43043;
var statearr_43112_44406 = state_43043__$1;
(statearr_43112_44406[(2)] = null);

(statearr_43112_44406[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (10))){
var inst_42925 = (state_43043[(15)]);
var inst_42923 = (state_43043[(16)]);
var inst_42933 = cljs.core._nth(inst_42923,inst_42925);
var inst_42934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42933,(0),null);
var inst_42935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42933,(1),null);
var state_43043__$1 = (function (){var statearr_43113 = state_43043;
(statearr_43113[(24)] = inst_42934);

return statearr_43113;
})();
if(cljs.core.truth_(inst_42935)){
var statearr_43114_44407 = state_43043__$1;
(statearr_43114_44407[(1)] = (13));

} else {
var statearr_43115_44408 = state_43043__$1;
(statearr_43115_44408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (18))){
var inst_42970 = (state_43043[(2)]);
var state_43043__$1 = state_43043;
var statearr_43116_44409 = state_43043__$1;
(statearr_43116_44409[(2)] = inst_42970);

(statearr_43116_44409[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (42))){
var state_43043__$1 = state_43043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43043__$1,(45),dchan);
} else {
if((state_val_43044 === (37))){
var inst_43012 = (state_43043[(22)]);
var inst_42913 = (state_43043[(12)]);
var inst_43003 = (state_43043[(23)]);
var inst_43012__$1 = cljs.core.first(inst_43003);
var inst_43013 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43012__$1,inst_42913,done);
var state_43043__$1 = (function (){var statearr_43117 = state_43043;
(statearr_43117[(22)] = inst_43012__$1);

return statearr_43117;
})();
if(cljs.core.truth_(inst_43013)){
var statearr_43118_44417 = state_43043__$1;
(statearr_43118_44417[(1)] = (39));

} else {
var statearr_43119_44420 = state_43043__$1;
(statearr_43119_44420[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43044 === (8))){
var inst_42925 = (state_43043[(15)]);
var inst_42924 = (state_43043[(17)]);
var inst_42927 = (inst_42925 < inst_42924);
var inst_42928 = inst_42927;
var state_43043__$1 = state_43043;
if(cljs.core.truth_(inst_42928)){
var statearr_43120_44421 = state_43043__$1;
(statearr_43120_44421[(1)] = (10));

} else {
var statearr_43121_44422 = state_43043__$1;
(statearr_43121_44422[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42367__auto__ = null;
var cljs$core$async$mult_$_state_machine__42367__auto____0 = (function (){
var statearr_43122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43122[(0)] = cljs$core$async$mult_$_state_machine__42367__auto__);

(statearr_43122[(1)] = (1));

return statearr_43122;
});
var cljs$core$async$mult_$_state_machine__42367__auto____1 = (function (state_43043){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43043);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43123){var ex__42370__auto__ = e43123;
var statearr_43124_44424 = state_43043;
(statearr_43124_44424[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43043[(4)]))){
var statearr_43125_44429 = state_43043;
(statearr_43125_44429[(1)] = cljs.core.first((state_43043[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44431 = state_43043;
state_43043 = G__44431;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42367__auto__ = function(state_43043){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42367__auto____1.call(this,state_43043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42367__auto____0;
cljs$core$async$mult_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42367__auto____1;
return cljs$core$async$mult_$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43126 = f__42440__auto__();
(statearr_43126[(6)] = c__42439__auto___44323);

return statearr_43126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var G__43128 = arguments.length;
switch (G__43128) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44442 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_44442(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44445 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_44445(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44451 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44451(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44454 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_44454(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44457 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44457(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44461 = arguments.length;
var i__4737__auto___44462 = (0);
while(true){
if((i__4737__auto___44462 < len__4736__auto___44461)){
args__4742__auto__.push((arguments[i__4737__auto___44462]));

var G__44463 = (i__4737__auto___44462 + (1));
i__4737__auto___44462 = G__44463;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43133){
var map__43134 = p__43133;
var map__43134__$1 = (((((!((map__43134 == null))))?(((((map__43134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43134):map__43134);
var opts = map__43134__$1;
var statearr_43136_44467 = state;
(statearr_43136_44467[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43137_44468 = state;
(statearr_43137_44468[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43138_44469 = state;
(statearr_43138_44469[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43129){
var G__43130 = cljs.core.first(seq43129);
var seq43129__$1 = cljs.core.next(seq43129);
var G__43131 = cljs.core.first(seq43129__$1);
var seq43129__$2 = cljs.core.next(seq43129__$1);
var G__43132 = cljs.core.first(seq43129__$2);
var seq43129__$3 = cljs.core.next(seq43129__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43130,G__43131,G__43132,seq43129__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43139 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43140){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43140 = meta43140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43141,meta43140__$1){
var self__ = this;
var _43141__$1 = this;
return (new cljs.core.async.t_cljs$core$async43139(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43140__$1));
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43141){
var self__ = this;
var _43141__$1 = this;
return self__.meta43140;
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43139.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43140","meta43140",225018346,null)], null);
}));

(cljs.core.async.t_cljs$core$async43139.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43139");

(cljs.core.async.t_cljs$core$async43139.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43139");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43139.
 */
cljs.core.async.__GT_t_cljs$core$async43139 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43140){
return (new cljs.core.async.t_cljs$core$async43139(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43140));
});

}

return (new cljs.core.async.t_cljs$core$async43139(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42439__auto___44495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43243){
var state_val_43244 = (state_43243[(1)]);
if((state_val_43244 === (7))){
var inst_43158 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
var statearr_43245_44499 = state_43243__$1;
(statearr_43245_44499[(2)] = inst_43158);

(statearr_43245_44499[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (20))){
var inst_43170 = (state_43243[(7)]);
var state_43243__$1 = state_43243;
var statearr_43246_44500 = state_43243__$1;
(statearr_43246_44500[(2)] = inst_43170);

(statearr_43246_44500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (27))){
var state_43243__$1 = state_43243;
var statearr_43247_44501 = state_43243__$1;
(statearr_43247_44501[(2)] = null);

(statearr_43247_44501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (1))){
var inst_43145 = (state_43243[(8)]);
var inst_43145__$1 = calc_state();
var inst_43147 = (inst_43145__$1 == null);
var inst_43148 = cljs.core.not(inst_43147);
var state_43243__$1 = (function (){var statearr_43248 = state_43243;
(statearr_43248[(8)] = inst_43145__$1);

return statearr_43248;
})();
if(inst_43148){
var statearr_43249_44505 = state_43243__$1;
(statearr_43249_44505[(1)] = (2));

} else {
var statearr_43250_44506 = state_43243__$1;
(statearr_43250_44506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (24))){
var inst_43194 = (state_43243[(9)]);
var inst_43217 = (state_43243[(10)]);
var inst_43203 = (state_43243[(11)]);
var inst_43217__$1 = (inst_43194.cljs$core$IFn$_invoke$arity$1 ? inst_43194.cljs$core$IFn$_invoke$arity$1(inst_43203) : inst_43194.call(null,inst_43203));
var state_43243__$1 = (function (){var statearr_43251 = state_43243;
(statearr_43251[(10)] = inst_43217__$1);

return statearr_43251;
})();
if(cljs.core.truth_(inst_43217__$1)){
var statearr_43252_44507 = state_43243__$1;
(statearr_43252_44507[(1)] = (29));

} else {
var statearr_43253_44508 = state_43243__$1;
(statearr_43253_44508[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (4))){
var inst_43161 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43161)){
var statearr_43254_44509 = state_43243__$1;
(statearr_43254_44509[(1)] = (8));

} else {
var statearr_43255_44510 = state_43243__$1;
(statearr_43255_44510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (15))){
var inst_43188 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43188)){
var statearr_43256_44511 = state_43243__$1;
(statearr_43256_44511[(1)] = (19));

} else {
var statearr_43257_44512 = state_43243__$1;
(statearr_43257_44512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (21))){
var inst_43193 = (state_43243[(12)]);
var inst_43193__$1 = (state_43243[(2)]);
var inst_43194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43193__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43195 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43193__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43193__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43243__$1 = (function (){var statearr_43258 = state_43243;
(statearr_43258[(9)] = inst_43194);

(statearr_43258[(12)] = inst_43193__$1);

(statearr_43258[(13)] = inst_43195);

return statearr_43258;
})();
return cljs.core.async.ioc_alts_BANG_(state_43243__$1,(22),inst_43196);
} else {
if((state_val_43244 === (31))){
var inst_43225 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43225)){
var statearr_43259_44515 = state_43243__$1;
(statearr_43259_44515[(1)] = (32));

} else {
var statearr_43260_44516 = state_43243__$1;
(statearr_43260_44516[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (32))){
var inst_43202 = (state_43243[(14)]);
var state_43243__$1 = state_43243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43243__$1,(35),out,inst_43202);
} else {
if((state_val_43244 === (33))){
var inst_43193 = (state_43243[(12)]);
var inst_43170 = inst_43193;
var state_43243__$1 = (function (){var statearr_43261 = state_43243;
(statearr_43261[(7)] = inst_43170);

return statearr_43261;
})();
var statearr_43262_44517 = state_43243__$1;
(statearr_43262_44517[(2)] = null);

(statearr_43262_44517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (13))){
var inst_43170 = (state_43243[(7)]);
var inst_43177 = inst_43170.cljs$lang$protocol_mask$partition0$;
var inst_43178 = (inst_43177 & (64));
var inst_43179 = inst_43170.cljs$core$ISeq$;
var inst_43180 = (cljs.core.PROTOCOL_SENTINEL === inst_43179);
var inst_43181 = ((inst_43178) || (inst_43180));
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43181)){
var statearr_43263_44518 = state_43243__$1;
(statearr_43263_44518[(1)] = (16));

} else {
var statearr_43264_44519 = state_43243__$1;
(statearr_43264_44519[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (22))){
var inst_43203 = (state_43243[(11)]);
var inst_43202 = (state_43243[(14)]);
var inst_43201 = (state_43243[(2)]);
var inst_43202__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43201,(0),null);
var inst_43203__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43201,(1),null);
var inst_43204 = (inst_43202__$1 == null);
var inst_43205 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43203__$1,change);
var inst_43206 = ((inst_43204) || (inst_43205));
var state_43243__$1 = (function (){var statearr_43265 = state_43243;
(statearr_43265[(11)] = inst_43203__$1);

(statearr_43265[(14)] = inst_43202__$1);

return statearr_43265;
})();
if(cljs.core.truth_(inst_43206)){
var statearr_43266_44520 = state_43243__$1;
(statearr_43266_44520[(1)] = (23));

} else {
var statearr_43267_44521 = state_43243__$1;
(statearr_43267_44521[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (36))){
var inst_43193 = (state_43243[(12)]);
var inst_43170 = inst_43193;
var state_43243__$1 = (function (){var statearr_43268 = state_43243;
(statearr_43268[(7)] = inst_43170);

return statearr_43268;
})();
var statearr_43269_44522 = state_43243__$1;
(statearr_43269_44522[(2)] = null);

(statearr_43269_44522[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (29))){
var inst_43217 = (state_43243[(10)]);
var state_43243__$1 = state_43243;
var statearr_43270_44523 = state_43243__$1;
(statearr_43270_44523[(2)] = inst_43217);

(statearr_43270_44523[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (6))){
var state_43243__$1 = state_43243;
var statearr_43271_44524 = state_43243__$1;
(statearr_43271_44524[(2)] = false);

(statearr_43271_44524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (28))){
var inst_43213 = (state_43243[(2)]);
var inst_43214 = calc_state();
var inst_43170 = inst_43214;
var state_43243__$1 = (function (){var statearr_43272 = state_43243;
(statearr_43272[(15)] = inst_43213);

(statearr_43272[(7)] = inst_43170);

return statearr_43272;
})();
var statearr_43273_44525 = state_43243__$1;
(statearr_43273_44525[(2)] = null);

(statearr_43273_44525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (25))){
var inst_43239 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
var statearr_43274_44526 = state_43243__$1;
(statearr_43274_44526[(2)] = inst_43239);

(statearr_43274_44526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (34))){
var inst_43237 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
var statearr_43275_44528 = state_43243__$1;
(statearr_43275_44528[(2)] = inst_43237);

(statearr_43275_44528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (17))){
var state_43243__$1 = state_43243;
var statearr_43276_44529 = state_43243__$1;
(statearr_43276_44529[(2)] = false);

(statearr_43276_44529[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (3))){
var state_43243__$1 = state_43243;
var statearr_43277_44530 = state_43243__$1;
(statearr_43277_44530[(2)] = false);

(statearr_43277_44530[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (12))){
var inst_43241 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43243__$1,inst_43241);
} else {
if((state_val_43244 === (2))){
var inst_43145 = (state_43243[(8)]);
var inst_43150 = inst_43145.cljs$lang$protocol_mask$partition0$;
var inst_43151 = (inst_43150 & (64));
var inst_43152 = inst_43145.cljs$core$ISeq$;
var inst_43153 = (cljs.core.PROTOCOL_SENTINEL === inst_43152);
var inst_43154 = ((inst_43151) || (inst_43153));
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43154)){
var statearr_43278_44535 = state_43243__$1;
(statearr_43278_44535[(1)] = (5));

} else {
var statearr_43279_44536 = state_43243__$1;
(statearr_43279_44536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (23))){
var inst_43202 = (state_43243[(14)]);
var inst_43208 = (inst_43202 == null);
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43208)){
var statearr_43280_44537 = state_43243__$1;
(statearr_43280_44537[(1)] = (26));

} else {
var statearr_43281_44538 = state_43243__$1;
(statearr_43281_44538[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (35))){
var inst_43228 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
if(cljs.core.truth_(inst_43228)){
var statearr_43282_44539 = state_43243__$1;
(statearr_43282_44539[(1)] = (36));

} else {
var statearr_43283_44540 = state_43243__$1;
(statearr_43283_44540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (19))){
var inst_43170 = (state_43243[(7)]);
var inst_43190 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43170);
var state_43243__$1 = state_43243;
var statearr_43284_44541 = state_43243__$1;
(statearr_43284_44541[(2)] = inst_43190);

(statearr_43284_44541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (11))){
var inst_43170 = (state_43243[(7)]);
var inst_43174 = (inst_43170 == null);
var inst_43175 = cljs.core.not(inst_43174);
var state_43243__$1 = state_43243;
if(inst_43175){
var statearr_43285_44542 = state_43243__$1;
(statearr_43285_44542[(1)] = (13));

} else {
var statearr_43286_44543 = state_43243__$1;
(statearr_43286_44543[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (9))){
var inst_43145 = (state_43243[(8)]);
var state_43243__$1 = state_43243;
var statearr_43287_44544 = state_43243__$1;
(statearr_43287_44544[(2)] = inst_43145);

(statearr_43287_44544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (5))){
var state_43243__$1 = state_43243;
var statearr_43288_44545 = state_43243__$1;
(statearr_43288_44545[(2)] = true);

(statearr_43288_44545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (14))){
var state_43243__$1 = state_43243;
var statearr_43289_44546 = state_43243__$1;
(statearr_43289_44546[(2)] = false);

(statearr_43289_44546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (26))){
var inst_43203 = (state_43243[(11)]);
var inst_43210 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43203);
var state_43243__$1 = state_43243;
var statearr_43290_44547 = state_43243__$1;
(statearr_43290_44547[(2)] = inst_43210);

(statearr_43290_44547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (16))){
var state_43243__$1 = state_43243;
var statearr_43291_44548 = state_43243__$1;
(statearr_43291_44548[(2)] = true);

(statearr_43291_44548[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (38))){
var inst_43233 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
var statearr_43292_44553 = state_43243__$1;
(statearr_43292_44553[(2)] = inst_43233);

(statearr_43292_44553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (30))){
var inst_43194 = (state_43243[(9)]);
var inst_43203 = (state_43243[(11)]);
var inst_43195 = (state_43243[(13)]);
var inst_43220 = cljs.core.empty_QMARK_(inst_43194);
var inst_43221 = (inst_43195.cljs$core$IFn$_invoke$arity$1 ? inst_43195.cljs$core$IFn$_invoke$arity$1(inst_43203) : inst_43195.call(null,inst_43203));
var inst_43222 = cljs.core.not(inst_43221);
var inst_43223 = ((inst_43220) && (inst_43222));
var state_43243__$1 = state_43243;
var statearr_43293_44557 = state_43243__$1;
(statearr_43293_44557[(2)] = inst_43223);

(statearr_43293_44557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (10))){
var inst_43145 = (state_43243[(8)]);
var inst_43166 = (state_43243[(2)]);
var inst_43167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43166,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43166,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43166,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43170 = inst_43145;
var state_43243__$1 = (function (){var statearr_43294 = state_43243;
(statearr_43294[(16)] = inst_43168);

(statearr_43294[(17)] = inst_43169);

(statearr_43294[(7)] = inst_43170);

(statearr_43294[(18)] = inst_43167);

return statearr_43294;
})();
var statearr_43295_44561 = state_43243__$1;
(statearr_43295_44561[(2)] = null);

(statearr_43295_44561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (18))){
var inst_43185 = (state_43243[(2)]);
var state_43243__$1 = state_43243;
var statearr_43296_44565 = state_43243__$1;
(statearr_43296_44565[(2)] = inst_43185);

(statearr_43296_44565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (37))){
var state_43243__$1 = state_43243;
var statearr_43297_44566 = state_43243__$1;
(statearr_43297_44566[(2)] = null);

(statearr_43297_44566[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43244 === (8))){
var inst_43145 = (state_43243[(8)]);
var inst_43163 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43145);
var state_43243__$1 = state_43243;
var statearr_43298_44570 = state_43243__$1;
(statearr_43298_44570[(2)] = inst_43163);

(statearr_43298_44570[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__42367__auto__ = null;
var cljs$core$async$mix_$_state_machine__42367__auto____0 = (function (){
var statearr_43299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43299[(0)] = cljs$core$async$mix_$_state_machine__42367__auto__);

(statearr_43299[(1)] = (1));

return statearr_43299;
});
var cljs$core$async$mix_$_state_machine__42367__auto____1 = (function (state_43243){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43243);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43300){var ex__42370__auto__ = e43300;
var statearr_43301_44575 = state_43243;
(statearr_43301_44575[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43243[(4)]))){
var statearr_43302_44576 = state_43243;
(statearr_43302_44576[(1)] = cljs.core.first((state_43243[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44577 = state_43243;
state_43243 = G__44577;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42367__auto__ = function(state_43243){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42367__auto____1.call(this,state_43243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42367__auto____0;
cljs$core$async$mix_$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42367__auto____1;
return cljs$core$async$mix_$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43303 = f__42440__auto__();
(statearr_43303[(6)] = c__42439__auto___44495);

return statearr_43303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44579 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_44579(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44581 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_44581(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44582 = (function() {
var G__44583 = null;
var G__44583__1 = (function (p){
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
var G__44583__2 = (function (p,v){
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
G__44583 = function(p,v){
switch(arguments.length){
case 1:
return G__44583__1.call(this,p);
case 2:
return G__44583__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44583.cljs$core$IFn$_invoke$arity$1 = G__44583__1;
G__44583.cljs$core$IFn$_invoke$arity$2 = G__44583__2;
return G__44583;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43305 = arguments.length;
switch (G__43305) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44582(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44582(p,v);
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
var G__43308 = arguments.length;
switch (G__43308) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43306_SHARP_){
if(cljs.core.truth_((p1__43306_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43306_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43306_SHARP_.call(null,topic)))){
return p1__43306_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43306_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43309 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43310){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43310 = meta43310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43311,meta43310__$1){
var self__ = this;
var _43311__$1 = this;
return (new cljs.core.async.t_cljs$core$async43309(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43310__$1));
}));

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43311){
var self__ = this;
var _43311__$1 = this;
return self__.meta43310;
}));

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43309.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43310","meta43310",811227873,null)], null);
}));

(cljs.core.async.t_cljs$core$async43309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43309");

(cljs.core.async.t_cljs$core$async43309.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43309.
 */
cljs.core.async.__GT_t_cljs$core$async43309 = (function cljs$core$async$__GT_t_cljs$core$async43309(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43310){
return (new cljs.core.async.t_cljs$core$async43309(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43310));
});

}

return (new cljs.core.async.t_cljs$core$async43309(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42439__auto___44596 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43383){
var state_val_43384 = (state_43383[(1)]);
if((state_val_43384 === (7))){
var inst_43379 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43385_44601 = state_43383__$1;
(statearr_43385_44601[(2)] = inst_43379);

(statearr_43385_44601[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (20))){
var state_43383__$1 = state_43383;
var statearr_43386_44602 = state_43383__$1;
(statearr_43386_44602[(2)] = null);

(statearr_43386_44602[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (1))){
var state_43383__$1 = state_43383;
var statearr_43387_44603 = state_43383__$1;
(statearr_43387_44603[(2)] = null);

(statearr_43387_44603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (24))){
var inst_43362 = (state_43383[(7)]);
var inst_43371 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43362);
var state_43383__$1 = state_43383;
var statearr_43388_44604 = state_43383__$1;
(statearr_43388_44604[(2)] = inst_43371);

(statearr_43388_44604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (4))){
var inst_43314 = (state_43383[(8)]);
var inst_43314__$1 = (state_43383[(2)]);
var inst_43315 = (inst_43314__$1 == null);
var state_43383__$1 = (function (){var statearr_43389 = state_43383;
(statearr_43389[(8)] = inst_43314__$1);

return statearr_43389;
})();
if(cljs.core.truth_(inst_43315)){
var statearr_43390_44605 = state_43383__$1;
(statearr_43390_44605[(1)] = (5));

} else {
var statearr_43391_44606 = state_43383__$1;
(statearr_43391_44606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (15))){
var inst_43356 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43392_44607 = state_43383__$1;
(statearr_43392_44607[(2)] = inst_43356);

(statearr_43392_44607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (21))){
var inst_43376 = (state_43383[(2)]);
var state_43383__$1 = (function (){var statearr_43393 = state_43383;
(statearr_43393[(9)] = inst_43376);

return statearr_43393;
})();
var statearr_43394_44608 = state_43383__$1;
(statearr_43394_44608[(2)] = null);

(statearr_43394_44608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (13))){
var inst_43338 = (state_43383[(10)]);
var inst_43340 = cljs.core.chunked_seq_QMARK_(inst_43338);
var state_43383__$1 = state_43383;
if(inst_43340){
var statearr_43395_44609 = state_43383__$1;
(statearr_43395_44609[(1)] = (16));

} else {
var statearr_43396_44610 = state_43383__$1;
(statearr_43396_44610[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (22))){
var inst_43368 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
if(cljs.core.truth_(inst_43368)){
var statearr_43397_44611 = state_43383__$1;
(statearr_43397_44611[(1)] = (23));

} else {
var statearr_43398_44612 = state_43383__$1;
(statearr_43398_44612[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (6))){
var inst_43314 = (state_43383[(8)]);
var inst_43364 = (state_43383[(11)]);
var inst_43362 = (state_43383[(7)]);
var inst_43362__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43314) : topic_fn.call(null,inst_43314));
var inst_43363 = cljs.core.deref(mults);
var inst_43364__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43363,inst_43362__$1);
var state_43383__$1 = (function (){var statearr_43399 = state_43383;
(statearr_43399[(11)] = inst_43364__$1);

(statearr_43399[(7)] = inst_43362__$1);

return statearr_43399;
})();
if(cljs.core.truth_(inst_43364__$1)){
var statearr_43400_44613 = state_43383__$1;
(statearr_43400_44613[(1)] = (19));

} else {
var statearr_43401_44614 = state_43383__$1;
(statearr_43401_44614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (25))){
var inst_43373 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43402_44615 = state_43383__$1;
(statearr_43402_44615[(2)] = inst_43373);

(statearr_43402_44615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (17))){
var inst_43338 = (state_43383[(10)]);
var inst_43347 = cljs.core.first(inst_43338);
var inst_43348 = cljs.core.async.muxch_STAR_(inst_43347);
var inst_43349 = cljs.core.async.close_BANG_(inst_43348);
var inst_43350 = cljs.core.next(inst_43338);
var inst_43324 = inst_43350;
var inst_43325 = null;
var inst_43326 = (0);
var inst_43327 = (0);
var state_43383__$1 = (function (){var statearr_43403 = state_43383;
(statearr_43403[(12)] = inst_43327);

(statearr_43403[(13)] = inst_43326);

(statearr_43403[(14)] = inst_43324);

(statearr_43403[(15)] = inst_43349);

(statearr_43403[(16)] = inst_43325);

return statearr_43403;
})();
var statearr_43404_44619 = state_43383__$1;
(statearr_43404_44619[(2)] = null);

(statearr_43404_44619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (3))){
var inst_43381 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43383__$1,inst_43381);
} else {
if((state_val_43384 === (12))){
var inst_43358 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43405_44620 = state_43383__$1;
(statearr_43405_44620[(2)] = inst_43358);

(statearr_43405_44620[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (2))){
var state_43383__$1 = state_43383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43383__$1,(4),ch);
} else {
if((state_val_43384 === (23))){
var state_43383__$1 = state_43383;
var statearr_43406_44621 = state_43383__$1;
(statearr_43406_44621[(2)] = null);

(statearr_43406_44621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (19))){
var inst_43314 = (state_43383[(8)]);
var inst_43364 = (state_43383[(11)]);
var inst_43366 = cljs.core.async.muxch_STAR_(inst_43364);
var state_43383__$1 = state_43383;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43383__$1,(22),inst_43366,inst_43314);
} else {
if((state_val_43384 === (11))){
var inst_43338 = (state_43383[(10)]);
var inst_43324 = (state_43383[(14)]);
var inst_43338__$1 = cljs.core.seq(inst_43324);
var state_43383__$1 = (function (){var statearr_43407 = state_43383;
(statearr_43407[(10)] = inst_43338__$1);

return statearr_43407;
})();
if(inst_43338__$1){
var statearr_43408_44622 = state_43383__$1;
(statearr_43408_44622[(1)] = (13));

} else {
var statearr_43409_44623 = state_43383__$1;
(statearr_43409_44623[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (9))){
var inst_43360 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43410_44624 = state_43383__$1;
(statearr_43410_44624[(2)] = inst_43360);

(statearr_43410_44624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (5))){
var inst_43321 = cljs.core.deref(mults);
var inst_43322 = cljs.core.vals(inst_43321);
var inst_43323 = cljs.core.seq(inst_43322);
var inst_43324 = inst_43323;
var inst_43325 = null;
var inst_43326 = (0);
var inst_43327 = (0);
var state_43383__$1 = (function (){var statearr_43411 = state_43383;
(statearr_43411[(12)] = inst_43327);

(statearr_43411[(13)] = inst_43326);

(statearr_43411[(14)] = inst_43324);

(statearr_43411[(16)] = inst_43325);

return statearr_43411;
})();
var statearr_43412_44626 = state_43383__$1;
(statearr_43412_44626[(2)] = null);

(statearr_43412_44626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (14))){
var state_43383__$1 = state_43383;
var statearr_43416_44627 = state_43383__$1;
(statearr_43416_44627[(2)] = null);

(statearr_43416_44627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (16))){
var inst_43338 = (state_43383[(10)]);
var inst_43342 = cljs.core.chunk_first(inst_43338);
var inst_43343 = cljs.core.chunk_rest(inst_43338);
var inst_43344 = cljs.core.count(inst_43342);
var inst_43324 = inst_43343;
var inst_43325 = inst_43342;
var inst_43326 = inst_43344;
var inst_43327 = (0);
var state_43383__$1 = (function (){var statearr_43417 = state_43383;
(statearr_43417[(12)] = inst_43327);

(statearr_43417[(13)] = inst_43326);

(statearr_43417[(14)] = inst_43324);

(statearr_43417[(16)] = inst_43325);

return statearr_43417;
})();
var statearr_43418_44628 = state_43383__$1;
(statearr_43418_44628[(2)] = null);

(statearr_43418_44628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (10))){
var inst_43327 = (state_43383[(12)]);
var inst_43326 = (state_43383[(13)]);
var inst_43324 = (state_43383[(14)]);
var inst_43325 = (state_43383[(16)]);
var inst_43332 = cljs.core._nth(inst_43325,inst_43327);
var inst_43333 = cljs.core.async.muxch_STAR_(inst_43332);
var inst_43334 = cljs.core.async.close_BANG_(inst_43333);
var inst_43335 = (inst_43327 + (1));
var tmp43413 = inst_43326;
var tmp43414 = inst_43324;
var tmp43415 = inst_43325;
var inst_43324__$1 = tmp43414;
var inst_43325__$1 = tmp43415;
var inst_43326__$1 = tmp43413;
var inst_43327__$1 = inst_43335;
var state_43383__$1 = (function (){var statearr_43419 = state_43383;
(statearr_43419[(17)] = inst_43334);

(statearr_43419[(12)] = inst_43327__$1);

(statearr_43419[(13)] = inst_43326__$1);

(statearr_43419[(14)] = inst_43324__$1);

(statearr_43419[(16)] = inst_43325__$1);

return statearr_43419;
})();
var statearr_43420_44633 = state_43383__$1;
(statearr_43420_44633[(2)] = null);

(statearr_43420_44633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (18))){
var inst_43353 = (state_43383[(2)]);
var state_43383__$1 = state_43383;
var statearr_43421_44635 = state_43383__$1;
(statearr_43421_44635[(2)] = inst_43353);

(statearr_43421_44635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43384 === (8))){
var inst_43327 = (state_43383[(12)]);
var inst_43326 = (state_43383[(13)]);
var inst_43329 = (inst_43327 < inst_43326);
var inst_43330 = inst_43329;
var state_43383__$1 = state_43383;
if(cljs.core.truth_(inst_43330)){
var statearr_43422_44636 = state_43383__$1;
(statearr_43422_44636[(1)] = (10));

} else {
var statearr_43423_44637 = state_43383__$1;
(statearr_43423_44637[(1)] = (11));

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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43424[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43424[(1)] = (1));

return statearr_43424;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43383){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43383);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43425){var ex__42370__auto__ = e43425;
var statearr_43426_44639 = state_43383;
(statearr_43426_44639[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43383[(4)]))){
var statearr_43427_44640 = state_43383;
(statearr_43427_44640[(1)] = cljs.core.first((state_43383[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44641 = state_43383;
state_43383 = G__44641;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43383){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43428 = f__42440__auto__();
(statearr_43428[(6)] = c__42439__auto___44596);

return statearr_43428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var G__43430 = arguments.length;
switch (G__43430) {
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
var G__43432 = arguments.length;
switch (G__43432) {
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
var G__43434 = arguments.length;
switch (G__43434) {
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
var c__42439__auto___44649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43477){
var state_val_43478 = (state_43477[(1)]);
if((state_val_43478 === (7))){
var state_43477__$1 = state_43477;
var statearr_43479_44650 = state_43477__$1;
(statearr_43479_44650[(2)] = null);

(statearr_43479_44650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (1))){
var state_43477__$1 = state_43477;
var statearr_43480_44651 = state_43477__$1;
(statearr_43480_44651[(2)] = null);

(statearr_43480_44651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (4))){
var inst_43437 = (state_43477[(7)]);
var inst_43438 = (state_43477[(8)]);
var inst_43440 = (inst_43438 < inst_43437);
var state_43477__$1 = state_43477;
if(cljs.core.truth_(inst_43440)){
var statearr_43481_44652 = state_43477__$1;
(statearr_43481_44652[(1)] = (6));

} else {
var statearr_43482_44653 = state_43477__$1;
(statearr_43482_44653[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (15))){
var inst_43463 = (state_43477[(9)]);
var inst_43468 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43463);
var state_43477__$1 = state_43477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43477__$1,(17),out,inst_43468);
} else {
if((state_val_43478 === (13))){
var inst_43463 = (state_43477[(9)]);
var inst_43463__$1 = (state_43477[(2)]);
var inst_43464 = cljs.core.some(cljs.core.nil_QMARK_,inst_43463__$1);
var state_43477__$1 = (function (){var statearr_43483 = state_43477;
(statearr_43483[(9)] = inst_43463__$1);

return statearr_43483;
})();
if(cljs.core.truth_(inst_43464)){
var statearr_43484_44654 = state_43477__$1;
(statearr_43484_44654[(1)] = (14));

} else {
var statearr_43485_44655 = state_43477__$1;
(statearr_43485_44655[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (6))){
var state_43477__$1 = state_43477;
var statearr_43486_44659 = state_43477__$1;
(statearr_43486_44659[(2)] = null);

(statearr_43486_44659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (17))){
var inst_43470 = (state_43477[(2)]);
var state_43477__$1 = (function (){var statearr_43488 = state_43477;
(statearr_43488[(10)] = inst_43470);

return statearr_43488;
})();
var statearr_43489_44660 = state_43477__$1;
(statearr_43489_44660[(2)] = null);

(statearr_43489_44660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (3))){
var inst_43475 = (state_43477[(2)]);
var state_43477__$1 = state_43477;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43477__$1,inst_43475);
} else {
if((state_val_43478 === (12))){
var _ = (function (){var statearr_43490 = state_43477;
(statearr_43490[(4)] = cljs.core.rest((state_43477[(4)])));

return statearr_43490;
})();
var state_43477__$1 = state_43477;
var ex43487 = (state_43477__$1[(2)]);
var statearr_43491_44661 = state_43477__$1;
(statearr_43491_44661[(5)] = ex43487);


if((ex43487 instanceof Object)){
var statearr_43492_44662 = state_43477__$1;
(statearr_43492_44662[(1)] = (11));

(statearr_43492_44662[(5)] = null);

} else {
throw ex43487;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (2))){
var inst_43436 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43437 = cnt;
var inst_43438 = (0);
var state_43477__$1 = (function (){var statearr_43493 = state_43477;
(statearr_43493[(11)] = inst_43436);

(statearr_43493[(7)] = inst_43437);

(statearr_43493[(8)] = inst_43438);

return statearr_43493;
})();
var statearr_43494_44663 = state_43477__$1;
(statearr_43494_44663[(2)] = null);

(statearr_43494_44663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (11))){
var inst_43442 = (state_43477[(2)]);
var inst_43443 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43477__$1 = (function (){var statearr_43495 = state_43477;
(statearr_43495[(12)] = inst_43442);

return statearr_43495;
})();
var statearr_43496_44664 = state_43477__$1;
(statearr_43496_44664[(2)] = inst_43443);

(statearr_43496_44664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (9))){
var inst_43438 = (state_43477[(8)]);
var _ = (function (){var statearr_43497 = state_43477;
(statearr_43497[(4)] = cljs.core.cons((12),(state_43477[(4)])));

return statearr_43497;
})();
var inst_43449 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43438) : chs__$1.call(null,inst_43438));
var inst_43450 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43438) : done.call(null,inst_43438));
var inst_43451 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43449,inst_43450);
var ___$1 = (function (){var statearr_43498 = state_43477;
(statearr_43498[(4)] = cljs.core.rest((state_43477[(4)])));

return statearr_43498;
})();
var state_43477__$1 = state_43477;
var statearr_43499_44666 = state_43477__$1;
(statearr_43499_44666[(2)] = inst_43451);

(statearr_43499_44666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (5))){
var inst_43461 = (state_43477[(2)]);
var state_43477__$1 = (function (){var statearr_43500 = state_43477;
(statearr_43500[(13)] = inst_43461);

return statearr_43500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43477__$1,(13),dchan);
} else {
if((state_val_43478 === (14))){
var inst_43466 = cljs.core.async.close_BANG_(out);
var state_43477__$1 = state_43477;
var statearr_43501_44667 = state_43477__$1;
(statearr_43501_44667[(2)] = inst_43466);

(statearr_43501_44667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (16))){
var inst_43473 = (state_43477[(2)]);
var state_43477__$1 = state_43477;
var statearr_43502_44668 = state_43477__$1;
(statearr_43502_44668[(2)] = inst_43473);

(statearr_43502_44668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (10))){
var inst_43438 = (state_43477[(8)]);
var inst_43454 = (state_43477[(2)]);
var inst_43455 = (inst_43438 + (1));
var inst_43438__$1 = inst_43455;
var state_43477__$1 = (function (){var statearr_43503 = state_43477;
(statearr_43503[(14)] = inst_43454);

(statearr_43503[(8)] = inst_43438__$1);

return statearr_43503;
})();
var statearr_43504_44669 = state_43477__$1;
(statearr_43504_44669[(2)] = null);

(statearr_43504_44669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43478 === (8))){
var inst_43459 = (state_43477[(2)]);
var state_43477__$1 = state_43477;
var statearr_43505_44670 = state_43477__$1;
(statearr_43505_44670[(2)] = inst_43459);

(statearr_43505_44670[(1)] = (5));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43506[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43506[(1)] = (1));

return statearr_43506;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43477){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43477);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43507){var ex__42370__auto__ = e43507;
var statearr_43508_44671 = state_43477;
(statearr_43508_44671[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43477[(4)]))){
var statearr_43509_44672 = state_43477;
(statearr_43509_44672[(1)] = cljs.core.first((state_43477[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44673 = state_43477;
state_43477 = G__44673;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43510 = f__42440__auto__();
(statearr_43510[(6)] = c__42439__auto___44649);

return statearr_43510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var G__43513 = arguments.length;
switch (G__43513) {
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
var c__42439__auto___44675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43545){
var state_val_43546 = (state_43545[(1)]);
if((state_val_43546 === (7))){
var inst_43525 = (state_43545[(7)]);
var inst_43524 = (state_43545[(8)]);
var inst_43524__$1 = (state_43545[(2)]);
var inst_43525__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43524__$1,(0),null);
var inst_43526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43524__$1,(1),null);
var inst_43527 = (inst_43525__$1 == null);
var state_43545__$1 = (function (){var statearr_43547 = state_43545;
(statearr_43547[(9)] = inst_43526);

(statearr_43547[(7)] = inst_43525__$1);

(statearr_43547[(8)] = inst_43524__$1);

return statearr_43547;
})();
if(cljs.core.truth_(inst_43527)){
var statearr_43548_44676 = state_43545__$1;
(statearr_43548_44676[(1)] = (8));

} else {
var statearr_43549_44677 = state_43545__$1;
(statearr_43549_44677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (1))){
var inst_43514 = cljs.core.vec(chs);
var inst_43515 = inst_43514;
var state_43545__$1 = (function (){var statearr_43550 = state_43545;
(statearr_43550[(10)] = inst_43515);

return statearr_43550;
})();
var statearr_43551_44678 = state_43545__$1;
(statearr_43551_44678[(2)] = null);

(statearr_43551_44678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (4))){
var inst_43515 = (state_43545[(10)]);
var state_43545__$1 = state_43545;
return cljs.core.async.ioc_alts_BANG_(state_43545__$1,(7),inst_43515);
} else {
if((state_val_43546 === (6))){
var inst_43541 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
var statearr_43552_44683 = state_43545__$1;
(statearr_43552_44683[(2)] = inst_43541);

(statearr_43552_44683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (3))){
var inst_43543 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43545__$1,inst_43543);
} else {
if((state_val_43546 === (2))){
var inst_43515 = (state_43545[(10)]);
var inst_43517 = cljs.core.count(inst_43515);
var inst_43518 = (inst_43517 > (0));
var state_43545__$1 = state_43545;
if(cljs.core.truth_(inst_43518)){
var statearr_43554_44684 = state_43545__$1;
(statearr_43554_44684[(1)] = (4));

} else {
var statearr_43555_44685 = state_43545__$1;
(statearr_43555_44685[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (11))){
var inst_43515 = (state_43545[(10)]);
var inst_43534 = (state_43545[(2)]);
var tmp43553 = inst_43515;
var inst_43515__$1 = tmp43553;
var state_43545__$1 = (function (){var statearr_43556 = state_43545;
(statearr_43556[(10)] = inst_43515__$1);

(statearr_43556[(11)] = inst_43534);

return statearr_43556;
})();
var statearr_43557_44690 = state_43545__$1;
(statearr_43557_44690[(2)] = null);

(statearr_43557_44690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (9))){
var inst_43525 = (state_43545[(7)]);
var state_43545__$1 = state_43545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43545__$1,(11),out,inst_43525);
} else {
if((state_val_43546 === (5))){
var inst_43539 = cljs.core.async.close_BANG_(out);
var state_43545__$1 = state_43545;
var statearr_43558_44691 = state_43545__$1;
(statearr_43558_44691[(2)] = inst_43539);

(statearr_43558_44691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (10))){
var inst_43537 = (state_43545[(2)]);
var state_43545__$1 = state_43545;
var statearr_43559_44692 = state_43545__$1;
(statearr_43559_44692[(2)] = inst_43537);

(statearr_43559_44692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43546 === (8))){
var inst_43526 = (state_43545[(9)]);
var inst_43515 = (state_43545[(10)]);
var inst_43525 = (state_43545[(7)]);
var inst_43524 = (state_43545[(8)]);
var inst_43529 = (function (){var cs = inst_43515;
var vec__43520 = inst_43524;
var v = inst_43525;
var c = inst_43526;
return (function (p1__43511_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43511_SHARP_);
});
})();
var inst_43530 = cljs.core.filterv(inst_43529,inst_43515);
var inst_43515__$1 = inst_43530;
var state_43545__$1 = (function (){var statearr_43560 = state_43545;
(statearr_43560[(10)] = inst_43515__$1);

return statearr_43560;
})();
var statearr_43561_44695 = state_43545__$1;
(statearr_43561_44695[(2)] = null);

(statearr_43561_44695[(1)] = (2));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43562 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43562[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43562[(1)] = (1));

return statearr_43562;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43545){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43545);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43563){var ex__42370__auto__ = e43563;
var statearr_43564_44696 = state_43545;
(statearr_43564_44696[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43545[(4)]))){
var statearr_43565_44697 = state_43545;
(statearr_43565_44697[(1)] = cljs.core.first((state_43545[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44698 = state_43545;
state_43545 = G__44698;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43566 = f__42440__auto__();
(statearr_43566[(6)] = c__42439__auto___44675);

return statearr_43566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
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
var G__43568 = arguments.length;
switch (G__43568) {
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
var c__42439__auto___44700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43592){
var state_val_43593 = (state_43592[(1)]);
if((state_val_43593 === (7))){
var inst_43574 = (state_43592[(7)]);
var inst_43574__$1 = (state_43592[(2)]);
var inst_43575 = (inst_43574__$1 == null);
var inst_43576 = cljs.core.not(inst_43575);
var state_43592__$1 = (function (){var statearr_43594 = state_43592;
(statearr_43594[(7)] = inst_43574__$1);

return statearr_43594;
})();
if(inst_43576){
var statearr_43595_44701 = state_43592__$1;
(statearr_43595_44701[(1)] = (8));

} else {
var statearr_43596_44702 = state_43592__$1;
(statearr_43596_44702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (1))){
var inst_43569 = (0);
var state_43592__$1 = (function (){var statearr_43597 = state_43592;
(statearr_43597[(8)] = inst_43569);

return statearr_43597;
})();
var statearr_43598_44703 = state_43592__$1;
(statearr_43598_44703[(2)] = null);

(statearr_43598_44703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (4))){
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43592__$1,(7),ch);
} else {
if((state_val_43593 === (6))){
var inst_43587 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
var statearr_43599_44704 = state_43592__$1;
(statearr_43599_44704[(2)] = inst_43587);

(statearr_43599_44704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (3))){
var inst_43589 = (state_43592[(2)]);
var inst_43590 = cljs.core.async.close_BANG_(out);
var state_43592__$1 = (function (){var statearr_43600 = state_43592;
(statearr_43600[(9)] = inst_43589);

return statearr_43600;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43592__$1,inst_43590);
} else {
if((state_val_43593 === (2))){
var inst_43569 = (state_43592[(8)]);
var inst_43571 = (inst_43569 < n);
var state_43592__$1 = state_43592;
if(cljs.core.truth_(inst_43571)){
var statearr_43601_44705 = state_43592__$1;
(statearr_43601_44705[(1)] = (4));

} else {
var statearr_43602_44706 = state_43592__$1;
(statearr_43602_44706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (11))){
var inst_43569 = (state_43592[(8)]);
var inst_43579 = (state_43592[(2)]);
var inst_43580 = (inst_43569 + (1));
var inst_43569__$1 = inst_43580;
var state_43592__$1 = (function (){var statearr_43603 = state_43592;
(statearr_43603[(10)] = inst_43579);

(statearr_43603[(8)] = inst_43569__$1);

return statearr_43603;
})();
var statearr_43604_44707 = state_43592__$1;
(statearr_43604_44707[(2)] = null);

(statearr_43604_44707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (9))){
var state_43592__$1 = state_43592;
var statearr_43605_44708 = state_43592__$1;
(statearr_43605_44708[(2)] = null);

(statearr_43605_44708[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (5))){
var state_43592__$1 = state_43592;
var statearr_43606_44709 = state_43592__$1;
(statearr_43606_44709[(2)] = null);

(statearr_43606_44709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (10))){
var inst_43584 = (state_43592[(2)]);
var state_43592__$1 = state_43592;
var statearr_43607_44710 = state_43592__$1;
(statearr_43607_44710[(2)] = inst_43584);

(statearr_43607_44710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43593 === (8))){
var inst_43574 = (state_43592[(7)]);
var state_43592__$1 = state_43592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43592__$1,(11),out,inst_43574);
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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43608 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43608[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43608[(1)] = (1));

return statearr_43608;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43592){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43592);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43609){var ex__42370__auto__ = e43609;
var statearr_43610_44711 = state_43592;
(statearr_43610_44711[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43592[(4)]))){
var statearr_43611_44712 = state_43592;
(statearr_43611_44712[(1)] = cljs.core.first((state_43592[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44713 = state_43592;
state_43592 = G__44713;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43612 = f__42440__auto__();
(statearr_43612[(6)] = c__42439__auto___44700);

return statearr_43612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43614 = (function (f,ch,meta43615){
this.f = f;
this.ch = ch;
this.meta43615 = meta43615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43616,meta43615__$1){
var self__ = this;
var _43616__$1 = this;
return (new cljs.core.async.t_cljs$core$async43614(self__.f,self__.ch,meta43615__$1));
}));

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43616){
var self__ = this;
var _43616__$1 = this;
return self__.meta43615;
}));

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43617 = (function (f,ch,meta43615,_,fn1,meta43618){
this.f = f;
this.ch = ch;
this.meta43615 = meta43615;
this._ = _;
this.fn1 = fn1;
this.meta43618 = meta43618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43619,meta43618__$1){
var self__ = this;
var _43619__$1 = this;
return (new cljs.core.async.t_cljs$core$async43617(self__.f,self__.ch,self__.meta43615,self__._,self__.fn1,meta43618__$1));
}));

(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43619){
var self__ = this;
var _43619__$1 = this;
return self__.meta43618;
}));

(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43613_SHARP_){
var G__43620 = (((p1__43613_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43613_SHARP_) : self__.f.call(null,p1__43613_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43620) : f1.call(null,G__43620));
});
}));

(cljs.core.async.t_cljs$core$async43617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43615","meta43615",1513767606,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43614","cljs.core.async/t_cljs$core$async43614",319113593,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43618","meta43618",-19261026,null)], null);
}));

(cljs.core.async.t_cljs$core$async43617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43617");

(cljs.core.async.t_cljs$core$async43617.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43617.
 */
cljs.core.async.__GT_t_cljs$core$async43617 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43617(f__$1,ch__$1,meta43615__$1,___$2,fn1__$1,meta43618){
return (new cljs.core.async.t_cljs$core$async43617(f__$1,ch__$1,meta43615__$1,___$2,fn1__$1,meta43618));
});

}

return (new cljs.core.async.t_cljs$core$async43617(self__.f,self__.ch,self__.meta43615,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43621 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43621) : self__.f.call(null,G__43621));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43615","meta43615",1513767606,null)], null);
}));

(cljs.core.async.t_cljs$core$async43614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43614");

(cljs.core.async.t_cljs$core$async43614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43614.
 */
cljs.core.async.__GT_t_cljs$core$async43614 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43614(f__$1,ch__$1,meta43615){
return (new cljs.core.async.t_cljs$core$async43614(f__$1,ch__$1,meta43615));
});

}

return (new cljs.core.async.t_cljs$core$async43614(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43622 = (function (f,ch,meta43623){
this.f = f;
this.ch = ch;
this.meta43623 = meta43623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43624,meta43623__$1){
var self__ = this;
var _43624__$1 = this;
return (new cljs.core.async.t_cljs$core$async43622(self__.f,self__.ch,meta43623__$1));
}));

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43624){
var self__ = this;
var _43624__$1 = this;
return self__.meta43623;
}));

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43623","meta43623",2085943616,null)], null);
}));

(cljs.core.async.t_cljs$core$async43622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43622");

(cljs.core.async.t_cljs$core$async43622.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43622.
 */
cljs.core.async.__GT_t_cljs$core$async43622 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43622(f__$1,ch__$1,meta43623){
return (new cljs.core.async.t_cljs$core$async43622(f__$1,ch__$1,meta43623));
});

}

return (new cljs.core.async.t_cljs$core$async43622(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43625 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43625 = (function (p,ch,meta43626){
this.p = p;
this.ch = ch;
this.meta43626 = meta43626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43627,meta43626__$1){
var self__ = this;
var _43627__$1 = this;
return (new cljs.core.async.t_cljs$core$async43625(self__.p,self__.ch,meta43626__$1));
}));

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43627){
var self__ = this;
var _43627__$1 = this;
return self__.meta43626;
}));

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43625.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43626","meta43626",-416699897,null)], null);
}));

(cljs.core.async.t_cljs$core$async43625.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43625");

(cljs.core.async.t_cljs$core$async43625.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43625");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43625.
 */
cljs.core.async.__GT_t_cljs$core$async43625 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43625(p__$1,ch__$1,meta43626){
return (new cljs.core.async.t_cljs$core$async43625(p__$1,ch__$1,meta43626));
});

}

return (new cljs.core.async.t_cljs$core$async43625(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43629 = arguments.length;
switch (G__43629) {
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
var c__42439__auto___44725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43650){
var state_val_43651 = (state_43650[(1)]);
if((state_val_43651 === (7))){
var inst_43646 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
var statearr_43652_44726 = state_43650__$1;
(statearr_43652_44726[(2)] = inst_43646);

(statearr_43652_44726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (1))){
var state_43650__$1 = state_43650;
var statearr_43653_44727 = state_43650__$1;
(statearr_43653_44727[(2)] = null);

(statearr_43653_44727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (4))){
var inst_43632 = (state_43650[(7)]);
var inst_43632__$1 = (state_43650[(2)]);
var inst_43633 = (inst_43632__$1 == null);
var state_43650__$1 = (function (){var statearr_43654 = state_43650;
(statearr_43654[(7)] = inst_43632__$1);

return statearr_43654;
})();
if(cljs.core.truth_(inst_43633)){
var statearr_43655_44731 = state_43650__$1;
(statearr_43655_44731[(1)] = (5));

} else {
var statearr_43656_44732 = state_43650__$1;
(statearr_43656_44732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (6))){
var inst_43632 = (state_43650[(7)]);
var inst_43637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43632) : p.call(null,inst_43632));
var state_43650__$1 = state_43650;
if(cljs.core.truth_(inst_43637)){
var statearr_43657_44733 = state_43650__$1;
(statearr_43657_44733[(1)] = (8));

} else {
var statearr_43658_44734 = state_43650__$1;
(statearr_43658_44734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (3))){
var inst_43648 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43650__$1,inst_43648);
} else {
if((state_val_43651 === (2))){
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43650__$1,(4),ch);
} else {
if((state_val_43651 === (11))){
var inst_43640 = (state_43650[(2)]);
var state_43650__$1 = state_43650;
var statearr_43659_44738 = state_43650__$1;
(statearr_43659_44738[(2)] = inst_43640);

(statearr_43659_44738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (9))){
var state_43650__$1 = state_43650;
var statearr_43660_44739 = state_43650__$1;
(statearr_43660_44739[(2)] = null);

(statearr_43660_44739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (5))){
var inst_43635 = cljs.core.async.close_BANG_(out);
var state_43650__$1 = state_43650;
var statearr_43661_44740 = state_43650__$1;
(statearr_43661_44740[(2)] = inst_43635);

(statearr_43661_44740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (10))){
var inst_43643 = (state_43650[(2)]);
var state_43650__$1 = (function (){var statearr_43662 = state_43650;
(statearr_43662[(8)] = inst_43643);

return statearr_43662;
})();
var statearr_43663_44744 = state_43650__$1;
(statearr_43663_44744[(2)] = null);

(statearr_43663_44744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43651 === (8))){
var inst_43632 = (state_43650[(7)]);
var state_43650__$1 = state_43650;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43650__$1,(11),out,inst_43632);
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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43664 = [null,null,null,null,null,null,null,null,null];
(statearr_43664[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43664[(1)] = (1));

return statearr_43664;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43650){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43650);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43665){var ex__42370__auto__ = e43665;
var statearr_43666_44746 = state_43650;
(statearr_43666_44746[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43650[(4)]))){
var statearr_43667_44747 = state_43650;
(statearr_43667_44747[(1)] = cljs.core.first((state_43650[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44748 = state_43650;
state_43650 = G__44748;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43668 = f__42440__auto__();
(statearr_43668[(6)] = c__42439__auto___44725);

return statearr_43668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43670 = arguments.length;
switch (G__43670) {
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
var c__42439__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43732){
var state_val_43733 = (state_43732[(1)]);
if((state_val_43733 === (7))){
var inst_43728 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43734_44759 = state_43732__$1;
(statearr_43734_44759[(2)] = inst_43728);

(statearr_43734_44759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (20))){
var inst_43698 = (state_43732[(7)]);
var inst_43709 = (state_43732[(2)]);
var inst_43710 = cljs.core.next(inst_43698);
var inst_43684 = inst_43710;
var inst_43685 = null;
var inst_43686 = (0);
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43735 = state_43732;
(statearr_43735[(8)] = inst_43685);

(statearr_43735[(9)] = inst_43709);

(statearr_43735[(10)] = inst_43686);

(statearr_43735[(11)] = inst_43687);

(statearr_43735[(12)] = inst_43684);

return statearr_43735;
})();
var statearr_43736_44766 = state_43732__$1;
(statearr_43736_44766[(2)] = null);

(statearr_43736_44766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (1))){
var state_43732__$1 = state_43732;
var statearr_43737_44767 = state_43732__$1;
(statearr_43737_44767[(2)] = null);

(statearr_43737_44767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (4))){
var inst_43673 = (state_43732[(13)]);
var inst_43673__$1 = (state_43732[(2)]);
var inst_43674 = (inst_43673__$1 == null);
var state_43732__$1 = (function (){var statearr_43738 = state_43732;
(statearr_43738[(13)] = inst_43673__$1);

return statearr_43738;
})();
if(cljs.core.truth_(inst_43674)){
var statearr_43739_44768 = state_43732__$1;
(statearr_43739_44768[(1)] = (5));

} else {
var statearr_43740_44769 = state_43732__$1;
(statearr_43740_44769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (15))){
var state_43732__$1 = state_43732;
var statearr_43744_44770 = state_43732__$1;
(statearr_43744_44770[(2)] = null);

(statearr_43744_44770[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (21))){
var state_43732__$1 = state_43732;
var statearr_43745_44771 = state_43732__$1;
(statearr_43745_44771[(2)] = null);

(statearr_43745_44771[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (13))){
var inst_43685 = (state_43732[(8)]);
var inst_43686 = (state_43732[(10)]);
var inst_43687 = (state_43732[(11)]);
var inst_43684 = (state_43732[(12)]);
var inst_43694 = (state_43732[(2)]);
var inst_43695 = (inst_43687 + (1));
var tmp43741 = inst_43685;
var tmp43742 = inst_43686;
var tmp43743 = inst_43684;
var inst_43684__$1 = tmp43743;
var inst_43685__$1 = tmp43741;
var inst_43686__$1 = tmp43742;
var inst_43687__$1 = inst_43695;
var state_43732__$1 = (function (){var statearr_43746 = state_43732;
(statearr_43746[(8)] = inst_43685__$1);

(statearr_43746[(10)] = inst_43686__$1);

(statearr_43746[(11)] = inst_43687__$1);

(statearr_43746[(14)] = inst_43694);

(statearr_43746[(12)] = inst_43684__$1);

return statearr_43746;
})();
var statearr_43747_44772 = state_43732__$1;
(statearr_43747_44772[(2)] = null);

(statearr_43747_44772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (22))){
var state_43732__$1 = state_43732;
var statearr_43748_44773 = state_43732__$1;
(statearr_43748_44773[(2)] = null);

(statearr_43748_44773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (6))){
var inst_43673 = (state_43732[(13)]);
var inst_43682 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43673) : f.call(null,inst_43673));
var inst_43683 = cljs.core.seq(inst_43682);
var inst_43684 = inst_43683;
var inst_43685 = null;
var inst_43686 = (0);
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43749 = state_43732;
(statearr_43749[(8)] = inst_43685);

(statearr_43749[(10)] = inst_43686);

(statearr_43749[(11)] = inst_43687);

(statearr_43749[(12)] = inst_43684);

return statearr_43749;
})();
var statearr_43750_44774 = state_43732__$1;
(statearr_43750_44774[(2)] = null);

(statearr_43750_44774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (17))){
var inst_43698 = (state_43732[(7)]);
var inst_43702 = cljs.core.chunk_first(inst_43698);
var inst_43703 = cljs.core.chunk_rest(inst_43698);
var inst_43704 = cljs.core.count(inst_43702);
var inst_43684 = inst_43703;
var inst_43685 = inst_43702;
var inst_43686 = inst_43704;
var inst_43687 = (0);
var state_43732__$1 = (function (){var statearr_43751 = state_43732;
(statearr_43751[(8)] = inst_43685);

(statearr_43751[(10)] = inst_43686);

(statearr_43751[(11)] = inst_43687);

(statearr_43751[(12)] = inst_43684);

return statearr_43751;
})();
var statearr_43752_44781 = state_43732__$1;
(statearr_43752_44781[(2)] = null);

(statearr_43752_44781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (3))){
var inst_43730 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43732__$1,inst_43730);
} else {
if((state_val_43733 === (12))){
var inst_43718 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43753_44782 = state_43732__$1;
(statearr_43753_44782[(2)] = inst_43718);

(statearr_43753_44782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (2))){
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43732__$1,(4),in$);
} else {
if((state_val_43733 === (23))){
var inst_43726 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43754_44783 = state_43732__$1;
(statearr_43754_44783[(2)] = inst_43726);

(statearr_43754_44783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (19))){
var inst_43713 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43755_44784 = state_43732__$1;
(statearr_43755_44784[(2)] = inst_43713);

(statearr_43755_44784[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (11))){
var inst_43698 = (state_43732[(7)]);
var inst_43684 = (state_43732[(12)]);
var inst_43698__$1 = cljs.core.seq(inst_43684);
var state_43732__$1 = (function (){var statearr_43756 = state_43732;
(statearr_43756[(7)] = inst_43698__$1);

return statearr_43756;
})();
if(inst_43698__$1){
var statearr_43757_44785 = state_43732__$1;
(statearr_43757_44785[(1)] = (14));

} else {
var statearr_43758_44786 = state_43732__$1;
(statearr_43758_44786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (9))){
var inst_43720 = (state_43732[(2)]);
var inst_43721 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43732__$1 = (function (){var statearr_43759 = state_43732;
(statearr_43759[(15)] = inst_43720);

return statearr_43759;
})();
if(cljs.core.truth_(inst_43721)){
var statearr_43760_44787 = state_43732__$1;
(statearr_43760_44787[(1)] = (21));

} else {
var statearr_43761_44788 = state_43732__$1;
(statearr_43761_44788[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (5))){
var inst_43676 = cljs.core.async.close_BANG_(out);
var state_43732__$1 = state_43732;
var statearr_43762_44789 = state_43732__$1;
(statearr_43762_44789[(2)] = inst_43676);

(statearr_43762_44789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (14))){
var inst_43698 = (state_43732[(7)]);
var inst_43700 = cljs.core.chunked_seq_QMARK_(inst_43698);
var state_43732__$1 = state_43732;
if(inst_43700){
var statearr_43763_44790 = state_43732__$1;
(statearr_43763_44790[(1)] = (17));

} else {
var statearr_43764_44791 = state_43732__$1;
(statearr_43764_44791[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (16))){
var inst_43716 = (state_43732[(2)]);
var state_43732__$1 = state_43732;
var statearr_43765_44792 = state_43732__$1;
(statearr_43765_44792[(2)] = inst_43716);

(statearr_43765_44792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43733 === (10))){
var inst_43685 = (state_43732[(8)]);
var inst_43687 = (state_43732[(11)]);
var inst_43692 = cljs.core._nth(inst_43685,inst_43687);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43732__$1,(13),out,inst_43692);
} else {
if((state_val_43733 === (18))){
var inst_43698 = (state_43732[(7)]);
var inst_43707 = cljs.core.first(inst_43698);
var state_43732__$1 = state_43732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43732__$1,(20),out,inst_43707);
} else {
if((state_val_43733 === (8))){
var inst_43686 = (state_43732[(10)]);
var inst_43687 = (state_43732[(11)]);
var inst_43689 = (inst_43687 < inst_43686);
var inst_43690 = inst_43689;
var state_43732__$1 = state_43732;
if(cljs.core.truth_(inst_43690)){
var statearr_43766_44793 = state_43732__$1;
(statearr_43766_44793[(1)] = (10));

} else {
var statearr_43767_44794 = state_43732__$1;
(statearr_43767_44794[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____0 = (function (){
var statearr_43768 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43768[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__);

(statearr_43768[(1)] = (1));

return statearr_43768;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____1 = (function (state_43732){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43732);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43769){var ex__42370__auto__ = e43769;
var statearr_43770_44801 = state_43732;
(statearr_43770_44801[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43732[(4)]))){
var statearr_43771_44802 = state_43732;
(statearr_43771_44802[(1)] = cljs.core.first((state_43732[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44803 = state_43732;
state_43732 = G__44803;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__ = function(state_43732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____1.call(this,state_43732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42367__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43772 = f__42440__auto__();
(statearr_43772[(6)] = c__42439__auto__);

return statearr_43772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));

return c__42439__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43774 = arguments.length;
switch (G__43774) {
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
var G__43776 = arguments.length;
switch (G__43776) {
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
var G__43778 = arguments.length;
switch (G__43778) {
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
var c__42439__auto___44807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43802){
var state_val_43803 = (state_43802[(1)]);
if((state_val_43803 === (7))){
var inst_43797 = (state_43802[(2)]);
var state_43802__$1 = state_43802;
var statearr_43804_44814 = state_43802__$1;
(statearr_43804_44814[(2)] = inst_43797);

(statearr_43804_44814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (1))){
var inst_43779 = null;
var state_43802__$1 = (function (){var statearr_43805 = state_43802;
(statearr_43805[(7)] = inst_43779);

return statearr_43805;
})();
var statearr_43806_44815 = state_43802__$1;
(statearr_43806_44815[(2)] = null);

(statearr_43806_44815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (4))){
var inst_43782 = (state_43802[(8)]);
var inst_43782__$1 = (state_43802[(2)]);
var inst_43783 = (inst_43782__$1 == null);
var inst_43784 = cljs.core.not(inst_43783);
var state_43802__$1 = (function (){var statearr_43807 = state_43802;
(statearr_43807[(8)] = inst_43782__$1);

return statearr_43807;
})();
if(inst_43784){
var statearr_43808_44816 = state_43802__$1;
(statearr_43808_44816[(1)] = (5));

} else {
var statearr_43809_44817 = state_43802__$1;
(statearr_43809_44817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (6))){
var state_43802__$1 = state_43802;
var statearr_43810_44818 = state_43802__$1;
(statearr_43810_44818[(2)] = null);

(statearr_43810_44818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (3))){
var inst_43799 = (state_43802[(2)]);
var inst_43800 = cljs.core.async.close_BANG_(out);
var state_43802__$1 = (function (){var statearr_43811 = state_43802;
(statearr_43811[(9)] = inst_43799);

return statearr_43811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43802__$1,inst_43800);
} else {
if((state_val_43803 === (2))){
var state_43802__$1 = state_43802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43802__$1,(4),ch);
} else {
if((state_val_43803 === (11))){
var inst_43782 = (state_43802[(8)]);
var inst_43791 = (state_43802[(2)]);
var inst_43779 = inst_43782;
var state_43802__$1 = (function (){var statearr_43812 = state_43802;
(statearr_43812[(7)] = inst_43779);

(statearr_43812[(10)] = inst_43791);

return statearr_43812;
})();
var statearr_43813_44819 = state_43802__$1;
(statearr_43813_44819[(2)] = null);

(statearr_43813_44819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (9))){
var inst_43782 = (state_43802[(8)]);
var state_43802__$1 = state_43802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43802__$1,(11),out,inst_43782);
} else {
if((state_val_43803 === (5))){
var inst_43779 = (state_43802[(7)]);
var inst_43782 = (state_43802[(8)]);
var inst_43786 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43782,inst_43779);
var state_43802__$1 = state_43802;
if(inst_43786){
var statearr_43815_44820 = state_43802__$1;
(statearr_43815_44820[(1)] = (8));

} else {
var statearr_43816_44821 = state_43802__$1;
(statearr_43816_44821[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (10))){
var inst_43794 = (state_43802[(2)]);
var state_43802__$1 = state_43802;
var statearr_43817_44822 = state_43802__$1;
(statearr_43817_44822[(2)] = inst_43794);

(statearr_43817_44822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43803 === (8))){
var inst_43779 = (state_43802[(7)]);
var tmp43814 = inst_43779;
var inst_43779__$1 = tmp43814;
var state_43802__$1 = (function (){var statearr_43818 = state_43802;
(statearr_43818[(7)] = inst_43779__$1);

return statearr_43818;
})();
var statearr_43819_44823 = state_43802__$1;
(statearr_43819_44823[(2)] = null);

(statearr_43819_44823[(1)] = (2));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43820 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43820[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43820[(1)] = (1));

return statearr_43820;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43802){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43802);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43821){var ex__42370__auto__ = e43821;
var statearr_43822_44824 = state_43802;
(statearr_43822_44824[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43802[(4)]))){
var statearr_43823_44825 = state_43802;
(statearr_43823_44825[(1)] = cljs.core.first((state_43802[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44826 = state_43802;
state_43802 = G__44826;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43824 = f__42440__auto__();
(statearr_43824[(6)] = c__42439__auto___44807);

return statearr_43824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43826 = arguments.length;
switch (G__43826) {
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
var c__42439__auto___44828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43864){
var state_val_43865 = (state_43864[(1)]);
if((state_val_43865 === (7))){
var inst_43860 = (state_43864[(2)]);
var state_43864__$1 = state_43864;
var statearr_43866_44829 = state_43864__$1;
(statearr_43866_44829[(2)] = inst_43860);

(statearr_43866_44829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (1))){
var inst_43827 = (new Array(n));
var inst_43828 = inst_43827;
var inst_43829 = (0);
var state_43864__$1 = (function (){var statearr_43867 = state_43864;
(statearr_43867[(7)] = inst_43829);

(statearr_43867[(8)] = inst_43828);

return statearr_43867;
})();
var statearr_43868_44832 = state_43864__$1;
(statearr_43868_44832[(2)] = null);

(statearr_43868_44832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (4))){
var inst_43832 = (state_43864[(9)]);
var inst_43832__$1 = (state_43864[(2)]);
var inst_43833 = (inst_43832__$1 == null);
var inst_43834 = cljs.core.not(inst_43833);
var state_43864__$1 = (function (){var statearr_43869 = state_43864;
(statearr_43869[(9)] = inst_43832__$1);

return statearr_43869;
})();
if(inst_43834){
var statearr_43870_44833 = state_43864__$1;
(statearr_43870_44833[(1)] = (5));

} else {
var statearr_43871_44834 = state_43864__$1;
(statearr_43871_44834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (15))){
var inst_43854 = (state_43864[(2)]);
var state_43864__$1 = state_43864;
var statearr_43872_44835 = state_43864__$1;
(statearr_43872_44835[(2)] = inst_43854);

(statearr_43872_44835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (13))){
var state_43864__$1 = state_43864;
var statearr_43873_44836 = state_43864__$1;
(statearr_43873_44836[(2)] = null);

(statearr_43873_44836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (6))){
var inst_43829 = (state_43864[(7)]);
var inst_43850 = (inst_43829 > (0));
var state_43864__$1 = state_43864;
if(cljs.core.truth_(inst_43850)){
var statearr_43874_44837 = state_43864__$1;
(statearr_43874_44837[(1)] = (12));

} else {
var statearr_43875_44838 = state_43864__$1;
(statearr_43875_44838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (3))){
var inst_43862 = (state_43864[(2)]);
var state_43864__$1 = state_43864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43864__$1,inst_43862);
} else {
if((state_val_43865 === (12))){
var inst_43828 = (state_43864[(8)]);
var inst_43852 = cljs.core.vec(inst_43828);
var state_43864__$1 = state_43864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43864__$1,(15),out,inst_43852);
} else {
if((state_val_43865 === (2))){
var state_43864__$1 = state_43864;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43864__$1,(4),ch);
} else {
if((state_val_43865 === (11))){
var inst_43844 = (state_43864[(2)]);
var inst_43845 = (new Array(n));
var inst_43828 = inst_43845;
var inst_43829 = (0);
var state_43864__$1 = (function (){var statearr_43876 = state_43864;
(statearr_43876[(7)] = inst_43829);

(statearr_43876[(8)] = inst_43828);

(statearr_43876[(10)] = inst_43844);

return statearr_43876;
})();
var statearr_43877_44839 = state_43864__$1;
(statearr_43877_44839[(2)] = null);

(statearr_43877_44839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (9))){
var inst_43828 = (state_43864[(8)]);
var inst_43842 = cljs.core.vec(inst_43828);
var state_43864__$1 = state_43864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43864__$1,(11),out,inst_43842);
} else {
if((state_val_43865 === (5))){
var inst_43829 = (state_43864[(7)]);
var inst_43828 = (state_43864[(8)]);
var inst_43837 = (state_43864[(11)]);
var inst_43832 = (state_43864[(9)]);
var inst_43836 = (inst_43828[inst_43829] = inst_43832);
var inst_43837__$1 = (inst_43829 + (1));
var inst_43838 = (inst_43837__$1 < n);
var state_43864__$1 = (function (){var statearr_43878 = state_43864;
(statearr_43878[(11)] = inst_43837__$1);

(statearr_43878[(12)] = inst_43836);

return statearr_43878;
})();
if(cljs.core.truth_(inst_43838)){
var statearr_43879_44840 = state_43864__$1;
(statearr_43879_44840[(1)] = (8));

} else {
var statearr_43880_44841 = state_43864__$1;
(statearr_43880_44841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (14))){
var inst_43857 = (state_43864[(2)]);
var inst_43858 = cljs.core.async.close_BANG_(out);
var state_43864__$1 = (function (){var statearr_43882 = state_43864;
(statearr_43882[(13)] = inst_43857);

return statearr_43882;
})();
var statearr_43883_44842 = state_43864__$1;
(statearr_43883_44842[(2)] = inst_43858);

(statearr_43883_44842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (10))){
var inst_43848 = (state_43864[(2)]);
var state_43864__$1 = state_43864;
var statearr_43884_44843 = state_43864__$1;
(statearr_43884_44843[(2)] = inst_43848);

(statearr_43884_44843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43865 === (8))){
var inst_43828 = (state_43864[(8)]);
var inst_43837 = (state_43864[(11)]);
var tmp43881 = inst_43828;
var inst_43828__$1 = tmp43881;
var inst_43829 = inst_43837;
var state_43864__$1 = (function (){var statearr_43885 = state_43864;
(statearr_43885[(7)] = inst_43829);

(statearr_43885[(8)] = inst_43828__$1);

return statearr_43885;
})();
var statearr_43886_44844 = state_43864__$1;
(statearr_43886_44844[(2)] = null);

(statearr_43886_44844[(1)] = (2));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43887[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43887[(1)] = (1));

return statearr_43887;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43864){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43864);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43888){var ex__42370__auto__ = e43888;
var statearr_43889_44846 = state_43864;
(statearr_43889_44846[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43864[(4)]))){
var statearr_43890_44847 = state_43864;
(statearr_43890_44847[(1)] = cljs.core.first((state_43864[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44849 = state_43864;
state_43864 = G__44849;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43891 = f__42440__auto__();
(statearr_43891[(6)] = c__42439__auto___44828);

return statearr_43891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43893 = arguments.length;
switch (G__43893) {
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
var c__42439__auto___44851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42440__auto__ = (function (){var switch__42366__auto__ = (function (state_43935){
var state_val_43936 = (state_43935[(1)]);
if((state_val_43936 === (7))){
var inst_43931 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
var statearr_43937_44852 = state_43935__$1;
(statearr_43937_44852[(2)] = inst_43931);

(statearr_43937_44852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (1))){
var inst_43894 = [];
var inst_43895 = inst_43894;
var inst_43896 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43935__$1 = (function (){var statearr_43938 = state_43935;
(statearr_43938[(7)] = inst_43895);

(statearr_43938[(8)] = inst_43896);

return statearr_43938;
})();
var statearr_43939_44853 = state_43935__$1;
(statearr_43939_44853[(2)] = null);

(statearr_43939_44853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (4))){
var inst_43899 = (state_43935[(9)]);
var inst_43899__$1 = (state_43935[(2)]);
var inst_43900 = (inst_43899__$1 == null);
var inst_43901 = cljs.core.not(inst_43900);
var state_43935__$1 = (function (){var statearr_43940 = state_43935;
(statearr_43940[(9)] = inst_43899__$1);

return statearr_43940;
})();
if(inst_43901){
var statearr_43941_44854 = state_43935__$1;
(statearr_43941_44854[(1)] = (5));

} else {
var statearr_43942_44855 = state_43935__$1;
(statearr_43942_44855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (15))){
var inst_43925 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
var statearr_43943_44856 = state_43935__$1;
(statearr_43943_44856[(2)] = inst_43925);

(statearr_43943_44856[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (13))){
var state_43935__$1 = state_43935;
var statearr_43944_44857 = state_43935__$1;
(statearr_43944_44857[(2)] = null);

(statearr_43944_44857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (6))){
var inst_43895 = (state_43935[(7)]);
var inst_43920 = inst_43895.length;
var inst_43921 = (inst_43920 > (0));
var state_43935__$1 = state_43935;
if(cljs.core.truth_(inst_43921)){
var statearr_43945_44858 = state_43935__$1;
(statearr_43945_44858[(1)] = (12));

} else {
var statearr_43946_44859 = state_43935__$1;
(statearr_43946_44859[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (3))){
var inst_43933 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43935__$1,inst_43933);
} else {
if((state_val_43936 === (12))){
var inst_43895 = (state_43935[(7)]);
var inst_43923 = cljs.core.vec(inst_43895);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43935__$1,(15),out,inst_43923);
} else {
if((state_val_43936 === (2))){
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43935__$1,(4),ch);
} else {
if((state_val_43936 === (11))){
var inst_43903 = (state_43935[(10)]);
var inst_43899 = (state_43935[(9)]);
var inst_43913 = (state_43935[(2)]);
var inst_43914 = [];
var inst_43915 = inst_43914.push(inst_43899);
var inst_43895 = inst_43914;
var inst_43896 = inst_43903;
var state_43935__$1 = (function (){var statearr_43947 = state_43935;
(statearr_43947[(11)] = inst_43915);

(statearr_43947[(7)] = inst_43895);

(statearr_43947[(8)] = inst_43896);

(statearr_43947[(12)] = inst_43913);

return statearr_43947;
})();
var statearr_43948_44860 = state_43935__$1;
(statearr_43948_44860[(2)] = null);

(statearr_43948_44860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (9))){
var inst_43895 = (state_43935[(7)]);
var inst_43911 = cljs.core.vec(inst_43895);
var state_43935__$1 = state_43935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43935__$1,(11),out,inst_43911);
} else {
if((state_val_43936 === (5))){
var inst_43903 = (state_43935[(10)]);
var inst_43896 = (state_43935[(8)]);
var inst_43899 = (state_43935[(9)]);
var inst_43903__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43899) : f.call(null,inst_43899));
var inst_43904 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43903__$1,inst_43896);
var inst_43905 = cljs.core.keyword_identical_QMARK_(inst_43896,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43906 = ((inst_43904) || (inst_43905));
var state_43935__$1 = (function (){var statearr_43949 = state_43935;
(statearr_43949[(10)] = inst_43903__$1);

return statearr_43949;
})();
if(cljs.core.truth_(inst_43906)){
var statearr_43950_44867 = state_43935__$1;
(statearr_43950_44867[(1)] = (8));

} else {
var statearr_43951_44868 = state_43935__$1;
(statearr_43951_44868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (14))){
var inst_43928 = (state_43935[(2)]);
var inst_43929 = cljs.core.async.close_BANG_(out);
var state_43935__$1 = (function (){var statearr_43953 = state_43935;
(statearr_43953[(13)] = inst_43928);

return statearr_43953;
})();
var statearr_43954_44869 = state_43935__$1;
(statearr_43954_44869[(2)] = inst_43929);

(statearr_43954_44869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (10))){
var inst_43918 = (state_43935[(2)]);
var state_43935__$1 = state_43935;
var statearr_43955_44870 = state_43935__$1;
(statearr_43955_44870[(2)] = inst_43918);

(statearr_43955_44870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43936 === (8))){
var inst_43903 = (state_43935[(10)]);
var inst_43895 = (state_43935[(7)]);
var inst_43899 = (state_43935[(9)]);
var inst_43908 = inst_43895.push(inst_43899);
var tmp43952 = inst_43895;
var inst_43895__$1 = tmp43952;
var inst_43896 = inst_43903;
var state_43935__$1 = (function (){var statearr_43956 = state_43935;
(statearr_43956[(7)] = inst_43895__$1);

(statearr_43956[(8)] = inst_43896);

(statearr_43956[(14)] = inst_43908);

return statearr_43956;
})();
var statearr_43957_44872 = state_43935__$1;
(statearr_43957_44872[(2)] = null);

(statearr_43957_44872[(1)] = (2));


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
var cljs$core$async$state_machine__42367__auto__ = null;
var cljs$core$async$state_machine__42367__auto____0 = (function (){
var statearr_43958 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43958[(0)] = cljs$core$async$state_machine__42367__auto__);

(statearr_43958[(1)] = (1));

return statearr_43958;
});
var cljs$core$async$state_machine__42367__auto____1 = (function (state_43935){
while(true){
var ret_value__42368__auto__ = (function (){try{while(true){
var result__42369__auto__ = switch__42366__auto__(state_43935);
if(cljs.core.keyword_identical_QMARK_(result__42369__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42369__auto__;
}
break;
}
}catch (e43959){var ex__42370__auto__ = e43959;
var statearr_43960_44874 = state_43935;
(statearr_43960_44874[(2)] = ex__42370__auto__);


if(cljs.core.seq((state_43935[(4)]))){
var statearr_43961_44875 = state_43935;
(statearr_43961_44875[(1)] = cljs.core.first((state_43935[(4)])));

} else {
throw ex__42370__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42368__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44876 = state_43935;
state_43935 = G__44876;
continue;
} else {
return ret_value__42368__auto__;
}
break;
}
});
cljs$core$async$state_machine__42367__auto__ = function(state_43935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42367__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42367__auto____1.call(this,state_43935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42367__auto____0;
cljs$core$async$state_machine__42367__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42367__auto____1;
return cljs$core$async$state_machine__42367__auto__;
})()
})();
var state__42441__auto__ = (function (){var statearr_43962 = f__42440__auto__();
(statearr_43962[(6)] = c__42439__auto___44851);

return statearr_43962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42441__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
