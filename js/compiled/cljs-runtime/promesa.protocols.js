goog.provide('promesa.protocols');

/**
 * A promise abstraction.
 * @interface
 */
promesa.protocols.IPromise = function(){};

var promesa$protocols$IPromise$_bind$dyn_27897 = (function() {
var G__27898 = null;
var G__27898__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._bind[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
var G__27898__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._bind[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._bind["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-bind",_);
}
}
});
G__27898 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27898__2.call(this,_,f);
case 3:
return G__27898__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27898.cljs$core$IFn$_invoke$arity$2 = G__27898__2;
G__27898.cljs$core$IFn$_invoke$arity$3 = G__27898__3;
return G__27898;
})()
;
/**
 * Apply function to a computation and flatten.
 */
promesa.protocols._bind = (function promesa$protocols$_bind(var_args){
var G__27838 = arguments.length;
switch (G__27838) {
case 2:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_bind$dyn_27897(_,f);
}
}));

(promesa.protocols._bind.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_bind$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_bind$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_bind$dyn_27897(_,f,executor);
}
}));

(promesa.protocols._bind.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_map$dyn_27900 = (function() {
var G__27901 = null;
var G__27901__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._map[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._map["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
var G__27901__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._map[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._map["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-map",_);
}
}
});
G__27901 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27901__2.call(this,_,f);
case 3:
return G__27901__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27901.cljs$core$IFn$_invoke$arity$2 = G__27901__2;
G__27901.cljs$core$IFn$_invoke$arity$3 = G__27901__3;
return G__27901;
})()
;
/**
 * Apply function to a computation
 */
promesa.protocols._map = (function promesa$protocols$_map(var_args){
var G__27849 = arguments.length;
switch (G__27849) {
case 2:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_map$dyn_27900(_,f);
}
}));

(promesa.protocols._map.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_map$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_map$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_map$dyn_27900(_,f,executor);
}
}));

(promesa.protocols._map.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_then$dyn_27912 = (function() {
var G__27913 = null;
var G__27913__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._then[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._then["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
var G__27913__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._then[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._then["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-then",_);
}
}
});
G__27913 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27913__2.call(this,_,f);
case 3:
return G__27913__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27913.cljs$core$IFn$_invoke$arity$2 = G__27913__2;
G__27913.cljs$core$IFn$_invoke$arity$3 = G__27913__3;
return G__27913;
})()
;
/**
 * Apply function to a computation and flatten if promise found.
 */
promesa.protocols._then = (function promesa$protocols$_then(var_args){
var G__27854 = arguments.length;
switch (G__27854) {
case 2:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._then.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_then$dyn_27912(_,f);
}
}));

(promesa.protocols._then.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_then$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_then$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_then$dyn_27912(_,f,executor);
}
}));

(promesa.protocols._then.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_mapErr$dyn_27921 = (function() {
var G__27922 = null;
var G__27922__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
var G__27922__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._mapErr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._mapErr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-mapErr",_);
}
}
});
G__27922 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27922__2.call(this,_,f);
case 3:
return G__27922__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27922.cljs$core$IFn$_invoke$arity$2 = G__27922__2;
G__27922.cljs$core$IFn$_invoke$arity$3 = G__27922__3;
return G__27922;
})()
;
/**
 * Apply function to a failed computation.
 */
promesa.protocols._mapErr = (function promesa$protocols$_mapErr(var_args){
var G__27856 = arguments.length;
switch (G__27856) {
case 2:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_27921(_,f);
}
}));

(promesa.protocols._mapErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_mapErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_mapErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_mapErr$dyn_27921(_,f,executor);
}
}));

(promesa.protocols._mapErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_thenErr$dyn_27931 = (function() {
var G__27932 = null;
var G__27932__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
var G__27932__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._thenErr[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._thenErr["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-thenErr",_);
}
}
});
G__27932 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27932__2.call(this,_,f);
case 3:
return G__27932__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27932.cljs$core$IFn$_invoke$arity$2 = G__27932__2;
G__27932.cljs$core$IFn$_invoke$arity$3 = G__27932__3;
return G__27932;
})()
;
/**
 * Apply function to a failed computation. and flatten if promise found.
 */
promesa.protocols._thenErr = (function promesa$protocols$_thenErr(var_args){
var G__27862 = arguments.length;
switch (G__27862) {
case 2:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_27931(_,f);
}
}));

(promesa.protocols._thenErr.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_thenErr$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_thenErr$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_thenErr$dyn_27931(_,f,executor);
}
}));

