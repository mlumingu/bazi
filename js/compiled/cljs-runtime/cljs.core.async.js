goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__49958 = arguments.length;
switch (G__49958) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49960 = (function (f,blockable,meta49961){
this.f = f;
this.blockable = blockable;
this.meta49961 = meta49961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49962,meta49961__$1){
var self__ = this;
var _49962__$1 = this;
return (new cljs.core.async.t_cljs$core$async49960(self__.f,self__.blockable,meta49961__$1));
}));

(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49962){
var self__ = this;
var _49962__$1 = this;
return self__.meta49961;
}));

(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async49960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async49960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta49961","meta49961",-1333657725,null)], null);
}));

(cljs.core.async.t_cljs$core$async49960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49960");

(cljs.core.async.t_cljs$core$async49960.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async49960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49960.
 */
cljs.core.async.__GT_t_cljs$core$async49960 = (function cljs$core$async$__GT_t_cljs$core$async49960(f__$1,blockable__$1,meta49961){
return (new cljs.core.async.t_cljs$core$async49960(f__$1,blockable__$1,meta49961));
});

}

return (new cljs.core.async.t_cljs$core$async49960(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49998 = arguments.length;
switch (G__49998) {
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
var G__50002 = arguments.length;
switch (G__50002) {
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
var G__50006 = arguments.length;
switch (G__50006) {
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
var val_52109 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52109) : fn1.call(null,val_52109));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52109) : fn1.call(null,val_52109));
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
var G__50010 = arguments.length;
switch (G__50010) {
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
var n__4613__auto___52120 = n;
var x_52121 = (0);
while(true){
if((x_52121 < n__4613__auto___52120)){
(a[x_52121] = x_52121);

var G__52123 = (x_52121 + (1));
x_52121 = G__52123;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50017 = (function (flag,meta50018){
this.flag = flag;
this.meta50018 = meta50018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50019,meta50018__$1){
var self__ = this;
var _50019__$1 = this;
return (new cljs.core.async.t_cljs$core$async50017(self__.flag,meta50018__$1));
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50019){
var self__ = this;
var _50019__$1 = this;
return self__.meta50018;
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50018","meta50018",-345175046,null)], null);
}));

(cljs.core.async.t_cljs$core$async50017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50017");

(cljs.core.async.t_cljs$core$async50017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50017.
 */
cljs.core.async.__GT_t_cljs$core$async50017 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async50017(flag__$1,meta50018){
return (new cljs.core.async.t_cljs$core$async50017(flag__$1,meta50018));
});

}

return (new cljs.core.async.t_cljs$core$async50017(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50024 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50024 = (function (flag,cb,meta50025){
this.flag = flag;
this.cb = cb;
this.meta50025 = meta50025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50026,meta50025__$1){
var self__ = this;
var _50026__$1 = this;
return (new cljs.core.async.t_cljs$core$async50024(self__.flag,self__.cb,meta50025__$1));
}));

(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50026){
var self__ = this;
var _50026__$1 = this;
return self__.meta50025;
}));

(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50025","meta50025",-2056102081,null)], null);
}));

(cljs.core.async.t_cljs$core$async50024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50024");

(cljs.core.async.t_cljs$core$async50024.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50024.
 */
cljs.core.async.__GT_t_cljs$core$async50024 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async50024(flag__$1,cb__$1,meta50025){
return (new cljs.core.async.t_cljs$core$async50024(flag__$1,cb__$1,meta50025));
});

}

return (new cljs.core.async.t_cljs$core$async50024(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__50031_SHARP_){
var G__50034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50031_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50034) : fret.call(null,G__50034));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__50032_SHARP_){
var G__50036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50032_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50036) : fret.call(null,G__50036));
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
var G__52141 = (i + (1));
i = G__52141;
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
var len__4736__auto___52144 = arguments.length;
var i__4737__auto___52145 = (0);
while(true){
if((i__4737__auto___52145 < len__4736__auto___52144)){
args__4742__auto__.push((arguments[i__4737__auto___52145]));

var G__52146 = (i__4737__auto___52145 + (1));
i__4737__auto___52145 = G__52146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50044){
var map__50045 = p__50044;
var map__50045__$1 = (((((!((map__50045 == null))))?(((((map__50045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50045):map__50045);
var opts = map__50045__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50038){
var G__50039 = cljs.core.first(seq50038);
var seq50038__$1 = cljs.core.next(seq50038);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50039,seq50038__$1);
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
var G__50052 = arguments.length;
switch (G__50052) {
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
var c__37526__auto___52159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50077){
var state_val_50078 = (state_50077[(1)]);
if((state_val_50078 === (7))){
var inst_50072 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50079_52162 = state_50077__$1;
(statearr_50079_52162[(2)] = inst_50072);

(statearr_50079_52162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (1))){
var state_50077__$1 = state_50077;
var statearr_50080_52163 = state_50077__$1;
(statearr_50080_52163[(2)] = null);

(statearr_50080_52163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (4))){
var inst_50055 = (state_50077[(7)]);
var inst_50055__$1 = (state_50077[(2)]);
var inst_50056 = (inst_50055__$1 == null);
var state_50077__$1 = (function (){var statearr_50081 = state_50077;
(statearr_50081[(7)] = inst_50055__$1);

return statearr_50081;
})();
if(cljs.core.truth_(inst_50056)){
var statearr_50082_52165 = state_50077__$1;
(statearr_50082_52165[(1)] = (5));

} else {
var statearr_50083_52166 = state_50077__$1;
(statearr_50083_52166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (13))){
var state_50077__$1 = state_50077;
var statearr_50084_52167 = state_50077__$1;
(statearr_50084_52167[(2)] = null);

(statearr_50084_52167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (6))){
var inst_50055 = (state_50077[(7)]);
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50077__$1,(11),to,inst_50055);
} else {
if((state_val_50078 === (3))){
var inst_50074 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50077__$1,inst_50074);
} else {
if((state_val_50078 === (12))){
var state_50077__$1 = state_50077;
var statearr_50085_52168 = state_50077__$1;
(statearr_50085_52168[(2)] = null);

(statearr_50085_52168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (2))){
var state_50077__$1 = state_50077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50077__$1,(4),from);
} else {
if((state_val_50078 === (11))){
var inst_50065 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
if(cljs.core.truth_(inst_50065)){
var statearr_50086_52169 = state_50077__$1;
(statearr_50086_52169[(1)] = (12));

} else {
var statearr_50087_52170 = state_50077__$1;
(statearr_50087_52170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (9))){
var state_50077__$1 = state_50077;
var statearr_50088_52171 = state_50077__$1;
(statearr_50088_52171[(2)] = null);

(statearr_50088_52171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (5))){
var state_50077__$1 = state_50077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50089_52176 = state_50077__$1;
(statearr_50089_52176[(1)] = (8));

} else {
var statearr_50090_52177 = state_50077__$1;
(statearr_50090_52177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (14))){
var inst_50070 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50092_52181 = state_50077__$1;
(statearr_50092_52181[(2)] = inst_50070);

(statearr_50092_52181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (10))){
var inst_50062 = (state_50077[(2)]);
var state_50077__$1 = state_50077;
var statearr_50099_52183 = state_50077__$1;
(statearr_50099_52183[(2)] = inst_50062);

(statearr_50099_52183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50078 === (8))){
var inst_50059 = cljs.core.async.close_BANG_(to);
var state_50077__$1 = state_50077;
var statearr_50100_52185 = state_50077__$1;
(statearr_50100_52185[(2)] = inst_50059);

(statearr_50100_52185[(1)] = (10));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_50110 = [null,null,null,null,null,null,null,null];
(statearr_50110[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_50110[(1)] = (1));

return statearr_50110;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_50077){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50077);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50112){var ex__37396__auto__ = e50112;
var statearr_50114_52187 = state_50077;
(statearr_50114_52187[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50077[(4)]))){
var statearr_50115_52188 = state_50077;
(statearr_50115_52188[(1)] = cljs.core.first((state_50077[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52189 = state_50077;
state_50077 = G__52189;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_50077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_50077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50121 = f__37527__auto__();
(statearr_50121[(6)] = c__37526__auto___52159);

return statearr_50121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var process = (function (p__50123){
var vec__50124 = p__50123;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50124,(1),null);
var job = vec__50124;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37526__auto___52194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50131){
var state_val_50132 = (state_50131[(1)]);
if((state_val_50132 === (1))){
var state_50131__$1 = state_50131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50131__$1,(2),res,v);
} else {
if((state_val_50132 === (2))){
var inst_50128 = (state_50131[(2)]);
var inst_50129 = cljs.core.async.close_BANG_(res);
var state_50131__$1 = (function (){var statearr_50134 = state_50131;
(statearr_50134[(7)] = inst_50128);

return statearr_50134;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50131__$1,inst_50129);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_50144 = [null,null,null,null,null,null,null,null];
(statearr_50144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__);

(statearr_50144[(1)] = (1));

return statearr_50144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1 = (function (state_50131){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50131);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50145){var ex__37396__auto__ = e50145;
var statearr_50146_52200 = state_50131;
(statearr_50146_52200[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50131[(4)]))){
var statearr_50148_52202 = state_50131;
(statearr_50148_52202[(1)] = cljs.core.first((state_50131[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52203 = state_50131;
state_50131 = G__52203;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = function(state_50131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1.call(this,state_50131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50149 = f__37527__auto__();
(statearr_50149[(6)] = c__37526__auto___52194);

return statearr_50149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50151){
var vec__50152 = p__50151;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50152,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50152,(1),null);
var job = vec__50152;
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
var n__4613__auto___52208 = n;
var __52209 = (0);
while(true){
if((__52209 < n__4613__auto___52208)){
var G__50156_52210 = type;
var G__50156_52211__$1 = (((G__50156_52210 instanceof cljs.core.Keyword))?G__50156_52210.fqn:null);
switch (G__50156_52211__$1) {
case "compute":
var c__37526__auto___52213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52209,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = ((function (__52209,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function (state_50173){
var state_val_50174 = (state_50173[(1)]);
if((state_val_50174 === (1))){
var state_50173__$1 = state_50173;
var statearr_50181_52216 = state_50173__$1;
(statearr_50181_52216[(2)] = null);

(statearr_50181_52216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (2))){
var state_50173__$1 = state_50173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50173__$1,(4),jobs);
} else {
if((state_val_50174 === (3))){
var inst_50170 = (state_50173[(2)]);
var state_50173__$1 = state_50173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50173__$1,inst_50170);
} else {
if((state_val_50174 === (4))){
var inst_50162 = (state_50173[(2)]);
var inst_50163 = process(inst_50162);
var state_50173__$1 = state_50173;
if(cljs.core.truth_(inst_50163)){
var statearr_50184_52219 = state_50173__$1;
(statearr_50184_52219[(1)] = (5));

} else {
var statearr_50186_52220 = state_50173__$1;
(statearr_50186_52220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (5))){
var state_50173__$1 = state_50173;
var statearr_50187_52221 = state_50173__$1;
(statearr_50187_52221[(2)] = null);

(statearr_50187_52221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (6))){
var state_50173__$1 = state_50173;
var statearr_50188_52222 = state_50173__$1;
(statearr_50188_52222[(2)] = null);

(statearr_50188_52222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50174 === (7))){
var inst_50168 = (state_50173[(2)]);
var state_50173__$1 = state_50173;
var statearr_50189_52227 = state_50173__$1;
(statearr_50189_52227[(2)] = inst_50168);

(statearr_50189_52227[(1)] = (3));


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
});})(__52209,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
;
return ((function (__52209,switch__37392__auto__,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_50190 = [null,null,null,null,null,null,null];
(statearr_50190[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__);

(statearr_50190[(1)] = (1));

return statearr_50190;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1 = (function (state_50173){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50173);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50191){var ex__37396__auto__ = e50191;
var statearr_50192_52232 = state_50173;
(statearr_50192_52232[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50173[(4)]))){
var statearr_50193_52233 = state_50173;
(statearr_50193_52233[(1)] = cljs.core.first((state_50173[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52234 = state_50173;
state_50173 = G__52234;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = function(state_50173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1.call(this,state_50173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__;
})()
;})(__52209,switch__37392__auto__,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
})();
var state__37528__auto__ = (function (){var statearr_50194 = f__37527__auto__();
(statearr_50194[(6)] = c__37526__auto___52213);

return statearr_50194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
});})(__52209,c__37526__auto___52213,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
);


break;
case "async":
var c__37526__auto___52235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52209,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = ((function (__52209,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function (state_50207){
var state_val_50208 = (state_50207[(1)]);
if((state_val_50208 === (1))){
var state_50207__$1 = state_50207;
var statearr_50209_52240 = state_50207__$1;
(statearr_50209_52240[(2)] = null);

(statearr_50209_52240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50208 === (2))){
var state_50207__$1 = state_50207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50207__$1,(4),jobs);
} else {
if((state_val_50208 === (3))){
var inst_50205 = (state_50207[(2)]);
var state_50207__$1 = state_50207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50207__$1,inst_50205);
} else {
if((state_val_50208 === (4))){
var inst_50197 = (state_50207[(2)]);
var inst_50198 = async(inst_50197);
var state_50207__$1 = state_50207;
if(cljs.core.truth_(inst_50198)){
var statearr_50210_52242 = state_50207__$1;
(statearr_50210_52242[(1)] = (5));

} else {
var statearr_50211_52243 = state_50207__$1;
(statearr_50211_52243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50208 === (5))){
var state_50207__$1 = state_50207;
var statearr_50212_52247 = state_50207__$1;
(statearr_50212_52247[(2)] = null);

(statearr_50212_52247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50208 === (6))){
var state_50207__$1 = state_50207;
var statearr_50215_52249 = state_50207__$1;
(statearr_50215_52249[(2)] = null);

(statearr_50215_52249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50208 === (7))){
var inst_50203 = (state_50207[(2)]);
var state_50207__$1 = state_50207;
var statearr_50218_52250 = state_50207__$1;
(statearr_50218_52250[(2)] = inst_50203);

(statearr_50218_52250[(1)] = (3));


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
});})(__52209,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
;
return ((function (__52209,switch__37392__auto__,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_50219 = [null,null,null,null,null,null,null];
(statearr_50219[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__);

(statearr_50219[(1)] = (1));

return statearr_50219;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1 = (function (state_50207){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50207);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50220){var ex__37396__auto__ = e50220;
var statearr_50221_52259 = state_50207;
(statearr_50221_52259[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50207[(4)]))){
var statearr_50222_52260 = state_50207;
(statearr_50222_52260[(1)] = cljs.core.first((state_50207[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52261 = state_50207;
state_50207 = G__52261;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = function(state_50207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1.call(this,state_50207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__;
})()
;})(__52209,switch__37392__auto__,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
})();
var state__37528__auto__ = (function (){var statearr_50223 = f__37527__auto__();
(statearr_50223[(6)] = c__37526__auto___52235);

return statearr_50223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
});})(__52209,c__37526__auto___52235,G__50156_52210,G__50156_52211__$1,n__4613__auto___52208,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50156_52211__$1)].join('')));

}

var G__52264 = (__52209 + (1));
__52209 = G__52264;
continue;
} else {
}
break;
}

var c__37526__auto___52265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50248){
var state_val_50249 = (state_50248[(1)]);
if((state_val_50249 === (7))){
var inst_50244 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
var statearr_50252_52266 = state_50248__$1;
(statearr_50252_52266[(2)] = inst_50244);

(statearr_50252_52266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (1))){
var state_50248__$1 = state_50248;
var statearr_50253_52267 = state_50248__$1;
(statearr_50253_52267[(2)] = null);

(statearr_50253_52267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (4))){
var inst_50226 = (state_50248[(7)]);
var inst_50226__$1 = (state_50248[(2)]);
var inst_50227 = (inst_50226__$1 == null);
var state_50248__$1 = (function (){var statearr_50254 = state_50248;
(statearr_50254[(7)] = inst_50226__$1);

return statearr_50254;
})();
if(cljs.core.truth_(inst_50227)){
var statearr_50257_52268 = state_50248__$1;
(statearr_50257_52268[(1)] = (5));

} else {
var statearr_50258_52269 = state_50248__$1;
(statearr_50258_52269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (6))){
var inst_50234 = (state_50248[(8)]);
var inst_50226 = (state_50248[(7)]);
var inst_50234__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50235 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50236 = [inst_50226,inst_50234__$1];
var inst_50237 = (new cljs.core.PersistentVector(null,2,(5),inst_50235,inst_50236,null));
var state_50248__$1 = (function (){var statearr_50259 = state_50248;
(statearr_50259[(8)] = inst_50234__$1);

return statearr_50259;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50248__$1,(8),jobs,inst_50237);
} else {
if((state_val_50249 === (3))){
var inst_50246 = (state_50248[(2)]);
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50248__$1,inst_50246);
} else {
if((state_val_50249 === (2))){
var state_50248__$1 = state_50248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50248__$1,(4),from);
} else {
if((state_val_50249 === (9))){
var inst_50241 = (state_50248[(2)]);
var state_50248__$1 = (function (){var statearr_50263 = state_50248;
(statearr_50263[(9)] = inst_50241);

return statearr_50263;
})();
var statearr_50265_52278 = state_50248__$1;
(statearr_50265_52278[(2)] = null);

(statearr_50265_52278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (5))){
var inst_50230 = cljs.core.async.close_BANG_(jobs);
var state_50248__$1 = state_50248;
var statearr_50267_52280 = state_50248__$1;
(statearr_50267_52280[(2)] = inst_50230);

(statearr_50267_52280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50249 === (8))){
var inst_50234 = (state_50248[(8)]);
var inst_50239 = (state_50248[(2)]);
var state_50248__$1 = (function (){var statearr_50276 = state_50248;
(statearr_50276[(10)] = inst_50239);

return statearr_50276;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50248__$1,(9),results,inst_50234);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_50280 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__);

(statearr_50280[(1)] = (1));

return statearr_50280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1 = (function (state_50248){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50248);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50281){var ex__37396__auto__ = e50281;
var statearr_50285_52286 = state_50248;
(statearr_50285_52286[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50248[(4)]))){
var statearr_50286_52287 = state_50248;
(statearr_50286_52287[(1)] = cljs.core.first((state_50248[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52288 = state_50248;
state_50248 = G__52288;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = function(state_50248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1.call(this,state_50248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50290 = f__37527__auto__();
(statearr_50290[(6)] = c__37526__auto___52265);

return statearr_50290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


var c__37526__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50335){
var state_val_50336 = (state_50335[(1)]);
if((state_val_50336 === (7))){
var inst_50331 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50337_52293 = state_50335__$1;
(statearr_50337_52293[(2)] = inst_50331);

(statearr_50337_52293[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (20))){
var state_50335__$1 = state_50335;
var statearr_50338_52294 = state_50335__$1;
(statearr_50338_52294[(2)] = null);

(statearr_50338_52294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (1))){
var state_50335__$1 = state_50335;
var statearr_50339_52295 = state_50335__$1;
(statearr_50339_52295[(2)] = null);

(statearr_50339_52295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (4))){
var inst_50295 = (state_50335[(7)]);
var inst_50295__$1 = (state_50335[(2)]);
var inst_50296 = (inst_50295__$1 == null);
var state_50335__$1 = (function (){var statearr_50342 = state_50335;
(statearr_50342[(7)] = inst_50295__$1);

return statearr_50342;
})();
if(cljs.core.truth_(inst_50296)){
var statearr_50343_52299 = state_50335__$1;
(statearr_50343_52299[(1)] = (5));

} else {
var statearr_50344_52300 = state_50335__$1;
(statearr_50344_52300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (15))){
var inst_50313 = (state_50335[(8)]);
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50335__$1,(18),to,inst_50313);
} else {
if((state_val_50336 === (21))){
var inst_50326 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50345_52306 = state_50335__$1;
(statearr_50345_52306[(2)] = inst_50326);

(statearr_50345_52306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (13))){
var inst_50328 = (state_50335[(2)]);
var state_50335__$1 = (function (){var statearr_50346 = state_50335;
(statearr_50346[(9)] = inst_50328);

return statearr_50346;
})();
var statearr_50347_52310 = state_50335__$1;
(statearr_50347_52310[(2)] = null);

(statearr_50347_52310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (6))){
var inst_50295 = (state_50335[(7)]);
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50335__$1,(11),inst_50295);
} else {
if((state_val_50336 === (17))){
var inst_50321 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
if(cljs.core.truth_(inst_50321)){
var statearr_50351_52313 = state_50335__$1;
(statearr_50351_52313[(1)] = (19));

} else {
var statearr_50353_52314 = state_50335__$1;
(statearr_50353_52314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (3))){
var inst_50333 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50335__$1,inst_50333);
} else {
if((state_val_50336 === (12))){
var inst_50310 = (state_50335[(10)]);
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50335__$1,(14),inst_50310);
} else {
if((state_val_50336 === (2))){
var state_50335__$1 = state_50335;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50335__$1,(4),results);
} else {
if((state_val_50336 === (19))){
var state_50335__$1 = state_50335;
var statearr_50356_52321 = state_50335__$1;
(statearr_50356_52321[(2)] = null);

(statearr_50356_52321[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (11))){
var inst_50310 = (state_50335[(2)]);
var state_50335__$1 = (function (){var statearr_50357 = state_50335;
(statearr_50357[(10)] = inst_50310);

return statearr_50357;
})();
var statearr_50358_52322 = state_50335__$1;
(statearr_50358_52322[(2)] = null);

(statearr_50358_52322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (9))){
var state_50335__$1 = state_50335;
var statearr_50359_52323 = state_50335__$1;
(statearr_50359_52323[(2)] = null);

(statearr_50359_52323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (5))){
var state_50335__$1 = state_50335;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50360_52331 = state_50335__$1;
(statearr_50360_52331[(1)] = (8));

} else {
var statearr_50361_52335 = state_50335__$1;
(statearr_50361_52335[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (14))){
var inst_50313 = (state_50335[(8)]);
var inst_50313__$1 = (state_50335[(2)]);
var inst_50314 = (inst_50313__$1 == null);
var inst_50315 = cljs.core.not(inst_50314);
var state_50335__$1 = (function (){var statearr_50362 = state_50335;
(statearr_50362[(8)] = inst_50313__$1);

return statearr_50362;
})();
if(inst_50315){
var statearr_50363_52337 = state_50335__$1;
(statearr_50363_52337[(1)] = (15));

} else {
var statearr_50364_52342 = state_50335__$1;
(statearr_50364_52342[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (16))){
var state_50335__$1 = state_50335;
var statearr_50366_52343 = state_50335__$1;
(statearr_50366_52343[(2)] = false);

(statearr_50366_52343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (10))){
var inst_50307 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50367_52347 = state_50335__$1;
(statearr_50367_52347[(2)] = inst_50307);

(statearr_50367_52347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (18))){
var inst_50318 = (state_50335[(2)]);
var state_50335__$1 = state_50335;
var statearr_50370_52352 = state_50335__$1;
(statearr_50370_52352[(2)] = inst_50318);

(statearr_50370_52352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50336 === (8))){
var inst_50304 = cljs.core.async.close_BANG_(to);
var state_50335__$1 = state_50335;
var statearr_50373_52353 = state_50335__$1;
(statearr_50373_52353[(2)] = inst_50304);

(statearr_50373_52353[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_50376 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50376[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__);

(statearr_50376[(1)] = (1));

return statearr_50376;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1 = (function (state_50335){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50335);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50378){var ex__37396__auto__ = e50378;
var statearr_50379_52364 = state_50335;
(statearr_50379_52364[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50335[(4)]))){
var statearr_50380_52365 = state_50335;
(statearr_50380_52365[(1)] = cljs.core.first((state_50335[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52366 = state_50335;
state_50335 = G__52366;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__ = function(state_50335){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1.call(this,state_50335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50381 = f__37527__auto__();
(statearr_50381[(6)] = c__37526__auto__);

return statearr_50381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

return c__37526__auto__;
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
var G__50386 = arguments.length;
switch (G__50386) {
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
var G__50395 = arguments.length;
switch (G__50395) {
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
var G__50410 = arguments.length;
switch (G__50410) {
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
var c__37526__auto___52382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50439){
var state_val_50440 = (state_50439[(1)]);
if((state_val_50440 === (7))){
var inst_50435 = (state_50439[(2)]);
var state_50439__$1 = state_50439;
var statearr_50441_52384 = state_50439__$1;
(statearr_50441_52384[(2)] = inst_50435);

(statearr_50441_52384[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (1))){
var state_50439__$1 = state_50439;
var statearr_50445_52385 = state_50439__$1;
(statearr_50445_52385[(2)] = null);

(statearr_50445_52385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (4))){
var inst_50416 = (state_50439[(7)]);
var inst_50416__$1 = (state_50439[(2)]);
var inst_50417 = (inst_50416__$1 == null);
var state_50439__$1 = (function (){var statearr_50448 = state_50439;
(statearr_50448[(7)] = inst_50416__$1);

return statearr_50448;
})();
if(cljs.core.truth_(inst_50417)){
var statearr_50449_52386 = state_50439__$1;
(statearr_50449_52386[(1)] = (5));

} else {
var statearr_50450_52387 = state_50439__$1;
(statearr_50450_52387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (13))){
var state_50439__$1 = state_50439;
var statearr_50451_52388 = state_50439__$1;
(statearr_50451_52388[(2)] = null);

(statearr_50451_52388[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (6))){
var inst_50416 = (state_50439[(7)]);
var inst_50422 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50416) : p.call(null,inst_50416));
var state_50439__$1 = state_50439;
if(cljs.core.truth_(inst_50422)){
var statearr_50452_52389 = state_50439__$1;
(statearr_50452_52389[(1)] = (9));

} else {
var statearr_50453_52390 = state_50439__$1;
(statearr_50453_52390[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (3))){
var inst_50437 = (state_50439[(2)]);
var state_50439__$1 = state_50439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50439__$1,inst_50437);
} else {
if((state_val_50440 === (12))){
var state_50439__$1 = state_50439;
var statearr_50454_52391 = state_50439__$1;
(statearr_50454_52391[(2)] = null);

(statearr_50454_52391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (2))){
var state_50439__$1 = state_50439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50439__$1,(4),ch);
} else {
if((state_val_50440 === (11))){
var inst_50416 = (state_50439[(7)]);
var inst_50426 = (state_50439[(2)]);
var state_50439__$1 = state_50439;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50439__$1,(8),inst_50426,inst_50416);
} else {
if((state_val_50440 === (9))){
var state_50439__$1 = state_50439;
var statearr_50467_52392 = state_50439__$1;
(statearr_50467_52392[(2)] = tc);

(statearr_50467_52392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (5))){
var inst_50419 = cljs.core.async.close_BANG_(tc);
var inst_50420 = cljs.core.async.close_BANG_(fc);
var state_50439__$1 = (function (){var statearr_50475 = state_50439;
(statearr_50475[(8)] = inst_50419);

return statearr_50475;
})();
var statearr_50480_52393 = state_50439__$1;
(statearr_50480_52393[(2)] = inst_50420);

(statearr_50480_52393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (14))){
var inst_50433 = (state_50439[(2)]);
var state_50439__$1 = state_50439;
var statearr_50481_52394 = state_50439__$1;
(statearr_50481_52394[(2)] = inst_50433);

(statearr_50481_52394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (10))){
var state_50439__$1 = state_50439;
var statearr_50482_52396 = state_50439__$1;
(statearr_50482_52396[(2)] = fc);

(statearr_50482_52396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50440 === (8))){
var inst_50428 = (state_50439[(2)]);
var state_50439__$1 = state_50439;
if(cljs.core.truth_(inst_50428)){
var statearr_50483_52401 = state_50439__$1;
(statearr_50483_52401[(1)] = (12));

} else {
var statearr_50484_52402 = state_50439__$1;
(statearr_50484_52402[(1)] = (13));

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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_50485 = [null,null,null,null,null,null,null,null,null];
(statearr_50485[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_50485[(1)] = (1));

return statearr_50485;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_50439){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50439);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50486){var ex__37396__auto__ = e50486;
var statearr_50487_52406 = state_50439;
(statearr_50487_52406[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50439[(4)]))){
var statearr_50488_52407 = state_50439;
(statearr_50488_52407[(1)] = cljs.core.first((state_50439[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52409 = state_50439;
state_50439 = G__52409;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_50439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_50439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50490 = f__37527__auto__();
(statearr_50490[(6)] = c__37526__auto___52382);

return statearr_50490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var c__37526__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50514){
var state_val_50515 = (state_50514[(1)]);
if((state_val_50515 === (7))){
var inst_50510 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
var statearr_50516_52411 = state_50514__$1;
(statearr_50516_52411[(2)] = inst_50510);

(statearr_50516_52411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (1))){
var inst_50493 = init;
var inst_50494 = inst_50493;
var state_50514__$1 = (function (){var statearr_50517 = state_50514;
(statearr_50517[(7)] = inst_50494);

return statearr_50517;
})();
var statearr_50518_52413 = state_50514__$1;
(statearr_50518_52413[(2)] = null);

(statearr_50518_52413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (4))){
var inst_50497 = (state_50514[(8)]);
var inst_50497__$1 = (state_50514[(2)]);
var inst_50498 = (inst_50497__$1 == null);
var state_50514__$1 = (function (){var statearr_50519 = state_50514;
(statearr_50519[(8)] = inst_50497__$1);

return statearr_50519;
})();
if(cljs.core.truth_(inst_50498)){
var statearr_50524_52414 = state_50514__$1;
(statearr_50524_52414[(1)] = (5));

} else {
var statearr_50526_52415 = state_50514__$1;
(statearr_50526_52415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (6))){
var inst_50497 = (state_50514[(8)]);
var inst_50494 = (state_50514[(7)]);
var inst_50501 = (state_50514[(9)]);
var inst_50501__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50494,inst_50497) : f.call(null,inst_50494,inst_50497));
var inst_50502 = cljs.core.reduced_QMARK_(inst_50501__$1);
var state_50514__$1 = (function (){var statearr_50534 = state_50514;
(statearr_50534[(9)] = inst_50501__$1);

return statearr_50534;
})();
if(inst_50502){
var statearr_50539_52416 = state_50514__$1;
(statearr_50539_52416[(1)] = (8));

} else {
var statearr_50541_52417 = state_50514__$1;
(statearr_50541_52417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (3))){
var inst_50512 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50514__$1,inst_50512);
} else {
if((state_val_50515 === (2))){
var state_50514__$1 = state_50514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50514__$1,(4),ch);
} else {
if((state_val_50515 === (9))){
var inst_50501 = (state_50514[(9)]);
var inst_50494 = inst_50501;
var state_50514__$1 = (function (){var statearr_50546 = state_50514;
(statearr_50546[(7)] = inst_50494);

return statearr_50546;
})();
var statearr_50547_52418 = state_50514__$1;
(statearr_50547_52418[(2)] = null);

(statearr_50547_52418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (5))){
var inst_50494 = (state_50514[(7)]);
var state_50514__$1 = state_50514;
var statearr_50548_52419 = state_50514__$1;
(statearr_50548_52419[(2)] = inst_50494);

(statearr_50548_52419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (10))){
var inst_50508 = (state_50514[(2)]);
var state_50514__$1 = state_50514;
var statearr_50549_52424 = state_50514__$1;
(statearr_50549_52424[(2)] = inst_50508);

(statearr_50549_52424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50515 === (8))){
var inst_50501 = (state_50514[(9)]);
var inst_50504 = cljs.core.deref(inst_50501);
var state_50514__$1 = state_50514;
var statearr_50554_52425 = state_50514__$1;
(statearr_50554_52425[(2)] = inst_50504);

(statearr_50554_52425[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37393__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37393__auto____0 = (function (){
var statearr_50563 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50563[(0)] = cljs$core$async$reduce_$_state_machine__37393__auto__);

(statearr_50563[(1)] = (1));

return statearr_50563;
});
var cljs$core$async$reduce_$_state_machine__37393__auto____1 = (function (state_50514){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50514);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50569){var ex__37396__auto__ = e50569;
var statearr_50574_52430 = state_50514;
(statearr_50574_52430[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50514[(4)]))){
var statearr_50575_52431 = state_50514;
(statearr_50575_52431[(1)] = cljs.core.first((state_50514[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52432 = state_50514;
state_50514 = G__52432;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37393__auto__ = function(state_50514){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37393__auto____1.call(this,state_50514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37393__auto____0;
cljs$core$async$reduce_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37393__auto____1;
return cljs$core$async$reduce_$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50576 = f__37527__auto__();
(statearr_50576[(6)] = c__37526__auto__);

return statearr_50576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

return c__37526__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37526__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50606){
var state_val_50607 = (state_50606[(1)]);
if((state_val_50607 === (1))){
var inst_50601 = cljs.core.async.reduce(f__$1,init,ch);
var state_50606__$1 = state_50606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50606__$1,(2),inst_50601);
} else {
if((state_val_50607 === (2))){
var inst_50603 = (state_50606[(2)]);
var inst_50604 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50603) : f__$1.call(null,inst_50603));
var state_50606__$1 = state_50606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50606__$1,inst_50604);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37393__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37393__auto____0 = (function (){
var statearr_50608 = [null,null,null,null,null,null,null];
(statearr_50608[(0)] = cljs$core$async$transduce_$_state_machine__37393__auto__);

(statearr_50608[(1)] = (1));

return statearr_50608;
});
var cljs$core$async$transduce_$_state_machine__37393__auto____1 = (function (state_50606){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50606);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50609){var ex__37396__auto__ = e50609;
var statearr_50610_52446 = state_50606;
(statearr_50610_52446[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50606[(4)]))){
var statearr_50611_52447 = state_50606;
(statearr_50611_52447[(1)] = cljs.core.first((state_50606[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52448 = state_50606;
state_50606 = G__52448;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37393__auto__ = function(state_50606){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37393__auto____1.call(this,state_50606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37393__auto____0;
cljs$core$async$transduce_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37393__auto____1;
return cljs$core$async$transduce_$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50612 = f__37527__auto__();
(statearr_50612[(6)] = c__37526__auto__);

return statearr_50612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

return c__37526__auto__;
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
var G__50615 = arguments.length;
switch (G__50615) {
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
var c__37526__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50641){
var state_val_50642 = (state_50641[(1)]);
if((state_val_50642 === (7))){
var inst_50623 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
var statearr_50647_52450 = state_50641__$1;
(statearr_50647_52450[(2)] = inst_50623);

(statearr_50647_52450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (1))){
var inst_50617 = cljs.core.seq(coll);
var inst_50618 = inst_50617;
var state_50641__$1 = (function (){var statearr_50656 = state_50641;
(statearr_50656[(7)] = inst_50618);

return statearr_50656;
})();
var statearr_50657_52451 = state_50641__$1;
(statearr_50657_52451[(2)] = null);

(statearr_50657_52451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (4))){
var inst_50618 = (state_50641[(7)]);
var inst_50621 = cljs.core.first(inst_50618);
var state_50641__$1 = state_50641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50641__$1,(7),ch,inst_50621);
} else {
if((state_val_50642 === (13))){
var inst_50635 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
var statearr_50670_52452 = state_50641__$1;
(statearr_50670_52452[(2)] = inst_50635);

(statearr_50670_52452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (6))){
var inst_50626 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
if(cljs.core.truth_(inst_50626)){
var statearr_50671_52453 = state_50641__$1;
(statearr_50671_52453[(1)] = (8));

} else {
var statearr_50673_52454 = state_50641__$1;
(statearr_50673_52454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (3))){
var inst_50639 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50641__$1,inst_50639);
} else {
if((state_val_50642 === (12))){
var state_50641__$1 = state_50641;
var statearr_50674_52455 = state_50641__$1;
(statearr_50674_52455[(2)] = null);

(statearr_50674_52455[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (2))){
var inst_50618 = (state_50641[(7)]);
var state_50641__$1 = state_50641;
if(cljs.core.truth_(inst_50618)){
var statearr_50675_52456 = state_50641__$1;
(statearr_50675_52456[(1)] = (4));

} else {
var statearr_50676_52457 = state_50641__$1;
(statearr_50676_52457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (11))){
var inst_50632 = cljs.core.async.close_BANG_(ch);
var state_50641__$1 = state_50641;
var statearr_50677_52459 = state_50641__$1;
(statearr_50677_52459[(2)] = inst_50632);

(statearr_50677_52459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (9))){
var state_50641__$1 = state_50641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50678_52461 = state_50641__$1;
(statearr_50678_52461[(1)] = (11));

} else {
var statearr_50679_52462 = state_50641__$1;
(statearr_50679_52462[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (5))){
var inst_50618 = (state_50641[(7)]);
var state_50641__$1 = state_50641;
var statearr_50680_52469 = state_50641__$1;
(statearr_50680_52469[(2)] = inst_50618);

(statearr_50680_52469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (10))){
var inst_50637 = (state_50641[(2)]);
var state_50641__$1 = state_50641;
var statearr_50681_52470 = state_50641__$1;
(statearr_50681_52470[(2)] = inst_50637);

(statearr_50681_52470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50642 === (8))){
var inst_50618 = (state_50641[(7)]);
var inst_50628 = cljs.core.next(inst_50618);
var inst_50618__$1 = inst_50628;
var state_50641__$1 = (function (){var statearr_50682 = state_50641;
(statearr_50682[(7)] = inst_50618__$1);

return statearr_50682;
})();
var statearr_50683_52471 = state_50641__$1;
(statearr_50683_52471[(2)] = null);

(statearr_50683_52471[(1)] = (2));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_50684 = [null,null,null,null,null,null,null,null];
(statearr_50684[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_50684[(1)] = (1));

return statearr_50684;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_50641){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50641);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50685){var ex__37396__auto__ = e50685;
var statearr_50686_52472 = state_50641;
(statearr_50686_52472[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50641[(4)]))){
var statearr_50687_52473 = state_50641;
(statearr_50687_52473[(1)] = cljs.core.first((state_50641[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52474 = state_50641;
state_50641 = G__52474;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_50641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_50641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50688 = f__37527__auto__();
(statearr_50688[(6)] = c__37526__auto__);

return statearr_50688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

return c__37526__auto__;
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
var G__50696 = arguments.length;
switch (G__50696) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_52477 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_52477(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52485 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_52485(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52486 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_52486(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52487 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_52487(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50697 = (function (ch,cs,meta50698){
this.ch = ch;
this.cs = cs;
this.meta50698 = meta50698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50699,meta50698__$1){
var self__ = this;
var _50699__$1 = this;
return (new cljs.core.async.t_cljs$core$async50697(self__.ch,self__.cs,meta50698__$1));
}));

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50699){
var self__ = this;
var _50699__$1 = this;
return self__.meta50698;
}));

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50698","meta50698",1641326999,null)], null);
}));

(cljs.core.async.t_cljs$core$async50697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50697");

(cljs.core.async.t_cljs$core$async50697.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50697.
 */
cljs.core.async.__GT_t_cljs$core$async50697 = (function cljs$core$async$mult_$___GT_t_cljs$core$async50697(ch__$1,cs__$1,meta50698){
return (new cljs.core.async.t_cljs$core$async50697(ch__$1,cs__$1,meta50698));
});

}

return (new cljs.core.async.t_cljs$core$async50697(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37526__auto___52496 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_50832){
var state_val_50833 = (state_50832[(1)]);
if((state_val_50833 === (7))){
var inst_50828 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50834_52497 = state_50832__$1;
(statearr_50834_52497[(2)] = inst_50828);

(statearr_50834_52497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (20))){
var inst_50733 = (state_50832[(7)]);
var inst_50745 = cljs.core.first(inst_50733);
var inst_50746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50745,(0),null);
var inst_50747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50745,(1),null);
var state_50832__$1 = (function (){var statearr_50835 = state_50832;
(statearr_50835[(8)] = inst_50746);

return statearr_50835;
})();
if(cljs.core.truth_(inst_50747)){
var statearr_50836_52498 = state_50832__$1;
(statearr_50836_52498[(1)] = (22));

} else {
var statearr_50837_52499 = state_50832__$1;
(statearr_50837_52499[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (27))){
var inst_50775 = (state_50832[(9)]);
var inst_50702 = (state_50832[(10)]);
var inst_50782 = (state_50832[(11)]);
var inst_50777 = (state_50832[(12)]);
var inst_50782__$1 = cljs.core._nth(inst_50775,inst_50777);
var inst_50783 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50782__$1,inst_50702,done);
var state_50832__$1 = (function (){var statearr_50841 = state_50832;
(statearr_50841[(11)] = inst_50782__$1);

return statearr_50841;
})();
if(cljs.core.truth_(inst_50783)){
var statearr_50842_52500 = state_50832__$1;
(statearr_50842_52500[(1)] = (30));

} else {
var statearr_50843_52501 = state_50832__$1;
(statearr_50843_52501[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (1))){
var state_50832__$1 = state_50832;
var statearr_50844_52502 = state_50832__$1;
(statearr_50844_52502[(2)] = null);

(statearr_50844_52502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (24))){
var inst_50733 = (state_50832[(7)]);
var inst_50752 = (state_50832[(2)]);
var inst_50753 = cljs.core.next(inst_50733);
var inst_50711 = inst_50753;
var inst_50712 = null;
var inst_50713 = (0);
var inst_50714 = (0);
var state_50832__$1 = (function (){var statearr_50845 = state_50832;
(statearr_50845[(13)] = inst_50714);

(statearr_50845[(14)] = inst_50711);

(statearr_50845[(15)] = inst_50713);

(statearr_50845[(16)] = inst_50752);

(statearr_50845[(17)] = inst_50712);

return statearr_50845;
})();
var statearr_50846_52503 = state_50832__$1;
(statearr_50846_52503[(2)] = null);

(statearr_50846_52503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (39))){
var state_50832__$1 = state_50832;
var statearr_50851_52504 = state_50832__$1;
(statearr_50851_52504[(2)] = null);

(statearr_50851_52504[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (4))){
var inst_50702 = (state_50832[(10)]);
var inst_50702__$1 = (state_50832[(2)]);
var inst_50703 = (inst_50702__$1 == null);
var state_50832__$1 = (function (){var statearr_50852 = state_50832;
(statearr_50852[(10)] = inst_50702__$1);

return statearr_50852;
})();
if(cljs.core.truth_(inst_50703)){
var statearr_50854_52505 = state_50832__$1;
(statearr_50854_52505[(1)] = (5));

} else {
var statearr_50855_52506 = state_50832__$1;
(statearr_50855_52506[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (15))){
var inst_50714 = (state_50832[(13)]);
var inst_50711 = (state_50832[(14)]);
var inst_50713 = (state_50832[(15)]);
var inst_50712 = (state_50832[(17)]);
var inst_50729 = (state_50832[(2)]);
var inst_50730 = (inst_50714 + (1));
var tmp50847 = inst_50711;
var tmp50848 = inst_50713;
var tmp50849 = inst_50712;
var inst_50711__$1 = tmp50847;
var inst_50712__$1 = tmp50849;
var inst_50713__$1 = tmp50848;
var inst_50714__$1 = inst_50730;
var state_50832__$1 = (function (){var statearr_50857 = state_50832;
(statearr_50857[(13)] = inst_50714__$1);

(statearr_50857[(14)] = inst_50711__$1);

(statearr_50857[(15)] = inst_50713__$1);

(statearr_50857[(17)] = inst_50712__$1);

(statearr_50857[(18)] = inst_50729);

return statearr_50857;
})();
var statearr_50858_52507 = state_50832__$1;
(statearr_50858_52507[(2)] = null);

(statearr_50858_52507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (21))){
var inst_50756 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50863_52508 = state_50832__$1;
(statearr_50863_52508[(2)] = inst_50756);

(statearr_50863_52508[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (31))){
var inst_50782 = (state_50832[(11)]);
var inst_50786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50782);
var state_50832__$1 = state_50832;
var statearr_50864_52509 = state_50832__$1;
(statearr_50864_52509[(2)] = inst_50786);

(statearr_50864_52509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (32))){
var inst_50775 = (state_50832[(9)]);
var inst_50774 = (state_50832[(19)]);
var inst_50776 = (state_50832[(20)]);
var inst_50777 = (state_50832[(12)]);
var inst_50788 = (state_50832[(2)]);
var inst_50789 = (inst_50777 + (1));
var tmp50860 = inst_50775;
var tmp50861 = inst_50774;
var tmp50862 = inst_50776;
var inst_50774__$1 = tmp50861;
var inst_50775__$1 = tmp50860;
var inst_50776__$1 = tmp50862;
var inst_50777__$1 = inst_50789;
var state_50832__$1 = (function (){var statearr_50866 = state_50832;
(statearr_50866[(9)] = inst_50775__$1);

(statearr_50866[(19)] = inst_50774__$1);

(statearr_50866[(21)] = inst_50788);

(statearr_50866[(20)] = inst_50776__$1);

(statearr_50866[(12)] = inst_50777__$1);

return statearr_50866;
})();
var statearr_50867_52510 = state_50832__$1;
(statearr_50867_52510[(2)] = null);

(statearr_50867_52510[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (40))){
var inst_50801 = (state_50832[(22)]);
var inst_50805 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_50801);
var state_50832__$1 = state_50832;
var statearr_50868_52511 = state_50832__$1;
(statearr_50868_52511[(2)] = inst_50805);

(statearr_50868_52511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (33))){
var inst_50792 = (state_50832[(23)]);
var inst_50794 = cljs.core.chunked_seq_QMARK_(inst_50792);
var state_50832__$1 = state_50832;
if(inst_50794){
var statearr_50869_52513 = state_50832__$1;
(statearr_50869_52513[(1)] = (36));

} else {
var statearr_50870_52514 = state_50832__$1;
(statearr_50870_52514[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (13))){
var inst_50723 = (state_50832[(24)]);
var inst_50726 = cljs.core.async.close_BANG_(inst_50723);
var state_50832__$1 = state_50832;
var statearr_50872_52516 = state_50832__$1;
(statearr_50872_52516[(2)] = inst_50726);

(statearr_50872_52516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (22))){
var inst_50746 = (state_50832[(8)]);
var inst_50749 = cljs.core.async.close_BANG_(inst_50746);
var state_50832__$1 = state_50832;
var statearr_50873_52517 = state_50832__$1;
(statearr_50873_52517[(2)] = inst_50749);

(statearr_50873_52517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (36))){
var inst_50792 = (state_50832[(23)]);
var inst_50796 = cljs.core.chunk_first(inst_50792);
var inst_50797 = cljs.core.chunk_rest(inst_50792);
var inst_50798 = cljs.core.count(inst_50796);
var inst_50774 = inst_50797;
var inst_50775 = inst_50796;
var inst_50776 = inst_50798;
var inst_50777 = (0);
var state_50832__$1 = (function (){var statearr_50874 = state_50832;
(statearr_50874[(9)] = inst_50775);

(statearr_50874[(19)] = inst_50774);

(statearr_50874[(20)] = inst_50776);

(statearr_50874[(12)] = inst_50777);

return statearr_50874;
})();
var statearr_50875_52518 = state_50832__$1;
(statearr_50875_52518[(2)] = null);

(statearr_50875_52518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (41))){
var inst_50792 = (state_50832[(23)]);
var inst_50807 = (state_50832[(2)]);
var inst_50808 = cljs.core.next(inst_50792);
var inst_50774 = inst_50808;
var inst_50775 = null;
var inst_50776 = (0);
var inst_50777 = (0);
var state_50832__$1 = (function (){var statearr_50876 = state_50832;
(statearr_50876[(9)] = inst_50775);

(statearr_50876[(25)] = inst_50807);

(statearr_50876[(19)] = inst_50774);

(statearr_50876[(20)] = inst_50776);

(statearr_50876[(12)] = inst_50777);

return statearr_50876;
})();
var statearr_50877_52519 = state_50832__$1;
(statearr_50877_52519[(2)] = null);

(statearr_50877_52519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (43))){
var state_50832__$1 = state_50832;
var statearr_50878_52520 = state_50832__$1;
(statearr_50878_52520[(2)] = null);

(statearr_50878_52520[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (29))){
var inst_50816 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50879_52523 = state_50832__$1;
(statearr_50879_52523[(2)] = inst_50816);

(statearr_50879_52523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (44))){
var inst_50825 = (state_50832[(2)]);
var state_50832__$1 = (function (){var statearr_50880 = state_50832;
(statearr_50880[(26)] = inst_50825);

return statearr_50880;
})();
var statearr_50881_52527 = state_50832__$1;
(statearr_50881_52527[(2)] = null);

(statearr_50881_52527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (6))){
var inst_50766 = (state_50832[(27)]);
var inst_50765 = cljs.core.deref(cs);
var inst_50766__$1 = cljs.core.keys(inst_50765);
var inst_50767 = cljs.core.count(inst_50766__$1);
var inst_50768 = cljs.core.reset_BANG_(dctr,inst_50767);
var inst_50773 = cljs.core.seq(inst_50766__$1);
var inst_50774 = inst_50773;
var inst_50775 = null;
var inst_50776 = (0);
var inst_50777 = (0);
var state_50832__$1 = (function (){var statearr_50882 = state_50832;
(statearr_50882[(27)] = inst_50766__$1);

(statearr_50882[(9)] = inst_50775);

(statearr_50882[(19)] = inst_50774);

(statearr_50882[(20)] = inst_50776);

(statearr_50882[(28)] = inst_50768);

(statearr_50882[(12)] = inst_50777);

return statearr_50882;
})();
var statearr_50883_52532 = state_50832__$1;
(statearr_50883_52532[(2)] = null);

(statearr_50883_52532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (28))){
var inst_50774 = (state_50832[(19)]);
var inst_50792 = (state_50832[(23)]);
var inst_50792__$1 = cljs.core.seq(inst_50774);
var state_50832__$1 = (function (){var statearr_50884 = state_50832;
(statearr_50884[(23)] = inst_50792__$1);

return statearr_50884;
})();
if(inst_50792__$1){
var statearr_50885_52533 = state_50832__$1;
(statearr_50885_52533[(1)] = (33));

} else {
var statearr_50886_52534 = state_50832__$1;
(statearr_50886_52534[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (25))){
var inst_50776 = (state_50832[(20)]);
var inst_50777 = (state_50832[(12)]);
var inst_50779 = (inst_50777 < inst_50776);
var inst_50780 = inst_50779;
var state_50832__$1 = state_50832;
if(cljs.core.truth_(inst_50780)){
var statearr_50888_52536 = state_50832__$1;
(statearr_50888_52536[(1)] = (27));

} else {
var statearr_50889_52537 = state_50832__$1;
(statearr_50889_52537[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (34))){
var state_50832__$1 = state_50832;
var statearr_50890_52538 = state_50832__$1;
(statearr_50890_52538[(2)] = null);

(statearr_50890_52538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (17))){
var state_50832__$1 = state_50832;
var statearr_50891_52539 = state_50832__$1;
(statearr_50891_52539[(2)] = null);

(statearr_50891_52539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (3))){
var inst_50830 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50832__$1,inst_50830);
} else {
if((state_val_50833 === (12))){
var inst_50761 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50892_52541 = state_50832__$1;
(statearr_50892_52541[(2)] = inst_50761);

(statearr_50892_52541[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (2))){
var state_50832__$1 = state_50832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50832__$1,(4),ch);
} else {
if((state_val_50833 === (23))){
var state_50832__$1 = state_50832;
var statearr_50895_52543 = state_50832__$1;
(statearr_50895_52543[(2)] = null);

(statearr_50895_52543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (35))){
var inst_50814 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50896_52544 = state_50832__$1;
(statearr_50896_52544[(2)] = inst_50814);

(statearr_50896_52544[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (19))){
var inst_50733 = (state_50832[(7)]);
var inst_50737 = cljs.core.chunk_first(inst_50733);
var inst_50738 = cljs.core.chunk_rest(inst_50733);
var inst_50739 = cljs.core.count(inst_50737);
var inst_50711 = inst_50738;
var inst_50712 = inst_50737;
var inst_50713 = inst_50739;
var inst_50714 = (0);
var state_50832__$1 = (function (){var statearr_50897 = state_50832;
(statearr_50897[(13)] = inst_50714);

(statearr_50897[(14)] = inst_50711);

(statearr_50897[(15)] = inst_50713);

(statearr_50897[(17)] = inst_50712);

return statearr_50897;
})();
var statearr_50898_52547 = state_50832__$1;
(statearr_50898_52547[(2)] = null);

(statearr_50898_52547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (11))){
var inst_50711 = (state_50832[(14)]);
var inst_50733 = (state_50832[(7)]);
var inst_50733__$1 = cljs.core.seq(inst_50711);
var state_50832__$1 = (function (){var statearr_50899 = state_50832;
(statearr_50899[(7)] = inst_50733__$1);

return statearr_50899;
})();
if(inst_50733__$1){
var statearr_50900_52550 = state_50832__$1;
(statearr_50900_52550[(1)] = (16));

} else {
var statearr_50901_52552 = state_50832__$1;
(statearr_50901_52552[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (9))){
var inst_50763 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50902_52553 = state_50832__$1;
(statearr_50902_52553[(2)] = inst_50763);

(statearr_50902_52553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (5))){
var inst_50709 = cljs.core.deref(cs);
var inst_50710 = cljs.core.seq(inst_50709);
var inst_50711 = inst_50710;
var inst_50712 = null;
var inst_50713 = (0);
var inst_50714 = (0);
var state_50832__$1 = (function (){var statearr_50903 = state_50832;
(statearr_50903[(13)] = inst_50714);

(statearr_50903[(14)] = inst_50711);

(statearr_50903[(15)] = inst_50713);

(statearr_50903[(17)] = inst_50712);

return statearr_50903;
})();
var statearr_50904_52554 = state_50832__$1;
(statearr_50904_52554[(2)] = null);

(statearr_50904_52554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (14))){
var state_50832__$1 = state_50832;
var statearr_50905_52555 = state_50832__$1;
(statearr_50905_52555[(2)] = null);

(statearr_50905_52555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (45))){
var inst_50822 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50906_52556 = state_50832__$1;
(statearr_50906_52556[(2)] = inst_50822);

(statearr_50906_52556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (26))){
var inst_50766 = (state_50832[(27)]);
var inst_50818 = (state_50832[(2)]);
var inst_50819 = cljs.core.seq(inst_50766);
var state_50832__$1 = (function (){var statearr_50907 = state_50832;
(statearr_50907[(29)] = inst_50818);

return statearr_50907;
})();
if(inst_50819){
var statearr_50908_52561 = state_50832__$1;
(statearr_50908_52561[(1)] = (42));

} else {
var statearr_50909_52562 = state_50832__$1;
(statearr_50909_52562[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (16))){
var inst_50733 = (state_50832[(7)]);
var inst_50735 = cljs.core.chunked_seq_QMARK_(inst_50733);
var state_50832__$1 = state_50832;
if(inst_50735){
var statearr_50910_52564 = state_50832__$1;
(statearr_50910_52564[(1)] = (19));

} else {
var statearr_50911_52565 = state_50832__$1;
(statearr_50911_52565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (38))){
var inst_50811 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50912_52566 = state_50832__$1;
(statearr_50912_52566[(2)] = inst_50811);

(statearr_50912_52566[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (30))){
var state_50832__$1 = state_50832;
var statearr_50913_52567 = state_50832__$1;
(statearr_50913_52567[(2)] = null);

(statearr_50913_52567[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (10))){
var inst_50714 = (state_50832[(13)]);
var inst_50712 = (state_50832[(17)]);
var inst_50722 = cljs.core._nth(inst_50712,inst_50714);
var inst_50723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50722,(0),null);
var inst_50724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_50722,(1),null);
var state_50832__$1 = (function (){var statearr_50914 = state_50832;
(statearr_50914[(24)] = inst_50723);

return statearr_50914;
})();
if(cljs.core.truth_(inst_50724)){
var statearr_50915_52568 = state_50832__$1;
(statearr_50915_52568[(1)] = (13));

} else {
var statearr_50916_52569 = state_50832__$1;
(statearr_50916_52569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (18))){
var inst_50759 = (state_50832[(2)]);
var state_50832__$1 = state_50832;
var statearr_50917_52570 = state_50832__$1;
(statearr_50917_52570[(2)] = inst_50759);

(statearr_50917_52570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (42))){
var state_50832__$1 = state_50832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50832__$1,(45),dchan);
} else {
if((state_val_50833 === (37))){
var inst_50702 = (state_50832[(10)]);
var inst_50801 = (state_50832[(22)]);
var inst_50792 = (state_50832[(23)]);
var inst_50801__$1 = cljs.core.first(inst_50792);
var inst_50802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_50801__$1,inst_50702,done);
var state_50832__$1 = (function (){var statearr_50918 = state_50832;
(statearr_50918[(22)] = inst_50801__$1);

return statearr_50918;
})();
if(cljs.core.truth_(inst_50802)){
var statearr_50919_52571 = state_50832__$1;
(statearr_50919_52571[(1)] = (39));

} else {
var statearr_50920_52572 = state_50832__$1;
(statearr_50920_52572[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50833 === (8))){
var inst_50714 = (state_50832[(13)]);
var inst_50713 = (state_50832[(15)]);
var inst_50716 = (inst_50714 < inst_50713);
var inst_50717 = inst_50716;
var state_50832__$1 = state_50832;
if(cljs.core.truth_(inst_50717)){
var statearr_50921_52573 = state_50832__$1;
(statearr_50921_52573[(1)] = (10));

} else {
var statearr_50922_52574 = state_50832__$1;
(statearr_50922_52574[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37393__auto__ = null;
var cljs$core$async$mult_$_state_machine__37393__auto____0 = (function (){
var statearr_50923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50923[(0)] = cljs$core$async$mult_$_state_machine__37393__auto__);

(statearr_50923[(1)] = (1));

return statearr_50923;
});
var cljs$core$async$mult_$_state_machine__37393__auto____1 = (function (state_50832){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_50832);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e50924){var ex__37396__auto__ = e50924;
var statearr_50925_52582 = state_50832;
(statearr_50925_52582[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_50832[(4)]))){
var statearr_50926_52589 = state_50832;
(statearr_50926_52589[(1)] = cljs.core.first((state_50832[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52590 = state_50832;
state_50832 = G__52590;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37393__auto__ = function(state_50832){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37393__auto____1.call(this,state_50832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37393__auto____0;
cljs$core$async$mult_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37393__auto____1;
return cljs$core$async$mult_$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_50927 = f__37527__auto__();
(statearr_50927[(6)] = c__37526__auto___52496);

return statearr_50927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var G__50929 = arguments.length;
switch (G__50929) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_52600 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_52600(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_52601 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_52601(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_52609 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_52609(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_52613 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_52613(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_52614 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_52614(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52618 = arguments.length;
var i__4737__auto___52619 = (0);
while(true){
if((i__4737__auto___52619 < len__4736__auto___52618)){
args__4742__auto__.push((arguments[i__4737__auto___52619]));

var G__52620 = (i__4737__auto___52619 + (1));
i__4737__auto___52619 = G__52620;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50945){
var map__50946 = p__50945;
var map__50946__$1 = (((((!((map__50946 == null))))?(((((map__50946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50946):map__50946);
var opts = map__50946__$1;
var statearr_50948_52621 = state;
(statearr_50948_52621[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_50952_52622 = state;
(statearr_50952_52622[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_50953_52623 = state;
(statearr_50953_52623[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50939){
var G__50940 = cljs.core.first(seq50939);
var seq50939__$1 = cljs.core.next(seq50939);
var G__50941 = cljs.core.first(seq50939__$1);
var seq50939__$2 = cljs.core.next(seq50939__$1);
var G__50942 = cljs.core.first(seq50939__$2);
var seq50939__$3 = cljs.core.next(seq50939__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50940,G__50941,G__50942,seq50939__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async50965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50965 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50966){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50966 = meta50966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50967,meta50966__$1){
var self__ = this;
var _50967__$1 = this;
return (new cljs.core.async.t_cljs$core$async50965(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50966__$1));
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50967){
var self__ = this;
var _50967__$1 = this;
return self__.meta50966;
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50965.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async50965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50966","meta50966",-98755744,null)], null);
}));

(cljs.core.async.t_cljs$core$async50965.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50965");

(cljs.core.async.t_cljs$core$async50965.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async50965");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50965.
 */
cljs.core.async.__GT_t_cljs$core$async50965 = (function cljs$core$async$mix_$___GT_t_cljs$core$async50965(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50966){
return (new cljs.core.async.t_cljs$core$async50965(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50966));
});

}

return (new cljs.core.async.t_cljs$core$async50965(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37526__auto___52633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51085){
var state_val_51086 = (state_51085[(1)]);
if((state_val_51086 === (7))){
var inst_50997 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51088_52634 = state_51085__$1;
(statearr_51088_52634[(2)] = inst_50997);

(statearr_51088_52634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (20))){
var inst_51009 = (state_51085[(7)]);
var state_51085__$1 = state_51085;
var statearr_51090_52640 = state_51085__$1;
(statearr_51090_52640[(2)] = inst_51009);

(statearr_51090_52640[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (27))){
var state_51085__$1 = state_51085;
var statearr_51091_52647 = state_51085__$1;
(statearr_51091_52647[(2)] = null);

(statearr_51091_52647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (1))){
var inst_50981 = (state_51085[(8)]);
var inst_50981__$1 = calc_state();
var inst_50983 = (inst_50981__$1 == null);
var inst_50984 = cljs.core.not(inst_50983);
var state_51085__$1 = (function (){var statearr_51092 = state_51085;
(statearr_51092[(8)] = inst_50981__$1);

return statearr_51092;
})();
if(inst_50984){
var statearr_51094_52648 = state_51085__$1;
(statearr_51094_52648[(1)] = (2));

} else {
var statearr_51095_52649 = state_51085__$1;
(statearr_51095_52649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (24))){
var inst_51042 = (state_51085[(9)]);
var inst_51057 = (state_51085[(10)]);
var inst_51033 = (state_51085[(11)]);
var inst_51057__$1 = (inst_51033.cljs$core$IFn$_invoke$arity$1 ? inst_51033.cljs$core$IFn$_invoke$arity$1(inst_51042) : inst_51033.call(null,inst_51042));
var state_51085__$1 = (function (){var statearr_51098 = state_51085;
(statearr_51098[(10)] = inst_51057__$1);

return statearr_51098;
})();
if(cljs.core.truth_(inst_51057__$1)){
var statearr_51099_52650 = state_51085__$1;
(statearr_51099_52650[(1)] = (29));

} else {
var statearr_51102_52651 = state_51085__$1;
(statearr_51102_52651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (4))){
var inst_51000 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51000)){
var statearr_51105_52657 = state_51085__$1;
(statearr_51105_52657[(1)] = (8));

} else {
var statearr_51106_52658 = state_51085__$1;
(statearr_51106_52658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (15))){
var inst_51027 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51027)){
var statearr_51107_52659 = state_51085__$1;
(statearr_51107_52659[(1)] = (19));

} else {
var statearr_51108_52660 = state_51085__$1;
(statearr_51108_52660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (21))){
var inst_51032 = (state_51085[(12)]);
var inst_51032__$1 = (state_51085[(2)]);
var inst_51033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51032__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51032__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51032__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51085__$1 = (function (){var statearr_51110 = state_51085;
(statearr_51110[(13)] = inst_51034);

(statearr_51110[(12)] = inst_51032__$1);

(statearr_51110[(11)] = inst_51033);

return statearr_51110;
})();
return cljs.core.async.ioc_alts_BANG_(state_51085__$1,(22),inst_51035);
} else {
if((state_val_51086 === (31))){
var inst_51067 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51067)){
var statearr_51112_52665 = state_51085__$1;
(statearr_51112_52665[(1)] = (32));

} else {
var statearr_51113_52666 = state_51085__$1;
(statearr_51113_52666[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (32))){
var inst_51041 = (state_51085[(14)]);
var state_51085__$1 = state_51085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51085__$1,(35),out,inst_51041);
} else {
if((state_val_51086 === (33))){
var inst_51032 = (state_51085[(12)]);
var inst_51009 = inst_51032;
var state_51085__$1 = (function (){var statearr_51114 = state_51085;
(statearr_51114[(7)] = inst_51009);

return statearr_51114;
})();
var statearr_51115_52670 = state_51085__$1;
(statearr_51115_52670[(2)] = null);

(statearr_51115_52670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (13))){
var inst_51009 = (state_51085[(7)]);
var inst_51016 = inst_51009.cljs$lang$protocol_mask$partition0$;
var inst_51017 = (inst_51016 & (64));
var inst_51018 = inst_51009.cljs$core$ISeq$;
var inst_51019 = (cljs.core.PROTOCOL_SENTINEL === inst_51018);
var inst_51020 = ((inst_51017) || (inst_51019));
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51020)){
var statearr_51117_52672 = state_51085__$1;
(statearr_51117_52672[(1)] = (16));

} else {
var statearr_51120_52674 = state_51085__$1;
(statearr_51120_52674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (22))){
var inst_51042 = (state_51085[(9)]);
var inst_51041 = (state_51085[(14)]);
var inst_51040 = (state_51085[(2)]);
var inst_51041__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51040,(0),null);
var inst_51042__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51040,(1),null);
var inst_51043 = (inst_51041__$1 == null);
var inst_51044 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51042__$1,change);
var inst_51045 = ((inst_51043) || (inst_51044));
var state_51085__$1 = (function (){var statearr_51121 = state_51085;
(statearr_51121[(9)] = inst_51042__$1);

(statearr_51121[(14)] = inst_51041__$1);

return statearr_51121;
})();
if(cljs.core.truth_(inst_51045)){
var statearr_51122_52678 = state_51085__$1;
(statearr_51122_52678[(1)] = (23));

} else {
var statearr_51126_52679 = state_51085__$1;
(statearr_51126_52679[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (36))){
var inst_51032 = (state_51085[(12)]);
var inst_51009 = inst_51032;
var state_51085__$1 = (function (){var statearr_51129 = state_51085;
(statearr_51129[(7)] = inst_51009);

return statearr_51129;
})();
var statearr_51131_52680 = state_51085__$1;
(statearr_51131_52680[(2)] = null);

(statearr_51131_52680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (29))){
var inst_51057 = (state_51085[(10)]);
var state_51085__$1 = state_51085;
var statearr_51132_52681 = state_51085__$1;
(statearr_51132_52681[(2)] = inst_51057);

(statearr_51132_52681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (6))){
var state_51085__$1 = state_51085;
var statearr_51133_52682 = state_51085__$1;
(statearr_51133_52682[(2)] = false);

(statearr_51133_52682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (28))){
var inst_51052 = (state_51085[(2)]);
var inst_51053 = calc_state();
var inst_51009 = inst_51053;
var state_51085__$1 = (function (){var statearr_51134 = state_51085;
(statearr_51134[(15)] = inst_51052);

(statearr_51134[(7)] = inst_51009);

return statearr_51134;
})();
var statearr_51135_52683 = state_51085__$1;
(statearr_51135_52683[(2)] = null);

(statearr_51135_52683[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (25))){
var inst_51081 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51136_52684 = state_51085__$1;
(statearr_51136_52684[(2)] = inst_51081);

(statearr_51136_52684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (34))){
var inst_51079 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51137_52686 = state_51085__$1;
(statearr_51137_52686[(2)] = inst_51079);

(statearr_51137_52686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (17))){
var state_51085__$1 = state_51085;
var statearr_51138_52687 = state_51085__$1;
(statearr_51138_52687[(2)] = false);

(statearr_51138_52687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (3))){
var state_51085__$1 = state_51085;
var statearr_51140_52689 = state_51085__$1;
(statearr_51140_52689[(2)] = false);

(statearr_51140_52689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (12))){
var inst_51083 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51085__$1,inst_51083);
} else {
if((state_val_51086 === (2))){
var inst_50981 = (state_51085[(8)]);
var inst_50988 = inst_50981.cljs$lang$protocol_mask$partition0$;
var inst_50989 = (inst_50988 & (64));
var inst_50990 = inst_50981.cljs$core$ISeq$;
var inst_50992 = (cljs.core.PROTOCOL_SENTINEL === inst_50990);
var inst_50993 = ((inst_50989) || (inst_50992));
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_50993)){
var statearr_51144_52691 = state_51085__$1;
(statearr_51144_52691[(1)] = (5));

} else {
var statearr_51145_52692 = state_51085__$1;
(statearr_51145_52692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (23))){
var inst_51041 = (state_51085[(14)]);
var inst_51047 = (inst_51041 == null);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51047)){
var statearr_51146_52694 = state_51085__$1;
(statearr_51146_52694[(1)] = (26));

} else {
var statearr_51147_52695 = state_51085__$1;
(statearr_51147_52695[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (35))){
var inst_51070 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
if(cljs.core.truth_(inst_51070)){
var statearr_51148_52696 = state_51085__$1;
(statearr_51148_52696[(1)] = (36));

} else {
var statearr_51149_52697 = state_51085__$1;
(statearr_51149_52697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (19))){
var inst_51009 = (state_51085[(7)]);
var inst_51029 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_51009);
var state_51085__$1 = state_51085;
var statearr_51150_52698 = state_51085__$1;
(statearr_51150_52698[(2)] = inst_51029);

(statearr_51150_52698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (11))){
var inst_51009 = (state_51085[(7)]);
var inst_51013 = (inst_51009 == null);
var inst_51014 = cljs.core.not(inst_51013);
var state_51085__$1 = state_51085;
if(inst_51014){
var statearr_51152_52699 = state_51085__$1;
(statearr_51152_52699[(1)] = (13));

} else {
var statearr_51155_52700 = state_51085__$1;
(statearr_51155_52700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (9))){
var inst_50981 = (state_51085[(8)]);
var state_51085__$1 = state_51085;
var statearr_51156_52701 = state_51085__$1;
(statearr_51156_52701[(2)] = inst_50981);

(statearr_51156_52701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (5))){
var state_51085__$1 = state_51085;
var statearr_51158_52702 = state_51085__$1;
(statearr_51158_52702[(2)] = true);

(statearr_51158_52702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (14))){
var state_51085__$1 = state_51085;
var statearr_51159_52703 = state_51085__$1;
(statearr_51159_52703[(2)] = false);

(statearr_51159_52703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (26))){
var inst_51042 = (state_51085[(9)]);
var inst_51049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51042);
var state_51085__$1 = state_51085;
var statearr_51160_52704 = state_51085__$1;
(statearr_51160_52704[(2)] = inst_51049);

(statearr_51160_52704[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (16))){
var state_51085__$1 = state_51085;
var statearr_51161_52705 = state_51085__$1;
(statearr_51161_52705[(2)] = true);

(statearr_51161_52705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (38))){
var inst_51075 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51167_52707 = state_51085__$1;
(statearr_51167_52707[(2)] = inst_51075);

(statearr_51167_52707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (30))){
var inst_51034 = (state_51085[(13)]);
var inst_51042 = (state_51085[(9)]);
var inst_51033 = (state_51085[(11)]);
var inst_51062 = cljs.core.empty_QMARK_(inst_51033);
var inst_51063 = (inst_51034.cljs$core$IFn$_invoke$arity$1 ? inst_51034.cljs$core$IFn$_invoke$arity$1(inst_51042) : inst_51034.call(null,inst_51042));
var inst_51064 = cljs.core.not(inst_51063);
var inst_51065 = ((inst_51062) && (inst_51064));
var state_51085__$1 = state_51085;
var statearr_51169_52709 = state_51085__$1;
(statearr_51169_52709[(2)] = inst_51065);

(statearr_51169_52709[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (10))){
var inst_50981 = (state_51085[(8)]);
var inst_51005 = (state_51085[(2)]);
var inst_51006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51005,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51005,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51005,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51009 = inst_50981;
var state_51085__$1 = (function (){var statearr_51171 = state_51085;
(statearr_51171[(16)] = inst_51008);

(statearr_51171[(17)] = inst_51007);

(statearr_51171[(18)] = inst_51006);

(statearr_51171[(7)] = inst_51009);

return statearr_51171;
})();
var statearr_51172_52713 = state_51085__$1;
(statearr_51172_52713[(2)] = null);

(statearr_51172_52713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (18))){
var inst_51024 = (state_51085[(2)]);
var state_51085__$1 = state_51085;
var statearr_51173_52714 = state_51085__$1;
(statearr_51173_52714[(2)] = inst_51024);

(statearr_51173_52714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (37))){
var state_51085__$1 = state_51085;
var statearr_51174_52715 = state_51085__$1;
(statearr_51174_52715[(2)] = null);

(statearr_51174_52715[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51086 === (8))){
var inst_50981 = (state_51085[(8)]);
var inst_51002 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_50981);
var state_51085__$1 = state_51085;
var statearr_51175_52716 = state_51085__$1;
(statearr_51175_52716[(2)] = inst_51002);

(statearr_51175_52716[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__37393__auto__ = null;
var cljs$core$async$mix_$_state_machine__37393__auto____0 = (function (){
var statearr_51185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51185[(0)] = cljs$core$async$mix_$_state_machine__37393__auto__);

(statearr_51185[(1)] = (1));

return statearr_51185;
});
var cljs$core$async$mix_$_state_machine__37393__auto____1 = (function (state_51085){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51085);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51186){var ex__37396__auto__ = e51186;
var statearr_51187_52717 = state_51085;
(statearr_51187_52717[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51085[(4)]))){
var statearr_51188_52718 = state_51085;
(statearr_51188_52718[(1)] = cljs.core.first((state_51085[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52723 = state_51085;
state_51085 = G__52723;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37393__auto__ = function(state_51085){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37393__auto____1.call(this,state_51085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37393__auto____0;
cljs$core$async$mix_$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37393__auto____1;
return cljs$core$async$mix_$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51191 = f__37527__auto__();
(statearr_51191[(6)] = c__37526__auto___52633);

return statearr_51191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_52724 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_52724(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_52725 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_52725(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_52730 = (function() {
var G__52731 = null;
var G__52731__1 = (function (p){
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
var G__52731__2 = (function (p,v){
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
G__52731 = function(p,v){
switch(arguments.length){
case 1:
return G__52731__1.call(this,p);
case 2:
return G__52731__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52731.cljs$core$IFn$_invoke$arity$1 = G__52731__1;
G__52731.cljs$core$IFn$_invoke$arity$2 = G__52731__2;
return G__52731;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51205 = arguments.length;
switch (G__51205) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52730(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_52730(p,v);
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
var G__51229 = arguments.length;
switch (G__51229) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51218_SHARP_){
if(cljs.core.truth_((p1__51218_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51218_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51218_SHARP_.call(null,topic)))){
return p1__51218_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51218_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51230 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51230 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51231){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51231 = meta51231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51232,meta51231__$1){
var self__ = this;
var _51232__$1 = this;
return (new cljs.core.async.t_cljs$core$async51230(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51231__$1));
}));

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51232){
var self__ = this;
var _51232__$1 = this;
return self__.meta51231;
}));

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51231","meta51231",-450746361,null)], null);
}));

(cljs.core.async.t_cljs$core$async51230.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51230");

(cljs.core.async.t_cljs$core$async51230.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51230");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51230.
 */
cljs.core.async.__GT_t_cljs$core$async51230 = (function cljs$core$async$__GT_t_cljs$core$async51230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51231){
return (new cljs.core.async.t_cljs$core$async51230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta51231));
});

}

return (new cljs.core.async.t_cljs$core$async51230(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37526__auto___52754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51306){
var state_val_51307 = (state_51306[(1)]);
if((state_val_51307 === (7))){
var inst_51302 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51309_52755 = state_51306__$1;
(statearr_51309_52755[(2)] = inst_51302);

(statearr_51309_52755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (20))){
var state_51306__$1 = state_51306;
var statearr_51310_52756 = state_51306__$1;
(statearr_51310_52756[(2)] = null);

(statearr_51310_52756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (1))){
var state_51306__$1 = state_51306;
var statearr_51311_52757 = state_51306__$1;
(statearr_51311_52757[(2)] = null);

(statearr_51311_52757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (24))){
var inst_51285 = (state_51306[(7)]);
var inst_51294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51285);
var state_51306__$1 = state_51306;
var statearr_51312_52758 = state_51306__$1;
(statearr_51312_52758[(2)] = inst_51294);

(statearr_51312_52758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (4))){
var inst_51237 = (state_51306[(8)]);
var inst_51237__$1 = (state_51306[(2)]);
var inst_51238 = (inst_51237__$1 == null);
var state_51306__$1 = (function (){var statearr_51313 = state_51306;
(statearr_51313[(8)] = inst_51237__$1);

return statearr_51313;
})();
if(cljs.core.truth_(inst_51238)){
var statearr_51314_52759 = state_51306__$1;
(statearr_51314_52759[(1)] = (5));

} else {
var statearr_51315_52760 = state_51306__$1;
(statearr_51315_52760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (15))){
var inst_51279 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51316_52761 = state_51306__$1;
(statearr_51316_52761[(2)] = inst_51279);

(statearr_51316_52761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (21))){
var inst_51299 = (state_51306[(2)]);
var state_51306__$1 = (function (){var statearr_51317 = state_51306;
(statearr_51317[(9)] = inst_51299);

return statearr_51317;
})();
var statearr_51318_52762 = state_51306__$1;
(statearr_51318_52762[(2)] = null);

(statearr_51318_52762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (13))){
var inst_51261 = (state_51306[(10)]);
var inst_51263 = cljs.core.chunked_seq_QMARK_(inst_51261);
var state_51306__$1 = state_51306;
if(inst_51263){
var statearr_51320_52763 = state_51306__$1;
(statearr_51320_52763[(1)] = (16));

} else {
var statearr_51321_52764 = state_51306__$1;
(statearr_51321_52764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (22))){
var inst_51291 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
if(cljs.core.truth_(inst_51291)){
var statearr_51322_52765 = state_51306__$1;
(statearr_51322_52765[(1)] = (23));

} else {
var statearr_51323_52766 = state_51306__$1;
(statearr_51323_52766[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (6))){
var inst_51287 = (state_51306[(11)]);
var inst_51237 = (state_51306[(8)]);
var inst_51285 = (state_51306[(7)]);
var inst_51285__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51237) : topic_fn.call(null,inst_51237));
var inst_51286 = cljs.core.deref(mults);
var inst_51287__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51286,inst_51285__$1);
var state_51306__$1 = (function (){var statearr_51324 = state_51306;
(statearr_51324[(11)] = inst_51287__$1);

(statearr_51324[(7)] = inst_51285__$1);

return statearr_51324;
})();
if(cljs.core.truth_(inst_51287__$1)){
var statearr_51325_52767 = state_51306__$1;
(statearr_51325_52767[(1)] = (19));

} else {
var statearr_51326_52768 = state_51306__$1;
(statearr_51326_52768[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (25))){
var inst_51296 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51327_52769 = state_51306__$1;
(statearr_51327_52769[(2)] = inst_51296);

(statearr_51327_52769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (17))){
var inst_51261 = (state_51306[(10)]);
var inst_51270 = cljs.core.first(inst_51261);
var inst_51271 = cljs.core.async.muxch_STAR_(inst_51270);
var inst_51272 = cljs.core.async.close_BANG_(inst_51271);
var inst_51273 = cljs.core.next(inst_51261);
var inst_51247 = inst_51273;
var inst_51248 = null;
var inst_51249 = (0);
var inst_51250 = (0);
var state_51306__$1 = (function (){var statearr_51328 = state_51306;
(statearr_51328[(12)] = inst_51272);

(statearr_51328[(13)] = inst_51250);

(statearr_51328[(14)] = inst_51248);

(statearr_51328[(15)] = inst_51249);

(statearr_51328[(16)] = inst_51247);

return statearr_51328;
})();
var statearr_51329_52774 = state_51306__$1;
(statearr_51329_52774[(2)] = null);

(statearr_51329_52774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (3))){
var inst_51304 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51306__$1,inst_51304);
} else {
if((state_val_51307 === (12))){
var inst_51281 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51330_52778 = state_51306__$1;
(statearr_51330_52778[(2)] = inst_51281);

(statearr_51330_52778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (2))){
var state_51306__$1 = state_51306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51306__$1,(4),ch);
} else {
if((state_val_51307 === (23))){
var state_51306__$1 = state_51306;
var statearr_51331_52779 = state_51306__$1;
(statearr_51331_52779[(2)] = null);

(statearr_51331_52779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (19))){
var inst_51287 = (state_51306[(11)]);
var inst_51237 = (state_51306[(8)]);
var inst_51289 = cljs.core.async.muxch_STAR_(inst_51287);
var state_51306__$1 = state_51306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51306__$1,(22),inst_51289,inst_51237);
} else {
if((state_val_51307 === (11))){
var inst_51261 = (state_51306[(10)]);
var inst_51247 = (state_51306[(16)]);
var inst_51261__$1 = cljs.core.seq(inst_51247);
var state_51306__$1 = (function (){var statearr_51333 = state_51306;
(statearr_51333[(10)] = inst_51261__$1);

return statearr_51333;
})();
if(inst_51261__$1){
var statearr_51334_52784 = state_51306__$1;
(statearr_51334_52784[(1)] = (13));

} else {
var statearr_51335_52785 = state_51306__$1;
(statearr_51335_52785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (9))){
var inst_51283 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51336_52786 = state_51306__$1;
(statearr_51336_52786[(2)] = inst_51283);

(statearr_51336_52786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (5))){
var inst_51244 = cljs.core.deref(mults);
var inst_51245 = cljs.core.vals(inst_51244);
var inst_51246 = cljs.core.seq(inst_51245);
var inst_51247 = inst_51246;
var inst_51248 = null;
var inst_51249 = (0);
var inst_51250 = (0);
var state_51306__$1 = (function (){var statearr_51337 = state_51306;
(statearr_51337[(13)] = inst_51250);

(statearr_51337[(14)] = inst_51248);

(statearr_51337[(15)] = inst_51249);

(statearr_51337[(16)] = inst_51247);

return statearr_51337;
})();
var statearr_51338_52787 = state_51306__$1;
(statearr_51338_52787[(2)] = null);

(statearr_51338_52787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (14))){
var state_51306__$1 = state_51306;
var statearr_51342_52788 = state_51306__$1;
(statearr_51342_52788[(2)] = null);

(statearr_51342_52788[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (16))){
var inst_51261 = (state_51306[(10)]);
var inst_51265 = cljs.core.chunk_first(inst_51261);
var inst_51266 = cljs.core.chunk_rest(inst_51261);
var inst_51267 = cljs.core.count(inst_51265);
var inst_51247 = inst_51266;
var inst_51248 = inst_51265;
var inst_51249 = inst_51267;
var inst_51250 = (0);
var state_51306__$1 = (function (){var statearr_51343 = state_51306;
(statearr_51343[(13)] = inst_51250);

(statearr_51343[(14)] = inst_51248);

(statearr_51343[(15)] = inst_51249);

(statearr_51343[(16)] = inst_51247);

return statearr_51343;
})();
var statearr_51345_52789 = state_51306__$1;
(statearr_51345_52789[(2)] = null);

(statearr_51345_52789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (10))){
var inst_51250 = (state_51306[(13)]);
var inst_51248 = (state_51306[(14)]);
var inst_51249 = (state_51306[(15)]);
var inst_51247 = (state_51306[(16)]);
var inst_51255 = cljs.core._nth(inst_51248,inst_51250);
var inst_51256 = cljs.core.async.muxch_STAR_(inst_51255);
var inst_51257 = cljs.core.async.close_BANG_(inst_51256);
var inst_51258 = (inst_51250 + (1));
var tmp51339 = inst_51248;
var tmp51340 = inst_51249;
var tmp51341 = inst_51247;
var inst_51247__$1 = tmp51341;
var inst_51248__$1 = tmp51339;
var inst_51249__$1 = tmp51340;
var inst_51250__$1 = inst_51258;
var state_51306__$1 = (function (){var statearr_51349 = state_51306;
(statearr_51349[(13)] = inst_51250__$1);

(statearr_51349[(14)] = inst_51248__$1);

(statearr_51349[(15)] = inst_51249__$1);

(statearr_51349[(16)] = inst_51247__$1);

(statearr_51349[(17)] = inst_51257);

return statearr_51349;
})();
var statearr_51355_52790 = state_51306__$1;
(statearr_51355_52790[(2)] = null);

(statearr_51355_52790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (18))){
var inst_51276 = (state_51306[(2)]);
var state_51306__$1 = state_51306;
var statearr_51356_52791 = state_51306__$1;
(statearr_51356_52791[(2)] = inst_51276);

(statearr_51356_52791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51307 === (8))){
var inst_51250 = (state_51306[(13)]);
var inst_51249 = (state_51306[(15)]);
var inst_51252 = (inst_51250 < inst_51249);
var inst_51253 = inst_51252;
var state_51306__$1 = state_51306;
if(cljs.core.truth_(inst_51253)){
var statearr_51361_52793 = state_51306__$1;
(statearr_51361_52793[(1)] = (10));

} else {
var statearr_51362_52794 = state_51306__$1;
(statearr_51362_52794[(1)] = (11));

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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51363 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51363[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51363[(1)] = (1));

return statearr_51363;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51306){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51306);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51364){var ex__37396__auto__ = e51364;
var statearr_51369_52797 = state_51306;
(statearr_51369_52797[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51306[(4)]))){
var statearr_51370_52798 = state_51306;
(statearr_51370_52798[(1)] = cljs.core.first((state_51306[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52799 = state_51306;
state_51306 = G__52799;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51376 = f__37527__auto__();
(statearr_51376[(6)] = c__37526__auto___52754);

return statearr_51376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var G__51378 = arguments.length;
switch (G__51378) {
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
var G__51381 = arguments.length;
switch (G__51381) {
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
var G__51383 = arguments.length;
switch (G__51383) {
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
var c__37526__auto___52811 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51427){
var state_val_51428 = (state_51427[(1)]);
if((state_val_51428 === (7))){
var state_51427__$1 = state_51427;
var statearr_51430_52812 = state_51427__$1;
(statearr_51430_52812[(2)] = null);

(statearr_51430_52812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (1))){
var state_51427__$1 = state_51427;
var statearr_51431_52813 = state_51427__$1;
(statearr_51431_52813[(2)] = null);

(statearr_51431_52813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (4))){
var inst_51387 = (state_51427[(7)]);
var inst_51388 = (state_51427[(8)]);
var inst_51390 = (inst_51388 < inst_51387);
var state_51427__$1 = state_51427;
if(cljs.core.truth_(inst_51390)){
var statearr_51432_52814 = state_51427__$1;
(statearr_51432_52814[(1)] = (6));

} else {
var statearr_51433_52815 = state_51427__$1;
(statearr_51433_52815[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (15))){
var inst_51413 = (state_51427[(9)]);
var inst_51418 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51413);
var state_51427__$1 = state_51427;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51427__$1,(17),out,inst_51418);
} else {
if((state_val_51428 === (13))){
var inst_51413 = (state_51427[(9)]);
var inst_51413__$1 = (state_51427[(2)]);
var inst_51414 = cljs.core.some(cljs.core.nil_QMARK_,inst_51413__$1);
var state_51427__$1 = (function (){var statearr_51434 = state_51427;
(statearr_51434[(9)] = inst_51413__$1);

return statearr_51434;
})();
if(cljs.core.truth_(inst_51414)){
var statearr_51435_52817 = state_51427__$1;
(statearr_51435_52817[(1)] = (14));

} else {
var statearr_51436_52818 = state_51427__$1;
(statearr_51436_52818[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (6))){
var state_51427__$1 = state_51427;
var statearr_51437_52819 = state_51427__$1;
(statearr_51437_52819[(2)] = null);

(statearr_51437_52819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (17))){
var inst_51420 = (state_51427[(2)]);
var state_51427__$1 = (function (){var statearr_51439 = state_51427;
(statearr_51439[(10)] = inst_51420);

return statearr_51439;
})();
var statearr_51440_52820 = state_51427__$1;
(statearr_51440_52820[(2)] = null);

(statearr_51440_52820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (3))){
var inst_51425 = (state_51427[(2)]);
var state_51427__$1 = state_51427;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51427__$1,inst_51425);
} else {
if((state_val_51428 === (12))){
var _ = (function (){var statearr_51442 = state_51427;
(statearr_51442[(4)] = cljs.core.rest((state_51427[(4)])));

return statearr_51442;
})();
var state_51427__$1 = state_51427;
var ex51438 = (state_51427__$1[(2)]);
var statearr_51443_52822 = state_51427__$1;
(statearr_51443_52822[(5)] = ex51438);


if((ex51438 instanceof Object)){
var statearr_51444_52823 = state_51427__$1;
(statearr_51444_52823[(1)] = (11));

(statearr_51444_52823[(5)] = null);

} else {
throw ex51438;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (2))){
var inst_51386 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51387 = cnt;
var inst_51388 = (0);
var state_51427__$1 = (function (){var statearr_51445 = state_51427;
(statearr_51445[(7)] = inst_51387);

(statearr_51445[(8)] = inst_51388);

(statearr_51445[(11)] = inst_51386);

return statearr_51445;
})();
var statearr_51446_52827 = state_51427__$1;
(statearr_51446_52827[(2)] = null);

(statearr_51446_52827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (11))){
var inst_51392 = (state_51427[(2)]);
var inst_51393 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51427__$1 = (function (){var statearr_51447 = state_51427;
(statearr_51447[(12)] = inst_51392);

return statearr_51447;
})();
var statearr_51448_52828 = state_51427__$1;
(statearr_51448_52828[(2)] = inst_51393);

(statearr_51448_52828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (9))){
var inst_51388 = (state_51427[(8)]);
var _ = (function (){var statearr_51449 = state_51427;
(statearr_51449[(4)] = cljs.core.cons((12),(state_51427[(4)])));

return statearr_51449;
})();
var inst_51399 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51388) : chs__$1.call(null,inst_51388));
var inst_51400 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51388) : done.call(null,inst_51388));
var inst_51401 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51399,inst_51400);
var ___$1 = (function (){var statearr_51450 = state_51427;
(statearr_51450[(4)] = cljs.core.rest((state_51427[(4)])));

return statearr_51450;
})();
var state_51427__$1 = state_51427;
var statearr_51451_52829 = state_51427__$1;
(statearr_51451_52829[(2)] = inst_51401);

(statearr_51451_52829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (5))){
var inst_51411 = (state_51427[(2)]);
var state_51427__$1 = (function (){var statearr_51453 = state_51427;
(statearr_51453[(13)] = inst_51411);

return statearr_51453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51427__$1,(13),dchan);
} else {
if((state_val_51428 === (14))){
var inst_51416 = cljs.core.async.close_BANG_(out);
var state_51427__$1 = state_51427;
var statearr_51454_52830 = state_51427__$1;
(statearr_51454_52830[(2)] = inst_51416);

(statearr_51454_52830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (16))){
var inst_51423 = (state_51427[(2)]);
var state_51427__$1 = state_51427;
var statearr_51455_52831 = state_51427__$1;
(statearr_51455_52831[(2)] = inst_51423);

(statearr_51455_52831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (10))){
var inst_51388 = (state_51427[(8)]);
var inst_51404 = (state_51427[(2)]);
var inst_51405 = (inst_51388 + (1));
var inst_51388__$1 = inst_51405;
var state_51427__$1 = (function (){var statearr_51456 = state_51427;
(statearr_51456[(8)] = inst_51388__$1);

(statearr_51456[(14)] = inst_51404);

return statearr_51456;
})();
var statearr_51457_52832 = state_51427__$1;
(statearr_51457_52832[(2)] = null);

(statearr_51457_52832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51428 === (8))){
var inst_51409 = (state_51427[(2)]);
var state_51427__$1 = state_51427;
var statearr_51458_52833 = state_51427__$1;
(statearr_51458_52833[(2)] = inst_51409);

(statearr_51458_52833[(1)] = (5));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51459[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51459[(1)] = (1));

return statearr_51459;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51427){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51427);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51460){var ex__37396__auto__ = e51460;
var statearr_51461_52834 = state_51427;
(statearr_51461_52834[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51427[(4)]))){
var statearr_51462_52835 = state_51427;
(statearr_51462_52835[(1)] = cljs.core.first((state_51427[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52836 = state_51427;
state_51427 = G__52836;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51464 = f__37527__auto__();
(statearr_51464[(6)] = c__37526__auto___52811);

return statearr_51464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var G__51467 = arguments.length;
switch (G__51467) {
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
var c__37526__auto___52838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51499){
var state_val_51500 = (state_51499[(1)]);
if((state_val_51500 === (7))){
var inst_51478 = (state_51499[(7)]);
var inst_51479 = (state_51499[(8)]);
var inst_51478__$1 = (state_51499[(2)]);
var inst_51479__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51478__$1,(0),null);
var inst_51480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51478__$1,(1),null);
var inst_51481 = (inst_51479__$1 == null);
var state_51499__$1 = (function (){var statearr_51502 = state_51499;
(statearr_51502[(7)] = inst_51478__$1);

(statearr_51502[(9)] = inst_51480);

(statearr_51502[(8)] = inst_51479__$1);

return statearr_51502;
})();
if(cljs.core.truth_(inst_51481)){
var statearr_51503_52839 = state_51499__$1;
(statearr_51503_52839[(1)] = (8));

} else {
var statearr_51504_52840 = state_51499__$1;
(statearr_51504_52840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (1))){
var inst_51468 = cljs.core.vec(chs);
var inst_51469 = inst_51468;
var state_51499__$1 = (function (){var statearr_51505 = state_51499;
(statearr_51505[(10)] = inst_51469);

return statearr_51505;
})();
var statearr_51506_52841 = state_51499__$1;
(statearr_51506_52841[(2)] = null);

(statearr_51506_52841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (4))){
var inst_51469 = (state_51499[(10)]);
var state_51499__$1 = state_51499;
return cljs.core.async.ioc_alts_BANG_(state_51499__$1,(7),inst_51469);
} else {
if((state_val_51500 === (6))){
var inst_51495 = (state_51499[(2)]);
var state_51499__$1 = state_51499;
var statearr_51507_52842 = state_51499__$1;
(statearr_51507_52842[(2)] = inst_51495);

(statearr_51507_52842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (3))){
var inst_51497 = (state_51499[(2)]);
var state_51499__$1 = state_51499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51499__$1,inst_51497);
} else {
if((state_val_51500 === (2))){
var inst_51469 = (state_51499[(10)]);
var inst_51471 = cljs.core.count(inst_51469);
var inst_51472 = (inst_51471 > (0));
var state_51499__$1 = state_51499;
if(cljs.core.truth_(inst_51472)){
var statearr_51509_52846 = state_51499__$1;
(statearr_51509_52846[(1)] = (4));

} else {
var statearr_51510_52847 = state_51499__$1;
(statearr_51510_52847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (11))){
var inst_51469 = (state_51499[(10)]);
var inst_51488 = (state_51499[(2)]);
var tmp51508 = inst_51469;
var inst_51469__$1 = tmp51508;
var state_51499__$1 = (function (){var statearr_51511 = state_51499;
(statearr_51511[(11)] = inst_51488);

(statearr_51511[(10)] = inst_51469__$1);

return statearr_51511;
})();
var statearr_51512_52848 = state_51499__$1;
(statearr_51512_52848[(2)] = null);

(statearr_51512_52848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (9))){
var inst_51479 = (state_51499[(8)]);
var state_51499__$1 = state_51499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51499__$1,(11),out,inst_51479);
} else {
if((state_val_51500 === (5))){
var inst_51493 = cljs.core.async.close_BANG_(out);
var state_51499__$1 = state_51499;
var statearr_51514_52850 = state_51499__$1;
(statearr_51514_52850[(2)] = inst_51493);

(statearr_51514_52850[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (10))){
var inst_51491 = (state_51499[(2)]);
var state_51499__$1 = state_51499;
var statearr_51515_52851 = state_51499__$1;
(statearr_51515_52851[(2)] = inst_51491);

(statearr_51515_52851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51500 === (8))){
var inst_51478 = (state_51499[(7)]);
var inst_51480 = (state_51499[(9)]);
var inst_51469 = (state_51499[(10)]);
var inst_51479 = (state_51499[(8)]);
var inst_51483 = (function (){var cs = inst_51469;
var vec__51474 = inst_51478;
var v = inst_51479;
var c = inst_51480;
return (function (p1__51465_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51465_SHARP_);
});
})();
var inst_51484 = cljs.core.filterv(inst_51483,inst_51469);
var inst_51469__$1 = inst_51484;
var state_51499__$1 = (function (){var statearr_51516 = state_51499;
(statearr_51516[(10)] = inst_51469__$1);

return statearr_51516;
})();
var statearr_51517_52852 = state_51499__$1;
(statearr_51517_52852[(2)] = null);

(statearr_51517_52852[(1)] = (2));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51518 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51518[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51518[(1)] = (1));

return statearr_51518;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51499){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51499);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51519){var ex__37396__auto__ = e51519;
var statearr_51520_52853 = state_51499;
(statearr_51520_52853[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51499[(4)]))){
var statearr_51521_52854 = state_51499;
(statearr_51521_52854[(1)] = cljs.core.first((state_51499[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52858 = state_51499;
state_51499 = G__52858;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51522 = f__37527__auto__();
(statearr_51522[(6)] = c__37526__auto___52838);

return statearr_51522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
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
var G__51525 = arguments.length;
switch (G__51525) {
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
var c__37526__auto___52861 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51550){
var state_val_51551 = (state_51550[(1)]);
if((state_val_51551 === (7))){
var inst_51532 = (state_51550[(7)]);
var inst_51532__$1 = (state_51550[(2)]);
var inst_51533 = (inst_51532__$1 == null);
var inst_51534 = cljs.core.not(inst_51533);
var state_51550__$1 = (function (){var statearr_51552 = state_51550;
(statearr_51552[(7)] = inst_51532__$1);

return statearr_51552;
})();
if(inst_51534){
var statearr_51554_52862 = state_51550__$1;
(statearr_51554_52862[(1)] = (8));

} else {
var statearr_51555_52863 = state_51550__$1;
(statearr_51555_52863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (1))){
var inst_51527 = (0);
var state_51550__$1 = (function (){var statearr_51556 = state_51550;
(statearr_51556[(8)] = inst_51527);

return statearr_51556;
})();
var statearr_51557_52864 = state_51550__$1;
(statearr_51557_52864[(2)] = null);

(statearr_51557_52864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (4))){
var state_51550__$1 = state_51550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51550__$1,(7),ch);
} else {
if((state_val_51551 === (6))){
var inst_51545 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
var statearr_51558_52869 = state_51550__$1;
(statearr_51558_52869[(2)] = inst_51545);

(statearr_51558_52869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (3))){
var inst_51547 = (state_51550[(2)]);
var inst_51548 = cljs.core.async.close_BANG_(out);
var state_51550__$1 = (function (){var statearr_51559 = state_51550;
(statearr_51559[(9)] = inst_51547);

return statearr_51559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51550__$1,inst_51548);
} else {
if((state_val_51551 === (2))){
var inst_51527 = (state_51550[(8)]);
var inst_51529 = (inst_51527 < n);
var state_51550__$1 = state_51550;
if(cljs.core.truth_(inst_51529)){
var statearr_51560_52870 = state_51550__$1;
(statearr_51560_52870[(1)] = (4));

} else {
var statearr_51561_52871 = state_51550__$1;
(statearr_51561_52871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (11))){
var inst_51527 = (state_51550[(8)]);
var inst_51537 = (state_51550[(2)]);
var inst_51538 = (inst_51527 + (1));
var inst_51527__$1 = inst_51538;
var state_51550__$1 = (function (){var statearr_51563 = state_51550;
(statearr_51563[(10)] = inst_51537);

(statearr_51563[(8)] = inst_51527__$1);

return statearr_51563;
})();
var statearr_51564_52872 = state_51550__$1;
(statearr_51564_52872[(2)] = null);

(statearr_51564_52872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (9))){
var state_51550__$1 = state_51550;
var statearr_51565_52873 = state_51550__$1;
(statearr_51565_52873[(2)] = null);

(statearr_51565_52873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (5))){
var state_51550__$1 = state_51550;
var statearr_51566_52874 = state_51550__$1;
(statearr_51566_52874[(2)] = null);

(statearr_51566_52874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (10))){
var inst_51542 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
var statearr_51567_52875 = state_51550__$1;
(statearr_51567_52875[(2)] = inst_51542);

(statearr_51567_52875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (8))){
var inst_51532 = (state_51550[(7)]);
var state_51550__$1 = state_51550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51550__$1,(11),out,inst_51532);
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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51568[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51568[(1)] = (1));

return statearr_51568;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51550){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51550);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51569){var ex__37396__auto__ = e51569;
var statearr_51570_52876 = state_51550;
(statearr_51570_52876[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51550[(4)]))){
var statearr_51572_52877 = state_51550;
(statearr_51572_52877[(1)] = cljs.core.first((state_51550[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52878 = state_51550;
state_51550 = G__52878;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51573 = f__37527__auto__();
(statearr_51573[(6)] = c__37526__auto___52861);

return statearr_51573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51575 = (function (f,ch,meta51576){
this.f = f;
this.ch = ch;
this.meta51576 = meta51576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51577,meta51576__$1){
var self__ = this;
var _51577__$1 = this;
return (new cljs.core.async.t_cljs$core$async51575(self__.f,self__.ch,meta51576__$1));
}));

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51577){
var self__ = this;
var _51577__$1 = this;
return self__.meta51576;
}));

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51579 = (function (f,ch,meta51576,_,fn1,meta51580){
this.f = f;
this.ch = ch;
this.meta51576 = meta51576;
this._ = _;
this.fn1 = fn1;
this.meta51580 = meta51580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51581,meta51580__$1){
var self__ = this;
var _51581__$1 = this;
return (new cljs.core.async.t_cljs$core$async51579(self__.f,self__.ch,self__.meta51576,self__._,self__.fn1,meta51580__$1));
}));

(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51581){
var self__ = this;
var _51581__$1 = this;
return self__.meta51580;
}));

(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51574_SHARP_){
var G__51583 = (((p1__51574_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51574_SHARP_) : self__.f.call(null,p1__51574_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51583) : f1.call(null,G__51583));
});
}));

(cljs.core.async.t_cljs$core$async51579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51576","meta51576",67762004,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51575","cljs.core.async/t_cljs$core$async51575",2108114000,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51580","meta51580",1874504382,null)], null);
}));

(cljs.core.async.t_cljs$core$async51579.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51579");

(cljs.core.async.t_cljs$core$async51579.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51579");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51579.
 */
cljs.core.async.__GT_t_cljs$core$async51579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51579(f__$1,ch__$1,meta51576__$1,___$2,fn1__$1,meta51580){
return (new cljs.core.async.t_cljs$core$async51579(f__$1,ch__$1,meta51576__$1,___$2,fn1__$1,meta51580));
});

}

return (new cljs.core.async.t_cljs$core$async51579(self__.f,self__.ch,self__.meta51576,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51584 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51584) : self__.f.call(null,G__51584));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51575.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51576","meta51576",67762004,null)], null);
}));

(cljs.core.async.t_cljs$core$async51575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51575");

(cljs.core.async.t_cljs$core$async51575.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51575.
 */
cljs.core.async.__GT_t_cljs$core$async51575 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async51575(f__$1,ch__$1,meta51576){
return (new cljs.core.async.t_cljs$core$async51575(f__$1,ch__$1,meta51576));
});

}

return (new cljs.core.async.t_cljs$core$async51575(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51586 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51586 = (function (f,ch,meta51587){
this.f = f;
this.ch = ch;
this.meta51587 = meta51587;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51588,meta51587__$1){
var self__ = this;
var _51588__$1 = this;
return (new cljs.core.async.t_cljs$core$async51586(self__.f,self__.ch,meta51587__$1));
}));

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51588){
var self__ = this;
var _51588__$1 = this;
return self__.meta51587;
}));

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51586.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51586.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51587","meta51587",831810824,null)], null);
}));

(cljs.core.async.t_cljs$core$async51586.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51586.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51586");

(cljs.core.async.t_cljs$core$async51586.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51586");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51586.
 */
cljs.core.async.__GT_t_cljs$core$async51586 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async51586(f__$1,ch__$1,meta51587){
return (new cljs.core.async.t_cljs$core$async51586(f__$1,ch__$1,meta51587));
});

}

return (new cljs.core.async.t_cljs$core$async51586(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async51591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51591 = (function (p,ch,meta51592){
this.p = p;
this.ch = ch;
this.meta51592 = meta51592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51593,meta51592__$1){
var self__ = this;
var _51593__$1 = this;
return (new cljs.core.async.t_cljs$core$async51591(self__.p,self__.ch,meta51592__$1));
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51593){
var self__ = this;
var _51593__$1 = this;
return self__.meta51592;
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51592","meta51592",402010430,null)], null);
}));

(cljs.core.async.t_cljs$core$async51591.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51591");

(cljs.core.async.t_cljs$core$async51591.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async51591");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51591.
 */
cljs.core.async.__GT_t_cljs$core$async51591 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async51591(p__$1,ch__$1,meta51592){
return (new cljs.core.async.t_cljs$core$async51591(p__$1,ch__$1,meta51592));
});

}

return (new cljs.core.async.t_cljs$core$async51591(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__51597 = arguments.length;
switch (G__51597) {
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
var c__37526__auto___52933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51619){
var state_val_51620 = (state_51619[(1)]);
if((state_val_51620 === (7))){
var inst_51615 = (state_51619[(2)]);
var state_51619__$1 = state_51619;
var statearr_51621_52934 = state_51619__$1;
(statearr_51621_52934[(2)] = inst_51615);

(statearr_51621_52934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (1))){
var state_51619__$1 = state_51619;
var statearr_51622_52935 = state_51619__$1;
(statearr_51622_52935[(2)] = null);

(statearr_51622_52935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (4))){
var inst_51600 = (state_51619[(7)]);
var inst_51600__$1 = (state_51619[(2)]);
var inst_51601 = (inst_51600__$1 == null);
var state_51619__$1 = (function (){var statearr_51623 = state_51619;
(statearr_51623[(7)] = inst_51600__$1);

return statearr_51623;
})();
if(cljs.core.truth_(inst_51601)){
var statearr_51624_52939 = state_51619__$1;
(statearr_51624_52939[(1)] = (5));

} else {
var statearr_51625_52940 = state_51619__$1;
(statearr_51625_52940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (6))){
var inst_51600 = (state_51619[(7)]);
var inst_51605 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51600) : p.call(null,inst_51600));
var state_51619__$1 = state_51619;
if(cljs.core.truth_(inst_51605)){
var statearr_51627_52941 = state_51619__$1;
(statearr_51627_52941[(1)] = (8));

} else {
var statearr_51628_52942 = state_51619__$1;
(statearr_51628_52942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (3))){
var inst_51617 = (state_51619[(2)]);
var state_51619__$1 = state_51619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51619__$1,inst_51617);
} else {
if((state_val_51620 === (2))){
var state_51619__$1 = state_51619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51619__$1,(4),ch);
} else {
if((state_val_51620 === (11))){
var inst_51608 = (state_51619[(2)]);
var state_51619__$1 = state_51619;
var statearr_51629_52943 = state_51619__$1;
(statearr_51629_52943[(2)] = inst_51608);

(statearr_51629_52943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (9))){
var state_51619__$1 = state_51619;
var statearr_51630_52944 = state_51619__$1;
(statearr_51630_52944[(2)] = null);

(statearr_51630_52944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (5))){
var inst_51603 = cljs.core.async.close_BANG_(out);
var state_51619__$1 = state_51619;
var statearr_51631_52945 = state_51619__$1;
(statearr_51631_52945[(2)] = inst_51603);

(statearr_51631_52945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (10))){
var inst_51611 = (state_51619[(2)]);
var state_51619__$1 = (function (){var statearr_51632 = state_51619;
(statearr_51632[(8)] = inst_51611);

return statearr_51632;
})();
var statearr_51633_52946 = state_51619__$1;
(statearr_51633_52946[(2)] = null);

(statearr_51633_52946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51620 === (8))){
var inst_51600 = (state_51619[(7)]);
var state_51619__$1 = state_51619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51619__$1,(11),out,inst_51600);
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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51635 = [null,null,null,null,null,null,null,null,null];
(statearr_51635[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51635[(1)] = (1));

return statearr_51635;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51619){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51619);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51636){var ex__37396__auto__ = e51636;
var statearr_51637_52947 = state_51619;
(statearr_51637_52947[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51619[(4)]))){
var statearr_51638_52948 = state_51619;
(statearr_51638_52948[(1)] = cljs.core.first((state_51619[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52952 = state_51619;
state_51619 = G__52952;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51639 = f__37527__auto__();
(statearr_51639[(6)] = c__37526__auto___52933);

return statearr_51639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__51643 = arguments.length;
switch (G__51643) {
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
var c__37526__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51707){
var state_val_51708 = (state_51707[(1)]);
if((state_val_51708 === (7))){
var inst_51703 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51709_52961 = state_51707__$1;
(statearr_51709_52961[(2)] = inst_51703);

(statearr_51709_52961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (20))){
var inst_51673 = (state_51707[(7)]);
var inst_51684 = (state_51707[(2)]);
var inst_51685 = cljs.core.next(inst_51673);
var inst_51659 = inst_51685;
var inst_51660 = null;
var inst_51661 = (0);
var inst_51662 = (0);
var state_51707__$1 = (function (){var statearr_51710 = state_51707;
(statearr_51710[(8)] = inst_51684);

(statearr_51710[(9)] = inst_51659);

(statearr_51710[(10)] = inst_51660);

(statearr_51710[(11)] = inst_51661);

(statearr_51710[(12)] = inst_51662);

return statearr_51710;
})();
var statearr_51711_52965 = state_51707__$1;
(statearr_51711_52965[(2)] = null);

(statearr_51711_52965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (1))){
var state_51707__$1 = state_51707;
var statearr_51712_52966 = state_51707__$1;
(statearr_51712_52966[(2)] = null);

(statearr_51712_52966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (4))){
var inst_51646 = (state_51707[(13)]);
var inst_51646__$1 = (state_51707[(2)]);
var inst_51649 = (inst_51646__$1 == null);
var state_51707__$1 = (function (){var statearr_51713 = state_51707;
(statearr_51713[(13)] = inst_51646__$1);

return statearr_51713;
})();
if(cljs.core.truth_(inst_51649)){
var statearr_51714_52970 = state_51707__$1;
(statearr_51714_52970[(1)] = (5));

} else {
var statearr_51715_52971 = state_51707__$1;
(statearr_51715_52971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (15))){
var state_51707__$1 = state_51707;
var statearr_51719_52972 = state_51707__$1;
(statearr_51719_52972[(2)] = null);

(statearr_51719_52972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (21))){
var state_51707__$1 = state_51707;
var statearr_51721_52973 = state_51707__$1;
(statearr_51721_52973[(2)] = null);

(statearr_51721_52973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (13))){
var inst_51659 = (state_51707[(9)]);
var inst_51660 = (state_51707[(10)]);
var inst_51661 = (state_51707[(11)]);
var inst_51662 = (state_51707[(12)]);
var inst_51669 = (state_51707[(2)]);
var inst_51670 = (inst_51662 + (1));
var tmp51716 = inst_51659;
var tmp51717 = inst_51660;
var tmp51718 = inst_51661;
var inst_51659__$1 = tmp51716;
var inst_51660__$1 = tmp51717;
var inst_51661__$1 = tmp51718;
var inst_51662__$1 = inst_51670;
var state_51707__$1 = (function (){var statearr_51723 = state_51707;
(statearr_51723[(14)] = inst_51669);

(statearr_51723[(9)] = inst_51659__$1);

(statearr_51723[(10)] = inst_51660__$1);

(statearr_51723[(11)] = inst_51661__$1);

(statearr_51723[(12)] = inst_51662__$1);

return statearr_51723;
})();
var statearr_51724_52977 = state_51707__$1;
(statearr_51724_52977[(2)] = null);

(statearr_51724_52977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (22))){
var state_51707__$1 = state_51707;
var statearr_51725_52978 = state_51707__$1;
(statearr_51725_52978[(2)] = null);

(statearr_51725_52978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (6))){
var inst_51646 = (state_51707[(13)]);
var inst_51657 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51646) : f.call(null,inst_51646));
var inst_51658 = cljs.core.seq(inst_51657);
var inst_51659 = inst_51658;
var inst_51660 = null;
var inst_51661 = (0);
var inst_51662 = (0);
var state_51707__$1 = (function (){var statearr_51726 = state_51707;
(statearr_51726[(9)] = inst_51659);

(statearr_51726[(10)] = inst_51660);

(statearr_51726[(11)] = inst_51661);

(statearr_51726[(12)] = inst_51662);

return statearr_51726;
})();
var statearr_51727_52980 = state_51707__$1;
(statearr_51727_52980[(2)] = null);

(statearr_51727_52980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (17))){
var inst_51673 = (state_51707[(7)]);
var inst_51677 = cljs.core.chunk_first(inst_51673);
var inst_51678 = cljs.core.chunk_rest(inst_51673);
var inst_51679 = cljs.core.count(inst_51677);
var inst_51659 = inst_51678;
var inst_51660 = inst_51677;
var inst_51661 = inst_51679;
var inst_51662 = (0);
var state_51707__$1 = (function (){var statearr_51728 = state_51707;
(statearr_51728[(9)] = inst_51659);

(statearr_51728[(10)] = inst_51660);

(statearr_51728[(11)] = inst_51661);

(statearr_51728[(12)] = inst_51662);

return statearr_51728;
})();
var statearr_51729_52981 = state_51707__$1;
(statearr_51729_52981[(2)] = null);

(statearr_51729_52981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (3))){
var inst_51705 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51707__$1,inst_51705);
} else {
if((state_val_51708 === (12))){
var inst_51693 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51730_52991 = state_51707__$1;
(statearr_51730_52991[(2)] = inst_51693);

(statearr_51730_52991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (2))){
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51707__$1,(4),in$);
} else {
if((state_val_51708 === (23))){
var inst_51701 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51731_52992 = state_51707__$1;
(statearr_51731_52992[(2)] = inst_51701);

(statearr_51731_52992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (19))){
var inst_51688 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51732_52999 = state_51707__$1;
(statearr_51732_52999[(2)] = inst_51688);

(statearr_51732_52999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (11))){
var inst_51659 = (state_51707[(9)]);
var inst_51673 = (state_51707[(7)]);
var inst_51673__$1 = cljs.core.seq(inst_51659);
var state_51707__$1 = (function (){var statearr_51736 = state_51707;
(statearr_51736[(7)] = inst_51673__$1);

return statearr_51736;
})();
if(inst_51673__$1){
var statearr_51737_53000 = state_51707__$1;
(statearr_51737_53000[(1)] = (14));

} else {
var statearr_51738_53001 = state_51707__$1;
(statearr_51738_53001[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (9))){
var inst_51695 = (state_51707[(2)]);
var inst_51696 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_51707__$1 = (function (){var statearr_51739 = state_51707;
(statearr_51739[(15)] = inst_51695);

return statearr_51739;
})();
if(cljs.core.truth_(inst_51696)){
var statearr_51740_53002 = state_51707__$1;
(statearr_51740_53002[(1)] = (21));

} else {
var statearr_51741_53003 = state_51707__$1;
(statearr_51741_53003[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (5))){
var inst_51651 = cljs.core.async.close_BANG_(out);
var state_51707__$1 = state_51707;
var statearr_51744_53004 = state_51707__$1;
(statearr_51744_53004[(2)] = inst_51651);

(statearr_51744_53004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (14))){
var inst_51673 = (state_51707[(7)]);
var inst_51675 = cljs.core.chunked_seq_QMARK_(inst_51673);
var state_51707__$1 = state_51707;
if(inst_51675){
var statearr_51746_53005 = state_51707__$1;
(statearr_51746_53005[(1)] = (17));

} else {
var statearr_51747_53006 = state_51707__$1;
(statearr_51747_53006[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (16))){
var inst_51691 = (state_51707[(2)]);
var state_51707__$1 = state_51707;
var statearr_51751_53007 = state_51707__$1;
(statearr_51751_53007[(2)] = inst_51691);

(statearr_51751_53007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51708 === (10))){
var inst_51660 = (state_51707[(10)]);
var inst_51662 = (state_51707[(12)]);
var inst_51667 = cljs.core._nth(inst_51660,inst_51662);
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51707__$1,(13),out,inst_51667);
} else {
if((state_val_51708 === (18))){
var inst_51673 = (state_51707[(7)]);
var inst_51682 = cljs.core.first(inst_51673);
var state_51707__$1 = state_51707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51707__$1,(20),out,inst_51682);
} else {
if((state_val_51708 === (8))){
var inst_51661 = (state_51707[(11)]);
var inst_51662 = (state_51707[(12)]);
var inst_51664 = (inst_51662 < inst_51661);
var inst_51665 = inst_51664;
var state_51707__$1 = state_51707;
if(cljs.core.truth_(inst_51665)){
var statearr_51752_53010 = state_51707__$1;
(statearr_51752_53010[(1)] = (10));

} else {
var statearr_51753_53011 = state_51707__$1;
(statearr_51753_53011[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____0 = (function (){
var statearr_51754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51754[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__);

(statearr_51754[(1)] = (1));

return statearr_51754;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____1 = (function (state_51707){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51707);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51756){var ex__37396__auto__ = e51756;
var statearr_51757_53021 = state_51707;
(statearr_51757_53021[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51707[(4)]))){
var statearr_51758_53022 = state_51707;
(statearr_51758_53022[(1)] = cljs.core.first((state_51707[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53029 = state_51707;
state_51707 = G__53029;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__ = function(state_51707){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____1.call(this,state_51707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37393__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51762 = f__37527__auto__();
(statearr_51762[(6)] = c__37526__auto__);

return statearr_51762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

return c__37526__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__51767 = arguments.length;
switch (G__51767) {
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
var G__51775 = arguments.length;
switch (G__51775) {
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
var G__51784 = arguments.length;
switch (G__51784) {
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
var c__37526__auto___53033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51813){
var state_val_51814 = (state_51813[(1)]);
if((state_val_51814 === (7))){
var inst_51807 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51818_53034 = state_51813__$1;
(statearr_51818_53034[(2)] = inst_51807);

(statearr_51818_53034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (1))){
var inst_51789 = null;
var state_51813__$1 = (function (){var statearr_51820 = state_51813;
(statearr_51820[(7)] = inst_51789);

return statearr_51820;
})();
var statearr_51821_53035 = state_51813__$1;
(statearr_51821_53035[(2)] = null);

(statearr_51821_53035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (4))){
var inst_51792 = (state_51813[(8)]);
var inst_51792__$1 = (state_51813[(2)]);
var inst_51793 = (inst_51792__$1 == null);
var inst_51794 = cljs.core.not(inst_51793);
var state_51813__$1 = (function (){var statearr_51825 = state_51813;
(statearr_51825[(8)] = inst_51792__$1);

return statearr_51825;
})();
if(inst_51794){
var statearr_51826_53042 = state_51813__$1;
(statearr_51826_53042[(1)] = (5));

} else {
var statearr_51827_53043 = state_51813__$1;
(statearr_51827_53043[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (6))){
var state_51813__$1 = state_51813;
var statearr_51828_53044 = state_51813__$1;
(statearr_51828_53044[(2)] = null);

(statearr_51828_53044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (3))){
var inst_51809 = (state_51813[(2)]);
var inst_51811 = cljs.core.async.close_BANG_(out);
var state_51813__$1 = (function (){var statearr_51830 = state_51813;
(statearr_51830[(9)] = inst_51809);

return statearr_51830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51813__$1,inst_51811);
} else {
if((state_val_51814 === (2))){
var state_51813__$1 = state_51813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51813__$1,(4),ch);
} else {
if((state_val_51814 === (11))){
var inst_51792 = (state_51813[(8)]);
var inst_51801 = (state_51813[(2)]);
var inst_51789 = inst_51792;
var state_51813__$1 = (function (){var statearr_51834 = state_51813;
(statearr_51834[(7)] = inst_51789);

(statearr_51834[(10)] = inst_51801);

return statearr_51834;
})();
var statearr_51835_53045 = state_51813__$1;
(statearr_51835_53045[(2)] = null);

(statearr_51835_53045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (9))){
var inst_51792 = (state_51813[(8)]);
var state_51813__$1 = state_51813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51813__$1,(11),out,inst_51792);
} else {
if((state_val_51814 === (5))){
var inst_51789 = (state_51813[(7)]);
var inst_51792 = (state_51813[(8)]);
var inst_51796 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51792,inst_51789);
var state_51813__$1 = state_51813;
if(inst_51796){
var statearr_51841_53046 = state_51813__$1;
(statearr_51841_53046[(1)] = (8));

} else {
var statearr_51842_53047 = state_51813__$1;
(statearr_51842_53047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (10))){
var inst_51804 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51843_53048 = state_51813__$1;
(statearr_51843_53048[(2)] = inst_51804);

(statearr_51843_53048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (8))){
var inst_51789 = (state_51813[(7)]);
var tmp51837 = inst_51789;
var inst_51789__$1 = tmp51837;
var state_51813__$1 = (function (){var statearr_51845 = state_51813;
(statearr_51845[(7)] = inst_51789__$1);

return statearr_51845;
})();
var statearr_51846_53049 = state_51813__$1;
(statearr_51846_53049[(2)] = null);

(statearr_51846_53049[(1)] = (2));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51849 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51849[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51849[(1)] = (1));

return statearr_51849;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51813){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51813);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51851){var ex__37396__auto__ = e51851;
var statearr_51852_53050 = state_51813;
(statearr_51852_53050[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51813[(4)]))){
var statearr_51853_53057 = state_51813;
(statearr_51853_53057[(1)] = cljs.core.first((state_51813[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53058 = state_51813;
state_51813 = G__53058;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51856 = f__37527__auto__();
(statearr_51856[(6)] = c__37526__auto___53033);

return statearr_51856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__51861 = arguments.length;
switch (G__51861) {
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
var c__37526__auto___53060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_51907){
var state_val_51909 = (state_51907[(1)]);
if((state_val_51909 === (7))){
var inst_51903 = (state_51907[(2)]);
var state_51907__$1 = state_51907;
var statearr_51912_53061 = state_51907__$1;
(statearr_51912_53061[(2)] = inst_51903);

(statearr_51912_53061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (1))){
var inst_51866 = (new Array(n));
var inst_51867 = inst_51866;
var inst_51868 = (0);
var state_51907__$1 = (function (){var statearr_51914 = state_51907;
(statearr_51914[(7)] = inst_51868);

(statearr_51914[(8)] = inst_51867);

return statearr_51914;
})();
var statearr_51915_53064 = state_51907__$1;
(statearr_51915_53064[(2)] = null);

(statearr_51915_53064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (4))){
var inst_51873 = (state_51907[(9)]);
var inst_51873__$1 = (state_51907[(2)]);
var inst_51874 = (inst_51873__$1 == null);
var inst_51875 = cljs.core.not(inst_51874);
var state_51907__$1 = (function (){var statearr_51916 = state_51907;
(statearr_51916[(9)] = inst_51873__$1);

return statearr_51916;
})();
if(inst_51875){
var statearr_51917_53065 = state_51907__$1;
(statearr_51917_53065[(1)] = (5));

} else {
var statearr_51918_53066 = state_51907__$1;
(statearr_51918_53066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (15))){
var inst_51896 = (state_51907[(2)]);
var state_51907__$1 = state_51907;
var statearr_51920_53069 = state_51907__$1;
(statearr_51920_53069[(2)] = inst_51896);

(statearr_51920_53069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (13))){
var state_51907__$1 = state_51907;
var statearr_51923_53070 = state_51907__$1;
(statearr_51923_53070[(2)] = null);

(statearr_51923_53070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (6))){
var inst_51868 = (state_51907[(7)]);
var inst_51892 = (inst_51868 > (0));
var state_51907__$1 = state_51907;
if(cljs.core.truth_(inst_51892)){
var statearr_51926_53071 = state_51907__$1;
(statearr_51926_53071[(1)] = (12));

} else {
var statearr_51927_53072 = state_51907__$1;
(statearr_51927_53072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (3))){
var inst_51905 = (state_51907[(2)]);
var state_51907__$1 = state_51907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51907__$1,inst_51905);
} else {
if((state_val_51909 === (12))){
var inst_51867 = (state_51907[(8)]);
var inst_51894 = cljs.core.vec(inst_51867);
var state_51907__$1 = state_51907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51907__$1,(15),out,inst_51894);
} else {
if((state_val_51909 === (2))){
var state_51907__$1 = state_51907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51907__$1,(4),ch);
} else {
if((state_val_51909 === (11))){
var inst_51886 = (state_51907[(2)]);
var inst_51887 = (new Array(n));
var inst_51867 = inst_51887;
var inst_51868 = (0);
var state_51907__$1 = (function (){var statearr_51932 = state_51907;
(statearr_51932[(7)] = inst_51868);

(statearr_51932[(8)] = inst_51867);

(statearr_51932[(10)] = inst_51886);

return statearr_51932;
})();
var statearr_51934_53075 = state_51907__$1;
(statearr_51934_53075[(2)] = null);

(statearr_51934_53075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (9))){
var inst_51867 = (state_51907[(8)]);
var inst_51884 = cljs.core.vec(inst_51867);
var state_51907__$1 = state_51907;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51907__$1,(11),out,inst_51884);
} else {
if((state_val_51909 === (5))){
var inst_51868 = (state_51907[(7)]);
var inst_51867 = (state_51907[(8)]);
var inst_51873 = (state_51907[(9)]);
var inst_51879 = (state_51907[(11)]);
var inst_51878 = (inst_51867[inst_51868] = inst_51873);
var inst_51879__$1 = (inst_51868 + (1));
var inst_51880 = (inst_51879__$1 < n);
var state_51907__$1 = (function (){var statearr_51938 = state_51907;
(statearr_51938[(12)] = inst_51878);

(statearr_51938[(11)] = inst_51879__$1);

return statearr_51938;
})();
if(cljs.core.truth_(inst_51880)){
var statearr_51940_53081 = state_51907__$1;
(statearr_51940_53081[(1)] = (8));

} else {
var statearr_51941_53082 = state_51907__$1;
(statearr_51941_53082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (14))){
var inst_51899 = (state_51907[(2)]);
var inst_51901 = cljs.core.async.close_BANG_(out);
var state_51907__$1 = (function (){var statearr_51943 = state_51907;
(statearr_51943[(13)] = inst_51899);

return statearr_51943;
})();
var statearr_51945_53083 = state_51907__$1;
(statearr_51945_53083[(2)] = inst_51901);

(statearr_51945_53083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (10))){
var inst_51890 = (state_51907[(2)]);
var state_51907__$1 = state_51907;
var statearr_51946_53084 = state_51907__$1;
(statearr_51946_53084[(2)] = inst_51890);

(statearr_51946_53084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51909 === (8))){
var inst_51867 = (state_51907[(8)]);
var inst_51879 = (state_51907[(11)]);
var tmp51942 = inst_51867;
var inst_51867__$1 = tmp51942;
var inst_51868 = inst_51879;
var state_51907__$1 = (function (){var statearr_51950 = state_51907;
(statearr_51950[(7)] = inst_51868);

(statearr_51950[(8)] = inst_51867__$1);

return statearr_51950;
})();
var statearr_51951_53085 = state_51907__$1;
(statearr_51951_53085[(2)] = null);

(statearr_51951_53085[(1)] = (2));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_51953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51953[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_51953[(1)] = (1));

return statearr_51953;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_51907){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_51907);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e51954){var ex__37396__auto__ = e51954;
var statearr_51955_53087 = state_51907;
(statearr_51955_53087[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_51907[(4)]))){
var statearr_51956_53089 = state_51907;
(statearr_51956_53089[(1)] = cljs.core.first((state_51907[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53090 = state_51907;
state_51907 = G__53090;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_51907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_51907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_51960 = f__37527__auto__();
(statearr_51960[(6)] = c__37526__auto___53060);

return statearr_51960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__51967 = arguments.length;
switch (G__51967) {
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
var c__37526__auto___53092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_52021){
var state_val_52022 = (state_52021[(1)]);
if((state_val_52022 === (7))){
var inst_52016 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52026_53093 = state_52021__$1;
(statearr_52026_53093[(2)] = inst_52016);

(statearr_52026_53093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (1))){
var inst_51972 = [];
var inst_51973 = inst_51972;
var inst_51974 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52021__$1 = (function (){var statearr_52028 = state_52021;
(statearr_52028[(7)] = inst_51973);

(statearr_52028[(8)] = inst_51974);

return statearr_52028;
})();
var statearr_52029_53094 = state_52021__$1;
(statearr_52029_53094[(2)] = null);

(statearr_52029_53094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (4))){
var inst_51978 = (state_52021[(9)]);
var inst_51978__$1 = (state_52021[(2)]);
var inst_51979 = (inst_51978__$1 == null);
var inst_51980 = cljs.core.not(inst_51979);
var state_52021__$1 = (function (){var statearr_52033 = state_52021;
(statearr_52033[(9)] = inst_51978__$1);

return statearr_52033;
})();
if(inst_51980){
var statearr_52034_53101 = state_52021__$1;
(statearr_52034_53101[(1)] = (5));

} else {
var statearr_52035_53102 = state_52021__$1;
(statearr_52035_53102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (15))){
var inst_52010 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52037_53103 = state_52021__$1;
(statearr_52037_53103[(2)] = inst_52010);

(statearr_52037_53103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (13))){
var state_52021__$1 = state_52021;
var statearr_52038_53104 = state_52021__$1;
(statearr_52038_53104[(2)] = null);

(statearr_52038_53104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (6))){
var inst_51973 = (state_52021[(7)]);
var inst_52005 = inst_51973.length;
var inst_52006 = (inst_52005 > (0));
var state_52021__$1 = state_52021;
if(cljs.core.truth_(inst_52006)){
var statearr_52043_53106 = state_52021__$1;
(statearr_52043_53106[(1)] = (12));

} else {
var statearr_52044_53107 = state_52021__$1;
(statearr_52044_53107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (3))){
var inst_52018 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52021__$1,inst_52018);
} else {
if((state_val_52022 === (12))){
var inst_51973 = (state_52021[(7)]);
var inst_52008 = cljs.core.vec(inst_51973);
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52021__$1,(15),out,inst_52008);
} else {
if((state_val_52022 === (2))){
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52021__$1,(4),ch);
} else {
if((state_val_52022 === (11))){
var inst_51982 = (state_52021[(10)]);
var inst_51978 = (state_52021[(9)]);
var inst_51997 = (state_52021[(2)]);
var inst_51999 = [];
var inst_52000 = inst_51999.push(inst_51978);
var inst_51973 = inst_51999;
var inst_51974 = inst_51982;
var state_52021__$1 = (function (){var statearr_52050 = state_52021;
(statearr_52050[(7)] = inst_51973);

(statearr_52050[(8)] = inst_51974);

(statearr_52050[(11)] = inst_52000);

(statearr_52050[(12)] = inst_51997);

return statearr_52050;
})();
var statearr_52051_53115 = state_52021__$1;
(statearr_52051_53115[(2)] = null);

(statearr_52051_53115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (9))){
var inst_51973 = (state_52021[(7)]);
var inst_51995 = cljs.core.vec(inst_51973);
var state_52021__$1 = state_52021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52021__$1,(11),out,inst_51995);
} else {
if((state_val_52022 === (5))){
var inst_51974 = (state_52021[(8)]);
var inst_51982 = (state_52021[(10)]);
var inst_51978 = (state_52021[(9)]);
var inst_51982__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_51978) : f.call(null,inst_51978));
var inst_51986 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51982__$1,inst_51974);
var inst_51988 = cljs.core.keyword_identical_QMARK_(inst_51974,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51989 = ((inst_51986) || (inst_51988));
var state_52021__$1 = (function (){var statearr_52056 = state_52021;
(statearr_52056[(10)] = inst_51982__$1);

return statearr_52056;
})();
if(cljs.core.truth_(inst_51989)){
var statearr_52057_53117 = state_52021__$1;
(statearr_52057_53117[(1)] = (8));

} else {
var statearr_52058_53118 = state_52021__$1;
(statearr_52058_53118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (14))){
var inst_52013 = (state_52021[(2)]);
var inst_52014 = cljs.core.async.close_BANG_(out);
var state_52021__$1 = (function (){var statearr_52061 = state_52021;
(statearr_52061[(13)] = inst_52013);

return statearr_52061;
})();
var statearr_52062_53119 = state_52021__$1;
(statearr_52062_53119[(2)] = inst_52014);

(statearr_52062_53119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (10))){
var inst_52003 = (state_52021[(2)]);
var state_52021__$1 = state_52021;
var statearr_52065_53120 = state_52021__$1;
(statearr_52065_53120[(2)] = inst_52003);

(statearr_52065_53120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52022 === (8))){
var inst_51973 = (state_52021[(7)]);
var inst_51982 = (state_52021[(10)]);
var inst_51978 = (state_52021[(9)]);
var inst_51992 = inst_51973.push(inst_51978);
var tmp52060 = inst_51973;
var inst_51973__$1 = tmp52060;
var inst_51974 = inst_51982;
var state_52021__$1 = (function (){var statearr_52067 = state_52021;
(statearr_52067[(7)] = inst_51973__$1);

(statearr_52067[(8)] = inst_51974);

(statearr_52067[(14)] = inst_51992);

return statearr_52067;
})();
var statearr_52069_53121 = state_52021__$1;
(statearr_52069_53121[(2)] = null);

(statearr_52069_53121[(1)] = (2));


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
var cljs$core$async$state_machine__37393__auto__ = null;
var cljs$core$async$state_machine__37393__auto____0 = (function (){
var statearr_52072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52072[(0)] = cljs$core$async$state_machine__37393__auto__);

(statearr_52072[(1)] = (1));

return statearr_52072;
});
var cljs$core$async$state_machine__37393__auto____1 = (function (state_52021){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_52021);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e52074){var ex__37396__auto__ = e52074;
var statearr_52075_53132 = state_52021;
(statearr_52075_53132[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_52021[(4)]))){
var statearr_52076_53133 = state_52021;
(statearr_52076_53133[(1)] = cljs.core.first((state_52021[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53134 = state_52021;
state_52021 = G__53134;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
cljs$core$async$state_machine__37393__auto__ = function(state_52021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37393__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37393__auto____1.call(this,state_52021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37393__auto____0;
cljs$core$async$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37393__auto____1;
return cljs$core$async$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_52078 = f__37527__auto__();
(statearr_52078[(6)] = c__37526__auto___53092);

return statearr_52078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
