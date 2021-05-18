goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53142 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53142(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53149 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53149(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__52114 = coll;
var G__52115 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52114,G__52115) : shadow.dom.lazy_native_coll_seq.call(null,G__52114,G__52115));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__52140 = arguments.length;
switch (G__52140) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__52148 = arguments.length;
switch (G__52148) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__52164 = arguments.length;
switch (G__52164) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__52186 = arguments.length;
switch (G__52186) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__52201 = arguments.length;
switch (G__52201) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__52218 = arguments.length;
switch (G__52218) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e52236){if((e52236 instanceof Object)){
var e = e52236;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52236;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__52254 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52255 = null;
var count__52256 = (0);
var i__52257 = (0);
while(true){
if((i__52257 < count__52256)){
var el = chunk__52255.cljs$core$IIndexed$_nth$arity$2(null,i__52257);
var handler_53178__$1 = ((function (seq__52254,chunk__52255,count__52256,i__52257,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52254,chunk__52255,count__52256,i__52257,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53178__$1);


var G__53179 = seq__52254;
var G__53180 = chunk__52255;
var G__53181 = count__52256;
var G__53182 = (i__52257 + (1));
seq__52254 = G__53179;
chunk__52255 = G__53180;
count__52256 = G__53181;
i__52257 = G__53182;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52254);
if(temp__5735__auto__){
var seq__52254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52254__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52254__$1);
var G__53183 = cljs.core.chunk_rest(seq__52254__$1);
var G__53184 = c__4556__auto__;
var G__53185 = cljs.core.count(c__4556__auto__);
var G__53186 = (0);
seq__52254 = G__53183;
chunk__52255 = G__53184;
count__52256 = G__53185;
i__52257 = G__53186;
continue;
} else {
var el = cljs.core.first(seq__52254__$1);
var handler_53188__$1 = ((function (seq__52254,chunk__52255,count__52256,i__52257,el,seq__52254__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52254,chunk__52255,count__52256,i__52257,el,seq__52254__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53188__$1);


var G__53190 = cljs.core.next(seq__52254__$1);
var G__53191 = null;
var G__53192 = (0);
var G__53193 = (0);
seq__52254 = G__53190;
chunk__52255 = G__53191;
count__52256 = G__53192;
i__52257 = G__53193;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__52281 = arguments.length;
switch (G__52281) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__52302 = cljs.core.seq(events);
var chunk__52303 = null;
var count__52304 = (0);
var i__52305 = (0);
while(true){
if((i__52305 < count__52304)){
var vec__52318 = chunk__52303.cljs$core$IIndexed$_nth$arity$2(null,i__52305);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52318,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53209 = seq__52302;
var G__53210 = chunk__52303;
var G__53211 = count__52304;
var G__53212 = (i__52305 + (1));
seq__52302 = G__53209;
chunk__52303 = G__53210;
count__52304 = G__53211;
i__52305 = G__53212;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52302);
if(temp__5735__auto__){
var seq__52302__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52302__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52302__$1);
var G__53213 = cljs.core.chunk_rest(seq__52302__$1);
var G__53214 = c__4556__auto__;
var G__53215 = cljs.core.count(c__4556__auto__);
var G__53216 = (0);
seq__52302 = G__53213;
chunk__52303 = G__53214;
count__52304 = G__53215;
i__52305 = G__53216;
continue;
} else {
var vec__52324 = cljs.core.first(seq__52302__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52324,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53217 = cljs.core.next(seq__52302__$1);
var G__53218 = null;
var G__53219 = (0);
var G__53220 = (0);
seq__52302 = G__53217;
chunk__52303 = G__53218;
count__52304 = G__53219;
i__52305 = G__53220;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__52338 = cljs.core.seq(styles);
var chunk__52339 = null;
var count__52340 = (0);
var i__52341 = (0);
while(true){
if((i__52341 < count__52340)){
var vec__52361 = chunk__52339.cljs$core$IIndexed$_nth$arity$2(null,i__52341);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52361,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52361,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53222 = seq__52338;
var G__53223 = chunk__52339;
var G__53224 = count__52340;
var G__53225 = (i__52341 + (1));
seq__52338 = G__53222;
chunk__52339 = G__53223;
count__52340 = G__53224;
i__52341 = G__53225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52338);
if(temp__5735__auto__){
var seq__52338__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52338__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52338__$1);
var G__53227 = cljs.core.chunk_rest(seq__52338__$1);
var G__53228 = c__4556__auto__;
var G__53229 = cljs.core.count(c__4556__auto__);
var G__53230 = (0);
seq__52338 = G__53227;
chunk__52339 = G__53228;
count__52340 = G__53229;
i__52341 = G__53230;
continue;
} else {
var vec__52370 = cljs.core.first(seq__52338__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52370,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53231 = cljs.core.next(seq__52338__$1);
var G__53232 = null;
var G__53233 = (0);
var G__53234 = (0);
seq__52338 = G__53231;
chunk__52339 = G__53232;
count__52340 = G__53233;
i__52341 = G__53234;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__52375_53235 = key;
var G__52375_53236__$1 = (((G__52375_53235 instanceof cljs.core.Keyword))?G__52375_53235.fqn:null);
switch (G__52375_53236__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_53240 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_53240,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_53240,"aria-");
}
})())){
el.setAttribute(ks_53240,value);
} else {
(el[ks_53240] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52397){
var map__52398 = p__52397;
var map__52398__$1 = (((((!((map__52398 == null))))?(((((map__52398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52398):map__52398);
var props = map__52398__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52398__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52403 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52403,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52403,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52403,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52408 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52408,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52408;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52412 = arguments.length;
switch (G__52412) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52420){
var vec__52421 = p__52420;
var seq__52422 = cljs.core.seq(vec__52421);
var first__52423 = cljs.core.first(seq__52422);
var seq__52422__$1 = cljs.core.next(seq__52422);
var nn = first__52423;
var first__52423__$1 = cljs.core.first(seq__52422__$1);
var seq__52422__$2 = cljs.core.next(seq__52422__$1);
var np = first__52423__$1;
var nc = seq__52422__$2;
var node = vec__52421;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52426 = nn;
var G__52427 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52426,G__52427) : create_fn.call(null,G__52426,G__52427));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52428 = nn;
var G__52429 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52428,G__52429) : create_fn.call(null,G__52428,G__52429));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52433 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52433,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52433,(1),null);
var seq__52436_53262 = cljs.core.seq(node_children);
var chunk__52437_53263 = null;
var count__52438_53264 = (0);
var i__52439_53265 = (0);
while(true){
if((i__52439_53265 < count__52438_53264)){
var child_struct_53266 = chunk__52437_53263.cljs$core$IIndexed$_nth$arity$2(null,i__52439_53265);
var children_53267 = shadow.dom.dom_node(child_struct_53266);
if(cljs.core.seq_QMARK_(children_53267)){
var seq__52479_53268 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53267));
var chunk__52481_53269 = null;
var count__52482_53270 = (0);
var i__52483_53271 = (0);
while(true){
if((i__52483_53271 < count__52482_53270)){
var child_53277 = chunk__52481_53269.cljs$core$IIndexed$_nth$arity$2(null,i__52483_53271);
if(cljs.core.truth_(child_53277)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53277);


var G__53280 = seq__52479_53268;
var G__53281 = chunk__52481_53269;
var G__53282 = count__52482_53270;
var G__53283 = (i__52483_53271 + (1));
seq__52479_53268 = G__53280;
chunk__52481_53269 = G__53281;
count__52482_53270 = G__53282;
i__52483_53271 = G__53283;
continue;
} else {
var G__53285 = seq__52479_53268;
var G__53286 = chunk__52481_53269;
var G__53287 = count__52482_53270;
var G__53288 = (i__52483_53271 + (1));
seq__52479_53268 = G__53285;
chunk__52481_53269 = G__53286;
count__52482_53270 = G__53287;
i__52483_53271 = G__53288;
continue;
}
} else {
var temp__5735__auto___53292 = cljs.core.seq(seq__52479_53268);
if(temp__5735__auto___53292){
var seq__52479_53293__$1 = temp__5735__auto___53292;
if(cljs.core.chunked_seq_QMARK_(seq__52479_53293__$1)){
var c__4556__auto___53296 = cljs.core.chunk_first(seq__52479_53293__$1);
var G__53297 = cljs.core.chunk_rest(seq__52479_53293__$1);
var G__53298 = c__4556__auto___53296;
var G__53299 = cljs.core.count(c__4556__auto___53296);
var G__53300 = (0);
seq__52479_53268 = G__53297;
chunk__52481_53269 = G__53298;
count__52482_53270 = G__53299;
i__52483_53271 = G__53300;
continue;
} else {
var child_53303 = cljs.core.first(seq__52479_53293__$1);
if(cljs.core.truth_(child_53303)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53303);


var G__53306 = cljs.core.next(seq__52479_53293__$1);
var G__53307 = null;
var G__53308 = (0);
var G__53309 = (0);
seq__52479_53268 = G__53306;
chunk__52481_53269 = G__53307;
count__52482_53270 = G__53308;
i__52483_53271 = G__53309;
continue;
} else {
var G__53312 = cljs.core.next(seq__52479_53293__$1);
var G__53313 = null;
var G__53314 = (0);
var G__53315 = (0);
seq__52479_53268 = G__53312;
chunk__52481_53269 = G__53313;
count__52482_53270 = G__53314;
i__52483_53271 = G__53315;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53267);
}


var G__53318 = seq__52436_53262;
var G__53319 = chunk__52437_53263;
var G__53320 = count__52438_53264;
var G__53321 = (i__52439_53265 + (1));
seq__52436_53262 = G__53318;
chunk__52437_53263 = G__53319;
count__52438_53264 = G__53320;
i__52439_53265 = G__53321;
continue;
} else {
var temp__5735__auto___53322 = cljs.core.seq(seq__52436_53262);
if(temp__5735__auto___53322){
var seq__52436_53323__$1 = temp__5735__auto___53322;
if(cljs.core.chunked_seq_QMARK_(seq__52436_53323__$1)){
var c__4556__auto___53324 = cljs.core.chunk_first(seq__52436_53323__$1);
var G__53325 = cljs.core.chunk_rest(seq__52436_53323__$1);
var G__53326 = c__4556__auto___53324;
var G__53327 = cljs.core.count(c__4556__auto___53324);
var G__53328 = (0);
seq__52436_53262 = G__53325;
chunk__52437_53263 = G__53326;
count__52438_53264 = G__53327;
i__52439_53265 = G__53328;
continue;
} else {
var child_struct_53329 = cljs.core.first(seq__52436_53323__$1);
var children_53330 = shadow.dom.dom_node(child_struct_53329);
if(cljs.core.seq_QMARK_(children_53330)){
var seq__52490_53332 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53330));
var chunk__52492_53333 = null;
var count__52493_53334 = (0);
var i__52494_53335 = (0);
while(true){
if((i__52494_53335 < count__52493_53334)){
var child_53337 = chunk__52492_53333.cljs$core$IIndexed$_nth$arity$2(null,i__52494_53335);
if(cljs.core.truth_(child_53337)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53337);


var G__53338 = seq__52490_53332;
var G__53339 = chunk__52492_53333;
var G__53340 = count__52493_53334;
var G__53341 = (i__52494_53335 + (1));
seq__52490_53332 = G__53338;
chunk__52492_53333 = G__53339;
count__52493_53334 = G__53340;
i__52494_53335 = G__53341;
continue;
} else {
var G__53342 = seq__52490_53332;
var G__53343 = chunk__52492_53333;
var G__53344 = count__52493_53334;
var G__53345 = (i__52494_53335 + (1));
seq__52490_53332 = G__53342;
chunk__52492_53333 = G__53343;
count__52493_53334 = G__53344;
i__52494_53335 = G__53345;
continue;
}
} else {
var temp__5735__auto___53347__$1 = cljs.core.seq(seq__52490_53332);
if(temp__5735__auto___53347__$1){
var seq__52490_53348__$1 = temp__5735__auto___53347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52490_53348__$1)){
var c__4556__auto___53349 = cljs.core.chunk_first(seq__52490_53348__$1);
var G__53350 = cljs.core.chunk_rest(seq__52490_53348__$1);
var G__53351 = c__4556__auto___53349;
var G__53352 = cljs.core.count(c__4556__auto___53349);
var G__53353 = (0);
seq__52490_53332 = G__53350;
chunk__52492_53333 = G__53351;
count__52493_53334 = G__53352;
i__52494_53335 = G__53353;
continue;
} else {
var child_53354 = cljs.core.first(seq__52490_53348__$1);
if(cljs.core.truth_(child_53354)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53354);


var G__53355 = cljs.core.next(seq__52490_53348__$1);
var G__53356 = null;
var G__53357 = (0);
var G__53358 = (0);
seq__52490_53332 = G__53355;
chunk__52492_53333 = G__53356;
count__52493_53334 = G__53357;
i__52494_53335 = G__53358;
continue;
} else {
var G__53359 = cljs.core.next(seq__52490_53348__$1);
var G__53360 = null;
var G__53361 = (0);
var G__53362 = (0);
seq__52490_53332 = G__53359;
chunk__52492_53333 = G__53360;
count__52493_53334 = G__53361;
i__52494_53335 = G__53362;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53330);
}


var G__53363 = cljs.core.next(seq__52436_53323__$1);
var G__53364 = null;
var G__53365 = (0);
var G__53366 = (0);
seq__52436_53262 = G__53363;
chunk__52437_53263 = G__53364;
count__52438_53264 = G__53365;
i__52439_53265 = G__53366;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__52528 = cljs.core.seq(node);
var chunk__52529 = null;
var count__52530 = (0);
var i__52531 = (0);
while(true){
if((i__52531 < count__52530)){
var n = chunk__52529.cljs$core$IIndexed$_nth$arity$2(null,i__52531);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53383 = seq__52528;
var G__53384 = chunk__52529;
var G__53385 = count__52530;
var G__53386 = (i__52531 + (1));
seq__52528 = G__53383;
chunk__52529 = G__53384;
count__52530 = G__53385;
i__52531 = G__53386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52528);
if(temp__5735__auto__){
var seq__52528__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52528__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52528__$1);
var G__53387 = cljs.core.chunk_rest(seq__52528__$1);
var G__53388 = c__4556__auto__;
var G__53389 = cljs.core.count(c__4556__auto__);
var G__53390 = (0);
seq__52528 = G__53387;
chunk__52529 = G__53388;
count__52530 = G__53389;
i__52531 = G__53390;
continue;
} else {
var n = cljs.core.first(seq__52528__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53400 = cljs.core.next(seq__52528__$1);
var G__53401 = null;
var G__53402 = (0);
var G__53403 = (0);
seq__52528 = G__53400;
chunk__52529 = G__53401;
count__52530 = G__53402;
i__52531 = G__53403;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__52551 = arguments.length;
switch (G__52551) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__52563 = arguments.length;
switch (G__52563) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__52599 = arguments.length;
switch (G__52599) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53431 = arguments.length;
var i__4737__auto___53432 = (0);
while(true){
if((i__4737__auto___53432 < len__4736__auto___53431)){
args__4742__auto__.push((arguments[i__4737__auto___53432]));

var G__53433 = (i__4737__auto___53432 + (1));
i__4737__auto___53432 = G__53433;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__52629_53436 = cljs.core.seq(nodes);
var chunk__52630_53437 = null;
var count__52631_53438 = (0);
var i__52632_53439 = (0);
while(true){
if((i__52632_53439 < count__52631_53438)){
var node_53440 = chunk__52630_53437.cljs$core$IIndexed$_nth$arity$2(null,i__52632_53439);
fragment.appendChild(shadow.dom._to_dom(node_53440));


var G__53441 = seq__52629_53436;
var G__53442 = chunk__52630_53437;
var G__53443 = count__52631_53438;
var G__53444 = (i__52632_53439 + (1));
seq__52629_53436 = G__53441;
chunk__52630_53437 = G__53442;
count__52631_53438 = G__53443;
i__52632_53439 = G__53444;
continue;
} else {
var temp__5735__auto___53451 = cljs.core.seq(seq__52629_53436);
if(temp__5735__auto___53451){
var seq__52629_53453__$1 = temp__5735__auto___53451;
if(cljs.core.chunked_seq_QMARK_(seq__52629_53453__$1)){
var c__4556__auto___53454 = cljs.core.chunk_first(seq__52629_53453__$1);
var G__53455 = cljs.core.chunk_rest(seq__52629_53453__$1);
var G__53456 = c__4556__auto___53454;
var G__53457 = cljs.core.count(c__4556__auto___53454);
var G__53458 = (0);
seq__52629_53436 = G__53455;
chunk__52630_53437 = G__53456;
count__52631_53438 = G__53457;
i__52632_53439 = G__53458;
continue;
} else {
var node_53459 = cljs.core.first(seq__52629_53453__$1);
fragment.appendChild(shadow.dom._to_dom(node_53459));


var G__53460 = cljs.core.next(seq__52629_53453__$1);
var G__53461 = null;
var G__53462 = (0);
var G__53463 = (0);
seq__52629_53436 = G__53460;
chunk__52630_53437 = G__53461;
count__52631_53438 = G__53462;
i__52632_53439 = G__53463;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq52624){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52624));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__52635_53464 = cljs.core.seq(scripts);
var chunk__52636_53465 = null;
var count__52637_53466 = (0);
var i__52638_53467 = (0);
while(true){
if((i__52638_53467 < count__52637_53466)){
var vec__52661_53469 = chunk__52636_53465.cljs$core$IIndexed$_nth$arity$2(null,i__52638_53467);
var script_tag_53470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52661_53469,(0),null);
var script_body_53471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52661_53469,(1),null);
eval(script_body_53471);


var G__53472 = seq__52635_53464;
var G__53473 = chunk__52636_53465;
var G__53474 = count__52637_53466;
var G__53475 = (i__52638_53467 + (1));
seq__52635_53464 = G__53472;
chunk__52636_53465 = G__53473;
count__52637_53466 = G__53474;
i__52638_53467 = G__53475;
continue;
} else {
var temp__5735__auto___53476 = cljs.core.seq(seq__52635_53464);
if(temp__5735__auto___53476){
var seq__52635_53478__$1 = temp__5735__auto___53476;
if(cljs.core.chunked_seq_QMARK_(seq__52635_53478__$1)){
var c__4556__auto___53485 = cljs.core.chunk_first(seq__52635_53478__$1);
var G__53487 = cljs.core.chunk_rest(seq__52635_53478__$1);
var G__53488 = c__4556__auto___53485;
var G__53489 = cljs.core.count(c__4556__auto___53485);
var G__53490 = (0);
seq__52635_53464 = G__53487;
chunk__52636_53465 = G__53488;
count__52637_53466 = G__53489;
i__52638_53467 = G__53490;
continue;
} else {
var vec__52667_53491 = cljs.core.first(seq__52635_53478__$1);
var script_tag_53492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667_53491,(0),null);
var script_body_53493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52667_53491,(1),null);
eval(script_body_53493);


var G__53494 = cljs.core.next(seq__52635_53478__$1);
var G__53495 = null;
var G__53496 = (0);
var G__53497 = (0);
seq__52635_53464 = G__53494;
chunk__52636_53465 = G__53495;
count__52637_53466 = G__53496;
i__52638_53467 = G__53497;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__52673){
var vec__52675 = p__52673;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__52688 = arguments.length;
switch (G__52688) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__52719 = cljs.core.seq(style_keys);
var chunk__52720 = null;
var count__52721 = (0);
var i__52722 = (0);
while(true){
if((i__52722 < count__52721)){
var it = chunk__52720.cljs$core$IIndexed$_nth$arity$2(null,i__52722);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53512 = seq__52719;
var G__53513 = chunk__52720;
var G__53514 = count__52721;
var G__53515 = (i__52722 + (1));
seq__52719 = G__53512;
chunk__52720 = G__53513;
count__52721 = G__53514;
i__52722 = G__53515;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52719);
if(temp__5735__auto__){
var seq__52719__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52719__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52719__$1);
var G__53517 = cljs.core.chunk_rest(seq__52719__$1);
var G__53518 = c__4556__auto__;
var G__53519 = cljs.core.count(c__4556__auto__);
var G__53520 = (0);
seq__52719 = G__53517;
chunk__52720 = G__53518;
count__52721 = G__53519;
i__52722 = G__53520;
continue;
} else {
var it = cljs.core.first(seq__52719__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53521 = cljs.core.next(seq__52719__$1);
var G__53522 = null;
var G__53523 = (0);
var G__53524 = (0);
seq__52719 = G__53521;
chunk__52720 = G__53522;
count__52721 = G__53523;
i__52722 = G__53524;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52727,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52739 = k52727;
var G__52739__$1 = (((G__52739 instanceof cljs.core.Keyword))?G__52739.fqn:null);
switch (G__52739__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52727,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52743){
var vec__52744 = p__52743;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52744,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52744,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52726){
var self__ = this;
var G__52726__$1 = this;
return (new cljs.core.RecordIter((0),G__52726__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52728,other52729){
var self__ = this;
var this52728__$1 = this;
return (((!((other52729 == null)))) && ((this52728__$1.constructor === other52729.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.x,other52729.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.y,other52729.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52728__$1.__extmap,other52729.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52726){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52775 = cljs.core.keyword_identical_QMARK_;
var expr__52776 = k__4388__auto__;
if(cljs.core.truth_((pred__52775.cljs$core$IFn$_invoke$arity$2 ? pred__52775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__52776) : pred__52775.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__52776)))){
return (new shadow.dom.Coordinate(G__52726,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52775.cljs$core$IFn$_invoke$arity$2 ? pred__52775.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__52776) : pred__52775.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__52776)))){
return (new shadow.dom.Coordinate(self__.x,G__52726,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52726),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52726){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__52726,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__52732){
var extmap__4419__auto__ = (function (){var G__52792 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52732,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__52732)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52792);
} else {
return G__52792;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__52732),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__52732),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k52806,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__52816 = k52806;
var G__52816__$1 = (((G__52816 instanceof cljs.core.Keyword))?G__52816.fqn:null);
switch (G__52816__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52806,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__52821){
var vec__52824 = p__52821;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52824,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52824,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52805){
var self__ = this;
var G__52805__$1 = this;
return (new cljs.core.RecordIter((0),G__52805__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52808,other52809){
var self__ = this;
var this52808__$1 = this;
return (((!((other52809 == null)))) && ((this52808__$1.constructor === other52809.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52808__$1.w,other52809.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52808__$1.h,other52809.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52808__$1.__extmap,other52809.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__52805){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__52843 = cljs.core.keyword_identical_QMARK_;
var expr__52844 = k__4388__auto__;
if(cljs.core.truth_((pred__52843.cljs$core$IFn$_invoke$arity$2 ? pred__52843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__52844) : pred__52843.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__52844)))){
return (new shadow.dom.Size(G__52805,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52843.cljs$core$IFn$_invoke$arity$2 ? pred__52843.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__52844) : pred__52843.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__52844)))){
return (new shadow.dom.Size(self__.w,G__52805,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__52805),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__52805){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__52805,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__52810){
var extmap__4419__auto__ = (function (){var G__52860 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52810,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__52810)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52860);
} else {
return G__52860;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__52810),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__52810),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__53592 = (i + (1));
var G__53593 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53592;
ret = G__53593;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52896){
var vec__52898 = p__52896;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__52908 = arguments.length;
switch (G__52908) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53606 = ps;
var G__53607 = (i + (1));
el__$1 = G__53606;
i = G__53607;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__52949 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52949,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__52953_53608 = cljs.core.seq(props);
var chunk__52954_53609 = null;
var count__52955_53610 = (0);
var i__52956_53611 = (0);
while(true){
if((i__52956_53611 < count__52955_53610)){
var vec__52967_53612 = chunk__52954_53609.cljs$core$IIndexed$_nth$arity$2(null,i__52956_53611);
var k_53613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52967_53612,(0),null);
var v_53614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52967_53612,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_53613);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53613),v_53614);


var G__53617 = seq__52953_53608;
var G__53618 = chunk__52954_53609;
var G__53619 = count__52955_53610;
var G__53620 = (i__52956_53611 + (1));
seq__52953_53608 = G__53617;
chunk__52954_53609 = G__53618;
count__52955_53610 = G__53619;
i__52956_53611 = G__53620;
continue;
} else {
var temp__5735__auto___53621 = cljs.core.seq(seq__52953_53608);
if(temp__5735__auto___53621){
var seq__52953_53622__$1 = temp__5735__auto___53621;
if(cljs.core.chunked_seq_QMARK_(seq__52953_53622__$1)){
var c__4556__auto___53624 = cljs.core.chunk_first(seq__52953_53622__$1);
var G__53625 = cljs.core.chunk_rest(seq__52953_53622__$1);
var G__53626 = c__4556__auto___53624;
var G__53627 = cljs.core.count(c__4556__auto___53624);
var G__53628 = (0);
seq__52953_53608 = G__53625;
chunk__52954_53609 = G__53626;
count__52955_53610 = G__53627;
i__52956_53611 = G__53628;
continue;
} else {
var vec__52974_53632 = cljs.core.first(seq__52953_53622__$1);
var k_53633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52974_53632,(0),null);
var v_53634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52974_53632,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_53633);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53633),v_53634);


var G__53635 = cljs.core.next(seq__52953_53622__$1);
var G__53636 = null;
var G__53637 = (0);
var G__53638 = (0);
seq__52953_53608 = G__53635;
chunk__52954_53609 = G__53636;
count__52955_53610 = G__53637;
i__52956_53611 = G__53638;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__52982 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52982,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52982,(1),null);
var seq__52985_53639 = cljs.core.seq(node_children);
var chunk__52987_53640 = null;
var count__52988_53641 = (0);
var i__52989_53642 = (0);
while(true){
if((i__52989_53642 < count__52988_53641)){
var child_struct_53644 = chunk__52987_53640.cljs$core$IIndexed$_nth$arity$2(null,i__52989_53642);
if((!((child_struct_53644 == null)))){
if(typeof child_struct_53644 === 'string'){
var text_53645 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53645),child_struct_53644].join(''));
} else {
var children_53646 = shadow.dom.svg_node(child_struct_53644);
if(cljs.core.seq_QMARK_(children_53646)){
var seq__53036_53647 = cljs.core.seq(children_53646);
var chunk__53038_53648 = null;
var count__53039_53649 = (0);
var i__53040_53650 = (0);
while(true){
if((i__53040_53650 < count__53039_53649)){
var child_53651 = chunk__53038_53648.cljs$core$IIndexed$_nth$arity$2(null,i__53040_53650);
if(cljs.core.truth_(child_53651)){
node.appendChild(child_53651);


var G__53656 = seq__53036_53647;
var G__53657 = chunk__53038_53648;
var G__53658 = count__53039_53649;
var G__53659 = (i__53040_53650 + (1));
seq__53036_53647 = G__53656;
chunk__53038_53648 = G__53657;
count__53039_53649 = G__53658;
i__53040_53650 = G__53659;
continue;
} else {
var G__53663 = seq__53036_53647;
var G__53664 = chunk__53038_53648;
var G__53665 = count__53039_53649;
var G__53666 = (i__53040_53650 + (1));
seq__53036_53647 = G__53663;
chunk__53038_53648 = G__53664;
count__53039_53649 = G__53665;
i__53040_53650 = G__53666;
continue;
}
} else {
var temp__5735__auto___53667 = cljs.core.seq(seq__53036_53647);
if(temp__5735__auto___53667){
var seq__53036_53668__$1 = temp__5735__auto___53667;
if(cljs.core.chunked_seq_QMARK_(seq__53036_53668__$1)){
var c__4556__auto___53669 = cljs.core.chunk_first(seq__53036_53668__$1);
var G__53670 = cljs.core.chunk_rest(seq__53036_53668__$1);
var G__53671 = c__4556__auto___53669;
var G__53672 = cljs.core.count(c__4556__auto___53669);
var G__53673 = (0);
seq__53036_53647 = G__53670;
chunk__53038_53648 = G__53671;
count__53039_53649 = G__53672;
i__53040_53650 = G__53673;
continue;
} else {
var child_53677 = cljs.core.first(seq__53036_53668__$1);
if(cljs.core.truth_(child_53677)){
node.appendChild(child_53677);


var G__53678 = cljs.core.next(seq__53036_53668__$1);
var G__53679 = null;
var G__53680 = (0);
var G__53681 = (0);
seq__53036_53647 = G__53678;
chunk__53038_53648 = G__53679;
count__53039_53649 = G__53680;
i__53040_53650 = G__53681;
continue;
} else {
var G__53682 = cljs.core.next(seq__53036_53668__$1);
var G__53683 = null;
var G__53684 = (0);
var G__53685 = (0);
seq__53036_53647 = G__53682;
chunk__53038_53648 = G__53683;
count__53039_53649 = G__53684;
i__53040_53650 = G__53685;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53646);
}
}


var G__53686 = seq__52985_53639;
var G__53687 = chunk__52987_53640;
var G__53688 = count__52988_53641;
var G__53689 = (i__52989_53642 + (1));
seq__52985_53639 = G__53686;
chunk__52987_53640 = G__53687;
count__52988_53641 = G__53688;
i__52989_53642 = G__53689;
continue;
} else {
var G__53690 = seq__52985_53639;
var G__53691 = chunk__52987_53640;
var G__53692 = count__52988_53641;
var G__53693 = (i__52989_53642 + (1));
seq__52985_53639 = G__53690;
chunk__52987_53640 = G__53691;
count__52988_53641 = G__53692;
i__52989_53642 = G__53693;
continue;
}
} else {
var temp__5735__auto___53694 = cljs.core.seq(seq__52985_53639);
if(temp__5735__auto___53694){
var seq__52985_53695__$1 = temp__5735__auto___53694;
if(cljs.core.chunked_seq_QMARK_(seq__52985_53695__$1)){
var c__4556__auto___53696 = cljs.core.chunk_first(seq__52985_53695__$1);
var G__53697 = cljs.core.chunk_rest(seq__52985_53695__$1);
var G__53698 = c__4556__auto___53696;
var G__53699 = cljs.core.count(c__4556__auto___53696);
var G__53700 = (0);
seq__52985_53639 = G__53697;
chunk__52987_53640 = G__53698;
count__52988_53641 = G__53699;
i__52989_53642 = G__53700;
continue;
} else {
var child_struct_53701 = cljs.core.first(seq__52985_53695__$1);
if((!((child_struct_53701 == null)))){
if(typeof child_struct_53701 === 'string'){
var text_53702 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53702),child_struct_53701].join(''));
} else {
var children_53703 = shadow.dom.svg_node(child_struct_53701);
if(cljs.core.seq_QMARK_(children_53703)){
var seq__53051_53704 = cljs.core.seq(children_53703);
var chunk__53053_53705 = null;
var count__53054_53706 = (0);
var i__53055_53707 = (0);
while(true){
if((i__53055_53707 < count__53054_53706)){
var child_53708 = chunk__53053_53705.cljs$core$IIndexed$_nth$arity$2(null,i__53055_53707);
if(cljs.core.truth_(child_53708)){
node.appendChild(child_53708);


var G__53709 = seq__53051_53704;
var G__53710 = chunk__53053_53705;
var G__53711 = count__53054_53706;
var G__53712 = (i__53055_53707 + (1));
seq__53051_53704 = G__53709;
chunk__53053_53705 = G__53710;
count__53054_53706 = G__53711;
i__53055_53707 = G__53712;
continue;
} else {
var G__53713 = seq__53051_53704;
var G__53714 = chunk__53053_53705;
var G__53715 = count__53054_53706;
var G__53716 = (i__53055_53707 + (1));
seq__53051_53704 = G__53713;
chunk__53053_53705 = G__53714;
count__53054_53706 = G__53715;
i__53055_53707 = G__53716;
continue;
}
} else {
var temp__5735__auto___53717__$1 = cljs.core.seq(seq__53051_53704);
if(temp__5735__auto___53717__$1){
var seq__53051_53718__$1 = temp__5735__auto___53717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53051_53718__$1)){
var c__4556__auto___53719 = cljs.core.chunk_first(seq__53051_53718__$1);
var G__53720 = cljs.core.chunk_rest(seq__53051_53718__$1);
var G__53721 = c__4556__auto___53719;
var G__53722 = cljs.core.count(c__4556__auto___53719);
var G__53723 = (0);
seq__53051_53704 = G__53720;
chunk__53053_53705 = G__53721;
count__53054_53706 = G__53722;
i__53055_53707 = G__53723;
continue;
} else {
var child_53724 = cljs.core.first(seq__53051_53718__$1);
if(cljs.core.truth_(child_53724)){
node.appendChild(child_53724);


var G__53728 = cljs.core.next(seq__53051_53718__$1);
var G__53729 = null;
var G__53730 = (0);
var G__53731 = (0);
seq__53051_53704 = G__53728;
chunk__53053_53705 = G__53729;
count__53054_53706 = G__53730;
i__53055_53707 = G__53731;
continue;
} else {
var G__53732 = cljs.core.next(seq__53051_53718__$1);
var G__53733 = null;
var G__53734 = (0);
var G__53735 = (0);
seq__53051_53704 = G__53732;
chunk__53053_53705 = G__53733;
count__53054_53706 = G__53734;
i__53055_53707 = G__53735;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53703);
}
}


var G__53737 = cljs.core.next(seq__52985_53695__$1);
var G__53738 = null;
var G__53739 = (0);
var G__53740 = (0);
seq__52985_53639 = G__53737;
chunk__52987_53640 = G__53738;
count__52988_53641 = G__53739;
i__52989_53642 = G__53740;
continue;
} else {
var G__53741 = cljs.core.next(seq__52985_53695__$1);
var G__53742 = null;
var G__53743 = (0);
var G__53744 = (0);
seq__52985_53639 = G__53741;
chunk__52987_53640 = G__53742;
count__52988_53641 = G__53743;
i__52989_53642 = G__53744;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53746 = arguments.length;
var i__4737__auto___53747 = (0);
while(true){
if((i__4737__auto___53747 < len__4736__auto___53746)){
args__4742__auto__.push((arguments[i__4737__auto___53747]));

var G__53748 = (i__4737__auto___53747 + (1));
i__4737__auto___53747 = G__53748;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53076){
var G__53077 = cljs.core.first(seq53076);
var seq53076__$1 = cljs.core.next(seq53076);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53077,seq53076__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__53088 = arguments.length;
switch (G__53088) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__37526__auto___53755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37527__auto__ = (function (){var switch__37392__auto__ = (function (state_53099){
var state_val_53100 = (state_53099[(1)]);
if((state_val_53100 === (1))){
var state_53099__$1 = state_53099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53099__$1,(2),once_or_cleanup);
} else {
if((state_val_53100 === (2))){
var inst_53096 = (state_53099[(2)]);
var inst_53097 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53099__$1 = (function (){var statearr_53105 = state_53099;
(statearr_53105[(7)] = inst_53096);

return statearr_53105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53099__$1,inst_53097);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37393__auto__ = null;
var shadow$dom$state_machine__37393__auto____0 = (function (){
var statearr_53108 = [null,null,null,null,null,null,null,null];
(statearr_53108[(0)] = shadow$dom$state_machine__37393__auto__);

(statearr_53108[(1)] = (1));

return statearr_53108;
});
var shadow$dom$state_machine__37393__auto____1 = (function (state_53099){
while(true){
var ret_value__37394__auto__ = (function (){try{while(true){
var result__37395__auto__ = switch__37392__auto__(state_53099);
if(cljs.core.keyword_identical_QMARK_(result__37395__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37395__auto__;
}
break;
}
}catch (e53109){var ex__37396__auto__ = e53109;
var statearr_53110_53757 = state_53099;
(statearr_53110_53757[(2)] = ex__37396__auto__);


if(cljs.core.seq((state_53099[(4)]))){
var statearr_53111_53758 = state_53099;
(statearr_53111_53758[(1)] = cljs.core.first((state_53099[(4)])));

} else {
throw ex__37396__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37394__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53759 = state_53099;
state_53099 = G__53759;
continue;
} else {
return ret_value__37394__auto__;
}
break;
}
});
shadow$dom$state_machine__37393__auto__ = function(state_53099){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37393__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37393__auto____1.call(this,state_53099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37393__auto____0;
shadow$dom$state_machine__37393__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37393__auto____1;
return shadow$dom$state_machine__37393__auto__;
})()
})();
var state__37528__auto__ = (function (){var statearr_53116 = f__37527__auto__();
(statearr_53116[(6)] = c__37526__auto___53755);

return statearr_53116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37528__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
