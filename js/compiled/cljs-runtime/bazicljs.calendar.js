goog.provide('bazicljs.calendar');
bazicljs.calendar.cal = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
bazicljs.calendar.gregorian_to_solar_ymd = (function bazicljs$calendar$gregorian_to_solar_ymd(date){
var y = cljs_time.core.year(date);
var m = cljs_time.core.month(date);
var d = cljs_time.core.day(date);
var yy = (y - (1600));
var fexpr__82694 = (function (){var fexpr__82696 = (function (){var fexpr__82697 = cljs.core.deref(bazicljs.calendar.cal);
return (fexpr__82697.cljs$core$IFn$_invoke$arity$1 ? fexpr__82697.cljs$core$IFn$_invoke$arity$1(yy) : fexpr__82697.call(null,yy));
})();
return (fexpr__82696.cljs$core$IFn$_invoke$arity$1 ? fexpr__82696.cljs$core$IFn$_invoke$arity$1(m) : fexpr__82696.call(null,m));
})();
return (fexpr__82694.cljs$core$IFn$_invoke$arity$1 ? fexpr__82694.cljs$core$IFn$_invoke$arity$1(d) : fexpr__82694.call(null,d));
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
var G__82698 = cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(delta_date,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(delta));
var G__82699 = delta;
var G__82700 = ms;
var G__82701 = (days_diff + (1));
return (bazicljs.calendar.days_to_next_prev_month_1.cljs$core$IFn$_invoke$arity$4 ? bazicljs.calendar.days_to_next_prev_month_1.cljs$core$IFn$_invoke$arity$4(G__82698,G__82699,G__82700,G__82701) : bazicljs.calendar.days_to_next_prev_month_1.call(null,G__82698,G__82699,G__82700,G__82701));
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
var ys = (function (){var fexpr__82702 = bazicljs.calendar.gregorian_to_solar_ymd(date);
return (fexpr__82702.cljs$core$IFn$_invoke$arity$1 ? fexpr__82702.cljs$core$IFn$_invoke$arity$1((4)) : fexpr__82702.call(null,(4)));
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
bazicljs.calendar.solar_year = (function bazicljs$calendar$solar_year(pillars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((4)) : pillars.call(null,(4))),(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((5)) : pillars.call(null,(5)))], null);
});
bazicljs.calendar.solar_month = (function bazicljs$calendar$solar_month(pillars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((2)) : pillars.call(null,(2))),(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((3)) : pillars.call(null,(3)))], null);
});
bazicljs.calendar.solar_day = (function bazicljs$calendar$solar_day(pillars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((0)) : pillars.call(null,(0))),(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((1)) : pillars.call(null,(1)))], null);
});
bazicljs.calendar.solar_hour = (function bazicljs$calendar$solar_hour(pillars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((0)) : pillars.call(null,(0))),(pillars.cljs$core$IFn$_invoke$arity$1 ? pillars.cljs$core$IFn$_invoke$arity$1((1)) : pillars.call(null,(1)))], null);
});
bazicljs.calendar.time_pillars = (function bazicljs$calendar$time_pillars(start,end,pillar_selector){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,(function (p1__82707_SHARP_,p2__82708_SHARP_){
return cljs_time.core.before_QMARK_(p1__82707_SHARP_,p2__82708_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82706_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.first((p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__82706_SHARP_.call(null,(1)))),cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs.core.last((p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__82706_SHARP_.call(null,(1)))),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))),(p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__82706_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__82706_SHARP_.call(null,(0)))],null));
}),cljs.core.group_by((function (p1__82705_SHARP_){
var G__82709 = bazicljs.calendar.gregorian_to_solar_ymd(p1__82705_SHARP_);
return (pillar_selector.cljs$core$IFn$_invoke$arity$1 ? pillar_selector.cljs$core$IFn$_invoke$arity$1(G__82709) : pillar_selector.call(null,G__82709));
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__82704_SHARP_){
return cljs_time.core.before_QMARK_(p1__82704_SHARP_,end);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82703_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(p1__82703_SHARP_));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$0())))));
});
bazicljs.calendar.year_pillars = (function bazicljs$calendar$year_pillars(start,end){
return bazicljs.calendar.time_pillars(start,end,bazicljs.calendar.solar_year);
});
bazicljs.calendar.month_pillars = (function bazicljs$calendar$month_pillars(start,end){
return bazicljs.calendar.time_pillars(start,end,bazicljs.calendar.solar_month);
});
bazicljs.calendar.day_pillars = (function bazicljs$calendar$day_pillars(start,end){
return bazicljs.calendar.time_pillars(start,end,bazicljs.calendar.solar_day);
});
bazicljs.calendar.hour_pillars = (function bazicljs$calendar$hour_pillars(day){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82711_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__82711_SHARP_,bazicljs.calendar.solar_hour(bazicljs.calendar.gregorian_to_solar(p1__82711_SHARP_))],null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82710_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.at_midnight(day),cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(p1__82710_SHARP_));
}),(new cljs.core.List(null,(0),(new cljs.core.List(null,(1),(new cljs.core.List(null,(3),(new cljs.core.List(null,(5),(new cljs.core.List(null,(7),(new cljs.core.List(null,(9),(new cljs.core.List(null,(11),(new cljs.core.List(null,(13),(new cljs.core.List(null,(15),(new cljs.core.List(null,(17),(new cljs.core.List(null,(19),(new cljs.core.List(null,(21),(new cljs.core.List(null,(23),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),(10),null)),(11),null)),(12),null)),(13),null))));
});

//# sourceMappingURL=bazicljs.calendar.js.map
