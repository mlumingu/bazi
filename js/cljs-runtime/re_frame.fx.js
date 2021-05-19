goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__56810 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__56811 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__56811);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___56902 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___56902)){
var new_db_56903 = temp__5735__auto___56902;
var fexpr__56814_56904 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56814_56904.cljs$core$IFn$_invoke$arity$1 ? fexpr__56814_56904.cljs$core$IFn$_invoke$arity$1(new_db_56903) : fexpr__56814_56904.call(null,new_db_56903));
} else {
}

var seq__56815 = cljs.core.seq(effects_without_db);
var chunk__56816 = null;
var count__56817 = (0);
var i__56818 = (0);
while(true){
if((i__56818 < count__56817)){
var vec__56828 = chunk__56816.cljs$core$IIndexed$_nth$arity$2(null,i__56818);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56828,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56828,(1),null);
var temp__5733__auto___56905 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56905)){
var effect_fn_56906 = temp__5733__auto___56905;
(effect_fn_56906.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56906.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56906.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56907 = seq__56815;
var G__56908 = chunk__56816;
var G__56909 = count__56817;
var G__56910 = (i__56818 + (1));
seq__56815 = G__56907;
chunk__56816 = G__56908;
count__56817 = G__56909;
i__56818 = G__56910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56815);
if(temp__5735__auto__){
var seq__56815__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56815__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56815__$1);
var G__56911 = cljs.core.chunk_rest(seq__56815__$1);
var G__56912 = c__4556__auto__;
var G__56913 = cljs.core.count(c__4556__auto__);
var G__56914 = (0);
seq__56815 = G__56911;
chunk__56816 = G__56912;
count__56817 = G__56913;
i__56818 = G__56914;
continue;
} else {
var vec__56833 = cljs.core.first(seq__56815__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56833,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56833,(1),null);
var temp__5733__auto___56915 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56915)){
var effect_fn_56916 = temp__5733__auto___56915;
(effect_fn_56916.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56916.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56916.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56918 = cljs.core.next(seq__56815__$1);
var G__56919 = null;
var G__56920 = (0);
var G__56921 = (0);
seq__56815 = G__56918;
chunk__56816 = G__56919;
count__56817 = G__56920;
i__56818 = G__56921;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__56486__auto___56922 = re_frame.interop.now();
var duration__56487__auto___56923 = (end__56486__auto___56922 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__56487__auto___56923,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__56486__auto___56922);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__56810);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___56925 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___56925)){
var new_db_56926 = temp__5735__auto___56925;
var fexpr__56837_56927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__56837_56927.cljs$core$IFn$_invoke$arity$1 ? fexpr__56837_56927.cljs$core$IFn$_invoke$arity$1(new_db_56926) : fexpr__56837_56927.call(null,new_db_56926));
} else {
}

