goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__54732,p__54733){
var map__54734 = p__54732;
var map__54734__$1 = (((((!((map__54734 == null))))?(((((map__54734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54734):map__54734);
var svc = map__54734__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54734__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__54735 = p__54733;
var map__54735__$1 = (((((!((map__54735 == null))))?(((((map__54735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54735):map__54735);
var msg = map__54735__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54735__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54735__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__54741,p__54742){
var map__54743 = p__54741;
var map__54743__$1 = (((((!((map__54743 == null))))?(((((map__54743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54743):map__54743);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54743__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__54744 = p__54742;
var map__54744__$1 = (((((!((map__54744 == null))))?(((((map__54744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54744):map__54744);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54744__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__54754,p__54755){
var map__54756 = p__54754;
var map__54756__$1 = (((((!((map__54756 == null))))?(((((map__54756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54756):map__54756);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__54757 = p__54755;
var map__54757__$1 = (((((!((map__54757 == null))))?(((((map__54757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54757):map__54757);
var msg = map__54757__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54757__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__54765,tid){
var map__54767 = p__54765;
var map__54767__$1 = (((((!((map__54767 == null))))?(((((map__54767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54767):map__54767);
var svc = map__54767__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54767__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__54784 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__54785 = null;
var count__54786 = (0);
var i__54787 = (0);
while(true){
if((i__54787 < count__54786)){
var vec__54804 = chunk__54785.cljs$core$IIndexed$_nth$arity$2(null,i__54787);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54804,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54804,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__54840 = seq__54784;
var G__54841 = chunk__54785;
var G__54842 = count__54786;
var G__54843 = (i__54787 + (1));
seq__54784 = G__54840;
chunk__54785 = G__54841;
count__54786 = G__54842;
i__54787 = G__54843;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54784);
if(temp__5735__auto__){
var seq__54784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54784__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54784__$1);
var G__54844 = cljs.core.chunk_rest(seq__54784__$1);
var G__54845 = c__4556__auto__;
var G__54846 = cljs.core.count(c__4556__auto__);
var G__54847 = (0);
seq__54784 = G__54844;
chunk__54785 = G__54845;
count__54786 = G__54846;
i__54787 = G__54847;
continue;
} else {
var vec__54817 = cljs.core.first(seq__54784__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54817,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54817,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__54848 = cljs.core.next(seq__54784__$1);
var G__54849 = null;
var G__54850 = (0);
var G__54851 = (0);
seq__54784 = G__54848;
chunk__54785 = G__54849;
count__54786 = G__54850;
i__54787 = G__54851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__54772_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__54772_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__54773_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__54773_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__54774_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__54774_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__54775_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__54775_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__54829){
var map__54830 = p__54829;
var map__54830__$1 = (((((!((map__54830 == null))))?(((((map__54830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54830):map__54830);
var svc = map__54830__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54830__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54830__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
