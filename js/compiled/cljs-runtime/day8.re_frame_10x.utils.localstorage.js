goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__31077 = arguments.length;
switch (G__31077) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__31080 = cljs.core.seq(Object.keys(localStorage));
var chunk__31081 = null;
var count__31082 = (0);
var i__31083 = (0);
while(true){
if((i__31083 < count__31082)){
var k = chunk__31081.cljs$core$IIndexed$_nth$arity$2(null,i__31083);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__31095 = seq__31080;
var G__31096 = chunk__31081;
var G__31097 = count__31082;
var G__31098 = (i__31083 + (1));
seq__31080 = G__31095;
chunk__31081 = G__31096;
count__31082 = G__31097;
i__31083 = G__31098;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31080);
if(temp__5735__auto__){
var seq__31080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31080__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__31080__$1);
var G__31099 = cljs.core.chunk_rest(seq__31080__$1);
var G__31100 = c__4556__auto__;
var G__31101 = cljs.core.count(c__4556__auto__);
var G__31102 = (0);
seq__31080 = G__31099;
chunk__31081 = G__31100;
count__31082 = G__31101;
i__31083 = G__31102;
continue;
} else {
var k = cljs.core.first(seq__31080__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__31103 = cljs.core.next(seq__31080__$1);
var G__31104 = null;
var G__31105 = (0);
var G__31106 = (0);
seq__31080 = G__31103;
chunk__31081 = G__31104;
count__31082 = G__31105;
i__31083 = G__31106;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