(promesa.protocols._thenErr.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_handle$dyn_27936 = (function() {
var G__27937 = null;
var G__27937__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._handle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
var G__27937__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._handle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._handle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-handle",_);
}
}
});
G__27937 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27937__2.call(this,_,f);
case 3:
return G__27937__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27937.cljs$core$IFn$_invoke$arity$2 = G__27937__2;
G__27937.cljs$core$IFn$_invoke$arity$3 = G__27937__3;
return G__27937;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful and flatten if promise found.
 */
promesa.protocols._handle = (function promesa$protocols$_handle(var_args){
var G__27868 = arguments.length;
switch (G__27868) {
case 2:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_handle$dyn_27936(_,f);
}
}));

(promesa.protocols._handle.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_handle$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_handle$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_handle$dyn_27936(_,f,executor);
}
}));

(promesa.protocols._handle.cljs$lang$maxFixedArity = 3);


var promesa$protocols$IPromise$_finally$dyn_27943 = (function() {
var G__27944 = null;
var G__27944__2 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._finally[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
var G__27944__3 = (function (_,f,executor){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._finally[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4429__auto__.call(null,_,f,executor));
} else {
var m__4426__auto__ = (promesa.protocols._finally["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,executor) : m__4426__auto__.call(null,_,f,executor));
} else {
throw cljs.core.missing_protocol("IPromise.-finally",_);
}
}
});
G__27944 = function(_,f,executor){
switch(arguments.length){
case 2:
return G__27944__2.call(this,_,f);
case 3:
return G__27944__3.call(this,_,f,executor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27944.cljs$core$IFn$_invoke$arity$2 = G__27944__2;
G__27944.cljs$core$IFn$_invoke$arity$3 = G__27944__3;
return G__27944;
})()
;
/**
 * Apply function to a computation identpendently if is failed or
 *  successful; the return value is ignored.
 */
promesa.protocols._finally = (function promesa$protocols$_finally(var_args){
var G__27872 = arguments.length;
switch (G__27872) {
case 2:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$2 = (function (_,f){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$2 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$2(_,f);
} else {
return promesa$protocols$IPromise$_finally$dyn_27943(_,f);
}
}));

(promesa.protocols._finally.cljs$core$IFn$_invoke$arity$3 = (function (_,f,executor){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromise$_finally$arity$3 == null)))))){
return _.promesa$protocols$IPromise$_finally$arity$3(_,f,executor);
} else {
return promesa$protocols$IPromise$_finally$dyn_27943(_,f,executor);
}
}));

(promesa.protocols._finally.cljs$lang$maxFixedArity = 3);



/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.protocols.IState = function(){};

var promesa$protocols$IState$_extract$dyn_27951 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._extract[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._extract["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-extract",_);
}
}
});
/**
 * Extract the current value.
 */
promesa.protocols._extract = (function promesa$protocols$_extract(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_extract$arity$1 == null)))))){
return _.promesa$protocols$IState$_extract$arity$1(_);
} else {
return promesa$protocols$IState$_extract$dyn_27951(_);
}
});

var promesa$protocols$IState$_resolved_QMARK_$dyn_27953 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._resolved_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._resolved_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-resolved?",_);
}
}
});
/**
 * Returns true if a promise is resolved.
 */
promesa.protocols._resolved_QMARK_ = (function promesa$protocols$_resolved_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_resolved_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_resolved_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_resolved_QMARK_$dyn_27953(_);
}
});

var promesa$protocols$IState$_rejected_QMARK_$dyn_27954 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._rejected_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._rejected_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-rejected?",_);
}
}
});
/**
 * Returns true if a promise is rejected.
 */
promesa.protocols._rejected_QMARK_ = (function promesa$protocols$_rejected_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_rejected_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_rejected_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_rejected_QMARK_$dyn_27954(_);
}
});

var promesa$protocols$IState$_pending_QMARK_$dyn_27956 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._pending_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._pending_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IState.-pending?",_);
}
}
});
/**
 * Retutns true if a promise is pending.
 */
promesa.protocols._pending_QMARK_ = (function promesa$protocols$_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IState$_pending_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$IState$_pending_QMARK_$arity$1(_);
} else {
return promesa$protocols$IState$_pending_QMARK_$dyn_27956(_);
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.protocols.IPromiseFactory = function(){};

var promesa$protocols$IPromiseFactory$_promise$dyn_27957 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._promise[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._promise["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IPromiseFactory.-promise",_);
}
}
});
/**
 * Create a promise instance from other types
 */
