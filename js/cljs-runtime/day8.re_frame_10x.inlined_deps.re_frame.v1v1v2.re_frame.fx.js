goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__28301 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__28302 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__28302);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28446 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28446)){
var new_db_28447 = temp__5735__auto___28446;
var fexpr__28305_28448 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28305_28448.cljs$core$IFn$_invoke$arity$1 ? fexpr__28305_28448.cljs$core$IFn$_invoke$arity$1(new_db_28447) : fexpr__28305_28448.call(null,new_db_28447));
} else {
}

var seq__28306 = cljs.core.seq(effects_without_db);
var chunk__28307 = null;
var count__28308 = (0);
var i__28309 = (0);
while(true){
if((i__28309 < count__28308)){
var vec__28319 = chunk__28307.cljs$core$IIndexed$_nth$arity$2(null,i__28309);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28319,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28319,(1),null);
var temp__5733__auto___28451 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28451)){
var effect_fn_28452 = temp__5733__auto___28451;
(effect_fn_28452.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28452.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28452.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28453 = seq__28306;
var G__28454 = chunk__28307;
var G__28455 = count__28308;
var G__28456 = (i__28309 + (1));
seq__28306 = G__28453;
chunk__28307 = G__28454;
count__28308 = G__28455;
i__28309 = G__28456;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28306);
if(temp__5735__auto__){
var seq__28306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28306__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28306__$1);
var G__28457 = cljs.core.chunk_rest(seq__28306__$1);
var G__28458 = c__4556__auto__;
var G__28459 = cljs.core.count(c__4556__auto__);
var G__28460 = (0);
seq__28306 = G__28457;
chunk__28307 = G__28458;
count__28308 = G__28459;
i__28309 = G__28460;
continue;
} else {
var vec__28323 = cljs.core.first(seq__28306__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(1),null);
var temp__5733__auto___28461 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28461)){
var effect_fn_28462 = temp__5733__auto___28461;
(effect_fn_28462.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28462.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28462.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28463 = cljs.core.next(seq__28306__$1);
var G__28464 = null;
var G__28465 = (0);
var G__28466 = (0);
seq__28306 = G__28463;
chunk__28307 = G__28464;
count__28308 = G__28465;
i__28309 = G__28466;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27894__auto___28467 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__27895__auto___28468 = (end__27894__auto___28467 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27895__auto___28468,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__27894__auto___28467);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__28301);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___28469 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___28469)){
var new_db_28470 = temp__5735__auto___28469;
var fexpr__28328_28471 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__28328_28471.cljs$core$IFn$_invoke$arity$1 ? fexpr__28328_28471.cljs$core$IFn$_invoke$arity$1(new_db_28470) : fexpr__28328_28471.call(null,new_db_28470));
} else {
}

