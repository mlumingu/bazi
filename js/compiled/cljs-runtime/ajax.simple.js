goog.provide('ajax.simple');
ajax.simple.normalize_method = (function ajax$simple$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.simple.process_response = (function ajax$simple$process_response(response,interceptor){
return ajax.protocols._process_response(interceptor,response);
});
ajax.simple.make_js_handler = (function ajax$simple$make_js_handler(handler,interceptors){
return (function ajax$simple$make_js_handler_$_js_handler(response){
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_response,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});
ajax.simple.base_handler = (function ajax$simple$base_handler(interceptors,p__31121){
var map__31122 = p__31121;
var map__31122__$1 = (((((!((map__31122 == null))))?(((((map__31122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31122):map__31122);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31122__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.simple.make_js_handler(handler,interceptors);
} else {
return ajax.util.throw_error("No ajax handler provided.");
}
});
ajax.simple.default_interceptors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
ajax.simple.normalize_request = (function ajax$simple$normalize_request(request){
var response_format = ajax.interceptors.get_response_format(ajax.formats.detect_response_format,request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"method","method",55703592),ajax.simple.normalize_method),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (p1__31125_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__4126__auto__ = p1__31125_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(ajax.simple.default_interceptors);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ajax.interceptors.request_interceptors], 0));
}));
});
ajax.simple.new_default_api = (function ajax$simple$new_default_api(){
return (new goog.net.XhrIo());
});
/**
 * -process-request with the arguments flipped for use in reduce
 */
ajax.simple.process_request = (function ajax$simple$process_request(request,interceptor){
return ajax.protocols._process_request(interceptor,request);
});
/**
 * The main request function.
 */
ajax.simple.raw_ajax_request = (function ajax$simple$raw_ajax_request(p__31126){
var map__31127 = p__31126;
var map__31127__$1 = (((((!((map__31127 == null))))?(((((map__31127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31127):map__31127);
var request = map__31127__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.simple.process_request,request,interceptors);
var handler = ajax.simple.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"api","api",-899839580).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax.simple.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.simple.ajax_request = (function ajax$simple$ajax_request(request){
return ajax.simple.raw_ajax_request(ajax.simple.normalize_request(request));
});

//# sourceMappingURL=ajax.simple.js.map
