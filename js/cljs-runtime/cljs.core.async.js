goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34833 = arguments.length;
switch (G__34833) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34834 = (function (f,blockable,meta34835){
this.f = f;
this.blockable = blockable;
this.meta34835 = meta34835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34836,meta34835__$1){
var self__ = this;
var _34836__$1 = this;
return (new cljs.core.async.t_cljs$core$async34834(self__.f,self__.blockable,meta34835__$1));
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34836){
var self__ = this;
var _34836__$1 = this;
return self__.meta34835;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34834.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34835","meta34835",783644828,null)], null);
}));

(cljs.core.async.t_cljs$core$async34834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34834");

(cljs.core.async.t_cljs$core$async34834.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34834.
 */
cljs.core.async.__GT_t_cljs$core$async34834 = (function cljs$core$async$__GT_t_cljs$core$async34834(f__$1,blockable__$1,meta34835){
return (new cljs.core.async.t_cljs$core$async34834(f__$1,blockable__$1,meta34835));
});

}

return (new cljs.core.async.t_cljs$core$async34834(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34840 = arguments.length;
switch (G__34840) {
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
var G__34847 = arguments.length;
switch (G__34847) {
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
var G__34853 = arguments.length;
switch (G__34853) {
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
var val_37140 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37140) : fn1.call(null,val_37140));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37140) : fn1.call(null,val_37140));
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
var G__34855 = arguments.length;
switch (G__34855) {
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
var n__4613__auto___37148 = n;
var x_37149 = (0);
while(true){
if((x_37149 < n__4613__auto___37148)){
(a[x_37149] = x_37149);

var G__37150 = (x_37149 + (1));
x_37149 = G__37150;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34863 = (function (flag,meta34864){
this.flag = flag;
this.meta34864 = meta34864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34865,meta34864__$1){
var self__ = this;
var _34865__$1 = this;
return (new cljs.core.async.t_cljs$core$async34863(self__.flag,meta34864__$1));
}));

(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34865){
var self__ = this;
var _34865__$1 = this;
return self__.meta34864;
}));

(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34864","meta34864",-1870053078,null)], null);
}));

(cljs.core.async.t_cljs$core$async34863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34863");

(cljs.core.async.t_cljs$core$async34863.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34863.
 */
cljs.core.async.__GT_t_cljs$core$async34863 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34863(flag__$1,meta34864){
return (new cljs.core.async.t_cljs$core$async34863(flag__$1,meta34864));
});

}