var seq__28329 = cljs.core.seq(effects_without_db);
var chunk__28330 = null;
var count__28331 = (0);
var i__28332 = (0);
while(true){
if((i__28332 < count__28331)){
var vec__28340 = chunk__28330.cljs$core$IIndexed$_nth$arity$2(null,i__28332);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28340,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28340,(1),null);
var temp__5733__auto___28472 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28472)){
var effect_fn_28473 = temp__5733__auto___28472;
(effect_fn_28473.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28473.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28473.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28474 = seq__28329;
var G__28475 = chunk__28330;
var G__28476 = count__28331;
var G__28477 = (i__28332 + (1));
seq__28329 = G__28474;
chunk__28330 = G__28475;
count__28331 = G__28476;
i__28332 = G__28477;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28329);
if(temp__5735__auto__){
var seq__28329__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28329__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28329__$1);
var G__28478 = cljs.core.chunk_rest(seq__28329__$1);
var G__28479 = c__4556__auto__;
var G__28480 = cljs.core.count(c__4556__auto__);
var G__28481 = (0);
seq__28329 = G__28478;
chunk__28330 = G__28479;
count__28331 = G__28480;
i__28332 = G__28481;
continue;
} else {
var vec__28343 = cljs.core.first(seq__28329__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28343,(1),null);
var temp__5733__auto___28482 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28482)){
var effect_fn_28483 = temp__5733__auto___28482;
(effect_fn_28483.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28483.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28483.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__28484 = cljs.core.next(seq__28329__$1);
var G__28485 = null;
var G__28486 = (0);
var G__28487 = (0);
seq__28329 = G__28484;
chunk__28330 = G__28485;
count__28331 = G__28486;
i__28332 = G__28487;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__28348){
var map__28349 = p__28348;
var map__28349__$1 = (((((!((map__28349 == null))))?(((((map__28349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28349):map__28349);
var effect = map__28349__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28349__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28349__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__28355 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28356 = null;
var count__28357 = (0);
var i__28358 = (0);
while(true){
if((i__28358 < count__28357)){
var effect = chunk__28356.cljs$core$IIndexed$_nth$arity$2(null,i__28358);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28490 = seq__28355;
var G__28491 = chunk__28356;
var G__28492 = count__28357;
var G__28493 = (i__28358 + (1));
seq__28355 = G__28490;
chunk__28356 = G__28491;
count__28357 = G__28492;
i__28358 = G__28493;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28355);
if(temp__5735__auto__){
var seq__28355__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28355__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28355__$1);
var G__28494 = cljs.core.chunk_rest(seq__28355__$1);
var G__28495 = c__4556__auto__;
var G__28496 = cljs.core.count(c__4556__auto__);
var G__28497 = (0);
seq__28355 = G__28494;
chunk__28356 = G__28495;
count__28357 = G__28496;
i__28358 = G__28497;
continue;
} else {
var effect = cljs.core.first(seq__28355__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__28498 = cljs.core.next(seq__28355__$1);
var G__28499 = null;
var G__28500 = (0);
var G__28501 = (0);
seq__28355 = G__28498;
chunk__28356 = G__28499;
count__28357 = G__28500;
i__28358 = G__28501;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__28369 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__28370 = null;
var count__28371 = (0);
var i__28372 = (0);
while(true){
if((i__28372 < count__28371)){
var vec__28387 = chunk__28370.cljs$core$IIndexed$_nth$arity$2(null,i__28372);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28387,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28387,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28504 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28504)){
var effect_fn_28505 = temp__5733__auto___28504;
(effect_fn_28505.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28505.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28505.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28506 = seq__28369;
var G__28507 = chunk__28370;
var G__28508 = count__28371;
var G__28509 = (i__28372 + (1));
seq__28369 = G__28506;
chunk__28370 = G__28507;
count__28371 = G__28508;
i__28372 = G__28509;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28369);
if(temp__5735__auto__){
var seq__28369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28369__$1);
var G__28510 = cljs.core.chunk_rest(seq__28369__$1);
var G__28511 = c__4556__auto__;
var G__28512 = cljs.core.count(c__4556__auto__);
var G__28513 = (0);
seq__28369 = G__28510;
chunk__28370 = G__28511;
count__28371 = G__28512;
i__28372 = G__28513;
continue;
} else {
var vec__28391 = cljs.core.first(seq__28369__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28391,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___28515 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___28515)){
var effect_fn_28516 = temp__5733__auto___28515;
(effect_fn_28516.cljs$core$IFn$_invoke$arity$1 ? effect_fn_28516.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_28516.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__28518 = cljs.core.next(seq__28369__$1);
var G__28519 = null;
var G__28520 = (0);
var G__28521 = (0);
seq__28369 = G__28518;
chunk__28370 = G__28519;
count__28371 = G__28520;
i__28372 = G__28521;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__28407 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__28408 = null;
var count__28409 = (0);
var i__28410 = (0);
while(true){
if((i__28410 < count__28409)){
var event = chunk__28408.cljs$core$IIndexed$_nth$arity$2(null,i__28410);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28522 = seq__28407;
var G__28523 = chunk__28408;
var G__28524 = count__28409;
var G__28525 = (i__28410 + (1));
seq__28407 = G__28522;
chunk__28408 = G__28523;
count__28409 = G__28524;
i__28410 = G__28525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28407);
if(temp__5735__auto__){
var seq__28407__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28407__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28407__$1);
var G__28526 = cljs.core.chunk_rest(seq__28407__$1);
var G__28527 = c__4556__auto__;
var G__28528 = cljs.core.count(c__4556__auto__);
var G__28529 = (0);
seq__28407 = G__28526;
chunk__28408 = G__28527;
count__28409 = G__28528;
i__28410 = G__28529;
continue;
} else {
var event = cljs.core.first(seq__28407__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__28531 = cljs.core.next(seq__28407__$1);
var G__28532 = null;
var G__28533 = (0);
var G__28534 = (0);
seq__28407 = G__28531;
chunk__28408 = G__28532;
count__28409 = G__28533;
i__28410 = G__28534;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__28430 = cljs.core.seq(value);
var chunk__28431 = null;
var count__28432 = (0);
var i__28433 = (0);
while(true){
if((i__28433 < count__28432)){
var event = chunk__28431.cljs$core$IIndexed$_nth$arity$2(null,i__28433);
clear_event(event);


var G__28536 = seq__28430;
var G__28537 = chunk__28431;
var G__28538 = count__28432;
var G__28539 = (i__28433 + (1));
seq__28430 = G__28536;
chunk__28431 = G__28537;
count__28432 = G__28538;
i__28433 = G__28539;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__28430);
if(temp__5735__auto__){
var seq__28430__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28430__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__28430__$1);
var G__28540 = cljs.core.chunk_rest(seq__28430__$1);
var G__28541 = c__4556__auto__;
var G__28542 = cljs.core.count(c__4556__auto__);
var G__28543 = (0);
seq__28430 = G__28540;
chunk__28431 = G__28541;
count__28432 = G__28542;
i__28433 = G__28543;
continue;
} else {
var event = cljs.core.first(seq__28430__$1);
clear_event(event);


var G__28544 = cljs.core.next(seq__28430__$1);
var G__28545 = null;
var G__28546 = (0);
var G__28547 = (0);
seq__28430 = G__28544;
chunk__28431 = G__28545;
count__28432 = G__28546;
i__28433 = G__28547;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
