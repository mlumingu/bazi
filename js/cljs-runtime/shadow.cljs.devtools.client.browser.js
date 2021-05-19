goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55442 = arguments.length;
var i__4737__auto___55443 = (0);
while(true){
if((i__4737__auto___55443 < len__4736__auto___55442)){
args__4742__auto__.push((arguments[i__4737__auto___55443]));

var G__55445 = (i__4737__auto___55443 + (1));
i__4737__auto___55443 = G__55445;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq55200){
var G__55201 = cljs.core.first(seq55200);
var seq55200__$1 = cljs.core.next(seq55200);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55201,seq55200__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__55204 = cljs.core.seq(sources);
var chunk__55205 = null;
var count__55206 = (0);
var i__55207 = (0);
while(true){
if((i__55207 < count__55206)){
var map__55219 = chunk__55205.cljs$core$IIndexed$_nth$arity$2(null,i__55207);
var map__55219__$1 = (((((!((map__55219 == null))))?(((((map__55219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55219):map__55219);
var src = map__55219__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55219__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55219__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55219__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e55222){var e_55447 = e55222;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55447);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55447.message)].join('')));
}

var G__55448 = seq__55204;
var G__55449 = chunk__55205;
var G__55450 = count__55206;
var G__55451 = (i__55207 + (1));
seq__55204 = G__55448;
chunk__55205 = G__55449;
count__55206 = G__55450;
i__55207 = G__55451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55204);
if(temp__5735__auto__){
var seq__55204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55204__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55204__$1);
var G__55452 = cljs.core.chunk_rest(seq__55204__$1);
var G__55453 = c__4556__auto__;
var G__55454 = cljs.core.count(c__4556__auto__);
var G__55455 = (0);
seq__55204 = G__55452;
chunk__55205 = G__55453;
count__55206 = G__55454;
i__55207 = G__55455;
continue;
} else {
var map__55223 = cljs.core.first(seq__55204__$1);
var map__55223__$1 = (((((!((map__55223 == null))))?(((((map__55223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55223):map__55223);
var src = map__55223__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55223__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55223__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55223__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55223__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e55226){var e_55456 = e55226;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_55456);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_55456.message)].join('')));
}

var G__55457 = cljs.core.next(seq__55204__$1);
var G__55458 = null;
var G__55459 = (0);
var G__55460 = (0);
seq__55204 = G__55457;
chunk__55205 = G__55458;
count__55206 = G__55459;
i__55207 = G__55460;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__55229 = cljs.core.seq(js_requires);
var chunk__55230 = null;
var count__55231 = (0);
var i__55232 = (0);
while(true){
if((i__55232 < count__55231)){
var js_ns = chunk__55230.cljs$core$IIndexed$_nth$arity$2(null,i__55232);
var require_str_55464 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55464);


var G__55465 = seq__55229;
var G__55466 = chunk__55230;
var G__55467 = count__55231;
var G__55468 = (i__55232 + (1));
seq__55229 = G__55465;
chunk__55230 = G__55466;
count__55231 = G__55467;
i__55232 = G__55468;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55229);
if(temp__5735__auto__){
var seq__55229__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55229__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55229__$1);
var G__55469 = cljs.core.chunk_rest(seq__55229__$1);
var G__55470 = c__4556__auto__;
var G__55471 = cljs.core.count(c__4556__auto__);
var G__55472 = (0);
seq__55229 = G__55469;
chunk__55230 = G__55470;
count__55231 = G__55471;
i__55232 = G__55472;
continue;
} else {
var js_ns = cljs.core.first(seq__55229__$1);
var require_str_55473 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_55473);


var G__55474 = cljs.core.next(seq__55229__$1);
var G__55475 = null;
var G__55476 = (0);
var G__55477 = (0);
seq__55229 = G__55474;
chunk__55230 = G__55475;
count__55231 = G__55476;
i__55232 = G__55477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__55234){
var map__55235 = p__55234;
var map__55235__$1 = (((((!((map__55235 == null))))?(((((map__55235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55235):map__55235);
var msg = map__55235__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55235__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55237(s__55238){
return (new cljs.core.LazySeq(null,(function (){
var s__55238__$1 = s__55238;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__55238__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__55243 = cljs.core.first(xs__6292__auto__);
var map__55243__$1 = (((((!((map__55243 == null))))?(((((map__55243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55243):map__55243);
var src = map__55243__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__55238__$1,map__55243,map__55243__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55235,map__55235__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55237_$_iter__55239(s__55240){
return (new cljs.core.LazySeq(null,((function (s__55238__$1,map__55243,map__55243__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55235,map__55235__$1,msg,info,reload_info){
return (function (){
var s__55240__$1 = s__55240;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__55240__$1);
if(temp__5735__auto____$1){
var s__55240__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__55240__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__55240__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__55242 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__55241 = (0);
while(true){
if((i__55241 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__55241);
cljs.core.chunk_append(b__55242,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__55478 = (i__55241 + (1));
i__55241 = G__55478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__55242),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55237_$_iter__55239(cljs.core.chunk_rest(s__55240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__55242),null);
}
} else {
var warning = cljs.core.first(s__55240__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55237_$_iter__55239(cljs.core.rest(s__55240__$2)));
}
} else {
return null;
}
break;
}
});})(s__55238__$1,map__55243,map__55243__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55235,map__55235__$1,msg,info,reload_info))
,null,null));
});})(s__55238__$1,map__55243,map__55243__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__55235,map__55235__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__55237(cljs.core.rest(s__55238__$1)));
} else {
var G__55479 = cljs.core.rest(s__55238__$1);
s__55238__$1 = G__55479;
continue;
}
} else {
var G__55480 = cljs.core.rest(s__55238__$1);
s__55238__$1 = G__55480;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__55249_55481 = cljs.core.seq(warnings);
var chunk__55250_55482 = null;
var count__55251_55483 = (0);
var i__55252_55484 = (0);
while(true){
if((i__55252_55484 < count__55251_55483)){
var map__55267_55485 = chunk__55250_55482.cljs$core$IIndexed$_nth$arity$2(null,i__55252_55484);
var map__55267_55486__$1 = (((((!((map__55267_55485 == null))))?(((((map__55267_55485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55267_55485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55267_55485):map__55267_55485);
var w_55487 = map__55267_55486__$1;
var msg_55488__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55267_55486__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55267_55486__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55267_55486__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55267_55486__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55491)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55489),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55490),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55488__$1)].join(''));


var G__55492 = seq__55249_55481;
var G__55493 = chunk__55250_55482;
var G__55494 = count__55251_55483;
var G__55495 = (i__55252_55484 + (1));
seq__55249_55481 = G__55492;
chunk__55250_55482 = G__55493;
count__55251_55483 = G__55494;
i__55252_55484 = G__55495;
continue;
} else {
var temp__5735__auto___55496 = cljs.core.seq(seq__55249_55481);
if(temp__5735__auto___55496){
var seq__55249_55497__$1 = temp__5735__auto___55496;
if(cljs.core.chunked_seq_QMARK_(seq__55249_55497__$1)){
var c__4556__auto___55498 = cljs.core.chunk_first(seq__55249_55497__$1);
var G__55499 = cljs.core.chunk_rest(seq__55249_55497__$1);
var G__55500 = c__4556__auto___55498;
var G__55501 = cljs.core.count(c__4556__auto___55498);
var G__55502 = (0);
seq__55249_55481 = G__55499;
chunk__55250_55482 = G__55500;
count__55251_55483 = G__55501;
i__55252_55484 = G__55502;
continue;
} else {
var map__55271_55503 = cljs.core.first(seq__55249_55497__$1);
var map__55271_55504__$1 = (((((!((map__55271_55503 == null))))?(((((map__55271_55503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55271_55503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55271_55503):map__55271_55503);
var w_55505 = map__55271_55504__$1;
var msg_55506__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55271_55504__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_55507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55271_55504__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_55508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55271_55504__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_55509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55271_55504__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_55509)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_55507),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_55508),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_55506__$1)].join(''));


var G__55510 = cljs.core.next(seq__55249_55497__$1);
var G__55511 = null;
var G__55512 = (0);
var G__55513 = (0);
seq__55249_55481 = G__55510;
chunk__55250_55482 = G__55511;
count__55251_55483 = G__55512;
i__55252_55484 = G__55513;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__55233_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__55233_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__55277){
var map__55278 = p__55277;
var map__55278__$1 = (((((!((map__55278 == null))))?(((((map__55278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55278):map__55278);
var msg = map__55278__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55278__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__55280 = cljs.core.seq(updates);
var chunk__55282 = null;
var count__55283 = (0);
var i__55284 = (0);
while(true){
if((i__55284 < count__55283)){
var path = chunk__55282.cljs$core$IIndexed$_nth$arity$2(null,i__55284);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__55340_55514 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__55344_55515 = null;
var count__55345_55516 = (0);
var i__55346_55517 = (0);
while(true){
if((i__55346_55517 < count__55345_55516)){
var node_55518 = chunk__55344_55515.cljs$core$IIndexed$_nth$arity$2(null,i__55346_55517);
if(cljs.core.not(node_55518.shadow$old)){
var path_match_55519 = shadow.cljs.devtools.client.browser.match_paths(node_55518.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55519)){
var new_link_55520 = (function (){var G__55375 = node_55518.cloneNode(true);
G__55375.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55519),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55375;
})();
(node_55518.shadow$old = true);

(new_link_55520.onload = ((function (seq__55340_55514,chunk__55344_55515,count__55345_55516,i__55346_55517,seq__55280,chunk__55282,count__55283,i__55284,new_link_55520,path_match_55519,node_55518,path,map__55278,map__55278__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55518);
});})(seq__55340_55514,chunk__55344_55515,count__55345_55516,i__55346_55517,seq__55280,chunk__55282,count__55283,i__55284,new_link_55520,path_match_55519,node_55518,path,map__55278,map__55278__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55519], 0));

goog.dom.insertSiblingAfter(new_link_55520,node_55518);


var G__55524 = seq__55340_55514;
var G__55525 = chunk__55344_55515;
var G__55526 = count__55345_55516;
var G__55527 = (i__55346_55517 + (1));
seq__55340_55514 = G__55524;
chunk__55344_55515 = G__55525;
count__55345_55516 = G__55526;
i__55346_55517 = G__55527;
continue;
} else {
var G__55528 = seq__55340_55514;
var G__55529 = chunk__55344_55515;
var G__55530 = count__55345_55516;
var G__55531 = (i__55346_55517 + (1));
seq__55340_55514 = G__55528;
chunk__55344_55515 = G__55529;
count__55345_55516 = G__55530;
i__55346_55517 = G__55531;
continue;
}
} else {
var G__55532 = seq__55340_55514;
var G__55533 = chunk__55344_55515;
var G__55534 = count__55345_55516;
var G__55535 = (i__55346_55517 + (1));
seq__55340_55514 = G__55532;
chunk__55344_55515 = G__55533;
count__55345_55516 = G__55534;
i__55346_55517 = G__55535;
continue;
}
} else {
var temp__5735__auto___55536 = cljs.core.seq(seq__55340_55514);
if(temp__5735__auto___55536){
var seq__55340_55539__$1 = temp__5735__auto___55536;
if(cljs.core.chunked_seq_QMARK_(seq__55340_55539__$1)){
var c__4556__auto___55540 = cljs.core.chunk_first(seq__55340_55539__$1);
var G__55541 = cljs.core.chunk_rest(seq__55340_55539__$1);
var G__55542 = c__4556__auto___55540;
var G__55543 = cljs.core.count(c__4556__auto___55540);
var G__55544 = (0);
seq__55340_55514 = G__55541;
chunk__55344_55515 = G__55542;
count__55345_55516 = G__55543;
i__55346_55517 = G__55544;
continue;
} else {
var node_55545 = cljs.core.first(seq__55340_55539__$1);
if(cljs.core.not(node_55545.shadow$old)){
var path_match_55546 = shadow.cljs.devtools.client.browser.match_paths(node_55545.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55546)){
var new_link_55547 = (function (){var G__55378 = node_55545.cloneNode(true);
G__55378.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55546),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55378;
})();
(node_55545.shadow$old = true);

(new_link_55547.onload = ((function (seq__55340_55514,chunk__55344_55515,count__55345_55516,i__55346_55517,seq__55280,chunk__55282,count__55283,i__55284,new_link_55547,path_match_55546,node_55545,seq__55340_55539__$1,temp__5735__auto___55536,path,map__55278,map__55278__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55545);
});})(seq__55340_55514,chunk__55344_55515,count__55345_55516,i__55346_55517,seq__55280,chunk__55282,count__55283,i__55284,new_link_55547,path_match_55546,node_55545,seq__55340_55539__$1,temp__5735__auto___55536,path,map__55278,map__55278__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55546], 0));

goog.dom.insertSiblingAfter(new_link_55547,node_55545);


var G__55548 = cljs.core.next(seq__55340_55539__$1);
var G__55549 = null;
var G__55550 = (0);
var G__55551 = (0);
seq__55340_55514 = G__55548;
chunk__55344_55515 = G__55549;
count__55345_55516 = G__55550;
i__55346_55517 = G__55551;
continue;
} else {
var G__55552 = cljs.core.next(seq__55340_55539__$1);
var G__55553 = null;
var G__55554 = (0);
var G__55555 = (0);
seq__55340_55514 = G__55552;
chunk__55344_55515 = G__55553;
count__55345_55516 = G__55554;
i__55346_55517 = G__55555;
continue;
}
} else {
var G__55556 = cljs.core.next(seq__55340_55539__$1);
var G__55557 = null;
var G__55558 = (0);
var G__55559 = (0);
seq__55340_55514 = G__55556;
chunk__55344_55515 = G__55557;
count__55345_55516 = G__55558;
i__55346_55517 = G__55559;
continue;
}
}
} else {
}
}
break;
}


var G__55560 = seq__55280;
var G__55561 = chunk__55282;
var G__55562 = count__55283;
var G__55563 = (i__55284 + (1));
seq__55280 = G__55560;
chunk__55282 = G__55561;
count__55283 = G__55562;
i__55284 = G__55563;
continue;
} else {
var G__55564 = seq__55280;
var G__55565 = chunk__55282;
var G__55566 = count__55283;
var G__55567 = (i__55284 + (1));
seq__55280 = G__55564;
chunk__55282 = G__55565;
count__55283 = G__55566;
i__55284 = G__55567;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__55280);
if(temp__5735__auto__){
var seq__55280__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55280__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__55280__$1);
var G__55568 = cljs.core.chunk_rest(seq__55280__$1);
var G__55569 = c__4556__auto__;
var G__55570 = cljs.core.count(c__4556__auto__);
var G__55571 = (0);
seq__55280 = G__55568;
chunk__55282 = G__55569;
count__55283 = G__55570;
i__55284 = G__55571;
continue;
} else {
var path = cljs.core.first(seq__55280__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__55383_55572 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__55387_55573 = null;
var count__55388_55574 = (0);
var i__55389_55575 = (0);
while(true){
if((i__55389_55575 < count__55388_55574)){
var node_55576 = chunk__55387_55573.cljs$core$IIndexed$_nth$arity$2(null,i__55389_55575);
if(cljs.core.not(node_55576.shadow$old)){
var path_match_55577 = shadow.cljs.devtools.client.browser.match_paths(node_55576.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55577)){
var new_link_55578 = (function (){var G__55395 = node_55576.cloneNode(true);
G__55395.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55577),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55395;
})();
(node_55576.shadow$old = true);

(new_link_55578.onload = ((function (seq__55383_55572,chunk__55387_55573,count__55388_55574,i__55389_55575,seq__55280,chunk__55282,count__55283,i__55284,new_link_55578,path_match_55577,node_55576,path,seq__55280__$1,temp__5735__auto__,map__55278,map__55278__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55576);
});})(seq__55383_55572,chunk__55387_55573,count__55388_55574,i__55389_55575,seq__55280,chunk__55282,count__55283,i__55284,new_link_55578,path_match_55577,node_55576,path,seq__55280__$1,temp__5735__auto__,map__55278,map__55278__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55577], 0));

goog.dom.insertSiblingAfter(new_link_55578,node_55576);


var G__55581 = seq__55383_55572;
var G__55582 = chunk__55387_55573;
var G__55583 = count__55388_55574;
var G__55584 = (i__55389_55575 + (1));
seq__55383_55572 = G__55581;
chunk__55387_55573 = G__55582;
count__55388_55574 = G__55583;
i__55389_55575 = G__55584;
continue;
} else {
var G__55585 = seq__55383_55572;
var G__55586 = chunk__55387_55573;
var G__55587 = count__55388_55574;
var G__55588 = (i__55389_55575 + (1));
seq__55383_55572 = G__55585;
chunk__55387_55573 = G__55586;
count__55388_55574 = G__55587;
i__55389_55575 = G__55588;
continue;
}
} else {
var G__55589 = seq__55383_55572;
var G__55590 = chunk__55387_55573;
var G__55591 = count__55388_55574;
var G__55592 = (i__55389_55575 + (1));
seq__55383_55572 = G__55589;
chunk__55387_55573 = G__55590;
count__55388_55574 = G__55591;
i__55389_55575 = G__55592;
continue;
}
} else {
var temp__5735__auto___55593__$1 = cljs.core.seq(seq__55383_55572);
if(temp__5735__auto___55593__$1){
var seq__55383_55594__$1 = temp__5735__auto___55593__$1;
if(cljs.core.chunked_seq_QMARK_(seq__55383_55594__$1)){
var c__4556__auto___55595 = cljs.core.chunk_first(seq__55383_55594__$1);
var G__55596 = cljs.core.chunk_rest(seq__55383_55594__$1);
var G__55597 = c__4556__auto___55595;
var G__55598 = cljs.core.count(c__4556__auto___55595);
var G__55599 = (0);
seq__55383_55572 = G__55596;
chunk__55387_55573 = G__55597;
count__55388_55574 = G__55598;
i__55389_55575 = G__55599;
continue;
} else {
var node_55600 = cljs.core.first(seq__55383_55594__$1);
if(cljs.core.not(node_55600.shadow$old)){
var path_match_55601 = shadow.cljs.devtools.client.browser.match_paths(node_55600.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55601)){
var new_link_55602 = (function (){var G__55398 = node_55600.cloneNode(true);
G__55398.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55601),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__55398;
})();
(node_55600.shadow$old = true);

(new_link_55602.onload = ((function (seq__55383_55572,chunk__55387_55573,count__55388_55574,i__55389_55575,seq__55280,chunk__55282,count__55283,i__55284,new_link_55602,path_match_55601,node_55600,seq__55383_55594__$1,temp__5735__auto___55593__$1,path,seq__55280__$1,temp__5735__auto__,map__55278,map__55278__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_55600);
});})(seq__55383_55572,chunk__55387_55573,count__55388_55574,i__55389_55575,seq__55280,chunk__55282,count__55283,i__55284,new_link_55602,path_match_55601,node_55600,seq__55383_55594__$1,temp__5735__auto___55593__$1,path,seq__55280__$1,temp__5735__auto__,map__55278,map__55278__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55601], 0));

goog.dom.insertSiblingAfter(new_link_55602,node_55600);


var G__55603 = cljs.core.next(seq__55383_55594__$1);
var G__55604 = null;
var G__55605 = (0);
var G__55606 = (0);
seq__55383_55572 = G__55603;
chunk__55387_55573 = G__55604;
count__55388_55574 = G__55605;
i__55389_55575 = G__55606;
continue;
} else {
var G__55607 = cljs.core.next(seq__55383_55594__$1);
var G__55608 = null;
var G__55609 = (0);
var G__55610 = (0);
seq__55383_55572 = G__55607;
chunk__55387_55573 = G__55608;
count__55388_55574 = G__55609;
i__55389_55575 = G__55610;
continue;
}
} else {
var G__55611 = cljs.core.next(seq__55383_55594__$1);
var G__55612 = null;
var G__55613 = (0);
var G__55614 = (0);
seq__55383_55572 = G__55611;
chunk__55387_55573 = G__55612;
count__55388_55574 = G__55613;
i__55389_55575 = G__55614;
continue;
}
}
} else {
}
}
break;
}


var G__55615 = cljs.core.next(seq__55280__$1);
var G__55616 = null;
var G__55617 = (0);
var G__55618 = (0);
seq__55280 = G__55615;
chunk__55282 = G__55616;
count__55283 = G__55617;
i__55284 = G__55618;
continue;
} else {
var G__55619 = cljs.core.next(seq__55280__$1);
var G__55620 = null;
var G__55621 = (0);
var G__55622 = (0);
seq__55280 = G__55619;
chunk__55282 = G__55620;
count__55283 = G__55621;
i__55284 = G__55622;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__55399){
var map__55400 = p__55399;
var map__55400__$1 = (((((!((map__55400 == null))))?(((((map__55400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55400):map__55400);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55400__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__55406){
var map__55407 = p__55406;
var map__55407__$1 = (((((!((map__55407 == null))))?(((((map__55407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55407):map__55407);
var _ = map__55407__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55407__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__55409,done,error){
var map__55410 = p__55409;
var map__55410__$1 = (((((!((map__55410 == null))))?(((((map__55410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55410):map__55410);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55410__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__55414,done,error){
var map__55415 = p__55414;
var map__55415__$1 = (((((!((map__55415 == null))))?(((((map__55415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55415):map__55415);
var msg = map__55415__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55415__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__55417){
var map__55418 = p__55417;
var map__55418__$1 = (((((!((map__55418 == null))))?(((((map__55418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55418):map__55418);
var src = map__55418__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55418__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__55420 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__55420) : done.call(null,G__55420));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__55421){
var map__55422 = p__55421;
var map__55422__$1 = (((((!((map__55422 == null))))?(((((map__55422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55422):map__55422);
var msg__$1 = map__55422__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55422__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e55424){var ex = e55424;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__55425){
var map__55426 = p__55425;
var map__55426__$1 = (((((!((map__55426 == null))))?(((((map__55426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55426):map__55426);
var env = map__55426__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55426__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__55428){
var map__55429 = p__55428;
var map__55429__$1 = (((((!((map__55429 == null))))?(((((map__55429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55429):map__55429);
var msg = map__55429__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55429__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__55431){
var map__55432 = p__55431;
var map__55432__$1 = (((((!((map__55432 == null))))?(((((map__55432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55432):map__55432);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55432__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55432__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__55437){
var map__55438 = p__55437;
var map__55438__$1 = (((((!((map__55438 == null))))?(((((map__55438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55438):map__55438);
var svc = map__55438__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55438__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
