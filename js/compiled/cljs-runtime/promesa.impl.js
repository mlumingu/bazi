goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x27969 = obj;
(x27969.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x27969.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x27969.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x27969;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27972_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27972_SHARP_) : f.call(null,p1__27972_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27973_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27973_SHARP_) : f.call(null,p1__27973_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27974_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27974_SHARP_) : f.call(null,p1__27974_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27975_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27975_SHARP_) : f.call(null,p1__27975_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27976_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27976_SHARP_) : f.call(null,p1__27976_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27977_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27977_SHARP_) : f.call(null,p1__27977_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27978_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27978_SHARP_) : f.call(null,p1__27978_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27979_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27979_SHARP_) : f.call(null,p1__27979_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__27980_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27980_SHARP_) : f.call(null,p1__27980_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__27981_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__27981_SHARP_) : f.call(null,p1__27981_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__27982_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27982_SHARP_,null) : f.call(null,p1__27982_SHARP_,null));
}),(function (p1__27983_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27983_SHARP_) : f.call(null,null,p1__27983_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__27984_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27984_SHARP_,null) : f.call(null,p1__27984_SHARP_,null));
}),(function (p1__27985_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27985_SHARP_) : f.call(null,null,p1__27985_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__27987_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27987_SHARP_,null) : f.call(null,p1__27987_SHARP_,null));
}),(function (p1__27988_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27988_SHARP_) : f.call(null,null,p1__27988_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__27989_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27989_SHARP_,null) : f.call(null,p1__27989_SHARP_,null));
}),(function (p1__27990_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__27990_SHARP_) : f.call(null,null,p1__27990_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
goog.object.set(promesa.protocols.IPromise,"_",true);

goog.object.set(promesa.protocols._map,"_",(function() {
var G__28052 = null;
var G__28052__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__28052__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__28052 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28052__2.call(this,it,f);
case 3:
return G__28052__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28052.cljs$core$IFn$_invoke$arity$2 = G__28052__2;
G__28052.cljs$core$IFn$_invoke$arity$3 = G__28052__3;
return G__28052;
})()
);

goog.object.set(promesa.protocols._bind,"_",(function() {
var G__28056 = null;
var G__28056__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__28056__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__28056 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28056__2.call(this,it,f);
case 3:
return G__28056__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28056.cljs$core$IFn$_invoke$arity$2 = G__28056__2;
G__28056.cljs$core$IFn$_invoke$arity$3 = G__28056__3;
return G__28056;
})()
);

goog.object.set(promesa.protocols._then,"_",(function() {
var G__28061 = null;
var G__28061__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__28061__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__28061 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28061__2.call(this,it,f);
case 3:
return G__28061__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28061.cljs$core$IFn$_invoke$arity$2 = G__28061__2;
G__28061.cljs$core$IFn$_invoke$arity$3 = G__28061__3;
return G__28061;
})()
);

goog.object.set(promesa.protocols._mapErr,"_",(function() {
var G__28063 = null;
var G__28063__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__28063__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__28063 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28063__2.call(this,it,f);
case 3:
return G__28063__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28063.cljs$core$IFn$_invoke$arity$2 = G__28063__2;
G__28063.cljs$core$IFn$_invoke$arity$3 = G__28063__3;
return G__28063;
})()
);

goog.object.set(promesa.protocols._thenErr,"_",(function() {
var G__28064 = null;
var G__28064__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__28064__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__28064 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28064__2.call(this,it,f);
case 3:
return G__28064__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28064.cljs$core$IFn$_invoke$arity$2 = G__28064__2;
G__28064.cljs$core$IFn$_invoke$arity$3 = G__28064__3;
return G__28064;
})()
);

goog.object.set(promesa.protocols._handle,"_",(function() {
var G__28066 = null;
var G__28066__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__28066__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__28066 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28066__2.call(this,it,f);
case 3:
return G__28066__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28066.cljs$core$IFn$_invoke$arity$2 = G__28066__2;
G__28066.cljs$core$IFn$_invoke$arity$3 = G__28066__3;
return G__28066;
})()
);

goog.object.set(promesa.protocols._finally,"_",(function() {
var G__28069 = null;
var G__28069__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__28069__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__28069 = function(it,f,e){
switch(arguments.length){
case 2:
return G__28069__2.call(this,it,f);
case 3:
return G__28069__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28069.cljs$core$IFn$_invoke$arity$2 = G__28069__2;
G__28069.cljs$core$IFn$_invoke$arity$3 = G__28069__3;
return G__28069;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

goog.object.set(promesa.protocols.IPromiseFactory,"_",true);

goog.object.set(promesa.protocols._promise,"_",(function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
