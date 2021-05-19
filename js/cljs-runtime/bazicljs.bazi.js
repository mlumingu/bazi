goog.provide('bazicljs.bazi');
bazicljs.bazi.get_palace = (function bazicljs$bazi$get_palace(pillars,palace){
return cljs.core.some((function (p1__28948_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"palace","palace",-1827494949).cljs$core$IFn$_invoke$arity$1(p1__28948_SHARP_),palace)){
return p1__28948_SHARP_;
} else {
return null;
}
}),pillars);
});
bazicljs.bazi.cart = (function bazicljs$bazi$cart(colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.list(cljs.core.PersistentHashSet.EMPTY);
} else {
var iter__4529__auto__ = (function bazicljs$bazi$cart_$_iter__28949(s__28950){
return (new cljs.core.LazySeq(null,(function (){
var s__28950__$1 = s__28950;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28950__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var more = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__28950__$1,more,xs__6292__auto__,temp__5735__auto__){
return (function bazicljs$bazi$cart_$_iter__28949_$_iter__28951(s__28952){
return (new cljs.core.LazySeq(null,((function (s__28950__$1,more,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__28952__$1 = s__28952;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__28952__$1);
if(temp__5735__auto____$1){
var s__28952__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28952__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28952__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28954 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28953 = (0);
while(true){
if((i__28953 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__28953);
cljs.core.chunk_append(b__28954,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,x));

var G__29011 = (i__28953 + (1));
i__28953 = G__29011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28954),bazicljs$bazi$cart_$_iter__28949_$_iter__28951(cljs.core.chunk_rest(s__28952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28954),null);
}
} else {
var x = cljs.core.first(s__28952__$2);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,x),bazicljs$bazi$cart_$_iter__28949_$_iter__28951(cljs.core.rest(s__28952__$2)));
}
} else {
return null;
}
break;
}
});})(s__28950__$1,more,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__28950__$1,more,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.first(colls)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,bazicljs$bazi$cart_$_iter__28949(cljs.core.rest(s__28950__$1)));
} else {
var G__29016 = cljs.core.rest(s__28950__$1);
s__28950__$1 = G__29016;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var G__28955 = cljs.core.rest(colls);
return (bazicljs.bazi.cart.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi.cart.cljs$core$IFn$_invoke$arity$1(G__28955) : bazicljs.bazi.cart.call(null,G__28955));
})());
}
});
bazicljs.bazi.remove_one = (function bazicljs$bazi$remove_one(elem,coll){
var vec__28956 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,elem),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28956,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28956,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(m,cljs.core.rest(n));
});
bazicljs.bazi.relation_instances = (function bazicljs$bazi$relation_instances(relation,pillars){
var instance = (function bazicljs$bazi$relation_instances_$_instance(rel,pillar){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rel),new cljs.core.Keyword(null,"palaces","palaces",1439361606),(new cljs.core.List(null,new cljs.core.Keyword(null,"palace","palace",-1827494949).cljs$core$IFn$_invoke$arity$1(pillar),null,(1),null)),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(rel)], null);
});
if(cljs.core.truth_(new cljs.core.Keyword(null,"pairs?","pairs?",-1059529004).cljs$core$IFn$_invoke$arity$1(relation))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instance,relation),pillars);
} else {
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(relation),new cljs.core.Keyword(null,"palaces","palaces",1439361606),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"palace","palace",-1827494949),pillars),new cljs.core.Keyword(null,"element","element",1974019749),new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(relation)], null),null,(1),null));
}
});
bazicljs.bazi.relation = (function bazicljs$bazi$relation(pillar,pillars,relation){
var idtype = new cljs.core.Keyword(null,"idtype","idtype",-217377845).cljs$core$IFn$_invoke$arity$1(relation);
var id = (idtype.cljs$core$IFn$_invoke$arity$1 ? idtype.cljs$core$IFn$_invoke$arity$1(pillar) : idtype.call(null,pillar));
var rids = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(relation);
var id_in_r = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),rids);
if(cljs.core.truth_(id_in_r)){
var other_rids = bazicljs.bazi.remove_one(id,rids);
var matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28959_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(idtype.cljs$core$IFn$_invoke$arity$1 ? idtype.cljs$core$IFn$_invoke$arity$1(p1__28959_SHARP_) : idtype.call(null,p1__28959_SHARP_))]),other_rids);
}),pillars);
var groups = cljs.core.group_by(idtype,matches);
var full_relation_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(other_rids),cljs.core.count(groups));
if(full_relation_QMARK_){
return bazicljs.bazi.relation_instances(relation,matches);
} else {
return null;
}
} else {
return cljs.core.List.EMPTY;
}
});
bazicljs.bazi.separate_all = (function bazicljs$bazi$separate_all(coll){
var separate_at = (function bazicljs$bazi$separate_all_$_separate_at(coll__$1,pos){
var vec__28963 = cljs.core.split_at(pos,coll__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28963,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(b),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.rest(b))], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(separate_at,coll),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(coll)));
});
bazicljs.bazi.relations2 = (function bazicljs$bazi$relations2(rels,pillars,pillar){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,pillar,pillars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rels], 0));
});
bazicljs.bazi.relations = (function bazicljs$bazi$relations(relations,pillars){
var iter__4529__auto__ = (function bazicljs$bazi$relations_$_iter__28966(s__28967){
return (new cljs.core.LazySeq(null,(function (){
var s__28967__$1 = s__28967;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28967__$1);
if(temp__5735__auto__){
var s__28967__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28967__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28967__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28969 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28968 = (0);
while(true){
if((i__28968 < size__4528__auto__)){
var vec__28970 = cljs.core._nth(c__4527__auto__,i__28968);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28970,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28970,(1),null);
cljs.core.chunk_append(b__28969,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,p,ps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([relations], 0)));

var G__29031 = (i__28968 + (1));
i__28968 = G__29031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28969),bazicljs$bazi$relations_$_iter__28966(cljs.core.chunk_rest(s__28967__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28969),null);
}
} else {
var vec__28973 = cljs.core.first(s__28967__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28973,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28973,(1),null);
return cljs.core.cons(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,p,ps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([relations], 0)),bazicljs$bazi$relations_$_iter__28966(cljs.core.rest(s__28967__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(bazicljs.bazi.separate_all(pillars));
});
bazicljs.bazi.jiazis = (function bazicljs$bazi$jiazis(stems,branches){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,stems,branches);
});
bazicljs.bazi.stems_qi = (function bazicljs$bazi$stems_qi(p__28976,p__28977){
var map__28978 = p__28976;
var map__28978__$1 = (((((!((map__28978 == null))))?(((((map__28978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28978):map__28978);
var time_pillar = map__28978__$1;
var t_bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28978__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
var map__28979 = p__28977;
var map__28979__$1 = (((((!((map__28979 == null))))?(((((map__28979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28979):map__28979);
var pillar = map__28979__$1;
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28979__$1,new cljs.core.Keyword(null,"stem","stem",-1293996747));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28979__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
if(cljs.core.truth_((function (){var and__4115__auto__ = t_bid;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = sid;
if(cljs.core.truth_(and__4115__auto____$1)){
return bid;
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
var bsid = (bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,bid));
var hsids = (bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.HIDDEN_STEMS.call(null,bid));
var s_qi = bazicljs.bazi_util.stem_qi(t_bid,sid);
var b_qi = bazicljs.bazi_util.stem_qi(t_bid,bsid);
var j_qi = bazicljs.bazi_util.jiazi_qi(t_bid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sid,bid], null));
var hss_qi = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.stem_qi,t_bid),hsids);
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[s_qi,b_qi,j_qi,hss_qi],null));
} else {
return null;
}
});
bazicljs.bazi.pillars_stems_qi = (function bazicljs$bazi$pillars_stems_qi(pillars,time_pillar){
var stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.stems_qi,time_pillar),pillars);
var r_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28982_SHARP_){
return bazicljs.bazi.stems_qi(p1__28982_SHARP_,time_pillar);
}),pillars);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qi-stages","qi-stages",-570238647),stages,new cljs.core.Keyword(null,"r-qi-stages","r-qi-stages",1568161951),r_stages], null);
});
bazicljs.bazi.stem_score = (function bazicljs$bazi$stem_score(id,pos,total){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(100)], null);
} else {
var G__28983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,total], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(100)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(80)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(60)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),G__28983)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28983)].join('')));

}
}
}
}
}
}
}
});
bazicljs.bazi.pillar_stem_scores = (function bazicljs$bazi$pillar_stem_scores(p__28984){
var map__28985 = p__28984;
var map__28985__$1 = (((((!((map__28985 == null))))?(((((map__28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28985):map__28985);
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,new cljs.core.Keyword(null,"stem","stem",-1293996747));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
var palace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28985__$1,new cljs.core.Keyword(null,"palace","palace",-1827494949));
var hsids = (bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.HIDDEN_STEMS.call(null,bid));
var num_hstems = cljs.core.count(hsids);
var sids = cljs.core.cons(sid,hsids);
var triples = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.list,sids,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(num_hstems));
var triples2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(palace,new cljs.core.Keyword(null,"D","D",-8015893)))?cljs.core.rest(triples):triples);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bazicljs.bazi.stem_score),triples2);
});
bazicljs.bazi.update_scores = (function bazicljs$bazi$update_scores(scores,p__28987){
var vec__28988 = p__28987;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28988,(1),null);
var cur_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scores,i);
var new_score = (cur_score + score);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scores,i,new_score);
});
bazicljs.bazi.stem_scores = (function bazicljs$bazi$stem_scores(pillars){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.update_scores,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(bazicljs.bazi.pillar_stem_scores,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pillars], 0)));
});
bazicljs.bazi.god_scores = (function bazicljs$bazi$god_scores(pillars){
var dm = new cljs.core.Keyword(null,"stem","stem",-1293996747).cljs$core$IFn$_invoke$arity$1(bazicljs.bazi.get_palace(pillars,new cljs.core.Keyword(null,"D","D",-8015893)));
var mbid = new cljs.core.Keyword(null,"branch","branch",-74633925).cljs$core$IFn$_invoke$arity$1(bazicljs.bazi.get_palace(pillars,new cljs.core.Keyword(null,"M","M",-1755742206)));
var s_scores = bazicljs.bazi.stem_scores(pillars);
var multipliers = bazicljs.bazi_util.score_multipliers(mbid);
var stem_gods = bazicljs.bazi_util.stem_gods(dm);
var empty_god_scores = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
var m_s_scores = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,s_scores,multipliers);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.update_scores,empty_god_scores,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bazicljs.bazi_util.stem_gods(dm),m_s_scores));
});
bazicljs.bazi.element_scores = (function bazicljs$bazi$element_scores(god_scores){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),god_scores),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(god_scores)));
});
bazicljs.bazi.strong_weak_scores = (function bazicljs$bazi$strong_weak_scores(elem_scores){
var p = (elem_scores.cljs$core$IFn$_invoke$arity$1 ? elem_scores.cljs$core$IFn$_invoke$arity$1((0)) : elem_scores.call(null,(0)));
var o = (elem_scores.cljs$core$IFn$_invoke$arity$1 ? elem_scores.cljs$core$IFn$_invoke$arity$1((1)) : elem_scores.call(null,(1)));
var w = (elem_scores.cljs$core$IFn$_invoke$arity$1 ? elem_scores.cljs$core$IFn$_invoke$arity$1((2)) : elem_scores.call(null,(2)));
var i = (elem_scores.cljs$core$IFn$_invoke$arity$1 ? elem_scores.cljs$core$IFn$_invoke$arity$1((3)) : elem_scores.call(null,(3)));
var r = (elem_scores.cljs$core$IFn$_invoke$arity$1 ? elem_scores.cljs$core$IFn$_invoke$arity$1((4)) : elem_scores.call(null,(4)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + r),(0.7 * ((o + w) + i))], null);
});
bazicljs.bazi.pillars_to_map = (function bazicljs$bazi$pillars_to_map(pillars){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28991_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(p1__28991_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28991_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)) : p1__28991_SHARP_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092))),p1__28991_SHARP_],null));
}),pillars));
});
bazicljs.bazi.natal_pillars = (function bazicljs$bazi$natal_pillars(date,no_hour){
var solar = (cljs.core.truth_(no_hour)?bazicljs.calendar.gregorian_to_solar_ymd(date):bazicljs.calendar.gregorian_to_solar(date));
var stems = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),solar);
var branches = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(solar));
var slugs = bazicljs.calendar.natal_slugs(date);
var slugs__$1 = (cljs.core.truth_(no_hour)?cljs.core.rest(slugs):slugs);
var jiazis = bazicljs.bazi.jiazis(stems,branches);
var jiazis__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,jiazis);
var palaces = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),bazicljs.bazi_util.palace_keys);
var palaces__$1 = (cljs.core.truth_(no_hour)?cljs.core.rest(palaces):palaces);
var dm = (cljs.core.truth_(no_hour)?cljs.core.first(jiazis__$1):cljs.core.second(jiazis__$1));
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches);
var n_pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),palaces__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),palaces__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = bazicljs.bazi.relations(bazicljs.bazi_util.natal_relations,n_pillars);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,n_pillars),n_pillars);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,n_pillars,relations__$1,qi_stages);
});
bazicljs.bazi.day_pillar = (function bazicljs$bazi$day_pillar(n_pillars){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28992_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((p1__28992_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28992_SHARP_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)) : p1__28992_SHARP_.call(null,new cljs.core.Keyword(null,"palace","palace",-1827494949))),new cljs.core.Keyword(null,"D","D",-8015893));
}),n_pillars));
});
bazicljs.bazi.luck_pillars = (function bazicljs$bazi$luck_pillars(date,is_male,n_pillars){
var date__$1 = cljs_time.core.at_midnight(date);
var dm = (function (){var fexpr__28997 = bazicljs.bazi.day_pillar(n_pillars);
return (fexpr__28997.cljs$core$IFn$_invoke$arity$1 ? fexpr__28997.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)) : fexpr__28997.call(null,new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)));
})();
var start_ages = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),bazicljs.calendar.luck_pillar_start_ages(date__$1,is_male));
var add_empty = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.first(start_ages));
var pillars = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),bazicljs.calendar.luck_pillars(date__$1,is_male));
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var stems__$1 = ((add_empty)?cljs.core.cons(null,stems):stems);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var branches__$1 = ((add_empty)?cljs.core.cons(null,branches):branches);
var jiazis = bazicljs.bazi.jiazis(stems__$1,branches__$1);
var jiazis__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,jiazis);
var jiazis__$2 = ((add_empty)?cljs.core.cons(null,jiazis__$1):jiazis__$1);
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches__$1);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28993_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date__$1,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(p1__28993_SHARP_));
}),start_ages);
var end_dates = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28994_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(p1__28994_SHARP_,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((10)));
}),start_dates);
var end_dates__$1 = ((add_empty)?cljs.core.cons(cljs.core.first(start_dates),end_dates):end_dates);
var start_dates__$1 = ((add_empty)?cljs.core.cons(date__$1,start_dates):start_dates);
var start_years = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28995_SHARP_){
return cljs_time.core.year(p1__28995_SHARP_);
}),start_dates__$1);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.str,start_ages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" - "),start_years);
var slugs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28996_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),p1__28996_SHARP_);
}),start_dates__$1);
var l_pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),start_ages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis__$2,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"l","l",1395893423)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-age","start-age",1041343996)),start_ages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)),end_dates__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,n_pillars),l_pillars);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,n_pillars),l_pillars);
var l_pillars__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,l_pillars,relations__$1,qi_stages);
return bazicljs.bazi.pillars_to_map(l_pillars__$1);
});
bazicljs.bazi.year_pillars = (function bazicljs$bazi$year_pillars(n_pillars,l_pillar){
var l_start = (l_pillar.cljs$core$IFn$_invoke$arity$1 ? l_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)) : l_pillar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)));
var l_end = (l_pillar.cljs$core$IFn$_invoke$arity$1 ? l_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)) : l_pillar.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642)));
var dm = (function (){var fexpr__29000 = bazicljs.bazi.day_pillar(n_pillars);
return (fexpr__29000.cljs$core$IFn$_invoke$arity$1 ? fexpr__29000.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)) : fexpr__29000.call(null,new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)));
})();
var years = bazicljs.calendar.year_pillars(l_start,l_end);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,years);
var end_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,years);
var pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28998_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28998_SHARP_,(2));
}),years);
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var jiazis = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,pillars);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year,start_dates);
var nl_pillars = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(n_pillars,l_pillar);
var slugs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28999_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),p1__28999_SHARP_);
}),start_dates);
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches);
var y_pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)),end_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,nl_pillars),y_pillars);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,nl_pillars),y_pillars);
var y_pillars__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,y_pillars,relations__$1,qi_stages);
return bazicljs.bazi.pillars_to_map(y_pillars__$1);
});
bazicljs.bazi.month_pillars = (function bazicljs$bazi$month_pillars(nl_pillars,y_pillar){
var y_start = (y_pillar.cljs$core$IFn$_invoke$arity$1 ? y_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)) : y_pillar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)));
var y_end = (y_pillar.cljs$core$IFn$_invoke$arity$1 ? y_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)) : y_pillar.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642)));
var dm = (function (){var fexpr__29005 = bazicljs.bazi.day_pillar(nl_pillars);
return (fexpr__29005.cljs$core$IFn$_invoke$arity$1 ? fexpr__29005.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)) : fexpr__29005.call(null,new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)));
})();
var months = bazicljs.calendar.month_pillars(y_start,y_end);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,months);
var end_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,months);
var pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29001_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29001_SHARP_,(2));
}),months);
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var jiazis = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,pillars);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29002_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM"),p1__29002_SHARP_);
}),start_dates);
var slugs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29003_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),p1__29003_SHARP_);
}),start_dates);
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches);
var end_slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29004_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),p1__29004_SHARP_);
}),end_dates);
var m_pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m","m",1632677161)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)),end_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-slug","end-slug",313176803)),end_slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,nl_pillars),m_pillars);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,nl_pillars),m_pillars);
var m_pillars__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,m_pillars,relations__$1,qi_stages);
return bazicljs.bazi.pillars_to_map(m_pillars__$1);
});
bazicljs.bazi.day_pillars = (function bazicljs$bazi$day_pillars(nl_pillars,m_pillar){
var m_start = (m_pillar.cljs$core$IFn$_invoke$arity$1 ? m_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)) : m_pillar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)));
var m_end = (m_pillar.cljs$core$IFn$_invoke$arity$1 ? m_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)) : m_pillar.call(null,new cljs.core.Keyword(null,"end-date","end-date",-208259642)));
var dm = (function (){var fexpr__29008 = bazicljs.bazi.day_pillar(nl_pillars);
return (fexpr__29008.cljs$core$IFn$_invoke$arity$1 ? fexpr__29008.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)) : fexpr__29008.call(null,new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)));
})();
var days = bazicljs.calendar.day_pillars(m_start,m_end);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,days);
var end_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,days);
var pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29006_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__29006_SHARP_,(2));
}),days);
var jiazis = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,pillars);
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29007_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd"),p1__29007_SHARP_);
}),start_dates);
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches);
var pillars__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)),end_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,nl_pillars),pillars__$1);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,nl_pillars),pillars__$1);
var pillars__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,pillars__$1,relations__$1,qi_stages);
return bazicljs.bazi.pillars_to_map(pillars__$2);
});
bazicljs.bazi.hour_pillars = (function bazicljs$bazi$hour_pillars(nl_pillars,d_pillar){
var d_start = (d_pillar.cljs$core$IFn$_invoke$arity$1 ? d_pillar.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)) : d_pillar.call(null,new cljs.core.Keyword(null,"start-date","start-date",295168731)));
var dm = (function (){var fexpr__29010 = bazicljs.bazi.day_pillar(nl_pillars);
return (fexpr__29010.cljs$core$IFn$_invoke$arity$1 ? fexpr__29010.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)) : fexpr__29010.call(null,new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)));
})();
var hours = bazicljs.calendar.hour_pillars(d_start);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,hours);
var end_dates = start_dates;
var pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,hours);
var jiazis = cljs.core.map.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.jiazi_id,pillars);
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29009_SHARP_){
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd HH:mm"),p1__29009_SHARP_);
}),start_dates);
var voids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.is_void_QMARK_,dm),branches);
var pillars__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"h","h",1109658740)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end-date","end-date",-208259642)),end_dates,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"void","void",-2084626863)),voids], 0));
var relations = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,nl_pillars),pillars__$1);
var relations__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),relations);
var qi_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,nl_pillars),pillars__$1);
var pillars__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,pillars__$1,relations__$1,qi_stages);
return bazicljs.bazi.pillars_to_map(pillars__$2);
});
bazicljs.bazi.chart = (function bazicljs$bazi$chart(date,is_male,no_hour){
var natal = bazicljs.bazi.natal_pillars(date,no_hour);
var luck = bazicljs.bazi.luck_pillars(date,is_male,natal);
var g_scores = bazicljs.bazi.god_scores(natal);
var e_scores = bazicljs.bazi.element_scores(g_scores);
var sw_scores = bazicljs.bazi.strong_weak_scores(e_scores);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"strong-weak-scores","strong-weak-scores",1836160992),new cljs.core.Keyword(null,"god-scores","god-scores",1478443745),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"elem-scores","elem-scores",913573904),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"natal-pillars","natal-pillars",1633521909),new cljs.core.Keyword(null,"d","d",1972142424)],[null,sw_scores,g_scores,null,luck,e_scores,null,natal,null]);
});

//# sourceMappingURL=bazicljs.bazi.js.map
