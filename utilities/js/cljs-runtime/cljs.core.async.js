goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27822 = (function (f,blockable,meta27823){
this.f = f;
this.blockable = blockable;
this.meta27823 = meta27823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27824,meta27823__$1){
var self__ = this;
var _27824__$1 = this;
return (new cljs.core.async.t_cljs$core$async27822(self__.f,self__.blockable,meta27823__$1));
}));

(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27824){
var self__ = this;
var _27824__$1 = this;
return self__.meta27823;
}));

(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27823","meta27823",-1736845023,null)], null);
}));

(cljs.core.async.t_cljs$core$async27822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27822");

(cljs.core.async.t_cljs$core$async27822.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27822.
 */
cljs.core.async.__GT_t_cljs$core$async27822 = (function cljs$core$async$__GT_t_cljs$core$async27822(f,blockable,meta27823){
return (new cljs.core.async.t_cljs$core$async27822(f,blockable,meta27823));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27821 = arguments.length;
switch (G__27821) {
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
return (new cljs.core.async.t_cljs$core$async27822(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27839 = arguments.length;
switch (G__27839) {
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
var G__27849 = arguments.length;
switch (G__27849) {
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
var G__27856 = arguments.length;
switch (G__27856) {
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
var val_30080 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30080) : fn1.call(null,val_30080));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30080) : fn1.call(null,val_30080));
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
var G__27869 = arguments.length;
switch (G__27869) {
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
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
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
var n__5636__auto___30091 = n;
var x_30092 = (0);
while(true){
if((x_30092 < n__5636__auto___30091)){
(a[x_30092] = x_30092);

var G__30093 = (x_30092 + (1));
x_30092 = G__30093;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27885 = (function (flag,meta27886){
this.flag = flag;
this.meta27886 = meta27886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27887,meta27886__$1){
var self__ = this;
var _27887__$1 = this;
return (new cljs.core.async.t_cljs$core$async27885(self__.flag,meta27886__$1));
}));

(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27887){
var self__ = this;
var _27887__$1 = this;
return self__.meta27886;
}));

(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27886","meta27886",1442991988,null)], null);
}));

(cljs.core.async.t_cljs$core$async27885.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27885");

(cljs.core.async.t_cljs$core$async27885.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27885");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27885.
 */
cljs.core.async.__GT_t_cljs$core$async27885 = (function cljs$core$async$__GT_t_cljs$core$async27885(flag,meta27886){
return (new cljs.core.async.t_cljs$core$async27885(flag,meta27886));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async27885(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27898 = (function (flag,cb,meta27899){
this.flag = flag;
this.cb = cb;
this.meta27899 = meta27899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27900,meta27899__$1){
var self__ = this;
var _27900__$1 = this;
return (new cljs.core.async.t_cljs$core$async27898(self__.flag,self__.cb,meta27899__$1));
}));

(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27900){
var self__ = this;
var _27900__$1 = this;
return self__.meta27899;
}));

(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27899","meta27899",1420408249,null)], null);
}));

(cljs.core.async.t_cljs$core$async27898.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27898");

(cljs.core.async.t_cljs$core$async27898.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async27898");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27898.
 */
cljs.core.async.__GT_t_cljs$core$async27898 = (function cljs$core$async$__GT_t_cljs$core$async27898(flag,cb,meta27899){
return (new cljs.core.async.t_cljs$core$async27898(flag,cb,meta27899));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async27898(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27919_SHARP_){
var G__27931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27919_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27931) : fret.call(null,G__27931));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27920_SHARP_){
var G__27938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27920_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27938) : fret.call(null,G__27938));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30109 = (i + (1));
i = G__30109;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___30110 = arguments.length;
var i__5770__auto___30111 = (0);
while(true){
if((i__5770__auto___30111 < len__5769__auto___30110)){
args__5775__auto__.push((arguments[i__5770__auto___30111]));

var G__30112 = (i__5770__auto___30111 + (1));
i__5770__auto___30111 = G__30112;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27974){
var map__27975 = p__27974;
var map__27975__$1 = cljs.core.__destructure_map(map__27975);
var opts = map__27975__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27956){
var G__27957 = cljs.core.first(seq27956);
var seq27956__$1 = cljs.core.next(seq27956);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27957,seq27956__$1);
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
var G__28009 = arguments.length;
switch (G__28009) {
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
var c__27763__auto___30120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28061){
var state_val_28074 = (state_28061[(1)]);
if((state_val_28074 === (7))){
var inst_28048 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28107_30121 = state_28061__$1;
(statearr_28107_30121[(2)] = inst_28048);

(statearr_28107_30121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (1))){
var state_28061__$1 = state_28061;
var statearr_28108_30122 = state_28061__$1;
(statearr_28108_30122[(2)] = null);

(statearr_28108_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (4))){
var inst_28013 = (state_28061[(7)]);
var inst_28013__$1 = (state_28061[(2)]);
var inst_28014 = (inst_28013__$1 == null);
var state_28061__$1 = (function (){var statearr_28134 = state_28061;
(statearr_28134[(7)] = inst_28013__$1);

return statearr_28134;
})();
if(cljs.core.truth_(inst_28014)){
var statearr_28135_30123 = state_28061__$1;
(statearr_28135_30123[(1)] = (5));

} else {
var statearr_28136_30125 = state_28061__$1;
(statearr_28136_30125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (13))){
var state_28061__$1 = state_28061;
var statearr_28137_30127 = state_28061__$1;
(statearr_28137_30127[(2)] = null);

(statearr_28137_30127[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (6))){
var inst_28013 = (state_28061[(7)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28061__$1,(11),to,inst_28013);
} else {
if((state_val_28074 === (3))){
var inst_28056 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28061__$1,inst_28056);
} else {
if((state_val_28074 === (12))){
var state_28061__$1 = state_28061;
var statearr_28159_30129 = state_28061__$1;
(statearr_28159_30129[(2)] = null);

(statearr_28159_30129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (2))){
var state_28061__$1 = state_28061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28061__$1,(4),from);
} else {
if((state_val_28074 === (11))){
var inst_28029 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
if(cljs.core.truth_(inst_28029)){
var statearr_28161_30131 = state_28061__$1;
(statearr_28161_30131[(1)] = (12));

} else {
var statearr_28162_30132 = state_28061__$1;
(statearr_28162_30132[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (9))){
var state_28061__$1 = state_28061;
var statearr_28163_30135 = state_28061__$1;
(statearr_28163_30135[(2)] = null);

(statearr_28163_30135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (5))){
var state_28061__$1 = state_28061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28168_30136 = state_28061__$1;
(statearr_28168_30136[(1)] = (8));

} else {
var statearr_28169_30137 = state_28061__$1;
(statearr_28169_30137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (14))){
var inst_28045 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28170_30140 = state_28061__$1;
(statearr_28170_30140[(2)] = inst_28045);

(statearr_28170_30140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (10))){
var inst_28025 = (state_28061[(2)]);
var state_28061__$1 = state_28061;
var statearr_28175_30141 = state_28061__$1;
(statearr_28175_30141[(2)] = inst_28025);

(statearr_28175_30141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28074 === (8))){
var inst_28017 = cljs.core.async.close_BANG_(to);
var state_28061__$1 = state_28061;
var statearr_28176_30144 = state_28061__$1;
(statearr_28176_30144[(2)] = inst_28017);

(statearr_28176_30144[(1)] = (10));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_28177 = [null,null,null,null,null,null,null,null];
(statearr_28177[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_28177[(1)] = (1));

return statearr_28177;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_28061){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28061);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28182){var ex__27626__auto__ = e28182;
var statearr_28183_30145 = state_28061;
(statearr_28183_30145[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28061[(4)]))){
var statearr_28184_30146 = state_28061;
(statearr_28184_30146[(1)] = cljs.core.first((state_28061[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30147 = state_28061;
state_28061 = G__30147;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_28061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_28061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28185 = f__27764__auto__();
(statearr_28185[(6)] = c__27763__auto___30120);

return statearr_28185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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
var process__$1 = (function (p__28190){
var vec__28191 = p__28190;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28191,(1),null);
var job = vec__28191;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27763__auto___30149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28198){
var state_val_28199 = (state_28198[(1)]);
if((state_val_28199 === (1))){
var state_28198__$1 = state_28198;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28198__$1,(2),res,v);
} else {
if((state_val_28199 === (2))){
var inst_28195 = (state_28198[(2)]);
var inst_28196 = cljs.core.async.close_BANG_(res);
var state_28198__$1 = (function (){var statearr_28200 = state_28198;
(statearr_28200[(7)] = inst_28195);

return statearr_28200;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28198__$1,inst_28196);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_28201 = [null,null,null,null,null,null,null,null];
(statearr_28201[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__);

(statearr_28201[(1)] = (1));

return statearr_28201;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1 = (function (state_28198){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28198);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28202){var ex__27626__auto__ = e28202;
var statearr_28203_30151 = state_28198;
(statearr_28203_30151[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28198[(4)]))){
var statearr_28204_30152 = state_28198;
(statearr_28204_30152[(1)] = cljs.core.first((state_28198[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30153 = state_28198;
state_28198 = G__30153;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = function(state_28198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1.call(this,state_28198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28205 = f__27764__auto__();
(statearr_28205[(6)] = c__27763__auto___30149);

return statearr_28205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__28206){
var vec__28207 = p__28206;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28207,(1),null);
var job = vec__28207;
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
var n__5636__auto___30154 = n;
var __30155 = (0);
while(true){
if((__30155 < n__5636__auto___30154)){
var G__28210_30156 = type;
var G__28210_30157__$1 = (((G__28210_30156 instanceof cljs.core.Keyword))?G__28210_30156.fqn:null);
switch (G__28210_30157__$1) {
case "compute":
var c__27763__auto___30160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30155,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = ((function (__30155,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function (state_28223){
var state_val_28224 = (state_28223[(1)]);
if((state_val_28224 === (1))){
var state_28223__$1 = state_28223;
var statearr_28225_30164 = state_28223__$1;
(statearr_28225_30164[(2)] = null);

(statearr_28225_30164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (2))){
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28223__$1,(4),jobs);
} else {
if((state_val_28224 === (3))){
var inst_28221 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28223__$1,inst_28221);
} else {
if((state_val_28224 === (4))){
var inst_28213 = (state_28223[(2)]);
var inst_28214 = process__$1(inst_28213);
var state_28223__$1 = state_28223;
if(cljs.core.truth_(inst_28214)){
var statearr_28228_30165 = state_28223__$1;
(statearr_28228_30165[(1)] = (5));

} else {
var statearr_28229_30166 = state_28223__$1;
(statearr_28229_30166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (5))){
var state_28223__$1 = state_28223;
var statearr_28230_30167 = state_28223__$1;
(statearr_28230_30167[(2)] = null);

(statearr_28230_30167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (6))){
var state_28223__$1 = state_28223;
var statearr_28231_30168 = state_28223__$1;
(statearr_28231_30168[(2)] = null);

(statearr_28231_30168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28224 === (7))){
var inst_28219 = (state_28223[(2)]);
var state_28223__$1 = state_28223;
var statearr_28236_30169 = state_28223__$1;
(statearr_28236_30169[(2)] = inst_28219);

(statearr_28236_30169[(1)] = (3));


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
});})(__30155,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
;
return ((function (__30155,switch__27622__auto__,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_28237 = [null,null,null,null,null,null,null];
(statearr_28237[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__);

(statearr_28237[(1)] = (1));

return statearr_28237;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1 = (function (state_28223){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28223);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28238){var ex__27626__auto__ = e28238;
var statearr_28239_30170 = state_28223;
(statearr_28239_30170[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28223[(4)]))){
var statearr_28241_30172 = state_28223;
(statearr_28241_30172[(1)] = cljs.core.first((state_28223[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30176 = state_28223;
state_28223 = G__30176;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = function(state_28223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1.call(this,state_28223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__;
})()
;})(__30155,switch__27622__auto__,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
})();
var state__27765__auto__ = (function (){var statearr_28243 = f__27764__auto__();
(statearr_28243[(6)] = c__27763__auto___30160);

return statearr_28243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
});})(__30155,c__27763__auto___30160,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
);


break;
case "async":
var c__27763__auto___30177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__30155,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = ((function (__30155,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function (state_28258){
var state_val_28259 = (state_28258[(1)]);
if((state_val_28259 === (1))){
var state_28258__$1 = state_28258;
var statearr_28262_30178 = state_28258__$1;
(statearr_28262_30178[(2)] = null);

(statearr_28262_30178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (2))){
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28258__$1,(4),jobs);
} else {
if((state_val_28259 === (3))){
var inst_28256 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28258__$1,inst_28256);
} else {
if((state_val_28259 === (4))){
var inst_28247 = (state_28258[(2)]);
var inst_28249 = async(inst_28247);
var state_28258__$1 = state_28258;
if(cljs.core.truth_(inst_28249)){
var statearr_28267_30179 = state_28258__$1;
(statearr_28267_30179[(1)] = (5));

} else {
var statearr_28268_30180 = state_28258__$1;
(statearr_28268_30180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (5))){
var state_28258__$1 = state_28258;
var statearr_28269_30181 = state_28258__$1;
(statearr_28269_30181[(2)] = null);

(statearr_28269_30181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (6))){
var state_28258__$1 = state_28258;
var statearr_28273_30182 = state_28258__$1;
(statearr_28273_30182[(2)] = null);

(statearr_28273_30182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28259 === (7))){
var inst_28254 = (state_28258[(2)]);
var state_28258__$1 = state_28258;
var statearr_28275_30183 = state_28258__$1;
(statearr_28275_30183[(2)] = inst_28254);

(statearr_28275_30183[(1)] = (3));


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
});})(__30155,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
;
return ((function (__30155,switch__27622__auto__,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_28277 = [null,null,null,null,null,null,null];
(statearr_28277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__);

(statearr_28277[(1)] = (1));

return statearr_28277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1 = (function (state_28258){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28258);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28278){var ex__27626__auto__ = e28278;
var statearr_28279_30188 = state_28258;
(statearr_28279_30188[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28258[(4)]))){
var statearr_28280_30189 = state_28258;
(statearr_28280_30189[(1)] = cljs.core.first((state_28258[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30190 = state_28258;
state_28258 = G__30190;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = function(state_28258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1.call(this,state_28258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__;
})()
;})(__30155,switch__27622__auto__,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
})();
var state__27765__auto__ = (function (){var statearr_28281 = f__27764__auto__();
(statearr_28281[(6)] = c__27763__auto___30177);

return statearr_28281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
});})(__30155,c__27763__auto___30177,G__28210_30156,G__28210_30157__$1,n__5636__auto___30154,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28210_30157__$1)].join('')));

}

var G__30191 = (__30155 + (1));
__30155 = G__30191;
continue;
} else {
}
break;
}

var c__27763__auto___30192 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28307){
var state_val_28308 = (state_28307[(1)]);
if((state_val_28308 === (7))){
var inst_28303 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
var statearr_28314_30193 = state_28307__$1;
(statearr_28314_30193[(2)] = inst_28303);

(statearr_28314_30193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (1))){
var state_28307__$1 = state_28307;
var statearr_28319_30194 = state_28307__$1;
(statearr_28319_30194[(2)] = null);

(statearr_28319_30194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (4))){
var inst_28286 = (state_28307[(7)]);
var inst_28286__$1 = (state_28307[(2)]);
var inst_28288 = (inst_28286__$1 == null);
var state_28307__$1 = (function (){var statearr_28320 = state_28307;
(statearr_28320[(7)] = inst_28286__$1);

return statearr_28320;
})();
if(cljs.core.truth_(inst_28288)){
var statearr_28321_30197 = state_28307__$1;
(statearr_28321_30197[(1)] = (5));

} else {
var statearr_28322_30198 = state_28307__$1;
(statearr_28322_30198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (6))){
var inst_28293 = (state_28307[(8)]);
var inst_28286 = (state_28307[(7)]);
var inst_28293__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_28294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28295 = [inst_28286,inst_28293__$1];
var inst_28296 = (new cljs.core.PersistentVector(null,2,(5),inst_28294,inst_28295,null));
var state_28307__$1 = (function (){var statearr_28328 = state_28307;
(statearr_28328[(8)] = inst_28293__$1);

return statearr_28328;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28307__$1,(8),jobs,inst_28296);
} else {
if((state_val_28308 === (3))){
var inst_28305 = (state_28307[(2)]);
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28307__$1,inst_28305);
} else {
if((state_val_28308 === (2))){
var state_28307__$1 = state_28307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28307__$1,(4),from);
} else {
if((state_val_28308 === (9))){
var inst_28300 = (state_28307[(2)]);
var state_28307__$1 = (function (){var statearr_28343 = state_28307;
(statearr_28343[(9)] = inst_28300);

return statearr_28343;
})();
var statearr_28344_30201 = state_28307__$1;
(statearr_28344_30201[(2)] = null);

(statearr_28344_30201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (5))){
var inst_28291 = cljs.core.async.close_BANG_(jobs);
var state_28307__$1 = state_28307;
var statearr_28349_30202 = state_28307__$1;
(statearr_28349_30202[(2)] = inst_28291);

(statearr_28349_30202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28308 === (8))){
var inst_28293 = (state_28307[(8)]);
var inst_28298 = (state_28307[(2)]);
var state_28307__$1 = (function (){var statearr_28350 = state_28307;
(statearr_28350[(10)] = inst_28298);

return statearr_28350;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28307__$1,(9),results,inst_28293);
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
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_28351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__);

(statearr_28351[(1)] = (1));

return statearr_28351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1 = (function (state_28307){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28307);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28357){var ex__27626__auto__ = e28357;
var statearr_28358_30204 = state_28307;
(statearr_28358_30204[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28307[(4)]))){
var statearr_28359_30205 = state_28307;
(statearr_28359_30205[(1)] = cljs.core.first((state_28307[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30207 = state_28307;
state_28307 = G__30207;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = function(state_28307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1.call(this,state_28307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28360 = f__27764__auto__();
(statearr_28360[(6)] = c__27763__auto___30192);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


var c__27763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28398){
var state_val_28399 = (state_28398[(1)]);
if((state_val_28399 === (7))){
var inst_28394 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28421_30208 = state_28398__$1;
(statearr_28421_30208[(2)] = inst_28394);

(statearr_28421_30208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (20))){
var state_28398__$1 = state_28398;
var statearr_28423_30209 = state_28398__$1;
(statearr_28423_30209[(2)] = null);

(statearr_28423_30209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (1))){
var state_28398__$1 = state_28398;
var statearr_28424_30210 = state_28398__$1;
(statearr_28424_30210[(2)] = null);

(statearr_28424_30210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (4))){
var inst_28363 = (state_28398[(7)]);
var inst_28363__$1 = (state_28398[(2)]);
var inst_28364 = (inst_28363__$1 == null);
var state_28398__$1 = (function (){var statearr_28435 = state_28398;
(statearr_28435[(7)] = inst_28363__$1);

return statearr_28435;
})();
if(cljs.core.truth_(inst_28364)){
var statearr_28440_30213 = state_28398__$1;
(statearr_28440_30213[(1)] = (5));

} else {
var statearr_28444_30214 = state_28398__$1;
(statearr_28444_30214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (15))){
var inst_28376 = (state_28398[(8)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28398__$1,(18),to,inst_28376);
} else {
if((state_val_28399 === (21))){
var inst_28389 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28460_30215 = state_28398__$1;
(statearr_28460_30215[(2)] = inst_28389);

(statearr_28460_30215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (13))){
var inst_28391 = (state_28398[(2)]);
var state_28398__$1 = (function (){var statearr_28472 = state_28398;
(statearr_28472[(9)] = inst_28391);

return statearr_28472;
})();
var statearr_28477_30216 = state_28398__$1;
(statearr_28477_30216[(2)] = null);

(statearr_28477_30216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (6))){
var inst_28363 = (state_28398[(7)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28398__$1,(11),inst_28363);
} else {
if((state_val_28399 === (17))){
var inst_28384 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
if(cljs.core.truth_(inst_28384)){
var statearr_28480_30217 = state_28398__$1;
(statearr_28480_30217[(1)] = (19));

} else {
var statearr_28481_30218 = state_28398__$1;
(statearr_28481_30218[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (3))){
var inst_28396 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28398__$1,inst_28396);
} else {
if((state_val_28399 === (12))){
var inst_28373 = (state_28398[(10)]);
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28398__$1,(14),inst_28373);
} else {
if((state_val_28399 === (2))){
var state_28398__$1 = state_28398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28398__$1,(4),results);
} else {
if((state_val_28399 === (19))){
var state_28398__$1 = state_28398;
var statearr_28483_30220 = state_28398__$1;
(statearr_28483_30220[(2)] = null);

(statearr_28483_30220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (11))){
var inst_28373 = (state_28398[(2)]);
var state_28398__$1 = (function (){var statearr_28484 = state_28398;
(statearr_28484[(10)] = inst_28373);

return statearr_28484;
})();
var statearr_28485_30221 = state_28398__$1;
(statearr_28485_30221[(2)] = null);

(statearr_28485_30221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (9))){
var state_28398__$1 = state_28398;
var statearr_28486_30222 = state_28398__$1;
(statearr_28486_30222[(2)] = null);

(statearr_28486_30222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (5))){
var state_28398__$1 = state_28398;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28487_30223 = state_28398__$1;
(statearr_28487_30223[(1)] = (8));

} else {
var statearr_28488_30224 = state_28398__$1;
(statearr_28488_30224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (14))){
var inst_28378 = (state_28398[(11)]);
var inst_28376 = (state_28398[(8)]);
var inst_28376__$1 = (state_28398[(2)]);
var inst_28377 = (inst_28376__$1 == null);
var inst_28378__$1 = cljs.core.not(inst_28377);
var state_28398__$1 = (function (){var statearr_28489 = state_28398;
(statearr_28489[(11)] = inst_28378__$1);

(statearr_28489[(8)] = inst_28376__$1);

return statearr_28489;
})();
if(inst_28378__$1){
var statearr_28490_30226 = state_28398__$1;
(statearr_28490_30226[(1)] = (15));

} else {
var statearr_28491_30227 = state_28398__$1;
(statearr_28491_30227[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (16))){
var inst_28378 = (state_28398[(11)]);
var state_28398__$1 = state_28398;
var statearr_28496_30229 = state_28398__$1;
(statearr_28496_30229[(2)] = inst_28378);

(statearr_28496_30229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (10))){
var inst_28370 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28497_30230 = state_28398__$1;
(statearr_28497_30230[(2)] = inst_28370);

(statearr_28497_30230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (18))){
var inst_28381 = (state_28398[(2)]);
var state_28398__$1 = state_28398;
var statearr_28499_30231 = state_28398__$1;
(statearr_28499_30231[(2)] = inst_28381);

(statearr_28499_30231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28399 === (8))){
var inst_28367 = cljs.core.async.close_BANG_(to);
var state_28398__$1 = state_28398;
var statearr_28501_30232 = state_28398__$1;
(statearr_28501_30232[(2)] = inst_28367);

(statearr_28501_30232[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_28506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__);

(statearr_28506[(1)] = (1));

return statearr_28506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1 = (function (state_28398){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28398);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28507){var ex__27626__auto__ = e28507;
var statearr_28509_30234 = state_28398;
(statearr_28509_30234[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28398[(4)]))){
var statearr_28514_30235 = state_28398;
(statearr_28514_30235[(1)] = cljs.core.first((state_28398[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30236 = state_28398;
state_28398 = G__30236;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__ = function(state_28398){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1.call(this,state_28398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28515 = f__27764__auto__();
(statearr_28515[(6)] = c__27763__auto__);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

return c__27763__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28521 = arguments.length;
switch (G__28521) {
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
var G__28523 = arguments.length;
switch (G__28523) {
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
var G__28525 = arguments.length;
switch (G__28525) {
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
var c__27763__auto___30251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28551){
var state_val_28552 = (state_28551[(1)]);
if((state_val_28552 === (7))){
var inst_28547 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
var statearr_28554_30252 = state_28551__$1;
(statearr_28554_30252[(2)] = inst_28547);

(statearr_28554_30252[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (1))){
var state_28551__$1 = state_28551;
var statearr_28555_30253 = state_28551__$1;
(statearr_28555_30253[(2)] = null);

(statearr_28555_30253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (4))){
var inst_28528 = (state_28551[(7)]);
var inst_28528__$1 = (state_28551[(2)]);
var inst_28529 = (inst_28528__$1 == null);
var state_28551__$1 = (function (){var statearr_28559 = state_28551;
(statearr_28559[(7)] = inst_28528__$1);

return statearr_28559;
})();
if(cljs.core.truth_(inst_28529)){
var statearr_28560_30255 = state_28551__$1;
(statearr_28560_30255[(1)] = (5));

} else {
var statearr_28561_30256 = state_28551__$1;
(statearr_28561_30256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (13))){
var state_28551__$1 = state_28551;
var statearr_28562_30257 = state_28551__$1;
(statearr_28562_30257[(2)] = null);

(statearr_28562_30257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (6))){
var inst_28528 = (state_28551[(7)]);
var inst_28534 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28528) : p.call(null,inst_28528));
var state_28551__$1 = state_28551;
if(cljs.core.truth_(inst_28534)){
var statearr_28563_30258 = state_28551__$1;
(statearr_28563_30258[(1)] = (9));

} else {
var statearr_28564_30259 = state_28551__$1;
(statearr_28564_30259[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (3))){
var inst_28549 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28551__$1,inst_28549);
} else {
if((state_val_28552 === (12))){
var state_28551__$1 = state_28551;
var statearr_28565_30261 = state_28551__$1;
(statearr_28565_30261[(2)] = null);

(statearr_28565_30261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (2))){
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28551__$1,(4),ch);
} else {
if((state_val_28552 === (11))){
var inst_28528 = (state_28551[(7)]);
var inst_28538 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28551__$1,(8),inst_28538,inst_28528);
} else {
if((state_val_28552 === (9))){
var state_28551__$1 = state_28551;
var statearr_28566_30265 = state_28551__$1;
(statearr_28566_30265[(2)] = tc);

(statearr_28566_30265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (5))){
var inst_28531 = cljs.core.async.close_BANG_(tc);
var inst_28532 = cljs.core.async.close_BANG_(fc);
var state_28551__$1 = (function (){var statearr_28567 = state_28551;
(statearr_28567[(8)] = inst_28531);

return statearr_28567;
})();
var statearr_28568_30267 = state_28551__$1;
(statearr_28568_30267[(2)] = inst_28532);

(statearr_28568_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (14))){
var inst_28545 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
var statearr_28569_30269 = state_28551__$1;
(statearr_28569_30269[(2)] = inst_28545);

(statearr_28569_30269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (10))){
var state_28551__$1 = state_28551;
var statearr_28570_30271 = state_28551__$1;
(statearr_28570_30271[(2)] = fc);

(statearr_28570_30271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28552 === (8))){
var inst_28540 = (state_28551[(2)]);
var state_28551__$1 = state_28551;
if(cljs.core.truth_(inst_28540)){
var statearr_28571_30272 = state_28551__$1;
(statearr_28571_30272[(1)] = (12));

} else {
var statearr_28572_30273 = state_28551__$1;
(statearr_28572_30273[(1)] = (13));

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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_28573 = [null,null,null,null,null,null,null,null,null];
(statearr_28573[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_28573[(1)] = (1));

return statearr_28573;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_28551){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28551);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28574){var ex__27626__auto__ = e28574;
var statearr_28575_30277 = state_28551;
(statearr_28575_30277[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28551[(4)]))){
var statearr_28576_30278 = state_28551;
(statearr_28576_30278[(1)] = cljs.core.first((state_28551[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30279 = state_28551;
state_28551 = G__30279;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_28551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_28551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28578 = f__27764__auto__();
(statearr_28578[(6)] = c__27763__auto___30251);

return statearr_28578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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
var c__27763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28600){
var state_val_28601 = (state_28600[(1)]);
if((state_val_28601 === (7))){
var inst_28596 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28602_30280 = state_28600__$1;
(statearr_28602_30280[(2)] = inst_28596);

(statearr_28602_30280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (1))){
var inst_28579 = init;
var inst_28580 = inst_28579;
var state_28600__$1 = (function (){var statearr_28603 = state_28600;
(statearr_28603[(7)] = inst_28580);

return statearr_28603;
})();
var statearr_28604_30281 = state_28600__$1;
(statearr_28604_30281[(2)] = null);

(statearr_28604_30281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (4))){
var inst_28583 = (state_28600[(8)]);
var inst_28583__$1 = (state_28600[(2)]);
var inst_28584 = (inst_28583__$1 == null);
var state_28600__$1 = (function (){var statearr_28605 = state_28600;
(statearr_28605[(8)] = inst_28583__$1);

return statearr_28605;
})();
if(cljs.core.truth_(inst_28584)){
var statearr_28606_30282 = state_28600__$1;
(statearr_28606_30282[(1)] = (5));

} else {
var statearr_28607_30283 = state_28600__$1;
(statearr_28607_30283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (6))){
var inst_28580 = (state_28600[(7)]);
var inst_28587 = (state_28600[(9)]);
var inst_28583 = (state_28600[(8)]);
var inst_28587__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28580,inst_28583) : f.call(null,inst_28580,inst_28583));
var inst_28588 = cljs.core.reduced_QMARK_(inst_28587__$1);
var state_28600__$1 = (function (){var statearr_28608 = state_28600;
(statearr_28608[(9)] = inst_28587__$1);

return statearr_28608;
})();
if(inst_28588){
var statearr_28611_30284 = state_28600__$1;
(statearr_28611_30284[(1)] = (8));

} else {
var statearr_28613_30285 = state_28600__$1;
(statearr_28613_30285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (3))){
var inst_28598 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28600__$1,inst_28598);
} else {
if((state_val_28601 === (2))){
var state_28600__$1 = state_28600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28600__$1,(4),ch);
} else {
if((state_val_28601 === (9))){
var inst_28587 = (state_28600[(9)]);
var inst_28580 = inst_28587;
var state_28600__$1 = (function (){var statearr_28615 = state_28600;
(statearr_28615[(7)] = inst_28580);

return statearr_28615;
})();
var statearr_28616_30286 = state_28600__$1;
(statearr_28616_30286[(2)] = null);

(statearr_28616_30286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (5))){
var inst_28580 = (state_28600[(7)]);
var state_28600__$1 = state_28600;
var statearr_28619_30287 = state_28600__$1;
(statearr_28619_30287[(2)] = inst_28580);

(statearr_28619_30287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (10))){
var inst_28594 = (state_28600[(2)]);
var state_28600__$1 = state_28600;
var statearr_28622_30288 = state_28600__$1;
(statearr_28622_30288[(2)] = inst_28594);

(statearr_28622_30288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28601 === (8))){
var inst_28587 = (state_28600[(9)]);
var inst_28590 = cljs.core.deref(inst_28587);
var state_28600__$1 = state_28600;
var statearr_28623_30289 = state_28600__$1;
(statearr_28623_30289[(2)] = inst_28590);

(statearr_28623_30289[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__27623__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27623__auto____0 = (function (){
var statearr_28626 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28626[(0)] = cljs$core$async$reduce_$_state_machine__27623__auto__);

(statearr_28626[(1)] = (1));

return statearr_28626;
});
var cljs$core$async$reduce_$_state_machine__27623__auto____1 = (function (state_28600){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28600);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28629){var ex__27626__auto__ = e28629;
var statearr_28630_30290 = state_28600;
(statearr_28630_30290[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28600[(4)]))){
var statearr_28631_30291 = state_28600;
(statearr_28631_30291[(1)] = cljs.core.first((state_28600[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30292 = state_28600;
state_28600 = G__30292;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27623__auto__ = function(state_28600){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27623__auto____1.call(this,state_28600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27623__auto____0;
cljs$core$async$reduce_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27623__auto____1;
return cljs$core$async$reduce_$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28633 = f__27764__auto__();
(statearr_28633[(6)] = c__27763__auto__);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

return c__27763__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28642){
var state_val_28643 = (state_28642[(1)]);
if((state_val_28643 === (1))){
var inst_28637 = cljs.core.async.reduce(f__$1,init,ch);
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28642__$1,(2),inst_28637);
} else {
if((state_val_28643 === (2))){
var inst_28639 = (state_28642[(2)]);
var inst_28640 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28639) : f__$1.call(null,inst_28639));
var state_28642__$1 = state_28642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28642__$1,inst_28640);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27623__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27623__auto____0 = (function (){
var statearr_28644 = [null,null,null,null,null,null,null];
(statearr_28644[(0)] = cljs$core$async$transduce_$_state_machine__27623__auto__);

(statearr_28644[(1)] = (1));

return statearr_28644;
});
var cljs$core$async$transduce_$_state_machine__27623__auto____1 = (function (state_28642){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28642);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28645){var ex__27626__auto__ = e28645;
var statearr_28646_30294 = state_28642;
(statearr_28646_30294[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28642[(4)]))){
var statearr_28647_30295 = state_28642;
(statearr_28647_30295[(1)] = cljs.core.first((state_28642[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30296 = state_28642;
state_28642 = G__30296;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27623__auto__ = function(state_28642){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27623__auto____1.call(this,state_28642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27623__auto____0;
cljs$core$async$transduce_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27623__auto____1;
return cljs$core$async$transduce_$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28648 = f__27764__auto__();
(statearr_28648[(6)] = c__27763__auto__);

return statearr_28648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

return c__27763__auto__;
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
var G__28650 = arguments.length;
switch (G__28650) {
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
var c__27763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28676){
var state_val_28677 = (state_28676[(1)]);
if((state_val_28677 === (7))){
var inst_28657 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28679_30298 = state_28676__$1;
(statearr_28679_30298[(2)] = inst_28657);

(statearr_28679_30298[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (1))){
var inst_28651 = cljs.core.seq(coll);
var inst_28652 = inst_28651;
var state_28676__$1 = (function (){var statearr_28680 = state_28676;
(statearr_28680[(7)] = inst_28652);

return statearr_28680;
})();
var statearr_28681_30299 = state_28676__$1;
(statearr_28681_30299[(2)] = null);

(statearr_28681_30299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (4))){
var inst_28652 = (state_28676[(7)]);
var inst_28655 = cljs.core.first(inst_28652);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28676__$1,(7),ch,inst_28655);
} else {
if((state_val_28677 === (13))){
var inst_28669 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28684_30300 = state_28676__$1;
(statearr_28684_30300[(2)] = inst_28669);

(statearr_28684_30300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (6))){
var inst_28660 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
if(cljs.core.truth_(inst_28660)){
var statearr_28685_30301 = state_28676__$1;
(statearr_28685_30301[(1)] = (8));

} else {
var statearr_28686_30302 = state_28676__$1;
(statearr_28686_30302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (3))){
var inst_28674 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28676__$1,inst_28674);
} else {
if((state_val_28677 === (12))){
var state_28676__$1 = state_28676;
var statearr_28687_30304 = state_28676__$1;
(statearr_28687_30304[(2)] = null);

(statearr_28687_30304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (2))){
var inst_28652 = (state_28676[(7)]);
var state_28676__$1 = state_28676;
if(cljs.core.truth_(inst_28652)){
var statearr_28692_30309 = state_28676__$1;
(statearr_28692_30309[(1)] = (4));

} else {
var statearr_28693_30310 = state_28676__$1;
(statearr_28693_30310[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (11))){
var inst_28666 = cljs.core.async.close_BANG_(ch);
var state_28676__$1 = state_28676;
var statearr_28694_30311 = state_28676__$1;
(statearr_28694_30311[(2)] = inst_28666);

(statearr_28694_30311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (9))){
var state_28676__$1 = state_28676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28695_30312 = state_28676__$1;
(statearr_28695_30312[(1)] = (11));

} else {
var statearr_28696_30313 = state_28676__$1;
(statearr_28696_30313[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (5))){
var inst_28652 = (state_28676[(7)]);
var state_28676__$1 = state_28676;
var statearr_28697_30314 = state_28676__$1;
(statearr_28697_30314[(2)] = inst_28652);

(statearr_28697_30314[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (10))){
var inst_28672 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28698_30315 = state_28676__$1;
(statearr_28698_30315[(2)] = inst_28672);

(statearr_28698_30315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (8))){
var inst_28652 = (state_28676[(7)]);
var inst_28662 = cljs.core.next(inst_28652);
var inst_28652__$1 = inst_28662;
var state_28676__$1 = (function (){var statearr_28699 = state_28676;
(statearr_28699[(7)] = inst_28652__$1);

return statearr_28699;
})();
var statearr_28700_30316 = state_28676__$1;
(statearr_28700_30316[(2)] = null);

(statearr_28700_30316[(1)] = (2));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_28701 = [null,null,null,null,null,null,null,null];
(statearr_28701[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_28701[(1)] = (1));

return statearr_28701;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_28676){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28676);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e28702){var ex__27626__auto__ = e28702;
var statearr_28703_30319 = state_28676;
(statearr_28703_30319[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28676[(4)]))){
var statearr_28704_30320 = state_28676;
(statearr_28704_30320[(1)] = cljs.core.first((state_28676[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30321 = state_28676;
state_28676 = G__30321;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_28676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_28676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_28709 = f__27764__auto__();
(statearr_28709[(6)] = c__27763__auto__);

return statearr_28709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

return c__27763__auto__;
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
var G__28714 = arguments.length;
switch (G__28714) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_30324 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_30324(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_30325 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_30325(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_30326 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_30326(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_30327 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_30327(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28724 = (function (ch,cs,meta28725){
this.ch = ch;
this.cs = cs;
this.meta28725 = meta28725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28726,meta28725__$1){
var self__ = this;
var _28726__$1 = this;
return (new cljs.core.async.t_cljs$core$async28724(self__.ch,self__.cs,meta28725__$1));
}));

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28726){
var self__ = this;
var _28726__$1 = this;
return self__.meta28725;
}));

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async28724.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async28724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28725","meta28725",-963588066,null)], null);
}));

(cljs.core.async.t_cljs$core$async28724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28724");

(cljs.core.async.t_cljs$core$async28724.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async28724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28724.
 */
cljs.core.async.__GT_t_cljs$core$async28724 = (function cljs$core$async$__GT_t_cljs$core$async28724(ch,cs,meta28725){
return (new cljs.core.async.t_cljs$core$async28724(ch,cs,meta28725));
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
var m = (new cljs.core.async.t_cljs$core$async28724(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__27763__auto___30332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_28883){
var state_val_28885 = (state_28883[(1)]);
if((state_val_28885 === (7))){
var inst_28879 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28887_30333 = state_28883__$1;
(statearr_28887_30333[(2)] = inst_28879);

(statearr_28887_30333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (20))){
var inst_28772 = (state_28883[(7)]);
var inst_28785 = cljs.core.first(inst_28772);
var inst_28786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28785,(0),null);
var inst_28787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28785,(1),null);
var state_28883__$1 = (function (){var statearr_28888 = state_28883;
(statearr_28888[(8)] = inst_28786);

return statearr_28888;
})();
if(cljs.core.truth_(inst_28787)){
var statearr_28889_30334 = state_28883__$1;
(statearr_28889_30334[(1)] = (22));

} else {
var statearr_28890_30335 = state_28883__$1;
(statearr_28890_30335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (27))){
var inst_28829 = (state_28883[(9)]);
var inst_28737 = (state_28883[(10)]);
var inst_28823 = (state_28883[(11)]);
var inst_28821 = (state_28883[(12)]);
var inst_28829__$1 = cljs.core._nth(inst_28821,inst_28823);
var inst_28830 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28829__$1,inst_28737,done);
var state_28883__$1 = (function (){var statearr_28893 = state_28883;
(statearr_28893[(9)] = inst_28829__$1);

return statearr_28893;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28895_30340 = state_28883__$1;
(statearr_28895_30340[(1)] = (30));

} else {
var statearr_28897_30341 = state_28883__$1;
(statearr_28897_30341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (1))){
var state_28883__$1 = state_28883;
var statearr_28898_30342 = state_28883__$1;
(statearr_28898_30342[(2)] = null);

(statearr_28898_30342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (24))){
var inst_28772 = (state_28883[(7)]);
var inst_28795 = (state_28883[(2)]);
var inst_28796 = cljs.core.next(inst_28772);
var inst_28746 = inst_28796;
var inst_28747 = null;
var inst_28748 = (0);
var inst_28749 = (0);
var state_28883__$1 = (function (){var statearr_28899 = state_28883;
(statearr_28899[(13)] = inst_28795);

(statearr_28899[(14)] = inst_28748);

(statearr_28899[(15)] = inst_28749);

(statearr_28899[(16)] = inst_28746);

(statearr_28899[(17)] = inst_28747);

return statearr_28899;
})();
var statearr_28900_30343 = state_28883__$1;
(statearr_28900_30343[(2)] = null);

(statearr_28900_30343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (39))){
var state_28883__$1 = state_28883;
var statearr_28912_30344 = state_28883__$1;
(statearr_28912_30344[(2)] = null);

(statearr_28912_30344[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (4))){
var inst_28737 = (state_28883[(10)]);
var inst_28737__$1 = (state_28883[(2)]);
var inst_28738 = (inst_28737__$1 == null);
var state_28883__$1 = (function (){var statearr_28913 = state_28883;
(statearr_28913[(10)] = inst_28737__$1);

return statearr_28913;
})();
if(cljs.core.truth_(inst_28738)){
var statearr_28914_30345 = state_28883__$1;
(statearr_28914_30345[(1)] = (5));

} else {
var statearr_28915_30346 = state_28883__$1;
(statearr_28915_30346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (15))){
var inst_28748 = (state_28883[(14)]);
var inst_28749 = (state_28883[(15)]);
var inst_28746 = (state_28883[(16)]);
var inst_28747 = (state_28883[(17)]);
var inst_28768 = (state_28883[(2)]);
var inst_28769 = (inst_28749 + (1));
var tmp28903 = inst_28748;
var tmp28904 = inst_28746;
var tmp28905 = inst_28747;
var inst_28746__$1 = tmp28904;
var inst_28747__$1 = tmp28905;
var inst_28748__$1 = tmp28903;
var inst_28749__$1 = inst_28769;
var state_28883__$1 = (function (){var statearr_28918 = state_28883;
(statearr_28918[(18)] = inst_28768);

(statearr_28918[(14)] = inst_28748__$1);

(statearr_28918[(15)] = inst_28749__$1);

(statearr_28918[(16)] = inst_28746__$1);

(statearr_28918[(17)] = inst_28747__$1);

return statearr_28918;
})();
var statearr_28919_30348 = state_28883__$1;
(statearr_28919_30348[(2)] = null);

(statearr_28919_30348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (21))){
var inst_28799 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28925_30350 = state_28883__$1;
(statearr_28925_30350[(2)] = inst_28799);

(statearr_28925_30350[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (31))){
var inst_28829 = (state_28883[(9)]);
var inst_28833 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28829);
var state_28883__$1 = state_28883;
var statearr_28927_30351 = state_28883__$1;
(statearr_28927_30351[(2)] = inst_28833);

(statearr_28927_30351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (32))){
var inst_28822 = (state_28883[(19)]);
var inst_28820 = (state_28883[(20)]);
var inst_28823 = (state_28883[(11)]);
var inst_28821 = (state_28883[(12)]);
var inst_28835 = (state_28883[(2)]);
var inst_28836 = (inst_28823 + (1));
var tmp28922 = inst_28822;
var tmp28923 = inst_28820;
var tmp28924 = inst_28821;
var inst_28820__$1 = tmp28923;
var inst_28821__$1 = tmp28924;
var inst_28822__$1 = tmp28922;
var inst_28823__$1 = inst_28836;
var state_28883__$1 = (function (){var statearr_28929 = state_28883;
(statearr_28929[(19)] = inst_28822__$1);

(statearr_28929[(21)] = inst_28835);

(statearr_28929[(20)] = inst_28820__$1);

(statearr_28929[(11)] = inst_28823__$1);

(statearr_28929[(12)] = inst_28821__$1);

return statearr_28929;
})();
var statearr_28930_30353 = state_28883__$1;
(statearr_28930_30353[(2)] = null);

(statearr_28930_30353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (40))){
var inst_28850 = (state_28883[(22)]);
var inst_28856 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28850);
var state_28883__$1 = state_28883;
var statearr_28933_30354 = state_28883__$1;
(statearr_28933_30354[(2)] = inst_28856);

(statearr_28933_30354[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (33))){
var inst_28839 = (state_28883[(23)]);
var inst_28841 = cljs.core.chunked_seq_QMARK_(inst_28839);
var state_28883__$1 = state_28883;
if(inst_28841){
var statearr_28934_30359 = state_28883__$1;
(statearr_28934_30359[(1)] = (36));

} else {
var statearr_28935_30360 = state_28883__$1;
(statearr_28935_30360[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (13))){
var inst_28762 = (state_28883[(24)]);
var inst_28765 = cljs.core.async.close_BANG_(inst_28762);
var state_28883__$1 = state_28883;
var statearr_28938_30361 = state_28883__$1;
(statearr_28938_30361[(2)] = inst_28765);

(statearr_28938_30361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (22))){
var inst_28786 = (state_28883[(8)]);
var inst_28792 = cljs.core.async.close_BANG_(inst_28786);
var state_28883__$1 = state_28883;
var statearr_28939_30362 = state_28883__$1;
(statearr_28939_30362[(2)] = inst_28792);

(statearr_28939_30362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (36))){
var inst_28839 = (state_28883[(23)]);
var inst_28843 = cljs.core.chunk_first(inst_28839);
var inst_28844 = cljs.core.chunk_rest(inst_28839);
var inst_28845 = cljs.core.count(inst_28843);
var inst_28820 = inst_28844;
var inst_28821 = inst_28843;
var inst_28822 = inst_28845;
var inst_28823 = (0);
var state_28883__$1 = (function (){var statearr_28940 = state_28883;
(statearr_28940[(19)] = inst_28822);

(statearr_28940[(20)] = inst_28820);

(statearr_28940[(11)] = inst_28823);

(statearr_28940[(12)] = inst_28821);

return statearr_28940;
})();
var statearr_28943_30364 = state_28883__$1;
(statearr_28943_30364[(2)] = null);

(statearr_28943_30364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (41))){
var inst_28839 = (state_28883[(23)]);
var inst_28858 = (state_28883[(2)]);
var inst_28859 = cljs.core.next(inst_28839);
var inst_28820 = inst_28859;
var inst_28821 = null;
var inst_28822 = (0);
var inst_28823 = (0);
var state_28883__$1 = (function (){var statearr_28944 = state_28883;
(statearr_28944[(19)] = inst_28822);

(statearr_28944[(25)] = inst_28858);

(statearr_28944[(20)] = inst_28820);

(statearr_28944[(11)] = inst_28823);

(statearr_28944[(12)] = inst_28821);

return statearr_28944;
})();
var statearr_28945_30366 = state_28883__$1;
(statearr_28945_30366[(2)] = null);

(statearr_28945_30366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (43))){
var state_28883__$1 = state_28883;
var statearr_28946_30367 = state_28883__$1;
(statearr_28946_30367[(2)] = null);

(statearr_28946_30367[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (29))){
var inst_28867 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28947_30368 = state_28883__$1;
(statearr_28947_30368[(2)] = inst_28867);

(statearr_28947_30368[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (44))){
var inst_28876 = (state_28883[(2)]);
var state_28883__$1 = (function (){var statearr_28948 = state_28883;
(statearr_28948[(26)] = inst_28876);

return statearr_28948;
})();
var statearr_28949_30369 = state_28883__$1;
(statearr_28949_30369[(2)] = null);

(statearr_28949_30369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (6))){
var inst_28809 = (state_28883[(27)]);
var inst_28808 = cljs.core.deref(cs);
var inst_28809__$1 = cljs.core.keys(inst_28808);
var inst_28810 = cljs.core.count(inst_28809__$1);
var inst_28811 = cljs.core.reset_BANG_(dctr,inst_28810);
var inst_28816 = cljs.core.seq(inst_28809__$1);
var inst_28820 = inst_28816;
var inst_28821 = null;
var inst_28822 = (0);
var inst_28823 = (0);
var state_28883__$1 = (function (){var statearr_28953 = state_28883;
(statearr_28953[(27)] = inst_28809__$1);

(statearr_28953[(19)] = inst_28822);

(statearr_28953[(28)] = inst_28811);

(statearr_28953[(20)] = inst_28820);

(statearr_28953[(11)] = inst_28823);

(statearr_28953[(12)] = inst_28821);

return statearr_28953;
})();
var statearr_28954_30370 = state_28883__$1;
(statearr_28954_30370[(2)] = null);

(statearr_28954_30370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (28))){
var inst_28839 = (state_28883[(23)]);
var inst_28820 = (state_28883[(20)]);
var inst_28839__$1 = cljs.core.seq(inst_28820);
var state_28883__$1 = (function (){var statearr_28955 = state_28883;
(statearr_28955[(23)] = inst_28839__$1);

return statearr_28955;
})();
if(inst_28839__$1){
var statearr_28956_30372 = state_28883__$1;
(statearr_28956_30372[(1)] = (33));

} else {
var statearr_28957_30373 = state_28883__$1;
(statearr_28957_30373[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (25))){
var inst_28822 = (state_28883[(19)]);
var inst_28823 = (state_28883[(11)]);
var inst_28825 = (inst_28823 < inst_28822);
var inst_28826 = inst_28825;
var state_28883__$1 = state_28883;
if(cljs.core.truth_(inst_28826)){
var statearr_28958_30374 = state_28883__$1;
(statearr_28958_30374[(1)] = (27));

} else {
var statearr_28960_30375 = state_28883__$1;
(statearr_28960_30375[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (34))){
var state_28883__$1 = state_28883;
var statearr_28962_30376 = state_28883__$1;
(statearr_28962_30376[(2)] = null);

(statearr_28962_30376[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (17))){
var state_28883__$1 = state_28883;
var statearr_28963_30377 = state_28883__$1;
(statearr_28963_30377[(2)] = null);

(statearr_28963_30377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (3))){
var inst_28881 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28883__$1,inst_28881);
} else {
if((state_val_28885 === (12))){
var inst_28804 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28964_30386 = state_28883__$1;
(statearr_28964_30386[(2)] = inst_28804);

(statearr_28964_30386[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (2))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28883__$1,(4),ch);
} else {
if((state_val_28885 === (23))){
var state_28883__$1 = state_28883;
var statearr_28966_30387 = state_28883__$1;
(statearr_28966_30387[(2)] = null);

(statearr_28966_30387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (35))){
var inst_28865 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28968_30388 = state_28883__$1;
(statearr_28968_30388[(2)] = inst_28865);

(statearr_28968_30388[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (19))){
var inst_28772 = (state_28883[(7)]);
var inst_28776 = cljs.core.chunk_first(inst_28772);
var inst_28777 = cljs.core.chunk_rest(inst_28772);
var inst_28778 = cljs.core.count(inst_28776);
var inst_28746 = inst_28777;
var inst_28747 = inst_28776;
var inst_28748 = inst_28778;
var inst_28749 = (0);
var state_28883__$1 = (function (){var statearr_28970 = state_28883;
(statearr_28970[(14)] = inst_28748);

(statearr_28970[(15)] = inst_28749);

(statearr_28970[(16)] = inst_28746);

(statearr_28970[(17)] = inst_28747);

return statearr_28970;
})();
var statearr_28972_30391 = state_28883__$1;
(statearr_28972_30391[(2)] = null);

(statearr_28972_30391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (11))){
var inst_28746 = (state_28883[(16)]);
var inst_28772 = (state_28883[(7)]);
var inst_28772__$1 = cljs.core.seq(inst_28746);
var state_28883__$1 = (function (){var statearr_28973 = state_28883;
(statearr_28973[(7)] = inst_28772__$1);

return statearr_28973;
})();
if(inst_28772__$1){
var statearr_28974_30393 = state_28883__$1;
(statearr_28974_30393[(1)] = (16));

} else {
var statearr_28975_30394 = state_28883__$1;
(statearr_28975_30394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (9))){
var inst_28806 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28976_30395 = state_28883__$1;
(statearr_28976_30395[(2)] = inst_28806);

(statearr_28976_30395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (5))){
var inst_28744 = cljs.core.deref(cs);
var inst_28745 = cljs.core.seq(inst_28744);
var inst_28746 = inst_28745;
var inst_28747 = null;
var inst_28748 = (0);
var inst_28749 = (0);
var state_28883__$1 = (function (){var statearr_28977 = state_28883;
(statearr_28977[(14)] = inst_28748);

(statearr_28977[(15)] = inst_28749);

(statearr_28977[(16)] = inst_28746);

(statearr_28977[(17)] = inst_28747);

return statearr_28977;
})();
var statearr_28978_30396 = state_28883__$1;
(statearr_28978_30396[(2)] = null);

(statearr_28978_30396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (14))){
var state_28883__$1 = state_28883;
var statearr_28979_30397 = state_28883__$1;
(statearr_28979_30397[(2)] = null);

(statearr_28979_30397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (45))){
var inst_28873 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28980_30398 = state_28883__$1;
(statearr_28980_30398[(2)] = inst_28873);

(statearr_28980_30398[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (26))){
var inst_28809 = (state_28883[(27)]);
var inst_28869 = (state_28883[(2)]);
var inst_28870 = cljs.core.seq(inst_28809);
var state_28883__$1 = (function (){var statearr_28982 = state_28883;
(statearr_28982[(29)] = inst_28869);

return statearr_28982;
})();
if(inst_28870){
var statearr_28983_30399 = state_28883__$1;
(statearr_28983_30399[(1)] = (42));

} else {
var statearr_28984_30400 = state_28883__$1;
(statearr_28984_30400[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (16))){
var inst_28772 = (state_28883[(7)]);
var inst_28774 = cljs.core.chunked_seq_QMARK_(inst_28772);
var state_28883__$1 = state_28883;
if(inst_28774){
var statearr_28985_30403 = state_28883__$1;
(statearr_28985_30403[(1)] = (19));

} else {
var statearr_28986_30404 = state_28883__$1;
(statearr_28986_30404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (38))){
var inst_28862 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28987_30405 = state_28883__$1;
(statearr_28987_30405[(2)] = inst_28862);

(statearr_28987_30405[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (30))){
var state_28883__$1 = state_28883;
var statearr_28988_30407 = state_28883__$1;
(statearr_28988_30407[(2)] = null);

(statearr_28988_30407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (10))){
var inst_28749 = (state_28883[(15)]);
var inst_28747 = (state_28883[(17)]);
var inst_28761 = cljs.core._nth(inst_28747,inst_28749);
var inst_28762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28761,(0),null);
var inst_28763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28761,(1),null);
var state_28883__$1 = (function (){var statearr_28990 = state_28883;
(statearr_28990[(24)] = inst_28762);

return statearr_28990;
})();
if(cljs.core.truth_(inst_28763)){
var statearr_28991_30409 = state_28883__$1;
(statearr_28991_30409[(1)] = (13));

} else {
var statearr_28992_30410 = state_28883__$1;
(statearr_28992_30410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (18))){
var inst_28802 = (state_28883[(2)]);
var state_28883__$1 = state_28883;
var statearr_28993_30411 = state_28883__$1;
(statearr_28993_30411[(2)] = inst_28802);

(statearr_28993_30411[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (42))){
var state_28883__$1 = state_28883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28883__$1,(45),dchan);
} else {
if((state_val_28885 === (37))){
var inst_28839 = (state_28883[(23)]);
var inst_28850 = (state_28883[(22)]);
var inst_28737 = (state_28883[(10)]);
var inst_28850__$1 = cljs.core.first(inst_28839);
var inst_28851 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28850__$1,inst_28737,done);
var state_28883__$1 = (function (){var statearr_28998 = state_28883;
(statearr_28998[(22)] = inst_28850__$1);

return statearr_28998;
})();
if(cljs.core.truth_(inst_28851)){
var statearr_28999_30413 = state_28883__$1;
(statearr_28999_30413[(1)] = (39));

} else {
var statearr_29000_30414 = state_28883__$1;
(statearr_29000_30414[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28885 === (8))){
var inst_28748 = (state_28883[(14)]);
var inst_28749 = (state_28883[(15)]);
var inst_28753 = (inst_28749 < inst_28748);
var inst_28754 = inst_28753;
var state_28883__$1 = state_28883;
if(cljs.core.truth_(inst_28754)){
var statearr_29002_30416 = state_28883__$1;
(statearr_29002_30416[(1)] = (10));

} else {
var statearr_29004_30417 = state_28883__$1;
(statearr_29004_30417[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__27623__auto__ = null;
var cljs$core$async$mult_$_state_machine__27623__auto____0 = (function (){
var statearr_29011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29011[(0)] = cljs$core$async$mult_$_state_machine__27623__auto__);

(statearr_29011[(1)] = (1));

return statearr_29011;
});
var cljs$core$async$mult_$_state_machine__27623__auto____1 = (function (state_28883){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_28883);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29015){var ex__27626__auto__ = e29015;
var statearr_29016_30419 = state_28883;
(statearr_29016_30419[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_28883[(4)]))){
var statearr_29017_30421 = state_28883;
(statearr_29017_30421[(1)] = cljs.core.first((state_28883[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30422 = state_28883;
state_28883 = G__30422;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27623__auto__ = function(state_28883){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27623__auto____1.call(this,state_28883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27623__auto____0;
cljs$core$async$mult_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27623__auto____1;
return cljs$core$async$mult_$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29018 = f__27764__auto__();
(statearr_29018[(6)] = c__27763__auto___30332);

return statearr_29018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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
var G__29024 = arguments.length;
switch (G__29024) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_30424 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30424(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30429 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30429(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30433 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30433(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30437 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30437(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30441 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30441(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___30442 = arguments.length;
var i__5770__auto___30446 = (0);
while(true){
if((i__5770__auto___30446 < len__5769__auto___30442)){
args__5775__auto__.push((arguments[i__5770__auto___30446]));

var G__30447 = (i__5770__auto___30446 + (1));
i__5770__auto___30446 = G__30447;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29062){
var map__29063 = p__29062;
var map__29063__$1 = cljs.core.__destructure_map(map__29063);
var opts = map__29063__$1;
var statearr_29064_30448 = state;
(statearr_29064_30448[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_29065_30449 = state;
(statearr_29065_30449[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_29066_30451 = state;
(statearr_29066_30451[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29058){
var G__29059 = cljs.core.first(seq29058);
var seq29058__$1 = cljs.core.next(seq29058);
var G__29060 = cljs.core.first(seq29058__$1);
var seq29058__$2 = cljs.core.next(seq29058__$1);
var G__29061 = cljs.core.first(seq29058__$2);
var seq29058__$3 = cljs.core.next(seq29058__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29059,G__29060,G__29061,seq29058__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29070 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29071){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29071 = meta29071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29072,meta29071__$1){
var self__ = this;
var _29072__$1 = this;
return (new cljs.core.async.t_cljs$core$async29070(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29071__$1));
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29072){
var self__ = this;
var _29072__$1 = this;
return self__.meta29071;
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29070.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async29070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29071","meta29071",-681062039,null)], null);
}));

(cljs.core.async.t_cljs$core$async29070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29070");

(cljs.core.async.t_cljs$core$async29070.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29070.
 */
cljs.core.async.__GT_t_cljs$core$async29070 = (function cljs$core$async$__GT_t_cljs$core$async29070(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29071){
return (new cljs.core.async.t_cljs$core$async29070(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29071));
});


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
var m = (new cljs.core.async.t_cljs$core$async29070(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__27763__auto___30471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29154){
var state_val_29155 = (state_29154[(1)]);
if((state_val_29155 === (7))){
var inst_29114 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
if(cljs.core.truth_(inst_29114)){
var statearr_29156_30473 = state_29154__$1;
(statearr_29156_30473[(1)] = (8));

} else {
var statearr_29157_30474 = state_29154__$1;
(statearr_29157_30474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (20))){
var inst_29107 = (state_29154[(7)]);
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29154__$1,(23),out,inst_29107);
} else {
if((state_val_29155 === (1))){
var inst_29090 = calc_state();
var inst_29091 = cljs.core.__destructure_map(inst_29090);
var inst_29092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29093 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29094 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29091,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29095 = inst_29090;
var state_29154__$1 = (function (){var statearr_29158 = state_29154;
(statearr_29158[(8)] = inst_29094);

(statearr_29158[(9)] = inst_29093);

(statearr_29158[(10)] = inst_29095);

(statearr_29158[(11)] = inst_29092);

return statearr_29158;
})();
var statearr_29159_30476 = state_29154__$1;
(statearr_29159_30476[(2)] = null);

(statearr_29159_30476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (24))){
var inst_29098 = (state_29154[(12)]);
var inst_29095 = inst_29098;
var state_29154__$1 = (function (){var statearr_29160 = state_29154;
(statearr_29160[(10)] = inst_29095);

return statearr_29160;
})();
var statearr_29161_30477 = state_29154__$1;
(statearr_29161_30477[(2)] = null);

(statearr_29161_30477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (4))){
var inst_29109 = (state_29154[(13)]);
var inst_29107 = (state_29154[(7)]);
var inst_29106 = (state_29154[(2)]);
var inst_29107__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29106,(0),null);
var inst_29108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29106,(1),null);
var inst_29109__$1 = (inst_29107__$1 == null);
var state_29154__$1 = (function (){var statearr_29162 = state_29154;
(statearr_29162[(13)] = inst_29109__$1);

(statearr_29162[(7)] = inst_29107__$1);

(statearr_29162[(14)] = inst_29108);

return statearr_29162;
})();
if(cljs.core.truth_(inst_29109__$1)){
var statearr_29163_30478 = state_29154__$1;
(statearr_29163_30478[(1)] = (5));

} else {
var statearr_29164_30479 = state_29154__$1;
(statearr_29164_30479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (15))){
var inst_29128 = (state_29154[(15)]);
var inst_29099 = (state_29154[(16)]);
var inst_29128__$1 = cljs.core.empty_QMARK_(inst_29099);
var state_29154__$1 = (function (){var statearr_29165 = state_29154;
(statearr_29165[(15)] = inst_29128__$1);

return statearr_29165;
})();
if(inst_29128__$1){
var statearr_29166_30484 = state_29154__$1;
(statearr_29166_30484[(1)] = (17));

} else {
var statearr_29167_30485 = state_29154__$1;
(statearr_29167_30485[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (21))){
var inst_29098 = (state_29154[(12)]);
var inst_29095 = inst_29098;
var state_29154__$1 = (function (){var statearr_29168 = state_29154;
(statearr_29168[(10)] = inst_29095);

return statearr_29168;
})();
var statearr_29169_30486 = state_29154__$1;
(statearr_29169_30486[(2)] = null);

(statearr_29169_30486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (13))){
var inst_29121 = (state_29154[(2)]);
var inst_29122 = calc_state();
var inst_29095 = inst_29122;
var state_29154__$1 = (function (){var statearr_29170 = state_29154;
(statearr_29170[(17)] = inst_29121);

(statearr_29170[(10)] = inst_29095);

return statearr_29170;
})();
var statearr_29171_30487 = state_29154__$1;
(statearr_29171_30487[(2)] = null);

(statearr_29171_30487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (22))){
var inst_29148 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
var statearr_29172_30488 = state_29154__$1;
(statearr_29172_30488[(2)] = inst_29148);

(statearr_29172_30488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (6))){
var inst_29108 = (state_29154[(14)]);
var inst_29112 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29108,change);
var state_29154__$1 = state_29154;
var statearr_29173_30489 = state_29154__$1;
(statearr_29173_30489[(2)] = inst_29112);

(statearr_29173_30489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (25))){
var state_29154__$1 = state_29154;
var statearr_29174_30490 = state_29154__$1;
(statearr_29174_30490[(2)] = null);

(statearr_29174_30490[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (17))){
var inst_29100 = (state_29154[(18)]);
var inst_29108 = (state_29154[(14)]);
var inst_29130 = (inst_29100.cljs$core$IFn$_invoke$arity$1 ? inst_29100.cljs$core$IFn$_invoke$arity$1(inst_29108) : inst_29100.call(null,inst_29108));
var inst_29131 = cljs.core.not(inst_29130);
var state_29154__$1 = state_29154;
var statearr_29175_30491 = state_29154__$1;
(statearr_29175_30491[(2)] = inst_29131);

(statearr_29175_30491[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (3))){
var inst_29152 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29154__$1,inst_29152);
} else {
if((state_val_29155 === (12))){
var state_29154__$1 = state_29154;
var statearr_29176_30492 = state_29154__$1;
(statearr_29176_30492[(2)] = null);

(statearr_29176_30492[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (2))){
var inst_29098 = (state_29154[(12)]);
var inst_29095 = (state_29154[(10)]);
var inst_29098__$1 = cljs.core.__destructure_map(inst_29095);
var inst_29099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29098__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29098__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29098__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29154__$1 = (function (){var statearr_29177 = state_29154;
(statearr_29177[(18)] = inst_29100);

(statearr_29177[(12)] = inst_29098__$1);

(statearr_29177[(16)] = inst_29099);

return statearr_29177;
})();
return cljs.core.async.ioc_alts_BANG_(state_29154__$1,(4),inst_29101);
} else {
if((state_val_29155 === (23))){
var inst_29139 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
if(cljs.core.truth_(inst_29139)){
var statearr_29178_30494 = state_29154__$1;
(statearr_29178_30494[(1)] = (24));

} else {
var statearr_29179_30495 = state_29154__$1;
(statearr_29179_30495[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (19))){
var inst_29134 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
var statearr_29180_30496 = state_29154__$1;
(statearr_29180_30496[(2)] = inst_29134);

(statearr_29180_30496[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (11))){
var inst_29108 = (state_29154[(14)]);
var inst_29118 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_29108);
var state_29154__$1 = state_29154;
var statearr_29181_30497 = state_29154__$1;
(statearr_29181_30497[(2)] = inst_29118);

(statearr_29181_30497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (9))){
var inst_29108 = (state_29154[(14)]);
var inst_29125 = (state_29154[(19)]);
var inst_29099 = (state_29154[(16)]);
var inst_29125__$1 = (inst_29099.cljs$core$IFn$_invoke$arity$1 ? inst_29099.cljs$core$IFn$_invoke$arity$1(inst_29108) : inst_29099.call(null,inst_29108));
var state_29154__$1 = (function (){var statearr_29182 = state_29154;
(statearr_29182[(19)] = inst_29125__$1);

return statearr_29182;
})();
if(cljs.core.truth_(inst_29125__$1)){
var statearr_29183_30498 = state_29154__$1;
(statearr_29183_30498[(1)] = (14));

} else {
var statearr_29184_30499 = state_29154__$1;
(statearr_29184_30499[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (5))){
var inst_29109 = (state_29154[(13)]);
var state_29154__$1 = state_29154;
var statearr_29185_30500 = state_29154__$1;
(statearr_29185_30500[(2)] = inst_29109);

(statearr_29185_30500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (14))){
var inst_29125 = (state_29154[(19)]);
var state_29154__$1 = state_29154;
var statearr_29186_30501 = state_29154__$1;
(statearr_29186_30501[(2)] = inst_29125);

(statearr_29186_30501[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (26))){
var inst_29144 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
var statearr_29187_30502 = state_29154__$1;
(statearr_29187_30502[(2)] = inst_29144);

(statearr_29187_30502[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (16))){
var inst_29136 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
if(cljs.core.truth_(inst_29136)){
var statearr_29188_30503 = state_29154__$1;
(statearr_29188_30503[(1)] = (20));

} else {
var statearr_29189_30504 = state_29154__$1;
(statearr_29189_30504[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (10))){
var inst_29150 = (state_29154[(2)]);
var state_29154__$1 = state_29154;
var statearr_29190_30506 = state_29154__$1;
(statearr_29190_30506[(2)] = inst_29150);

(statearr_29190_30506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (18))){
var inst_29128 = (state_29154[(15)]);
var state_29154__$1 = state_29154;
var statearr_29191_30507 = state_29154__$1;
(statearr_29191_30507[(2)] = inst_29128);

(statearr_29191_30507[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29155 === (8))){
var inst_29107 = (state_29154[(7)]);
var inst_29116 = (inst_29107 == null);
var state_29154__$1 = state_29154;
if(cljs.core.truth_(inst_29116)){
var statearr_29192_30508 = state_29154__$1;
(statearr_29192_30508[(1)] = (11));

} else {
var statearr_29193_30509 = state_29154__$1;
(statearr_29193_30509[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__27623__auto__ = null;
var cljs$core$async$mix_$_state_machine__27623__auto____0 = (function (){
var statearr_29194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29194[(0)] = cljs$core$async$mix_$_state_machine__27623__auto__);

(statearr_29194[(1)] = (1));

return statearr_29194;
});
var cljs$core$async$mix_$_state_machine__27623__auto____1 = (function (state_29154){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29154);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29195){var ex__27626__auto__ = e29195;
var statearr_29196_30511 = state_29154;
(statearr_29196_30511[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29154[(4)]))){
var statearr_29197_30515 = state_29154;
(statearr_29197_30515[(1)] = cljs.core.first((state_29154[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30516 = state_29154;
state_29154 = G__30516;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27623__auto__ = function(state_29154){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27623__auto____1.call(this,state_29154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27623__auto____0;
cljs$core$async$mix_$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27623__auto____1;
return cljs$core$async$mix_$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29198 = f__27764__auto__();
(statearr_29198[(6)] = c__27763__auto___30471);

return statearr_29198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_30521 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30521(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30527 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30527(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30529 = (function() {
var G__30530 = null;
var G__30530__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30530__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30530 = function(p,v){
switch(arguments.length){
case 1:
return G__30530__1.call(this,p);
case 2:
return G__30530__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30530.cljs$core$IFn$_invoke$arity$1 = G__30530__1;
G__30530.cljs$core$IFn$_invoke$arity$2 = G__30530__2;
return G__30530;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29200 = arguments.length;
switch (G__29200) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30529(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30529(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29206 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29207){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29207 = meta29207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29208,meta29207__$1){
var self__ = this;
var _29208__$1 = this;
return (new cljs.core.async.t_cljs$core$async29206(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29207__$1));
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29208){
var self__ = this;
var _29208__$1 = this;
return self__.meta29207;
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async29206.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async29206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29207","meta29207",-156677040,null)], null);
}));

(cljs.core.async.t_cljs$core$async29206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29206");

(cljs.core.async.t_cljs$core$async29206.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29206.
 */
cljs.core.async.__GT_t_cljs$core$async29206 = (function cljs$core$async$__GT_t_cljs$core$async29206(ch,topic_fn,buf_fn,mults,ensure_mult,meta29207){
return (new cljs.core.async.t_cljs$core$async29206(ch,topic_fn,buf_fn,mults,ensure_mult,meta29207));
});


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
var G__29205 = arguments.length;
switch (G__29205) {
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
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__29201_SHARP_){
if(cljs.core.truth_((p1__29201_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29201_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__29201_SHARP_.call(null,topic)))){
return p1__29201_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29201_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async29206(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__27763__auto___30534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29285){
var state_val_29286 = (state_29285[(1)]);
if((state_val_29286 === (7))){
var inst_29281 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29290_30539 = state_29285__$1;
(statearr_29290_30539[(2)] = inst_29281);

(statearr_29290_30539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (20))){
var state_29285__$1 = state_29285;
var statearr_29291_30540 = state_29285__$1;
(statearr_29291_30540[(2)] = null);

(statearr_29291_30540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (1))){
var state_29285__$1 = state_29285;
var statearr_29292_30541 = state_29285__$1;
(statearr_29292_30541[(2)] = null);

(statearr_29292_30541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (24))){
var inst_29264 = (state_29285[(7)]);
var inst_29273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_29264);
var state_29285__$1 = state_29285;
var statearr_29293_30544 = state_29285__$1;
(statearr_29293_30544[(2)] = inst_29273);

(statearr_29293_30544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (4))){
var inst_29216 = (state_29285[(8)]);
var inst_29216__$1 = (state_29285[(2)]);
var inst_29217 = (inst_29216__$1 == null);
var state_29285__$1 = (function (){var statearr_29294 = state_29285;
(statearr_29294[(8)] = inst_29216__$1);

return statearr_29294;
})();
if(cljs.core.truth_(inst_29217)){
var statearr_29296_30547 = state_29285__$1;
(statearr_29296_30547[(1)] = (5));

} else {
var statearr_29297_30548 = state_29285__$1;
(statearr_29297_30548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (15))){
var inst_29258 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29298_30549 = state_29285__$1;
(statearr_29298_30549[(2)] = inst_29258);

(statearr_29298_30549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (21))){
var inst_29278 = (state_29285[(2)]);
var state_29285__$1 = (function (){var statearr_29299 = state_29285;
(statearr_29299[(9)] = inst_29278);

return statearr_29299;
})();
var statearr_29300_30550 = state_29285__$1;
(statearr_29300_30550[(2)] = null);

(statearr_29300_30550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (13))){
var inst_29240 = (state_29285[(10)]);
var inst_29242 = cljs.core.chunked_seq_QMARK_(inst_29240);
var state_29285__$1 = state_29285;
if(inst_29242){
var statearr_29303_30551 = state_29285__$1;
(statearr_29303_30551[(1)] = (16));

} else {
var statearr_29304_30552 = state_29285__$1;
(statearr_29304_30552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (22))){
var inst_29270 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29270)){
var statearr_29307_30560 = state_29285__$1;
(statearr_29307_30560[(1)] = (23));

} else {
var statearr_29309_30561 = state_29285__$1;
(statearr_29309_30561[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (6))){
var inst_29264 = (state_29285[(7)]);
var inst_29266 = (state_29285[(11)]);
var inst_29216 = (state_29285[(8)]);
var inst_29264__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_29216) : topic_fn.call(null,inst_29216));
var inst_29265 = cljs.core.deref(mults);
var inst_29266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29265,inst_29264__$1);
var state_29285__$1 = (function (){var statearr_29310 = state_29285;
(statearr_29310[(7)] = inst_29264__$1);

(statearr_29310[(11)] = inst_29266__$1);

return statearr_29310;
})();
if(cljs.core.truth_(inst_29266__$1)){
var statearr_29311_30562 = state_29285__$1;
(statearr_29311_30562[(1)] = (19));

} else {
var statearr_29312_30563 = state_29285__$1;
(statearr_29312_30563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (25))){
var inst_29275 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29314_30564 = state_29285__$1;
(statearr_29314_30564[(2)] = inst_29275);

(statearr_29314_30564[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (17))){
var inst_29240 = (state_29285[(10)]);
var inst_29249 = cljs.core.first(inst_29240);
var inst_29250 = cljs.core.async.muxch_STAR_(inst_29249);
var inst_29251 = cljs.core.async.close_BANG_(inst_29250);
var inst_29252 = cljs.core.next(inst_29240);
var inst_29226 = inst_29252;
var inst_29227 = null;
var inst_29228 = (0);
var inst_29229 = (0);
var state_29285__$1 = (function (){var statearr_29317 = state_29285;
(statearr_29317[(12)] = inst_29227);

(statearr_29317[(13)] = inst_29226);

(statearr_29317[(14)] = inst_29229);

(statearr_29317[(15)] = inst_29251);

(statearr_29317[(16)] = inst_29228);

return statearr_29317;
})();
var statearr_29318_30571 = state_29285__$1;
(statearr_29318_30571[(2)] = null);

(statearr_29318_30571[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (3))){
var inst_29283 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29285__$1,inst_29283);
} else {
if((state_val_29286 === (12))){
var inst_29260 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29321_30572 = state_29285__$1;
(statearr_29321_30572[(2)] = inst_29260);

(statearr_29321_30572[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (2))){
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29285__$1,(4),ch);
} else {
if((state_val_29286 === (23))){
var state_29285__$1 = state_29285;
var statearr_29322_30576 = state_29285__$1;
(statearr_29322_30576[(2)] = null);

(statearr_29322_30576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (19))){
var inst_29266 = (state_29285[(11)]);
var inst_29216 = (state_29285[(8)]);
var inst_29268 = cljs.core.async.muxch_STAR_(inst_29266);
var state_29285__$1 = state_29285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29285__$1,(22),inst_29268,inst_29216);
} else {
if((state_val_29286 === (11))){
var inst_29226 = (state_29285[(13)]);
var inst_29240 = (state_29285[(10)]);
var inst_29240__$1 = cljs.core.seq(inst_29226);
var state_29285__$1 = (function (){var statearr_29325 = state_29285;
(statearr_29325[(10)] = inst_29240__$1);

return statearr_29325;
})();
if(inst_29240__$1){
var statearr_29326_30577 = state_29285__$1;
(statearr_29326_30577[(1)] = (13));

} else {
var statearr_29328_30578 = state_29285__$1;
(statearr_29328_30578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (9))){
var inst_29262 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29330_30579 = state_29285__$1;
(statearr_29330_30579[(2)] = inst_29262);

(statearr_29330_30579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (5))){
var inst_29223 = cljs.core.deref(mults);
var inst_29224 = cljs.core.vals(inst_29223);
var inst_29225 = cljs.core.seq(inst_29224);
var inst_29226 = inst_29225;
var inst_29227 = null;
var inst_29228 = (0);
var inst_29229 = (0);
var state_29285__$1 = (function (){var statearr_29333 = state_29285;
(statearr_29333[(12)] = inst_29227);

(statearr_29333[(13)] = inst_29226);

(statearr_29333[(14)] = inst_29229);

(statearr_29333[(16)] = inst_29228);

return statearr_29333;
})();
var statearr_29334_30580 = state_29285__$1;
(statearr_29334_30580[(2)] = null);

(statearr_29334_30580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (14))){
var state_29285__$1 = state_29285;
var statearr_29338_30581 = state_29285__$1;
(statearr_29338_30581[(2)] = null);

(statearr_29338_30581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (16))){
var inst_29240 = (state_29285[(10)]);
var inst_29244 = cljs.core.chunk_first(inst_29240);
var inst_29245 = cljs.core.chunk_rest(inst_29240);
var inst_29246 = cljs.core.count(inst_29244);
var inst_29226 = inst_29245;
var inst_29227 = inst_29244;
var inst_29228 = inst_29246;
var inst_29229 = (0);
var state_29285__$1 = (function (){var statearr_29341 = state_29285;
(statearr_29341[(12)] = inst_29227);

(statearr_29341[(13)] = inst_29226);

(statearr_29341[(14)] = inst_29229);

(statearr_29341[(16)] = inst_29228);

return statearr_29341;
})();
var statearr_29342_30582 = state_29285__$1;
(statearr_29342_30582[(2)] = null);

(statearr_29342_30582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (10))){
var inst_29227 = (state_29285[(12)]);
var inst_29226 = (state_29285[(13)]);
var inst_29229 = (state_29285[(14)]);
var inst_29228 = (state_29285[(16)]);
var inst_29234 = cljs.core._nth(inst_29227,inst_29229);
var inst_29235 = cljs.core.async.muxch_STAR_(inst_29234);
var inst_29236 = cljs.core.async.close_BANG_(inst_29235);
var inst_29237 = (inst_29229 + (1));
var tmp29335 = inst_29227;
var tmp29336 = inst_29226;
var tmp29337 = inst_29228;
var inst_29226__$1 = tmp29336;
var inst_29227__$1 = tmp29335;
var inst_29228__$1 = tmp29337;
var inst_29229__$1 = inst_29237;
var state_29285__$1 = (function (){var statearr_29343 = state_29285;
(statearr_29343[(12)] = inst_29227__$1);

(statearr_29343[(13)] = inst_29226__$1);

(statearr_29343[(14)] = inst_29229__$1);

(statearr_29343[(16)] = inst_29228__$1);

(statearr_29343[(17)] = inst_29236);

return statearr_29343;
})();
var statearr_29344_30583 = state_29285__$1;
(statearr_29344_30583[(2)] = null);

(statearr_29344_30583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (18))){
var inst_29255 = (state_29285[(2)]);
var state_29285__$1 = state_29285;
var statearr_29349_30590 = state_29285__$1;
(statearr_29349_30590[(2)] = inst_29255);

(statearr_29349_30590[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29286 === (8))){
var inst_29229 = (state_29285[(14)]);
var inst_29228 = (state_29285[(16)]);
var inst_29231 = (inst_29229 < inst_29228);
var inst_29232 = inst_29231;
var state_29285__$1 = state_29285;
if(cljs.core.truth_(inst_29232)){
var statearr_29350_30591 = state_29285__$1;
(statearr_29350_30591[(1)] = (10));

} else {
var statearr_29351_30592 = state_29285__$1;
(statearr_29351_30592[(1)] = (11));

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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29353[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29353[(1)] = (1));

return statearr_29353;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29285){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29285);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29354){var ex__27626__auto__ = e29354;
var statearr_29355_30594 = state_29285;
(statearr_29355_30594[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29285[(4)]))){
var statearr_29356_30595 = state_29285;
(statearr_29356_30595[(1)] = cljs.core.first((state_29285[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30596 = state_29285;
state_29285 = G__30596;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29358 = f__27764__auto__();
(statearr_29358[(6)] = c__27763__auto___30534);

return statearr_29358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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
var G__29360 = arguments.length;
switch (G__29360) {
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
var G__29363 = arguments.length;
switch (G__29363) {
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
var G__29370 = arguments.length;
switch (G__29370) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__27763__auto___30604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29417){
var state_val_29418 = (state_29417[(1)]);
if((state_val_29418 === (7))){
var state_29417__$1 = state_29417;
var statearr_29419_30605 = state_29417__$1;
(statearr_29419_30605[(2)] = null);

(statearr_29419_30605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (1))){
var state_29417__$1 = state_29417;
var statearr_29420_30606 = state_29417__$1;
(statearr_29420_30606[(2)] = null);

(statearr_29420_30606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (4))){
var inst_29374 = (state_29417[(7)]);
var inst_29373 = (state_29417[(8)]);
var inst_29376 = (inst_29374 < inst_29373);
var state_29417__$1 = state_29417;
if(cljs.core.truth_(inst_29376)){
var statearr_29421_30607 = state_29417__$1;
(statearr_29421_30607[(1)] = (6));

} else {
var statearr_29422_30608 = state_29417__$1;
(statearr_29422_30608[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (15))){
var inst_29403 = (state_29417[(9)]);
var inst_29408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_29403);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29417__$1,(17),out,inst_29408);
} else {
if((state_val_29418 === (13))){
var inst_29403 = (state_29417[(9)]);
var inst_29403__$1 = (state_29417[(2)]);
var inst_29404 = cljs.core.some(cljs.core.nil_QMARK_,inst_29403__$1);
var state_29417__$1 = (function (){var statearr_29423 = state_29417;
(statearr_29423[(9)] = inst_29403__$1);

return statearr_29423;
})();
if(cljs.core.truth_(inst_29404)){
var statearr_29424_30609 = state_29417__$1;
(statearr_29424_30609[(1)] = (14));

} else {
var statearr_29425_30610 = state_29417__$1;
(statearr_29425_30610[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (6))){
var state_29417__$1 = state_29417;
var statearr_29427_30611 = state_29417__$1;
(statearr_29427_30611[(2)] = null);

(statearr_29427_30611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (17))){
var inst_29410 = (state_29417[(2)]);
var state_29417__$1 = (function (){var statearr_29430 = state_29417;
(statearr_29430[(10)] = inst_29410);

return statearr_29430;
})();
var statearr_29431_30612 = state_29417__$1;
(statearr_29431_30612[(2)] = null);

(statearr_29431_30612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (3))){
var inst_29415 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29417__$1,inst_29415);
} else {
if((state_val_29418 === (12))){
var _ = (function (){var statearr_29432 = state_29417;
(statearr_29432[(4)] = cljs.core.rest((state_29417[(4)])));

return statearr_29432;
})();
var state_29417__$1 = state_29417;
var ex29429 = (state_29417__$1[(2)]);
var statearr_29433_30615 = state_29417__$1;
(statearr_29433_30615[(5)] = ex29429);


if((ex29429 instanceof Object)){
var statearr_29434_30616 = state_29417__$1;
(statearr_29434_30616[(1)] = (11));

(statearr_29434_30616[(5)] = null);

} else {
throw ex29429;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (2))){
var inst_29372 = cljs.core.reset_BANG_(dctr,cnt);
var inst_29373 = cnt;
var inst_29374 = (0);
var state_29417__$1 = (function (){var statearr_29435 = state_29417;
(statearr_29435[(7)] = inst_29374);

(statearr_29435[(11)] = inst_29372);

(statearr_29435[(8)] = inst_29373);

return statearr_29435;
})();
var statearr_29436_30617 = state_29417__$1;
(statearr_29436_30617[(2)] = null);

(statearr_29436_30617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (11))){
var inst_29380 = (state_29417[(2)]);
var inst_29382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_29417__$1 = (function (){var statearr_29437 = state_29417;
(statearr_29437[(12)] = inst_29380);

return statearr_29437;
})();
var statearr_29438_30618 = state_29417__$1;
(statearr_29438_30618[(2)] = inst_29382);

(statearr_29438_30618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (9))){
var inst_29374 = (state_29417[(7)]);
var _ = (function (){var statearr_29439 = state_29417;
(statearr_29439[(4)] = cljs.core.cons((12),(state_29417[(4)])));

return statearr_29439;
})();
var inst_29388 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_29374) : chs__$1.call(null,inst_29374));
var inst_29389 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_29374) : done.call(null,inst_29374));
var inst_29390 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_29388,inst_29389);
var ___$1 = (function (){var statearr_29440 = state_29417;
(statearr_29440[(4)] = cljs.core.rest((state_29417[(4)])));

return statearr_29440;
})();
var state_29417__$1 = state_29417;
var statearr_29441_30623 = state_29417__$1;
(statearr_29441_30623[(2)] = inst_29390);

(statearr_29441_30623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (5))){
var inst_29400 = (state_29417[(2)]);
var state_29417__$1 = (function (){var statearr_29442 = state_29417;
(statearr_29442[(13)] = inst_29400);

return statearr_29442;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29417__$1,(13),dchan);
} else {
if((state_val_29418 === (14))){
var inst_29406 = cljs.core.async.close_BANG_(out);
var state_29417__$1 = state_29417;
var statearr_29444_30624 = state_29417__$1;
(statearr_29444_30624[(2)] = inst_29406);

(statearr_29444_30624[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (16))){
var inst_29413 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29445_30625 = state_29417__$1;
(statearr_29445_30625[(2)] = inst_29413);

(statearr_29445_30625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (10))){
var inst_29374 = (state_29417[(7)]);
var inst_29393 = (state_29417[(2)]);
var inst_29394 = (inst_29374 + (1));
var inst_29374__$1 = inst_29394;
var state_29417__$1 = (function (){var statearr_29449 = state_29417;
(statearr_29449[(7)] = inst_29374__$1);

(statearr_29449[(14)] = inst_29393);

return statearr_29449;
})();
var statearr_29450_30627 = state_29417__$1;
(statearr_29450_30627[(2)] = null);

(statearr_29450_30627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29418 === (8))){
var inst_29398 = (state_29417[(2)]);
var state_29417__$1 = state_29417;
var statearr_29451_30628 = state_29417__$1;
(statearr_29451_30628[(2)] = inst_29398);

(statearr_29451_30628[(1)] = (5));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29452[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29452[(1)] = (1));

return statearr_29452;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29417){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29417);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29453){var ex__27626__auto__ = e29453;
var statearr_29454_30631 = state_29417;
(statearr_29454_30631[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29417[(4)]))){
var statearr_29455_30636 = state_29417;
(statearr_29455_30636[(1)] = cljs.core.first((state_29417[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30637 = state_29417;
state_29417 = G__30637;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29457 = f__27764__auto__();
(statearr_29457[(6)] = c__27763__auto___30604);

return statearr_29457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

}

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
var G__29462 = arguments.length;
switch (G__29462) {
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
var c__27763__auto___30640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29497){
var state_val_29498 = (state_29497[(1)]);
if((state_val_29498 === (7))){
var inst_29477 = (state_29497[(7)]);
var inst_29476 = (state_29497[(8)]);
var inst_29476__$1 = (state_29497[(2)]);
var inst_29477__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29476__$1,(0),null);
var inst_29478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29476__$1,(1),null);
var inst_29479 = (inst_29477__$1 == null);
var state_29497__$1 = (function (){var statearr_29501 = state_29497;
(statearr_29501[(7)] = inst_29477__$1);

(statearr_29501[(8)] = inst_29476__$1);

(statearr_29501[(9)] = inst_29478);

return statearr_29501;
})();
if(cljs.core.truth_(inst_29479)){
var statearr_29503_30642 = state_29497__$1;
(statearr_29503_30642[(1)] = (8));

} else {
var statearr_29505_30643 = state_29497__$1;
(statearr_29505_30643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (1))){
var inst_29466 = cljs.core.vec(chs);
var inst_29467 = inst_29466;
var state_29497__$1 = (function (){var statearr_29506 = state_29497;
(statearr_29506[(10)] = inst_29467);

return statearr_29506;
})();
var statearr_29507_30644 = state_29497__$1;
(statearr_29507_30644[(2)] = null);

(statearr_29507_30644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (4))){
var inst_29467 = (state_29497[(10)]);
var state_29497__$1 = state_29497;
return cljs.core.async.ioc_alts_BANG_(state_29497__$1,(7),inst_29467);
} else {
if((state_val_29498 === (6))){
var inst_29493 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29510_30648 = state_29497__$1;
(statearr_29510_30648[(2)] = inst_29493);

(statearr_29510_30648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (3))){
var inst_29495 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29497__$1,inst_29495);
} else {
if((state_val_29498 === (2))){
var inst_29467 = (state_29497[(10)]);
var inst_29469 = cljs.core.count(inst_29467);
var inst_29470 = (inst_29469 > (0));
var state_29497__$1 = state_29497;
if(cljs.core.truth_(inst_29470)){
var statearr_29512_30651 = state_29497__$1;
(statearr_29512_30651[(1)] = (4));

} else {
var statearr_29513_30652 = state_29497__$1;
(statearr_29513_30652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (11))){
var inst_29467 = (state_29497[(10)]);
var inst_29486 = (state_29497[(2)]);
var tmp29511 = inst_29467;
var inst_29467__$1 = tmp29511;
var state_29497__$1 = (function (){var statearr_29514 = state_29497;
(statearr_29514[(11)] = inst_29486);

(statearr_29514[(10)] = inst_29467__$1);

return statearr_29514;
})();
var statearr_29515_30654 = state_29497__$1;
(statearr_29515_30654[(2)] = null);

(statearr_29515_30654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (9))){
var inst_29477 = (state_29497[(7)]);
var state_29497__$1 = state_29497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29497__$1,(11),out,inst_29477);
} else {
if((state_val_29498 === (5))){
var inst_29491 = cljs.core.async.close_BANG_(out);
var state_29497__$1 = state_29497;
var statearr_29521_30655 = state_29497__$1;
(statearr_29521_30655[(2)] = inst_29491);

(statearr_29521_30655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (10))){
var inst_29489 = (state_29497[(2)]);
var state_29497__$1 = state_29497;
var statearr_29524_30656 = state_29497__$1;
(statearr_29524_30656[(2)] = inst_29489);

(statearr_29524_30656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29498 === (8))){
var inst_29467 = (state_29497[(10)]);
var inst_29477 = (state_29497[(7)]);
var inst_29476 = (state_29497[(8)]);
var inst_29478 = (state_29497[(9)]);
var inst_29481 = (function (){var cs = inst_29467;
var vec__29472 = inst_29476;
var v = inst_29477;
var c = inst_29478;
return (function (p1__29458_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29458_SHARP_);
});
})();
var inst_29482 = cljs.core.filterv(inst_29481,inst_29467);
var inst_29467__$1 = inst_29482;
var state_29497__$1 = (function (){var statearr_29529 = state_29497;
(statearr_29529[(10)] = inst_29467__$1);

return statearr_29529;
})();
var statearr_29530_30657 = state_29497__$1;
(statearr_29530_30657[(2)] = null);

(statearr_29530_30657[(1)] = (2));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29531 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29531[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29531[(1)] = (1));

return statearr_29531;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29497){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29497);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29532){var ex__27626__auto__ = e29532;
var statearr_29533_30658 = state_29497;
(statearr_29533_30658[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29497[(4)]))){
var statearr_29534_30659 = state_29497;
(statearr_29534_30659[(1)] = cljs.core.first((state_29497[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30660 = state_29497;
state_29497 = G__30660;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29535 = f__27764__auto__();
(statearr_29535[(6)] = c__27763__auto___30640);

return statearr_29535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
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
var G__29539 = arguments.length;
switch (G__29539) {
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
var c__27763__auto___30662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29548 = (state_29567[(7)]);
var inst_29548__$1 = (state_29567[(2)]);
var inst_29550 = (inst_29548__$1 == null);
var inst_29551 = cljs.core.not(inst_29550);
var state_29567__$1 = (function (){var statearr_29570 = state_29567;
(statearr_29570[(7)] = inst_29548__$1);

return statearr_29570;
})();
if(inst_29551){
var statearr_29571_30669 = state_29567__$1;
(statearr_29571_30669[(1)] = (8));

} else {
var statearr_29572_30670 = state_29567__$1;
(statearr_29572_30670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var inst_29543 = (0);
var state_29567__$1 = (function (){var statearr_29573 = state_29567;
(statearr_29573[(8)] = inst_29543);

return statearr_29573;
})();
var statearr_29574_30671 = state_29567__$1;
(statearr_29574_30671[(2)] = null);

(statearr_29574_30671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29567__$1,(7),ch);
} else {
if((state_val_29568 === (6))){
var inst_29562 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29576_30672 = state_29567__$1;
(statearr_29576_30672[(2)] = inst_29562);

(statearr_29576_30672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var inst_29564 = (state_29567[(2)]);
var inst_29565 = cljs.core.async.close_BANG_(out);
var state_29567__$1 = (function (){var statearr_29580 = state_29567;
(statearr_29580[(9)] = inst_29564);

return statearr_29580;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (2))){
var inst_29543 = (state_29567[(8)]);
var inst_29545 = (inst_29543 < n);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29545)){
var statearr_29586_30673 = state_29567__$1;
(statearr_29586_30673[(1)] = (4));

} else {
var statearr_29587_30674 = state_29567__$1;
(statearr_29587_30674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (11))){
var inst_29543 = (state_29567[(8)]);
var inst_29554 = (state_29567[(2)]);
var inst_29555 = (inst_29543 + (1));
var inst_29543__$1 = inst_29555;
var state_29567__$1 = (function (){var statearr_29588 = state_29567;
(statearr_29588[(10)] = inst_29554);

(statearr_29588[(8)] = inst_29543__$1);

return statearr_29588;
})();
var statearr_29589_30675 = state_29567__$1;
(statearr_29589_30675[(2)] = null);

(statearr_29589_30675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var state_29567__$1 = state_29567;
var statearr_29590_30676 = state_29567__$1;
(statearr_29590_30676[(2)] = null);

(statearr_29590_30676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var state_29567__$1 = state_29567;
var statearr_29591_30677 = state_29567__$1;
(statearr_29591_30677[(2)] = null);

(statearr_29591_30677[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29559 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29593_30678 = state_29567__$1;
(statearr_29593_30678[(2)] = inst_29559);

(statearr_29593_30678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29548 = (state_29567[(7)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29567__$1,(11),out,inst_29548);
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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29594[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29594[(1)] = (1));

return statearr_29594;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29567){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29567);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29595){var ex__27626__auto__ = e29595;
var statearr_29596_30679 = state_29567;
(statearr_29596_30679[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29567[(4)]))){
var statearr_29597_30680 = state_29567;
(statearr_29597_30680[(1)] = cljs.core.first((state_29567[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30684 = state_29567;
state_29567 = G__30684;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29598 = f__27764__auto__();
(statearr_29598[(6)] = c__27763__auto___30662);

return statearr_29598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29603 = (function (f,ch,meta29601,_,fn1,meta29604){
this.f = f;
this.ch = ch;
this.meta29601 = meta29601;
this._ = _;
this.fn1 = fn1;
this.meta29604 = meta29604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29605,meta29604__$1){
var self__ = this;
var _29605__$1 = this;
return (new cljs.core.async.t_cljs$core$async29603(self__.f,self__.ch,self__.meta29601,self__._,self__.fn1,meta29604__$1));
}));

(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29605){
var self__ = this;
var _29605__$1 = this;
return self__.meta29604;
}));

(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__29599_SHARP_){
var G__29607 = (((p1__29599_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29599_SHARP_) : self__.f.call(null,p1__29599_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29607) : f1.call(null,G__29607));
});
}));

(cljs.core.async.t_cljs$core$async29603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29601","meta29601",-1505334364,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29600","cljs.core.async/t_cljs$core$async29600",-1314703828,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29604","meta29604",553503717,null)], null);
}));

(cljs.core.async.t_cljs$core$async29603.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29603");

(cljs.core.async.t_cljs$core$async29603.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29603");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29603.
 */
cljs.core.async.__GT_t_cljs$core$async29603 = (function cljs$core$async$__GT_t_cljs$core$async29603(f,ch,meta29601,_,fn1,meta29604){
return (new cljs.core.async.t_cljs$core$async29603(f,ch,meta29601,_,fn1,meta29604));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29600 = (function (f,ch,meta29601){
this.f = f;
this.ch = ch;
this.meta29601 = meta29601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29602,meta29601__$1){
var self__ = this;
var _29602__$1 = this;
return (new cljs.core.async.t_cljs$core$async29600(self__.f,self__.ch,meta29601__$1));
}));

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29602){
var self__ = this;
var _29602__$1 = this;
return self__.meta29601;
}));

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async29603(self__.f,self__.ch,self__.meta29601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29608 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29608) : self__.f.call(null,G__29608));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async29600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29601","meta29601",-1505334364,null)], null);
}));

(cljs.core.async.t_cljs$core$async29600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29600");

(cljs.core.async.t_cljs$core$async29600.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29600.
 */
cljs.core.async.__GT_t_cljs$core$async29600 = (function cljs$core$async$__GT_t_cljs$core$async29600(f,ch,meta29601){
return (new cljs.core.async.t_cljs$core$async29600(f,ch,meta29601));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async29600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29610 = (function (f,ch,meta29611){
this.f = f;
this.ch = ch;
this.meta29611 = meta29611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29612,meta29611__$1){
var self__ = this;
var _29612__$1 = this;
return (new cljs.core.async.t_cljs$core$async29610(self__.f,self__.ch,meta29611__$1));
}));

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29612){
var self__ = this;
var _29612__$1 = this;
return self__.meta29611;
}));

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async29610.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29611","meta29611",-1011419145,null)], null);
}));

(cljs.core.async.t_cljs$core$async29610.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29610");

(cljs.core.async.t_cljs$core$async29610.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29610");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29610.
 */
cljs.core.async.__GT_t_cljs$core$async29610 = (function cljs$core$async$__GT_t_cljs$core$async29610(f,ch,meta29611){
return (new cljs.core.async.t_cljs$core$async29610(f,ch,meta29611));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async29610(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29615 = (function (p,ch,meta29616){
this.p = p;
this.ch = ch;
this.meta29616 = meta29616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29617,meta29616__$1){
var self__ = this;
var _29617__$1 = this;
return (new cljs.core.async.t_cljs$core$async29615(self__.p,self__.ch,meta29616__$1));
}));

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29617){
var self__ = this;
var _29617__$1 = this;
return self__.meta29616;
}));

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async29615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29616","meta29616",752542480,null)], null);
}));

(cljs.core.async.t_cljs$core$async29615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29615");

(cljs.core.async.t_cljs$core$async29615.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async29615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29615.
 */
cljs.core.async.__GT_t_cljs$core$async29615 = (function cljs$core$async$__GT_t_cljs$core$async29615(p,ch,meta29616){
return (new cljs.core.async.t_cljs$core$async29615(p,ch,meta29616));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async29615(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29619 = arguments.length;
switch (G__29619) {
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
var c__27763__auto___30698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_30699 = state_29640__$1;
(statearr_29642_30699[(2)] = inst_29636);

(statearr_29642_30699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var state_29640__$1 = state_29640;
var statearr_29643_30701 = state_29640__$1;
(statearr_29643_30701[(2)] = null);

(statearr_29643_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29622 = (state_29640[(7)]);
var inst_29622__$1 = (state_29640[(2)]);
var inst_29623 = (inst_29622__$1 == null);
var state_29640__$1 = (function (){var statearr_29644 = state_29640;
(statearr_29644[(7)] = inst_29622__$1);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29647_30705 = state_29640__$1;
(statearr_29647_30705[(1)] = (5));

} else {
var statearr_29648_30706 = state_29640__$1;
(statearr_29648_30706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var inst_29622 = (state_29640[(7)]);
var inst_29627 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29622) : p.call(null,inst_29622));
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29627)){
var statearr_29649_30708 = state_29640__$1;
(statearr_29649_30708[(1)] = (8));

} else {
var statearr_29650_30709 = state_29640__$1;
(statearr_29650_30709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29640__$1,(4),ch);
} else {
if((state_val_29641 === (11))){
var inst_29630 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29651_30712 = state_29640__$1;
(statearr_29651_30712[(2)] = inst_29630);

(statearr_29651_30712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (9))){
var state_29640__$1 = state_29640;
var statearr_29654_30714 = state_29640__$1;
(statearr_29654_30714[(2)] = null);

(statearr_29654_30714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (5))){
var inst_29625 = cljs.core.async.close_BANG_(out);
var state_29640__$1 = state_29640;
var statearr_29655_30715 = state_29640__$1;
(statearr_29655_30715[(2)] = inst_29625);

(statearr_29655_30715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29633 = (state_29640[(2)]);
var state_29640__$1 = (function (){var statearr_29656 = state_29640;
(statearr_29656[(8)] = inst_29633);

return statearr_29656;
})();
var statearr_29657_30716 = state_29640__$1;
(statearr_29657_30716[(2)] = null);

(statearr_29657_30716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29622 = (state_29640[(7)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29640__$1,(11),out,inst_29622);
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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29658 = [null,null,null,null,null,null,null,null,null];
(statearr_29658[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29658[(1)] = (1));

return statearr_29658;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29640){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29640);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29660){var ex__27626__auto__ = e29660;
var statearr_29662_30717 = state_29640;
(statearr_29662_30717[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29640[(4)]))){
var statearr_29663_30718 = state_29640;
(statearr_29663_30718[(1)] = cljs.core.first((state_29640[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30720 = state_29640;
state_29640 = G__30720;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29664 = f__27764__auto__();
(statearr_29664[(6)] = c__27763__auto___30698);

return statearr_29664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29669 = arguments.length;
switch (G__29669) {
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
var c__27763__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29747){
var state_val_29748 = (state_29747[(1)]);
if((state_val_29748 === (7))){
var inst_29727 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
var statearr_29749_30723 = state_29747__$1;
(statearr_29749_30723[(2)] = inst_29727);

(statearr_29749_30723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (20))){
var inst_29697 = (state_29747[(7)]);
var inst_29708 = (state_29747[(2)]);
var inst_29709 = cljs.core.next(inst_29697);
var inst_29683 = inst_29709;
var inst_29684 = null;
var inst_29685 = (0);
var inst_29686 = (0);
var state_29747__$1 = (function (){var statearr_29750 = state_29747;
(statearr_29750[(8)] = inst_29708);

(statearr_29750[(9)] = inst_29683);

(statearr_29750[(10)] = inst_29684);

(statearr_29750[(11)] = inst_29685);

(statearr_29750[(12)] = inst_29686);

return statearr_29750;
})();
var statearr_29752_30724 = state_29747__$1;
(statearr_29752_30724[(2)] = null);

(statearr_29752_30724[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (1))){
var state_29747__$1 = state_29747;
var statearr_29753_30725 = state_29747__$1;
(statearr_29753_30725[(2)] = null);

(statearr_29753_30725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (4))){
var inst_29672 = (state_29747[(13)]);
var inst_29672__$1 = (state_29747[(2)]);
var inst_29673 = (inst_29672__$1 == null);
var state_29747__$1 = (function (){var statearr_29754 = state_29747;
(statearr_29754[(13)] = inst_29672__$1);

return statearr_29754;
})();
if(cljs.core.truth_(inst_29673)){
var statearr_29755_30726 = state_29747__$1;
(statearr_29755_30726[(1)] = (5));

} else {
var statearr_29756_30727 = state_29747__$1;
(statearr_29756_30727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (15))){
var state_29747__$1 = state_29747;
var statearr_29772_30728 = state_29747__$1;
(statearr_29772_30728[(2)] = null);

(statearr_29772_30728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (21))){
var state_29747__$1 = state_29747;
var statearr_29782_30729 = state_29747__$1;
(statearr_29782_30729[(2)] = null);

(statearr_29782_30729[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (13))){
var inst_29683 = (state_29747[(9)]);
var inst_29684 = (state_29747[(10)]);
var inst_29685 = (state_29747[(11)]);
var inst_29686 = (state_29747[(12)]);
var inst_29693 = (state_29747[(2)]);
var inst_29694 = (inst_29686 + (1));
var tmp29764 = inst_29683;
var tmp29765 = inst_29684;
var tmp29766 = inst_29685;
var inst_29683__$1 = tmp29764;
var inst_29684__$1 = tmp29765;
var inst_29685__$1 = tmp29766;
var inst_29686__$1 = inst_29694;
var state_29747__$1 = (function (){var statearr_29787 = state_29747;
(statearr_29787[(9)] = inst_29683__$1);

(statearr_29787[(10)] = inst_29684__$1);

(statearr_29787[(14)] = inst_29693);

(statearr_29787[(11)] = inst_29685__$1);

(statearr_29787[(12)] = inst_29686__$1);

return statearr_29787;
})();
var statearr_29788_30731 = state_29747__$1;
(statearr_29788_30731[(2)] = null);

(statearr_29788_30731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (22))){
var state_29747__$1 = state_29747;
var statearr_29789_30733 = state_29747__$1;
(statearr_29789_30733[(2)] = null);

(statearr_29789_30733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (6))){
var inst_29672 = (state_29747[(13)]);
var inst_29681 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29672) : f.call(null,inst_29672));
var inst_29682 = cljs.core.seq(inst_29681);
var inst_29683 = inst_29682;
var inst_29684 = null;
var inst_29685 = (0);
var inst_29686 = (0);
var state_29747__$1 = (function (){var statearr_29790 = state_29747;
(statearr_29790[(9)] = inst_29683);

(statearr_29790[(10)] = inst_29684);

(statearr_29790[(11)] = inst_29685);

(statearr_29790[(12)] = inst_29686);

return statearr_29790;
})();
var statearr_29791_30734 = state_29747__$1;
(statearr_29791_30734[(2)] = null);

(statearr_29791_30734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (17))){
var inst_29697 = (state_29747[(7)]);
var inst_29701 = cljs.core.chunk_first(inst_29697);
var inst_29702 = cljs.core.chunk_rest(inst_29697);
var inst_29703 = cljs.core.count(inst_29701);
var inst_29683 = inst_29702;
var inst_29684 = inst_29701;
var inst_29685 = inst_29703;
var inst_29686 = (0);
var state_29747__$1 = (function (){var statearr_29792 = state_29747;
(statearr_29792[(9)] = inst_29683);

(statearr_29792[(10)] = inst_29684);

(statearr_29792[(11)] = inst_29685);

(statearr_29792[(12)] = inst_29686);

return statearr_29792;
})();
var statearr_29793_30738 = state_29747__$1;
(statearr_29793_30738[(2)] = null);

(statearr_29793_30738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (3))){
var inst_29729 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29747__$1,inst_29729);
} else {
if((state_val_29748 === (12))){
var inst_29717 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
var statearr_29794_30739 = state_29747__$1;
(statearr_29794_30739[(2)] = inst_29717);

(statearr_29794_30739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (2))){
var state_29747__$1 = state_29747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29747__$1,(4),in$);
} else {
if((state_val_29748 === (23))){
var inst_29725 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
var statearr_29795_30740 = state_29747__$1;
(statearr_29795_30740[(2)] = inst_29725);

(statearr_29795_30740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (19))){
var inst_29712 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
var statearr_29796_30741 = state_29747__$1;
(statearr_29796_30741[(2)] = inst_29712);

(statearr_29796_30741[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (11))){
var inst_29683 = (state_29747[(9)]);
var inst_29697 = (state_29747[(7)]);
var inst_29697__$1 = cljs.core.seq(inst_29683);
var state_29747__$1 = (function (){var statearr_29797 = state_29747;
(statearr_29797[(7)] = inst_29697__$1);

return statearr_29797;
})();
if(inst_29697__$1){
var statearr_29798_30742 = state_29747__$1;
(statearr_29798_30742[(1)] = (14));

} else {
var statearr_29799_30743 = state_29747__$1;
(statearr_29799_30743[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (9))){
var inst_29719 = (state_29747[(2)]);
var inst_29720 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29747__$1 = (function (){var statearr_29800 = state_29747;
(statearr_29800[(15)] = inst_29719);

return statearr_29800;
})();
if(cljs.core.truth_(inst_29720)){
var statearr_29801_30744 = state_29747__$1;
(statearr_29801_30744[(1)] = (21));

} else {
var statearr_29802_30745 = state_29747__$1;
(statearr_29802_30745[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (5))){
var inst_29675 = cljs.core.async.close_BANG_(out);
var state_29747__$1 = state_29747;
var statearr_29803_30746 = state_29747__$1;
(statearr_29803_30746[(2)] = inst_29675);

(statearr_29803_30746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (14))){
var inst_29697 = (state_29747[(7)]);
var inst_29699 = cljs.core.chunked_seq_QMARK_(inst_29697);
var state_29747__$1 = state_29747;
if(inst_29699){
var statearr_29804_30747 = state_29747__$1;
(statearr_29804_30747[(1)] = (17));

} else {
var statearr_29805_30748 = state_29747__$1;
(statearr_29805_30748[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (16))){
var inst_29715 = (state_29747[(2)]);
var state_29747__$1 = state_29747;
var statearr_29806_30749 = state_29747__$1;
(statearr_29806_30749[(2)] = inst_29715);

(statearr_29806_30749[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29748 === (10))){
var inst_29684 = (state_29747[(10)]);
var inst_29686 = (state_29747[(12)]);
var inst_29691 = cljs.core._nth(inst_29684,inst_29686);
var state_29747__$1 = state_29747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29747__$1,(13),out,inst_29691);
} else {
if((state_val_29748 === (18))){
var inst_29697 = (state_29747[(7)]);
var inst_29706 = cljs.core.first(inst_29697);
var state_29747__$1 = state_29747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29747__$1,(20),out,inst_29706);
} else {
if((state_val_29748 === (8))){
var inst_29685 = (state_29747[(11)]);
var inst_29686 = (state_29747[(12)]);
var inst_29688 = (inst_29686 < inst_29685);
var inst_29689 = inst_29688;
var state_29747__$1 = state_29747;
if(cljs.core.truth_(inst_29689)){
var statearr_29807_30752 = state_29747__$1;
(statearr_29807_30752[(1)] = (10));

} else {
var statearr_29808_30753 = state_29747__$1;
(statearr_29808_30753[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____0 = (function (){
var statearr_29809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29809[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__);

(statearr_29809[(1)] = (1));

return statearr_29809;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____1 = (function (state_29747){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29747);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29810){var ex__27626__auto__ = e29810;
var statearr_29811_30758 = state_29747;
(statearr_29811_30758[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29747[(4)]))){
var statearr_29812_30759 = state_29747;
(statearr_29812_30759[(1)] = cljs.core.first((state_29747[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30760 = state_29747;
state_29747 = G__30760;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__ = function(state_29747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____1.call(this,state_29747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27623__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29813 = f__27764__auto__();
(statearr_29813[(6)] = c__27763__auto__);

return statearr_29813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));

return c__27763__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29815 = arguments.length;
switch (G__29815) {
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
var G__29817 = arguments.length;
switch (G__29817) {
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
var G__29819 = arguments.length;
switch (G__29819) {
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
var c__27763__auto___30766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29843){
var state_val_29844 = (state_29843[(1)]);
if((state_val_29844 === (7))){
var inst_29838 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29845_30767 = state_29843__$1;
(statearr_29845_30767[(2)] = inst_29838);

(statearr_29845_30767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (1))){
var inst_29820 = null;
var state_29843__$1 = (function (){var statearr_29846 = state_29843;
(statearr_29846[(7)] = inst_29820);

return statearr_29846;
})();
var statearr_29847_30768 = state_29843__$1;
(statearr_29847_30768[(2)] = null);

(statearr_29847_30768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (4))){
var inst_29823 = (state_29843[(8)]);
var inst_29823__$1 = (state_29843[(2)]);
var inst_29824 = (inst_29823__$1 == null);
var inst_29825 = cljs.core.not(inst_29824);
var state_29843__$1 = (function (){var statearr_29848 = state_29843;
(statearr_29848[(8)] = inst_29823__$1);

return statearr_29848;
})();
if(inst_29825){
var statearr_29849_30769 = state_29843__$1;
(statearr_29849_30769[(1)] = (5));

} else {
var statearr_29850_30770 = state_29843__$1;
(statearr_29850_30770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (6))){
var state_29843__$1 = state_29843;
var statearr_29851_30771 = state_29843__$1;
(statearr_29851_30771[(2)] = null);

(statearr_29851_30771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (3))){
var inst_29840 = (state_29843[(2)]);
var inst_29841 = cljs.core.async.close_BANG_(out);
var state_29843__$1 = (function (){var statearr_29852 = state_29843;
(statearr_29852[(9)] = inst_29840);

return statearr_29852;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29843__$1,inst_29841);
} else {
if((state_val_29844 === (2))){
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29843__$1,(4),ch);
} else {
if((state_val_29844 === (11))){
var inst_29823 = (state_29843[(8)]);
var inst_29832 = (state_29843[(2)]);
var inst_29820 = inst_29823;
var state_29843__$1 = (function (){var statearr_29853 = state_29843;
(statearr_29853[(10)] = inst_29832);

(statearr_29853[(7)] = inst_29820);

return statearr_29853;
})();
var statearr_29854_30776 = state_29843__$1;
(statearr_29854_30776[(2)] = null);

(statearr_29854_30776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (9))){
var inst_29823 = (state_29843[(8)]);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29843__$1,(11),out,inst_29823);
} else {
if((state_val_29844 === (5))){
var inst_29820 = (state_29843[(7)]);
var inst_29823 = (state_29843[(8)]);
var inst_29827 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29823,inst_29820);
var state_29843__$1 = state_29843;
if(inst_29827){
var statearr_29856_30780 = state_29843__$1;
(statearr_29856_30780[(1)] = (8));

} else {
var statearr_29857_30781 = state_29843__$1;
(statearr_29857_30781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (10))){
var inst_29835 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29858_30782 = state_29843__$1;
(statearr_29858_30782[(2)] = inst_29835);

(statearr_29858_30782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (8))){
var inst_29820 = (state_29843[(7)]);
var tmp29855 = inst_29820;
var inst_29820__$1 = tmp29855;
var state_29843__$1 = (function (){var statearr_29859 = state_29843;
(statearr_29859[(7)] = inst_29820__$1);

return statearr_29859;
})();
var statearr_29860_30786 = state_29843__$1;
(statearr_29860_30786[(2)] = null);

(statearr_29860_30786[(1)] = (2));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29861[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29861[(1)] = (1));

return statearr_29861;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29843){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29843);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29862){var ex__27626__auto__ = e29862;
var statearr_29863_30791 = state_29843;
(statearr_29863_30791[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29843[(4)]))){
var statearr_29864_30792 = state_29843;
(statearr_29864_30792[(1)] = cljs.core.first((state_29843[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30793 = state_29843;
state_29843 = G__30793;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29865 = f__27764__auto__();
(statearr_29865[(6)] = c__27763__auto___30766);

return statearr_29865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29872 = arguments.length;
switch (G__29872) {
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
var c__27763__auto___30802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_29915){
var state_val_29916 = (state_29915[(1)]);
if((state_val_29916 === (7))){
var inst_29911 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29917_30803 = state_29915__$1;
(statearr_29917_30803[(2)] = inst_29911);

(statearr_29917_30803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (1))){
var inst_29878 = (new Array(n));
var inst_29879 = inst_29878;
var inst_29880 = (0);
var state_29915__$1 = (function (){var statearr_29918 = state_29915;
(statearr_29918[(7)] = inst_29880);

(statearr_29918[(8)] = inst_29879);

return statearr_29918;
})();
var statearr_29919_30804 = state_29915__$1;
(statearr_29919_30804[(2)] = null);

(statearr_29919_30804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (4))){
var inst_29883 = (state_29915[(9)]);
var inst_29883__$1 = (state_29915[(2)]);
var inst_29884 = (inst_29883__$1 == null);
var inst_29885 = cljs.core.not(inst_29884);
var state_29915__$1 = (function (){var statearr_29920 = state_29915;
(statearr_29920[(9)] = inst_29883__$1);

return statearr_29920;
})();
if(inst_29885){
var statearr_29921_30805 = state_29915__$1;
(statearr_29921_30805[(1)] = (5));

} else {
var statearr_29922_30806 = state_29915__$1;
(statearr_29922_30806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (15))){
var inst_29905 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29923_30807 = state_29915__$1;
(statearr_29923_30807[(2)] = inst_29905);

(statearr_29923_30807[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (13))){
var state_29915__$1 = state_29915;
var statearr_29924_30808 = state_29915__$1;
(statearr_29924_30808[(2)] = null);

(statearr_29924_30808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (6))){
var inst_29880 = (state_29915[(7)]);
var inst_29901 = (inst_29880 > (0));
var state_29915__$1 = state_29915;
if(cljs.core.truth_(inst_29901)){
var statearr_29925_30809 = state_29915__$1;
(statearr_29925_30809[(1)] = (12));

} else {
var statearr_29926_30810 = state_29915__$1;
(statearr_29926_30810[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (3))){
var inst_29913 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29915__$1,inst_29913);
} else {
if((state_val_29916 === (12))){
var inst_29879 = (state_29915[(8)]);
var inst_29903 = cljs.core.vec(inst_29879);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29915__$1,(15),out,inst_29903);
} else {
if((state_val_29916 === (2))){
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29915__$1,(4),ch);
} else {
if((state_val_29916 === (11))){
var inst_29895 = (state_29915[(2)]);
var inst_29896 = (new Array(n));
var inst_29879 = inst_29896;
var inst_29880 = (0);
var state_29915__$1 = (function (){var statearr_29927 = state_29915;
(statearr_29927[(7)] = inst_29880);

(statearr_29927[(8)] = inst_29879);

(statearr_29927[(10)] = inst_29895);

return statearr_29927;
})();
var statearr_29929_30814 = state_29915__$1;
(statearr_29929_30814[(2)] = null);

(statearr_29929_30814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (9))){
var inst_29879 = (state_29915[(8)]);
var inst_29893 = cljs.core.vec(inst_29879);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29915__$1,(11),out,inst_29893);
} else {
if((state_val_29916 === (5))){
var inst_29888 = (state_29915[(11)]);
var inst_29880 = (state_29915[(7)]);
var inst_29879 = (state_29915[(8)]);
var inst_29883 = (state_29915[(9)]);
var inst_29887 = (inst_29879[inst_29880] = inst_29883);
var inst_29888__$1 = (inst_29880 + (1));
var inst_29889 = (inst_29888__$1 < n);
var state_29915__$1 = (function (){var statearr_29933 = state_29915;
(statearr_29933[(11)] = inst_29888__$1);

(statearr_29933[(12)] = inst_29887);

return statearr_29933;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29934_30815 = state_29915__$1;
(statearr_29934_30815[(1)] = (8));

} else {
var statearr_29935_30816 = state_29915__$1;
(statearr_29935_30816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (14))){
var inst_29908 = (state_29915[(2)]);
var inst_29909 = cljs.core.async.close_BANG_(out);
var state_29915__$1 = (function (){var statearr_29937 = state_29915;
(statearr_29937[(13)] = inst_29908);

return statearr_29937;
})();
var statearr_29938_30817 = state_29915__$1;
(statearr_29938_30817[(2)] = inst_29909);

(statearr_29938_30817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (10))){
var inst_29899 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29939_30818 = state_29915__$1;
(statearr_29939_30818[(2)] = inst_29899);

(statearr_29939_30818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (8))){
var inst_29888 = (state_29915[(11)]);
var inst_29879 = (state_29915[(8)]);
var tmp29936 = inst_29879;
var inst_29879__$1 = tmp29936;
var inst_29880 = inst_29888;
var state_29915__$1 = (function (){var statearr_29940 = state_29915;
(statearr_29940[(7)] = inst_29880);

(statearr_29940[(8)] = inst_29879__$1);

return statearr_29940;
})();
var statearr_29941_30819 = state_29915__$1;
(statearr_29941_30819[(2)] = null);

(statearr_29941_30819[(1)] = (2));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_29915){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_29915);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e29944){var ex__27626__auto__ = e29944;
var statearr_29945_30823 = state_29915;
(statearr_29945_30823[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_29915[(4)]))){
var statearr_29946_30824 = state_29915;
(statearr_29946_30824[(1)] = cljs.core.first((state_29915[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30825 = state_29915;
state_29915 = G__30825;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_29948 = f__27764__auto__();
(statearr_29948[(6)] = c__27763__auto___30802);

return statearr_29948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29952 = arguments.length;
switch (G__29952) {
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
var c__27763__auto___30827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27764__auto__ = (function (){var switch__27622__auto__ = (function (state_30003){
var state_val_30004 = (state_30003[(1)]);
if((state_val_30004 === (7))){
var inst_29998 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
var statearr_30006_30829 = state_30003__$1;
(statearr_30006_30829[(2)] = inst_29998);

(statearr_30006_30829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (1))){
var inst_29956 = [];
var inst_29957 = inst_29956;
var inst_29958 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30003__$1 = (function (){var statearr_30007 = state_30003;
(statearr_30007[(7)] = inst_29958);

(statearr_30007[(8)] = inst_29957);

return statearr_30007;
})();
var statearr_30009_30830 = state_30003__$1;
(statearr_30009_30830[(2)] = null);

(statearr_30009_30830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (4))){
var inst_29962 = (state_30003[(9)]);
var inst_29962__$1 = (state_30003[(2)]);
var inst_29963 = (inst_29962__$1 == null);
var inst_29964 = cljs.core.not(inst_29963);
var state_30003__$1 = (function (){var statearr_30010 = state_30003;
(statearr_30010[(9)] = inst_29962__$1);

return statearr_30010;
})();
if(inst_29964){
var statearr_30011_30835 = state_30003__$1;
(statearr_30011_30835[(1)] = (5));

} else {
var statearr_30012_30836 = state_30003__$1;
(statearr_30012_30836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (15))){
var inst_29957 = (state_30003[(8)]);
var inst_29990 = cljs.core.vec(inst_29957);
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30003__$1,(18),out,inst_29990);
} else {
if((state_val_30004 === (13))){
var inst_29985 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
var statearr_30013_30837 = state_30003__$1;
(statearr_30013_30837[(2)] = inst_29985);

(statearr_30013_30837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (6))){
var inst_29957 = (state_30003[(8)]);
var inst_29987 = inst_29957.length;
var inst_29988 = (inst_29987 > (0));
var state_30003__$1 = state_30003;
if(cljs.core.truth_(inst_29988)){
var statearr_30014_30838 = state_30003__$1;
(statearr_30014_30838[(1)] = (15));

} else {
var statearr_30015_30839 = state_30003__$1;
(statearr_30015_30839[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (17))){
var inst_29995 = (state_30003[(2)]);
var inst_29996 = cljs.core.async.close_BANG_(out);
var state_30003__$1 = (function (){var statearr_30016 = state_30003;
(statearr_30016[(10)] = inst_29995);

return statearr_30016;
})();
var statearr_30018_30841 = state_30003__$1;
(statearr_30018_30841[(2)] = inst_29996);

(statearr_30018_30841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (3))){
var inst_30000 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30003__$1,inst_30000);
} else {
if((state_val_30004 === (12))){
var inst_29957 = (state_30003[(8)]);
var inst_29978 = cljs.core.vec(inst_29957);
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30003__$1,(14),out,inst_29978);
} else {
if((state_val_30004 === (2))){
var state_30003__$1 = state_30003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30003__$1,(4),ch);
} else {
if((state_val_30004 === (11))){
var inst_29966 = (state_30003[(11)]);
var inst_29962 = (state_30003[(9)]);
var inst_29957 = (state_30003[(8)]);
var inst_29974 = inst_29957.push(inst_29962);
var tmp30019 = inst_29957;
var inst_29957__$1 = tmp30019;
var inst_29958 = inst_29966;
var state_30003__$1 = (function (){var statearr_30020 = state_30003;
(statearr_30020[(12)] = inst_29974);

(statearr_30020[(7)] = inst_29958);

(statearr_30020[(8)] = inst_29957__$1);

return statearr_30020;
})();
var statearr_30021_30842 = state_30003__$1;
(statearr_30021_30842[(2)] = null);

(statearr_30021_30842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (9))){
var inst_29958 = (state_30003[(7)]);
var inst_29970 = cljs.core.keyword_identical_QMARK_(inst_29958,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_30003__$1 = state_30003;
var statearr_30022_30844 = state_30003__$1;
(statearr_30022_30844[(2)] = inst_29970);

(statearr_30022_30844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (5))){
var inst_29966 = (state_30003[(11)]);
var inst_29962 = (state_30003[(9)]);
var inst_29967 = (state_30003[(13)]);
var inst_29958 = (state_30003[(7)]);
var inst_29966__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29962) : f.call(null,inst_29962));
var inst_29967__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29966__$1,inst_29958);
var state_30003__$1 = (function (){var statearr_30023 = state_30003;
(statearr_30023[(11)] = inst_29966__$1);

(statearr_30023[(13)] = inst_29967__$1);

return statearr_30023;
})();
if(inst_29967__$1){
var statearr_30024_30850 = state_30003__$1;
(statearr_30024_30850[(1)] = (8));

} else {
var statearr_30025_30851 = state_30003__$1;
(statearr_30025_30851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (14))){
var inst_29966 = (state_30003[(11)]);
var inst_29962 = (state_30003[(9)]);
var inst_29980 = (state_30003[(2)]);
var inst_29981 = [];
var inst_29982 = inst_29981.push(inst_29962);
var inst_29957 = inst_29981;
var inst_29958 = inst_29966;
var state_30003__$1 = (function (){var statearr_30026 = state_30003;
(statearr_30026[(14)] = inst_29982);

(statearr_30026[(15)] = inst_29980);

(statearr_30026[(7)] = inst_29958);

(statearr_30026[(8)] = inst_29957);

return statearr_30026;
})();
var statearr_30027_30856 = state_30003__$1;
(statearr_30027_30856[(2)] = null);

(statearr_30027_30856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (16))){
var state_30003__$1 = state_30003;
var statearr_30028_30857 = state_30003__$1;
(statearr_30028_30857[(2)] = null);

(statearr_30028_30857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (10))){
var inst_29972 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
if(cljs.core.truth_(inst_29972)){
var statearr_30029_30858 = state_30003__$1;
(statearr_30029_30858[(1)] = (11));

} else {
var statearr_30030_30859 = state_30003__$1;
(statearr_30030_30859[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (18))){
var inst_29992 = (state_30003[(2)]);
var state_30003__$1 = state_30003;
var statearr_30031_30860 = state_30003__$1;
(statearr_30031_30860[(2)] = inst_29992);

(statearr_30031_30860[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30004 === (8))){
var inst_29967 = (state_30003[(13)]);
var state_30003__$1 = state_30003;
var statearr_30032_30861 = state_30003__$1;
(statearr_30032_30861[(2)] = inst_29967);

(statearr_30032_30861[(1)] = (10));


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
var cljs$core$async$state_machine__27623__auto__ = null;
var cljs$core$async$state_machine__27623__auto____0 = (function (){
var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30033[(0)] = cljs$core$async$state_machine__27623__auto__);

(statearr_30033[(1)] = (1));

return statearr_30033;
});
var cljs$core$async$state_machine__27623__auto____1 = (function (state_30003){
while(true){
var ret_value__27624__auto__ = (function (){try{while(true){
var result__27625__auto__ = switch__27622__auto__(state_30003);
if(cljs.core.keyword_identical_QMARK_(result__27625__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27625__auto__;
}
break;
}
}catch (e30034){var ex__27626__auto__ = e30034;
var statearr_30035_30863 = state_30003;
(statearr_30035_30863[(2)] = ex__27626__auto__);


if(cljs.core.seq((state_30003[(4)]))){
var statearr_30036_30864 = state_30003;
(statearr_30036_30864[(1)] = cljs.core.first((state_30003[(4)])));

} else {
throw ex__27626__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27624__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30866 = state_30003;
state_30003 = G__30866;
continue;
} else {
return ret_value__27624__auto__;
}
break;
}
});
cljs$core$async$state_machine__27623__auto__ = function(state_30003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27623__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27623__auto____1.call(this,state_30003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27623__auto____0;
cljs$core$async$state_machine__27623__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27623__auto____1;
return cljs$core$async$state_machine__27623__auto__;
})()
})();
var state__27765__auto__ = (function (){var statearr_30037 = f__27764__auto__();
(statearr_30037[(6)] = c__27763__auto___30827);

return statearr_30037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27765__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
