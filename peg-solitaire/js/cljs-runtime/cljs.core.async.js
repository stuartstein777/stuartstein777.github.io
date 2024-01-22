goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42932 = arguments.length;
switch (G__42932) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42934 = (function (f,blockable,meta42935){
this.f = f;
this.blockable = blockable;
this.meta42935 = meta42935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42936,meta42935__$1){
var self__ = this;
var _42936__$1 = this;
return (new cljs.core.async.t_cljs$core$async42934(self__.f,self__.blockable,meta42935__$1));
}));

(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42936){
var self__ = this;
var _42936__$1 = this;
return self__.meta42935;
}));

(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42935","meta42935",1008613526,null)], null);
}));

(cljs.core.async.t_cljs$core$async42934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42934");

(cljs.core.async.t_cljs$core$async42934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42934.
 */
cljs.core.async.__GT_t_cljs$core$async42934 = (function cljs$core$async$__GT_t_cljs$core$async42934(f__$1,blockable__$1,meta42935){
return (new cljs.core.async.t_cljs$core$async42934(f__$1,blockable__$1,meta42935));
});

}

return (new cljs.core.async.t_cljs$core$async42934(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42948 = arguments.length;
switch (G__42948) {
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
var G__42950 = arguments.length;
switch (G__42950) {
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
var G__42960 = arguments.length;
switch (G__42960) {
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
var val_44619 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44619) : fn1.call(null,val_44619));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44619) : fn1.call(null,val_44619));
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
var G__42971 = arguments.length;
switch (G__42971) {
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
var n__4613__auto___44628 = n;
var x_44629 = (0);
while(true){
if((x_44629 < n__4613__auto___44628)){
(a[x_44629] = x_44629);

var G__44631 = (x_44629 + (1));
x_44629 = G__44631;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42982 = (function (flag,meta42983){
this.flag = flag;
this.meta42983 = meta42983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42984,meta42983__$1){
var self__ = this;
var _42984__$1 = this;
return (new cljs.core.async.t_cljs$core$async42982(self__.flag,meta42983__$1));
}));

(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42984){
var self__ = this;
var _42984__$1 = this;
return self__.meta42983;
}));

(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42982.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42982.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42983","meta42983",455055022,null)], null);
}));

(cljs.core.async.t_cljs$core$async42982.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42982");

(cljs.core.async.t_cljs$core$async42982.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42982");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42982.
 */
cljs.core.async.__GT_t_cljs$core$async42982 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42982(flag__$1,meta42983){
return (new cljs.core.async.t_cljs$core$async42982(flag__$1,meta42983));
});

}

return (new cljs.core.async.t_cljs$core$async42982(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42995 = (function (flag,cb,meta42996){
this.flag = flag;
this.cb = cb;
this.meta42996 = meta42996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42997,meta42996__$1){
var self__ = this;
var _42997__$1 = this;
return (new cljs.core.async.t_cljs$core$async42995(self__.flag,self__.cb,meta42996__$1));
}));

(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42997){
var self__ = this;
var _42997__$1 = this;
return self__.meta42996;
}));

(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42995.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42996","meta42996",608603985,null)], null);
}));

(cljs.core.async.t_cljs$core$async42995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42995");

(cljs.core.async.t_cljs$core$async42995.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42995.
 */
cljs.core.async.__GT_t_cljs$core$async42995 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42995(flag__$1,cb__$1,meta42996){
return (new cljs.core.async.t_cljs$core$async42995(flag__$1,cb__$1,meta42996));
});

}

