goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42247 = arguments.length;
switch (G__42247) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42249 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42249 = (function (f,blockable,meta42250){
this.f = f;
this.blockable = blockable;
this.meta42250 = meta42250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42251,meta42250__$1){
var self__ = this;
var _42251__$1 = this;
return (new cljs.core.async.t_cljs$core$async42249(self__.f,self__.blockable,meta42250__$1));
}));

(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42251){
var self__ = this;
var _42251__$1 = this;
return self__.meta42250;
}));

(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42250","meta42250",-2046419123,null)], null);
}));

(cljs.core.async.t_cljs$core$async42249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42249");

(cljs.core.async.t_cljs$core$async42249.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42249.
 */
cljs.core.async.__GT_t_cljs$core$async42249 = (function cljs$core$async$__GT_t_cljs$core$async42249(f__$1,blockable__$1,meta42250){
return (new cljs.core.async.t_cljs$core$async42249(f__$1,blockable__$1,meta42250));
});

}

return (new cljs.core.async.t_cljs$core$async42249(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42254 = arguments.length;
switch (G__42254) {
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
var G__42260 = arguments.length;
switch (G__42260) {
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
var G__42268 = arguments.length;
switch (G__42268) {
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
var val_44360 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44360) : fn1.call(null,val_44360));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44360) : fn1.call(null,val_44360));
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
var G__42282 = arguments.length;
switch (G__42282) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4706__auto___44365 = n;
var x_44366 = (0);
while(true){
if((x_44366 < n__4706__auto___44365)){
(a[x_44366] = x_44366);

var G__44367 = (x_44366 + (1));
x_44366 = G__44367;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42299 = (function (flag,meta42300){
this.flag = flag;
this.meta42300 = meta42300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42301,meta42300__$1){
var self__ = this;
var _42301__$1 = this;
return (new cljs.core.async.t_cljs$core$async42299(self__.flag,meta42300__$1));
}));

(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42301){
var self__ = this;
var _42301__$1 = this;
return self__.meta42300;
}));

(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42300","meta42300",-1278030932,null)], null);
}));

(cljs.core.async.t_cljs$core$async42299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42299");

(cljs.core.async.t_cljs$core$async42299.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42299.
 */
cljs.core.async.__GT_t_cljs$core$async42299 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42299(flag__$1,meta42300){
return (new cljs.core.async.t_cljs$core$async42299(flag__$1,meta42300));
});

}

return (new cljs.core.async.t_cljs$core$async42299(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42306 = (function (flag,cb,meta42307){
this.flag = flag;
this.cb = cb;
this.meta42307 = meta42307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42308,meta42307__$1){
var self__ = this;
var _42308__$1 = this;
return (new cljs.core.async.t_cljs$core$async42306(self__.flag,self__.cb,meta42307__$1));
}));

(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42308){
var self__ = this;
var _42308__$1 = this;
return self__.meta42307;
}));

(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42307","meta42307",1331820192,null)], null);
}));

(cljs.core.async.t_cljs$core$async42306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42306");

(cljs.core.async.t_cljs$core$async42306.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42306.
 */
cljs.core.async.__GT_t_cljs$core$async42306 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42306(flag__$1,cb__$1,meta42307){
return (new cljs.core.async.t_cljs$core$async42306(flag__$1,cb__$1,meta42307));
});

}

