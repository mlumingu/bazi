goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$dissoc_in(m,p__27181){
var vec__27182 = p__27181;
var seq__27183 = cljs.core.seq(vec__27182);
var first__27184 = cljs.core.first(seq__27183);
var seq__27183__$1 = cljs.core.next(seq__27183);
var k = first__27184;
var ks = seq__27183__$1;
var keys = vec__27182;
if(ks){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5733__auto__)){
var nextmap = temp__5733__auto__;
var newmap = (day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.first_in_vector = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$utils$apply_kw(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27199 = arguments.length;
var i__4737__auto___27200 = (0);
while(true){
if((i__4737__auto___27200 < len__4736__auto___27199)){
args__4742__auto__.push((arguments[i__4737__auto___27200]));

var G__27201 = (i__4737__auto___27200 + (1));
i__4737__auto___27200 = G__27201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq27191){
var G__27192 = cljs.core.first(seq27191);
var seq27191__$1 = cljs.core.next(seq27191);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27192,seq27191__$1);
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.utils.js.map
