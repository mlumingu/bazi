goog.provide('bazicljs.bazi_util');
bazicljs.bazi_util.STEM_NAMES = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jia","Yi","Bing","Ding","Wu","Ji","Geng","Xin","Ren","Gui"], null);
bazicljs.bazi_util.STEM_HTML = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678"], null);
bazicljs.bazi_util.BRANCH_NAMES = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Zi","Chou","Yin","Mao","Chen","Si","Wu","Wei","Shen","You","Xu","Hai"], null);
bazicljs.bazi_util.BRANCH_HTML = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5"], null);
bazicljs.bazi_util.POLARITY_NAMES = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Yin","Yang"], null);
bazicljs.bazi_util.ELEMENT_NAMES = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wood","Fire","Earth","Metal","Water"], null);
bazicljs.bazi_util.GOD_NAMES = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["FR","RW","EG","HO","IW","DW","7K","DO","IR","DR"], null);
bazicljs.bazi_util.FIVE_FACTOR_NAMES = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Friends","Output","Wealth","Influence","Resource"], null);
bazicljs.bazi_util.HIDDEN_STEMS = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(7),(9)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(2)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(9),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(3),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),(4),(8)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(0)], null)], null);
bazicljs.bazi_util.STEM_FROM_BRANCH = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(5),(0),(1),(4),(3),(2),(5),(6),(7),(4),(9)], null);
bazicljs.bazi_util.hidden_stems = (function bazicljs$bazi_util$hidden_stems(branch){
return (bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(branch) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,branch));
});
bazicljs.bazi_util.stem_polarity = (function bazicljs$bazi_util$stem_polarity(stem){
return cljs.core.rem(stem,(2));
});
bazicljs.bazi_util.branch_polarity = (function bazicljs$bazi_util$branch_polarity(branch){
return bazicljs.bazi_util.stem_polarity((bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(branch) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,branch)));
});
bazicljs.bazi_util.stem_element = (function bazicljs$bazi_util$stem_element(stem){
return cljs.core.quot(stem,(2));
});
bazicljs.bazi_util.branch_element = (function bazicljs$bazi_util$branch_element(branch){
var stem = (bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(branch) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,branch));
return cljs.core.quot(stem,(2));
});
bazicljs.bazi_util.stem_god = (function bazicljs$bazi_util$stem_god(stem,daymaster){
var s_elem = bazicljs.bazi_util.stem_element(stem);
var s_pol = bazicljs.bazi_util.stem_polarity(stem);
var dm_elem = bazicljs.bazi_util.stem_element(daymaster);
var dm_pol = bazicljs.bazi_util.stem_polarity(daymaster);
var factor = cljs.core.rem((s_elem + ((5) - dm_elem)),(5));
var delta_pol = cljs.core.rem((s_pol + ((2) - dm_pol)),(2));
return ((2) * (factor + delta_pol));
});
bazicljs.bazi_util.branch_god = (function bazicljs$bazi_util$branch_god(branch,daymaster){
var stem = (bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1 ? bazicljs.bazi_util.STEM_FROM_BRANCH.cljs$core$IFn$_invoke$arity$1(branch) : bazicljs.bazi_util.STEM_FROM_BRANCH.call(null,branch));
return bazicljs.bazi_util.stem_god(stem,daymaster);
});

//# sourceMappingURL=bazicljs.bazi-util.js.map
