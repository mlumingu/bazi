goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__56508){
var map__56509 = p__56508;
var map__56509__$1 = (((((!((map__56509 == null))))?(((((map__56509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56509):map__56509);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56509__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56509__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56509__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56509__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__56511_56542 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__56512_56543 = null;
var count__56513_56544 = (0);
var i__56514_56545 = (0);
while(true){
if((i__56514_56545 < count__56513_56544)){
var vec__56527_56546 = chunk__56512_56543.cljs$core$IIndexed$_nth$arity$2(null,i__56514_56545);
var k_56547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527_56546,(0),null);
var cb_56548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56527_56546,(1),null);
try{var G__56531_56550 = cljs.core.deref(re_frame.trace.traces);
(cb_56548.cljs$core$IFn$_invoke$arity$1 ? cb_56548.cljs$core$IFn$_invoke$arity$1(G__56531_56550) : cb_56548.call(null,G__56531_56550));
}catch (e56530){var e_56551 = e56530;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56547,"while storing",cljs.core.deref(re_frame.trace.traces),e_56551], 0));
}

var G__56552 = seq__56511_56542;
var G__56553 = chunk__56512_56543;
var G__56554 = count__56513_56544;
var G__56555 = (i__56514_56545 + (1));
seq__56511_56542 = G__56552;
chunk__56512_56543 = G__56553;
count__56513_56544 = G__56554;
i__56514_56545 = G__56555;
continue;
} else {
var temp__5735__auto___56556 = cljs.core.seq(seq__56511_56542);
if(temp__5735__auto___56556){
var seq__56511_56557__$1 = temp__5735__auto___56556;
if(cljs.core.chunked_seq_QMARK_(seq__56511_56557__$1)){
var c__4556__auto___56558 = cljs.core.chunk_first(seq__56511_56557__$1);
var G__56559 = cljs.core.chunk_rest(seq__56511_56557__$1);
var G__56560 = c__4556__auto___56558;
var G__56561 = cljs.core.count(c__4556__auto___56558);
var G__56562 = (0);
seq__56511_56542 = G__56559;
chunk__56512_56543 = G__56560;
count__56513_56544 = G__56561;
i__56514_56545 = G__56562;
continue;
} else {
var vec__56532_56563 = cljs.core.first(seq__56511_56557__$1);
var k_56564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56532_56563,(0),null);
var cb_56565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56532_56563,(1),null);
try{var G__56536_56572 = cljs.core.deref(re_frame.trace.traces);
(cb_56565.cljs$core$IFn$_invoke$arity$1 ? cb_56565.cljs$core$IFn$_invoke$arity$1(G__56536_56572) : cb_56565.call(null,G__56536_56572));
}catch (e56535){var e_56574 = e56535;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_56564,"while storing",cljs.core.deref(re_frame.trace.traces),e_56574], 0));
}

var G__56578 = cljs.core.next(seq__56511_56557__$1);
var G__56579 = null;
var G__56580 = (0);
var G__56581 = (0);
seq__56511_56542 = G__56578;
chunk__56512_56543 = G__56579;
count__56513_56544 = G__56580;
i__56514_56545 = G__56581;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
