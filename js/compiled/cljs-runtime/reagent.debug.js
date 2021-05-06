goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__55026__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55026 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55027__i = 0, G__55027__a = new Array(arguments.length -  0);
while (G__55027__i < G__55027__a.length) {G__55027__a[G__55027__i] = arguments[G__55027__i + 0]; ++G__55027__i;}
  args = new cljs.core.IndexedSeq(G__55027__a,0,null);
} 
return G__55026__delegate.call(this,args);};
G__55026.cljs$lang$maxFixedArity = 0;
G__55026.cljs$lang$applyTo = (function (arglist__55028){
var args = cljs.core.seq(arglist__55028);
return G__55026__delegate(args);
});
G__55026.cljs$core$IFn$_invoke$arity$variadic = G__55026__delegate;
return G__55026;
})()
);

(o.error = (function() { 
var G__55030__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__55030 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55033__i = 0, G__55033__a = new Array(arguments.length -  0);
while (G__55033__i < G__55033__a.length) {G__55033__a[G__55033__i] = arguments[G__55033__i + 0]; ++G__55033__i;}
  args = new cljs.core.IndexedSeq(G__55033__a,0,null);
} 
return G__55030__delegate.call(this,args);};
G__55030.cljs$lang$maxFixedArity = 0;
G__55030.cljs$lang$applyTo = (function (arglist__55034){
var args = cljs.core.seq(arglist__55034);
return G__55030__delegate(args);
});
G__55030.cljs$core$IFn$_invoke$arity$variadic = G__55030__delegate;
return G__55030;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
