goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__24775__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__24775__auto__["add"]).call(o__24775__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__24775__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__24775__auto__["delete"]).call(o__24775__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__24775__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__24775__auto__["has"]).call(o__24775__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__27209 = data;
var target__24793__auto__ = G__27209;
if(cljs.core.truth_(target__24793__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27209)].join(''),"\n","target__24793__auto__"].join('')));
}

(target__24793__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__27209;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_27259 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_27259);
} else {
var seq__27232_27262 = cljs.core.seq(json_ml);
var chunk__27233_27263 = null;
var count__27234_27264 = (0);
var i__27235_27265 = (0);
while(true){
if((i__27235_27265 < count__27234_27264)){
var item_27267 = chunk__27233_27263.cljs$core$IIndexed$_nth$arity$2(null,i__27235_27265);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_27267,new_depth_budget_27259) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_27267,new_depth_budget_27259));


var G__27269 = seq__27232_27262;
var G__27270 = chunk__27233_27263;
var G__27271 = count__27234_27264;
var G__27272 = (i__27235_27265 + (1));
seq__27232_27262 = G__27269;
chunk__27233_27263 = G__27270;
count__27234_27264 = G__27271;
i__27235_27265 = G__27272;
continue;
} else {
var temp__5735__auto___27273 = cljs.core.seq(seq__27232_27262);
if(temp__5735__auto___27273){
var seq__27232_27274__$1 = temp__5735__auto___27273;
if(cljs.core.chunked_seq_QMARK_(seq__27232_27274__$1)){
var c__4556__auto___27275 = cljs.core.chunk_first(seq__27232_27274__$1);
var G__27276 = cljs.core.chunk_rest(seq__27232_27274__$1);
var G__27277 = c__4556__auto___27275;
var G__27278 = cljs.core.count(c__4556__auto___27275);
var G__27279 = (0);
seq__27232_27262 = G__27276;
chunk__27233_27263 = G__27277;
count__27234_27264 = G__27278;
i__27235_27265 = G__27279;
continue;
} else {
var item_27280 = cljs.core.first(seq__27232_27274__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_27280,new_depth_budget_27259) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_27280,new_depth_budget_27259));


var G__27282 = cljs.core.next(seq__27232_27274__$1);
var G__27283 = null;
var G__27284 = (0);
var G__27285 = (0);
seq__27232_27262 = G__27282;
chunk__27233_27263 = G__27283;
count__27234_27264 = G__27284;
i__27235_27265 = G__27285;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
