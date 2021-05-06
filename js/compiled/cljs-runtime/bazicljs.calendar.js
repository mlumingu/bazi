goog.provide('bazicljs.calendar');
bazicljs.calendar.cal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bazicljs.calendar.gregorian_to_solar_ymd = (function bazicljs$calendar$gregorian_to_solar_ymd(date){
var y = cljs_time.core.year(date);
var m = cljs_time.core.month(date);
var d = cljs_time.core.day(date);
var yy = (y - (1600));
var fexpr__27910 = (function (){var fexpr__27912 = (function (){var fexpr__27913 = cljs.core.deref(bazicljs.calendar.cal);
return (fexpr__27913.cljs$core$IFn$_invoke$arity$1 ? fexpr__27913.cljs$core$IFn$_invoke$arity$1(yy) : fexpr__27913.call(null,yy));
})();
return (fexpr__27912.cljs$core$IFn$_invoke$arity$1 ? fexpr__27912.cljs$core$IFn$_invoke$arity$1(m) : fexpr__27912.call(null,m));
})();
return (fexpr__27910.cljs$core$IFn$_invoke$arity$1 ? fexpr__27910.cljs$core$IFn$_invoke$arity$1(d) : fexpr__27910.call(null,d));
});
bazicljs.calendar.hour_branch = (function bazicljs$calendar$hour_branch(h){
return cljs.core.rem(Math.ceil((h / (2))),(12));
});
bazicljs.calendar.hour_stem = (function bazicljs$calendar$hour_stem(ds,h){
var hb = bazicljs.calendar.hour_branch(h);
return cljs.core.rem(((hb + (ds * (2))) + (Math.floor((h / (23))) * (2))),(10));
});
bazicljs.calendar.next_pillar = (function bazicljs$calendar$next_pillar(p){
var s = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0)));
var b = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem((s + (1)),(10)),cljs.core.rem((b + (1)),(12))], null);
});
bazicljs.calendar.previous_pillar = (function bazicljs$calendar$previous_pillar(p){
var s = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((0)) : p.call(null,(0)));
var b = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1((1)) : p.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(((s - (1)) + (10)),(10)),cljs.core.rem(((b - (1)) + (12)),(12))], null);
});
bazicljs.calendar.days_to_next_prev_month_1 = (function bazicljs$calendar$days_to_next_prev_month_1(delta_date,delta,ms,days_diff){
var delta_pillars = bazicljs.calendar.gregorian_to_solar_ymd(delta_date);
var delta_ms = (delta_pillars.cljs$core$IFn$_invoke$arity$1 ? delta_pillars.cljs$core$IFn$_invoke$arity$1((2)) : delta_pillars.call(null,(2)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms,delta_ms)){
var G__27921 = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(delta_date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(delta));
var G__27923 = delta;
var G__27924 = ms;
var G__27926 = (days_diff + (1));
return (bazicljs.calendar.days_to_next_prev_month_1.cljs$core$IFn$_invoke$arity$4 ? bazicljs.calendar.days_to_next_prev_month_1.cljs$core$IFn$_invoke$arity$4(G__27921,G__27923,G__27924,G__27926) : bazicljs.calendar.days_to_next_prev_month_1.call(null,G__27921,G__27923,G__27924,G__27926));
} else {
return days_diff;
}
});
bazicljs.calendar.days_to_next_prev_month = (function bazicljs$calendar$days_to_next_prev_month(date,delta){
var pillars = bazicljs.calendar.gregorian_to_solar_ymd(date);
var ms = (pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((2)) : pillars.call(null,(2)));
return bazicljs.calendar.days_to_next_prev_month_1(date,delta,ms,(0));
});
bazicljs.calendar.use_forward_direction_QMARK_ = (function bazicljs$calendar$use_forward_direction_QMARK_(is_male,yang_year){
var or__4126__auto__ = (function (){var and__4115__auto__ = is_male;
if(cljs.core.truth_(and__4115__auto__)){
return yang_year;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core.not(is_male)) && (cljs.core.not(yang_year)));
}
});
bazicljs.calendar.luck_pillars = (function bazicljs$calendar$luck_pillars(date,is_male){
var natal_pillars = bazicljs.calendar.gregorian_to_solar_ymd(date);
var ys = (natal_pillars.cljs$core$IFn$_invoke$arity$1 ? natal_pillars.cljs$core$IFn$_invoke$arity$1((4)) : natal_pillars.call(null,(4)));
var mp = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(natal_pillars.cljs$core$IFn$_invoke$arity$1 ? natal_pillars.cljs$core$IFn$_invoke$arity$1((2)) : natal_pillars.call(null,(2))),(natal_pillars.cljs$core$IFn$_invoke$arity$1 ? natal_pillars.cljs$core$IFn$_invoke$arity$1((3)) : natal_pillars.call(null,(3)))], null);
var yang_year = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(ys,(2)),(0));
if(cljs.core.truth_(bazicljs.calendar.use_forward_direction_QMARK_(is_male,yang_year))){
return cljs.core.iterate(bazicljs.calendar.next_pillar,bazicljs.calendar.next_pillar(mp));
} else {
return cljs.core.iterate(bazicljs.calendar.previous_pillar,bazicljs.calendar.previous_pillar(mp));
}
});
bazicljs.calendar.luck_pillar_start_delta = (function bazicljs$calendar$luck_pillar_start_delta(is_male,yang_year){
if(cljs.core.truth_(bazicljs.calendar.use_forward_direction_QMARK_(is_male,yang_year))){
return (1);
} else {
return (-1);
}
});
bazicljs.calendar.luck_pillar_start_ages = (function bazicljs$calendar$luck_pillar_start_ages(date,is_male){
var ys = (function (){var fexpr__27930 = bazicljs.calendar.gregorian_to_solar_ymd(date);
return (fexpr__27930.cljs$core$IFn$_invoke$arity$1 ? fexpr__27930.cljs$core$IFn$_invoke$arity$1((4)) : fexpr__27930.call(null,(4)));
})();
var yang_year = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(ys,(2)),(0));
var delta = bazicljs.calendar.luck_pillar_start_delta(is_male,yang_year);
var days_diff = bazicljs.calendar.days_to_next_prev_month(date,delta);
var start_age = Math.floor((days_diff / (3)));
return cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(10)),start_age);
});
bazicljs.calendar.gregorian_to_solar = (function bazicljs$calendar$gregorian_to_solar(date){
var solar = bazicljs.calendar.gregorian_to_solar_ymd(date);
var ds = (solar.cljs$core$IFn$_invoke$arity$1 ? solar.cljs$core$IFn$_invoke$arity$1((0)) : solar.call(null,(0)));
var h = cljs_time.core.hour(date);
var hb = bazicljs.calendar.hour_branch(h);
var hs = bazicljs.calendar.hour_stem(ds,h);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs,hb], null),solar);
});
bazicljs.calendar.natal_slugs = (function bazicljs$calendar$natal_slugs(date){
var y = cljs_time.core.year(date);
var m = cljs_time.core.month(date);
var d = cljs_time.core.day(date);
var h = cljs_time.core.hour(date);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,d,m,y], null);
});
bazicljs.calendar.luck_pillars1 = (function bazicljs$calendar$luck_pillars1(date,is_male){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bazicljs.calendar.luck_pillars(date,is_male),bazicljs.calendar.luck_pillar_start_ages(date,is_male));
});
bazicljs.calendar.year_pillars = (function bazicljs$calendar$year_pillars(start,end){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27934_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__27934_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27934_SHARP_.cljs$core$IFn$_invoke$arity$1((4)) : p1__27934_SHARP_.call(null,(4))),(p1__27934_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__27934_SHARP_.cljs$core$IFn$_invoke$arity$1((5)) : p1__27934_SHARP_.call(null,(5)))],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.calendar.gregorian_to_solar_ymd,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27933_SHARP_){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(p1__27933_SHARP_,(5),(5));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end))));
});

//# sourceMappingURL=bazicljs.calendar.js.map