promesa.protocols._promise = (function promesa$protocols$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$protocols$IPromiseFactory$_promise$arity$1(_);
} else {
return promesa$protocols$IPromiseFactory$_promise$dyn_27957(_);
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.protocols.ICancellable = function(){};

var promesa$protocols$ICancellable$_cancel_BANG_$dyn_27961 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._cancel_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._cancel_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancel!",_);
}
}
});
promesa.protocols._cancel_BANG_ = (function promesa$protocols$_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancel_BANG_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancel_BANG_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancel_BANG_$dyn_27961(_);
}
});

var promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_27963 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._cancelled_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (promesa.protocols._cancelled_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICancellable.-cancelled?",_);
}
}
});
promesa.protocols._cancelled_QMARK_ = (function promesa$protocols$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
return promesa$protocols$ICancellable$_cancelled_QMARK_$dyn_27963(_);
}
});


/**
 * @interface
 */
promesa.protocols.ICompletable = function(){};

var promesa$protocols$ICompletable$_resolve_BANG_$dyn_27967 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._resolve_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (promesa.protocols._resolve_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("ICompletable.-resolve!",_);
}
}
});
/**
 * Deliver a value to empty promise.
 */
promesa.protocols._resolve_BANG_ = (function promesa$protocols$_resolve_BANG_(_,v){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_resolve_BANG_$arity$2(_,v);
} else {
return promesa$protocols$ICompletable$_resolve_BANG_$dyn_27967(_,v);
}
});

var promesa$protocols$ICompletable$_reject_BANG_$dyn_27970 = (function (_,e){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._reject_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4429__auto__.call(null,_,e));
} else {
var m__4426__auto__ = (promesa.protocols._reject_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4426__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("ICompletable.-reject!",_);
}
}
});
/**
 * Deliver an error to empty promise.
 */
promesa.protocols._reject_BANG_ = (function promesa$protocols$_reject_BANG_(_,e){
if((((!((_ == null)))) && ((!((_.promesa$protocols$ICompletable$_reject_BANG_$arity$2 == null)))))){
return _.promesa$protocols$ICompletable$_reject_BANG_$arity$2(_,e);
} else {
return promesa$protocols$ICompletable$_reject_BANG_$dyn_27970(_,e);
}
});


/**
 * @interface
 */
promesa.protocols.IExecutor = function(){};

var promesa$protocols$IExecutor$_run_BANG_$dyn_27986 = (function (_,task){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._run_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4429__auto__.call(null,_,task));
} else {
var m__4426__auto__ = (promesa.protocols._run_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4426__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-run!",_);
}
}
});
/**
 * Run a task and return a promise.
 */
promesa.protocols._run_BANG_ = (function promesa$protocols$_run_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_run_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_run_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_run_BANG_$dyn_27986(_,task);
}
});

var promesa$protocols$IExecutor$_submit_BANG_$dyn_27994 = (function (_,task){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._submit_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4429__auto__.call(null,_,task));
} else {
var m__4426__auto__ = (promesa.protocols._submit_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,task) : m__4426__auto__.call(null,_,task));
} else {
throw cljs.core.missing_protocol("IExecutor.-submit!",_);
}
}
});
/**
 * Submit a task and return a promise.
 */
promesa.protocols._submit_BANG_ = (function promesa$protocols$_submit_BANG_(_,task){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IExecutor$_submit_BANG_$arity$2 == null)))))){
return _.promesa$protocols$IExecutor$_submit_BANG_$arity$2(_,task);
} else {
return promesa$protocols$IExecutor$_submit_BANG_$dyn_27994(_,task);
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.protocols.IScheduler = function(){};

var promesa$protocols$IScheduler$_schedule_BANG_$dyn_27998 = (function (_,ms,func){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (promesa.protocols._schedule_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4429__auto__.call(null,_,ms,func));
} else {
var m__4426__auto__ = (promesa.protocols._schedule_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,ms,func) : m__4426__auto__.call(null,_,ms,func));
} else {
throw cljs.core.missing_protocol("IScheduler.-schedule!",_);
}
}
});
/**
 * Schedule a function to be executed in future.
 */
promesa.protocols._schedule_BANG_ = (function promesa$protocols$_schedule_BANG_(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$protocols$IScheduler$_schedule_BANG_$arity$3 == null)))))){
return _.promesa$protocols$IScheduler$_schedule_BANG_$arity$3(_,ms,func);
} else {
return promesa$protocols$IScheduler$_schedule_BANG_$dyn_27998(_,ms,func);
}
});


//# sourceMappingURL=promesa.protocols.js.map
