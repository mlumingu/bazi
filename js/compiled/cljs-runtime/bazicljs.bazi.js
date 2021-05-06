goog.provide('bazicljs.bazi');
bazicljs.bazi.cart = (function bazicljs$bazi$cart(colls){
if(cljs.core.empty_QMARK_(colls)){
return cljs.core.list(cljs.core.PersistentHashSet.EMPTY);
} else {
var iter__4529__auto__ = (function bazicljs$bazi$cart_$_iter__30294(s__30295){
return (new cljs.core.LazySeq(null,(function (){
var s__30295__$1 = s__30295;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30295__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var more = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__30295__$1,more,xs__6292__auto__,temp__5735__auto__){
return (function bazicljs$bazi$cart_$_iter__30294_$_iter__30296(s__30297){
return (new cljs.core.LazySeq(null,((function (s__30295__$1,more,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__30297__$1 = s__30297;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__30297__$1);
if(temp__5735__auto____$1){
var s__30297__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30297__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30297__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30299 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30298 = (0);
while(true){
if((i__30298 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__30298);
cljs.core.chunk_append(b__30299,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,x));

var G__30407 = (i__30298 + (1));
i__30298 = G__30407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30299),bazicljs$bazi$cart_$_iter__30294_$_iter__30296(cljs.core.chunk_rest(s__30297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30299),null);
}
} else {
var x = cljs.core.first(s__30297__$2);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,x),bazicljs$bazi$cart_$_iter__30294_$_iter__30296(cljs.core.rest(s__30297__$2)));
}
} else {
return null;
}
break;
}
});})(s__30295__$1,more,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__30295__$1,more,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.first(colls)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,bazicljs$bazi$cart_$_iter__30294(cljs.core.rest(s__30295__$1)));
} else {
var G__30409 = cljs.core.rest(s__30295__$1);
s__30295__$1 = G__30409;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__((function (){var G__30302 = cljs.core.rest(colls);
return (bazicljs.bazi.cart.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi.cart.cljs$core$IFn$_invoke$arity$1(G__30302) : bazicljs.bazi.cart.call(null,G__30302));
})());
}
});
bazicljs.bazi.remove_one = (function bazicljs$bazi$remove_one(elem,coll){
var vec__30307 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,elem),coll);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30307,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30307,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(m,cljs.core.rest(n));
});
bazicljs.bazi.relation_instances = (function bazicljs$bazi$relation_instances(relation,pillars){
var instance = (function bazicljs$bazi$relation_instances_$_instance(rel,pillar){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(rel),new cljs.core.Keyword(null,"palaces","palaces",1439361606),(new cljs.core.List(null,new cljs.core.Keyword(null,"palace","palace",-1827494949).cljs$core$IFn$_invoke$arity$1(pillar),null,(1),null))], null);
});
if(cljs.core.truth_(new cljs.core.Keyword(null,"pairs?","pairs?",-1059529004).cljs$core$IFn$_invoke$arity$1(relation))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instance,relation),pillars);
} else {
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(relation),new cljs.core.Keyword(null,"palaces","palaces",1439361606),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"palace","palace",-1827494949),pillars)], null),null,(1),null));
}
});
bazicljs.bazi.relation = (function bazicljs$bazi$relation(pillar,pillars,relation){
var idtype = new cljs.core.Keyword(null,"idtype","idtype",-217377845).cljs$core$IFn$_invoke$arity$1(relation);
var id = (idtype.cljs$core$IFn$_invoke$arity$1 ? idtype.cljs$core$IFn$_invoke$arity$1(pillar) : idtype.call(null,pillar));
var rids = new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(relation);
var id_in_r = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([id]),rids);
if(cljs.core.truth_(id_in_r)){
var other_rids = bazicljs.bazi.remove_one(id,rids);
var matches = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30312_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(idtype.cljs$core$IFn$_invoke$arity$1 ? idtype.cljs$core$IFn$_invoke$arity$1(p1__30312_SHARP_) : idtype.call(null,p1__30312_SHARP_))]),other_rids);
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
var vec__30321 = cljs.core.split_at(pos,coll__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30321,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(b),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.rest(b))], null);
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(separate_at,coll),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(coll)));
});
bazicljs.bazi.relations2 = (function bazicljs$bazi$relations2(rels,pillars,pillar){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,pillar,pillars),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rels], 0));
});
bazicljs.bazi.relations = (function bazicljs$bazi$relations(relations,pillars){
var iter__4529__auto__ = (function bazicljs$bazi$relations_$_iter__30329(s__30331){
return (new cljs.core.LazySeq(null,(function (){
var s__30331__$1 = s__30331;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__30331__$1);
if(temp__5735__auto__){
var s__30331__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30331__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30331__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30336 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30334 = (0);
while(true){
if((i__30334 < size__4528__auto__)){
var vec__30339 = cljs.core._nth(c__4527__auto__,i__30334);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(1),null);
cljs.core.chunk_append(b__30336,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,p,ps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([relations], 0)));

var G__30423 = (i__30334 + (1));
i__30334 = G__30423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30336),bazicljs$bazi$relations_$_iter__30329(cljs.core.chunk_rest(s__30331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30336),null);
}
} else {
var vec__30344 = cljs.core.first(s__30331__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(0),null);
var ps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30344,(1),null);
return cljs.core.cons(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relation,p,ps),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([relations], 0)),bazicljs$bazi$relations_$_iter__30329(cljs.core.rest(s__30331__$2)));
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
bazicljs.bazi.stems_qi = (function bazicljs$bazi$stems_qi(time_pillar,pillar){
var t_bid = new cljs.core.Keyword(null,"branch","branch",-74633925).cljs$core$IFn$_invoke$arity$1(time_pillar);
var sid = new cljs.core.Keyword(null,"stem","stem",-1293996747).cljs$core$IFn$_invoke$arity$1(pillar);
var bid = new cljs.core.Keyword(null,"branch","branch",-74633925).cljs$core$IFn$_invoke$arity$1(pillar);
var bsid = (bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,bid));
var hsids = (bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.HIDDEN_STEMS.call(null,bid));
var s_qi = bazicljs.bazi_util.stem_qi(t_bid,sid);
var b_qi = bazicljs.bazi_util.stem_qi(t_bid,bsid);
var j_qi = bazicljs.bazi_util.jiazi_qi(t_bid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sid,bid], null));
var hss_qi = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi_util.stem_qi,t_bid),hsids);
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[s_qi,b_qi,j_qi,hss_qi],null));
});
bazicljs.bazi.pillars_stems_qi = (function bazicljs$bazi$pillars_stems_qi(pillars,time_pillar){
var stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.stems_qi,time_pillar),pillars);
var r_stages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30354_SHARP_){
return bazicljs.bazi.stems_qi(p1__30354_SHARP_,time_pillar);
}),pillars);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qi-stages","qi-stages",-570238647),stages,new cljs.core.Keyword(null,"r-qi-stages","r-qi-stages",1568161951),r_stages], null);
});
bazicljs.bazi.stem_score = (function bazicljs$bazi$stem_score(id,pos,total){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(100)], null);
} else {
var G__30358 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,total], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(100)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(80)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(3)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(60)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(3)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),G__30358)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(20)], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30358)].join('')));

}
}
}
}
}
}
}
});
bazicljs.bazi.pillar_stem_scores = (function bazicljs$bazi$pillar_stem_scores(p__30366){
var map__30368 = p__30366;
var map__30368__$1 = (((((!((map__30368 == null))))?(((((map__30368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30368):map__30368);
var sid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30368__$1,new cljs.core.Keyword(null,"stem","stem",-1293996747));
var bid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30368__$1,new cljs.core.Keyword(null,"branch","branch",-74633925));
var palace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30368__$1,new cljs.core.Keyword(null,"palace","palace",-1827494949));
var hsids = (bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.HIDDEN_STEMS.cljs$core$IFn$_invoke$arity$1(bid) : bazicljs.bazi_util.HIDDEN_STEMS.call(null,bid));
var num_hstems = cljs.core.count(hsids);
var sids = cljs.core.cons(sid,hsids);
var triples = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.list,sids,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(num_hstems));
var triples2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(palace,new cljs.core.Keyword(null,"D","D",-8015893)))?cljs.core.rest(triples):triples);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,bazicljs.bazi.stem_score),triples2);
});
bazicljs.bazi.update_scores = (function bazicljs$bazi$update_scores(scores,p__30376){
var vec__30380 = p__30376;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30380,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30380,(1),null);
var cur_score = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(scores,i);
var new_score = (cur_score + score);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(scores,i,new_score);
});
bazicljs.bazi.stem_scores = (function bazicljs$bazi$stem_scores(pillars){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.update_scores,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(bazicljs.bazi.pillar_stem_scores,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pillars], 0)));
});
bazicljs.bazi.god_scores = (function bazicljs$bazi$god_scores(pillars){
var dm = new cljs.core.Keyword(null,"stem","stem",-1293996747).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pillars,(1)));
var mbid = new cljs.core.Keyword(null,"branch","branch",-74633925).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pillars,(2)));
var s_scores = bazicljs.bazi.stem_scores(pillars);
var multipliers = bazicljs.bazi_util.score_multipliers(mbid);
var stem_gods = bazicljs.bazi_util.stem_gods(dm);
var empty_god_scores = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
var m_s_scores = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,s_scores,multipliers);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,bazicljs.bazi_util.dm_score_correction_multipliers,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.update_scores,empty_god_scores,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,bazicljs.bazi_util.stem_gods(dm),m_s_scores)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + r),((o + w) + i)], null);
});
bazicljs.bazi.natal_pillars = (function bazicljs$bazi$natal_pillars(date){
var solar = bazicljs.calendar.gregorian_to_solar(date);
var stems = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),solar);
var branches = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(solar));
var slugs = bazicljs.calendar.natal_slugs(date);
var jiazis = bazicljs.bazi.jiazis(stems,branches);
var palaces = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),bazicljs.bazi_util.palace_keys);
var pillars = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),palaces], 0));
var rels = bazicljs.bazi.relations(bazicljs.bazi_util.natal_relations,pillars);
var qi = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,pillars),pillars);
var extras = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),rels);
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,pillars,extras,qi);
});
bazicljs.bazi.luck_pillars = (function bazicljs$bazi$luck_pillars(date,is_male,natals){
var pillars = bazicljs.calendar.luck_pillars(date,is_male);
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var jiazis = bazicljs.bazi.jiazis(stems,branches);
var start_ages = bazicljs.calendar.luck_pillar_start_ages(date,is_male);
var start_dates = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30403_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(p1__30403_SHARP_));
}),start_ages);
var start_years = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30405_SHARP_){
return cljs_time.core.year(p1__30405_SHARP_);
}),start_dates);
var slugs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.str,start_ages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" - "),start_years);
var lucks = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"l","l",1395893423)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-age","start-age",1041343996)),start_ages,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start-date","start-date",295168731)),start_dates], 0));
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,natals),lucks);
var qi = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,natals),lucks);
var extras = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),rels);
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,lucks,extras,qi);
});
bazicljs.bazi.year_pillars = (function bazicljs$bazi$year_pillars(date,natals){
var year = cljs_time.core.year(date);
var pillars = bazicljs.calendar.year_pillars((year - (1)),(year + (100)));
var stems = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pillars);
var branches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pillars);
var jiazis = bazicljs.bazi.jiazis(stems,branches);
var slugs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((year - (1)),(year + (100)));
var yps = cljs.core.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stem","stem",-1293996747)),stems,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"branch","branch",-74633925)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branches,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"jiazi","jiazi",1464744660)),jiazis,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"slug","slug",2029314850)),slugs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"palace","palace",-1827494949)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776))], 0));
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(bazicljs.bazi.relations2,bazicljs.bazi_util.relations,natals),yps);
var qi = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bazicljs.bazi.pillars_stems_qi,natals),yps);
var extras = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"relations","relations",-427124442)),rels);
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,yps,extras,qi);
});
bazicljs.bazi.chart = (function bazicljs$bazi$chart(date,is_male){
var natal = bazicljs.bazi.natal_pillars(date);
var luck = cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),bazicljs.bazi.luck_pillars(date,is_male,natal));
var year = bazicljs.bazi.year_pillars(date,natal);
var g_scores = bazicljs.bazi.god_scores(natal);
var e_scores = bazicljs.bazi.element_scores(g_scores);
var sw_scores = bazicljs.bazi.strong_weak_scores(e_scores);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"natal-pillars","natal-pillars",1633521909),natal,new cljs.core.Keyword(null,"luck-pillars","luck-pillars",180994294),luck,new cljs.core.Keyword(null,"year-pillars","year-pillars",233283438),year,new cljs.core.Keyword(null,"god-scores","god-scores",1478443745),g_scores,new cljs.core.Keyword(null,"elem-scores","elem-scores",913573904),e_scores,new cljs.core.Keyword(null,"strong-weak-scores","strong-weak-scores",1836160992),sw_scores], null);
});

//# sourceMappingURL=bazicljs.bazi.js.map
