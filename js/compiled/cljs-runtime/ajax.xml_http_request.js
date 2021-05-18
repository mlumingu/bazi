goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__30950 = e.target.readyState;
var fexpr__30949 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__30949.cljs$core$IFn$_invoke$arity$1 ? fexpr__30949.cljs$core$IFn$_invoke$arity$1(G__30950) : fexpr__30949.call(null,G__30950));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30968,handler){
var map__30969 = p__30968;
var map__30969__$1 = (((((!((map__30969 == null))))?(((((map__30969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30969):map__30969);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30969__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30969__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30969__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__30966_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__30966_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___31007 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___31007)){
var response_type_31008 = temp__5735__auto___31007;
(this$__$1.responseType = cljs.core.name(response_type_31008));
} else {
}

var seq__30972_31009 = cljs.core.seq(headers);
var chunk__30973_31010 = null;
var count__30974_31011 = (0);
var i__30975_31012 = (0);
while(true){
if((i__30975_31012 < count__30974_31011)){
var vec__30985_31013 = chunk__30973_31010.cljs$core$IIndexed$_nth$arity$2(null,i__30975_31012);
var k_31014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30985_31013,(0),null);
var v_31015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30985_31013,(1),null);
this$__$1.setRequestHeader(k_31014,v_31015);


var G__31016 = seq__30972_31009;
var G__31017 = chunk__30973_31010;
var G__31018 = count__30974_31011;
var G__31019 = (i__30975_31012 + (1));
seq__30972_31009 = G__31016;
chunk__30973_31010 = G__31017;
count__30974_31011 = G__31018;
i__30975_31012 = G__31019;
continue;
} else {
var temp__5735__auto___31020 = cljs.core.seq(seq__30972_31009);
if(temp__5735__auto___31020){
var seq__30972_31021__$1 = temp__5735__auto___31020;
if(cljs.core.chunked_seq_QMARK_(seq__30972_31021__$1)){
var c__4556__auto___31022 = cljs.core.chunk_first(seq__30972_31021__$1);
var G__31023 = cljs.core.chunk_rest(seq__30972_31021__$1);
var G__31024 = c__4556__auto___31022;
var G__31025 = cljs.core.count(c__4556__auto___31022);
var G__31026 = (0);
seq__30972_31009 = G__31023;
chunk__30973_31010 = G__31024;
count__30974_31011 = G__31025;
i__30975_31012 = G__31026;
continue;
} else {
var vec__30988_31027 = cljs.core.first(seq__30972_31021__$1);
var k_31028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988_31027,(0),null);
var v_31029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30988_31027,(1),null);
this$__$1.setRequestHeader(k_31028,v_31029);


var G__31030 = cljs.core.next(seq__30972_31021__$1);
var G__31031 = null;
var G__31032 = (0);
var G__31033 = (0);
seq__30972_31009 = G__31030;
chunk__30973_31010 = G__31031;
count__30974_31011 = G__31032;
i__30975_31012 = G__31033;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