return (new cljs.core.async.t_cljs$core$async42306(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42310_SHARP_){
var G__42318 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42310_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42318) : fret.call(null,G__42318));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42312_SHARP_){
var G__42320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42312_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42320) : fret.call(null,G__42320));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44377 = (i + (1));
i = G__44377;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___44378 = arguments.length;
var i__4830__auto___44379 = (0);
while(true){
if((i__4830__auto___44379 < len__4829__auto___44378)){
args__4835__auto__.push((arguments[i__4830__auto___44379]));

var G__44380 = (i__4830__auto___44379 + (1));
i__4830__auto___44379 = G__44380;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42333){
var map__42334 = p__42333;
var map__42334__$1 = cljs.core.__destructure_map(map__42334);
var opts = map__42334__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42330){
var G__42331 = cljs.core.first(seq42330);
var seq42330__$1 = cljs.core.next(seq42330);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42331,seq42330__$1);
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
var G__42358 = arguments.length;
switch (G__42358) {
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
var c__42184__auto___44384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42458){
var state_val_42459 = (state_42458[(1)]);
if((state_val_42459 === (7))){
var inst_42444 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
var statearr_42499_44385 = state_42458__$1;
(statearr_42499_44385[(2)] = inst_42444);

(statearr_42499_44385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (1))){
var state_42458__$1 = state_42458;
var statearr_42500_44386 = state_42458__$1;
(statearr_42500_44386[(2)] = null);

(statearr_42500_44386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (4))){
var inst_42403 = (state_42458[(7)]);
var inst_42403__$1 = (state_42458[(2)]);
var inst_42404 = (inst_42403__$1 == null);
var state_42458__$1 = (function (){var statearr_42501 = state_42458;
(statearr_42501[(7)] = inst_42403__$1);

return statearr_42501;
})();
if(cljs.core.truth_(inst_42404)){
var statearr_42502_44387 = state_42458__$1;
(statearr_42502_44387[(1)] = (5));

} else {
var statearr_42503_44388 = state_42458__$1;
(statearr_42503_44388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (13))){
var state_42458__$1 = state_42458;
var statearr_42505_44389 = state_42458__$1;
(statearr_42505_44389[(2)] = null);

(statearr_42505_44389[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (6))){
var inst_42403 = (state_42458[(7)]);
var state_42458__$1 = state_42458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42458__$1,(11),to,inst_42403);
} else {
if((state_val_42459 === (3))){
var inst_42446 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42458__$1,inst_42446);
} else {
if((state_val_42459 === (12))){
var state_42458__$1 = state_42458;
var statearr_42509_44391 = state_42458__$1;
(statearr_42509_44391[(2)] = null);

(statearr_42509_44391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (2))){
var state_42458__$1 = state_42458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42458__$1,(4),from);
} else {
if((state_val_42459 === (11))){
var inst_42437 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
if(cljs.core.truth_(inst_42437)){
var statearr_42515_44392 = state_42458__$1;
(statearr_42515_44392[(1)] = (12));

} else {
var statearr_42516_44393 = state_42458__$1;
(statearr_42516_44393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (9))){
var state_42458__$1 = state_42458;
var statearr_42517_44396 = state_42458__$1;
(statearr_42517_44396[(2)] = null);

(statearr_42517_44396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (5))){
var state_42458__$1 = state_42458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42522_44397 = state_42458__$1;
(statearr_42522_44397[(1)] = (8));

} else {
var statearr_42523_44398 = state_42458__$1;
(statearr_42523_44398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (14))){
var inst_42442 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
var statearr_42524_44399 = state_42458__$1;
(statearr_42524_44399[(2)] = inst_42442);

(statearr_42524_44399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (10))){
var inst_42433 = (state_42458[(2)]);
var state_42458__$1 = state_42458;
var statearr_42525_44400 = state_42458__$1;
(statearr_42525_44400[(2)] = inst_42433);

(statearr_42525_44400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42459 === (8))){
var inst_42425 = cljs.core.async.close_BANG_(to);
var state_42458__$1 = state_42458;
var statearr_42526_44401 = state_42458__$1;
(statearr_42526_44401[(2)] = inst_42425);

(statearr_42526_44401[(1)] = (10));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_42527 = [null,null,null,null,null,null,null,null];
(statearr_42527[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_42527[(1)] = (1));

return statearr_42527;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_42458){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42458);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42528){var ex__41970__auto__ = e42528;
var statearr_42529_44406 = state_42458;
(statearr_42529_44406[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42458[(4)]))){
var statearr_42530_44407 = state_42458;
(statearr_42530_44407[(1)] = cljs.core.first((state_42458[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44411 = state_42458;
state_42458 = G__44411;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_42458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_42458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42531 = f__42185__auto__();
(statearr_42531[(6)] = c__42184__auto___44384);

return statearr_42531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var process = (function (p__42533){
var vec__42534 = p__42533;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42534,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42534,(1),null);
var job = vec__42534;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42184__auto___44415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42541){
var state_val_42542 = (state_42541[(1)]);
if((state_val_42542 === (1))){
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42541__$1,(2),res,v);
} else {
if((state_val_42542 === (2))){
var inst_42538 = (state_42541[(2)]);
var inst_42539 = cljs.core.async.close_BANG_(res);
var state_42541__$1 = (function (){var statearr_42543 = state_42541;
(statearr_42543[(7)] = inst_42538);

return statearr_42543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42541__$1,inst_42539);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_42544 = [null,null,null,null,null,null,null,null];
(statearr_42544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__);

(statearr_42544[(1)] = (1));

return statearr_42544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1 = (function (state_42541){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42541);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42545){var ex__41970__auto__ = e42545;
var statearr_42546_44421 = state_42541;
(statearr_42546_44421[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42541[(4)]))){
var statearr_42547_44422 = state_42541;
(statearr_42547_44422[(1)] = cljs.core.first((state_42541[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44426 = state_42541;
state_42541 = G__44426;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = function(state_42541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1.call(this,state_42541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42554 = f__42185__auto__();
(statearr_42554[(6)] = c__42184__auto___44415);

return statearr_42554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42572){
var vec__42573 = p__42572;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573,(1),null);
var job = vec__42573;
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
var n__4706__auto___44427 = n;
var __44428 = (0);
while(true){
if((__44428 < n__4706__auto___44427)){
var G__42576_44429 = type;
var G__42576_44430__$1 = (((G__42576_44429 instanceof cljs.core.Keyword))?G__42576_44429.fqn:null);
switch (G__42576_44430__$1) {
case "compute":
var c__42184__auto___44432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44428,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = ((function (__44428,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function (state_42590){
var state_val_42591 = (state_42590[(1)]);
if((state_val_42591 === (1))){
var state_42590__$1 = state_42590;
var statearr_42594_44433 = state_42590__$1;
(statearr_42594_44433[(2)] = null);

(statearr_42594_44433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42591 === (2))){
var state_42590__$1 = state_42590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42590__$1,(4),jobs);
} else {
if((state_val_42591 === (3))){
var inst_42587 = (state_42590[(2)]);
var state_42590__$1 = state_42590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42590__$1,inst_42587);
} else {
if((state_val_42591 === (4))){
var inst_42579 = (state_42590[(2)]);
var inst_42580 = process(inst_42579);
var state_42590__$1 = state_42590;
if(cljs.core.truth_(inst_42580)){
var statearr_42595_44434 = state_42590__$1;
(statearr_42595_44434[(1)] = (5));

} else {
var statearr_42596_44435 = state_42590__$1;
(statearr_42596_44435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42591 === (5))){
var state_42590__$1 = state_42590;
var statearr_42597_44436 = state_42590__$1;
(statearr_42597_44436[(2)] = null);

(statearr_42597_44436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42591 === (6))){
var state_42590__$1 = state_42590;
var statearr_42598_44437 = state_42590__$1;
(statearr_42598_44437[(2)] = null);

(statearr_42598_44437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42591 === (7))){
var inst_42585 = (state_42590[(2)]);
var state_42590__$1 = state_42590;
var statearr_42599_44438 = state_42590__$1;
(statearr_42599_44438[(2)] = inst_42585);

(statearr_42599_44438[(1)] = (3));


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
});})(__44428,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
;
return ((function (__44428,switch__41966__auto__,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_42616 = [null,null,null,null,null,null,null];
(statearr_42616[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__);

(statearr_42616[(1)] = (1));

return statearr_42616;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1 = (function (state_42590){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42590);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42622){var ex__41970__auto__ = e42622;
var statearr_42623_44439 = state_42590;
(statearr_42623_44439[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42590[(4)]))){
var statearr_42624_44440 = state_42590;
(statearr_42624_44440[(1)] = cljs.core.first((state_42590[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44441 = state_42590;
state_42590 = G__44441;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = function(state_42590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1.call(this,state_42590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__;
})()
;})(__44428,switch__41966__auto__,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
})();
var state__42186__auto__ = (function (){var statearr_42625 = f__42185__auto__();
(statearr_42625[(6)] = c__42184__auto___44432);

return statearr_42625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
});})(__44428,c__42184__auto___44432,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
);


break;
case "async":
var c__42184__auto___44442 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44428,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = ((function (__44428,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function (state_42649){
var state_val_42650 = (state_42649[(1)]);
if((state_val_42650 === (1))){
var state_42649__$1 = state_42649;
var statearr_42661_44443 = state_42649__$1;
(statearr_42661_44443[(2)] = null);

(statearr_42661_44443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (2))){
var state_42649__$1 = state_42649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42649__$1,(4),jobs);
} else {
if((state_val_42650 === (3))){
var inst_42646 = (state_42649[(2)]);
var state_42649__$1 = state_42649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42649__$1,inst_42646);
} else {
if((state_val_42650 === (4))){
var inst_42633 = (state_42649[(2)]);
var inst_42638 = async(inst_42633);
var state_42649__$1 = state_42649;
if(cljs.core.truth_(inst_42638)){
var statearr_42683_44444 = state_42649__$1;
(statearr_42683_44444[(1)] = (5));

} else {
var statearr_42684_44445 = state_42649__$1;
(statearr_42684_44445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (5))){
var state_42649__$1 = state_42649;
var statearr_42685_44452 = state_42649__$1;
(statearr_42685_44452[(2)] = null);

(statearr_42685_44452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (6))){
var state_42649__$1 = state_42649;
var statearr_42686_44456 = state_42649__$1;
(statearr_42686_44456[(2)] = null);

(statearr_42686_44456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42650 === (7))){
var inst_42644 = (state_42649[(2)]);
var state_42649__$1 = state_42649;
var statearr_42687_44468 = state_42649__$1;
(statearr_42687_44468[(2)] = inst_42644);

(statearr_42687_44468[(1)] = (3));


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
});})(__44428,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
;
return ((function (__44428,switch__41966__auto__,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_42688 = [null,null,null,null,null,null,null];
(statearr_42688[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__);

(statearr_42688[(1)] = (1));

return statearr_42688;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1 = (function (state_42649){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42649);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42689){var ex__41970__auto__ = e42689;
var statearr_42690_44476 = state_42649;
(statearr_42690_44476[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42649[(4)]))){
var statearr_42692_44477 = state_42649;
(statearr_42692_44477[(1)] = cljs.core.first((state_42649[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44478 = state_42649;
state_42649 = G__44478;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = function(state_42649){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1.call(this,state_42649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__;
})()
;})(__44428,switch__41966__auto__,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
})();
var state__42186__auto__ = (function (){var statearr_42693 = f__42185__auto__();
(statearr_42693[(6)] = c__42184__auto___44442);

return statearr_42693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
});})(__44428,c__42184__auto___44442,G__42576_44429,G__42576_44430__$1,n__4706__auto___44427,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42576_44430__$1)].join('')));

}

var G__44479 = (__44428 + (1));
__44428 = G__44479;
continue;
} else {
}
break;
}

var c__42184__auto___44480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42723){
var state_val_42724 = (state_42723[(1)]);
if((state_val_42724 === (7))){
var inst_42719 = (state_42723[(2)]);
var state_42723__$1 = state_42723;
var statearr_42730_44482 = state_42723__$1;
(statearr_42730_44482[(2)] = inst_42719);

(statearr_42730_44482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42724 === (1))){
var state_42723__$1 = state_42723;
var statearr_42731_44483 = state_42723__$1;
(statearr_42731_44483[(2)] = null);

(statearr_42731_44483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42724 === (4))){
var inst_42696 = (state_42723[(7)]);
var inst_42696__$1 = (state_42723[(2)]);
var inst_42697 = (inst_42696__$1 == null);
var state_42723__$1 = (function (){var statearr_42732 = state_42723;
(statearr_42732[(7)] = inst_42696__$1);

return statearr_42732;
})();
if(cljs.core.truth_(inst_42697)){
var statearr_42733_44484 = state_42723__$1;
(statearr_42733_44484[(1)] = (5));

} else {
var statearr_42736_44485 = state_42723__$1;
(statearr_42736_44485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42724 === (6))){
var inst_42696 = (state_42723[(7)]);
var inst_42701 = (state_42723[(8)]);
var inst_42701__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42706 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42707 = [inst_42696,inst_42701__$1];
var inst_42708 = (new cljs.core.PersistentVector(null,2,(5),inst_42706,inst_42707,null));
var state_42723__$1 = (function (){var statearr_42739 = state_42723;
(statearr_42739[(8)] = inst_42701__$1);

return statearr_42739;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42723__$1,(8),jobs,inst_42708);
} else {
if((state_val_42724 === (3))){
var inst_42721 = (state_42723[(2)]);
var state_42723__$1 = state_42723;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42723__$1,inst_42721);
} else {
if((state_val_42724 === (2))){
var state_42723__$1 = state_42723;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42723__$1,(4),from);
} else {
if((state_val_42724 === (9))){
var inst_42716 = (state_42723[(2)]);
var state_42723__$1 = (function (){var statearr_42740 = state_42723;
(statearr_42740[(9)] = inst_42716);

return statearr_42740;
})();
var statearr_42741_44487 = state_42723__$1;
(statearr_42741_44487[(2)] = null);

(statearr_42741_44487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42724 === (5))){
var inst_42699 = cljs.core.async.close_BANG_(jobs);
var state_42723__$1 = state_42723;
var statearr_42742_44488 = state_42723__$1;
(statearr_42742_44488[(2)] = inst_42699);

(statearr_42742_44488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42724 === (8))){
var inst_42701 = (state_42723[(8)]);
var inst_42714 = (state_42723[(2)]);
var state_42723__$1 = (function (){var statearr_42744 = state_42723;
(statearr_42744[(10)] = inst_42714);

return statearr_42744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42723__$1,(9),results,inst_42701);
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
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_42746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42746[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__);

(statearr_42746[(1)] = (1));

return statearr_42746;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1 = (function (state_42723){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42723);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42747){var ex__41970__auto__ = e42747;
var statearr_42748_44490 = state_42723;
(statearr_42748_44490[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42723[(4)]))){
var statearr_42749_44491 = state_42723;
(statearr_42749_44491[(1)] = cljs.core.first((state_42723[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44492 = state_42723;
state_42723 = G__44492;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = function(state_42723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1.call(this,state_42723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42753 = f__42185__auto__();
(statearr_42753[(6)] = c__42184__auto___44480);

return statearr_42753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


var c__42184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42791){
var state_val_42792 = (state_42791[(1)]);
if((state_val_42792 === (7))){
var inst_42787 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
var statearr_42800_44493 = state_42791__$1;
(statearr_42800_44493[(2)] = inst_42787);

(statearr_42800_44493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (20))){
var state_42791__$1 = state_42791;
var statearr_42801_44494 = state_42791__$1;
(statearr_42801_44494[(2)] = null);

(statearr_42801_44494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (1))){
var state_42791__$1 = state_42791;
var statearr_42802_44495 = state_42791__$1;
(statearr_42802_44495[(2)] = null);

(statearr_42802_44495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (4))){
var inst_42756 = (state_42791[(7)]);
var inst_42756__$1 = (state_42791[(2)]);
var inst_42757 = (inst_42756__$1 == null);
var state_42791__$1 = (function (){var statearr_42806 = state_42791;
(statearr_42806[(7)] = inst_42756__$1);

return statearr_42806;
})();
if(cljs.core.truth_(inst_42757)){
var statearr_42807_44497 = state_42791__$1;
(statearr_42807_44497[(1)] = (5));

} else {
var statearr_42808_44498 = state_42791__$1;
(statearr_42808_44498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (15))){
var inst_42769 = (state_42791[(8)]);
var state_42791__$1 = state_42791;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42791__$1,(18),to,inst_42769);
} else {
if((state_val_42792 === (21))){
var inst_42782 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
var statearr_42812_44500 = state_42791__$1;
(statearr_42812_44500[(2)] = inst_42782);

(statearr_42812_44500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (13))){
var inst_42784 = (state_42791[(2)]);
var state_42791__$1 = (function (){var statearr_42813 = state_42791;
(statearr_42813[(9)] = inst_42784);

return statearr_42813;
})();
var statearr_42817_44501 = state_42791__$1;
(statearr_42817_44501[(2)] = null);

(statearr_42817_44501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (6))){
var inst_42756 = (state_42791[(7)]);
var state_42791__$1 = state_42791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42791__$1,(11),inst_42756);
} else {
if((state_val_42792 === (17))){
var inst_42777 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
if(cljs.core.truth_(inst_42777)){
var statearr_42818_44502 = state_42791__$1;
(statearr_42818_44502[(1)] = (19));

} else {
var statearr_42819_44503 = state_42791__$1;
(statearr_42819_44503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (3))){
var inst_42789 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42791__$1,inst_42789);
} else {
if((state_val_42792 === (12))){
var inst_42766 = (state_42791[(10)]);
var state_42791__$1 = state_42791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42791__$1,(14),inst_42766);
} else {
if((state_val_42792 === (2))){
var state_42791__$1 = state_42791;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42791__$1,(4),results);
} else {
if((state_val_42792 === (19))){
var state_42791__$1 = state_42791;
var statearr_42820_44504 = state_42791__$1;
(statearr_42820_44504[(2)] = null);

(statearr_42820_44504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (11))){
var inst_42766 = (state_42791[(2)]);
var state_42791__$1 = (function (){var statearr_42822 = state_42791;
(statearr_42822[(10)] = inst_42766);

return statearr_42822;
})();
var statearr_42823_44505 = state_42791__$1;
(statearr_42823_44505[(2)] = null);

(statearr_42823_44505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (9))){
var state_42791__$1 = state_42791;
var statearr_42824_44506 = state_42791__$1;
(statearr_42824_44506[(2)] = null);

(statearr_42824_44506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (5))){
var state_42791__$1 = state_42791;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42825_44507 = state_42791__$1;
(statearr_42825_44507[(1)] = (8));

} else {
var statearr_42826_44508 = state_42791__$1;
(statearr_42826_44508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (14))){
var inst_42769 = (state_42791[(8)]);
var inst_42771 = (state_42791[(11)]);
var inst_42769__$1 = (state_42791[(2)]);
var inst_42770 = (inst_42769__$1 == null);
var inst_42771__$1 = cljs.core.not(inst_42770);
var state_42791__$1 = (function (){var statearr_42831 = state_42791;
(statearr_42831[(8)] = inst_42769__$1);

(statearr_42831[(11)] = inst_42771__$1);

return statearr_42831;
})();
if(inst_42771__$1){
var statearr_42832_44509 = state_42791__$1;
(statearr_42832_44509[(1)] = (15));

} else {
var statearr_42833_44510 = state_42791__$1;
(statearr_42833_44510[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (16))){
var inst_42771 = (state_42791[(11)]);
var state_42791__$1 = state_42791;
var statearr_42841_44511 = state_42791__$1;
(statearr_42841_44511[(2)] = inst_42771);

(statearr_42841_44511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (10))){
var inst_42763 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
var statearr_42852_44513 = state_42791__$1;
(statearr_42852_44513[(2)] = inst_42763);

(statearr_42852_44513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (18))){
var inst_42774 = (state_42791[(2)]);
var state_42791__$1 = state_42791;
var statearr_42857_44514 = state_42791__$1;
(statearr_42857_44514[(2)] = inst_42774);

(statearr_42857_44514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42792 === (8))){
var inst_42760 = cljs.core.async.close_BANG_(to);
var state_42791__$1 = state_42791;
var statearr_42858_44516 = state_42791__$1;
(statearr_42858_44516[(2)] = inst_42760);

(statearr_42858_44516[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_42859 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42859[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__);

(statearr_42859[(1)] = (1));

return statearr_42859;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1 = (function (state_42791){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42791);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42860){var ex__41970__auto__ = e42860;
var statearr_42861_44517 = state_42791;
(statearr_42861_44517[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42791[(4)]))){
var statearr_42862_44518 = state_42791;
(statearr_42862_44518[(1)] = cljs.core.first((state_42791[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44519 = state_42791;
state_42791 = G__44519;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__ = function(state_42791){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1.call(this,state_42791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42863 = f__42185__auto__();
(statearr_42863[(6)] = c__42184__auto__);

return statearr_42863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

return c__42184__auto__;
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
var G__42865 = arguments.length;
switch (G__42865) {
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
var G__42867 = arguments.length;
switch (G__42867) {
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
var G__42869 = arguments.length;
switch (G__42869) {
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
var c__42184__auto___44525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42895){
var state_val_42896 = (state_42895[(1)]);
if((state_val_42896 === (7))){
var inst_42891 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
var statearr_42897_44526 = state_42895__$1;
(statearr_42897_44526[(2)] = inst_42891);

(statearr_42897_44526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (1))){
var state_42895__$1 = state_42895;
var statearr_42898_44527 = state_42895__$1;
(statearr_42898_44527[(2)] = null);

(statearr_42898_44527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (4))){
var inst_42872 = (state_42895[(7)]);
var inst_42872__$1 = (state_42895[(2)]);
var inst_42873 = (inst_42872__$1 == null);
var state_42895__$1 = (function (){var statearr_42899 = state_42895;
(statearr_42899[(7)] = inst_42872__$1);

return statearr_42899;
})();
if(cljs.core.truth_(inst_42873)){
var statearr_42900_44528 = state_42895__$1;
(statearr_42900_44528[(1)] = (5));

} else {
var statearr_42901_44529 = state_42895__$1;
(statearr_42901_44529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (13))){
var state_42895__$1 = state_42895;
var statearr_42902_44530 = state_42895__$1;
(statearr_42902_44530[(2)] = null);

(statearr_42902_44530[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (6))){
var inst_42872 = (state_42895[(7)]);
var inst_42878 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42872) : p.call(null,inst_42872));
var state_42895__$1 = state_42895;
if(cljs.core.truth_(inst_42878)){
var statearr_42903_44531 = state_42895__$1;
(statearr_42903_44531[(1)] = (9));

} else {
var statearr_42904_44532 = state_42895__$1;
(statearr_42904_44532[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (3))){
var inst_42893 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42895__$1,inst_42893);
} else {
if((state_val_42896 === (12))){
var state_42895__$1 = state_42895;
var statearr_42905_44533 = state_42895__$1;
(statearr_42905_44533[(2)] = null);

(statearr_42905_44533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (2))){
var state_42895__$1 = state_42895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42895__$1,(4),ch);
} else {
if((state_val_42896 === (11))){
var inst_42872 = (state_42895[(7)]);
var inst_42882 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42895__$1,(8),inst_42882,inst_42872);
} else {
if((state_val_42896 === (9))){
var state_42895__$1 = state_42895;
var statearr_42906_44534 = state_42895__$1;
(statearr_42906_44534[(2)] = tc);

(statearr_42906_44534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (5))){
var inst_42875 = cljs.core.async.close_BANG_(tc);
var inst_42876 = cljs.core.async.close_BANG_(fc);
var state_42895__$1 = (function (){var statearr_42907 = state_42895;
(statearr_42907[(8)] = inst_42875);

return statearr_42907;
})();
var statearr_42908_44535 = state_42895__$1;
(statearr_42908_44535[(2)] = inst_42876);

(statearr_42908_44535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (14))){
var inst_42889 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
var statearr_42909_44536 = state_42895__$1;
(statearr_42909_44536[(2)] = inst_42889);

(statearr_42909_44536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (10))){
var state_42895__$1 = state_42895;
var statearr_42910_44538 = state_42895__$1;
(statearr_42910_44538[(2)] = fc);

(statearr_42910_44538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42896 === (8))){
var inst_42884 = (state_42895[(2)]);
var state_42895__$1 = state_42895;
if(cljs.core.truth_(inst_42884)){
var statearr_42911_44540 = state_42895__$1;
(statearr_42911_44540[(1)] = (12));

} else {
var statearr_42912_44541 = state_42895__$1;
(statearr_42912_44541[(1)] = (13));

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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_42913 = [null,null,null,null,null,null,null,null,null];
(statearr_42913[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_42913[(1)] = (1));

return statearr_42913;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_42895){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42895);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42914){var ex__41970__auto__ = e42914;
var statearr_42915_44542 = state_42895;
(statearr_42915_44542[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42895[(4)]))){
var statearr_42916_44543 = state_42895;
(statearr_42916_44543[(1)] = cljs.core.first((state_42895[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44544 = state_42895;
state_42895 = G__44544;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_42895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_42895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42917 = f__42185__auto__();
(statearr_42917[(6)] = c__42184__auto___44525);

return statearr_42917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var c__42184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42939){
var state_val_42940 = (state_42939[(1)]);
if((state_val_42940 === (7))){
var inst_42935 = (state_42939[(2)]);
var state_42939__$1 = state_42939;
var statearr_42941_44545 = state_42939__$1;
(statearr_42941_44545[(2)] = inst_42935);

(statearr_42941_44545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (1))){
var inst_42918 = init;
var inst_42919 = inst_42918;
var state_42939__$1 = (function (){var statearr_42942 = state_42939;
(statearr_42942[(7)] = inst_42919);

return statearr_42942;
})();
var statearr_42943_44546 = state_42939__$1;
(statearr_42943_44546[(2)] = null);

(statearr_42943_44546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (4))){
var inst_42922 = (state_42939[(8)]);
var inst_42922__$1 = (state_42939[(2)]);
var inst_42923 = (inst_42922__$1 == null);
var state_42939__$1 = (function (){var statearr_42944 = state_42939;
(statearr_42944[(8)] = inst_42922__$1);

return statearr_42944;
})();
if(cljs.core.truth_(inst_42923)){
var statearr_42945_44547 = state_42939__$1;
(statearr_42945_44547[(1)] = (5));

} else {
var statearr_42946_44548 = state_42939__$1;
(statearr_42946_44548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (6))){
var inst_42922 = (state_42939[(8)]);
var inst_42926 = (state_42939[(9)]);
var inst_42919 = (state_42939[(7)]);
var inst_42926__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42919,inst_42922) : f.call(null,inst_42919,inst_42922));
var inst_42927 = cljs.core.reduced_QMARK_(inst_42926__$1);
var state_42939__$1 = (function (){var statearr_42947 = state_42939;
(statearr_42947[(9)] = inst_42926__$1);

return statearr_42947;
})();
if(inst_42927){
var statearr_42948_44549 = state_42939__$1;
(statearr_42948_44549[(1)] = (8));

} else {
var statearr_42949_44550 = state_42939__$1;
(statearr_42949_44550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (3))){
var inst_42937 = (state_42939[(2)]);
var state_42939__$1 = state_42939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42939__$1,inst_42937);
} else {
if((state_val_42940 === (2))){
var state_42939__$1 = state_42939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42939__$1,(4),ch);
} else {
if((state_val_42940 === (9))){
var inst_42926 = (state_42939[(9)]);
var inst_42919 = inst_42926;
var state_42939__$1 = (function (){var statearr_42950 = state_42939;
(statearr_42950[(7)] = inst_42919);

return statearr_42950;
})();
var statearr_42951_44553 = state_42939__$1;
(statearr_42951_44553[(2)] = null);

(statearr_42951_44553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (5))){
var inst_42919 = (state_42939[(7)]);
var state_42939__$1 = state_42939;
var statearr_42952_44554 = state_42939__$1;
(statearr_42952_44554[(2)] = inst_42919);

(statearr_42952_44554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (10))){
var inst_42933 = (state_42939[(2)]);
var state_42939__$1 = state_42939;
var statearr_42953_44555 = state_42939__$1;
(statearr_42953_44555[(2)] = inst_42933);

(statearr_42953_44555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42940 === (8))){
var inst_42926 = (state_42939[(9)]);
var inst_42929 = cljs.core.deref(inst_42926);
var state_42939__$1 = state_42939;
var statearr_42954_44556 = state_42939__$1;
(statearr_42954_44556[(2)] = inst_42929);

(statearr_42954_44556[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__41967__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41967__auto____0 = (function (){
var statearr_42955 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42955[(0)] = cljs$core$async$reduce_$_state_machine__41967__auto__);

(statearr_42955[(1)] = (1));

return statearr_42955;
});
var cljs$core$async$reduce_$_state_machine__41967__auto____1 = (function (state_42939){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42939);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42956){var ex__41970__auto__ = e42956;
var statearr_42957_44558 = state_42939;
(statearr_42957_44558[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42939[(4)]))){
var statearr_42958_44559 = state_42939;
(statearr_42958_44559[(1)] = cljs.core.first((state_42939[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44561 = state_42939;
state_42939 = G__44561;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41967__auto__ = function(state_42939){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41967__auto____1.call(this,state_42939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41967__auto____0;
cljs$core$async$reduce_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41967__auto____1;
return cljs$core$async$reduce_$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42959 = f__42185__auto__();
(statearr_42959[(6)] = c__42184__auto__);

return statearr_42959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

return c__42184__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_42965){
var state_val_42966 = (state_42965[(1)]);
if((state_val_42966 === (1))){
var inst_42960 = cljs.core.async.reduce(f__$1,init,ch);
var state_42965__$1 = state_42965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42965__$1,(2),inst_42960);
} else {
if((state_val_42966 === (2))){
var inst_42962 = (state_42965[(2)]);
var inst_42963 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42962) : f__$1.call(null,inst_42962));
var state_42965__$1 = state_42965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42965__$1,inst_42963);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41967__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41967__auto____0 = (function (){
var statearr_42967 = [null,null,null,null,null,null,null];
(statearr_42967[(0)] = cljs$core$async$transduce_$_state_machine__41967__auto__);

(statearr_42967[(1)] = (1));

return statearr_42967;
});
var cljs$core$async$transduce_$_state_machine__41967__auto____1 = (function (state_42965){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_42965);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e42968){var ex__41970__auto__ = e42968;
var statearr_42969_44562 = state_42965;
(statearr_42969_44562[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_42965[(4)]))){
var statearr_42970_44563 = state_42965;
(statearr_42970_44563[(1)] = cljs.core.first((state_42965[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44566 = state_42965;
state_42965 = G__44566;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41967__auto__ = function(state_42965){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41967__auto____1.call(this,state_42965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41967__auto____0;
cljs$core$async$transduce_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41967__auto____1;
return cljs$core$async$transduce_$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_42971 = f__42185__auto__();
(statearr_42971[(6)] = c__42184__auto__);

return statearr_42971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

return c__42184__auto__;
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
var G__42973 = arguments.length;
switch (G__42973) {
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
var c__42184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43003){
var state_val_43004 = (state_43003[(1)]);
if((state_val_43004 === (7))){
var inst_42984 = (state_43003[(2)]);
var state_43003__$1 = state_43003;
var statearr_43005_44572 = state_43003__$1;
(statearr_43005_44572[(2)] = inst_42984);

(statearr_43005_44572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (1))){
var inst_42974 = cljs.core.seq(coll);
var inst_42975 = inst_42974;
var state_43003__$1 = (function (){var statearr_43006 = state_43003;
(statearr_43006[(7)] = inst_42975);

return statearr_43006;
})();
var statearr_43007_44573 = state_43003__$1;
(statearr_43007_44573[(2)] = null);

(statearr_43007_44573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (4))){
var inst_42975 = (state_43003[(7)]);
var inst_42982 = cljs.core.first(inst_42975);
var state_43003__$1 = state_43003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43003__$1,(7),ch,inst_42982);
} else {
if((state_val_43004 === (13))){
var inst_42996 = (state_43003[(2)]);
var state_43003__$1 = state_43003;
var statearr_43009_44577 = state_43003__$1;
(statearr_43009_44577[(2)] = inst_42996);

(statearr_43009_44577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (6))){
var inst_42987 = (state_43003[(2)]);
var state_43003__$1 = state_43003;
if(cljs.core.truth_(inst_42987)){
var statearr_43014_44579 = state_43003__$1;
(statearr_43014_44579[(1)] = (8));

} else {
var statearr_43015_44581 = state_43003__$1;
(statearr_43015_44581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (3))){
var inst_43000 = (state_43003[(2)]);
var state_43003__$1 = state_43003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43003__$1,inst_43000);
} else {
if((state_val_43004 === (12))){
var state_43003__$1 = state_43003;
var statearr_43016_44582 = state_43003__$1;
(statearr_43016_44582[(2)] = null);

(statearr_43016_44582[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (2))){
var inst_42975 = (state_43003[(7)]);
var state_43003__$1 = state_43003;
if(cljs.core.truth_(inst_42975)){
var statearr_43017_44583 = state_43003__$1;
(statearr_43017_44583[(1)] = (4));

} else {
var statearr_43018_44584 = state_43003__$1;
(statearr_43018_44584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (11))){
var inst_42993 = cljs.core.async.close_BANG_(ch);
var state_43003__$1 = state_43003;
var statearr_43019_44585 = state_43003__$1;
(statearr_43019_44585[(2)] = inst_42993);

(statearr_43019_44585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (9))){
var state_43003__$1 = state_43003;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43020_44588 = state_43003__$1;
(statearr_43020_44588[(1)] = (11));

} else {
var statearr_43021_44589 = state_43003__$1;
(statearr_43021_44589[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (5))){
var inst_42975 = (state_43003[(7)]);
var state_43003__$1 = state_43003;
var statearr_43022_44590 = state_43003__$1;
(statearr_43022_44590[(2)] = inst_42975);

(statearr_43022_44590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (10))){
var inst_42998 = (state_43003[(2)]);
var state_43003__$1 = state_43003;
var statearr_43023_44591 = state_43003__$1;
(statearr_43023_44591[(2)] = inst_42998);

(statearr_43023_44591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43004 === (8))){
var inst_42975 = (state_43003[(7)]);
var inst_42989 = cljs.core.next(inst_42975);
var inst_42975__$1 = inst_42989;
var state_43003__$1 = (function (){var statearr_43024 = state_43003;
(statearr_43024[(7)] = inst_42975__$1);

return statearr_43024;
})();
var statearr_43025_44592 = state_43003__$1;
(statearr_43025_44592[(2)] = null);

(statearr_43025_44592[(1)] = (2));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43026 = [null,null,null,null,null,null,null,null];
(statearr_43026[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43026[(1)] = (1));

return statearr_43026;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43003){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43003);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43027){var ex__41970__auto__ = e43027;
var statearr_43028_44593 = state_43003;
(statearr_43028_44593[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43003[(4)]))){
var statearr_43029_44598 = state_43003;
(statearr_43029_44598[(1)] = cljs.core.first((state_43003[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44599 = state_43003;
state_43003 = G__44599;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43030 = f__42185__auto__();
(statearr_43030[(6)] = c__42184__auto__);

return statearr_43030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

return c__42184__auto__;
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
var G__43032 = arguments.length;
switch (G__43032) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44607 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44607(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44608 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44608(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44609 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44609(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44610 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44610(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43047 = (function (ch,cs,meta43048){
this.ch = ch;
this.cs = cs;
this.meta43048 = meta43048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43049,meta43048__$1){
var self__ = this;
var _43049__$1 = this;
return (new cljs.core.async.t_cljs$core$async43047(self__.ch,self__.cs,meta43048__$1));
}));

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43049){
var self__ = this;
var _43049__$1 = this;
return self__.meta43048;
}));

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43047.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43048","meta43048",-1663854270,null)], null);
}));

(cljs.core.async.t_cljs$core$async43047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43047");

(cljs.core.async.t_cljs$core$async43047.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43047.
 */
cljs.core.async.__GT_t_cljs$core$async43047 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43047(ch__$1,cs__$1,meta43048){
return (new cljs.core.async.t_cljs$core$async43047(ch__$1,cs__$1,meta43048));
});

}

return (new cljs.core.async.t_cljs$core$async43047(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42184__auto___44613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43185){
var state_val_43186 = (state_43185[(1)]);
if((state_val_43186 === (7))){
var inst_43181 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43187_44614 = state_43185__$1;
(statearr_43187_44614[(2)] = inst_43181);

(statearr_43187_44614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (20))){
var inst_43086 = (state_43185[(7)]);
var inst_43098 = cljs.core.first(inst_43086);
var inst_43099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43098,(0),null);
var inst_43100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43098,(1),null);
var state_43185__$1 = (function (){var statearr_43188 = state_43185;
(statearr_43188[(8)] = inst_43099);

return statearr_43188;
})();
if(cljs.core.truth_(inst_43100)){
var statearr_43189_44615 = state_43185__$1;
(statearr_43189_44615[(1)] = (22));

} else {
var statearr_43190_44616 = state_43185__$1;
(statearr_43190_44616[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (27))){
var inst_43128 = (state_43185[(9)]);
var inst_43135 = (state_43185[(10)]);
var inst_43054 = (state_43185[(11)]);
var inst_43130 = (state_43185[(12)]);
var inst_43135__$1 = cljs.core._nth(inst_43128,inst_43130);
var inst_43136 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43135__$1,inst_43054,done);
var state_43185__$1 = (function (){var statearr_43191 = state_43185;
(statearr_43191[(10)] = inst_43135__$1);

return statearr_43191;
})();
if(cljs.core.truth_(inst_43136)){
var statearr_43192_44619 = state_43185__$1;
(statearr_43192_44619[(1)] = (30));

} else {
var statearr_43193_44620 = state_43185__$1;
(statearr_43193_44620[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (1))){
var state_43185__$1 = state_43185;
var statearr_43194_44621 = state_43185__$1;
(statearr_43194_44621[(2)] = null);

(statearr_43194_44621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (24))){
var inst_43086 = (state_43185[(7)]);
var inst_43105 = (state_43185[(2)]);
var inst_43106 = cljs.core.next(inst_43086);
var inst_43064 = inst_43106;
var inst_43065 = null;
var inst_43066 = (0);
var inst_43067 = (0);
var state_43185__$1 = (function (){var statearr_43195 = state_43185;
(statearr_43195[(13)] = inst_43064);

(statearr_43195[(14)] = inst_43105);

(statearr_43195[(15)] = inst_43065);

(statearr_43195[(16)] = inst_43066);

(statearr_43195[(17)] = inst_43067);

return statearr_43195;
})();
var statearr_43196_44622 = state_43185__$1;
(statearr_43196_44622[(2)] = null);

(statearr_43196_44622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (39))){
var state_43185__$1 = state_43185;
var statearr_43202_44623 = state_43185__$1;
(statearr_43202_44623[(2)] = null);

(statearr_43202_44623[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (4))){
var inst_43054 = (state_43185[(11)]);
var inst_43054__$1 = (state_43185[(2)]);
var inst_43055 = (inst_43054__$1 == null);
var state_43185__$1 = (function (){var statearr_43204 = state_43185;
(statearr_43204[(11)] = inst_43054__$1);

return statearr_43204;
})();
if(cljs.core.truth_(inst_43055)){
var statearr_43205_44624 = state_43185__$1;
(statearr_43205_44624[(1)] = (5));

} else {
var statearr_43207_44625 = state_43185__$1;
(statearr_43207_44625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (15))){
var inst_43064 = (state_43185[(13)]);
var inst_43065 = (state_43185[(15)]);
var inst_43066 = (state_43185[(16)]);
var inst_43067 = (state_43185[(17)]);
var inst_43082 = (state_43185[(2)]);
var inst_43083 = (inst_43067 + (1));
var tmp43197 = inst_43064;
var tmp43198 = inst_43065;
var tmp43199 = inst_43066;
var inst_43064__$1 = tmp43197;
var inst_43065__$1 = tmp43198;
var inst_43066__$1 = tmp43199;
var inst_43067__$1 = inst_43083;
var state_43185__$1 = (function (){var statearr_43210 = state_43185;
(statearr_43210[(13)] = inst_43064__$1);

(statearr_43210[(15)] = inst_43065__$1);

(statearr_43210[(18)] = inst_43082);

(statearr_43210[(16)] = inst_43066__$1);

(statearr_43210[(17)] = inst_43067__$1);

return statearr_43210;
})();
var statearr_43211_44626 = state_43185__$1;
(statearr_43211_44626[(2)] = null);

(statearr_43211_44626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (21))){
var inst_43109 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43217_44627 = state_43185__$1;
(statearr_43217_44627[(2)] = inst_43109);

(statearr_43217_44627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (31))){
var inst_43135 = (state_43185[(10)]);
var inst_43139 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43135);
var state_43185__$1 = state_43185;
var statearr_43252_44628 = state_43185__$1;
(statearr_43252_44628[(2)] = inst_43139);

(statearr_43252_44628[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (32))){
var inst_43127 = (state_43185[(19)]);
var inst_43128 = (state_43185[(9)]);
var inst_43129 = (state_43185[(20)]);
var inst_43130 = (state_43185[(12)]);
var inst_43141 = (state_43185[(2)]);
var inst_43142 = (inst_43130 + (1));
var tmp43213 = inst_43127;
var tmp43214 = inst_43128;
var tmp43215 = inst_43129;
var inst_43127__$1 = tmp43213;
var inst_43128__$1 = tmp43214;
var inst_43129__$1 = tmp43215;
var inst_43130__$1 = inst_43142;
var state_43185__$1 = (function (){var statearr_43254 = state_43185;
(statearr_43254[(19)] = inst_43127__$1);

(statearr_43254[(9)] = inst_43128__$1);

(statearr_43254[(21)] = inst_43141);

(statearr_43254[(20)] = inst_43129__$1);

(statearr_43254[(12)] = inst_43130__$1);

return statearr_43254;
})();
var statearr_43259_44634 = state_43185__$1;
(statearr_43259_44634[(2)] = null);

(statearr_43259_44634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (40))){
var inst_43154 = (state_43185[(22)]);
var inst_43158 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43154);
var state_43185__$1 = state_43185;
var statearr_43261_44635 = state_43185__$1;
(statearr_43261_44635[(2)] = inst_43158);

(statearr_43261_44635[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (33))){
var inst_43145 = (state_43185[(23)]);
var inst_43147 = cljs.core.chunked_seq_QMARK_(inst_43145);
var state_43185__$1 = state_43185;
if(inst_43147){
var statearr_43266_44641 = state_43185__$1;
(statearr_43266_44641[(1)] = (36));

} else {
var statearr_43267_44646 = state_43185__$1;
(statearr_43267_44646[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (13))){
var inst_43076 = (state_43185[(24)]);
var inst_43079 = cljs.core.async.close_BANG_(inst_43076);
var state_43185__$1 = state_43185;
var statearr_43268_44647 = state_43185__$1;
(statearr_43268_44647[(2)] = inst_43079);

(statearr_43268_44647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (22))){
var inst_43099 = (state_43185[(8)]);
var inst_43102 = cljs.core.async.close_BANG_(inst_43099);
var state_43185__$1 = state_43185;
var statearr_43269_44648 = state_43185__$1;
(statearr_43269_44648[(2)] = inst_43102);

(statearr_43269_44648[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (36))){
var inst_43145 = (state_43185[(23)]);
var inst_43149 = cljs.core.chunk_first(inst_43145);
var inst_43150 = cljs.core.chunk_rest(inst_43145);
var inst_43151 = cljs.core.count(inst_43149);
var inst_43127 = inst_43150;
var inst_43128 = inst_43149;
var inst_43129 = inst_43151;
var inst_43130 = (0);
var state_43185__$1 = (function (){var statearr_43270 = state_43185;
(statearr_43270[(19)] = inst_43127);

(statearr_43270[(9)] = inst_43128);

(statearr_43270[(20)] = inst_43129);

(statearr_43270[(12)] = inst_43130);

return statearr_43270;
})();
var statearr_43271_44651 = state_43185__$1;
(statearr_43271_44651[(2)] = null);

(statearr_43271_44651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (41))){
var inst_43145 = (state_43185[(23)]);
var inst_43160 = (state_43185[(2)]);
var inst_43161 = cljs.core.next(inst_43145);
var inst_43127 = inst_43161;
var inst_43128 = null;
var inst_43129 = (0);
var inst_43130 = (0);
var state_43185__$1 = (function (){var statearr_43276 = state_43185;
(statearr_43276[(19)] = inst_43127);

(statearr_43276[(9)] = inst_43128);

(statearr_43276[(25)] = inst_43160);

(statearr_43276[(20)] = inst_43129);

(statearr_43276[(12)] = inst_43130);

return statearr_43276;
})();
var statearr_43277_44653 = state_43185__$1;
(statearr_43277_44653[(2)] = null);

(statearr_43277_44653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (43))){
var state_43185__$1 = state_43185;
var statearr_43278_44654 = state_43185__$1;
(statearr_43278_44654[(2)] = null);

(statearr_43278_44654[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (29))){
var inst_43169 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43279_44656 = state_43185__$1;
(statearr_43279_44656[(2)] = inst_43169);

(statearr_43279_44656[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (44))){
var inst_43178 = (state_43185[(2)]);
var state_43185__$1 = (function (){var statearr_43281 = state_43185;
(statearr_43281[(26)] = inst_43178);

return statearr_43281;
})();
var statearr_43283_44657 = state_43185__$1;
(statearr_43283_44657[(2)] = null);

(statearr_43283_44657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (6))){
var inst_43119 = (state_43185[(27)]);
var inst_43118 = cljs.core.deref(cs);
var inst_43119__$1 = cljs.core.keys(inst_43118);
var inst_43120 = cljs.core.count(inst_43119__$1);
var inst_43121 = cljs.core.reset_BANG_(dctr,inst_43120);
var inst_43126 = cljs.core.seq(inst_43119__$1);
var inst_43127 = inst_43126;
var inst_43128 = null;
var inst_43129 = (0);
var inst_43130 = (0);
var state_43185__$1 = (function (){var statearr_43284 = state_43185;
(statearr_43284[(19)] = inst_43127);

(statearr_43284[(9)] = inst_43128);

(statearr_43284[(27)] = inst_43119__$1);

(statearr_43284[(20)] = inst_43129);

(statearr_43284[(28)] = inst_43121);

(statearr_43284[(12)] = inst_43130);

return statearr_43284;
})();
var statearr_43285_44658 = state_43185__$1;
(statearr_43285_44658[(2)] = null);

(statearr_43285_44658[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (28))){
var inst_43127 = (state_43185[(19)]);
var inst_43145 = (state_43185[(23)]);
var inst_43145__$1 = cljs.core.seq(inst_43127);
var state_43185__$1 = (function (){var statearr_43286 = state_43185;
(statearr_43286[(23)] = inst_43145__$1);

return statearr_43286;
})();
if(inst_43145__$1){
var statearr_43287_44659 = state_43185__$1;
(statearr_43287_44659[(1)] = (33));

} else {
var statearr_43288_44660 = state_43185__$1;
(statearr_43288_44660[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (25))){
var inst_43129 = (state_43185[(20)]);
var inst_43130 = (state_43185[(12)]);
var inst_43132 = (inst_43130 < inst_43129);
var inst_43133 = inst_43132;
var state_43185__$1 = state_43185;
if(cljs.core.truth_(inst_43133)){
var statearr_43289_44661 = state_43185__$1;
(statearr_43289_44661[(1)] = (27));

} else {
var statearr_43290_44662 = state_43185__$1;
(statearr_43290_44662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (34))){
var state_43185__$1 = state_43185;
var statearr_43292_44665 = state_43185__$1;
(statearr_43292_44665[(2)] = null);

(statearr_43292_44665[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (17))){
var state_43185__$1 = state_43185;
var statearr_43293_44666 = state_43185__$1;
(statearr_43293_44666[(2)] = null);

(statearr_43293_44666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (3))){
var inst_43183 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43185__$1,inst_43183);
} else {
if((state_val_43186 === (12))){
var inst_43114 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43294_44667 = state_43185__$1;
(statearr_43294_44667[(2)] = inst_43114);

(statearr_43294_44667[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (2))){
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43185__$1,(4),ch);
} else {
if((state_val_43186 === (23))){
var state_43185__$1 = state_43185;
var statearr_43295_44668 = state_43185__$1;
(statearr_43295_44668[(2)] = null);

(statearr_43295_44668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (35))){
var inst_43167 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43296_44669 = state_43185__$1;
(statearr_43296_44669[(2)] = inst_43167);

(statearr_43296_44669[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (19))){
var inst_43086 = (state_43185[(7)]);
var inst_43090 = cljs.core.chunk_first(inst_43086);
var inst_43091 = cljs.core.chunk_rest(inst_43086);
var inst_43092 = cljs.core.count(inst_43090);
var inst_43064 = inst_43091;
var inst_43065 = inst_43090;
var inst_43066 = inst_43092;
var inst_43067 = (0);
var state_43185__$1 = (function (){var statearr_43299 = state_43185;
(statearr_43299[(13)] = inst_43064);

(statearr_43299[(15)] = inst_43065);

(statearr_43299[(16)] = inst_43066);

(statearr_43299[(17)] = inst_43067);

return statearr_43299;
})();
var statearr_43300_44670 = state_43185__$1;
(statearr_43300_44670[(2)] = null);

(statearr_43300_44670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (11))){
var inst_43064 = (state_43185[(13)]);
var inst_43086 = (state_43185[(7)]);
var inst_43086__$1 = cljs.core.seq(inst_43064);
var state_43185__$1 = (function (){var statearr_43305 = state_43185;
(statearr_43305[(7)] = inst_43086__$1);

return statearr_43305;
})();
if(inst_43086__$1){
var statearr_43306_44671 = state_43185__$1;
(statearr_43306_44671[(1)] = (16));

} else {
var statearr_43307_44672 = state_43185__$1;
(statearr_43307_44672[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (9))){
var inst_43116 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43308_44673 = state_43185__$1;
(statearr_43308_44673[(2)] = inst_43116);

(statearr_43308_44673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (5))){
var inst_43062 = cljs.core.deref(cs);
var inst_43063 = cljs.core.seq(inst_43062);
var inst_43064 = inst_43063;
var inst_43065 = null;
var inst_43066 = (0);
var inst_43067 = (0);
var state_43185__$1 = (function (){var statearr_43309 = state_43185;
(statearr_43309[(13)] = inst_43064);

(statearr_43309[(15)] = inst_43065);

(statearr_43309[(16)] = inst_43066);

(statearr_43309[(17)] = inst_43067);

return statearr_43309;
})();
var statearr_43310_44676 = state_43185__$1;
(statearr_43310_44676[(2)] = null);

(statearr_43310_44676[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (14))){
var state_43185__$1 = state_43185;
var statearr_43311_44677 = state_43185__$1;
(statearr_43311_44677[(2)] = null);

(statearr_43311_44677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (45))){
var inst_43175 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43312_44678 = state_43185__$1;
(statearr_43312_44678[(2)] = inst_43175);

(statearr_43312_44678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (26))){
var inst_43119 = (state_43185[(27)]);
var inst_43171 = (state_43185[(2)]);
var inst_43172 = cljs.core.seq(inst_43119);
var state_43185__$1 = (function (){var statearr_43313 = state_43185;
(statearr_43313[(29)] = inst_43171);

return statearr_43313;
})();
if(inst_43172){
var statearr_43314_44679 = state_43185__$1;
(statearr_43314_44679[(1)] = (42));

} else {
var statearr_43315_44680 = state_43185__$1;
(statearr_43315_44680[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (16))){
var inst_43086 = (state_43185[(7)]);
var inst_43088 = cljs.core.chunked_seq_QMARK_(inst_43086);
var state_43185__$1 = state_43185;
if(inst_43088){
var statearr_43316_44681 = state_43185__$1;
(statearr_43316_44681[(1)] = (19));

} else {
var statearr_43318_44686 = state_43185__$1;
(statearr_43318_44686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (38))){
var inst_43164 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43322_44687 = state_43185__$1;
(statearr_43322_44687[(2)] = inst_43164);

(statearr_43322_44687[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (30))){
var state_43185__$1 = state_43185;
var statearr_43323_44691 = state_43185__$1;
(statearr_43323_44691[(2)] = null);

(statearr_43323_44691[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (10))){
var inst_43065 = (state_43185[(15)]);
var inst_43067 = (state_43185[(17)]);
var inst_43075 = cljs.core._nth(inst_43065,inst_43067);
var inst_43076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43075,(0),null);
var inst_43077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43075,(1),null);
var state_43185__$1 = (function (){var statearr_43324 = state_43185;
(statearr_43324[(24)] = inst_43076);

return statearr_43324;
})();
if(cljs.core.truth_(inst_43077)){
var statearr_43326_44692 = state_43185__$1;
(statearr_43326_44692[(1)] = (13));

} else {
var statearr_43330_44693 = state_43185__$1;
(statearr_43330_44693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (18))){
var inst_43112 = (state_43185[(2)]);
var state_43185__$1 = state_43185;
var statearr_43331_44694 = state_43185__$1;
(statearr_43331_44694[(2)] = inst_43112);

(statearr_43331_44694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (42))){
var state_43185__$1 = state_43185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43185__$1,(45),dchan);
} else {
if((state_val_43186 === (37))){
var inst_43054 = (state_43185[(11)]);
var inst_43154 = (state_43185[(22)]);
var inst_43145 = (state_43185[(23)]);
var inst_43154__$1 = cljs.core.first(inst_43145);
var inst_43155 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43154__$1,inst_43054,done);
var state_43185__$1 = (function (){var statearr_43332 = state_43185;
(statearr_43332[(22)] = inst_43154__$1);

return statearr_43332;
})();
if(cljs.core.truth_(inst_43155)){
var statearr_43333_44695 = state_43185__$1;
(statearr_43333_44695[(1)] = (39));

} else {
var statearr_43335_44696 = state_43185__$1;
(statearr_43335_44696[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43186 === (8))){
var inst_43066 = (state_43185[(16)]);
var inst_43067 = (state_43185[(17)]);
var inst_43069 = (inst_43067 < inst_43066);
var inst_43070 = inst_43069;
var state_43185__$1 = state_43185;
if(cljs.core.truth_(inst_43070)){
var statearr_43337_44697 = state_43185__$1;
(statearr_43337_44697[(1)] = (10));

} else {
var statearr_43338_44698 = state_43185__$1;
(statearr_43338_44698[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__41967__auto__ = null;
var cljs$core$async$mult_$_state_machine__41967__auto____0 = (function (){
var statearr_43339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43339[(0)] = cljs$core$async$mult_$_state_machine__41967__auto__);

(statearr_43339[(1)] = (1));

return statearr_43339;
});
var cljs$core$async$mult_$_state_machine__41967__auto____1 = (function (state_43185){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43185);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43341){var ex__41970__auto__ = e43341;
var statearr_43343_44702 = state_43185;
(statearr_43343_44702[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43185[(4)]))){
var statearr_43344_44703 = state_43185;
(statearr_43344_44703[(1)] = cljs.core.first((state_43185[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44704 = state_43185;
state_43185 = G__44704;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41967__auto__ = function(state_43185){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41967__auto____1.call(this,state_43185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41967__auto____0;
cljs$core$async$mult_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41967__auto____1;
return cljs$core$async$mult_$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43347 = f__42185__auto__();
(statearr_43347[(6)] = c__42184__auto___44613);

return statearr_43347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var G__43349 = arguments.length;
switch (G__43349) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44709 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44709(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44713 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44713(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44717 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44717(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44721 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44721(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44728 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44728(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___44735 = arguments.length;
var i__4830__auto___44736 = (0);
while(true){
if((i__4830__auto___44736 < len__4829__auto___44735)){
args__4835__auto__.push((arguments[i__4830__auto___44736]));

var G__44737 = (i__4830__auto___44736 + (1));
i__4830__auto___44736 = G__44737;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43375){
var map__43376 = p__43375;
var map__43376__$1 = cljs.core.__destructure_map(map__43376);
var opts = map__43376__$1;
var statearr_43377_44738 = state;
(statearr_43377_44738[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43378_44741 = state;
(statearr_43378_44741[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_43379_44747 = state;
(statearr_43379_44747[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43371){
var G__43372 = cljs.core.first(seq43371);
var seq43371__$1 = cljs.core.next(seq43371);
var G__43373 = cljs.core.first(seq43371__$1);
var seq43371__$2 = cljs.core.next(seq43371__$1);
var G__43374 = cljs.core.first(seq43371__$2);
var seq43371__$3 = cljs.core.next(seq43371__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43372,G__43373,G__43374,seq43371__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43381 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43382){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43382 = meta43382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43383,meta43382__$1){
var self__ = this;
var _43383__$1 = this;
return (new cljs.core.async.t_cljs$core$async43381(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43382__$1));
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43383){
var self__ = this;
var _43383__$1 = this;
return self__.meta43382;
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43381.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43382","meta43382",1894678240,null)], null);
}));

(cljs.core.async.t_cljs$core$async43381.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43381");

(cljs.core.async.t_cljs$core$async43381.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43381");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43381.
 */
cljs.core.async.__GT_t_cljs$core$async43381 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43381(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43382){
return (new cljs.core.async.t_cljs$core$async43381(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43382));
});

}

return (new cljs.core.async.t_cljs$core$async43381(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42184__auto___44766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43457){
var state_val_43458 = (state_43457[(1)]);
if((state_val_43458 === (7))){
var inst_43415 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
if(cljs.core.truth_(inst_43415)){
var statearr_43463_44767 = state_43457__$1;
(statearr_43463_44767[(1)] = (8));

} else {
var statearr_43464_44768 = state_43457__$1;
(statearr_43464_44768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (20))){
var inst_43408 = (state_43457[(7)]);
var state_43457__$1 = state_43457;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43457__$1,(23),out,inst_43408);
} else {
if((state_val_43458 === (1))){
var inst_43391 = calc_state();
var inst_43392 = cljs.core.__destructure_map(inst_43391);
var inst_43393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43392,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43392,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43392,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43396 = inst_43391;
var state_43457__$1 = (function (){var statearr_43465 = state_43457;
(statearr_43465[(8)] = inst_43393);

(statearr_43465[(9)] = inst_43394);

(statearr_43465[(10)] = inst_43396);

(statearr_43465[(11)] = inst_43395);

return statearr_43465;
})();
var statearr_43466_44769 = state_43457__$1;
(statearr_43466_44769[(2)] = null);

(statearr_43466_44769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (24))){
var inst_43399 = (state_43457[(12)]);
var inst_43396 = inst_43399;
var state_43457__$1 = (function (){var statearr_43467 = state_43457;
(statearr_43467[(10)] = inst_43396);

return statearr_43467;
})();
var statearr_43468_44770 = state_43457__$1;
(statearr_43468_44770[(2)] = null);

(statearr_43468_44770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (4))){
var inst_43408 = (state_43457[(7)]);
var inst_43410 = (state_43457[(13)]);
var inst_43407 = (state_43457[(2)]);
var inst_43408__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43407,(0),null);
var inst_43409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43407,(1),null);
var inst_43410__$1 = (inst_43408__$1 == null);
var state_43457__$1 = (function (){var statearr_43470 = state_43457;
(statearr_43470[(7)] = inst_43408__$1);

(statearr_43470[(13)] = inst_43410__$1);

(statearr_43470[(14)] = inst_43409);

return statearr_43470;
})();
if(cljs.core.truth_(inst_43410__$1)){
var statearr_43471_44771 = state_43457__$1;
(statearr_43471_44771[(1)] = (5));

} else {
var statearr_43472_44772 = state_43457__$1;
(statearr_43472_44772[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (15))){
var inst_43431 = (state_43457[(15)]);
var inst_43400 = (state_43457[(16)]);
var inst_43431__$1 = cljs.core.empty_QMARK_(inst_43400);
var state_43457__$1 = (function (){var statearr_43477 = state_43457;
(statearr_43477[(15)] = inst_43431__$1);

return statearr_43477;
})();
if(inst_43431__$1){
var statearr_43478_44773 = state_43457__$1;
(statearr_43478_44773[(1)] = (17));

} else {
var statearr_43480_44774 = state_43457__$1;
(statearr_43480_44774[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (21))){
var inst_43399 = (state_43457[(12)]);
var inst_43396 = inst_43399;
var state_43457__$1 = (function (){var statearr_43481 = state_43457;
(statearr_43481[(10)] = inst_43396);

return statearr_43481;
})();
var statearr_43482_44775 = state_43457__$1;
(statearr_43482_44775[(2)] = null);

(statearr_43482_44775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (13))){
var inst_43424 = (state_43457[(2)]);
var inst_43425 = calc_state();
var inst_43396 = inst_43425;
var state_43457__$1 = (function (){var statearr_43483 = state_43457;
(statearr_43483[(17)] = inst_43424);

(statearr_43483[(10)] = inst_43396);

return statearr_43483;
})();
var statearr_43484_44777 = state_43457__$1;
(statearr_43484_44777[(2)] = null);

(statearr_43484_44777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (22))){
var inst_43451 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
var statearr_43485_44778 = state_43457__$1;
(statearr_43485_44778[(2)] = inst_43451);

(statearr_43485_44778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (6))){
var inst_43409 = (state_43457[(14)]);
var inst_43413 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43409,change);
var state_43457__$1 = state_43457;
var statearr_43487_44779 = state_43457__$1;
(statearr_43487_44779[(2)] = inst_43413);

(statearr_43487_44779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (25))){
var state_43457__$1 = state_43457;
var statearr_43488_44780 = state_43457__$1;
(statearr_43488_44780[(2)] = null);

(statearr_43488_44780[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (17))){
var inst_43409 = (state_43457[(14)]);
var inst_43401 = (state_43457[(18)]);
var inst_43433 = (inst_43401.cljs$core$IFn$_invoke$arity$1 ? inst_43401.cljs$core$IFn$_invoke$arity$1(inst_43409) : inst_43401.call(null,inst_43409));
var inst_43434 = cljs.core.not(inst_43433);
var state_43457__$1 = state_43457;
var statearr_43493_44781 = state_43457__$1;
(statearr_43493_44781[(2)] = inst_43434);

(statearr_43493_44781[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (3))){
var inst_43455 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43457__$1,inst_43455);
} else {
if((state_val_43458 === (12))){
var state_43457__$1 = state_43457;
var statearr_43496_44782 = state_43457__$1;
(statearr_43496_44782[(2)] = null);

(statearr_43496_44782[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (2))){
var inst_43396 = (state_43457[(10)]);
var inst_43399 = (state_43457[(12)]);
var inst_43399__$1 = cljs.core.__destructure_map(inst_43396);
var inst_43400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43399__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43399__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43399__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43457__$1 = (function (){var statearr_43498 = state_43457;
(statearr_43498[(18)] = inst_43401);

(statearr_43498[(12)] = inst_43399__$1);

(statearr_43498[(16)] = inst_43400);

return statearr_43498;
})();
return cljs.core.async.ioc_alts_BANG_(state_43457__$1,(4),inst_43402);
} else {
if((state_val_43458 === (23))){
var inst_43442 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
if(cljs.core.truth_(inst_43442)){
var statearr_43500_44783 = state_43457__$1;
(statearr_43500_44783[(1)] = (24));

} else {
var statearr_43502_44784 = state_43457__$1;
(statearr_43502_44784[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (19))){
var inst_43437 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
var statearr_43504_44785 = state_43457__$1;
(statearr_43504_44785[(2)] = inst_43437);

(statearr_43504_44785[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (11))){
var inst_43409 = (state_43457[(14)]);
var inst_43420 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43409);
var state_43457__$1 = state_43457;
var statearr_43506_44786 = state_43457__$1;
(statearr_43506_44786[(2)] = inst_43420);

(statearr_43506_44786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (9))){
var inst_43409 = (state_43457[(14)]);
var inst_43428 = (state_43457[(19)]);
var inst_43400 = (state_43457[(16)]);
var inst_43428__$1 = (inst_43400.cljs$core$IFn$_invoke$arity$1 ? inst_43400.cljs$core$IFn$_invoke$arity$1(inst_43409) : inst_43400.call(null,inst_43409));
var state_43457__$1 = (function (){var statearr_43508 = state_43457;
(statearr_43508[(19)] = inst_43428__$1);

return statearr_43508;
})();
if(cljs.core.truth_(inst_43428__$1)){
var statearr_43509_44787 = state_43457__$1;
(statearr_43509_44787[(1)] = (14));

} else {
var statearr_43510_44788 = state_43457__$1;
(statearr_43510_44788[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (5))){
var inst_43410 = (state_43457[(13)]);
var state_43457__$1 = state_43457;
var statearr_43512_44789 = state_43457__$1;
(statearr_43512_44789[(2)] = inst_43410);

(statearr_43512_44789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (14))){
var inst_43428 = (state_43457[(19)]);
var state_43457__$1 = state_43457;
var statearr_43513_44790 = state_43457__$1;
(statearr_43513_44790[(2)] = inst_43428);

(statearr_43513_44790[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (26))){
var inst_43447 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
var statearr_43514_44791 = state_43457__$1;
(statearr_43514_44791[(2)] = inst_43447);

(statearr_43514_44791[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (16))){
var inst_43439 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
if(cljs.core.truth_(inst_43439)){
var statearr_43515_44792 = state_43457__$1;
(statearr_43515_44792[(1)] = (20));

} else {
var statearr_43516_44793 = state_43457__$1;
(statearr_43516_44793[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (10))){
var inst_43453 = (state_43457[(2)]);
var state_43457__$1 = state_43457;
var statearr_43517_44794 = state_43457__$1;
(statearr_43517_44794[(2)] = inst_43453);

(statearr_43517_44794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (18))){
var inst_43431 = (state_43457[(15)]);
var state_43457__$1 = state_43457;
var statearr_43518_44795 = state_43457__$1;
(statearr_43518_44795[(2)] = inst_43431);

(statearr_43518_44795[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43458 === (8))){
var inst_43408 = (state_43457[(7)]);
var inst_43418 = (inst_43408 == null);
var state_43457__$1 = state_43457;
if(cljs.core.truth_(inst_43418)){
var statearr_43519_44796 = state_43457__$1;
(statearr_43519_44796[(1)] = (11));

} else {
var statearr_43520_44797 = state_43457__$1;
(statearr_43520_44797[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__41967__auto__ = null;
var cljs$core$async$mix_$_state_machine__41967__auto____0 = (function (){
var statearr_43521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43521[(0)] = cljs$core$async$mix_$_state_machine__41967__auto__);

(statearr_43521[(1)] = (1));

return statearr_43521;
});
var cljs$core$async$mix_$_state_machine__41967__auto____1 = (function (state_43457){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43457);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43522){var ex__41970__auto__ = e43522;
var statearr_43523_44798 = state_43457;
(statearr_43523_44798[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43457[(4)]))){
var statearr_43524_44799 = state_43457;
(statearr_43524_44799[(1)] = cljs.core.first((state_43457[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44800 = state_43457;
state_43457 = G__44800;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41967__auto__ = function(state_43457){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41967__auto____1.call(this,state_43457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41967__auto____0;
cljs$core$async$mix_$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41967__auto____1;
return cljs$core$async$mix_$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43525 = f__42185__auto__();
(statearr_43525[(6)] = c__42184__auto___44766);

return statearr_43525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_44801 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44801(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44802 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44802(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44804 = (function() {
var G__44805 = null;
var G__44805__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44805__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44805 = function(p,v){
switch(arguments.length){
case 1:
return G__44805__1.call(this,p);
case 2:
return G__44805__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44805.cljs$core$IFn$_invoke$arity$1 = G__44805__1;
G__44805.cljs$core$IFn$_invoke$arity$2 = G__44805__2;
return G__44805;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43545 = arguments.length;
switch (G__43545) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44804(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44804(p,v);
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
var G__43549 = arguments.length;
switch (G__43549) {
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
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43546_SHARP_){
if(cljs.core.truth_((p1__43546_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43546_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43546_SHARP_.call(null,topic)))){
return p1__43546_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43546_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43552 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43553){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43553 = meta43553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43554,meta43553__$1){
var self__ = this;
var _43554__$1 = this;
return (new cljs.core.async.t_cljs$core$async43552(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43553__$1));
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43554){
var self__ = this;
var _43554__$1 = this;
return self__.meta43553;
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43553","meta43553",1832970777,null)], null);
}));

(cljs.core.async.t_cljs$core$async43552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43552");

(cljs.core.async.t_cljs$core$async43552.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43552.
 */
cljs.core.async.__GT_t_cljs$core$async43552 = (function cljs$core$async$__GT_t_cljs$core$async43552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43553){
return (new cljs.core.async.t_cljs$core$async43552(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43553));
});

}

return (new cljs.core.async.t_cljs$core$async43552(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42184__auto___44815 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43646){
var state_val_43647 = (state_43646[(1)]);
if((state_val_43647 === (7))){
var inst_43642 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43648_44816 = state_43646__$1;
(statearr_43648_44816[(2)] = inst_43642);

(statearr_43648_44816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (20))){
var state_43646__$1 = state_43646;
var statearr_43649_44817 = state_43646__$1;
(statearr_43649_44817[(2)] = null);

(statearr_43649_44817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (1))){
var state_43646__$1 = state_43646;
var statearr_43650_44818 = state_43646__$1;
(statearr_43650_44818[(2)] = null);

(statearr_43650_44818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (24))){
var inst_43625 = (state_43646[(7)]);
var inst_43634 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43625);
var state_43646__$1 = state_43646;
var statearr_43651_44819 = state_43646__$1;
(statearr_43651_44819[(2)] = inst_43634);

(statearr_43651_44819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (4))){
var inst_43570 = (state_43646[(8)]);
var inst_43570__$1 = (state_43646[(2)]);
var inst_43571 = (inst_43570__$1 == null);
var state_43646__$1 = (function (){var statearr_43652 = state_43646;
(statearr_43652[(8)] = inst_43570__$1);

return statearr_43652;
})();
if(cljs.core.truth_(inst_43571)){
var statearr_43653_44820 = state_43646__$1;
(statearr_43653_44820[(1)] = (5));

} else {
var statearr_43654_44821 = state_43646__$1;
(statearr_43654_44821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (15))){
var inst_43619 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43655_44823 = state_43646__$1;
(statearr_43655_44823[(2)] = inst_43619);

(statearr_43655_44823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (21))){
var inst_43639 = (state_43646[(2)]);
var state_43646__$1 = (function (){var statearr_43656 = state_43646;
(statearr_43656[(9)] = inst_43639);

return statearr_43656;
})();
var statearr_43660_44827 = state_43646__$1;
(statearr_43660_44827[(2)] = null);

(statearr_43660_44827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (13))){
var inst_43600 = (state_43646[(10)]);
var inst_43602 = cljs.core.chunked_seq_QMARK_(inst_43600);
var state_43646__$1 = state_43646;
if(inst_43602){
var statearr_43661_44828 = state_43646__$1;
(statearr_43661_44828[(1)] = (16));

} else {
var statearr_43662_44829 = state_43646__$1;
(statearr_43662_44829[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (22))){
var inst_43631 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
if(cljs.core.truth_(inst_43631)){
var statearr_43663_44830 = state_43646__$1;
(statearr_43663_44830[(1)] = (23));

} else {
var statearr_43664_44831 = state_43646__$1;
(statearr_43664_44831[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (6))){
var inst_43625 = (state_43646[(7)]);
var inst_43570 = (state_43646[(8)]);
var inst_43627 = (state_43646[(11)]);
var inst_43625__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43570) : topic_fn.call(null,inst_43570));
var inst_43626 = cljs.core.deref(mults);
var inst_43627__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43626,inst_43625__$1);
var state_43646__$1 = (function (){var statearr_43665 = state_43646;
(statearr_43665[(7)] = inst_43625__$1);

(statearr_43665[(11)] = inst_43627__$1);

return statearr_43665;
})();
if(cljs.core.truth_(inst_43627__$1)){
var statearr_43666_44832 = state_43646__$1;
(statearr_43666_44832[(1)] = (19));

} else {
var statearr_43668_44833 = state_43646__$1;
(statearr_43668_44833[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (25))){
var inst_43636 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43669_44834 = state_43646__$1;
(statearr_43669_44834[(2)] = inst_43636);

(statearr_43669_44834[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (17))){
var inst_43600 = (state_43646[(10)]);
var inst_43610 = cljs.core.first(inst_43600);
var inst_43611 = cljs.core.async.muxch_STAR_(inst_43610);
var inst_43612 = cljs.core.async.close_BANG_(inst_43611);
var inst_43613 = cljs.core.next(inst_43600);
var inst_43584 = inst_43613;
var inst_43585 = null;
var inst_43586 = (0);
var inst_43587 = (0);
var state_43646__$1 = (function (){var statearr_43675 = state_43646;
(statearr_43675[(12)] = inst_43586);

(statearr_43675[(13)] = inst_43584);

(statearr_43675[(14)] = inst_43612);

(statearr_43675[(15)] = inst_43587);

(statearr_43675[(16)] = inst_43585);

return statearr_43675;
})();
var statearr_43676_44839 = state_43646__$1;
(statearr_43676_44839[(2)] = null);

(statearr_43676_44839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (3))){
var inst_43644 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43646__$1,inst_43644);
} else {
if((state_val_43647 === (12))){
var inst_43621 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43678_44840 = state_43646__$1;
(statearr_43678_44840[(2)] = inst_43621);

(statearr_43678_44840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (2))){
var state_43646__$1 = state_43646;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43646__$1,(4),ch);
} else {
if((state_val_43647 === (23))){
var state_43646__$1 = state_43646;
var statearr_43684_44841 = state_43646__$1;
(statearr_43684_44841[(2)] = null);

(statearr_43684_44841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (19))){
var inst_43570 = (state_43646[(8)]);
var inst_43627 = (state_43646[(11)]);
var inst_43629 = cljs.core.async.muxch_STAR_(inst_43627);
var state_43646__$1 = state_43646;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43646__$1,(22),inst_43629,inst_43570);
} else {
if((state_val_43647 === (11))){
var inst_43584 = (state_43646[(13)]);
var inst_43600 = (state_43646[(10)]);
var inst_43600__$1 = cljs.core.seq(inst_43584);
var state_43646__$1 = (function (){var statearr_43686 = state_43646;
(statearr_43686[(10)] = inst_43600__$1);

return statearr_43686;
})();
if(inst_43600__$1){
var statearr_43687_44845 = state_43646__$1;
(statearr_43687_44845[(1)] = (13));

} else {
var statearr_43688_44850 = state_43646__$1;
(statearr_43688_44850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (9))){
var inst_43623 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43689_44851 = state_43646__$1;
(statearr_43689_44851[(2)] = inst_43623);

(statearr_43689_44851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (5))){
var inst_43581 = cljs.core.deref(mults);
var inst_43582 = cljs.core.vals(inst_43581);
var inst_43583 = cljs.core.seq(inst_43582);
var inst_43584 = inst_43583;
var inst_43585 = null;
var inst_43586 = (0);
var inst_43587 = (0);
var state_43646__$1 = (function (){var statearr_43690 = state_43646;
(statearr_43690[(12)] = inst_43586);

(statearr_43690[(13)] = inst_43584);

(statearr_43690[(15)] = inst_43587);

(statearr_43690[(16)] = inst_43585);

return statearr_43690;
})();
var statearr_43691_44852 = state_43646__$1;
(statearr_43691_44852[(2)] = null);

(statearr_43691_44852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (14))){
var state_43646__$1 = state_43646;
var statearr_43695_44853 = state_43646__$1;
(statearr_43695_44853[(2)] = null);

(statearr_43695_44853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (16))){
var inst_43600 = (state_43646[(10)]);
var inst_43604 = cljs.core.chunk_first(inst_43600);
var inst_43606 = cljs.core.chunk_rest(inst_43600);
var inst_43607 = cljs.core.count(inst_43604);
var inst_43584 = inst_43606;
var inst_43585 = inst_43604;
var inst_43586 = inst_43607;
var inst_43587 = (0);
var state_43646__$1 = (function (){var statearr_43696 = state_43646;
(statearr_43696[(12)] = inst_43586);

(statearr_43696[(13)] = inst_43584);

(statearr_43696[(15)] = inst_43587);

(statearr_43696[(16)] = inst_43585);

return statearr_43696;
})();
var statearr_43697_44854 = state_43646__$1;
(statearr_43697_44854[(2)] = null);

(statearr_43697_44854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (10))){
var inst_43586 = (state_43646[(12)]);
var inst_43584 = (state_43646[(13)]);
var inst_43587 = (state_43646[(15)]);
var inst_43585 = (state_43646[(16)]);
var inst_43592 = cljs.core._nth(inst_43585,inst_43587);
var inst_43593 = cljs.core.async.muxch_STAR_(inst_43592);
var inst_43594 = cljs.core.async.close_BANG_(inst_43593);
var inst_43596 = (inst_43587 + (1));
var tmp43692 = inst_43586;
var tmp43693 = inst_43584;
var tmp43694 = inst_43585;
var inst_43584__$1 = tmp43693;
var inst_43585__$1 = tmp43694;
var inst_43586__$1 = tmp43692;
var inst_43587__$1 = inst_43596;
var state_43646__$1 = (function (){var statearr_43698 = state_43646;
(statearr_43698[(17)] = inst_43594);

(statearr_43698[(12)] = inst_43586__$1);

(statearr_43698[(13)] = inst_43584__$1);

(statearr_43698[(15)] = inst_43587__$1);

(statearr_43698[(16)] = inst_43585__$1);

return statearr_43698;
})();
var statearr_43702_44861 = state_43646__$1;
(statearr_43702_44861[(2)] = null);

(statearr_43702_44861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (18))){
var inst_43616 = (state_43646[(2)]);
var state_43646__$1 = state_43646;
var statearr_43703_44862 = state_43646__$1;
(statearr_43703_44862[(2)] = inst_43616);

(statearr_43703_44862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43647 === (8))){
var inst_43586 = (state_43646[(12)]);
var inst_43587 = (state_43646[(15)]);
var inst_43589 = (inst_43587 < inst_43586);
var inst_43590 = inst_43589;
var state_43646__$1 = state_43646;
if(cljs.core.truth_(inst_43590)){
var statearr_43704_44863 = state_43646__$1;
(statearr_43704_44863[(1)] = (10));

} else {
var statearr_43705_44864 = state_43646__$1;
(statearr_43705_44864[(1)] = (11));

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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43706[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43706[(1)] = (1));

return statearr_43706;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43646){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43646);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43707){var ex__41970__auto__ = e43707;
var statearr_43708_44865 = state_43646;
(statearr_43708_44865[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43646[(4)]))){
var statearr_43709_44866 = state_43646;
(statearr_43709_44866[(1)] = cljs.core.first((state_43646[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44867 = state_43646;
state_43646 = G__44867;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43711 = f__42185__auto__();
(statearr_43711[(6)] = c__42184__auto___44815);

return statearr_43711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var G__43715 = arguments.length;
switch (G__43715) {
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
var G__43717 = arguments.length;
switch (G__43717) {
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
var G__43720 = arguments.length;
switch (G__43720) {
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
var c__42184__auto___44877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43767){
var state_val_43768 = (state_43767[(1)]);
if((state_val_43768 === (7))){
var state_43767__$1 = state_43767;
var statearr_43769_44878 = state_43767__$1;
(statearr_43769_44878[(2)] = null);

(statearr_43769_44878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (1))){
var state_43767__$1 = state_43767;
var statearr_43770_44879 = state_43767__$1;
(statearr_43770_44879[(2)] = null);

(statearr_43770_44879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (4))){
var inst_43724 = (state_43767[(7)]);
var inst_43725 = (state_43767[(8)]);
var inst_43727 = (inst_43725 < inst_43724);
var state_43767__$1 = state_43767;
if(cljs.core.truth_(inst_43727)){
var statearr_43774_44880 = state_43767__$1;
(statearr_43774_44880[(1)] = (6));

} else {
var statearr_43775_44881 = state_43767__$1;
(statearr_43775_44881[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (15))){
var inst_43750 = (state_43767[(9)]);
var inst_43755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43750);
var state_43767__$1 = state_43767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43767__$1,(17),out,inst_43755);
} else {
if((state_val_43768 === (13))){
var inst_43750 = (state_43767[(9)]);
var inst_43750__$1 = (state_43767[(2)]);
var inst_43751 = cljs.core.some(cljs.core.nil_QMARK_,inst_43750__$1);
var state_43767__$1 = (function (){var statearr_43779 = state_43767;
(statearr_43779[(9)] = inst_43750__$1);

return statearr_43779;
})();
if(cljs.core.truth_(inst_43751)){
var statearr_43780_44882 = state_43767__$1;
(statearr_43780_44882[(1)] = (14));

} else {
var statearr_43781_44883 = state_43767__$1;
(statearr_43781_44883[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (6))){
var state_43767__$1 = state_43767;
var statearr_43783_44884 = state_43767__$1;
(statearr_43783_44884[(2)] = null);

(statearr_43783_44884[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (17))){
var inst_43757 = (state_43767[(2)]);
var state_43767__$1 = (function (){var statearr_43785 = state_43767;
(statearr_43785[(10)] = inst_43757);

return statearr_43785;
})();
var statearr_43786_44885 = state_43767__$1;
(statearr_43786_44885[(2)] = null);

(statearr_43786_44885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (3))){
var inst_43762 = (state_43767[(2)]);
var state_43767__$1 = state_43767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43767__$1,inst_43762);
} else {
if((state_val_43768 === (12))){
var _ = (function (){var statearr_43787 = state_43767;
(statearr_43787[(4)] = cljs.core.rest((state_43767[(4)])));

return statearr_43787;
})();
var state_43767__$1 = state_43767;
var ex43784 = (state_43767__$1[(2)]);
var statearr_43788_44886 = state_43767__$1;
(statearr_43788_44886[(5)] = ex43784);


if((ex43784 instanceof Object)){
var statearr_43789_44887 = state_43767__$1;
(statearr_43789_44887[(1)] = (11));

(statearr_43789_44887[(5)] = null);

} else {
throw ex43784;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (2))){
var inst_43723 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43724 = cnt;
var inst_43725 = (0);
var state_43767__$1 = (function (){var statearr_43790 = state_43767;
(statearr_43790[(7)] = inst_43724);

(statearr_43790[(11)] = inst_43723);

(statearr_43790[(8)] = inst_43725);

return statearr_43790;
})();
var statearr_43791_44888 = state_43767__$1;
(statearr_43791_44888[(2)] = null);

(statearr_43791_44888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (11))){
var inst_43729 = (state_43767[(2)]);
var inst_43730 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43767__$1 = (function (){var statearr_43792 = state_43767;
(statearr_43792[(12)] = inst_43729);

return statearr_43792;
})();
var statearr_43793_44889 = state_43767__$1;
(statearr_43793_44889[(2)] = inst_43730);

(statearr_43793_44889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (9))){
var inst_43725 = (state_43767[(8)]);
var _ = (function (){var statearr_43795 = state_43767;
(statearr_43795[(4)] = cljs.core.cons((12),(state_43767[(4)])));

return statearr_43795;
})();
var inst_43736 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43725) : chs__$1.call(null,inst_43725));
var inst_43737 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43725) : done.call(null,inst_43725));
var inst_43738 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43736,inst_43737);
var ___$1 = (function (){var statearr_43796 = state_43767;
(statearr_43796[(4)] = cljs.core.rest((state_43767[(4)])));

return statearr_43796;
})();
var state_43767__$1 = state_43767;
var statearr_43797_44896 = state_43767__$1;
(statearr_43797_44896[(2)] = inst_43738);

(statearr_43797_44896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (5))){
var inst_43748 = (state_43767[(2)]);
var state_43767__$1 = (function (){var statearr_43798 = state_43767;
(statearr_43798[(13)] = inst_43748);

return statearr_43798;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43767__$1,(13),dchan);
} else {
if((state_val_43768 === (14))){
var inst_43753 = cljs.core.async.close_BANG_(out);
var state_43767__$1 = state_43767;
var statearr_43799_44897 = state_43767__$1;
(statearr_43799_44897[(2)] = inst_43753);

(statearr_43799_44897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (16))){
var inst_43760 = (state_43767[(2)]);
var state_43767__$1 = state_43767;
var statearr_43800_44898 = state_43767__$1;
(statearr_43800_44898[(2)] = inst_43760);

(statearr_43800_44898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (10))){
var inst_43725 = (state_43767[(8)]);
var inst_43741 = (state_43767[(2)]);
var inst_43742 = (inst_43725 + (1));
var inst_43725__$1 = inst_43742;
var state_43767__$1 = (function (){var statearr_43801 = state_43767;
(statearr_43801[(8)] = inst_43725__$1);

(statearr_43801[(14)] = inst_43741);

return statearr_43801;
})();
var statearr_43802_44899 = state_43767__$1;
(statearr_43802_44899[(2)] = null);

(statearr_43802_44899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43768 === (8))){
var inst_43746 = (state_43767[(2)]);
var state_43767__$1 = state_43767;
var statearr_43803_44900 = state_43767__$1;
(statearr_43803_44900[(2)] = inst_43746);

(statearr_43803_44900[(1)] = (5));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43805[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43805[(1)] = (1));

return statearr_43805;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43767){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43767);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43806){var ex__41970__auto__ = e43806;
var statearr_43807_44901 = state_43767;
(statearr_43807_44901[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43767[(4)]))){
var statearr_43808_44902 = state_43767;
(statearr_43808_44902[(1)] = cljs.core.first((state_43767[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44903 = state_43767;
state_43767 = G__44903;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43809 = f__42185__auto__();
(statearr_43809[(6)] = c__42184__auto___44877);

return statearr_43809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var G__43812 = arguments.length;
switch (G__43812) {
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
var c__42184__auto___44905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43845){
var state_val_43846 = (state_43845[(1)]);
if((state_val_43846 === (7))){
var inst_43825 = (state_43845[(7)]);
var inst_43824 = (state_43845[(8)]);
var inst_43824__$1 = (state_43845[(2)]);
var inst_43825__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43824__$1,(0),null);
var inst_43826 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43824__$1,(1),null);
var inst_43827 = (inst_43825__$1 == null);
var state_43845__$1 = (function (){var statearr_43848 = state_43845;
(statearr_43848[(7)] = inst_43825__$1);

(statearr_43848[(8)] = inst_43824__$1);

(statearr_43848[(9)] = inst_43826);

return statearr_43848;
})();
if(cljs.core.truth_(inst_43827)){
var statearr_43849_44906 = state_43845__$1;
(statearr_43849_44906[(1)] = (8));

} else {
var statearr_43850_44907 = state_43845__$1;
(statearr_43850_44907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (1))){
var inst_43813 = cljs.core.vec(chs);
var inst_43814 = inst_43813;
var state_43845__$1 = (function (){var statearr_43851 = state_43845;
(statearr_43851[(10)] = inst_43814);

return statearr_43851;
})();
var statearr_43852_44908 = state_43845__$1;
(statearr_43852_44908[(2)] = null);

(statearr_43852_44908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (4))){
var inst_43814 = (state_43845[(10)]);
var state_43845__$1 = state_43845;
return cljs.core.async.ioc_alts_BANG_(state_43845__$1,(7),inst_43814);
} else {
if((state_val_43846 === (6))){
var inst_43841 = (state_43845[(2)]);
var state_43845__$1 = state_43845;
var statearr_43853_44909 = state_43845__$1;
(statearr_43853_44909[(2)] = inst_43841);

(statearr_43853_44909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (3))){
var inst_43843 = (state_43845[(2)]);
var state_43845__$1 = state_43845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43845__$1,inst_43843);
} else {
if((state_val_43846 === (2))){
var inst_43814 = (state_43845[(10)]);
var inst_43816 = cljs.core.count(inst_43814);
var inst_43817 = (inst_43816 > (0));
var state_43845__$1 = state_43845;
if(cljs.core.truth_(inst_43817)){
var statearr_43855_44910 = state_43845__$1;
(statearr_43855_44910[(1)] = (4));

} else {
var statearr_43856_44911 = state_43845__$1;
(statearr_43856_44911[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (11))){
var inst_43814 = (state_43845[(10)]);
var inst_43834 = (state_43845[(2)]);
var tmp43854 = inst_43814;
var inst_43814__$1 = tmp43854;
var state_43845__$1 = (function (){var statearr_43857 = state_43845;
(statearr_43857[(10)] = inst_43814__$1);

(statearr_43857[(11)] = inst_43834);

return statearr_43857;
})();
var statearr_43858_44914 = state_43845__$1;
(statearr_43858_44914[(2)] = null);

(statearr_43858_44914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (9))){
var inst_43825 = (state_43845[(7)]);
var state_43845__$1 = state_43845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43845__$1,(11),out,inst_43825);
} else {
if((state_val_43846 === (5))){
var inst_43839 = cljs.core.async.close_BANG_(out);
var state_43845__$1 = state_43845;
var statearr_43862_44919 = state_43845__$1;
(statearr_43862_44919[(2)] = inst_43839);

(statearr_43862_44919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (10))){
var inst_43837 = (state_43845[(2)]);
var state_43845__$1 = state_43845;
var statearr_43863_44920 = state_43845__$1;
(statearr_43863_44920[(2)] = inst_43837);

(statearr_43863_44920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43846 === (8))){
var inst_43825 = (state_43845[(7)]);
var inst_43824 = (state_43845[(8)]);
var inst_43826 = (state_43845[(9)]);
var inst_43814 = (state_43845[(10)]);
var inst_43829 = (function (){var cs = inst_43814;
var vec__43820 = inst_43824;
var v = inst_43825;
var c = inst_43826;
return (function (p1__43810_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43810_SHARP_);
});
})();
var inst_43830 = cljs.core.filterv(inst_43829,inst_43814);
var inst_43814__$1 = inst_43830;
var state_43845__$1 = (function (){var statearr_43864 = state_43845;
(statearr_43864[(10)] = inst_43814__$1);

return statearr_43864;
})();
var statearr_43865_44921 = state_43845__$1;
(statearr_43865_44921[(2)] = null);

(statearr_43865_44921[(1)] = (2));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43866 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43866[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43866[(1)] = (1));

return statearr_43866;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43845){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43845);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43868){var ex__41970__auto__ = e43868;
var statearr_43869_44922 = state_43845;
(statearr_43869_44922[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43845[(4)]))){
var statearr_43871_44923 = state_43845;
(statearr_43871_44923[(1)] = cljs.core.first((state_43845[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44924 = state_43845;
state_43845 = G__44924;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43872 = f__42185__auto__();
(statearr_43872[(6)] = c__42184__auto___44905);

return statearr_43872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
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
var G__43874 = arguments.length;
switch (G__43874) {
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
var c__42184__auto___44926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43900){
var state_val_43901 = (state_43900[(1)]);
if((state_val_43901 === (7))){
var inst_43882 = (state_43900[(7)]);
var inst_43882__$1 = (state_43900[(2)]);
var inst_43883 = (inst_43882__$1 == null);
var inst_43884 = cljs.core.not(inst_43883);
var state_43900__$1 = (function (){var statearr_43902 = state_43900;
(statearr_43902[(7)] = inst_43882__$1);

return statearr_43902;
})();
if(inst_43884){
var statearr_43903_44927 = state_43900__$1;
(statearr_43903_44927[(1)] = (8));

} else {
var statearr_43904_44928 = state_43900__$1;
(statearr_43904_44928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (1))){
var inst_43877 = (0);
var state_43900__$1 = (function (){var statearr_43906 = state_43900;
(statearr_43906[(8)] = inst_43877);

return statearr_43906;
})();
var statearr_43907_44929 = state_43900__$1;
(statearr_43907_44929[(2)] = null);

(statearr_43907_44929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (4))){
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43900__$1,(7),ch);
} else {
if((state_val_43901 === (6))){
var inst_43895 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43908_44930 = state_43900__$1;
(statearr_43908_44930[(2)] = inst_43895);

(statearr_43908_44930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (3))){
var inst_43897 = (state_43900[(2)]);
var inst_43898 = cljs.core.async.close_BANG_(out);
var state_43900__$1 = (function (){var statearr_43910 = state_43900;
(statearr_43910[(9)] = inst_43897);

return statearr_43910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43900__$1,inst_43898);
} else {
if((state_val_43901 === (2))){
var inst_43877 = (state_43900[(8)]);
var inst_43879 = (inst_43877 < n);
var state_43900__$1 = state_43900;
if(cljs.core.truth_(inst_43879)){
var statearr_43911_44931 = state_43900__$1;
(statearr_43911_44931[(1)] = (4));

} else {
var statearr_43912_44932 = state_43900__$1;
(statearr_43912_44932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (11))){
var inst_43877 = (state_43900[(8)]);
var inst_43887 = (state_43900[(2)]);
var inst_43888 = (inst_43877 + (1));
var inst_43877__$1 = inst_43888;
var state_43900__$1 = (function (){var statearr_43913 = state_43900;
(statearr_43913[(10)] = inst_43887);

(statearr_43913[(8)] = inst_43877__$1);

return statearr_43913;
})();
var statearr_43914_44933 = state_43900__$1;
(statearr_43914_44933[(2)] = null);

(statearr_43914_44933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (9))){
var state_43900__$1 = state_43900;
var statearr_43915_44934 = state_43900__$1;
(statearr_43915_44934[(2)] = null);

(statearr_43915_44934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (5))){
var state_43900__$1 = state_43900;
var statearr_43916_44935 = state_43900__$1;
(statearr_43916_44935[(2)] = null);

(statearr_43916_44935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (10))){
var inst_43892 = (state_43900[(2)]);
var state_43900__$1 = state_43900;
var statearr_43917_44936 = state_43900__$1;
(statearr_43917_44936[(2)] = inst_43892);

(statearr_43917_44936[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43901 === (8))){
var inst_43882 = (state_43900[(7)]);
var state_43900__$1 = state_43900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43900__$1,(11),out,inst_43882);
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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43918[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43918[(1)] = (1));

return statearr_43918;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43900){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43900);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43919){var ex__41970__auto__ = e43919;
var statearr_43920_44937 = state_43900;
(statearr_43920_44937[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43900[(4)]))){
var statearr_43921_44938 = state_43900;
(statearr_43921_44938[(1)] = cljs.core.first((state_43900[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44939 = state_43900;
state_43900 = G__44939;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43922 = f__42185__auto__();
(statearr_43922[(6)] = c__42184__auto___44926);

return statearr_43922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43924 = (function (f,ch,meta43925){
this.f = f;
this.ch = ch;
this.meta43925 = meta43925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43926,meta43925__$1){
var self__ = this;
var _43926__$1 = this;
return (new cljs.core.async.t_cljs$core$async43924(self__.f,self__.ch,meta43925__$1));
}));

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43926){
var self__ = this;
var _43926__$1 = this;
return self__.meta43925;
}));

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43927 = (function (f,ch,meta43925,_,fn1,meta43928){
this.f = f;
this.ch = ch;
this.meta43925 = meta43925;
this._ = _;
this.fn1 = fn1;
this.meta43928 = meta43928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43929,meta43928__$1){
var self__ = this;
var _43929__$1 = this;
return (new cljs.core.async.t_cljs$core$async43927(self__.f,self__.ch,self__.meta43925,self__._,self__.fn1,meta43928__$1));
}));

(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43929){
var self__ = this;
var _43929__$1 = this;
return self__.meta43928;
}));

(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43923_SHARP_){
var G__43930 = (((p1__43923_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43923_SHARP_) : self__.f.call(null,p1__43923_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43930) : f1.call(null,G__43930));
});
}));

(cljs.core.async.t_cljs$core$async43927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43925","meta43925",-1114006115,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43924","cljs.core.async/t_cljs$core$async43924",-1090828410,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43928","meta43928",1715342521,null)], null);
}));

(cljs.core.async.t_cljs$core$async43927.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43927");

(cljs.core.async.t_cljs$core$async43927.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43927");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43927.
 */
cljs.core.async.__GT_t_cljs$core$async43927 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43927(f__$1,ch__$1,meta43925__$1,___$2,fn1__$1,meta43928){
return (new cljs.core.async.t_cljs$core$async43927(f__$1,ch__$1,meta43925__$1,___$2,fn1__$1,meta43928));
});

}

return (new cljs.core.async.t_cljs$core$async43927(self__.f,self__.ch,self__.meta43925,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43931 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43931) : self__.f.call(null,G__43931));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43924.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43924.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43925","meta43925",-1114006115,null)], null);
}));

(cljs.core.async.t_cljs$core$async43924.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43924");

(cljs.core.async.t_cljs$core$async43924.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43924");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43924.
 */
cljs.core.async.__GT_t_cljs$core$async43924 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43924(f__$1,ch__$1,meta43925){
return (new cljs.core.async.t_cljs$core$async43924(f__$1,ch__$1,meta43925));
});

}

return (new cljs.core.async.t_cljs$core$async43924(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43932 = (function (f,ch,meta43933){
this.f = f;
this.ch = ch;
this.meta43933 = meta43933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43934,meta43933__$1){
var self__ = this;
var _43934__$1 = this;
return (new cljs.core.async.t_cljs$core$async43932(self__.f,self__.ch,meta43933__$1));
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43934){
var self__ = this;
var _43934__$1 = this;
return self__.meta43933;
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43932.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43933","meta43933",871787387,null)], null);
}));

(cljs.core.async.t_cljs$core$async43932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43932");

(cljs.core.async.t_cljs$core$async43932.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43932.
 */
cljs.core.async.__GT_t_cljs$core$async43932 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43932(f__$1,ch__$1,meta43933){
return (new cljs.core.async.t_cljs$core$async43932(f__$1,ch__$1,meta43933));
});

}

return (new cljs.core.async.t_cljs$core$async43932(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43939 = (function (p,ch,meta43940){
this.p = p;
this.ch = ch;
this.meta43940 = meta43940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43941,meta43940__$1){
var self__ = this;
var _43941__$1 = this;
return (new cljs.core.async.t_cljs$core$async43939(self__.p,self__.ch,meta43940__$1));
}));

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43941){
var self__ = this;
var _43941__$1 = this;
return self__.meta43940;
}));

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43939.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43940","meta43940",1857041099,null)], null);
}));

(cljs.core.async.t_cljs$core$async43939.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43939.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43939");

(cljs.core.async.t_cljs$core$async43939.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43939");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43939.
 */
cljs.core.async.__GT_t_cljs$core$async43939 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43939(p__$1,ch__$1,meta43940){
return (new cljs.core.async.t_cljs$core$async43939(p__$1,ch__$1,meta43940));
});

}

return (new cljs.core.async.t_cljs$core$async43939(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43947 = arguments.length;
switch (G__43947) {
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
var c__42184__auto___44946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_43970){
var state_val_43971 = (state_43970[(1)]);
if((state_val_43971 === (7))){
var inst_43966 = (state_43970[(2)]);
var state_43970__$1 = state_43970;
var statearr_43973_44947 = state_43970__$1;
(statearr_43973_44947[(2)] = inst_43966);

(statearr_43973_44947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (1))){
var state_43970__$1 = state_43970;
var statearr_43975_44948 = state_43970__$1;
(statearr_43975_44948[(2)] = null);

(statearr_43975_44948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (4))){
var inst_43952 = (state_43970[(7)]);
var inst_43952__$1 = (state_43970[(2)]);
var inst_43953 = (inst_43952__$1 == null);
var state_43970__$1 = (function (){var statearr_43976 = state_43970;
(statearr_43976[(7)] = inst_43952__$1);

return statearr_43976;
})();
if(cljs.core.truth_(inst_43953)){
var statearr_43978_44950 = state_43970__$1;
(statearr_43978_44950[(1)] = (5));

} else {
var statearr_43980_44951 = state_43970__$1;
(statearr_43980_44951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (6))){
var inst_43952 = (state_43970[(7)]);
var inst_43957 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43952) : p.call(null,inst_43952));
var state_43970__$1 = state_43970;
if(cljs.core.truth_(inst_43957)){
var statearr_43981_44953 = state_43970__$1;
(statearr_43981_44953[(1)] = (8));

} else {
var statearr_43982_44954 = state_43970__$1;
(statearr_43982_44954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (3))){
var inst_43968 = (state_43970[(2)]);
var state_43970__$1 = state_43970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43970__$1,inst_43968);
} else {
if((state_val_43971 === (2))){
var state_43970__$1 = state_43970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43970__$1,(4),ch);
} else {
if((state_val_43971 === (11))){
var inst_43960 = (state_43970[(2)]);
var state_43970__$1 = state_43970;
var statearr_43985_44955 = state_43970__$1;
(statearr_43985_44955[(2)] = inst_43960);

(statearr_43985_44955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (9))){
var state_43970__$1 = state_43970;
var statearr_43988_44956 = state_43970__$1;
(statearr_43988_44956[(2)] = null);

(statearr_43988_44956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (5))){
var inst_43955 = cljs.core.async.close_BANG_(out);
var state_43970__$1 = state_43970;
var statearr_43989_44957 = state_43970__$1;
(statearr_43989_44957[(2)] = inst_43955);

(statearr_43989_44957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (10))){
var inst_43963 = (state_43970[(2)]);
var state_43970__$1 = (function (){var statearr_43990 = state_43970;
(statearr_43990[(8)] = inst_43963);

return statearr_43990;
})();
var statearr_43991_44958 = state_43970__$1;
(statearr_43991_44958[(2)] = null);

(statearr_43991_44958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43971 === (8))){
var inst_43952 = (state_43970[(7)]);
var state_43970__$1 = state_43970;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43970__$1,(11),out,inst_43952);
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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_43992 = [null,null,null,null,null,null,null,null,null];
(statearr_43992[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_43992[(1)] = (1));

return statearr_43992;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_43970){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_43970);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e43994){var ex__41970__auto__ = e43994;
var statearr_43995_44960 = state_43970;
(statearr_43995_44960[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_43970[(4)]))){
var statearr_43996_44962 = state_43970;
(statearr_43996_44962[(1)] = cljs.core.first((state_43970[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44963 = state_43970;
state_43970 = G__44963;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_43970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_43970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_43998 = f__42185__auto__();
(statearr_43998[(6)] = c__42184__auto___44946);

return statearr_43998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44001 = arguments.length;
switch (G__44001) {
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
var c__42184__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_44071){
var state_val_44073 = (state_44071[(1)]);
if((state_val_44073 === (7))){
var inst_44067 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44074_44965 = state_44071__$1;
(statearr_44074_44965[(2)] = inst_44067);

(statearr_44074_44965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (20))){
var inst_44037 = (state_44071[(7)]);
var inst_44048 = (state_44071[(2)]);
var inst_44049 = cljs.core.next(inst_44037);
var inst_44020 = inst_44049;
var inst_44021 = null;
var inst_44022 = (0);
var inst_44023 = (0);
var state_44071__$1 = (function (){var statearr_44075 = state_44071;
(statearr_44075[(8)] = inst_44020);

(statearr_44075[(9)] = inst_44021);

(statearr_44075[(10)] = inst_44023);

(statearr_44075[(11)] = inst_44022);

(statearr_44075[(12)] = inst_44048);

return statearr_44075;
})();
var statearr_44076_44966 = state_44071__$1;
(statearr_44076_44966[(2)] = null);

(statearr_44076_44966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (1))){
var state_44071__$1 = state_44071;
var statearr_44077_44967 = state_44071__$1;
(statearr_44077_44967[(2)] = null);

(statearr_44077_44967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (4))){
var inst_44009 = (state_44071[(13)]);
var inst_44009__$1 = (state_44071[(2)]);
var inst_44010 = (inst_44009__$1 == null);
var state_44071__$1 = (function (){var statearr_44078 = state_44071;
(statearr_44078[(13)] = inst_44009__$1);

return statearr_44078;
})();
if(cljs.core.truth_(inst_44010)){
var statearr_44079_44968 = state_44071__$1;
(statearr_44079_44968[(1)] = (5));

} else {
var statearr_44080_44969 = state_44071__$1;
(statearr_44080_44969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (15))){
var state_44071__$1 = state_44071;
var statearr_44084_44970 = state_44071__$1;
(statearr_44084_44970[(2)] = null);

(statearr_44084_44970[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (21))){
var state_44071__$1 = state_44071;
var statearr_44085_44971 = state_44071__$1;
(statearr_44085_44971[(2)] = null);

(statearr_44085_44971[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (13))){
var inst_44020 = (state_44071[(8)]);
var inst_44021 = (state_44071[(9)]);
var inst_44023 = (state_44071[(10)]);
var inst_44022 = (state_44071[(11)]);
var inst_44031 = (state_44071[(2)]);
var inst_44034 = (inst_44023 + (1));
var tmp44081 = inst_44020;
var tmp44082 = inst_44021;
var tmp44083 = inst_44022;
var inst_44020__$1 = tmp44081;
var inst_44021__$1 = tmp44082;
var inst_44022__$1 = tmp44083;
var inst_44023__$1 = inst_44034;
var state_44071__$1 = (function (){var statearr_44086 = state_44071;
(statearr_44086[(8)] = inst_44020__$1);

(statearr_44086[(14)] = inst_44031);

(statearr_44086[(9)] = inst_44021__$1);

(statearr_44086[(10)] = inst_44023__$1);

(statearr_44086[(11)] = inst_44022__$1);

return statearr_44086;
})();
var statearr_44087_44972 = state_44071__$1;
(statearr_44087_44972[(2)] = null);

(statearr_44087_44972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (22))){
var state_44071__$1 = state_44071;
var statearr_44088_44974 = state_44071__$1;
(statearr_44088_44974[(2)] = null);

(statearr_44088_44974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (6))){
var inst_44009 = (state_44071[(13)]);
var inst_44018 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44009) : f.call(null,inst_44009));
var inst_44019 = cljs.core.seq(inst_44018);
var inst_44020 = inst_44019;
var inst_44021 = null;
var inst_44022 = (0);
var inst_44023 = (0);
var state_44071__$1 = (function (){var statearr_44089 = state_44071;
(statearr_44089[(8)] = inst_44020);

(statearr_44089[(9)] = inst_44021);

(statearr_44089[(10)] = inst_44023);

(statearr_44089[(11)] = inst_44022);

return statearr_44089;
})();
var statearr_44090_44976 = state_44071__$1;
(statearr_44090_44976[(2)] = null);

(statearr_44090_44976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (17))){
var inst_44037 = (state_44071[(7)]);
var inst_44041 = cljs.core.chunk_first(inst_44037);
var inst_44042 = cljs.core.chunk_rest(inst_44037);
var inst_44043 = cljs.core.count(inst_44041);
var inst_44020 = inst_44042;
var inst_44021 = inst_44041;
var inst_44022 = inst_44043;
var inst_44023 = (0);
var state_44071__$1 = (function (){var statearr_44091 = state_44071;
(statearr_44091[(8)] = inst_44020);

(statearr_44091[(9)] = inst_44021);

(statearr_44091[(10)] = inst_44023);

(statearr_44091[(11)] = inst_44022);

return statearr_44091;
})();
var statearr_44092_44977 = state_44071__$1;
(statearr_44092_44977[(2)] = null);

(statearr_44092_44977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (3))){
var inst_44069 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44071__$1,inst_44069);
} else {
if((state_val_44073 === (12))){
var inst_44057 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44093_44978 = state_44071__$1;
(statearr_44093_44978[(2)] = inst_44057);

(statearr_44093_44978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (2))){
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44071__$1,(4),in$);
} else {
if((state_val_44073 === (23))){
var inst_44065 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44094_44979 = state_44071__$1;
(statearr_44094_44979[(2)] = inst_44065);

(statearr_44094_44979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (19))){
var inst_44052 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44095_44980 = state_44071__$1;
(statearr_44095_44980[(2)] = inst_44052);

(statearr_44095_44980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (11))){
var inst_44020 = (state_44071[(8)]);
var inst_44037 = (state_44071[(7)]);
var inst_44037__$1 = cljs.core.seq(inst_44020);
var state_44071__$1 = (function (){var statearr_44096 = state_44071;
(statearr_44096[(7)] = inst_44037__$1);

return statearr_44096;
})();
if(inst_44037__$1){
var statearr_44097_44981 = state_44071__$1;
(statearr_44097_44981[(1)] = (14));

} else {
var statearr_44098_44982 = state_44071__$1;
(statearr_44098_44982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (9))){
var inst_44059 = (state_44071[(2)]);
var inst_44060 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44071__$1 = (function (){var statearr_44099 = state_44071;
(statearr_44099[(15)] = inst_44059);

return statearr_44099;
})();
if(cljs.core.truth_(inst_44060)){
var statearr_44100_44983 = state_44071__$1;
(statearr_44100_44983[(1)] = (21));

} else {
var statearr_44101_44984 = state_44071__$1;
(statearr_44101_44984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (5))){
var inst_44012 = cljs.core.async.close_BANG_(out);
var state_44071__$1 = state_44071;
var statearr_44102_44985 = state_44071__$1;
(statearr_44102_44985[(2)] = inst_44012);

(statearr_44102_44985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (14))){
var inst_44037 = (state_44071[(7)]);
var inst_44039 = cljs.core.chunked_seq_QMARK_(inst_44037);
var state_44071__$1 = state_44071;
if(inst_44039){
var statearr_44103_44986 = state_44071__$1;
(statearr_44103_44986[(1)] = (17));

} else {
var statearr_44104_44987 = state_44071__$1;
(statearr_44104_44987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (16))){
var inst_44055 = (state_44071[(2)]);
var state_44071__$1 = state_44071;
var statearr_44105_44988 = state_44071__$1;
(statearr_44105_44988[(2)] = inst_44055);

(statearr_44105_44988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (10))){
var inst_44021 = (state_44071[(9)]);
var inst_44023 = (state_44071[(10)]);
var inst_44029 = cljs.core._nth(inst_44021,inst_44023);
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44071__$1,(13),out,inst_44029);
} else {
if((state_val_44073 === (18))){
var inst_44037 = (state_44071[(7)]);
var inst_44046 = cljs.core.first(inst_44037);
var state_44071__$1 = state_44071;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44071__$1,(20),out,inst_44046);
} else {
if((state_val_44073 === (8))){
var inst_44023 = (state_44071[(10)]);
var inst_44022 = (state_44071[(11)]);
var inst_44025 = (inst_44023 < inst_44022);
var inst_44026 = inst_44025;
var state_44071__$1 = state_44071;
if(cljs.core.truth_(inst_44026)){
var statearr_44106_44989 = state_44071__$1;
(statearr_44106_44989[(1)] = (10));

} else {
var statearr_44107_44990 = state_44071__$1;
(statearr_44107_44990[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____0 = (function (){
var statearr_44108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44108[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__);

(statearr_44108[(1)] = (1));

return statearr_44108;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____1 = (function (state_44071){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_44071);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e44109){var ex__41970__auto__ = e44109;
var statearr_44110_44991 = state_44071;
(statearr_44110_44991[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_44071[(4)]))){
var statearr_44111_44992 = state_44071;
(statearr_44111_44992[(1)] = cljs.core.first((state_44071[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44993 = state_44071;
state_44071 = G__44993;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__ = function(state_44071){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____1.call(this,state_44071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41967__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_44112 = f__42185__auto__();
(statearr_44112[(6)] = c__42184__auto__);

return statearr_44112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));

return c__42184__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44114 = arguments.length;
switch (G__44114) {
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
var G__44116 = arguments.length;
switch (G__44116) {
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
var G__44120 = arguments.length;
switch (G__44120) {
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
var c__42184__auto___44997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_44147){
var state_val_44148 = (state_44147[(1)]);
if((state_val_44148 === (7))){
var inst_44142 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
var statearr_44149_44999 = state_44147__$1;
(statearr_44149_44999[(2)] = inst_44142);

(statearr_44149_44999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (1))){
var inst_44123 = null;
var state_44147__$1 = (function (){var statearr_44150 = state_44147;
(statearr_44150[(7)] = inst_44123);

return statearr_44150;
})();
var statearr_44151_45000 = state_44147__$1;
(statearr_44151_45000[(2)] = null);

(statearr_44151_45000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (4))){
var inst_44126 = (state_44147[(8)]);
var inst_44126__$1 = (state_44147[(2)]);
var inst_44127 = (inst_44126__$1 == null);
var inst_44128 = cljs.core.not(inst_44127);
var state_44147__$1 = (function (){var statearr_44154 = state_44147;
(statearr_44154[(8)] = inst_44126__$1);

return statearr_44154;
})();
if(inst_44128){
var statearr_44155_45001 = state_44147__$1;
(statearr_44155_45001[(1)] = (5));

} else {
var statearr_44156_45002 = state_44147__$1;
(statearr_44156_45002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (6))){
var state_44147__$1 = state_44147;
var statearr_44157_45003 = state_44147__$1;
(statearr_44157_45003[(2)] = null);

(statearr_44157_45003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (3))){
var inst_44144 = (state_44147[(2)]);
var inst_44145 = cljs.core.async.close_BANG_(out);
var state_44147__$1 = (function (){var statearr_44158 = state_44147;
(statearr_44158[(9)] = inst_44144);

return statearr_44158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44147__$1,inst_44145);
} else {
if((state_val_44148 === (2))){
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44147__$1,(4),ch);
} else {
if((state_val_44148 === (11))){
var inst_44126 = (state_44147[(8)]);
var inst_44136 = (state_44147[(2)]);
var inst_44123 = inst_44126;
var state_44147__$1 = (function (){var statearr_44160 = state_44147;
(statearr_44160[(10)] = inst_44136);

(statearr_44160[(7)] = inst_44123);

return statearr_44160;
})();
var statearr_44161_45008 = state_44147__$1;
(statearr_44161_45008[(2)] = null);

(statearr_44161_45008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (9))){
var inst_44126 = (state_44147[(8)]);
var state_44147__$1 = state_44147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44147__$1,(11),out,inst_44126);
} else {
if((state_val_44148 === (5))){
var inst_44123 = (state_44147[(7)]);
var inst_44126 = (state_44147[(8)]);
var inst_44131 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44126,inst_44123);
var state_44147__$1 = state_44147;
if(inst_44131){
var statearr_44163_45009 = state_44147__$1;
(statearr_44163_45009[(1)] = (8));

} else {
var statearr_44164_45010 = state_44147__$1;
(statearr_44164_45010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (10))){
var inst_44139 = (state_44147[(2)]);
var state_44147__$1 = state_44147;
var statearr_44165_45011 = state_44147__$1;
(statearr_44165_45011[(2)] = inst_44139);

(statearr_44165_45011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44148 === (8))){
var inst_44123 = (state_44147[(7)]);
var tmp44162 = inst_44123;
var inst_44123__$1 = tmp44162;
var state_44147__$1 = (function (){var statearr_44166 = state_44147;
(statearr_44166[(7)] = inst_44123__$1);

return statearr_44166;
})();
var statearr_44167_45012 = state_44147__$1;
(statearr_44167_45012[(2)] = null);

(statearr_44167_45012[(1)] = (2));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_44168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44168[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_44168[(1)] = (1));

return statearr_44168;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_44147){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_44147);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e44169){var ex__41970__auto__ = e44169;
var statearr_44170_45013 = state_44147;
(statearr_44170_45013[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_44147[(4)]))){
var statearr_44171_45014 = state_44147;
(statearr_44171_45014[(1)] = cljs.core.first((state_44147[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45015 = state_44147;
state_44147 = G__45015;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_44147){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_44147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_44172 = f__42185__auto__();
(statearr_44172[(6)] = c__42184__auto___44997);

return statearr_44172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44174 = arguments.length;
switch (G__44174) {
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
var c__42184__auto___45017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_44214){
var state_val_44215 = (state_44214[(1)]);
if((state_val_44215 === (7))){
var inst_44210 = (state_44214[(2)]);
var state_44214__$1 = state_44214;
var statearr_44216_45018 = state_44214__$1;
(statearr_44216_45018[(2)] = inst_44210);

(statearr_44216_45018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (1))){
var inst_44176 = (new Array(n));
var inst_44177 = inst_44176;
var inst_44178 = (0);
var state_44214__$1 = (function (){var statearr_44218 = state_44214;
(statearr_44218[(7)] = inst_44177);

(statearr_44218[(8)] = inst_44178);

return statearr_44218;
})();
var statearr_44219_45019 = state_44214__$1;
(statearr_44219_45019[(2)] = null);

(statearr_44219_45019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (4))){
var inst_44182 = (state_44214[(9)]);
var inst_44182__$1 = (state_44214[(2)]);
var inst_44183 = (inst_44182__$1 == null);
var inst_44184 = cljs.core.not(inst_44183);
var state_44214__$1 = (function (){var statearr_44220 = state_44214;
(statearr_44220[(9)] = inst_44182__$1);

return statearr_44220;
})();
if(inst_44184){
var statearr_44221_45024 = state_44214__$1;
(statearr_44221_45024[(1)] = (5));

} else {
var statearr_44222_45028 = state_44214__$1;
(statearr_44222_45028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (15))){
var inst_44204 = (state_44214[(2)]);
var state_44214__$1 = state_44214;
var statearr_44223_45029 = state_44214__$1;
(statearr_44223_45029[(2)] = inst_44204);

(statearr_44223_45029[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (13))){
var state_44214__$1 = state_44214;
var statearr_44226_45030 = state_44214__$1;
(statearr_44226_45030[(2)] = null);

(statearr_44226_45030[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (6))){
var inst_44178 = (state_44214[(8)]);
var inst_44200 = (inst_44178 > (0));
var state_44214__$1 = state_44214;
if(cljs.core.truth_(inst_44200)){
var statearr_44228_45031 = state_44214__$1;
(statearr_44228_45031[(1)] = (12));

} else {
var statearr_44229_45032 = state_44214__$1;
(statearr_44229_45032[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (3))){
var inst_44212 = (state_44214[(2)]);
var state_44214__$1 = state_44214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44214__$1,inst_44212);
} else {
if((state_val_44215 === (12))){
var inst_44177 = (state_44214[(7)]);
var inst_44202 = cljs.core.vec(inst_44177);
var state_44214__$1 = state_44214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44214__$1,(15),out,inst_44202);
} else {
if((state_val_44215 === (2))){
var state_44214__$1 = state_44214;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44214__$1,(4),ch);
} else {
if((state_val_44215 === (11))){
var inst_44194 = (state_44214[(2)]);
var inst_44195 = (new Array(n));
var inst_44177 = inst_44195;
var inst_44178 = (0);
var state_44214__$1 = (function (){var statearr_44231 = state_44214;
(statearr_44231[(10)] = inst_44194);

(statearr_44231[(7)] = inst_44177);

(statearr_44231[(8)] = inst_44178);

return statearr_44231;
})();
var statearr_44232_45033 = state_44214__$1;
(statearr_44232_45033[(2)] = null);

(statearr_44232_45033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (9))){
var inst_44177 = (state_44214[(7)]);
var inst_44192 = cljs.core.vec(inst_44177);
var state_44214__$1 = state_44214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44214__$1,(11),out,inst_44192);
} else {
if((state_val_44215 === (5))){
var inst_44182 = (state_44214[(9)]);
var inst_44187 = (state_44214[(11)]);
var inst_44177 = (state_44214[(7)]);
var inst_44178 = (state_44214[(8)]);
var inst_44186 = (inst_44177[inst_44178] = inst_44182);
var inst_44187__$1 = (inst_44178 + (1));
var inst_44188 = (inst_44187__$1 < n);
var state_44214__$1 = (function (){var statearr_44233 = state_44214;
(statearr_44233[(11)] = inst_44187__$1);

(statearr_44233[(12)] = inst_44186);

return statearr_44233;
})();
if(cljs.core.truth_(inst_44188)){
var statearr_44234_45037 = state_44214__$1;
(statearr_44234_45037[(1)] = (8));

} else {
var statearr_44235_45038 = state_44214__$1;
(statearr_44235_45038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (14))){
var inst_44207 = (state_44214[(2)]);
var inst_44208 = cljs.core.async.close_BANG_(out);
var state_44214__$1 = (function (){var statearr_44237 = state_44214;
(statearr_44237[(13)] = inst_44207);

return statearr_44237;
})();
var statearr_44238_45039 = state_44214__$1;
(statearr_44238_45039[(2)] = inst_44208);

(statearr_44238_45039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (10))){
var inst_44198 = (state_44214[(2)]);
var state_44214__$1 = state_44214;
var statearr_44239_45043 = state_44214__$1;
(statearr_44239_45043[(2)] = inst_44198);

(statearr_44239_45043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44215 === (8))){
var inst_44187 = (state_44214[(11)]);
var inst_44177 = (state_44214[(7)]);
var tmp44236 = inst_44177;
var inst_44177__$1 = tmp44236;
var inst_44178 = inst_44187;
var state_44214__$1 = (function (){var statearr_44240 = state_44214;
(statearr_44240[(7)] = inst_44177__$1);

(statearr_44240[(8)] = inst_44178);

return statearr_44240;
})();
var statearr_44241_45044 = state_44214__$1;
(statearr_44241_45044[(2)] = null);

(statearr_44241_45044[(1)] = (2));


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
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_44244 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44244[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_44244[(1)] = (1));

return statearr_44244;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_44214){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_44214);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e44245){var ex__41970__auto__ = e44245;
var statearr_44246_45048 = state_44214;
(statearr_44246_45048[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_44214[(4)]))){
var statearr_44247_45049 = state_44214;
(statearr_44247_45049[(1)] = cljs.core.first((state_44214[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45050 = state_44214;
state_44214 = G__45050;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_44214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_44214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_44252 = f__42185__auto__();
(statearr_44252[(6)] = c__42184__auto___45017);

return statearr_44252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44256 = arguments.length;
switch (G__44256) {
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
var c__42184__auto___45056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42185__auto__ = (function (){var switch__41966__auto__ = (function (state_44302){
var state_val_44303 = (state_44302[(1)]);
if((state_val_44303 === (7))){
var inst_44298 = (state_44302[(2)]);
var state_44302__$1 = state_44302;
var statearr_44306_45057 = state_44302__$1;
(statearr_44306_45057[(2)] = inst_44298);

(statearr_44306_45057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (1))){
var inst_44258 = [];
var inst_44259 = inst_44258;
var inst_44260 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44302__$1 = (function (){var statearr_44307 = state_44302;
(statearr_44307[(7)] = inst_44259);

(statearr_44307[(8)] = inst_44260);

return statearr_44307;
})();
var statearr_44308_45058 = state_44302__$1;
(statearr_44308_45058[(2)] = null);

(statearr_44308_45058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (4))){
var inst_44263 = (state_44302[(9)]);
var inst_44263__$1 = (state_44302[(2)]);
var inst_44264 = (inst_44263__$1 == null);
var inst_44265 = cljs.core.not(inst_44264);
var state_44302__$1 = (function (){var statearr_44310 = state_44302;
(statearr_44310[(9)] = inst_44263__$1);

return statearr_44310;
})();
if(inst_44265){
var statearr_44311_45059 = state_44302__$1;
(statearr_44311_45059[(1)] = (5));

} else {
var statearr_44312_45060 = state_44302__$1;
(statearr_44312_45060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (15))){
var inst_44259 = (state_44302[(7)]);
var inst_44290 = cljs.core.vec(inst_44259);
var state_44302__$1 = state_44302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44302__$1,(18),out,inst_44290);
} else {
if((state_val_44303 === (13))){
var inst_44285 = (state_44302[(2)]);
var state_44302__$1 = state_44302;
var statearr_44314_45061 = state_44302__$1;
(statearr_44314_45061[(2)] = inst_44285);

(statearr_44314_45061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (6))){
var inst_44259 = (state_44302[(7)]);
var inst_44287 = inst_44259.length;
var inst_44288 = (inst_44287 > (0));
var state_44302__$1 = state_44302;
if(cljs.core.truth_(inst_44288)){
var statearr_44316_45062 = state_44302__$1;
(statearr_44316_45062[(1)] = (15));

} else {
var statearr_44317_45063 = state_44302__$1;
(statearr_44317_45063[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (17))){
var inst_44295 = (state_44302[(2)]);
var inst_44296 = cljs.core.async.close_BANG_(out);
var state_44302__$1 = (function (){var statearr_44320 = state_44302;
(statearr_44320[(10)] = inst_44295);

return statearr_44320;
})();
var statearr_44321_45064 = state_44302__$1;
(statearr_44321_45064[(2)] = inst_44296);

(statearr_44321_45064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (3))){
var inst_44300 = (state_44302[(2)]);
var state_44302__$1 = state_44302;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44302__$1,inst_44300);
} else {
if((state_val_44303 === (12))){
var inst_44259 = (state_44302[(7)]);
var inst_44278 = cljs.core.vec(inst_44259);
var state_44302__$1 = state_44302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44302__$1,(14),out,inst_44278);
} else {
if((state_val_44303 === (2))){
var state_44302__$1 = state_44302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44302__$1,(4),ch);
} else {
if((state_val_44303 === (11))){
var inst_44263 = (state_44302[(9)]);
var inst_44259 = (state_44302[(7)]);
var inst_44267 = (state_44302[(11)]);
var inst_44275 = inst_44259.push(inst_44263);
var tmp44322 = inst_44259;
var inst_44259__$1 = tmp44322;
var inst_44260 = inst_44267;
var state_44302__$1 = (function (){var statearr_44325 = state_44302;
(statearr_44325[(7)] = inst_44259__$1);

(statearr_44325[(12)] = inst_44275);

(statearr_44325[(8)] = inst_44260);

return statearr_44325;
})();
var statearr_44327_45067 = state_44302__$1;
(statearr_44327_45067[(2)] = null);

(statearr_44327_45067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (9))){
var inst_44260 = (state_44302[(8)]);
var inst_44271 = cljs.core.keyword_identical_QMARK_(inst_44260,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_44302__$1 = state_44302;
var statearr_44328_45068 = state_44302__$1;
(statearr_44328_45068[(2)] = inst_44271);

(statearr_44328_45068[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (5))){
var inst_44263 = (state_44302[(9)]);
var inst_44268 = (state_44302[(13)]);
var inst_44267 = (state_44302[(11)]);
var inst_44260 = (state_44302[(8)]);
var inst_44267__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44263) : f.call(null,inst_44263));
var inst_44268__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44267__$1,inst_44260);
var state_44302__$1 = (function (){var statearr_44329 = state_44302;
(statearr_44329[(13)] = inst_44268__$1);

(statearr_44329[(11)] = inst_44267__$1);

return statearr_44329;
})();
if(inst_44268__$1){
var statearr_44330_45069 = state_44302__$1;
(statearr_44330_45069[(1)] = (8));

} else {
var statearr_44331_45070 = state_44302__$1;
(statearr_44331_45070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (14))){
var inst_44263 = (state_44302[(9)]);
var inst_44267 = (state_44302[(11)]);
var inst_44280 = (state_44302[(2)]);
var inst_44281 = [];
var inst_44282 = inst_44281.push(inst_44263);
var inst_44259 = inst_44281;
var inst_44260 = inst_44267;
var state_44302__$1 = (function (){var statearr_44332 = state_44302;
(statearr_44332[(7)] = inst_44259);

(statearr_44332[(14)] = inst_44280);

(statearr_44332[(15)] = inst_44282);

(statearr_44332[(8)] = inst_44260);

return statearr_44332;
})();
var statearr_44333_45071 = state_44302__$1;
(statearr_44333_45071[(2)] = null);

(statearr_44333_45071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (16))){
var state_44302__$1 = state_44302;
var statearr_44334_45072 = state_44302__$1;
(statearr_44334_45072[(2)] = null);

(statearr_44334_45072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (10))){
var inst_44273 = (state_44302[(2)]);
var state_44302__$1 = state_44302;
if(cljs.core.truth_(inst_44273)){
var statearr_44335_45073 = state_44302__$1;
(statearr_44335_45073[(1)] = (11));

} else {
var statearr_44336_45074 = state_44302__$1;
(statearr_44336_45074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (18))){
var inst_44292 = (state_44302[(2)]);
var state_44302__$1 = state_44302;
var statearr_44337_45075 = state_44302__$1;
(statearr_44337_45075[(2)] = inst_44292);

(statearr_44337_45075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44303 === (8))){
var inst_44268 = (state_44302[(13)]);
var state_44302__$1 = state_44302;
var statearr_44338_45076 = state_44302__$1;
(statearr_44338_45076[(2)] = inst_44268);

(statearr_44338_45076[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__41967__auto__ = null;
var cljs$core$async$state_machine__41967__auto____0 = (function (){
var statearr_44341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44341[(0)] = cljs$core$async$state_machine__41967__auto__);

(statearr_44341[(1)] = (1));

return statearr_44341;
});
var cljs$core$async$state_machine__41967__auto____1 = (function (state_44302){
while(true){
var ret_value__41968__auto__ = (function (){try{while(true){
var result__41969__auto__ = switch__41966__auto__(state_44302);
if(cljs.core.keyword_identical_QMARK_(result__41969__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41969__auto__;
}
break;
}
}catch (e44342){var ex__41970__auto__ = e44342;
var statearr_44343_45077 = state_44302;
(statearr_44343_45077[(2)] = ex__41970__auto__);


if(cljs.core.seq((state_44302[(4)]))){
var statearr_44344_45078 = state_44302;
(statearr_44344_45078[(1)] = cljs.core.first((state_44302[(4)])));

} else {
throw ex__41970__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45079 = state_44302;
state_44302 = G__45079;
continue;
} else {
return ret_value__41968__auto__;
}
break;
}
});
cljs$core$async$state_machine__41967__auto__ = function(state_44302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41967__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41967__auto____1.call(this,state_44302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41967__auto____0;
cljs$core$async$state_machine__41967__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41967__auto____1;
return cljs$core$async$state_machine__41967__auto__;
})()
})();
var state__42186__auto__ = (function (){var statearr_44345 = f__42185__auto__();
(statearr_44345[(6)] = c__42184__auto___45056);

return statearr_44345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42186__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