var seq__56838 = cljs.core.seq(effects_without_db);
var chunk__56839 = null;
var count__56840 = (0);
var i__56841 = (0);
while(true){
if((i__56841 < count__56840)){
var vec__56849 = chunk__56839.cljs$core$IIndexed$_nth$arity$2(null,i__56841);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56849,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56849,(1),null);
var temp__5733__auto___56928 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56928)){
var effect_fn_56929 = temp__5733__auto___56928;
(effect_fn_56929.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56929.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56929.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56930 = seq__56838;
var G__56931 = chunk__56839;
var G__56932 = count__56840;
var G__56933 = (i__56841 + (1));
seq__56838 = G__56930;
chunk__56839 = G__56931;
count__56840 = G__56932;
i__56841 = G__56933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56838);
if(temp__5735__auto__){
var seq__56838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56838__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56838__$1);
var G__56934 = cljs.core.chunk_rest(seq__56838__$1);
var G__56935 = c__4556__auto__;
var G__56936 = cljs.core.count(c__4556__auto__);
var G__56937 = (0);
seq__56838 = G__56934;
chunk__56839 = G__56935;
count__56840 = G__56936;
i__56841 = G__56937;
continue;
} else {
var vec__56852 = cljs.core.first(seq__56838__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56852,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56852,(1),null);
var temp__5733__auto___56940 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56940)){
var effect_fn_56941 = temp__5733__auto___56940;
(effect_fn_56941.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56941.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56941.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__56942 = cljs.core.next(seq__56838__$1);
var G__56943 = null;
var G__56944 = (0);
var G__56945 = (0);
seq__56838 = G__56942;
chunk__56839 = G__56943;
count__56840 = G__56944;
i__56841 = G__56945;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__56856){
var map__56857 = p__56856;
var map__56857__$1 = (((((!((map__56857 == null))))?(((((map__56857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56857):map__56857);
var effect = map__56857__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56857__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56857__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__56861 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56862 = null;
var count__56863 = (0);
var i__56864 = (0);
while(true){
if((i__56864 < count__56863)){
var effect = chunk__56862.cljs$core$IIndexed$_nth$arity$2(null,i__56864);
re_frame.fx.dispatch_later(effect);


var G__56948 = seq__56861;
var G__56949 = chunk__56862;
var G__56950 = count__56863;
var G__56951 = (i__56864 + (1));
seq__56861 = G__56948;
chunk__56862 = G__56949;
count__56863 = G__56950;
i__56864 = G__56951;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56861);
if(temp__5735__auto__){
var seq__56861__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56861__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56861__$1);
var G__56952 = cljs.core.chunk_rest(seq__56861__$1);
var G__56953 = c__4556__auto__;
var G__56954 = cljs.core.count(c__4556__auto__);
var G__56955 = (0);
seq__56861 = G__56952;
chunk__56862 = G__56953;
count__56863 = G__56954;
i__56864 = G__56955;
continue;
} else {
var effect = cljs.core.first(seq__56861__$1);
re_frame.fx.dispatch_later(effect);


var G__56956 = cljs.core.next(seq__56861__$1);
var G__56957 = null;
var G__56958 = (0);
var G__56959 = (0);
seq__56861 = G__56956;
chunk__56862 = G__56957;
count__56863 = G__56958;
i__56864 = G__56959;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__56866 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__56867 = null;
var count__56868 = (0);
var i__56869 = (0);
while(true){
if((i__56869 < count__56868)){
var vec__56888 = chunk__56867.cljs$core$IIndexed$_nth$arity$2(null,i__56869);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56888,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56888,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___56962 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56962)){
var effect_fn_56963 = temp__5733__auto___56962;
(effect_fn_56963.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56963.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56963.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56964 = seq__56866;
var G__56965 = chunk__56867;
var G__56966 = count__56868;
var G__56967 = (i__56869 + (1));
seq__56866 = G__56964;
chunk__56867 = G__56965;
count__56868 = G__56966;
i__56869 = G__56967;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56866);
if(temp__5735__auto__){
var seq__56866__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56866__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56866__$1);
var G__56968 = cljs.core.chunk_rest(seq__56866__$1);
var G__56969 = c__4556__auto__;
var G__56970 = cljs.core.count(c__4556__auto__);
var G__56971 = (0);
seq__56866 = G__56968;
chunk__56867 = G__56969;
count__56868 = G__56970;
i__56869 = G__56971;
continue;
} else {
var vec__56891 = cljs.core.first(seq__56866__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56891,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56891,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___56972 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___56972)){
var effect_fn_56975 = temp__5733__auto___56972;
(effect_fn_56975.cljs$core$IFn$_invoke$arity$1 ? effect_fn_56975.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_56975.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__56976 = cljs.core.next(seq__56866__$1);
var G__56977 = null;
var G__56978 = (0);
var G__56979 = (0);
seq__56866 = G__56976;
chunk__56867 = G__56977;
count__56868 = G__56978;
i__56869 = G__56979;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__56894 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__56895 = null;
var count__56896 = (0);
var i__56897 = (0);
while(true){
if((i__56897 < count__56896)){
var event = chunk__56895.cljs$core$IIndexed$_nth$arity$2(null,i__56897);
re_frame.router.dispatch(event);


var G__56980 = seq__56894;
var G__56981 = chunk__56895;
var G__56982 = count__56896;
var G__56983 = (i__56897 + (1));
seq__56894 = G__56980;
chunk__56895 = G__56981;
count__56896 = G__56982;
i__56897 = G__56983;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56894);
if(temp__5735__auto__){
var seq__56894__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56894__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56894__$1);
var G__56984 = cljs.core.chunk_rest(seq__56894__$1);
var G__56985 = c__4556__auto__;
var G__56986 = cljs.core.count(c__4556__auto__);
var G__56987 = (0);
seq__56894 = G__56984;
chunk__56895 = G__56985;
count__56896 = G__56986;
i__56897 = G__56987;
continue;
} else {
var event = cljs.core.first(seq__56894__$1);
re_frame.router.dispatch(event);


var G__56988 = cljs.core.next(seq__56894__$1);
var G__56989 = null;
var G__56990 = (0);
var G__56991 = (0);
seq__56894 = G__56988;
chunk__56895 = G__56989;
count__56896 = G__56990;
i__56897 = G__56991;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__56898 = cljs.core.seq(value);
var chunk__56899 = null;
var count__56900 = (0);
var i__56901 = (0);
while(true){
if((i__56901 < count__56900)){
var event = chunk__56899.cljs$core$IIndexed$_nth$arity$2(null,i__56901);
clear_event(event);


var G__56993 = seq__56898;
var G__56994 = chunk__56899;
var G__56995 = count__56900;
var G__56996 = (i__56901 + (1));
seq__56898 = G__56993;
chunk__56899 = G__56994;
count__56900 = G__56995;
i__56901 = G__56996;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__56898);
if(temp__5735__auto__){
var seq__56898__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56898__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56898__$1);
var G__56998 = cljs.core.chunk_rest(seq__56898__$1);
var G__56999 = c__4556__auto__;
var G__57000 = cljs.core.count(c__4556__auto__);
var G__57001 = (0);
seq__56898 = G__56998;
chunk__56899 = G__56999;
count__56900 = G__57000;
i__56901 = G__57001;
continue;
} else {
var event = cljs.core.first(seq__56898__$1);
clear_event(event);


var G__57002 = cljs.core.next(seq__56898__$1);
var G__57003 = null;
var G__57004 = (0);
var G__57005 = (0);
seq__56898 = G__57002;
chunk__56899 = G__57003;
count__56900 = G__57004;
i__56901 = G__57005;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