return (new cljs.core.async.t_cljs$core$async42995(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43030_SHARP_){
var G__43032 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43030_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43032) : fret.call(null,G__43032));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43031_SHARP_){
var G__43033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43031_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43033) : fret.call(null,G__43033));
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
var G__44641 = (i + (1));
i = G__44641;
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
var len__4736__auto___44642 = arguments.length;
var i__4737__auto___44643 = (0);
while(true){
if((i__4737__auto___44643 < len__4736__auto___44642)){
args__4742__auto__.push((arguments[i__4737__auto___44643]));

var G__44644 = (i__4737__auto___44643 + (1));
i__4737__auto___44643 = G__44644;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43062){
var map__43063 = p__43062;
var map__43063__$1 = (((((!((map__43063 == null))))?(((((map__43063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43063):map__43063);
var opts = map__43063__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43056){
var G__43057 = cljs.core.first(seq43056);
var seq43056__$1 = cljs.core.next(seq43056);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43057,seq43056__$1);
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
var G__43099 = arguments.length;
switch (G__43099) {
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
var c__42849__auto___44646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43136){
var state_val_43137 = (state_43136[(1)]);
if((state_val_43137 === (7))){
var inst_43132 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43138_44647 = state_43136__$1;
(statearr_43138_44647[(2)] = inst_43132);

(statearr_43138_44647[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (1))){
var state_43136__$1 = state_43136;
var statearr_43139_44648 = state_43136__$1;
(statearr_43139_44648[(2)] = null);

(statearr_43139_44648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (4))){
var inst_43114 = (state_43136[(7)]);
var inst_43114__$1 = (state_43136[(2)]);
var inst_43115 = (inst_43114__$1 == null);
var state_43136__$1 = (function (){var statearr_43140 = state_43136;
(statearr_43140[(7)] = inst_43114__$1);

return statearr_43140;
})();
if(cljs.core.truth_(inst_43115)){
var statearr_43141_44649 = state_43136__$1;
(statearr_43141_44649[(1)] = (5));

} else {
var statearr_43142_44650 = state_43136__$1;
(statearr_43142_44650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (13))){
var state_43136__$1 = state_43136;
var statearr_43143_44651 = state_43136__$1;
(statearr_43143_44651[(2)] = null);

(statearr_43143_44651[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (6))){
var inst_43114 = (state_43136[(7)]);
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43136__$1,(11),to,inst_43114);
} else {
if((state_val_43137 === (3))){
var inst_43134 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43136__$1,inst_43134);
} else {
if((state_val_43137 === (12))){
var state_43136__$1 = state_43136;
var statearr_43144_44654 = state_43136__$1;
(statearr_43144_44654[(2)] = null);

(statearr_43144_44654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (2))){
var state_43136__$1 = state_43136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43136__$1,(4),from);
} else {
if((state_val_43137 === (11))){
var inst_43125 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
if(cljs.core.truth_(inst_43125)){
var statearr_43145_44655 = state_43136__$1;
(statearr_43145_44655[(1)] = (12));

} else {
var statearr_43148_44656 = state_43136__$1;
(statearr_43148_44656[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (9))){
var state_43136__$1 = state_43136;
var statearr_43152_44657 = state_43136__$1;
(statearr_43152_44657[(2)] = null);

(statearr_43152_44657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (5))){
var state_43136__$1 = state_43136;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43153_44658 = state_43136__$1;
(statearr_43153_44658[(1)] = (8));

} else {
var statearr_43158_44659 = state_43136__$1;
(statearr_43158_44659[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (14))){
var inst_43130 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43159_44660 = state_43136__$1;
(statearr_43159_44660[(2)] = inst_43130);

(statearr_43159_44660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (10))){
var inst_43122 = (state_43136[(2)]);
var state_43136__$1 = state_43136;
var statearr_43161_44661 = state_43136__$1;
(statearr_43161_44661[(2)] = inst_43122);

(statearr_43161_44661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43137 === (8))){
var inst_43118 = cljs.core.async.close_BANG_(to);
var state_43136__$1 = state_43136;
var statearr_43163_44662 = state_43136__$1;
(statearr_43163_44662[(2)] = inst_43118);

(statearr_43163_44662[(1)] = (10));


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
var statearr_43164 = [null,null,null,null,null,null,null,null];
(statearr_43164[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43164[(1)] = (1));

return statearr_43164;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43136){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43136);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43168){var ex__42714__auto__ = e43168;
var statearr_43169_44663 = state_43136;
(statearr_43169_44663[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43136[(4)]))){
var statearr_43170_44664 = state_43136;
(statearr_43170_44664[(1)] = cljs.core.first((state_43136[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44665 = state_43136;
state_43136 = G__44665;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43175 = f__42850__auto__();
(statearr_43175[(6)] = c__42849__auto___44646);

return statearr_43175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var process = (function (p__43192){
var vec__43193 = p__43192;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43193,(1),null);
var job = vec__43193;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42849__auto___44666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43200){
var state_val_43201 = (state_43200[(1)]);
if((state_val_43201 === (1))){
var state_43200__$1 = state_43200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43200__$1,(2),res,v);
} else {
if((state_val_43201 === (2))){
var inst_43197 = (state_43200[(2)]);
var inst_43198 = cljs.core.async.close_BANG_(res);
var state_43200__$1 = (function (){var statearr_43203 = state_43200;
(statearr_43203[(7)] = inst_43197);

return statearr_43203;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43200__$1,inst_43198);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43204 = [null,null,null,null,null,null,null,null];
(statearr_43204[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43204[(1)] = (1));

return statearr_43204;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43200){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43200);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43209){var ex__42714__auto__ = e43209;
var statearr_43213_44667 = state_43200;
(statearr_43213_44667[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43200[(4)]))){
var statearr_43218_44668 = state_43200;
(statearr_43218_44668[(1)] = cljs.core.first((state_43200[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44670 = state_43200;
state_43200 = G__44670;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43200){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43233 = f__42850__auto__();
(statearr_43233[(6)] = c__42849__auto___44666);

return statearr_43233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43234){
var vec__43235 = p__43234;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43235,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43235,(1),null);
var job = vec__43235;
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
var n__4613__auto___44671 = n;
var __44672 = (0);
while(true){
if((__44672 < n__4613__auto___44671)){
var G__43238_44673 = type;
var G__43238_44674__$1 = (((G__43238_44673 instanceof cljs.core.Keyword))?G__43238_44673.fqn:null);
switch (G__43238_44674__$1) {
case "compute":
var c__42849__auto___44677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44672,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = ((function (__44672,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function (state_43251){
var state_val_43252 = (state_43251[(1)]);
if((state_val_43252 === (1))){
var state_43251__$1 = state_43251;
var statearr_43253_44679 = state_43251__$1;
(statearr_43253_44679[(2)] = null);

(statearr_43253_44679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43252 === (2))){
var state_43251__$1 = state_43251;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43251__$1,(4),jobs);
} else {
if((state_val_43252 === (3))){
var inst_43249 = (state_43251[(2)]);
var state_43251__$1 = state_43251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43251__$1,inst_43249);
} else {
if((state_val_43252 === (4))){
var inst_43241 = (state_43251[(2)]);
var inst_43242 = process(inst_43241);
var state_43251__$1 = state_43251;
if(cljs.core.truth_(inst_43242)){
var statearr_43254_44680 = state_43251__$1;
(statearr_43254_44680[(1)] = (5));

} else {
var statearr_43255_44681 = state_43251__$1;
(statearr_43255_44681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43252 === (5))){
var state_43251__$1 = state_43251;
var statearr_43256_44682 = state_43251__$1;
(statearr_43256_44682[(2)] = null);

(statearr_43256_44682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43252 === (6))){
var state_43251__$1 = state_43251;
var statearr_43257_44683 = state_43251__$1;
(statearr_43257_44683[(2)] = null);

(statearr_43257_44683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43252 === (7))){
var inst_43247 = (state_43251[(2)]);
var state_43251__$1 = state_43251;
var statearr_43258_44685 = state_43251__$1;
(statearr_43258_44685[(2)] = inst_43247);

(statearr_43258_44685[(1)] = (3));


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
});})(__44672,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
;
return ((function (__44672,switch__42710__auto__,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43259 = [null,null,null,null,null,null,null];
(statearr_43259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43259[(1)] = (1));

return statearr_43259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43251){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43251);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43260){var ex__42714__auto__ = e43260;
var statearr_43261_44687 = state_43251;
(statearr_43261_44687[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43251[(4)]))){
var statearr_43262_44688 = state_43251;
(statearr_43262_44688[(1)] = cljs.core.first((state_43251[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44689 = state_43251;
state_43251 = G__44689;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__44672,switch__42710__auto__,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
})();
var state__42851__auto__ = (function (){var statearr_43263 = f__42850__auto__();
(statearr_43263[(6)] = c__42849__auto___44677);

return statearr_43263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
});})(__44672,c__42849__auto___44677,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
);


break;
case "async":
var c__42849__auto___44690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44672,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = ((function (__44672,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function (state_43276){
var state_val_43277 = (state_43276[(1)]);
if((state_val_43277 === (1))){
var state_43276__$1 = state_43276;
var statearr_43278_44692 = state_43276__$1;
(statearr_43278_44692[(2)] = null);

(statearr_43278_44692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (2))){
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43276__$1,(4),jobs);
} else {
if((state_val_43277 === (3))){
var inst_43274 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43276__$1,inst_43274);
} else {
if((state_val_43277 === (4))){
var inst_43266 = (state_43276[(2)]);
var inst_43267 = async(inst_43266);
var state_43276__$1 = state_43276;
if(cljs.core.truth_(inst_43267)){
var statearr_43279_44694 = state_43276__$1;
(statearr_43279_44694[(1)] = (5));

} else {
var statearr_43280_44695 = state_43276__$1;
(statearr_43280_44695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (5))){
var state_43276__$1 = state_43276;
var statearr_43281_44696 = state_43276__$1;
(statearr_43281_44696[(2)] = null);

(statearr_43281_44696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (6))){
var state_43276__$1 = state_43276;
var statearr_43282_44697 = state_43276__$1;
(statearr_43282_44697[(2)] = null);

(statearr_43282_44697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43277 === (7))){
var inst_43272 = (state_43276[(2)]);
var state_43276__$1 = state_43276;
var statearr_43283_44698 = state_43276__$1;
(statearr_43283_44698[(2)] = inst_43272);

(statearr_43283_44698[(1)] = (3));


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
});})(__44672,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
;
return ((function (__44672,switch__42710__auto__,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0 = (function (){
var statearr_43284 = [null,null,null,null,null,null,null];
(statearr_43284[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43284[(1)] = (1));

return statearr_43284;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43276){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43276);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43285){var ex__42714__auto__ = e43285;
var statearr_43286_44701 = state_43276;
(statearr_43286_44701[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43276[(4)]))){
var statearr_43287_44702 = state_43276;
(statearr_43287_44702[(1)] = cljs.core.first((state_43276[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44703 = state_43276;
state_43276 = G__44703;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
;})(__44672,switch__42710__auto__,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
})();
var state__42851__auto__ = (function (){var statearr_43288 = f__42850__auto__();
(statearr_43288[(6)] = c__42849__auto___44690);

return statearr_43288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
});})(__44672,c__42849__auto___44690,G__43238_44673,G__43238_44674__$1,n__4613__auto___44671,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43238_44674__$1)].join('')));

}

var G__44704 = (__44672 + (1));
__44672 = G__44704;
continue;
} else {
}
break;
}

var c__42849__auto___44705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43310){
var state_val_43311 = (state_43310[(1)]);
if((state_val_43311 === (7))){
var inst_43306 = (state_43310[(2)]);
var state_43310__$1 = state_43310;
var statearr_43312_44706 = state_43310__$1;
(statearr_43312_44706[(2)] = inst_43306);

(statearr_43312_44706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43311 === (1))){
var state_43310__$1 = state_43310;
var statearr_43313_44707 = state_43310__$1;
(statearr_43313_44707[(2)] = null);

(statearr_43313_44707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43311 === (4))){
var inst_43291 = (state_43310[(7)]);
var inst_43291__$1 = (state_43310[(2)]);
var inst_43292 = (inst_43291__$1 == null);
var state_43310__$1 = (function (){var statearr_43314 = state_43310;
(statearr_43314[(7)] = inst_43291__$1);

return statearr_43314;
})();
if(cljs.core.truth_(inst_43292)){
var statearr_43315_44708 = state_43310__$1;
(statearr_43315_44708[(1)] = (5));

} else {
var statearr_43316_44709 = state_43310__$1;
(statearr_43316_44709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43311 === (6))){
var inst_43296 = (state_43310[(8)]);
var inst_43291 = (state_43310[(7)]);
var inst_43296__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43298 = [inst_43291,inst_43296__$1];
var inst_43299 = (new cljs.core.PersistentVector(null,2,(5),inst_43297,inst_43298,null));
var state_43310__$1 = (function (){var statearr_43317 = state_43310;
(statearr_43317[(8)] = inst_43296__$1);

return statearr_43317;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43310__$1,(8),jobs,inst_43299);
} else {
if((state_val_43311 === (3))){
var inst_43308 = (state_43310[(2)]);
var state_43310__$1 = state_43310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43310__$1,inst_43308);
} else {
if((state_val_43311 === (2))){
var state_43310__$1 = state_43310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43310__$1,(4),from);
} else {
if((state_val_43311 === (9))){
var inst_43303 = (state_43310[(2)]);
var state_43310__$1 = (function (){var statearr_43318 = state_43310;
(statearr_43318[(9)] = inst_43303);

return statearr_43318;
})();
var statearr_43319_44712 = state_43310__$1;
(statearr_43319_44712[(2)] = null);

(statearr_43319_44712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43311 === (5))){
var inst_43294 = cljs.core.async.close_BANG_(jobs);
var state_43310__$1 = state_43310;
var statearr_43320_44713 = state_43310__$1;
(statearr_43320_44713[(2)] = inst_43294);

(statearr_43320_44713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43311 === (8))){
var inst_43296 = (state_43310[(8)]);
var inst_43301 = (state_43310[(2)]);
var state_43310__$1 = (function (){var statearr_43321 = state_43310;
(statearr_43321[(10)] = inst_43301);

return statearr_43321;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43310__$1,(9),results,inst_43296);
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
var statearr_43322 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43322[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43322[(1)] = (1));

return statearr_43322;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43310){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43310);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43323){var ex__42714__auto__ = e43323;
var statearr_43324_44714 = state_43310;
(statearr_43324_44714[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43310[(4)]))){
var statearr_43325_44715 = state_43310;
(statearr_43325_44715[(1)] = cljs.core.first((state_43310[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44716 = state_43310;
state_43310 = G__44716;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43326 = f__42850__auto__();
(statearr_43326[(6)] = c__42849__auto___44705);

return statearr_43326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


var c__42849__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43364){
var state_val_43365 = (state_43364[(1)]);
if((state_val_43365 === (7))){
var inst_43360 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
var statearr_43366_44717 = state_43364__$1;
(statearr_43366_44717[(2)] = inst_43360);

(statearr_43366_44717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (20))){
var state_43364__$1 = state_43364;
var statearr_43367_44718 = state_43364__$1;
(statearr_43367_44718[(2)] = null);

(statearr_43367_44718[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (1))){
var state_43364__$1 = state_43364;
var statearr_43368_44719 = state_43364__$1;
(statearr_43368_44719[(2)] = null);

(statearr_43368_44719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (4))){
var inst_43329 = (state_43364[(7)]);
var inst_43329__$1 = (state_43364[(2)]);
var inst_43330 = (inst_43329__$1 == null);
var state_43364__$1 = (function (){var statearr_43369 = state_43364;
(statearr_43369[(7)] = inst_43329__$1);

return statearr_43369;
})();
if(cljs.core.truth_(inst_43330)){
var statearr_43370_44720 = state_43364__$1;
(statearr_43370_44720[(1)] = (5));

} else {
var statearr_43371_44721 = state_43364__$1;
(statearr_43371_44721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (15))){
var inst_43342 = (state_43364[(8)]);
var state_43364__$1 = state_43364;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43364__$1,(18),to,inst_43342);
} else {
if((state_val_43365 === (21))){
var inst_43355 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
var statearr_43372_44723 = state_43364__$1;
(statearr_43372_44723[(2)] = inst_43355);

(statearr_43372_44723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (13))){
var inst_43357 = (state_43364[(2)]);
var state_43364__$1 = (function (){var statearr_43373 = state_43364;
(statearr_43373[(9)] = inst_43357);

return statearr_43373;
})();
var statearr_43374_44725 = state_43364__$1;
(statearr_43374_44725[(2)] = null);

(statearr_43374_44725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (6))){
var inst_43329 = (state_43364[(7)]);
var state_43364__$1 = state_43364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43364__$1,(11),inst_43329);
} else {
if((state_val_43365 === (17))){
var inst_43350 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
if(cljs.core.truth_(inst_43350)){
var statearr_43375_44726 = state_43364__$1;
(statearr_43375_44726[(1)] = (19));

} else {
var statearr_43376_44727 = state_43364__$1;
(statearr_43376_44727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (3))){
var inst_43362 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43364__$1,inst_43362);
} else {
if((state_val_43365 === (12))){
var inst_43339 = (state_43364[(10)]);
var state_43364__$1 = state_43364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43364__$1,(14),inst_43339);
} else {
if((state_val_43365 === (2))){
var state_43364__$1 = state_43364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43364__$1,(4),results);
} else {
if((state_val_43365 === (19))){
var state_43364__$1 = state_43364;
var statearr_43381_44728 = state_43364__$1;
(statearr_43381_44728[(2)] = null);

(statearr_43381_44728[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (11))){
var inst_43339 = (state_43364[(2)]);
var state_43364__$1 = (function (){var statearr_43382 = state_43364;
(statearr_43382[(10)] = inst_43339);

return statearr_43382;
})();
var statearr_43383_44729 = state_43364__$1;
(statearr_43383_44729[(2)] = null);

(statearr_43383_44729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (9))){
var state_43364__$1 = state_43364;
var statearr_43384_44730 = state_43364__$1;
(statearr_43384_44730[(2)] = null);

(statearr_43384_44730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (5))){
var state_43364__$1 = state_43364;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43385_44731 = state_43364__$1;
(statearr_43385_44731[(1)] = (8));

} else {
var statearr_43386_44732 = state_43364__$1;
(statearr_43386_44732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (14))){
var inst_43342 = (state_43364[(8)]);
var inst_43342__$1 = (state_43364[(2)]);
var inst_43343 = (inst_43342__$1 == null);
var inst_43344 = cljs.core.not(inst_43343);
var state_43364__$1 = (function (){var statearr_43387 = state_43364;
(statearr_43387[(8)] = inst_43342__$1);

return statearr_43387;
})();
if(inst_43344){
var statearr_43388_44734 = state_43364__$1;
(statearr_43388_44734[(1)] = (15));

} else {
var statearr_43389_44735 = state_43364__$1;
(statearr_43389_44735[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (16))){
var state_43364__$1 = state_43364;
var statearr_43390_44736 = state_43364__$1;
(statearr_43390_44736[(2)] = false);

(statearr_43390_44736[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (10))){
var inst_43336 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
var statearr_43391_44737 = state_43364__$1;
(statearr_43391_44737[(2)] = inst_43336);

(statearr_43391_44737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (18))){
var inst_43347 = (state_43364[(2)]);
var state_43364__$1 = state_43364;
var statearr_43392_44738 = state_43364__$1;
(statearr_43392_44738[(2)] = inst_43347);

(statearr_43392_44738[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43365 === (8))){
var inst_43333 = cljs.core.async.close_BANG_(to);
var state_43364__$1 = state_43364;
var statearr_43393_44739 = state_43364__$1;
(statearr_43393_44739[(2)] = inst_43333);

(statearr_43393_44739[(1)] = (10));


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
var statearr_43394 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43394[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__);

(statearr_43394[(1)] = (1));

return statearr_43394;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1 = (function (state_43364){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43364);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43395){var ex__42714__auto__ = e43395;
var statearr_43396_44740 = state_43364;
(statearr_43396_44740[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43364[(4)]))){
var statearr_43397_44741 = state_43364;
(statearr_43397_44741[(1)] = cljs.core.first((state_43364[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44742 = state_43364;
state_43364 = G__44742;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__ = function(state_43364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1.call(this,state_43364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43398 = f__42850__auto__();
(statearr_43398[(6)] = c__42849__auto__);

return statearr_43398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

return c__42849__auto__;
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
var G__43400 = arguments.length;
switch (G__43400) {
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
var G__43402 = arguments.length;
switch (G__43402) {
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
var G__43404 = arguments.length;
switch (G__43404) {
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
var c__42849__auto___44750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43430){
var state_val_43431 = (state_43430[(1)]);
if((state_val_43431 === (7))){
var inst_43426 = (state_43430[(2)]);
var state_43430__$1 = state_43430;
var statearr_43432_44751 = state_43430__$1;
(statearr_43432_44751[(2)] = inst_43426);

(statearr_43432_44751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (1))){
var state_43430__$1 = state_43430;
var statearr_43433_44752 = state_43430__$1;
(statearr_43433_44752[(2)] = null);

(statearr_43433_44752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (4))){
var inst_43407 = (state_43430[(7)]);
var inst_43407__$1 = (state_43430[(2)]);
var inst_43408 = (inst_43407__$1 == null);
var state_43430__$1 = (function (){var statearr_43434 = state_43430;
(statearr_43434[(7)] = inst_43407__$1);

return statearr_43434;
})();
if(cljs.core.truth_(inst_43408)){
var statearr_43435_44754 = state_43430__$1;
(statearr_43435_44754[(1)] = (5));

} else {
var statearr_43436_44755 = state_43430__$1;
(statearr_43436_44755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (13))){
var state_43430__$1 = state_43430;
var statearr_43437_44757 = state_43430__$1;
(statearr_43437_44757[(2)] = null);

(statearr_43437_44757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (6))){
var inst_43407 = (state_43430[(7)]);
var inst_43413 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43407) : p.call(null,inst_43407));
var state_43430__$1 = state_43430;
if(cljs.core.truth_(inst_43413)){
var statearr_43438_44758 = state_43430__$1;
(statearr_43438_44758[(1)] = (9));

} else {
var statearr_43439_44759 = state_43430__$1;
(statearr_43439_44759[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (3))){
var inst_43428 = (state_43430[(2)]);
var state_43430__$1 = state_43430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43430__$1,inst_43428);
} else {
if((state_val_43431 === (12))){
var state_43430__$1 = state_43430;
var statearr_43440_44760 = state_43430__$1;
(statearr_43440_44760[(2)] = null);

(statearr_43440_44760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (2))){
var state_43430__$1 = state_43430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43430__$1,(4),ch);
} else {
if((state_val_43431 === (11))){
var inst_43407 = (state_43430[(7)]);
var inst_43417 = (state_43430[(2)]);
var state_43430__$1 = state_43430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43430__$1,(8),inst_43417,inst_43407);
} else {
if((state_val_43431 === (9))){
var state_43430__$1 = state_43430;
var statearr_43441_44761 = state_43430__$1;
(statearr_43441_44761[(2)] = tc);

(statearr_43441_44761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (5))){
var inst_43410 = cljs.core.async.close_BANG_(tc);
var inst_43411 = cljs.core.async.close_BANG_(fc);
var state_43430__$1 = (function (){var statearr_43442 = state_43430;
(statearr_43442[(8)] = inst_43410);

return statearr_43442;
})();
var statearr_43443_44762 = state_43430__$1;
(statearr_43443_44762[(2)] = inst_43411);

(statearr_43443_44762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (14))){
var inst_43424 = (state_43430[(2)]);
var state_43430__$1 = state_43430;
var statearr_43444_44763 = state_43430__$1;
(statearr_43444_44763[(2)] = inst_43424);

(statearr_43444_44763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (10))){
var state_43430__$1 = state_43430;
var statearr_43445_44768 = state_43430__$1;
(statearr_43445_44768[(2)] = fc);

(statearr_43445_44768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43431 === (8))){
var inst_43419 = (state_43430[(2)]);
var state_43430__$1 = state_43430;
if(cljs.core.truth_(inst_43419)){
var statearr_43446_44772 = state_43430__$1;
(statearr_43446_44772[(1)] = (12));

} else {
var statearr_43447_44773 = state_43430__$1;
(statearr_43447_44773[(1)] = (13));

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
var statearr_43448 = [null,null,null,null,null,null,null,null,null];
(statearr_43448[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43448[(1)] = (1));

return statearr_43448;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43430){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43430);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43449){var ex__42714__auto__ = e43449;
var statearr_43450_44774 = state_43430;
(statearr_43450_44774[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43430[(4)]))){
var statearr_43451_44778 = state_43430;
(statearr_43451_44778[(1)] = cljs.core.first((state_43430[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44779 = state_43430;
state_43430 = G__44779;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43452 = f__42850__auto__();
(statearr_43452[(6)] = c__42849__auto___44750);

return statearr_43452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var c__42849__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43474){
var state_val_43475 = (state_43474[(1)]);
if((state_val_43475 === (7))){
var inst_43470 = (state_43474[(2)]);
var state_43474__$1 = state_43474;
var statearr_43476_44783 = state_43474__$1;
(statearr_43476_44783[(2)] = inst_43470);

(statearr_43476_44783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (1))){
var inst_43453 = init;
var inst_43454 = inst_43453;
var state_43474__$1 = (function (){var statearr_43477 = state_43474;
(statearr_43477[(7)] = inst_43454);

return statearr_43477;
})();
var statearr_43478_44787 = state_43474__$1;
(statearr_43478_44787[(2)] = null);

(statearr_43478_44787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (4))){
var inst_43457 = (state_43474[(8)]);
var inst_43457__$1 = (state_43474[(2)]);
var inst_43458 = (inst_43457__$1 == null);
var state_43474__$1 = (function (){var statearr_43479 = state_43474;
(statearr_43479[(8)] = inst_43457__$1);

return statearr_43479;
})();
if(cljs.core.truth_(inst_43458)){
var statearr_43480_44788 = state_43474__$1;
(statearr_43480_44788[(1)] = (5));

} else {
var statearr_43481_44789 = state_43474__$1;
(statearr_43481_44789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (6))){
var inst_43457 = (state_43474[(8)]);
var inst_43461 = (state_43474[(9)]);
var inst_43454 = (state_43474[(7)]);
var inst_43461__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43454,inst_43457) : f.call(null,inst_43454,inst_43457));
var inst_43462 = cljs.core.reduced_QMARK_(inst_43461__$1);
var state_43474__$1 = (function (){var statearr_43482 = state_43474;
(statearr_43482[(9)] = inst_43461__$1);

return statearr_43482;
})();
if(inst_43462){
var statearr_43483_44790 = state_43474__$1;
(statearr_43483_44790[(1)] = (8));

} else {
var statearr_43484_44795 = state_43474__$1;
(statearr_43484_44795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (3))){
var inst_43472 = (state_43474[(2)]);
var state_43474__$1 = state_43474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43474__$1,inst_43472);
} else {
if((state_val_43475 === (2))){
var state_43474__$1 = state_43474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43474__$1,(4),ch);
} else {
if((state_val_43475 === (9))){
var inst_43461 = (state_43474[(9)]);
var inst_43454 = inst_43461;
var state_43474__$1 = (function (){var statearr_43485 = state_43474;
(statearr_43485[(7)] = inst_43454);

return statearr_43485;
})();
var statearr_43486_44799 = state_43474__$1;
(statearr_43486_44799[(2)] = null);

(statearr_43486_44799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (5))){
var inst_43454 = (state_43474[(7)]);
var state_43474__$1 = state_43474;
var statearr_43487_44800 = state_43474__$1;
(statearr_43487_44800[(2)] = inst_43454);

(statearr_43487_44800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (10))){
var inst_43468 = (state_43474[(2)]);
var state_43474__$1 = state_43474;
var statearr_43488_44801 = state_43474__$1;
(statearr_43488_44801[(2)] = inst_43468);

(statearr_43488_44801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43475 === (8))){
var inst_43461 = (state_43474[(9)]);
var inst_43464 = cljs.core.deref(inst_43461);
var state_43474__$1 = state_43474;
var statearr_43489_44802 = state_43474__$1;
(statearr_43489_44802[(2)] = inst_43464);

(statearr_43489_44802[(1)] = (10));


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
var statearr_43490 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43490[(0)] = cljs$core$async$reduce_$_state_machine__42711__auto__);

(statearr_43490[(1)] = (1));

return statearr_43490;
});
var cljs$core$async$reduce_$_state_machine__42711__auto____1 = (function (state_43474){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43474);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43491){var ex__42714__auto__ = e43491;
var statearr_43492_44806 = state_43474;
(statearr_43492_44806[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43474[(4)]))){
var statearr_43493_44807 = state_43474;
(statearr_43493_44807[(1)] = cljs.core.first((state_43474[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44811 = state_43474;
state_43474 = G__44811;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42711__auto__ = function(state_43474){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42711__auto____1.call(this,state_43474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42711__auto____0;
cljs$core$async$reduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42711__auto____1;
return cljs$core$async$reduce_$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43494 = f__42850__auto__();
(statearr_43494[(6)] = c__42849__auto__);

return statearr_43494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

return c__42849__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42849__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43500){
var state_val_43501 = (state_43500[(1)]);
if((state_val_43501 === (1))){
var inst_43495 = cljs.core.async.reduce(f__$1,init,ch);
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43500__$1,(2),inst_43495);
} else {
if((state_val_43501 === (2))){
var inst_43497 = (state_43500[(2)]);
var inst_43498 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43497) : f__$1.call(null,inst_43497));
var state_43500__$1 = state_43500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43500__$1,inst_43498);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42711__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42711__auto____0 = (function (){
var statearr_43502 = [null,null,null,null,null,null,null];
(statearr_43502[(0)] = cljs$core$async$transduce_$_state_machine__42711__auto__);

(statearr_43502[(1)] = (1));

return statearr_43502;
});
var cljs$core$async$transduce_$_state_machine__42711__auto____1 = (function (state_43500){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43500);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43503){var ex__42714__auto__ = e43503;
var statearr_43504_44815 = state_43500;
(statearr_43504_44815[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43500[(4)]))){
var statearr_43505_44816 = state_43500;
(statearr_43505_44816[(1)] = cljs.core.first((state_43500[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44817 = state_43500;
state_43500 = G__44817;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42711__auto__ = function(state_43500){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42711__auto____1.call(this,state_43500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42711__auto____0;
cljs$core$async$transduce_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42711__auto____1;
return cljs$core$async$transduce_$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43506 = f__42850__auto__();
(statearr_43506[(6)] = c__42849__auto__);

return statearr_43506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

return c__42849__auto__;
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
var G__43508 = arguments.length;
switch (G__43508) {
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
var c__42849__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43533){
var state_val_43534 = (state_43533[(1)]);
if((state_val_43534 === (7))){
var inst_43515 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
var statearr_43535_44820 = state_43533__$1;
(statearr_43535_44820[(2)] = inst_43515);

(statearr_43535_44820[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (1))){
var inst_43509 = cljs.core.seq(coll);
var inst_43510 = inst_43509;
var state_43533__$1 = (function (){var statearr_43536 = state_43533;
(statearr_43536[(7)] = inst_43510);

return statearr_43536;
})();
var statearr_43537_44821 = state_43533__$1;
(statearr_43537_44821[(2)] = null);

(statearr_43537_44821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (4))){
var inst_43510 = (state_43533[(7)]);
var inst_43513 = cljs.core.first(inst_43510);
var state_43533__$1 = state_43533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43533__$1,(7),ch,inst_43513);
} else {
if((state_val_43534 === (13))){
var inst_43527 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
var statearr_43538_44822 = state_43533__$1;
(statearr_43538_44822[(2)] = inst_43527);

(statearr_43538_44822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (6))){
var inst_43518 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
if(cljs.core.truth_(inst_43518)){
var statearr_43539_44823 = state_43533__$1;
(statearr_43539_44823[(1)] = (8));

} else {
var statearr_43540_44824 = state_43533__$1;
(statearr_43540_44824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (3))){
var inst_43531 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43533__$1,inst_43531);
} else {
if((state_val_43534 === (12))){
var state_43533__$1 = state_43533;
var statearr_43541_44825 = state_43533__$1;
(statearr_43541_44825[(2)] = null);

(statearr_43541_44825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (2))){
var inst_43510 = (state_43533[(7)]);
var state_43533__$1 = state_43533;
if(cljs.core.truth_(inst_43510)){
var statearr_43542_44826 = state_43533__$1;
(statearr_43542_44826[(1)] = (4));

} else {
var statearr_43543_44827 = state_43533__$1;
(statearr_43543_44827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (11))){
var inst_43524 = cljs.core.async.close_BANG_(ch);
var state_43533__$1 = state_43533;
var statearr_43544_44828 = state_43533__$1;
(statearr_43544_44828[(2)] = inst_43524);

(statearr_43544_44828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (9))){
var state_43533__$1 = state_43533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43545_44829 = state_43533__$1;
(statearr_43545_44829[(1)] = (11));

} else {
var statearr_43546_44830 = state_43533__$1;
(statearr_43546_44830[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (5))){
var inst_43510 = (state_43533[(7)]);
var state_43533__$1 = state_43533;
var statearr_43547_44831 = state_43533__$1;
(statearr_43547_44831[(2)] = inst_43510);

(statearr_43547_44831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (10))){
var inst_43529 = (state_43533[(2)]);
var state_43533__$1 = state_43533;
var statearr_43548_44832 = state_43533__$1;
(statearr_43548_44832[(2)] = inst_43529);

(statearr_43548_44832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43534 === (8))){
var inst_43510 = (state_43533[(7)]);
var inst_43520 = cljs.core.next(inst_43510);
var inst_43510__$1 = inst_43520;
var state_43533__$1 = (function (){var statearr_43549 = state_43533;
(statearr_43549[(7)] = inst_43510__$1);

return statearr_43549;
})();
var statearr_43550_44833 = state_43533__$1;
(statearr_43550_44833[(2)] = null);

(statearr_43550_44833[(1)] = (2));


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
var statearr_43551 = [null,null,null,null,null,null,null,null];
(statearr_43551[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_43551[(1)] = (1));

return statearr_43551;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_43533){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43533);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43552){var ex__42714__auto__ = e43552;
var statearr_43553_44834 = state_43533;
(statearr_43553_44834[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43533[(4)]))){
var statearr_43554_44835 = state_43533;
(statearr_43554_44835[(1)] = cljs.core.first((state_43533[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44836 = state_43533;
state_43533 = G__44836;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_43533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_43533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43555 = f__42850__auto__();
(statearr_43555[(6)] = c__42849__auto__);

return statearr_43555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

return c__42849__auto__;
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
var G__43557 = arguments.length;
switch (G__43557) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_44838 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_44838(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44842 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_44842(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44846 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_44846(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44848 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_44848(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43558 = (function (ch,cs,meta43559){
this.ch = ch;
this.cs = cs;
this.meta43559 = meta43559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43560,meta43559__$1){
var self__ = this;
var _43560__$1 = this;
return (new cljs.core.async.t_cljs$core$async43558(self__.ch,self__.cs,meta43559__$1));
}));

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43560){
var self__ = this;
var _43560__$1 = this;
return self__.meta43559;
}));

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43558.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43559","meta43559",-1749755539,null)], null);
}));

(cljs.core.async.t_cljs$core$async43558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43558");

(cljs.core.async.t_cljs$core$async43558.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43558.
 */
cljs.core.async.__GT_t_cljs$core$async43558 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43558(ch__$1,cs__$1,meta43559){
return (new cljs.core.async.t_cljs$core$async43558(ch__$1,cs__$1,meta43559));
});

}

return (new cljs.core.async.t_cljs$core$async43558(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42849__auto___44851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43693){
var state_val_43694 = (state_43693[(1)]);
if((state_val_43694 === (7))){
var inst_43689 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43695_44856 = state_43693__$1;
(statearr_43695_44856[(2)] = inst_43689);

(statearr_43695_44856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (20))){
var inst_43594 = (state_43693[(7)]);
var inst_43606 = cljs.core.first(inst_43594);
var inst_43607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43606,(0),null);
var inst_43608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43606,(1),null);
var state_43693__$1 = (function (){var statearr_43696 = state_43693;
(statearr_43696[(8)] = inst_43607);

return statearr_43696;
})();
if(cljs.core.truth_(inst_43608)){
var statearr_43697_44857 = state_43693__$1;
(statearr_43697_44857[(1)] = (22));

} else {
var statearr_43698_44858 = state_43693__$1;
(statearr_43698_44858[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (27))){
var inst_43636 = (state_43693[(9)]);
var inst_43638 = (state_43693[(10)]);
var inst_43643 = (state_43693[(11)]);
var inst_43563 = (state_43693[(12)]);
var inst_43643__$1 = cljs.core._nth(inst_43636,inst_43638);
var inst_43644 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43643__$1,inst_43563,done);
var state_43693__$1 = (function (){var statearr_43699 = state_43693;
(statearr_43699[(11)] = inst_43643__$1);

return statearr_43699;
})();
if(cljs.core.truth_(inst_43644)){
var statearr_43700_44863 = state_43693__$1;
(statearr_43700_44863[(1)] = (30));

} else {
var statearr_43701_44864 = state_43693__$1;
(statearr_43701_44864[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (1))){
var state_43693__$1 = state_43693;
var statearr_43702_44865 = state_43693__$1;
(statearr_43702_44865[(2)] = null);

(statearr_43702_44865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (24))){
var inst_43594 = (state_43693[(7)]);
var inst_43613 = (state_43693[(2)]);
var inst_43614 = cljs.core.next(inst_43594);
var inst_43572 = inst_43614;
var inst_43573 = null;
var inst_43574 = (0);
var inst_43575 = (0);
var state_43693__$1 = (function (){var statearr_43703 = state_43693;
(statearr_43703[(13)] = inst_43572);

(statearr_43703[(14)] = inst_43613);

(statearr_43703[(15)] = inst_43573);

(statearr_43703[(16)] = inst_43575);

(statearr_43703[(17)] = inst_43574);

return statearr_43703;
})();
var statearr_43704_44869 = state_43693__$1;
(statearr_43704_44869[(2)] = null);

(statearr_43704_44869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (39))){
var state_43693__$1 = state_43693;
var statearr_43708_44870 = state_43693__$1;
(statearr_43708_44870[(2)] = null);

(statearr_43708_44870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (4))){
var inst_43563 = (state_43693[(12)]);
var inst_43563__$1 = (state_43693[(2)]);
var inst_43564 = (inst_43563__$1 == null);
var state_43693__$1 = (function (){var statearr_43709 = state_43693;
(statearr_43709[(12)] = inst_43563__$1);

return statearr_43709;
})();
if(cljs.core.truth_(inst_43564)){
var statearr_43710_44875 = state_43693__$1;
(statearr_43710_44875[(1)] = (5));

} else {
var statearr_43711_44876 = state_43693__$1;
(statearr_43711_44876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (15))){
var inst_43572 = (state_43693[(13)]);
var inst_43573 = (state_43693[(15)]);
var inst_43575 = (state_43693[(16)]);
var inst_43574 = (state_43693[(17)]);
var inst_43590 = (state_43693[(2)]);
var inst_43591 = (inst_43575 + (1));
var tmp43705 = inst_43572;
var tmp43706 = inst_43573;
var tmp43707 = inst_43574;
var inst_43572__$1 = tmp43705;
var inst_43573__$1 = tmp43706;
var inst_43574__$1 = tmp43707;
var inst_43575__$1 = inst_43591;
var state_43693__$1 = (function (){var statearr_43712 = state_43693;
(statearr_43712[(13)] = inst_43572__$1);

(statearr_43712[(15)] = inst_43573__$1);

(statearr_43712[(16)] = inst_43575__$1);

(statearr_43712[(17)] = inst_43574__$1);

(statearr_43712[(18)] = inst_43590);

return statearr_43712;
})();
var statearr_43713_44883 = state_43693__$1;
(statearr_43713_44883[(2)] = null);

(statearr_43713_44883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (21))){
var inst_43617 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43717_44884 = state_43693__$1;
(statearr_43717_44884[(2)] = inst_43617);

(statearr_43717_44884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (31))){
var inst_43643 = (state_43693[(11)]);
var inst_43647 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43643);
var state_43693__$1 = state_43693;
var statearr_43718_44885 = state_43693__$1;
(statearr_43718_44885[(2)] = inst_43647);

(statearr_43718_44885[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (32))){
var inst_43635 = (state_43693[(19)]);
var inst_43636 = (state_43693[(9)]);
var inst_43637 = (state_43693[(20)]);
var inst_43638 = (state_43693[(10)]);
var inst_43649 = (state_43693[(2)]);
var inst_43650 = (inst_43638 + (1));
var tmp43714 = inst_43635;
var tmp43715 = inst_43636;
var tmp43716 = inst_43637;
var inst_43635__$1 = tmp43714;
var inst_43636__$1 = tmp43715;
var inst_43637__$1 = tmp43716;
var inst_43638__$1 = inst_43650;
var state_43693__$1 = (function (){var statearr_43719 = state_43693;
(statearr_43719[(19)] = inst_43635__$1);

(statearr_43719[(21)] = inst_43649);

(statearr_43719[(9)] = inst_43636__$1);

(statearr_43719[(20)] = inst_43637__$1);

(statearr_43719[(10)] = inst_43638__$1);

return statearr_43719;
})();
var statearr_43720_44886 = state_43693__$1;
(statearr_43720_44886[(2)] = null);

(statearr_43720_44886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (40))){
var inst_43662 = (state_43693[(22)]);
var inst_43666 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43662);
var state_43693__$1 = state_43693;
var statearr_43721_44887 = state_43693__$1;
(statearr_43721_44887[(2)] = inst_43666);

(statearr_43721_44887[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (33))){
var inst_43653 = (state_43693[(23)]);
var inst_43655 = cljs.core.chunked_seq_QMARK_(inst_43653);
var state_43693__$1 = state_43693;
if(inst_43655){
var statearr_43722_44888 = state_43693__$1;
(statearr_43722_44888[(1)] = (36));

} else {
var statearr_43723_44889 = state_43693__$1;
(statearr_43723_44889[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (13))){
var inst_43584 = (state_43693[(24)]);
var inst_43587 = cljs.core.async.close_BANG_(inst_43584);
var state_43693__$1 = state_43693;
var statearr_43724_44890 = state_43693__$1;
(statearr_43724_44890[(2)] = inst_43587);

(statearr_43724_44890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (22))){
var inst_43607 = (state_43693[(8)]);
var inst_43610 = cljs.core.async.close_BANG_(inst_43607);
var state_43693__$1 = state_43693;
var statearr_43725_44891 = state_43693__$1;
(statearr_43725_44891[(2)] = inst_43610);

(statearr_43725_44891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (36))){
var inst_43653 = (state_43693[(23)]);
var inst_43657 = cljs.core.chunk_first(inst_43653);
var inst_43658 = cljs.core.chunk_rest(inst_43653);
var inst_43659 = cljs.core.count(inst_43657);
var inst_43635 = inst_43658;
var inst_43636 = inst_43657;
var inst_43637 = inst_43659;
var inst_43638 = (0);
var state_43693__$1 = (function (){var statearr_43726 = state_43693;
(statearr_43726[(19)] = inst_43635);

(statearr_43726[(9)] = inst_43636);

(statearr_43726[(20)] = inst_43637);

(statearr_43726[(10)] = inst_43638);

return statearr_43726;
})();
var statearr_43727_44892 = state_43693__$1;
(statearr_43727_44892[(2)] = null);

(statearr_43727_44892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (41))){
var inst_43653 = (state_43693[(23)]);
var inst_43668 = (state_43693[(2)]);
var inst_43669 = cljs.core.next(inst_43653);
var inst_43635 = inst_43669;
var inst_43636 = null;
var inst_43637 = (0);
var inst_43638 = (0);
var state_43693__$1 = (function (){var statearr_43728 = state_43693;
(statearr_43728[(25)] = inst_43668);

(statearr_43728[(19)] = inst_43635);

(statearr_43728[(9)] = inst_43636);

(statearr_43728[(20)] = inst_43637);

(statearr_43728[(10)] = inst_43638);

return statearr_43728;
})();
var statearr_43729_44899 = state_43693__$1;
(statearr_43729_44899[(2)] = null);

(statearr_43729_44899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (43))){
var state_43693__$1 = state_43693;
var statearr_43730_44900 = state_43693__$1;
(statearr_43730_44900[(2)] = null);

(statearr_43730_44900[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (29))){
var inst_43677 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43731_44901 = state_43693__$1;
(statearr_43731_44901[(2)] = inst_43677);

(statearr_43731_44901[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (44))){
var inst_43686 = (state_43693[(2)]);
var state_43693__$1 = (function (){var statearr_43732 = state_43693;
(statearr_43732[(26)] = inst_43686);

return statearr_43732;
})();
var statearr_43733_44902 = state_43693__$1;
(statearr_43733_44902[(2)] = null);

(statearr_43733_44902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (6))){
var inst_43627 = (state_43693[(27)]);
var inst_43626 = cljs.core.deref(cs);
var inst_43627__$1 = cljs.core.keys(inst_43626);
var inst_43628 = cljs.core.count(inst_43627__$1);
var inst_43629 = cljs.core.reset_BANG_(dctr,inst_43628);
var inst_43634 = cljs.core.seq(inst_43627__$1);
var inst_43635 = inst_43634;
var inst_43636 = null;
var inst_43637 = (0);
var inst_43638 = (0);
var state_43693__$1 = (function (){var statearr_43734 = state_43693;
(statearr_43734[(19)] = inst_43635);

(statearr_43734[(28)] = inst_43629);

(statearr_43734[(9)] = inst_43636);

(statearr_43734[(20)] = inst_43637);

(statearr_43734[(10)] = inst_43638);

(statearr_43734[(27)] = inst_43627__$1);

return statearr_43734;
})();
var statearr_43735_44903 = state_43693__$1;
(statearr_43735_44903[(2)] = null);

(statearr_43735_44903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (28))){
var inst_43635 = (state_43693[(19)]);
var inst_43653 = (state_43693[(23)]);
var inst_43653__$1 = cljs.core.seq(inst_43635);
var state_43693__$1 = (function (){var statearr_43736 = state_43693;
(statearr_43736[(23)] = inst_43653__$1);

return statearr_43736;
})();
if(inst_43653__$1){
var statearr_43737_44910 = state_43693__$1;
(statearr_43737_44910[(1)] = (33));

} else {
var statearr_43738_44911 = state_43693__$1;
(statearr_43738_44911[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (25))){
var inst_43637 = (state_43693[(20)]);
var inst_43638 = (state_43693[(10)]);
var inst_43640 = (inst_43638 < inst_43637);
var inst_43641 = inst_43640;
var state_43693__$1 = state_43693;
if(cljs.core.truth_(inst_43641)){
var statearr_43739_44912 = state_43693__$1;
(statearr_43739_44912[(1)] = (27));

} else {
var statearr_43740_44913 = state_43693__$1;
(statearr_43740_44913[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (34))){
var state_43693__$1 = state_43693;
var statearr_43741_44914 = state_43693__$1;
(statearr_43741_44914[(2)] = null);

(statearr_43741_44914[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (17))){
var state_43693__$1 = state_43693;
var statearr_43742_44915 = state_43693__$1;
(statearr_43742_44915[(2)] = null);

(statearr_43742_44915[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (3))){
var inst_43691 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43693__$1,inst_43691);
} else {
if((state_val_43694 === (12))){
var inst_43622 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43743_44916 = state_43693__$1;
(statearr_43743_44916[(2)] = inst_43622);

(statearr_43743_44916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (2))){
var state_43693__$1 = state_43693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43693__$1,(4),ch);
} else {
if((state_val_43694 === (23))){
var state_43693__$1 = state_43693;
var statearr_43744_44917 = state_43693__$1;
(statearr_43744_44917[(2)] = null);

(statearr_43744_44917[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (35))){
var inst_43675 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43745_44918 = state_43693__$1;
(statearr_43745_44918[(2)] = inst_43675);

(statearr_43745_44918[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (19))){
var inst_43594 = (state_43693[(7)]);
var inst_43598 = cljs.core.chunk_first(inst_43594);
var inst_43599 = cljs.core.chunk_rest(inst_43594);
var inst_43600 = cljs.core.count(inst_43598);
var inst_43572 = inst_43599;
var inst_43573 = inst_43598;
var inst_43574 = inst_43600;
var inst_43575 = (0);
var state_43693__$1 = (function (){var statearr_43746 = state_43693;
(statearr_43746[(13)] = inst_43572);

(statearr_43746[(15)] = inst_43573);

(statearr_43746[(16)] = inst_43575);

(statearr_43746[(17)] = inst_43574);

return statearr_43746;
})();
var statearr_43747_44919 = state_43693__$1;
(statearr_43747_44919[(2)] = null);

(statearr_43747_44919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (11))){
var inst_43572 = (state_43693[(13)]);
var inst_43594 = (state_43693[(7)]);
var inst_43594__$1 = cljs.core.seq(inst_43572);
var state_43693__$1 = (function (){var statearr_43748 = state_43693;
(statearr_43748[(7)] = inst_43594__$1);

return statearr_43748;
})();
if(inst_43594__$1){
var statearr_43749_44920 = state_43693__$1;
(statearr_43749_44920[(1)] = (16));

} else {
var statearr_43750_44921 = state_43693__$1;
(statearr_43750_44921[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (9))){
var inst_43624 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43751_44922 = state_43693__$1;
(statearr_43751_44922[(2)] = inst_43624);

(statearr_43751_44922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (5))){
var inst_43570 = cljs.core.deref(cs);
var inst_43571 = cljs.core.seq(inst_43570);
var inst_43572 = inst_43571;
var inst_43573 = null;
var inst_43574 = (0);
var inst_43575 = (0);
var state_43693__$1 = (function (){var statearr_43752 = state_43693;
(statearr_43752[(13)] = inst_43572);

(statearr_43752[(15)] = inst_43573);

(statearr_43752[(16)] = inst_43575);

(statearr_43752[(17)] = inst_43574);

return statearr_43752;
})();
var statearr_43753_44929 = state_43693__$1;
(statearr_43753_44929[(2)] = null);

(statearr_43753_44929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (14))){
var state_43693__$1 = state_43693;
var statearr_43754_44930 = state_43693__$1;
(statearr_43754_44930[(2)] = null);

(statearr_43754_44930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (45))){
var inst_43683 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43755_44931 = state_43693__$1;
(statearr_43755_44931[(2)] = inst_43683);

(statearr_43755_44931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (26))){
var inst_43627 = (state_43693[(27)]);
var inst_43679 = (state_43693[(2)]);
var inst_43680 = cljs.core.seq(inst_43627);
var state_43693__$1 = (function (){var statearr_43756 = state_43693;
(statearr_43756[(29)] = inst_43679);

return statearr_43756;
})();
if(inst_43680){
var statearr_43757_44932 = state_43693__$1;
(statearr_43757_44932[(1)] = (42));

} else {
var statearr_43758_44933 = state_43693__$1;
(statearr_43758_44933[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (16))){
var inst_43594 = (state_43693[(7)]);
var inst_43596 = cljs.core.chunked_seq_QMARK_(inst_43594);
var state_43693__$1 = state_43693;
if(inst_43596){
var statearr_43759_44934 = state_43693__$1;
(statearr_43759_44934[(1)] = (19));

} else {
var statearr_43760_44935 = state_43693__$1;
(statearr_43760_44935[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (38))){
var inst_43672 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43761_44936 = state_43693__$1;
(statearr_43761_44936[(2)] = inst_43672);

(statearr_43761_44936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (30))){
var state_43693__$1 = state_43693;
var statearr_43762_44937 = state_43693__$1;
(statearr_43762_44937[(2)] = null);

(statearr_43762_44937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (10))){
var inst_43573 = (state_43693[(15)]);
var inst_43575 = (state_43693[(16)]);
var inst_43583 = cljs.core._nth(inst_43573,inst_43575);
var inst_43584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43583,(0),null);
var inst_43585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43583,(1),null);
var state_43693__$1 = (function (){var statearr_43763 = state_43693;
(statearr_43763[(24)] = inst_43584);

return statearr_43763;
})();
if(cljs.core.truth_(inst_43585)){
var statearr_43764_44938 = state_43693__$1;
(statearr_43764_44938[(1)] = (13));

} else {
var statearr_43765_44939 = state_43693__$1;
(statearr_43765_44939[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (18))){
var inst_43620 = (state_43693[(2)]);
var state_43693__$1 = state_43693;
var statearr_43766_44940 = state_43693__$1;
(statearr_43766_44940[(2)] = inst_43620);

(statearr_43766_44940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (42))){
var state_43693__$1 = state_43693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43693__$1,(45),dchan);
} else {
if((state_val_43694 === (37))){
var inst_43653 = (state_43693[(23)]);
var inst_43563 = (state_43693[(12)]);
var inst_43662 = (state_43693[(22)]);
var inst_43662__$1 = cljs.core.first(inst_43653);
var inst_43663 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43662__$1,inst_43563,done);
var state_43693__$1 = (function (){var statearr_43767 = state_43693;
(statearr_43767[(22)] = inst_43662__$1);

return statearr_43767;
})();
if(cljs.core.truth_(inst_43663)){
var statearr_43768_44941 = state_43693__$1;
(statearr_43768_44941[(1)] = (39));

} else {
var statearr_43769_44942 = state_43693__$1;
(statearr_43769_44942[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43694 === (8))){
var inst_43575 = (state_43693[(16)]);
var inst_43574 = (state_43693[(17)]);
var inst_43577 = (inst_43575 < inst_43574);
var inst_43578 = inst_43577;
var state_43693__$1 = state_43693;
if(cljs.core.truth_(inst_43578)){
var statearr_43770_44943 = state_43693__$1;
(statearr_43770_44943[(1)] = (10));

} else {
var statearr_43771_44944 = state_43693__$1;
(statearr_43771_44944[(1)] = (11));

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
var statearr_43772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43772[(0)] = cljs$core$async$mult_$_state_machine__42711__auto__);

(statearr_43772[(1)] = (1));

return statearr_43772;
});
var cljs$core$async$mult_$_state_machine__42711__auto____1 = (function (state_43693){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43693);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43773){var ex__42714__auto__ = e43773;
var statearr_43774_44945 = state_43693;
(statearr_43774_44945[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43693[(4)]))){
var statearr_43775_44946 = state_43693;
(statearr_43775_44946[(1)] = cljs.core.first((state_43693[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44947 = state_43693;
state_43693 = G__44947;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42711__auto__ = function(state_43693){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42711__auto____1.call(this,state_43693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42711__auto____0;
cljs$core$async$mult_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42711__auto____1;
return cljs$core$async$mult_$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43776 = f__42850__auto__();
(statearr_43776[(6)] = c__42849__auto___44851);

return statearr_43776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var G__43778 = arguments.length;
switch (G__43778) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_44949 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_44949(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44950 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_44950(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44952 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44952(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44957 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_44957(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44958 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44958(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44959 = arguments.length;
var i__4737__auto___44960 = (0);
while(true){
if((i__4737__auto___44960 < len__4736__auto___44959)){
args__4742__auto__.push((arguments[i__4737__auto___44960]));

var G__44961 = (i__4737__auto___44960 + (1));
i__4737__auto___44960 = G__44961;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43783){
var map__43784 = p__43783;
var map__43784__$1 = (((((!((map__43784 == null))))?(((((map__43784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43784):map__43784);
var opts = map__43784__$1;
var statearr_43786_44962 = state;
(statearr_43786_44962[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43787_44963 = state;
(statearr_43787_44963[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43788_44965 = state;
(statearr_43788_44965[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43779){
var G__43780 = cljs.core.first(seq43779);
var seq43779__$1 = cljs.core.next(seq43779);
var G__43781 = cljs.core.first(seq43779__$1);
var seq43779__$2 = cljs.core.next(seq43779__$1);
var G__43782 = cljs.core.first(seq43779__$2);
var seq43779__$3 = cljs.core.next(seq43779__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43780,G__43781,G__43782,seq43779__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43789 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43790){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43790 = meta43790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43791,meta43790__$1){
var self__ = this;
var _43791__$1 = this;
return (new cljs.core.async.t_cljs$core$async43789(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43790__$1));
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43791){
var self__ = this;
var _43791__$1 = this;
return self__.meta43790;
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43790","meta43790",1259092117,null)], null);
}));

(cljs.core.async.t_cljs$core$async43789.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43789");

(cljs.core.async.t_cljs$core$async43789.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43789");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43789.
 */
cljs.core.async.__GT_t_cljs$core$async43789 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43789(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43790){
return (new cljs.core.async.t_cljs$core$async43789(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43790));
});

}

return (new cljs.core.async.t_cljs$core$async43789(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42849__auto___44969 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_43893){
var state_val_43894 = (state_43893[(1)]);
if((state_val_43894 === (7))){
var inst_43808 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
var statearr_43895_44971 = state_43893__$1;
(statearr_43895_44971[(2)] = inst_43808);

(statearr_43895_44971[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (20))){
var inst_43820 = (state_43893[(7)]);
var state_43893__$1 = state_43893;
var statearr_43896_44973 = state_43893__$1;
(statearr_43896_44973[(2)] = inst_43820);

(statearr_43896_44973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (27))){
var state_43893__$1 = state_43893;
var statearr_43897_44974 = state_43893__$1;
(statearr_43897_44974[(2)] = null);

(statearr_43897_44974[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (1))){
var inst_43795 = (state_43893[(8)]);
var inst_43795__$1 = calc_state();
var inst_43797 = (inst_43795__$1 == null);
var inst_43798 = cljs.core.not(inst_43797);
var state_43893__$1 = (function (){var statearr_43898 = state_43893;
(statearr_43898[(8)] = inst_43795__$1);

return statearr_43898;
})();
if(inst_43798){
var statearr_43899_44975 = state_43893__$1;
(statearr_43899_44975[(1)] = (2));

} else {
var statearr_43900_44976 = state_43893__$1;
(statearr_43900_44976[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (24))){
var inst_43867 = (state_43893[(9)]);
var inst_43853 = (state_43893[(10)]);
var inst_43844 = (state_43893[(11)]);
var inst_43867__$1 = (inst_43844.cljs$core$IFn$_invoke$arity$1 ? inst_43844.cljs$core$IFn$_invoke$arity$1(inst_43853) : inst_43844.call(null,inst_43853));
var state_43893__$1 = (function (){var statearr_43901 = state_43893;
(statearr_43901[(9)] = inst_43867__$1);

return statearr_43901;
})();
if(cljs.core.truth_(inst_43867__$1)){
var statearr_43902_44977 = state_43893__$1;
(statearr_43902_44977[(1)] = (29));

} else {
var statearr_43903_44978 = state_43893__$1;
(statearr_43903_44978[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (4))){
var inst_43811 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43811)){
var statearr_43904_44979 = state_43893__$1;
(statearr_43904_44979[(1)] = (8));

} else {
var statearr_43905_44980 = state_43893__$1;
(statearr_43905_44980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (15))){
var inst_43838 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43838)){
var statearr_43906_44981 = state_43893__$1;
(statearr_43906_44981[(1)] = (19));

} else {
var statearr_43907_44982 = state_43893__$1;
(statearr_43907_44982[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (21))){
var inst_43843 = (state_43893[(12)]);
var inst_43843__$1 = (state_43893[(2)]);
var inst_43844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43843__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43843__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43843__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43893__$1 = (function (){var statearr_43908 = state_43893;
(statearr_43908[(13)] = inst_43845);

(statearr_43908[(12)] = inst_43843__$1);

(statearr_43908[(11)] = inst_43844);

return statearr_43908;
})();
return cljs.core.async.ioc_alts_BANG_(state_43893__$1,(22),inst_43846);
} else {
if((state_val_43894 === (31))){
var inst_43875 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43875)){
var statearr_43909_44983 = state_43893__$1;
(statearr_43909_44983[(1)] = (32));

} else {
var statearr_43910_44984 = state_43893__$1;
(statearr_43910_44984[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (32))){
var inst_43852 = (state_43893[(14)]);
var state_43893__$1 = state_43893;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43893__$1,(35),out,inst_43852);
} else {
if((state_val_43894 === (33))){
var inst_43843 = (state_43893[(12)]);
var inst_43820 = inst_43843;
var state_43893__$1 = (function (){var statearr_43911 = state_43893;
(statearr_43911[(7)] = inst_43820);

return statearr_43911;
})();
var statearr_43912_44985 = state_43893__$1;
(statearr_43912_44985[(2)] = null);

(statearr_43912_44985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (13))){
var inst_43820 = (state_43893[(7)]);
var inst_43827 = inst_43820.cljs$lang$protocol_mask$partition0$;
var inst_43828 = (inst_43827 & (64));
var inst_43829 = inst_43820.cljs$core$ISeq$;
var inst_43830 = (cljs.core.PROTOCOL_SENTINEL === inst_43829);
var inst_43831 = ((inst_43828) || (inst_43830));
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43831)){
var statearr_43913_44986 = state_43893__$1;
(statearr_43913_44986[(1)] = (16));

} else {
var statearr_43914_44987 = state_43893__$1;
(statearr_43914_44987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (22))){
var inst_43853 = (state_43893[(10)]);
var inst_43852 = (state_43893[(14)]);
var inst_43851 = (state_43893[(2)]);
var inst_43852__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43851,(0),null);
var inst_43853__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43851,(1),null);
var inst_43854 = (inst_43852__$1 == null);
var inst_43855 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43853__$1,change);
var inst_43856 = ((inst_43854) || (inst_43855));
var state_43893__$1 = (function (){var statearr_43915 = state_43893;
(statearr_43915[(10)] = inst_43853__$1);

(statearr_43915[(14)] = inst_43852__$1);

return statearr_43915;
})();
if(cljs.core.truth_(inst_43856)){
var statearr_43916_44988 = state_43893__$1;
(statearr_43916_44988[(1)] = (23));

} else {
var statearr_43917_44990 = state_43893__$1;
(statearr_43917_44990[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (36))){
var inst_43843 = (state_43893[(12)]);
var inst_43820 = inst_43843;
var state_43893__$1 = (function (){var statearr_43918 = state_43893;
(statearr_43918[(7)] = inst_43820);

return statearr_43918;
})();
var statearr_43919_44991 = state_43893__$1;
(statearr_43919_44991[(2)] = null);

(statearr_43919_44991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (29))){
var inst_43867 = (state_43893[(9)]);
var state_43893__$1 = state_43893;
var statearr_43920_44992 = state_43893__$1;
(statearr_43920_44992[(2)] = inst_43867);

(statearr_43920_44992[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (6))){
var state_43893__$1 = state_43893;
var statearr_43921_44993 = state_43893__$1;
(statearr_43921_44993[(2)] = false);

(statearr_43921_44993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (28))){
var inst_43863 = (state_43893[(2)]);
var inst_43864 = calc_state();
var inst_43820 = inst_43864;
var state_43893__$1 = (function (){var statearr_43922 = state_43893;
(statearr_43922[(7)] = inst_43820);

(statearr_43922[(15)] = inst_43863);

return statearr_43922;
})();
var statearr_43923_44994 = state_43893__$1;
(statearr_43923_44994[(2)] = null);

(statearr_43923_44994[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (25))){
var inst_43889 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
var statearr_43924_44999 = state_43893__$1;
(statearr_43924_44999[(2)] = inst_43889);

(statearr_43924_44999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (34))){
var inst_43887 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
var statearr_43925_45000 = state_43893__$1;
(statearr_43925_45000[(2)] = inst_43887);

(statearr_43925_45000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (17))){
var state_43893__$1 = state_43893;
var statearr_43926_45001 = state_43893__$1;
(statearr_43926_45001[(2)] = false);

(statearr_43926_45001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (3))){
var state_43893__$1 = state_43893;
var statearr_43927_45002 = state_43893__$1;
(statearr_43927_45002[(2)] = false);

(statearr_43927_45002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (12))){
var inst_43891 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43893__$1,inst_43891);
} else {
if((state_val_43894 === (2))){
var inst_43795 = (state_43893[(8)]);
var inst_43800 = inst_43795.cljs$lang$protocol_mask$partition0$;
var inst_43801 = (inst_43800 & (64));
var inst_43802 = inst_43795.cljs$core$ISeq$;
var inst_43803 = (cljs.core.PROTOCOL_SENTINEL === inst_43802);
var inst_43804 = ((inst_43801) || (inst_43803));
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43804)){
var statearr_43928_45003 = state_43893__$1;
(statearr_43928_45003[(1)] = (5));

} else {
var statearr_43929_45004 = state_43893__$1;
(statearr_43929_45004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (23))){
var inst_43852 = (state_43893[(14)]);
var inst_43858 = (inst_43852 == null);
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43858)){
var statearr_43930_45005 = state_43893__$1;
(statearr_43930_45005[(1)] = (26));

} else {
var statearr_43931_45006 = state_43893__$1;
(statearr_43931_45006[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (35))){
var inst_43878 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
if(cljs.core.truth_(inst_43878)){
var statearr_43932_45007 = state_43893__$1;
(statearr_43932_45007[(1)] = (36));

} else {
var statearr_43933_45008 = state_43893__$1;
(statearr_43933_45008[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (19))){
var inst_43820 = (state_43893[(7)]);
var inst_43840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43820);
var state_43893__$1 = state_43893;
var statearr_43934_45009 = state_43893__$1;
(statearr_43934_45009[(2)] = inst_43840);

(statearr_43934_45009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (11))){
var inst_43820 = (state_43893[(7)]);
var inst_43824 = (inst_43820 == null);
var inst_43825 = cljs.core.not(inst_43824);
var state_43893__$1 = state_43893;
if(inst_43825){
var statearr_43935_45010 = state_43893__$1;
(statearr_43935_45010[(1)] = (13));

} else {
var statearr_43936_45011 = state_43893__$1;
(statearr_43936_45011[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (9))){
var inst_43795 = (state_43893[(8)]);
var state_43893__$1 = state_43893;
var statearr_43937_45012 = state_43893__$1;
(statearr_43937_45012[(2)] = inst_43795);

(statearr_43937_45012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (5))){
var state_43893__$1 = state_43893;
var statearr_43938_45013 = state_43893__$1;
(statearr_43938_45013[(2)] = true);

(statearr_43938_45013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (14))){
var state_43893__$1 = state_43893;
var statearr_43939_45014 = state_43893__$1;
(statearr_43939_45014[(2)] = false);

(statearr_43939_45014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (26))){
var inst_43853 = (state_43893[(10)]);
var inst_43860 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43853);
var state_43893__$1 = state_43893;
var statearr_43940_45015 = state_43893__$1;
(statearr_43940_45015[(2)] = inst_43860);

(statearr_43940_45015[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (16))){
var state_43893__$1 = state_43893;
var statearr_43941_45016 = state_43893__$1;
(statearr_43941_45016[(2)] = true);

(statearr_43941_45016[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (38))){
var inst_43883 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
var statearr_43942_45017 = state_43893__$1;
(statearr_43942_45017[(2)] = inst_43883);

(statearr_43942_45017[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (30))){
var inst_43853 = (state_43893[(10)]);
var inst_43845 = (state_43893[(13)]);
var inst_43844 = (state_43893[(11)]);
var inst_43870 = cljs.core.empty_QMARK_(inst_43844);
var inst_43871 = (inst_43845.cljs$core$IFn$_invoke$arity$1 ? inst_43845.cljs$core$IFn$_invoke$arity$1(inst_43853) : inst_43845.call(null,inst_43853));
var inst_43872 = cljs.core.not(inst_43871);
var inst_43873 = ((inst_43870) && (inst_43872));
var state_43893__$1 = state_43893;
var statearr_43943_45018 = state_43893__$1;
(statearr_43943_45018[(2)] = inst_43873);

(statearr_43943_45018[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (10))){
var inst_43795 = (state_43893[(8)]);
var inst_43816 = (state_43893[(2)]);
var inst_43817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43816,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43816,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43816,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43820 = inst_43795;
var state_43893__$1 = (function (){var statearr_43944 = state_43893;
(statearr_43944[(16)] = inst_43817);

(statearr_43944[(7)] = inst_43820);

(statearr_43944[(17)] = inst_43818);

(statearr_43944[(18)] = inst_43819);

return statearr_43944;
})();
var statearr_43945_45023 = state_43893__$1;
(statearr_43945_45023[(2)] = null);

(statearr_43945_45023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (18))){
var inst_43835 = (state_43893[(2)]);
var state_43893__$1 = state_43893;
var statearr_43946_45024 = state_43893__$1;
(statearr_43946_45024[(2)] = inst_43835);

(statearr_43946_45024[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (37))){
var state_43893__$1 = state_43893;
var statearr_43947_45028 = state_43893__$1;
(statearr_43947_45028[(2)] = null);

(statearr_43947_45028[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43894 === (8))){
var inst_43795 = (state_43893[(8)]);
var inst_43813 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43795);
var state_43893__$1 = state_43893;
var statearr_43948_45029 = state_43893__$1;
(statearr_43948_45029[(2)] = inst_43813);

(statearr_43948_45029[(1)] = (10));


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
var statearr_43949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43949[(0)] = cljs$core$async$mix_$_state_machine__42711__auto__);

(statearr_43949[(1)] = (1));

return statearr_43949;
});
var cljs$core$async$mix_$_state_machine__42711__auto____1 = (function (state_43893){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_43893);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e43950){var ex__42714__auto__ = e43950;
var statearr_43951_45030 = state_43893;
(statearr_43951_45030[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_43893[(4)]))){
var statearr_43952_45031 = state_43893;
(statearr_43952_45031[(1)] = cljs.core.first((state_43893[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45035 = state_43893;
state_43893 = G__45035;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42711__auto__ = function(state_43893){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42711__auto____1.call(this,state_43893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42711__auto____0;
cljs$core$async$mix_$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42711__auto____1;
return cljs$core$async$mix_$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_43953 = f__42850__auto__();
(statearr_43953[(6)] = c__42849__auto___44969);

return statearr_43953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_45039 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45039(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45047 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45047(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45048 = (function() {
var G__45049 = null;
var G__45049__1 = (function (p){
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
var G__45049__2 = (function (p,v){
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
G__45049 = function(p,v){
switch(arguments.length){
case 1:
return G__45049__1.call(this,p);
case 2:
return G__45049__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45049.cljs$core$IFn$_invoke$arity$1 = G__45049__1;
G__45049.cljs$core$IFn$_invoke$arity$2 = G__45049__2;
return G__45049;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43955 = arguments.length;
switch (G__43955) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45048(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45048(p,v);
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
var G__43958 = arguments.length;
switch (G__43958) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43956_SHARP_){
if(cljs.core.truth_((p1__43956_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43956_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43956_SHARP_.call(null,topic)))){
return p1__43956_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43956_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43959 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43960){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43960 = meta43960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43961,meta43960__$1){
var self__ = this;
var _43961__$1 = this;
return (new cljs.core.async.t_cljs$core$async43959(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43960__$1));
}));

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43961){
var self__ = this;
var _43961__$1 = this;
return self__.meta43960;
}));

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43959.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43960","meta43960",-1665899614,null)], null);
}));

(cljs.core.async.t_cljs$core$async43959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43959");

(cljs.core.async.t_cljs$core$async43959.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43959.
 */
cljs.core.async.__GT_t_cljs$core$async43959 = (function cljs$core$async$__GT_t_cljs$core$async43959(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43960){
return (new cljs.core.async.t_cljs$core$async43959(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43960));
});

}

return (new cljs.core.async.t_cljs$core$async43959(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42849__auto___45054 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44033){
var state_val_44034 = (state_44033[(1)]);
if((state_val_44034 === (7))){
var inst_44029 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44035_45055 = state_44033__$1;
(statearr_44035_45055[(2)] = inst_44029);

(statearr_44035_45055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (20))){
var state_44033__$1 = state_44033;
var statearr_44036_45056 = state_44033__$1;
(statearr_44036_45056[(2)] = null);

(statearr_44036_45056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (1))){
var state_44033__$1 = state_44033;
var statearr_44037_45057 = state_44033__$1;
(statearr_44037_45057[(2)] = null);

(statearr_44037_45057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (24))){
var inst_44012 = (state_44033[(7)]);
var inst_44021 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44012);
var state_44033__$1 = state_44033;
var statearr_44038_45058 = state_44033__$1;
(statearr_44038_45058[(2)] = inst_44021);

(statearr_44038_45058[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (4))){
var inst_43964 = (state_44033[(8)]);
var inst_43964__$1 = (state_44033[(2)]);
var inst_43965 = (inst_43964__$1 == null);
var state_44033__$1 = (function (){var statearr_44039 = state_44033;
(statearr_44039[(8)] = inst_43964__$1);

return statearr_44039;
})();
if(cljs.core.truth_(inst_43965)){
var statearr_44040_45063 = state_44033__$1;
(statearr_44040_45063[(1)] = (5));

} else {
var statearr_44041_45064 = state_44033__$1;
(statearr_44041_45064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (15))){
var inst_44006 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44042_45065 = state_44033__$1;
(statearr_44042_45065[(2)] = inst_44006);

(statearr_44042_45065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (21))){
var inst_44026 = (state_44033[(2)]);
var state_44033__$1 = (function (){var statearr_44043 = state_44033;
(statearr_44043[(9)] = inst_44026);

return statearr_44043;
})();
var statearr_44044_45066 = state_44033__$1;
(statearr_44044_45066[(2)] = null);

(statearr_44044_45066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (13))){
var inst_43988 = (state_44033[(10)]);
var inst_43990 = cljs.core.chunked_seq_QMARK_(inst_43988);
var state_44033__$1 = state_44033;
if(inst_43990){
var statearr_44045_45067 = state_44033__$1;
(statearr_44045_45067[(1)] = (16));

} else {
var statearr_44046_45068 = state_44033__$1;
(statearr_44046_45068[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (22))){
var inst_44018 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
if(cljs.core.truth_(inst_44018)){
var statearr_44047_45069 = state_44033__$1;
(statearr_44047_45069[(1)] = (23));

} else {
var statearr_44048_45070 = state_44033__$1;
(statearr_44048_45070[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (6))){
var inst_43964 = (state_44033[(8)]);
var inst_44012 = (state_44033[(7)]);
var inst_44014 = (state_44033[(11)]);
var inst_44012__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43964) : topic_fn.call(null,inst_43964));
var inst_44013 = cljs.core.deref(mults);
var inst_44014__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44013,inst_44012__$1);
var state_44033__$1 = (function (){var statearr_44049 = state_44033;
(statearr_44049[(7)] = inst_44012__$1);

(statearr_44049[(11)] = inst_44014__$1);

return statearr_44049;
})();
if(cljs.core.truth_(inst_44014__$1)){
var statearr_44050_45071 = state_44033__$1;
(statearr_44050_45071[(1)] = (19));

} else {
var statearr_44051_45072 = state_44033__$1;
(statearr_44051_45072[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (25))){
var inst_44023 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44052_45073 = state_44033__$1;
(statearr_44052_45073[(2)] = inst_44023);

(statearr_44052_45073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (17))){
var inst_43988 = (state_44033[(10)]);
var inst_43997 = cljs.core.first(inst_43988);
var inst_43998 = cljs.core.async.muxch_STAR_(inst_43997);
var inst_43999 = cljs.core.async.close_BANG_(inst_43998);
var inst_44000 = cljs.core.next(inst_43988);
var inst_43974 = inst_44000;
var inst_43975 = null;
var inst_43976 = (0);
var inst_43977 = (0);
var state_44033__$1 = (function (){var statearr_44053 = state_44033;
(statearr_44053[(12)] = inst_43977);

(statearr_44053[(13)] = inst_43999);

(statearr_44053[(14)] = inst_43976);

(statearr_44053[(15)] = inst_43975);

(statearr_44053[(16)] = inst_43974);

return statearr_44053;
})();
var statearr_44054_45078 = state_44033__$1;
(statearr_44054_45078[(2)] = null);

(statearr_44054_45078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (3))){
var inst_44031 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44033__$1,inst_44031);
} else {
if((state_val_44034 === (12))){
var inst_44008 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44055_45080 = state_44033__$1;
(statearr_44055_45080[(2)] = inst_44008);

(statearr_44055_45080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (2))){
var state_44033__$1 = state_44033;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44033__$1,(4),ch);
} else {
if((state_val_44034 === (23))){
var state_44033__$1 = state_44033;
var statearr_44056_45081 = state_44033__$1;
(statearr_44056_45081[(2)] = null);

(statearr_44056_45081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (19))){
var inst_43964 = (state_44033[(8)]);
var inst_44014 = (state_44033[(11)]);
var inst_44016 = cljs.core.async.muxch_STAR_(inst_44014);
var state_44033__$1 = state_44033;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44033__$1,(22),inst_44016,inst_43964);
} else {
if((state_val_44034 === (11))){
var inst_43988 = (state_44033[(10)]);
var inst_43974 = (state_44033[(16)]);
var inst_43988__$1 = cljs.core.seq(inst_43974);
var state_44033__$1 = (function (){var statearr_44057 = state_44033;
(statearr_44057[(10)] = inst_43988__$1);

return statearr_44057;
})();
if(inst_43988__$1){
var statearr_44058_45082 = state_44033__$1;
(statearr_44058_45082[(1)] = (13));

} else {
var statearr_44059_45083 = state_44033__$1;
(statearr_44059_45083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (9))){
var inst_44010 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44060_45085 = state_44033__$1;
(statearr_44060_45085[(2)] = inst_44010);

(statearr_44060_45085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (5))){
var inst_43971 = cljs.core.deref(mults);
var inst_43972 = cljs.core.vals(inst_43971);
var inst_43973 = cljs.core.seq(inst_43972);
var inst_43974 = inst_43973;
var inst_43975 = null;
var inst_43976 = (0);
var inst_43977 = (0);
var state_44033__$1 = (function (){var statearr_44061 = state_44033;
(statearr_44061[(12)] = inst_43977);

(statearr_44061[(14)] = inst_43976);

(statearr_44061[(15)] = inst_43975);

(statearr_44061[(16)] = inst_43974);

return statearr_44061;
})();
var statearr_44062_45086 = state_44033__$1;
(statearr_44062_45086[(2)] = null);

(statearr_44062_45086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (14))){
var state_44033__$1 = state_44033;
var statearr_44066_45087 = state_44033__$1;
(statearr_44066_45087[(2)] = null);

(statearr_44066_45087[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (16))){
var inst_43988 = (state_44033[(10)]);
var inst_43992 = cljs.core.chunk_first(inst_43988);
var inst_43993 = cljs.core.chunk_rest(inst_43988);
var inst_43994 = cljs.core.count(inst_43992);
var inst_43974 = inst_43993;
var inst_43975 = inst_43992;
var inst_43976 = inst_43994;
var inst_43977 = (0);
var state_44033__$1 = (function (){var statearr_44067 = state_44033;
(statearr_44067[(12)] = inst_43977);

(statearr_44067[(14)] = inst_43976);

(statearr_44067[(15)] = inst_43975);

(statearr_44067[(16)] = inst_43974);

return statearr_44067;
})();
var statearr_44068_45092 = state_44033__$1;
(statearr_44068_45092[(2)] = null);

(statearr_44068_45092[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (10))){
var inst_43977 = (state_44033[(12)]);
var inst_43976 = (state_44033[(14)]);
var inst_43975 = (state_44033[(15)]);
var inst_43974 = (state_44033[(16)]);
var inst_43982 = cljs.core._nth(inst_43975,inst_43977);
var inst_43983 = cljs.core.async.muxch_STAR_(inst_43982);
var inst_43984 = cljs.core.async.close_BANG_(inst_43983);
var inst_43985 = (inst_43977 + (1));
var tmp44063 = inst_43976;
var tmp44064 = inst_43975;
var tmp44065 = inst_43974;
var inst_43974__$1 = tmp44065;
var inst_43975__$1 = tmp44064;
var inst_43976__$1 = tmp44063;
var inst_43977__$1 = inst_43985;
var state_44033__$1 = (function (){var statearr_44069 = state_44033;
(statearr_44069[(12)] = inst_43977__$1);

(statearr_44069[(17)] = inst_43984);

(statearr_44069[(14)] = inst_43976__$1);

(statearr_44069[(15)] = inst_43975__$1);

(statearr_44069[(16)] = inst_43974__$1);

return statearr_44069;
})();
var statearr_44070_45093 = state_44033__$1;
(statearr_44070_45093[(2)] = null);

(statearr_44070_45093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (18))){
var inst_44003 = (state_44033[(2)]);
var state_44033__$1 = state_44033;
var statearr_44071_45094 = state_44033__$1;
(statearr_44071_45094[(2)] = inst_44003);

(statearr_44071_45094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44034 === (8))){
var inst_43977 = (state_44033[(12)]);
var inst_43976 = (state_44033[(14)]);
var inst_43979 = (inst_43977 < inst_43976);
var inst_43980 = inst_43979;
var state_44033__$1 = state_44033;
if(cljs.core.truth_(inst_43980)){
var statearr_44072_45095 = state_44033__$1;
(statearr_44072_45095[(1)] = (10));

} else {
var statearr_44073_45096 = state_44033__$1;
(statearr_44073_45096[(1)] = (11));

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
var statearr_44074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44074[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44074[(1)] = (1));

return statearr_44074;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44033){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44033);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44075){var ex__42714__auto__ = e44075;
var statearr_44076_45097 = state_44033;
(statearr_44076_45097[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44033[(4)]))){
var statearr_44077_45098 = state_44033;
(statearr_44077_45098[(1)] = cljs.core.first((state_44033[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45099 = state_44033;
state_44033 = G__45099;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44078 = f__42850__auto__();
(statearr_44078[(6)] = c__42849__auto___45054);

return statearr_44078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var G__44080 = arguments.length;
switch (G__44080) {
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
var G__44082 = arguments.length;
switch (G__44082) {
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
var G__44084 = arguments.length;
switch (G__44084) {
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
var c__42849__auto___45106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44127){
var state_val_44128 = (state_44127[(1)]);
if((state_val_44128 === (7))){
var state_44127__$1 = state_44127;
var statearr_44129_45107 = state_44127__$1;
(statearr_44129_45107[(2)] = null);

(statearr_44129_45107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (1))){
var state_44127__$1 = state_44127;
var statearr_44130_45108 = state_44127__$1;
(statearr_44130_45108[(2)] = null);

(statearr_44130_45108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (4))){
var inst_44087 = (state_44127[(7)]);
var inst_44088 = (state_44127[(8)]);
var inst_44090 = (inst_44088 < inst_44087);
var state_44127__$1 = state_44127;
if(cljs.core.truth_(inst_44090)){
var statearr_44131_45109 = state_44127__$1;
(statearr_44131_45109[(1)] = (6));

} else {
var statearr_44132_45110 = state_44127__$1;
(statearr_44132_45110[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (15))){
var inst_44113 = (state_44127[(9)]);
var inst_44118 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44113);
var state_44127__$1 = state_44127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44127__$1,(17),out,inst_44118);
} else {
if((state_val_44128 === (13))){
var inst_44113 = (state_44127[(9)]);
var inst_44113__$1 = (state_44127[(2)]);
var inst_44114 = cljs.core.some(cljs.core.nil_QMARK_,inst_44113__$1);
var state_44127__$1 = (function (){var statearr_44133 = state_44127;
(statearr_44133[(9)] = inst_44113__$1);

return statearr_44133;
})();
if(cljs.core.truth_(inst_44114)){
var statearr_44134_45111 = state_44127__$1;
(statearr_44134_45111[(1)] = (14));

} else {
var statearr_44135_45112 = state_44127__$1;
(statearr_44135_45112[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (6))){
var state_44127__$1 = state_44127;
var statearr_44136_45113 = state_44127__$1;
(statearr_44136_45113[(2)] = null);

(statearr_44136_45113[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (17))){
var inst_44120 = (state_44127[(2)]);
var state_44127__$1 = (function (){var statearr_44138 = state_44127;
(statearr_44138[(10)] = inst_44120);

return statearr_44138;
})();
var statearr_44139_45114 = state_44127__$1;
(statearr_44139_45114[(2)] = null);

(statearr_44139_45114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (3))){
var inst_44125 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44127__$1,inst_44125);
} else {
if((state_val_44128 === (12))){
var _ = (function (){var statearr_44140 = state_44127;
(statearr_44140[(4)] = cljs.core.rest((state_44127[(4)])));

return statearr_44140;
})();
var state_44127__$1 = state_44127;
var ex44137 = (state_44127__$1[(2)]);
var statearr_44141_45115 = state_44127__$1;
(statearr_44141_45115[(5)] = ex44137);


if((ex44137 instanceof Object)){
var statearr_44142_45116 = state_44127__$1;
(statearr_44142_45116[(1)] = (11));

(statearr_44142_45116[(5)] = null);

} else {
throw ex44137;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (2))){
var inst_44086 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44087 = cnt;
var inst_44088 = (0);
var state_44127__$1 = (function (){var statearr_44143 = state_44127;
(statearr_44143[(7)] = inst_44087);

(statearr_44143[(8)] = inst_44088);

(statearr_44143[(11)] = inst_44086);

return statearr_44143;
})();
var statearr_44144_45118 = state_44127__$1;
(statearr_44144_45118[(2)] = null);

(statearr_44144_45118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (11))){
var inst_44092 = (state_44127[(2)]);
var inst_44093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44127__$1 = (function (){var statearr_44145 = state_44127;
(statearr_44145[(12)] = inst_44092);

return statearr_44145;
})();
var statearr_44146_45119 = state_44127__$1;
(statearr_44146_45119[(2)] = inst_44093);

(statearr_44146_45119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (9))){
var inst_44088 = (state_44127[(8)]);
var _ = (function (){var statearr_44147 = state_44127;
(statearr_44147[(4)] = cljs.core.cons((12),(state_44127[(4)])));

return statearr_44147;
})();
var inst_44099 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44088) : chs__$1.call(null,inst_44088));
var inst_44100 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44088) : done.call(null,inst_44088));
var inst_44101 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44099,inst_44100);
var ___$1 = (function (){var statearr_44148 = state_44127;
(statearr_44148[(4)] = cljs.core.rest((state_44127[(4)])));

return statearr_44148;
})();
var state_44127__$1 = state_44127;
var statearr_44149_45120 = state_44127__$1;
(statearr_44149_45120[(2)] = inst_44101);

(statearr_44149_45120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (5))){
var inst_44111 = (state_44127[(2)]);
var state_44127__$1 = (function (){var statearr_44150 = state_44127;
(statearr_44150[(13)] = inst_44111);

return statearr_44150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44127__$1,(13),dchan);
} else {
if((state_val_44128 === (14))){
var inst_44116 = cljs.core.async.close_BANG_(out);
var state_44127__$1 = state_44127;
var statearr_44151_45121 = state_44127__$1;
(statearr_44151_45121[(2)] = inst_44116);

(statearr_44151_45121[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (16))){
var inst_44123 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
var statearr_44152_45122 = state_44127__$1;
(statearr_44152_45122[(2)] = inst_44123);

(statearr_44152_45122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (10))){
var inst_44088 = (state_44127[(8)]);
var inst_44104 = (state_44127[(2)]);
var inst_44105 = (inst_44088 + (1));
var inst_44088__$1 = inst_44105;
var state_44127__$1 = (function (){var statearr_44153 = state_44127;
(statearr_44153[(14)] = inst_44104);

(statearr_44153[(8)] = inst_44088__$1);

return statearr_44153;
})();
var statearr_44154_45127 = state_44127__$1;
(statearr_44154_45127[(2)] = null);

(statearr_44154_45127[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44128 === (8))){
var inst_44109 = (state_44127[(2)]);
var state_44127__$1 = state_44127;
var statearr_44155_45128 = state_44127__$1;
(statearr_44155_45128[(2)] = inst_44109);

(statearr_44155_45128[(1)] = (5));


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
var statearr_44156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44156[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44156[(1)] = (1));

return statearr_44156;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44127){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44127);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44157){var ex__42714__auto__ = e44157;
var statearr_44158_45130 = state_44127;
(statearr_44158_45130[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44127[(4)]))){
var statearr_44159_45131 = state_44127;
(statearr_44159_45131[(1)] = cljs.core.first((state_44127[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45132 = state_44127;
state_44127 = G__45132;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44160 = f__42850__auto__();
(statearr_44160[(6)] = c__42849__auto___45106);

return statearr_44160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var G__44163 = arguments.length;
switch (G__44163) {
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
var c__42849__auto___45135 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44195){
var state_val_44196 = (state_44195[(1)]);
if((state_val_44196 === (7))){
var inst_44175 = (state_44195[(7)]);
var inst_44174 = (state_44195[(8)]);
var inst_44174__$1 = (state_44195[(2)]);
var inst_44175__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44174__$1,(0),null);
var inst_44176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44174__$1,(1),null);
var inst_44177 = (inst_44175__$1 == null);
var state_44195__$1 = (function (){var statearr_44197 = state_44195;
(statearr_44197[(7)] = inst_44175__$1);

(statearr_44197[(8)] = inst_44174__$1);

(statearr_44197[(9)] = inst_44176);

return statearr_44197;
})();
if(cljs.core.truth_(inst_44177)){
var statearr_44198_45140 = state_44195__$1;
(statearr_44198_45140[(1)] = (8));

} else {
var statearr_44199_45141 = state_44195__$1;
(statearr_44199_45141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (1))){
var inst_44164 = cljs.core.vec(chs);
var inst_44165 = inst_44164;
var state_44195__$1 = (function (){var statearr_44200 = state_44195;
(statearr_44200[(10)] = inst_44165);

return statearr_44200;
})();
var statearr_44201_45142 = state_44195__$1;
(statearr_44201_45142[(2)] = null);

(statearr_44201_45142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (4))){
var inst_44165 = (state_44195[(10)]);
var state_44195__$1 = state_44195;
return cljs.core.async.ioc_alts_BANG_(state_44195__$1,(7),inst_44165);
} else {
if((state_val_44196 === (6))){
var inst_44191 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
var statearr_44202_45143 = state_44195__$1;
(statearr_44202_45143[(2)] = inst_44191);

(statearr_44202_45143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (3))){
var inst_44193 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44195__$1,inst_44193);
} else {
if((state_val_44196 === (2))){
var inst_44165 = (state_44195[(10)]);
var inst_44167 = cljs.core.count(inst_44165);
var inst_44168 = (inst_44167 > (0));
var state_44195__$1 = state_44195;
if(cljs.core.truth_(inst_44168)){
var statearr_44204_45144 = state_44195__$1;
(statearr_44204_45144[(1)] = (4));

} else {
var statearr_44205_45145 = state_44195__$1;
(statearr_44205_45145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (11))){
var inst_44165 = (state_44195[(10)]);
var inst_44184 = (state_44195[(2)]);
var tmp44203 = inst_44165;
var inst_44165__$1 = tmp44203;
var state_44195__$1 = (function (){var statearr_44206 = state_44195;
(statearr_44206[(11)] = inst_44184);

(statearr_44206[(10)] = inst_44165__$1);

return statearr_44206;
})();
var statearr_44207_45146 = state_44195__$1;
(statearr_44207_45146[(2)] = null);

(statearr_44207_45146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (9))){
var inst_44175 = (state_44195[(7)]);
var state_44195__$1 = state_44195;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44195__$1,(11),out,inst_44175);
} else {
if((state_val_44196 === (5))){
var inst_44189 = cljs.core.async.close_BANG_(out);
var state_44195__$1 = state_44195;
var statearr_44208_45147 = state_44195__$1;
(statearr_44208_45147[(2)] = inst_44189);

(statearr_44208_45147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (10))){
var inst_44187 = (state_44195[(2)]);
var state_44195__$1 = state_44195;
var statearr_44209_45148 = state_44195__$1;
(statearr_44209_45148[(2)] = inst_44187);

(statearr_44209_45148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44196 === (8))){
var inst_44175 = (state_44195[(7)]);
var inst_44174 = (state_44195[(8)]);
var inst_44176 = (state_44195[(9)]);
var inst_44165 = (state_44195[(10)]);
var inst_44179 = (function (){var cs = inst_44165;
var vec__44170 = inst_44174;
var v = inst_44175;
var c = inst_44176;
return (function (p1__44161_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44161_SHARP_);
});
})();
var inst_44180 = cljs.core.filterv(inst_44179,inst_44165);
var inst_44165__$1 = inst_44180;
var state_44195__$1 = (function (){var statearr_44210 = state_44195;
(statearr_44210[(10)] = inst_44165__$1);

return statearr_44210;
})();
var statearr_44211_45149 = state_44195__$1;
(statearr_44211_45149[(2)] = null);

(statearr_44211_45149[(1)] = (2));


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
var statearr_44212 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44212[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44212[(1)] = (1));

return statearr_44212;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44195){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44195);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44213){var ex__42714__auto__ = e44213;
var statearr_44214_45150 = state_44195;
(statearr_44214_45150[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44195[(4)]))){
var statearr_44215_45151 = state_44195;
(statearr_44215_45151[(1)] = cljs.core.first((state_44195[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45152 = state_44195;
state_44195 = G__45152;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44195){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44216 = f__42850__auto__();
(statearr_44216[(6)] = c__42849__auto___45135);

return statearr_44216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
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
var G__44218 = arguments.length;
switch (G__44218) {
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
var c__42849__auto___45157 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44242){
var state_val_44243 = (state_44242[(1)]);
if((state_val_44243 === (7))){
var inst_44224 = (state_44242[(7)]);
var inst_44224__$1 = (state_44242[(2)]);
var inst_44225 = (inst_44224__$1 == null);
var inst_44226 = cljs.core.not(inst_44225);
var state_44242__$1 = (function (){var statearr_44244 = state_44242;
(statearr_44244[(7)] = inst_44224__$1);

return statearr_44244;
})();
if(inst_44226){
var statearr_44245_45158 = state_44242__$1;
(statearr_44245_45158[(1)] = (8));

} else {
var statearr_44246_45159 = state_44242__$1;
(statearr_44246_45159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (1))){
var inst_44219 = (0);
var state_44242__$1 = (function (){var statearr_44247 = state_44242;
(statearr_44247[(8)] = inst_44219);

return statearr_44247;
})();
var statearr_44248_45160 = state_44242__$1;
(statearr_44248_45160[(2)] = null);

(statearr_44248_45160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (4))){
var state_44242__$1 = state_44242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44242__$1,(7),ch);
} else {
if((state_val_44243 === (6))){
var inst_44237 = (state_44242[(2)]);
var state_44242__$1 = state_44242;
var statearr_44249_45161 = state_44242__$1;
(statearr_44249_45161[(2)] = inst_44237);

(statearr_44249_45161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (3))){
var inst_44239 = (state_44242[(2)]);
var inst_44240 = cljs.core.async.close_BANG_(out);
var state_44242__$1 = (function (){var statearr_44250 = state_44242;
(statearr_44250[(9)] = inst_44239);

return statearr_44250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44242__$1,inst_44240);
} else {
if((state_val_44243 === (2))){
var inst_44219 = (state_44242[(8)]);
var inst_44221 = (inst_44219 < n);
var state_44242__$1 = state_44242;
if(cljs.core.truth_(inst_44221)){
var statearr_44251_45162 = state_44242__$1;
(statearr_44251_45162[(1)] = (4));

} else {
var statearr_44252_45163 = state_44242__$1;
(statearr_44252_45163[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (11))){
var inst_44219 = (state_44242[(8)]);
var inst_44229 = (state_44242[(2)]);
var inst_44230 = (inst_44219 + (1));
var inst_44219__$1 = inst_44230;
var state_44242__$1 = (function (){var statearr_44253 = state_44242;
(statearr_44253[(10)] = inst_44229);

(statearr_44253[(8)] = inst_44219__$1);

return statearr_44253;
})();
var statearr_44254_45164 = state_44242__$1;
(statearr_44254_45164[(2)] = null);

(statearr_44254_45164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (9))){
var state_44242__$1 = state_44242;
var statearr_44255_45165 = state_44242__$1;
(statearr_44255_45165[(2)] = null);

(statearr_44255_45165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (5))){
var state_44242__$1 = state_44242;
var statearr_44256_45166 = state_44242__$1;
(statearr_44256_45166[(2)] = null);

(statearr_44256_45166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (10))){
var inst_44234 = (state_44242[(2)]);
var state_44242__$1 = state_44242;
var statearr_44257_45167 = state_44242__$1;
(statearr_44257_45167[(2)] = inst_44234);

(statearr_44257_45167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44243 === (8))){
var inst_44224 = (state_44242[(7)]);
var state_44242__$1 = state_44242;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44242__$1,(11),out,inst_44224);
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
var statearr_44258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44258[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44258[(1)] = (1));

return statearr_44258;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44242){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44242);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44259){var ex__42714__auto__ = e44259;
var statearr_44260_45169 = state_44242;
(statearr_44260_45169[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44242[(4)]))){
var statearr_44261_45170 = state_44242;
(statearr_44261_45170[(1)] = cljs.core.first((state_44242[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45171 = state_44242;
state_44242 = G__45171;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44242){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44262 = f__42850__auto__();
(statearr_44262[(6)] = c__42849__auto___45157);

return statearr_44262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44264 = (function (f,ch,meta44265){
this.f = f;
this.ch = ch;
this.meta44265 = meta44265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44266,meta44265__$1){
var self__ = this;
var _44266__$1 = this;
return (new cljs.core.async.t_cljs$core$async44264(self__.f,self__.ch,meta44265__$1));
}));

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44266){
var self__ = this;
var _44266__$1 = this;
return self__.meta44265;
}));

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44267 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44267 = (function (f,ch,meta44265,_,fn1,meta44268){
this.f = f;
this.ch = ch;
this.meta44265 = meta44265;
this._ = _;
this.fn1 = fn1;
this.meta44268 = meta44268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44269,meta44268__$1){
var self__ = this;
var _44269__$1 = this;
return (new cljs.core.async.t_cljs$core$async44267(self__.f,self__.ch,self__.meta44265,self__._,self__.fn1,meta44268__$1));
}));

(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44269){
var self__ = this;
var _44269__$1 = this;
return self__.meta44268;
}));

(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44263_SHARP_){
var G__44270 = (((p1__44263_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44263_SHARP_) : self__.f.call(null,p1__44263_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44270) : f1.call(null,G__44270));
});
}));

(cljs.core.async.t_cljs$core$async44267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44265","meta44265",2045435880,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44264","cljs.core.async/t_cljs$core$async44264",1461540841,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44268","meta44268",-1688615741,null)], null);
}));

(cljs.core.async.t_cljs$core$async44267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44267");

(cljs.core.async.t_cljs$core$async44267.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44267.
 */
cljs.core.async.__GT_t_cljs$core$async44267 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44267(f__$1,ch__$1,meta44265__$1,___$2,fn1__$1,meta44268){
return (new cljs.core.async.t_cljs$core$async44267(f__$1,ch__$1,meta44265__$1,___$2,fn1__$1,meta44268));
});

}

return (new cljs.core.async.t_cljs$core$async44267(self__.f,self__.ch,self__.meta44265,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44271 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44271) : self__.f.call(null,G__44271));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44265","meta44265",2045435880,null)], null);
}));

(cljs.core.async.t_cljs$core$async44264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44264");

(cljs.core.async.t_cljs$core$async44264.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44264.
 */
cljs.core.async.__GT_t_cljs$core$async44264 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44264(f__$1,ch__$1,meta44265){
return (new cljs.core.async.t_cljs$core$async44264(f__$1,ch__$1,meta44265));
});

}

return (new cljs.core.async.t_cljs$core$async44264(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44272 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44272 = (function (f,ch,meta44273){
this.f = f;
this.ch = ch;
this.meta44273 = meta44273;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44274,meta44273__$1){
var self__ = this;
var _44274__$1 = this;
return (new cljs.core.async.t_cljs$core$async44272(self__.f,self__.ch,meta44273__$1));
}));

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44274){
var self__ = this;
var _44274__$1 = this;
return self__.meta44273;
}));

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44272.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44272.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44273","meta44273",-956715931,null)], null);
}));

(cljs.core.async.t_cljs$core$async44272.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44272.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44272");

(cljs.core.async.t_cljs$core$async44272.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44272");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44272.
 */
cljs.core.async.__GT_t_cljs$core$async44272 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44272(f__$1,ch__$1,meta44273){
return (new cljs.core.async.t_cljs$core$async44272(f__$1,ch__$1,meta44273));
});

}

return (new cljs.core.async.t_cljs$core$async44272(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44275 = (function (p,ch,meta44276){
this.p = p;
this.ch = ch;
this.meta44276 = meta44276;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44277,meta44276__$1){
var self__ = this;
var _44277__$1 = this;
return (new cljs.core.async.t_cljs$core$async44275(self__.p,self__.ch,meta44276__$1));
}));

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44277){
var self__ = this;
var _44277__$1 = this;
return self__.meta44276;
}));

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44275.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44276","meta44276",1885402983,null)], null);
}));

(cljs.core.async.t_cljs$core$async44275.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44275.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44275");

(cljs.core.async.t_cljs$core$async44275.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44275");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44275.
 */
cljs.core.async.__GT_t_cljs$core$async44275 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44275(p__$1,ch__$1,meta44276){
return (new cljs.core.async.t_cljs$core$async44275(p__$1,ch__$1,meta44276));
});

}

return (new cljs.core.async.t_cljs$core$async44275(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44279 = arguments.length;
switch (G__44279) {
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
var c__42849__auto___45183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44300){
var state_val_44301 = (state_44300[(1)]);
if((state_val_44301 === (7))){
var inst_44296 = (state_44300[(2)]);
var state_44300__$1 = state_44300;
var statearr_44302_45184 = state_44300__$1;
(statearr_44302_45184[(2)] = inst_44296);

(statearr_44302_45184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (1))){
var state_44300__$1 = state_44300;
var statearr_44303_45185 = state_44300__$1;
(statearr_44303_45185[(2)] = null);

(statearr_44303_45185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (4))){
var inst_44282 = (state_44300[(7)]);
var inst_44282__$1 = (state_44300[(2)]);
var inst_44283 = (inst_44282__$1 == null);
var state_44300__$1 = (function (){var statearr_44304 = state_44300;
(statearr_44304[(7)] = inst_44282__$1);

return statearr_44304;
})();
if(cljs.core.truth_(inst_44283)){
var statearr_44305_45186 = state_44300__$1;
(statearr_44305_45186[(1)] = (5));

} else {
var statearr_44306_45187 = state_44300__$1;
(statearr_44306_45187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (6))){
var inst_44282 = (state_44300[(7)]);
var inst_44287 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44282) : p.call(null,inst_44282));
var state_44300__$1 = state_44300;
if(cljs.core.truth_(inst_44287)){
var statearr_44307_45188 = state_44300__$1;
(statearr_44307_45188[(1)] = (8));

} else {
var statearr_44308_45189 = state_44300__$1;
(statearr_44308_45189[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (3))){
var inst_44298 = (state_44300[(2)]);
var state_44300__$1 = state_44300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44300__$1,inst_44298);
} else {
if((state_val_44301 === (2))){
var state_44300__$1 = state_44300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44300__$1,(4),ch);
} else {
if((state_val_44301 === (11))){
var inst_44290 = (state_44300[(2)]);
var state_44300__$1 = state_44300;
var statearr_44309_45190 = state_44300__$1;
(statearr_44309_45190[(2)] = inst_44290);

(statearr_44309_45190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (9))){
var state_44300__$1 = state_44300;
var statearr_44310_45191 = state_44300__$1;
(statearr_44310_45191[(2)] = null);

(statearr_44310_45191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (5))){
var inst_44285 = cljs.core.async.close_BANG_(out);
var state_44300__$1 = state_44300;
var statearr_44311_45192 = state_44300__$1;
(statearr_44311_45192[(2)] = inst_44285);

(statearr_44311_45192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (10))){
var inst_44293 = (state_44300[(2)]);
var state_44300__$1 = (function (){var statearr_44312 = state_44300;
(statearr_44312[(8)] = inst_44293);

return statearr_44312;
})();
var statearr_44313_45193 = state_44300__$1;
(statearr_44313_45193[(2)] = null);

(statearr_44313_45193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44301 === (8))){
var inst_44282 = (state_44300[(7)]);
var state_44300__$1 = state_44300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44300__$1,(11),out,inst_44282);
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
var statearr_44314 = [null,null,null,null,null,null,null,null,null];
(statearr_44314[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44314[(1)] = (1));

return statearr_44314;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44300){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44300);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44315){var ex__42714__auto__ = e44315;
var statearr_44316_45194 = state_44300;
(statearr_44316_45194[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44300[(4)]))){
var statearr_44317_45195 = state_44300;
(statearr_44317_45195[(1)] = cljs.core.first((state_44300[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45196 = state_44300;
state_44300 = G__45196;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44318 = f__42850__auto__();
(statearr_44318[(6)] = c__42849__auto___45183);

return statearr_44318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44320 = arguments.length;
switch (G__44320) {
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
var c__42849__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44382){
var state_val_44383 = (state_44382[(1)]);
if((state_val_44383 === (7))){
var inst_44378 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
var statearr_44384_45198 = state_44382__$1;
(statearr_44384_45198[(2)] = inst_44378);

(statearr_44384_45198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (20))){
var inst_44348 = (state_44382[(7)]);
var inst_44359 = (state_44382[(2)]);
var inst_44360 = cljs.core.next(inst_44348);
var inst_44334 = inst_44360;
var inst_44335 = null;
var inst_44336 = (0);
var inst_44337 = (0);
var state_44382__$1 = (function (){var statearr_44385 = state_44382;
(statearr_44385[(8)] = inst_44334);

(statearr_44385[(9)] = inst_44336);

(statearr_44385[(10)] = inst_44335);

(statearr_44385[(11)] = inst_44359);

(statearr_44385[(12)] = inst_44337);

return statearr_44385;
})();
var statearr_44386_45199 = state_44382__$1;
(statearr_44386_45199[(2)] = null);

(statearr_44386_45199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (1))){
var state_44382__$1 = state_44382;
var statearr_44387_45200 = state_44382__$1;
(statearr_44387_45200[(2)] = null);

(statearr_44387_45200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (4))){
var inst_44323 = (state_44382[(13)]);
var inst_44323__$1 = (state_44382[(2)]);
var inst_44324 = (inst_44323__$1 == null);
var state_44382__$1 = (function (){var statearr_44388 = state_44382;
(statearr_44388[(13)] = inst_44323__$1);

return statearr_44388;
})();
if(cljs.core.truth_(inst_44324)){
var statearr_44389_45201 = state_44382__$1;
(statearr_44389_45201[(1)] = (5));

} else {
var statearr_44390_45202 = state_44382__$1;
(statearr_44390_45202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (15))){
var state_44382__$1 = state_44382;
var statearr_44394_45203 = state_44382__$1;
(statearr_44394_45203[(2)] = null);

(statearr_44394_45203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (21))){
var state_44382__$1 = state_44382;
var statearr_44395_45204 = state_44382__$1;
(statearr_44395_45204[(2)] = null);

(statearr_44395_45204[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (13))){
var inst_44334 = (state_44382[(8)]);
var inst_44336 = (state_44382[(9)]);
var inst_44335 = (state_44382[(10)]);
var inst_44337 = (state_44382[(12)]);
var inst_44344 = (state_44382[(2)]);
var inst_44345 = (inst_44337 + (1));
var tmp44391 = inst_44334;
var tmp44392 = inst_44336;
var tmp44393 = inst_44335;
var inst_44334__$1 = tmp44391;
var inst_44335__$1 = tmp44393;
var inst_44336__$1 = tmp44392;
var inst_44337__$1 = inst_44345;
var state_44382__$1 = (function (){var statearr_44396 = state_44382;
(statearr_44396[(8)] = inst_44334__$1);

(statearr_44396[(9)] = inst_44336__$1);

(statearr_44396[(10)] = inst_44335__$1);

(statearr_44396[(12)] = inst_44337__$1);

(statearr_44396[(14)] = inst_44344);

return statearr_44396;
})();
var statearr_44397_45205 = state_44382__$1;
(statearr_44397_45205[(2)] = null);

(statearr_44397_45205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (22))){
var state_44382__$1 = state_44382;
var statearr_44398_45206 = state_44382__$1;
(statearr_44398_45206[(2)] = null);

(statearr_44398_45206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (6))){
var inst_44323 = (state_44382[(13)]);
var inst_44332 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44323) : f.call(null,inst_44323));
var inst_44333 = cljs.core.seq(inst_44332);
var inst_44334 = inst_44333;
var inst_44335 = null;
var inst_44336 = (0);
var inst_44337 = (0);
var state_44382__$1 = (function (){var statearr_44399 = state_44382;
(statearr_44399[(8)] = inst_44334);

(statearr_44399[(9)] = inst_44336);

(statearr_44399[(10)] = inst_44335);

(statearr_44399[(12)] = inst_44337);

return statearr_44399;
})();
var statearr_44400_45207 = state_44382__$1;
(statearr_44400_45207[(2)] = null);

(statearr_44400_45207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (17))){
var inst_44348 = (state_44382[(7)]);
var inst_44352 = cljs.core.chunk_first(inst_44348);
var inst_44353 = cljs.core.chunk_rest(inst_44348);
var inst_44354 = cljs.core.count(inst_44352);
var inst_44334 = inst_44353;
var inst_44335 = inst_44352;
var inst_44336 = inst_44354;
var inst_44337 = (0);
var state_44382__$1 = (function (){var statearr_44401 = state_44382;
(statearr_44401[(8)] = inst_44334);

(statearr_44401[(9)] = inst_44336);

(statearr_44401[(10)] = inst_44335);

(statearr_44401[(12)] = inst_44337);

return statearr_44401;
})();
var statearr_44402_45211 = state_44382__$1;
(statearr_44402_45211[(2)] = null);

(statearr_44402_45211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (3))){
var inst_44380 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44382__$1,inst_44380);
} else {
if((state_val_44383 === (12))){
var inst_44368 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
var statearr_44403_45216 = state_44382__$1;
(statearr_44403_45216[(2)] = inst_44368);

(statearr_44403_45216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (2))){
var state_44382__$1 = state_44382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44382__$1,(4),in$);
} else {
if((state_val_44383 === (23))){
var inst_44376 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
var statearr_44404_45217 = state_44382__$1;
(statearr_44404_45217[(2)] = inst_44376);

(statearr_44404_45217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (19))){
var inst_44363 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
var statearr_44405_45221 = state_44382__$1;
(statearr_44405_45221[(2)] = inst_44363);

(statearr_44405_45221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (11))){
var inst_44334 = (state_44382[(8)]);
var inst_44348 = (state_44382[(7)]);
var inst_44348__$1 = cljs.core.seq(inst_44334);
var state_44382__$1 = (function (){var statearr_44406 = state_44382;
(statearr_44406[(7)] = inst_44348__$1);

return statearr_44406;
})();
if(inst_44348__$1){
var statearr_44407_45222 = state_44382__$1;
(statearr_44407_45222[(1)] = (14));

} else {
var statearr_44408_45223 = state_44382__$1;
(statearr_44408_45223[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (9))){
var inst_44370 = (state_44382[(2)]);
var inst_44371 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44382__$1 = (function (){var statearr_44409 = state_44382;
(statearr_44409[(15)] = inst_44370);

return statearr_44409;
})();
if(cljs.core.truth_(inst_44371)){
var statearr_44410_45224 = state_44382__$1;
(statearr_44410_45224[(1)] = (21));

} else {
var statearr_44411_45225 = state_44382__$1;
(statearr_44411_45225[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (5))){
var inst_44326 = cljs.core.async.close_BANG_(out);
var state_44382__$1 = state_44382;
var statearr_44412_45229 = state_44382__$1;
(statearr_44412_45229[(2)] = inst_44326);

(statearr_44412_45229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (14))){
var inst_44348 = (state_44382[(7)]);
var inst_44350 = cljs.core.chunked_seq_QMARK_(inst_44348);
var state_44382__$1 = state_44382;
if(inst_44350){
var statearr_44413_45230 = state_44382__$1;
(statearr_44413_45230[(1)] = (17));

} else {
var statearr_44414_45231 = state_44382__$1;
(statearr_44414_45231[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (16))){
var inst_44366 = (state_44382[(2)]);
var state_44382__$1 = state_44382;
var statearr_44415_45232 = state_44382__$1;
(statearr_44415_45232[(2)] = inst_44366);

(statearr_44415_45232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44383 === (10))){
var inst_44335 = (state_44382[(10)]);
var inst_44337 = (state_44382[(12)]);
var inst_44342 = cljs.core._nth(inst_44335,inst_44337);
var state_44382__$1 = state_44382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44382__$1,(13),out,inst_44342);
} else {
if((state_val_44383 === (18))){
var inst_44348 = (state_44382[(7)]);
var inst_44357 = cljs.core.first(inst_44348);
var state_44382__$1 = state_44382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44382__$1,(20),out,inst_44357);
} else {
if((state_val_44383 === (8))){
var inst_44336 = (state_44382[(9)]);
var inst_44337 = (state_44382[(12)]);
var inst_44339 = (inst_44337 < inst_44336);
var inst_44340 = inst_44339;
var state_44382__$1 = state_44382;
if(cljs.core.truth_(inst_44340)){
var statearr_44416_45236 = state_44382__$1;
(statearr_44416_45236[(1)] = (10));

} else {
var statearr_44417_45237 = state_44382__$1;
(statearr_44417_45237[(1)] = (11));

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
var statearr_44418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44418[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__);

(statearr_44418[(1)] = (1));

return statearr_44418;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1 = (function (state_44382){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44382);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44419){var ex__42714__auto__ = e44419;
var statearr_44420_45241 = state_44382;
(statearr_44420_45241[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44382[(4)]))){
var statearr_44421_45242 = state_44382;
(statearr_44421_45242[(1)] = cljs.core.first((state_44382[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45243 = state_44382;
state_44382 = G__45243;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__ = function(state_44382){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1.call(this,state_44382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42711__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44422 = f__42850__auto__();
(statearr_44422[(6)] = c__42849__auto__);

return statearr_44422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));

return c__42849__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44424 = arguments.length;
switch (G__44424) {
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
var G__44426 = arguments.length;
switch (G__44426) {
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
var G__44428 = arguments.length;
switch (G__44428) {
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
var c__42849__auto___45257 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44452){
var state_val_44453 = (state_44452[(1)]);
if((state_val_44453 === (7))){
var inst_44447 = (state_44452[(2)]);
var state_44452__$1 = state_44452;
var statearr_44454_45258 = state_44452__$1;
(statearr_44454_45258[(2)] = inst_44447);

(statearr_44454_45258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (1))){
var inst_44429 = null;
var state_44452__$1 = (function (){var statearr_44455 = state_44452;
(statearr_44455[(7)] = inst_44429);

return statearr_44455;
})();
var statearr_44456_45265 = state_44452__$1;
(statearr_44456_45265[(2)] = null);

(statearr_44456_45265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (4))){
var inst_44432 = (state_44452[(8)]);
var inst_44432__$1 = (state_44452[(2)]);
var inst_44433 = (inst_44432__$1 == null);
var inst_44434 = cljs.core.not(inst_44433);
var state_44452__$1 = (function (){var statearr_44457 = state_44452;
(statearr_44457[(8)] = inst_44432__$1);

return statearr_44457;
})();
if(inst_44434){
var statearr_44458_45266 = state_44452__$1;
(statearr_44458_45266[(1)] = (5));

} else {
var statearr_44459_45267 = state_44452__$1;
(statearr_44459_45267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (6))){
var state_44452__$1 = state_44452;
var statearr_44460_45268 = state_44452__$1;
(statearr_44460_45268[(2)] = null);

(statearr_44460_45268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (3))){
var inst_44449 = (state_44452[(2)]);
var inst_44450 = cljs.core.async.close_BANG_(out);
var state_44452__$1 = (function (){var statearr_44461 = state_44452;
(statearr_44461[(9)] = inst_44449);

return statearr_44461;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44452__$1,inst_44450);
} else {
if((state_val_44453 === (2))){
var state_44452__$1 = state_44452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44452__$1,(4),ch);
} else {
if((state_val_44453 === (11))){
var inst_44432 = (state_44452[(8)]);
var inst_44441 = (state_44452[(2)]);
var inst_44429 = inst_44432;
var state_44452__$1 = (function (){var statearr_44462 = state_44452;
(statearr_44462[(7)] = inst_44429);

(statearr_44462[(10)] = inst_44441);

return statearr_44462;
})();
var statearr_44463_45269 = state_44452__$1;
(statearr_44463_45269[(2)] = null);

(statearr_44463_45269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (9))){
var inst_44432 = (state_44452[(8)]);
var state_44452__$1 = state_44452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44452__$1,(11),out,inst_44432);
} else {
if((state_val_44453 === (5))){
var inst_44429 = (state_44452[(7)]);
var inst_44432 = (state_44452[(8)]);
var inst_44436 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44432,inst_44429);
var state_44452__$1 = state_44452;
if(inst_44436){
var statearr_44465_45270 = state_44452__$1;
(statearr_44465_45270[(1)] = (8));

} else {
var statearr_44466_45271 = state_44452__$1;
(statearr_44466_45271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (10))){
var inst_44444 = (state_44452[(2)]);
var state_44452__$1 = state_44452;
var statearr_44467_45272 = state_44452__$1;
(statearr_44467_45272[(2)] = inst_44444);

(statearr_44467_45272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44453 === (8))){
var inst_44429 = (state_44452[(7)]);
var tmp44464 = inst_44429;
var inst_44429__$1 = tmp44464;
var state_44452__$1 = (function (){var statearr_44468 = state_44452;
(statearr_44468[(7)] = inst_44429__$1);

return statearr_44468;
})();
var statearr_44469_45273 = state_44452__$1;
(statearr_44469_45273[(2)] = null);

(statearr_44469_45273[(1)] = (2));


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
var statearr_44470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44470[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44470[(1)] = (1));

return statearr_44470;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44452){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44452);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44471){var ex__42714__auto__ = e44471;
var statearr_44472_45274 = state_44452;
(statearr_44472_45274[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44452[(4)]))){
var statearr_44473_45281 = state_44452;
(statearr_44473_45281[(1)] = cljs.core.first((state_44452[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45282 = state_44452;
state_44452 = G__45282;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44474 = f__42850__auto__();
(statearr_44474[(6)] = c__42849__auto___45257);

return statearr_44474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44476 = arguments.length;
switch (G__44476) {
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
var c__42849__auto___45284 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44514){
var state_val_44515 = (state_44514[(1)]);
if((state_val_44515 === (7))){
var inst_44510 = (state_44514[(2)]);
var state_44514__$1 = state_44514;
var statearr_44516_45285 = state_44514__$1;
(statearr_44516_45285[(2)] = inst_44510);

(statearr_44516_45285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (1))){
var inst_44477 = (new Array(n));
var inst_44478 = inst_44477;
var inst_44479 = (0);
var state_44514__$1 = (function (){var statearr_44517 = state_44514;
(statearr_44517[(7)] = inst_44479);

(statearr_44517[(8)] = inst_44478);

return statearr_44517;
})();
var statearr_44518_45286 = state_44514__$1;
(statearr_44518_45286[(2)] = null);

(statearr_44518_45286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (4))){
var inst_44482 = (state_44514[(9)]);
var inst_44482__$1 = (state_44514[(2)]);
var inst_44483 = (inst_44482__$1 == null);
var inst_44484 = cljs.core.not(inst_44483);
var state_44514__$1 = (function (){var statearr_44519 = state_44514;
(statearr_44519[(9)] = inst_44482__$1);

return statearr_44519;
})();
if(inst_44484){
var statearr_44520_45287 = state_44514__$1;
(statearr_44520_45287[(1)] = (5));

} else {
var statearr_44521_45288 = state_44514__$1;
(statearr_44521_45288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (15))){
var inst_44504 = (state_44514[(2)]);
var state_44514__$1 = state_44514;
var statearr_44522_45289 = state_44514__$1;
(statearr_44522_45289[(2)] = inst_44504);

(statearr_44522_45289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (13))){
var state_44514__$1 = state_44514;
var statearr_44523_45290 = state_44514__$1;
(statearr_44523_45290[(2)] = null);

(statearr_44523_45290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (6))){
var inst_44479 = (state_44514[(7)]);
var inst_44500 = (inst_44479 > (0));
var state_44514__$1 = state_44514;
if(cljs.core.truth_(inst_44500)){
var statearr_44524_45291 = state_44514__$1;
(statearr_44524_45291[(1)] = (12));

} else {
var statearr_44525_45292 = state_44514__$1;
(statearr_44525_45292[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (3))){
var inst_44512 = (state_44514[(2)]);
var state_44514__$1 = state_44514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44514__$1,inst_44512);
} else {
if((state_val_44515 === (12))){
var inst_44478 = (state_44514[(8)]);
var inst_44502 = cljs.core.vec(inst_44478);
var state_44514__$1 = state_44514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44514__$1,(15),out,inst_44502);
} else {
if((state_val_44515 === (2))){
var state_44514__$1 = state_44514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44514__$1,(4),ch);
} else {
if((state_val_44515 === (11))){
var inst_44494 = (state_44514[(2)]);
var inst_44495 = (new Array(n));
var inst_44478 = inst_44495;
var inst_44479 = (0);
var state_44514__$1 = (function (){var statearr_44526 = state_44514;
(statearr_44526[(7)] = inst_44479);

(statearr_44526[(10)] = inst_44494);

(statearr_44526[(8)] = inst_44478);

return statearr_44526;
})();
var statearr_44527_45299 = state_44514__$1;
(statearr_44527_45299[(2)] = null);

(statearr_44527_45299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (9))){
var inst_44478 = (state_44514[(8)]);
var inst_44492 = cljs.core.vec(inst_44478);
var state_44514__$1 = state_44514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44514__$1,(11),out,inst_44492);
} else {
if((state_val_44515 === (5))){
var inst_44479 = (state_44514[(7)]);
var inst_44482 = (state_44514[(9)]);
var inst_44487 = (state_44514[(11)]);
var inst_44478 = (state_44514[(8)]);
var inst_44486 = (inst_44478[inst_44479] = inst_44482);
var inst_44487__$1 = (inst_44479 + (1));
var inst_44488 = (inst_44487__$1 < n);
var state_44514__$1 = (function (){var statearr_44528 = state_44514;
(statearr_44528[(12)] = inst_44486);

(statearr_44528[(11)] = inst_44487__$1);

return statearr_44528;
})();
if(cljs.core.truth_(inst_44488)){
var statearr_44529_45300 = state_44514__$1;
(statearr_44529_45300[(1)] = (8));

} else {
var statearr_44530_45301 = state_44514__$1;
(statearr_44530_45301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (14))){
var inst_44507 = (state_44514[(2)]);
var inst_44508 = cljs.core.async.close_BANG_(out);
var state_44514__$1 = (function (){var statearr_44532 = state_44514;
(statearr_44532[(13)] = inst_44507);

return statearr_44532;
})();
var statearr_44533_45302 = state_44514__$1;
(statearr_44533_45302[(2)] = inst_44508);

(statearr_44533_45302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (10))){
var inst_44498 = (state_44514[(2)]);
var state_44514__$1 = state_44514;
var statearr_44534_45303 = state_44514__$1;
(statearr_44534_45303[(2)] = inst_44498);

(statearr_44534_45303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44515 === (8))){
var inst_44487 = (state_44514[(11)]);
var inst_44478 = (state_44514[(8)]);
var tmp44531 = inst_44478;
var inst_44478__$1 = tmp44531;
var inst_44479 = inst_44487;
var state_44514__$1 = (function (){var statearr_44535 = state_44514;
(statearr_44535[(7)] = inst_44479);

(statearr_44535[(8)] = inst_44478__$1);

return statearr_44535;
})();
var statearr_44536_45304 = state_44514__$1;
(statearr_44536_45304[(2)] = null);

(statearr_44536_45304[(1)] = (2));


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
var statearr_44537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44537[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44537[(1)] = (1));

return statearr_44537;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44514){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44514);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44538){var ex__42714__auto__ = e44538;
var statearr_44539_45305 = state_44514;
(statearr_44539_45305[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44514[(4)]))){
var statearr_44540_45306 = state_44514;
(statearr_44540_45306[(1)] = cljs.core.first((state_44514[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45307 = state_44514;
state_44514 = G__45307;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44541 = f__42850__auto__();
(statearr_44541[(6)] = c__42849__auto___45284);

return statearr_44541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44543 = arguments.length;
switch (G__44543) {
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
var c__42849__auto___45315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42850__auto__ = (function (){var switch__42710__auto__ = (function (state_44585){
var state_val_44586 = (state_44585[(1)]);
if((state_val_44586 === (7))){
var inst_44581 = (state_44585[(2)]);
var state_44585__$1 = state_44585;
var statearr_44587_45316 = state_44585__$1;
(statearr_44587_45316[(2)] = inst_44581);

(statearr_44587_45316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (1))){
var inst_44544 = [];
var inst_44545 = inst_44544;
var inst_44546 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44585__$1 = (function (){var statearr_44588 = state_44585;
(statearr_44588[(7)] = inst_44545);

(statearr_44588[(8)] = inst_44546);

return statearr_44588;
})();
var statearr_44589_45317 = state_44585__$1;
(statearr_44589_45317[(2)] = null);

(statearr_44589_45317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (4))){
var inst_44549 = (state_44585[(9)]);
var inst_44549__$1 = (state_44585[(2)]);
var inst_44550 = (inst_44549__$1 == null);
var inst_44551 = cljs.core.not(inst_44550);
var state_44585__$1 = (function (){var statearr_44590 = state_44585;
(statearr_44590[(9)] = inst_44549__$1);

return statearr_44590;
})();
if(inst_44551){
var statearr_44591_45318 = state_44585__$1;
(statearr_44591_45318[(1)] = (5));

} else {
var statearr_44592_45319 = state_44585__$1;
(statearr_44592_45319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (15))){
var inst_44575 = (state_44585[(2)]);
var state_44585__$1 = state_44585;
var statearr_44593_45320 = state_44585__$1;
(statearr_44593_45320[(2)] = inst_44575);

(statearr_44593_45320[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (13))){
var state_44585__$1 = state_44585;
var statearr_44594_45321 = state_44585__$1;
(statearr_44594_45321[(2)] = null);

(statearr_44594_45321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (6))){
var inst_44545 = (state_44585[(7)]);
var inst_44570 = inst_44545.length;
var inst_44571 = (inst_44570 > (0));
var state_44585__$1 = state_44585;
if(cljs.core.truth_(inst_44571)){
var statearr_44595_45322 = state_44585__$1;
(statearr_44595_45322[(1)] = (12));

} else {
var statearr_44596_45323 = state_44585__$1;
(statearr_44596_45323[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (3))){
var inst_44583 = (state_44585[(2)]);
var state_44585__$1 = state_44585;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44585__$1,inst_44583);
} else {
if((state_val_44586 === (12))){
var inst_44545 = (state_44585[(7)]);
var inst_44573 = cljs.core.vec(inst_44545);
var state_44585__$1 = state_44585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44585__$1,(15),out,inst_44573);
} else {
if((state_val_44586 === (2))){
var state_44585__$1 = state_44585;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44585__$1,(4),ch);
} else {
if((state_val_44586 === (11))){
var inst_44553 = (state_44585[(10)]);
var inst_44549 = (state_44585[(9)]);
var inst_44563 = (state_44585[(2)]);
var inst_44564 = [];
var inst_44565 = inst_44564.push(inst_44549);
var inst_44545 = inst_44564;
var inst_44546 = inst_44553;
var state_44585__$1 = (function (){var statearr_44597 = state_44585;
(statearr_44597[(11)] = inst_44563);

(statearr_44597[(7)] = inst_44545);

(statearr_44597[(8)] = inst_44546);

(statearr_44597[(12)] = inst_44565);

return statearr_44597;
})();
var statearr_44598_45324 = state_44585__$1;
(statearr_44598_45324[(2)] = null);

(statearr_44598_45324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (9))){
var inst_44545 = (state_44585[(7)]);
var inst_44561 = cljs.core.vec(inst_44545);
var state_44585__$1 = state_44585;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44585__$1,(11),out,inst_44561);
} else {
if((state_val_44586 === (5))){
var inst_44546 = (state_44585[(8)]);
var inst_44553 = (state_44585[(10)]);
var inst_44549 = (state_44585[(9)]);
var inst_44553__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44549) : f.call(null,inst_44549));
var inst_44554 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44553__$1,inst_44546);
var inst_44555 = cljs.core.keyword_identical_QMARK_(inst_44546,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44556 = ((inst_44554) || (inst_44555));
var state_44585__$1 = (function (){var statearr_44599 = state_44585;
(statearr_44599[(10)] = inst_44553__$1);

return statearr_44599;
})();
if(cljs.core.truth_(inst_44556)){
var statearr_44600_45325 = state_44585__$1;
(statearr_44600_45325[(1)] = (8));

} else {
var statearr_44601_45326 = state_44585__$1;
(statearr_44601_45326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (14))){
var inst_44578 = (state_44585[(2)]);
var inst_44579 = cljs.core.async.close_BANG_(out);
var state_44585__$1 = (function (){var statearr_44603 = state_44585;
(statearr_44603[(13)] = inst_44578);

return statearr_44603;
})();
var statearr_44604_45327 = state_44585__$1;
(statearr_44604_45327[(2)] = inst_44579);

(statearr_44604_45327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (10))){
var inst_44568 = (state_44585[(2)]);
var state_44585__$1 = state_44585;
var statearr_44605_45330 = state_44585__$1;
(statearr_44605_45330[(2)] = inst_44568);

(statearr_44605_45330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44586 === (8))){
var inst_44545 = (state_44585[(7)]);
var inst_44553 = (state_44585[(10)]);
var inst_44549 = (state_44585[(9)]);
var inst_44558 = inst_44545.push(inst_44549);
var tmp44602 = inst_44545;
var inst_44545__$1 = tmp44602;
var inst_44546 = inst_44553;
var state_44585__$1 = (function (){var statearr_44606 = state_44585;
(statearr_44606[(7)] = inst_44545__$1);

(statearr_44606[(8)] = inst_44546);

(statearr_44606[(14)] = inst_44558);

return statearr_44606;
})();
var statearr_44607_45331 = state_44585__$1;
(statearr_44607_45331[(2)] = null);

(statearr_44607_45331[(1)] = (2));


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
var statearr_44608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44608[(0)] = cljs$core$async$state_machine__42711__auto__);

(statearr_44608[(1)] = (1));

return statearr_44608;
});
var cljs$core$async$state_machine__42711__auto____1 = (function (state_44585){
while(true){
var ret_value__42712__auto__ = (function (){try{while(true){
var result__42713__auto__ = switch__42710__auto__(state_44585);
if(cljs.core.keyword_identical_QMARK_(result__42713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42713__auto__;
}
break;
}
}catch (e44609){var ex__42714__auto__ = e44609;
var statearr_44610_45332 = state_44585;
(statearr_44610_45332[(2)] = ex__42714__auto__);


if(cljs.core.seq((state_44585[(4)]))){
var statearr_44611_45333 = state_44585;
(statearr_44611_45333[(1)] = cljs.core.first((state_44585[(4)])));

} else {
throw ex__42714__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45334 = state_44585;
state_44585 = G__45334;
continue;
} else {
return ret_value__42712__auto__;
}
break;
}
});
cljs$core$async$state_machine__42711__auto__ = function(state_44585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42711__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42711__auto____1.call(this,state_44585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42711__auto____0;
cljs$core$async$state_machine__42711__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42711__auto____1;
return cljs$core$async$state_machine__42711__auto__;
})()
})();
var state__42851__auto__ = (function (){var statearr_44612 = f__42850__auto__();
(statearr_44612[(6)] = c__42849__auto___45315);

return statearr_44612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42851__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
