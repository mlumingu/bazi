goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__55836 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__55837 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__55837);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__55842 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__55843 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__55843);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__55842);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__55836);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__55853 = arguments.length;
switch (G__55853) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__55857 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55857,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__55867_55895 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__55868_55896 = null;
var count__55869_55897 = (0);
var i__55870_55898 = (0);
while(true){
if((i__55870_55898 < count__55869_55897)){
var vec__55877_55900 = chunk__55868_55896.cljs$core$IIndexed$_nth$arity$2(null,i__55870_55898);
var container_55901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55877_55900,(0),null);
var comp_55902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55877_55900,(1),null);
reagent.dom.re_render_component(comp_55902,container_55901);


var G__55905 = seq__55867_55895;
var G__55906 = chunk__55868_55896;
var G__55907 = count__55869_55897;
var G__55908 = (i__55870_55898 + (1));
seq__55867_55895 = G__55905;
chunk__55868_55896 = G__55906;
count__55869_55897 = G__55907;
i__55870_55898 = G__55908;
continue;
} else {
var temp__5735__auto___55909 = cljs.core.seq(seq__55867_55895);
if(temp__5735__auto___55909){
var seq__55867_55910__$1 = temp__5735__auto___55909;
if(cljs.core.chunked_seq_QMARK_(seq__55867_55910__$1)){
var c__4556__auto___55911 = cljs.core.chunk_first(seq__55867_55910__$1);
var G__55912 = cljs.core.chunk_rest(seq__55867_55910__$1);
var G__55913 = c__4556__auto___55911;
var G__55914 = cljs.core.count(c__4556__auto___55911);
var G__55915 = (0);
seq__55867_55895 = G__55912;
chunk__55868_55896 = G__55913;
count__55869_55897 = G__55914;
i__55870_55898 = G__55915;
continue;
} else {
var vec__55881_55916 = cljs.core.first(seq__55867_55910__$1);
var container_55917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881_55916,(0),null);
var comp_55918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881_55916,(1),null);
reagent.dom.re_render_component(comp_55918,container_55917);


var G__55919 = cljs.core.next(seq__55867_55910__$1);
var G__55920 = null;
var G__55921 = (0);
var G__55922 = (0);
seq__55867_55895 = G__55919;
chunk__55868_55896 = G__55920;
count__55869_55897 = G__55921;
i__55870_55898 = G__55922;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