return (new cljs.core.async.t_cljs$core$async34863(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34871 = (function (flag,cb,meta34872){
this.flag = flag;
this.cb = cb;
this.meta34872 = meta34872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34873,meta34872__$1){
var self__ = this;
var _34873__$1 = this;
return (new cljs.core.async.t_cljs$core$async34871(self__.flag,self__.cb,meta34872__$1));
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34873){
var self__ = this;
var _34873__$1 = this;
return self__.meta34872;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34872","meta34872",1825908100,null)], null);
}));

(cljs.core.async.t_cljs$core$async34871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34871");

(cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34871.
 */
cljs.core.async.__GT_t_cljs$core$async34871 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34871(flag__$1,cb__$1,meta34872){
return (new cljs.core.async.t_cljs$core$async34871(flag__$1,cb__$1,meta34872));
});

}

return (new cljs.core.async.t_cljs$core$async34871(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34879_SHARP_){
var G__34881 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34879_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34881) : fret.call(null,G__34881));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34880_SHARP_){
var G__34882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34880_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34882) : fret.call(null,G__34882));
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
var G__37157 = (i + (1));
i = G__37157;
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
var len__4736__auto___37158 = arguments.length;
var i__4737__auto___37160 = (0);
while(true){
if((i__4737__auto___37160 < len__4736__auto___37158)){
args__4742__auto__.push((arguments[i__4737__auto___37160]));

var G__37161 = (i__4737__auto___37160 + (1));
i__4737__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34887){
var map__34888 = p__34887;
var map__34888__$1 = (((((!((map__34888 == null))))?(((((map__34888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34888):map__34888);
var opts = map__34888__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34884){
var G__34885 = cljs.core.first(seq34884);
var seq34884__$1 = cljs.core.next(seq34884);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34885,seq34884__$1);
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
var G__34895 = arguments.length;
switch (G__34895) {
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
var c__27543__auto___37167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_34940){
var state_val_34941 = (state_34940[(1)]);
if((state_val_34941 === (7))){
var inst_34932 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34943_37168 = state_34940__$1;
(statearr_34943_37168[(2)] = inst_34932);

(statearr_34943_37168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (1))){
var state_34940__$1 = state_34940;
var statearr_34944_37169 = state_34940__$1;
(statearr_34944_37169[(2)] = null);

(statearr_34944_37169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (4))){
var inst_34907 = (state_34940[(7)]);
var inst_34907__$1 = (state_34940[(2)]);
var inst_34911 = (inst_34907__$1 == null);
var state_34940__$1 = (function (){var statearr_34949 = state_34940;
(statearr_34949[(7)] = inst_34907__$1);

return statearr_34949;
})();
if(cljs.core.truth_(inst_34911)){
var statearr_34950_37171 = state_34940__$1;
(statearr_34950_37171[(1)] = (5));

} else {
var statearr_34951_37172 = state_34940__$1;
(statearr_34951_37172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (13))){
var state_34940__$1 = state_34940;
var statearr_34952_37173 = state_34940__$1;
(statearr_34952_37173[(2)] = null);

(statearr_34952_37173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (6))){
var inst_34907 = (state_34940[(7)]);
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34940__$1,(11),to,inst_34907);
} else {
if((state_val_34941 === (3))){
var inst_34934 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34940__$1,inst_34934);
} else {
if((state_val_34941 === (12))){
var state_34940__$1 = state_34940;
var statearr_34953_37174 = state_34940__$1;
(statearr_34953_37174[(2)] = null);

(statearr_34953_37174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (2))){
var state_34940__$1 = state_34940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34940__$1,(4),from);
} else {
if((state_val_34941 === (11))){
var inst_34923 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
if(cljs.core.truth_(inst_34923)){
var statearr_34954_37176 = state_34940__$1;
(statearr_34954_37176[(1)] = (12));

} else {
var statearr_34955_37177 = state_34940__$1;
(statearr_34955_37177[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (9))){
var state_34940__$1 = state_34940;
var statearr_34956_37178 = state_34940__$1;
(statearr_34956_37178[(2)] = null);

(statearr_34956_37178[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (5))){
var state_34940__$1 = state_34940;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34957_37179 = state_34940__$1;
(statearr_34957_37179[(1)] = (8));

} else {
var statearr_34958_37181 = state_34940__$1;
(statearr_34958_37181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (14))){
var inst_34930 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34959_37182 = state_34940__$1;
(statearr_34959_37182[(2)] = inst_34930);

(statearr_34959_37182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (10))){
var inst_34917 = (state_34940[(2)]);
var state_34940__$1 = state_34940;
var statearr_34960_37183 = state_34940__$1;
(statearr_34960_37183[(2)] = inst_34917);

(statearr_34960_37183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34941 === (8))){
var inst_34914 = cljs.core.async.close_BANG_(to);
var state_34940__$1 = state_34940;
var statearr_34961_37184 = state_34940__$1;
(statearr_34961_37184[(2)] = inst_34914);

(statearr_34961_37184[(1)] = (10));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_34963 = [null,null,null,null,null,null,null,null];
(statearr_34963[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_34963[(1)] = (1));

return statearr_34963;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_34940){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_34940);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e34964){var ex__27462__auto__ = e34964;
var statearr_34965_37185 = state_34940;
(statearr_34965_37185[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_34940[(4)]))){
var statearr_34966_37186 = state_34940;
(statearr_34966_37186[(1)] = cljs.core.first((state_34940[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37187 = state_34940;
state_34940 = G__37187;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_34940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_34940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_34969 = f__27544__auto__();
(statearr_34969[(6)] = c__27543__auto___37167);

return statearr_34969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var process = (function (p__34982){
var vec__34985 = p__34982;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34985,(1),null);
var job = vec__34985;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27543__auto___37194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_34992){
var state_val_34993 = (state_34992[(1)]);
if((state_val_34993 === (1))){
var state_34992__$1 = state_34992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34992__$1,(2),res,v);
} else {
if((state_val_34993 === (2))){
var inst_34989 = (state_34992[(2)]);
var inst_34990 = cljs.core.async.close_BANG_(res);
var state_34992__$1 = (function (){var statearr_35003 = state_34992;
(statearr_35003[(7)] = inst_34989);

return statearr_35003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34992__$1,inst_34990);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_35007 = [null,null,null,null,null,null,null,null];
(statearr_35007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__);

(statearr_35007[(1)] = (1));

return statearr_35007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1 = (function (state_34992){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_34992);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35008){var ex__27462__auto__ = e35008;
var statearr_35009_37199 = state_34992;
(statearr_35009_37199[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_34992[(4)]))){
var statearr_35013_37200 = state_34992;
(statearr_35013_37200[(1)] = cljs.core.first((state_34992[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37202 = state_34992;
state_34992 = G__37202;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = function(state_34992){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1.call(this,state_34992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35015 = f__27544__auto__();
(statearr_35015[(6)] = c__27543__auto___37194);

return statearr_35015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__35021){
var vec__35022 = p__35021;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35022,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35022,(1),null);
var job = vec__35022;
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
var n__4613__auto___37206 = n;
var __37207 = (0);
while(true){
if((__37207 < n__4613__auto___37206)){
var G__35030_37209 = type;
var G__35030_37210__$1 = (((G__35030_37209 instanceof cljs.core.Keyword))?G__35030_37209.fqn:null);
switch (G__35030_37210__$1) {
case "compute":
var c__27543__auto___37212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37207,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = ((function (__37207,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function (state_35044){
var state_val_35045 = (state_35044[(1)]);
if((state_val_35045 === (1))){
var state_35044__$1 = state_35044;
var statearr_35048_37218 = state_35044__$1;
(statearr_35048_37218[(2)] = null);

(statearr_35048_37218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (2))){
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35044__$1,(4),jobs);
} else {
if((state_val_35045 === (3))){
var inst_35042 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35044__$1,inst_35042);
} else {
if((state_val_35045 === (4))){
var inst_35033 = (state_35044[(2)]);
var inst_35034 = process(inst_35033);
var state_35044__$1 = state_35044;
if(cljs.core.truth_(inst_35034)){
var statearr_35053_37219 = state_35044__$1;
(statearr_35053_37219[(1)] = (5));

} else {
var statearr_35054_37220 = state_35044__$1;
(statearr_35054_37220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (5))){
var state_35044__$1 = state_35044;
var statearr_35055_37221 = state_35044__$1;
(statearr_35055_37221[(2)] = null);

(statearr_35055_37221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (6))){
var state_35044__$1 = state_35044;
var statearr_35058_37222 = state_35044__$1;
(statearr_35058_37222[(2)] = null);

(statearr_35058_37222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35045 === (7))){
var inst_35039 = (state_35044[(2)]);
var state_35044__$1 = state_35044;
var statearr_35061_37223 = state_35044__$1;
(statearr_35061_37223[(2)] = inst_35039);

(statearr_35061_37223[(1)] = (3));


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
});})(__37207,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
;
return ((function (__37207,switch__27458__auto__,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_35067 = [null,null,null,null,null,null,null];
(statearr_35067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__);

(statearr_35067[(1)] = (1));

return statearr_35067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1 = (function (state_35044){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35044);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35069){var ex__27462__auto__ = e35069;
var statearr_35070_37226 = state_35044;
(statearr_35070_37226[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35044[(4)]))){
var statearr_35071_37227 = state_35044;
(statearr_35071_37227[(1)] = cljs.core.first((state_35044[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37228 = state_35044;
state_35044 = G__37228;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = function(state_35044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1.call(this,state_35044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__;
})()
;})(__37207,switch__27458__auto__,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
})();
var state__27545__auto__ = (function (){var statearr_35076 = f__27544__auto__();
(statearr_35076[(6)] = c__27543__auto___37212);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
});})(__37207,c__27543__auto___37212,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
);


break;
case "async":
var c__27543__auto___37229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37207,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = ((function (__37207,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function (state_35089){
var state_val_35090 = (state_35089[(1)]);
if((state_val_35090 === (1))){
var state_35089__$1 = state_35089;
var statearr_35091_37230 = state_35089__$1;
(statearr_35091_37230[(2)] = null);

(statearr_35091_37230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (2))){
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35089__$1,(4),jobs);
} else {
if((state_val_35090 === (3))){
var inst_35087 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35089__$1,inst_35087);
} else {
if((state_val_35090 === (4))){
var inst_35079 = (state_35089[(2)]);
var inst_35080 = async(inst_35079);
var state_35089__$1 = state_35089;
if(cljs.core.truth_(inst_35080)){
var statearr_35093_37231 = state_35089__$1;
(statearr_35093_37231[(1)] = (5));

} else {
var statearr_35094_37232 = state_35089__$1;
(statearr_35094_37232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (5))){
var state_35089__$1 = state_35089;
var statearr_35095_37237 = state_35089__$1;
(statearr_35095_37237[(2)] = null);

(statearr_35095_37237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (6))){
var state_35089__$1 = state_35089;
var statearr_35096_37238 = state_35089__$1;
(statearr_35096_37238[(2)] = null);

(statearr_35096_37238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35090 === (7))){
var inst_35085 = (state_35089[(2)]);
var state_35089__$1 = state_35089;
var statearr_35097_37239 = state_35089__$1;
(statearr_35097_37239[(2)] = inst_35085);

(statearr_35097_37239[(1)] = (3));


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
});})(__37207,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
;
return ((function (__37207,switch__27458__auto__,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_35100 = [null,null,null,null,null,null,null];
(statearr_35100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__);

(statearr_35100[(1)] = (1));

return statearr_35100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1 = (function (state_35089){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35089);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35101){var ex__27462__auto__ = e35101;
var statearr_35102_37242 = state_35089;
(statearr_35102_37242[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35089[(4)]))){
var statearr_35103_37244 = state_35089;
(statearr_35103_37244[(1)] = cljs.core.first((state_35089[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37248 = state_35089;
state_35089 = G__37248;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = function(state_35089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1.call(this,state_35089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__;
})()
;})(__37207,switch__27458__auto__,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
})();
var state__27545__auto__ = (function (){var statearr_35104 = f__27544__auto__();
(statearr_35104[(6)] = c__27543__auto___37229);

return statearr_35104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
});})(__37207,c__27543__auto___37229,G__35030_37209,G__35030_37210__$1,n__4613__auto___37206,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35030_37210__$1)].join('')));

}

var G__37249 = (__37207 + (1));
__37207 = G__37249;
continue;
} else {
}
break;
}

var c__27543__auto___37250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35129){
var state_val_35130 = (state_35129[(1)]);
if((state_val_35130 === (7))){
var inst_35125 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
var statearr_35131_37251 = state_35129__$1;
(statearr_35131_37251[(2)] = inst_35125);

(statearr_35131_37251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (1))){
var state_35129__$1 = state_35129;
var statearr_35132_37252 = state_35129__$1;
(statearr_35132_37252[(2)] = null);

(statearr_35132_37252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (4))){
var inst_35108 = (state_35129[(7)]);
var inst_35108__$1 = (state_35129[(2)]);
var inst_35109 = (inst_35108__$1 == null);
var state_35129__$1 = (function (){var statearr_35133 = state_35129;
(statearr_35133[(7)] = inst_35108__$1);

return statearr_35133;
})();
if(cljs.core.truth_(inst_35109)){
var statearr_35134_37253 = state_35129__$1;
(statearr_35134_37253[(1)] = (5));

} else {
var statearr_35135_37254 = state_35129__$1;
(statearr_35135_37254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (6))){
var inst_35108 = (state_35129[(7)]);
var inst_35114 = (state_35129[(8)]);
var inst_35114__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35116 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35117 = [inst_35108,inst_35114__$1];
var inst_35118 = (new cljs.core.PersistentVector(null,2,(5),inst_35116,inst_35117,null));
var state_35129__$1 = (function (){var statearr_35140 = state_35129;
(statearr_35140[(8)] = inst_35114__$1);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35129__$1,(8),jobs,inst_35118);
} else {
if((state_val_35130 === (3))){
var inst_35127 = (state_35129[(2)]);
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35129__$1,inst_35127);
} else {
if((state_val_35130 === (2))){
var state_35129__$1 = state_35129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35129__$1,(4),from);
} else {
if((state_val_35130 === (9))){
var inst_35122 = (state_35129[(2)]);
var state_35129__$1 = (function (){var statearr_35155 = state_35129;
(statearr_35155[(9)] = inst_35122);

return statearr_35155;
})();
var statearr_35157_37255 = state_35129__$1;
(statearr_35157_37255[(2)] = null);

(statearr_35157_37255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (5))){
var inst_35111 = cljs.core.async.close_BANG_(jobs);
var state_35129__$1 = state_35129;
var statearr_35170_37257 = state_35129__$1;
(statearr_35170_37257[(2)] = inst_35111);

(statearr_35170_37257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35130 === (8))){
var inst_35114 = (state_35129[(8)]);
var inst_35120 = (state_35129[(2)]);
var state_35129__$1 = (function (){var statearr_35171 = state_35129;
(statearr_35171[(10)] = inst_35120);

return statearr_35171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35129__$1,(9),results,inst_35114);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_35172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35172[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__);

(statearr_35172[(1)] = (1));

return statearr_35172;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1 = (function (state_35129){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35129);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35174){var ex__27462__auto__ = e35174;
var statearr_35175_37258 = state_35129;
(statearr_35175_37258[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35129[(4)]))){
var statearr_35176_37259 = state_35129;
(statearr_35176_37259[(1)] = cljs.core.first((state_35129[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37260 = state_35129;
state_35129 = G__37260;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = function(state_35129){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1.call(this,state_35129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35177 = f__27544__auto__();
(statearr_35177[(6)] = c__27543__auto___37250);

return statearr_35177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


var c__27543__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35238){
var state_val_35243 = (state_35238[(1)]);
if((state_val_35243 === (7))){
var inst_35232 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35249_37263 = state_35238__$1;
(statearr_35249_37263[(2)] = inst_35232);

(statearr_35249_37263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (20))){
var state_35238__$1 = state_35238;
var statearr_35250_37268 = state_35238__$1;
(statearr_35250_37268[(2)] = null);

(statearr_35250_37268[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (1))){
var state_35238__$1 = state_35238;
var statearr_35255_37269 = state_35238__$1;
(statearr_35255_37269[(2)] = null);

(statearr_35255_37269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (4))){
var inst_35187 = (state_35238[(7)]);
var inst_35187__$1 = (state_35238[(2)]);
var inst_35188 = (inst_35187__$1 == null);
var state_35238__$1 = (function (){var statearr_35282 = state_35238;
(statearr_35282[(7)] = inst_35187__$1);

return statearr_35282;
})();
if(cljs.core.truth_(inst_35188)){
var statearr_35286_37270 = state_35238__$1;
(statearr_35286_37270[(1)] = (5));

} else {
var statearr_35291_37271 = state_35238__$1;
(statearr_35291_37271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (15))){
var inst_35201 = (state_35238[(8)]);
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35238__$1,(18),to,inst_35201);
} else {
if((state_val_35243 === (21))){
var inst_35226 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35300_37275 = state_35238__$1;
(statearr_35300_37275[(2)] = inst_35226);

(statearr_35300_37275[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (13))){
var inst_35228 = (state_35238[(2)]);
var state_35238__$1 = (function (){var statearr_35301 = state_35238;
(statearr_35301[(9)] = inst_35228);

return statearr_35301;
})();
var statearr_35302_37276 = state_35238__$1;
(statearr_35302_37276[(2)] = null);

(statearr_35302_37276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (6))){
var inst_35187 = (state_35238[(7)]);
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35238__$1,(11),inst_35187);
} else {
if((state_val_35243 === (17))){
var inst_35217 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
if(cljs.core.truth_(inst_35217)){
var statearr_35303_37277 = state_35238__$1;
(statearr_35303_37277[(1)] = (19));

} else {
var statearr_35304_37278 = state_35238__$1;
(statearr_35304_37278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (3))){
var inst_35234 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35238__$1,inst_35234);
} else {
if((state_val_35243 === (12))){
var inst_35198 = (state_35238[(10)]);
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35238__$1,(14),inst_35198);
} else {
if((state_val_35243 === (2))){
var state_35238__$1 = state_35238;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35238__$1,(4),results);
} else {
if((state_val_35243 === (19))){
var state_35238__$1 = state_35238;
var statearr_35306_37279 = state_35238__$1;
(statearr_35306_37279[(2)] = null);

(statearr_35306_37279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (11))){
var inst_35198 = (state_35238[(2)]);
var state_35238__$1 = (function (){var statearr_35307 = state_35238;
(statearr_35307[(10)] = inst_35198);

return statearr_35307;
})();
var statearr_35308_37280 = state_35238__$1;
(statearr_35308_37280[(2)] = null);

(statearr_35308_37280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (9))){
var state_35238__$1 = state_35238;
var statearr_35309_37281 = state_35238__$1;
(statearr_35309_37281[(2)] = null);

(statearr_35309_37281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (5))){
var state_35238__$1 = state_35238;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35310_37282 = state_35238__$1;
(statearr_35310_37282[(1)] = (8));

} else {
var statearr_35311_37283 = state_35238__$1;
(statearr_35311_37283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (14))){
var inst_35201 = (state_35238[(8)]);
var inst_35201__$1 = (state_35238[(2)]);
var inst_35209 = (inst_35201__$1 == null);
var inst_35210 = cljs.core.not(inst_35209);
var state_35238__$1 = (function (){var statearr_35312 = state_35238;
(statearr_35312[(8)] = inst_35201__$1);

return statearr_35312;
})();
if(inst_35210){
var statearr_35314_37284 = state_35238__$1;
(statearr_35314_37284[(1)] = (15));

} else {
var statearr_35315_37285 = state_35238__$1;
(statearr_35315_37285[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (16))){
var state_35238__$1 = state_35238;
var statearr_35318_37286 = state_35238__$1;
(statearr_35318_37286[(2)] = false);

(statearr_35318_37286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (10))){
var inst_35195 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35319_37287 = state_35238__$1;
(statearr_35319_37287[(2)] = inst_35195);

(statearr_35319_37287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (18))){
var inst_35214 = (state_35238[(2)]);
var state_35238__$1 = state_35238;
var statearr_35320_37288 = state_35238__$1;
(statearr_35320_37288[(2)] = inst_35214);

(statearr_35320_37288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35243 === (8))){
var inst_35192 = cljs.core.async.close_BANG_(to);
var state_35238__$1 = state_35238;
var statearr_35321_37289 = state_35238__$1;
(statearr_35321_37289[(2)] = inst_35192);

(statearr_35321_37289[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_35322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__);

(statearr_35322[(1)] = (1));

return statearr_35322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1 = (function (state_35238){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35238);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35323){var ex__27462__auto__ = e35323;
var statearr_35324_37290 = state_35238;
(statearr_35324_37290[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35238[(4)]))){
var statearr_35325_37291 = state_35238;
(statearr_35325_37291[(1)] = cljs.core.first((state_35238[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37292 = state_35238;
state_35238 = G__37292;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__ = function(state_35238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1.call(this,state_35238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35326 = f__27544__auto__();
(statearr_35326[(6)] = c__27543__auto__);

return statearr_35326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

return c__27543__auto__;
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
var G__35340 = arguments.length;
switch (G__35340) {
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
var G__35346 = arguments.length;
switch (G__35346) {
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
var G__35351 = arguments.length;
switch (G__35351) {
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
var c__27543__auto___37298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35389){
var state_val_35390 = (state_35389[(1)]);
if((state_val_35390 === (7))){
var inst_35385 = (state_35389[(2)]);
var state_35389__$1 = state_35389;
var statearr_35391_37299 = state_35389__$1;
(statearr_35391_37299[(2)] = inst_35385);

(statearr_35391_37299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (1))){
var state_35389__$1 = state_35389;
var statearr_35392_37300 = state_35389__$1;
(statearr_35392_37300[(2)] = null);

(statearr_35392_37300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (4))){
var inst_35366 = (state_35389[(7)]);
var inst_35366__$1 = (state_35389[(2)]);
var inst_35367 = (inst_35366__$1 == null);
var state_35389__$1 = (function (){var statearr_35393 = state_35389;
(statearr_35393[(7)] = inst_35366__$1);

return statearr_35393;
})();
if(cljs.core.truth_(inst_35367)){
var statearr_35394_37301 = state_35389__$1;
(statearr_35394_37301[(1)] = (5));

} else {
var statearr_35395_37302 = state_35389__$1;
(statearr_35395_37302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (13))){
var state_35389__$1 = state_35389;
var statearr_35396_37303 = state_35389__$1;
(statearr_35396_37303[(2)] = null);

(statearr_35396_37303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (6))){
var inst_35366 = (state_35389[(7)]);
var inst_35372 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35366) : p.call(null,inst_35366));
var state_35389__$1 = state_35389;
if(cljs.core.truth_(inst_35372)){
var statearr_35397_37304 = state_35389__$1;
(statearr_35397_37304[(1)] = (9));

} else {
var statearr_35398_37305 = state_35389__$1;
(statearr_35398_37305[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (3))){
var inst_35387 = (state_35389[(2)]);
var state_35389__$1 = state_35389;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35389__$1,inst_35387);
} else {
if((state_val_35390 === (12))){
var state_35389__$1 = state_35389;
var statearr_35399_37310 = state_35389__$1;
(statearr_35399_37310[(2)] = null);

(statearr_35399_37310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (2))){
var state_35389__$1 = state_35389;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35389__$1,(4),ch);
} else {
if((state_val_35390 === (11))){
var inst_35366 = (state_35389[(7)]);
var inst_35376 = (state_35389[(2)]);
var state_35389__$1 = state_35389;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35389__$1,(8),inst_35376,inst_35366);
} else {
if((state_val_35390 === (9))){
var state_35389__$1 = state_35389;
var statearr_35405_37314 = state_35389__$1;
(statearr_35405_37314[(2)] = tc);

(statearr_35405_37314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (5))){
var inst_35369 = cljs.core.async.close_BANG_(tc);
var inst_35370 = cljs.core.async.close_BANG_(fc);
var state_35389__$1 = (function (){var statearr_35406 = state_35389;
(statearr_35406[(8)] = inst_35369);

return statearr_35406;
})();
var statearr_35407_37315 = state_35389__$1;
(statearr_35407_37315[(2)] = inst_35370);

(statearr_35407_37315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (14))){
var inst_35383 = (state_35389[(2)]);
var state_35389__$1 = state_35389;
var statearr_35408_37316 = state_35389__$1;
(statearr_35408_37316[(2)] = inst_35383);

(statearr_35408_37316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (10))){
var state_35389__$1 = state_35389;
var statearr_35409_37320 = state_35389__$1;
(statearr_35409_37320[(2)] = fc);

(statearr_35409_37320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35390 === (8))){
var inst_35378 = (state_35389[(2)]);
var state_35389__$1 = state_35389;
if(cljs.core.truth_(inst_35378)){
var statearr_35410_37321 = state_35389__$1;
(statearr_35410_37321[(1)] = (12));

} else {
var statearr_35411_37322 = state_35389__$1;
(statearr_35411_37322[(1)] = (13));

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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_35412 = [null,null,null,null,null,null,null,null,null];
(statearr_35412[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_35412[(1)] = (1));

return statearr_35412;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_35389){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35389);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35413){var ex__27462__auto__ = e35413;
var statearr_35414_37326 = state_35389;
(statearr_35414_37326[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35389[(4)]))){
var statearr_35415_37327 = state_35389;
(statearr_35415_37327[(1)] = cljs.core.first((state_35389[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37328 = state_35389;
state_35389 = G__37328;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_35389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_35389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35416 = f__27544__auto__();
(statearr_35416[(6)] = c__27543__auto___37298);

return statearr_35416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var c__27543__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35438){
var state_val_35439 = (state_35438[(1)]);
if((state_val_35439 === (7))){
var inst_35434 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35440_37333 = state_35438__$1;
(statearr_35440_37333[(2)] = inst_35434);

(statearr_35440_37333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var inst_35417 = init;
var inst_35418 = inst_35417;
var state_35438__$1 = (function (){var statearr_35441 = state_35438;
(statearr_35441[(7)] = inst_35418);

return statearr_35441;
})();
var statearr_35442_37334 = state_35438__$1;
(statearr_35442_37334[(2)] = null);

(statearr_35442_37334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var inst_35421 = (state_35438[(8)]);
var inst_35421__$1 = (state_35438[(2)]);
var inst_35422 = (inst_35421__$1 == null);
var state_35438__$1 = (function (){var statearr_35443 = state_35438;
(statearr_35443[(8)] = inst_35421__$1);

return statearr_35443;
})();
if(cljs.core.truth_(inst_35422)){
var statearr_35444_37339 = state_35438__$1;
(statearr_35444_37339[(1)] = (5));

} else {
var statearr_35445_37340 = state_35438__$1;
(statearr_35445_37340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (6))){
var inst_35418 = (state_35438[(7)]);
var inst_35421 = (state_35438[(8)]);
var inst_35425 = (state_35438[(9)]);
var inst_35425__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35418,inst_35421) : f.call(null,inst_35418,inst_35421));
var inst_35426 = cljs.core.reduced_QMARK_(inst_35425__$1);
var state_35438__$1 = (function (){var statearr_35446 = state_35438;
(statearr_35446[(9)] = inst_35425__$1);

return statearr_35446;
})();
if(inst_35426){
var statearr_35447_37344 = state_35438__$1;
(statearr_35447_37344[(1)] = (8));

} else {
var statearr_35448_37345 = state_35438__$1;
(statearr_35448_37345[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (3))){
var inst_35436 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35438__$1,inst_35436);
} else {
if((state_val_35439 === (2))){
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35438__$1,(4),ch);
} else {
if((state_val_35439 === (9))){
var inst_35425 = (state_35438[(9)]);
var inst_35418 = inst_35425;
var state_35438__$1 = (function (){var statearr_35449 = state_35438;
(statearr_35449[(7)] = inst_35418);

return statearr_35449;
})();
var statearr_35450_37346 = state_35438__$1;
(statearr_35450_37346[(2)] = null);

(statearr_35450_37346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (5))){
var inst_35418 = (state_35438[(7)]);
var state_35438__$1 = state_35438;
var statearr_35451_37350 = state_35438__$1;
(statearr_35451_37350[(2)] = inst_35418);

(statearr_35451_37350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (10))){
var inst_35432 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35452_37351 = state_35438__$1;
(statearr_35452_37351[(2)] = inst_35432);

(statearr_35452_37351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (8))){
var inst_35425 = (state_35438[(9)]);
var inst_35428 = cljs.core.deref(inst_35425);
var state_35438__$1 = state_35438;
var statearr_35453_37352 = state_35438__$1;
(statearr_35453_37352[(2)] = inst_35428);

(statearr_35453_37352[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27459__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27459__auto____0 = (function (){
var statearr_35454 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35454[(0)] = cljs$core$async$reduce_$_state_machine__27459__auto__);

(statearr_35454[(1)] = (1));

return statearr_35454;
});
var cljs$core$async$reduce_$_state_machine__27459__auto____1 = (function (state_35438){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35438);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35455){var ex__27462__auto__ = e35455;
var statearr_35456_37356 = state_35438;
(statearr_35456_37356[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35438[(4)]))){
var statearr_35457_37357 = state_35438;
(statearr_35457_37357[(1)] = cljs.core.first((state_35438[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37358 = state_35438;
state_35438 = G__37358;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27459__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27459__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27459__auto____0;
cljs$core$async$reduce_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27459__auto____1;
return cljs$core$async$reduce_$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35458 = f__27544__auto__();
(statearr_35458[(6)] = c__27543__auto__);

return statearr_35458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

return c__27543__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27543__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35464){
var state_val_35465 = (state_35464[(1)]);
if((state_val_35465 === (1))){
var inst_35459 = cljs.core.async.reduce(f__$1,init,ch);
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35464__$1,(2),inst_35459);
} else {
if((state_val_35465 === (2))){
var inst_35461 = (state_35464[(2)]);
var inst_35462 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35461) : f__$1.call(null,inst_35461));
var state_35464__$1 = state_35464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35464__$1,inst_35462);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27459__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27459__auto____0 = (function (){
var statearr_35466 = [null,null,null,null,null,null,null];
(statearr_35466[(0)] = cljs$core$async$transduce_$_state_machine__27459__auto__);

(statearr_35466[(1)] = (1));

return statearr_35466;
});
var cljs$core$async$transduce_$_state_machine__27459__auto____1 = (function (state_35464){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35464);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35467){var ex__27462__auto__ = e35467;
var statearr_35468_37365 = state_35464;
(statearr_35468_37365[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35464[(4)]))){
var statearr_35469_37366 = state_35464;
(statearr_35469_37366[(1)] = cljs.core.first((state_35464[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37367 = state_35464;
state_35464 = G__37367;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27459__auto__ = function(state_35464){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27459__auto____1.call(this,state_35464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27459__auto____0;
cljs$core$async$transduce_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27459__auto____1;
return cljs$core$async$transduce_$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35470 = f__27544__auto__();
(statearr_35470[(6)] = c__27543__auto__);

return statearr_35470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

return c__27543__auto__;
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
var G__35472 = arguments.length;
switch (G__35472) {
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
var c__27543__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35498){
var state_val_35499 = (state_35498[(1)]);
if((state_val_35499 === (7))){
var inst_35480 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35500_37370 = state_35498__$1;
(statearr_35500_37370[(2)] = inst_35480);

(statearr_35500_37370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (1))){
var inst_35474 = cljs.core.seq(coll);
var inst_35475 = inst_35474;
var state_35498__$1 = (function (){var statearr_35503 = state_35498;
(statearr_35503[(7)] = inst_35475);

return statearr_35503;
})();
var statearr_35504_37375 = state_35498__$1;
(statearr_35504_37375[(2)] = null);

(statearr_35504_37375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (4))){
var inst_35475 = (state_35498[(7)]);
var inst_35478 = cljs.core.first(inst_35475);
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35498__$1,(7),ch,inst_35478);
} else {
if((state_val_35499 === (13))){
var inst_35492 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35505_37376 = state_35498__$1;
(statearr_35505_37376[(2)] = inst_35492);

(statearr_35505_37376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (6))){
var inst_35483 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
if(cljs.core.truth_(inst_35483)){
var statearr_35506_37377 = state_35498__$1;
(statearr_35506_37377[(1)] = (8));

} else {
var statearr_35507_37378 = state_35498__$1;
(statearr_35507_37378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (3))){
var inst_35496 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35498__$1,inst_35496);
} else {
if((state_val_35499 === (12))){
var state_35498__$1 = state_35498;
var statearr_35509_37379 = state_35498__$1;
(statearr_35509_37379[(2)] = null);

(statearr_35509_37379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (2))){
var inst_35475 = (state_35498[(7)]);
var state_35498__$1 = state_35498;
if(cljs.core.truth_(inst_35475)){
var statearr_35511_37380 = state_35498__$1;
(statearr_35511_37380[(1)] = (4));

} else {
var statearr_35512_37381 = state_35498__$1;
(statearr_35512_37381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (11))){
var inst_35489 = cljs.core.async.close_BANG_(ch);
var state_35498__$1 = state_35498;
var statearr_35513_37382 = state_35498__$1;
(statearr_35513_37382[(2)] = inst_35489);

(statearr_35513_37382[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (9))){
var state_35498__$1 = state_35498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35514_37383 = state_35498__$1;
(statearr_35514_37383[(1)] = (11));

} else {
var statearr_35515_37384 = state_35498__$1;
(statearr_35515_37384[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (5))){
var inst_35475 = (state_35498[(7)]);
var state_35498__$1 = state_35498;
var statearr_35517_37385 = state_35498__$1;
(statearr_35517_37385[(2)] = inst_35475);

(statearr_35517_37385[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (10))){
var inst_35494 = (state_35498[(2)]);
var state_35498__$1 = state_35498;
var statearr_35518_37386 = state_35498__$1;
(statearr_35518_37386[(2)] = inst_35494);

(statearr_35518_37386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35499 === (8))){
var inst_35475 = (state_35498[(7)]);
var inst_35485 = cljs.core.next(inst_35475);
var inst_35475__$1 = inst_35485;
var state_35498__$1 = (function (){var statearr_35519 = state_35498;
(statearr_35519[(7)] = inst_35475__$1);

return statearr_35519;
})();
var statearr_35520_37387 = state_35498__$1;
(statearr_35520_37387[(2)] = null);

(statearr_35520_37387[(1)] = (2));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_35523 = [null,null,null,null,null,null,null,null];
(statearr_35523[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_35523[(1)] = (1));

return statearr_35523;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_35498){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35498);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35525){var ex__27462__auto__ = e35525;
var statearr_35526_37388 = state_35498;
(statearr_35526_37388[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35498[(4)]))){
var statearr_35527_37389 = state_35498;
(statearr_35527_37389[(1)] = cljs.core.first((state_35498[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37390 = state_35498;
state_35498 = G__37390;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_35498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_35498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35528 = f__27544__auto__();
(statearr_35528[(6)] = c__27543__auto__);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

return c__27543__auto__;
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
var G__35531 = arguments.length;
switch (G__35531) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_37392 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_37392(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37393 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_37393(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37408 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_37408(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37421 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_37421(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35556 = (function (ch,cs,meta35557){
this.ch = ch;
this.cs = cs;
this.meta35557 = meta35557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35558,meta35557__$1){
var self__ = this;
var _35558__$1 = this;
return (new cljs.core.async.t_cljs$core$async35556(self__.ch,self__.cs,meta35557__$1));
}));

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35558){
var self__ = this;
var _35558__$1 = this;
return self__.meta35557;
}));

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35556.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35557","meta35557",1742675323,null)], null);
}));

(cljs.core.async.t_cljs$core$async35556.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35556");

(cljs.core.async.t_cljs$core$async35556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35556");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35556.
 */
cljs.core.async.__GT_t_cljs$core$async35556 = (function cljs$core$async$mult_$___GT_t_cljs$core$async35556(ch__$1,cs__$1,meta35557){
return (new cljs.core.async.t_cljs$core$async35556(ch__$1,cs__$1,meta35557));
});

}

return (new cljs.core.async.t_cljs$core$async35556(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27543__auto___37445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_35692){
var state_val_35693 = (state_35692[(1)]);
if((state_val_35693 === (7))){
var inst_35688 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35694_37446 = state_35692__$1;
(statearr_35694_37446[(2)] = inst_35688);

(statearr_35694_37446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (20))){
var inst_35592 = (state_35692[(7)]);
var inst_35604 = cljs.core.first(inst_35592);
var inst_35605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35604,(0),null);
var inst_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35604,(1),null);
var state_35692__$1 = (function (){var statearr_35695 = state_35692;
(statearr_35695[(8)] = inst_35605);

return statearr_35695;
})();
if(cljs.core.truth_(inst_35606)){
var statearr_35696_37449 = state_35692__$1;
(statearr_35696_37449[(1)] = (22));

} else {
var statearr_35697_37450 = state_35692__$1;
(statearr_35697_37450[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (27))){
var inst_35641 = (state_35692[(9)]);
var inst_35636 = (state_35692[(10)]);
var inst_35634 = (state_35692[(11)]);
var inst_35561 = (state_35692[(12)]);
var inst_35641__$1 = cljs.core._nth(inst_35634,inst_35636);
var inst_35642 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35641__$1,inst_35561,done);
var state_35692__$1 = (function (){var statearr_35698 = state_35692;
(statearr_35698[(9)] = inst_35641__$1);

return statearr_35698;
})();
if(cljs.core.truth_(inst_35642)){
var statearr_35699_37456 = state_35692__$1;
(statearr_35699_37456[(1)] = (30));

} else {
var statearr_35700_37457 = state_35692__$1;
(statearr_35700_37457[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (1))){
var state_35692__$1 = state_35692;
var statearr_35701_37458 = state_35692__$1;
(statearr_35701_37458[(2)] = null);

(statearr_35701_37458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (24))){
var inst_35592 = (state_35692[(7)]);
var inst_35611 = (state_35692[(2)]);
var inst_35612 = cljs.core.next(inst_35592);
var inst_35570 = inst_35612;
var inst_35571 = null;
var inst_35572 = (0);
var inst_35573 = (0);
var state_35692__$1 = (function (){var statearr_35702 = state_35692;
(statearr_35702[(13)] = inst_35571);

(statearr_35702[(14)] = inst_35573);

(statearr_35702[(15)] = inst_35572);

(statearr_35702[(16)] = inst_35611);

(statearr_35702[(17)] = inst_35570);

return statearr_35702;
})();
var statearr_35703_37463 = state_35692__$1;
(statearr_35703_37463[(2)] = null);

(statearr_35703_37463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (39))){
var state_35692__$1 = state_35692;
var statearr_35707_37464 = state_35692__$1;
(statearr_35707_37464[(2)] = null);

(statearr_35707_37464[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (4))){
var inst_35561 = (state_35692[(12)]);
var inst_35561__$1 = (state_35692[(2)]);
var inst_35562 = (inst_35561__$1 == null);
var state_35692__$1 = (function (){var statearr_35708 = state_35692;
(statearr_35708[(12)] = inst_35561__$1);

return statearr_35708;
})();
if(cljs.core.truth_(inst_35562)){
var statearr_35709_37468 = state_35692__$1;
(statearr_35709_37468[(1)] = (5));

} else {
var statearr_35710_37476 = state_35692__$1;
(statearr_35710_37476[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (15))){
var inst_35571 = (state_35692[(13)]);
var inst_35573 = (state_35692[(14)]);
var inst_35572 = (state_35692[(15)]);
var inst_35570 = (state_35692[(17)]);
var inst_35588 = (state_35692[(2)]);
var inst_35589 = (inst_35573 + (1));
var tmp35704 = inst_35571;
var tmp35705 = inst_35572;
var tmp35706 = inst_35570;
var inst_35570__$1 = tmp35706;
var inst_35571__$1 = tmp35704;
var inst_35572__$1 = tmp35705;
var inst_35573__$1 = inst_35589;
var state_35692__$1 = (function (){var statearr_35711 = state_35692;
(statearr_35711[(13)] = inst_35571__$1);

(statearr_35711[(14)] = inst_35573__$1);

(statearr_35711[(15)] = inst_35572__$1);

(statearr_35711[(17)] = inst_35570__$1);

(statearr_35711[(18)] = inst_35588);

return statearr_35711;
})();
var statearr_35712_37483 = state_35692__$1;
(statearr_35712_37483[(2)] = null);

(statearr_35712_37483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (21))){
var inst_35615 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35716_37484 = state_35692__$1;
(statearr_35716_37484[(2)] = inst_35615);

(statearr_35716_37484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (31))){
var inst_35641 = (state_35692[(9)]);
var inst_35645 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35641);
var state_35692__$1 = state_35692;
var statearr_35717_37485 = state_35692__$1;
(statearr_35717_37485[(2)] = inst_35645);

(statearr_35717_37485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (32))){
var inst_35636 = (state_35692[(10)]);
var inst_35635 = (state_35692[(19)]);
var inst_35634 = (state_35692[(11)]);
var inst_35633 = (state_35692[(20)]);
var inst_35647 = (state_35692[(2)]);
var inst_35648 = (inst_35636 + (1));
var tmp35713 = inst_35635;
var tmp35714 = inst_35634;
var tmp35715 = inst_35633;
var inst_35633__$1 = tmp35715;
var inst_35634__$1 = tmp35714;
var inst_35635__$1 = tmp35713;
var inst_35636__$1 = inst_35648;
var state_35692__$1 = (function (){var statearr_35720 = state_35692;
(statearr_35720[(10)] = inst_35636__$1);

(statearr_35720[(19)] = inst_35635__$1);

(statearr_35720[(11)] = inst_35634__$1);

(statearr_35720[(21)] = inst_35647);

(statearr_35720[(20)] = inst_35633__$1);

return statearr_35720;
})();
var statearr_35721_37486 = state_35692__$1;
(statearr_35721_37486[(2)] = null);

(statearr_35721_37486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (40))){
var inst_35660 = (state_35692[(22)]);
var inst_35664 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_35660);
var state_35692__$1 = state_35692;
var statearr_35722_37487 = state_35692__$1;
(statearr_35722_37487[(2)] = inst_35664);

(statearr_35722_37487[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (33))){
var inst_35651 = (state_35692[(23)]);
var inst_35653 = cljs.core.chunked_seq_QMARK_(inst_35651);
var state_35692__$1 = state_35692;
if(inst_35653){
var statearr_35724_37488 = state_35692__$1;
(statearr_35724_37488[(1)] = (36));

} else {
var statearr_35725_37489 = state_35692__$1;
(statearr_35725_37489[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (13))){
var inst_35582 = (state_35692[(24)]);
var inst_35585 = cljs.core.async.close_BANG_(inst_35582);
var state_35692__$1 = state_35692;
var statearr_35727_37490 = state_35692__$1;
(statearr_35727_37490[(2)] = inst_35585);

(statearr_35727_37490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (22))){
var inst_35605 = (state_35692[(8)]);
var inst_35608 = cljs.core.async.close_BANG_(inst_35605);
var state_35692__$1 = state_35692;
var statearr_35728_37491 = state_35692__$1;
(statearr_35728_37491[(2)] = inst_35608);

(statearr_35728_37491[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (36))){
var inst_35651 = (state_35692[(23)]);
var inst_35655 = cljs.core.chunk_first(inst_35651);
var inst_35656 = cljs.core.chunk_rest(inst_35651);
var inst_35657 = cljs.core.count(inst_35655);
var inst_35633 = inst_35656;
var inst_35634 = inst_35655;
var inst_35635 = inst_35657;
var inst_35636 = (0);
var state_35692__$1 = (function (){var statearr_35731 = state_35692;
(statearr_35731[(10)] = inst_35636);

(statearr_35731[(19)] = inst_35635);

(statearr_35731[(11)] = inst_35634);

(statearr_35731[(20)] = inst_35633);

return statearr_35731;
})();
var statearr_35733_37492 = state_35692__$1;
(statearr_35733_37492[(2)] = null);

(statearr_35733_37492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (41))){
var inst_35651 = (state_35692[(23)]);
var inst_35666 = (state_35692[(2)]);
var inst_35667 = cljs.core.next(inst_35651);
var inst_35633 = inst_35667;
var inst_35634 = null;
var inst_35635 = (0);
var inst_35636 = (0);
var state_35692__$1 = (function (){var statearr_35734 = state_35692;
(statearr_35734[(10)] = inst_35636);

(statearr_35734[(19)] = inst_35635);

(statearr_35734[(25)] = inst_35666);

(statearr_35734[(11)] = inst_35634);

(statearr_35734[(20)] = inst_35633);

return statearr_35734;
})();
var statearr_35737_37493 = state_35692__$1;
(statearr_35737_37493[(2)] = null);

(statearr_35737_37493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (43))){
var state_35692__$1 = state_35692;
var statearr_35739_37494 = state_35692__$1;
(statearr_35739_37494[(2)] = null);

(statearr_35739_37494[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (29))){
var inst_35675 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35740_37495 = state_35692__$1;
(statearr_35740_37495[(2)] = inst_35675);

(statearr_35740_37495[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (44))){
var inst_35685 = (state_35692[(2)]);
var state_35692__$1 = (function (){var statearr_35741 = state_35692;
(statearr_35741[(26)] = inst_35685);

return statearr_35741;
})();
var statearr_35742_37496 = state_35692__$1;
(statearr_35742_37496[(2)] = null);

(statearr_35742_37496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (6))){
var inst_35625 = (state_35692[(27)]);
var inst_35624 = cljs.core.deref(cs);
var inst_35625__$1 = cljs.core.keys(inst_35624);
var inst_35626 = cljs.core.count(inst_35625__$1);
var inst_35627 = cljs.core.reset_BANG_(dctr,inst_35626);
var inst_35632 = cljs.core.seq(inst_35625__$1);
var inst_35633 = inst_35632;
var inst_35634 = null;
var inst_35635 = (0);
var inst_35636 = (0);
var state_35692__$1 = (function (){var statearr_35746 = state_35692;
(statearr_35746[(28)] = inst_35627);

(statearr_35746[(10)] = inst_35636);

(statearr_35746[(19)] = inst_35635);

(statearr_35746[(27)] = inst_35625__$1);

(statearr_35746[(11)] = inst_35634);

(statearr_35746[(20)] = inst_35633);

return statearr_35746;
})();
var statearr_35747_37503 = state_35692__$1;
(statearr_35747_37503[(2)] = null);

(statearr_35747_37503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (28))){
var inst_35633 = (state_35692[(20)]);
var inst_35651 = (state_35692[(23)]);
var inst_35651__$1 = cljs.core.seq(inst_35633);
var state_35692__$1 = (function (){var statearr_35748 = state_35692;
(statearr_35748[(23)] = inst_35651__$1);

return statearr_35748;
})();
if(inst_35651__$1){
var statearr_35750_37504 = state_35692__$1;
(statearr_35750_37504[(1)] = (33));

} else {
var statearr_35752_37505 = state_35692__$1;
(statearr_35752_37505[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (25))){
var inst_35636 = (state_35692[(10)]);
var inst_35635 = (state_35692[(19)]);
var inst_35638 = (inst_35636 < inst_35635);
var inst_35639 = inst_35638;
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35639)){
var statearr_35754_37506 = state_35692__$1;
(statearr_35754_37506[(1)] = (27));

} else {
var statearr_35763_37507 = state_35692__$1;
(statearr_35763_37507[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (34))){
var state_35692__$1 = state_35692;
var statearr_35764_37508 = state_35692__$1;
(statearr_35764_37508[(2)] = null);

(statearr_35764_37508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (17))){
var state_35692__$1 = state_35692;
var statearr_35765_37509 = state_35692__$1;
(statearr_35765_37509[(2)] = null);

(statearr_35765_37509[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (3))){
var inst_35690 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35692__$1,inst_35690);
} else {
if((state_val_35693 === (12))){
var inst_35620 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35767_37510 = state_35692__$1;
(statearr_35767_37510[(2)] = inst_35620);

(statearr_35767_37510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (2))){
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35692__$1,(4),ch);
} else {
if((state_val_35693 === (23))){
var state_35692__$1 = state_35692;
var statearr_35768_37511 = state_35692__$1;
(statearr_35768_37511[(2)] = null);

(statearr_35768_37511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (35))){
var inst_35673 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35769_37512 = state_35692__$1;
(statearr_35769_37512[(2)] = inst_35673);

(statearr_35769_37512[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (19))){
var inst_35592 = (state_35692[(7)]);
var inst_35596 = cljs.core.chunk_first(inst_35592);
var inst_35597 = cljs.core.chunk_rest(inst_35592);
var inst_35598 = cljs.core.count(inst_35596);
var inst_35570 = inst_35597;
var inst_35571 = inst_35596;
var inst_35572 = inst_35598;
var inst_35573 = (0);
var state_35692__$1 = (function (){var statearr_35770 = state_35692;
(statearr_35770[(13)] = inst_35571);

(statearr_35770[(14)] = inst_35573);

(statearr_35770[(15)] = inst_35572);

(statearr_35770[(17)] = inst_35570);

return statearr_35770;
})();
var statearr_35771_37513 = state_35692__$1;
(statearr_35771_37513[(2)] = null);

(statearr_35771_37513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (11))){
var inst_35592 = (state_35692[(7)]);
var inst_35570 = (state_35692[(17)]);
var inst_35592__$1 = cljs.core.seq(inst_35570);
var state_35692__$1 = (function (){var statearr_35772 = state_35692;
(statearr_35772[(7)] = inst_35592__$1);

return statearr_35772;
})();
if(inst_35592__$1){
var statearr_35774_37514 = state_35692__$1;
(statearr_35774_37514[(1)] = (16));

} else {
var statearr_35775_37515 = state_35692__$1;
(statearr_35775_37515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (9))){
var inst_35622 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35776_37516 = state_35692__$1;
(statearr_35776_37516[(2)] = inst_35622);

(statearr_35776_37516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (5))){
var inst_35568 = cljs.core.deref(cs);
var inst_35569 = cljs.core.seq(inst_35568);
var inst_35570 = inst_35569;
var inst_35571 = null;
var inst_35572 = (0);
var inst_35573 = (0);
var state_35692__$1 = (function (){var statearr_35782 = state_35692;
(statearr_35782[(13)] = inst_35571);

(statearr_35782[(14)] = inst_35573);

(statearr_35782[(15)] = inst_35572);

(statearr_35782[(17)] = inst_35570);

return statearr_35782;
})();
var statearr_35783_37523 = state_35692__$1;
(statearr_35783_37523[(2)] = null);

(statearr_35783_37523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (14))){
var state_35692__$1 = state_35692;
var statearr_35785_37524 = state_35692__$1;
(statearr_35785_37524[(2)] = null);

(statearr_35785_37524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (45))){
var inst_35682 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35786_37525 = state_35692__$1;
(statearr_35786_37525[(2)] = inst_35682);

(statearr_35786_37525[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (26))){
var inst_35625 = (state_35692[(27)]);
var inst_35677 = (state_35692[(2)]);
var inst_35678 = cljs.core.seq(inst_35625);
var state_35692__$1 = (function (){var statearr_35789 = state_35692;
(statearr_35789[(29)] = inst_35677);

return statearr_35789;
})();
if(inst_35678){
var statearr_35790_37526 = state_35692__$1;
(statearr_35790_37526[(1)] = (42));

} else {
var statearr_35791_37527 = state_35692__$1;
(statearr_35791_37527[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (16))){
var inst_35592 = (state_35692[(7)]);
var inst_35594 = cljs.core.chunked_seq_QMARK_(inst_35592);
var state_35692__$1 = state_35692;
if(inst_35594){
var statearr_35792_37528 = state_35692__$1;
(statearr_35792_37528[(1)] = (19));

} else {
var statearr_35793_37529 = state_35692__$1;
(statearr_35793_37529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (38))){
var inst_35670 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35794_37530 = state_35692__$1;
(statearr_35794_37530[(2)] = inst_35670);

(statearr_35794_37530[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (30))){
var state_35692__$1 = state_35692;
var statearr_35795_37531 = state_35692__$1;
(statearr_35795_37531[(2)] = null);

(statearr_35795_37531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (10))){
var inst_35571 = (state_35692[(13)]);
var inst_35573 = (state_35692[(14)]);
var inst_35581 = cljs.core._nth(inst_35571,inst_35573);
var inst_35582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35581,(0),null);
var inst_35583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35581,(1),null);
var state_35692__$1 = (function (){var statearr_35800 = state_35692;
(statearr_35800[(24)] = inst_35582);

return statearr_35800;
})();
if(cljs.core.truth_(inst_35583)){
var statearr_35801_37532 = state_35692__$1;
(statearr_35801_37532[(1)] = (13));

} else {
var statearr_35802_37533 = state_35692__$1;
(statearr_35802_37533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (18))){
var inst_35618 = (state_35692[(2)]);
var state_35692__$1 = state_35692;
var statearr_35804_37534 = state_35692__$1;
(statearr_35804_37534[(2)] = inst_35618);

(statearr_35804_37534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (42))){
var state_35692__$1 = state_35692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35692__$1,(45),dchan);
} else {
if((state_val_35693 === (37))){
var inst_35660 = (state_35692[(22)]);
var inst_35561 = (state_35692[(12)]);
var inst_35651 = (state_35692[(23)]);
var inst_35660__$1 = cljs.core.first(inst_35651);
var inst_35661 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35660__$1,inst_35561,done);
var state_35692__$1 = (function (){var statearr_35809 = state_35692;
(statearr_35809[(22)] = inst_35660__$1);

return statearr_35809;
})();
if(cljs.core.truth_(inst_35661)){
var statearr_35811_37535 = state_35692__$1;
(statearr_35811_37535[(1)] = (39));

} else {
var statearr_35812_37536 = state_35692__$1;
(statearr_35812_37536[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35693 === (8))){
var inst_35573 = (state_35692[(14)]);
var inst_35572 = (state_35692[(15)]);
var inst_35575 = (inst_35573 < inst_35572);
var inst_35576 = inst_35575;
var state_35692__$1 = state_35692;
if(cljs.core.truth_(inst_35576)){
var statearr_35813_37537 = state_35692__$1;
(statearr_35813_37537[(1)] = (10));

} else {
var statearr_35814_37538 = state_35692__$1;
(statearr_35814_37538[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27459__auto__ = null;
var cljs$core$async$mult_$_state_machine__27459__auto____0 = (function (){
var statearr_35815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35815[(0)] = cljs$core$async$mult_$_state_machine__27459__auto__);

(statearr_35815[(1)] = (1));

return statearr_35815;
});
var cljs$core$async$mult_$_state_machine__27459__auto____1 = (function (state_35692){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_35692);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e35817){var ex__27462__auto__ = e35817;
var statearr_35818_37545 = state_35692;
(statearr_35818_37545[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_35692[(4)]))){
var statearr_35819_37546 = state_35692;
(statearr_35819_37546[(1)] = cljs.core.first((state_35692[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37547 = state_35692;
state_35692 = G__37547;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27459__auto__ = function(state_35692){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27459__auto____1.call(this,state_35692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27459__auto____0;
cljs$core$async$mult_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27459__auto____1;
return cljs$core$async$mult_$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_35825 = f__27544__auto__();
(statearr_35825[(6)] = c__27543__auto___37445);

return statearr_35825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var G__35829 = arguments.length;
switch (G__35829) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_37550 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_37550(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_37558 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_37558(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_37562 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_37562(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_37563 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_37563(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_37564 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_37564(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37565 = arguments.length;
var i__4737__auto___37566 = (0);
while(true){
if((i__4737__auto___37566 < len__4736__auto___37565)){
args__4742__auto__.push((arguments[i__4737__auto___37566]));

var G__37567 = (i__4737__auto___37566 + (1));
i__4737__auto___37566 = G__37567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35860){
var map__35861 = p__35860;
var map__35861__$1 = (((((!((map__35861 == null))))?(((((map__35861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35861):map__35861);
var opts = map__35861__$1;
var statearr_35863_37568 = state;
(statearr_35863_37568[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35865_37569 = state;
(statearr_35865_37569[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35866_37570 = state;
(statearr_35866_37570[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35856){
var G__35857 = cljs.core.first(seq35856);
var seq35856__$1 = cljs.core.next(seq35856);
var G__35858 = cljs.core.first(seq35856__$1);
var seq35856__$2 = cljs.core.next(seq35856__$1);
var G__35859 = cljs.core.first(seq35856__$2);
var seq35856__$3 = cljs.core.next(seq35856__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35857,G__35858,G__35859,seq35856__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35880 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35880 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35881){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35881 = meta35881;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35882,meta35881__$1){
var self__ = this;
var _35882__$1 = this;
return (new cljs.core.async.t_cljs$core$async35880(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35881__$1));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35882){
var self__ = this;
var _35882__$1 = this;
return self__.meta35881;
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35880.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35881","meta35881",394316022,null)], null);
}));

(cljs.core.async.t_cljs$core$async35880.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35880.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35880");

(cljs.core.async.t_cljs$core$async35880.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35880");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35880.
 */
cljs.core.async.__GT_t_cljs$core$async35880 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35880(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35881){
return (new cljs.core.async.t_cljs$core$async35880(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35881));
});

}

return (new cljs.core.async.t_cljs$core$async35880(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27543__auto___37579 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36017){
var state_val_36019 = (state_36017[(1)]);
if((state_val_36019 === (7))){
var inst_35909 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
var statearr_36020_37583 = state_36017__$1;
(statearr_36020_37583[(2)] = inst_35909);

(statearr_36020_37583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (20))){
var inst_35921 = (state_36017[(7)]);
var state_36017__$1 = state_36017;
var statearr_36022_37584 = state_36017__$1;
(statearr_36022_37584[(2)] = inst_35921);

(statearr_36022_37584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (27))){
var state_36017__$1 = state_36017;
var statearr_36023_37585 = state_36017__$1;
(statearr_36023_37585[(2)] = null);

(statearr_36023_37585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (1))){
var inst_35896 = (state_36017[(8)]);
var inst_35896__$1 = calc_state();
var inst_35898 = (inst_35896__$1 == null);
var inst_35899 = cljs.core.not(inst_35898);
var state_36017__$1 = (function (){var statearr_36024 = state_36017;
(statearr_36024[(8)] = inst_35896__$1);

return statearr_36024;
})();
if(inst_35899){
var statearr_36025_37588 = state_36017__$1;
(statearr_36025_37588[(1)] = (2));

} else {
var statearr_36026_37589 = state_36017__$1;
(statearr_36026_37589[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (24))){
var inst_35957 = (state_36017[(9)]);
var inst_35970 = (state_36017[(10)]);
var inst_35990 = (state_36017[(11)]);
var inst_35990__$1 = (inst_35957.cljs$core$IFn$_invoke$arity$1 ? inst_35957.cljs$core$IFn$_invoke$arity$1(inst_35970) : inst_35957.call(null,inst_35970));
var state_36017__$1 = (function (){var statearr_36027 = state_36017;
(statearr_36027[(11)] = inst_35990__$1);

return statearr_36027;
})();
if(cljs.core.truth_(inst_35990__$1)){
var statearr_36029_37590 = state_36017__$1;
(statearr_36029_37590[(1)] = (29));

} else {
var statearr_36030_37591 = state_36017__$1;
(statearr_36030_37591[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (4))){
var inst_35912 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35912)){
var statearr_36031_37593 = state_36017__$1;
(statearr_36031_37593[(1)] = (8));

} else {
var statearr_36032_37594 = state_36017__$1;
(statearr_36032_37594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (15))){
var inst_35947 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35947)){
var statearr_36033_37596 = state_36017__$1;
(statearr_36033_37596[(1)] = (19));

} else {
var statearr_36034_37597 = state_36017__$1;
(statearr_36034_37597[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (21))){
var inst_35956 = (state_36017[(12)]);
var inst_35956__$1 = (state_36017[(2)]);
var inst_35957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35956__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36017__$1 = (function (){var statearr_36035 = state_36017;
(statearr_36035[(12)] = inst_35956__$1);

(statearr_36035[(13)] = inst_35958);

(statearr_36035[(9)] = inst_35957);

return statearr_36035;
})();
return cljs.core.async.ioc_alts_BANG_(state_36017__$1,(22),inst_35959);
} else {
if((state_val_36019 === (31))){
var inst_35998 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35998)){
var statearr_36041_37601 = state_36017__$1;
(statearr_36041_37601[(1)] = (32));

} else {
var statearr_36046_37602 = state_36017__$1;
(statearr_36046_37602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (32))){
var inst_35965 = (state_36017[(14)]);
var state_36017__$1 = state_36017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36017__$1,(35),out,inst_35965);
} else {
if((state_val_36019 === (33))){
var inst_35956 = (state_36017[(12)]);
var inst_35921 = inst_35956;
var state_36017__$1 = (function (){var statearr_36051 = state_36017;
(statearr_36051[(7)] = inst_35921);

return statearr_36051;
})();
var statearr_36052_37603 = state_36017__$1;
(statearr_36052_37603[(2)] = null);

(statearr_36052_37603[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (13))){
var inst_35921 = (state_36017[(7)]);
var inst_35936 = inst_35921.cljs$lang$protocol_mask$partition0$;
var inst_35937 = (inst_35936 & (64));
var inst_35938 = inst_35921.cljs$core$ISeq$;
var inst_35939 = (cljs.core.PROTOCOL_SENTINEL === inst_35938);
var inst_35940 = ((inst_35937) || (inst_35939));
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35940)){
var statearr_36061_37604 = state_36017__$1;
(statearr_36061_37604[(1)] = (16));

} else {
var statearr_36062_37605 = state_36017__$1;
(statearr_36062_37605[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (22))){
var inst_35965 = (state_36017[(14)]);
var inst_35970 = (state_36017[(10)]);
var inst_35964 = (state_36017[(2)]);
var inst_35965__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35964,(0),null);
var inst_35970__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35964,(1),null);
var inst_35976 = (inst_35965__$1 == null);
var inst_35977 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35970__$1,change);
var inst_35978 = ((inst_35976) || (inst_35977));
var state_36017__$1 = (function (){var statearr_36064 = state_36017;
(statearr_36064[(14)] = inst_35965__$1);

(statearr_36064[(10)] = inst_35970__$1);

return statearr_36064;
})();
if(cljs.core.truth_(inst_35978)){
var statearr_36065_37606 = state_36017__$1;
(statearr_36065_37606[(1)] = (23));

} else {
var statearr_36066_37607 = state_36017__$1;
(statearr_36066_37607[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (36))){
var inst_35956 = (state_36017[(12)]);
var inst_35921 = inst_35956;
var state_36017__$1 = (function (){var statearr_36067 = state_36017;
(statearr_36067[(7)] = inst_35921);

return statearr_36067;
})();
var statearr_36068_37608 = state_36017__$1;
(statearr_36068_37608[(2)] = null);

(statearr_36068_37608[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (29))){
var inst_35990 = (state_36017[(11)]);
var state_36017__$1 = state_36017;
var statearr_36069_37609 = state_36017__$1;
(statearr_36069_37609[(2)] = inst_35990);

(statearr_36069_37609[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (6))){
var state_36017__$1 = state_36017;
var statearr_36071_37610 = state_36017__$1;
(statearr_36071_37610[(2)] = false);

(statearr_36071_37610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (28))){
var inst_35985 = (state_36017[(2)]);
var inst_35986 = calc_state();
var inst_35921 = inst_35986;
var state_36017__$1 = (function (){var statearr_36072 = state_36017;
(statearr_36072[(7)] = inst_35921);

(statearr_36072[(15)] = inst_35985);

return statearr_36072;
})();
var statearr_36073_37612 = state_36017__$1;
(statearr_36073_37612[(2)] = null);

(statearr_36073_37612[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (25))){
var inst_36013 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
var statearr_36074_37614 = state_36017__$1;
(statearr_36074_37614[(2)] = inst_36013);

(statearr_36074_37614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (34))){
var inst_36011 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
var statearr_36075_37615 = state_36017__$1;
(statearr_36075_37615[(2)] = inst_36011);

(statearr_36075_37615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (17))){
var state_36017__$1 = state_36017;
var statearr_36076_37616 = state_36017__$1;
(statearr_36076_37616[(2)] = false);

(statearr_36076_37616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (3))){
var state_36017__$1 = state_36017;
var statearr_36078_37617 = state_36017__$1;
(statearr_36078_37617[(2)] = false);

(statearr_36078_37617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (12))){
var inst_36015 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36017__$1,inst_36015);
} else {
if((state_val_36019 === (2))){
var inst_35896 = (state_36017[(8)]);
var inst_35901 = inst_35896.cljs$lang$protocol_mask$partition0$;
var inst_35902 = (inst_35901 & (64));
var inst_35903 = inst_35896.cljs$core$ISeq$;
var inst_35904 = (cljs.core.PROTOCOL_SENTINEL === inst_35903);
var inst_35905 = ((inst_35902) || (inst_35904));
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35905)){
var statearr_36079_37618 = state_36017__$1;
(statearr_36079_37618[(1)] = (5));

} else {
var statearr_36080_37619 = state_36017__$1;
(statearr_36080_37619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (23))){
var inst_35965 = (state_36017[(14)]);
var inst_35980 = (inst_35965 == null);
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_35980)){
var statearr_36081_37620 = state_36017__$1;
(statearr_36081_37620[(1)] = (26));

} else {
var statearr_36082_37621 = state_36017__$1;
(statearr_36082_37621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (35))){
var inst_36001 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
if(cljs.core.truth_(inst_36001)){
var statearr_36083_37622 = state_36017__$1;
(statearr_36083_37622[(1)] = (36));

} else {
var statearr_36084_37623 = state_36017__$1;
(statearr_36084_37623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (19))){
var inst_35921 = (state_36017[(7)]);
var inst_35949 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35921);
var state_36017__$1 = state_36017;
var statearr_36085_37624 = state_36017__$1;
(statearr_36085_37624[(2)] = inst_35949);

(statearr_36085_37624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (11))){
var inst_35921 = (state_36017[(7)]);
var inst_35929 = (inst_35921 == null);
var inst_35930 = cljs.core.not(inst_35929);
var state_36017__$1 = state_36017;
if(inst_35930){
var statearr_36087_37628 = state_36017__$1;
(statearr_36087_37628[(1)] = (13));

} else {
var statearr_36088_37629 = state_36017__$1;
(statearr_36088_37629[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (9))){
var inst_35896 = (state_36017[(8)]);
var state_36017__$1 = state_36017;
var statearr_36089_37630 = state_36017__$1;
(statearr_36089_37630[(2)] = inst_35896);

(statearr_36089_37630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (5))){
var state_36017__$1 = state_36017;
var statearr_36090_37631 = state_36017__$1;
(statearr_36090_37631[(2)] = true);

(statearr_36090_37631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (14))){
var state_36017__$1 = state_36017;
var statearr_36091_37632 = state_36017__$1;
(statearr_36091_37632[(2)] = false);

(statearr_36091_37632[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (26))){
var inst_35970 = (state_36017[(10)]);
var inst_35982 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35970);
var state_36017__$1 = state_36017;
var statearr_36092_37633 = state_36017__$1;
(statearr_36092_37633[(2)] = inst_35982);

(statearr_36092_37633[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (16))){
var state_36017__$1 = state_36017;
var statearr_36094_37634 = state_36017__$1;
(statearr_36094_37634[(2)] = true);

(statearr_36094_37634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (38))){
var inst_36007 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
var statearr_36095_37635 = state_36017__$1;
(statearr_36095_37635[(2)] = inst_36007);

(statearr_36095_37635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (30))){
var inst_35958 = (state_36017[(13)]);
var inst_35957 = (state_36017[(9)]);
var inst_35970 = (state_36017[(10)]);
var inst_35993 = cljs.core.empty_QMARK_(inst_35957);
var inst_35994 = (inst_35958.cljs$core$IFn$_invoke$arity$1 ? inst_35958.cljs$core$IFn$_invoke$arity$1(inst_35970) : inst_35958.call(null,inst_35970));
var inst_35995 = cljs.core.not(inst_35994);
var inst_35996 = ((inst_35993) && (inst_35995));
var state_36017__$1 = state_36017;
var statearr_36096_37637 = state_36017__$1;
(statearr_36096_37637[(2)] = inst_35996);

(statearr_36096_37637[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (10))){
var inst_35896 = (state_36017[(8)]);
var inst_35917 = (state_36017[(2)]);
var inst_35918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35917,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35917,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35917,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35921 = inst_35896;
var state_36017__$1 = (function (){var statearr_36097 = state_36017;
(statearr_36097[(7)] = inst_35921);

(statearr_36097[(16)] = inst_35920);

(statearr_36097[(17)] = inst_35918);

(statearr_36097[(18)] = inst_35919);

return statearr_36097;
})();
var statearr_36099_37638 = state_36017__$1;
(statearr_36099_37638[(2)] = null);

(statearr_36099_37638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (18))){
var inst_35944 = (state_36017[(2)]);
var state_36017__$1 = state_36017;
var statearr_36100_37643 = state_36017__$1;
(statearr_36100_37643[(2)] = inst_35944);

(statearr_36100_37643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (37))){
var state_36017__$1 = state_36017;
var statearr_36101_37647 = state_36017__$1;
(statearr_36101_37647[(2)] = null);

(statearr_36101_37647[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36019 === (8))){
var inst_35896 = (state_36017[(8)]);
var inst_35914 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35896);
var state_36017__$1 = state_36017;
var statearr_36102_37652 = state_36017__$1;
(statearr_36102_37652[(2)] = inst_35914);

(statearr_36102_37652[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__27459__auto__ = null;
var cljs$core$async$mix_$_state_machine__27459__auto____0 = (function (){
var statearr_36103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36103[(0)] = cljs$core$async$mix_$_state_machine__27459__auto__);

(statearr_36103[(1)] = (1));

return statearr_36103;
});
var cljs$core$async$mix_$_state_machine__27459__auto____1 = (function (state_36017){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36017);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36105){var ex__27462__auto__ = e36105;
var statearr_36106_37659 = state_36017;
(statearr_36106_37659[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36017[(4)]))){
var statearr_36107_37660 = state_36017;
(statearr_36107_37660[(1)] = cljs.core.first((state_36017[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37661 = state_36017;
state_36017 = G__37661;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27459__auto__ = function(state_36017){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27459__auto____1.call(this,state_36017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27459__auto____0;
cljs$core$async$mix_$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27459__auto____1;
return cljs$core$async$mix_$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36108 = f__27544__auto__();
(statearr_36108[(6)] = c__27543__auto___37579);

return statearr_36108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_37669 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_37669(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37677 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_37677(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37694 = (function() {
var G__37695 = null;
var G__37695__1 = (function (p){
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
var G__37695__2 = (function (p,v){
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
G__37695 = function(p,v){
switch(arguments.length){
case 1:
return G__37695__1.call(this,p);
case 2:
return G__37695__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37695.cljs$core$IFn$_invoke$arity$1 = G__37695__1;
G__37695.cljs$core$IFn$_invoke$arity$2 = G__37695__2;
return G__37695;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36113 = arguments.length;
switch (G__36113) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37694(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37694(p,v);
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
var G__36118 = arguments.length;
switch (G__36118) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36115_SHARP_){
if(cljs.core.truth_((p1__36115_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36115_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36115_SHARP_.call(null,topic)))){
return p1__36115_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36115_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36119 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36120){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36120 = meta36120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36121,meta36120__$1){
var self__ = this;
var _36121__$1 = this;
return (new cljs.core.async.t_cljs$core$async36119(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36120__$1));
}));

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36121){
var self__ = this;
var _36121__$1 = this;
return self__.meta36120;
}));

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36120","meta36120",-533505213,null)], null);
}));

(cljs.core.async.t_cljs$core$async36119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36119");

(cljs.core.async.t_cljs$core$async36119.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36119.
 */
cljs.core.async.__GT_t_cljs$core$async36119 = (function cljs$core$async$__GT_t_cljs$core$async36119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36120){
return (new cljs.core.async.t_cljs$core$async36119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36120));
});

}

return (new cljs.core.async.t_cljs$core$async36119(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27543__auto___37719 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36196){
var state_val_36197 = (state_36196[(1)]);
if((state_val_36197 === (7))){
var inst_36192 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36199_37720 = state_36196__$1;
(statearr_36199_37720[(2)] = inst_36192);

(statearr_36199_37720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (20))){
var state_36196__$1 = state_36196;
var statearr_36200_37721 = state_36196__$1;
(statearr_36200_37721[(2)] = null);

(statearr_36200_37721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (1))){
var state_36196__$1 = state_36196;
var statearr_36201_37722 = state_36196__$1;
(statearr_36201_37722[(2)] = null);

(statearr_36201_37722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (24))){
var inst_36175 = (state_36196[(7)]);
var inst_36184 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36175);
var state_36196__$1 = state_36196;
var statearr_36202_37723 = state_36196__$1;
(statearr_36202_37723[(2)] = inst_36184);

(statearr_36202_37723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (4))){
var inst_36126 = (state_36196[(8)]);
var inst_36126__$1 = (state_36196[(2)]);
var inst_36127 = (inst_36126__$1 == null);
var state_36196__$1 = (function (){var statearr_36203 = state_36196;
(statearr_36203[(8)] = inst_36126__$1);

return statearr_36203;
})();
if(cljs.core.truth_(inst_36127)){
var statearr_36204_37724 = state_36196__$1;
(statearr_36204_37724[(1)] = (5));

} else {
var statearr_36205_37725 = state_36196__$1;
(statearr_36205_37725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (15))){
var inst_36169 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36206_37726 = state_36196__$1;
(statearr_36206_37726[(2)] = inst_36169);

(statearr_36206_37726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (21))){
var inst_36189 = (state_36196[(2)]);
var state_36196__$1 = (function (){var statearr_36208 = state_36196;
(statearr_36208[(9)] = inst_36189);

return statearr_36208;
})();
var statearr_36209_37727 = state_36196__$1;
(statearr_36209_37727[(2)] = null);

(statearr_36209_37727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (13))){
var inst_36151 = (state_36196[(10)]);
var inst_36153 = cljs.core.chunked_seq_QMARK_(inst_36151);
var state_36196__$1 = state_36196;
if(inst_36153){
var statearr_36210_37728 = state_36196__$1;
(statearr_36210_37728[(1)] = (16));

} else {
var statearr_36211_37729 = state_36196__$1;
(statearr_36211_37729[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (22))){
var inst_36181 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
if(cljs.core.truth_(inst_36181)){
var statearr_36212_37730 = state_36196__$1;
(statearr_36212_37730[(1)] = (23));

} else {
var statearr_36213_37731 = state_36196__$1;
(statearr_36213_37731[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (6))){
var inst_36175 = (state_36196[(7)]);
var inst_36126 = (state_36196[(8)]);
var inst_36177 = (state_36196[(11)]);
var inst_36175__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36126) : topic_fn.call(null,inst_36126));
var inst_36176 = cljs.core.deref(mults);
var inst_36177__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36176,inst_36175__$1);
var state_36196__$1 = (function (){var statearr_36214 = state_36196;
(statearr_36214[(7)] = inst_36175__$1);

(statearr_36214[(11)] = inst_36177__$1);

return statearr_36214;
})();
if(cljs.core.truth_(inst_36177__$1)){
var statearr_36215_37732 = state_36196__$1;
(statearr_36215_37732[(1)] = (19));

} else {
var statearr_36216_37733 = state_36196__$1;
(statearr_36216_37733[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (25))){
var inst_36186 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36218_37734 = state_36196__$1;
(statearr_36218_37734[(2)] = inst_36186);

(statearr_36218_37734[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (17))){
var inst_36151 = (state_36196[(10)]);
var inst_36160 = cljs.core.first(inst_36151);
var inst_36161 = cljs.core.async.muxch_STAR_(inst_36160);
var inst_36162 = cljs.core.async.close_BANG_(inst_36161);
var inst_36163 = cljs.core.next(inst_36151);
var inst_36136 = inst_36163;
var inst_36137 = null;
var inst_36138 = (0);
var inst_36139 = (0);
var state_36196__$1 = (function (){var statearr_36219 = state_36196;
(statearr_36219[(12)] = inst_36138);

(statearr_36219[(13)] = inst_36137);

(statearr_36219[(14)] = inst_36139);

(statearr_36219[(15)] = inst_36162);

(statearr_36219[(16)] = inst_36136);

return statearr_36219;
})();
var statearr_36220_37739 = state_36196__$1;
(statearr_36220_37739[(2)] = null);

(statearr_36220_37739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (3))){
var inst_36194 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36196__$1,inst_36194);
} else {
if((state_val_36197 === (12))){
var inst_36171 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36221_37743 = state_36196__$1;
(statearr_36221_37743[(2)] = inst_36171);

(statearr_36221_37743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (2))){
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36196__$1,(4),ch);
} else {
if((state_val_36197 === (23))){
var state_36196__$1 = state_36196;
var statearr_36223_37744 = state_36196__$1;
(statearr_36223_37744[(2)] = null);

(statearr_36223_37744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (19))){
var inst_36126 = (state_36196[(8)]);
var inst_36177 = (state_36196[(11)]);
var inst_36179 = cljs.core.async.muxch_STAR_(inst_36177);
var state_36196__$1 = state_36196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36196__$1,(22),inst_36179,inst_36126);
} else {
if((state_val_36197 === (11))){
var inst_36136 = (state_36196[(16)]);
var inst_36151 = (state_36196[(10)]);
var inst_36151__$1 = cljs.core.seq(inst_36136);
var state_36196__$1 = (function (){var statearr_36224 = state_36196;
(statearr_36224[(10)] = inst_36151__$1);

return statearr_36224;
})();
if(inst_36151__$1){
var statearr_36225_37745 = state_36196__$1;
(statearr_36225_37745[(1)] = (13));

} else {
var statearr_36226_37746 = state_36196__$1;
(statearr_36226_37746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (9))){
var inst_36173 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36227_37747 = state_36196__$1;
(statearr_36227_37747[(2)] = inst_36173);

(statearr_36227_37747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (5))){
var inst_36133 = cljs.core.deref(mults);
var inst_36134 = cljs.core.vals(inst_36133);
var inst_36135 = cljs.core.seq(inst_36134);
var inst_36136 = inst_36135;
var inst_36137 = null;
var inst_36138 = (0);
var inst_36139 = (0);
var state_36196__$1 = (function (){var statearr_36228 = state_36196;
(statearr_36228[(12)] = inst_36138);

(statearr_36228[(13)] = inst_36137);

(statearr_36228[(14)] = inst_36139);

(statearr_36228[(16)] = inst_36136);

return statearr_36228;
})();
var statearr_36229_37765 = state_36196__$1;
(statearr_36229_37765[(2)] = null);

(statearr_36229_37765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (14))){
var state_36196__$1 = state_36196;
var statearr_36234_37766 = state_36196__$1;
(statearr_36234_37766[(2)] = null);

(statearr_36234_37766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (16))){
var inst_36151 = (state_36196[(10)]);
var inst_36155 = cljs.core.chunk_first(inst_36151);
var inst_36156 = cljs.core.chunk_rest(inst_36151);
var inst_36157 = cljs.core.count(inst_36155);
var inst_36136 = inst_36156;
var inst_36137 = inst_36155;
var inst_36138 = inst_36157;
var inst_36139 = (0);
var state_36196__$1 = (function (){var statearr_36235 = state_36196;
(statearr_36235[(12)] = inst_36138);

(statearr_36235[(13)] = inst_36137);

(statearr_36235[(14)] = inst_36139);

(statearr_36235[(16)] = inst_36136);

return statearr_36235;
})();
var statearr_36236_37767 = state_36196__$1;
(statearr_36236_37767[(2)] = null);

(statearr_36236_37767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (10))){
var inst_36138 = (state_36196[(12)]);
var inst_36137 = (state_36196[(13)]);
var inst_36139 = (state_36196[(14)]);
var inst_36136 = (state_36196[(16)]);
var inst_36145 = cljs.core._nth(inst_36137,inst_36139);
var inst_36146 = cljs.core.async.muxch_STAR_(inst_36145);
var inst_36147 = cljs.core.async.close_BANG_(inst_36146);
var inst_36148 = (inst_36139 + (1));
var tmp36231 = inst_36138;
var tmp36232 = inst_36137;
var tmp36233 = inst_36136;
var inst_36136__$1 = tmp36233;
var inst_36137__$1 = tmp36232;
var inst_36138__$1 = tmp36231;
var inst_36139__$1 = inst_36148;
var state_36196__$1 = (function (){var statearr_36238 = state_36196;
(statearr_36238[(12)] = inst_36138__$1);

(statearr_36238[(17)] = inst_36147);

(statearr_36238[(13)] = inst_36137__$1);

(statearr_36238[(14)] = inst_36139__$1);

(statearr_36238[(16)] = inst_36136__$1);

return statearr_36238;
})();
var statearr_36240_37770 = state_36196__$1;
(statearr_36240_37770[(2)] = null);

(statearr_36240_37770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (18))){
var inst_36166 = (state_36196[(2)]);
var state_36196__$1 = state_36196;
var statearr_36241_37771 = state_36196__$1;
(statearr_36241_37771[(2)] = inst_36166);

(statearr_36241_37771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36197 === (8))){
var inst_36138 = (state_36196[(12)]);
var inst_36139 = (state_36196[(14)]);
var inst_36142 = (inst_36139 < inst_36138);
var inst_36143 = inst_36142;
var state_36196__$1 = state_36196;
if(cljs.core.truth_(inst_36143)){
var statearr_36242_37777 = state_36196__$1;
(statearr_36242_37777[(1)] = (10));

} else {
var statearr_36243_37778 = state_36196__$1;
(statearr_36243_37778[(1)] = (11));

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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36244[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36244[(1)] = (1));

return statearr_36244;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36196){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36196);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36245){var ex__27462__auto__ = e36245;
var statearr_36246_37779 = state_36196;
(statearr_36246_37779[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36196[(4)]))){
var statearr_36247_37780 = state_36196;
(statearr_36247_37780[(1)] = cljs.core.first((state_36196[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37781 = state_36196;
state_36196 = G__37781;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36248 = f__27544__auto__();
(statearr_36248[(6)] = c__27543__auto___37719);

return statearr_36248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var G__36252 = arguments.length;
switch (G__36252) {
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
var G__36254 = arguments.length;
switch (G__36254) {
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
var G__36258 = arguments.length;
switch (G__36258) {
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
var c__27543__auto___37785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36311){
var state_val_36312 = (state_36311[(1)]);
if((state_val_36312 === (7))){
var state_36311__$1 = state_36311;
var statearr_36316_37786 = state_36311__$1;
(statearr_36316_37786[(2)] = null);

(statearr_36316_37786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (1))){
var state_36311__$1 = state_36311;
var statearr_36317_37787 = state_36311__$1;
(statearr_36317_37787[(2)] = null);

(statearr_36317_37787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (4))){
var inst_36264 = (state_36311[(7)]);
var inst_36265 = (state_36311[(8)]);
var inst_36267 = (inst_36265 < inst_36264);
var state_36311__$1 = state_36311;
if(cljs.core.truth_(inst_36267)){
var statearr_36319_37788 = state_36311__$1;
(statearr_36319_37788[(1)] = (6));

} else {
var statearr_36320_37789 = state_36311__$1;
(statearr_36320_37789[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (15))){
var inst_36296 = (state_36311[(9)]);
var inst_36301 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36296);
var state_36311__$1 = state_36311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36311__$1,(17),out,inst_36301);
} else {
if((state_val_36312 === (13))){
var inst_36296 = (state_36311[(9)]);
var inst_36296__$1 = (state_36311[(2)]);
var inst_36297 = cljs.core.some(cljs.core.nil_QMARK_,inst_36296__$1);
var state_36311__$1 = (function (){var statearr_36325 = state_36311;
(statearr_36325[(9)] = inst_36296__$1);

return statearr_36325;
})();
if(cljs.core.truth_(inst_36297)){
var statearr_36327_37790 = state_36311__$1;
(statearr_36327_37790[(1)] = (14));

} else {
var statearr_36329_37794 = state_36311__$1;
(statearr_36329_37794[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (6))){
var state_36311__$1 = state_36311;
var statearr_36331_37795 = state_36311__$1;
(statearr_36331_37795[(2)] = null);

(statearr_36331_37795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (17))){
var inst_36303 = (state_36311[(2)]);
var state_36311__$1 = (function (){var statearr_36340 = state_36311;
(statearr_36340[(10)] = inst_36303);

return statearr_36340;
})();
var statearr_36342_37796 = state_36311__$1;
(statearr_36342_37796[(2)] = null);

(statearr_36342_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (3))){
var inst_36308 = (state_36311[(2)]);
var state_36311__$1 = state_36311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36311__$1,inst_36308);
} else {
if((state_val_36312 === (12))){
var _ = (function (){var statearr_36346 = state_36311;
(statearr_36346[(4)] = cljs.core.rest((state_36311[(4)])));

return statearr_36346;
})();
var state_36311__$1 = state_36311;
var ex36337 = (state_36311__$1[(2)]);
var statearr_36348_37799 = state_36311__$1;
(statearr_36348_37799[(5)] = ex36337);


if((ex36337 instanceof Object)){
var statearr_36353_37800 = state_36311__$1;
(statearr_36353_37800[(1)] = (11));

(statearr_36353_37800[(5)] = null);

} else {
throw ex36337;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (2))){
var inst_36263 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36264 = cnt;
var inst_36265 = (0);
var state_36311__$1 = (function (){var statearr_36358 = state_36311;
(statearr_36358[(11)] = inst_36263);

(statearr_36358[(7)] = inst_36264);

(statearr_36358[(8)] = inst_36265);

return statearr_36358;
})();
var statearr_36360_37802 = state_36311__$1;
(statearr_36360_37802[(2)] = null);

(statearr_36360_37802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (11))){
var inst_36275 = (state_36311[(2)]);
var inst_36276 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36311__$1 = (function (){var statearr_36364 = state_36311;
(statearr_36364[(12)] = inst_36275);

return statearr_36364;
})();
var statearr_36365_37803 = state_36311__$1;
(statearr_36365_37803[(2)] = inst_36276);

(statearr_36365_37803[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (9))){
var inst_36265 = (state_36311[(8)]);
var _ = (function (){var statearr_36367 = state_36311;
(statearr_36367[(4)] = cljs.core.cons((12),(state_36311[(4)])));

return statearr_36367;
})();
var inst_36282 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36265) : chs__$1.call(null,inst_36265));
var inst_36283 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36265) : done.call(null,inst_36265));
var inst_36284 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36282,inst_36283);
var ___$1 = (function (){var statearr_36370 = state_36311;
(statearr_36370[(4)] = cljs.core.rest((state_36311[(4)])));

return statearr_36370;
})();
var state_36311__$1 = state_36311;
var statearr_36372_37805 = state_36311__$1;
(statearr_36372_37805[(2)] = inst_36284);

(statearr_36372_37805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (5))){
var inst_36294 = (state_36311[(2)]);
var state_36311__$1 = (function (){var statearr_36373 = state_36311;
(statearr_36373[(13)] = inst_36294);

return statearr_36373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36311__$1,(13),dchan);
} else {
if((state_val_36312 === (14))){
var inst_36299 = cljs.core.async.close_BANG_(out);
var state_36311__$1 = state_36311;
var statearr_36375_37806 = state_36311__$1;
(statearr_36375_37806[(2)] = inst_36299);

(statearr_36375_37806[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (16))){
var inst_36306 = (state_36311[(2)]);
var state_36311__$1 = state_36311;
var statearr_36379_37816 = state_36311__$1;
(statearr_36379_37816[(2)] = inst_36306);

(statearr_36379_37816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (10))){
var inst_36265 = (state_36311[(8)]);
var inst_36287 = (state_36311[(2)]);
var inst_36288 = (inst_36265 + (1));
var inst_36265__$1 = inst_36288;
var state_36311__$1 = (function (){var statearr_36381 = state_36311;
(statearr_36381[(8)] = inst_36265__$1);

(statearr_36381[(14)] = inst_36287);

return statearr_36381;
})();
var statearr_36382_37817 = state_36311__$1;
(statearr_36382_37817[(2)] = null);

(statearr_36382_37817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36312 === (8))){
var inst_36292 = (state_36311[(2)]);
var state_36311__$1 = state_36311;
var statearr_36385_37818 = state_36311__$1;
(statearr_36385_37818[(2)] = inst_36292);

(statearr_36385_37818[(1)] = (5));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36388[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36388[(1)] = (1));

return statearr_36388;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36311){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36311);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36389){var ex__27462__auto__ = e36389;
var statearr_36391_37820 = state_36311;
(statearr_36391_37820[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36311[(4)]))){
var statearr_36394_37821 = state_36311;
(statearr_36394_37821[(1)] = cljs.core.first((state_36311[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37822 = state_36311;
state_36311 = G__37822;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36396 = f__27544__auto__();
(statearr_36396[(6)] = c__27543__auto___37785);

return statearr_36396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var G__36404 = arguments.length;
switch (G__36404) {
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
var c__27543__auto___37828 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36449){
var state_val_36450 = (state_36449[(1)]);
if((state_val_36450 === (7))){
var inst_36425 = (state_36449[(7)]);
var inst_36424 = (state_36449[(8)]);
var inst_36424__$1 = (state_36449[(2)]);
var inst_36425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36424__$1,(0),null);
var inst_36426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36424__$1,(1),null);
var inst_36427 = (inst_36425__$1 == null);
var state_36449__$1 = (function (){var statearr_36456 = state_36449;
(statearr_36456[(7)] = inst_36425__$1);

(statearr_36456[(9)] = inst_36426);

(statearr_36456[(8)] = inst_36424__$1);

return statearr_36456;
})();
if(cljs.core.truth_(inst_36427)){
var statearr_36457_37830 = state_36449__$1;
(statearr_36457_37830[(1)] = (8));

} else {
var statearr_36460_37831 = state_36449__$1;
(statearr_36460_37831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (1))){
var inst_36412 = cljs.core.vec(chs);
var inst_36413 = inst_36412;
var state_36449__$1 = (function (){var statearr_36462 = state_36449;
(statearr_36462[(10)] = inst_36413);

return statearr_36462;
})();
var statearr_36464_37832 = state_36449__$1;
(statearr_36464_37832[(2)] = null);

(statearr_36464_37832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (4))){
var inst_36413 = (state_36449[(10)]);
var state_36449__$1 = state_36449;
return cljs.core.async.ioc_alts_BANG_(state_36449__$1,(7),inst_36413);
} else {
if((state_val_36450 === (6))){
var inst_36444 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
var statearr_36468_37833 = state_36449__$1;
(statearr_36468_37833[(2)] = inst_36444);

(statearr_36468_37833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (3))){
var inst_36447 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36449__$1,inst_36447);
} else {
if((state_val_36450 === (2))){
var inst_36413 = (state_36449[(10)]);
var inst_36415 = cljs.core.count(inst_36413);
var inst_36416 = (inst_36415 > (0));
var state_36449__$1 = state_36449;
if(cljs.core.truth_(inst_36416)){
var statearr_36474_37835 = state_36449__$1;
(statearr_36474_37835[(1)] = (4));

} else {
var statearr_36475_37836 = state_36449__$1;
(statearr_36475_37836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (11))){
var inst_36413 = (state_36449[(10)]);
var inst_36437 = (state_36449[(2)]);
var tmp36470 = inst_36413;
var inst_36413__$1 = tmp36470;
var state_36449__$1 = (function (){var statearr_36477 = state_36449;
(statearr_36477[(10)] = inst_36413__$1);

(statearr_36477[(11)] = inst_36437);

return statearr_36477;
})();
var statearr_36479_37837 = state_36449__$1;
(statearr_36479_37837[(2)] = null);

(statearr_36479_37837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (9))){
var inst_36425 = (state_36449[(7)]);
var state_36449__$1 = state_36449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36449__$1,(11),out,inst_36425);
} else {
if((state_val_36450 === (5))){
var inst_36442 = cljs.core.async.close_BANG_(out);
var state_36449__$1 = state_36449;
var statearr_36486_37842 = state_36449__$1;
(statearr_36486_37842[(2)] = inst_36442);

(statearr_36486_37842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (10))){
var inst_36440 = (state_36449[(2)]);
var state_36449__$1 = state_36449;
var statearr_36488_37843 = state_36449__$1;
(statearr_36488_37843[(2)] = inst_36440);

(statearr_36488_37843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36450 === (8))){
var inst_36425 = (state_36449[(7)]);
var inst_36413 = (state_36449[(10)]);
var inst_36426 = (state_36449[(9)]);
var inst_36424 = (state_36449[(8)]);
var inst_36432 = (function (){var cs = inst_36413;
var vec__36419 = inst_36424;
var v = inst_36425;
var c = inst_36426;
return (function (p1__36400_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36400_SHARP_);
});
})();
var inst_36433 = cljs.core.filterv(inst_36432,inst_36413);
var inst_36413__$1 = inst_36433;
var state_36449__$1 = (function (){var statearr_36493 = state_36449;
(statearr_36493[(10)] = inst_36413__$1);

return statearr_36493;
})();
var statearr_36496_37844 = state_36449__$1;
(statearr_36496_37844[(2)] = null);

(statearr_36496_37844[(1)] = (2));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36498 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36498[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36498[(1)] = (1));

return statearr_36498;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36449){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36449);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36500){var ex__27462__auto__ = e36500;
var statearr_36501_37849 = state_36449;
(statearr_36501_37849[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36449[(4)]))){
var statearr_36504_37850 = state_36449;
(statearr_36504_37850[(1)] = cljs.core.first((state_36449[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37853 = state_36449;
state_36449 = G__37853;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36507 = f__27544__auto__();
(statearr_36507[(6)] = c__27543__auto___37828);

return statearr_36507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
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
var G__36515 = arguments.length;
switch (G__36515) {
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
var c__27543__auto___37861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36552){
var state_val_36553 = (state_36552[(1)]);
if((state_val_36553 === (7))){
var inst_36530 = (state_36552[(7)]);
var inst_36530__$1 = (state_36552[(2)]);
var inst_36532 = (inst_36530__$1 == null);
var inst_36533 = cljs.core.not(inst_36532);
var state_36552__$1 = (function (){var statearr_36560 = state_36552;
(statearr_36560[(7)] = inst_36530__$1);

return statearr_36560;
})();
if(inst_36533){
var statearr_36562_37868 = state_36552__$1;
(statearr_36562_37868[(1)] = (8));

} else {
var statearr_36563_37869 = state_36552__$1;
(statearr_36563_37869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (1))){
var inst_36525 = (0);
var state_36552__$1 = (function (){var statearr_36567 = state_36552;
(statearr_36567[(8)] = inst_36525);

return statearr_36567;
})();
var statearr_36568_37870 = state_36552__$1;
(statearr_36568_37870[(2)] = null);

(statearr_36568_37870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (4))){
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36552__$1,(7),ch);
} else {
if((state_val_36553 === (6))){
var inst_36544 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36572_37871 = state_36552__$1;
(statearr_36572_37871[(2)] = inst_36544);

(statearr_36572_37871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (3))){
var inst_36546 = (state_36552[(2)]);
var inst_36547 = cljs.core.async.close_BANG_(out);
var state_36552__$1 = (function (){var statearr_36574 = state_36552;
(statearr_36574[(9)] = inst_36546);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36552__$1,inst_36547);
} else {
if((state_val_36553 === (2))){
var inst_36525 = (state_36552[(8)]);
var inst_36527 = (inst_36525 < n);
var state_36552__$1 = state_36552;
if(cljs.core.truth_(inst_36527)){
var statearr_36576_37872 = state_36552__$1;
(statearr_36576_37872[(1)] = (4));

} else {
var statearr_36577_37873 = state_36552__$1;
(statearr_36577_37873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (11))){
var inst_36525 = (state_36552[(8)]);
var inst_36536 = (state_36552[(2)]);
var inst_36537 = (inst_36525 + (1));
var inst_36525__$1 = inst_36537;
var state_36552__$1 = (function (){var statearr_36581 = state_36552;
(statearr_36581[(10)] = inst_36536);

(statearr_36581[(8)] = inst_36525__$1);

return statearr_36581;
})();
var statearr_36582_37875 = state_36552__$1;
(statearr_36582_37875[(2)] = null);

(statearr_36582_37875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (9))){
var state_36552__$1 = state_36552;
var statearr_36583_37877 = state_36552__$1;
(statearr_36583_37877[(2)] = null);

(statearr_36583_37877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (5))){
var state_36552__$1 = state_36552;
var statearr_36585_37878 = state_36552__$1;
(statearr_36585_37878[(2)] = null);

(statearr_36585_37878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (10))){
var inst_36541 = (state_36552[(2)]);
var state_36552__$1 = state_36552;
var statearr_36588_37879 = state_36552__$1;
(statearr_36588_37879[(2)] = inst_36541);

(statearr_36588_37879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36553 === (8))){
var inst_36530 = (state_36552[(7)]);
var state_36552__$1 = state_36552;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36552__$1,(11),out,inst_36530);
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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36591 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36591[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36591[(1)] = (1));

return statearr_36591;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36552){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36552);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36593){var ex__27462__auto__ = e36593;
var statearr_36596_37884 = state_36552;
(statearr_36596_37884[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36552[(4)]))){
var statearr_36597_37885 = state_36552;
(statearr_36597_37885[(1)] = cljs.core.first((state_36552[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37886 = state_36552;
state_36552 = G__37886;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36599 = f__27544__auto__();
(statearr_36599[(6)] = c__27543__auto___37861);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36605 = (function (f,ch,meta36606){
this.f = f;
this.ch = ch;
this.meta36606 = meta36606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36607,meta36606__$1){
var self__ = this;
var _36607__$1 = this;
return (new cljs.core.async.t_cljs$core$async36605(self__.f,self__.ch,meta36606__$1));
}));

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36607){
var self__ = this;
var _36607__$1 = this;
return self__.meta36606;
}));

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36621 = (function (f,ch,meta36606,_,fn1,meta36622){
this.f = f;
this.ch = ch;
this.meta36606 = meta36606;
this._ = _;
this.fn1 = fn1;
this.meta36622 = meta36622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36623,meta36622__$1){
var self__ = this;
var _36623__$1 = this;
return (new cljs.core.async.t_cljs$core$async36621(self__.f,self__.ch,self__.meta36606,self__._,self__.fn1,meta36622__$1));
}));

(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36623){
var self__ = this;
var _36623__$1 = this;
return self__.meta36622;
}));

(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36621.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36603_SHARP_){
var G__36631 = (((p1__36603_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36603_SHARP_) : self__.f.call(null,p1__36603_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36631) : f1.call(null,G__36631));
});
}));

(cljs.core.async.t_cljs$core$async36621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36606","meta36606",-1747998968,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36605","cljs.core.async/t_cljs$core$async36605",35947537,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36622","meta36622",-1362698710,null)], null);
}));

(cljs.core.async.t_cljs$core$async36621.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36621");

(cljs.core.async.t_cljs$core$async36621.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36621");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36621.
 */
cljs.core.async.__GT_t_cljs$core$async36621 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36621(f__$1,ch__$1,meta36606__$1,___$2,fn1__$1,meta36622){
return (new cljs.core.async.t_cljs$core$async36621(f__$1,ch__$1,meta36606__$1,___$2,fn1__$1,meta36622));
});

}

return (new cljs.core.async.t_cljs$core$async36621(self__.f,self__.ch,self__.meta36606,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36632 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36632) : self__.f.call(null,G__36632));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36606","meta36606",-1747998968,null)], null);
}));

(cljs.core.async.t_cljs$core$async36605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36605");

(cljs.core.async.t_cljs$core$async36605.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36605.
 */
cljs.core.async.__GT_t_cljs$core$async36605 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36605(f__$1,ch__$1,meta36606){
return (new cljs.core.async.t_cljs$core$async36605(f__$1,ch__$1,meta36606));
});

}

return (new cljs.core.async.t_cljs$core$async36605(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36633 = (function (f,ch,meta36634){
this.f = f;
this.ch = ch;
this.meta36634 = meta36634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36635,meta36634__$1){
var self__ = this;
var _36635__$1 = this;
return (new cljs.core.async.t_cljs$core$async36633(self__.f,self__.ch,meta36634__$1));
}));

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36635){
var self__ = this;
var _36635__$1 = this;
return self__.meta36634;
}));

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36633.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36634","meta36634",-817117482,null)], null);
}));

(cljs.core.async.t_cljs$core$async36633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36633");

(cljs.core.async.t_cljs$core$async36633.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36633.
 */
cljs.core.async.__GT_t_cljs$core$async36633 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36633(f__$1,ch__$1,meta36634){
return (new cljs.core.async.t_cljs$core$async36633(f__$1,ch__$1,meta36634));
});

}

return (new cljs.core.async.t_cljs$core$async36633(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async36648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36648 = (function (p,ch,meta36649){
this.p = p;
this.ch = ch;
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new cljs.core.async.t_cljs$core$async36648(self__.p,self__.ch,meta36649__$1));
}));

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
}));

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36648.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
}));

(cljs.core.async.t_cljs$core$async36648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36648");

(cljs.core.async.t_cljs$core$async36648.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async36648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36648.
 */
cljs.core.async.__GT_t_cljs$core$async36648 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36648(p__$1,ch__$1,meta36649){
return (new cljs.core.async.t_cljs$core$async36648(p__$1,ch__$1,meta36649));
});

}

return (new cljs.core.async.t_cljs$core$async36648(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__36668 = arguments.length;
switch (G__36668) {
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
var c__27543__auto___37919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36697_37920 = state_36695__$1;
(statearr_36697_37920[(2)] = inst_36691);

(statearr_36697_37920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var state_36695__$1 = state_36695;
var statearr_36698_37922 = state_36695__$1;
(statearr_36698_37922[(2)] = null);

(statearr_36698_37922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36677 = (state_36695[(7)]);
var inst_36677__$1 = (state_36695[(2)]);
var inst_36678 = (inst_36677__$1 == null);
var state_36695__$1 = (function (){var statearr_36699 = state_36695;
(statearr_36699[(7)] = inst_36677__$1);

return statearr_36699;
})();
if(cljs.core.truth_(inst_36678)){
var statearr_36700_37923 = state_36695__$1;
(statearr_36700_37923[(1)] = (5));

} else {
var statearr_36701_37924 = state_36695__$1;
(statearr_36701_37924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (6))){
var inst_36677 = (state_36695[(7)]);
var inst_36682 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36677) : p.call(null,inst_36677));
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36682)){
var statearr_36706_37926 = state_36695__$1;
(statearr_36706_37926[(1)] = (8));

} else {
var statearr_36707_37930 = state_36695__$1;
(statearr_36707_37930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (2))){
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36695__$1,(4),ch);
} else {
if((state_val_36696 === (11))){
var inst_36685 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36712_37931 = state_36695__$1;
(statearr_36712_37931[(2)] = inst_36685);

(statearr_36712_37931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var state_36695__$1 = state_36695;
var statearr_36713_37932 = state_36695__$1;
(statearr_36713_37932[(2)] = null);

(statearr_36713_37932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (5))){
var inst_36680 = cljs.core.async.close_BANG_(out);
var state_36695__$1 = state_36695;
var statearr_36714_37939 = state_36695__$1;
(statearr_36714_37939[(2)] = inst_36680);

(statearr_36714_37939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36688 = (state_36695[(2)]);
var state_36695__$1 = (function (){var statearr_36718 = state_36695;
(statearr_36718[(8)] = inst_36688);

return statearr_36718;
})();
var statearr_36720_37940 = state_36695__$1;
(statearr_36720_37940[(2)] = null);

(statearr_36720_37940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36677 = (state_36695[(7)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36695__$1,(11),out,inst_36677);
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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36724 = [null,null,null,null,null,null,null,null,null];
(statearr_36724[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36724[(1)] = (1));

return statearr_36724;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36695){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36695);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36726){var ex__27462__auto__ = e36726;
var statearr_36727_37946 = state_36695;
(statearr_36727_37946[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36695[(4)]))){
var statearr_36728_37948 = state_36695;
(statearr_36728_37948[(1)] = cljs.core.first((state_36695[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37950 = state_36695;
state_36695 = G__37950;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36732 = f__27544__auto__();
(statearr_36732[(6)] = c__27543__auto___37919);

return statearr_36732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36735 = arguments.length;
switch (G__36735) {
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
var c__27543__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36810){
var state_val_36811 = (state_36810[(1)]);
if((state_val_36811 === (7))){
var inst_36803 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36817_37954 = state_36810__$1;
(statearr_36817_37954[(2)] = inst_36803);

(statearr_36817_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (20))){
var inst_36773 = (state_36810[(7)]);
var inst_36784 = (state_36810[(2)]);
var inst_36785 = cljs.core.next(inst_36773);
var inst_36755 = inst_36785;
var inst_36756 = null;
var inst_36757 = (0);
var inst_36758 = (0);
var state_36810__$1 = (function (){var statearr_36818 = state_36810;
(statearr_36818[(8)] = inst_36757);

(statearr_36818[(9)] = inst_36758);

(statearr_36818[(10)] = inst_36784);

(statearr_36818[(11)] = inst_36756);

(statearr_36818[(12)] = inst_36755);

return statearr_36818;
})();
var statearr_36819_37958 = state_36810__$1;
(statearr_36819_37958[(2)] = null);

(statearr_36819_37958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (1))){
var state_36810__$1 = state_36810;
var statearr_36823_37960 = state_36810__$1;
(statearr_36823_37960[(2)] = null);

(statearr_36823_37960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (4))){
var inst_36740 = (state_36810[(13)]);
var inst_36740__$1 = (state_36810[(2)]);
var inst_36741 = (inst_36740__$1 == null);
var state_36810__$1 = (function (){var statearr_36825 = state_36810;
(statearr_36825[(13)] = inst_36740__$1);

return statearr_36825;
})();
if(cljs.core.truth_(inst_36741)){
var statearr_36826_37961 = state_36810__$1;
(statearr_36826_37961[(1)] = (5));

} else {
var statearr_36827_37962 = state_36810__$1;
(statearr_36827_37962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (15))){
var state_36810__$1 = state_36810;
var statearr_36831_37963 = state_36810__$1;
(statearr_36831_37963[(2)] = null);

(statearr_36831_37963[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (21))){
var state_36810__$1 = state_36810;
var statearr_36832_37964 = state_36810__$1;
(statearr_36832_37964[(2)] = null);

(statearr_36832_37964[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (13))){
var inst_36757 = (state_36810[(8)]);
var inst_36758 = (state_36810[(9)]);
var inst_36756 = (state_36810[(11)]);
var inst_36755 = (state_36810[(12)]);
var inst_36768 = (state_36810[(2)]);
var inst_36769 = (inst_36758 + (1));
var tmp36828 = inst_36757;
var tmp36829 = inst_36756;
var tmp36830 = inst_36755;
var inst_36755__$1 = tmp36830;
var inst_36756__$1 = tmp36829;
var inst_36757__$1 = tmp36828;
var inst_36758__$1 = inst_36769;
var state_36810__$1 = (function (){var statearr_36835 = state_36810;
(statearr_36835[(8)] = inst_36757__$1);

(statearr_36835[(9)] = inst_36758__$1);

(statearr_36835[(11)] = inst_36756__$1);

(statearr_36835[(12)] = inst_36755__$1);

(statearr_36835[(14)] = inst_36768);

return statearr_36835;
})();
var statearr_36836_37966 = state_36810__$1;
(statearr_36836_37966[(2)] = null);

(statearr_36836_37966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (22))){
var state_36810__$1 = state_36810;
var statearr_36837_37967 = state_36810__$1;
(statearr_36837_37967[(2)] = null);

(statearr_36837_37967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (6))){
var inst_36740 = (state_36810[(13)]);
var inst_36753 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36740) : f.call(null,inst_36740));
var inst_36754 = cljs.core.seq(inst_36753);
var inst_36755 = inst_36754;
var inst_36756 = null;
var inst_36757 = (0);
var inst_36758 = (0);
var state_36810__$1 = (function (){var statearr_36838 = state_36810;
(statearr_36838[(8)] = inst_36757);

(statearr_36838[(9)] = inst_36758);

(statearr_36838[(11)] = inst_36756);

(statearr_36838[(12)] = inst_36755);

return statearr_36838;
})();
var statearr_36839_37976 = state_36810__$1;
(statearr_36839_37976[(2)] = null);

(statearr_36839_37976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (17))){
var inst_36773 = (state_36810[(7)]);
var inst_36777 = cljs.core.chunk_first(inst_36773);
var inst_36778 = cljs.core.chunk_rest(inst_36773);
var inst_36779 = cljs.core.count(inst_36777);
var inst_36755 = inst_36778;
var inst_36756 = inst_36777;
var inst_36757 = inst_36779;
var inst_36758 = (0);
var state_36810__$1 = (function (){var statearr_36840 = state_36810;
(statearr_36840[(8)] = inst_36757);

(statearr_36840[(9)] = inst_36758);

(statearr_36840[(11)] = inst_36756);

(statearr_36840[(12)] = inst_36755);

return statearr_36840;
})();
var statearr_36841_37977 = state_36810__$1;
(statearr_36841_37977[(2)] = null);

(statearr_36841_37977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (3))){
var inst_36805 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36810__$1,inst_36805);
} else {
if((state_val_36811 === (12))){
var inst_36793 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36849_37979 = state_36810__$1;
(statearr_36849_37979[(2)] = inst_36793);

(statearr_36849_37979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (2))){
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36810__$1,(4),in$);
} else {
if((state_val_36811 === (23))){
var inst_36801 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36851_37980 = state_36810__$1;
(statearr_36851_37980[(2)] = inst_36801);

(statearr_36851_37980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (19))){
var inst_36788 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36852_37981 = state_36810__$1;
(statearr_36852_37981[(2)] = inst_36788);

(statearr_36852_37981[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (11))){
var inst_36773 = (state_36810[(7)]);
var inst_36755 = (state_36810[(12)]);
var inst_36773__$1 = cljs.core.seq(inst_36755);
var state_36810__$1 = (function (){var statearr_36853 = state_36810;
(statearr_36853[(7)] = inst_36773__$1);

return statearr_36853;
})();
if(inst_36773__$1){
var statearr_36854_37982 = state_36810__$1;
(statearr_36854_37982[(1)] = (14));

} else {
var statearr_36858_37983 = state_36810__$1;
(statearr_36858_37983[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (9))){
var inst_36795 = (state_36810[(2)]);
var inst_36796 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36810__$1 = (function (){var statearr_36860 = state_36810;
(statearr_36860[(15)] = inst_36795);

return statearr_36860;
})();
if(cljs.core.truth_(inst_36796)){
var statearr_36861_37986 = state_36810__$1;
(statearr_36861_37986[(1)] = (21));

} else {
var statearr_36862_37987 = state_36810__$1;
(statearr_36862_37987[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (5))){
var inst_36743 = cljs.core.async.close_BANG_(out);
var state_36810__$1 = state_36810;
var statearr_36863_37988 = state_36810__$1;
(statearr_36863_37988[(2)] = inst_36743);

(statearr_36863_37988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (14))){
var inst_36773 = (state_36810[(7)]);
var inst_36775 = cljs.core.chunked_seq_QMARK_(inst_36773);
var state_36810__$1 = state_36810;
if(inst_36775){
var statearr_36867_37989 = state_36810__$1;
(statearr_36867_37989[(1)] = (17));

} else {
var statearr_36869_37990 = state_36810__$1;
(statearr_36869_37990[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (16))){
var inst_36791 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36870_37993 = state_36810__$1;
(statearr_36870_37993[(2)] = inst_36791);

(statearr_36870_37993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (10))){
var inst_36758 = (state_36810[(9)]);
var inst_36756 = (state_36810[(11)]);
var inst_36766 = cljs.core._nth(inst_36756,inst_36758);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36810__$1,(13),out,inst_36766);
} else {
if((state_val_36811 === (18))){
var inst_36773 = (state_36810[(7)]);
var inst_36782 = cljs.core.first(inst_36773);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36810__$1,(20),out,inst_36782);
} else {
if((state_val_36811 === (8))){
var inst_36757 = (state_36810[(8)]);
var inst_36758 = (state_36810[(9)]);
var inst_36760 = (inst_36758 < inst_36757);
var inst_36761 = inst_36760;
var state_36810__$1 = state_36810;
if(cljs.core.truth_(inst_36761)){
var statearr_36871_37994 = state_36810__$1;
(statearr_36871_37994[(1)] = (10));

} else {
var statearr_36875_37995 = state_36810__$1;
(statearr_36875_37995[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____0 = (function (){
var statearr_36877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36877[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__);

(statearr_36877[(1)] = (1));

return statearr_36877;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____1 = (function (state_36810){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36810);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36878){var ex__27462__auto__ = e36878;
var statearr_36879_38000 = state_36810;
(statearr_36879_38000[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36810[(4)]))){
var statearr_36880_38002 = state_36810;
(statearr_36880_38002[(1)] = cljs.core.first((state_36810[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38003 = state_36810;
state_36810 = G__38003;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__ = function(state_36810){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____1.call(this,state_36810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27459__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36881 = f__27544__auto__();
(statearr_36881[(6)] = c__27543__auto__);

return statearr_36881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));

return c__27543__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36883 = arguments.length;
switch (G__36883) {
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
var G__36889 = arguments.length;
switch (G__36889) {
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
var G__36892 = arguments.length;
switch (G__36892) {
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
var c__27543__auto___38018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36916){
var state_val_36917 = (state_36916[(1)]);
if((state_val_36917 === (7))){
var inst_36911 = (state_36916[(2)]);
var state_36916__$1 = state_36916;
var statearr_36920_38019 = state_36916__$1;
(statearr_36920_38019[(2)] = inst_36911);

(statearr_36920_38019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (1))){
var inst_36893 = null;
var state_36916__$1 = (function (){var statearr_36921 = state_36916;
(statearr_36921[(7)] = inst_36893);

return statearr_36921;
})();
var statearr_36922_38020 = state_36916__$1;
(statearr_36922_38020[(2)] = null);

(statearr_36922_38020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (4))){
var inst_36896 = (state_36916[(8)]);
var inst_36896__$1 = (state_36916[(2)]);
var inst_36897 = (inst_36896__$1 == null);
var inst_36898 = cljs.core.not(inst_36897);
var state_36916__$1 = (function (){var statearr_36923 = state_36916;
(statearr_36923[(8)] = inst_36896__$1);

return statearr_36923;
})();
if(inst_36898){
var statearr_36924_38024 = state_36916__$1;
(statearr_36924_38024[(1)] = (5));

} else {
var statearr_36925_38025 = state_36916__$1;
(statearr_36925_38025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (6))){
var state_36916__$1 = state_36916;
var statearr_36926_38026 = state_36916__$1;
(statearr_36926_38026[(2)] = null);

(statearr_36926_38026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (3))){
var inst_36913 = (state_36916[(2)]);
var inst_36914 = cljs.core.async.close_BANG_(out);
var state_36916__$1 = (function (){var statearr_36927 = state_36916;
(statearr_36927[(9)] = inst_36913);

return statearr_36927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36916__$1,inst_36914);
} else {
if((state_val_36917 === (2))){
var state_36916__$1 = state_36916;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36916__$1,(4),ch);
} else {
if((state_val_36917 === (11))){
var inst_36896 = (state_36916[(8)]);
var inst_36905 = (state_36916[(2)]);
var inst_36893 = inst_36896;
var state_36916__$1 = (function (){var statearr_36928 = state_36916;
(statearr_36928[(7)] = inst_36893);

(statearr_36928[(10)] = inst_36905);

return statearr_36928;
})();
var statearr_36929_38027 = state_36916__$1;
(statearr_36929_38027[(2)] = null);

(statearr_36929_38027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (9))){
var inst_36896 = (state_36916[(8)]);
var state_36916__$1 = state_36916;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36916__$1,(11),out,inst_36896);
} else {
if((state_val_36917 === (5))){
var inst_36893 = (state_36916[(7)]);
var inst_36896 = (state_36916[(8)]);
var inst_36900 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36896,inst_36893);
var state_36916__$1 = state_36916;
if(inst_36900){
var statearr_36931_38028 = state_36916__$1;
(statearr_36931_38028[(1)] = (8));

} else {
var statearr_36932_38029 = state_36916__$1;
(statearr_36932_38029[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (10))){
var inst_36908 = (state_36916[(2)]);
var state_36916__$1 = state_36916;
var statearr_36933_38033 = state_36916__$1;
(statearr_36933_38033[(2)] = inst_36908);

(statearr_36933_38033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36917 === (8))){
var inst_36893 = (state_36916[(7)]);
var tmp36930 = inst_36893;
var inst_36893__$1 = tmp36930;
var state_36916__$1 = (function (){var statearr_36934 = state_36916;
(statearr_36934[(7)] = inst_36893__$1);

return statearr_36934;
})();
var statearr_36935_38038 = state_36916__$1;
(statearr_36935_38038[(2)] = null);

(statearr_36935_38038[(1)] = (2));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_36936 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36936[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_36936[(1)] = (1));

return statearr_36936;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36916){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36916);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e36937){var ex__27462__auto__ = e36937;
var statearr_36938_38040 = state_36916;
(statearr_36938_38040[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36916[(4)]))){
var statearr_36939_38041 = state_36916;
(statearr_36939_38041[(1)] = cljs.core.first((state_36916[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38042 = state_36916;
state_36916 = G__38042;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_36940 = f__27544__auto__();
(statearr_36940[(6)] = c__27543__auto___38018);

return statearr_36940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36942 = arguments.length;
switch (G__36942) {
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
var c__27543__auto___38045 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_36980){
var state_val_36981 = (state_36980[(1)]);
if((state_val_36981 === (7))){
var inst_36976 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_36984_38047 = state_36980__$1;
(statearr_36984_38047[(2)] = inst_36976);

(statearr_36984_38047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (1))){
var inst_36943 = (new Array(n));
var inst_36944 = inst_36943;
var inst_36945 = (0);
var state_36980__$1 = (function (){var statearr_36985 = state_36980;
(statearr_36985[(7)] = inst_36944);

(statearr_36985[(8)] = inst_36945);

return statearr_36985;
})();
var statearr_36986_38051 = state_36980__$1;
(statearr_36986_38051[(2)] = null);

(statearr_36986_38051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (4))){
var inst_36948 = (state_36980[(9)]);
var inst_36948__$1 = (state_36980[(2)]);
var inst_36949 = (inst_36948__$1 == null);
var inst_36950 = cljs.core.not(inst_36949);
var state_36980__$1 = (function (){var statearr_36987 = state_36980;
(statearr_36987[(9)] = inst_36948__$1);

return statearr_36987;
})();
if(inst_36950){
var statearr_36988_38059 = state_36980__$1;
(statearr_36988_38059[(1)] = (5));

} else {
var statearr_36989_38065 = state_36980__$1;
(statearr_36989_38065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (15))){
var inst_36970 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_36990_38066 = state_36980__$1;
(statearr_36990_38066[(2)] = inst_36970);

(statearr_36990_38066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (13))){
var state_36980__$1 = state_36980;
var statearr_36992_38067 = state_36980__$1;
(statearr_36992_38067[(2)] = null);

(statearr_36992_38067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (6))){
var inst_36945 = (state_36980[(8)]);
var inst_36966 = (inst_36945 > (0));
var state_36980__$1 = state_36980;
if(cljs.core.truth_(inst_36966)){
var statearr_36994_38071 = state_36980__$1;
(statearr_36994_38071[(1)] = (12));

} else {
var statearr_36995_38077 = state_36980__$1;
(statearr_36995_38077[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (3))){
var inst_36978 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36980__$1,inst_36978);
} else {
if((state_val_36981 === (12))){
var inst_36944 = (state_36980[(7)]);
var inst_36968 = cljs.core.vec(inst_36944);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36980__$1,(15),out,inst_36968);
} else {
if((state_val_36981 === (2))){
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36980__$1,(4),ch);
} else {
if((state_val_36981 === (11))){
var inst_36960 = (state_36980[(2)]);
var inst_36961 = (new Array(n));
var inst_36944 = inst_36961;
var inst_36945 = (0);
var state_36980__$1 = (function (){var statearr_36996 = state_36980;
(statearr_36996[(7)] = inst_36944);

(statearr_36996[(10)] = inst_36960);

(statearr_36996[(8)] = inst_36945);

return statearr_36996;
})();
var statearr_36997_38079 = state_36980__$1;
(statearr_36997_38079[(2)] = null);

(statearr_36997_38079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (9))){
var inst_36944 = (state_36980[(7)]);
var inst_36958 = cljs.core.vec(inst_36944);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36980__$1,(11),out,inst_36958);
} else {
if((state_val_36981 === (5))){
var inst_36948 = (state_36980[(9)]);
var inst_36953 = (state_36980[(11)]);
var inst_36944 = (state_36980[(7)]);
var inst_36945 = (state_36980[(8)]);
var inst_36952 = (inst_36944[inst_36945] = inst_36948);
var inst_36953__$1 = (inst_36945 + (1));
var inst_36954 = (inst_36953__$1 < n);
var state_36980__$1 = (function (){var statearr_37000 = state_36980;
(statearr_37000[(11)] = inst_36953__$1);

(statearr_37000[(12)] = inst_36952);

return statearr_37000;
})();
if(cljs.core.truth_(inst_36954)){
var statearr_37001_38084 = state_36980__$1;
(statearr_37001_38084[(1)] = (8));

} else {
var statearr_37002_38085 = state_36980__$1;
(statearr_37002_38085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (14))){
var inst_36973 = (state_36980[(2)]);
var inst_36974 = cljs.core.async.close_BANG_(out);
var state_36980__$1 = (function (){var statearr_37004 = state_36980;
(statearr_37004[(13)] = inst_36973);

return statearr_37004;
})();
var statearr_37005_38086 = state_36980__$1;
(statearr_37005_38086[(2)] = inst_36974);

(statearr_37005_38086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (10))){
var inst_36964 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_37006_38087 = state_36980__$1;
(statearr_37006_38087[(2)] = inst_36964);

(statearr_37006_38087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (8))){
var inst_36953 = (state_36980[(11)]);
var inst_36944 = (state_36980[(7)]);
var tmp37003 = inst_36944;
var inst_36944__$1 = tmp37003;
var inst_36945 = inst_36953;
var state_36980__$1 = (function (){var statearr_37007 = state_36980;
(statearr_37007[(7)] = inst_36944__$1);

(statearr_37007[(8)] = inst_36945);

return statearr_37007;
})();
var statearr_37008_38088 = state_36980__$1;
(statearr_37008_38088[(2)] = null);

(statearr_37008_38088[(1)] = (2));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_37009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37009[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_37009[(1)] = (1));

return statearr_37009;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_36980){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_36980);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e37010){var ex__27462__auto__ = e37010;
var statearr_37011_38095 = state_36980;
(statearr_37011_38095[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_36980[(4)]))){
var statearr_37012_38096 = state_36980;
(statearr_37012_38096[(1)] = cljs.core.first((state_36980[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38097 = state_36980;
state_36980 = G__38097;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_36980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_36980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_37013 = f__27544__auto__();
(statearr_37013[(6)] = c__27543__auto___38045);

return statearr_37013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37015 = arguments.length;
switch (G__37015) {
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
var c__27543__auto___38105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27544__auto__ = (function (){var switch__27458__auto__ = (function (state_37063){
var state_val_37064 = (state_37063[(1)]);
if((state_val_37064 === (7))){
var inst_37059 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37066_38112 = state_37063__$1;
(statearr_37066_38112[(2)] = inst_37059);

(statearr_37066_38112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (1))){
var inst_37018 = [];
var inst_37019 = inst_37018;
var inst_37020 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37063__$1 = (function (){var statearr_37067 = state_37063;
(statearr_37067[(7)] = inst_37020);

(statearr_37067[(8)] = inst_37019);

return statearr_37067;
})();
var statearr_37069_38113 = state_37063__$1;
(statearr_37069_38113[(2)] = null);

(statearr_37069_38113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (4))){
var inst_37023 = (state_37063[(9)]);
var inst_37023__$1 = (state_37063[(2)]);
var inst_37024 = (inst_37023__$1 == null);
var inst_37025 = cljs.core.not(inst_37024);
var state_37063__$1 = (function (){var statearr_37071 = state_37063;
(statearr_37071[(9)] = inst_37023__$1);

return statearr_37071;
})();
if(inst_37025){
var statearr_37072_38114 = state_37063__$1;
(statearr_37072_38114[(1)] = (5));

} else {
var statearr_37073_38115 = state_37063__$1;
(statearr_37073_38115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (15))){
var inst_37053 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37077_38116 = state_37063__$1;
(statearr_37077_38116[(2)] = inst_37053);

(statearr_37077_38116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (13))){
var state_37063__$1 = state_37063;
var statearr_37078_38117 = state_37063__$1;
(statearr_37078_38117[(2)] = null);

(statearr_37078_38117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (6))){
var inst_37019 = (state_37063[(8)]);
var inst_37048 = inst_37019.length;
var inst_37049 = (inst_37048 > (0));
var state_37063__$1 = state_37063;
if(cljs.core.truth_(inst_37049)){
var statearr_37079_38119 = state_37063__$1;
(statearr_37079_38119[(1)] = (12));

} else {
var statearr_37080_38120 = state_37063__$1;
(statearr_37080_38120[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (3))){
var inst_37061 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37063__$1,inst_37061);
} else {
if((state_val_37064 === (12))){
var inst_37019 = (state_37063[(8)]);
var inst_37051 = cljs.core.vec(inst_37019);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37063__$1,(15),out,inst_37051);
} else {
if((state_val_37064 === (2))){
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37063__$1,(4),ch);
} else {
if((state_val_37064 === (11))){
var inst_37023 = (state_37063[(9)]);
var inst_37027 = (state_37063[(10)]);
var inst_37041 = (state_37063[(2)]);
var inst_37042 = [];
var inst_37043 = inst_37042.push(inst_37023);
var inst_37019 = inst_37042;
var inst_37020 = inst_37027;
var state_37063__$1 = (function (){var statearr_37081 = state_37063;
(statearr_37081[(7)] = inst_37020);

(statearr_37081[(11)] = inst_37041);

(statearr_37081[(12)] = inst_37043);

(statearr_37081[(8)] = inst_37019);

return statearr_37081;
})();
var statearr_37082_38123 = state_37063__$1;
(statearr_37082_38123[(2)] = null);

(statearr_37082_38123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (9))){
var inst_37019 = (state_37063[(8)]);
var inst_37039 = cljs.core.vec(inst_37019);
var state_37063__$1 = state_37063;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37063__$1,(11),out,inst_37039);
} else {
if((state_val_37064 === (5))){
var inst_37023 = (state_37063[(9)]);
var inst_37020 = (state_37063[(7)]);
var inst_37027 = (state_37063[(10)]);
var inst_37027__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37023) : f.call(null,inst_37023));
var inst_37028 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37027__$1,inst_37020);
var inst_37030 = cljs.core.keyword_identical_QMARK_(inst_37020,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37031 = ((inst_37028) || (inst_37030));
var state_37063__$1 = (function (){var statearr_37086 = state_37063;
(statearr_37086[(10)] = inst_37027__$1);

return statearr_37086;
})();
if(cljs.core.truth_(inst_37031)){
var statearr_37087_38130 = state_37063__$1;
(statearr_37087_38130[(1)] = (8));

} else {
var statearr_37088_38131 = state_37063__$1;
(statearr_37088_38131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (14))){
var inst_37056 = (state_37063[(2)]);
var inst_37057 = cljs.core.async.close_BANG_(out);
var state_37063__$1 = (function (){var statearr_37090 = state_37063;
(statearr_37090[(13)] = inst_37056);

return statearr_37090;
})();
var statearr_37091_38137 = state_37063__$1;
(statearr_37091_38137[(2)] = inst_37057);

(statearr_37091_38137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (10))){
var inst_37046 = (state_37063[(2)]);
var state_37063__$1 = state_37063;
var statearr_37092_38138 = state_37063__$1;
(statearr_37092_38138[(2)] = inst_37046);

(statearr_37092_38138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37064 === (8))){
var inst_37023 = (state_37063[(9)]);
var inst_37027 = (state_37063[(10)]);
var inst_37019 = (state_37063[(8)]);
var inst_37033 = inst_37019.push(inst_37023);
var tmp37089 = inst_37019;
var inst_37019__$1 = tmp37089;
var inst_37020 = inst_37027;
var state_37063__$1 = (function (){var statearr_37093 = state_37063;
(statearr_37093[(7)] = inst_37020);

(statearr_37093[(8)] = inst_37019__$1);

(statearr_37093[(14)] = inst_37033);

return statearr_37093;
})();
var statearr_37094_38144 = state_37063__$1;
(statearr_37094_38144[(2)] = null);

(statearr_37094_38144[(1)] = (2));


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
var cljs$core$async$state_machine__27459__auto__ = null;
var cljs$core$async$state_machine__27459__auto____0 = (function (){
var statearr_37095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37095[(0)] = cljs$core$async$state_machine__27459__auto__);

(statearr_37095[(1)] = (1));

return statearr_37095;
});
var cljs$core$async$state_machine__27459__auto____1 = (function (state_37063){
while(true){
var ret_value__27460__auto__ = (function (){try{while(true){
var result__27461__auto__ = switch__27458__auto__(state_37063);
if(cljs.core.keyword_identical_QMARK_(result__27461__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27461__auto__;
}
break;
}
}catch (e37096){var ex__27462__auto__ = e37096;
var statearr_37097_38145 = state_37063;
(statearr_37097_38145[(2)] = ex__27462__auto__);


if(cljs.core.seq((state_37063[(4)]))){
var statearr_37105_38146 = state_37063;
(statearr_37105_38146[(1)] = cljs.core.first((state_37063[(4)])));

} else {
throw ex__27462__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27460__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38147 = state_37063;
state_37063 = G__38147;
continue;
} else {
return ret_value__27460__auto__;
}
break;
}
});
cljs$core$async$state_machine__27459__auto__ = function(state_37063){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27459__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27459__auto____1.call(this,state_37063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27459__auto____0;
cljs$core$async$state_machine__27459__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27459__auto____1;
return cljs$core$async$state_machine__27459__auto__;
})()
})();
var state__27545__auto__ = (function (){var statearr_37112 = f__27544__auto__();
(statearr_37112[(6)] = c__27543__auto___38105);

return statearr_37112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27545__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
